import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  structuredData?: Record<string, any>;
}

export default function SEO({ 
  title, 
  description, 
  keywords, 
  canonical,
  ogType = 'website',
  ogImage = 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  structuredData 
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty?: boolean) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let element = document.querySelector(selector) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        if (isProperty) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Basic meta tags
    updateMetaTag('description', description);
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:url', window.location.href, true);
    updateMetaTag('og:site_name', 'AirFresh Marketing', true);

    // Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Additional SEO tags
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('author', 'AirFresh Marketing');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');

    // Canonical URL
    if (canonical) {
      let canonicalElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonicalElement) {
        canonicalElement = document.createElement('link');
        canonicalElement.rel = 'canonical';
        document.head.appendChild(canonicalElement);
      }
      canonicalElement.href = canonical;
    }

    // Structured data
    if (structuredData) {
      let structuredDataElement = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      if (!structuredDataElement) {
        structuredDataElement = document.createElement('script');
        structuredDataElement.type = 'application/ld+json';
        document.head.appendChild(structuredDataElement);
      }
      structuredDataElement.textContent = JSON.stringify(structuredData);
    }

  }, [title, description, keywords, canonical, ogType, ogImage, structuredData]);

  return null;
}