import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Corporate Event Staffing | Air Fresh Marketing',
  description: 'Corporate events require polished, professional staff. Here\'s how to staff galas, meetings, and corporate functions.',
  keywords: 'corporate event staffing, corporate event staff, gala staffing, corporate function staff, meeting staff',
};

export default function CorporateEventStaffing() {
  return (
    <article className="pt-16 min-h-screen bg-white">
      <header className="bg-gradient-to-r from-gray-800 to-slate-900 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-400 mb-4">January 26, 2024 · 7 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Corporate Event Staffing: Professional Excellence</h1>
          <p className="text-xl text-gray-400">When your company's reputation is on the line.</p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <p>Corporate events reflect your company. Whether it's a client gala, shareholder meeting, or employee celebration, the staff you hire becomes an extension of your brand.</p>
        <h2>Corporate Event Types</h2>
        <ul>
          <li><strong>Galas and dinners:</strong> Formal, high-touch hospitality</li>
          <li><strong>Shareholder meetings:</strong> Registration, logistics, AV support</li>
          <li><strong>Product launches:</strong> Brand representation and demos</li>
          <li><strong>Holiday parties:</strong> Creating memorable experiences</li>
          <li><strong>Team offsites:</strong> Facilitation and logistics support</li>
        </ul>
        <h2>Staff Qualities</h2>
        <p><strong>Polished presentation:</strong> Appropriate dress, grooming, demeanor.</p>
        <p><strong>Discretion:</strong> Confidentiality in corporate settings.</p>
        <p><strong>Adaptability:</strong> Handling executives and varied personalities.</p>
        <p><strong>Problem-solving:</strong> Quiet competence under pressure.</p>
        <h2>Common Roles</h2>
        <ul>
          <li>Registration and check-in</li>
          <li>Hospitality and hosting</li>
          <li>Coat check and valet coordination</li>
          <li>A/V and presentation support</li>
          <li>Guest services and wayfinding</li>
        </ul>
        <hr className="my-12" />
        <div className="not-prose">
          <div className="bg-gradient-to-r from-gray-800 to-slate-900 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Corporate Event Coming?</h2>
            <p className="mb-6 text-gray-400">Air Fresh provides polished corporate event staff.</p>
            <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              <Link href="/contact">Get a Quote <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
