import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mobile Marketing Tours: Taking Your Brand on the Road | Air Fresh Marketing',
  description: 'Mobile marketing tours bring your brand to customers across multiple markets. Here\'s how to plan, staff, and execute national tours.',
  keywords: 'mobile marketing tour, brand tour, mobile activation, marketing road trip, experiential tour, brand experience tour',
};

export default function MobileMarketingTours() {
  return (
    <article className="pt-16 min-h-screen bg-white">
      <header className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-orange-200 mb-4">August 18, 2025 · 9 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Mobile Marketing Tours: Hit the Road with Your Brand</h1>
          <p className="text-xl text-orange-100">One campaign, dozens of markets. Here's the tour playbook.</p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <p>Mobile tours take your brand activation to multiple markets without building permanent infrastructure in each. A wrapped vehicle or trailer becomes your traveling brand experience.</p>
        <h2>Tour Types</h2>
        <p><strong>Sampling tours:</strong> Vehicle loaded with product, team distributing at stops. Great for beverage, snacks, beauty.</p>
        <p><strong>Experience tours:</strong> Custom-built trailer or vehicle that unfolds into full activation. Higher impact, higher cost.</p>
        <p><strong>Event circuit:</strong> Follow festivals, sports events, or concert tours. Reach concentrated audiences.</p>
        <p><strong>Retail support:</strong> Visit retail locations for demos, support new distribution, train staff.</p>
        <h2>Planning a Tour</h2>
        <p><strong>Route planning:</strong> Balance market importance, logistics, and timing. Don't backtrack unnecessarily.</p>
        <p><strong>Permitting:</strong> Every city has different rules. Start permit applications 6-8 weeks early minimum.</p>
        <p><strong>Staffing:</strong> Tour staff either travel with the vehicle or you source locally in each market. Each has tradeoffs.</p>
        <p><strong>Vehicle/asset:</strong> Rent vs. build vs. buy. Depends on tour frequency and customization needs.</p>
        <h2>Tour Staffing Options</h2>
        <p><strong>Traveling crew:</strong> Same team throughout tour. Pro: consistency, deep brand knowledge. Con: housing, travel costs, burnout.</p>
        <p><strong>Local market teams:</strong> Fresh staff in each city. Pro: no travel costs, local knowledge. Con: constant training, variable quality.</p>
        <p><strong>Hybrid:</strong> Core traveling team + local support. Usually best balance.</p>
        <h2>Measuring Tour Success</h2>
        <ul>
          <li>Samples/impressions per market</li>
          <li>Leads captured per stop</li>
          <li>Social reach generated</li>
          <li>Sales lift in tour markets vs. control</li>
          <li>Cost per contact by market</li>
        </ul>
        <hr className="my-12" />
        <div className="not-prose">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Planning a Tour?</h2>
            <p className="mb-6 text-orange-100">Air Fresh staffs mobile tours nationwide with traveling teams or local market talent.</p>
            <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              <Link href="/contact">Get Started <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
