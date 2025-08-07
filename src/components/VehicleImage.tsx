interface VehicleImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackIcon?: React.ReactNode;
}

const VehicleImage = ({ src, alt, className, fallbackIcon }: VehicleImageProps) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    img.style.display = 'none';
    
    // Show fallback if parent has one
    const parent = img.parentElement;
    if (parent) {
      const fallback = parent.querySelector('.image-fallback');
      if (fallback) {
        (fallback as HTMLElement).style.display = 'flex';
      }
    }
  };

  return (
    <>
      <img 
        src={src} 
        alt={alt}
        className={className}
        onError={handleImageError}
      />
      {fallbackIcon && (
        <div className="image-fallback w-full h-full bg-gradient-to-br from-leather/30 to-copper/10 flex items-center justify-center" style={{ display: 'none' }}>
          {fallbackIcon}
        </div>
      )}
    </>
  );
};

export default VehicleImage;