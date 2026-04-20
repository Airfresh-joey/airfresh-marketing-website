import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Users,
  DollarSign,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Star,
  Briefcase,
  Clock,
  Shield,
  BarChart3,
  Zap,
  Award,
  TrendingUp,
  Building,
  Target,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Event Staffing & Brand Ambassador Pricing | AirFresh Marketing',
  description:
    'Event staffing pricing and brand ambassador cost guide. See transparent rate ranges for brand ambassadors ($35-65/hr), trade show staff ($40-70/hr), street teams, promotional models & more.',
  keywords:
    'event staffing pricing, brand ambassador cost, brand ambassador agency cost, how much does event staffing cost, promotional staff rates, trade show staffing rates, street team pricing, experiential marketing rates',
  openGraph: {
    type: 'website',
    title: 'Event Staffing & Brand Ambassador Pricing | AirFresh Marketing',
    description:
      'Transparent pricing for brand ambassadors, event staffing, trade show staff, street teams, and promotional models nationwide. Get rate ranges and a custom quote.',
    url: 'https://www.airfreshmarketing.com/pricing',
    siteName: 'AirFresh Marketing',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AirFresh Marketing Event Staffing and Brand Ambassador Pricing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Event Staffing & Brand Ambassador Pricing | AirFresh Marketing',
    description:
      'Transparent pricing for brand ambassadors, event staffing, trade show staff & more. See rate ranges and get a custom quote.',
    site: '@AirFreshMktg',
    creator: '@AirFreshMktg',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/pricing',
  },
}

export default function PricingPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How much do brand ambassadors cost per hour?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Brand ambassador hourly rates typically range from $35 to $65 per hour depending on the market, experience level, and event requirements. Entry-level brand ambassadors in mid-size markets start around $35/hr, while highly experienced ambassadors in premium markets like New York City or Los Angeles can command $55-65/hr or more. AirFresh Marketing provides competitive, transparent pricing with no hidden fees.',
            },
          },
          {
            '@type': 'Question',
            name: 'What factors affect event staffing pricing?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Event staffing costs are influenced by several key factors: geographic market (NYC and LA rates are 20-30% higher than mid-size cities), staff experience and skill level, event duration and total hours, advance notice and lead time, number of staff required, specific skill requirements such as bilingual ability or product expertise, travel requirements, and event type such as trade shows versus street activations.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are there minimum booking requirements for event staff?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, AirFresh Marketing typically requires a 4-hour minimum per staff member per shift. For trade shows and multi-day events, we recommend booking staff for the full event duration to ensure consistency and brand representation. Some markets and specialty roles may have different minimums. Contact us for details specific to your event.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do event staffing rates include travel expenses?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Hourly rates generally cover staff within a reasonable radius of the event location. Travel expenses such as mileage reimbursement, parking, or accommodation for out-of-market activations are billed separately at cost. For nationwide campaigns, we source talent locally whenever possible to minimize travel costs. All travel fees are disclosed upfront in your project quote.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does pricing work for multi-day events?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Multi-day events often qualify for volume discounts. For events spanning 3 or more days, we can frequently negotiate reduced daily rates compared to single-day bookings. Trade shows running 3-5 days, for example, may see 10-15% savings versus booking individual days. Long-term campaign staffing spanning multiple weeks or months can unlock even greater efficiencies. Ask your account manager about multi-day pricing.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the cost for nationwide event staffing?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nationwide staffing campaigns are priced based on the total number of markets, staff count, and event dates. Because AirFresh Marketing maintains a vetted talent network in 50+ cities, we can staff local talent in each market rather than shipping staff cross-country, which significantly reduces overall costs. National campaigns typically involve a program management fee in addition to hourly staffing rates. Request a multi-market quote for a detailed breakdown.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are rush or last-minute bookings more expensive?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, last-minute event staffing requests made within 72 hours of an event may incur a rush fee of 15-25% above standard rates, depending on availability and market. We always strive to accommodate urgent requests and have successfully staffed same-day activations. For the best pricing and talent selection, we recommend booking at least 2-4 weeks in advance for standard events and 4-8 weeks for trade shows.',
            },
          },
          {
            '@type': 'Question',
            name: 'What payment terms does AirFresh Marketing offer?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'AirFresh Marketing typically requires a 50% deposit at booking to reserve your staffing dates, with the remaining balance due within 7 days of event completion. For established clients and long-term campaigns, net-30 payment terms may be available. We accept ACH bank transfer, credit card, and check. All pricing is presented transparently in a written proposal before any commitment is required.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is included in event staffing agency fees?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'AirFresh Marketing agency fees cover the full staffing lifecycle: talent recruitment and vetting, background check coordination, brand training and pre-event briefings, GPS-verified check-in tracking, real-time reporting dashboard access, on-site management coordination, and post-event recap reports with photos and performance metrics. Unlike freelance platforms, you get a fully managed staffing solution.',
            },
          },
          {
            '@type': 'Question',
            name: 'How much do promotional models cost to hire?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Promotional model rates range from $45 to $85 per hour depending on the market, experience, appearance requirements, and event type. High-fashion or luxury brand activations in major markets command rates toward the higher end of this range. All AirFresh Marketing promotional models are vetted professionals who represent your brand with poise and product knowledge, not just appearance.',
            },
          },
        ],
      },
      {
        '@type': 'Service',
        name: 'Event Staffing & Brand Ambassador Services',
        provider: {
          '@type': 'Organization',
          name: 'AirFresh Marketing',
          url: 'https://www.airfreshmarketing.com',
        },
        description:
          'Professional event staffing, brand ambassadors, trade show staff, street teams, promotional models, and experiential marketing personnel nationwide.',
        priceRange: '$30-$95/hr',
        areaServed: {
          '@type': 'Country',
          name: 'United States',
        },
        serviceType: [
          'Brand Ambassadors',
          'Event Staffing',
          'Trade Show Staff',
          'Street Teams',
          'Product Sampling Staff',
          'Promotional Models',
          'Event Managers',
        ],
        url: 'https://www.airfreshmarketing.com/pricing',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.airfreshmarketing.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Pricing',
            item: 'https://www.airfreshmarketing.com/pricing',
          },
        ],
      },
    ],
  }

  const staffingRoles = [
    {
      title: 'Brand Ambassadors',
      rateRange: '$35 – $65 / hr',
      low: 35,
      high: 65,
      description:
        'Trained brand representatives who engage consumers, communicate key messages, and drive trial and awareness at live events.',
      tags: ['Product Sampling', 'Demos', 'Consumer Engagement'],
      icon: Users,
      color: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'Event Staff',
      rateRange: '$30 – $55 / hr',
      low: 30,
      high: 55,
      description:
        'General event personnel for setup, registration, guest services, crowd management, and logistical support at any type of event.',
      tags: ['Registration', 'Guest Services', 'Logistics'],
      icon: Briefcase,
      color: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'Trade Show Staff',
      rateRange: '$40 – $70 / hr',
      low: 40,
      high: 70,
      description:
        'Skilled professionals for convention and trade show booth staffing, lead generation, product demonstration, and attendee engagement.',
      tags: ['Lead Gen', 'Booth Staffing', 'Product Demos'],
      icon: Building,
      color: 'from-indigo-500 to-purple-600',
    },
    {
      title: 'Street Teams',
      rateRange: '$35 – $60 / hr',
      low: 35,
      high: 60,
      description:
        'High-energy teams deployed in targeted neighborhoods, transit hubs, and high-traffic areas to generate buzz and distribute materials.',
      tags: ['Flyer Distribution', 'Guerrilla Marketing', 'Buzz Building'],
      icon: Target,
      color: 'from-cyan-600 to-teal-600',
    },
    {
      title: 'Product Sampling Staff',
      rateRange: '$30 – $50 / hr',
      low: 30,
      high: 50,
      description:
        'Experts in consumer sampling programs for food, beverage, beauty, CPG, and specialty products at retail, grocery, and event venues.',
      tags: ['In-Store Sampling', 'Events', 'CPG & Beverage'],
      icon: Star,
      color: 'from-teal-500 to-cyan-600',
    },
    {
      title: 'Promotional Models',
      rateRange: '$45 – $85 / hr',
      low: 45,
      high: 85,
      description:
        'Professional promotional talent for luxury activations, automotive shows, lifestyle events, and premium brand experiences.',
      tags: ['Auto Shows', 'Luxury Events', 'Brand Representation'],
      icon: Award,
      color: 'from-pink-500 to-rose-600',
    },
    {
      title: 'Event Managers & Leads',
      rateRange: '$55 – $95 / hr',
      low: 55,
      high: 95,
      description:
        'Experienced on-site managers who oversee staff teams, coordinate logistics, ensure brand compliance, and serve as your field point of contact.',
      tags: ['On-Site Leadership', 'Staff Coordination', 'Brand Compliance'],
      icon: TrendingUp,
      color: 'from-orange-500 to-amber-600',
    },
  ]

  const cityRates = [
    {
      city: 'New York City',
      state: 'NY',
      modifier: 'Premium Market',
      ambassadorRange: '$50 – $75/hr',
      eventStaffRange: '$45 – $65/hr',
      tradeShowRange: '$55 – $85/hr',
      note: 'NYC commands the highest rates due to cost of living and high demand.',
      color: 'border-cyan-400',
    },
    {
      city: 'Los Angeles',
      state: 'CA',
      modifier: 'Premium Market',
      ambassadorRange: '$45 – $70/hr',
      eventStaffRange: '$40 – $60/hr',
      tradeShowRange: '$50 – $80/hr',
      note: 'LA rates are among the highest nationally, with strong talent supply.',
      color: 'border-blue-400',
    },
    {
      city: 'Chicago',
      state: 'IL',
      modifier: 'Major Market',
      ambassadorRange: '$40 – $65/hr',
      eventStaffRange: '$35 – $55/hr',
      tradeShowRange: '$45 – $70/hr',
      note: 'Chicago is a top convention city with deep staffing talent.',
      color: 'border-indigo-400',
    },
    {
      city: 'Denver',
      state: 'CO',
      modifier: 'Home Market',
      ambassadorRange: '$35 – $60/hr',
      eventStaffRange: '$30 – $50/hr',
      tradeShowRange: '$40 – $65/hr',
      note: 'Our home base. Deep talent relationships drive competitive rates.',
      color: 'border-teal-400',
    },
    {
      city: 'Las Vegas',
      state: 'NV',
      modifier: 'Convention Hub',
      ambassadorRange: '$40 – $68/hr',
      eventStaffRange: '$35 – $58/hr',
      tradeShowRange: '$45 – $75/hr',
      note: 'High convention volume and strong local talent pool.',
      color: 'border-purple-400',
    },
    {
      city: 'Miami',
      state: 'FL',
      modifier: 'Major Market',
      ambassadorRange: '$40 – $65/hr',
      eventStaffRange: '$35 – $55/hr',
      tradeShowRange: '$45 – $70/hr',
      note: 'Bilingual talent available; strong for lifestyle and CPG activations.',
      color: 'border-pink-400',
    },
  ]

  const whatsIncluded = [
    {
      icon: Users,
      title: 'Recruitment & Vetting',
      description:
        'Every staff member goes through our multi-step screening process including interviews, reference checks, and background verification before they represent your brand.',
    },
    {
      icon: Target,
      title: 'Brand Training',
      description:
        'Custom pre-event training modules ensure your staff knows your product, key messages, and brand voice before day one. Video training and testing is built into our platform.',
    },
    {
      icon: MapPin,
      title: 'GPS Check-In Tracking',
      description:
        'Location-verified check-ins give you real-time confirmation that your staff are on-site and on-time. Eliminate no-shows and late arrivals with automated accountability.',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Reporting',
      description:
        'Access your live campaign dashboard to monitor staff status, consumer interactions, samples distributed, leads captured, and other custom KPIs as they happen.',
    },
    {
      icon: Shield,
      title: 'On-Site Management',
      description:
        'For larger activations, dedicated field managers coordinate your team, troubleshoot issues in real time, and serve as your boots-on-the-ground point of contact.',
    },
    {
      icon: Clock,
      title: 'Post-Event Recaps',
      description:
        'Every campaign closes with a detailed recap report including staff performance metrics, photos, consumer feedback, and actionable insights for future activations.',
    },
  ]

  const faqs = [
    {
      question: 'How much do brand ambassadors cost per hour?',
      answer:
        'Brand ambassador hourly rates typically range from $35 to $65 per hour depending on the market, experience level, and event requirements. Entry-level brand ambassadors in mid-size markets start around $35/hr, while highly experienced ambassadors in premium markets like New York City or Los Angeles can command $55–65/hr or more. AirFresh Marketing provides competitive, transparent pricing with no hidden fees.',
    },
    {
      question: 'What factors affect event staffing pricing?',
      answer:
        'Event staffing costs are influenced by several key factors: geographic market (NYC and LA rates are 20–30% higher than mid-size cities), staff experience and skill level, event duration and total hours, advance notice and lead time, number of staff required, specific skill requirements such as bilingual ability or product expertise, travel requirements, and event type such as trade shows versus street activations.',
    },
    {
      question: 'Are there minimum booking requirements?',
      answer:
        'Yes, AirFresh Marketing typically requires a 4-hour minimum per staff member per shift. For trade shows and multi-day events, we recommend booking staff for the full event duration to ensure consistency. Some markets and specialty roles may have different minimums. Contact us for details specific to your event.',
    },
    {
      question: 'Do rates include travel expenses?',
      answer:
        'Hourly rates generally cover staff within a reasonable radius of the event location. Travel expenses such as mileage reimbursement, parking, or accommodation for out-of-market activations are billed separately at cost. For nationwide campaigns, we source talent locally whenever possible to minimize travel costs. All travel fees are disclosed upfront in your project quote.',
    },
    {
      question: 'How does pricing work for multi-day events?',
      answer:
        'Multi-day events often qualify for volume discounts. For events spanning 3 or more days, we can frequently negotiate reduced daily rates compared to single-day bookings. Trade shows running 3–5 days may see 10–15% savings versus booking individual days. Ask your account manager about multi-day pricing at the time of quoting.',
    },
    {
      question: 'What is the cost for nationwide staffing?',
      answer:
        'Nationwide staffing campaigns are priced based on total number of markets, staff count, and event dates. Because AirFresh maintains a vetted talent network in 50+ cities, we source local talent in each market rather than shipping staff cross-country, which significantly reduces overall costs. National campaigns include a program management fee in addition to hourly staffing rates.',
    },
    {
      question: 'Are rush or last-minute bookings more expensive?',
      answer:
        'Last-minute requests made within 72 hours of an event may incur a rush fee of 15–25% above standard rates, depending on availability and market. We always strive to accommodate urgent requests. For the best pricing and talent selection, we recommend booking at least 2–4 weeks in advance for standard events and 4–8 weeks for trade shows.',
    },
    {
      question: 'What payment terms do you offer?',
      answer:
        'AirFresh Marketing typically requires a 50% deposit at booking to reserve your staffing dates, with the remaining balance due within 7 days of event completion. For established clients and long-term campaigns, net-30 payment terms may be available. We accept ACH bank transfer, credit card, and check. All pricing is presented transparently in a written proposal before any commitment is required.',
    },
    {
      question: 'What is included in your agency fees?',
      answer:
        'Agency fees cover the full staffing lifecycle: talent recruitment and vetting, brand training, GPS check-in tracking, real-time reporting dashboard access, on-site management coordination, and post-event recap reports with photos and metrics. Unlike freelance platforms, you get a fully managed staffing solution with accountable professionals.',
    },
    {
      question: 'How much do promotional models cost to hire?',
      answer:
        'Promotional model rates range from $45 to $85 per hour depending on market, experience, appearance requirements, and event type. High-fashion or luxury brand activations in major markets command rates toward the higher end. All AirFresh Marketing promotional models are vetted professionals who represent your brand with product knowledge and professionalism.',
    },
  ]

  return (
    <div className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/40 via-transparent to-blue-900/40" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full mb-6">
            <DollarSign className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-300 uppercase tracking-wide">
              Transparent Pricing
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Event Staffing &amp; Brand Ambassador{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed">
            Transparent rate ranges for brand ambassadors, event staff, trade show personnel,
            street teams, and promotional models across every major U.S. market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-8 py-6 text-lg shadow-xl"
            >
              <Link href="/contact">
                <Zap className="w-5 h-5 mr-2" />
                Get a Custom Quote
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
            >
              <a href="#pricing-tables">
                View Rate Tables
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            Rates vary by market, event duration, and requirements. All quotes are provided free with no obligation.
          </p>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {[
              { value: '$30–$95/hr', label: 'Rate Range' },
              { value: '50+', label: 'Cities Staffed' },
              { value: '500+', label: 'Brands Activated' },
              { value: '4-hr', label: 'Minimum Booking' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                <div className="text-cyan-100 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section id="pricing-tables" className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-50/50 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 rounded-full mb-6">
              <DollarSign className="w-4 h-4 text-cyan-600" />
              <span className="text-sm font-semibold text-cyan-700 uppercase tracking-wide">
                Staffing Rate Guide
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How Much Does{' '}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Event Staffing Cost?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Below are standard national rate ranges for our most common staffing categories.
              Final pricing is tailored to your specific market, event type, and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staffingRoles.map((role, index) => {
              const Icon = role.icon
              return (
                <Card
                  key={index}
                  className="group h-full bg-white border border-gray-100 hover:border-cyan-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div
                    className={`h-1.5 w-full bg-gradient-to-r ${role.color}`}
                  />
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-5">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <Badge
                        variant="secondary"
                        className="text-base font-bold bg-gray-100 text-gray-800 px-3 py-1"
                      >
                        {role.rateRange}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-700 transition-colors">
                      {role.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">
                      {role.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {role.tags.map((tag, ti) => (
                        <span
                          key={ti}
                          className="px-2 py-1 bg-gray-50 border border-gray-200 text-gray-600 text-xs rounded-md font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mt-10 p-5 bg-amber-50 border border-amber-200 rounded-xl text-center">
            <p className="text-amber-800 text-sm font-medium">
              <strong>Note:</strong> Rates vary by market, event duration, lead time, and specific
              requirements. Rates listed are standard national ranges. Premium markets (NYC, LA)
              typically run 20–30% higher. Contact us for an exact quote for your event.
            </p>
          </div>
        </div>
      </section>

      {/* City-Specific Pricing */}
      <section className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">
                Market-Specific Rates
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Event Staffing Pricing{' '}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                by City
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Staffing rates differ by market. Here are approximate rate ranges for our most
              active cities. We staff 50+ cities nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cityRates.map((city, index) => (
              <Card
                key={index}
                className={`h-full bg-white border-l-4 ${city.color} shadow-sm hover:shadow-lg transition-all duration-300`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{city.city}</h3>
                      <p className="text-sm text-gray-500">{city.state}</p>
                    </div>
                    <Badge variant="outline" className="text-xs font-semibold">
                      {city.modifier}
                    </Badge>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-sm text-gray-600">Brand Ambassadors</span>
                      <span className="text-sm font-bold text-gray-900">
                        {city.ambassadorRange}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-sm text-gray-600">Event Staff</span>
                      <span className="text-sm font-bold text-gray-900">
                        {city.eventStaffRange}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm text-gray-600">Trade Show Staff</span>
                      <span className="text-sm font-bold text-gray-900">
                        {city.tradeShowRange}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{city.note}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4">
              Don&apos;t see your city? We staff events in 50+ U.S. markets.
            </p>
            <Button asChild variant="outline" className="border-cyan-300 text-cyan-700 hover:bg-cyan-50">
              <Link href="/locations">
                <MapPin className="w-4 h-4 mr-2" />
                View All Locations
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full mb-6">
              <CheckCircle2 className="w-4 h-4 text-cyan-600" />
              <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                Full-Service Staffing
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What&apos;s Included in{' '}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Every Staffing Engagement
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AirFresh Marketing is not a freelance marketplace. Our agency fee covers a
              fully managed staffing experience from recruitment through post-event reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatsIncluded.map((item, index) => {
              const Icon = item.icon
              return (
                <Card
                  key={index}
                  className="h-full bg-white border border-gray-100 hover:border-cyan-200 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="w-12 h-12 mb-5 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mt-14 bg-gradient-to-r from-cyan-600 to-blue-600 p-1 rounded-2xl shadow-xl">
            <div className="bg-white rounded-xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Why Not Just Use a Freelance Platform?
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Freelance platforms hand you a profile and a phone number. AirFresh Marketing
                    delivers trained, vetted professionals with full accountability, real-time
                    tracking, and a dedicated account team. The difference shows up in brand
                    representation, no-show rates, and post-event results.
                  </p>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white"
                  >
                    <Link href="/contact">
                      Discuss Your Event
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Vetted professionals', check: true },
                    { label: 'Random marketplace talent', check: false },
                    { label: 'GPS check-in verification', check: true },
                    { label: 'Honor-system attendance', check: false },
                    { label: 'Brand training included', check: true },
                    { label: 'You brief them yourself', check: false },
                    { label: 'Real-time reporting', check: true },
                    { label: 'No post-event data', check: false },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      {item.check ? (
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border-2 border-red-300 flex items-center justify-center flex-shrink-0">
                          <div className="w-1.5 h-0.5 bg-red-400 rotate-45 absolute" />
                          <div className="w-1.5 h-0.5 bg-red-400 -rotate-45 absolute" />
                        </div>
                      )}
                      <span
                        className={`text-sm ${
                          item.check ? 'text-gray-800 font-medium' : 'text-gray-400 line-through'
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 bg-gray-50 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 rounded-full mb-6">
              <ChevronDown className="w-4 h-4 text-cyan-600" />
              <span className="text-sm font-semibold text-cyan-700 uppercase tracking-wide">
                Common Questions
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Event Staffing Pricing{' '}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                FAQ
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Answers to the most common questions about event staffing costs, brand ambassador
              rates, and how AirFresh Marketing pricing works.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 hover:border-cyan-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-xs font-bold mt-0.5">
                      {index + 1}
                    </span>
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed pl-10">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-gradient-to-br from-cyan-600 via-blue-600 to-cyan-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-8">
            <DollarSign className="w-4 h-4 text-cyan-200" />
            <span className="text-sm font-semibold text-cyan-100 uppercase tracking-wide">
              Free, No-Obligation Quote
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Get a Custom Event Staffing Quote
          </h2>
          <p className="text-xl md:text-2xl text-cyan-50 max-w-3xl mx-auto mb-10 leading-relaxed">
            Tell us about your event and we will send you a detailed staffing proposal with
            transparent pricing within one business day. No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-cyan-600 hover:bg-gray-100 font-bold text-lg px-10 py-7 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              <Link href="/contact">
                <Zap className="w-6 h-6 mr-3" />
                Get My Custom Quote
                <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 text-lg px-10 py-7"
            >
              <Link href="/services">
                View All Services
              </Link>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-cyan-100 text-sm">
            {[
              'Free Quote in 24 Hours',
              'No Hidden Fees',
              '50+ Cities Nationwide',
              '500+ Brands Served',
            ].map((trust, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-300" />
                {trust}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
