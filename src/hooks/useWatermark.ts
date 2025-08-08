import { useCallback } from 'react';
import { createClient } from '@supabase/supabase-js';
import { toast } from 'sonner';

const supabase = createClient(
  'https://cfftjfvrzbbtrjkuzdwa.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmZnRqZnZyemJidHJqa3V6ZHdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1NTE3ODMsImV4cCI6MjA3MDEyNzc4M30.CRq8200xhr3uZelaFB3B1b0Y-EyDGbsKh5FulQovriA'
);

export const useWatermark = () => {
  const addWatermarkToImage = useCallback(async (file: File): Promise<File> => {
    try {
      // Skip watermark for HEIC/HEIF which are not widely supported in canvases/runtime
      const isHeic = /heic|heif/i.test(file.type) || /\.heic$/i.test(file.name)
      if (isHeic) {
        toast.message('Format HEIC détecté — filigrane ignoré');
        return file;
      }

      // Load original image
      const loadImage = (src: string) => new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
      });

      const objectUrl = URL.createObjectURL(file);
      const img = await loadImage(objectUrl);
      URL.revokeObjectURL(objectUrl);

      // Prepare canvas (client-side)
      const MAX = 1920;
      let width = img.naturalWidth;
      let height = img.naturalHeight;
      const scale = Math.min(1, MAX / Math.max(width, height));
      width = Math.round(width * scale);
      height = Math.round(height * scale);

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Canvas context indisponible');
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);

      // Load watermark logo (same-origin)
      const logo = await loadImage('/lovable-uploads/cf145a57-409b-41c6-9c1d-bc4fb00db3ed.png');
      const logoAR = logo.naturalWidth / logo.naturalHeight;
      const watermarkWidth = Math.min(Math.round(width * 0.15), 300);
      const watermarkHeight = Math.round(watermarkWidth / logoAR);

      // Center position
      const x = Math.round((width - watermarkWidth) / 2);
      const y = Math.round((height - watermarkHeight) / 2);

      // Background panel
      const padding = Math.max(8, Math.round(width * 0.008));
      ctx.fillStyle = 'rgba(255,255,255,0.85)';
      ctx.fillRect(x - padding, y - padding, watermarkWidth + padding * 2, watermarkHeight + padding * 2);
      ctx.strokeStyle = 'rgba(0,0,0,0.3)';
      ctx.lineWidth = 1;
      ctx.strokeRect(x - padding, y - padding, watermarkWidth + padding * 2, watermarkHeight + padding * 2);

      // Draw logo
      ctx.globalAlpha = 1;
      ctx.drawImage(logo, x, y, watermarkWidth, watermarkHeight);
      ctx.globalAlpha = 1;

      // Export to JPEG and wrap into File
      const blob: Blob = await new Promise((resolve, reject) =>
        canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('Export JPEG échoué'))), 'image/jpeg', 0.9)
      );

      const watermarkedFile = new File([blob], file.name.replace(/\.[^/.]+$/, '_watermarked.jpg'), { type: 'image/jpeg' });
      toast.success('Filigrane ajouté avec succès');
      return watermarkedFile;

    } catch (error) {
      console.error('Error in watermark process (client):', error);
      toast.error('Erreur lors du traitement du filigrane');
      return file; // Fallback to original file on any error
    }
  }, []);

  return { addWatermarkToImage };
};