import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Users, MapPin, Zap, Award, Clock, DollarSign, Target, Star, ArrowRight, Mountain, Building } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Air Fresh Marketing vs Alt Terrain - Experiential Agency Comparison',
  description: 'Compare Air Fresh Marketing vs Alt Terrain: More cities, faster deployment, flexible pricing. See why growing brands choose Air Fresh Marketing.',
  keywords: 'Air Fresh Marketing vs Alt Terrain, experiential marketing comparison, brand activation agency, Alt Terrain alternative',
  openGraph: {
    title: 'Air Fresh Marketing vs Alt Terrain - Which Agency Fits Your Needs?',
    description: 'Compare services, coverage, and value. Find your ideal experiential marketing partner.',
    url: 'https://www.airfreshmarketing.com/compare/alt-terrain',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/compare/alt-terrain',
  },
};

const comparison = [
  { feature: 'Geographic Focus', afm: 'All 50 states', competitor: 'NYC & Northeast focus', winner: 'afm' },
  { feature: 'Years in Business', afm: '15+ years', competitor: '20+ years', winner: 'competitor' },
  { feature: 'Wild Posting/Wheat Paste', afm: 'Available nationwide', competitor: 'Specialty (NYC)', winner: 'tie' },
  { feature: 'Street Teams', afm: 'All major markets', competitor: 'Select markets', winner: 'afm' },
  { feature: 'Campaign Minimums', afm: 'Flexible for all budgets', competitor: 'Higher minimums', winner: 'afm' },
  { feature: 'Rapid Deployment', afm: '24-48 hours possible', competitor: 'Standard lead times', winner: 'afm' },
  { feature: 'Event Staffing', afm: 'Full service', competitor: 'Limited', winner: 'afm' },
  { feature: 'Brand Ambassadors', afm: '10,000+ network', competitor: 'Smaller network', winner: 'afm' },
  { feature: 'Product Sampling', afm: 'Full service', competitor: 'Available', winner: 'tie' },
  { feature: 'Real-time Reporting', afm: 'Included', competitor: 'Available', winner: 'tie' },
];

const afmAdvantages = [
  {
    icon: MapPin,
    title: 'True Nationwide Coverage',
    description: 'While Alt Terrain focuses on NYC and the Northeast, we execute campaigns in all 50 states with local expertise in every market.',
  },
  {
    icon: DollarSign,
    title: 'Budget-Flexible Programs',
    description: 'No massive minimums. We work with emerging brands and Fortune 500s alike, scaling programs to fit your budget.',
  },
  {
    icon: Zap,
    title: 'Rapid Market Activation',
    description: 'Need to launch in multiple cities fast? Our network enables 24-48 hour deployment when timing is critical.',
  },
  {
    icon: Users,
    title: 'Full-Service Event Staffing',
    description: 'Beyond street marketing, we provide complete event staffing, trade show teams, and brand ambassador programs.',
  },
];

const marketsCovered = [
  'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
  'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'Austin',
  'Denver', 'Miami', 'Atlanta', 'Boston', 'Seattle',
  'San Francisco', 'Portland', 'Nashville', 'Las Vegas', 'And 200+ more',
];

const servicesOffered = [
  { name: 'Street Teams', afm: true, alt: true },
  { name: 'Wild Posting', afm: true, alt: true },
  { name: 'Brand Ambassadors', afm: true, alt: false },
  { name: 'Event Staffing', afm: true, alt: false },
  { name: 'Product Sampling', afm: true, alt: true },
  { name: 'Trade Show Staff', afm: true, alt: false },
  { name: 'Guerrilla Marketing', afm: true, alt: true },
  { name: 'Promotional Models', afm: true, alt: false },
];

const faqs = [
  {
    question: 'What is the difference between Air Fresh Marketing and Alt Terrain?',
    answer: 'Air Fresh Marketing operates nationwide across all 50 states with full-service event staffing, brand ambassadors, trade show teams, and experiential marketing. Alt Terrain specializes in NYC and Northeast street marketing including wild posting and wheat pasting. AirFresh offers broader services and geographic coverage.',
  },
  {
    question: 'Is Air Fresh Marketing better than Alt Terrain for street teams?',
    answer: 'Alt Terrain has deep expertise in NYC street marketing and wild posting. Air Fresh Marketing offers street teams in all major markets nationwide with flexible budget minimums and 24-48 hour deployment capability. Choose Alt Terrain for NYC-specific wild posting or AirFresh for multi-market street team campaigns.',
  },
  {
    question: 'Can Air Fresh Marketing do wild posting like Alt Terrain?',
    answer: 'Yes, Air Fresh Marketing offers wild posting and wheat paste campaigns nationwide, not limited to NYC and the Northeast like Alt Terrain. AirFresh also adds full-service event staffing, brand ambassadors, and trade show teams that Alt Terrain does not offer.',
  },
];

export default function CompareAltTerrain() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.airfreshmarketing.com" },
                  { "@type": "ListItem", "position": 2, "name": "Compare", "item": "https://www.airfreshmarketing.com/compare" },
                  { "@type": "ListItem", "position": 3, "name": "Alt Terrain", "item": "https://www.airfreshmarketing.com/compare/alt-terrain" }
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
          })
        }}
      />
      {/* Hero */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden bg-gradient-to-br from-[#002B5B] via-[#003d7a] to-[#002B5B]">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-[#F7931E]/10 blur-3xl" />
          <div className="absolute top-20 -left-40 w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
            <Mountain className="w-4 h-4" />
            Agency Comparison
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
            Air Fresh Marketing vs{' '}
            <span className="text-[#F7931E]">
              Alt Terrain
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Alt Terrain excels in NYC street marketing. Air Fresh Marketing brings that same energy nationwide—plus full-service event staffing capabilities.
          </p>
        </div>
      </section>

      {/* Key Difference */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-[#002B5B]/5 rounded-2xl border-2 border-[#002B5B]/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#002B5B] rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#002B5B]">Air Fresh Marketing</h3>
              </div>
              <p className="text-gray-700 font-medium mb-4">Nationwide experiential marketing</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> All 50 states covered
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> Full event staffing services
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> Flexible budget minimums
                </li>
              </ul>
            </div>
            <div className="p-8 bg-gray-100 rounded-2xl border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-xl flex items-center justify-center">
                  <Mountain className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Alt Terrain</h3>
              </div>
              <p className="text-gray-600 font-medium mb-4">NYC-focused street marketing</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" /> Strong NYC presence
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" /> Wild posting expertise
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" /> Northeast focus
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Head-to-Head Comparison
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
              Compare capabilities across key areas
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-500 w-1/3">
                    Capability
                  </th>
                  <th className="text-center py-4 px-6 w-1/3">
                    <div className="inline-flex items-center gap-2 bg-[#002B5B] text-white text-sm font-bold px-4 py-2 rounded-full">
                      <Star className="w-4 h-4 fill-[#F7931E] text-[#F7931E]" />
                      Air Fresh Marketing
                    </div>
                  </th>
                  <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500 w-1/3">
                    Alt Terrain
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="py-4 px-6 text-sm font-medium text-gray-900">
                      {row.feature}
                    </td>
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

      {/* Services Comparison */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Service Capabilities
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
              We offer more services in more markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {servicesOffered.map((service) => (
              <div key={service.name} className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200">
                <span className="font-medium text-gray-900">{service.name}</span>
                <div className="flex gap-6">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">AFM</span>
                    {service.afm ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    ) : (
                      <span className="w-5 h-5 rounded-full bg-gray-200" />
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">AT</span>
                    {service.alt ? (
                      <CheckCircle2 className="w-5 h-5 text-gray-400" />
                    ) : (
                      <span className="w-5 h-5 rounded-full bg-gray-200" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose AFM */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              The Air Fresh Advantage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {afmAdvantages.map((item) => (
              <div key={item.title} className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 bg-[#002B5B]/10 rounded-xl flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-[#002B5B]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Markets */}
      <section className="py-20 sm:py-28 bg-[#002B5B]/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              We&apos;re Where You Need Us
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
              Local expertise in 200+ markets nationwide
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {marketsCovered.map((market) => (
              <span key={market} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200">
                {market}
              </span>
            ))}
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

      {/* CTA */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-[#002B5B] via-[#003d7a] to-[#002B5B] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#F7931E]/10 blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5">
            Go beyond NYC
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
            Launch your experiential campaign in any market—or all of them. Get started with a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-quote?source=compare-alt-terrain&intent=final-cta">
              <Button size="lg" className="w-full sm:w-auto bg-[#F7931E] hover:bg-[#e8850f] text-white font-bold px-8 py-6 rounded-full text-base flex items-center justify-center gap-2">
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/locations">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white/10 font-bold px-8 py-6 rounded-full text-base">
                See Our Markets
              </Button>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {[
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
              { href: '/compare/atn-event-staffing', label: 'AirFresh vs ATN Event Staffing' },
              { href: '/compare/elev8-staffing', label: 'AirFresh vs Elev8 Staffing' },
              { href: '/compare/attack-marketing', label: 'AirFresh vs Attack! Marketing' },
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
              { href: '/compare/next-level-promotions', label: 'AirFresh vs Next Level Promotions' },
              { href: '/compare/lime-media', label: 'AirFresh vs Lime Media' },
              { href: '/compare/modern-marketing', label: 'AirFresh vs Modern Marketing' },
              { href: '/compare/nparallel', label: 'AirFresh vs NParallel' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="text-white/70 hover:text-cyan-200 text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
