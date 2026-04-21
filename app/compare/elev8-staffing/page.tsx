import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Users, MapPin, Zap, Award, Clock, DollarSign, Target, Star, ArrowRight, Building } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Air Fresh Marketing vs Elev8 Staffing - Agency Comparison [2026]',
  description: 'Compare Air Fresh Marketing vs Elev8 Staffing Group: More technology, better training, transparent pricing. See the AirFresh difference.',
  keywords: 'Air Fresh Marketing vs Elev8 Staffing, event staffing comparison, brand activation agency, Elev8 Staffing alternative',
  openGraph: {
    title: 'Air Fresh Marketing vs Elev8 Staffing Group - Which Agency is Right for You?',
    description: 'Compare services, quality standards, and technology. Find your ideal event staffing partner.',
    url: 'https://www.airfreshmarketing.com/compare/elev8-staffing',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/compare/elev8-staffing',
  },
};

const comparison = [
  { feature: 'Geographic Focus', afm: 'All 50 states, 50+ cities', competitor: 'Nationwide', winner: 'tie' },
  { feature: 'Staff Vetting Process', afm: 'Multi-step vetting + video certification', competitor: 'Standard screening', winner: 'afm' },
  { feature: 'Technology Platform', afm: 'GPS check-in, video training, real-time dashboards', competitor: 'Standard tools', winner: 'afm' },
  { feature: 'Staff Training', afm: 'Mandatory video training with certification', competitor: 'On-site orientation', winner: 'afm' },
  { feature: 'Quality Assurance', afm: 'GPS-verified attendance + real-time monitoring', competitor: 'Post-event reporting', winner: 'afm' },
  { feature: 'Brand Ambassadors', afm: '5,000+ vetted, trained professionals', competitor: 'Large roster', winner: 'afm' },
  { feature: 'Pricing Transparency', afm: 'Published rates, no hidden fees', competitor: 'Custom quotes', winner: 'afm' },
  { feature: 'Client Reporting', afm: 'Real-time dashboards with GPS data', competitor: 'Post-event summaries', winner: 'afm' },
  { feature: 'Convention Expertise', afm: 'CES, SEMA, NAB specialization', competitor: 'General event staffing', winner: 'afm' },
  { feature: 'Staffing Volume', afm: 'Scalable to any size', competitor: 'High-volume capability', winner: 'tie' },
];

const afmAdvantages = [
  {
    icon: Award,
    title: 'Quality Over Quantity',
    description: 'Every staff member completes mandatory video training and certification before representing your brand. No exceptions, no shortcuts.',
  },
  {
    icon: Zap,
    title: 'Proprietary Technology',
    description: 'GPS check-in verification, video training platform, and real-time reporting dashboards give you complete visibility and accountability.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'Published rates starting at $25/hr with no hidden fees. Know your costs upfront instead of waiting for custom quotes.',
  },
  {
    icon: Target,
    title: 'Trade Show Expertise',
    description: 'Specialized teams for CES, SEMA, NAB, MAGIC, and other major conventions. We understand the unique demands of trade show staffing.',
  },
];

const servicesOffered = [
  { name: 'Brand Ambassadors', afm: true, elev8: true },
  { name: 'Event Staffing', afm: true, elev8: true },
  { name: 'GPS Check-In Technology', afm: true, elev8: false },
  { name: 'Video Training Platform', afm: true, elev8: false },
  { name: 'Trade Show Specialists', afm: true, elev8: true },
  { name: 'Real-Time Dashboards', afm: true, elev8: false },
  { name: 'Product Sampling', afm: true, elev8: true },
  { name: 'Promotional Models', afm: true, elev8: true },
];

const marketsCovered = [
  'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
  'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'Austin',
  'Denver', 'Miami', 'Atlanta', 'Boston', 'Seattle',
  'San Francisco', 'Portland', 'Nashville', 'Las Vegas', 'And 200+ more',
];

const faqs = [
  {
    question: 'What is the difference between Air Fresh Marketing and Elev8 Staffing?',
    answer: 'Air Fresh Marketing combines event staffing with proprietary technology including GPS check-in verification, mandatory video training and certification, and real-time reporting dashboards. Elev8 Staffing Group focuses on high-volume staffing with standard screening and post-event reporting. AirFresh also offers published transparent pricing starting at $25/hr.',
  },
  {
    question: 'Is Air Fresh Marketing better than Elev8 Staffing Group?',
    answer: 'Both agencies provide nationwide event staffing at scale. Air Fresh Marketing differentiates with technology-driven quality assurance (GPS-verified attendance, certified video training) and transparent published pricing. Elev8 focuses on volume-based staffing. The best choice depends on whether you prioritize technology and accountability or purely volume.',
  },
  {
    question: 'How does staff quality compare between Air Fresh Marketing and Elev8?',
    answer: 'Air Fresh Marketing requires every staff member to complete mandatory video training with certification before representing your brand. Staff check in via GPS-enabled app verifying location and time. Elev8 Staffing uses standard screening with on-site orientation. AirFresh maintains a 99%+ on-time arrival rate across all events.',
  },
];

export default function CompareElev8Staffing() {
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
                  { "@type": "ListItem", "position": 3, "name": "Elev8 Staffing", "item": "https://www.airfreshmarketing.com/compare/elev8-staffing" }
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
            <Building className="w-4 h-4" />
            Agency Comparison
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
            Air Fresh Marketing vs{' '}
            <span className="text-[#F7931E]">
              Elev8 Staffing
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Elev8 focuses on staffing volume. Air Fresh Marketing combines that scale with proprietary technology, certified training, and transparent pricing for superior results.
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
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#002B5B]">Air Fresh Marketing</h3>
              </div>
              <p className="text-gray-700 font-medium mb-4">Quality + technology-driven staffing</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> GPS-verified attendance
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> Certified video training
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> Published rates from $25/hr
                </li>
              </ul>
            </div>
            <div className="p-8 bg-gray-100 rounded-2xl border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-xl flex items-center justify-center">
                  <Building className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Elev8 Staffing Group</h3>
              </div>
              <p className="text-gray-600 font-medium mb-4">Volume-focused event staffing</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" /> Nationwide coverage
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" /> High-volume staffing
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" /> Large staff roster
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
                    Elev8 Staffing
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
              Quality-assured staffing with technology you can trust
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
                    <span className="text-xs text-gray-500">E8</span>
                    {service.elev8 ? (
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

      {/* Related Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Explore Our Top Markets</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { href: '/city-services/los-angeles-brand-ambassadors', label: 'Brand Ambassadors Los Angeles' },
            { href: '/city-services/new-york-city-convention-staffing', label: 'Convention Staffing NYC' },
            { href: '/city-services/las-vegas-convention-staffing', label: 'Convention Staffing Las Vegas' },
            { href: '/city-services/chicago-event-management', label: 'Event Management Chicago' },
            { href: '/city-services/miami-experiential-marketing', label: 'Experiential Marketing Miami' },
            { href: '/blog/top-event-staffing-agencies-los-angeles', label: 'Top 10 Agencies in LA' },
            { href: '/blog/top-event-staffing-agencies-new-york', label: 'Top 10 Agencies in NYC' },
            { href: '/blog/top-event-staffing-agencies-las-vegas', label: 'Top 10 Agencies in Las Vegas' },
            { href: '/pricing', label: 'View Our Pricing' },
            { href: '/technology', label: 'Our Technology Platform' },
            { href: '/compare/atn-event-staffing', label: 'AirFresh vs ATN Event Staffing' },
            { href: '/compare/hype-agency', label: 'AirFresh vs The Hype Agency' },
            { href: '/compare/cea-staffing', label: 'AirFresh vs CEA Staffing' },
            { href: '/compare/assist-marketing', label: 'AirFresh vs Assist Marketing' },
            { href: '/portfolio', label: 'View Case Studies' },
            { href: '/event-staffing-agency', label: 'Event Staffing Agency' },
            { href: '/brand-ambassador-agency', label: 'Brand Ambassador Agency' },
            { href: '/experiential-marketing-agency', label: 'Experiential Marketing Agency' },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="text-[#002B5B] hover:text-[#F7931E] font-medium transition-colors flex items-center gap-1.5">
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
              {link.label}
            </Link>
          ))}
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
            Quality staffing, powered by technology
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
            Experience the difference that GPS verification, certified training, and real-time reporting make. Call us at{' '}
            <a href="tel:3037206060" className="text-[#F7931E] hover:underline">(303) 720-6060</a>{' '}
            or get a free quote today.
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
