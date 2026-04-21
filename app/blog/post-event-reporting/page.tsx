import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import BlogInternalLinks from '@/components/BlogInternalLinks';

export const metadata: Metadata = {
  title: 'Post-Event Reporting and Analytics | Air Fresh Marketing',
  description: 'Events generate data. Here\'s how to report on experiential campaigns and prove ROI to stakeholders.',
  keywords: 'event reporting, event analytics, experiential roi reporting, event metrics, campaign reporting',  alternates: {
    canonical: 'https://www.airfreshmarketing.com/blog/post-event-reporting',
  },

};

export default function PostEventReporting() {
  return (
    <article className="pt-16 min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@graph": [
                            {
                                      "@type": "Article",
                                      "headline": "Post-Event Reporting and Analytics",
                                      "description": "Events generate data. Here's how to report on experiential campaigns and prove ROI to stakeholders.",
                                      "datePublished": "2024-06-18",
                                      "dateModified": "2024-06-18",
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
                                                "@id": "https://www.airfreshmarketing.com/blog/post-event-reporting"
                                      },
                                      "inLanguage": "en-US",
                                      "keywords": "event reporting, event analytics, experiential roi reporting, event metrics, campaign reporting"
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
                                                          "name": "Post-Event Reporting and Analytics",
                                                          "item": "https://www.airfreshmarketing.com/blog/post-event-reporting"
                                                }
                                      ]
                            }
                  ]
        }) }}
      />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Post-Event Reporting and Analytics" }]} />

      <header className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-indigo-200 mb-4">June 18, 2024 · 7 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Post-Event Reporting: Proving Your Impact</h1>
          <p className="text-xl text-indigo-200">If you can't measure it, you can't justify it.</p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <p>Stakeholders want to know: was it worth it? Good post-event reporting answers that question with data, not opinions.</p>
        <h2>What to Report</h2>
        <ul>
          <li><strong>Reach metrics:</strong> Impressions, interactions, foot traffic</li>
          <li><strong>Engagement metrics:</strong> Dwell time, samples distributed, demos completed</li>
          <li><strong>Capture metrics:</strong> Leads generated, emails collected, app downloads</li>
          <li><strong>Conversion metrics:</strong> Sales, sign-ups, appointments booked</li>
          <li><strong>Social metrics:</strong> Posts, mentions, reach, engagement</li>
          <li><strong>Cost metrics:</strong> Cost per impression, cost per lead, ROI</li>
        </ul>
        <h2>Report Structure</h2>
        <p><strong>Executive summary:</strong> Key results in 3-5 bullet points.</p>
        <p><strong>Objectives vs. results:</strong> Did you hit your goals?</p>
        <p><strong>Detailed metrics:</strong> Full data with context.</p>
        <p><strong>Highlights:</strong> Best moments, photos, testimonials.</p>
        <p><strong>Learnings:</strong> What worked, what didn't, recommendations.</p>
        <h2>Timing</h2>
        <ul>
          <li>Quick debrief: Within 24 hours</li>
          <li>Full report: Within 1 week</li>
          <li>Follow-on analysis: 30-90 days (for downstream conversion)</li>
        </ul>
        <hr className="my-12" />
        <div className="not-prose">
          <div className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Reporting Included</h2>
            <p className="mb-6 text-indigo-200">Air Fresh provides comprehensive post-event reporting.</p>
            <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
              <Link href="/contact">Learn More <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
        {/* Internal Links Section */}
        <BlogInternalLinks />
      </div>
    </article>
  );
}
