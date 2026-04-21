import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import BlogInternalLinks from '@/components/BlogInternalLinks';

export const metadata: Metadata = {
  title: 'Event Permits and Legal Requirements | Air Fresh Marketing',
  description: 'Events require permits and legal compliance. Here\'s what you need to know about event permits, insurance, and legal requirements.',
  keywords: 'event permits, event insurance, event legal requirements, activation permits, street team permits',  alternates: {
    canonical: 'https://www.airfreshmarketing.com/blog/event-permits-legal',
  },

};

export default function EventPermits() {
  return (
    <article className="pt-16 min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@graph": [
                            {
                                      "@type": "Article",
                                      "headline": "Event Permits and Legal Requirements",
                                      "description": "Events require permits and legal compliance. Here's what you need to know about event permits, insurance, and legal requirements.",
                                      "datePublished": "2024-04-28",
                                      "dateModified": "2024-04-28",
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
                                                "@id": "https://www.airfreshmarketing.com/blog/event-permits-legal"
                                      },
                                      "inLanguage": "en-US",
                                      "keywords": "event permits, event insurance, event legal requirements, activation permits, street team permits"
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
                                                          "name": "Event Permits and Legal Requirements",
                                                          "item": "https://www.airfreshmarketing.com/blog/event-permits-legal"
                                                }
                                      ]
                            }
                  ]
        }) }}
      />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Event Permits and Legal Requirements" }]} />

      <header className="bg-gradient-to-r from-slate-600 to-gray-800 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-slate-300 mb-4">April 28, 2024 · 8 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Event Permits and Legal Requirements</h1>
          <p className="text-xl text-slate-300">The unglamorous but essential side of events.</p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <p>Skip the permits and you might get shut down. Skip the insurance and you're exposed to liability. Legal compliance isn't exciting, but it's essential.</p>
        <h2>Common Permits</h2>
        <ul>
          <li><strong>Street/sidewalk permits:</strong> Required for most public space activations</li>
          <li><strong>Food handling:</strong> Required for any food sampling</li>
          <li><strong>Alcohol permits:</strong> Required for any alcohol distribution</li>
          <li><strong>Noise permits:</strong> For amplified sound</li>
          <li><strong>Fire permits:</strong> For tents, large gatherings</li>
        </ul>
        <h2>Insurance Requirements</h2>
        <p><strong>General liability:</strong> Standard requirement, usually $1-2M minimum.</p>
        <p><strong>Workers comp:</strong> Required for staff in most states.</p>
        <p><strong>Auto insurance:</strong> For vehicle-based activations.</p>
        <p><strong>Product liability:</strong> For sampling programs.</p>
        <h2>Timeline</h2>
        <ul>
          <li>Major city permits: 4-8 weeks advance</li>
          <li>Standard permits: 2-4 weeks</li>
          <li>Private property: Permission from owner</li>
        </ul>
        <h2>Common Mistakes</h2>
        <ul>
          <li>Assuming no permit needed (always check)</li>
          <li>Starting too late (permits take time)</li>
          <li>Wrong jurisdiction (city vs. county vs. state)</li>
          <li>Incomplete applications (delays approval)</li>
        </ul>
        <hr className="my-12" />
        <div className="not-prose">
          <div className="bg-gradient-to-r from-slate-600 to-gray-800 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Compliance Handled</h2>
            <p className="mb-6 text-slate-300">Air Fresh carries proper insurance and helps navigate permit requirements.</p>
            <Button asChild size="lg" className="bg-white text-gray-800 hover:bg-gray-100">
              <Link href="/contact">Learn More <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
        {/* Internal Links Section */}
        <BlogInternalLinks />
      </div>
    </article>
  );
}
