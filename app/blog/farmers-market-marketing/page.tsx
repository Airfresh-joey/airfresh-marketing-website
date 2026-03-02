import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Farmer\'s Market Marketing | Air Fresh Marketing',
  description: 'Farmer\'s markets offer unique sampling opportunities. Here\'s how to reach health-conscious consumers at local markets.',
  keywords: 'farmers market marketing, farmers market sampling, local market activation, organic brand marketing',
};

export default function FarmersMarketMarketing() {
  return (
    <article className="pt-16 min-h-screen bg-white">
      <header className="bg-gradient-to-r from-lime-600 to-green-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lime-200 mb-4">December 16, 2023 · 6 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Farmer's Market Marketing</h1>
          <p className="text-xl text-lime-200">Reach health-conscious consumers where they shop local.</p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <p>Farmer's markets attract a specific demographic - health-conscious, community-minded, willing to pay premium for quality. For the right brands, it's a perfect audience.</p>
        <h2>Who Should Market Here</h2>
        <ul>
          <li><strong>Food/beverage brands:</strong> Especially organic, natural, local</li>
          <li><strong>Health and wellness:</strong> Supplements, fitness, wellness apps</li>
          <li><strong>Sustainable products:</strong> Eco-friendly goods</li>
          <li><strong>Local businesses:</strong> Services targeting community members</li>
        </ul>
        <h2>Market Types</h2>
        <p><strong>Weekly markets:</strong> Recurring opportunity, build relationships.</p>
        <p><strong>Special markets:</strong> Holiday markets, festivals.</p>
        <p><strong>Urban markets:</strong> Higher volume, diverse demographics.</p>
        <p><strong>Suburban/rural:</strong> Loyal regulars, tight community.</p>
        <h2>Activation Approaches</h2>
        <ul>
          <li>Sampling booth (coordinate with market management)</li>
          <li>Sponsor existing vendors</li>
          <li>Community partnership activations</li>
          <li>Cooking demos and educational content</li>
        </ul>
        <h2>Staff Fit</h2>
        <ul>
          <li>Authentic interest in food/health/sustainability</li>
          <li>Conversational, not salesy</li>
          <li>Community-minded approach</li>
        </ul>
        <hr className="my-12" />
        <div className="not-prose">
          <div className="bg-gradient-to-r from-lime-600 to-green-600 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Market Staff?</h2>
            <p className="mb-6 text-lime-200">Air Fresh provides authentic staff for farmer's markets.</p>
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Link href="/contact">Get Started <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
