import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sporting Goods Retail Marketing | Air Fresh Marketing',
  description: 'Dick\'s, REI, and specialty sports retailers need knowledgeable staff. Here\'s how to market in sporting goods.',
  keywords: 'sporting goods marketing, dicks sporting goods, rei marketing, sports retail marketing, athletic retail',
};

export default function SportingGoodsMarketing() {
  return (
    <article className="pt-16 min-h-screen bg-white">
      <header className="bg-gradient-to-r from-red-600 to-rose-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-red-200 mb-4">November 28, 2024 · 7 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sporting Goods Retail Marketing: Gear Up</h1>
          <p className="text-xl text-red-200">Athletes know their gear. Your staff should too.</p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <p>Sporting goods retail requires genuine expertise. Customers are often serious athletes who know more than casual staff. Credibility is earned, not assumed.</p>
        <h2>Retail Landscape</h2>
        <ul>
          <li><strong>Dick's Sporting Goods:</strong> Broad sports coverage, mainstream</li>
          <li><strong>REI:</strong> Outdoor focus, membership model, expertise valued</li>
          <li><strong>Academy Sports:</strong> Value positioning, Southern focus</li>
          <li><strong>Specialty shops:</strong> Running stores, golf shops, bike shops - deep expertise</li>
        </ul>
        <h2>What Works</h2>
        <p><strong>Expert demonstrators:</strong> Actual runners selling running shoes. Golfers selling golf gear. Authenticity matters.</p>
        <p><strong>Fitting services:</strong> Proper fit = better performance = happy customers.</p>
        <p><strong>Product trials:</strong> Let them try before they buy (especially footwear).</p>
        <p><strong>Seasonal timing:</strong> Pre-season for each sport is prime time.</p>
        <h2>Staff Requirements</h2>
        <ul>
          <li>Active participation in relevant sports</li>
          <li>Deep product knowledge (features, benefits, vs. competitors)</li>
          <li>Fitting expertise where applicable</li>
          <li>Ability to speak to serious athletes credibly</li>
        </ul>
        <hr className="my-12" />
        <div className="not-prose">
          <div className="bg-gradient-to-r from-red-600 to-rose-600 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Sporting Goods Demo Staff?</h2>
            <p className="mb-6 text-red-200">Air Fresh connects you with authentic athlete ambassadors.</p>
            <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              <Link href="/contact">Get Started <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
