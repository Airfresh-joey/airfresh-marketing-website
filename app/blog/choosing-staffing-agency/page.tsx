import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import BlogInternalLinks from '@/components/BlogInternalLinks';

export const metadata: Metadata = {
  title: 'Choosing the Right Staffing Agency',
  description: 'Not all event staffing agencies are equal. Here\'s how to evaluate and choose the right partner for your needs.',
  keywords: 'event staffing agency, how to choose staffing agency, staffing agency comparison, experiential staffing partner',  alternates: {
    canonical: 'https://www.airfreshmarketing.com/blog/choosing-staffing-agency',
  },


  robots: { index: false, follow: false },
};

export default function ChoosingAgency() {
  return (
    <article className="pt-16 min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@graph": [
                            {
                                      "@type": "Article",
                                      "headline": "Choosing the Right Staffing Agency",
                                      "description": "Not all event staffing agencies are equal. Here's how to evaluate and choose the right partner for your needs.",
                                      "datePublished": "2024-04-08",
                                      "dateModified": "2024-04-08",
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
                                                "@id": "https://www.airfreshmarketing.com/blog/choosing-staffing-agency"
                                      },
                                      "inLanguage": "en-US",
                                      "keywords": "event staffing agency, how to choose staffing agency, staffing agency comparison, experiential staffing partner"
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
                                                          "name": "Choosing the Right Staffing Agency",
                                                          "item": "https://www.airfreshmarketing.com/blog/choosing-staffing-agency"
                                                }
                                      ]
                            }
                  ]
        }) }}
      />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Choosing the Right Staffing Agency" }]} />

      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-200 mb-4">April 8, 2024 · 7 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Choosing the Right Event Staffing Agency</h1>
          <p className="text-xl text-blue-200">All agencies promise results. Here's how to verify.</p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <p>The difference between a great event and a disaster often comes down to the staffing agency you choose. Whether you need a full-service <Link href="/event-staffing-agency" className="text-blue-600 hover:text-blue-700">event staffing agency</Link>, dedicated <Link href="/brand-ambassador-agency" className="text-blue-600 hover:text-blue-700">brand ambassadors</Link>, or a <Link href="/promotional-staffing-agency" className="text-blue-600 hover:text-blue-700">promotional staffing agency</Link>, here's how to evaluate your options.</p>
        <h2>Questions to Ask</h2>
        <ul>
          <li>How do you recruit and vet staff?</li>
          <li>What's your training process?</li>
          <li>How do you handle no-shows and emergencies?</li>
          <li>Can you provide references?</li>
          <li>What markets do you cover?</li>
          <li>What's your pricing structure?</li>
        </ul>
        <h2>Red Flags</h2>
        <ul>
          <li>No vetting process described</li>
          <li>Suspiciously low rates</li>
          <li>Can't provide references</li>
          <li>Unclear about backup plans</li>
          <li>Unresponsive during evaluation</li>
        </ul>
        <h2>Green Flags</h2>
        <ul>
          <li>Detailed vetting and training process</li>
          <li>Transparent pricing</li>
          <li>Strong references from similar clients</li>
          <li>Clear backup and contingency plans</li>
          <li>Responsive, professional communication</li>
        </ul>
        <h2>The Test</h2>
        <p>Start with a small project. See how they perform before committing to larger programs. Performance on a small gig predicts performance on big ones. Air Fresh Marketing is a nationally recognized <Link href="/event-staffing-agency" className="text-blue-600 hover:text-blue-700">event staffing agency</Link> serving 500+ brands — we welcome the scrutiny.</p>
        <hr className="my-12" />
        <div className="not-prose">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">We Welcome Scrutiny</h2>
            <p className="mb-6 text-blue-200">Air Fresh is happy to answer every question and provide references.</p>
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
              <Link href="/get-quote?source=blog-choosing-staffing-agency&intent=article-cta">Let's Talk <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
        {/* Internal Links Section */}
        <BlogInternalLinks />
      </div>
    </article>
  );
}
