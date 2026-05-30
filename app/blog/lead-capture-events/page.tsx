import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import BlogInternalLinks from '@/components/BlogInternalLinks';

export const metadata: Metadata = {
  title: 'Lead Capture at Events: Converting Interactions to Data',
  description: 'Every event interaction should capture data. Here\'s how to build lead capture into your experiential programs.',
  keywords: 'event lead capture, lead generation events, event data capture, experiential lead gen',  alternates: {
    canonical: 'https://www.airfreshmarketing.com/blog/lead-capture-events',
  },

};

export default function LeadCapture() {
  return (
    <article className="pt-16 min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@graph": [
                            {
                                      "@type": "Article",
                                      "headline": "Lead Capture at Events: Converting Interactions to Data",
                                      "description": "Every event interaction should capture data. Here's how to build lead capture into your experiential programs.",
                                      "datePublished": "2024-07-08",
                                      "dateModified": "2024-07-08",
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
                                                "@id": "https://www.airfreshmarketing.com/blog/lead-capture-events"
                                      },
                                      "inLanguage": "en-US",
                                      "keywords": "event lead capture, lead generation events, event data capture, experiential lead gen"
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
                                                          "name": "Lead Capture at Events: Converting Interactions to Data",
                                                          "item": "https://www.airfreshmarketing.com/blog/lead-capture-events"
                                                }
                                      ]
                            }
                  ]
        }) }}
      />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Lead Capture at Events: Converting Interactions to Data" }]} />

      <header className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-200 mb-4">July 8, 2024 · 8 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Event Lead Capture: Turning Moments into Pipeline</h1>
          <p className="text-xl text-blue-200">An interaction without capture is a missed opportunity.</p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <p>Events create connections. But connections fade. Lead capture turns ephemeral moments into durable relationships you can nurture long after the event ends.</p>
        <h2>What to Capture</h2>
        <ul>
          <li><strong>Contact info:</strong> Email at minimum; phone, company, title if B2B</li>
          <li><strong>Qualification data:</strong> Budget, timeline, decision role</li>
          <li><strong>Interest indicators:</strong> What caught their attention?</li>
          <li><strong>Consent:</strong> Permission for follow-up marketing</li>
          <li><strong>Context:</strong> Notes on the conversation</li>
        </ul>
        <h2>Capture Methods</h2>
        <p><strong>Badge scanning:</strong> Fast, standard at trade shows. Gets basics, miss context.</p>
        <p><strong>Tablet forms:</strong> Custom fields, capture what matters. Slower but richer.</p>
        <p><strong>QR codes:</strong> Self-service capture. Good for high volume, lower completion.</p>
        <p><strong>SMS opt-in:</strong> Text-to-join. Simple, high completion, mobile-first.</p>
        <p><strong>App downloads:</strong> High value action, lower volume.</p>
        <h2>Staff Training</h2>
        <ul>
          <li>Every interaction should end with capture attempt</li>
          <li>Make capture feel natural, not pushy</li>
          <li>Offer value exchange (content, discount, entry)</li>
          <li>Complete data entry before moving to next person</li>
          <li>Add notes while conversation is fresh</li>
        </ul>
        <hr className="my-12" />
        <div className="not-prose">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Lead-Focused Event Staff?</h2>
            <p className="mb-6 text-blue-200">Air Fresh trains staff on effective lead capture.</p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/get-quote?source=blog-lead-capture-events&intent=article-cta">Get Started <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
        {/* Internal Links Section */}
        <BlogInternalLinks />
      </div>
    </article>
  );
}
