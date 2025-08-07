-- Fix migration: avoid ON CONFLICT on (vehicle_id, sort_order) since no unique constraint exists
DO $$
DECLARE
  v_id uuid := '32e31a5e-9a2a-49c4-ae4e-5c8219bc62ef';
BEGIN
  -- Ensure vehicle still has correct data (idempotent)
  INSERT INTO public.vehicles (
    id, type, name, price, year, mileage, capacity, transmission, fuel, power, description, available, featured
  ) VALUES (
    v_id,
    'truck',
    'MAN TGL 10.210 EHC',
    99000,
    2006,
    202000,
    '4',
    'Manuelle',
    'Diesel',
    '210 CV',
    'Châssis robuste en aluminium (10T, Euro III), suspensions pneumatiques, peinture blanche, boîte manuelle, clim, régulateur, caméra de recul.\nEspace chevaux pour 4, séparations réglables inox/aluminium, aérateurs, fenêtres teintées, sellerie avec rangements, coffres techniques.\nOptions : spoiler arrière, jupes, crochet d’attelage 3,5T, vidéos embarquées.\nAppartement de luxe 4 couchages : lit capucine, canapé cuir, cuisine équipée (frigo, micro-ondes, évier inox), douche, WC, nombreux rangements.\nChauffage diesel, clim réversible, TV écran plat, antenne satellite, vitrage isolé.\nDisponible immédiatement, excellent état général.',
    true,
    true
  )
  ON CONFLICT (id) DO UPDATE SET
    type = EXCLUDED.type,
    name = EXCLUDED.name,
    price = EXCLUDED.price,
    year = EXCLUDED.year,
    mileage = EXCLUDED.mileage,
    capacity = EXCLUDED.capacity,
    transmission = EXCLUDED.transmission,
    fuel = EXCLUDED.fuel,
    power = EXCLUDED.power,
    description = EXCLUDED.description,
    available = EXCLUDED.available,
    featured = EXCLUDED.featured;

  -- Ensure exactly 10 image rows exist with sort_order 1..10
  FOR i IN 1..10 LOOP
    IF NOT EXISTS (
      SELECT 1 FROM public.vehicle_images vi WHERE vi.vehicle_id = v_id AND vi.sort_order = i
    ) THEN
      INSERT INTO public.vehicle_images (vehicle_id, sort_order, image_url, is_primary)
      VALUES (v_id, i, '', CASE WHEN i = 1 THEN true ELSE false END);
    END IF;
  END LOOP;

  -- Update image URLs in the required order
  UPDATE public.vehicle_images 
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
  WHERE vehicle_id = v_id;

  -- Reset and re-insert equipment list (idempotent)
  DELETE FROM public.vehicle_features WHERE vehicle_id = v_id;
  INSERT INTO public.vehicle_features (vehicle_id, feature)
  VALUES
    (v_id, 'Climatisation réversible'),
    (v_id, 'Chauffage WEBASTO diesel'),
    (v_id, 'Réservoir d''eau claire'),
    (v_id, 'Réservoir d''eaux grises'),
    (v_id, 'Spots BT'),
    (v_id, 'Vitrage isolé teinté'),
    (v_id, 'Batterie additionnelle avec chargeur rapide'),
    (v_id, '230 V'),
    (v_id, 'Panneau de contrôle'),
    (v_id, 'Porte coulissante d''accès chevaux'),
    (v_id, 'Porte extérieure avec fenêtre'),
    (v_id, 'Escalier escamotable');
END $$;