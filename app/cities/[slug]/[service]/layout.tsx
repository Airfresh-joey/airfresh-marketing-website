import type { Metadata } from 'next'
import { cities } from '@/server/cities-data'
import { serviceTypes } from '@/server/city-services-data'

interface LayoutProps {
  children: React.ReactNode
  params: Promise<{ slug: string; service: string }>
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { slug, service } = await params
  const city = cities.find(c => c.slug === slug)
  const serviceType = serviceTypes.find(s => s.slug === service)
  
  if (!city || !serviceType) {
    return { title: 'City Services | AirFresh Marketing' }
  }
  
  const title = `${serviceType.name} in ${city.city}, ${city.state}`
  const description = `Professional ${serviceType.name.toLowerCase()} services in ${city.city}, ${city.state}. Local expertise for brand activations, events, and experiential marketing.`
  
  return {
    title,
    description,
    keywords: `${city.city} ${serviceType.name.toLowerCase()}, ${serviceType.name.toLowerCase()} ${city.state}, ${city.city} event staffing`,
    openGraph: {
      type: 'website',
      title,
      description,
      url: `https://www.airfreshmarketing.com/cities/${slug}/${service}`,
      images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://www.airfreshmarketing.com/cities/${slug}/${service}`,
    },
  }
}

export default function CityServiceLayout({ children }: { children: React.ReactNode }) {
  return children
}
