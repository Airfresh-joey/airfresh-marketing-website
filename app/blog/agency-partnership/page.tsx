import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Agency Partnership: Working With Air Fresh | Air Fresh Marketing',
  description: 'Agencies: extend your reach with our nationwide staffing network. Here\'s how to partner with Air Fresh Marketing.',
  keywords: 'agency partnership, staffing partner, experiential agency, marketing agency staffing, agency support',
};

export default function AgencyPartnership() {
  return (
    <article className="pt-16 min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@graph": [
                            {
                                      "@type": "Article",
                                      "headline": "Agency Partnership: Working With Air Fresh",
                                      "description": "Agencies: extend your reach with our nationwide staffing network. Here's how to partner with Air Fresh Marketing.",
                                      "datePublished": "2024-09-08",
                                      "dateModified": "2024-09-08",
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
                                                "@id": "https://www.airfreshmarketing.com/blog/agency-partnership"
                                      },
                                      "inLanguage": "en-US",
                                      "keywords": "agency partnership, staffing partner, experiential agency, marketing agency staffing, agency support"
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
                                                          "name": "Agency Partnership: Working With Air Fresh",
                                                          "item": "https://www.airfreshmarketing.com/blog/agency-partnership"
                                                }
                                      ]
                            }
                  ]
        }) }}
      />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Agency Partnership: Working With Air Fresh" }]} />

      <header className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-emerald-200 mb-4">September 8, 2024 · 6 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Agency Partnership: Extend Your Capabilities</h1>
          <p className="text-xl text-emerald-200">You bring the strategy. We bring the nationwide execution.</p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <p>Marketing agencies often need staffing support for experiential campaigns. Rather than building staffing infrastructure in every market, partner with us.</p>
        <h2>Why Agencies Partner With Us</h2>
        <ul>
          <li><strong>National footprint:</strong> Staff in markets where your clients need them</li>
          <li><strong>Scalability:</strong> From 5 staff to 500, we flex with your needs</li>
          <li><strong>White label option:</strong> We work behind the scenes as your team</li>
          <li><strong>Reliability:</strong> We don't make you look bad to your clients</li>
          <li><strong>Training infrastructure:</strong> We handle the people logistics</li>
        </ul>
        <h2>How We Work Together</h2>
        <p><strong>You own the relationship:</strong> We're your execution partner, not your competitor.</p>
        <p><strong>Transparent pricing:</strong> Consistent rates you can build into proposals.</p>
        <p><strong>Single point of contact:</strong> One account manager for all your programs.</p>
        <p><strong>Brand training:</strong> We train our staff on your client's brands.</p>
        <h2>Partnership Benefits</h2>
        <ul>
          <li>Preferred rates for volume</li>
          <li>Priority staffing for tight timelines</li>
          <li>Co-marketing opportunities</li>
          <li>Referral compensation</li>
        </ul>
        <hr className="my-12" />
        <div className="not-prose">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Agency Partnership?</h2>
            <p className="mb-6 text-emerald-200">Air Fresh partners with agencies for nationwide experiential execution.</p>
            <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
              <Link href="/contact">Become a Partner <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
