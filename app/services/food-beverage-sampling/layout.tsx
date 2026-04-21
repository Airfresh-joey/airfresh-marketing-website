import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Food & Beverage Sampling Staff | Product Sampling Events',
  description: 'Food & beverage sampling staff for grocery stores, festivals, trade shows, and retail locations. Professional product sampling teams nationwide.',
  keywords: 'food sampling staff, beverage sampling, product sampling events, in-store demos, food demo staff, sampling agency',
  openGraph: {
    type: 'website',
    title: 'Food & Beverage Sampling Staff | AirFresh Marketing',
    description: 'Professional food & beverage sampling staff for grocery stores, festivals, trade shows, and retail locations nationwide.',
    url: 'https://www.airfreshmarketing.com/services/food-beverage-sampling',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'AirFresh Marketing Food & Beverage Sampling Staff' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Food & Beverage Sampling Staff | AirFresh Marketing',
    description: 'Professional food & beverage sampling teams for in-store demos, festivals, and product launches.',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/services/food-beverage-sampling',
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Food & Beverage Sampling Staff",
      "description": "Professional food and beverage sampling staff for in-store demos, festivals, trade shows, retail locations, and product launch events. Trained product sampling teams available nationwide.",
      "url": "https://www.airfreshmarketing.com/services/food-beverage-sampling",
      "provider": {
        "@type": "Organization",
        "name": "AirFresh Marketing",
        "url": "https://www.airfreshmarketing.com",
        "telephone": "+1-303-720-6060"
      },
      "areaServed": { "@type": "Country", "name": "United States" },
      "serviceType": "Food & Beverage Sampling",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.airfreshmarketing.com" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.airfreshmarketing.com/services" },
        { "@type": "ListItem", "position": 3, "name": "Food & Beverage Sampling", "item": "https://www.airfreshmarketing.com/services/food-beverage-sampling" },
      ]
    }
  ]
}

export default function FoodBeverageSamplingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  )
}
