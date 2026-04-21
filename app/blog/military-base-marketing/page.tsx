import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import BlogInternalLinks from '@/components/BlogInternalLinks';

export const metadata: Metadata = {
  title: 'Military Base Marketing | Air Fresh Marketing',
  description: 'Reaching military personnel and families requires special access. Here\'s how to market on military installations.',
  keywords: 'military marketing, military base marketing, armed forces marketing, military family marketing, base activation',  alternates: {
    canonical: 'https://www.airfreshmarketing.com/blog/military-base-marketing',
  },

};

export default function MilitaryMarketing() {
  return (
    <article className="pt-16 min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@graph": [
                            {
                                      "@type": "Article",
                                      "headline": "Military Base Marketing",
                                      "description": "Reaching military personnel and families requires special access. Here's how to market on military installations.",
                                      "datePublished": "2023-11-06",
                                      "dateModified": "2023-11-06",
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
                                                "@id": "https://www.airfreshmarketing.com/blog/military-base-marketing"
                                      },
                                      "inLanguage": "en-US",
                                      "keywords": "military marketing, military base marketing, armed forces marketing, military family marketing, base activation"
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
                                                          "name": "Military Base Marketing",
                                                          "item": "https://www.airfreshmarketing.com/blog/military-base-marketing"
                                                }
                                      ]
                            }
                  ]
        }) }}
      />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Military Base Marketing" }]} />

      <header className="bg-gradient-to-r from-slate-700 to-slate-900 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-slate-300 mb-4">November 6, 2023 · 7 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Military Base Marketing</h1>
          <p className="text-xl text-slate-300">A loyal, underserved market with unique access requirements.</p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <p>Military personnel and families represent a substantial, loyal consumer segment. But reaching them requires understanding base access, military culture, and appropriate channels.</p>
        <h2>Access Channels</h2>
        <ul>
          <li><strong>Exchange stores (AAFES, NEX):</strong> Retail on base</li>
          <li><strong>Commissaries (DeCA):</strong> Grocery stores on base</li>
          <li><strong>MWR events:</strong> Morale, Welfare & Recreation programming</li>
          <li><strong>Base welcome centers:</strong> Reaching new arrivals</li>
          <li><strong>Off-base housing areas:</strong> Military communities</li>
        </ul>
        <h2>Understanding the Audience</h2>
        <p><strong>Young demographic:</strong> Many service members are 18-35.</p>
        <p><strong>Family-focused:</strong> Strong family orientation.</p>
        <p><strong>Mobile lifestyle:</strong> Frequent moves, deployment cycles.</p>
        <p><strong>Brand loyalty:</strong> Once earned, military loyalty runs deep.</p>
        <h2>Special Considerations</h2>
        <ul>
          <li>Background checks for base access</li>
          <li>Respect for military culture and values</li>
          <li>Coordination with base public affairs</li>
          <li>Understanding of rank structure</li>
        </ul>
        <hr className="my-12" />
        <div className="not-prose">
          <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Military Market Access?</h2>
            <p className="mb-6 text-slate-300">Air Fresh has experience with military base activations.</p>
            <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-gray-100">
              <Link href="/contact">Let's Talk <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
        {/* Internal Links Section */}
        <BlogInternalLinks />
      </div>
    </article>
  );
}
