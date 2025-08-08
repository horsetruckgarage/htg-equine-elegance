-- Ensure trigger to assign roles on new auth users
-- Create trigger to call handle_new_user_roles() when a new user signs up
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.handle_new_user_roles();

-- Backfill roles for existing users
-- 1) Ensure every user has the 'user' role
INSERT INTO public.user_roles (user_id, role)
SELECT u.id, 'user'::public.app_role
FROM auth.users u
LEFT JOIN public.user_roles ur ON ur.user_id = u.id AND ur.role = 'user'
WHERE ur.user_id IS NULL;

-- 2) Grant 'admin' role to the official admin email if present
INSERT INTO public.user_roles (user_id, role)
SELECT u.id, 'admin'::public.app_role
FROM auth.users u
LEFT JOIN public.user_roles ur ON ur.user_id = u.id AND ur.role = 'admin'
WHERE ur.user_id IS NULL
  AND lower(u.email) IN (lower('info@horsetruckgarage.com'));
