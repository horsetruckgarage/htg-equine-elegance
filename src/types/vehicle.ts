export interface Vehicle {
  id: string;
  type: 'truck' | 'van' | 'trailer';
  name: string;
  price: string;
  originalPrice?: string;
  year: string;
  mileage: string;
  power: string;
  capacity: string;
  transmission: string;
  fuel: string;
  images: string[];
  features: string[];
  description: {
    fr: string;
    en: string;
    es: string;
    de: string;
  };
  condition: string;
  availability: string;
  featured?: boolean;
  promoted?: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface VehicleFilter {
  type?: 'truck' | 'van' | 'trailer';
  minPrice?: number;
  maxPrice?: number;
  minYear?: number;
  maxYear?: number;
  capacity?: string;
  featured?: boolean;
}