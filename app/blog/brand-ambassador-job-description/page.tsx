import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import BlogInternalLinks from '@/components/BlogInternalLinks';

export const metadata: Metadata = {
  title: 'How to Write a Brand Ambassador Job Description',
  description: 'Attract the right brand ambassador candidates with a compelling job description. Here\'s what to include.',
  keywords: 'brand ambassador job description, brand ambassador hiring, ba job posting, promotional staff job description',  alternates: {
    canonical: 'https://www.airfreshmarketing.com/blog/brand-ambassador-job-description',
  },


};

export default function BAJobDescription() {
  return (
    <article className="pt-16 min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@graph": [
                            {
                                      "@type": "Article",
                                      "headline": "How to Write a Brand Ambassador Job Description",
                                      "description": "Attract the right brand ambassador candidates with a compelling job description. Here's what to include.",
                                      "datePublished": "2024-08-08",
                                      "dateModified": "2024-08-08",
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
                                                "@id": "https://www.airfreshmarketing.com/blog/brand-ambassador-job-description"
                                      },
                                      "inLanguage": "en-US",
                                      "keywords": "brand ambassador job description, brand ambassador hiring, ba job posting, promotional staff job description"
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
                                                          "name": "How to Write a Brand Ambassador Job Description",
                                                          "item": "https://www.airfreshmarketing.com/blog/brand-ambassador-job-description"
                                                }
                                      ]
                            }
                  ]
        }) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What should be in a brand ambassador job description?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A strong brand ambassador job description includes: job title and pay rate, event type and location, required appearance/presentation standards, product knowledge and training expectations, key responsibilities (sampling, lead capture, social posting), required experience or certifications (e.g., TIPS certification for alcohol events), and how to apply. Clear, specific descriptions attract more qualified candidates and reduce no-shows."
            }
          },
          {
            "@type": "Question",
            "name": "How much do brand ambassadors get paid?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Brand ambassador pay rates typically range from $20–$40/hour for standard promotional work, $25–$55/hour for trade show staff, and $30–$65/hour for highly trained product specialists or bilingual ambassadors. Rates vary by market, experience level, and event complexity. Major metro markets like New York, Los Angeles, and San Francisco typically pay at the high end of these ranges."
            }
          },
          {
            "@type": "Question",
            "name": "What skills should a brand ambassador have?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Top brand ambassador skills include outgoing personality and comfort approaching strangers, clear verbal communication and product storytelling, product knowledge retention and accurate FAQ responses, professional appearance and brand standard adherence, lead capture efficiency (using apps or paper forms), reliability and punctuality, and — for appropriate events — alcohol beverage service training (TIPS/BASSET certification)."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between a brand ambassador and a promotional model?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Promotional models are hired primarily for their appearance to attract foot traffic at events. Brand ambassadors are trained to represent a specific brand, communicate product benefits, answer consumer questions, capture leads, and drive conversion. Most modern marketing programs require brand ambassadors rather than promotional models — the goal is measurable engagement, not just attention."
            }
          },
          {
            "@type": "Question",
            "name": "How do I find qualified brand ambassadors for my campaign?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The fastest way to find qualified brand ambassadors is through a national event staffing agency like Air Fresh Marketing, which maintains vetted talent rosters in 50+ U.S. cities. Agencies handle sourcing, interviewing, background checks, training, and day-of management. For brands running multi-market campaigns, an agency partner ensures consistent brand representation across every market simultaneously."
            }
          }
        ]
      }) }} />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "How to Write a Brand Ambassador Job Description" }]} />

      <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-200 mb-4">August 8, 2024 · 7 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Writing a Brand Ambassador Job Description That Works</h1>
          <p className="text-xl text-blue-200">Attract the right talent with the right description.</p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <p>A good job description attracts qualified candidates and filters out the wrong ones. Here's how to write descriptions that get results.</p>
        <h2>Essential Elements</h2>
        <ul>
          <li><strong>Clear title:</strong> Brand Ambassador, Promotional Staff, Event Representative</li>
          <li><strong>Brief company intro:</strong> Who you are and what you do</li>
          <li><strong>Role overview:</strong> What they'll actually be doing</li>
          <li><strong>Specific duties:</strong> Day-to-day responsibilities</li>
          <li><strong>Requirements:</strong> Must-haves vs. nice-to-haves</li>
          <li><strong>Schedule:</strong> Hours, flexibility, expected commitment</li>
          <li><strong>Compensation:</strong> Pay rate or range</li>
        </ul>
        <h2>Sample Structure</h2>
        <p><strong>Title:</strong> Brand Ambassador - [Brand/Campaign Name]</p>
        <p><strong>Location:</strong> [City/Region]</p>
        <p><strong>Schedule:</strong> [Part-time/weekends/specific dates]</p>
        <p><strong>Pay:</strong> [$XX-XX/hour]</p>
        <p><strong>Overview:</strong> [1-2 sentences about the opportunity]</p>
        <p><strong>Responsibilities:</strong> [4-6 bullet points]</p>
        <p><strong>Requirements:</strong> [4-6 bullet points]</p>
        <p><strong>How to Apply:</strong> [Clear next steps]</p>
        <h2>What to Avoid</h2>
        <ul>
          <li>Vague descriptions ("looking for outgoing people")</li>
          <li>Unrealistic requirements (5 years experience for entry-level)</li>
          <li>No pay information (top talent won't apply)</li>
          <li>Discriminatory language (even unintentional)</li>
        </ul>
        <hr className="my-12" />
        <div className="not-prose">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Skip the Hiring Hassle?</h2>
            <p className="mb-6 text-blue-200">Air Fresh handles recruitment so you don't have to.</p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/get-quote?source=blog-brand-ambassador-job-description&intent=article-cta">Get Staffing Help <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
        {/* Internal Links Section */}
        <BlogInternalLinks />
      </div>
    </article>
  );
}
