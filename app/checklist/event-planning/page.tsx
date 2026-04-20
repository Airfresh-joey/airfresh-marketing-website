'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import ResourceEmailCapture from '@/components/ResourceEmailCapture';
import { useState } from 'react';
import {
  ArrowLeft,
  Clock,
  CheckCircle,
  Circle,
  Calendar,
  ClipboardList,
  Users,
  Package,
  Megaphone,
  FileText,
  TrendingUp,
  Printer,
  Download
} from 'lucide-react';

interface ChecklistItem {
  id: string;
  text: string;
  checked: boolean;
}

interface ChecklistSection {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  timeline: string;
  items: ChecklistItem[];
}

const initialChecklist: ChecklistSection[] = [
  {
    title: '4-6 Weeks Before',
    icon: Calendar,
    timeline: 'Planning Phase',
    items: [
      { id: '1a', text: 'Define event objectives and KPIs', checked: false },
      { id: '1b', text: 'Set budget and get approval', checked: false },
      { id: '1c', text: 'Choose event date, time, and location', checked: false },
      { id: '1d', text: 'Secure necessary permits and insurance', checked: false },
      { id: '1e', text: 'Create event brief with brand guidelines', checked: false },
      { id: '1f', text: 'Design booth/activation concept', checked: false },
      { id: '1g', text: 'Order custom signage and materials', checked: false },
    ]
  },
  {
    title: '2-4 Weeks Before',
    icon: Users,
    timeline: 'Staffing & Logistics',
    items: [
      { id: '2a', text: 'Hire and confirm event staff', checked: false },
      { id: '2b', text: 'Schedule staff training sessions', checked: false },
      { id: '2c', text: 'Order product samples/giveaways', checked: false },
      { id: '2d', text: 'Confirm venue details and load-in times', checked: false },
      { id: '2e', text: 'Arrange transportation and lodging if needed', checked: false },
      { id: '2f', text: 'Create staff schedule with contact info', checked: false },
      { id: '2g', text: 'Prepare talking points and FAQ document', checked: false },
    ]
  },
  {
    title: '1 Week Before',
    icon: Package,
    timeline: 'Final Preparations',
    items: [
      { id: '3a', text: 'Conduct final staff training/run-through', checked: false },
      { id: '3b', text: 'Confirm all shipments and deliveries', checked: false },
      { id: '3c', text: 'Create packing list and inventory check', checked: false },
      { id: '3d', text: 'Prepare lead capture tools (tablets, forms)', checked: false },
      { id: '3e', text: 'Brief team on emergency procedures', checked: false },
      { id: '3f', text: 'Confirm weather backup plan if outdoor', checked: false },
      { id: '3g', text: 'Send reminder emails to all staff', checked: false },
    ]
  },
  {
    title: 'Day Before',
    icon: ClipboardList,
    timeline: 'Pre-Event',
    items: [
      { id: '4a', text: 'Charge all devices and backup batteries', checked: false },
      { id: '4b', text: 'Pack emergency kit (tape, scissors, markers)', checked: false },
      { id: '4c', text: 'Print staff schedules and event briefs', checked: false },
      { id: '4d', text: 'Confirm staff arrival times via text', checked: false },
      { id: '4e', text: 'Review weather forecast one more time', checked: false },
      { id: '4f', text: 'Prepare petty cash/expense tracking', checked: false },
    ]
  },
  {
    title: 'Event Day',
    icon: Megaphone,
    timeline: 'Execution',
    items: [
      { id: '5a', text: 'Arrive early for setup (minimum 2 hours)', checked: false },
      { id: '5b', text: 'Brief staff before doors open', checked: false },
      { id: '5c', text: 'Test all technology (tablets, speakers, etc.)', checked: false },
      { id: '5d', text: 'Document setup with photos', checked: false },
      { id: '5e', text: 'Monitor inventory throughout event', checked: false },
      { id: '5f', text: 'Conduct mid-event team check-in', checked: false },
      { id: '5g', text: 'Capture content (photos, videos, testimonials)', checked: false },
      { id: '5h', text: 'Track leads and engagement metrics', checked: false },
    ]
  },
  {
    title: 'Post-Event',
    icon: TrendingUp,
    timeline: 'Follow-Up',
    items: [
      { id: '6a', text: 'Conduct immediate team debrief', checked: false },
      { id: '6b', text: 'Pack up and inventory remaining materials', checked: false },
      { id: '6c', text: 'Send thank you messages to staff', checked: false },
      { id: '6d', text: 'Export and backup all lead data', checked: false },
      { id: '6e', text: 'Process and organize event photos', checked: false },
      { id: '6f', text: 'Send leads to sales team within 24 hours', checked: false },
      { id: '6g', text: 'Create event recap report with metrics', checked: false },
      { id: '6h', text: 'Document lessons learned for next time', checked: false },
    ]
  }
];

export default function EventPlanningChecklistPage() {
  const [checklist, setChecklist] = useState<ChecklistSection[]>(initialChecklist);

  const toggleItem = (sectionIndex: number, itemId: string) => {
    setChecklist(prev => prev.map((section, idx) => {
      if (idx !== sectionIndex) return section;
      return {
        ...section,
        items: section.items.map(item => 
          item.id === itemId ? { ...item, checked: !item.checked } : item
        )
      };
    }));
  };

  const totalItems = checklist.reduce((acc, section) => acc + section.items.length, 0);
  const completedItems = checklist.reduce((acc, section) => 
    acc + section.items.filter(item => item.checked).length, 0
  );
  const progress = Math.round((completedItems / totalItems) * 100);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Event Planning Checklist",
    "description": "Comprehensive checklist for planning successful brand activations and experiential marketing events.",
    "step": checklist.map((section, idx) => ({
      "@type": "HowToSection",
      "name": section.title,
      "position": idx + 1,
      "itemListElement": section.items.map((item, iidx) => ({
        "@type": "HowToStep",
        "position": iidx + 1,
        "text": item.text
      }))
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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
              <ClipboardList className="w-4 h-4 mr-2" />
              Interactive Checklist
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Event Planning Checklist
            </h1>
            <p className="text-xl text-slate-300 mb-6">
              A comprehensive, interactive checklist to ensure nothing falls through the cracks at your next event or brand activation.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
              <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> 5 min read</span>
              <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-1" /> {totalItems} action items</span>
              <span className="flex items-center"><TrendingUp className="w-4 h-4 mr-1" /> Interactive</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-900">Your Progress</h3>
              <span className="text-orange-600 font-bold">{completedItems} of {totalItems} complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-orange-500 to-amber-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between mt-4">
              <Button variant="outline" size="sm" onClick={() => window.print()}>
                <Printer className="w-4 h-4 mr-2" />
                Print Checklist
              </Button>
              <a href="#download">
                <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Checklist Sections */}
        <div className="max-w-4xl mx-auto space-y-6">
          {checklist.map((section, sectionIdx) => {
            const Icon = section.icon;
            const sectionCompleted = section.items.filter(i => i.checked).length;
            const sectionTotal = section.items.length;
            
            return (
              <Card key={section.title} className="border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-slate-50 to-orange-50 border-b border-gray-200 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <h2 className="font-bold text-gray-900">{section.title}</h2>
                        <span className="text-sm text-gray-500">{section.timeline}</span>
                      </div>
                    </div>
                    <span className={`text-sm font-medium ${
                      sectionCompleted === sectionTotal ? 'text-green-600' : 'text-gray-500'
                    }`}>
                      {sectionCompleted}/{sectionTotal}
                    </span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li 
                        key={item.id}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                        onClick={() => toggleItem(sectionIdx, item.id)}
                      >
                        {item.checked ? (
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        ) : (
                          <Circle className="w-5 h-5 text-gray-300 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${item.checked ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Download Section */}
        <div id="download" className="max-w-3xl mx-auto mt-12">
          <ResourceEmailCapture
            resourceTitle="Event Planning Checklist PDF"
            resourceType="checklist"
          />
        </div>

        {/* Related Resources */}
        <div className="max-w-4xl mx-auto mt-12 pt-8 border-t">
          <h3 className="font-semibold text-gray-900 mb-4">Related Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/guides/event-staffing-101" className="group">
              <Card className="border-gray-200 hover:border-orange-300 transition-colors">
                <CardContent className="p-4">
                  <h4 className="font-medium text-gray-900 group-hover:text-orange-600">Event Staffing 101</h4>
                  <p className="text-sm text-gray-600">Complete guide to hiring and training staff</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/guides/brand-ambassador-hiring-guide" className="group">
              <Card className="border-gray-200 hover:border-orange-300 transition-colors">
                <CardContent className="p-4">
                  <h4 className="font-medium text-gray-900 group-hover:text-orange-600">Brand Ambassador Hiring Guide</h4>
                  <p className="text-sm text-gray-600">Find and hire top talent</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
