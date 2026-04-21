import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hire Brand Ambassadors | Professional Event Staff Nationwide',
  description: 'Hire brand ambassadors for your next event or campaign. AirFresh Marketing provides trained, GPS-verified brand ambassadors in 50+ cities. Get a free quote today.',
  keywords: 'hire brand ambassadors, hire brand ambassador, brand ambassador staffing, brand ambassador agency, hire promotional staff, brand ambassador services, event brand ambassadors',
  openGraph: {
    type: 'website',
    title: 'Hire Brand Ambassadors | Professional Event Staff Nationwide',
    description: 'Hire brand ambassadors for your next event or campaign. AirFresh Marketing provides trained, GPS-verified brand ambassadors in 50+ cities nationwide.',
    url: 'https://www.airfreshmarketing.com/hire-brand-ambassadors',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Hire Brand Ambassadors - AirFresh Marketing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire Brand Ambassadors | Professional Event Staff Nationwide',
    description: 'Hire brand ambassadors for events, trade shows, and campaigns. Trained staff in 50+ US cities with GPS-verified check-ins.',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/hire-brand-ambassadors',
  },
}

export default function HireBrandAmbassadorsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Hire Brand Ambassadors',
            description:
              'Professional brand ambassador staffing services for events, trade shows, product sampling, and experiential marketing campaigns across 50+ US cities.',
            provider: {
              '@type': 'Organization',
              name: 'Air Fresh Marketing',
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
              'Trade Show Brand Ambassadors',
              'Product Sampling Ambassadors',
              'Promotional Brand Ambassadors',
              'Experiential Marketing Staff',
              'Street Team Ambassadors',
              'Corporate Event Ambassadors',
            ],
            offers: {
              '@type': 'AggregateOffer',
              priceCurrency: 'USD',
              lowPrice: '30',
              highPrice: '85',
              offerCount: '7',
              availability: 'https://schema.org/InStock',
            },
            url: 'https://www.airfreshmarketing.com/hire-brand-ambassadors',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
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
                name: 'Hire Brand Ambassadors',
                item: 'https://www.airfreshmarketing.com/hire-brand-ambassadors',
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
