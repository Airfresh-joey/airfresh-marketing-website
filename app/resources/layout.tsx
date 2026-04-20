import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resources | Event Staffing Tools & Guides',
  description: 'Free event staffing resources, ROI calculators, planning checklists, and marketing guides from AirFresh Marketing. Tools to plan better brand activations.',
  openGraph: {
    title: 'Resources | AirFresh Marketing',
    description: 'Free event staffing resources, ROI calculators, planning checklists, and marketing guides.',
    url: 'https://www.airfreshmarketing.com/resources',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resources | AirFresh Marketing',
    description: 'Free event staffing resources and marketing guides.',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/resources',
  },
}

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children
}
