// Industry + City combination data for SEO pages
// These pages target searches like "tech event staffing austin" or "healthcare marketing new york"

export interface IndustryCity {
  industry: {
    slug: string;
    name: string;
    description: string;
  };
  city: {
    slug: string;
    name: string;
    state: string;
  };
}

// Industries with event marketing needs
export const industries = [
  {
    slug: 'tech',
    name: 'Technology',
    description: 'Tech conferences, product launches, developer events, and startup showcases',
    keywords: ['tech events', 'software conferences', 'startup events', 'product launches', 'developer conferences']
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    description: 'Medical conferences, pharma events, health fairs, and patient education',
    keywords: ['medical conferences', 'healthcare events', 'pharma marketing', 'health fairs']
  },
  {
    slug: 'automotive',
    name: 'Automotive',
    description: 'Auto shows, test drive events, dealership activations, and vehicle launches',
    keywords: ['auto shows', 'car events', 'test drive events', 'vehicle launches']
  },
  {
    slug: 'food-beverage',
    name: 'Food & Beverage',
    description: 'Food festivals, restaurant openings, beverage sampling, and culinary events',
    keywords: ['food festivals', 'restaurant events', 'beverage sampling', 'culinary marketing']
  },
  {
    slug: 'financial',
    name: 'Financial Services',
    description: 'Banking events, fintech conferences, investment seminars, and financial education',
    keywords: ['banking events', 'fintech conferences', 'financial marketing', 'investment events']
  },
  {
    slug: 'retail',
    name: 'Retail',
    description: 'Store openings, pop-up shops, seasonal promotions, and shopping events',
    keywords: ['retail events', 'store openings', 'pop-up shops', 'shopping events']
  },
  {
    slug: 'sports',
    name: 'Sports & Fitness',
    description: 'Sporting events, fitness expos, athletic brand activations, and fan experiences',
    keywords: ['sports events', 'fitness expos', 'athletic marketing', 'fan experiences']
  },
  {
    slug: 'entertainment',
    name: 'Entertainment',
    description: 'Film premieres, music events, gaming conventions, and entertainment marketing',
    keywords: ['film events', 'music marketing', 'gaming conventions', 'entertainment events']
  },
  {
    slug: 'beauty',
    name: 'Beauty & Cosmetics',
    description: 'Beauty launches, cosmetics sampling, skincare events, and fashion marketing',
    keywords: ['beauty events', 'cosmetics sampling', 'skincare marketing', 'fashion events']
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    description: 'Property launches, open houses, real estate expos, and community events',
    keywords: ['real estate events', 'property launches', 'open houses', 'community events']
  }
];

// Top cities for event marketing
export const cities = [
  { slug: 'new-york', name: 'New York', state: 'NY' },
  { slug: 'los-angeles', name: 'Los Angeles', state: 'CA' },
  { slug: 'chicago', name: 'Chicago', state: 'IL' },
  { slug: 'houston', name: 'Houston', state: 'TX' },
  { slug: 'phoenix', name: 'Phoenix', state: 'AZ' },
  { slug: 'philadelphia', name: 'Philadelphia', state: 'PA' },
  { slug: 'san-antonio', name: 'San Antonio', state: 'TX' },
  { slug: 'san-diego', name: 'San Diego', state: 'CA' },
  { slug: 'dallas', name: 'Dallas', state: 'TX' },
  { slug: 'austin', name: 'Austin', state: 'TX' },
  { slug: 'san-francisco', name: 'San Francisco', state: 'CA' },
  { slug: 'seattle', name: 'Seattle', state: 'WA' },
  { slug: 'denver', name: 'Denver', state: 'CO' },
  { slug: 'boston', name: 'Boston', state: 'MA' },
  { slug: 'atlanta', name: 'Atlanta', state: 'GA' },
  { slug: 'miami', name: 'Miami', state: 'FL' },
  { slug: 'nashville', name: 'Nashville', state: 'TN' },
  { slug: 'las-vegas', name: 'Las Vegas', state: 'NV' },
  { slug: 'portland', name: 'Portland', state: 'OR' },
  { slug: 'detroit', name: 'Detroit', state: 'MI' },
  { slug: 'minneapolis', name: 'Minneapolis', state: 'MN' },
  { slug: 'san-jose', name: 'San Jose', state: 'CA' },
  { slug: 'charlotte', name: 'Charlotte', state: 'NC' },
  { slug: 'indianapolis', name: 'Indianapolis', state: 'IN' },
  { slug: 'columbus', name: 'Columbus', state: 'OH' },
  { slug: 'fort-worth', name: 'Fort Worth', state: 'TX' },
  { slug: 'baltimore', name: 'Baltimore', state: 'MD' },
  { slug: 'milwaukee', name: 'Milwaukee', state: 'WI' },
  { slug: 'albuquerque', name: 'Albuquerque', state: 'NM' },
  { slug: 'tucson', name: 'Tucson', state: 'AZ' },
  { slug: 'sacramento', name: 'Sacramento', state: 'CA' },
  { slug: 'kansas-city', name: 'Kansas City', state: 'MO' },
  { slug: 'orlando', name: 'Orlando', state: 'FL' },
  { slug: 'tampa', name: 'Tampa', state: 'FL' },
  { slug: 'pittsburgh', name: 'Pittsburgh', state: 'PA' },
  { slug: 'cleveland', name: 'Cleveland', state: 'OH' },
  { slug: 'new-orleans', name: 'New Orleans', state: 'LA' },
  { slug: 'st-louis', name: 'St. Louis', state: 'MO' },
  { slug: 'salt-lake-city', name: 'Salt Lake City', state: 'UT' },
  { slug: 'raleigh', name: 'Raleigh', state: 'NC' }
];

// Services available for industry-city combinations
export const industryCityServices = [
  'brand-ambassadors',
  'event-staffing',
  'trade-show-staff',
  'experiential-marketing'
];

// Helper functions
export function getIndustryBySlug(slug: string) {
  return industries.find(i => i.slug === slug);
}

export function getCityBySlug(slug: string) {
  return cities.find(c => c.slug === slug);
}

// Generate all industry-city combinations
export function getAllIndustryCityCombinations() {
  const combinations: IndustryCity[] = [];
  
  industries.forEach(industry => {
    cities.forEach(city => {
      combinations.push({
        industry: {
          slug: industry.slug,
          name: industry.name,
          description: industry.description
        },
        city: {
          slug: city.slug,
          name: city.name,
          state: city.state
        }
      });
    });
  });
  
  return combinations;
}
