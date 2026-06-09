import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import BlogInternalLinks from '@/components/BlogInternalLinks';

export const metadata: Metadata = {
  title: 'Working With Air Fresh Marketing',
  description: 'Here\'s what to expect when you partner with Air Fresh Marketing for your event staffing and experiential marketing needs.',
  keywords: 'air fresh marketing, event staffing partner, work with air fresh, experiential agency',  alternates: {
    canonical: 'https://www.airfreshmarketing.com/blog/working-with-air-fresh',
  },


};

export default function WorkingWithAFM() {
  return (
    <article className="pt-16 min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@graph": [
                            {
                                      "@type": "Article",
                                      "headline": "Working With Air Fresh Marketing",
                                      "description": "Here's what to expect when you partner with Air Fresh Marketing for your event staffing and experiential marketing needs.",
                                      "datePublished": "2024-03-28",
                                      "dateModified": "2024-03-28",
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
                                                "@id": "https://www.airfreshmarketing.com/blog/working-with-air-fresh"
                                      },
                                      "inLanguage": "en-US",
                                      "keywords": "air fresh marketing, event staffing partner, work with air fresh, experiential agency"
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
                                                          "name": "Working With Air Fresh Marketing",
                                                          "item": "https://www.airfreshmarketing.com/blog/working-with-air-fresh"
                                                }
                                      ]
                            }
                  ]
        }) }}
      />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Working With Air Fresh Marketing" }]} />

      <header className="bg-gradient-to-r from-purple-600 to-violet-700 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-purple-200 mb-4">March 28, 2024 · 6 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Working With Air Fresh Marketing</h1>
          <p className="text-xl text-purple-200">What to expect when you partner with us.</p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <p>We've been in business since 2005, staffing events across the country. Here's how we work.</p>
        <h2>Our Process</h2>
        <p><strong>1. Discovery:</strong> We learn about your brand, goals, and specific event needs.</p>
        <p><strong>2. Proposal:</strong> Detailed staffing plan with rates, roles, and recommendations.</p>
        <p><strong>3. Recruitment:</strong> We source and vet talent matching your requirements.</p>
        <p><strong>4. Training:</strong> Staff trained on your brand and specific activation.</p>
        <p><strong>5. Execution:</strong> We manage day-of logistics and staff performance.</p>
        <p><strong>6. Reporting:</strong> Post-event reporting on metrics and outcomes.</p>
        <h2>What We Do Well</h2>
        <ul>
          <li>Nationwide coverage (50+ markets)</li>
          <li>Quality over volume approach</li>
          <li>Transparent communication</li>
          <li>Backup coverage guaranteed</li>
          <li>Long-term partnership focus</li>
        </ul>
        <h2>What We Don't Do</h2>
        <ul>
          <li>Overpromise to win business</li>
          <li>Cut corners on vetting</li>
          <li>Disappear after the sale</li>
          <li>Charge hidden fees</li>
        </ul>
        <h2>Ready to Start?</h2>
        <p>Call us at 303-720-6060 or fill out the contact form. We'll respond within 24 hours with next steps.</p>
        <hr className="my-12" />
        <div className="not-prose">
          <div className="bg-gradient-to-r from-purple-600 to-violet-700 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Let's Work Together</h2>
            <p className="mb-6 text-purple-200">Air Fresh is ready to support your next event.</p>
            <Button asChild size="lg" className="bg-white text-violet-700 hover:bg-gray-100">
              <Link href="/get-quote?source=blog-working-with-air-fresh&intent=article-cta">Contact Us <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
        {/* Internal Links Section */}
        <BlogInternalLinks />
      </div>
    </article>
  );
}
