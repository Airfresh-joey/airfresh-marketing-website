import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, Star, ArrowRight, Building, Zap, DollarSign, Clock, Award, Users, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AirFresh vs Pro Motion | Event Staffing Agency Comparison',
  description: 'AirFresh vs Pro Motion event staffing comparison: full-service experiential, proprietary tech, 50+ cities. See why brands choose Air Fresh Marketing.',
  keywords: 'AirFresh vs Pro Motion, Pro Motion event staffing alternative, event staffing agency comparison, experiential marketing agency',
  openGraph: {
    title: 'AirFresh vs Pro Motion | Event Staffing Agency Comparison',
    description: 'Compare Air Fresh Marketing vs Pro Motion: full-service experiential capabilities, proprietary technology, and nationwide reach.',
    url: 'https://www.airfreshmarketing.com/compare/pro-motion-staffing',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/compare/pro-motion-staffing',
  },
};

const comparison = [
  { feature: 'Service Scope', afm: 'Full-service experiential + staffing', competitor: 'Event staffing focused', winner: 'afm' },
  { feature: 'Technology Platform', afm: 'GPS check-in, video training, real-time dashboards', competitor: 'Basic scheduling tools', winner: 'afm' },
  { feature: 'Geographic Coverage', afm: '50+ cities, all 50 states', competitor: 'Select markets', winner: 'afm' },
  { feature: 'Brand Activations', afm: 'Full creative & execution', competitor: 'Staffing support only', winner: 'afm' },
  { feature: 'Staff Training', afm: 'Mandatory video training with certification', competitor: 'Standard onboarding', winner: 'afm' },
  { feature: 'Pricing Transparency', afm: 'Published rates, no hidden fees', competitor: 'Quote-based', winner: 'afm' },
  { feature: 'Convention Staffing', afm: 'CES, SEMA, NAB specialists', competitor: 'Available', winner: 'afm' },
  { feature: 'Experiential Design', afm: 'In-house creative team', competitor: 'Limited capabilities', winner: 'afm' },
  { feature: 'Client Reporting', afm: 'Real-time dashboards + GPS data', competitor: 'Post-event recaps', winner: 'afm' },
  { feature: 'Years Experience', afm: '20+ years (est. 2004)', competitor: '15+ years', winner: 'afm' },
];

const afmAdvantages = [
  {
    icon: Target,
    title: 'Full-Service Experiential Marketing',
    description: 'AirFresh goes beyond staffing with complete experiential marketing capabilities including creative strategy, activation design, logistics, and execution—all under one roof.',
  },
  {
    icon: Zap,
    title: 'Proprietary Technology Platform',
    description: 'GPS check-in verification, mandatory video training with certification, and real-time reporting dashboards give you unprecedented visibility and accountability.',
  },
  {
    icon: Users,
    title: 'Nationwide 50+ City Network',
    description: 'Deploy staff in 50+ major cities across all 50 states. Our 5,000+ vetted professionals are ready for activations anywhere in the country.',
  },
  {
    icon: Award,
    title: '20+ Years of Proven Results',
    description: 'Since 2004, Air Fresh Marketing has delivered thousands of successful activations for brands across every industry. Our experience translates to flawless execution.',
  },
];

const servicesOffered = [
  { name: 'Brand Ambassadors', afm: true, competitor: true },
  { name: 'Experiential Marketing Strategy', afm: true, competitor: false },
  { name: 'GPS Check-In Technology', afm: true, competitor: false },
  { name: 'Video Training Platform', afm: true, competitor: false },
  { name: 'Brand Activation Design', afm: true, competitor: false },
  { name: 'Trade Show & Convention Staffing', afm: true, competitor: true },
  { name: 'Product Sampling', afm: true, competitor: true },
  { name: 'Promotional Models', afm: true, competitor: true },
  { name: 'Real-Time Reporting Dashboard', afm: true, competitor: false },
  { name: 'Nationwide Coverage (50+ Cities)', afm: true, competitor: false },
];

const faqs = [
  {
    question: 'What is the difference between Air Fresh Marketing and Pro Motion?',
    answer: 'Air Fresh Marketing is a full-service experiential marketing and event staffing agency with proprietary technology, creative capabilities, and nationwide coverage across 50+ cities. Pro Motion focuses primarily on event staffing services with limited experiential marketing capabilities. AirFresh offers GPS check-in technology, mandatory video training, real-time dashboards, and in-house creative—services that Pro Motion does not provide.',
  },
  {
    question: 'Does AirFresh offer more services than Pro Motion?',
    answer: 'Yes. While Pro Motion specializes in event staffing, Air Fresh Marketing provides a broader range of services including experiential marketing strategy, brand activation design and execution, creative development, convention staffing at major trade shows (CES, SEMA, NAB), and proprietary technology tools. AirFresh is a one-stop solution for brands that need both staffing and experiential marketing.',
  },
  {
    question: 'How does AirFresh technology compare to Pro Motion?',
    answer: 'Air Fresh Marketing uses a proprietary technology platform that includes GPS check-in verification (confirming staff arrival), mandatory video training with certification (ensuring brand knowledge), and real-time reporting dashboards (giving clients live visibility). Pro Motion uses basic scheduling and communication tools without the same level of accountability technology.',
  },
  {
    question: 'Can AirFresh cover more markets than Pro Motion?',
    answer: 'Yes. Air Fresh Marketing operates in 50+ cities across all 50 states with a network of 5,000+ vetted professionals. Pro Motion serves select markets with a more limited geographic footprint. For nationwide campaigns or multi-city activations, AirFresh provides seamless coordination across the entire country.',
  },
  {
    question: 'Is AirFresh better for experiential marketing campaigns?',
    answer: 'For brands that need both event staffing and experiential marketing capabilities, AirFresh is the stronger choice. Our in-house creative team handles everything from activation concept and design to logistics and execution. Pro Motion excels at staffing but typically requires brands to bring their own experiential strategy and creative direction.',
  },
  {
    question: 'How much does AirFresh cost compared to Pro Motion?',
    answer: 'Air Fresh Marketing publishes transparent rates starting at $25/hr with no hidden fees. Pro Motion uses quote-based pricing. Both agencies serve similar market segments, but AirFresh provides significantly more value through included technology (GPS, video training, dashboards) and broader service capabilities at competitive rates.',
  },
];

export default function CompareProMotionStaffing() {
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
                  { "@type": "ListItem", "position": 3, "name": "Pro Motion", "item": "https://www.airfreshmarketing.com/compare/pro-motion-staffing" }
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
              Pro Motion
            </span>
            : Event Staffing Agency Comparison
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Pro Motion offers solid event staffing, but Air Fresh Marketing delivers a complete experiential marketing solution with proprietary technology, nationwide coverage, and full creative capabilities. See the full comparison below.
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
              <p className="text-gray-700 font-medium mb-4">Full-service experiential + staffing</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> Experiential strategy & creative
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> GPS check-in technology
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> 50+ cities nationwide
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> Real-time reporting dashboards
                </li>
              </ul>
            </div>
            <div className="p-8 bg-gray-100 rounded-2xl border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-xl flex items-center justify-center">
                  <Building className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Pro Motion</h3>
              </div>
              <p className="text-gray-600 font-medium mb-4">Event staffing agency</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" /> Event staffing services
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" /> 15+ years experience
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" /> Select market coverage
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
              Full-service experiential vs staffing-only—compare capabilities across every dimension
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
                    Pro Motion
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
              AirFresh offers a complete experiential ecosystem—not just staffing bodies
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
                    <span className="text-xs text-gray-500">PM</span>
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
              Why Choose AirFresh Over Pro Motion
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
              More than staffing—a complete experiential marketing partner
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
                'Full-service experiential marketing',
                'In-house creative & strategy team',
                'GPS check-in staff verification',
                'Mandatory video training & certification',
                'Real-time reporting dashboards',
                '50+ cities, all 50 states',
                'Convention specialists (CES, SEMA, NAB)',
                '5,000+ vetted professionals',
                '20+ years proven track record',
                'Transparent published pricing',
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
            { href: '/compare/atn-event-staffing', label: 'AirFresh vs ATN Event Staffing' },
            { href: '/compare/mosaic-experiential', label: 'AirFresh vs Mosaic Experiential' },
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
            Need more than just staffing?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
            Get a complete experiential marketing partner with technology, creative, and nationwide execution. Call{' '}
            <a href="tel:3037206060" className="text-[#F7931E] hover:underline">(303) 720-6060</a> or request your free quote.
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
