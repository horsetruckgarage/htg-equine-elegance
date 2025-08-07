-- Create INSERT, UPDATE, DELETE policies for vehicles table
CREATE POLICY "Allow authenticated users to insert vehicles" 
ON public.vehicles 
FOR INSERT 
TO authenticated 
WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update vehicles" 
ON public.vehicles 
FOR UPDATE 
TO authenticated 
USING (true);

CREATE POLICY "Allow authenticated users to delete vehicles" 
ON public.vehicles 
FOR DELETE 
TO authenticated 
USING (true);

-- Create INSERT, UPDATE, DELETE policies for vehicle_images table
CREATE POLICY "Allow authenticated users to insert vehicle images" 
ON public.vehicle_images 
FOR INSERT 
TO authenticated 
WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update vehicle images" 
ON public.vehicle_images 
FOR UPDATE 
TO authenticated 
USING (true);

CREATE POLICY "Allow authenticated users to delete vehicle images" 
ON public.vehicle_images 
FOR DELETE 
TO authenticated 
USING (true);

-- Create INSERT, UPDATE, DELETE policies for vehicle_features table
CREATE POLICY "Allow authenticated users to insert vehicle features" 
ON public.vehicle_features 
FOR INSERT 
TO authenticated 
WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update vehicle features" 
ON public.vehicle_features 
FOR UPDATE 
TO authenticated 
USING (true);

CREATE POLICY "Allow authenticated users to delete vehicle features" 
ON public.vehicle_features 
FOR DELETE 
TO authenticated 
USING (true);