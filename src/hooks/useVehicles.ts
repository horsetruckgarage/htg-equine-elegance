import { useState, useEffect } from 'react';
import { Vehicle, VehicleFilter } from '@/types/vehicle';

// Pour l'instant, simuler une API - à remplacer par Supabase
const mockVehicles: Vehicle[] = [
  // Trucks
  {
    id: 1,
    type: 'trucks',
    name: "Renault Master L3H2 - Transport 3 Chevaux",
    price: "68 500€",
    originalPrice: "75 000€",
    year: "2022",
    mileage: "45 000 km",
    power: "170 CV",
    capacity: "3",
    transmission: "automatic",
    fuel: "diesel",
    images: [
      "/lovable-uploads/a3bc9f31-af5a-4053-a835-56933ae8d26b.png",
      "/lovable-uploads/2b478b96-e19a-4288-ac04-f0410f56f0bc.png",
      "/lovable-uploads/35ff85cc-4513-4a11-9b8b-eda640027c91.png"
    ],
    features: ["pneumatic_suspension", "air_conditioning", "tack_compartment", "ventilation_system", "non_slip_flooring", "led_lighting", "backup_camera", "automatic_transmission"],
    description: {
      fr: "Ce magnifique Renault Master a été entièrement aménagé par nos soins pour le transport de 3 chevaux. Véhicule en excellent état, révisé et garanti 12 mois.",
      en: "This magnificent Renault Master has been completely fitted out by us for transporting 3 horses. Vehicle in excellent condition, serviced and guaranteed for 12 months.",
      es: "Esta magnífica Renault Master ha sido completamente acondicionada por nosotros para el transporte de 3 caballos. Vehículo en excelente estado, revisado y garantizado por 12 meses.",
      de: "Dieser herrliche Renault Master wurde von uns vollständig für den Transport von 3 Pferden ausgestattet. Fahrzeug in ausgezeichnetem Zustand, gewartet und 12 Monate garantiert."
    },
    condition: "excellent",
    availability: "available_immediately",
    featured: true
  },
  {
    id: 2,
    type: 'trucks',
    name: "Mercedes Sprinter Premium - 4 Chevaux",
    price: "78 900€",
    originalPrice: "85 000€",
    year: "2023",
    mileage: "28 000 km",
    power: "190 CV",
    capacity: "4",
    transmission: "automatic",
    fuel: "diesel",
    images: [
      "/lovable-uploads/2b478b96-e19a-4288-ac04-f0410f56f0bc.png",
      "/lovable-uploads/35ff85cc-4513-4a11-9b8b-eda640027c91.png",
      "/lovable-uploads/a3bc9f31-af5a-4053-a835-56933ae8d26b.png"
    ],
    features: ["pneumatic_suspension", "air_conditioning", "sleeping_cabin", "gps", "tack_compartment"],
    description: {
      fr: "Mercedes Sprinter premium avec équipements haut de gamme. Idéal pour le transport professionnel de 4 chevaux.",
      en: "Premium Mercedes Sprinter with high-end equipment. Ideal for professional transport of 4 horses.",
      es: "Mercedes Sprinter premium con equipamiento de alta gama. Ideal para el transporte profesional de 4 caballos.",
      de: "Premium Mercedes Sprinter mit hochwertiger Ausstattung. Ideal für den professionellen Transport von 4 Pferden."
    },
    condition: "excellent",
    availability: "available_immediately",
    promoted: true
  },
  // Vans
  {
    id: 3,
    type: 'vans',
    name: "Ford Transit Custom - 2 Chevaux",
    price: "45 900€",
    originalPrice: "49 000€",
    year: "2021",
    mileage: "32 000 km",
    power: "130 CV",
    capacity: "2",
    transmission: "manual",
    fuel: "diesel",
    images: [
      "/lovable-uploads/bee66bcd-4af5-4ce6-a9d1-a044053fa657.png",
      "/lovable-uploads/2307287b-f2a8-4858-984f-44b3a646dd23.png"
    ],
    features: ["non_slip_flooring", "led_lighting", "ventilation", "compact_size"],
    description: {
      fr: "Van Ford Transit parfait pour 2 chevaux. Maniable et économique, idéal pour les déplacements locaux.",
      en: "Perfect Ford Transit van for 2 horses. Maneuverable and economical, ideal for local travel.",
      es: "Furgoneta Ford Transit perfecta para 2 caballos. Manejable y económica, ideal para viajes locales.",
      de: "Perfekter Ford Transit Van für 2 Pferde. Wendig und wirtschaftlich, ideal für lokale Fahrten."
    },
    condition: "very_good",
    availability: "available_immediately"
  },
  // Trailers
  {
    id: 4,
    type: 'trailers',
    name: "Böckmann Comfort - 2 Chevaux",
    price: "28 500€",
    originalPrice: "32 000€",
    year: "2023",
    mileage: "Neuf",
    power: "N/A",
    capacity: "2",
    transmission: "N/A",
    fuel: "N/A",
    images: [
      "/lovable-uploads/b90c9439-0e85-44c0-aa34-cdc82bc8b364.png",
      "/lovable-uploads/a0f80a95-a142-4cef-ae8c-1b305dc07a0e.png"
    ],
    features: ["aluminum", "alko_suspension", "rubber_flooring", "abs_braking"],
    description: {
      fr: "Remorque Böckmann neuve, qualité allemande reconnue. Parfaite pour 2 chevaux avec équipements de sécurité avancés.",
      en: "New Böckmann trailer, recognized German quality. Perfect for 2 horses with advanced safety equipment.",
      es: "Remolque Böckmann nuevo, calidad alemana reconocida. Perfecto para 2 caballos con equipos de seguridad avanzados.",
      de: "Neuer Böckmann Anhänger, anerkannte deutsche Qualität. Perfekt für 2 Pferde mit fortschrittlicher Sicherheitsausrüstung."
    },
    condition: "new",
    availability: "available_immediately",
    featured: true
  }
];

export const useVehicles = (filter?: VehicleFilter) => {
  return useSupabaseVehicles(filter);
};

export const useVehicle = (id: string) => {
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        setLoading(true);
        // TODO: Remplacer par un vrai appel Supabase
        // const { data, error } = await supabase.from('vehicles').select('*').eq('id', id).single();
        
        const vehicleId = parseInt(id);
        const foundVehicle = mockVehicles.find(v => v.id === vehicleId);
        
        await new Promise(resolve => setTimeout(resolve, 300));
        
        setVehicle(foundVehicle || null);
        setError(foundVehicle ? null : 'Véhicule non trouvé');
      } catch (err) {
        setError('Erreur lors du chargement du véhicule');
        console.error('Error fetching vehicle:', err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchVehicle();
    }
  }, [id]);

  return { vehicle, loading, error };
};