import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'College Marketing: How to Reach Students in 2026 | Air Fresh Marketing',
  description: 'College students ignore ads but respond to experiences. Here\'s how smart brands are reaching campus audiences.',
  keywords: 'college marketing, campus marketing, university marketing, student marketing, college brand ambassadors, campus events',
};

export default function CollegeMarketing() {
  return (
    <article className="pt-16 min-h-screen bg-white">
      <header className="bg-gradient-to-r from-red-500 to-orange-500 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-red-200 mb-4">November 28, 2025 · 10 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">College Marketing: Reaching Students Who Ignore Everything</h1>
          <p className="text-xl text-red-100">Gen Z has seen every trick. Here's what actually works on campus.</p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <p>College students are the most ad-immune demographic on earth. They skip every ad, block every banner, tune out every sponsor. They've been marketed to since birth.</p>
        <p>And yet, they're also one of the most valuable demographics - forming brand preferences that last decades, influencing peers, and setting trends that filter to the mainstream.</p>
        <p>The brands winning on campus aren't advertising. They're showing up.</p>
        <h2>What Works on Campus</h2>
        <p><strong>Peer-to-peer marketing:</strong> Student brand ambassadors who represent your brand to their networks. Authenticity matters - they have to actually use and believe in the product.</p>
        <p><strong>Event presence:</strong> Showing up at campus events, parties, games, orientations. Being part of the experience, not interrupting it.</p>
        <p><strong>Utility:</strong> Solving real student problems. Charging stations, study snacks, free printing. Brands that provide value earn attention.</p>
        <p><strong>Social content:</strong> Creating content with students, not about students. They're creators, not just consumers.</p>
        <p><strong>Micro-moments:</strong> Quick, fun interactions that create memories. The Instagram-worthy photo op. The surprise giveaway. The random act of brand kindness.</p>
        <h2>Campus Brand Ambassador Programs</h2>
        <p>The most effective college marketing uses students themselves:</p>
        <ul>
          <li>Recruit 5-10 ambassadors per target campus</li>
          <li>Train them on brand and products</li>
          <li>Give them monthly activation goals</li>
          <li>Arm them with product, swag, and content tools</li>
          <li>Compensate with cash, product, and experiences</li>
        </ul>
        <p>A good campus ambassador can reach 500-2,000 students per semester through events, social content, and word of mouth. At $200-500/month per ambassador, the math works.</p>
        <h2>Campus Event Activations</h2>
        <p>Key opportunities:</p>
        <ul>
          <li>Welcome week / orientation</li>
          <li>Football and basketball games</li>
          <li>Greek life events</li>
          <li>Finals week study breaks</li>
          <li>Campus concerts and festivals</li>
          <li>Career fairs (if relevant)</li>
        </ul>
        <p>Presence at 4-6 events per semester per campus maintains visibility. Less is forgettable, more is overkill.</p>
        <h2>The Don'ts</h2>
        <p><strong>Don't be cringe.</strong> Students can smell try-hard from a mile away. If your brand isn't naturally cool, don't pretend.</p>
        <p><strong>Don't lecture.</strong> No one wants a brand telling them how to live. Be useful, not preachy.</p>
        <p><strong>Don't spam.</strong> One memorable interaction beats ten annoying ones.</p>
        <p><strong>Don't ignore diversity.</strong> Campuses are diverse. Your ambassadors and approach should reflect that.</p>
        <hr className="my-12" />
        <div className="not-prose">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Want to Reach College Students?</h2>
            <p className="mb-6 text-red-100">Air Fresh runs campus marketing programs at universities nationwide. From ambassador programs to event activations.</p>
            <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              <Link href="/contact">Get Started <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
