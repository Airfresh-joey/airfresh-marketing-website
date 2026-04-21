import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, Star, ArrowRight, Building, Zap, DollarSign, Clock, Award, Users, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AirFresh vs Encore Nationwide | Event Staffing Comparison',
  description: 'AirFresh vs Encore Nationwide comparison: full experiential capabilities beyond staffing, video training, GPS check-in verification vs nationwide event staffing company.',
  keywords: 'AirFresh vs Encore Nationwide, Encore Nationwide alternative, event staffing comparison, experiential marketing vs staffing',
  openGraph: {
    title: 'AirFresh vs Encore Nationwide | Event Staffing Comparison',
    description: 'Compare Air Fresh Marketing vs Encore Nationwide: full experiential marketing with GPS technology vs event staffing-only company.',
    url: 'https://www.airfreshmarketing.com/compare/encore-nationwide',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/compare/encore-nationwide',
  },
};

const comparison = [
  { feature: 'Core Service', afm: 'Full experiential marketing + staffing', competitor: 'Event staffing only', winner: 'afm' },
  { feature: 'Staff Verification', afm: 'GPS check-in confirms every arrival', competitor: 'Manual check-in processes', winner: 'afm' },
  { feature: 'Staff Training', afm: 'Mandatory video training with certification', competitor: 'Basic event briefings', winner: 'afm' },
  { feature: 'Technology Platform', afm: 'GPS, video training, real-time dashboards', competitor: 'Standard scheduling software', winner: 'afm' },
  { feature: 'Service Scope', afm: 'Strategy, creative, activation, staffing', competitor: 'Staffing placement only', winner: 'afm' },
  { feature: 'Real-Time Reporting', afm: 'Live dashboards with GPS data', competitor: 'Post-event reports', winner: 'afm' },
  { feature: 'Brand Activations', afm: 'Full creative & execution capabilities', competitor: 'Staff placement for client activations', winner: 'afm' },
  { feature: 'Pricing Transparency', afm: 'Published rates, no hidden fees', competitor: 'Quote-based pricing', winner: 'afm' },
  { feature: 'Geographic Coverage', afm: '200+ cities, 5,000+ ambassadors', competitor: 'Nationwide staffing network', winner: 'tie' },
  { feature: 'Campaign Strategy', afm: 'Full strategy & creative development', competitor: 'Staffing fulfillment only', winner: 'afm' },
];

const afmAdvantages = [
  {
    icon: Target,
    title: 'Experiential Capabilities Beyond Just Staffing',
    description: 'Encore Nationwide provides event staffing—bodies at events. Air Fresh Marketing delivers complete experiential marketing including brand strategy, creative development, activation design, and execution. You get a full marketing partner, not just a staffing agency.',
  },
  {
    icon: Zap,
    title: 'Video Training & Brand Certification',
    description: 'Encore Nationwide provides basic event briefings before shifts. AirFresh requires mandatory video training with brand certification before any staff member represents your brand. Your ambassadors understand your story, values, and messaging—not just logistics.',
  },
  {
    icon: Award,
    title: 'GPS Check-In Verification',
    description: 'AirFresh\'s proprietary GPS check-in system automatically verifies every staff member arrives at the correct location on time. No more wondering if staff showed up—get real-time GPS confirmation delivered to your dashboard. Encore Nationwide relies on manual check-in processes.',
  },
  {
    icon: DollarSign,
    title: 'Real-Time Dashboards & Live Reporting',
    description: 'While Encore Nationwide provides post-event recaps, AirFresh gives you live visibility into your campaign with real-time dashboards. See GPS check-ins, staff activity, and campaign metrics as they happen—not days after the event is over.',
  },
];

const servicesOffered = [
  { name: 'Brand Ambassadors', afm: true, competitor: true },
  { name: 'Full Experiential Marketing', afm: true, competitor: false },
  { name: 'GPS Check-In Verification', afm: true, competitor: false },
  { name: 'Video Training & Certification', afm: true, competitor: false },
  { name: 'Real-Time Reporting Dashboard', afm: true, competitor: false },
  { name: 'Brand Strategy & Creative', afm: true, competitor: false },
  { name: 'Trade Show Staffing', afm: true, competitor: true },
  { name: 'Brand Activations (Full Service)', afm: true, competitor: false },
  { name: 'Product Sampling', afm: true, competitor: true },
  { name: 'Event Staff Placement', afm: true, competitor: true },
  { name: 'Published Transparent Pricing', afm: true, competitor: false },
  { name: 'Campaign Performance Analytics', afm: true, competitor: false },
];

const faqs = [
  {
    question: 'What is the difference between Air Fresh Marketing and Encore Nationwide?',
    answer: 'Air Fresh Marketing is a full-service experiential marketing agency that provides strategy, creative, activation, and staffing with proprietary GPS technology and video training. Encore Nationwide is primarily an event staffing company that places personnel at events. AirFresh delivers complete experiential marketing campaigns with technology-verified accountability, while Encore Nationwide focuses on staffing fulfillment without the marketing strategy, creative development, or advanced verification technology.',
  },
  {
    question: 'Does Encore Nationwide offer GPS check-in technology?',
    answer: 'No. Encore Nationwide uses standard scheduling software and manual check-in processes. Air Fresh Marketing\'s proprietary GPS check-in technology automatically verifies every staff member arrives at the correct location on time. Combined with real-time dashboards, you get live visibility into your campaign execution—not just post-event confirmation.',
  },
  {
    question: 'Can Encore Nationwide create experiential marketing campaigns?',
    answer: 'Encore Nationwide is primarily a staffing company—they provide personnel for events but do not typically offer full experiential marketing services including brand strategy, creative development, and activation design. Air Fresh Marketing provides end-to-end experiential marketing from concept to execution, with staffing as one component of a complete campaign.',
  },
  {
    question: 'How does AirFresh staff training compare to Encore Nationwide?',
    answer: 'Air Fresh Marketing requires mandatory video training with brand certification before any staff member represents your brand. Staff must demonstrate brand knowledge through certification quizzes before being approved for activations. Encore Nationwide typically provides basic event briefings and logistical instructions without comprehensive brand training or certification requirements.',
  },
  {
    question: 'Is AirFresh more expensive than Encore Nationwide?',
    answer: 'Air Fresh Marketing publishes transparent rates ($35-65/hr for brand ambassadors, $40-70/hr for trade show staff) that include GPS verification, video training, real-time dashboards, and dedicated account management. While Encore Nationwide may offer lower base staffing rates, you receive significantly more value with AirFresh including technology, training, reporting, and full experiential marketing capabilities.',
  },
  {
    question: 'Why do brands switch from Encore Nationwide to AirFresh?',
    answer: 'Brands typically switch to AirFresh when they want more than just staff placement. Common reasons include: needing full experiential marketing strategy and creative, wanting GPS verification to confirm staff arrivals, requiring video training and brand certification for quality control, desiring real-time campaign visibility through dashboards, and wanting a dedicated account manager who understands their brand.',
  },
];

export default function CompareEncoreNationwide() {
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
                "name": "AirFresh vs Encore Nationwide | Event Staffing Comparison",
                "url": "https://www.airfreshmarketing.com/compare/encore-nationwide",
                "description": "Compare Air Fresh Marketing vs Encore Nationwide for experiential marketing and event staffing services.",
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.airfreshmarketing.com" },
                  { "@type": "ListItem", "position": 2, "name": "Compare", "item": "https://www.airfreshmarketing.com/compare" },
                  { "@type": "ListItem", "position": 3, "name": "Encore Nationwide", "item": "https://www.airfreshmarketing.com/compare/encore-nationwide" }
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
              Encore Nationwide
            </span>
            : Event Staffing Comparison
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Encore Nationwide is an event staffing company that places personnel at events. Air Fresh Marketing is a full-service experiential marketing agency with GPS verification, video training, real-time dashboards, and complete campaign capabilities far beyond just staffing.
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
              <p className="text-gray-700 font-medium mb-4">Full experiential marketing agency</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> GPS check-in verification
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> Mandatory video training & certification
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> Real-time reporting dashboards
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> Full strategy & creative services
                </li>
              </ul>
            </div>
            <div className="p-8 bg-gray-100 rounded-2xl border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-xl flex items-center justify-center">
                  <Building className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Encore Nationwide</h3>
              </div>
              <p className="text-gray-600 font-medium mb-4">Nationwide event staffing company</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" /> Large staffing network
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" /> Nationwide coverage
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" /> Various event types
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
              Full experiential marketing vs staffing-only—see how AirFresh compares to Encore Nationwide
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
                    Encore Nationwide
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
              AirFresh delivers complete experiential marketing—not just staff placement
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
                    <span className="text-xs text-gray-500">EN</span>
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
              Why Choose AirFresh Over Encore Nationwide
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
              Complete experiential marketing with GPS-verified accountability—not just staffing
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
                'Mandatory video training & certification',
                'Real-time reporting dashboards',
                'Full experiential marketing services',
                'Brand strategy & creative development',
                'Transparent pricing: $35-65/hr',
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
              Full experiential marketing vs basic staffing—more value for your investment
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
                  <span className="text-gray-700">GPS Verification</span>
                  <span className="font-bold text-green-600">Included</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-700">Video Training</span>
                  <span className="font-bold text-green-600">Included</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-700">Real-Time Dashboard</span>
                  <span className="font-bold text-green-600">Included</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Hidden Fees</span>
                  <span className="font-bold text-green-600">None</span>
                </li>
              </ul>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-gray-200">
              <div className="flex items-center gap-2 mb-6">
                <Building className="w-5 h-5 text-gray-400" />
                <h3 className="text-xl font-bold text-gray-800">Encore Nationwide</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-700">Event Staff</span>
                  <span className="font-bold text-gray-500">Quote Required</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-700">Trade Show Staff</span>
                  <span className="font-bold text-gray-500">Quote Required</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-700">GPS Verification</span>
                  <span className="font-bold text-red-500">Not Available</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-700">Video Training</span>
                  <span className="font-bold text-red-500">Not Available</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-700">Real-Time Dashboard</span>
                  <span className="font-bold text-red-500">Not Available</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Hidden Fees</span>
                  <span className="font-bold text-gray-500">Varies</span>
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
            { href: '/compare/allied-experiential', label: 'AirFresh vs Allied Experiential' },
            { href: '/compare/team-enterprises', label: 'AirFresh vs Team Enterprises' },
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
            Ready for experiential marketing beyond just staffing?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
            Get complete experiential marketing with GPS verification, video training, and real-time dashboards. Call{' '}
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
