import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mall Marketing and Kiosk Activations | Air Fresh Marketing',
  description: 'Malls still move products. Here\'s how to execute effective mall marketing, kiosk programs, and common area activations.',
  keywords: 'mall marketing, kiosk marketing, mall activation, retail mall events, common area marketing',
};

export default function MallMarketing() {
  return (
    <article className="pt-16 min-h-screen bg-white">
      <header className="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-pink-200 mb-4">December 26, 2023 · 7 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Mall Marketing: Capturing High-Intent Traffic</h1>
          <p className="text-xl text-pink-200">People in malls are there to shop. Meet them.</p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <p>Malls may not be what they were in the 80s, but they still attract shoppers - millions of them. For the right brands, mall marketing delivers high-intent audiences.</p>
        <h2>Mall Marketing Options</h2>
        <ul>
          <li><strong>Kiosk activations:</strong> Branded stations in high-traffic areas</li>
          <li><strong>Common area events:</strong> Larger setups in open spaces</li>
          <li><strong>Store partnerships:</strong> Activations inside anchor stores</li>
          <li><strong>Pop-up shops:</strong> Temporary retail presence</li>
          <li><strong>Seasonal programs:</strong> Holiday-focused activations</li>
        </ul>
        <h2>What Works</h2>
        <p><strong>Interactive experiences:</strong> Give people a reason to stop.</p>
        <p><strong>Demos:</strong> Let them try before they buy (from a nearby store).</p>
        <p><strong>Incentives:</strong> Discounts, gifts with purchase.</p>
        <p><strong>Photo moments:</strong> Create shareable installations.</p>
        <h2>Mall Logistics</h2>
        <ul>
          <li>Space rental negotiation with mall management</li>
          <li>Insurance and liability requirements</li>
          <li>Load-in/load-out timing restrictions</li>
          <li>Noise and crowd management rules</li>
        </ul>
        <hr className="my-12" />
        <div className="not-prose">
          <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Mall Activation Staff?</h2>
            <p className="mb-6 text-pink-200">Air Fresh provides mall marketing staff nationwide.</p>
            <Button asChild size="lg" className="bg-white text-rose-600 hover:bg-gray-100">
              <Link href="/contact">Get a Quote <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
