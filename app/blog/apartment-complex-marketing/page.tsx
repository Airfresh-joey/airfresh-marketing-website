import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Apartment Complex Marketing | Air Fresh Marketing',
  description: 'Reach renters where they live. Here\'s how to execute marketing at apartment complexes and multi-family housing.',
  keywords: 'apartment marketing, apartment complex marketing, renter marketing, multi-family marketing, residential marketing',
};

export default function ApartmentMarketing() {
  return (
    <article className="pt-16 min-h-screen bg-white">
      <header className="bg-gradient-to-r from-teal-600 to-cyan-700 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-teal-200 mb-4">October 16, 2023 · 6 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Apartment Complex Marketing</h1>
          <p className="text-xl text-teal-200">Dense populations. Defined demographics. Direct access.</p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <p>Apartment complexes concentrate specific demographics in defined locations. Property management relationships can unlock direct access to these communities.</p>
        <h2>Access Points</h2>
        <ul>
          <li><strong>Leasing offices:</strong> New move-in sampling</li>
          <li><strong>Common areas:</strong> Pools, gyms, clubhouses</li>
          <li><strong>Resident events:</strong> Planned community activities</li>
          <li><strong>Package rooms:</strong> High-traffic pickup areas</li>
          <li><strong>Move-in gifts:</strong> Welcome packages for new residents</li>
        </ul>
        <h2>Property Types</h2>
        <p><strong>Luxury high-rise:</strong> High income, urban professionals.</p>
        <p><strong>Class A suburban:</strong> Young families, professionals.</p>
        <p><strong>Student housing:</strong> College demographics.</p>
        <p><strong>Workforce housing:</strong> Value-focused consumers.</p>
        <h2>Product Categories</h2>
        <ul>
          <li>Home services (internet, streaming, delivery)</li>
          <li>Food delivery and meal kits</li>
          <li>Household products</li>
          <li>Personal care</li>
          <li>Local services</li>
        </ul>
        <h2>Working With Properties</h2>
        <ul>
          <li>Property management company partnerships</li>
          <li>Offer value to residents (not just sales)</li>
          <li>Respect resident privacy</li>
          <li>Coordinate timing with property events</li>
        </ul>
        <hr className="my-12" />
        <div className="not-prose">
          <div className="bg-gradient-to-r from-teal-600 to-cyan-700 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Apartment Programs?</h2>
            <p className="mb-6 text-teal-200">Air Fresh executes apartment marketing programs.</p>
            <Button asChild size="lg" className="bg-white text-cyan-700 hover:bg-gray-100">
              <Link href="/contact">Get a Quote <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
