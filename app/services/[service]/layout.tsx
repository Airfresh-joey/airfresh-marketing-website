import type { Metadata } from 'next'

const serviceMetadata: Record<string, { title: string; description: string; keywords: string; schemaName: string; schemaDescription: string }> = {
  'brand-ambassadors': {
    title: 'Brand Ambassadors | Professional Brand Representatives',
    description: 'Brand ambassadors for events, product launches, and experiential marketing campaigns. Trained, vetted staff in 50+ cities representing your brand with GPS-verified check-ins.',
    keywords: 'brand ambassadors, brand representatives, promotional staff, product ambassadors',
    schemaName: 'Brand Ambassador Services',
    schemaDescription: 'Professional brand ambassadors for events, product launches, trade shows, and experiential marketing campaigns. Trained and vetted representatives available in 50+ US cities.',
  },
  'street-teams': {
    title: 'Street Team Marketing Services | Guerrilla Teams Nationwide',
    description: 'Hire street teams for guerrilla marketing, sampling, flyering, app downloads, and grassroots activations. GPS-verified teams in 50+ cities with live reporting.',
    keywords: 'street teams, street team marketing, guerrilla marketing, grassroots marketing, street marketing, promotional teams',
    schemaName: 'Street Team Marketing Services',
    schemaDescription: 'Street team marketing and guerrilla campaigns including flyering, product sampling, and grassroots brand activations in 50+ cities with real-time GPS reporting.',
  },
  'experiential-marketing': {
    title: 'Experiential Marketing Services | Brand Activations Nationwide',
    description: 'Experiential marketing services for brand activations, pop-ups, product launches, trade shows, and lead capture. Strategy, staffing, and reporting in 50+ cities.',
    keywords: 'experiential marketing services, experiential marketing, brand activations, immersive marketing, brand experiences',
    schemaName: 'Experiential Marketing Services',
    schemaDescription: 'Full-service experiential marketing campaigns and brand activations including strategy, creative, staffing, and analytics. Turnkey execution in 50+ US cities.',
  },
  'event-management': {
    title: 'Event Management | Event Staffing',
    description: 'Event management and professional event staffing for corporate events, trade shows, product launches, and brand activations. Turnkey logistics in 50+ cities nationwide.',
    keywords: 'event management, event staffing, corporate events, event production',
    schemaName: 'Event Management & Staffing Services',
    schemaDescription: 'Professional event management and staffing for corporate events, trade shows, product launches, and brand activations. Turnkey logistics and coordination in 50+ cities.',
  },
  'event-staffing': {
    title: 'Event Staffing | Professional Event Staff',
    description: 'Professional event staffing for corporate events, trade shows, product launches, brand activations, and experiential campaigns in 50+ cities nationwide.',
    keywords: 'event staffing, event staff, corporate event staff, trade show staff, promotional staff',
    schemaName: 'Event Staffing Services',
    schemaDescription: 'Professional event staffing for corporate events, trade shows, product launches, brand activations, and experiential campaigns in 50+ cities nationwide.',
  },
  'sampling': {
    title: 'Product Sampling | Sampling Campaigns',
    description: 'Product sampling campaigns that drive trial and conversion at retail, events, and on the street. Trained brand ambassadors in 50+ cities with compliance and real-time reporting.',
    keywords: 'product sampling, sampling campaigns, demo marketing, in-store sampling',
    schemaName: 'Product Sampling Campaign Services',
    schemaDescription: 'Product sampling campaigns at retail locations, events, and street-level activations. Trained brand ambassadors with compliance tracking and real-time reporting in 50+ cities.',
  },
  'promotional-models': {
    title: 'Promotional Models | Event Models',
    description: 'Promotional models for trade shows, events, and brand activations. Professional, experienced talent available nationwide with GPS check-ins and real-time event dashboards.',
    keywords: 'promotional models, event models, trade show models, brand models',
    schemaName: 'Promotional Model Services',
    schemaDescription: 'Professional promotional models for trade shows, events, and brand activations. Experienced talent available nationwide with GPS check-ins and event reporting dashboards.',
  },
  'convention-staffing': {
    title: 'Convention Staffing | Trade Show Staff',
    description: 'Convention staffing and trade show staff for booth engagement, registration, lead capture, and event support. Trained professionals in 50+ cities with real-time reporting.',
    keywords: 'convention staffing, trade show staff, booth staff, expo staffing',
    schemaName: 'Convention & Trade Show Staffing Services',
    schemaDescription: 'Convention staffing and trade show staff for booth engagement, registration, lead capture, and event support. Trained professionals in 50+ cities with real-time reporting.',
  },
}

const serviceAliases: Record<string, string> = {
  'event-staffing': 'event-management',
}

interface LayoutProps {
  children: React.ReactNode
  params: Promise<{ service: string }>
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { service } = await params
  const meta = serviceMetadata[service] ?? serviceMetadata[serviceAliases[service]]
  
  if (!meta) {
    return { title: 'Service' }
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

export default async function ServiceLayout({ children, params }: { children: React.ReactNode; params: Promise<{ service: string }> }) {
  const { service } = await params
  const meta = serviceMetadata[service] ?? serviceMetadata[serviceAliases[service]]

  const structuredData = meta ? {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": meta.schemaName,
        "description": meta.schemaDescription,
        "url": `https://www.airfreshmarketing.com/services/${service}`,
        "provider": {
          "@type": "Organization",
          "name": "AirFresh Marketing",
          "url": "https://www.airfreshmarketing.com",
          "telephone": "+1-303-720-6060",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1580 N. Logan St., Suite 660",
            "addressLocality": "Denver",
            "addressRegion": "CO",
            "postalCode": "80203",
            "addressCountry": "US"
          }
        },
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "serviceType": meta.schemaName,
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.airfreshmarketing.com" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.airfreshmarketing.com/services" },
          { "@type": "ListItem", "position": 3, "name": meta.schemaName, "item": `https://www.airfreshmarketing.com/services/${service}` },
        ]
      }
    ]
  } : null

  return (
    <>
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      {children}
    </>
  )
}
