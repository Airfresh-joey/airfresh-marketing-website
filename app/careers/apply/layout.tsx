import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apply Now | Join Our Team',
  description: 'Apply to join AirFresh Marketing as a brand ambassador, promotional model, or event staff. Quick application, flexible schedules, competitive pay.',
  keywords: 'apply brand ambassador, event staff application, promotional model jobs, join airfresh marketing',
  openGraph: {
    title: 'Apply Now | AirFresh Marketing Careers',
    description: 'Apply to join our team of brand ambassadors and event staff. Quick application process.',
    url: 'https://www.airfreshmarketing.com/careers/apply',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Apply to AirFresh Marketing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apply to AirFresh Marketing',
    description: 'Join our team of brand ambassadors and event staff.',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/careers/apply',
  },
}

export default function ApplyLayout({ children }: { children: React.ReactNode }) {
  return children
}
