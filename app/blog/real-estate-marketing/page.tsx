import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Real Estate Marketing Events: Open Houses and Beyond | Air Fresh Marketing',
  description: 'Real estate events require polished professionals. Here\'s how to staff open houses, launches, and community events.',
  keywords: 'real estate marketing, open house staff, real estate events, property launch, residential marketing',
};

export default function RealEstateMarketing() {
  return (
    <article className="pt-16 min-h-screen bg-white">
      <header className="bg-gradient-to-r from-slate-700 to-zinc-800 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-slate-300 mb-4">April 28, 2025 · 7 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Real Estate Marketing: Events That Sell Properties</h1>
          <p className="text-xl text-slate-300">First impressions sell homes. Make them count.</p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <p>Real estate is high-stakes. A single event can lead to a multi-million dollar transaction - or a missed opportunity. Professional event support ensures every showing presents the property at its best.</p>
        <h2>Real Estate Event Types</h2>
        <ul>
          <li><strong>Broker opens:</strong> Previews for real estate professionals</li>
          <li><strong>Public open houses:</strong> Consumer-facing property tours</li>
          <li><strong>Development launches:</strong> New construction reveals</li>
          <li><strong>Community events:</strong> Building relationships in target neighborhoods</li>
          <li><strong>Luxury property showcases:</strong> High-end, invitation-only events</li>
        </ul>
        <h2>Staff Roles</h2>
        <ul>
          <li>Greeters and registration</li>
          <li>Property tour guides</li>
          <li>Refreshment service</li>
          <li>Valet coordination</li>
          <li>Lead capture and follow-up</li>
        </ul>
        <h2>The Luxury Standard</h2>
        <p>For high-end properties, every detail matters:</p>
        <ul>
          <li>Impeccable appearance</li>
          <li>Knowledgeable about property features</li>
          <li>Discreet and professional</li>
          <li>Comfortable with high-net-worth clients</li>
        </ul>
        <hr className="my-12" />
        <div className="not-prose">
          <div className="bg-gradient-to-r from-slate-700 to-zinc-800 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Real Estate Event Staff?</h2>
            <p className="mb-6 text-slate-300">Air Fresh provides polished professionals for property events.</p>
            <Button asChild size="lg" className="bg-white text-slate-800 hover:bg-gray-100">
              <Link href="/contact">Get a Quote <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
