import type { Metadata } from 'next'
import { blogPosts } from "@/server/blogPosts"
import { BlogListClient, BlogNewsletterSection } from "@/components/BlogListClient"

export const metadata: Metadata = {
  title: 'Blog | Air Fresh Marketing Insights & Case Studies',
  description: 'Explore expert insights on experiential marketing, street teams, brand ambassadors, and event staffing. Learn from real case studies and industry best practices from Air Fresh Marketing.',
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/blog',
  },
  openGraph: {
    title: 'The Air Fresh Marketing Blog',
    description: 'Expert insights on experiential marketing, street teams, and brand activation strategies that drive real results.',
    url: 'https://www.airfreshmarketing.com/blog',
    type: 'website',
    siteName: 'Air Fresh Marketing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Air Fresh Marketing Blog',
    description: 'Expert insights on experiential marketing, street teams, and brand activation strategies.',
  },
}

export default function Blog() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "name": "Air Fresh Marketing Blog",
        "description": "Expert insights on experiential marketing, street teams, brand ambassadors, and event staffing.",
        "url": "https://www.airfreshmarketing.com/blog",
        "publisher": {
          "@type": "Organization",
          "name": "AirFresh Marketing",
          "url": "https://www.airfreshmarketing.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.airfreshmarketing.com/images/airfresh-logo.svg"
          }
        },
        "blogPost": blogPosts.slice(0, 20).map(post => ({
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "url": `https://www.airfreshmarketing.com/blog/${post.slug}`,
          "datePublished": post.date,
          "image": post.image,
          "author": {
            "@type": "Organization",
            "name": "AirFresh Marketing"
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.airfreshmarketing.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.airfreshmarketing.com/blog" }
        ]
      }
    ]
  }

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <BlogListClient posts={blogPosts} />

      <BlogNewsletterSection />
    </div>
  )
}
