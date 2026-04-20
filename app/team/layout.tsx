import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Team | Experiential Marketing Experts',
  description: 'Meet the AirFresh Marketing team. Experienced experiential marketing professionals dedicated to creating unforgettable brand experiences nationwide.',
  openGraph: {
    title: 'Our Team | AirFresh Marketing',
    description: 'Meet the AirFresh Marketing team of experiential marketing professionals.',
    url: 'https://www.airfreshmarketing.com/team',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Team | AirFresh Marketing',
    description: 'Meet the AirFresh Marketing team.',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/team',
  },
}

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return children
}
