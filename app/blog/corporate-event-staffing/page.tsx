import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Corporate Event Staffing: Making Meetings Memorable | Air Fresh Marketing',
  description: 'Corporate events require professional, polished staff. From conferences to holiday parties, here\'s how to staff corporate events right.',
  keywords: 'corporate event staffing, corporate events, business event staff, company event staffing, meeting staff, corporate hospitality',
};

export default function CorporateEvents() {
  return (
    <article className="pt-16 min-h-screen bg-white">
      <header className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-300 mb-4">July 8, 2025 · 7 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Corporate Event Staffing: The Professional Touch</h1>
          <p className="text-xl text-gray-300">Corporate events reflect your company. Staff accordingly.</p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <p>Corporate events are different. The stakes are higher. The audience is more discerning. The expectation is polished professionalism. That means every staff member needs to operate at a higher level.</p>
        <h2>Corporate Event Types</h2>
        <ul>
          <li><strong>Conferences and conventions</strong> - Registration, ushering, session support</li>
          <li><strong>Product launches</strong> - Brand presentation, demos, media handling</li>
          <li><strong>Client events</strong> - Hospitality, relationship building, VIP management</li>
          <li><strong>Company parties</strong> - Social hosting, activity facilitation</li>
          <li><strong>Award ceremonies</strong> - Formal protocol, stage management</li>
          <li><strong>Shareholder meetings</strong> - Registration, crowd control, A/V support</li>
        </ul>
        <h2>What "Professional" Actually Means</h2>
        <ul>
          <li><strong>Appearance:</strong> Business attire, polished grooming, brand-appropriate presentation</li>
          <li><strong>Communication:</strong> Articulate, appropriate language, ability to handle executives</li>
          <li><strong>Discretion:</strong> What happens at corporate events stays there</li>
          <li><strong>Reliability:</strong> Zero tolerance for lateness or no-shows</li>
          <li><strong>Adaptability:</strong> Handle changes without visible stress</li>
        </ul>
        <h2>Roles We Staff</h2>
        <ul>
          <li>Registration and check-in</li>
          <li>Greeters and hosts</li>
          <li>Ushers and wayfinding</li>
          <li>Coat check and bag check</li>
          <li>A/V and tech support</li>
          <li>Event coordinators</li>
          <li>Brand ambassadors (product-focused events)</li>
        </ul>
        <h2>The Corporate Premium</h2>
        <p>Corporate event staff costs more than standard event staff. You're paying for vetting, experience, and reliability. This isn't where you cut corners - a single unprofessional interaction reflects on your entire company.</p>
        <hr className="my-12" />
        <div className="not-prose">
          <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Need Corporate Event Staff?</h2>
            <p className="mb-6 text-gray-300">Air Fresh provides professional staff for corporate events of all types.</p>
            <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              <Link href="/contact">Get a Quote <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
