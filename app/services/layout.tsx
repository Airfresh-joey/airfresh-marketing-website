import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | Experiential Marketing Solutions',
  description: 'Full-service experiential marketing: brand ambassadors, street teams, product sampling, event staffing, trade show support, and promotional models.',
  keywords: 'experiential marketing services, brand ambassadors, street teams, product sampling, event staffing, trade show staff',
  openGraph: {
    type: 'website',
    title: 'Experiential Marketing Services | AirFresh Marketing',
    description: 'Full-service experiential marketing: brand ambassadors, street teams, product sampling, event staffing, and more.',
    url: 'https://www.airfreshmarketing.com/services',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'AirFresh Marketing Services' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Experiential Marketing Services',
    description: 'Brand ambassadors, street teams, sampling, and event staffing nationwide.',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/services',
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
