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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How far in advance should I start planning an experiential marketing event?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For most brand activations, start planning 4–6 weeks in advance. Larger multi-city tours or major festival activations may require 3–6 months of lead time. Staffing should be confirmed at least 2–4 weeks before the event to allow time for training and briefing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What permits do I need for an outdoor brand activation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Permit requirements vary by city, but outdoor activations typically require a special event permit, liability insurance, and sometimes a vendor permit or temporary use permit. High-traffic locations like parks, sidewalks, and public plazas often require city approval 3–4 weeks in advance.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many brand ambassadors do I need for my event?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The number of brand ambassadors depends on your activation size, traffic volume, and engagement goals. A small pop-up typically needs 2–4 staff members, while large festivals or trade shows may require 10–20+ trained ambassadors. As a general rule, plan one ambassador per 50–75 expected attendees per hour.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should be included in an event staff training brief?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A thorough event staff brief should cover brand messaging and talking points, product knowledge, target audience profile, lead capture procedures, dress code and appearance standards, logistics (location, parking, load-in), emergency contacts, and KPIs or engagement goals.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I measure the ROI of an experiential marketing event?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Track key metrics including leads captured, samples distributed, social media impressions (hashtag usage, organic posts), foot traffic counts, consumer surveys completed, and post-event sales lift in the activation area. Compare these against your cost-per-engagement benchmark to calculate ROI.',
      },
    },
  ],
};

export default function EventPlanningChecklistLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}
