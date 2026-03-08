import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Premier Protein Case Study | Sampling Campaign',
  description: 'See how AirFresh Marketing executed a nationwide product sampling campaign for Premier Protein, driving brand awareness and trial.',
  keywords: 'Premier Protein sampling, protein shake marketing, product sampling campaign, CPG brand activation',
  openGraph: {
    type: 'website',
    title: 'Premier Protein Case Study | AirFresh Marketing',
    description: 'Nationwide product sampling campaign for Premier Protein driving brand awareness and trial.',
    url: 'https://www.airfreshmarketing.com/portfolio/premier-protein',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Premier Protein Campaign' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premier Protein Case Study',
    description: 'Product sampling campaign results and insights.',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/portfolio/premier-protein',
  },
}

export default function PremierProteinLayout({ children }: { children: React.ReactNode }) {
  return children
}
