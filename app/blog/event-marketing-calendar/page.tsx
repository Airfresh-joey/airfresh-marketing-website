import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Event Marketing Calendar: Planning Your Year | Air Fresh Marketing',
  description: 'When to run experiential campaigns for maximum impact. A month-by-month marketing calendar.',
  keywords: 'event marketing calendar, experiential marketing timing, marketing calendar, seasonal marketing events',  alternates: {
    canonical: 'https://www.airfreshmarketing.com/blog/event-marketing-calendar',
  },

};

export default function MarketingCalendar() {
  return (
    <article className="pt-16 min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@graph": [
                            {
                                      "@type": "Article",
                                      "headline": "Event Marketing Calendar: Planning Your Year",
                                      "description": "When to run experiential campaigns for maximum impact. A month-by-month marketing calendar.",
                                      "datePublished": "2023-08-16",
                                      "dateModified": "2023-08-16",
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
                                                "@id": "https://www.airfreshmarketing.com/blog/event-marketing-calendar"
                                      },
                                      "inLanguage": "en-US",
                                      "keywords": "event marketing calendar, experiential marketing timing, marketing calendar, seasonal marketing events"
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
                                                          "name": "Event Marketing Calendar: Planning Your Year",
                                                          "item": "https://www.airfreshmarketing.com/blog/event-marketing-calendar"
                                                }
                                      ]
                            }
                  ]
        }) }}
      />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Event Marketing Calendar: Planning Your Year" }]} />

      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-200 mb-4">August 16, 2023 · 9 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Event Marketing Calendar: Planning Your Year</h1>
          <p className="text-xl text-blue-200">Timing is everything in experiential.</p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <p>Different times of year offer different opportunities. Here's a month-by-month guide to experiential marketing timing.</p>
        <h2>Q1: January - March</h2>
        <p><strong>January:</strong> New Year resolutions (fitness, health), CES, winter sports.</p>
        <p><strong>February:</strong> Super Bowl, Valentine's Day, trade shows resume.</p>
        <p><strong>March:</strong> SXSW, March Madness, spring break, St. Patrick's Day.</p>
        <h2>Q2: April - June</h2>
        <p><strong>April:</strong> Tax season ends, Easter, spring events ramp up.</p>
        <p><strong>May:</strong> Cinco de Mayo, Mother's Day, Memorial Day, graduations.</p>
        <p><strong>June:</strong> Pride Month, summer kicks off, Father's Day, festivals begin.</p>
        <h2>Q3: July - September</h2>
        <p><strong>July:</strong> July 4th, peak summer, outdoor events.</p>
        <p><strong>August:</strong> Back to school, summer's last hurrah.</p>
        <p><strong>September:</strong> Labor Day, fall sports start, trade shows resume.</p>
        <h2>Q4: October - December</h2>
        <p><strong>October:</strong> Halloween, fall festivals, playoff season.</p>
        <p><strong>November:</strong> Veterans Day, Thanksgiving, Black Friday, holiday prep.</p>
        <p><strong>December:</strong> Holiday season peak, New Year's Eve.</p>
        <h2>Planning Lead Times</h2>
        <ul>
          <li>Major events: 3-6 months out</li>
          <li>Standard programs: 4-8 weeks</li>
          <li>Minimum viable: 2 weeks</li>
        </ul>
        <hr className="my-12" />
        <div className="not-prose">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Plan Your Year</h2>
            <p className="mb-6 text-blue-200">Air Fresh helps you plan experiential programs year-round.</p>
            <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
              <Link href="/contact">Start Planning <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>

        {/* Internal Links Section */}
        <div className="not-prose mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Explore More Resources</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link href="/services" className="text-sm text-primary hover:underline">Our Services</Link>
            <Link href="/services/brand-ambassadors" className="text-sm text-primary hover:underline">Brand Ambassador Services</Link>
            <Link href="/services/experiential-marketing" className="text-sm text-primary hover:underline">Experiential Marketing</Link>
            <Link href="/services/convention-staffing" className="text-sm text-primary hover:underline">Convention Staffing</Link>
            <Link href="/services/sampling" className="text-sm text-primary hover:underline">Product Sampling</Link>
            <Link href="/services/street-teams" className="text-sm text-primary hover:underline">Street Teams</Link>
            <Link href="/guides/event-staffing-101" className="text-sm text-primary hover:underline">Event Staffing 101 Guide</Link>
            <Link href="/guides/brand-ambassador-hiring-guide" className="text-sm text-primary hover:underline">Brand Ambassador Hiring Guide</Link>
            <Link href="/pricing" className="text-sm text-primary hover:underline">Pricing &amp; Rates</Link>
            <Link href="/locations" className="text-sm text-primary hover:underline">All Locations</Link>
          </div>
        </div>
      </div>
    </article>
  );
}
