import React, { useState, useEffect } from 'react';
import { ImageIcon, ExternalLink } from 'lucide-react';

interface GoogleDriveImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  driveUrl?: string;
}

export function GoogleDriveImage({ 
  src, 
  alt, 
  className = "", 
  fallbackSrc,
  driveUrl
}: GoogleDriveImageProps) {
  const [currentSrc, setCurrentSrc] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [imageUrls] = useState<string[]>(() => {
    // Check if this is already a direct image URL (e.g., from Unsplash or other sources)
    if (src.includes('unsplash.com') || src.includes('images.pexels.com') || 
        src.startsWith('http') && !src.includes('drive.google.com')) {
      // It's already a direct image URL, use it as-is
      return [src, fallbackSrc].filter(Boolean) as string[];
    }
    
    // Extract folder ID from Google Drive URL
    const folderIdMatch = src.match(/folders\/([a-zA-Z0-9-_]+)/);
    const directIdMatch = src.match(/[?&]id=([a-zA-Z0-9-_]+)/);
    
    if (folderIdMatch) {
      const folderId = folderIdMatch[1];
      return [
        // Try Google Drive direct export methods for folders
        `https://drive.google.com/uc?export=view&id=${folderId}`,
        `https://drive.usercontent.google.com/download?id=${folderId}&export=view`,
        `https://lh3.googleusercontent.com/d/${folderId}=w800-h600-no`,
        `https://drive.google.com/thumbnail?id=${folderId}&sz=w800-h600-c`,
        // Fallback
        fallbackSrc || 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ].filter(Boolean);
    } else if (directIdMatch) {
      const fileId = directIdMatch[1];
      return [
        `https://drive.google.com/uc?export=view&id=${fileId}`,
        `https://drive.usercontent.google.com/download?id=${fileId}&export=view`,
        `https://lh3.googleusercontent.com/d/${fileId}=w800-h600-no`,
        src,
        fallbackSrc || 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ].filter(Boolean);
    }
    
    return [src, fallbackSrc].filter(Boolean) as string[];
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageError = () => {
    console.log(`Image failed to load: ${currentSrc}`);
    
    if (currentIndex < imageUrls.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setCurrentSrc(imageUrls[nextIndex] || src);
      setIsLoading(true);
      setHasError(false);
    } else {
      setHasError(true);
      setIsLoading(false);
    }
  };

  const handleImageLoad = () => {
    console.log(`Image loaded successfully: ${currentSrc}`);
    setIsLoading(false);
    setHasError(false);
  };

  useEffect(() => {
    setCurrentIndex(0);
    setCurrentSrc(imageUrls[0] || src);
    setIsLoading(true);
    setHasError(false);
  }, [src, imageUrls]);

  if (hasError) {
    return (
      <div className={`bg-gray-100 flex flex-col items-center justify-center text-gray-500 ${className}`}>
        <ImageIcon className="h-12 w-12 mb-2" />
        <span className="text-sm text-center mb-3">Image not available</span>
        {driveUrl && (
          <a 
            href={driveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
          >
            <ExternalLink className="h-3 w-3" />
            View in Google Drive
          </a>
        )}
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <img
        src={currentSrc}
        alt={alt}
        onLoad={handleImageLoad}
        onError={handleImageError}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoading ? 'opacity-50' : 'opacity-100'
        }`}
        crossOrigin="anonymous"
        loading="lazy"
      />
      
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      )}
      
      {driveUrl && !hasError && (
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <a 
            href={driveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-black/70 text-white p-1 rounded-full hover:bg-black/90 transition-colors"
          >
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      )}
    </div>
  );
}

export default GoogleDriveImage;