// Comprehensive Schema.org structured data for AirFresh Marketing

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AirFresh Marketing",
  "alternateName": "AirFresh Experiential Marketing Agency",
  "url": "https://airfreshmarketing.com",
  "logo": "https://airfreshmarketing.com/logo.jpg",
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
  "image": "https://airfreshmarketing.com/hero-image.jpg",
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
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "287",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Kristin Quinn"
      },
      "reviewBody": "Air Fresh Marketing has worked with us all across the country from Los Angeles to New York. Even when events come up last minute, they are able to make magic happen!"
    }
  ]
};

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
      "name": "What is experiential marketing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Experiential marketing is a marketing strategy that creates immersive, real-world experiences to engage consumers with a brand. It includes brand activations, guerrilla marketing, product sampling, and pop-up events."
      }
    },
    {
      "@type": "Question",
      "name": "How much do brand ambassadors cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Brand ambassador costs vary based on location, experience, and campaign duration. Contact us at 303-720-6060 for a customized quote for your experiential marketing needs."
      }
    },
    {
      "@type": "Question",
      "name": "What cities does AirFresh Marketing serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide experiential marketing services nationwide across 50+ cities including New York, Los Angeles, Chicago, Miami, Houston, Phoenix, Philadelphia, San Antonio, San Diego, Dallas, and more."
      }
    }
  ]
};

// Combined schema for homepage
export const getHomepageSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,
    localBusinessSchema,
    serviceSchema,
    breadcrumbSchema([
      { name: "Home", url: "https://airfreshmarketing.com" }
    ])
  ]
});