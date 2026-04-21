import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brand Ambassador Agency | Hire Trained Brand Ambassadors',
  description: 'Brand ambassador agency providing trained, vetted brand ambassadors for events, trade shows, and product launches. GPS-verified staff in 50+ cities.',
  keywords: 'brand ambassador agency, brand ambassador company, brand ambassador services, hire brand ambassadors, brand ambassador staffing agency, professional brand ambassadors',
  openGraph: {
    type: 'website',
    title: 'Brand Ambassador Agency | Hire Trained Brand Ambassadors',
    description: 'Brand ambassador agency providing trained, vetted brand ambassadors for events, trade shows, and product launches. GPS-verified staff in 50+ cities.',
    url: 'https://www.airfreshmarketing.com/brand-ambassador-agency',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Brand Ambassador Agency - AirFresh Marketing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand Ambassador Agency | Hire Trained Brand Ambassadors',
    description: 'Brand ambassador agency with trained, GPS-verified staff in 50+ US cities. Events, trade shows, and product launches.',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/brand-ambassador-agency',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Brand Ambassador Agency',
      description:
        'Professional brand ambassador agency providing trained, vetted brand ambassadors for events, trade shows, product launches, sampling campaigns, and experiential marketing activations across 50+ US cities.',
      provider: {
        '@type': 'Organization',
        name: 'AirFresh Marketing',
        url: 'https://www.airfreshmarketing.com',
        telephone: '+1-303-720-6060',
        email: 'hello@airfreshmarketing.com',
        foundingDate: '2004',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '1580 N. Logan St. Suite 660',
          addressLocality: 'Denver',
          addressRegion: 'CO',
          postalCode: '80203',
          addressCountry: 'US',
        },
        sameAs: [
          'https://www.instagram.com/airfreshmarketing',
          'https://www.linkedin.com/company/airfreshmarketing',
        ],
      },
      areaServed: {
        '@type': 'Country',
        name: 'United States',
      },
      serviceType: [
        'Brand Ambassador Staffing',
        'Event Brand Ambassadors',
        'In-Store Demo Specialists',
        'Trade Show Staff',
        'Street Team Members',
        'Promotional Models',
        'Digital Brand Ambassadors',
      ],
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        lowPrice: '30',
        highPrice: '85',
        offerCount: '6',
        availability: 'https://schema.org/InStock',
      },
      url: 'https://www.airfreshmarketing.com/brand-ambassador-agency',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.airfreshmarketing.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Brand Ambassador Agency',
          item: 'https://www.airfreshmarketing.com/brand-ambassador-agency',
        },
      ],
    },
  ],
}

export default function BrandAmbassadorAgencyLayout({ children }: { children: React.ReactNode }) {
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
