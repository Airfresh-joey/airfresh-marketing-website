import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Event Staffing Quote | Contact AirFresh Marketing',
  description: 'Event staffing and experiential marketing quotes in 24 hours. Contact AirFresh Marketing for brand ambassadors, street teams, and promotional staff nationwide.',
  keywords: 'contact airfresh marketing, experiential marketing quote, event staffing inquiry, brand ambassador services',
  openGraph: {
    type: 'website',
    title: 'Contact AirFresh Marketing | Get a Quote',
    description: 'Contact AirFresh Marketing for experiential marketing, brand ambassadors, event staffing, and promotional services.',
    url: 'https://www.airfreshmarketing.com/contact',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Contact AirFresh Marketing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact AirFresh Marketing',
    description: 'Get a free quote for experiential marketing and event staffing services.',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
