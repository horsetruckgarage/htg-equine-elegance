-- Add multilingual description columns to vehicles
ALTER TABLE public.vehicles
  ADD COLUMN IF NOT EXISTS description_fr TEXT,
  ADD COLUMN IF NOT EXISTS description_en TEXT,
  ADD COLUMN IF NOT EXISTS description_es TEXT,
  ADD COLUMN IF NOT EXISTS description_de TEXT;

-- Backfill French column from existing description field
UPDATE public.vehicles
SET description_fr = COALESCE(description_fr, description)
WHERE description IS NOT NULL
  AND (description_fr IS NULL OR description_fr = '');

-- Optional: ensure updated_at is touched when we later update descriptions (handled by existing defaults/triggers if any)
