import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Event Staffing Locations | 50+ Cities Nationwide',
  description: 'Event staffing and brand ambassadors in 50+ cities including New York, Los Angeles, Chicago, Miami, Denver, and Atlanta. Find local experiential marketing services near you.',
  keywords: 'experiential marketing locations, brand ambassadors nationwide, event staffing cities, marketing agency locations',
  openGraph: {
    type: 'website',
    title: 'Nationwide Locations | AirFresh Marketing',
    description: 'AirFresh Marketing serves 50+ cities nationwide with experiential marketing and event staffing services.',
    url: 'https://www.airfreshmarketing.com/locations',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'AirFresh Marketing Locations' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AirFresh Marketing Locations',
    description: 'Experiential marketing services in 50+ cities nationwide.',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/locations',
  },
}

export default function LocationsLayout({ children }: { children: React.ReactNode }) {
  return children
}
