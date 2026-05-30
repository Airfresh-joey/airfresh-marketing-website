import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Event Staffing Agency | Professional Event Staff Nationwide',
  description: 'Event staffing agency providing trained brand ambassadors, promotional models, and event staff in 50+ cities. GPS-verified check-ins, 300+ brands served since 2004.',
  keywords: 'event staffing agency, event staffing company, event staffing services, hire event staff, professional event staffing',
  openGraph: {
    type: 'website',
    title: 'Event Staffing Agency | AirFresh Marketing',
    description: 'Professional event staffing agency with trained staff in 50+ US cities. Brand ambassadors, promotional models, trade show staff, and more.',
    url: 'https://www.airfreshmarketing.com/event-staffing-agency',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'AirFresh Marketing Event Staffing Agency' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Event Staffing Agency | AirFresh Marketing',
    description: 'Professional event staffing in 50+ US cities. Brand ambassadors, event staff, and promotional models.',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/event-staffing-agency',
  },
}

export default function EventStaffingAgencyLayout({ children }: { children: React.ReactNode }) {
  return children
}
