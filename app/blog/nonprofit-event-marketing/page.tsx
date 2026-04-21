import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import BlogInternalLinks from '@/components/BlogInternalLinks';

export const metadata: Metadata = {
  title: 'Nonprofit Event Marketing and Fundraising | Air Fresh Marketing',
  description: 'Nonprofits need to maximize event impact with limited budgets. Here\'s how to staff fundraisers, galas, and awareness campaigns.',
  keywords: 'nonprofit marketing, fundraising events, charity events, nonprofit event staff, cause marketing',  alternates: {
    canonical: 'https://www.airfreshmarketing.com/blog/nonprofit-event-marketing',
  },

};

export default function NonprofitMarketing() {
  return (
    <article className="pt-16 min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@graph": [
                            {
                                      "@type": "Article",
                                      "headline": "Nonprofit Event Marketing and Fundraising",
                                      "description": "Nonprofits need to maximize event impact with limited budgets. Here's how to staff fundraisers, galas, and awareness campaigns.",
                                      "datePublished": "2025-05-08",
                                      "dateModified": "2025-05-08",
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
                                                "@id": "https://www.airfreshmarketing.com/blog/nonprofit-event-marketing"
                                      },
                                      "inLanguage": "en-US",
                                      "keywords": "nonprofit marketing, fundraising events, charity events, nonprofit event staff, cause marketing"
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
                                                          "name": "Nonprofit Event Marketing and Fundraising",
                                                          "item": "https://www.airfreshmarketing.com/blog/nonprofit-event-marketing"
                                                }
                                      ]
                            }
                  ]
        }) }}
      />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Nonprofit Event Marketing and Fundraising" }]} />

      <header className="bg-gradient-to-r from-purple-600 to-violet-700 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-purple-200 mb-4">May 8, 2025 · 7 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nonprofit Event Marketing: Maximizing Impact</h1>
          <p className="text-xl text-purple-200">Limited budgets, unlimited mission. Every dollar must count.</p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <p>Nonprofits face a unique challenge: creating professional, impactful events with limited resources. Smart staffing choices can stretch budgets while maintaining quality.</p>
        <h2>Nonprofit Event Types</h2>
        <ul>
          <li><strong>Galas and fundraisers:</strong> High-touch donor cultivation</li>
          <li><strong>Awareness campaigns:</strong> Street teams, public activations</li>
          <li><strong>Volunteer recruitment:</strong> Community outreach</li>
          <li><strong>Runs/walks/rides:</strong> Participant events</li>
          <li><strong>Donor appreciation:</strong> Stewardship events</li>
        </ul>
        <h2>Staffing Strategies</h2>
        <p><strong>Volunteer + professional hybrid:</strong> Use volunteers for tasks that benefit from passion (story-sharing, peer recruitment). Use professionals for tasks requiring skill (registration, logistics).</p>
        <p><strong>Board/staff amplification:</strong> Professional event staff can extend what your internal team can accomplish.</p>
        <p><strong>In-kind partnerships:</strong> Some agencies offer nonprofit rates or pro-bono support.</p>
        <h2>What We Offer Nonprofits</h2>
        <ul>
          <li>Reduced rates for qualified 501(c)(3) organizations</li>
          <li>Hybrid staffing models</li>
          <li>Volunteer training support</li>
          <li>Cause-aligned ambassadors who believe in your mission</li>
        </ul>
        <hr className="my-12" />
        <div className="not-prose">
          <div className="bg-gradient-to-r from-purple-600 to-violet-700 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Nonprofit Event Support?</h2>
            <p className="mb-6 text-purple-200">Air Fresh offers special nonprofit rates and hybrid models.</p>
            <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
              <Link href="/contact">Get Started <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
        {/* Internal Links Section */}
        <BlogInternalLinks />
      </div>
    </article>
  );
}
