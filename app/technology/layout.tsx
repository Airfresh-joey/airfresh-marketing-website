import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Event Staffing Technology Platform | GPS Check-In, Video Training & Real-Time Reporting | AirFresh Marketing',
  description: 'Event staffing technology that eliminates no-shows and drives accountability. GPS check-in, video training with knowledge testing, real-time reporting dashboards, and data capture tools. See how our platform works.',
  keywords: 'event staffing technology, brand ambassador GPS tracking, event staff check-in app, staffing platform, event reporting dashboard, brand ambassador training platform, event staffing software, experiential marketing technology',
  openGraph: {
    type: 'website',
    title: 'Event Staffing Technology Platform | AirFresh Marketing',
    description: 'GPS check-in, video training, real-time reporting, and data capture. The technology behind 98% client satisfaction.',
    url: 'https://www.airfreshmarketing.com/technology',
    siteName: 'AirFresh Marketing',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AirFresh Marketing Event Staffing Technology Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Event Staffing Technology | AirFresh Marketing',
    description: 'GPS check-in, video training, real-time dashboards. The tech behind our 98% satisfaction rate.',
    site: '@AirFreshMktg',
    creator: '@AirFreshMktg',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/technology',
  },
}

export default function TechnologyLayout({ children }: { children: React.ReactNode }) {
  return children
}
