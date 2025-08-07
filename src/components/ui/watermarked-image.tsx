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
          setWatermarkedSrc(src);
          return;
        }

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

            // Position watermark in bottom right corner
            const padding = 15;
            const x = canvas.width - watermarkWidth - padding;
            const y = canvas.height - watermarkHeight - padding;

            // Set transparency (moins transparent pour plus de visibilité)
            ctx.globalAlpha = 0.8;
            
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