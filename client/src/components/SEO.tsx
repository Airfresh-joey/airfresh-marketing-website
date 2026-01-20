import { useEffect } from 'react';
import { getPageKeywords } from '@/lib/seo-keywords';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogImageWidth?: string;
  ogImageHeight?: string;
  structuredData?: Record<string, any>;
  pageType?: string; // Used to auto-generate keywords if not provided
}

export default function SEO({ 
  title, 
  description, 
  keywords, 
  canonical,
  ogType = 'website',
  ogImage = 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  ogImageAlt = 'AirFresh Marketing experiential marketing brand ambassadors event staffing nationwide',
  ogImageWidth = '1200',
  ogImageHeight = '630',
  structuredData,
  pageType 
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
    
    // Use provided keywords or auto-generate based on page type
    const finalKeywords = keywords || (pageType ? getPageKeywords(pageType) : '');
    if (finalKeywords) {
      updateMetaTag('keywords', finalKeywords);
    }

    // Open Graph tags (essential for LinkedIn sharing)
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:image:secure_url', ogImage, true);
    updateMetaTag('og:image:type', 'image/jpeg', true);
    updateMetaTag('og:url', window.location.href, true);
    updateMetaTag('og:site_name', 'AirFresh Marketing', true);
    updateMetaTag('og:locale', 'en_US', true);
    
    // LinkedIn specific Open Graph tags with enhanced image metadata
    updateMetaTag('article:author', 'https://www.linkedin.com/company/airfresh-marketing', true);
    updateMetaTag('article:publisher', 'https://www.linkedin.com/company/airfresh-marketing', true);
    updateMetaTag('og:image:width', ogImageWidth, true);
    updateMetaTag('og:image:height', ogImageHeight, true);
    updateMetaTag('og:image:alt', ogImageAlt, true);
    
    // Additional image metadata for better social sharing
    updateMetaTag('og:rich_attachment', 'true', true);
    updateMetaTag('linkedin:image', ogImage, true);
    updateMetaTag('linkedin:card', 'summary_large_image', true);

    // Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    updateMetaTag('twitter:site', '@AirFreshMktg');
    updateMetaTag('twitter:creator', '@AirFreshMktg');

    // Additional SEO tags
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('author', 'AirFresh Marketing');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    updateMetaTag('language', 'en-US');
    updateMetaTag('geo.region', 'US-CO');
    updateMetaTag('geo.placename', 'Denver');
    updateMetaTag('geo.position', '39.7392;-104.9903');
    updateMetaTag('ICBM', '39.7392, -104.9903');
    
    // LinkedIn Profile Links
    const linkedInProfile = document.querySelector('link[rel="me"]') as HTMLLinkElement;
    if (!linkedInProfile) {
      const link = document.createElement('link');
      link.rel = 'me';
      link.href = 'https://www.linkedin.com/company/airfresh-marketing';
      document.head.appendChild(link);
    }

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

  }, [title, description, keywords, canonical, ogType, ogImage, ogImageAlt, ogImageWidth, ogImageHeight, structuredData, pageType]);

  return null;
}