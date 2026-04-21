import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Users, MapPin, Zap, Award, Clock, DollarSign, Target, Star, ArrowRight, Building } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Air Fresh Marketing vs CEA Staffing - Agency Comparison [2026]',
  description: 'Air Fresh Marketing vs CEA Staffing: full-service experiential marketing with proprietary tech vs staffing-only agency. See why brands choose AirFresh over CEA.',
  keywords: 'Air Fresh Marketing vs CEA Staffing, CEA Staffing alternative, event staffing comparison, experiential marketing agency, brand activation staffing',
  openGraph: {
    title: 'Air Fresh Marketing vs CEA Staffing - Which Agency is Right for You?',
    description: 'Compare full-service experiential marketing vs staffing-only solutions. Find your ideal event staffing partner.',
    url: 'https://www.airfreshmarketing.com/compare/cea-staffing',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/compare/cea-staffing',
  },
};

const comparison = [
  { feature: 'Service Model', afm: 'Full-service experiential marketing', competitor: 'Staffing-only body shop', winner: 'afm' },
  { feature: 'Geographic Coverage', afm: 'All 50 states, 50+ cities', competitor: '49+ states, 233,000+ staff network', winner: 'tie' },
  { feature: 'Technology Platform', afm: 'GPS check-in, video training, real-time dashboards, AI tools', competitor: 'GPS check-in tracking', winner: 'afm' },
  { feature: 'Staff Training', afm: 'Mandatory certified video training modules', competitor: 'On-site orientation only', winner: 'afm' },
  { feature: 'Experiential Strategy', afm: 'Full campaign strategy & creative', competitor: 'No strategic planning services', winner: 'afm' },
  { feature: 'Consumer-Facing Tech', afm: 'AI gamification & engagement tools', competitor: 'Not offered', winner: 'afm' },
  { feature: 'Client Dashboard', afm: 'Real-time reporting & analytics portal', competitor: 'Post-event recaps', winner: 'afm' },
  { feature: 'Pricing Transparency', afm: 'Published rates, no hidden fees', competitor: 'Quote-based, opaque pricing', winner: 'afm' },
  { feature: 'W-2 Compliance', afm: 'Full W-2 employment', competitor: 'W-2 compliant', winner: 'tie' },
  { feature: 'Years in Business', afm: '20+ years', competitor: 'Since ~2008 (17+ years)', winner: 'afm' },
];

const afmAdvantages = [
  {
    icon: Target,
    title: 'Full-Service Experiential Partner',
    description: 'Unlike CEA\'s staffing-only model, Air Fresh Marketing provides end-to-end experiential campaign strategy, creative development, and activation execution\u2014not just bodies on the ground.',
  },
  {
    icon: Zap,
    title: 'Proprietary Technology Platform',
    description: 'GPS check-in, real-time reporting dashboards, AI-powered consumer engagement tools, and gamification tech. CEA offers basic GPS tracking but lacks a comprehensive technology ecosystem.',
  },
  {
    icon: Award,
    title: 'Certified Training Program',
    description: 'Every AirFresh staff member completes mandatory video training modules with certification before stepping on-site. CEA relies on day-of orientation, leaving quality to chance.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'Published rates starting at $25/hr with no hidden fees or surprise markups. CEA uses opaque quote-based pricing that makes it difficult to compare costs or budget accurately.',
  },
];

const servicesOffered = [
  { name: 'Brand Ambassadors', afm: true, cea: true },
  { name: 'Event Staffing', afm: true, cea: true },
  { name: 'Product Sampling', afm: true, cea: true },
  { name: 'Trade Show Staff', afm: true, cea: true },
  { name: 'Video Training Platform', afm: true, cea: false },
  { name: 'Real-Time Dashboards', afm: true, cea: false },
  { name: 'Experiential Marketing Strategy', afm: true, cea: false },
  { name: 'AI Consumer Engagement Tools', afm: true, cea: false },
];

const marketsCovered = [
  'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
  'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'Austin',
  'Denver', 'Miami', 'Atlanta', 'Boston', 'Seattle',
  'San Francisco', 'Portland', 'Nashville', 'Las Vegas', 'And 200+ more',
];

const faqs = [
  {
    question: 'What is the difference between Air Fresh Marketing and CEA Staffing?',
    answer: 'CEA Staffing is primarily a staffing body shop\u2014they supply brand ambassadors and event staff to major brands like Bud Light, Delta, and Amazon Prime, but they don\'t offer experiential marketing strategy, creative development, or consumer-facing technology. Air Fresh Marketing is a full-service experiential partner with proprietary GPS check-in, video training certification, real-time dashboards, and AI-powered consumer engagement tools. AirFresh also publishes transparent pricing starting at $25/hr.',
  },
  {
    question: 'Is Air Fresh Marketing better than CEA Staffing?',
    answer: 'CEA Staffing has an impressive network of 233,000+ staff across 49+ states and works with well-known brands. However, Air Fresh Marketing goes beyond staffing with a complete technology platform, mandatory pre-event training certification, experiential campaign strategy, and transparent published pricing. If you need more than just bodies on the ground\u2014strategy, technology, and accountability\u2014AirFresh is the stronger choice.',
  },
  {
    question: 'How much does Air Fresh Marketing cost compared to CEA Staffing?',
    answer: 'Air Fresh Marketing publishes transparent rates starting at $25/hr with no hidden fees or surprise markups. CEA Staffing uses quote-based pricing that varies by market and program, making it harder to budget accurately. AirFresh offers flexible minimums for all budget sizes, giving you full cost visibility before committing.',
  },
];

export default function CompareCEAStaffing() {
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
                  { "@type": "ListItem", "position": 3, "name": "CEA Staffing", "item": "https://www.airfreshmarketing.com/compare/cea-staffing" }
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
              CEA Staffing
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            CEA Staffing supplies bodies. Air Fresh Marketing delivers experiences. See how our full-service experiential approach, proprietary technology, and certified training program outperform a staffing-only model.
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
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#002B5B]">Air Fresh Marketing</h3>
              </div>
              <p className="text-gray-700 font-medium mb-4">Full-service experiential marketing agency</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> End-to-end experiential strategy
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> Proprietary tech: GPS, AI, dashboards
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> Certified pre-event staff training
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
                <h3 className="text-xl font-bold text-gray-800">CEA Staffing</h3>
              </div>
              <p className="text-gray-600 font-medium mb-4">Staffing-focused event agency</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" /> 233,000+ staff network
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" /> 49+ states coverage
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" /> W-2 compliant staffing
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" /> Major brand clients
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
                    CEA Staffing
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
              Full-service experiential marketing vs staffing-only solutions
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
                    <span className="text-xs text-gray-500">CEA</span>
                    {service.cea ? (
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
            { href: '/portfolio', label: 'View Case Studies' },
            { href: '/event-staffing-agency', label: 'Event Staffing Agency' },
            { href: '/brand-ambassador-agency', label: 'Brand Ambassador Agency' },
            { href: '/experiential-marketing-agency', label: 'Experiential Marketing Agency' },
            { href: '/promotional-staffing-agency', label: 'Promotional Staffing Agency' },
            { href: '/corporate-event-staffing', label: 'Corporate Event Staffing' },
            { href: '/event-marketing-agency', label: 'Event Marketing Agency' },
            { href: '/brand-activation-agency', label: 'Brand Activation Agency' },
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
            Ready for more than just staffing?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
            See why brands are choosing a full-service experiential partner over staffing-only agencies. Get a free quote or call us at{' '}
            <a href="tel:3037206060" className="text-[#F7931E] hover:underline">(303) 720-6060</a>.
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
