import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Drug Store and Pharmacy Marketing | Air Fresh Marketing',
  description: 'CVS, Walgreens, and pharmacy retail offer unique marketing opportunities. Here\'s how to reach health-conscious consumers.',
  keywords: 'cvs marketing, walgreens marketing, pharmacy marketing, drug store marketing, pharmacy demos',
};

export default function PharmacyMarketing() {
  return (
    <article className="pt-16 min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@graph": [
                            {
                                      "@type": "Article",
                                      "headline": "Drug Store and Pharmacy Marketing",
                                      "description": "CVS, Walgreens, and pharmacy retail offer unique marketing opportunities. Here's how to reach health-conscious consumers.",
                                      "datePublished": "2024-11-18",
                                      "dateModified": "2024-11-18",
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
                                                "@id": "https://www.airfreshmarketing.com/blog/drug-store-marketing"
                                      },
                                      "inLanguage": "en-US",
                                      "keywords": "cvs marketing, walgreens marketing, pharmacy marketing, drug store marketing, pharmacy demos"
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
                                                          "name": "Drug Store and Pharmacy Marketing",
                                                          "item": "https://www.airfreshmarketing.com/blog/drug-store-marketing"
                                                }
                                      ]
                            }
                  ]
        }) }}
      />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Drug Store and Pharmacy Marketing" }]} />

      <header className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-200 mb-4">November 18, 2024 · 7 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Drug Store Marketing: Health Meets Convenience</h1>
          <p className="text-xl text-blue-200">Pharmacy retail reaches health-conscious consumers.</p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <p>Drug stores are convenience destinations with a health halo. Customers trust these environments for health and wellness products. That trust extends to brands they discover there.</p>
        <h2>Major Chains</h2>
        <ul>
          <li><strong>CVS:</strong> Largest chain, strong health positioning, MinuteClinic</li>
          <li><strong>Walgreens:</strong> Neighborhood presence, photo/services</li>
          <li><strong>Rite Aid:</strong> Regional strength, value focus</li>
        </ul>
        <h2>What Works</h2>
        <p><strong>Health positioning:</strong> Wellness, self-care, prevention messaging resonates.</p>
        <p><strong>Convenience:</strong> Quick demos for quick trips - respect their time.</p>
        <p><strong>Beauty/skincare:</strong> Strong category in drug stores - sampling works.</p>
        <p><strong>OTC health:</strong> Vitamins, supplements, wellness products need education.</p>
        <h2>Demo Considerations</h2>
        <ul>
          <li>Smaller footprints = smaller demo setups</li>
          <li>Higher frequency visits = brand building over time</li>
          <li>Health claims need careful compliance</li>
          <li>Often restricted products (alcohol, tobacco) not allowed</li>
        </ul>
        <hr className="my-12" />
        <div className="not-prose">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Drug Store Demo Staff?</h2>
            <p className="mb-6 text-blue-200">Air Fresh provides health-focused demonstrators for pharmacy retail.</p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contact">Get a Quote <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
