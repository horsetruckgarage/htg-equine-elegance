-- Grant admin and user roles to the specified email if the user exists
-- Admin email provided: info@horsetruckgarage.com

-- Ensure base 'user' role
INSERT INTO public.user_roles (user_id, role)
SELECT u.id, 'user'::public.app_role
FROM auth.users u
LEFT JOIN public.user_roles ur ON ur.user_id = u.id AND ur.role = 'user'
WHERE ur.user_id IS NULL
  AND lower(u.email) = lower('info@horsetruckgarage.com');

-- Ensure 'admin' role
INSERT INTO public.user_roles (user_id, role)
SELECT u.id, 'admin'::public.app_role
FROM auth.users u
LEFT JOIN public.user_roles ur ON ur.user_id = u.id AND ur.role = 'admin'
WHERE ur.user_id IS NULL
  AND lower(u.email) = lower('info@horsetruckgarage.com');