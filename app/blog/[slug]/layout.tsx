import type { Metadata } from 'next'

interface LayoutProps {
  children: React.ReactNode
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { slug } = await params
  
  // Convert slug to readable title
  const title = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
  
  return {
    title: `${title} | AirFresh Marketing Blog`,
    description: `Read about ${title.toLowerCase()} and get expert insights on experiential marketing, brand activations, and event staffing.`,
    openGraph: {
      title: `${title} | AirFresh Marketing Blog`,
      description: `Expert insights on ${title.toLowerCase()} from AirFresh Marketing.`,
      url: `https://www.airfreshmarketing.com/blog/${slug}`,
      type: 'article',
      images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | AirFresh Blog`,
    },
    alternates: {
      canonical: `https://www.airfreshmarketing.com/blog/${slug}`,
    },
  }
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return children
}
