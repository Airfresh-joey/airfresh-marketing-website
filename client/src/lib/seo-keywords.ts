// SEO Keywords Configuration for AirFresh Marketing

export const seoKeywords = {
  // Primary keywords
  primary: [
    "experiential marketing",
    "brand ambassadors", 
    "event staffing",
    "guerrilla marketing",
    "sampling",
    "brand activation",
    "pop-up events",
    "immersive experiences",
    "promotional staffing",
    "field marketing",
    "live marketing"
  ],

  // Industry-specific keywords
  industry: [
    "product sampling",
    "trade show marketing",
    "event marketing agency",
    "brand experience agency",
    "customer engagement",
    "promotional campaigns",
    "street team marketing",
    "mobile marketing tours",
    "corporate event marketing",
    "retail marketing"
  ],

  // Service-specific keywords
  services: {
    experiential: [
      "experiential marketing agency",
      "experiential campaigns",
      "brand experiences",
      "multi-sensory marketing",
      "interactive marketing"
    ],
    brandActivation: [
      "brand activation services",
      "product launch events",
      "pop-up shop marketing",
      "brand awareness campaigns",
      "consumer activation"
    ],
    eventStaffing: [
      "event staffing agency",
      "brand ambassador services",
      "promotional staff hiring",
      "trade show staff",
      "event personnel"
    ],
    sampling: [
      "product sampling campaigns",
      "free sample distribution",
      "sampling programs",
      "product trial marketing",
      "demo marketing"
    ]
  },

  // Geographic keywords for major cities
  geographic: {
    national: "nationwide experiential marketing",
    cities: [
      "New York experiential marketing",
      "Los Angeles brand ambassadors",
      "Chicago event staffing",
      "Miami brand activation",
      "Houston guerrilla marketing",
      "Phoenix promotional staffing",
      "Philadelphia event marketing",
      "San Antonio field marketing",
      "San Diego pop-up events",
      "Dallas immersive experiences",
      "San Jose brand experiences",
      "Austin event production",
      "Jacksonville promotional campaigns",
      "Fort Worth street teams",
      "Columbus mobile tours",
      "Charlotte trade show marketing",
      "San Francisco guerrilla marketing",
      "Indianapolis brand ambassadors",
      "Seattle experiential marketing",
      "Denver event staffing",
      "Washington DC brand activation",
      "Boston promotional marketing",
      "Nashville event marketing",
      "Las Vegas trade shows",
      "Atlanta experiential campaigns"
    ]
  },

  // Long-tail keywords
  longTail: [
    "hire brand ambassadors for events",
    "experiential marketing campaign ideas",
    "how to create brand experiences",
    "guerrilla marketing tactics 2025",
    "product sampling best practices",
    "event staffing solutions",
    "brand activation strategies",
    "pop-up event planning",
    "immersive brand experiences",
    "field marketing services"
  ]
};

// Helper function to get keywords for a specific page
export function getPageKeywords(page: string): string {
  const baseKeywords = seoKeywords.primary.slice(0, 5);
  
  switch(page) {
    case 'home':
      return [...baseKeywords, ...seoKeywords.geographic.cities.slice(0, 3)].join(', ');
    
    case 'services':
      return [...baseKeywords, ...seoKeywords.industry.slice(0, 5)].join(', ');
    
    case 'experiential-marketing':
      return [...seoKeywords.services.experiential, ...baseKeywords.slice(0, 3)].join(', ');
    
    case 'brand-activations':
      return [...seoKeywords.services.brandActivation, ...baseKeywords.slice(0, 3)].join(', ');
    
    case 'event-production':
      return [...seoKeywords.services.eventStaffing, "event production", "corporate events"].join(', ');
    
    case 'brand-strategy':
      return ["brand strategy", "brand positioning", "marketing strategy", ...baseKeywords.slice(0, 3)].join(', ');
    
    case 'case-studies':
      return [...baseKeywords.slice(0, 3), "marketing case studies", "success stories", "campaign results"].join(', ');
    
    case 'about':
      return [...baseKeywords.slice(0, 3), "marketing agency", "about airfresh", seoKeywords.geographic.national].join(', ');
    
    case 'contact':
      return [...baseKeywords.slice(0, 2), "contact marketing agency", "hire experiential agency", seoKeywords.geographic.cities[0]].join(', ');
    
    default:
      return baseKeywords.join(', ');
  }
}

// Generate title with keywords (max 60 chars)
export function generateSEOTitle(baseTile: string, keywords: string[]): string {
  const keyword = keywords[0] || "";
  const suffix = " - AirFresh Marketing";
  
  // If base title is too long, use keyword-focused title
  if (baseTile.length + suffix.length > 60) {
    return `${keyword.charAt(0).toUpperCase() + keyword.slice(1)}${suffix}`;
  }
  
  return `${baseTile}${suffix}`;
}

// Generate meta description with keywords (150-160 chars)
export function generateMetaDescription(baseDescription: string, keywords: string[]): string {
  const keywordPhrase = keywords.slice(0, 2).join(' and ');
  
  // Ensure description includes keywords and stays within limit
  if (baseDescription.length > 120) {
    return `${baseDescription.substring(0, 100)}. Specializing in ${keywordPhrase}.`;
  }
  
  return `${baseDescription} Expert ${keywordPhrase} services nationwide.`;
}