-- Create vehicles table
CREATE TABLE public.vehicles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  type TEXT NOT NULL CHECK (type IN ('truck', 'van', 'trailer')),
  name TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  year INTEGER,
  mileage INTEGER,
  capacity TEXT,
  transmission TEXT,
  fuel TEXT,
  power TEXT,
  description TEXT,
  featured BOOLEAN DEFAULT false,
  available BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create vehicle images table
CREATE TABLE public.vehicle_images (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  vehicle_id UUID NOT NULL REFERENCES public.vehicles(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  alt_text TEXT,
  is_primary BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create vehicle features table
CREATE TABLE public.vehicle_features (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  vehicle_id UUID NOT NULL REFERENCES public.vehicles(id) ON DELETE CASCADE,
  feature TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.vehicles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vehicle_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vehicle_features ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (vehicle catalog is public)
CREATE POLICY "Vehicles are publicly viewable" 
ON public.vehicles 
FOR SELECT 
USING (true);

CREATE POLICY "Vehicle images are publicly viewable" 
ON public.vehicle_images 
FOR SELECT 
USING (true);

CREATE POLICY "Vehicle features are publicly viewable" 
ON public.vehicle_features 
FOR SELECT 
USING (true);

-- Create storage bucket for vehicle images
INSERT INTO storage.buckets (id, name, public) VALUES ('vehicles', 'vehicles', true);

-- Create storage policies for vehicle images
CREATE POLICY "Vehicle images are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'vehicles');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_vehicles_updated_at
BEFORE UPDATE ON public.vehicles
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX idx_vehicles_type ON public.vehicles(type);
CREATE INDEX idx_vehicles_featured ON public.vehicles(featured);
CREATE INDEX idx_vehicles_available ON public.vehicles(available);
CREATE INDEX idx_vehicle_images_vehicle_id ON public.vehicle_images(vehicle_id);
CREATE INDEX idx_vehicle_images_primary ON public.vehicle_images(is_primary);
CREATE INDEX idx_vehicle_features_vehicle_id ON public.vehicle_features(vehicle_id);