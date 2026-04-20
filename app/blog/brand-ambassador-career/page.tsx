import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Building a Brand Ambassador Career | Air Fresh Marketing',
  description: 'Want to become a brand ambassador? Here\'s how to build a successful career in experiential marketing.',
  keywords: 'brand ambassador career, how to become brand ambassador, promotional modeling career, event staffing career',
};

export default function BACareer() {
  return (
    <article className="pt-16 min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@graph": [
                            {
                                      "@type": "Article",
                                      "headline": "Building a Brand Ambassador Career",
                                      "description": "Want to become a brand ambassador? Here's how to build a successful career in experiential marketing.",
                                      "datePublished": "2024-05-08",
                                      "dateModified": "2024-05-08",
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
                                                "@id": "https://www.airfreshmarketing.com/blog/brand-ambassador-career"
                                      },
                                      "inLanguage": "en-US",
                                      "keywords": "brand ambassador career, how to become brand ambassador, promotional modeling career, event staffing career"
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
                                                          "name": "Building a Brand Ambassador Career",
                                                          "item": "https://www.airfreshmarketing.com/blog/brand-ambassador-career"
                                                }
                                      ]
                            }
                  ]
        }) }}
      />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Building a Brand Ambassador Career" }]} />

      <header className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-teal-200 mb-4">May 8, 2024 · 8 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Building a Brand Ambassador Career</h1>
          <p className="text-xl text-teal-200">Turn gigs into a real career path.</p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <p>Brand ambassador work can be a flexible side gig or the start of a real career. Here's how to make the most of it.</p>
        <h2>Getting Started</h2>
        <ul>
          <li><strong>Build your profile:</strong> Professional headshots, resume, experience summary</li>
          <li><strong>Register with agencies:</strong> Multiple agencies = more opportunities</li>
          <li><strong>Be responsive:</strong> Reply quickly to opportunities</li>
          <li><strong>Start anywhere:</strong> Take entry-level gigs to build experience</li>
        </ul>
        <h2>Building Your Reputation</h2>
        <p><strong>Be reliable:</strong> Show up on time, every time. This is #1.</p>
        <p><strong>Exceed expectations:</strong> Do more than the minimum.</p>
        <p><strong>Get noticed:</strong> Positive feedback gets you rebooked.</p>
        <p><strong>Build relationships:</strong> With agencies, clients, other ambassadors.</p>
        <h2>Advancing Your Career</h2>
        <ul>
          <li><strong>Specialize:</strong> Become known for specific industries or skills</li>
          <li><strong>Lead roles:</strong> Progress to team lead positions</li>
          <li><strong>Training certifications:</strong> Add skills (bartending, makeup, languages)</li>
          <li><strong>Social presence:</strong> Build your personal brand</li>
        </ul>
        <h2>Career Paths</h2>
        <ul>
          <li>Senior brand ambassador / team lead</li>
          <li>Event coordinator / manager</li>
          <li>Account management (agency side)</li>
          <li>Brand marketing (client side)</li>
          <li>Influencer / content creator</li>
        </ul>
        <hr className="my-12" />
        <div className="not-prose">
          <div className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
            <p className="mb-6 text-teal-200">Air Fresh is always looking for great brand ambassadors.</p>
            <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
              <Link href="/contact">Apply Now <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
