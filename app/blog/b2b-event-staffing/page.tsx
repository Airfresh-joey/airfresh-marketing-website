import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import BlogInternalLinks from '@/components/BlogInternalLinks';

export const metadata: Metadata = {
  title: 'B2B Event Staffing | Air Fresh Marketing',
  description: 'B2B events require professional, knowledgeable staff. Here\'s how to staff trade shows, conferences, and business events.',
  keywords: 'b2b event staffing, trade show staff, conference staffing, business event staff, professional event staff',  alternates: {
    canonical: 'https://www.airfreshmarketing.com/blog/b2b-event-staffing',
  },

};

export default function B2BStaffing() {
  return (
    <article className="pt-16 min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@graph": [
                            {
                                      "@type": "Article",
                                      "headline": "B2B Event Staffing",
                                      "description": "B2B events require professional, knowledgeable staff. Here's how to staff trade shows, conferences, and business events.",
                                      "datePublished": "2024-02-26",
                                      "dateModified": "2024-02-26",
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
                                                "@id": "https://www.airfreshmarketing.com/blog/b2b-event-staffing"
                                      },
                                      "inLanguage": "en-US",
                                      "keywords": "b2b event staffing, trade show staff, conference staffing, business event staff, professional event staff"
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
                                                          "name": "B2B Event Staffing",
                                                          "item": "https://www.airfreshmarketing.com/blog/b2b-event-staffing"
                                                }
                                      ]
                            }
                  ]
        }) }}
      />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "B2B Event Staffing" }]} />

      <header className="bg-gradient-to-r from-slate-700 to-blue-800 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-slate-300 mb-4">February 26, 2024 · 7 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">B2B Event Staffing: Professional Representation</h1>
          <p className="text-xl text-slate-300">When your staff represents your company to other companies.</p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <p>B2B events are different. Attendees are professionals evaluating vendors. Your staff needs to match that environment - polished, knowledgeable, capable of real business conversations.</p>
        <h2>B2B Staff Requirements</h2>
        <ul>
          <li><strong>Professional demeanor:</strong> Business appropriate in every way</li>
          <li><strong>Industry knowledge:</strong> Can speak intelligently about the space</li>
          <li><strong>Lead qualification:</strong> Can identify and qualify prospects</li>
          <li><strong>Technical aptitude:</strong> Can learn and demo products</li>
          <li><strong>Conversation skills:</strong> Beyond scripts, real dialogue</li>
        </ul>
        <h2>Common B2B Events</h2>
        <p><strong>Trade shows:</strong> Industry-specific exhibitions.</p>
        <p><strong>Conferences:</strong> Speaking events with expo components.</p>
        <p><strong>User conferences:</strong> Customer-focused events.</p>
        <p><strong>Partner events:</strong> Channel and partner gatherings.</p>
        <p><strong>Executive dinners:</strong> Intimate, high-touch events.</p>
        <h2>Staff Roles</h2>
        <ul>
          <li>Booth ambassadors (engagement and qualification)</li>
          <li>Demo specialists (product knowledge)</li>
          <li>Registration/check-in staff</li>
          <li>Hospitality and hosting</li>
          <li>Lead scanners and follow-up</li>
        </ul>
        <hr className="my-12" />
        <div className="not-prose">
          <div className="bg-gradient-to-r from-slate-700 to-blue-800 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">B2B Event Coming Up?</h2>
            <p className="mb-6 text-slate-300">Air Fresh provides professional staff for business events.</p>
            <Button asChild size="lg" className="bg-white text-blue-800 hover:bg-gray-100">
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
