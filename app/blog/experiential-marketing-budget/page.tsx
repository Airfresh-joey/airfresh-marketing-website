import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Budgeting for Experiential Marketing | Air Fresh Marketing',
  description: 'How much should you spend on experiential marketing? Here\'s how to build and manage experiential budgets.',
  keywords: 'experiential marketing budget, event marketing budget, activation budget, marketing budget planning',
};

export default function ExperientialBudgeting() {
  return (
    <article className="pt-16 min-h-screen bg-white">
      <header className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-green-200 mb-4">April 18, 2024 · 8 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Budgeting for Experiential Marketing</h1>
          <p className="text-xl text-green-200">Spend smart, not just more.</p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <p>Experiential budgets vary wildly - from $5K local activations to multi-million dollar campaigns. Here's how to think about budgeting.</p>
        <h2>Budget Components</h2>
        <ul>
          <li><strong>Staffing:</strong> Typically 25-40% of budget</li>
          <li><strong>Venue/space:</strong> 15-30% of budget</li>
          <li><strong>Production/build:</strong> 20-35% of budget</li>
          <li><strong>Product/samples:</strong> Variable by campaign</li>
          <li><strong>Marketing/promotion:</strong> 5-15% of budget</li>
          <li><strong>Contingency:</strong> Always 10-15%</li>
        </ul>
        <h2>Budget Tiers</h2>
        <p><strong>$5-25K:</strong> Local market activations, simple sampling, small events.</p>
        <p><strong>$25-100K:</strong> Multi-market programs, moderate production, larger events.</p>
        <p><strong>$100K-500K:</strong> National campaigns, custom builds, major events.</p>
        <p><strong>$500K+:</strong> Flagship experiences, major sponsorships, extensive programs.</p>
        <h2>Where to Invest vs. Cut</h2>
        <p><strong>Invest in:</strong> Staff quality, strategic locations, measurement.</p>
        <p><strong>Cut carefully:</strong> Production flourishes, excessive swag, low-traffic times.</p>
        <h2>ROI Mindset</h2>
        <ul>
          <li>Budget backward from desired ROI</li>
          <li>Know your cost-per-lead target</li>
          <li>Track everything to optimize future budgets</li>
        </ul>
        <hr className="my-12" />
        <div className="not-prose">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Budget-Conscious Staffing</h2>
            <p className="mb-6 text-green-200">Air Fresh helps you maximize staff ROI at any budget level.</p>
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Link href="/contact">Get a Quote <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
