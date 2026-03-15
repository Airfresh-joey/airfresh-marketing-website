'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import ResourceEmailCapture from '@/components/ResourceEmailCapture';
import {
  BookOpen,
  FileText,
  ClipboardList,
  Download,
  ArrowRight,
  Users,
  Calendar,
  Award,
  Sparkles,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

const resources = [
  {
    title: 'Event Staffing 101',
    description: 'The complete guide to hiring, training, and managing event staff for successful brand activations.',
    type: 'guide' as const,
    icon: Users,
    href: '/guides/event-staffing-101',
    category: 'Guide',
    readTime: '15 min read',
    featured: true
  },
  {
    title: 'Brand Ambassador Hiring Guide',
    description: 'Learn how to find, vet, and hire top brand ambassadors who will represent your brand with excellence.',
    type: 'guide' as const,
    icon: Award,
    href: '/guides/brand-ambassador-hiring-guide',
    category: 'Guide',
    readTime: '12 min read',
    featured: true
  },
  {
    title: 'Event Planning Checklist',
    description: 'A comprehensive checklist to ensure nothing falls through the cracks at your next event or activation.',
    type: 'checklist' as const,
    icon: ClipboardList,
    href: '/checklist/event-planning',
    category: 'Checklist',
    readTime: '5 min read',
    featured: false
  }
];

const stats = [
  { number: '3,000+', label: 'Events Executed' },
  { number: '500+', label: 'Brand Partners' },
  { number: '15+', label: 'Years Experience' },
  { number: '50', label: 'States Covered' }
];

export default function ResourcesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Event Marketing Resources | AirFresh Marketing",
    "description": "Free guides, checklists, and resources to help you plan successful brand activations and experiential marketing campaigns.",
    "publisher": {
      "@type": "Organization",
      "name": "AirFresh Marketing"
    }
  };

  return (
    <>
      <SEO
        title="Free Event Marketing Resources & Guides | AirFresh Marketing"
        description="Download free guides on event staffing, brand ambassador hiring, and event planning. Expert resources from 15+ years of experiential marketing experience."
        canonical="https://airfreshmarketing.com/resources"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center px-4 py-2 bg-orange-500/20 rounded-full text-orange-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Free Resources
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Event Marketing{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                Resources
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Expert guides, actionable checklists, and proven strategies from 15+ years of running successful brand activations and experiential marketing campaigns.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Free Guides & Checklists
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Download our most popular resources to level up your event marketing game.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {resources.map((resource, idx) => {
              const Icon = resource.icon;
              return (
                <Card 
                  key={idx} 
                  className={`group hover:shadow-xl transition-all duration-300 border-2 ${
                    resource.featured ? 'border-orange-200 hover:border-orange-400' : 'border-gray-100 hover:border-gray-300'
                  }`}
                >
                  <CardContent className="p-6">
                    {resource.featured && (
                      <span className="inline-flex items-center px-2 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded mb-4">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Popular
                      </span>
                    )}
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-orange-600" />
                    </div>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      {resource.category} • {resource.readTime}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 group-hover:text-orange-600 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {resource.description}
                    </p>
                    <Link href={resource.href}>
                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white group">
                        <Download className="w-4 h-4 mr-2" />
                        Get Free {resource.category}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Get Event Marketing Tips in Your Inbox
              </h2>
              <p className="text-gray-600">
                Join 5,000+ event marketers getting weekly strategies, case studies, and industry insights.
              </p>
            </div>
            <ResourceEmailCapture
              resourceTitle="Event Marketing Newsletter"
              resourceType="guide"
              variant="inline"
            />
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Trust Our Resources?
              </h2>
              <p className="text-lg text-gray-600">
                Our guides are built from real-world experience, not theory.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: CheckCircle,
                  title: 'Battle-Tested',
                  description: 'Every strategy comes from 3,000+ events we\'ve executed across the country.'
                },
                {
                  icon: Users,
                  title: 'Industry Experts',
                  description: 'Created by a team with 15+ years of experiential marketing experience.'
                },
                {
                  icon: TrendingUp,
                  title: 'Proven Results',
                  description: 'These exact methods have driven millions in ROI for Fortune 500 brands.'
                }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-orange-500 to-amber-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Execute Your Next Event?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Let's turn these strategies into real results. Get a free consultation with our event marketing experts.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50">
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
