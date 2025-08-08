-- Ensure trigger exists to assign default roles on user signup
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'on_auth_user_created'
  ) THEN
    CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_new_user_roles();
  END IF;
END $$;

-- Backfill: ensure every existing user has the 'user' role
INSERT INTO public.user_roles (user_id, role)
SELECT u.id, 'user'::app_role
FROM auth.users u
ON CONFLICT (user_id, role) DO NOTHING;

-- Backfill: grant 'admin' role to the official admin email(s)
INSERT INTO public.user_roles (user_id, role)
SELECT u.id, 'admin'::app_role
FROM auth.users u
WHERE lower(u.email) IN (
  lower('info@horsetruckgarage.com')
)
ON CONFLICT (user_id, role) DO NOTHING;