export interface ServiceType {
  slug: string;
  name: string;
  title: string;
  description: string;
  keywords: string[];
}

export const serviceTypes: ServiceType[] = [
  {
    slug: 'brand-ambassadors',
    name: 'Brand Ambassadors',
    title: 'Professional Brand Ambassadors',
    description: 'Engage customers with trained brand ambassadors who embody your brand values and create authentic connections at events, retail locations, and activations.',
    keywords: ['brand representation', 'customer engagement', 'product demonstration', 'brand awareness']
  },
  {
    slug: 'convention-staffing',
    name: 'Convention Staffing',
    title: 'Convention & Trade Show Staffing',
    description: 'Professional convention staff including booth attendants, lead generators, and product demonstrators to maximize your trade show ROI.',
    keywords: ['trade show staff', 'booth management', 'lead generation', 'expo staffing']
  },
  {
    slug: 'event-management',
    name: 'Event Management',
    title: 'Full-Service Event Management',
    description: 'End-to-end event management services from concept to execution, including venue selection, logistics, staffing, and on-site coordination.',
    keywords: ['event planning', 'event production', 'corporate events', 'event coordination']
  },
  {
    slug: 'experiential-marketing',
    name: 'Experiential Marketing',
    title: 'Experiential Marketing Campaigns',
    description: 'Create immersive brand experiences that engage all senses and forge lasting emotional connections with your target audience.',
    keywords: ['brand experiences', 'interactive marketing', 'consumer engagement', 'brand activations']
  },
  {
    slug: 'guerilla-marketing',
    name: 'Guerilla Marketing',
    title: 'Guerilla Marketing Campaigns',
    description: 'Unconventional, high-impact marketing tactics that generate buzz and viral attention for your brand in unexpected ways.',
    keywords: ['street marketing', 'viral campaigns', 'unconventional marketing', 'buzz marketing']
  },
  {
    slug: 'marketing-mascots',
    name: 'Marketing Mascots',
    title: 'Marketing Mascot Services',
    description: 'Professional mascot performers bring your brand character to life at events, creating memorable photo opportunities and brand interactions.',
    keywords: ['mascot marketing', 'character marketing', 'brand mascots', 'costume characters']
  },
  {
    slug: 'promotional-models',
    name: 'Promotional Models',
    title: 'Professional Promotional Models',
    description: 'Attractive, articulate promotional models who effectively communicate your brand message and drive product sampling and sales.',
    keywords: ['promo models', 'product sampling', 'brand modeling', 'promotional staff']
  },
  {
    slug: 'street-team-marketing',
    name: 'Street Team Marketing',
    title: 'Street Team Marketing Campaigns',
    description: 'Mobilize energetic street teams to distribute samples, generate awareness, and create grassroots buzz in high-traffic areas.',
    keywords: ['street teams', 'sampling campaigns', 'grassroots marketing', 'field marketing']
  }
];

export function getServiceBySlug(slug: string): ServiceType | undefined {
  return serviceTypes.find(service => service.slug === slug);
}

export function generateCityServiceContent(cityName: string, stateName: string, service: ServiceType) {
  return {
    title: `${service.name} in ${cityName}, ${stateName} | AirFresh Marketing`,
    metaDescription: `Professional ${service.name.toLowerCase()} services in ${cityName}. AirFresh Marketing provides experienced ${service.title.toLowerCase()} for events, activations, and campaigns throughout ${cityName} and ${stateName}.`,
    h1: `${cityName} ${service.name}`,
    heroDescription: `Looking for professional ${service.name.toLowerCase()} in ${cityName}? AirFresh Marketing delivers exceptional ${service.title.toLowerCase()} services throughout the ${cityName} metro area. With over 20 years of experience and a network of trained professionals, we help brands create impactful experiences that resonate with local audiences.`,

    sections: [
      {
        title: `Why Choose AirFresh for ${service.name} in ${cityName}`,
        content: [
          `Local Market Knowledge: Deep understanding of ${cityName}'s unique demographics and culture`,
          `Experienced Professionals: Carefully vetted and trained ${service.name.toLowerCase()}`,
          `Proven Track Record: Successfully executed campaigns for 300+ national brands`,
          `Full-Service Support: From planning to execution and reporting`,
          `Data-Driven Results: Comprehensive analytics and ROI measurement`
        ]
      },
      {
        title: `Our ${cityName} ${service.name} Services Include`,
        content: [
          'Strategic campaign planning and development',
          'Professional talent recruitment and training',
          'On-site management and coordination',
          'Real-time reporting and analytics',
          'Post-campaign analysis and insights'
        ]
      },
      {
        title: `Industries We Serve in ${cityName}`,
        content: [
          'Consumer Products & CPG',
          'Technology & Electronics',
          'Automotive',
          'Entertainment & Media',
          'Food & Beverage',
          'Healthcare & Pharmaceuticals',
          'Fashion & Retail',
          'Sports & Recreation'
        ]
      }
    ],

    localInsight: `${cityName} offers unique opportunities for ${service.name.toLowerCase()}. From bustling downtown districts to vibrant neighborhoods, our team knows exactly where and how to connect with your target audience. We leverage local events, venues, and cultural touchpoints to maximize your campaign's impact.`,

    cta: {
      title: `Ready to Launch Your ${service.name} Campaign in ${cityName}?`,
      description: `Let's create something amazing together. Contact our ${cityName} team to discuss your ${service.name.toLowerCase()} needs and get a customized proposal for your brand.`,
      buttonText: `Get Started in ${cityName}`,
      buttonLink: '/contact'
    },

    faqs: [
      {
        question: `How quickly can you deploy ${service.name.toLowerCase()} in ${cityName}?`,
        answer: `We can typically deploy ${service.name.toLowerCase()} within 48-72 hours for urgent requests, though we recommend 1-2 weeks lead time for optimal planning and talent selection.`
      },
      {
        question: `Do you provide ${service.name.toLowerCase()} throughout the ${cityName} metro area?`,
        answer: `Yes, we serve the entire ${cityName} metropolitan area including all surrounding suburbs and can expand coverage based on your campaign needs.`
      },
      {
        question: `What makes your ${service.name.toLowerCase()} different?`,
        answer: `Our ${service.name.toLowerCase()} are carefully selected, professionally trained, and backed by our full-service support team. We focus on brand alignment, professionalism, and measurable results.`
      }
    ]
  };
}

// Generate URL slug for city-service combination
export function getCityServiceSlug(citySlug: string, serviceSlug: string): string {
  return `${citySlug}-${serviceSlug}`;
}

// Parse city-service slug to get city and service
export function parseCityServiceSlug(slug: string): { citySlug: string; serviceSlug: string } | null {
  // Find the last occurrence of a service slug in the URL
  for (const service of serviceTypes) {
    const index = slug.lastIndexOf(`-${service.slug}`);
    if (index !== -1) {
      return {
        citySlug: slug.substring(0, index),
        serviceSlug: service.slug
      };
    }
  }
  return null;
}