-- Create enum for application roles (idempotent)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'app_role') THEN
    CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');
  END IF;
END $$;

-- Create user_roles table (idempotent) and enable RLS
CREATE TABLE IF NOT EXISTS public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  UNIQUE (user_id, role)
);
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Only allow users to view their own roles
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'user_roles' AND policyname = 'Users can view their own roles'
  ) THEN
    CREATE POLICY "Users can view their own roles"
    ON public.user_roles
    FOR SELECT
    TO authenticated
    USING (auth.uid() = user_id);
  END IF;
END $$;

-- Role helper function (security definer, avoids recursive RLS)
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles ur
    WHERE ur.user_id = _user_id AND ur.role = _role
  );
$$;

-- Auto-assign roles on signup: base 'user' for everyone, 'admin' for whitelisted emails
CREATE OR REPLACE FUNCTION public.handle_new_user_roles()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth
AS $$
BEGIN
  INSERT INTO public.user_roles(user_id, role)
  VALUES (NEW.id, 'user')
  ON CONFLICT (user_id, role) DO NOTHING;

  IF lower(NEW.email) IN (
    lower('info@horsetruckgarage.com')
  ) THEN
    INSERT INTO public.user_roles(user_id, role)
    VALUES (NEW.id, 'admin')
    ON CONFLICT (user_id, role) DO NOTHING;
  END IF;

  RETURN NEW;
END;
$$;

-- Trigger on new auth.users to assign roles (idempotent)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'on_auth_user_created_assign_roles'
  ) THEN
    CREATE TRIGGER on_auth_user_created_assign_roles
      AFTER INSERT ON auth.users
      FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user_roles();
  END IF;
END $$;

-- Tighten Storage policies for 'vehicles' bucket
-- Drop previously created permissive public write policies if they exist
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname = 'storage' AND tablename = 'objects' AND policyname = 'Public can upload vehicle images'
  ) THEN
    DROP POLICY "Public can upload vehicle images" ON storage.objects;
  END IF;
  IF EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname = 'storage' AND tablename = 'objects' AND policyname = 'Public can update vehicle images'
  ) THEN
    DROP POLICY "Public can update vehicle images" ON storage.objects;
  END IF;
  IF EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname = 'storage' AND tablename = 'objects' AND policyname = 'Public can delete vehicle images'
  ) THEN
    DROP POLICY "Public can delete vehicle images" ON storage.objects;
  END IF;
END $$;

-- Ensure public read access for vehicle images
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname = 'storage' AND tablename = 'objects' AND policyname = 'Vehicle images are publicly accessible'
  ) THEN
    CREATE POLICY "Vehicle images are publicly accessible"
    ON storage.objects
    FOR SELECT
    USING (bucket_id = 'vehicles');
  END IF;
END $$;

-- Allow only admins to write to vehicles bucket
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname = 'storage' AND tablename = 'objects' AND policyname = 'Admins can upload vehicle images'
  ) THEN
    CREATE POLICY "Admins can upload vehicle images"
    ON storage.objects
    FOR INSERT
    TO authenticated
    WITH CHECK (
      bucket_id = 'vehicles' AND public.has_role(auth.uid(), 'admin')
    );
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname = 'storage' AND tablename = 'objects' AND policyname = 'Admins can update vehicle images'
  ) THEN
    CREATE POLICY "Admins can update vehicle images"
    ON storage.objects
    FOR UPDATE
    TO authenticated
    USING (
      bucket_id = 'vehicles' AND public.has_role(auth.uid(), 'admin')
    )
    WITH CHECK (
      bucket_id = 'vehicles' AND public.has_role(auth.uid(), 'admin')
    );
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname = 'storage' AND tablename = 'objects' AND policyname = 'Admins can delete vehicle images'
  ) THEN
    CREATE POLICY "Admins can delete vehicle images"
    ON storage.objects
    FOR DELETE
    TO authenticated
    USING (
      bucket_id = 'vehicles' AND public.has_role(auth.uid(), 'admin')
    );
  END IF;
END $$;

-- Enable realtime for vehicles tables (idempotent)
ALTER TABLE public.vehicles REPLICA IDENTITY FULL;
ALTER TABLE public.vehicle_images REPLICA IDENTITY FULL;
ALTER TABLE public.vehicle_features REPLICA IDENTITY FULL;

DO $$
BEGIN
  BEGIN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.vehicles;
  EXCEPTION WHEN duplicate_object THEN NULL;
  END;
  BEGIN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.vehicle_images;
  EXCEPTION WHEN duplicate_object THEN NULL;
  END;
  BEGIN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.vehicle_features;
  EXCEPTION WHEN duplicate_object THEN NULL;
  END;
END $$;