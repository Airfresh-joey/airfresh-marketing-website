import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, Users, MapPin, Zap, Award, Clock, DollarSign, Target, Star, ArrowRight, Building } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Air Fresh Marketing vs Attack! Marketing - Experiential Agency Comparison',
  description: 'Compare Air Fresh Marketing vs Attack! Marketing: Nationwide reach, competitive pricing, and 15+ years of experiential marketing expertise. See why brands choose AFM.',
  keywords: 'Air Fresh Marketing vs Attack Marketing, experiential marketing agency comparison, brand activation agency, Attack Marketing alternative',
  openGraph: {
    title: 'Air Fresh Marketing vs Attack! Marketing - Which Agency is Right for You?',
    description: 'Side-by-side comparison of services, reach, and value. Find the right experiential marketing partner.',
    url: 'https://www.airfreshmarketing.com/compare/attack-marketing',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/compare/attack-marketing',
  },
};

const comparison = [
  { feature: 'Years in Business', afm: '15+ years', competitor: '25+ years', winner: 'competitor' },
  { feature: 'Nationwide Coverage', afm: '50 states', competitor: '50 states', winner: 'tie' },
  { feature: 'Brand Ambassador Network', afm: '10,000+ nationwide', competitor: 'Large network', winner: 'tie' },
  { feature: 'Pricing Transparency', afm: 'Clear, upfront quotes', competitor: 'Request required', winner: 'afm' },
  { feature: 'Campaign Turnaround', afm: '24-48 hour activation', competitor: '1-2 weeks typical', winner: 'afm' },
  { feature: 'Small Business Friendly', afm: 'All budget sizes', competitor: 'Enterprise focus', winner: 'afm' },
  { feature: 'Real-time Reporting', afm: 'Yes, included', competitor: 'Yes', winner: 'tie' },
  { feature: 'Guerrilla Marketing', afm: 'Specialty', competitor: 'Available', winner: 'afm' },
  { feature: 'Product Sampling', afm: 'Full service', competitor: 'Full service', winner: 'tie' },
  { feature: 'Event Staffing', afm: 'Flexible minimums', competitor: 'Higher minimums', winner: 'afm' },
];

const whyChooseAfm = [
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    description: 'Get enterprise-quality experiential marketing at rates that work for businesses of all sizes.',
  },
  {
    icon: Zap,
    title: 'Rapid Deployment',
    description: 'Need boots on the ground fast? We can activate campaigns in 24-48 hours when needed.',
  },
  {
    icon: Users,
    title: 'Flexible Staffing',
    description: 'From a single brand ambassador to 100+ person teams—we scale to your exact needs.',
  },
  {
    icon: Target,
    title: 'Guerrilla Marketing Experts',
    description: 'Street teams, wild postings, and unconventional tactics that cut through the noise.',
  },
];

const services = [
  'Brand Ambassadors',
  'Event Staffing',
  'Street Teams',
  'Product Sampling',
  'Trade Shows',
  'Guerrilla Marketing',
  'Promotional Models',
  'Field Marketing',
];

const faqs = [
  {
    question: 'What is the difference between Air Fresh Marketing and Attack! Marketing?',
    answer: 'Both agencies offer nationwide experiential marketing. Air Fresh Marketing provides faster campaign turnaround (24-48 hours vs 1-2 weeks), flexible budget minimums for businesses of all sizes, and specialized guerrilla marketing expertise. Attack! Marketing has 25+ years experience and focuses primarily on enterprise-level clients.',
  },
  {
    question: 'Is Air Fresh Marketing cheaper than Attack! Marketing?',
    answer: 'Air Fresh Marketing offers competitive, transparent pricing for businesses of all sizes with flexible minimums. Attack! Marketing typically focuses on enterprise clients with higher minimum spend requirements. AirFresh provides clear upfront quotes while Attack! requires custom pricing requests.',
  },
  {
    question: 'Which agency is better for experiential marketing campaigns?',
    answer: 'Both agencies are highly capable. Air Fresh Marketing excels in rapid deployment (24-48 hours), guerrilla marketing, and serving both emerging brands and Fortune 500 companies. Attack! Marketing has longer experience (25+ years) and stronger enterprise relationships. Choose based on your timeline, budget, and scale needs.',
  },
];

export default function CompareAttackMarketing() {
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
                  { "@type": "ListItem", "position": 3, "name": "Attack! Marketing", "item": "https://www.airfreshmarketing.com/compare/attack-marketing" }
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
              Attack! Marketing
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Both agencies deliver experiential marketing excellence. See how Air Fresh Marketing offers competitive advantages that matter for your brand.
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-3xl font-extrabold text-[#002B5B]">15+</p>
              <p className="text-sm text-gray-600 mt-1">Years Experience</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-3xl font-extrabold text-[#002B5B]">50</p>
              <p className="text-sm text-gray-600 mt-1">States Covered</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-3xl font-extrabold text-[#002B5B]">10K+</p>
              <p className="text-sm text-gray-600 mt-1">Brand Ambassadors</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-3xl font-extrabold text-[#002B5B]">24-48h</p>
              <p className="text-sm text-gray-600 mt-1">Rapid Activation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Feature-by-Feature Comparison
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
              See how we compare on the metrics that matter
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-500 w-1/3">
                    Feature
                  </th>
                  <th className="text-center py-4 px-6 w-1/3">
                    <div className="inline-flex items-center gap-2 bg-[#002B5B] text-white text-sm font-bold px-4 py-2 rounded-full">
                      <Star className="w-4 h-4 fill-[#F7931E] text-[#F7931E]" />
                      Air Fresh Marketing
                    </div>
                  </th>
                  <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500 w-1/3">
                    Attack! Marketing
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

      {/* Why Choose AFM */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Why Brands Choose Air Fresh
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
              The competitive advantages that set us apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseAfm.map((item) => (
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

      {/* Services */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Full-Service Capabilities
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
              Everything you need for successful brand activations
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service) => (
              <div key={service} className="flex items-center gap-2 px-5 py-3 bg-[#002B5B]/5 rounded-full border border-[#002B5B]/10">
                <CheckCircle2 className="w-4 h-4 text-[#002B5B]" />
                <span className="text-sm font-medium text-gray-700">{service}</span>
              </div>
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
            Ready to activate your brand?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
            Get a custom quote for your next experiential marketing campaign. No commitment, no pressure.
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
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {[
              { href: '/event-staffing-agency', label: 'Event Staffing Agency' },
              { href: '/brand-ambassador-agency', label: 'Brand Ambassador Agency' },
              { href: '/experiential-marketing-agency', label: 'Experiential Marketing Agency' },
              { href: '/promotional-staffing-agency', label: 'Promotional Staffing Agency' },
              { href: '/corporate-event-staffing', label: 'Corporate Event Staffing' },
              { href: '/event-marketing-agency', label: 'Event Marketing Agency' },
              { href: '/brand-activation-agency', label: 'Brand Activation Agency' },
              { href: '/compare/mosaic-experiential', label: 'AirFresh vs Mosaic Experiential' },
              { href: '/compare/pro-motion-staffing', label: 'AirFresh vs Pro Motion' },
              { href: '/compare/advantage-solutions', label: 'AirFresh vs Advantage Solutions' },
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
