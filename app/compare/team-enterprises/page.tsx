import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, Star, ArrowRight, Building, Zap, DollarSign, Clock, Award, Users, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AirFresh vs Team Enterprises | Event Staffing Comparison',
  description: 'AirFresh vs Team Enterprises comparison: boutique attention, lower minimums, faster turnaround, GPS verification vs enterprise-level experiential marketing firm.',
  keywords: 'AirFresh vs Team Enterprises, Team Enterprises alternative, experiential marketing comparison, event staffing agency comparison',
  openGraph: {
    title: 'AirFresh vs Team Enterprises | Event Staffing Comparison',
    description: 'Compare Air Fresh Marketing vs Team Enterprises: boutique attention with GPS technology vs enterprise-level experiential marketing firm.',
    url: 'https://www.airfreshmarketing.com/compare/team-enterprises',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/compare/team-enterprises',
  },
};

const comparison = [
  { feature: 'Company Size', afm: 'Boutique agency, personalized service', competitor: 'Enterprise-level firm, large teams', winner: 'afm' },
  { feature: 'Minimum Budget', afm: 'No minimums, flexible project sizes', competitor: 'High minimums, enterprise contracts', winner: 'afm' },
  { feature: 'Turnaround Time', afm: '48-hour emergency staffing', competitor: 'Multi-week planning cycles', winner: 'afm' },
  { feature: 'Client Attention', afm: 'Dedicated account manager, direct access', competitor: 'Account teams, shared resources', winner: 'afm' },
  { feature: 'Technology Platform', afm: 'GPS check-in, video training, real-time dashboards', competitor: 'Standard project management tools', winner: 'afm' },
  { feature: 'Pricing Transparency', afm: 'Published rates, no hidden fees', competitor: 'Custom proposals, enterprise pricing', winner: 'afm' },
  { feature: 'Staff Verification', afm: 'GPS check-in confirms every arrival', competitor: 'Supervisor-based verification', winner: 'afm' },
  { feature: 'Staff Training', afm: 'Mandatory video training with certification', competitor: 'In-person team briefings', winner: 'afm' },
  { feature: 'Flexibility', afm: 'Scale up or down as needed', competitor: 'Structured enterprise packages', winner: 'afm' },
  { feature: 'Geographic Coverage', afm: '200+ cities, 5,000+ ambassadors', competitor: 'Major markets focus', winner: 'afm' },
];

const afmAdvantages = [
  {
    icon: Users,
    title: 'Boutique Attention, Not Enterprise Neglect',
    description: 'Team Enterprises manages large enterprise accounts where mid-size brands can get lost. At AirFresh, you get a dedicated account manager who knows your brand inside and out. Your campaign always receives priority attention regardless of budget size.',
  },
  {
    icon: DollarSign,
    title: 'Lower Minimums, Accessible Pricing',
    description: 'Team Enterprises requires enterprise-level budgets with high minimum commitments. AirFresh has no minimum spend requirements—brand ambassadors start at $35-65/hr and trade show staff at $40-70/hr with published transparent rates and no hidden fees.',
  },
  {
    icon: Clock,
    title: 'Faster Turnaround, Rapid Deployment',
    description: 'While Team Enterprises operates on multi-week planning cycles typical of enterprise firms, AirFresh offers 48-hour emergency staffing and standard campaigns staffed in 5-7 business days. Our agile structure eliminates the bottlenecks of enterprise planning.',
  },
  {
    icon: Target,
    title: 'GPS Verification & Video Training',
    description: 'AirFresh\'s proprietary GPS check-in system verifies every staff arrival. Mandatory video training ensures brand certification before any activation. Real-time dashboards give you live visibility—technology that enterprise firms like Team Enterprises simply don\'t offer.',
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
  { name: 'No Minimum Budget Required', afm: true, competitor: false },
  { name: 'Mobile Marketing Tours', afm: true, competitor: true },
];

const faqs = [
  {
    question: 'What is the difference between Air Fresh Marketing and Team Enterprises?',
    answer: 'Air Fresh Marketing is a boutique experiential marketing and event staffing agency offering personalized service, GPS technology, transparent pricing, and no minimum budgets. Team Enterprises is an enterprise-level experiential marketing firm that primarily serves large corporate accounts with bigger budgets and longer timelines. AirFresh provides the same quality execution with faster turnaround, lower barriers to entry, and technology-verified accountability.',
  },
  {
    question: 'Is AirFresh more affordable than Team Enterprises?',
    answer: 'Yes. Air Fresh Marketing publishes transparent rates starting at $35-65/hr for brand ambassadors and $40-70/hr for trade show staff with no minimum spend requirements. Team Enterprises operates on enterprise pricing models with high minimums that can exclude emerging and mid-size brands. AirFresh makes professional experiential marketing accessible regardless of budget size.',
  },
  {
    question: 'Can AirFresh handle the same scale as Team Enterprises?',
    answer: 'Absolutely. Air Fresh Marketing operates in 200+ cities with 5,000+ vetted brand ambassadors and has served 300+ brands with nationwide activations. The difference is flexibility—AirFresh scales up for large campaigns while also welcoming smaller projects, all with GPS verification, video training, and real-time reporting that enterprise firms do not provide.',
  },
  {
    question: 'How fast can AirFresh staff events compared to Team Enterprises?',
    answer: 'Air Fresh Marketing offers 48-hour emergency staffing for urgent needs and standard campaigns fully staffed in 5-7 business days. Team Enterprises typically requires multi-week planning cycles due to enterprise approval processes and structured workflows. AirFresh\'s agile model eliminates bureaucratic delays.',
  },
  {
    question: 'Does Team Enterprises offer GPS check-in technology?',
    answer: 'No. Team Enterprises uses traditional supervisor-based verification and standard project management tools. Air Fresh Marketing\'s proprietary GPS check-in system automatically verifies every staff member arrives at the correct location on time. Combined with mandatory video training certification and real-time dashboards, AirFresh delivers accountability that enterprise firms cannot match.',
  },
  {
    question: 'Why do brands choose AirFresh over Team Enterprises?',
    answer: 'Brands choose AirFresh over Team Enterprises for several key reasons: no minimum budget requirements making it accessible for all brand sizes, faster turnaround with 48-hour emergency capability, GPS-verified accountability for every activation, dedicated personal account management without enterprise bureaucracy, and transparent published pricing without complex corporate proposals.',
  },
];

export default function CompareTeamEnterprises() {
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
                "name": "AirFresh vs Team Enterprises | Event Staffing Comparison",
                "url": "https://www.airfreshmarketing.com/compare/team-enterprises",
                "description": "Compare Air Fresh Marketing vs Team Enterprises for experiential marketing and event staffing services.",
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.airfreshmarketing.com" },
                  { "@type": "ListItem", "position": 2, "name": "Compare", "item": "https://www.airfreshmarketing.com/compare" },
                  { "@type": "ListItem", "position": 3, "name": "Team Enterprises", "item": "https://www.airfreshmarketing.com/compare/team-enterprises" }
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
              Team Enterprises
            </span>
            : Experiential Marketing Comparison
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Team Enterprises is an enterprise-level experiential marketing firm with high minimums and long timelines. Air Fresh Marketing delivers boutique attention, lower barriers to entry, faster turnaround, and GPS-verified accountability for brands of all sizes.
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
              <p className="text-gray-700 font-medium mb-4">Boutique agency, enterprise results</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> No minimum budget requirements
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> 48-hour emergency staffing
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> GPS check-in verification
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> Dedicated personal account manager
                </li>
              </ul>
            </div>
            <div className="p-8 bg-gray-100 rounded-2xl border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-xl flex items-center justify-center">
                  <Building className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Team Enterprises</h3>
              </div>
              <p className="text-gray-600 font-medium mb-4">Enterprise-level experiential firm</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" /> Large corporate client roster
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" /> Enterprise-scale operations
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" /> Multi-channel campaigns
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
              Boutique attention vs enterprise structure—see how AirFresh compares to Team Enterprises
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
                    Team Enterprises
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
              AirFresh delivers technology and flexibility that enterprise firms cannot match
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
                    <span className="text-xs text-gray-500">TE</span>
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
              Why Choose AirFresh Over Team Enterprises
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
              Boutique attention with national scale—without the enterprise barriers
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
                'No minimum budget requirements',
                '48-hour emergency staffing',
                'GPS check-in staff verification',
                'Transparent pricing: $35-65/hr',
                'Mandatory video training & certification',
                'Real-time reporting dashboards',
                'Dedicated personal account manager',
                '5,000+ vetted brand ambassadors',
                '200+ cities nationwide',
                '300+ brands served',
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
              Accessible pricing vs enterprise barriers—professional experiential marketing for every budget
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
                  <span className="text-gray-700">Long-Term Contract</span>
                  <span className="font-bold text-green-600">Not Required</span>
                </li>
              </ul>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-gray-200">
              <div className="flex items-center gap-2 mb-6">
                <Building className="w-5 h-5 text-gray-400" />
                <h3 className="text-xl font-bold text-gray-800">Team Enterprises</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-700">Brand Ambassadors</span>
                  <span className="font-bold text-gray-500">Enterprise Quote</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-700">Trade Show Staff</span>
                  <span className="font-bold text-gray-500">Enterprise Quote</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-700">Minimum Budget</span>
                  <span className="font-bold text-red-500">High Minimums</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-700">Hidden Fees</span>
                  <span className="font-bold text-gray-500">Management Fees</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Long-Term Contract</span>
                  <span className="font-bold text-red-500">Required</span>
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
            { href: '/pricing', label: 'View Our Pricing' },
            { href: '/technology', label: 'Our Technology Platform' },
            { href: '/case-studies', label: 'View Case Studies' },
            { href: '/get-quote?source=compare-team-enterprises&intent=related-request-quote', label: 'Request a Quote' },
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
            Ready for boutique attention with national reach?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
            Skip the enterprise minimums and long timelines. Get GPS-verified experiential marketing with transparent rates and dedicated support. Call{' '}
            <a href="tel:3037206060" className="text-[#F7931E] hover:underline">(303) 720-6060</a> or request your free quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-quote?source=compare-team-enterprises&intent=final-cta">
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
