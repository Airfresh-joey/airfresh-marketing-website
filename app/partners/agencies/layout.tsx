import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agency Partnerships | White-Label Event Staffing Services',
  description: 'Agency partnerships with AirFresh Marketing. White-label event staffing, experiential marketing execution, and nationwide brand ambassador services for agencies.',
  openGraph: {
    title: 'Agency Partnerships | AirFresh Marketing',
    description: 'White-label event staffing and experiential marketing services for agencies.',
    url: 'https://www.airfreshmarketing.com/partners/agencies',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agency Partnerships | AirFresh Marketing',
    description: 'White-label event staffing and experiential marketing for agencies.',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/partners/agencies',
  },
}

export default function AgencyPartnershipsLayout({ children }: { children: React.ReactNode }) {
  return children
}
