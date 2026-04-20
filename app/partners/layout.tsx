import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Partners | Agency & Venue Partnerships',
  description: 'Partner with AirFresh Marketing for event staffing, brand ambassador programs, and experiential marketing. Agency partnerships and venue collaborations nationwide.',
  openGraph: {
    title: 'Partners | AirFresh Marketing',
    description: 'Partner with AirFresh Marketing for event staffing and experiential marketing nationwide.',
    url: 'https://www.airfreshmarketing.com/partners',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Partners | AirFresh Marketing',
    description: 'Agency and venue partnerships for event staffing nationwide.',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/partners',
  },
}

export default function PartnersLayout({ children }: { children: React.ReactNode }) {
  return children
}
