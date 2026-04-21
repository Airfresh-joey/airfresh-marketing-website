'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, XCircle, Star } from 'lucide-react';

const comparison = [
  { feature: 'Industry Coverage', afm: 'All industries — tech, CPG, auto, sports, entertainment', competitor: 'Entertainment industry focus', winner: 'afm' },
  { feature: 'Geographic Coverage', afm: 'All 50 states, 200+ cities', competitor: 'Major entertainment markets', winner: 'afm' },
  { feature: 'Technology Platform', afm: 'GPS check-in, video training, real-time dashboards', competitor: 'Basic scheduling tools', winner: 'afm' },
  { feature: 'Staff Network Size', afm: '5,000+ vetted brand ambassadors', competitor: 'Entertainment talent roster', winner: 'afm' },
  { feature: 'Video Training', afm: 'Mandatory brand certification before every event', competitor: 'Not available', winner: 'afm' },
  { feature: 'Event Types', afm: 'Trade shows, sampling, activations, corporate, festivals', competitor: 'Award shows, premieres, entertainment events', winner: 'afm' },
  { feature: 'Real-Time Reporting', afm: 'Live dashboards with GPS data', competitor: 'Post-event summaries', winner: 'afm' },
  { feature: 'Pricing Transparency', afm: 'Published rates $35-65/hr', competitor: 'Quote-based pricing', winner: 'afm' },
  { feature: 'Brand Ambassador Training', afm: 'Video + quiz certification per brand', competitor: 'On-site briefings', winner: 'afm' },
  { feature: 'Nationwide Reach', afm: 'Every major and mid-size market', competitor: 'LA, NYC, Nashville, Atlanta hubs', winner: 'afm' },
  { feature: 'Deployment Speed', afm: '48-hour rapid deployment', competitor: 'Standard booking timeline', winner: 'afm' },
];

const faqs = [
  {
    question: 'What is the difference between Air Fresh Marketing and GrammyStaffing?',
    answer: 'Air Fresh Marketing is a full-service experiential marketing and event staffing agency serving all industries across all 50 states with proprietary GPS check-in technology and video training platforms. GrammyStaffing (Premier Staffing) focuses primarily on the entertainment industry, staffing award shows, premieres, and music events in major entertainment markets.',
  },
  {
    question: 'Does GrammyStaffing offer GPS check-in verification?',
    answer: 'No. GrammyStaffing does not offer GPS-verified check-in technology. Air Fresh Marketing uses proprietary GPS verification for every event, providing real-time proof that staff members are on-site and on-time — a level of accountability not available with entertainment-focused staffing agencies.',
  },
  {
    question: 'Which agency has broader geographic coverage — AirFresh or GrammyStaffing?',
    answer: 'Air Fresh Marketing covers all 50 states with vetted talent in 200+ cities. GrammyStaffing primarily operates in entertainment hubs like Los Angeles, New York City, Nashville, and Atlanta. For brands needing nationwide coverage across multiple markets, AirFresh provides significantly broader reach.',
  },
  {
    question: 'Can Air Fresh Marketing staff entertainment events?',
    answer: 'Yes. While AirFresh serves all industries including entertainment, we also cover tech conferences, CPG sampling, automotive shows, sporting events, corporate activations, and more. Our 5,000+ brand ambassadors include talent experienced in entertainment, fashion, and nightlife events.',
  },
  {
    question: 'How does AirFresh video training compare to GrammyStaffing briefings?',
    answer: 'Air Fresh Marketing requires every staff member to complete brand-specific video training modules and pass a knowledge quiz before deployment. This ensures consistent brand messaging across all markets. GrammyStaffing typically provides on-site briefings at the event, which limits preparation time and consistency across multiple activations.',
  },
  {
    question: 'Is Air Fresh Marketing more affordable than GrammyStaffing?',
    answer: 'Air Fresh Marketing publishes transparent rates of $35-65/hr with no hidden fees. GrammyStaffing uses quote-based pricing that varies by event type and talent tier. AirFresh offers flexible minimums suitable for brands of all sizes, while entertainment staffing agencies often have premium pricing structures for their specialized talent.',
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

export default function CompareGrammyStaffing() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": "AirFresh vs GrammyStaffing | Event Staffing Comparison",
        "description": "Compare Air Fresh Marketing vs GrammyStaffing (Premier Staffing) for event staffing. Broader industry coverage, GPS technology, video training, nationwide reach.",
        "url": "https://www.airfreshmarketing.com/compare/grammy-staffing"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.airfreshmarketing.com" },
          { "@type": "ListItem", "position": 2, "name": "Compare", "item": "https://www.airfreshmarketing.com/compare" },
          { "@type": "ListItem", "position": 3, "name": "GrammyStaffing", "item": "https://www.airfreshmarketing.com/compare/grammy-staffing" }
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
      <link rel="canonical" href="https://www.airfreshmarketing.com/compare/grammy-staffing" />
      <title>AirFresh vs GrammyStaffing | Event Staffing Comparison</title>

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
            <span className="text-[#F7931E]">GrammyStaffing</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            GrammyStaffing focuses on entertainment industry events. AirFresh delivers broader industry coverage, proprietary technology, video training certification, and true nationwide reach across 200+ cities.
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
              Compare Air Fresh Marketing and GrammyStaffing across key capabilities
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
                  <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500 w-1/3">GrammyStaffing</th>
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
              Why Choose AirFresh Over GrammyStaffing
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              Full-industry coverage with technology that entertainment staffing agencies simply do not offer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 bg-[#002B5B]/10 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-[#002B5B]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Broader Industry Coverage</h3>
                <p className="text-gray-600 text-sm">While GrammyStaffing focuses on entertainment, AirFresh serves tech, CPG, automotive, healthcare, sports, finance, and every industry in between. One agency for all your activation needs.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 bg-[#002B5B]/10 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-[#002B5B]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Proprietary Technology Platform</h3>
                <p className="text-gray-600 text-sm">GPS-verified check-ins, real-time reporting dashboards, and a self-service client portal give you visibility and control that entertainment staffing agencies cannot provide.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 bg-[#002B5B]/10 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-[#002B5B]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Video Training Certification</h3>
                <p className="text-gray-600 text-sm">Every brand ambassador completes video training modules and passes a brand knowledge quiz before deployment. GrammyStaffing relies on day-of briefings with no pre-event certification.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 bg-[#002B5B]/10 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-[#002B5B]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">True Nationwide Reach</h3>
                <p className="text-gray-600 text-sm">5,000+ vetted professionals in 200+ cities across all 50 states. GrammyStaffing operates primarily in entertainment hubs like LA, NYC, Nashville, and Atlanta.</p>
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
              Published rates vs. entertainment-tier premium pricing
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
                  All-inclusive — GPS, training, reporting included
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  Flexible minimums — works for any budget
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  Same rate nationwide — no market surcharges
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  No hidden fees or surprise invoices
                </li>
              </ul>
            </div>
            <div className="p-8 bg-gray-100 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">GrammyStaffing</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  Quote-based pricing per event
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  Premium rates for entertainment talent
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  Limited to entertainment industry events
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  No technology platform included
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  Geographic limitations add travel fees
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
              { href: '/compare/next-level-promotions', label: 'AirFresh vs Next Level Promotions' },
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
            Ready for full-service event staffing?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
            Get nationwide coverage with GPS verification, video training, and published pricing. Call{' '}
            <a href="tel:3037206060" className="text-[#F7931E] hover:underline">(303) 720-6060</a>{' '}
            or request a free quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
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
