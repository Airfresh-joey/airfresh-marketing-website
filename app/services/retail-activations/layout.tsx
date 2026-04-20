import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Retail Activations & In-Store Marketing | Product Demonstrations',
  description: 'Retail activations and in-store marketing that drive sales at point of purchase. Professional product demonstrations, sampling, and brand ambassador programs in 50+ cities.',
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/services/retail-activations',
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Retail Activations & In-Store Marketing",
      "description": "Retail activations and in-store marketing including product demonstrations, sampling programs, and brand ambassador placements that drive sales at point of purchase in 50+ cities.",
      "url": "https://www.airfreshmarketing.com/services/retail-activations",
      "provider": {
        "@type": "Organization",
        "name": "AirFresh Marketing",
        "url": "https://www.airfreshmarketing.com",
        "telephone": "+1-303-720-6060"
      },
      "areaServed": { "@type": "Country", "name": "United States" },
      "serviceType": "Retail Activations & In-Store Marketing",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.airfreshmarketing.com" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.airfreshmarketing.com/services" },
        { "@type": "ListItem", "position": 3, "name": "Retail Activations", "item": "https://www.airfreshmarketing.com/services/retail-activations" },
      ]
    }
  ]
}

export default function RetailActivationsLayout({ children }: { children: React.ReactNode }) {
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
