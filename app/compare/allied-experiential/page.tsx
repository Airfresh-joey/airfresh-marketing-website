import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, Star, ArrowRight, Building, Zap, DollarSign, Clock, Award, Users, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AirFresh vs Allied Experiential | Event Staffing Comparison',
  description: 'AirFresh vs Allied Experiential comparison: agile execution, GPS verification, transparent pricing, and boutique attention vs large corporate-focused experiential agency.',
  keywords: 'AirFresh vs Allied Experiential, Allied Experiential alternative, experiential agency comparison, event staffing comparison',
  openGraph: {
    title: 'AirFresh vs Allied Experiential | Event Staffing Comparison',
    description: 'Compare Air Fresh Marketing vs Allied Experiential: agile boutique agency with GPS technology vs large corporate-focused experiential firm.',
    url: 'https://www.airfreshmarketing.com/compare/allied-experiential',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/compare/allied-experiential',
  },
};

const comparison = [
  { feature: 'Company Focus', afm: 'Agile, brand-first experiential', competitor: 'Large corporate accounts', winner: 'afm' },
  { feature: 'Client Approach', afm: 'Dedicated account manager, direct access', competitor: 'Layered corporate structure', winner: 'afm' },
  { feature: 'Technology Platform', afm: 'GPS check-in, video training, real-time dashboards', competitor: 'Standard reporting tools', winner: 'afm' },
  { feature: 'Pricing Model', afm: 'Transparent published rates, no hidden fees', competitor: 'Custom corporate proposals, opaque pricing', winner: 'afm' },
  { feature: 'Staff Verification', afm: 'GPS check-in confirms every arrival', competitor: 'Manual check-in processes', winner: 'afm' },
  { feature: 'Turnaround Time', afm: '48-hour emergency staffing capability', competitor: 'Longer lead times for corporate approvals', winner: 'afm' },
  { feature: 'Staff Training', afm: 'Mandatory video training with certification', competitor: 'In-person briefings when available', winner: 'afm' },
  { feature: 'Minimum Budget', afm: 'No minimums, flexible project sizes', competitor: 'High minimums, enterprise contracts', winner: 'afm' },
  { feature: 'Geographic Coverage', afm: '200+ cities nationwide', competitor: 'Major metro markets', winner: 'afm' },
  { feature: 'Reporting', afm: 'Real-time dashboards with live data', competitor: 'Post-event recap reports', winner: 'afm' },
];

const afmAdvantages = [
  {
    icon: Zap,
    title: 'More Agile Than Corporate Agencies',
    description: 'Allied Experiential operates with corporate processes designed for Fortune 500 clients. Air Fresh Marketing moves fast—48-hour staffing, same-day responses, and direct communication with your dedicated account manager. No layers of bureaucracy slowing you down.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing, No Surprises',
    description: 'Allied Experiential uses custom corporate proposals that can take weeks to finalize. AirFresh publishes transparent rates ($35-65/hr for brand ambassadors) with no hidden fees, no complex contracts, and no minimum spend requirements.',
  },
  {
    icon: Target,
    title: 'GPS Verification Technology',
    description: 'Our proprietary GPS check-in system verifies every staff member arrives on time at every activation. Allied Experiential relies on manual processes and supervisor check-ins. With AirFresh, you get real-time proof of performance delivered to your dashboard.',
  },
  {
    icon: Users,
    title: 'Boutique Attention, National Scale',
    description: 'At Allied Experiential, mid-size brands often get deprioritized behind larger corporate accounts. At AirFresh, every client receives dedicated account management, personalized strategy, and the attention your brand deserves—backed by 5,000+ ambassadors in 200+ cities.',
  },
];

const servicesOffered = [
  { name: 'Brand Ambassadors', afm: true, competitor: true },
  { name: 'Experiential Marketing', afm: true, competitor: true },
  { name: 'GPS Check-In Verification', afm: true, competitor: false },
  { name: 'Video Training & Certification', afm: true, competitor: false },
  { name: 'Real-Time Reporting Dashboard', afm: true, competitor: false },
  { name: 'Trade Show Staffing', afm: true, competitor: true },
  { name: 'Brand Activations', afm: true, competitor: true },
  { name: 'Product Sampling', afm: true, competitor: true },
  { name: 'Published Transparent Pricing', afm: true, competitor: false },
  { name: '48-Hour Emergency Staffing', afm: true, competitor: false },
];

const faqs = [
  {
    question: 'What is the difference between Air Fresh Marketing and Allied Experiential?',
    answer: 'Air Fresh Marketing is an agile, boutique experiential marketing and event staffing agency with 20+ years of experience, proprietary GPS technology, and transparent pricing. Allied Experiential is a large, corporate-focused experiential agency that primarily serves enterprise-level clients with bigger budgets and longer timelines. AirFresh offers faster turnaround, GPS verification, video training certification, and dedicated account management without the corporate overhead.',
  },
  {
    question: 'Is AirFresh more affordable than Allied Experiential?',
    answer: 'Yes. Air Fresh Marketing publishes transparent rates starting at $35-65/hr for brand ambassadors and $40-70/hr for trade show staff, with no hidden fees or minimum spend requirements. Allied Experiential typically requires custom corporate proposals with higher minimums and longer contract commitments. AirFresh makes professional experiential marketing accessible to brands of all sizes.',
  },
  {
    question: 'Does Allied Experiential offer GPS check-in technology?',
    answer: 'No. Allied Experiential uses traditional manual check-in processes and supervisor-based verification. Air Fresh Marketing\'s proprietary GPS check-in technology automatically verifies every staff member arrives at the correct location on time. Combined with real-time dashboards, clients get live visibility into campaign execution without relying on after-the-fact reports.',
  },
  {
    question: 'Can AirFresh handle large-scale experiential campaigns like Allied Experiential?',
    answer: 'Absolutely. Air Fresh Marketing operates in 200+ cities with 5,000+ vetted brand ambassadors and has executed campaigns for 300+ brands nationwide. The difference is agility—AirFresh delivers the same national scale with faster turnaround, transparent pricing, and technology-verified accountability that corporate agencies cannot match.',
  },
  {
    question: 'Why do brands switch from Allied Experiential to AirFresh?',
    answer: 'Brands commonly switch to AirFresh when they experience slow corporate timelines, opaque pricing, lack of accountability technology, or feeling deprioritized behind larger accounts. AirFresh provides dedicated account management, GPS verification, video training, real-time dashboards, and faster execution—all with published transparent rates.',
  },
  {
    question: 'How fast can AirFresh staff an event compared to Allied Experiential?',
    answer: 'Air Fresh Marketing offers 48-hour emergency staffing capability for urgent needs, while standard campaigns can be fully staffed within 5-7 business days. Allied Experiential typically requires longer lead times due to corporate approval processes and their focus on larger, planned campaigns. AirFresh\'s agile structure means faster response times across the board.',
  },
];

export default function CompareAlliedExperiential() {
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
                "name": "AirFresh vs Allied Experiential | Event Staffing Comparison",
                "url": "https://www.airfreshmarketing.com/compare/allied-experiential",
                "description": "Compare Air Fresh Marketing vs Allied Experiential for experiential marketing and event staffing services.",
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.airfreshmarketing.com" },
                  { "@type": "ListItem", "position": 2, "name": "Compare", "item": "https://www.airfreshmarketing.com/compare" },
                  { "@type": "ListItem", "position": 3, "name": "Allied Experiential", "item": "https://www.airfreshmarketing.com/compare/allied-experiential" }
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
              Allied Experiential
            </span>
            : Experiential Agency Comparison
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Allied Experiential is a large, corporate-focused experiential agency built for Fortune 500 timelines. Air Fresh Marketing is an agile boutique agency that delivers faster turnaround, GPS-verified accountability, and transparent pricing without the corporate overhead.
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
              <p className="text-gray-700 font-medium mb-4">Agile experiential marketing agency</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> GPS check-in verification
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> Transparent published pricing
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> 48-hour emergency staffing
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> Dedicated account management
                </li>
              </ul>
            </div>
            <div className="p-8 bg-gray-100 rounded-2xl border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-xl flex items-center justify-center">
                  <Building className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Allied Experiential</h3>
              </div>
              <p className="text-gray-600 font-medium mb-4">Large corporate-focused agency</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" /> Fortune 500 client roster
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" /> Large-scale production capabilities
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" /> Corporate event expertise
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
              Agile boutique agency vs corporate experiential firm—see how AirFresh compares to Allied Experiential
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
                    Allied Experiential
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
              AirFresh delivers technology-verified accountability that corporate agencies cannot match
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
                    <span className="text-xs text-gray-500">AE</span>
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
              Why Choose AirFresh Over Allied Experiential
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
              Agile execution with GPS-verified accountability—without the corporate overhead
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
                'GPS check-in staff verification',
                'Transparent pricing: $35-65/hr',
                'Mandatory video training & certification',
                'Real-time reporting dashboards',
                '48-hour emergency staffing',
                'Dedicated personal account manager',
                '5,000+ vetted brand ambassadors',
                '200+ cities nationwide',
                '300+ brands served',
                'No minimum spend requirements',
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
              Transparent rates vs corporate proposals—know exactly what you are paying
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-white rounded-2xl border-2 border-[#002B5B]/20 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <Star className="w-5 h-5 fill-[#F7931E] text-[#F7931E]" />
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
                  <span className="text-gray-700">Minimum Budget</span>
                  <span className="font-bold text-green-600">No Minimum</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-700">Hidden Fees</span>
                  <span className="font-bold text-green-600">None</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Contract Required</span>
                  <span className="font-bold text-green-600">No</span>
                </li>
              </ul>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-gray-200">
              <div className="flex items-center gap-2 mb-6">
                <Building className="w-5 h-5 text-gray-400" />
                <h3 className="text-xl font-bold text-gray-800">Allied Experiential</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-700">Brand Ambassadors</span>
                  <span className="font-bold text-gray-500">Custom Quote</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-700">Trade Show Staff</span>
                  <span className="font-bold text-gray-500">Custom Quote</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-700">Minimum Budget</span>
                  <span className="font-bold text-red-500">High Minimums</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-700">Hidden Fees</span>
                  <span className="font-bold text-gray-500">Varies</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Contract Required</span>
                  <span className="font-bold text-red-500">Yes</span>
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
            { href: '/promotional-staffing-agency', label: 'Promotional Staffing Agency' },
            { href: '/corporate-event-staffing', label: 'Corporate Event Staffing' },
            { href: '/event-marketing-agency', label: 'Event Marketing Agency' },
            { href: '/brand-activation-agency', label: 'Brand Activation Agency' },
            { href: '/field-marketing-agency', label: 'Field Marketing Agency' },
            { href: '/guerrilla-marketing-agency', label: 'Guerrilla Marketing Agency' },
            { href: '/product-sampling-agency', label: 'Product Sampling Agency' },
            { href: '/mobile-marketing-tours', label: 'Mobile Marketing Tours' },
            { href: '/compare/team-enterprises', label: 'AirFresh vs Team Enterprises' },
            { href: '/compare/encore-nationwide', label: 'AirFresh vs Encore Nationwide' },
            { href: '/compare/advantage-solutions', label: 'AirFresh vs Advantage Solutions' },
            { href: '/compare/mosaic-experiential', label: 'AirFresh vs Mosaic Experiential' },
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
            Ready for agile experiential marketing with real accountability?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
            Skip the corporate timelines and opaque pricing. Get GPS-verified experiential marketing with transparent rates. Call{' '}
            <a href="tel:3037206060" className="text-[#F7931E] hover:underline">(303) 720-6060</a> or request your free quote today.
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
