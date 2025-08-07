-- Storage policies for bucket 'vehicles' to allow uploads/updates/deletes from the client
-- Note: Bucket is public for reads; these policies enable write operations
DO $$
BEGIN
  -- INSERT policy
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname = 'storage' AND tablename = 'objects' AND policyname = 'Public can upload vehicle images'
  ) THEN
    CREATE POLICY "Public can upload vehicle images"
    ON storage.objects
    FOR INSERT
    WITH CHECK (bucket_id = 'vehicles');
  END IF;

  -- UPDATE policy
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname = 'storage' AND tablename = 'objects' AND policyname = 'Public can update vehicle images'
  ) THEN
    CREATE POLICY "Public can update vehicle images"
    ON storage.objects
    FOR UPDATE
    USING (bucket_id = 'vehicles')
    WITH CHECK (bucket_id = 'vehicles');
  END IF;

  -- DELETE policy
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname = 'storage' AND tablename = 'objects' AND policyname = 'Public can delete vehicle images'
  ) THEN
    CREATE POLICY "Public can delete vehicle images"
    ON storage.objects
    FOR DELETE
    USING (bucket_id = 'vehicles');
  END IF;
END $$;

-- Enable realtime changefeeds for instant UI refresh
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