-- Corriger le type du véhicule MAN pour qu'il apparaisse dans la section camions
UPDATE vehicles 
SET type = 'truck' 
WHERE name = 'Camion à chevaux MAN TGL 10.210 - 4 chevaux';