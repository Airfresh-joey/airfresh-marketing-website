// City-Service Content Hub - Unique content for top market city-service combinations
// This replaces thin templated content with rich, city-specific SEO content

export interface CityServiceContent {
  slug: string;
  cityName: string;
  stateName: string;
  serviceName: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroDescription: string;
  sections: Array<{
    heading: string;
    content: string;
  }>;
  localVenues: string[];
  localEvents: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  pricingNote: string;
  areasServed: string[];
}

// Import city-specific content
import { losAngelesContent } from './city-content/los-angeles';
import { newYorkCityContent } from './city-content/new-york-city';
import { miamiContent } from './city-content/miami';
import { chicagoContent } from './city-content/chicago';
import { lasVegasContent } from './city-content/las-vegas';

// Combine all city content into a single lookup
const allCityServiceContent: Record<string, CityServiceContent> = {
  ...losAngelesContent,
  ...newYorkCityContent,
  ...miamiContent,
  ...chicagoContent,
  ...lasVegasContent,
};

export function getCityServiceContent(slug: string): CityServiceContent | undefined {
  return allCityServiceContent[slug];
}

export function hasEnrichedContent(slug: string): boolean {
  return slug in allCityServiceContent;
}
