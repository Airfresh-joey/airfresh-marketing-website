import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Event Planning Checklist | Free Experiential Marketing Planner',
  description: 'Event planning checklist for experiential marketing activations. Step-by-step guide covering staffing, logistics, permits, and promotion. Download free.',
  openGraph: {
    title: 'Event Planning Checklist | AirFresh Marketing',
    description: 'Free event planning checklist for experiential marketing activations and brand events.',
    url: 'https://www.airfreshmarketing.com/checklist/event-planning',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Event Planning Checklist | AirFresh Marketing',
    description: 'Free event planning checklist for experiential marketing activations.',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/checklist/event-planning',
  },
}

export default function EventPlanningChecklistLayout({ children }: { children: React.ReactNode }) {
  return children
}
