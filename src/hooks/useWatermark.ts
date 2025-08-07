import { useCallback } from 'react';
import { createClient } from '@supabase/supabase-js';
import { toast } from 'sonner';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export const useWatermark = () => {
  const addWatermarkToImage = useCallback(async (file: File): Promise<File> => {
    try {
      // Create FormData with the image
      const formData = new FormData();
      formData.append('image', file);

      // Call the watermark edge function
      const { data, error } = await supabase.functions.invoke('add-watermark', {
        body: formData,
      });

      if (error) {
        console.error('Error adding watermark:', error);
        toast.error('Erreur lors de l\'ajout du filigrane');
        return file; // Return original file if watermark fails
      }

      // Convert the response blob to a File object
      const watermarkedBlob = new Blob([data], { type: 'image/jpeg' });
      const watermarkedFile = new File(
        [watermarkedBlob], 
        file.name.replace(/\.[^/.]+$/, '_watermarked.jpg'),
        { type: 'image/jpeg' }
      );

      toast.success('Filigrane ajouté avec succès');
      return watermarkedFile;

    } catch (error) {
      console.error('Error in watermark process:', error);
      toast.error('Erreur lors du traitement du filigrane');
      return file; // Return original file if error occurs
    }
  }, []);

  return { addWatermarkToImage };
};