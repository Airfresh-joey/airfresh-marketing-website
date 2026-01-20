// Comprehensive Schema.org structured data for AirFresh Marketing

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AirFresh Marketing",
  "alternateName": "AirFresh Experiential Marketing Agency",
  "url": "https://airfreshmarketing.com",
  "logo": "https://airfreshmarketing.com/favicon.svg",
  "sameAs": [
    "https://www.linkedin.com/company/airfresh-marketing",
    "https://www.facebook.com/AirFreshMarketing",
    "https://twitter.com/AirFreshmktg",
    "https://www.instagram.com/airfreshmarketing/"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-303-720-6060",
    "contactType": "customer service",
    "email": "hello@airfreshmarketing.com",
    "areaServed": "US",
    "availableLanguage": "en"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "720 S. Colorado Blvd., Penthouse North",
    "addressLocality": "Denver",
    "addressRegion": "CO",
    "postalCode": "80246",
    "addressCountry": "US"
  }
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "AirFresh Marketing",
  "image": "https://airfreshmarketing.com/favicon.svg",
  "telephone": "+1-303-720-6060",
  "email": "hello@airfreshmarketing.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "720 S. Colorado Blvd., Penthouse North",
    "addressLocality": "Denver",
    "addressRegion": "CO",
    "postalCode": "80246",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 39.7392,
    "longitude": -104.9903
  },
  "url": "https://airfreshmarketing.com",
  "priceRange": "$$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ]
};

export const marketingAgencySchema = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  "@id": "https://airfreshmarketing.com/#marketingagency",
  "name": "AirFresh Marketing",
  "alternateName": "AirFresh Experiential Marketing Agency",
  "description": "Premier experiential marketing agency specializing in Brand Activation, Event Marketing, Pop-up Events, guerrilla marketing, product sampling, and brand ambassador services nationwide. We create memorable customer experiences that drive engagement and brand loyalty.",
  "url": "https://airfreshmarketing.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://airfreshmarketing.com/favicon.svg",
    "width": 512,
    "height": 512
  },
  "image": "https://airfreshmarketing.com/images/heroes/mac-cosmetics-experiential-marketing.jpeg",
  "telephone": "+1-303-720-6060",
  "email": "hello@airfreshmarketing.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "720 S. Colorado Blvd., Penthouse North",
    "addressLocality": "Denver",
    "addressRegion": "CO",
    "postalCode": "80246",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 39.7392,
    "longitude": -104.9903
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "State",
      "name": "Colorado"
    },
    {
      "@type": "State",
      "name": "California"
    },
    {
      "@type": "State",
      "name": "New York"
    },
    {
      "@type": "State",
      "name": "Texas"
    },
    {
      "@type": "State",
      "name": "Florida"
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/airfresh-marketing",
    "https://www.facebook.com/AirFreshMarketing",
    "https://twitter.com/AirFreshmktg",
    "https://www.instagram.com/airfreshmarketing/"
  ],
  "priceRange": "$$$",
  "foundingDate": "2014",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "minValue": 10,
    "maxValue": 50
  },
  "knowsAbout": [
    "Brand Activation",
    "Event Marketing",
    "Pop-up Events",
    "Experiential Marketing",
    "Guerrilla Marketing",
    "Product Sampling",
    "Brand Ambassadors",
    "Trade Show Marketing",
    "Field Marketing",
    "Corporate Events"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Experiential Marketing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Brand Activation",
          "description": "Create memorable brand experiences through interactive activations that drive engagement and brand loyalty"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Event Marketing",
          "description": "Full-service event marketing and production for trade shows, festivals, and corporate events"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Pop-up Events",
          "description": "Immersive pop-up experiences that create buzz and drive brand awareness"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Brand Ambassadors",
          "description": "Professional brand ambassadors and promotional staff for events nationwide"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Guerrilla Marketing",
          "description": "Creative street marketing and unconventional campaigns that capture attention"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  }
};

// City-specific LocalBusiness schema
export const cityLocalBusinessSchema = (cityData: any) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": cityData.businessName,
  "image": "https://airfreshmarketing.com/favicon.svg",
  "telephone": cityData.phone,
  "email": "hello@airfreshmarketing.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": cityData.address,
    "addressLocality": cityData.city,
    "addressRegion": cityData.state,
    "postalCode": cityData.zip,
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": cityData.latitude,
    "longitude": cityData.longitude
  },
  "url": cityData.website,
  "priceRange": "$$$",
  "description": cityData.description,
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "areaServed": cityData.serviceAreas?.map((area: string) => ({
    "@type": "Place",
    "name": area
  })),
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services",
    "itemListElement": cityData.services?.map((service: string) => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": service
      }
    }))
  }
});

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "provider": {
    "@type": "Organization",
    "name": "AirFresh Marketing"
  },
  "serviceType": [
    "Experiential Marketing",
    "Brand Ambassadors",
    "Event Staffing",
    "Guerrilla Marketing",
    "Product Sampling",
    "Brand Activation",
    "Pop-up Events",
    "Trade Show Marketing",
    "Corporate Events",
    "Field Marketing"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Experiential Marketing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Brand Ambassadors",
          "description": "Professional brand ambassadors and event staffing nationwide"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Experiential Marketing",
          "description": "Immersive brand experiences and guerrilla marketing campaigns"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Event Production",
          "description": "Full-service event production and management"
        }
      }
    ]
  }
};

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const eventSchema = (event: {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
  organizer?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  "name": event.name,
  "description": event.description,
  "startDate": event.startDate,
  "endDate": event.endDate || event.startDate,
  "location": {
    "@type": "Place",
    "name": event.location,
    "address": event.location
  },
  "organizer": {
    "@type": "Organization",
    "name": event.organizer || "AirFresh Marketing"
  }
});

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is experiential marketing and how does it differ from traditional marketing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Experiential marketing is a marketing strategy that creates immersive, real-world experiences to engage consumers with a brand. Unlike traditional advertising, it allows customers to interact directly with products and services through brand activations, guerrilla marketing, product sampling, and pop-up events. AirFresh Marketing specializes in creating memorable experiential campaigns that drive meaningful engagement with your target audience."
      }
    },
    {
      "@type": "Question",
      "name": "How much do brand ambassadors cost for experiential marketing campaigns?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Brand ambassador costs vary based on location, experience, and campaign duration. Typically, professional brand ambassadors range from $25-50 per hour, with specialized talent commanding higher rates. AirFresh Marketing provides fully-trained brand ambassadors nationwide. Contact us at 303-720-6060 for a customized quote for your experiential marketing needs."
      }
    },
    {
      "@type": "Question",
      "name": "What cities does AirFresh Marketing serve for brand activations and events?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide experiential marketing services nationwide across major cities including New York, Los Angeles, Chicago, Miami, Houston, Phoenix, Philadelphia, San Antonio, San Diego, Dallas, Denver, Seattle, Boston, Atlanta, and Austin. Our extensive network of experienced brand ambassadors enables rapid deployment for campaigns of any size."
      }
    },
    {
      "@type": "Question",
      "name": "How to choose the best experiential marketing agency for brand activations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When choosing an experiential marketing agency, consider: 1) Track record and experience in your industry, 2) Geographic reach and local market knowledge, 3) Talent network and training quality, 4) Full-service capabilities from strategy to execution, 5) ROI focus and measurement capabilities, 6) Client testimonials and case studies. AirFresh Marketing offers comprehensive experiential marketing services with a proven track record of successful campaigns."
      }
    },
    {
      "@type": "Question",
      "name": "What is the ROI of experiential marketing compared to digital advertising?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Experiential marketing delivers strong ROI: consumers who engage with branded experiences are more likely to purchase products, experiential campaigns generate significant word-of-mouth marketing, and many brands report that experiential marketing directly drives sales. AirFresh Marketing focuses on creating campaigns that generate meaningful brand engagement and measurable business results."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to plan and execute a brand activation campaign?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Timeline varies by campaign complexity: Simple product sampling (2-3 weeks), pop-up experiences (4-6 weeks), multi-city tours (6-8 weeks), large-scale activations (8-12 weeks). AirFresh Marketing's experienced team can expedite timelines for urgent campaigns while maintaining quality. We've successfully executed last-minute activations in as little as 48 hours for established clients."
      }
    }
  ]
};

// ImageObject schema for campaign images and galleries
export const imageObjectSchema = ({
  url,
  name,
  description,
  caption,
  keywords,
  width = 1200,
  height = 630,
  client,
  location = 'nationwide'
}: {
  url: string;
  name: string;
  description?: string;
  caption?: string;
  keywords?: string[];
  width?: number;
  height?: number;
  client?: string;
  location?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "contentUrl": url,
  "url": url,
  "name": name,
  "description": description || `${client} experiential marketing campaign brand ambassadors event staffing ${location}`,
  "caption": caption || `Brand activation and guerrilla marketing for ${client} by AirFresh Marketing`,
  "keywords": keywords?.join(', ') || "experiential marketing, brand ambassadors, event staffing, guerrilla marketing, sampling, brand activation, pop-up events",
  "width": {
    "@type": "QuantitativeValue",
    "value": width,
    "unitCode": "PX"
  },
  "height": {
    "@type": "QuantitativeValue",
    "value": height,
    "unitCode": "PX"
  },
  "creator": {
    "@type": "Organization",
    "name": "AirFresh Marketing"
  },
  "copyrightHolder": {
    "@type": "Organization",
    "name": "AirFresh Marketing"
  },
  "license": "https://airfreshmarketing.com/terms"
});

// Gallery schema for event photo collections
export const gallerySchema = ({
  title,
  description,
  images,
  category,
  date
}: {
  title: string;
  description: string;
  images: Array<{url: string; caption?: string}>;
  category: string;
  date: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": title,
  "description": description,
  "about": {
    "@type": "Event",
    "name": `${title} - ${category} brand activation`,
    "startDate": date,
    "location": {
      "@type": "Place",
      "name": "Multiple Locations Nationwide"
    },
    "organizer": {
      "@type": "Organization",
      "name": "AirFresh Marketing"
    }
  },
  "image": images.map((img, index) => ({
    "@type": "ImageObject",
    "contentUrl": img.url,
    "caption": img.caption || `Event photo ${index + 1} - brand ambassadors and experiential marketing`,
    "keywords": "experiential marketing, event staffing, brand ambassadors, guerrilla marketing"
  }))
});

// Article schema for blog posts and case studies
export const articleSchema = (article: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  keywords?: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "author": {
    "@type": "Person",
    "name": article.author,
    "worksFor": {
      "@type": "Organization",
      "name": "AirFresh Marketing"
    }
  },
  "publisher": {
    "@type": "Organization",
    "name": "AirFresh Marketing",
    "logo": {
      "@type": "ImageObject",
      "url": "/favicon.svg"
    }
  },
  "datePublished": article.datePublished,
  "dateModified": article.dateModified || article.datePublished,
  "image": article.image || "/default-article-image.jpg",
  "keywords": article.keywords?.join(", ") || "experiential marketing, brand activation, event marketing",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://airfreshmarketing.com/blog"
  }
});

// Person/Author schema for E-E-A-T signals
export const authorSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "AirFresh Marketing Team",
  "jobTitle": "Experiential Marketing Specialists",
  "worksFor": {
    "@type": "Organization",
    "name": "AirFresh Marketing",
    "url": "https://airfreshmarketing.com"
  },
  "description": "Experiential marketing expertise serving brands nationwide. Specialists in brand activations, event production, and guerrilla marketing.",
  "knowsAbout": [
    "Experiential Marketing",
    "Brand Activation",
    "Event Production",
    "Guerrilla Marketing",
    "Product Sampling",
    "Pop-up Events",
    "Brand Ambassador Management",
    "Trade Show Marketing"
  ],
  "alumniOf": {
    "@type": "Organization",
    "name": "Industry Leaders in Experiential Marketing"
  }
};

// WebPage schema for better page understanding
export const webPageSchema = (page: {
  title: string;
  description: string;
  url: string;
  type?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": page.type || "WebPage",
  "name": page.title,
  "description": page.description,
  "url": page.url,
  "inLanguage": "en-US",
  "isPartOf": {
    "@type": "WebSite",
    "name": "AirFresh Marketing",
    "url": "https://airfreshmarketing.com"
  },
  "about": {
    "@type": "Thing",
    "name": "Experiential Marketing Services",
    "description": "Professional experiential marketing and brand activation services"
  },
  "provider": organizationSchema
});

// How-to schema for guides and resources
export const howToSchema = (guide: {
  name: string;
  description: string;
  totalTime?: string;
  steps: Array<{name: string; text: string}>;
}) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": guide.name,
  "description": guide.description,
  "totalTime": guide.totalTime,
  "step": guide.steps.map((step, index) => ({
    "@type": "HowToStep",
    "position": index + 1,
    "name": step.name,
    "text": step.text
  }))
});

// Combined schema for homepage
export const getHomepageSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,
    localBusinessSchema,
    serviceSchema,
    faqSchema,
    authorSchema,
    breadcrumbSchema([
      { name: "Home", url: "https://airfreshmarketing.com" }
    ]),
    webPageSchema({
      title: "AirFresh Marketing - Leading Experiential Marketing Agency",
      description: "Experiential marketing agency specializing in brand activations, event production, and guerrilla marketing campaigns nationwide.",
      url: "https://airfreshmarketing.com",
      type: "WebSite"
    })
  ]
});