import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Users, MapPin, Zap, Award, Clock, DollarSign, Target, Star, ArrowRight, Building } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Air Fresh Marketing vs Assist Marketing - Event Staffing Comparison [2026]',
  description: 'Air Fresh Marketing vs Assist Marketing compared: proprietary technology platform, GPS-verified check-ins, AI-powered consumer insights, and transparent pricing. See why brands choose AirFresh over Assist Marketing.',
  keywords: 'Air Fresh Marketing vs Assist Marketing, event staffing comparison, brand activation agency, Assist Marketing alternative, experiential marketing agency, promotional staffing',
  openGraph: {
    title: 'Air Fresh Marketing vs Assist Marketing - Which Agency is Right for You?',
    description: 'Compare technology, services, and value. Proprietary platform vs generic software. Find your ideal event staffing partner.',
    url: 'https://www.airfreshmarketing.com/compare/assist-marketing',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/compare/assist-marketing',
  },
};

const comparison = [
  { feature: 'Technology Platform', afm: 'Proprietary built-in-house', competitor: 'Generic third-party software', winner: 'afm' },
  { feature: 'GPS Check-In Verification', afm: 'Yes, every activation', competitor: 'Not available', winner: 'afm' },
  { feature: 'Staff Network Size', afm: '5,000+ vetted professionals', competitor: '50,000+ field staff', winner: 'competitor' },
  { feature: 'Geographic Coverage', afm: 'All 50 states, 200+ cities', competitor: 'US + Canada', winner: 'competitor' },
  { feature: 'Staff Employment Model', afm: 'Flexible W-2 & 1099', competitor: 'W-2 model', winner: 'tie' },
  { feature: 'AI Consumer Insights', afm: 'Built-in AI data tools', competitor: 'Not available', winner: 'afm' },
  { feature: 'Real-Time Reporting', afm: 'Live dashboards included', competitor: 'Basic post-event reports', winner: 'afm' },
  { feature: 'Video Training Platform', afm: 'Proprietary with certification', competitor: 'No dedicated platform', winner: 'afm' },
  { feature: 'Pricing Transparency', afm: 'Published rates, no hidden fees', competitor: 'Quote-based only', winner: 'afm' },
  { feature: 'Website & Digital Presence', afm: 'Custom-built professional platform', competitor: 'Built on Wix', winner: 'afm' },
];

const afmAdvantages = [
  {
    icon: Zap,
    title: 'Proprietary Technology Platform',
    description: 'Our custom-built technology stack powers every activation with real-time data, automated workflows, and seamless client communication\u2014no generic off-the-shelf software.',
  },
  {
    icon: MapPin,
    title: 'GPS-Verified Accountability',
    description: 'Every staff member checks in with GPS verification so you know your team is on-site, on-time, every time. Assist Marketing offers no equivalent technology.',
  },
  {
    icon: Award,
    title: 'Advanced Training System',
    description: 'Our proprietary video training platform with certification ensures every brand ambassador is fully prepared before they represent your brand in the field.',
  },
  {
    icon: Target,
    title: 'Data-Driven Insights',
    description: 'AI-powered consumer data tools and real-time dashboards give you actionable intelligence during and after every campaign\u2014not just a basic recap report.',
  },
];

const servicesOffered = [
  { name: 'Brand Ambassadors', afm: true, assist: true },
  { name: 'Street Teams', afm: true, assist: true },
  { name: 'Promotional Models', afm: true, assist: true },
  { name: 'Trade Show Staffing', afm: true, assist: true },
  { name: 'Event Management', afm: true, assist: true },
  { name: 'Product Sampling', afm: true, assist: true },
  { name: 'GPS Check-In Technology', afm: true, assist: false },
  { name: 'Video Training Platform', afm: true, assist: false },
  { name: 'Real-Time Dashboards', afm: true, assist: false },
  { name: 'AI Consumer Data Tools', afm: true, assist: false },
];

const marketsCovered = [
  'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
  'Milwaukee', 'Dallas', 'San Diego', 'San Francisco', 'Miami',
  'Atlanta', 'Denver', 'Seattle', 'Boston', 'Nashville',
  'Las Vegas', 'Austin', 'Portland', 'Philadelphia', 'And 200+ more',
];

const faqs = [
  {
    question: 'What is the difference between Air Fresh Marketing and Assist Marketing?',
    answer: 'The biggest difference is technology. Air Fresh Marketing operates on a proprietary technology platform with GPS check-in verification, AI-powered consumer insights, and real-time reporting dashboards. Assist Marketing relies on generic third-party software and does not offer GPS verification, dedicated video training, or AI data tools. Assist Marketing is based in Menomonee Falls, WI (founded 2010) and has a larger field staff network (50,000+), while AirFresh differentiates with tech-driven accountability and transparent published pricing.',
  },
  {
    question: 'Is Air Fresh Marketing better than Assist Marketing for brand activations?',
    answer: 'Both agencies offer core event staffing services like brand ambassadors, street teams, and product sampling. Air Fresh Marketing excels with proprietary technology that provides GPS-verified attendance, mandatory video training with certification, and live campaign dashboards. Assist Marketing has a larger staff roster and covers Canada in addition to the US, but lacks the technology infrastructure that modern brands increasingly require for measurable ROI.',
  },
  {
    question: 'How does Air Fresh Marketing pricing compare to Assist Marketing?',
    answer: 'Air Fresh Marketing publishes transparent rates with no hidden fees, so you know exactly what you are paying before you commit. Assist Marketing uses quote-based pricing that requires contacting their sales team. AirFresh also offers flexible minimums for businesses of all sizes, making it accessible whether you need a single brand ambassador or a 100-person team.',
  },
];

export default function CompareAssistMarketing() {
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
                  { "@type": "ListItem", "position": 3, "name": "Assist Marketing", "item": "https://www.airfreshmarketing.com/compare/assist-marketing" }
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
              Assist Marketing
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Both agencies deliver nationwide event staffing. See how Air Fresh Marketing&apos;s proprietary technology platform, GPS verification, and AI-powered insights give you a measurable competitive edge over Assist Marketing.
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
              <p className="text-gray-700 font-medium mb-4">Technology-driven event staffing</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> Proprietary tech platform
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> GPS check-in verification
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> AI consumer data tools
                </li>
              </ul>
            </div>
            <div className="p-8 bg-gray-100 rounded-2xl border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-xl flex items-center justify-center">
                  <Building className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Assist Marketing</h3>
              </div>
              <p className="text-gray-600 font-medium mb-4">Traditional field marketing agency</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" /> 50,000+ field staff
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" /> US + Canada coverage
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" /> W-2 employment model
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
              Compare capabilities across key areas
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
                    Assist Marketing
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
              Technology-enhanced staffing services across every market
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
                      <span className="w-5 h-5 rounded-full bg-gray-200" />
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">Assist</span>
                    {service.assist ? (
                      <CheckCircle2 className="w-5 h-5 text-gray-400" />
                    ) : (
                      <span className="w-5 h-5 rounded-full bg-gray-200" />
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
              The Air Fresh Advantage
            </h2>
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
        </div>
      </section>

      {/* Markets */}
      <section className="py-20 sm:py-28 bg-[#002B5B]/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              We&apos;re Where You Need Us
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
              Local expertise in 200+ markets nationwide
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {marketsCovered.map((market) => (
              <span key={market} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200">
                {market}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Explore Our Top Markets</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { href: '/city-services/los-angeles-brand-ambassadors', label: 'Brand Ambassadors Los Angeles' },
            { href: '/city-services/new-york-city-convention-staffing', label: 'Convention Staffing NYC' },
            { href: '/city-services/las-vegas-convention-staffing', label: 'Convention Staffing Las Vegas' },
            { href: '/city-services/chicago-event-management', label: 'Event Management Chicago' },
            { href: '/city-services/miami-experiential-marketing', label: 'Experiential Marketing Miami' },
            { href: '/blog/top-event-staffing-agencies-los-angeles', label: 'Top 10 Agencies in LA' },
            { href: '/blog/top-event-staffing-agencies-new-york', label: 'Top 10 Agencies in NYC' },
            { href: '/blog/top-event-staffing-agencies-las-vegas', label: 'Top 10 Agencies in Las Vegas' },
            { href: '/pricing', label: 'View Our Pricing' },
            { href: '/technology', label: 'Our Technology Platform' },
            { href: '/case-studies', label: 'View Case Studies' },
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
            { href: '/compare/kinetic-events', label: 'AirFresh vs Kinetic Events' },
            { href: '/compare/mosaic-experiential', label: 'AirFresh vs Mosaic Experiential' },
            { href: '/compare/pro-motion-staffing', label: 'AirFresh vs Pro Motion Staffing' },
            { href: '/compare/advantage-solutions', label: 'AirFresh vs Advantage Solutions' },
            { href: '/compare/allied-experiential', label: 'AirFresh vs Allied Experiential' },
            { href: '/compare/team-enterprises', label: 'AirFresh vs Team Enterprises' },
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
          ].map((link) => (
            <Link key={link.href} href={link.href} className="text-[#002B5B] hover:text-[#F7931E] font-medium transition-colors flex items-center gap-1.5">
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
              {link.label}
            </Link>
          ))}
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
            Ready for smarter staffing?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
            See why brands are switching to technology-driven event staffing. Get a free quote or call us at{' '}
            <a href="tel:3037206060" className="text-[#F7931E] hover:underline">(303) 720-6060</a>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-quote?source=compare-assist-marketing&intent=final-cta">
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
