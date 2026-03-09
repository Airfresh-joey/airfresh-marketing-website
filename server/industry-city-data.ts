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
// IMPORTANT: These slugs must match industries-data.ts for links to work!
export const industries = [
  {
    slug: 'alcohol-beverage',
    name: 'Alcohol & Beverage',
    description: 'Beverage sampling, bar promotions, alcohol brand activations, and tastings',
    keywords: ['beverage sampling', 'alcohol marketing', 'bar promotions', 'brand tastings']
  },
  {
    slug: 'automotive',
    name: 'Automotive',
    description: 'Auto shows, test drive events, dealership activations, and vehicle launches',
    keywords: ['auto shows', 'car events', 'test drive events', 'vehicle launches']
  },
  {
    slug: 'technology',
    name: 'Technology',
    description: 'Tech conferences, product launches, developer events, and startup showcases',
    keywords: ['tech events', 'software conferences', 'startup events', 'product launches']
  },
  {
    slug: 'cpg-consumer-goods',
    name: 'CPG & Consumer Goods',
    description: 'Product sampling, retail activations, consumer demos, and in-store marketing',
    keywords: ['product sampling', 'retail marketing', 'consumer goods', 'in-store demos']
  },
  {
    slug: 'sports-entertainment',
    name: 'Sports & Entertainment',
    description: 'Sporting events, concerts, festivals, fan experiences, and entertainment marketing',
    keywords: ['sports events', 'concerts', 'festivals', 'fan experiences', 'entertainment']
  },
  {
    slug: 'fashion-retail',
    name: 'Fashion & Retail',
    description: 'Fashion shows, store openings, pop-up shops, and retail activations',
    keywords: ['fashion events', 'store openings', 'pop-up shops', 'retail marketing']
  },
  {
    slug: 'healthcare-pharma',
    name: 'Healthcare & Pharma',
    description: 'Medical conferences, pharma events, health fairs, and patient education',
    keywords: ['medical conferences', 'healthcare events', 'pharma marketing', 'health fairs']
  },
  {
    slug: 'financial-services',
    name: 'Financial Services',
    description: 'Banking events, fintech conferences, investment seminars, and financial education',
    keywords: ['banking events', 'fintech conferences', 'financial marketing', 'investment events']
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
