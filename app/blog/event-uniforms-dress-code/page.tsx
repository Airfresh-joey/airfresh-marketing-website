import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Event Uniforms and Dress Codes | Air Fresh Marketing',
  description: 'What your event staff wears matters. Here\'s how to think about uniforms, dress codes, and brand presentation.',
  keywords: 'event uniforms, brand ambassador dress code, event staff attire, promotional uniforms',
};

export default function EventUniforms() {
  return (
    <article className="pt-16 min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@graph": [
                            {
                                      "@type": "Article",
                                      "headline": "Event Uniforms and Dress Codes",
                                      "description": "What your event staff wears matters. Here's how to think about uniforms, dress codes, and brand presentation.",
                                      "datePublished": "2024-06-28",
                                      "dateModified": "2024-06-28",
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
                                                "@id": "https://www.airfreshmarketing.com/blog/event-uniforms-dress-code"
                                      },
                                      "inLanguage": "en-US",
                                      "keywords": "event uniforms, brand ambassador dress code, event staff attire, promotional uniforms"
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
                                                          "name": "Event Uniforms and Dress Codes",
                                                          "item": "https://www.airfreshmarketing.com/blog/event-uniforms-dress-code"
                                                }
                                      ]
                            }
                  ]
        }) }}
      />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Event Uniforms and Dress Codes" }]} />

      <header className="bg-gradient-to-r from-gray-700 to-slate-800 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-300 mb-4">June 28, 2024 · 6 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Event Uniforms: Dressing for Brand Success</h1>
          <p className="text-xl text-gray-300">Staff attire is part of your brand presentation.</p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <p>What your staff wears affects how they're perceived - and how your brand is perceived. Get it right.</p>
        <h2>Uniform Options</h2>
        <ul>
          <li><strong>Full branded uniform:</strong> Custom shirts, pants/skirts, accessories. Maximum brand impact.</li>
          <li><strong>Branded tops + neutral bottoms:</strong> Most common. T-shirts or polos with jeans/khakis.</li>
          <li><strong>Dress code only:</strong> "All black" or "business casual." Lower cost, less brand impact.</li>
          <li><strong>Costumes/characters:</strong> For specific activations requiring entertainment.</li>
        </ul>
        <h2>Key Considerations</h2>
        <p><strong>Weather:</strong> Outdoor events need weather-appropriate options.</p>
        <p><strong>Activity level:</strong> Active roles need comfortable, movement-friendly attire.</p>
        <p><strong>Brand alignment:</strong> Match the brand's aesthetic and positioning.</p>
        <p><strong>Sizing:</strong> Have inclusive sizing available.</p>
        <p><strong>Photography:</strong> Will this look good in photos?</p>
        <h2>Uniform Best Practices</h2>
        <ul>
          <li>Order extras (stains happen, sizes get wrong)</li>
          <li>Provide clear photos of expected look</li>
          <li>Include footwear requirements</li>
          <li>Consider grooming standards</li>
          <li>Plan for multi-day (cleaning, extras)</li>
        </ul>
        <hr className="my-12" />
        <div className="not-prose">
          <div className="bg-gradient-to-r from-gray-700 to-slate-800 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Uniform Guidance Included</h2>
            <p className="mb-6 text-gray-300">Air Fresh helps manage uniform requirements for events.</p>
            <Button asChild size="lg" className="bg-white text-gray-800 hover:bg-gray-100">
              <Link href="/contact">Get Started <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
