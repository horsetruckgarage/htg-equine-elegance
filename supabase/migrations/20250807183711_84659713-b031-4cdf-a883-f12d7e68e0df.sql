-- Corriger les URLs des images pour qu'elles pointent vers le dossier public local
UPDATE vehicle_images 
SET image_url = '/lovable-uploads/' || SUBSTRING(image_url FROM '[^/]+\.png$')
WHERE vehicle_id = '32e31a5e-9a2a-49c4-ae4e-5c8219bc62ef';