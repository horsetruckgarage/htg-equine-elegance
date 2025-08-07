import React, { useState, useEffect } from 'react';

interface WatermarkedImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

export const WatermarkedImage: React.FC<WatermarkedImageProps> = ({ 
  src, 
  alt, 
  className, 
  style 
}) => {
  const [watermarkedSrc, setWatermarkedSrc] = useState<string>(src);

  useEffect(() => {
    const addWatermarkToDisplay = async () => {
      try {
        // Skip if already watermarked or if it's the logo itself
        if (src.includes('watermarked') || src.includes('cf145a57-409b-41c6-9c1d-bc4fb00db3ed')) {
          console.log('Skipping watermark for:', src);
          setWatermarkedSrc(src);
          return;
        }

        console.log('Adding watermark to:', src);

        // Create canvas for watermarking
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Load original image
        const img = new Image();
        img.crossOrigin = 'anonymous';
        
        img.onload = async () => {
          canvas.width = img.width;
          canvas.height = img.height;
          
          // Draw original image
          ctx.drawImage(img, 0, 0);

          // Load watermark logo
          const logo = new Image();
          logo.crossOrigin = 'anonymous';
          
          logo.onload = () => {
            // Calculate watermark size (15% of image width, max 150px)
            const watermarkSize = Math.min(canvas.width * 0.15, 150);
            const logoAspectRatio = logo.width / logo.height;
            const watermarkWidth = watermarkSize;
            const watermarkHeight = watermarkSize / logoAspectRatio;

            // Position watermark au centre de l'image
            const x = (canvas.width - watermarkWidth) / 2;
            const y = (canvas.height - watermarkHeight) / 2;

            // Ajouter un fond semi-transparent derrière le logo (centré)
            const backgroundPadding = 12;
            ctx.fillStyle = 'rgba(255, 255, 255, 0.85)'; // Fond blanc plus opaque pour le centre
            ctx.fillRect(
              x - backgroundPadding, 
              y - backgroundPadding, 
              watermarkWidth + (backgroundPadding * 2), 
              watermarkHeight + (backgroundPadding * 2)
            );
            
            // Ajouter une bordure subtile
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
            ctx.lineWidth = 1;
            ctx.strokeRect(
              x - backgroundPadding, 
              y - backgroundPadding, 
              watermarkWidth + (backgroundPadding * 2), 
              watermarkHeight + (backgroundPadding * 2)
            );

            // Set transparency (plus opaque pour plus de visibilité)
            ctx.globalAlpha = 1.0; // Logo complètement opaque
            
            // Draw watermark
            ctx.drawImage(logo, x, y, watermarkWidth, watermarkHeight);
            
            // Convert to data URL
            const watermarkedDataUrl = canvas.toDataURL('image/jpeg', 0.9);
            setWatermarkedSrc(watermarkedDataUrl);
          };
          
          logo.onerror = () => {
            // If watermark fails, use original image
            setWatermarkedSrc(src);
          };
          
          logo.src = '/lovable-uploads/cf145a57-409b-41c6-9c1d-bc4fb00db3ed.png';
        };
        
        img.onerror = () => {
          // If image fails to load, use original src
          setWatermarkedSrc(src);
        };
        
        img.src = src;
        
      } catch (error) {
        console.error('Error adding watermark to display:', error);
        setWatermarkedSrc(src);
      }
    };

    addWatermarkToDisplay();
  }, [src]);

  return (
    <img 
      src={watermarkedSrc} 
      alt={alt} 
      className={className} 
      style={style}
    />
  );
};