import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import BlogInternalLinks from '@/components/BlogInternalLinks';

export const metadata: Metadata = {
  title: 'Event Photography and Content Capture',
  description: 'Events create content opportunities. Here\'s how to capture photos, video, and UGC that extends your event ROI.',
  keywords: 'event photography, event content, event video, ugc capture, event documentation',  alternates: {
    canonical: 'https://www.airfreshmarketing.com/blog/event-photography-content',
  },


};

export default function EventPhotography() {
  return (
    <article className="pt-16 min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@graph": [
                            {
                                      "@type": "Article",
                                      "headline": "Event Photography and Content Capture",
                                      "description": "Events create content opportunities. Here's how to capture photos, video, and UGC that extends your event ROI.",
                                      "datePublished": "2024-07-18",
                                      "dateModified": "2024-07-18",
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
                                                "@id": "https://www.airfreshmarketing.com/blog/event-photography-content"
                                      },
                                      "inLanguage": "en-US",
                                      "keywords": "event photography, event content, event video, ugc capture, event documentation"
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
                                                          "name": "Event Photography and Content Capture",
                                                          "item": "https://www.airfreshmarketing.com/blog/event-photography-content"
                                                }
                                      ]
                            }
                  ]
        }) }}
      />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Event Photography and Content Capture" }]} />

      <header className="bg-gradient-to-r from-pink-500 to-rose-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-pink-200 mb-4">July 18, 2024 · 7 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Event Content Capture: Extending Your ROI</h1>
          <p className="text-xl text-pink-200">The event lasts a day. Great content lasts forever.</p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <p>Your event creates moments. Those moments should become content. Content that lives on social media, in sales decks, on websites, for months or years after the event ends.</p>
        <h2>What to Capture</h2>
        <ul>
          <li><strong>Professional photography:</strong> High-quality stills for marketing use</li>
          <li><strong>Video content:</strong> Recap videos, testimonials, b-roll</li>
          <li><strong>User-generated content:</strong> Attendee posts, reactions, shares</li>
          <li><strong>Behind-the-scenes:</strong> Setup, staff, authentic moments</li>
          <li><strong>Testimonials:</strong> On-camera reactions and feedback</li>
        </ul>
        <h2>Content-Ready Events</h2>
        <p><strong>Photo moments:</strong> Design specific spots meant for photos (branded backdrops, props, installations).</p>
        <p><strong>Good lighting:</strong> Events with poor lighting produce poor content.</p>
        <p><strong>Capture station:</strong> Staff dedicated to documenting, not just running the event.</p>
        <p><strong>Release process:</strong> Get permissions to use photos/video while capturing.</p>
        <h2>Staff Roles</h2>
        <ul>
          <li>Professional photographer/videographer</li>
          <li>Content coordinator (ensuring capture happens)</li>
          <li>Social media capture (real-time posting)</li>
          <li>UGC encouragement (prompting attendee sharing)</li>
        </ul>
        <hr className="my-12" />
        <div className="not-prose">
          <div className="bg-gradient-to-r from-pink-500 to-rose-600 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Content Capture Staff?</h2>
            <p className="mb-6 text-pink-200">Air Fresh provides content-focused event support.</p>
            <Button asChild size="lg" className="bg-white text-rose-600 hover:bg-gray-100">
              <Link href="/get-quote?source=blog-event-photography-content&intent=article-cta">Get a Quote <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
        {/* Internal Links Section */}
        <BlogInternalLinks />
      </div>
    </article>
  );
}
