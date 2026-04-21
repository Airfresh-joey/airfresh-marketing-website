import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trade Show Staffing | Professional Booth Staff & Presenters',
  description: 'Trade show staffing agency with trained booth staff, presenters, and lead generators for conventions and expos nationwide. GPS-verified teams.',
  keywords: 'trade show staffing, trade show staff, booth staff, trade show models, trade show presenters, expo staffing',
  openGraph: {
    type: 'website',
    title: 'Trade Show Staffing | AirFresh Marketing',
    description: 'Professional trade show staffing with trained booth staff, presenters, and lead generators in 50+ US cities.',
    url: 'https://www.airfreshmarketing.com/services/trade-show-staffing',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'AirFresh Marketing Trade Show Staffing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trade Show Staffing | AirFresh Marketing',
    description: 'Professional trade show staff for booth engagement, presentations, and lead capture.',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/services/trade-show-staffing',
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Trade Show Staffing Services",
      "description": "Professional trade show staffing including booth staff, presenters, lead generators, and registration assistants for conventions and expos nationwide.",
      "url": "https://www.airfreshmarketing.com/services/trade-show-staffing",
      "provider": {
        "@type": "Organization",
        "name": "AirFresh Marketing",
        "url": "https://www.airfreshmarketing.com",
        "telephone": "+1-303-720-6060"
      },
      "areaServed": { "@type": "Country", "name": "United States" },
      "serviceType": "Trade Show Staffing",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.airfreshmarketing.com" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.airfreshmarketing.com/services" },
        { "@type": "ListItem", "position": 3, "name": "Trade Show Staffing", "item": "https://www.airfreshmarketing.com/services/trade-show-staffing" },
      ]
    }
  ]
}

export default function TradeShowStaffingLayout({ children }: { children: React.ReactNode }) {
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
