import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Star, Building, Zap, DollarSign, Award, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Event Staffing Agency Comparisons - AirFresh vs Competitors [2026]',
  description: 'Event staffing agency comparisons: AirFresh vs ATN, Elev8, Attack Marketing, and top agencies. GPS check-in, transparent pricing, nationwide.',
  keywords: 'event staffing agency comparison, best event staffing company, brand ambassador agency comparison, AirFresh Marketing vs competitors',
  openGraph: {
    title: 'Event Staffing Agency Comparisons | AirFresh Marketing',
    description: 'Compare AirFresh Marketing to top event staffing agencies nationwide.',
    url: 'https://www.airfreshmarketing.com/compare',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/compare',
  },
};

const competitors = [
  {
    slug: 'atn-event-staffing',
    name: 'ATN Event Staffing',
    tagline: 'Traditional nationwide event staffing',
    location: 'Nationwide',
    keyDiff: 'No GPS check-in technology',
    priority: true,
  },
  {
    slug: 'elev8-staffing',
    name: 'Elev8 Staffing Group',
    tagline: 'Volume-focused event staffing',
    location: 'Nationwide',
    keyDiff: 'No video training platform',
    priority: true,
  },
  {
    slug: 'attack-marketing',
    name: 'Attack! Marketing',
    tagline: 'Enterprise experiential marketing',
    location: 'Nationwide',
    keyDiff: 'Higher minimums, longer lead times',
    priority: false,
  },
  {
    slug: 'alt-terrain',
    name: 'Alt Terrain',
    tagline: 'NYC-focused street marketing',
    location: 'NYC & Northeast',
    keyDiff: 'Limited geographic coverage',
    priority: false,
  },
  {
    slug: 'hype-agency',
    name: 'The Hype Agency',
    tagline: 'Talent management focused staffing',
    location: 'Nationwide (HQ: Salem, NH)',
    keyDiff: 'No GPS tracking or AI tools',
    priority: false,
  },
  {
    slug: 'cea-staffing',
    name: 'CEA Staffing',
    tagline: 'Pure staffing agency',
    location: 'Nationwide (HQ: Chicago)',
    keyDiff: 'No experiential marketing strategy',
    priority: false,
  },
  {
    slug: 'ignite-productions',
    name: 'Ignite Productions',
    tagline: 'CPG-focused activations',
    location: 'Nationwide (HQ: Sparks, NV)',
    keyDiff: 'Newer company, narrow industry focus',
    priority: false,
  },
  {
    slug: 'assist-marketing',
    name: 'Assist Marketing',
    tagline: 'Traditional event staffing',
    location: 'US & Canada (HQ: Wisconsin)',
    keyDiff: 'No proprietary technology platform',
    priority: false,
  },
  {
    slug: 'kinetic-events',
    name: 'Kinetic Events Staffing',
    tagline: 'Trade show focused staffing',
    location: '15 US cities (HQ: San Francisco)',
    keyDiff: 'Only 15 cities, limited coverage',
    priority: false,
  },
  {
    slug: 'mosaic-experiential',
    name: 'Mosaic Experiential',
    tagline: 'Enterprise experiential marketing',
    location: 'Nationwide (Acosta Group)',
    keyDiff: 'Higher minimums, corporate-only focus',
    priority: false,
  },
  {
    slug: 'pro-motion-staffing',
    name: 'Pro Motion',
    tagline: 'Event marketing and staffing',
    location: 'Nationwide (HQ: Missouri)',
    keyDiff: 'Limited experiential capabilities',
    priority: false,
  },
  {
    slug: 'advantage-solutions',
    name: 'Advantage Solutions',
    tagline: 'High-volume sampling company',
    location: 'Nationwide (publicly traded)',
    keyDiff: 'High volume/low touch, impersonal service',
    priority: false,
  },
  {
    slug: 'allied-experiential',
    name: 'Allied Experiential',
    tagline: 'Corporate experiential marketing',
    location: 'Nationwide',
    keyDiff: 'Less agile, no published pricing',
    priority: false,
  },
  {
    slug: 'team-enterprises',
    name: 'Team Enterprises',
    tagline: 'Enterprise experiential marketing firm',
    location: 'Nationwide',
    keyDiff: 'Higher minimums, slower turnaround',
    priority: false,
  },
  {
    slug: 'encore-nationwide',
    name: 'Encore Nationwide',
    tagline: 'Nationwide event staffing company',
    location: 'Nationwide',
    keyDiff: 'Staffing-only, no experiential capabilities',
    priority: false,
  },
  {
    slug: '2x4-experiential',
    name: '2x4 Experiential',
    tagline: 'Boutique experiential marketing agency',
    location: 'Limited markets',
    keyDiff: 'Regional only, no GPS verification or published pricing',
    priority: false,
  },
  {
    slug: 'fusion-marketing',
    name: 'Fusion Marketing',
    tagline: 'Regional event staffing and marketing',
    location: 'Regional',
    keyDiff: 'Limited geographic reach, no proprietary tech platform',
    priority: false,
  },
  {
    slug: 'event-strategy-group',
    name: 'Event Strategy Group',
    tagline: 'Corporate event strategy firm',
    location: 'Nationwide',
    keyDiff: 'Strategy-only, no execution or staffing capabilities',
    priority: false,
  },
  {
    slug: 'sparks-marketing',
    name: 'Sparks Marketing',
    tagline: 'Large experiential and trade show agency',
    location: 'Nationwide',
    keyDiff: 'Less agile, no published pricing, slower deployment',
    priority: false,
  },
  {
    slug: 'grammy-staffing',
    name: 'Grammy Staffing',
    tagline: 'Entertainment-focused event staffing',
    location: 'Major markets',
    keyDiff: 'Narrow industry focus, no proprietary tech platform',
    priority: false,
  },
  {
    slug: 'next-level-promotions',
    name: 'Next Level Promotions',
    tagline: 'Promotional staffing and modeling agency',
    location: 'Select markets',
    keyDiff: 'Modeling-focused, limited experiential capabilities',
    priority: false,
  },
];

const afmHighlights = [
  { icon: Zap, label: 'GPS Check-In Verification', desc: 'Real-time location proof for every staff member' },
  { icon: Award, label: 'Certified Video Training', desc: 'Every staff member trained and quiz-certified' },
  { icon: DollarSign, label: 'Transparent Pricing', desc: 'Published rates starting at $25/hr, no hidden fees' },
  { icon: MapPin, label: '50+ Cities Nationwide', desc: 'All 50 states with local talent in 200+ markets' },
];

export default function ComparePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.airfreshmarketing.com" },
          { "@type": "ListItem", "position": 2, "name": "Compare Agencies", "item": "https://www.airfreshmarketing.com/compare" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the best event staffing agency?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The best event staffing agency depends on your needs, but AirFresh Marketing consistently ranks at the top for its proprietary GPS check-in technology, mandatory video training certification, transparent published pricing starting at $25/hr, and nationwide coverage across all 50 states. Key factors include technology platform, staff training quality, geographic coverage, and pricing transparency."
            }
          },
          {
            "@type": "Question",
            "name": "How do I choose between event staffing agencies?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Compare agencies on these key factors: (1) Technology - do they offer GPS check-in and real-time dashboards? (2) Training - is staff training mandatory with certification? (3) Pricing - are rates published and transparent? (4) Coverage - do they serve your markets? (5) Experience - how many events and brands have they worked with? (6) Reporting - do you get real-time data or just post-event summaries?"
            }
          },
          {
            "@type": "Question",
            "name": "What makes AirFresh Marketing different from other staffing agencies?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AirFresh Marketing differentiates through proprietary technology (GPS-verified check-ins, video training platform, real-time reporting dashboards), transparent published pricing with no hidden fees, mandatory staff certification before deployment, and nationwide coverage across all 50 states with 5,000+ vetted professionals. Most competitors lack GPS verification, published pricing, or comprehensive training programs."
            }
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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
            Agency Comparisons
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
            Event Staffing Agency{' '}
            <span className="text-[#F7931E]">Comparisons</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            See how AirFresh Marketing compares to the top event staffing agencies in the industry. Technology, training, pricing, and coverage — side by side.
          </p>
        </div>
      </section>

      {/* AirFresh Highlights */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {afmHighlights.map((item) => (
              <div key={item.label} className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-[#002B5B]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-6 h-6 text-[#002B5B]" />
                </div>
                <p className="font-bold text-gray-900 text-sm">{item.label}</p>
                <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Compare AirFresh to Top Competitors
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
              Click any comparison to see a detailed side-by-side breakdown
            </p>
          </div>

          <div className="space-y-4">
            {competitors.map((comp) => (
              <Link key={comp.slug} href={`/compare/${comp.slug}`}>
                <div className={`group flex items-center justify-between p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:border-[#002B5B]/30 cursor-pointer ${
                  comp.priority ? 'bg-[#002B5B]/5 border-[#002B5B]/20' : 'bg-white border-gray-200'
                }`}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Building className="w-6 h-6 text-gray-500" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-gray-900 group-hover:text-[#002B5B]">
                          AirFresh vs {comp.name}
                        </h3>
                        {comp.priority && (
                          <span className="text-xs bg-[#F7931E]/10 text-[#F7931E] px-2 py-0.5 rounded-full font-semibold">
                            Top Competitor
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">{comp.tagline} &middot; {comp.location}</p>
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                        {comp.keyDiff}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#002B5B] group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How to Choose an Event Staffing Agency */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 text-center">
            How to Choose the Best Event Staffing Agency
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Choosing the right event staffing agency can make or break your brand activation. With dozens of agencies claiming nationwide coverage and premium talent, it&apos;s critical to evaluate each provider on the factors that actually impact your event&apos;s success: technology, training, accountability, and transparent pricing.
            </p>
            <p>
              The biggest differentiator between top-tier and average staffing agencies is <strong>technology</strong>. GPS-verified check-ins ensure your staff is on-site and on-time — not just trusting an honor system. Real-time reporting dashboards give you visibility into campaign performance as it happens, not weeks later in a post-event summary. Ask any agency you&apos;re considering: &quot;How do you verify staff attendance?&quot; If the answer involves spreadsheets or phone calls, that&apos;s a red flag.
            </p>
            <p>
              <strong>Training and certification</strong> is the second critical factor. The best event staffing agencies require every team member to complete brand-specific video training and pass a knowledge quiz before deployment. This means your brand ambassadors arrive prepared, confident, and ready to represent your brand accurately. Most agencies skip this step entirely, sending staff with nothing more than a one-page brief.
            </p>
            <p>
              <strong>Pricing transparency</strong> separates honest agencies from those padding margins with hidden fees. Look for agencies that publish their rates online. At AirFresh Marketing, our event staffing rates start at $25/hour with no hidden fees — what you see is what you pay. Agencies that refuse to share pricing until you&apos;re deep in the sales process are often hiding markups that can inflate your budget by 30-50%.
            </p>
            <p>
              Finally, evaluate <strong>geographic coverage</strong> and <strong>local market expertise</strong>. A truly nationwide agency should have vetted talent in 50+ cities, not just a handful of major markets. Ask about their presence in your specific activation markets and whether they use local talent or fly staff in (which adds travel costs and reduces reliability).
            </p>
            <p>
              Use our detailed comparison pages above to see exactly how AirFresh Marketing stacks up against each competitor on these key factors. Every comparison includes side-by-side analysis of technology, training, pricing, coverage, and client results.
            </p>
          </div>
        </div>
      </section>

      {/* Why AirFresh Wins */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Why Brands Switch to AirFresh
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-gray-200">
              <CheckCircle2 className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">GPS-Verified Accountability</h3>
              <p className="text-gray-600 text-sm">Most agencies rely on honor-system check-ins. Our GPS verification proves every staff member is where they should be, when they should be there.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-gray-200">
              <Star className="w-8 h-8 text-yellow-500 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Certified Training Program</h3>
              <p className="text-gray-600 text-sm">No other agency requires every staff member to complete video training and pass a brand knowledge quiz before stepping on-site.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-gray-200">
              <DollarSign className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Published, Transparent Rates</h3>
              <p className="text-gray-600 text-sm">While competitors hide behind &quot;request a quote&quot; forms, we publish our rates online. No surprises, no hidden fees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Explore More Resources</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { href: '/pricing', label: 'Event Staffing Pricing' },
            { href: '/technology', label: 'Our Technology Platform' },
            { href: '/case-studies', label: 'Client Case Studies' },
            { href: '/services/brand-ambassadors', label: 'Brand Ambassador Services' },
            { href: '/services/convention-staffing', label: 'Convention Staffing' },
            { href: '/cities/los-angeles', label: 'Los Angeles Staffing' },
            { href: '/cities/new-york', label: 'New York Staffing' },
            { href: '/cities/las-vegas', label: 'Las Vegas Staffing' },
            { href: '/blog/top-event-staffing-agencies-los-angeles', label: 'Top 10 Agencies in LA' },
            { href: '/blog/top-event-staffing-agencies-new-york', label: 'Top 10 Agencies in NYC' },
            { href: '/guides/event-staffing-101', label: 'Event Staffing 101 Guide' },
            { href: '/guides/best-event-staffing-agency', label: 'Best Event Staffing Agency Guide' },
            { href: '/guides/brand-ambassador-hiring-guide', label: 'Brand Ambassador Hiring Guide' },
            { href: '/event-staffing-near-me', label: 'Find Event Staffing Near You' },
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
            Ready to see the difference?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
            Experience technology-driven event staffing with GPS verification, certified training, and transparent pricing. Call{' '}
            <a href="tel:3037206060" className="text-[#F7931E] hover:underline">(303) 720-6060</a>{' '}
            or get a free quote today.
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
