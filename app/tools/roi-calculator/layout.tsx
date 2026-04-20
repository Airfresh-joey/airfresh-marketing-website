import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Event Marketing ROI Calculator | Free Tool',
  description: 'Event marketing ROI calculator to estimate impressions, leads, conversions, and revenue from experiential marketing campaigns. Free tool by AirFresh Marketing.',
  openGraph: {
    title: 'Event Marketing ROI Calculator | AirFresh Marketing',
    description: 'Calculate the ROI of your experiential marketing campaigns with our free tool.',
    url: 'https://www.airfreshmarketing.com/tools/roi-calculator',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Event Marketing ROI Calculator | AirFresh Marketing',
    description: 'Free experiential marketing ROI calculator tool.',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/tools/roi-calculator',
  },
}

export default function ROICalculatorLayout({ children }: { children: React.ReactNode }) {
  return children
}
