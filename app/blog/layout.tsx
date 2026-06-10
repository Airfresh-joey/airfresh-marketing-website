import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    // Applied to /blog index itself — uses root template → adds "| AirFresh Marketing"
    default: 'Experiential Marketing Blog | Event Staffing Tips & Industry Insights',
    // Cascades to all static blog post children so they get "Post Title | AirFresh Marketing"
    template: '%s | AirFresh Marketing',
  },
  description: 'Experiential marketing insights, event staffing guides, and brand activation strategies. Expert tips from AirFresh Marketing to boost your next campaign.',
  keywords: 'experiential marketing blog, brand activation tips, event marketing insights, marketing industry trends',
  openGraph: {
    type: 'website',
    title: 'Experiential Marketing Blog | AirFresh Marketing',
    description: 'Expert insights on experiential marketing, brand activations, and event staffing.',
    url: 'https://www.airfreshmarketing.com/blog',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'AirFresh Marketing Blog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Experiential Marketing Blog | AirFresh Marketing',
    description: 'Expert insights on experiential marketing and brand activations.',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/blog',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
