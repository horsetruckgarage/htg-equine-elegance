-- Corriger les URLs pour pointer vers les bonnes images existantes
UPDATE vehicle_images 
SET image_url = CASE sort_order
  WHEN 1 THEN '/lovable-uploads/2307287b-f2a8-4858-984f-44b3a646dd23.png'
  WHEN 2 THEN '/lovable-uploads/243f1cf5-f2ce-48a8-a2dd-8c9d7334fa5a.png'
  WHEN 3 THEN '/lovable-uploads/2b478b96-e19a-4288-ac04-f0410f56f0bc.png'
  WHEN 4 THEN '/lovable-uploads/35ff85cc-4513-4a11-9b8b-eda640027c91.png'
  WHEN 5 THEN '/lovable-uploads/a0f80a95-a142-4cef-ae8c-1b305dc07a0e.png'
  WHEN 6 THEN '/lovable-uploads/a3bc9f31-af5a-4053-a835-56933ae8d26b.png'
  WHEN 7 THEN '/lovable-uploads/b6a0fada-0b2d-4dfa-bc63-ecf170019c87.png'
  WHEN 8 THEN '/lovable-uploads/b90c9439-0e85-44c0-aa34-cdc82bc8b364.png'
  WHEN 9 THEN '/lovable-uploads/bee66bcd-4af5-4ce6-a9d1-a044053fa657.png'
  WHEN 10 THEN '/lovable-uploads/cf145a57-409b-41c6-9c1d-bc4fb00db3ed.png'
END
WHERE vehicle_id = '32e31a5e-9a2a-49c4-ae4e-5c8219bc62ef';