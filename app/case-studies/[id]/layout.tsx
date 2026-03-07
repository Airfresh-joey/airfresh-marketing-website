import type { Metadata } from 'next'
import { enhancedCaseStudies } from '@/server/case-studies-data'

interface LayoutProps {
  children: React.ReactNode
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { id } = await params
  const caseStudy = enhancedCaseStudies.find(cs => cs.id === id)
  
  if (!caseStudy) {
    return { title: 'Case Study | AirFresh Marketing' }
  }
  
  const title = `${caseStudy.client} Case Study | ${caseStudy.title}`
  const description = caseStudy.description || `See how AirFresh Marketing helped ${caseStudy.client} achieve their experiential marketing goals.`
  
  return {
    title,
    description,
    keywords: `${caseStudy.client} case study, ${caseStudy.industry} marketing, experiential marketing results`,
    openGraph: {
      title,
      description,
      url: `https://www.airfreshmarketing.com/case-studies/${id}`,
      type: 'article',
      images: [{ url: caseStudy.featured_image || '/images/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://www.airfreshmarketing.com/case-studies/${id}`,
    },
  }
}

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return children
}
