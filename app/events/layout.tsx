import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Events | Event Marketing & Staffing',
  description: 'Professional event marketing and staffing for major events nationwide. Brand activations, trade shows, festivals, conferences, and sports events.',
  keywords: 'event marketing, event staffing, trade show staff, festival marketing, conference staffing, sports event marketing',
  openGraph: {
    type: 'website',
    title: 'Events | AirFresh Marketing',
    description: 'Professional event marketing and staffing for major events nationwide.',
    url: 'https://www.airfreshmarketing.com/events',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'AirFresh Marketing Events' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Event Marketing | AirFresh',
    description: 'Professional event marketing and staffing nationwide.',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/events',
  },
}

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return children
}
