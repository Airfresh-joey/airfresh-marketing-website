import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import BlogInternalLinks from '@/components/BlogInternalLinks';

export const metadata: Metadata = {
  title: 'Hospitality Staffing: Hotels, Restaurants, and Events | Air Fresh Marketing',
  description: 'Hospitality staffing requires a special touch. Here\'s how to find and manage staff for hotels, restaurants, and hospitality events.',
  keywords: 'hospitality staffing, hotel event staff, restaurant event staff, hospitality marketing, hotel activations',  alternates: {
    canonical: 'https://www.airfreshmarketing.com/blog/hospitality-staffing',
  },

};

export default function HospitalityStaffing() {
  return (
    <article className="pt-16 min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@graph": [
                            {
                                      "@type": "Article",
                                      "headline": "Hospitality Staffing: Hotels, Restaurants, and Events",
                                      "description": "Hospitality staffing requires a special touch. Here's how to find and manage staff for hotels, restaurants, and hospitality events.",
                                      "datePublished": "2025-06-28",
                                      "dateModified": "2025-06-28",
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
                                                "@id": "https://www.airfreshmarketing.com/blog/hospitality-staffing"
                                      },
                                      "inLanguage": "en-US",
                                      "keywords": "hospitality staffing, hotel event staff, restaurant event staff, hospitality marketing, hotel activations"
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
                                                          "name": "Hospitality Staffing: Hotels, Restaurants, and Events",
                                                          "item": "https://www.airfreshmarketing.com/blog/hospitality-staffing"
                                                }
                                      ]
                            }
                  ]
        }) }}
      />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Hospitality Staffing: Hotels, Restaurants, and Events" }]} />

      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-200 mb-4">June 28, 2025 · 8 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hospitality Staffing: The Art of Guest Experience</h1>
          <p className="text-xl text-amber-100">Hotels and restaurants live on service. Your event staff should too.</p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <p>Hospitality is different. It's not about transactions - it's about experiences. Every interaction shapes how guests feel about a property or brand. That standard applies to event staff too.</p>
        <h2>Hospitality Event Types</h2>
        <ul>
          <li><strong>Hotel launches and renovations</strong> - Grand openings, reveal events, press tours</li>
          <li><strong>Restaurant openings</strong> - Soft launches, media dinners, VIP previews</li>
          <li><strong>Brand activations at properties</strong> - Sponsors using hotel/restaurant venues</li>
          <li><strong>Conference and meeting support</strong> - Registration, ushering, breakout management</li>
          <li><strong>Wedding and social events</strong> - Guest services, coordination support</li>
        </ul>
        <h2>The Hospitality Standard</h2>
        <p>Hospitality staff need to meet a higher bar:</p>
        <ul>
          <li>Anticipate needs before being asked</li>
          <li>Remember names and preferences</li>
          <li>Handle complaints gracefully</li>
          <li>Maintain composure under pressure</li>
          <li>Represent luxury without arrogance</li>
        </ul>
        <h2>Finding Hospitality Talent</h2>
        <p>The best hospitality event staff often come from:</p>
        <ul>
          <li>Fine dining backgrounds</li>
          <li>Luxury hotel experience</li>
          <li>High-end retail</li>
          <li>Flight attendant experience</li>
          <li>Concierge services</li>
        </ul>
        <p>These backgrounds instill service orientation that's hard to train.</p>
        <hr className="my-12" />
        <div className="not-prose">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Need Hospitality Event Staff?</h2>
            <p className="mb-6 text-amber-100">Air Fresh provides polished staff for hotel and restaurant events.</p>
            <Button asChild size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
              <Link href="/get-quote?source=blog-hospitality-staffing&intent=article-cta">Get a Quote <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
        {/* Internal Links Section */}
        <BlogInternalLinks />
      </div>
    </article>
  );
}
