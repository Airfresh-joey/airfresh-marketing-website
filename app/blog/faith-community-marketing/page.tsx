import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Church and Religious Venue Marketing | Air Fresh Marketing',
  description: 'Faith-based communities offer unique marketing opportunities. Here\'s how to respectfully engage with religious venues.',
  keywords: 'church marketing, faith based marketing, religious marketing, community marketing, church events',
};

export default function ChurchMarketing() {
  return (
    <article className="pt-16 min-h-screen bg-white">
      <header className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-indigo-200 mb-4">September 6, 2023 · 6 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Faith-Based Community Marketing</h1>
          <p className="text-xl text-indigo-200">Trust-based communities. Respectful engagement.</p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <p>Faith communities represent tight-knit groups with high trust among members. Marketing here requires genuine respect for the community and alignment with their values.</p>
        <h2>Venue Types</h2>
        <ul>
          <li><strong>Churches:</strong> Various denominations and sizes</li>
          <li><strong>Synagogues:</strong> Jewish community centers</li>
          <li><strong>Mosques:</strong> Muslim communities</li>
          <li><strong>Temples:</strong> Various faith traditions</li>
          <li><strong>Community centers:</strong> Faith-affiliated spaces</li>
        </ul>
        <h2>Opportunity Types</h2>
        <p><strong>Community events:</strong> Festivals, fairs, celebrations.</p>
        <p><strong>Health ministries:</strong> Wellness programs for members.</p>
        <p><strong>Family events:</strong> Youth programs, family activities.</p>
        <p><strong>Community service:</strong> Outreach and charitable events.</p>
        <h2>Key Principles</h2>
        <ul>
          <li>Genuine respect for faith traditions</li>
          <li>Value alignment with community</li>
          <li>Permission from leadership</li>
          <li>Appropriate for family audiences</li>
          <li>Service orientation over sales</li>
        </ul>
        <h2>Product Fit</h2>
        <ul>
          <li>Family-focused products</li>
          <li>Health and wellness</li>
          <li>Financial services (with integrity focus)</li>
          <li>Community services</li>
        </ul>
        <hr className="my-12" />
        <div className="not-prose">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Faith Community Activation?</h2>
            <p className="mb-6 text-indigo-200">Air Fresh approaches faith communities with respect.</p>
            <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
              <Link href="/contact">Let's Talk <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
