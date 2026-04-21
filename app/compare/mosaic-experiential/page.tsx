import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, Star, ArrowRight, Building, Zap, DollarSign, Clock, Award, Users, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AirFresh vs Mosaic Experiential Marketing | 2026 Comparison',
  description: 'AirFresh vs Mosaic Experiential Marketing comparison: boutique service, lower minimums, GPS tech, and transparent pricing. See why brands choose AirFresh.',
  keywords: 'AirFresh vs Mosaic, Mosaic experiential marketing alternative, event staffing agency comparison, boutique experiential marketing agency',
  openGraph: {
    title: 'AirFresh vs Mosaic Experiential Marketing | 2026 Comparison',
    description: 'Compare Air Fresh Marketing vs Mosaic: boutique agility vs corporate scale. Find the right experiential marketing partner.',
    url: 'https://www.airfreshmarketing.com/compare/mosaic-experiential',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/compare/mosaic-experiential',
  },
};

const comparison = [
  { feature: 'Company Size', afm: 'Boutique agency, personalized service', competitor: '2,000+ employees (Acosta Group)', winner: 'afm' },
  { feature: 'Client Focus', afm: 'Brands of all sizes', competitor: 'Fortune 500 corporate focus', winner: 'afm' },
  { feature: 'Minimum Project Size', afm: 'Flexible minimums, any budget', competitor: 'High minimums ($25K+)', winner: 'afm' },
  { feature: 'Response Time', afm: '24-48 hour turnaround', competitor: 'Multi-week onboarding', winner: 'afm' },
  { feature: 'Technology Platform', afm: 'GPS check-in, video training, real-time dashboards', competitor: 'Proprietary enterprise system', winner: 'afm' },
  { feature: 'Pricing Transparency', afm: 'Published rates, no hidden fees', competitor: 'Custom enterprise pricing', winner: 'afm' },
  { feature: 'Geographic Coverage', afm: '50+ cities nationwide', competitor: 'Global presence', winner: 'tie' },
  { feature: 'Years in Business', afm: '20+ years (est. 2004)', competitor: '30+ years', winner: 'tie' },
  { feature: 'Account Management', afm: 'Dedicated account manager, direct access', competitor: 'Layered team structure', winner: 'afm' },
  { feature: 'Experiential Marketing', afm: 'Full-service activations', competitor: 'Full-service activations', winner: 'tie' },
];

const afmAdvantages = [
  {
    icon: Users,
    title: 'Boutique Personal Service',
    description: 'Work directly with senior leadership and your dedicated account manager. No corporate layers, no waiting in queue behind Fortune 500 clients for attention.',
  },
  {
    icon: DollarSign,
    title: 'Transparent, Accessible Pricing',
    description: 'Published rates starting at $25/hr with flexible minimums. No $25K+ minimum project sizes or complex enterprise contracts required to get started.',
  },
  {
    icon: Zap,
    title: 'GPS Check-In Technology',
    description: 'Proprietary GPS verification ensures every staff member arrives on time. Real-time dashboards give you visibility into every activation as it happens.',
  },
  {
    icon: Clock,
    title: 'Rapid Response & Deployment',
    description: '48-hour emergency staffing capability. While large agencies need weeks to spin up, AirFresh deploys within days thanks to our streamlined processes.',
  },
];

const servicesOffered = [
  { name: 'Brand Ambassadors', afm: true, competitor: true },
  { name: 'Experiential Marketing', afm: true, competitor: true },
  { name: 'GPS Check-In Verification', afm: true, competitor: false },
  { name: 'Video Training Platform', afm: true, competitor: false },
  { name: 'Product Sampling', afm: true, competitor: true },
  { name: 'Trade Show Staffing', afm: true, competitor: true },
  { name: 'Published Rate Cards', afm: true, competitor: false },
  { name: 'Small-Budget Activations', afm: true, competitor: false },
  { name: 'Real-Time Reporting Dashboard', afm: true, competitor: true },
  { name: 'Convention Staffing', afm: true, competitor: true },
];

const faqs = [
  {
    question: 'What is the difference between Air Fresh Marketing and Mosaic Experiential?',
    answer: 'Air Fresh Marketing is a boutique experiential marketing agency with 20+ years of experience, offering personalized service and flexible project sizes. Mosaic is a large-scale agency (subsidiary of Acosta Group) with 2,000+ employees focused primarily on Fortune 500 clients. AirFresh provides direct senior leadership access, lower minimums, GPS check-in technology, and transparent published pricing that Mosaic does not offer.',
  },
  {
    question: 'Is Air Fresh Marketing a good alternative to Mosaic for smaller brands?',
    answer: 'Absolutely. While Mosaic primarily serves Fortune 500 companies with high minimum project sizes ($25K+), Air Fresh Marketing works with brands of all sizes. Our flexible minimums, published pricing starting at $25/hr, and dedicated account management make us an ideal choice for growing brands that want enterprise-level experiential marketing without enterprise-level budgets.',
  },
  {
    question: 'How does AirFresh pricing compare to Mosaic Experiential?',
    answer: 'Air Fresh Marketing publishes transparent rates starting at $25/hr with no hidden fees. Mosaic uses custom enterprise pricing that typically requires high minimum project commitments. AirFresh offers flexible project sizes suitable for any budget, while Mosaic generally targets larger corporate engagements.',
  },
  {
    question: 'Can AirFresh handle large-scale activations like Mosaic?',
    answer: 'Yes. Air Fresh Marketing has executed nationwide activations across 50+ cities for over 20 years. Our 5,000+ vetted professional network, proprietary technology platform, and proven logistics systems enable us to deliver at scale while maintaining the personalized service and accountability that large agencies often sacrifice.',
  },
  {
    question: 'What technology does AirFresh use that Mosaic does not?',
    answer: 'Air Fresh Marketing uses proprietary GPS check-in verification to confirm staff arrival, mandatory video training with certification to ensure brand knowledge, and real-time reporting dashboards that give clients visibility into every activation. While Mosaic has enterprise systems, they do not offer the same level of transparent, client-facing real-time accountability tools.',
  },
  {
    question: 'How quickly can AirFresh deploy staff compared to Mosaic?',
    answer: 'Air Fresh Marketing offers 48-hour emergency staffing capability and typically activates new programs within days. Mosaic, as a large corporate entity, typically requires multi-week onboarding processes with layers of approval. AirFresh\'s streamlined operations and senior-level decision making enable significantly faster response times.',
  },
];

export default function CompareMosaicExperiential() {
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
                  { "@type": "ListItem", "position": 3, "name": "Mosaic Experiential", "item": "https://www.airfreshmarketing.com/compare/mosaic-experiential" }
                ]
              },
              {
                "@type": "Organization",
                "name": "Air Fresh Marketing",
                "url": "https://www.airfreshmarketing.com",
                "telephone": "(303) 720-6060",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "1580 N. Logan St., Suite 660",
                  "addressLocality": "Denver",
                  "addressRegion": "CO",
                  "postalCode": "80203"
                },
                "foundingDate": "2004"
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
            AirFresh Marketing vs{' '}
            <span className="text-[#F7931E]">
              Mosaic
            </span>
            : Event Staffing Agency Comparison
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Comparing a boutique, technology-driven agency against one of the largest experiential marketing firms in North America. Discover why growing brands and enterprise companies alike choose AirFresh for personalized service, transparent pricing, and faster results.
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
              <p className="text-gray-700 font-medium mb-4">Boutique agency, big results</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> GPS check-in verification
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> Flexible minimums, any budget
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> Direct senior leadership access
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> 48-hour rapid deployment
                </li>
              </ul>
            </div>
            <div className="p-8 bg-gray-100 rounded-2xl border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-xl flex items-center justify-center">
                  <Building className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Mosaic Experiential</h3>
              </div>
              <p className="text-gray-600 font-medium mb-4">Large corporate agency (Acosta Group)</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" /> 2,000+ employees
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" /> Fortune 500 client roster
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" /> Global presence
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
              Boutique agility vs corporate scale—see how AirFresh compares to Mosaic across key metrics
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
                    Mosaic Experiential
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
              Both agencies offer experiential marketing—but AirFresh delivers transparency and technology that Mosaic cannot match
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
                      <XCircle className="w-5 h-5 text-red-300" />
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">Mosaic</span>
                    {service.competitor ? (
                      <CheckCircle2 className="w-5 h-5 text-gray-400" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-300" />
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
              Why Choose AirFresh Over Mosaic
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
              Enterprise-quality experiential marketing without the enterprise overhead
            </p>
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

          <div className="mt-12 p-8 bg-[#002B5B]/5 rounded-2xl border border-[#002B5B]/10">
            <h3 className="text-xl font-bold text-[#002B5B] mb-4">The AirFresh Checklist</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'No high minimum project requirements',
                'Published transparent pricing',
                'GPS check-in staff verification',
                'Mandatory video training & certification',
                'Direct senior leadership access',
                '48-hour emergency staffing',
                'Real-time reporting dashboards',
                '20+ years of proven experience',
                'Denver HQ, nationwide execution',
                'Personalized account management',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
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
        <h2 className="text-2xl font-bold mb-8 text-center">Explore Our Services</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { href: '/event-staffing-agency', label: 'Event Staffing Agency' },
            { href: '/brand-ambassador-agency', label: 'Brand Ambassador Agency' },
            { href: '/experiential-marketing-agency', label: 'Experiential Marketing Agency' },
            { href: '/promotional-staffing-agency', label: 'Promotional Staffing Agency' },
            { href: '/corporate-event-staffing', label: 'Corporate Event Staffing' },
            { href: '/event-marketing-agency', label: 'Event Marketing Agency' },
            { href: '/brand-activation-agency', label: 'Brand Activation Agency' },
            { href: '/field-marketing-agency', label: 'Field Marketing Agency' },
            { href: '/guerrilla-marketing-agency', label: 'Guerrilla Marketing Agency' },
            { href: '/product-sampling-agency', label: 'Product Sampling Agency' },
            { href: '/mobile-marketing-tours', label: 'Mobile Marketing Tours' },
            { href: '/compare/atn-event-staffing', label: 'AirFresh vs ATN Event Staffing' },
            { href: '/compare/pro-motion-staffing', label: 'AirFresh vs Pro Motion' },
            { href: '/compare/advantage-solutions', label: 'AirFresh vs Advantage Solutions' },
            { href: '/pricing', label: 'View Our Pricing' },
            { href: '/technology', label: 'Our Technology Platform' },
            { href: '/portfolio', label: 'View Case Studies' },
            { href: '/contact', label: 'Request a Quote' },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="text-[#002B5B] hover:text-[#F7931E] font-medium transition-colors flex items-center gap-1.5">
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
              {link.label}
            </Link>
          ))}
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
            Ready for boutique service with national reach?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
            Get the personalized attention of a boutique agency with the capabilities of a national firm. Call us at{' '}
            <a href="tel:3037206060" className="text-[#F7931E] hover:underline">(303) 720-6060</a> or request a free quote today.
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
