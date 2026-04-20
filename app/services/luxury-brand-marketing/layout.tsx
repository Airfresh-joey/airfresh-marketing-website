import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Luxury Brand Experiential Marketing | VIP Events & Activations',
  description: 'Luxury brand experiential marketing with exclusive activations, VIP event experiences, and premium brand representation. White-glove service for high-end brands nationwide.',
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/services/luxury-brand-marketing',
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Luxury Brand Experiential Marketing",
      "description": "White-glove experiential marketing for luxury and premium brands. Exclusive activations, VIP event experiences, and high-end brand representation nationwide.",
      "url": "https://www.airfreshmarketing.com/services/luxury-brand-marketing",
      "provider": {
        "@type": "Organization",
        "name": "AirFresh Marketing",
        "url": "https://www.airfreshmarketing.com",
        "telephone": "+1-303-720-6060"
      },
      "areaServed": { "@type": "Country", "name": "United States" },
      "serviceType": "Luxury Brand Experiential Marketing",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.airfreshmarketing.com" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.airfreshmarketing.com/services" },
        { "@type": "ListItem", "position": 3, "name": "Luxury Brand Marketing", "item": "https://www.airfreshmarketing.com/services/luxury-brand-marketing" },
      ]
    }
  ]
}

export default function LuxuryBrandMarketingLayout({ children }: { children: React.ReactNode }) {
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
