import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Experiential Marketing Agency Since 2004 | About AirFresh Marketing',
  description: 'Experiential marketing agency with 20+ years experience. 300+ brands activated across 50+ cities with brand ambassadors, event staffing, and more.',
  keywords: 'experiential marketing agency, brand activation company, event marketing agency, about airfresh marketing',
  openGraph: {
    type: 'website',
    title: 'About AirFresh Marketing | Experiential Marketing Agency',
    description: 'AirFresh Marketing is a leading experiential marketing agency creating memorable brand activations and customer engagement campaigns nationwide.',
    url: 'https://www.airfreshmarketing.com/about',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'AirFresh Marketing Team' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About AirFresh Marketing',
    description: 'Leading experiential marketing agency creating memorable brand activations nationwide.',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/about',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
