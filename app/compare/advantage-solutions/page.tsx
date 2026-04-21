import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, Star, ArrowRight, Building, Zap, DollarSign, Clock, Award, Users, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AirFresh vs Advantage Solutions | Sampling & Staffing Comparison',
  description: 'AirFresh vs Advantage Solutions comparison: personalized experiential marketing, GPS technology, brand training, and transparent pricing vs high-volume sampling.',
  keywords: 'AirFresh vs Advantage Solutions, Advantage Solutions alternative, sampling agency comparison, experiential marketing vs sampling',
  openGraph: {
    title: 'AirFresh vs Advantage Solutions | Sampling & Staffing Comparison',
    description: 'Compare Air Fresh Marketing vs Advantage Solutions: boutique experiential marketing vs high-volume sampling. Find your ideal partner.',
    url: 'https://www.airfreshmarketing.com/compare/advantage-solutions',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/compare/advantage-solutions',
  },
};

const comparison = [
  { feature: 'Company Size', afm: 'Boutique, dedicated teams', competitor: '50,000+ employees, publicly traded', winner: 'afm' },
  { feature: 'Service Approach', afm: 'Personalized experiential marketing', competitor: 'High-volume, low-touch sampling', winner: 'afm' },
  { feature: 'Technology Platform', afm: 'GPS check-in, video training, real-time dashboards', competitor: 'Enterprise retail systems', winner: 'afm' },
  { feature: 'Staff Training', afm: 'Mandatory video training with brand certification', competitor: 'Standardized mass training', winner: 'afm' },
  { feature: 'Pricing Transparency', afm: 'Published rates, no hidden fees', competitor: 'Complex enterprise contracts', winner: 'afm' },
  { feature: 'Turnaround Time', afm: '48-hour emergency capability', competitor: 'Multi-week lead times', winner: 'afm' },
  { feature: 'Account Management', afm: 'Dedicated manager, direct communication', competitor: 'Account teams, layered structure', winner: 'afm' },
  { feature: 'Experiential Marketing', afm: 'Full creative & activation services', competitor: 'Sampling & demo focused', winner: 'afm' },
  { feature: 'Geographic Coverage', afm: '50+ cities nationwide', competitor: 'Massive national footprint', winner: 'tie' },
  { feature: 'Brand Activation Quality', afm: 'High-touch, trained brand storytellers', competitor: 'Volume-driven demo staff', winner: 'afm' },
];

const afmAdvantages = [
  {
    icon: Users,
    title: 'Personalized Service, Not a Number',
    description: 'With 50,000+ employees, Advantage Solutions operates at massive scale. At AirFresh, you work with a dedicated account manager who knows your brand. Your campaign is never lost in the shuffle.',
  },
  {
    icon: Target,
    title: 'Experiential Marketing Beyond Sampling',
    description: 'Advantage Solutions excels at in-store sampling and demos. AirFresh delivers complete experiential marketing including brand activations, events, trade shows, and immersive experiences that go far beyond handing out samples.',
  },
  {
    icon: Zap,
    title: 'GPS Technology & Brand Training',
    description: 'Our proprietary GPS check-in verifies every staff member arrives on time. Mandatory video training with certification ensures your brand story is told correctly—not just a script read by rotating demo staff.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing, Faster Turnaround',
    description: 'Published rates starting at $25/hr with no complex enterprise contracts. 48-hour emergency staffing when you need it. No multi-week procurement processes or purchase order bureaucracy.',
  },
];

const servicesOffered = [
  { name: 'Brand Ambassadors', afm: true, competitor: true },
  { name: 'Experiential Marketing', afm: true, competitor: false },
  { name: 'GPS Check-In Verification', afm: true, competitor: false },
  { name: 'Video Training & Certification', afm: true, competitor: false },
  { name: 'Product Sampling', afm: true, competitor: true },
  { name: 'In-Store Demos', afm: true, competitor: true },
  { name: 'Brand Activations', afm: true, competitor: false },
  { name: 'Trade Show Staffing', afm: true, competitor: true },
  { name: 'Real-Time Reporting Dashboard', afm: true, competitor: false },
  { name: 'Published Transparent Pricing', afm: true, competitor: false },
];

const faqs = [
  {
    question: 'What is the difference between Air Fresh Marketing and Advantage Solutions?',
    answer: 'Air Fresh Marketing is a boutique experiential marketing and event staffing agency with 20+ years of experience, offering personalized service, proprietary GPS technology, and transparent pricing. Advantage Solutions is a massive publicly traded company (50,000+ employees) focused primarily on high-volume in-store sampling and retail merchandising. AirFresh provides experiential marketing capabilities, brand training certification, and dedicated account management that Advantage Solutions\' high-volume model does not prioritize.',
  },
  {
    question: 'Is AirFresh better than Advantage Solutions for brand activations?',
    answer: 'For experiential marketing and brand activations, yes. Advantage Solutions excels at high-volume in-store sampling and retail demos, but their model is built for scale over personalization. Air Fresh Marketing specializes in creating memorable brand experiences with trained brand ambassadors who understand your story, supported by GPS check-in technology and real-time reporting dashboards.',
  },
  {
    question: 'How does AirFresh pricing compare to Advantage Solutions?',
    answer: 'Air Fresh Marketing publishes transparent rates starting at $25/hr with no hidden fees or complex contracts. Advantage Solutions uses enterprise pricing models that typically require lengthy contracts and procurement processes. AirFresh offers flexible project sizes without minimum spend requirements, making it accessible for brands of all sizes.',
  },
  {
    question: 'Does Advantage Solutions offer GPS check-in technology?',
    answer: 'No. Advantage Solutions uses enterprise retail management systems focused on merchandising and sampling volume metrics. Air Fresh Marketing\'s proprietary GPS check-in technology verifies staff arrival at every activation, mandatory video training ensures brand knowledge certification, and real-time dashboards give clients live visibility into campaign performance.',
  },
  {
    question: 'Can AirFresh handle large-scale sampling campaigns like Advantage Solutions?',
    answer: 'Yes. Air Fresh Marketing operates in 50+ cities with 5,000+ vetted professionals and can execute large-scale sampling campaigns nationwide. The difference is that AirFresh combines scale with quality—every staff member receives mandatory brand training, GPS verification confirms arrivals, and your dedicated account manager ensures consistent execution across all markets.',
  },
  {
    question: 'Why do brands switch from Advantage Solutions to AirFresh?',
    answer: 'Brands typically switch to AirFresh when they want more than just sampling bodies. Common reasons include: wanting dedicated account management instead of being one client among thousands, needing experiential marketing capabilities beyond sampling, desiring GPS verification and brand training certification for accountability, and preferring transparent pricing without complex enterprise contracts.',
  },
];

export default function CompareAdvantageSolutions() {
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
                  { "@type": "ListItem", "position": 3, "name": "Advantage Solutions", "item": "https://www.airfreshmarketing.com/compare/advantage-solutions" }
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
              Advantage Solutions
            </span>
            : Staffing Agency Comparison
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Advantage Solutions is a publicly traded sampling giant with 50,000+ employees. Air Fresh Marketing is a boutique experiential agency that delivers personalized service, proprietary technology, and brand experiences that go far beyond handing out samples.
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
              <p className="text-gray-700 font-medium mb-4">Personalized experiential marketing</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> GPS check-in verification
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> Brand training & certification
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> Transparent published pricing
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
                <h3 className="text-xl font-bold text-gray-800">Advantage Solutions</h3>
              </div>
              <p className="text-gray-600 font-medium mb-4">High-volume sampling company</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" /> 50,000+ employees
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" /> Publicly traded (NASDAQ)
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" /> Massive retail network
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
              Personalized experiential marketing vs high-volume sampling—see how AirFresh compares to Advantage Solutions
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
                    Advantage Solutions
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
              AirFresh delivers experiential quality and accountability that high-volume agencies cannot match
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
                    <span className="text-xs text-gray-500">ADV</span>
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
              Why Choose AirFresh Over Advantage Solutions
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
              Quality over quantity—experiential marketing that creates lasting brand impressions
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
                'Dedicated personal account manager',
                'GPS check-in staff verification',
                'Mandatory brand training & certification',
                'Real-time reporting dashboards',
                'Full experiential marketing services',
                'Transparent published pricing',
                '48-hour rapid deployment',
                '20+ years proven experience',
                'Brand activations beyond sampling',
                'Denver HQ, nationwide execution',
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
            { href: '/compare/mosaic-experiential', label: 'AirFresh vs Mosaic Experiential' },
            { href: '/compare/pro-motion-staffing', label: 'AirFresh vs Pro Motion' },
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
            Ready for experiential marketing that makes an impact?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
            Move beyond high-volume sampling to create memorable brand experiences. Call{' '}
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
