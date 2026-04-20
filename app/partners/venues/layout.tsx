import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Venue Partnerships | Host Brand Activations at Your Location',
  description: 'Venue partnerships with AirFresh Marketing. Earn revenue hosting brand activations, product launches, and experiential marketing events at your venue.',
  openGraph: {
    title: 'Venue Partnerships | AirFresh Marketing',
    description: 'Partner your venue with AirFresh Marketing for brand activations and earn revenue.',
    url: 'https://www.airfreshmarketing.com/partners/venues',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Venue Partnerships | AirFresh Marketing',
    description: 'Partner your venue with AirFresh Marketing for brand activations.',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/partners/venues',
  },
}

export default function VenuePartnershipsLayout({ children }: { children: React.ReactNode }) {
  return children
}
