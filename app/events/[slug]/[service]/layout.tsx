import type { Metadata } from 'next'
import { usaEvents } from '@/server/usa-events-data'

interface LayoutProps {
  children: React.ReactNode
  params: Promise<{ slug: string; service: string }>
}

const serviceNames: Record<string, string> = {
  'brand-ambassadors': 'Brand Ambassadors',
  'event-staff': 'Event Staff',
  'promotional-models': 'Promotional Models',
  'trade-show-staff': 'Trade Show Staff',
  'hospitality-staff': 'Hospitality Staff',
  'street-teams': 'Street Teams',
  'sampling-teams': 'Sampling Teams',
  'festival-staff': 'Festival Staff',
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { slug, service } = await params
  const event = usaEvents.find(e => e.slug === slug)
  const serviceName = serviceNames[service] || service.replace(/-/g, ' ')
  
  if (!event) {
    return { title: `${serviceName}` }
  }
  
  const title = `${serviceName} for ${event.name}`
  const description = `Professional ${serviceName.toLowerCase()} for ${event.name} in ${event.city}. Experienced event staff for brand activations and experiential marketing.`
  
  return {
    title,
    description,
    keywords: `${event.name} ${serviceName.toLowerCase()}, ${event.city} ${serviceName.toLowerCase()}, ${event.name} event staffing`,
    openGraph: {
      type: 'website',
      title,
      description,
      url: `https://www.airfreshmarketing.com/events/${slug}/${service}`,
      images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://www.airfreshmarketing.com/events/${slug}/${service}`,
    },
  }
}

export default function EventServiceLayout({ children }: { children: React.ReactNode }) {
  return children
}
