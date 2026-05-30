import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Experience Manager',
  description: 'Apply for the Experience Manager position at AirFresh Marketing. Lead experiential marketing campaigns, manage event teams, and drive client success.',
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/careers/experience-manager',
  },
}

export default function ExperienceManagerLayout({ children }: { children: React.ReactNode }) {
  return children
}
