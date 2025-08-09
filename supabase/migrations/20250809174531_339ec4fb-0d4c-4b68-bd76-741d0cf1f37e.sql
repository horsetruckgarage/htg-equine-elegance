-- Add multilingual name columns to vehicles
ALTER TABLE public.vehicles
  ADD COLUMN IF NOT EXISTS name_fr TEXT,
  ADD COLUMN IF NOT EXISTS name_en TEXT,
  ADD COLUMN IF NOT EXISTS name_es TEXT,
  ADD COLUMN IF NOT EXISTS name_de TEXT;

-- Backfill French column from existing name field
UPDATE public.vehicles
SET name_fr = COALESCE(name_fr, name)
WHERE name IS NOT NULL
  AND (name_fr IS NULL OR name_fr = '');