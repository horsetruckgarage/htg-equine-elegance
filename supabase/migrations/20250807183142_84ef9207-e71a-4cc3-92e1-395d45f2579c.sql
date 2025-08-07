-- Corriger les URLs des images pour qu'elles pointent vers Supabase Storage
UPDATE vehicle_images 
SET image_url = 'https://cfftjfvrzbbtrjkuzdwa.supabase.co/storage/v1/object/public/vehicles' || SUBSTRING(image_url FROM '/lovable-uploads(.*)$')
WHERE image_url LIKE '/lovable-uploads/%';