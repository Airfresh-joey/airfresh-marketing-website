import type { Metadata } from 'next'

const serviceMetadata: Record<string, { title: string; description: string; keywords: string }> = {
  'brand-ambassadors': {
    title: 'Brand Ambassadors | Professional Brand Representatives',
    description: 'Professional brand ambassadors for events, product launches, and experiential marketing. Trained staff representing your brand nationwide.',
    keywords: 'brand ambassadors, brand representatives, promotional staff, product ambassadors',
  },
  'street-teams': {
    title: 'Street Teams | Guerrilla Marketing',
    description: 'Street team marketing and guerrilla campaigns that get noticed. Grassroots marketing, flyering, and direct consumer engagement.',
    keywords: 'street teams, guerrilla marketing, grassroots marketing, street marketing',
  },
  'experiential-marketing': {
    title: 'Experiential Marketing | Brand Activations',
    description: 'Immersive experiential marketing campaigns and brand activations that create memorable consumer experiences.',
    keywords: 'experiential marketing, brand activations, immersive marketing, brand experiences',
  },
  'event-management': {
    title: 'Event Management | Event Staffing',
    description: 'Full-service event management and professional event staffing for corporate events, trade shows, and activations.',
    keywords: 'event management, event staffing, corporate events, event production',
  },
  'sampling': {
    title: 'Product Sampling | Sampling Campaigns',
    description: 'Professional product sampling campaigns that drive trial and conversion. In-store, event, and street sampling services.',
    keywords: 'product sampling, sampling campaigns, demo marketing, in-store sampling',
  },
  'promotional-models': {
    title: 'Promotional Models | Event Models',
    description: 'Professional promotional models for trade shows, events, and brand activations. Experienced talent nationwide.',
    keywords: 'promotional models, event models, trade show models, brand models',
  },
  'convention-staffing': {
    title: 'Convention Staffing | Trade Show Staff',
    description: 'Professional convention and trade show staffing. Booth staff, registration, lead capture, and event support.',
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
