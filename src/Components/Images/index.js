import { forwardRef, useState } from 'react';
import images from '~/assets/images';

const DefaultImage = forwardRef(({ src, alt, ...props }, ref) => {
  const [fallback, setFallback] = useState('');

  const handleError = () => {
    setFallback(images.noImage);
  };

  return <img ref={ref} {...props} src={fallback || src} alt={alt} onError={handleError} />;
});

export default DefaultImage;
