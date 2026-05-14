import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from "next/link"
import Image from "next/image"
import {
  Calendar,
  Clock,
  ArrowLeft,
  Tag,
  User,
  BookOpen,
  Sparkles,
  ChevronRight
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { blogPosts } from "@/server/blogPosts"
import { ReadProgressBar, ShareButtons, NewsletterSection } from "@/components/BlogPostClient"
import Breadcrumbs from "@/components/Breadcrumbs"

// ── Static params for pre-rendering all blog posts ──────────────────
export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

// ── SEO metadata generated server-side ──────────────────────────────
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return { title: 'Article Not Found | Air Fresh Marketing Blog' }
  }

  const url = `https://www.airfreshmarketing.com/blog/${post.slug}`

  return {
    title: `${post.title} | Air Fresh Marketing Blog`,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
      siteName: 'Air Fresh Marketing',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

// ── Markdown content rendering (server-side) ────────────────────────

function processInlineFormatting(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="italic text-gray-700">$1</em>')
}

function renderH2(text: string, key: number) {
  return (
    <h2 key={key} className="text-4xl font-bold mt-16 mb-8 text-gray-900 relative">
      <span className="absolute -left-12 top-2 text-cyan-500/20 text-6xl font-black">#</span>
      <span dangerouslySetInnerHTML={{ __html: processInlineFormatting(text) }} />
    </h2>
  )
}

function renderH3(text: string, key: number) {
  return (
    <h3
      key={key}
      className="text-2xl font-bold mt-10 mb-6 text-gray-800 border-l-4 border-cyan-500 pl-4"
      dangerouslySetInnerHTML={{ __html: processInlineFormatting(text) }}
    />
  )
}

function renderList(items: string[], key: number) {
  return (
    <ul key={key} className="space-y-4 my-8">
      {items.map((item, i) => (
        <li key={i} className="flex items-start group">
          <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:bg-cyan-200 transition-colors">
            <ChevronRight className="w-4 h-4 text-cyan-600" />
          </div>
          <span
            className="text-lg text-gray-700 leading-relaxed flex-1"
            dangerouslySetInnerHTML={{ __html: processInlineFormatting(item) }}
          />
        </li>
      ))}
    </ul>
  )
}

function renderParagraph(text: string, key: number) {
  const isResultsSection = text.includes('Results') && (text.includes('%') || text.includes('$'))
  const hasStats = text.match(/\d{3,}/) || (text.includes('%') && text.includes('-'))

  if (isResultsSection || hasStats) {
    return (
      <div key={key} className="my-12 relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-20" />
        <Card className="relative bg-gradient-to-br from-white to-cyan-50 border-cyan-200/50">
          <CardContent className="p-8">
            <div className="flex items-start">
              <Sparkles className="w-8 h-8 text-cyan-500 mr-4 flex-shrink-0 mt-1" />
              <div
                className="text-lg text-gray-800 leading-relaxed font-medium"
                dangerouslySetInnerHTML={{ __html: processInlineFormatting(text) }}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (text.startsWith('**') && text.endsWith('**')) {
    return (
      <p
        key={key}
        className="text-2xl font-bold text-gray-900 my-10 leading-relaxed bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
        dangerouslySetInnerHTML={{ __html: processInlineFormatting(text) }}
      />
    )
  }

  return (
    <p
      key={key}
      className="text-xl text-gray-700 leading-relaxed my-6 tracking-wide"
      dangerouslySetInnerHTML={{ __html: processInlineFormatting(text) }}
    />
  )
}

function renderContent(content: string) {
  const lines = content.split('\n')
  const elements: React.ReactElement[] = []
  let currentSection: string[] = []
  let listItems: string[] = []
  let inList = false

  lines.forEach((line) => {
    const trimmedLine = line.trim()

    if (trimmedLine.startsWith('- ')) {
      if (!inList) {
        if (currentSection.length > 0) {
          const text = currentSection.join(' ').trim()
          if (text) elements.push(renderParagraph(text, elements.length))
          currentSection = []
        }
        inList = true
        listItems = []
      }
      listItems.push(trimmedLine.substring(2))
    } else {
      if (inList && listItems.length > 0) {
        elements.push(renderList(listItems, elements.length))
        listItems = []
        inList = false
      }

      if (trimmedLine.startsWith('# ')) {
        if (currentSection.length > 0) {
          const text = currentSection.join(' ').trim()
          if (text) elements.push(renderParagraph(text, elements.length))
          currentSection = []
        }
        // Skip main title — already displayed in the hero
      } else if (trimmedLine.startsWith('## ')) {
        if (currentSection.length > 0) {
          const text = currentSection.join(' ').trim()
          if (text) elements.push(renderParagraph(text, elements.length))
          currentSection = []
        }
        elements.push(renderH2(trimmedLine.substring(3), elements.length))
      } else if (trimmedLine.startsWith('### ')) {
        if (currentSection.length > 0) {
          const text = currentSection.join(' ').trim()
          if (text) elements.push(renderParagraph(text, elements.length))
          currentSection = []
        }
        elements.push(renderH3(trimmedLine.substring(4), elements.length))
      } else if (trimmedLine === '') {
        if (currentSection.length > 0) {
          const text = currentSection.join(' ').trim()
          if (text) elements.push(renderParagraph(text, elements.length))
          currentSection = []
        }
      } else {
        currentSection.push(trimmedLine)
      }
    }
  })

  if (inList && listItems.length > 0) {
    elements.push(renderList(listItems, elements.length))
  }
  if (currentSection.length > 0) {
    const text = currentSection.join(' ').trim()
    if (text) elements.push(renderParagraph(text, elements.length))
  }

  return <div className="prose prose-xl max-w-none">{elements}</div>
}

// ── Page component (Server Component) ───────────────────────────────

export default async function BlogPost(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const aMatch = a.category === post.category ? 1 : 0
      const bMatch = b.category === post.category ? 1 : 0
      return bMatch - aMatch
    })
    .slice(0, 3)

  const wordCount = post.content.split(' ').length
  const postUrl = `https://www.airfreshmarketing.com/blog/${post.slug}`
  const quoteHref = `/get-quote?source=blog-${encodeURIComponent(post.slug)}&intent=article-cta`

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": post.title,
        "description": post.excerpt,
        "image": post.image ? `https://www.airfreshmarketing.com${post.image}` : undefined,
        "datePublished": post.date,
        "dateModified": post.date,
        "author": {
          "@type": "Organization",
          "name": "AirFresh Marketing",
          "url": "https://www.airfreshmarketing.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "AirFresh Marketing",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.airfreshmarketing.com/images/airfresh-logo.svg"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://www.airfreshmarketing.com/blog/${post.slug}`
        },
        "inLanguage": "en-US",
        "keywords": post.tags?.join(", ") || post.category
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.airfreshmarketing.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.airfreshmarketing.com/blog" },
          { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://www.airfreshmarketing.com/blog/${post.slug}` }
        ]
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />

      {/* Progress Bar (client component) */}
      <ReadProgressBar />

      {/* Hero with Image */}
      <section className="relative bg-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/blog">
            <Button variant="ghost" className="group hover:bg-gray-50">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Button>
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {/* Article Header */}
          <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
            <Badge className="mb-6 px-4 py-2 bg-cyan-100 text-cyan-700 hover:bg-cyan-200 text-sm font-semibold">
              {post.category}
            </Badge>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {post.excerpt}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-500">
              <span className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center">
                  <User className="w-5 h-5 text-cyan-600" />
                </div>
                <span className="font-medium">{post.author}</span>
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                {wordCount} words
              </span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
            <div className="aspect-[21/9] relative">
              <Image
                src={post.image}
                alt={`${post.title} - AirFresh Marketing blog`}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Visible Breadcrumbs */}
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />

      {/* Main Content Area */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>
          {/* Article Content */}
          {renderContent(post.content)}

          {/* Tags Section */}
          <div className="mt-16 pt-8 border-t-2 border-gray-100">
            <h3 className="text-lg font-bold mb-6 text-gray-900">Related Topics</h3>
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-cyan-100 hover:text-cyan-700 transition-colors cursor-pointer text-sm font-medium"
                >
                  <Tag className="w-3 h-3 mr-2" />
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Share Section (client component) */}
          <ShareButtons title={post.title} />
        </article>

        {/* Conversion CTA Cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {/* CTA Card 1 — Cost Calculator */}
          <div className="rounded-2xl shadow-lg overflow-hidden" style={{ backgroundColor: '#002B5B' }}>
            <div className="p-8 md:p-10">
              <h2 className="text-2xl font-bold text-white mb-3">Estimate Your Event Staffing Cost</h2>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Use our free calculator to get an instant estimate for brand ambassadors, trade show staff, and more.
              </p>
              <Link href="/cost-calculator">
                <Button size="lg" className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold">
                  Try Cost Calculator &rarr;
                </Button>
              </Link>
            </div>
          </div>

          {/* CTA Card 2 — Get a Quote */}
          <div className="rounded-2xl shadow-lg overflow-hidden border-2" style={{ borderColor: '#002B5B' }}>
            <div className="p-8 md:p-10 bg-white">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Staff Your Next Event?</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Get a custom quote in 24 hours. No commitment, no hidden fees.
              </p>
              <Link href={quoteHref}>
                <Button size="lg" className="text-white font-semibold" style={{ backgroundColor: '#002B5B' }}>
                  Get Your Free Quote &rarr;
                </Button>
              </Link>
              <p className="mt-4 text-sm text-gray-500">
                Or email us at{' '}
                <a href="mailto:hello@airfreshmarketing.com" className="text-cyan-600 hover:underline font-medium">
                  hello@airfreshmarketing.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Internal Cross-Links for SEO */}
        <div className="mt-16 p-8 bg-white border border-gray-200 rounded-2xl">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Explore Our Marketing Services</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <Link href="/services/brand-ambassadors" className="text-cyan-600 hover:text-cyan-800 hover:underline text-sm font-medium">Brand Ambassador Services</Link>
            <Link href="/services/experiential-marketing" className="text-cyan-600 hover:text-cyan-800 hover:underline text-sm font-medium">Experiential Marketing</Link>
            <Link href="/services/convention-staffing" className="text-cyan-600 hover:text-cyan-800 hover:underline text-sm font-medium">Convention Staffing</Link>
            <Link href="/services/event-management" className="text-cyan-600 hover:text-cyan-800 hover:underline text-sm font-medium">Event Management</Link>
            <Link href="/services/street-teams" className="text-cyan-600 hover:text-cyan-800 hover:underline text-sm font-medium">Street Teams</Link>
            <Link href="/services/sampling" className="text-cyan-600 hover:text-cyan-800 hover:underline text-sm font-medium">Product Sampling</Link>
            <Link href="/services/promotional-models" className="text-cyan-600 hover:text-cyan-800 hover:underline text-sm font-medium">Promotional Models</Link>
            <Link href="/services/trade-show-staffing" className="text-cyan-600 hover:text-cyan-800 hover:underline text-sm font-medium">Trade Show Staffing</Link>
            <Link href="/services/food-beverage-sampling" className="text-cyan-600 hover:text-cyan-800 hover:underline text-sm font-medium">Food & Beverage Sampling</Link>
            <Link href="/guides/best-event-staffing-agency" className="text-cyan-600 hover:text-cyan-800 hover:underline text-sm font-medium">Best Event Staffing Agency Guide</Link>
            <Link href="/guides/event-staffing-101" className="text-cyan-600 hover:text-cyan-800 hover:underline text-sm font-medium">Event Staffing 101 Guide</Link>
            <Link href="/guides/brand-ambassador-hiring-guide" className="text-cyan-600 hover:text-cyan-800 hover:underline text-sm font-medium">Brand Ambassador Hiring Guide</Link>
            <Link href="/event-staffing-near-me" className="text-cyan-600 hover:text-cyan-800 hover:underline text-sm font-medium">Event Staffing Near Me</Link>
            <Link href="/pricing" className="text-cyan-600 hover:text-cyan-800 hover:underline text-sm font-medium">Event Staffing Pricing</Link>
            <Link href="/technology" className="text-cyan-600 hover:text-cyan-800 hover:underline text-sm font-medium">Our Technology Platform</Link>
            <Link href="/case-studies" className="text-cyan-600 hover:text-cyan-800 hover:underline text-sm font-medium">Client Case Studies</Link>
            <Link href="/compare" className="text-cyan-600 hover:text-cyan-800 hover:underline text-sm font-medium">Compare Staffing Agencies</Link>
            <Link href="/locations" className="text-cyan-600 hover:text-cyan-800 hover:underline text-sm font-medium">All Service Locations</Link>
          </div>

          <h3 className="text-xl font-bold mt-10 mb-6 text-gray-900">Specialized Staffing Solutions</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <Link href="/event-staffing-agency" className="text-cyan-600 hover:text-cyan-800 hover:underline text-sm font-medium">Event Staffing Agency</Link>
            <Link href="/brand-ambassador-agency" className="text-cyan-600 hover:text-cyan-800 hover:underline text-sm font-medium">Brand Ambassador Agency</Link>
            <Link href="/experiential-marketing-agency" className="text-cyan-600 hover:text-cyan-800 hover:underline text-sm font-medium">Experiential Marketing Agency</Link>
            <Link href="/hire-brand-ambassadors" className="text-cyan-600 hover:text-cyan-800 hover:underline text-sm font-medium">Hire Brand Ambassadors</Link>
            <Link href="/promotional-staffing-agency" className="text-cyan-600 hover:text-cyan-800 hover:underline text-sm font-medium">Promotional Staffing Agency</Link>
            <Link href="/corporate-event-staffing" className="text-cyan-600 hover:text-cyan-800 hover:underline text-sm font-medium">Corporate Event Staffing</Link>
            <Link href="/event-marketing-agency" className="text-cyan-600 hover:text-cyan-800 hover:underline text-sm font-medium">Event Marketing Agency</Link>
            <Link href="/brand-activation-agency" className="text-cyan-600 hover:text-cyan-800 hover:underline text-sm font-medium">Brand Activation Agency</Link>
            <Link href="/field-marketing-agency" className="text-cyan-600 hover:text-cyan-800 hover:underline text-sm font-medium">Field Marketing Agency</Link>
            <Link href="/guerrilla-marketing-agency" className="text-cyan-600 hover:text-cyan-800 hover:underline text-sm font-medium">Guerrilla Marketing Agency</Link>
            <Link href="/product-sampling-agency" className="text-cyan-600 hover:text-cyan-800 hover:underline text-sm font-medium">Product Sampling Agency</Link>
            <Link href="/mobile-marketing-tours" className="text-cyan-600 hover:text-cyan-800 hover:underline text-sm font-medium">Mobile Marketing Tours</Link>
          </div>

          <h3 className="text-xl font-bold mt-10 mb-6 text-gray-900">Events We Staff</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/staffing-for/ces" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">CES</Link>
            <Link href="/staffing-for/sema" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">SEMA Show</Link>
            <Link href="/staffing-for/coachella" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Coachella</Link>
            <Link href="/staffing-for/f1-las-vegas" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">F1 Las Vegas</Link>
            <Link href="/staffing-for/super-bowl" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Super Bowl</Link>
            <Link href="/staffing-for/sxsw" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">SXSW</Link>
            <Link href="/staffing-for/comic-con" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Comic-Con</Link>
            <Link href="/staffing-for/art-basel-miami" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Art Basel Miami</Link>
            <Link href="/staffing-for/nyfw" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">NYFW</Link>
            <Link href="/staffing-for/dreamforce" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Dreamforce</Link>
            <Link href="/staffing-for/ultra-music-festival" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Ultra Music Festival</Link>
            <Link href="/staffing-for/rolling-loud" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Rolling Loud</Link>
            <Link href="/staffing-for/governors-ball" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Governors Ball</Link>
            <Link href="/staffing-for/anime-expo" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Anime Expo</Link>
            <Link href="/staffing-for/edc-las-vegas" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">EDC Las Vegas</Link>
            <Link href="/staffing-for/world-cup-2026" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">World Cup 2026</Link>
            <Link href="/staffing-for/lollapalooza" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Lollapalooza</Link>
            <Link href="/staffing-for/bonnaroo" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Bonnaroo</Link>
            <Link href="/staffing-for/la-auto-show" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">LA Auto Show</Link>
            <Link href="/staffing-for/sdcc" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">San Diego Comic-Con</Link>
            <Link href="/staffing-for/nba-all-star" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">NBA All-Star</Link>
            <Link href="/staffing-for/kentucky-derby" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Kentucky Derby</Link>
            <Link href="/staffing-for/nfl-draft" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">NFL Draft</Link>
            <Link href="/staffing-for/e3" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">E3 / Summer Game Fest</Link>
            <Link href="/staffing-for" className="px-3 py-1 bg-cyan-50 border border-cyan-200 rounded-full text-xs font-medium text-cyan-600 hover:bg-cyan-100 transition-colors">View All 55+ Events →</Link>
          </div>

          <h3 className="text-xl font-bold mt-10 mb-6 text-gray-900">Top Markets</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/cities/new-york" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">New York</Link>
            <Link href="/cities/los-angeles" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Los Angeles</Link>
            <Link href="/cities/chicago" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Chicago</Link>
            <Link href="/cities/miami" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Miami</Link>
            <Link href="/cities/las-vegas" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Las Vegas</Link>
            <Link href="/cities/denver" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Denver (HQ)</Link>
            <Link href="/cities/dallas" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Dallas</Link>
            <Link href="/cities/houston" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Houston</Link>
            <Link href="/cities/atlanta" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Atlanta</Link>
            <Link href="/cities/phoenix" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Phoenix</Link>
            <Link href="/cities/san-francisco" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">San Francisco</Link>
            <Link href="/cities/orlando" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Orlando</Link>
            <Link href="/locations" className="px-3 py-1 bg-cyan-50 border border-cyan-200 rounded-full text-xs font-medium text-cyan-600 hover:bg-cyan-100 transition-colors">All 200+ Cities →</Link>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-10 text-gray-900">Continue Reading</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer h-full overflow-hidden">
                    <div className="aspect-video relative overflow-hidden bg-gray-100">
                      <Image
                        src={relatedPost.image}
                        alt={`${relatedPost.title} - event marketing insights`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <Badge className="absolute bottom-3 left-3 bg-white/90 text-gray-900">
                        {relatedPost.category}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg text-gray-900 group-hover:text-cyan-600 transition-colors line-clamp-2 mb-3">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {relatedPost.readTime}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Newsletter Section (client component) */}
      <NewsletterSection />
    </div>
  )
}
