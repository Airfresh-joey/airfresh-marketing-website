import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import BlogInternalLinks from '@/components/BlogInternalLinks';

export const metadata: Metadata = {
  title: 'Why Choose Air Fresh Marketing | Air Fresh Marketing',
  description: 'What makes Air Fresh different from other staffing agencies? Here\'s what sets us apart after 20 years in the business.',
  keywords: 'air fresh marketing, why air fresh, event staffing agency, experiential marketing agency, brand ambassador agency',  alternates: {
    canonical: 'https://www.airfreshmarketing.com/blog/why-air-fresh',
  },

};

export default function WhyAirFresh() {
  return (
    <article className="pt-16 min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@graph": [
                            {
                                      "@type": "Article",
                                      "headline": "Why Choose Air Fresh Marketing",
                                      "description": "What makes Air Fresh different from other staffing agencies? Here's what sets us apart after 20 years in the business.",
                                      "datePublished": "2023-07-26",
                                      "dateModified": "2023-07-26",
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
                                                "@id": "https://www.airfreshmarketing.com/blog/why-air-fresh"
                                      },
                                      "inLanguage": "en-US",
                                      "keywords": "air fresh marketing, why air fresh, event staffing agency, experiential marketing agency, brand ambassador agency"
                            },
                            {
                                      "@type": "BreadcrumbList",
                                      "itemListElement": [
                                                {
                                                          "@type": "ListItem",
                                                          "position": 1,
                                                          "name": "Home",
                                                          "item": "https://www.airfreshmarketing.com"
                                                },
                                                {
                                                          "@type": "ListItem",
                                                          "position": 2,
                                                          "name": "Blog",
                                                          "item": "https://www.airfreshmarketing.com/blog"
                                                },
                                                {
                                                          "@type": "ListItem",
                                                          "position": 3,
                                                          "name": "Why Choose Air Fresh Marketing",
                                                          "item": "https://www.airfreshmarketing.com/blog/why-air-fresh"
                                                }
                                      ]
                            }
                  ]
        }) }}
      />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Why Choose Air Fresh Marketing" }]} />

      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-200 mb-4">July 26, 2023 · 6 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Air Fresh Marketing</h1>
          <p className="text-xl text-blue-200">20 years of making brands unforgettable.</p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <p>Lots of agencies promise great staff. We've been delivering since 2005. Here's what makes us different.</p>
        <h2>Experience</h2>
        <p>20 years in experiential marketing. We've seen it all, solved it all. When something goes wrong (and it will), we know how to fix it.</p>
        <h2>National Reach</h2>
        <p>50+ markets with local staff who know their communities. National consistency with local expertise.</p>
        <h2>Quality Over Volume</h2>
        <p>We'd rather turn down work than send bad staff. Our reputation is built on reliability. We protect it.</p>
        <h2>Transparent Communication</h2>
        <p>No surprises. If there's a problem, you'll hear about it from us before it becomes your problem.</p>
        <h2>Training Investment</h2>
        <p>We invest in our people. Brand training, skill development, ongoing coaching. Better staff = better results.</p>
        <h2>Partnership Mindset</h2>
        <p>We're not just filling orders. We're building relationships. Many of our clients have worked with us for 10+ years.</p>
        <h2>Prove It</h2>
        <p>Don't take our word for it. Start with a small project. See how we perform. Then decide.</p>
        <hr className="my-12" />
        <div className="not-prose">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Let's Work Together</h2>
            <p className="mb-6 text-blue-200">Air Fresh is ready to make your next event unforgettable.</p>
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Link href="/contact">Contact Us <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
        {/* Internal Links Section */}
        <BlogInternalLinks />
      </div>
    </article>
  );
}
