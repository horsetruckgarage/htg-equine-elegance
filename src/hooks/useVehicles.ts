import { Vehicle, VehicleFilter } from '@/types/vehicle';
import { useVehicles as useSupabaseVehicles, useVehicle as useSupabaseVehicle } from './useSupabaseVehicles';

export const useVehicles = (filter?: VehicleFilter) => {
  return useSupabaseVehicles(filter);
};

export const useVehicle = (id: string) => {
  return useSupabaseVehicle(id);
};