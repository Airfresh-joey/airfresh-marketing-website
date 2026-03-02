import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Home Improvement Store Marketing | Air Fresh Marketing',
  description: 'Home Depot, Lowe\'s, and hardware stores offer unique marketing opportunities. Here\'s how to reach DIYers and contractors.',
  keywords: 'home depot marketing, lowes marketing, hardware store marketing, home improvement marketing, contractor marketing',
};

export default function HomeImprovementMarketing() {
  return (
    <article className="pt-16 min-h-screen bg-white">
      <header className="bg-gradient-to-r from-orange-600 to-amber-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-orange-200 mb-4">December 8, 2024 · 7 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Home Improvement Store Marketing: Reaching Doers</h1>
          <p className="text-xl text-orange-200">DIYers and pros. Different needs, same aisles.</p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <p>Home improvement retail is a unique environment. Customers are there to solve problems. They're project-focused, often time-pressed, and need solutions that work.</p>
        <h2>Key Retailers</h2>
        <ul>
          <li><strong>Home Depot:</strong> Market leader, strong pro business</li>
          <li><strong>Lowe's:</strong> Consumer focus, home décor strength</li>
          <li><strong>Menards:</strong> Midwest dominant, value positioning</li>
          <li><strong>Ace Hardware:</strong> Neighborhood presence, service focus</li>
        </ul>
        <h2>Audience Segments</h2>
        <p><strong>DIY homeowners:</strong> Weekend warriors, project-specific needs, research-driven.</p>
        <p><strong>Pro contractors:</strong> Volume buyers, brand loyal, time = money.</p>
        <p><strong>Renovation enthusiasts:</strong> HGTV-inspired, style-conscious, willing to spend.</p>
        <h2>What Works</h2>
        <ul>
          <li><strong>Live demos:</strong> Show the product in action</li>
          <li><strong>Problem-solution:</strong> "This fixes [common problem]"</li>
          <li><strong>Pro endorsement:</strong> Having actual contractors demonstrate</li>
          <li><strong>Weekend timing:</strong> DIYers shop Saturday/Sunday</li>
          <li><strong>Pro hours:</strong> Reach contractors early morning weekdays</li>
        </ul>
        <hr className="my-12" />
        <div className="not-prose">
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Home Improvement Demo Staff?</h2>
            <p className="mb-6 text-orange-200">Air Fresh provides knowledgeable demonstrators for hardware retail.</p>
            <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              <Link href="/contact">Get a Quote <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
