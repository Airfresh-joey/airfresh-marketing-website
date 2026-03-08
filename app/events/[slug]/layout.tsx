import type { Metadata } from 'next'
import { usaEvents } from '@/server/usa-events-data'

interface LayoutProps {
  children: React.ReactNode
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { slug } = await params
  const event = usaEvents.find(e => e.slug === slug)
  
  if (!event) {
    return { title: 'Event | AirFresh Marketing' }
  }
  
  const title = `${event.name} Event Staffing & Marketing`
  const description = `Professional event staffing and brand activations for ${event.name}. Brand ambassadors, promotional staff, and experiential marketing in ${event.city}.`
  
  return {
    title,
    description,
    keywords: `${event.name} event staffing, ${event.name} brand ambassadors, ${event.city} event marketing, ${event.name} promotional staff`,
    openGraph: {
      type: 'website',
      title,
      description,
      url: `https://www.airfreshmarketing.com/events/${slug}`,
      images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://www.airfreshmarketing.com/events/${slug}`,
    },
  }
}

export default function EventLayout({ children }: { children: React.ReactNode }) {
  return children
}
