import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

import {
  Users,
  Target,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  MapPin,
  Zap,
  Mic,
  ClipboardList,
  UserCheck,
  BarChart3,
  Shield,
  Clock,
  Smartphone,
  Globe,
  Building2,
  MessageSquare,
  HelpCircle,
  ChevronRight
} from "lucide-react";

export default function TradeShowStaffingPage() {
  const stats = [
    { value: '1,000+', label: 'Trade Shows Staffed' },
    { value: '50+', label: 'US Cities Covered' },
    { value: '300+', label: 'Brands Served' },
    { value: '98%', label: 'Client Satisfaction' }
  ];

  const roles = [
    {
      icon: Users,
      title: 'Booth Staff & Brand Ambassadors',
      description: 'Professional, outgoing booth staff who engage attendees with confidence. Our trade show brand ambassadors are trained to represent your company, initiate conversations, qualify prospects, and keep your booth buzzing with activity throughout the event. They learn your brand messaging, product features, and ideal customer profile to deliver authentic interactions that leave lasting impressions.'
    },
    {
      icon: Mic,
      title: 'Trade Show Presenters & Speakers',
      description: 'Captivating presenters who command attention on the show floor. Our trade show presenters deliver polished product demonstrations, stage presentations, and crowd-drawing pitches that stop attendees in their tracks. Whether you need a theater-style presenter for your booth stage or a roaming spokesperson for media interviews, we have the talent.'
    },
    {
      icon: Target,
      title: 'Lead Generation Specialists',
      description: 'Trained lead capture professionals who know how to qualify and scan badges efficiently. Our lead generators use your criteria to identify high-value prospects, engage them in meaningful conversation, and capture detailed notes that your sales team can act on immediately after the show. They turn foot traffic into pipeline.'
    },
    {
      icon: ClipboardList,
      title: 'Registration & Check-In Staff',
      description: 'Organized, detail-oriented registration assistants who keep your event running smoothly. From badge printing and attendee check-in to session tracking and VIP management, our registration staff ensure a seamless experience from the moment attendees arrive at the convention center.'
    },
    {
      icon: Zap,
      title: 'Product Demonstrators',
      description: 'Hands-on product experts who showcase your technology, software, or physical products with expertise and enthusiasm. Our demonstrators are trained on your specific product features and benefits, delivering customized demos that address each attendee\'s unique pain points and use cases.'
    },
    {
      icon: UserCheck,
      title: 'Crowd Gatherers & Emcees',
      description: 'High-energy talent who draw crowds to your booth and keep the energy high all day. Our crowd gatherers use proven techniques to pull attendees from the aisles, while our emcees host raffles, games, and interactive experiences that make your booth the must-visit destination on the show floor.'
    }
  ];

  const advantages = [
    {
      icon: Shield,
      title: 'Rigorously Trained Staff',
      description: 'Every trade show team member completes our comprehensive training program covering brand representation, lead qualification, booth etiquette, and attendee engagement techniques before they ever step foot on a show floor.'
    },
    {
      icon: Smartphone,
      title: 'GPS Check-Ins & Real-Time Monitoring',
      description: 'Our proprietary technology platform includes GPS-verified check-ins, real-time shift monitoring, and instant communication tools so you always know your staff is on-site, on-time, and on-brand.'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Reporting & Analytics',
      description: 'Access live dashboards showing lead counts, engagement metrics, booth traffic patterns, and staff performance. Our post-event reports deliver actionable insights that help you measure ROI and improve future trade show strategies.'
    },
    {
      icon: Globe,
      title: 'Nationwide Coverage in 50+ Cities',
      description: 'From Las Vegas and Chicago to Orlando and New York, we maintain a vetted roster of trade show professionals in every major convention city. No travel premiums for most major markets means better value for your staffing budget.'
    },
    {
      icon: Clock,
      title: 'Rapid Deployment & Backup Staff',
      description: 'Need staff for a last-minute trade show? We can deploy trained professionals in as little as 48 hours. Every assignment includes backup staff on standby to ensure your booth is never understaffed.'
    },
    {
      icon: Star,
      title: 'Dedicated Account Management',
      description: 'Your dedicated account manager handles every detail from staff selection and training to on-site coordination and post-event debriefs. One point of contact means seamless communication and flawless execution.'
    }
  ];

  const venues = [
    { name: 'Las Vegas Convention Center', city: 'Las Vegas, NV' },
    { name: 'McCormick Place', city: 'Chicago, IL' },
    { name: 'Orange County Convention Center', city: 'Orlando, FL' },
    { name: 'Javits Center', city: 'New York, NY' },
    { name: 'Moscone Center', city: 'San Francisco, CA' },
    { name: 'Georgia World Congress Center', city: 'Atlanta, GA' },
    { name: 'Mandalay Bay Convention Center', city: 'Las Vegas, NV' },
    { name: 'Kay Bailey Hutchison Center', city: 'Dallas, TX' },
    { name: 'Sands Expo & Convention Center', city: 'Las Vegas, NV' },
    { name: 'Ernest N. Morial Convention Center', city: 'New Orleans, LA' },
    { name: 'Anaheim Convention Center', city: 'Anaheim, CA' },
    { name: 'Colorado Convention Center', city: 'Denver, CO' }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation & Event Brief',
      description: 'We learn about your trade show goals, booth design, target audience, and brand messaging. Our team reviews the event schedule, venue layout, and staffing requirements to build a comprehensive plan.'
    },
    {
      step: '02',
      title: 'Staff Selection & Matching',
      description: 'We hand-select trade show professionals from our vetted roster based on your industry, brand personality, and specific role requirements. You review profiles and approve your team before the event.'
    },
    {
      step: '03',
      title: 'Custom Training & Preparation',
      description: 'Your selected staff complete brand-specific training covering your products, services, messaging, lead qualification criteria, and booth protocols. We conduct pre-event briefings to ensure everyone is aligned.'
    },
    {
      step: '04',
      title: 'On-Site Execution & Support',
      description: 'Our on-site coordinator manages your team throughout the event, handling scheduling, breaks, performance monitoring, and real-time adjustments. You focus on networking while we manage the staff.'
    },
    {
      step: '05',
      title: 'Post-Event Reporting & Debrief',
      description: 'Receive a comprehensive report with lead counts, engagement metrics, staff performance ratings, and recommendations for future events. We debrief with your team to capture insights and continuously improve.'
    }
  ];

  const faqs = [
    {
      question: 'How far in advance should I book trade show staff?',
      answer: 'We recommend booking trade show staff at least 3-4 weeks before your event to ensure the best talent selection and adequate training time. However, we can accommodate rush requests in as little as 48 hours for major convention cities. For large-scale events like CES, SXSW, or NRF that require 10+ staff, we recommend booking 6-8 weeks in advance as experienced trade show professionals are in high demand during peak convention season.'
    },
    {
      question: 'What training do your trade show staff receive?',
      answer: 'All trade show staff complete our foundational training program covering professional booth etiquette, attendee engagement techniques, lead qualification frameworks, and badge scanning best practices. Before your specific event, they receive custom brand training that covers your company overview, product knowledge, key messaging, competitive differentiators, target customer profiles, and lead capture procedures. We provide training materials in advance and conduct live or virtual briefing sessions to ensure complete preparedness.'
    },
    {
      question: 'Do you provide staff for trade shows outside the United States?',
      answer: 'Our core coverage area is the United States with staff available in 50+ major cities. For international trade shows, we partner with trusted global staffing networks to source local professionals and supplement them with our US-based team leads who travel to manage on-site operations. We have successfully staffed international shows in Canada, Mexico, the UK, Germany, and across Asia. Contact us to discuss your international event needs.'
    },
    {
      question: 'What happens if a staff member calls out sick the day of the event?',
      answer: 'Every trade show staffing assignment includes backup staff on standby in the local market. If a team member is unable to work, we immediately deploy a trained backup who has already reviewed your brand materials and event brief. Our 98% fill rate means unexpected absences are extremely rare, but we always prepare for contingencies so your booth is never left understaffed. Our on-site coordinator manages all last-minute adjustments seamlessly.'
    },
    {
      question: 'How do you measure the success of trade show staff performance?',
      answer: 'We track multiple performance indicators including leads captured per hour, attendee engagement rates, badge scans, booth traffic flow, and qualitative feedback from your team. Our real-time reporting dashboard gives you visibility throughout the event, and our post-show report includes detailed metrics, staff ratings, and actionable recommendations. Many clients use our data to calculate cost-per-lead and overall trade show ROI.'
    },
    {
      question: 'Can your staff operate lead capture apps and scanning technology?',
      answer: 'Absolutely. Our trade show professionals are experienced with all major lead capture platforms including iCapture, Attendify, Cvent LeadCapture, CompuSystems, and native badge scanning apps. We train staff on your specific technology setup during the pre-event briefing to ensure smooth lead capture operations from the moment the show floor opens. If you need recommendations on lead capture technology, our team can advise on the best solutions for your event.'
    }
  ];

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="absolute inset-0 bg-gradient-to-l from-white/20 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-cyan-500/10 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
              Trade Show Staffing Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Trade Show Staffing That Drives Booth Traffic & Qualified Leads
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Trade show staffing is the difference between a forgettable booth and one that generates
              hundreds of qualified leads. AirFresh Marketing provides professionally trained booth staff,
              presenters, lead generators, and product demonstrators for conventions and expos in 50+ US cities.
              Our trade show talent is vetted, trained on your brand, and equipped with the tools to maximize
              your investment on the show floor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                <Link href="/contact" className="flex items-center gap-2">
                  Get a Free Staffing Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Trade Show Staff That Represent Your Brand Like Their Own
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
            <p>
              Trade show staffing requires more than just warm bodies in matching polo shirts. The professionals
              working your booth are often the first human interaction a potential customer has with your brand.
              They set the tone, shape perceptions, and determine whether an attendee becomes a lead or walks
              right past your exhibit. At AirFresh Marketing, we understand that your trade show staff are an
              extension of your sales team, and we treat every placement with that level of seriousness.
            </p>
            <p>
              Our approach starts with understanding your business. Before we recommend a single team member,
              we study your products, your competitive landscape, your ideal customer profile, and your goals
              for each specific event. This deep-dive process means our staff arrive at your booth already
              equipped with the knowledge and confidence to have real conversations with attendees, not just
              hand out brochures and scan badges. Combined with our{' '}
              <Link href="/technology" className="text-indigo-600 hover:text-indigo-800 underline">
                proprietary technology platform
              </Link>{' '}
              for GPS check-ins, real-time reporting, and performance tracking, you get full visibility and
              control over your trade show investment.
            </p>
            <p>
              Whether you are exhibiting at CES in Las Vegas, NRF in New York, HIMSS in Chicago, or a
              regional industry conference, AirFresh Marketing delivers the caliber of trade show
              professionals that Fortune 500 companies and fast-growing startups alike rely on to make
              every event a success. Explore our{' '}
              <Link href="/services/convention-staffing" className="text-indigo-600 hover:text-indigo-800 underline">
                convention staffing services
              </Link>{' '}
              and{' '}
              <Link href="/services/brand-ambassadors" className="text-indigo-600 hover:text-indigo-800 underline">
                brand ambassador programs
              </Link>{' '}
              for additional staffing solutions that complement your trade show strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Trade Show Staffing Roles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trade Show Staffing Roles We Fill
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From booth engagement to lead capture, we provide specialized trade show professionals
              for every role your exhibit requires
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roles.map((role, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-gray-200">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-5">
                    <role.icon className="w-7 h-7 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {role.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{role.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose AirFresh */}
      <section className="py-20 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose AirFresh for Trade Show Staffing
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Technology-driven staffing with the personal service and accountability your events demand
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white/10 rounded-2xl p-8 hover:bg-white/15 transition-colors">
                <advantage.icon className="w-10 h-10 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  {advantage.title}
                </h3>
                <p className="text-indigo-200 leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-indigo-200 mb-6">
              See how our technology and processes deliver measurable results for trade show exhibitors
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-indigo-900 hover:bg-indigo-50">
                <Link href="/technology" className="flex items-center gap-2">
                  Explore Our Technology <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/pricing" className="flex items-center gap-2">
                  View Pricing
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Major Trade Show Venues */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trade Show Venues We Staff Nationwide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced trade show staff at every major convention center in the United States.
              Local talent means no travel fees and staff who know the venue inside and out.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {venues.map((venue, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white p-5 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all"
              >
                <MapPin className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">{venue.name}</div>
                  <div className="text-sm text-gray-500">{venue.city}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Don&apos;t see your venue listed? We staff trade shows at convention centers, hotels, and
              event spaces in all 50 states.{' '}
              <Link href="/contact" className="text-indigo-600 hover:text-indigo-800 underline font-medium">
                Contact us
              </Link>{' '}
              to discuss your event location.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Our Trade Show Staffing Process Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven five-step process that ensures your trade show staff are prepared,
              professional, and aligned with your goals from day one
            </p>
          </div>

          <div className="space-y-6">
            {processSteps.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 bg-gray-50 rounded-2xl p-8 hover:bg-indigo-50/50 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Staff Your Next Trade Show With Confidence
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Tell us about your upcoming event and we will provide a custom staffing plan and quote within 24 hours.
            Read our{' '}
            <Link href="/blog/trade-show-marketing-strategies" className="text-white underline hover:text-indigo-200">
              trade show marketing strategies guide
            </Link>{' '}
            for tips to maximize your exhibit ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50">
              <Link href="/contact" className="flex items-center gap-2">
                Request a Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/services/event-management" className="flex items-center gap-2">
                Full Event Management <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industries & Event Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Trade Show Industries We Serve
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Our trade show staffing experience spans every major industry vertical. We understand
                the nuances of staffing a healthcare conference versus a consumer electronics expo,
                and we match talent accordingly. Learn more about how our{' '}
                <Link href="/services/brand-ambassadors" className="text-indigo-600 hover:text-indigo-800 underline">
                  brand ambassador teams
                </Link>{' '}
                bring industry-specific knowledge to your booth.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Technology & SaaS',
                  'Healthcare & Medical',
                  'Consumer Electronics',
                  'Automotive',
                  'Food & Beverage',
                  'Financial Services',
                  'Manufacturing',
                  'Pharmaceutical',
                  'Energy & Utilities',
                  'Retail & E-Commerce',
                  'Construction & Real Estate',
                  'Education & EdTech'
                ].map((industry, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                    <span className="text-gray-700">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Event Types We Staff
              </h3>
              <div className="space-y-4">
                {[
                  { type: 'Trade Shows & Expos', desc: 'Large-scale industry exhibitions with hundreds of exhibitors' },
                  { type: 'National Conferences', desc: 'Multi-day conferences with exhibit halls and breakout sessions' },
                  { type: 'Regional Conventions', desc: 'Smaller, focused industry gatherings and association events' },
                  { type: 'Product Launch Events', desc: 'High-profile product reveals at trade shows and private venues' },
                  { type: 'Corporate Summits', desc: 'Executive-level events and customer appreciation gatherings' },
                  { type: 'Outdoor Festivals & Fairs', desc: 'Consumer-facing events, county fairs, and industry festivals' }
                ].map((event, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-4">
                    <div className="font-semibold text-gray-900">{event.type}</div>
                    <div className="text-sm text-gray-600">{event.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonial */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
            <div className="flex items-center justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-700 text-center italic leading-relaxed mb-6">
              &ldquo;AirFresh provided 12 booth staff for our CES exhibit and they were outstanding.
              Every team member was trained on our products, professional in appearance, and generated
              more qualified leads than our internal team did at the previous year&apos;s show. Their
              real-time reporting dashboard was a game-changer for tracking ROI.&rdquo;
            </blockquote>
            <div className="text-center">
              <div className="font-semibold text-gray-900">VP of Marketing</div>
              <div className="text-gray-500">Enterprise Technology Company</div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trade Show Marketing Resources
            </h2>
            <p className="text-xl text-gray-600">
              Expert insights to help you get the most out of your next trade show
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Trade Show Marketing Strategies That Drive ROI',
                href: '/blog/trade-show-marketing-strategies',
                description: 'Proven strategies for maximizing your trade show investment, from pre-show planning to post-event follow-up.'
              },
              {
                title: 'Convention Center Marketing: A Complete Guide',
                href: '/blog/convention-center-marketing',
                description: 'How to leverage convention center venues for maximum brand exposure and attendee engagement.'
              },
              {
                title: 'Lead Capture at Events: Best Practices',
                href: '/blog/lead-capture-events',
                description: 'Modern lead capture techniques that turn booth visitors into qualified sales opportunities.'
              }
            ].map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow group">
                <CardContent className="p-6">
                  <Badge className="mb-4 bg-indigo-100 text-indigo-700 border-indigo-200">
                    Blog
                  </Badge>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    <Link href={resource.href}>
                      {resource.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                  <Link
                    href={resource.href}
                    className="text-indigo-600 hover:text-indigo-800 font-medium text-sm flex items-center gap-1"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trade Show Staffing Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about hiring professional trade show staff
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-200">
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Elevate Your Trade Show Presence?
          </h2>
          <p className="text-xl text-indigo-200 mb-4">
            Join 300+ brands that trust AirFresh Marketing for professional trade show staffing.
            From a single booth staffer to a 50-person team across multiple shows, we scale to
            meet your needs and exceed your expectations.
          </p>
          <p className="text-indigo-300 mb-8">
            Explore our full suite of services including{' '}
            <Link href="/services/convention-staffing" className="text-white underline hover:text-indigo-200">
              convention staffing
            </Link>,{' '}
            <Link href="/services/brand-ambassadors" className="text-white underline hover:text-indigo-200">
              brand ambassadors
            </Link>, and{' '}
            <Link href="/services/event-management" className="text-white underline hover:text-indigo-200">
              event management
            </Link>{' '}
            to build a complete experiential marketing strategy.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { href: '/event-staffing-agency', label: 'Event Staffing Agency' },
              { href: '/brand-ambassador-agency', label: 'Brand Ambassador Agency' },
              { href: '/experiential-marketing-agency', label: 'Experiential Marketing Agency' },
              { href: '/promotional-staffing-agency', label: 'Promotional Staffing Agency' },
              { href: '/corporate-event-staffing', label: 'Corporate Event Staffing' },
              { href: '/services/food-beverage-sampling', label: 'Food & Beverage Sampling' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="text-indigo-200 hover:text-white text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-indigo-900 hover:bg-indigo-50">
              <Link href="/contact" className="flex items-center gap-2">
                Get Your Free Staffing Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/pricing" className="flex items-center gap-2">
                View Pricing Options
              </Link>
            </Button>
          </div>
          <p className="mt-6 text-indigo-300 text-sm">
            Call us directly at{' '}
            <a href="tel:+13037206060" className="text-white hover:text-indigo-200 underline">
              (303) 720-6060
            </a>{' '}
            or{' '}
            <Link href="/contact" className="text-white hover:text-indigo-200 underline">
              request a quote online
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
