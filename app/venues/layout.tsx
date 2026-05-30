import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Convention Center & Event Venue Staffing',
  description: 'Professional event staffing at major convention centers and venues nationwide. Trade show staff, brand ambassadors, and event support.',
  keywords: 'convention center staffing, venue event staff, trade show staffing, event venue marketing, convention staffing',
  openGraph: {
    type: 'website',
    title: 'Venue Staffing | AirFresh Marketing',
    description: 'Professional event staffing at major convention centers and venues nationwide.',
    url: 'https://www.airfreshmarketing.com/venues',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'AirFresh Marketing Venue Staffing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Venue Staffing | AirFresh',
    description: 'Convention center and event venue staffing nationwide.',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/venues',
  },
}

export default function VenuesLayout({ children }: { children: React.ReactNode }) {
  return children
}
