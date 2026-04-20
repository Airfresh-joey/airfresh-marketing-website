import type { Metadata } from 'next'
import Link from 'next/link'
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

      {/* Internal Links Section - SEO */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Explore Our Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            <Link href="/services/brand-ambassadors" className="p-3 bg-white rounded-lg border border-gray-200 hover:border-cyan-400 text-center text-sm font-medium text-gray-700 hover:text-cyan-600 transition-colors">Brand Ambassadors</Link>
            <Link href="/services/event-staffing" className="p-3 bg-white rounded-lg border border-gray-200 hover:border-cyan-400 text-center text-sm font-medium text-gray-700 hover:text-cyan-600 transition-colors">Event Staffing</Link>
            <Link href="/services/street-teams" className="p-3 bg-white rounded-lg border border-gray-200 hover:border-cyan-400 text-center text-sm font-medium text-gray-700 hover:text-cyan-600 transition-colors">Street Teams</Link>
            <Link href="/services/sampling" className="p-3 bg-white rounded-lg border border-gray-200 hover:border-cyan-400 text-center text-sm font-medium text-gray-700 hover:text-cyan-600 transition-colors">Product Sampling</Link>
            <Link href="/services/convention-staffing" className="p-3 bg-white rounded-lg border border-gray-200 hover:border-cyan-400 text-center text-sm font-medium text-gray-700 hover:text-cyan-600 transition-colors">Convention Staffing</Link>
            <Link href="/services/retail-activations" className="p-3 bg-white rounded-lg border border-gray-200 hover:border-cyan-400 text-center text-sm font-medium text-gray-700 hover:text-cyan-600 transition-colors">Retail Activations</Link>
            <Link href="/services/experiential-marketing" className="p-3 bg-white rounded-lg border border-gray-200 hover:border-cyan-400 text-center text-sm font-medium text-gray-700 hover:text-cyan-600 transition-colors">Experiential Marketing</Link>
            <Link href="/services/event-management" className="p-3 bg-white rounded-lg border border-gray-200 hover:border-cyan-400 text-center text-sm font-medium text-gray-700 hover:text-cyan-600 transition-colors">Event Management</Link>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/services" className="text-cyan-600 hover:text-cyan-700 font-medium">All Services</Link>
            <span className="text-gray-300">|</span>
            <Link href="/case-studies" className="text-cyan-600 hover:text-cyan-700 font-medium">Case Studies</Link>
            <span className="text-gray-300">|</span>
            <Link href="/locations" className="text-cyan-600 hover:text-cyan-700 font-medium">Locations</Link>
            <span className="text-gray-300">|</span>
            <Link href="/pricing" className="text-cyan-600 hover:text-cyan-700 font-medium">Pricing</Link>
            <span className="text-gray-300">|</span>
            <Link href="/contact" className="text-cyan-600 hover:text-cyan-700 font-medium">Get a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
