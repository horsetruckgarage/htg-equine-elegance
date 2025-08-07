-- Upsert MAN TGL 10.210 vehicle with exact details and images/features
-- Use a fixed UUID to align with existing image updates
DO $$
DECLARE
  v_id uuid := '32e31a5e-9a2a-49c4-ae4e-5c8219bc62ef';
BEGIN
  -- Ensure vehicle exists with accurate data
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
    jsonb_build_object(
      'fr', 'Châssis robuste en aluminium (10T, Euro III), suspensions pneumatiques, peinture blanche, boîte manuelle, clim, régulateur, caméra de recul.\nEspace chevaux pour 4, séparations réglables inox/aluminium, aérateurs, fenêtres teintées, sellerie avec rangements, coffres techniques.\nOptions : spoiler arrière, jupes, crochet d’attelage 3,5T, vidéos embarquées.\nAppartement de luxe 4 couchages : lit capucine, canapé cuir, cuisine équipée (frigo, micro-ondes, évier inox), douche, WC, nombreux rangements.\nChauffage diesel, clim réversible, TV écran plat, antenne satellite, vitrage isolé.\nDisponible immédiatement, excellent état général.',
      'en', 'Robust aluminium chassis (10T, Euro III), air suspension, white paint, manual gearbox, A/C, cruise control, rear camera.\nHorse area for 4 horses, adjustable stainless/aluminium partitions, vents, tinted windows, tack room with storage, technical compartments.\nOptions: rear spoiler, side skirts, 3.5T tow hook, horse and reverse cameras.\nLuxury living space for 4: overcab bed, leather sofa, equipped kitchen (fridge, microwave, stainless sink), shower, toilet, many storage units.\nDiesel heating, reversible air conditioning, flat-screen TV, satellite antenna, insulated glazing.\nAvailable immediately, excellent overall condition.',
      'es', 'Chasis de aluminio robusto (10T, Euro III), suspensión neumática, pintura blanca, caja manual, A/C, control de crucero, cámara de reversa.\nZona para 4 caballos, separadores ajustables en acero/inox, ventilación, ventanas tintadas, guadarnés con almacenaje, compartimentos técnicos.\nOpciones: alerón trasero, faldones, enganche de remolque 3,5T, cámaras de caballos y marcha atrás.\nApartamento de lujo para 4 personas: cama capuchina, sofá de cuero, cocina equipada (frigorífico, microondas, fregadero inox), ducha, WC, mucho espacio de almacenamiento.\nCalefacción diésel, aire acondicionado reversible, TV pantalla plana, antena satelital, cristales aislantes.\nDisponible de inmediato, en excelente estado general.',
      'de', 'Robuster Aluminiumrahmen (10T, Euro III), Luftfederung, weiße Lackierung, Schaltgetriebe, Klimaanlage, Tempomat, Rückfahrkamera.\nPferdebereich für 4 Pferde, verstellbare Edelstahl-/Alu-Trennwände, Belüftung, getönte Fenster, Sattelkammer mit Stauraum, Technikfächer.\nExtras: Heckspoiler, Seitenschürzen, 3,5T Anhängerkupplung, Kameras für Pferde und Rückfahrt.\nLuxus-Wohnbereich für 4 Personen: Alkovenbett, Ledersofa, ausgestattete Küche (Kühlschrank, Mikrowelle, Edelstahlspüle), Dusche, WC, viel Stauraum.\nDieselheizung, umkehrbare Klimaanlage, Flachbildfernseher, Satellitenschüssel, Isolierverglasung.\nSofort verfügbar, sehr guter Allgemeinzustand.'
    ),
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

  -- Reset and insert features (equipements)
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

  -- Prepare image slots 1..10 if not present, then update URLs
  -- Ensure 10 rows exist for this vehicle with sort_order 1..10
  FOR i IN 1..10 LOOP
    INSERT INTO public.vehicle_images (vehicle_id, sort_order, image_url)
    VALUES (v_id, i, '')
    ON CONFLICT (vehicle_id, sort_order) DO NOTHING;
  END LOOP;

  -- Set correct image URLs in required order (first is primary in UI ordering)
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
END $$;
