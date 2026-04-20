import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technical Intern | AirFresh Marketing Careers',
  description: 'Apply for the Technical Intern position at AirFresh Marketing. Gain hands-on experience in marketing technology, web development, and event tech platforms.',
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/careers/technical-intern',
  },
}

export default function TechnicalInternLayout({ children }: { children: React.ReactNode }) {
  return children
}
