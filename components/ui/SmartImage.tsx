
import React, { useState, useEffect } from 'react';
import { isAssetLoaded, markAssetLoaded } from '../../utils/assetPreloader';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

const SmartImage: React.FC<SmartImageProps> = ({ src, alt, className = "", ...props }) => {
  // CRITICAL FIX: Initialize state based on global cache. 
  // If true, we skip the initial opacity-0 state entirely, preventing white flash.
  const [isLoaded, setIsLoaded] = useState(() => isAssetLoaded(src));
  const [currentSrc, setCurrentSrc] = useState(src);

  // Handle src changes dynamically
  useEffect(() => {
    if (src !== currentSrc) {
        setCurrentSrc(src);
        // If the new src is already cached, show immediately. Otherwise, hide and load.
        setIsLoaded(isAssetLoaded(src));
    }
  }, [src, currentSrc]);

  return (
    <img
      src={currentSrc}
      alt={alt}
      // If already loaded, we still keep the transition class but it starts at opacity-100 so no visual transition occurs.
      // If not loaded, it starts at 0 and transitions to 100 on load.
      className={`${className} transition-opacity duration-700 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      onLoad={(e) => {
        // Mark as loaded in local state AND global cache
        setIsLoaded(true);
        markAssetLoaded(currentSrc);
        if (props.onLoad) props.onLoad(e);
      }}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
};

export default SmartImage;
