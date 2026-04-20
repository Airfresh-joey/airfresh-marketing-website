import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mobile Marketing Tours | Air Fresh Marketing',
  description: 'Take your brand on the road. Here\'s how to plan and execute successful mobile marketing tours and roadshows.',
  keywords: 'mobile marketing tour, brand roadshow, experiential tour, mobile activation, touring promotion',
};

export default function MobileMarketingTours() {
  return (
    <article className="pt-16 min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@graph": [
                            {
                                      "@type": "Article",
                                      "headline": "Mobile Marketing Tours",
                                      "description": "Take your brand on the road. Here's how to plan and execute successful mobile marketing tours and roadshows.",
                                      "datePublished": "2024-03-18",
                                      "dateModified": "2024-03-18",
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
                                                "@id": "https://www.airfreshmarketing.com/blog/mobile-marketing-tours"
                                      },
                                      "inLanguage": "en-US",
                                      "keywords": "mobile marketing tour, brand roadshow, experiential tour, mobile activation, touring promotion"
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
                                                          "name": "Mobile Marketing Tours",
                                                          "item": "https://www.airfreshmarketing.com/blog/mobile-marketing-tours"
                                                }
                                      ]
                            }
                  ]
        }) }}
      />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Mobile Marketing Tours" }]} />

      <header className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-orange-200 mb-4">March 18, 2024 · 8 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Mobile Marketing Tours: Taking Your Brand on the Road</h1>
          <p className="text-xl text-orange-200">One footprint. Multiple markets. Maximum reach.</p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <p>Mobile tours let you bring a consistent brand experience to multiple markets without building permanent installations everywhere. One investment, many touchpoints.</p>
        <h2>Tour Types</h2>
        <ul>
          <li><strong>Vehicle-based:</strong> Branded trucks, trailers, buses</li>
          <li><strong>Pop-up format:</strong> Portable setups that travel</li>
          <li><strong>Festival circuit:</strong> Following event calendars</li>
          <li><strong>Retail tour:</strong> Store-to-store activations</li>
          <li><strong>College tour:</strong> Campus-to-campus programs</li>
        </ul>
        <h2>Planning Considerations</h2>
        <p><strong>Route planning:</strong> Logical geography, minimize drive time, maximize market impact.</p>
        <p><strong>Staffing model:</strong> Touring crew vs. local market staff at each stop.</p>
        <p><strong>Logistics:</strong> Vehicle maintenance, accommodation, equipment transport.</p>
        <p><strong>Permits:</strong> Different requirements in each market.</p>
        <h2>Staffing Options</h2>
        <ul>
          <li><strong>Touring team:</strong> Same staff travel the whole tour. Consistency, deep brand knowledge.</li>
          <li><strong>Local staff:</strong> Hire in each market. Lower travel costs, local knowledge.</li>
          <li><strong>Hybrid:</strong> Core touring team + local support. Best of both.</li>
        </ul>
        <hr className="my-12" />
        <div className="not-prose">
          <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Planning a Tour?</h2>
            <p className="mb-6 text-orange-200">Air Fresh supports mobile tours with national staffing.</p>
            <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              <Link href="/contact">Get a Quote <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
