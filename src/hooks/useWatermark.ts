import { useCallback } from 'react';

import { toast } from 'sonner';
// @ts-ignore - heic2any has no TS types
import heic2any from 'heic2any';

export type WatermarkPosition = 'center' | 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';

export const useWatermark = () => {
  const addWatermarkToImage = useCallback(
    async (
      file: File,
      opts?: { position?: WatermarkPosition; opacity?: number; maxSize?: number }
    ): Promise<File> => {
      try {
        const position: WatermarkPosition = opts?.position ?? 'center';
        const opacity = typeof opts?.opacity === 'number' ? Math.min(1, Math.max(0, opts.opacity)) : 1;
        const MAX = opts?.maxSize ?? 1600;

        // Convert HEIC/HEIF to JPEG first
        const isHeic =
          /heic|heif/i.test(file.type) || /\.heic$/i.test(file.name) || /\.heif$/i.test(file.name);
        let baseBlob: Blob = file;
        if (isHeic) {
          try {
            toast.message('Conversion HEIC → JPEG…');
            baseBlob = (await heic2any({ blob: file, toType: 'image/jpeg', quality: 0.85 })) as Blob;
          } catch (convErr) {
            console.error('HEIC conversion failed, using original:', convErr);
            toast.error('Conversion HEIC échouée, image originale utilisée');
          }
        }

        // Load original image (possibly converted)
        const loadImage = (src: string) =>
          new Promise<HTMLImageElement>((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = src;
          });

        const objectUrl = URL.createObjectURL(baseBlob);
        const img = await loadImage(objectUrl);
        URL.revokeObjectURL(objectUrl);

        // Prepare canvas (client-side)
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

        // Load watermark logo with cache
        const logo = await (async () => {
          const w = typeof window !== 'undefined' ? (window as any) : undefined;
          if (w && w.__htgLogo) return w.__htgLogo as HTMLImageElement;
          const l = await loadImage('/lovable-uploads/cf145a57-409b-41c6-9c1d-bc4fb00db3ed.png');
          if (w) w.__htgLogo = l;
          return l;
        })();
        const logoAR = logo.naturalWidth / logo.naturalHeight;
        const watermarkWidth = Math.min(Math.round(width * 0.15), 300);
        const watermarkHeight = Math.round(watermarkWidth / logoAR);

        // Position
        let x = 0,
          y = 0;
        const padding = Math.max(8, Math.round(width * 0.012));
        switch (position) {
          case 'bottom-right':
            x = width - watermarkWidth - padding;
            y = height - watermarkHeight - padding;
            break;
          case 'bottom-left':
            x = padding;
            y = height - watermarkHeight - padding;
            break;
          case 'top-right':
            x = width - watermarkWidth - padding;
            y = padding;
            break;
          case 'top-left':
            x = padding;
            y = padding;
            break;
          default:
            x = Math.round((width - watermarkWidth) / 2);
            y = Math.round((height - watermarkHeight) / 2);
        }

        // Background panel + border
        const bgPad = Math.max(8, Math.round(width * 0.008));
        ctx.fillStyle = `rgba(255,255,255,${Math.min(0.9, 0.75 + opacity * 0.15)})`;
        ctx.fillRect(x - bgPad, y - bgPad, watermarkWidth + bgPad * 2, watermarkHeight + bgPad * 2);
        ctx.strokeStyle = 'rgba(0,0,0,0.3)';
        ctx.lineWidth = 1;
        ctx.strokeRect(x - bgPad, y - bgPad, watermarkWidth + bgPad * 2, watermarkHeight + bgPad * 2);

        // Draw logo
        ctx.globalAlpha = opacity;
        ctx.drawImage(logo, x, y, watermarkWidth, watermarkHeight);
        ctx.globalAlpha = 1;

        // Export to JPEG and wrap into File
        const blob: Blob = await new Promise((resolve, reject) =>
          canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('Export JPEG échoué'))), 'image/jpeg', 0.8)
        );

        const baseName = file.name.replace(/\.[^/.]+$/, '') || 'image';
        const watermarkedFile = new File([blob], `${baseName}_watermarked.jpg`, { type: 'image/jpeg' });
        
        return watermarkedFile;
      } catch (error) {
        console.error('Error in watermark process (client):', error);
        toast.error('Erreur lors du traitement du filigrane');
        return file; // Fallback to original file on any error
      }
    },
    []
  );

  return { addWatermarkToImage };
};
