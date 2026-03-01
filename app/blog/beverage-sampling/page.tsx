import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Beverage Sampling Campaigns: The Complete Guide | Air Fresh Marketing',
  description: 'Beverage sampling drives trial like nothing else. Here\'s how to plan sampling campaigns that convert tasters to buyers.',
  keywords: 'beverage sampling, drink sampling, beverage marketing, alcohol sampling, energy drink sampling, beverage brand activation',
};

export default function BeverageSampling() {
  return (
    <article className="pt-16 min-h-screen bg-white">
      <header className="bg-gradient-to-r from-sky-500 to-blue-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sky-200 mb-4">December 8, 2025 · 8 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Beverage Sampling: How to Turn Tasters into Buyers</h1>
          <p className="text-xl text-sky-100">The beverage industry lives and dies by trial. Here's how to sample effectively.</p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <p>In beverages, trial is everything. No amount of advertising convinces like actually tasting the product. That's why beverage sampling remains one of the most effective marketing tactics in the industry.</p>
        <p>But there's sampling, and there's effective sampling. The difference is massive.</p>
        <h2>Where to Sample Beverages</h2>
        <p><strong>Retail (grocery, convenience):</strong> Sample where people can immediately purchase. The gap between trial and buy should be steps, not miles.</p>
        <p><strong>Events and festivals:</strong> High volume, receptive audiences. Great for awareness, harder to convert immediately.</p>
        <p><strong>Fitness locations:</strong> Perfect for sports drinks, protein beverages, energy drinks. Audience is pre-qualified by context.</p>
        <p><strong>Offices and coworking:</strong> Captive audiences, repeat exposure opportunity. Good for functional beverages.</p>
        <p><strong>Bars and restaurants:</strong> For alcohol brands, on-premise sampling builds preference that transfers to retail.</p>
        <h2>Sampling Math</h2>
        <p>Typical costs:</p>
        <ul>
          <li>Product cost: $0.50-2.00 per sample</li>
          <li>Staffing: $25-40/hour (2-4 people typical)</li>
          <li>Equipment (coolers, table, signage): $200-500/day</li>
          <li>Permits (if required): varies wildly</li>
        </ul>
        <p>A typical sampling event might cost $500-1,500 and distribute 300-800 samples. That's $0.60-5.00 per sample delivered.</p>
        <p>Is it worth it? If 20% of samplers purchase at retail (reasonable for a good product), and your margin is $1.50 per unit, you need about 400 samples to break even on a $1,200 event. Very doable.</p>
        <h2>Alcohol Sampling Rules</h2>
        <p>Alcohol sampling is heavily regulated. Key considerations:</p>
        <ul>
          <li>Permits required in most jurisdictions</li>
          <li>Age verification mandatory</li>
          <li>Pour limits (usually 1-2 oz per sample)</li>
          <li>Number of samples per person often limited</li>
          <li>Sampling hours may be restricted</li>
          <li>Some states prohibit or heavily restrict</li>
        </ul>
        <p>Work with your agency to navigate local regulations. Getting this wrong can mean fines or worse.</p>
        <h2>The Conversion Bridge</h2>
        <p>Every sampling interaction needs a bridge to purchase:</p>
        <ul>
          <li>Coupon for immediate purchase</li>
          <li>QR code to store locator</li>
          <li>Email signup for follow-up offer</li>
          <li>"Available in aisle 7" if sampling in retail</li>
        </ul>
        <p>Without a bridge, sampling is just giving away free drinks.</p>
        <hr className="my-12" />
        <div className="not-prose">
          <div className="bg-gradient-to-r from-sky-500 to-blue-600 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Need Beverage Sampling Staff?</h2>
            <p className="mb-6 text-sky-100">Air Fresh runs beverage sampling programs nationwide. Let's talk about your launch or ongoing program.</p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contact">Get a Quote <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
