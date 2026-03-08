import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies | Success Stories',
  description: 'Read AirFresh Marketing case studies showcasing successful experiential marketing campaigns, brand activations, and measurable ROI results.',
  keywords: 'experiential marketing case studies, brand activation success stories, event marketing ROI, marketing campaign results',
  openGraph: {
    type: 'website',
    title: 'Case Studies | AirFresh Marketing Success Stories',
    description: 'Read our case studies showcasing successful experiential marketing campaigns with measurable ROI.',
    url: 'https://www.airfreshmarketing.com/case-studies',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'AirFresh Marketing Case Studies' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AirFresh Marketing Case Studies',
    description: 'Success stories from our experiential marketing campaigns.',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/case-studies',
  },
}

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return children
}
