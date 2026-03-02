import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gaming and Esports Marketing | Air Fresh Marketing',
  description: 'Gaming audiences are young, engaged, and ad-resistant. Here\'s how to reach gamers through experiential marketing.',
  keywords: 'gaming marketing, esports marketing, video game events, gaming conventions, esports activations',
};

export default function GamingMarketing() {
  return (
    <article className="pt-16 min-h-screen bg-white">
      <header className="bg-gradient-to-r from-violet-600 to-purple-700 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-violet-200 mb-4">April 8, 2025 · 9 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Gaming & Esports Marketing: Reaching the Next Generation</h1>
          <p className="text-xl text-violet-200">Gamers spot fake enthusiasm instantly. Authenticity wins.</p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <p>Gaming is no longer niche. Esports fills stadiums. Streaming reaches millions. But gamers are notoriously skeptical of brands that don't genuinely understand the culture.</p>
        <h2>Where to Reach Gamers</h2>
        <ul>
          <li><strong>Gaming conventions:</strong> PAX, E3, TwitchCon - massive concentrated audiences</li>
          <li><strong>Esports tournaments:</strong> Live events with passionate fans</li>
          <li><strong>LAN parties:</strong> Smaller, engaged community gatherings</li>
          <li><strong>Gaming cafes/bars:</strong> Local community hubs</li>
          <li><strong>College esports:</strong> Growing competitive scene</li>
        </ul>
        <h2>What Works</h2>
        <p><strong>Playable experiences:</strong> Let them play. Demo stations, tournaments, competitions.</p>
        <p><strong>Relevant giveaways:</strong> Gaming peripherals, in-game items, exclusive content - not generic swag.</p>
        <p><strong>Creator partnerships:</strong> Working with streamers and content creators who have community trust.</p>
        <p><strong>Community contribution:</strong> Sponsoring tournaments, supporting teams, adding value to the ecosystem.</p>
        <h2>Staff Requirements</h2>
        <ul>
          <li>Actually plays games (no faking)</li>
          <li>Knows the specific games being marketed</li>
          <li>Speaks the language (literally - gaming has its own vocabulary)</li>
          <li>Can compete (or at least not embarrass the brand)</li>
        </ul>
        <hr className="my-12" />
        <div className="not-prose">
          <div className="bg-gradient-to-r from-violet-600 to-purple-700 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Gaming Event Staff?</h2>
            <p className="mb-6 text-violet-200">Air Fresh provides authentic gaming ambassadors who actually play.</p>
            <Button asChild size="lg" className="bg-white text-violet-700 hover:bg-gray-100">
              <Link href="/contact">Get a Quote <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
