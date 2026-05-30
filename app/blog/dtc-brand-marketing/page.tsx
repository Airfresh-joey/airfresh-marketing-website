import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import BlogInternalLinks from '@/components/BlogInternalLinks';

export const metadata: Metadata = {
  title: 'Direct-to-Consumer Brand Marketing',
  description: 'DTC brands are going physical. Here\'s how digital-native brands can execute IRL marketing effectively.',
  keywords: 'dtc marketing, direct to consumer marketing, digital native brands, dtc retail, dtc brand activation',  alternates: {
    canonical: 'https://www.airfreshmarketing.com/blog/dtc-brand-marketing',
  },


  robots: { index: false, follow: false },
};

export default function DTCMarketing() {
  return (
    <article className="pt-16 min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@graph": [
                            {
                                      "@type": "Article",
                                      "headline": "Direct-to-Consumer Brand Marketing",
                                      "description": "DTC brands are going physical. Here's how digital-native brands can execute IRL marketing effectively.",
                                      "datePublished": "2024-09-28",
                                      "dateModified": "2024-09-28",
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
                                                "@id": "https://www.airfreshmarketing.com/blog/dtc-brand-marketing"
                                      },
                                      "inLanguage": "en-US",
                                      "keywords": "dtc marketing, direct to consumer marketing, digital native brands, dtc retail, dtc brand activation"
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
                                                          "name": "Direct-to-Consumer Brand Marketing",
                                                          "item": "https://www.airfreshmarketing.com/blog/dtc-brand-marketing"
                                                }
                                      ]
                            }
                  ]
        }) }}
      />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Direct-to-Consumer Brand Marketing" }]} />

      <header className="bg-gradient-to-r from-pink-500 to-orange-500 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-pink-100 mb-4">September 28, 2024 · 8 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">DTC Brand Marketing: Digital Brands Go Physical</h1>
          <p className="text-xl text-pink-100">CACs are up. It's time to get offline.</p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <p>DTC brands built empires on Facebook and Instagram. Now those channels are expensive and crowded. Smart DTC brands are rediscovering physical marketing.</p>
        <h2>Why DTC Needs IRL</h2>
        <ul>
          <li><strong>CAC crisis:</strong> Digital acquisition costs have skyrocketed</li>
          <li><strong>Physical trial:</strong> Some products need to be experienced</li>
          <li><strong>Brand building:</strong> IRL creates brand equity that digital can't</li>
          <li><strong>Retail expansion:</strong> Preparing for wholesale channels</li>
        </ul>
        <h2>DTC Physical Playbook</h2>
        <p><strong>Pop-ups:</strong> Test markets and build buzz without permanent commitment.</p>
        <p><strong>Sampling programs:</strong> Get product in hands at scale.</p>
        <p><strong>Event presence:</strong> Shows, festivals, conferences where target customers gather.</p>
        <p><strong>Retail partnerships:</strong> Support retail launches with in-store activation.</p>
        <h2>Staff Considerations</h2>
        <ul>
          <li>Match the brand aesthetic and voice</li>
          <li>Social media fluent (content capture matters)</li>
          <li>App/digital onboarding skills</li>
          <li>Storytelling ability (DTC brands have stories)</li>
          <li>Data capture discipline (every interaction should capture something)</li>
        </ul>
        <hr className="my-12" />
        <div className="not-prose">
          <div className="bg-gradient-to-r from-pink-500 to-orange-500 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">DTC Brand Going Physical?</h2>
            <p className="mb-6 text-pink-100">Air Fresh helps DTC brands execute IRL marketing.</p>
            <Button asChild size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
              <Link href="/get-quote?source=blog-dtc-brand-marketing&intent=article-cta">Get Started <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
        {/* Internal Links Section */}
        <BlogInternalLinks />
      </div>
    </article>
  );
}
