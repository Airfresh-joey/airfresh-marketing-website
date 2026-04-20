import type { Metadata } from 'next'

const serviceMetadata: Record<string, { title: string; description: string; keywords: string }> = {
  'brand-ambassadors': {
    title: 'Brand Ambassadors | Professional Brand Representatives | AirFresh Marketing',
    description: 'Brand ambassadors for events, product launches, and experiential marketing campaigns. Trained, vetted staff in 50+ cities representing your brand with GPS-verified check-ins.',
    keywords: 'brand ambassadors, brand representatives, promotional staff, product ambassadors',
  },
  'street-teams': {
    title: 'Street Teams | Guerrilla Marketing | AirFresh Marketing',
    description: 'Street team marketing and guerrilla campaigns that drive real consumer engagement. Flyering, sampling, and grassroots activations in 50+ cities with real-time reporting.',
    keywords: 'street teams, guerrilla marketing, grassroots marketing, street marketing',
  },
  'experiential-marketing': {
    title: 'Experiential Marketing | Brand Activations | AirFresh Marketing',
    description: 'Experiential marketing campaigns and brand activations that create memorable consumer experiences. Turnkey execution with strategy, staffing, and analytics in 50+ cities.',
    keywords: 'experiential marketing, brand activations, immersive marketing, brand experiences',
  },
  'event-management': {
    title: 'Event Management | Event Staffing | AirFresh Marketing',
    description: 'Event management and professional event staffing for corporate events, trade shows, product launches, and brand activations. Turnkey logistics in 50+ cities nationwide.',
    keywords: 'event management, event staffing, corporate events, event production',
  },
  'sampling': {
    title: 'Product Sampling | Sampling Campaigns | AirFresh Marketing',
    description: 'Product sampling campaigns that drive trial and conversion at retail, events, and on the street. Trained brand ambassadors in 50+ cities with compliance and real-time reporting.',
    keywords: 'product sampling, sampling campaigns, demo marketing, in-store sampling',
  },
  'promotional-models': {
    title: 'Promotional Models | Event Models | AirFresh Marketing',
    description: 'Promotional models for trade shows, events, and brand activations. Professional, experienced talent available nationwide with GPS check-ins and real-time event dashboards.',
    keywords: 'promotional models, event models, trade show models, brand models',
  },
  'convention-staffing': {
    title: 'Convention Staffing | Trade Show Staff | AirFresh Marketing',
    description: 'Convention staffing and trade show staff for booth engagement, registration, lead capture, and event support. Trained professionals in 50+ cities with real-time reporting.',
    keywords: 'convention staffing, trade show staff, booth staff, expo staffing',
  },
}

interface LayoutProps {
  children: React.ReactNode
  params: Promise<{ service: string }>
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { service } = await params
  const meta = serviceMetadata[service]
  
  if (!meta) {
    return { title: 'Service | AirFresh Marketing' }
  }
  
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      type: 'website',
      title: meta.title,
      description: meta.description,
      url: `https://www.airfreshmarketing.com/services/${service}`,
      images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
    alternates: {
      canonical: `https://www.airfreshmarketing.com/services/${service}`,
    },
  }
}

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return children
}
