'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SEO from '@/components/SEO';
import ResourceEmailCapture from '@/components/ResourceEmailCapture';
import {
  ArrowLeft,
  Clock,
  Users,
  CheckCircle,
  AlertCircle,
  Star,
  Search,
  MessageCircle,
  UserCheck,
  FileText,
  Award,
  TrendingUp,
  XCircle,
  Heart,
  Zap,
  Target
} from 'lucide-react';

const tableOfContents = [
  { id: 'why', title: 'Why Great Ambassadors Matter' },
  { id: 'traits', title: 'Key Traits to Look For' },
  { id: 'sourcing', title: 'Where to Find Talent' },
  { id: 'screening', title: 'Screening Process' },
  { id: 'interview', title: 'Interview Questions' },
  { id: 'redflags', title: 'Red Flags to Avoid' },
  { id: 'download', title: 'Download Full Guide' }
];

const keyTraits = [
  { trait: 'Natural Charisma', icon: Star, description: 'Genuinely enjoys talking to strangers and puts people at ease' },
  { trait: 'Reliability', icon: CheckCircle, description: 'Shows up on time, every time, and follows through on commitments' },
  { trait: 'Adaptability', icon: Zap, description: 'Handles unexpected situations with grace and quick thinking' },
  { trait: 'Brand Enthusiasm', icon: Heart, description: 'Naturally excited about representing products and engaging consumers' },
  { trait: 'Professional Presence', icon: Award, description: 'Well-groomed, articulate, and appropriate for the brand image' },
  { trait: 'Active Listening', icon: MessageCircle, description: 'Genuinely engages with consumers rather than just talking at them' }
];

const sourcingChannels = [
  { channel: 'Staffing Agencies', pros: 'Pre-vetted talent, handles logistics', cons: 'Higher cost, less control', quality: 'Medium-High' },
  { channel: 'Social Media', pros: 'Direct access, see personality', cons: 'Time-intensive screening', quality: 'Variable' },
  { channel: 'University Job Boards', pros: 'Young, energetic, affordable', cons: 'Less experience, availability issues', quality: 'Medium' },
  { channel: 'Industry Referrals', pros: 'Trusted recommendations', cons: 'Limited pool', quality: 'High' },
  { channel: 'Acting/Modeling Schools', pros: 'Polished presentation', cons: 'May lack sales instincts', quality: 'Medium-High' }
];

const interviewQuestions = [
  { question: 'Tell me about a time you turned a stranger into a fan of something.', lookFor: 'Natural storytelling ability, genuine enthusiasm' },
  { question: 'How would you handle someone who\'s clearly not interested in what you\'re promoting?', lookFor: 'Grace under rejection, persistence without pushiness' },
  { question: 'Describe your most challenging event experience and how you handled it.', lookFor: 'Problem-solving skills, composure under pressure' },
  { question: 'What do you know about our brand, and what excites you about representing us?', lookFor: 'Preparation, genuine interest, brand fit' },
  { question: 'Walk me through how you\'d approach someone at an event.', lookFor: 'Conversation skills, approachability, sales instincts' }
];

const redFlags = [
  'Arrives late to the interview without acknowledgment',
  'Can\'t provide references from previous brand work',
  'Shows more interest in perks than the actual work',
  'Negative comments about previous employers/brands',
  'Poor eye contact or phone-distracted during interview',
  'Vague or inconsistent work history',
  'Unable to role-play a simple consumer interaction'
];

export default function BrandAmbassadorHiringGuidePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Brand Ambassador Hiring Guide",
    "description": "How to find, vet, and hire top brand ambassadors for experiential marketing.",
    "author": { "@type": "Organization", "name": "AirFresh Marketing" },
    "publisher": { "@type": "Organization", "name": "AirFresh Marketing" }
  };

  return (
    <>
      <SEO
        title="Brand Ambassador Hiring Guide | How to Find & Hire Top Talent"
        description="Learn how to recruit and hire exceptional brand ambassadors. Expert tips on sourcing, screening, and selecting talent that will represent your brand with excellence."
        canonical="https://www.airfreshmarketing.com/guides/brand-ambassador-hiring-guide"
        structuredData={structuredData}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Link href="/resources" className="inline-flex items-center text-orange-300 hover:text-orange-200 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Resources
          </Link>
          <div className="max-w-3xl">
            <span className="inline-flex items-center px-3 py-1 bg-orange-500/20 rounded-full text-orange-300 text-sm font-medium mb-4">
              <FileText className="w-4 h-4 mr-2" />
              Hiring Guide
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Brand Ambassador Hiring Guide
            </h1>
            <p className="text-xl text-slate-300 mb-6">
              How to find, evaluate, and hire exceptional brand ambassadors who will represent your brand with passion and professionalism.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
              <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> 12 min read</span>
              <span className="flex items-center"><Users className="w-4 h-4 mr-1" /> For Hiring Managers</span>
              <span className="flex items-center"><TrendingUp className="w-4 h-4 mr-1" /> Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h4 className="font-semibold text-gray-900 mb-4">Table of Contents</h4>
              <nav className="space-y-2">
                {tableOfContents.map((item) => (
                  <a key={item.id} href={`#${item.id}`} className="block text-sm text-gray-600 hover:text-orange-600 py-1">
                    {item.title}
                  </a>
                ))}
              </nav>
              <div className="mt-8 p-4 bg-orange-50 rounded-lg">
                <p className="text-sm text-gray-700 mb-3">
                  <strong>Download the PDF</strong> with interview scorecards and checklists.
                </p>
                <a href="#download">
                  <Button size="sm" className="w-full bg-orange-500 hover:bg-orange-600">
                    Get PDF + Templates
                  </Button>
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-3xl">
            {/* Why Great Ambassadors Matter */}
            <section id="why" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Great Brand Ambassadors Matter</h2>
              <p className="text-gray-700 mb-4">
                Your brand ambassadors are your brand made human. In the few minutes they interact with a potential customer, they can create fans for life—or turn people away forever.
              </p>
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-xl p-6 my-6">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-orange-600">83%</div>
                    <div className="text-sm text-gray-600">of consumers trust recommendations from brand ambassadors</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600">4.5x</div>
                    <div className="text-sm text-gray-600">higher engagement vs. traditional advertising</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600">37%</div>
                    <div className="text-sm text-gray-600">higher conversion when staff matches brand values</div>
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                The ROI difference between good and great brand ambassadors is significant. That's why your hiring process matters so much.
              </p>
            </section>

            {/* Key Traits */}
            <section id="traits" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">6 Key Traits to Look For</h2>
              <p className="text-gray-700 mb-6">
                Skills can be taught, but these core traits are essential foundations:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {keyTraits.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <Card key={idx} className="border-gray-200">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="w-4 h-4 text-orange-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 text-sm">{item.trait}</h3>
                            <p className="text-gray-600 text-xs mt-1">{item.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </section>

            {/* Sourcing */}
            <section id="sourcing" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Where to Find Top Talent</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 font-semibold text-gray-900">Channel</th>
                      <th className="text-left py-3 font-semibold text-gray-900">Pros</th>
                      <th className="text-left py-3 font-semibold text-gray-900">Cons</th>
                      <th className="text-left py-3 font-semibold text-gray-900">Quality</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sourcingChannels.map((item, idx) => (
                      <tr key={idx} className="border-b border-gray-100">
                        <td className="py-3 font-medium text-gray-900">{item.channel}</td>
                        <td className="py-3 text-gray-600">{item.pros}</td>
                        <td className="py-3 text-gray-600">{item.cons}</td>
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            item.quality === 'High' ? 'bg-green-100 text-green-700' :
                            item.quality === 'Medium-High' ? 'bg-blue-100 text-blue-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {item.quality}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Screening Process */}
            <section id="screening" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">The Screening Process</h2>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Resume Review', desc: 'Look for relevant experience in events, sales, or customer service. Gaps are okay if explained.' },
                  { step: '2', title: 'Phone Screen', desc: '10-minute call to assess communication skills and enthusiasm. Energy should come through the phone.' },
                  { step: '3', title: 'Video Interview', desc: 'See how they present on camera. Critical for modern activations with social content.' },
                  { step: '4', title: 'In-Person Role Play', desc: 'Have them pitch your product to you. This reveals everything.' },
                  { step: '5', title: 'Reference Check', desc: 'Always verify. Call at least two previous employers or clients.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Interview Questions */}
            <section id="interview" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Interview Questions</h2>
              <div className="space-y-4">
                {interviewQuestions.map((item, idx) => (
                  <Card key={idx} className="border-gray-200">
                    <CardContent className="p-4">
                      <p className="font-medium text-gray-900 mb-2">"{item.question}"</p>
                      <p className="text-sm text-orange-600"><strong>Look for:</strong> {item.lookFor}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Red Flags */}
            <section id="redflags" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Red Flags to Watch For</h2>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <ul className="space-y-3">
                  {redFlags.map((flag, idx) => (
                    <li key={idx} className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-red-800">{flag}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Download CTA */}
            <section id="download" className="mb-12">
              <ResourceEmailCapture
                resourceTitle="Brand Ambassador Hiring Guide with Templates"
                resourceType="guide"
              />
            </section>

            {/* Related */}
            <section className="border-t pt-8">
              <h3 className="font-semibold text-gray-900 mb-4">Related Resources</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/guides/event-staffing-101" className="group">
                  <Card className="border-gray-200 hover:border-orange-300 transition-colors">
                    <CardContent className="p-4">
                      <h4 className="font-medium text-gray-900 group-hover:text-orange-600">Event Staffing 101</h4>
                      <p className="text-sm text-gray-600">Complete guide to managing event staff</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/checklist/event-planning" className="group">
                  <Card className="border-gray-200 hover:border-orange-300 transition-colors">
                    <CardContent className="p-4">
                      <h4 className="font-medium text-gray-900 group-hover:text-orange-600">Event Planning Checklist</h4>
                      <p className="text-sm text-gray-600">Never miss a detail</p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
