import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industries | Experiential Marketing by Sector',
  description: 'Specialized experiential marketing for every industry: tech, automotive, CPG, beverage, healthcare, retail, and more. Industry-specific expertise.',
  keywords: 'experiential marketing industries, tech marketing, automotive marketing, CPG brand activations, beverage sampling, retail marketing',
  openGraph: {
    title: 'Industries We Serve | AirFresh Marketing',
    description: 'Specialized experiential marketing for tech, automotive, CPG, beverage, healthcare, retail, and more.',
    url: 'https://www.airfreshmarketing.com/industries',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'AirFresh Marketing Industries' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industries | AirFresh Marketing',
    description: 'Industry-specific experiential marketing expertise.',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/industries',
  },
}

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return children
}
