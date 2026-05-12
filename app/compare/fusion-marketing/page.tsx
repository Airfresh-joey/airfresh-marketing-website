import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, Star, ArrowRight, Building, Zap, DollarSign, Clock, Award, Users, Target, MapPin, Globe, Monitor } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AirFresh vs Fusion Marketing | Event Staffing & Marketing Comparison',
  description: 'AirFresh vs Fusion Marketing comparison: 200+ cities vs regional focus, proprietary technology platform, deeper experiential capabilities, and GPS verification.',
  keywords: 'AirFresh vs Fusion Marketing, Fusion Marketing alternative, event staffing comparison, experiential marketing agency comparison',
  openGraph: {
    title: 'AirFresh vs Fusion Marketing | Event Staffing & Marketing Comparison',
    description: 'Compare Air Fresh Marketing vs Fusion Marketing: nationwide event staffing with technology platform vs regional marketing firm.',
    url: 'https://www.airfreshmarketing.com/compare/fusion-marketing',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/compare/fusion-marketing',
  },
};

const comparison = [
  { feature: 'Geographic Coverage', afm: '200+ cities nationwide', competitor: 'Regional market focus', winner: 'afm' },
  { feature: 'Technology Platform', afm: 'GPS check-in, video training, real-time dashboards', competitor: 'Standard event tools', winner: 'afm' },
  { feature: 'Staff Network', afm: '5,000+ vetted brand ambassadors', competitor: 'Regional staff pool', winner: 'afm' },
  { feature: 'Experiential Depth', afm: 'Full creative, strategy & execution', competitor: 'Event staffing focused', winner: 'afm' },
  { feature: 'Staff Verification', afm: 'GPS check-in confirms every arrival', competitor: 'Manual attendance tracking', winner: 'afm' },
  { feature: 'Client Reporting', afm: 'Real-time dashboards with live metrics', competitor: 'Standard post-event reports', winner: 'afm' },
  { feature: 'Brand Training', afm: 'Mandatory video training with certification', competitor: 'Pre-event briefings', winner: 'afm' },
  { feature: 'Pricing Transparency', afm: 'Published rates, no hidden fees', competitor: 'Quote-based pricing', winner: 'afm' },
  { feature: 'Turnaround Time', afm: '48-hour emergency staffing capability', competitor: 'Standard booking timelines', winner: 'afm' },
  { feature: 'Brands Served', afm: '300+ brands across all industries', competitor: 'Regional client base', winner: 'afm' },
];

const afmAdvantages = [
  {
    icon: Globe,
    title: '200+ Cities vs Regional Focus',
    description: 'Fusion Marketing serves regional markets with a focused geographic footprint. Air Fresh Marketing operates in 200+ cities nationwide, giving brands seamless multi-market activation without needing to coordinate with multiple regional agencies.',
  },
  {
    icon: Monitor,
    title: 'Proprietary Technology Platform',
    description: 'AirFresh\'s technology platform includes GPS check-in verification, mandatory video training with certification, and real-time reporting dashboards. Fusion Marketing relies on standard event management tools without the same level of technology-driven accountability.',
  },
  {
    icon: Target,
    title: 'Deeper Experiential Capabilities',
    description: 'Beyond event staffing, Air Fresh Marketing delivers full-service experiential marketing including brand activations, mobile marketing tours, guerrilla marketing, product sampling campaigns, and immersive brand experiences—capabilities that go well beyond traditional event staffing.',
  },
  {
    icon: Users,
    title: '5,000+ Trained Brand Ambassadors',
    description: 'Our network of 5,000+ vetted professionals across 200+ cities means you never worry about staff availability. Every ambassador completes mandatory video training and brand certification before representing your brand at any activation.',
  },
];

const servicesOffered = [
  { name: 'Event Staffing', afm: true, competitor: true },
  { name: 'Brand Ambassadors', afm: true, competitor: true },
  { name: 'GPS Check-In Verification', afm: true, competitor: false },
  { name: 'Video Training & Certification', afm: true, competitor: false },
  { name: 'Nationwide Coverage (200+ Cities)', afm: true, competitor: false },
  { name: 'Real-Time Reporting Dashboard', afm: true, competitor: false },
  { name: 'Experiential Marketing', afm: true, competitor: false },
  { name: 'Brand Activations', afm: true, competitor: false },
  { name: 'Mobile Marketing Tours', afm: true, competitor: false },
  { name: 'Product Sampling', afm: true, competitor: true },
  { name: 'Trade Show Staffing', afm: true, competitor: true },
  { name: 'Published Transparent Pricing', afm: true, competitor: false },
];

const faqs = [
  {
    question: 'What is the difference between Air Fresh Marketing and Fusion Marketing?',
    answer: 'Air Fresh Marketing is a nationwide experiential marketing and event staffing agency operating in 200+ cities with 5,000+ brand ambassadors, a proprietary technology platform (GPS check-in, video training, real-time dashboards), and published transparent pricing. Fusion Marketing is a regional event staffing and marketing firm with a more limited geographic footprint and traditional event management approach. AirFresh provides the technology, scale, and deeper experiential capabilities that multi-market brands require.',
  },
  {
    question: 'How does AirFresh\'s technology platform compare to Fusion Marketing?',
    answer: 'Air Fresh Marketing operates a proprietary technology platform that includes GPS check-in verification (confirming staff arrival at every location), mandatory video training with brand certification, and real-time reporting dashboards giving clients live visibility into campaign performance. Fusion Marketing uses standard event management tools without the same GPS verification, video training infrastructure, or real-time reporting capabilities.',
  },
  {
    question: 'Can AirFresh cover markets that Fusion Marketing cannot?',
    answer: 'Yes. Air Fresh Marketing operates in 200+ cities nationwide with a network of 5,000+ vetted brand ambassadors. Fusion Marketing focuses on regional markets. For brands needing multi-city or nationwide campaigns, AirFresh provides seamless execution across all markets without needing to coordinate with multiple regional vendors.',
  },
  {
    question: 'How does AirFresh pricing compare to Fusion Marketing?',
    answer: 'Air Fresh Marketing publishes transparent rates: Brand Ambassadors $35-65/hr, Trade Show Staff $40-70/hr, with no hidden fees or surprise charges. Fusion Marketing typically provides quote-based pricing that varies by project. AirFresh\'s published pricing makes budgeting straightforward and ensures you know costs upfront before committing to a campaign.',
  },
  {
    question: 'Does AirFresh offer experiential marketing services beyond event staffing?',
    answer: 'Yes. While Fusion Marketing focuses primarily on event staffing and basic marketing services, Air Fresh Marketing delivers full-service experiential marketing including brand activations, mobile marketing tours, guerrilla marketing campaigns, product sampling programs, trade show management, and immersive brand experiences. AirFresh is a complete experiential partner, not just a staffing provider.',
  },
  {
    question: 'Why do brands switch from Fusion Marketing to AirFresh?',
    answer: 'Brands switch to AirFresh when they need to scale beyond regional markets, require technology-driven accountability (GPS verification, real-time dashboards), want deeper experiential marketing capabilities beyond basic staffing, or prefer transparent published pricing. AirFresh serves brands that have outgrown regional agencies and need a nationwide partner with proven technology infrastructure.',
  },
];

export default function CompareFusionMarketing() {
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
                "name": "AirFresh vs Fusion Marketing | Event Staffing & Marketing Comparison",
                "url": "https://www.airfreshmarketing.com/compare/fusion-marketing",
                "description": "Compare Air Fresh Marketing vs Fusion Marketing for event staffing, experiential marketing, and brand activation services."
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.airfreshmarketing.com" },
                  { "@type": "ListItem", "position": 2, "name": "Compare", "item": "https://www.airfreshmarketing.com/compare" },
                  { "@type": "ListItem", "position": 3, "name": "Fusion Marketing", "item": "https://www.airfreshmarketing.com/compare/fusion-marketing" }
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
              Fusion Marketing
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Fusion Marketing is a regional event staffing and marketing firm. Air Fresh Marketing delivers nationwide coverage in 200+ cities with a proprietary technology platform, deeper experiential capabilities, and transparent published pricing.
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
              <p className="text-gray-700 font-medium mb-4">Nationwide experiential marketing with technology</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> 200+ cities nationwide
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> Proprietary technology platform
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> GPS verification & real-time dashboards
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> Full experiential marketing services
                </li>
              </ul>
            </div>
            <div className="p-8 bg-gray-100 rounded-2xl border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-xl flex items-center justify-center">
                  <Building className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Fusion Marketing</h3>
              </div>
              <p className="text-gray-600 font-medium mb-4">Regional event staffing and marketing firm</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" /> Event staffing services
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" /> Regional market expertise
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" /> Marketing campaign support
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
              Nationwide technology-driven experiential marketing vs regional event staffing—see how AirFresh compares to Fusion Marketing
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
                    Fusion Marketing
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
              AirFresh offers deeper experiential capabilities and technology-driven accountability
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
                    <span className="text-xs text-gray-500">FSN</span>
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
              Why Choose AirFresh Over Fusion Marketing
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
              Nationwide reach, proprietary technology, and deeper experiential capabilities
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
                'Proprietary GPS check-in technology',
                'Mandatory video training & certification',
                'Real-time reporting dashboards',
                'Published transparent pricing ($35-65/hr)',
                '48-hour rapid deployment',
                '20+ years, 300+ brands served',
                'Full experiential marketing services',
                'Mobile marketing tours & guerrilla marketing',
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
              AirFresh publishes transparent pricing while Fusion Marketing uses quote-based models
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
                <h3 className="text-xl font-bold text-gray-800">Fusion Marketing</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-700">Brand Ambassadors</span>
                  <span className="font-bold text-gray-500">Quote-Based</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-700">Trade Show Staff</span>
                  <span className="font-bold text-gray-500">Quote-Based</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-700">Pricing Model</span>
                  <span className="font-bold text-gray-500">Custom Quotes</span>
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
            { href: '/compare/2x4-experiential', label: 'AirFresh vs 2x4 Experiential' },
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
            { href: '/get-quote?source=compare-fusion-marketing&intent=related-request-quote', label: 'Request a Quote' },
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
            Ready to scale beyond regional limitations?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
            Get nationwide experiential marketing with technology-driven accountability. Call{' '}
            <a href="tel:3037206060" className="text-[#F7931E] hover:underline">(303) 720-6060</a> or request your free quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-quote?source=compare-fusion-marketing&intent=final-cta">
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
