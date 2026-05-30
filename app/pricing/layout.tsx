import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Event Staffing & Brand Ambassador Pricing',
  description: 'Transparent event staffing pricing: brand ambassadors $35–65/hr, trade show staff $40–70/hr, no hidden fees. Free custom quote for your campaign within 24 hours.',
  keywords: 'event staffing pricing, brand ambassador cost, brand ambassador agency cost, how much does event staffing cost, promotional staff rates, trade show staffing rates, street team pricing, experiential marketing rates',
  openGraph: {
    type: 'website',
    title: 'Event Staffing & Brand Ambassador Pricing | AirFresh Marketing',
    description: 'Transparent pricing for brand ambassadors, event staffing, trade show staff, street teams, and promotional models nationwide. Get rate ranges and a custom quote.',
    url: 'https://www.airfreshmarketing.com/pricing',
    siteName: 'AirFresh Marketing',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AirFresh Marketing Event Staffing and Brand Ambassador Pricing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Event Staffing & Brand Ambassador Pricing | AirFresh Marketing',
    description: 'Transparent pricing for brand ambassadors, event staffing, trade show staff & more. See rate ranges and get a custom quote.',
    site: '@AirFreshMktg',
    creator: '@AirFreshMktg',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/pricing',
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children
}
