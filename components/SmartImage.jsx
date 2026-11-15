'use client';
import { useEffect, useState } from 'react';

// Place me.jpeg / std.jpeg / bazar.jpeg / fit.jpeg inside public/.
// Until then, a designed illustration is shown instead of a broken image.
export default function SmartImage({ src, fallback, alt, className = '' }) {
  const [currentSrc, setCurrentSrc] = useState(src);
  useEffect(() => { setCurrentSrc(src); }, [src]);
  return <img className={className} src={currentSrc} alt={alt} loading="lazy" decoding="async" onError={() => { if (fallback && currentSrc !== fallback) setCurrentSrc(fallback); }} />;
}
