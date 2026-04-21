import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import BlogInternalLinks from '@/components/BlogInternalLinks';

export const metadata: Metadata = {
  title: 'Cannabis Marketing Events: Navigating the Green Rush | Air Fresh Marketing',
  description: 'Cannabis marketing faces unique restrictions. Here\'s how brands create compliant, effective events and activations.',
  keywords: 'cannabis marketing, cannabis events, dispensary marketing, cannabis brand activation, 420 marketing, cannabis sampling',  alternates: {
    canonical: 'https://www.airfreshmarketing.com/blog/cannabis-marketing-events',
  },

};

export default function CannabisMarketing() {
  return (
    <article className="pt-16 min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@graph": [
                            {
                                      "@type": "Article",
                                      "headline": "Cannabis Marketing Events: Navigating the Green Rush",
                                      "description": "Cannabis marketing faces unique restrictions. Here's how brands create compliant, effective events and activations.",
                                      "datePublished": "2025-09-25",
                                      "dateModified": "2025-09-25",
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
                                                "@id": "https://www.airfreshmarketing.com/blog/cannabis-marketing-events"
                                      },
                                      "inLanguage": "en-US",
                                      "keywords": "cannabis marketing, cannabis events, dispensary marketing, cannabis brand activation, 420 marketing, cannabis sampling"
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
                                                          "name": "Cannabis Marketing Events: Navigating the Green Rush",
                                                          "item": "https://www.airfreshmarketing.com/blog/cannabis-marketing-events"
                                                }
                                      ]
                            }
                  ]
        }) }}
      />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Cannabis Marketing Events: Navigating the Green Rush" }]} />

      <header className="bg-gradient-to-r from-lime-600 to-green-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lime-200 mb-4">September 25, 2025 · 10 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Cannabis Marketing: Events in a Restricted Category</h1>
          <p className="text-xl text-lime-100">How brands are building in the most regulated industry in America.</p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <p>Cannabis is legal in some form in most states, but marketing it remains heavily restricted. No traditional advertising in most cases. No social media ads. No mainstream sponsorships. So how do cannabis brands build awareness?</p>
        <p>Events and experiences.</p>
        <h2>The Regulatory Reality</h2>
        <p>Every state has different rules. Common restrictions:</p>
        <ul>
          <li>No advertising visible from public spaces</li>
          <li>No marketing to minors (strict age-gating)</li>
          <li>No health claims</li>
          <li>No consumption at events (in most states)</li>
          <li>Strict location requirements</li>
        </ul>
        <p>Work with compliance experts before any activation. Getting it wrong can cost your license.</p>
        <h2>What Works</h2>
        <p><strong>Dispensary events:</strong> In-store education, brand days, loyalty events. Controlled environment, compliant setting.</p>
        <p><strong>Industry events:</strong> Cannabis conferences, trade shows, B2B networking. Reach retailers and industry insiders.</p>
        <p><strong>Lifestyle adjacency:</strong> Partner with legal events (music, art, wellness) for brand presence without product presence.</p>
        <p><strong>Education:</strong> Budtender training, consumer education events. Build preference through knowledge.</p>
        <h2>Staffing Cannabis Events</h2>
        <p>Unique requirements:</p>
        <ul>
          <li>Age 21+ (strictly enforced)</li>
          <li>Background checks (often required by state)</li>
          <li>Cannabis knowledge (products, effects, terminology)</li>
          <li>Compliance training (what can/cannot be said)</li>
          <li>Professional demeanor (combating stigma)</li>
        </ul>
        <hr className="my-12" />
        <div className="not-prose">
          <div className="bg-gradient-to-r from-lime-600 to-green-600 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Need Cannabis Event Staff?</h2>
            <p className="mb-6 text-lime-100">Air Fresh provides compliant staffing for dispensary events, trade shows, and cannabis brand activations in legal markets.</p>
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Link href="/contact">Get a Quote <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
        {/* Internal Links Section */}
        <BlogInternalLinks />
      </div>
    </article>
  );
}
