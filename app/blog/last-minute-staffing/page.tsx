import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Last-Minute Event Staffing: Emergency Coverage | Air Fresh Marketing',
  description: 'Need event staff urgently? Here\'s how we handle last-minute and emergency staffing requests.',
  keywords: 'last minute event staffing, emergency event staff, urgent staffing, same day event staff, rush staffing',
};

export default function LastMinuteStaffing() {
  return (
    <article className="pt-16 min-h-screen bg-white">
      <header className="bg-gradient-to-r from-amber-500 to-red-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-100 mb-4">August 18, 2024 · 6 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Last-Minute Event Staffing: When Plans Change</h1>
          <p className="text-xl text-amber-100">Staff cancelled? Event moved up? We've got you.</p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <p>Events don't always go according to plan. Staff get sick. Headcount increases. Timelines accelerate. When you need staff fast, you need a partner who can deliver.</p>
        <h2>Why Last-Minute Happens</h2>
        <ul>
          <li>Original staffing agency falls through</li>
          <li>Event scope expands unexpectedly</li>
          <li>Key staff have emergencies</li>
          <li>Client adds last-minute requirements</li>
          <li>No-shows day of event</li>
        </ul>
        <h2>Our Rush Capabilities</h2>
        <p><strong>Same-day staffing:</strong> Available in major markets for simple roles.</p>
        <p><strong>24-48 hour turnaround:</strong> Most markets, most roles.</p>
        <p><strong>Backup network:</strong> Pre-vetted staff ready for emergency deployment.</p>
        <p><strong>On-call relationships:</strong> Staff who prioritize last-minute opportunities.</p>
        <h2>What We Need</h2>
        <ul>
          <li>Clear role description (even brief)</li>
          <li>Location and timing</li>
          <li>Dress code requirements</li>
          <li>Any non-negotiable qualifications</li>
          <li>Realistic expectations</li>
        </ul>
        <h2>Rush Pricing</h2>
        <p>Last-minute staffing costs more - we're transparent about that. Rush fees typically add 25-50% depending on timeline and complexity. But getting quality staff beats scrambling.</p>
        <hr className="my-12" />
        <div className="not-prose">
          <div className="bg-gradient-to-r from-amber-500 to-red-600 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Need Staff NOW?</h2>
            <p className="mb-6 text-amber-100">Air Fresh handles emergency and last-minute staffing requests.</p>
            <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              <Link href="/contact">Call Us: 303-720-6060 <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
