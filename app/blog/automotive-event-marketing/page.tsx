import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Automotive Event Marketing: Driving Sales Through Experience | Air Fresh Marketing',
  description: 'Auto shows and ride-and-drive events sell cars. Here\'s how automotive brands create experiences that move metal.',
  keywords: 'automotive event marketing, auto show marketing, ride and drive events, car launch event, automotive experiential, dealership events',
};

export default function AutomotiveMarketing() {
  return (
    <article className="pt-16 min-h-screen bg-white">
      <header className="bg-gradient-to-r from-zinc-700 to-zinc-900 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-zinc-400 mb-4">November 5, 2025 · 9 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Automotive Event Marketing: Moving Metal Through Experience</h1>
          <p className="text-xl text-zinc-300">Cars are emotional purchases. Events that create emotion sell cars.</p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <p>Buying a car is one of the biggest purchases most people make. It's emotional, considered, and competitive. That's why experiential marketing is so effective for automotive - it creates the emotional connection that advertising can't.</p>
        <h2>Auto Show Presence</h2>
        <p>Auto shows remain a core automotive marketing channel. Keys to success:</p>
        <p><strong>Booth design:</strong> Creates brand world, not just displays cars. Lighting, materials, flow all reinforce brand positioning.</p>
        <p><strong>Interactive elements:</strong> Configurators, VR experiences, photo opportunities. Passive viewing doesn't create connection.</p>
        <p><strong>Staff quality:</strong> Product specialists who can speak to any question. Not just greeters - experts who build trust.</p>
        <p><strong>Lead capture:</strong> Every interaction should capture information for follow-up. The sale happens at the dealership, but it starts at the show.</p>
        <h2>Ride-and-Drive Events</h2>
        <p>Nothing sells a car like driving it. Ride-and-drive events put prospects behind the wheel:</p>
        <ul>
          <li>Closed course or public road experiences</li>
          <li>Professional driving instructors as hosts</li>
          <li>Multiple vehicles for comparison</li>
          <li>Immediate connection to local dealers</li>
        </ul>
        <p>Conversion rates from ride-and-drive to dealership visit can exceed 40% with proper follow-up.</p>
        <h2>Dealer Events</h2>
        <p>Individual dealership events drive local sales:</p>
        <ul>
          <li>New model launch events</li>
          <li>Customer appreciation / loyalty events</li>
          <li>Community sponsorships</li>
          <li>Test drive days</li>
        </ul>
        <p>Staffing these events with professional product specialists (not just sales staff) creates better impressions and higher quality leads.</p>
        <h2>Automotive Staffing Requirements</h2>
        <p>Auto events require specialized talent:</p>
        <ul>
          <li>Product knowledge - deep understanding of specifications, features, competitive landscape</li>
          <li>Professional appearance - matching brand positioning (luxury vs. rugged vs. sporty)</li>
          <li>Sales orientation - ability to qualify leads and set appointments</li>
          <li>Driving skills - for ride-and-drive, professional driving backgrounds preferred</li>
        </ul>
        <hr className="my-12" />
        <div className="not-prose">
          <div className="bg-gradient-to-r from-zinc-700 to-zinc-900 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Need Automotive Event Staff?</h2>
            <p className="mb-6 text-zinc-300">Air Fresh provides trained automotive specialists for auto shows, ride-and-drives, and dealership events.</p>
            <Button asChild size="lg" className="bg-white text-zinc-900 hover:bg-gray-100">
              <Link href="/contact">Get a Quote <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
