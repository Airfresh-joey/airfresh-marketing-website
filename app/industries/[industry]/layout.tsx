import type { Metadata } from 'next'
import { industries } from '@/server/industries-data'

interface LayoutProps {
  children: React.ReactNode
  params: Promise<{ industry: string }>
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { industry: industrySlug } = await params
  const industry = industries.find(i => i.slug === industrySlug)
  
  if (!industry) {
    return { title: 'Industry' }
  }
  
  const baseTitle = `${industry.name} Marketing | Experiential & Event Services`
  const description = `Specialized experiential marketing for the ${industry.name.toLowerCase()} industry. Brand activations, event staffing, and promotional campaigns tailored to your sector.`
  
  return {
    title: {
      default: `${baseTitle} | AirFresh Marketing`,
      template: `%s | AirFresh Marketing`,
    },
    description,
    keywords: `${industry.name.toLowerCase()} marketing, ${industry.name.toLowerCase()} brand activations, ${industry.name.toLowerCase()} event marketing, ${industry.name.toLowerCase()} experiential`,
    openGraph: {
      type: 'website',
      title: `${baseTitle} | AirFresh Marketing`,
      description,
      url: `https://www.airfreshmarketing.com/industries/${industrySlug}`,
      images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${baseTitle} | AirFresh Marketing`,
      description,
    },
    alternates: {
      canonical: `https://www.airfreshmarketing.com/industries/${industrySlug}`,
    },
  }
}

export default function IndustryLayout({ children }: { children: React.ReactNode }) {
  return children
}
