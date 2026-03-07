import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio | Our Work',
  description: 'Explore AirFresh Marketing portfolio of successful brand activations, experiential campaigns, and event marketing projects for top brands.',
  keywords: 'experiential marketing portfolio, brand activation examples, event marketing case studies, marketing campaign examples',
  openGraph: {
    title: 'Portfolio | AirFresh Marketing',
    description: 'Explore our portfolio of successful brand activations and experiential marketing campaigns.',
    url: 'https://www.airfreshmarketing.com/portfolio',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'AirFresh Marketing Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AirFresh Marketing Portfolio',
    description: 'See our successful brand activations and experiential campaigns.',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/portfolio',
  },
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children
}
