-- Insérer le véhicule principal
INSERT INTO vehicles (
  type, 
  name, 
  price, 
  year, 
  mileage, 
  capacity, 
  transmission, 
  fuel, 
  power, 
  description, 
  available, 
  featured
) VALUES (
  'truck',
  'MAN TGL 10.210 - Transport 4 Chevaux',
  99000,
  2006,
  202000,
  '4 chevaux',
  'manuelle',
  'diesel',
  '210 CV',
  'Châssis robuste en aluminium (10T, Euro III), suspensions pneumatiques, peinture blanche, boîte manuelle, clim, régulateur, caméra de recul. Espace chevaux pour 4, séparations réglables inox/aluminium, aérateurs, fenêtres teintées, sellerie avec rangements, coffres techniques. Options : spoiler arrière, jupes, crochet d''attelage 3,5T, vidéos embarquées. Appartement de luxe 4 couchages : lit capucine, canapé cuir, cuisine équipée (frigo, micro-ondes, évier inox), douche, WC, nombreux rangements. Chauffage diesel, clim réversible, TV écran plat, antenne satellite, vitrage isolé. Disponible immédiatement, excellent état général.',
  true,
  true
);

-- Récupérer l'ID du véhicule créé pour les relations
DO $$
DECLARE
    vehicle_uuid UUID;
BEGIN
    -- Récupérer l'ID du véhicule MAN
    SELECT id INTO vehicle_uuid 
    FROM vehicles 
    WHERE name = 'MAN TGL 10.210 - Transport 4 Chevaux' 
    ORDER BY created_at DESC 
    LIMIT 1;

    -- Insérer les images
    INSERT INTO vehicle_images (vehicle_id, image_url, is_primary, sort_order, alt_text) VALUES
    (vehicle_uuid, '/lovable-uploads/47652531-7913-4cc4-89bc-5bace8c21649.png', true, 1, 'MAN TGL 10.210 vue extérieure avant'),
    (vehicle_uuid, '/lovable-uploads/61afacb3-fa17-4074-8096-a5f15469b567.png', false, 2, 'MAN TGL 10.210 vue extérieure latérale'),
    (vehicle_uuid, '/lovable-uploads/8f299ca6-a4b4-4126-ae1a-868b6305b4fd.png', false, 3, 'MAN TGL 10.210 vue arrière avec inscription HORSES'),
    (vehicle_uuid, '/lovable-uploads/49989ad7-899c-483e-8dfc-361794134dc3.png', false, 4, 'Espace chevaux avec rampe d''accès'),
    (vehicle_uuid, '/lovable-uploads/d46afa18-6af6-4e2a-af73-8da48986d2b0.png', false, 5, 'Salon intérieur avec banquettes cuir'),
    (vehicle_uuid, '/lovable-uploads/dbdb8119-995b-4663-8b26-0bbd3550b2fa.png', false, 6, 'Cuisine équipée avec micro-ondes'),
    (vehicle_uuid, '/lovable-uploads/878e9495-a33e-4bc8-8deb-2a15ba8d4d21.png', false, 7, 'Lit capucine et espace de vie'),
    (vehicle_uuid, '/lovable-uploads/a5eb8860-8eff-467b-b498-f96aa58c0d93.png', false, 8, 'Micro-ondes et télévision'),
    (vehicle_uuid, '/lovable-uploads/aabb482e-5c4c-4d3c-aec0-be3d728c91f2.png', false, 9, 'Salle de douche avec robinetterie'),
    (vehicle_uuid, '/lovable-uploads/d16c7934-96be-42d9-a9b2-e75ed25eddfb.png', false, 10, 'Poste de conduite avec volant MAN');

    -- Insérer les caractéristiques
    INSERT INTO vehicle_features (vehicle_id, feature) VALUES
    (vehicle_uuid, 'Climatisation réversible'),
    (vehicle_uuid, 'Chauffage WEBASTO diesel'),
    (vehicle_uuid, 'Réservoir d''eau claire'),
    (vehicle_uuid, 'Réservoir d''eaux grises'),
    (vehicle_uuid, 'Spots BT'),
    (vehicle_uuid, 'Vitrage isolé teinté'),
    (vehicle_uuid, 'Batterie additionnelle avec chargeur rapide'),
    (vehicle_uuid, '230 V'),
    (vehicle_uuid, 'Panneau de contrôle'),
    (vehicle_uuid, 'Porte coulissante d''accès chevaux'),
    (vehicle_uuid, 'Porte extérieure avec fenêtre'),
    (vehicle_uuid, 'Escalier escamotable'),
    (vehicle_uuid, 'Châssis MAN TGL 10.210'),
    (vehicle_uuid, 'Carrossage EHC'),
    (vehicle_uuid, 'PTAC 10T'),
    (vehicle_uuid, 'Suspensions pneumatiques'),
    (vehicle_uuid, 'Caméra de recul'),
    (vehicle_uuid, 'Régulateur de vitesse'),
    (vehicle_uuid, 'Séparations réglables inox/aluminium'),
    (vehicle_uuid, 'Sellerie avec rangements'),
    (vehicle_uuid, 'Spoiler arrière'),
    (vehicle_uuid, 'Crochet d''attelage 3,5T'),
    (vehicle_uuid, 'Lit capucine'),
    (vehicle_uuid, 'Canapé cuir'),
    (vehicle_uuid, 'Cuisine équipée complète'),
    (vehicle_uuid, 'Douche et WC'),
    (vehicle_uuid, 'TV écran plat'),
    (vehicle_uuid, 'Antenne satellite');
END $$;