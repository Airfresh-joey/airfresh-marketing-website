import { useState, useEffect } from 'react';

interface CaseStudyImageProps {
  src: string;
  alt: string;
  className?: string;
  client: string;
  loading?: 'lazy' | 'eager';
  location?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  campaign?: string;
}

// Stock photo fallbacks for each client
const getStockFallback = (client: string): string => {
  const clientLower = client.toLowerCase();
  
  if (clientLower.includes('microsoft')) {
    return 'https://images.unsplash.com/photo-1566933293069-b55dc0a4e7de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  }
  if (clientLower.includes('netflix')) {
    return 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  }
  if (clientLower.includes('apple')) {
    return 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  }
  if (clientLower.includes('mrbeast')) {
    return 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  }
  if (clientLower.includes('mac') && clientLower.includes('cosmetic')) {
    return 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  }
  if (clientLower.includes('buffalo') && clientLower.includes('wild')) {
    return 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  }
  if (clientLower.includes('williams') || (clientLower.includes('racing') && !clientLower.includes('formula'))) {
    return 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  }
  if (clientLower.includes('formula') || clientLower.includes('las vegas')) {
    return 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  }
  if (clientLower.includes('cirque')) {
    return 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  }
  if (clientLower.includes('nissan')) {
    return 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  }
  if (clientLower.includes('clarins')) {
    return 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  }
  if (clientLower.includes('1800') || clientLower.includes('tequila')) {
    return 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  }
  if (clientLower.includes('waiakea') || (clientLower.includes('water') && !clientLower.includes('car'))) {
    return 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  }
  if (clientLower.includes('topps') || clientLower.includes('trading')) {
    return 'https://images.unsplash.com/photo-1594736797933-d0280ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  }
  if (clientLower.includes('wagamama')) {
    return 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  }
  if (clientLower.includes('culinary dropout')) {
    return 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  }
  if (clientLower.includes('byoma')) {
    return 'https://images.unsplash.com/photo-1570194065650-d99c79498227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  }
  if (clientLower.includes('katjes')) {
    return 'https://images.unsplash.com/photo-1549007908-b5ba11ce1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  }
  if (clientLower.includes('peelzon')) {
    return 'https://images.unsplash.com/photo-1556228852-4c3d6b5cf94e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  }
  if (clientLower.includes('ted')) {
    return 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  }
  if (clientLower.includes('polaris')) {
    return 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  }
  if (clientLower.includes('car') && clientLower.includes('wash')) {
    return 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  }
  if (clientLower.includes('skinny mixes')) {
    return 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  }
  if (clientLower.includes('solar')) {
    return 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  }
  if (clientLower.includes('bond vet')) {
    return 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  }
  if (clientLower.includes('brooklyn magazine')) {
    return 'https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  }
  if (clientLower.includes('paradise body')) {
    return 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  }
  if (clientLower.includes('cortie') || clientLower.includes('digital yalo')) {
    return 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  }
  if (clientLower.includes('qwuick')) {
    return 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  }
  if (clientLower.includes('golf') || clientLower.includes('sun club')) {
    return 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  }
  
  // Default professional event image
  return 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
};

export default function CaseStudyImage({ 
  src, 
  alt, 
  className, 
  client, 
  loading = 'lazy',
  location = 'nationwide',
  width = 800,
  height = 600,
  priority = false,
  campaign = 'brand activation'
}: CaseStudyImageProps) {
  const [imageSrc, setImageSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setImageSrc(src);
    setHasError(false);
    setIsLoading(true);
  }, [src]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImageSrc(getStockFallback(client));
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  // Generate concise, descriptive alt text (for accessibility)
  const generateAltText = () => {
    // Alt text should describe what's in the image, not be SEO keyword soup
    // Keep it under 80 characters and descriptive
    if (alt && alt.length > 0) {
      return alt; // Use provided alt text if available
    }
    // Simple, descriptive fallback
    const baseAlt = `${client} ${campaign}`;
    if (location && location !== 'nationwide') {
      return `${baseAlt} at ${location}`.trim();
    }
    return baseAlt.trim();
  };

  // Title can contain more SEO keywords
  const generateTitle = () => {
    return `${client} ${campaign} - ${location} - AirFresh Marketing`;
  };

  const imageCaption = `Brand ambassadors and event staffing for ${client} experiential marketing activation ${location}`;

  return (
    <figure className={`relative ${className}`} itemScope itemType="https://schema.org/ImageObject">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <img
        src={imageSrc}
        alt={generateAltText()}
        title={generateTitle()}
        className={className}
        onError={handleError}
        onLoad={handleLoad}
        loading={priority ? 'eager' : loading}
        decoding="async"
        width={width}
        height={height}
        style={{ display: isLoading ? 'none' : 'block' }}
        itemProp="contentUrl"
      />
      <meta itemProp="name" content={generateTitle()} />
      <meta itemProp="description" content={imageCaption} />
      {/* Keywords in meta tags for SEO, not in alt text */}
      <meta itemProp="keywords" content={`${client}, experiential marketing, brand ambassadors, event staffing, guerrilla marketing, sampling, brand activation, ${location}`} />
      <figcaption className="sr-only" itemProp="caption">
        {imageCaption}
      </figcaption>
    </figure>
  );
}