import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, Star, ArrowRight, Building, Zap, DollarSign, Clock, Award, Users, Target, MapPin, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AirFresh vs 2x4 Experiential | Experiential Marketing Comparison',
  description: 'AirFresh vs 2x4 Experiential comparison: nationwide coverage, larger staff network, GPS verification technology, and published pricing vs boutique experiential agency.',
  keywords: 'AirFresh vs 2x4 Experiential, 2x4 Experiential alternative, experiential marketing agency comparison, brand activation agency comparison',
  openGraph: {
    title: 'AirFresh vs 2x4 Experiential | Experiential Marketing Comparison',
    description: 'Compare Air Fresh Marketing vs 2x4 Experiential: nationwide experiential marketing with GPS technology vs boutique regional activations.',
    url: 'https://www.airfreshmarketing.com/compare/2x4-experiential',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/compare/2x4-experiential',
  },
};

const comparison = [
  { feature: 'Geographic Coverage', afm: '200+ cities nationwide', competitor: 'Limited regional markets', winner: 'afm' },
  { feature: 'Staff Network', afm: '5,000+ vetted brand ambassadors', competitor: 'Smaller boutique roster', winner: 'afm' },
  { feature: 'Technology Platform', afm: 'GPS check-in, video training, real-time dashboards', competitor: 'Basic reporting tools', winner: 'afm' },
  { feature: 'Pricing Transparency', afm: 'Published rates, no hidden fees', competitor: 'Custom quotes only', winner: 'afm' },
  { feature: 'Staff Verification', afm: 'GPS check-in confirms every arrival', competitor: 'Manual check-in processes', winner: 'afm' },
  { feature: 'Turnaround Time', afm: '48-hour emergency staffing capability', competitor: 'Standard lead times required', winner: 'afm' },
  { feature: 'Brand Training', afm: 'Mandatory video training with certification', competitor: 'In-person briefings', winner: 'afm' },
  { feature: 'Client Reporting', afm: 'Real-time dashboards with live metrics', competitor: 'Post-event recaps', winner: 'afm' },
  { feature: 'Creative Approach', afm: 'Full-service creative & execution', competitor: 'Boutique creative focus', winner: 'tie' },
  { feature: 'Industry Experience', afm: '20+ years, 300+ brands served', competitor: 'Established boutique agency', winner: 'afm' },
];

const afmAdvantages = [
  {
    icon: Globe,
    title: 'Nationwide Coverage vs Regional Limitations',
    description: '2x4 Experiential operates as a boutique agency with limited geographic reach. Air Fresh Marketing activates in 200+ cities with a network of 5,000+ trained brand ambassadors, giving you true nationwide scale without sacrificing quality.',
  },
  {
    icon: MapPin,
    title: 'GPS Verification Technology',
    description: 'Our proprietary GPS check-in system verifies every staff member arrives on time at every location. No more wondering if your activation team showed up. 2x4 relies on manual check-in processes that cannot match this level of accountability.',
  },
  {
    icon: DollarSign,
    title: 'Published Transparent Pricing',
    description: 'Air Fresh Marketing publishes rates ($35-65/hr for brand ambassadors, $40-70/hr for trade shows) with no hidden fees. 2x4 Experiential requires custom quotes for every project, making it difficult to budget and compare costs upfront.',
  },
  {
    icon: Users,
    title: 'Larger Network, Consistent Quality',
    description: 'With 5,000+ vetted professionals and mandatory video training certification, AirFresh delivers consistent brand representation across all markets. Boutique agencies like 2x4 may deliver great local results but struggle to scale consistently across multiple cities.',
  },
];

const servicesOffered = [
  { name: 'Brand Activations', afm: true, competitor: true },
  { name: 'Experiential Marketing', afm: true, competitor: true },
  { name: 'GPS Check-In Verification', afm: true, competitor: false },
  { name: 'Video Training & Certification', afm: true, competitor: false },
  { name: 'Nationwide Coverage (200+ Cities)', afm: true, competitor: false },
  { name: 'Real-Time Reporting Dashboard', afm: true, competitor: false },
  { name: 'Product Sampling', afm: true, competitor: true },
  { name: 'Trade Show Staffing', afm: true, competitor: true },
  { name: 'Event Staffing', afm: true, competitor: true },
  { name: 'Published Transparent Pricing', afm: true, competitor: false },
  { name: '48-Hour Emergency Staffing', afm: true, competitor: false },
  { name: 'Mobile Marketing Tours', afm: true, competitor: false },
];

const faqs = [
  {
    question: 'What is the difference between Air Fresh Marketing and 2x4 Experiential?',
    answer: 'Air Fresh Marketing is a nationwide experiential marketing and event staffing agency operating in 200+ cities with 5,000+ brand ambassadors, proprietary GPS technology, and published transparent pricing. 2x4 Experiential is a boutique experiential marketing agency with a regional focus and smaller team. AirFresh offers the scale, technology, and accountability that growing brands need for multi-market campaigns.',
  },
  {
    question: 'Can AirFresh match 2x4 Experiential\'s creative quality at larger scale?',
    answer: 'Absolutely. Air Fresh Marketing combines creative experiential marketing expertise with nationwide execution capabilities. With 20+ years of experience and 300+ brands served, AirFresh delivers boutique-quality creative concepts backed by the infrastructure to activate across 200+ cities simultaneously—something a smaller boutique agency cannot achieve.',
  },
  {
    question: 'How does AirFresh pricing compare to 2x4 Experiential?',
    answer: 'Air Fresh Marketing publishes transparent rates: Brand Ambassadors $35-65/hr, Trade Show Staff $40-70/hr, with no hidden fees or surprise charges. 2x4 Experiential requires custom quotes for every project. AirFresh\'s published pricing makes budgeting straightforward and ensures you know costs upfront before committing.',
  },
  {
    question: 'Does 2x4 Experiential offer GPS verification technology?',
    answer: 'No. 2x4 Experiential uses traditional manual check-in processes. Air Fresh Marketing\'s proprietary GPS check-in technology automatically verifies staff arrival at every activation location, mandatory video training ensures brand knowledge certification, and real-time dashboards give clients live visibility into campaign performance across all markets.',
  },
  {
    question: 'Why do brands choose AirFresh over 2x4 Experiential for multi-city campaigns?',
    answer: 'Brands choose AirFresh for multi-city campaigns because of nationwide coverage in 200+ cities, a network of 5,000+ vetted professionals, GPS verification ensuring accountability across all locations, real-time reporting dashboards, and the ability to maintain consistent brand quality at scale. Boutique agencies like 2x4 excel locally but cannot match this geographic reach.',
  },
  {
    question: 'Can AirFresh handle both small boutique activations and large nationwide campaigns?',
    answer: 'Yes. Air Fresh Marketing serves brands of all sizes with flexible project scoping. Whether you need a single-city boutique activation or a 50-city nationwide campaign, AirFresh delivers the same level of quality, accountability, and technology-backed execution. Our published pricing and no-minimum approach makes us accessible for projects of any scale.',
  },
];

export default function Compare2x4Experiential() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "name": "AirFresh vs 2x4 Experiential | Experiential Marketing Comparison",
                "url": "https://www.airfreshmarketing.com/compare/2x4-experiential",
                "description": "Compare Air Fresh Marketing vs 2x4 Experiential for experiential marketing, brand activations, and event staffing services."
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.airfreshmarketing.com" },
                  { "@type": "ListItem", "position": 2, "name": "Compare", "item": "https://www.airfreshmarketing.com/compare" },
                  { "@type": "ListItem", "position": 3, "name": "2x4 Experiential", "item": "https://www.airfreshmarketing.com/compare/2x4-experiential" }
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
              2x4 Experiential
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            2x4 Experiential is a boutique experiential marketing agency with regional focus. Air Fresh Marketing delivers the same creative quality with nationwide coverage in 200+ cities, GPS verification technology, and transparent published pricing.
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
              <p className="text-gray-700 font-medium mb-4">Nationwide experiential marketing at scale</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> 200+ cities nationwide
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> 5,000+ vetted brand ambassadors
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> GPS verification technology
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> Published transparent pricing
                </li>
              </ul>
            </div>
            <div className="p-8 bg-gray-100 rounded-2xl border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-xl flex items-center justify-center">
                  <Building className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">2x4 Experiential</h3>
              </div>
              <p className="text-gray-600 font-medium mb-4">Boutique experiential marketing agency</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" /> Creative experiential concepts
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" /> Regional market focus
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" /> Smaller dedicated team
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
              Nationwide scale and technology vs boutique regional approach—see how AirFresh compares to 2x4 Experiential
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
                    2x4 Experiential
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
              AirFresh delivers nationwide experiential marketing with technology and accountability
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
                    <span className="text-xs text-gray-500">2x4</span>
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
              Why Choose AirFresh Over 2x4 Experiential
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
              Nationwide scale, GPS technology, and published pricing that boutique agencies cannot match
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
            <h3 className="text-xl font-bold text-[#002B5B] mb-4">The AirFresh Advantage</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                '200+ cities nationwide coverage',
                '5,000+ vetted brand ambassadors',
                'GPS check-in staff verification',
                'Mandatory video training & certification',
                'Real-time reporting dashboards',
                'Published transparent pricing ($35-65/hr)',
                '48-hour rapid deployment',
                '20+ years, 300+ brands served',
                'Full-service creative & execution',
                'No hidden fees or surprise charges',
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

      {/* Pricing Comparison */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Pricing Comparison
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
              AirFresh publishes transparent pricing while 2x4 Experiential requires custom quotes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-white rounded-2xl border-2 border-[#002B5B]/20 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <Star className="w-5 h-5 text-[#F7931E]" />
                <h3 className="text-xl font-bold text-[#002B5B]">Air Fresh Marketing</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-700">Brand Ambassadors</span>
                  <span className="font-bold text-[#002B5B]">$35-65/hr</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-700">Trade Show Staff</span>
                  <span className="font-bold text-[#002B5B]">$40-70/hr</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-700">Pricing Model</span>
                  <span className="font-bold text-green-600">Published & Transparent</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Hidden Fees</span>
                  <span className="font-bold text-green-600">None</span>
                </li>
              </ul>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <Building className="w-5 h-5 text-gray-400" />
                <h3 className="text-xl font-bold text-gray-800">2x4 Experiential</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-700">Brand Ambassadors</span>
                  <span className="font-bold text-gray-500">Custom Quote Only</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-700">Trade Show Staff</span>
                  <span className="font-bold text-gray-500">Custom Quote Only</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-700">Pricing Model</span>
                  <span className="font-bold text-gray-500">Project-Based Quotes</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Hidden Fees</span>
                  <span className="font-bold text-gray-500">Varies by Project</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-28">
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
            { href: '/compare/fusion-marketing', label: 'AirFresh vs Fusion Marketing' },
            { href: '/compare/event-strategy-group', label: 'AirFresh vs Event Strategy Group' },
            { href: '/compare/sparks-marketing', label: 'AirFresh vs Sparks Marketing' },
            { href: '/compare/grammy-staffing', label: 'AirFresh vs Grammy Staffing' },
            { href: '/compare/next-level-promotions', label: 'AirFresh vs Next Level Promotions' },
            { href: '/compare/lime-media', label: 'AirFresh vs Lime Media' },
            { href: '/compare/modern-marketing', label: 'AirFresh vs Modern Marketing' },
            { href: '/compare/nparallel', label: 'AirFresh vs NParallel' },
            { href: '/pricing', label: 'View Our Pricing' },
            { href: '/technology', label: 'Our Technology Platform' },
            { href: '/portfolio', label: 'View Case Studies' },
            { href: '/get-quote?source=compare-2x4-experiential&intent=related-request-quote', label: 'Request a Quote' },
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
            Ready for nationwide experiential marketing?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
            Get the creative quality of a boutique agency with nationwide scale and GPS technology. Call{' '}
            <a href="tel:3037206060" className="text-[#F7931E] hover:underline">(303) 720-6060</a> or request your free quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-quote?source=compare-2x4-experiential&intent=final-cta">
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
