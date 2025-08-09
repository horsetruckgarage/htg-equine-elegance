import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { Vehicle } from '@/types/vehicle';
import { useTranslation } from '@/hooks/useTranslation';
export interface VehicleFilter {
  type?: 'truck' | 'van' | 'trailer';
  featured?: boolean;
}

export const useVehicles = (filter?: VehicleFilter) => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { language } = useTranslation();

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        setLoading(true);
        setError(null);

        let query = supabase
          .from('vehicles')
          .select(`
            *,
            vehicle_images (*),
            vehicle_features (*)
          `)
          .eq('available', true)
          .order('created_at', { ascending: false });

        if (filter?.type) {
          query = query.eq('type', filter.type);
        }

        if (filter?.featured !== undefined) {
          query = query.eq('featured', filter.featured);
        }

        const { data, error } = await query;

        if (error) throw error;

        // Transform data to match Vehicle interface
        const transformedVehicles: Vehicle[] = data.map((vehicle: any) => ({
          id: vehicle.id,
          type: vehicle.type as 'truck' | 'van' | 'trailer',
          name: ((language === 'en' ? (vehicle.name_en ?? '') : language === 'es' ? (vehicle.name_es ?? '') : language === 'de' ? (vehicle.name_de ?? '') : (vehicle.name_fr ?? '')) || vehicle.name_fr || vehicle.name || ''),
          price: vehicle.price.toString(),
          year: vehicle.year?.toString() || '',
          mileage: vehicle.mileage?.toString() || '',
          capacity: vehicle.capacity || '',
          transmission: vehicle.transmission || '',
          fuel: vehicle.fuel || '',
          power: vehicle.power || '',
          description: {
            fr: vehicle.description_fr ?? vehicle.description ?? '',
            en: vehicle.description_en ?? '',
            es: vehicle.description_es ?? '',
            de: vehicle.description_de ?? '',
          },
          condition: 'Excellent',
          availability: 'Disponible',
          featured: vehicle.featured,
          images: (vehicle.vehicle_images || [])
            .sort((a: any, b: any) => a.sort_order - b.sort_order)
            .map((img: any) => img.image_url),
          features: (vehicle.vehicle_features || []).map((f: any) => f.feature),
        }));

        setVehicles(transformedVehicles);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();

    // Subscribe to realtime changes to auto-refresh lists
    const channel = supabase
      .channel('vehicles-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'vehicles' }, fetchVehicles)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'vehicle_images' }, fetchVehicles)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'vehicle_features' }, fetchVehicles)
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [filter?.type, filter?.featured, language]);

  return { vehicles, loading, error };
};

export const useVehicle = (id: string) => {
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { language } = useTranslation();

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        setLoading(true);
        setError(null);

        const { data, error } = await supabase
          .from('vehicles')
          .select(`
            *,
            vehicle_images (*),
            vehicle_features (*)
          `)
          .eq('id', id)
          .eq('available', true)
          .maybeSingle();

        if (error) throw error;
        if (!data) {
          setVehicle(null);
          return;
        }

        // Transform data to match Vehicle interface
        const transformedVehicle: Vehicle = {
          id: data.id,
          type: data.type as 'truck' | 'van' | 'trailer',
          name: ((language === 'en' ? (data.name_en ?? '') : language === 'es' ? (data.name_es ?? '') : language === 'de' ? (data.name_de ?? '') : (data.name_fr ?? '')) || data.name_fr || data.name || ''),
          price: data.price.toString(),
          year: data.year?.toString() || '',
          mileage: data.mileage?.toString() || '',
          capacity: data.capacity || '',
          transmission: data.transmission || '',
          fuel: data.fuel || '',
          power: data.power || '',
          description: {
            fr: data.description_fr ?? data.description ?? '',
            en: data.description_en ?? '',
            es: data.description_es ?? '',
            de: data.description_de ?? '',
          },
          condition: 'Excellent',
          availability: 'Disponible',
          featured: data.featured,
          images: data.vehicle_images
            .sort((a: any, b: any) => a.sort_order - b.sort_order)
            .map((img: any) => img.image_url),
          features: data.vehicle_features.map((f: any) => f.feature),
        };

        setVehicle(transformedVehicle);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchVehicle();

      // Subscribe to realtime changes for this vehicle
      const channel = supabase
        .channel(`vehicle-${id}-changes`)
        .on('postgres_changes', { event: '*', schema: 'public', table: 'vehicles', filter: `id=eq.${id}` }, fetchVehicle)
        .on('postgres_changes', { event: '*', schema: 'public', table: 'vehicle_images', filter: `vehicle_id=eq.${id}` }, fetchVehicle)
        .on('postgres_changes', { event: '*', schema: 'public', table: 'vehicle_features', filter: `vehicle_id=eq.${id}` }, fetchVehicle)
        .subscribe();

      return () => {
        supabase.removeChannel(channel);
      };
    }
  }, [id, language]);

  return { vehicle, loading, error };
};