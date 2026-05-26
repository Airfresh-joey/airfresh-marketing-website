import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, Star, ArrowRight, Building, Zap, DollarSign, Clock, Award, Users, Target, MapPin, Globe, Monitor, Wrench } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AirFresh vs Event Strategy Group | Corporate Event Comparison',
  description: 'AirFresh vs Event Strategy Group comparison: full execution capabilities, trained staff network, technology platform, and transparent pricing vs strategy-only consulting.',
  keywords: 'AirFresh vs Event Strategy Group, Event Strategy Group alternative, corporate event agency comparison, event strategy vs execution',
  openGraph: {
    title: 'AirFresh vs Event Strategy Group | Corporate Event Comparison',
    description: 'Compare Air Fresh Marketing vs Event Strategy Group: full-service event execution with trained staff vs strategy-only corporate consulting.',
    url: 'https://www.airfreshmarketing.com/compare/event-strategy-group',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/compare/event-strategy-group',
  },
};

const comparison = [
  { feature: 'Service Model', afm: 'Full strategy + execution', competitor: 'Strategy & consulting only', winner: 'afm' },
  { feature: 'Staff Network', afm: '5,000+ trained brand ambassadors', competitor: 'No in-house staff network', winner: 'afm' },
  { feature: 'Technology Platform', afm: 'GPS check-in, video training, real-time dashboards', competitor: 'Planning & project management tools', winner: 'afm' },
  { feature: 'Pricing Transparency', afm: 'Published rates, no hidden fees', competitor: 'Retainer-based consulting fees', winner: 'afm' },
  { feature: 'Execution Capability', afm: 'End-to-end campaign activation', competitor: 'Relies on third-party vendors', winner: 'afm' },
  { feature: 'Geographic Coverage', afm: '200+ cities nationwide', competitor: 'Varies by vendor partnerships', winner: 'afm' },
  { feature: 'Staff Accountability', afm: 'GPS verification for every activation', competitor: 'Dependent on hired vendors', winner: 'afm' },
  { feature: 'Speed to Market', afm: '48-hour emergency staffing', competitor: 'Extended planning timelines', winner: 'afm' },
  { feature: 'Strategic Planning', afm: 'Included with execution services', competitor: 'Core focus area', winner: 'tie' },
  { feature: 'Cost Efficiency', afm: 'One partner for strategy + execution', competitor: 'Consulting fees + separate execution costs', winner: 'afm' },
];

const afmAdvantages = [
  {
    icon: Wrench,
    title: 'Full Execution, Not Just Strategy',
    description: 'Event Strategy Group provides strategic consulting but relies on third-party vendors for execution. Air Fresh Marketing delivers both strategy and execution in-house with 5,000+ trained brand ambassadors across 200+ cities. One partner, one point of accountability, seamless results.',
  },
  {
    icon: Users,
    title: 'Trained Staff Network Ready to Deploy',
    description: 'Unlike strategy-only firms, AirFresh has an immediate network of 5,000+ vetted professionals with mandatory video training and brand certification. No time wasted sourcing vendors or coordinating between multiple agencies—your campaign activates faster and with greater quality control.',
  },
  {
    icon: Monitor,
    title: 'Proprietary Technology Platform',
    description: 'AirFresh\'s technology platform provides GPS check-in verification, mandatory video training with brand certification, and real-time reporting dashboards. Strategy consultancies cannot offer this level of technology-driven accountability because they don\'t execute campaigns directly.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing, No Double Billing',
    description: 'With Event Strategy Group, you pay consulting fees plus separate execution costs from third-party vendors. Air Fresh Marketing publishes all-inclusive rates ($35-65/hr brand ambassadors, $40-70/hr trade show) covering strategy, staffing, technology, and execution in one transparent price.',
  },
];

const servicesOffered = [
  { name: 'Event Strategy & Planning', afm: true, competitor: true },
  { name: 'Event Execution & Activation', afm: true, competitor: false },
  { name: 'In-House Staff Network', afm: true, competitor: false },
  { name: 'GPS Check-In Verification', afm: true, competitor: false },
  { name: 'Video Training & Certification', afm: true, competitor: false },
  { name: 'Real-Time Reporting Dashboard', afm: true, competitor: false },
  { name: 'Brand Ambassadors', afm: true, competitor: false },
  { name: 'Trade Show Staffing', afm: true, competitor: false },
  { name: 'Experiential Marketing', afm: true, competitor: false },
  { name: 'Nationwide Coverage (200+ Cities)', afm: true, competitor: false },
  { name: 'Published Transparent Pricing', afm: true, competitor: false },
  { name: 'Corporate Event Consulting', afm: true, competitor: true },
];

const faqs = [
  {
    question: 'What is the difference between Air Fresh Marketing and Event Strategy Group?',
    answer: 'Air Fresh Marketing is a full-service experiential marketing and event staffing agency that provides both strategy and execution with 5,000+ trained staff across 200+ cities, proprietary GPS technology, and transparent published pricing. Event Strategy Group is a corporate event strategy firm focused primarily on consulting and planning, relying on third-party vendors for actual event execution. AirFresh eliminates the gap between strategy and execution by handling both under one roof.',
  },
  {
    question: 'Why choose a full-service agency over a strategy consultant like Event Strategy Group?',
    answer: 'When strategy and execution are handled by different companies, things get lost in translation. Air Fresh Marketing eliminates this gap by providing strategic planning and on-the-ground execution with trained staff, GPS verification, and real-time dashboards. You get one point of accountability, faster timelines, and better results because the team planning your event is the same team executing it.',
  },
  {
    question: 'How does AirFresh pricing compare to Event Strategy Group?',
    answer: 'With Event Strategy Group, you pay consulting/retainer fees for strategy plus separate costs for third-party execution vendors. Air Fresh Marketing publishes transparent all-inclusive rates: Brand Ambassadors $35-65/hr, Trade Show Staff $40-70/hr. These rates include strategic planning, trained staff, GPS technology, video training, and real-time reporting—no separate consulting fees or hidden vendor markups.',
  },
  {
    question: 'Does Event Strategy Group have its own event staff?',
    answer: 'No. Event Strategy Group is a corporate event strategy firm focused on planning and consulting. They rely on third-party staffing vendors for execution. Air Fresh Marketing has an in-house network of 5,000+ vetted brand ambassadors across 200+ cities, all trained through mandatory video certification and verified via GPS check-in technology.',
  },
  {
    question: 'Can AirFresh handle corporate event strategy at the same level as Event Strategy Group?',
    answer: 'Yes. Air Fresh Marketing has 20+ years of experience serving 300+ brands with corporate events, brand activations, and experiential campaigns. Our strategic planning is informed by hands-on execution experience across thousands of events. Unlike pure consultancies, our strategy recommendations are grounded in what actually works on the ground—because we execute it ourselves.',
  },
  {
    question: 'What technology does AirFresh offer that strategy firms cannot?',
    answer: 'Air Fresh Marketing\'s proprietary technology platform includes GPS check-in (verifying every staff arrival), mandatory video training with brand certification (ensuring consistent brand representation), and real-time reporting dashboards (giving clients live visibility into campaign performance). Strategy-only firms cannot provide this technology because they don\'t handle direct event execution or staff management.',
  },
];

export default function CompareEventStrategyGroup() {
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
                "name": "AirFresh vs Event Strategy Group | Corporate Event Comparison",
                "url": "https://www.airfreshmarketing.com/compare/event-strategy-group",
                "description": "Compare Air Fresh Marketing vs Event Strategy Group for corporate events, brand activations, and experiential marketing services."
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.airfreshmarketing.com" },
                  { "@type": "ListItem", "position": 2, "name": "Compare", "item": "https://www.airfreshmarketing.com/compare" },
                  { "@type": "ListItem", "position": 3, "name": "Event Strategy Group", "item": "https://www.airfreshmarketing.com/compare/event-strategy-group" }
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
              Event Strategy Group
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Event Strategy Group is a corporate event strategy firm focused on consulting. Air Fresh Marketing delivers full execution capabilities with a trained staff network of 5,000+, proprietary technology platform, and transparent published pricing.
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
              <p className="text-gray-700 font-medium mb-4">Full-service strategy + execution</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> Strategy AND execution in-house
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> 5,000+ trained brand ambassadors
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> GPS verification & real-time dashboards
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> Transparent all-inclusive pricing
                </li>
              </ul>
            </div>
            <div className="p-8 bg-gray-100 rounded-2xl border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-xl flex items-center justify-center">
                  <Building className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Event Strategy Group</h3>
              </div>
              <p className="text-gray-600 font-medium mb-4">Corporate event strategy consulting</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" /> Strategic planning & consulting
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" /> Corporate event expertise
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" /> Third-party vendor coordination
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
              Full-service execution vs strategy-only consulting—see how AirFresh compares to Event Strategy Group
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
                    Event Strategy Group
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
              AirFresh delivers end-to-end execution that strategy consultancies cannot provide
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
                    <span className="text-xs text-gray-500">ESG</span>
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
              Why Choose AirFresh Over Event Strategy Group
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
              Get strategy and execution from one partner with technology-driven accountability
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
                'Strategy + execution under one roof',
                '5,000+ trained brand ambassadors',
                'GPS check-in staff verification',
                'Mandatory video training & certification',
                'Real-time reporting dashboards',
                'Published transparent pricing ($35-65/hr)',
                '48-hour rapid deployment',
                '200+ cities nationwide coverage',
                '20+ years, 300+ brands served',
                'No separate consulting fees',
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
              One transparent price for strategy + execution vs consulting fees plus separate vendor costs
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
                  <span className="font-bold text-green-600">All-Inclusive Published Rates</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-700">Strategy Included</span>
                  <span className="font-bold text-green-600">Yes, No Extra Cost</span>
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
                <h3 className="text-xl font-bold text-gray-800">Event Strategy Group</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-700">Consulting Fees</span>
                  <span className="font-bold text-gray-500">Retainer-Based</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-700">Execution Costs</span>
                  <span className="font-bold text-gray-500">Separate (Third-Party)</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-700">Pricing Model</span>
                  <span className="font-bold text-gray-500">Consulting + Vendor Fees</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-700">Total Cost</span>
                  <span className="font-bold text-gray-500">Strategy + Execution Combined</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Vendor Markups</span>
                  <span className="font-bold text-gray-500">Possible</span>
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
            { href: '/compare/2x4-experiential', label: 'AirFresh vs 2x4 Experiential' },
            { href: '/compare/fusion-marketing', label: 'AirFresh vs Fusion Marketing' },
            { href: '/compare/sparks-marketing', label: 'AirFresh vs Sparks Marketing' },
            { href: '/compare/grammy-staffing', label: 'AirFresh vs Grammy Staffing' },
            { href: '/compare/next-level-promotions', label: 'AirFresh vs Next Level Promotions' },
            { href: '/compare/lime-media', label: 'AirFresh vs Lime Media' },
            { href: '/compare/modern-marketing', label: 'AirFresh vs Modern Marketing' },
            { href: '/compare/nparallel', label: 'AirFresh vs NParallel' },
            { href: '/pricing', label: 'View Our Pricing' },
            { href: '/technology', label: 'Our Technology Platform' },
            { href: '/case-studies', label: 'View Case Studies' },
            { href: '/get-quote?source=compare-event-strategy-group&intent=related-request-quote', label: 'Request a Quote' },
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
            Ready for strategy AND execution from one partner?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
            Stop paying separately for strategy and execution. Get both with technology-driven accountability. Call{' '}
            <a href="tel:3037206060" className="text-[#F7931E] hover:underline">(303) 720-6060</a> or request your free quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-quote?source=compare-event-strategy-group&intent=final-cta">
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
