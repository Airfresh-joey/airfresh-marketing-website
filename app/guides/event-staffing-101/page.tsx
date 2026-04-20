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
  Target,
  Briefcase,
  FileText,
  Award,
  TrendingUp,
  MessageCircle,
  DollarSign,
  Calendar
} from 'lucide-react';

const tableOfContents = [
  { id: 'intro', title: 'Introduction' },
  { id: 'types', title: 'Types of Event Staff' },
  { id: 'hiring', title: 'Hiring Process' },
  { id: 'training', title: 'Training Best Practices' },
  { id: 'management', title: 'On-Site Management' },
  { id: 'metrics', title: 'Measuring Success' },
  { id: 'download', title: 'Download Full Guide' }
];

const staffTypes = [
  {
    title: 'Brand Ambassadors',
    description: 'Outgoing personalities who engage with customers, share brand messaging, and create memorable interactions.',
    idealFor: 'Product launches, sampling campaigns, trade shows',
    avgRate: '$20-35/hr'
  },
  {
    title: 'Promotional Models',
    description: 'Professional models who represent your brand with polish and presence at premium events.',
    idealFor: 'Luxury brands, auto shows, high-end activations',
    avgRate: '$35-75/hr'
  },
  {
    title: 'Street Teams',
    description: 'High-energy teams that hit the streets to distribute samples, flyers, and create buzz.',
    idealFor: 'Product sampling, guerrilla marketing, local campaigns',
    avgRate: '$18-28/hr'
  },
  {
    title: 'Event Coordinators',
    description: 'Experienced staff who manage logistics, coordinate teams, and ensure smooth operations.',
    idealFor: 'Large-scale events, multi-day activations, complex setups',
    avgRate: '$30-50/hr'
  }
];

const hiringTips = [
  {
    icon: Target,
    title: 'Define Clear Requirements',
    content: 'Create detailed job descriptions with specific skills, experience levels, and personality traits needed for the role.'
  },
  {
    icon: MessageCircle,
    title: 'Conduct Video Interviews',
    content: 'Video interviews reveal communication skills, energy levels, and professionalism that resumes can\'t show.'
  },
  {
    icon: CheckCircle,
    title: 'Check References',
    content: 'Always verify past event experience and speak with previous employers about reliability and performance.'
  },
  {
    icon: Star,
    title: 'Test for Brand Fit',
    content: 'Have candidates role-play customer interactions to assess their natural ability to represent your brand.'
  }
];

const trainingModules = [
  { title: 'Brand Immersion', duration: '2 hours', topics: ['Brand history & values', 'Product knowledge', 'Key messaging'] },
  { title: 'Customer Engagement', duration: '1.5 hours', topics: ['Conversation starters', 'Handling objections', 'Creating connections'] },
  { title: 'Event Logistics', duration: '1 hour', topics: ['Setup procedures', 'Inventory management', 'Reporting requirements'] },
  { title: 'Problem Solving', duration: '1 hour', topics: ['Common scenarios', 'Escalation paths', 'Emergency protocols'] }
];

export default function EventStaffing101Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Event Staffing 101: The Complete Guide",
    "description": "Learn how to hire, train, and manage event staff for successful brand activations.",
    "author": {
      "@type": "Organization",
      "name": "AirFresh Marketing"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AirFresh Marketing"
    }
  };

  return (
    <>
      <SEO
        title="Event Staffing 101: Complete Guide to Hiring & Training | AirFresh Marketing"
        description="Master event staffing with our comprehensive guide. Learn how to hire brand ambassadors, train promotional staff, and manage teams for successful activations."
        canonical="https://www.airfreshmarketing.com/guides/event-staffing-101"
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
              Comprehensive Guide
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Event Staffing 101
            </h1>
            <p className="text-xl text-slate-300 mb-6">
              The complete guide to hiring, training, and managing event staff for successful brand activations and experiential marketing campaigns.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
              <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> 15 min read</span>
              <span className="flex items-center"><Users className="w-4 h-4 mr-1" /> For Marketing Teams</span>
              <span className="flex items-center"><TrendingUp className="w-4 h-4 mr-1" /> Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar TOC */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h4 className="font-semibold text-gray-900 mb-4">Table of Contents</h4>
              <nav className="space-y-2">
                {tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block text-sm text-gray-600 hover:text-orange-600 transition-colors py-1"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
              <div className="mt-8 p-4 bg-orange-50 rounded-lg">
                <p className="text-sm text-gray-700 mb-3">
                  <strong>Download the PDF</strong> for offline access and easy sharing with your team.
                </p>
                <a href="#download">
                  <Button size="sm" className="w-full bg-orange-500 hover:bg-orange-600">
                    Get PDF Version
                  </Button>
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-3xl">
            {/* Introduction */}
            <section id="intro" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 mb-4">
                Your event staff are the face of your brand during activations. They're the difference between a forgettable promotion and a memorable brand experience that drives real results.
              </p>
              <p className="text-gray-700 mb-4">
                After executing over 3,000 events across the country, we've learned what separates great event staffing from the rest. This guide shares those battle-tested strategies so you can build high-performing teams that deliver ROI.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Key Insight</h4>
                    <p className="text-blue-800 text-sm">
                      Companies that invest in proper staff training see 40% higher engagement rates and 25% better lead quality compared to those using untrained staff.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Types of Event Staff */}
            <section id="types" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Event Staff</h2>
              <p className="text-gray-700 mb-6">
                Different events require different skill sets. Here's a breakdown of the main event staff categories:
              </p>
              <div className="space-y-4">
                {staffTypes.map((type, idx) => (
                  <Card key={idx} className="border-gray-200">
                    <CardContent className="p-5">
                      <h3 className="font-semibold text-gray-900 mb-2">{type.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{type.description}</p>
                      <div className="flex flex-wrap gap-4 text-xs">
                        <span className="text-gray-500"><strong>Ideal for:</strong> {type.idealFor}</span>
                        <span className="text-orange-600 font-semibold">{type.avgRate}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Hiring Process */}
            <section id="hiring" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">The Hiring Process</h2>
              <p className="text-gray-700 mb-6">
                A rigorous hiring process is the foundation of great event staffing. Here are the key steps:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {hiringTips.map((tip, idx) => {
                  const Icon = tip.icon;
                  return (
                    <Card key={idx} className="border-gray-200">
                      <CardContent className="p-5">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-orange-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">{tip.title}</h3>
                            <p className="text-gray-600 text-sm">{tip.content}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </section>

            {/* Training Best Practices */}
            <section id="training" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Training Best Practices</h2>
              <p className="text-gray-700 mb-6">
                Comprehensive training is non-negotiable. Here's our recommended training framework:
              </p>
              <div className="space-y-4">
                {trainingModules.map((module, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-gray-900">{module.title}</h3>
                      <span className="text-sm text-orange-600 font-medium">{module.duration}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {module.topics.map((topic, tidx) => (
                        <span key={tidx} className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          <CheckCircle className="w-3 h-3 mr-1 text-green-500" />
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* On-Site Management */}
            <section id="management" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">On-Site Management</h2>
              <p className="text-gray-700 mb-4">
                Even the best-trained staff need strong on-site management to perform at their peak. Key principles:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Arrive early to brief staff and address questions',
                  'Establish clear communication channels (group texts, walkie-talkies)',
                  'Conduct mid-event check-ins to maintain energy and address issues',
                  'Document everything with photos and real-time notes',
                  'End with a debrief to capture learnings for next time'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Measuring Success */}
            <section id="metrics" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Measuring Success</h2>
              <p className="text-gray-700 mb-6">
                Track these KPIs to evaluate your event staffing performance:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { metric: 'Engagement Rate', example: '500+ interactions/day' },
                  { metric: 'Lead Capture', example: '100+ qualified leads' },
                  { metric: 'Sample Distribution', example: '1,000+ samples' },
                  { metric: 'Brand Sentiment', example: '95%+ positive' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-sm font-semibold text-gray-900 mb-1">{item.metric}</div>
                    <div className="text-xs text-orange-600">{item.example}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Download CTA */}
            <section id="download" className="mb-12">
              <ResourceEmailCapture
                resourceTitle="Event Staffing 101 Complete Guide"
                resourceType="guide"
              />
            </section>

            {/* Related Resources */}
            <section className="border-t pt-8">
              <h3 className="font-semibold text-gray-900 mb-4">Related Resources</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/guides/brand-ambassador-hiring-guide" className="group">
                  <Card className="border-gray-200 hover:border-orange-300 transition-colors">
                    <CardContent className="p-4">
                      <h4 className="font-medium text-gray-900 group-hover:text-orange-600">Brand Ambassador Hiring Guide</h4>
                      <p className="text-sm text-gray-600">Deep dive into finding top talent</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/checklist/event-planning" className="group">
                  <Card className="border-gray-200 hover:border-orange-300 transition-colors">
                    <CardContent className="p-4">
                      <h4 className="font-medium text-gray-900 group-hover:text-orange-600">Event Planning Checklist</h4>
                      <p className="text-sm text-gray-600">Never miss a detail again</p>
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
