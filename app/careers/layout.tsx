import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers | Join Our Team',
  description: 'Join AirFresh Marketing as a brand ambassador, promotional model, or event staff. Flexible schedules, competitive pay, and exciting events nationwide.',
  keywords: 'brand ambassador jobs, promotional model jobs, event staff careers, experiential marketing jobs',
  openGraph: {
    type: 'website',
    title: 'Careers at AirFresh Marketing | Join Our Team',
    description: 'Join AirFresh Marketing as a brand ambassador, promotional model, or event staff. Flexible schedules and competitive pay.',
    url: 'https://www.airfreshmarketing.com/careers',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Careers at AirFresh Marketing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at AirFresh Marketing',
    description: 'Join our team of brand ambassadors and event staff.',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/careers',
  },
}

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children
}
