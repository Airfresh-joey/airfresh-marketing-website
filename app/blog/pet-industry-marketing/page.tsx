import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pet Industry Marketing: Reaching Pet Parents | Air Fresh Marketing',
  description: 'Pet parents are passionate and loyal. Here\'s how to market pet products through experiential campaigns.',
  keywords: 'pet marketing, pet industry marketing, pet product sampling, pet events, pet brand activation',
};

export default function PetMarketing() {
  return (
    <article className="pt-16 min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@graph": [
                            {
                                      "@type": "Article",
                                      "headline": "Pet Industry Marketing: Reaching Pet Parents",
                                      "description": "Pet parents are passionate and loyal. Here's how to market pet products through experiential campaigns.",
                                      "datePublished": "2025-06-18",
                                      "dateModified": "2025-06-18",
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
                                                "@id": "https://www.airfreshmarketing.com/blog/pet-industry-marketing"
                                      },
                                      "inLanguage": "en-US",
                                      "keywords": "pet marketing, pet industry marketing, pet product sampling, pet events, pet brand activation"
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
                                                          "name": "Pet Industry Marketing: Reaching Pet Parents",
                                                          "item": "https://www.airfreshmarketing.com/blog/pet-industry-marketing"
                                                }
                                      ]
                            }
                  ]
        }) }}
      />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Pet Industry Marketing: Reaching Pet Parents" }]} />

      <header className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cyan-200 mb-4">June 18, 2025 · 7 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Pet Industry Marketing: Winning Over Pet Parents</h1>
          <p className="text-xl text-cyan-100">Pet parents treat pets like family. Market accordingly.</p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <p>The pet industry is booming - $136 billion in the US alone. Pet parents are passionate, loyal, and willing to spend on products that genuinely help their furry family members.</p>
        <h2>Where to Reach Pet Parents</h2>
        <p><strong>Pet stores:</strong> PetSmart, Petco, independent retailers. Sampling and demos at point of purchase.</p>
        <p><strong>Dog parks:</strong> Captive audience of engaged pet owners. Great for treats, accessories, services.</p>
        <p><strong>Pet events:</strong> Adoption events, dog shows, pet expos. Concentrated enthusiasts.</p>
        <p><strong>Vet offices:</strong> Trusted environment. Premium positioning.</p>
        <p><strong>Pet-friendly businesses:</strong> Breweries, cafes, hotels that welcome dogs.</p>
        <h2>Pet Product Sampling</h2>
        <p>Pet sampling has unique dynamics:</p>
        <ul>
          <li>The pet decides if they like it (can't fake enthusiasm)</li>
          <li>Owners watch their pet's reaction closely</li>
          <li>Positive reactions create strong emotional connection</li>
          <li>Photo opportunities are natural (owners love sharing)</li>
        </ul>
        <h2>Staff Requirements</h2>
        <ul>
          <li>Genuine love of animals (pets can tell)</li>
          <li>Comfortable handling various breeds</li>
          <li>Knowledge of pet nutrition/care basics</li>
          <li>Patience (pets are unpredictable)</li>
        </ul>
        <hr className="my-12" />
        <div className="not-prose">
          <div className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Marketing Pet Products?</h2>
            <p className="mb-6 text-cyan-100">Air Fresh staffs pet industry events and sampling programs.</p>
            <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
              <Link href="/contact">Get Started <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
