import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import BlogInternalLinks from '@/components/BlogInternalLinks';

export const metadata: Metadata = {
  title: 'Office Building Marketing | Air Fresh Marketing',
  description: 'Reach professionals where they work. Here\'s how to execute marketing in office buildings and corporate campuses.',
  keywords: 'office marketing, corporate marketing, office building sampling, workplace marketing, b2b sampling',  alternates: {
    canonical: 'https://www.airfreshmarketing.com/blog/office-building-marketing',
  },

};

export default function OfficeBuildingMarketing() {
  return (
    <article className="pt-16 min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@graph": [
                            {
                                      "@type": "Article",
                                      "headline": "Office Building Marketing",
                                      "description": "Reach professionals where they work. Here's how to execute marketing in office buildings and corporate campuses.",
                                      "datePublished": "2023-11-16",
                                      "dateModified": "2023-11-16",
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
                                                "@id": "https://www.airfreshmarketing.com/blog/office-building-marketing"
                                      },
                                      "inLanguage": "en-US",
                                      "keywords": "office marketing, corporate marketing, office building sampling, workplace marketing, b2b sampling"
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
                                                          "name": "Office Building Marketing",
                                                          "item": "https://www.airfreshmarketing.com/blog/office-building-marketing"
                                                }
                                      ]
                            }
                  ]
        }) }}
      />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Office Building Marketing" }]} />

      <header className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-200 mb-4">November 16, 2023 · 6 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Office Building Marketing</h1>
          <p className="text-xl text-blue-200">Professionals. Predictable traffic. Purchasing power.</p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <p>Office buildings concentrate professionals in predictable patterns. Morning arrivals, lunch breaks, evening departures - each offers touchpoints for the right brands.</p>
        <h2>Access Points</h2>
        <ul>
          <li><strong>Building lobbies:</strong> High traffic, visible placement</li>
          <li><strong>Food courts/cafeterias:</strong> Lunch crowd access</li>
          <li><strong>Parking structures:</strong> Coming and going</li>
          <li><strong>Outdoor plazas:</strong> Common areas between buildings</li>
          <li><strong>Corporate events:</strong> Wellness fairs, appreciation days</li>
        </ul>
        <h2>Product Categories</h2>
        <p><strong>Food/beverage:</strong> Breakfast, lunch, snacks, coffee, energy.</p>
        <p><strong>Wellness:</strong> Vitamins, supplements, health services.</p>
        <p><strong>Financial services:</strong> Banking, insurance, investing.</p>
        <p><strong>B2B services:</strong> Software, tools, services for businesses.</p>
        <h2>Gaining Access</h2>
        <ul>
          <li>Building management partnerships</li>
          <li>Property management companies</li>
          <li>Corporate tenant relationships</li>
          <li>Wellness program integrations</li>
        </ul>
        <hr className="my-12" />
        <div className="not-prose">
          <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Office Marketing Staff?</h2>
            <p className="mb-6 text-blue-200">Air Fresh provides professional staff for office activations.</p>
            <Button asChild size="lg" className="bg-white text-indigo-800 hover:bg-gray-100">
              <Link href="/get-quote?source=blog-office-building-marketing&intent=article-cta">Get a Quote <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
        {/* Internal Links Section */}
        <BlogInternalLinks />
      </div>
    </article>
  );
}
