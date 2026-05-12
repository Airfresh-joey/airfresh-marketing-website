'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, XCircle, Star } from 'lucide-react';

const comparison = [
  { feature: 'Service Scope', afm: 'Full-service experiential marketing', competitor: 'Promotional staffing & modeling', winner: 'afm' },
  { feature: 'GPS Check-In Technology', afm: 'Proprietary GPS verification', competitor: 'Not available', winner: 'afm' },
  { feature: 'Geographic Coverage', afm: 'All 50 states, 200+ cities', competitor: 'Select major markets', winner: 'afm' },
  { feature: 'Technology Platform', afm: 'GPS, video training, dashboards, client portal', competitor: 'Standard booking tools', winner: 'afm' },
  { feature: 'Staff Training', afm: 'Video certification + brand quiz required', competitor: 'Basic briefing sheets', winner: 'afm' },
  { feature: 'Brand Activation Strategy', afm: 'Full strategy + execution', competitor: 'Staffing execution only', winner: 'afm' },
  { feature: 'Real-Time Reporting', afm: 'Live dashboards with photo + GPS proof', competitor: 'Post-event recaps', winner: 'afm' },
  { feature: 'Pricing Transparency', afm: 'Published rates $35-65/hr', competitor: 'Quote-based', winner: 'afm' },
  { feature: 'Staff Network', afm: '5,000+ vetted professionals', competitor: 'Model & promo talent roster', winner: 'afm' },
  { feature: 'Experiential Capabilities', afm: 'Sampling, guerrilla, mobile tours, trade shows', competitor: 'Limited to promo staffing', winner: 'afm' },
  { feature: 'Promotional Models', afm: 'Available with brand training', competitor: 'Core specialty', winner: 'tie' },
];

const faqs = [
  {
    question: 'What is the difference between Air Fresh Marketing and Next Level Promotions?',
    answer: 'Air Fresh Marketing is a full-service experiential marketing agency with proprietary technology including GPS check-in verification, mandatory video training certification, and real-time reporting dashboards. Next Level Promotions is a promotional staffing and modeling agency that primarily focuses on providing talent for events without the technology infrastructure, brand training depth, or experiential strategy capabilities that AirFresh offers.',
  },
  {
    question: 'Does Next Level Promotions offer GPS check-in technology?',
    answer: 'No. Next Level Promotions does not offer GPS-verified check-in technology. Air Fresh Marketing uses proprietary GPS verification to confirm every staff member arrives on-site and on-time, providing photographic and location-based proof of attendance that promotional staffing agencies like Next Level cannot provide.',
  },
  {
    question: 'Is Air Fresh Marketing better than Next Level Promotions for brand activations?',
    answer: 'For full-service brand activations, yes. Air Fresh Marketing provides end-to-end experiential marketing including strategy, trained brand ambassadors, GPS-verified execution, and real-time reporting. Next Level Promotions focuses on staffing and modeling without the strategic, technological, or training depth needed for comprehensive brand activations.',
  },
  {
    question: 'How does staff training compare between AirFresh and Next Level Promotions?',
    answer: 'Air Fresh Marketing requires every brand ambassador to complete brand-specific video training modules and pass a knowledge certification quiz before deployment. This ensures consistent messaging across all markets. Next Level Promotions typically provides basic briefing materials or on-site orientation, which limits preparation depth and brand knowledge consistency.',
  },
  {
    question: 'Which agency has better nationwide coverage?',
    answer: 'Air Fresh Marketing covers all 50 states with 5,000+ vetted professionals across 200+ cities. Next Level Promotions operates in select major markets. For brands running multi-market activations or nationwide campaigns, AirFresh provides significantly broader and more reliable coverage.',
  },
  {
    question: 'Can Air Fresh Marketing provide promotional models like Next Level?',
    answer: 'Yes. Air Fresh Marketing has promotional models, brand ambassadors, and event staff across all 50 states. The key difference is that AirFresh models and staff also complete mandatory video training and GPS-verified check-ins — so you get the same caliber of talent with added accountability and brand knowledge that pure modeling agencies cannot match.',
  },
];

const pillarPages = [
  { href: '/event-staffing-agency', label: 'Event Staffing Agency' },
  { href: '/brand-ambassador-agency', label: 'Brand Ambassador Agency' },
  { href: '/experiential-marketing-agency', label: 'Experiential Marketing Agency' },
  { href: '/hire-brand-ambassadors', label: 'Hire Brand Ambassadors' },
  { href: '/promotional-staffing-agency', label: 'Promotional Staffing Agency' },
  { href: '/corporate-event-staffing', label: 'Corporate Event Staffing' },
  { href: '/event-marketing-agency', label: 'Event Marketing Agency' },
  { href: '/brand-activation-agency', label: 'Brand Activation Agency' },
  { href: '/field-marketing-agency', label: 'Field Marketing Agency' },
  { href: '/guerrilla-marketing-agency', label: 'Guerrilla Marketing Agency' },
  { href: '/product-sampling-agency', label: 'Product Sampling Agency' },
  { href: '/mobile-marketing-tours', label: 'Mobile Marketing Tours' },
];

export default function CompareNextLevelPromotions() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": "AirFresh vs Next Level Promotions | Event Staffing Comparison",
        "description": "Compare Air Fresh Marketing vs Next Level Promotions for experiential marketing and promotional staffing. Full-service capabilities, GPS verification, proprietary technology.",
        "url": "https://www.airfreshmarketing.com/compare/next-level-promotions"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.airfreshmarketing.com" },
          { "@type": "ListItem", "position": 2, "name": "Compare", "item": "https://www.airfreshmarketing.com/compare" },
          { "@type": "ListItem", "position": 3, "name": "Next Level Promotions", "item": "https://www.airfreshmarketing.com/compare/next-level-promotions" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
      }
    ]
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Canonical URL via meta */}
      <link rel="canonical" href="https://www.airfreshmarketing.com/compare/next-level-promotions" />
      <title>AirFresh vs Next Level Promotions | Event Staffing Comparison</title>

      {/* Hero */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden bg-gradient-to-br from-[#002B5B] to-[#003d7a]">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-[#F7931E]/10 blur-3xl" />
          <div className="absolute top-20 -left-40 w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
            <Star className="w-4 h-4" />
            Agency Comparison
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
            Air Fresh Marketing vs{' '}
            <span className="text-[#F7931E]">Next Level Promotions</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Next Level Promotions provides promotional staffing and models. AirFresh delivers full-service experiential marketing with GPS check-in, proprietary tech, deeper brand training, and nationwide coverage.
          </p>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Head-to-Head Comparison
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
              Compare Air Fresh Marketing and Next Level Promotions across key capabilities
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-500 w-1/3">Feature</th>
                  <th className="text-center py-4 px-6 w-1/3">
                    <div className="inline-flex items-center gap-2 bg-[#002B5B] text-white text-sm font-bold px-4 py-2 rounded-full">
                      <Star className="w-4 h-4 fill-[#F7931E] text-[#F7931E]" />
                      Air Fresh Marketing
                    </div>
                  </th>
                  <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500 w-1/3">Next Level Promotions</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-4 px-6 text-sm font-medium text-gray-900">{row.feature}</td>
                    <td className="py-4 px-6 text-center">
                      <span className={`inline-flex items-center gap-1.5 text-sm font-semibold px-3 py-1 rounded-full ${
                        row.winner === 'afm' ? 'text-[#002B5B] bg-[#002B5B]/10' : 'text-gray-700 bg-gray-100'
                      }`}>
                        {row.winner === 'afm' && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                        {row.afm}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className={`text-sm ${row.winner === 'competitor' ? 'text-green-600 font-semibold' : 'text-gray-500'}`}>
                        {row.competitor}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Choose AirFresh */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Why Choose AirFresh Over Next Level Promotions
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              Go beyond basic promotional staffing with full-service experiential capabilities and proprietary technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 bg-[#002B5B]/10 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-[#002B5B]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Full-Service Experiential Marketing</h3>
                <p className="text-gray-600 text-sm">AirFresh goes far beyond just providing promo models. We deliver end-to-end experiential marketing including product sampling, guerrilla marketing, mobile tours, trade show activations, and corporate events with strategic planning.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 bg-[#002B5B]/10 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-[#002B5B]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">GPS Check-In Verification</h3>
                <p className="text-gray-600 text-sm">Every staff member&apos;s attendance is GPS-verified with timestamped location data. Next Level Promotions has no equivalent technology — you are relying on honor-system attendance.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 bg-[#002B5B]/10 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-[#002B5B]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Proprietary Technology Platform</h3>
                <p className="text-gray-600 text-sm">Self-service client portal, real-time dashboards, video training platform, and automated reporting. Next Level uses standard booking tools without integrated technology for accountability or training.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 bg-[#002B5B]/10 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-[#002B5B]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Deeper Brand Training</h3>
                <p className="text-gray-600 text-sm">AirFresh requires every team member to complete video training and pass a brand knowledge quiz before stepping on-site. Next Level provides basic briefing sheets — not the same depth of brand preparation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Pricing Comparison
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
              Full-service experiential marketing at transparent, published rates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-[#002B5B]/5 rounded-2xl border-2 border-[#002B5B]/20">
              <h3 className="text-xl font-bold text-[#002B5B] mb-4">Air Fresh Marketing</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  Published rates: $35-65/hr
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  GPS verification + video training included
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  Full experiential strategy at no extra charge
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  Real-time reporting dashboards included
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  No hidden fees — transparent from quote to invoice
                </li>
              </ul>
            </div>
            <div className="p-8 bg-gray-100 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Next Level Promotions</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  Quote-based pricing per project
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  No GPS or technology features included
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  Staffing-only — strategy is additional cost
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  Basic post-event reports only
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  Limited to promotional staffing scope
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Related Resources</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {pillarPages.map((link) => (
            <Link key={link.href} href={link.href} className="text-[#002B5B] hover:text-[#F7931E] font-medium transition-colors flex items-center gap-1.5">
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Compare Other Agencies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Compare Other Event Staffing Agencies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/compare/atn-event-staffing', label: 'AirFresh vs ATN Event Staffing' },
              { href: '/compare/elev8-staffing', label: 'AirFresh vs Elev8 Staffing' },
              { href: '/compare/attack-marketing', label: 'AirFresh vs Attack! Marketing' },
              { href: '/compare/alt-terrain', label: 'AirFresh vs Alt Terrain' },
              { href: '/compare/hype-agency', label: 'AirFresh vs The Hype Agency' },
              { href: '/compare/cea-staffing', label: 'AirFresh vs CEA Staffing' },
              { href: '/compare/ignite-productions', label: 'AirFresh vs Ignite Productions' },
              { href: '/compare/assist-marketing', label: 'AirFresh vs Assist Marketing' },
              { href: '/compare/kinetic-events', label: 'AirFresh vs Kinetic Events' },
              { href: '/compare/mosaic-experiential', label: 'AirFresh vs Mosaic Experiential' },
              { href: '/compare/pro-motion-staffing', label: 'AirFresh vs Pro Motion Staffing' },
              { href: '/compare/advantage-solutions', label: 'AirFresh vs Advantage Solutions' },
              { href: '/compare/allied-experiential', label: 'AirFresh vs Allied Experiential' },
              { href: '/compare/team-enterprises', label: 'AirFresh vs Team Enterprises' },
              { href: '/compare/encore-nationwide', label: 'AirFresh vs Encore Nationwide' },
              { href: '/compare/2x4-experiential', label: 'AirFresh vs 2x4 Experiential' },
              { href: '/compare/fusion-marketing', label: 'AirFresh vs Fusion Marketing' },
              { href: '/compare/event-strategy-group', label: 'AirFresh vs Event Strategy Group' },
              { href: '/compare/sparks-marketing', label: 'AirFresh vs Sparks Marketing' },
              { href: '/compare/grammy-staffing', label: 'AirFresh vs Grammy Staffing' },
              { href: '/compare/lime-media', label: 'AirFresh vs Lime Media' },
              { href: '/compare/modern-marketing', label: 'AirFresh vs Modern Marketing' },
              { href: '/compare/nparallel', label: 'AirFresh vs NParallel' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-[#00C853] hover:shadow-md transition-all text-center"
              >
                <span className="text-sm font-medium text-gray-700 hover:text-[#00C853]">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-[#002B5B] via-[#003d7a] to-[#002B5B] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#F7931E]/10 blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5">
            Ready for more than just promo staffing?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
            Get full-service experiential marketing with GPS verification, certified training, and transparent pricing. Call{' '}
            <a href="tel:3037206060" className="text-[#F7931E] hover:underline">(303) 720-6060</a>{' '}
            or request a free quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-quote?source=compare-next-level-promotions&intent=final-cta">
              <Button size="lg" className="w-full sm:w-auto bg-[#F7931E] hover:bg-[#e8850f] text-white font-bold px-8 py-6 rounded-full text-base flex items-center justify-center gap-2">
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white/10 font-bold px-8 py-6 rounded-full text-base">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
