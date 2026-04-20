import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cause Marketing Events | Air Fresh Marketing',
  description: 'Brand + cause = powerful connection. Here\'s how to execute cause marketing events that drive impact and affinity.',
  keywords: 'cause marketing, cause marketing events, brand purpose events, social impact marketing, charity events',
};

export default function CauseMarketingEvents() {
  return (
    <article className="pt-16 min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@graph": [
                            {
                                      "@type": "Article",
                                      "headline": "Cause Marketing Events",
                                      "description": "Brand + cause = powerful connection. Here's how to execute cause marketing events that drive impact and affinity.",
                                      "datePublished": "2024-01-06",
                                      "dateModified": "2024-01-06",
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
                                                "@id": "https://www.airfreshmarketing.com/blog/cause-marketing-events"
                                      },
                                      "inLanguage": "en-US",
                                      "keywords": "cause marketing, cause marketing events, brand purpose events, social impact marketing, charity events"
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
                                                          "name": "Cause Marketing Events",
                                                          "item": "https://www.airfreshmarketing.com/blog/cause-marketing-events"
                                                }
                                      ]
                            }
                  ]
        }) }}
      />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Cause Marketing Events" }]} />

      <header className="bg-gradient-to-r from-emerald-600 to-green-700 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-emerald-200 mb-4">January 6, 2024 · 7 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Cause Marketing Events: Purpose Meets Activation</h1>
          <p className="text-xl text-emerald-200">When brands stand for something, people notice.</p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <p>Consumers increasingly choose brands that align with their values. Cause marketing events make that alignment tangible and visible.</p>
        <h2>Cause Marketing Types</h2>
        <ul>
          <li><strong>Charity partnerships:</strong> Events benefiting nonprofit partners</li>
          <li><strong>Awareness campaigns:</strong> Educating about issues</li>
          <li><strong>Volunteer activations:</strong> Getting attendees involved</li>
          <li><strong>Donation drives:</strong> Collecting money, goods, or time</li>
          <li><strong>Sustainability events:</strong> Environmental focus</li>
        </ul>
        <h2>Authenticity Matters</h2>
        <p><strong>Alignment:</strong> Cause should connect to brand values and audience.</p>
        <p><strong>Commitment:</strong> Not just one event - ongoing partnership.</p>
        <p><strong>Transparency:</strong> Clear about where donations go.</p>
        <p><strong>Action:</strong> Real impact, not just marketing veneer.</p>
        <h2>Staff Considerations</h2>
        <ul>
          <li>Genuine passion for the cause</li>
          <li>Knowledge about the nonprofit/issue</li>
          <li>Sensitivity training if needed</li>
          <li>Ability to handle emotional topics</li>
        </ul>
        <h2>Measuring Impact</h2>
        <ul>
          <li>Donations raised</li>
          <li>Volunteer hours generated</li>
          <li>Awareness metrics</li>
          <li>Brand sentiment shift</li>
        </ul>
        <hr className="my-12" />
        <div className="not-prose">
          <div className="bg-gradient-to-r from-emerald-600 to-green-700 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Cause Event Support?</h2>
            <p className="mb-6 text-emerald-200">Air Fresh staffs cause marketing events with care.</p>
            <Button asChild size="lg" className="bg-white text-green-700 hover:bg-gray-100">
              <Link href="/contact">Get Started <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
