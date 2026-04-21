import Link from 'next/link';

/**
 * Shared internal linking component for all blog posts (static and dynamic).
 * Provides comprehensive cross-linking to event pages, pillar pages, city pages,
 * and service pages for maximum SEO link equity distribution.
 */
export default function BlogInternalLinks() {
  return (
    <div className="not-prose mt-12 pt-8 border-t border-gray-200">
      {/* Service & Pillar Pages */}
      <h3 className="text-lg font-bold text-gray-900 mb-4">Explore Our Services</h3>
      <div className="grid sm:grid-cols-2 gap-3 mb-8">
        <Link href="/event-staffing-agency" className="text-sm text-primary hover:underline">Event Staffing Agency</Link>
        <Link href="/brand-ambassador-agency" className="text-sm text-primary hover:underline">Brand Ambassador Agency</Link>
        <Link href="/experiential-marketing-agency" className="text-sm text-primary hover:underline">Experiential Marketing Agency</Link>
        <Link href="/promotional-staffing-agency" className="text-sm text-primary hover:underline">Promotional Staffing Agency</Link>
        <Link href="/corporate-event-staffing" className="text-sm text-primary hover:underline">Corporate Event Staffing</Link>
        <Link href="/hire-brand-ambassadors" className="text-sm text-primary hover:underline">Hire Brand Ambassadors</Link>
        <Link href="/services/trade-show-staffing" className="text-sm text-primary hover:underline">Trade Show Staffing</Link>
        <Link href="/services/food-beverage-sampling" className="text-sm text-primary hover:underline">Food & Beverage Sampling</Link>
        <Link href="/mobile-marketing-tours" className="text-sm text-primary hover:underline">Mobile Marketing Tours</Link>
        <Link href="/guerrilla-marketing-agency" className="text-sm text-primary hover:underline">Guerrilla Marketing</Link>
        <Link href="/field-marketing-agency" className="text-sm text-primary hover:underline">Field Marketing Agency</Link>
        <Link href="/brand-activation-agency" className="text-sm text-primary hover:underline">Brand Activation Agency</Link>
        <Link href="/product-sampling-agency" className="text-sm text-primary hover:underline">Product Sampling Agency</Link>
        <Link href="/event-marketing-agency" className="text-sm text-primary hover:underline">Event Marketing Agency</Link>
        <Link href="/pricing" className="text-sm text-primary hover:underline">Pricing & Rates</Link>
        <Link href="/compare" className="text-sm text-primary hover:underline">Compare Agencies</Link>
        <Link href="/guides/event-staffing-101" className="text-sm text-primary hover:underline">Event Staffing 101 Guide</Link>
        <Link href="/guides/brand-ambassador-hiring-guide" className="text-sm text-primary hover:underline">Brand Ambassador Hiring Guide</Link>
      </div>

      {/* Events We Staff */}
      <h3 className="text-lg font-bold text-gray-900 mb-4">Events We Staff</h3>
      <div className="flex flex-wrap gap-2 mb-8">
        <Link href="/staffing-for/ces" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">CES</Link>
        <Link href="/staffing-for/sxsw" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">SXSW</Link>
        <Link href="/staffing-for/coachella" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Coachella</Link>
        <Link href="/staffing-for/comic-con" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Comic-Con</Link>
        <Link href="/staffing-for/super-bowl" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Super Bowl</Link>
        <Link href="/staffing-for/art-basel-miami" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Art Basel Miami</Link>
        <Link href="/staffing-for/ultra-music-festival" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Ultra Music Festival</Link>
        <Link href="/staffing-for/rolling-loud" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Rolling Loud</Link>
        <Link href="/staffing-for/edc-las-vegas" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">EDC Las Vegas</Link>
        <Link href="/staffing-for/lollapalooza" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Lollapalooza</Link>
        <Link href="/staffing-for/governors-ball" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Governors Ball</Link>
        <Link href="/staffing-for/world-cup-2026" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">World Cup 2026</Link>
        <Link href="/staffing-for/f1-las-vegas" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">F1 Las Vegas</Link>
        <Link href="/staffing-for/dreamforce" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Dreamforce</Link>
        <Link href="/staffing-for/aws-reinvent" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">AWS re:Invent</Link>
        <Link href="/staffing-for/anime-expo" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Anime Expo</Link>
        <Link href="/staffing-for/sundance-film-festival" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Sundance</Link>
        <Link href="/staffing-for/nba-all-star" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">NBA All-Star</Link>
        <Link href="/staffing-for/kentucky-derby" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Kentucky Derby</Link>
        <Link href="/staffing-for/nfl-draft" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">NFL Draft</Link>
        <Link href="/staffing-for/miami-grand-prix" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Miami Grand Prix</Link>
        <Link href="/staffing-for/jazz-fest" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Jazz Fest</Link>
        <Link href="/staffing-for/cma-fest" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">CMA Fest</Link>
        <Link href="/staffing-for/rose-bowl" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Rose Bowl</Link>
        <Link href="/staffing-for/sdcc" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">San Diego Comic-Con</Link>
        <Link href="/staffing-for" className="px-3 py-1 bg-cyan-50 border border-cyan-200 rounded-full text-xs font-medium text-cyan-600 hover:bg-cyan-100 transition-colors">View All 60+ Events →</Link>
      </div>

      {/* Top Markets */}
      <h3 className="text-lg font-bold text-gray-900 mb-4">Top Markets</h3>
      <div className="flex flex-wrap gap-2">
        <Link href="/cities/los-angeles" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Los Angeles</Link>
        <Link href="/cities/new-york" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">New York City</Link>
        <Link href="/cities/miami" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Miami</Link>
        <Link href="/cities/chicago" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Chicago</Link>
        <Link href="/cities/las-vegas" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Las Vegas</Link>
        <Link href="/cities/dallas" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Dallas</Link>
        <Link href="/cities/houston" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Houston</Link>
        <Link href="/cities/atlanta" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Atlanta</Link>
        <Link href="/cities/denver" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Denver</Link>
        <Link href="/cities/san-francisco" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">San Francisco</Link>
        <Link href="/cities/phoenix" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Phoenix</Link>
        <Link href="/cities/nashville" className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-cyan-400 hover:text-cyan-600 transition-colors">Nashville</Link>
        <Link href="/locations" className="px-3 py-1 bg-cyan-50 border border-cyan-200 rounded-full text-xs font-medium text-cyan-600 hover:bg-cyan-100 transition-colors">All 200+ Cities →</Link>
      </div>
    </div>
  );
}
