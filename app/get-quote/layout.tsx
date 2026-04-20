import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Event Staffing Quote | Experiential Marketing Pricing',
  description: 'Get a free quote for event staffing and experiential marketing services. Brand ambassadors, promotional models, and event staff nationwide. Fast response guaranteed.',
  openGraph: {
    title: 'Get a Free Quote | AirFresh Marketing',
    description: 'Request a free quote for event staffing and experiential marketing services nationwide.',
    url: 'https://www.airfreshmarketing.com/get-quote',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get a Free Quote | AirFresh Marketing',
    description: 'Request a free quote for event staffing and experiential marketing services.',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/get-quote',
  },
}

export default function GetQuoteLayout({ children }: { children: React.ReactNode }) {
  return children
}
