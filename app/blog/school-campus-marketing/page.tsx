import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import BlogInternalLinks from '@/components/BlogInternalLinks';

export const metadata: Metadata = {
  title: 'School and Campus Marketing',
  description: 'Reaching students and families in educational environments. Here\'s how to market at schools and universities.',
  keywords: 'school marketing, campus marketing, university marketing, college marketing, student marketing',  alternates: {
    canonical: 'https://www.airfreshmarketing.com/blog/school-campus-marketing',
  },


  robots: { index: false, follow: false },
};

export default function SchoolCampusMarketing() {
  return (
    <article className="pt-16 min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@graph": [
                            {
                                      "@type": "Article",
                                      "headline": "School and Campus Marketing",
                                      "description": "Reaching students and families in educational environments. Here's how to market at schools and universities.",
                                      "datePublished": "2023-09-16",
                                      "dateModified": "2023-09-16",
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
                                                "@id": "https://www.airfreshmarketing.com/blog/school-campus-marketing"
                                      },
                                      "inLanguage": "en-US",
                                      "keywords": "school marketing, campus marketing, university marketing, college marketing, student marketing"
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
                                                          "name": "School and Campus Marketing",
                                                          "item": "https://www.airfreshmarketing.com/blog/school-campus-marketing"
                                                }
                                      ]
                            }
                  ]
        }) }}
      />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "School and Campus Marketing" }]} />

      <header className="bg-gradient-to-r from-red-600 to-rose-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-red-200 mb-4">September 16, 2023 · 8 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">School and Campus Marketing</h1>
          <p className="text-xl text-red-200">Young consumers. Formation years. Brand loyalty starts here.</p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <p>Students are forming brand preferences that will last decades. Reaching them in educational environments requires understanding policies, channels, and age-appropriate approaches.</p>
        <h2>K-12 vs. Higher Ed</h2>
        <p><strong>K-12:</strong> Highly regulated, parent-focused, limited commercial access.</p>
        <p><strong>College/University:</strong> More open, direct student access, diverse channels.</p>
        <h2>College Campus Channels</h2>
        <ul>
          <li><strong>Student centers:</strong> High-traffic gathering spaces</li>
          <li><strong>Dining halls:</strong> Captive audience at meals</li>
          <li><strong>Campus events:</strong> Move-in, homecoming, welcome week</li>
          <li><strong>Athletic events:</strong> Sports crowds</li>
          <li><strong>Greek life:</strong> Fraternity and sorority events</li>
          <li><strong>Career fairs:</strong> Professional recruitment</li>
        </ul>
        <h2>K-12 Opportunities</h2>
        <ul>
          <li>PTA/PTO events</li>
          <li>Sports and extracurriculars</li>
          <li>Back-to-school events</li>
          <li>Health and wellness fairs</li>
        </ul>
        <h2>Product Categories</h2>
        <ul>
          <li>Technology and electronics</li>
          <li>Food and beverage</li>
          <li>Personal care</li>
          <li>Financial services (college)</li>
          <li>Career/professional services</li>
        </ul>
        <hr className="my-12" />
        <div className="not-prose">
          <div className="bg-gradient-to-r from-red-600 to-rose-600 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Campus Marketing Staff?</h2>
            <p className="mb-6 text-red-200">Air Fresh provides relatable campus ambassadors.</p>
            <Button asChild size="lg" className="bg-white text-rose-600 hover:bg-gray-100">
              <Link href="/get-quote?source=blog-school-campus-marketing&intent=article-cta">Get Started <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
        {/* Internal Links Section */}
        <BlogInternalLinks />
      </div>
    </article>
  );
}
