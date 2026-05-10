import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Experiential Marketing Agency | Brand Activations Nationwide',
  description: 'Experiential marketing agency for brand activations, pop-ups, product launches, trade shows, and lead capture campaigns. Nationwide staff and reporting.',
  keywords: 'experiential marketing agency, experiential marketing company, brand activation agency, experiential events, brand experience agency, experiential marketing services',
  openGraph: {
    type: 'website',
    title: 'Experiential Marketing Agency | AirFresh Marketing',
    description: 'Experiential marketing agency for brand activations, pop-ups, product launches, trade shows, and lead capture campaigns. Nationwide staff and reporting.',
    url: 'https://www.airfreshmarketing.com/experiential-marketing-agency',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'AirFresh Marketing Experiential Marketing Agency' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Experiential Marketing Agency | AirFresh Marketing',
    description: 'Experiential marketing agency for brand activations, pop-ups, product launches, trade shows, and lead capture campaigns nationwide.',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/experiential-marketing-agency',
  },
}

export default function ExperientialMarketingAgencyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Experiential Marketing Agency',
            description:
              'Full-service experiential marketing agency delivering immersive brand activations, product launches, pop-up experiences, mobile tours, and consumer engagement campaigns across 50+ US cities since 2004.',
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
              'Experiential Marketing',
              'Brand Activations',
              'Product Launches',
              'Pop-Up Experiences',
              'Mobile Marketing Tours',
              'Product Sampling Campaigns',
              'Guerrilla Marketing',
              'Trade Show Experiences',
              'Festival Activations',
              'Retail Experiences',
            ],
            offers: {
              '@type': 'AggregateOffer',
              priceCurrency: 'USD',
              lowPrice: '5000',
              highPrice: '500000',
              offerCount: '10',
              availability: 'https://schema.org/InStock',
            },
            url: 'https://www.airfreshmarketing.com/experiential-marketing-agency',
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
                name: 'Experiential Marketing Agency',
                item: 'https://www.airfreshmarketing.com/experiential-marketing-agency',
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
