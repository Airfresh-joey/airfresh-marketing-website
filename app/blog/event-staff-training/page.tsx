import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Event Staff Training Best Practices | Air Fresh Marketing',
  description: 'Good training is the difference between great events and disasters. Here\'s how to train event staff effectively.',
  keywords: 'event staff training, brand ambassador training, promotional staff training, event training best practices',  alternates: {
    canonical: 'https://www.airfreshmarketing.com/blog/event-staff-training',
  },

};

export default function StaffTraining() {
  return (
    <article className="pt-16 min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@graph": [
                            {
                                      "@type": "Article",
                                      "headline": "Event Staff Training Best Practices",
                                      "description": "Good training is the difference between great events and disasters. Here's how to train event staff effectively.",
                                      "datePublished": "2024-07-28",
                                      "dateModified": "2024-07-28",
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
                                                "@id": "https://www.airfreshmarketing.com/blog/event-staff-training"
                                      },
                                      "inLanguage": "en-US",
                                      "keywords": "event staff training, brand ambassador training, promotional staff training, event training best practices"
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
                                                          "name": "Event Staff Training Best Practices",
                                                          "item": "https://www.airfreshmarketing.com/blog/event-staff-training"
                                                }
                                      ]
                            }
                  ]
        }) }}
      />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Event Staff Training Best Practices" }]} />

      <header className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-green-200 mb-4">July 28, 2024 · 8 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Event Staff Training: Setting Teams Up to Win</h1>
          <p className="text-xl text-green-200">Training is an investment, not a cost.</p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <p>The difference between a good event and a great one often comes down to training. Well-trained staff create better experiences, drive better results, and represent your brand better.</p>
        <h2>Training Components</h2>
        <ul>
          <li><strong>Brand overview:</strong> Who is this brand, what do they stand for?</li>
          <li><strong>Product knowledge:</strong> Features, benefits, key talking points</li>
          <li><strong>Role specifics:</strong> Exactly what they'll be doing</li>
          <li><strong>Engagement techniques:</strong> How to approach, engage, close</li>
          <li><strong>FAQs:</strong> Common questions and how to answer them</li>
          <li><strong>Logistics:</strong> Where, when, what to wear, who to contact</li>
        </ul>
        <h2>Training Formats</h2>
        <p><strong>In-person training:</strong> Best for complex roles, high-stakes events. Allows for practice and role-play.</p>
        <p><strong>Video training:</strong> Scalable for multi-market programs. Good for consistent messaging.</p>
        <p><strong>Written briefs:</strong> Quick reference for simpler roles. Always provide even for trained staff.</p>
        <p><strong>On-site briefings:</strong> Day-of refreshers before event start.</p>
        <h2>Training Timing</h2>
        <ul>
          <li>Complex roles: 1-2 weeks before, with refresher day-of</li>
          <li>Standard roles: 48-72 hours before</li>
          <li>Simple roles: 24 hours before + day-of brief</li>
          <li>Always: Written brief they can reference</li>
        </ul>
        <hr className="my-12" />
        <div className="not-prose">
          <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Training Included</h2>
            <p className="mb-6 text-green-200">Air Fresh handles training for all our event staff.</p>
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Link href="/contact">Learn More <ArrowRight className="w-5 h-5 ml-2" /></Link>
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
