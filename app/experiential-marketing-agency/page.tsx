import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Users,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Star,
  Clock,
  Shield,
  BarChart3,
  Zap,
  Award,
  Target,
  Building,
  Phone,
  ChevronRight,
  Globe,
  Smartphone,
  FileText,
  Video,
  Briefcase,
  CalendarCheck,
  TrendingUp,
  HelpCircle,
  Megaphone,
  Sparkles,
  Rocket,
  Lightbulb,
  Camera,
  Palette,
  Music,
  ShoppingBag,
  Truck,
  Heart,
  DollarSign,
  Layers,
} from 'lucide-react'

export default function ExperientialMarketingAgencyPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does an experiential marketing agency do?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An experiential marketing agency designs, produces, and executes immersive brand experiences that create direct, memorable connections between consumers and brands. This includes pop-up activations, product sampling campaigns, brand immersion events, mobile tours, guerrilla marketing, trade show experiences, festival activations, and retail experiences. A full-service experiential marketing agency like AirFresh Marketing handles everything from creative strategy and event design through staffing, logistics, execution, and post-event analytics — delivering measurable results across every touchpoint.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does an experiential marketing campaign cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Experiential marketing campaign costs vary widely based on scope, duration, number of markets, and production complexity. A single-city pop-up activation typically ranges from $15,000 to $75,000. Multi-city mobile tours can range from $100,000 to $500,000 or more depending on the number of stops and production value. Product sampling campaigns in retail environments may cost $5,000 to $25,000 per market. AirFresh Marketing provides transparent, all-inclusive pricing that covers strategy, creative, staffing, logistics, technology, and reporting. We work with budgets from $10,000 single-day activations to multi-million-dollar national campaigns.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you measure the ROI of experiential marketing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Experiential marketing ROI is measured through a combination of quantitative and qualitative metrics. Key performance indicators include consumer impressions, direct engagements, samples distributed, leads captured, social media mentions, earned media value, email sign-ups, app downloads, and direct sales conversions. AirFresh Marketing uses GPS-verified check-in technology, real-time reporting dashboards, and post-event analytics to deliver precise measurement for every campaign. Our clients typically see 3x to 10x return on their experiential marketing investment when measured against customer acquisition cost and lifetime value.',
        },
      },
      {
        '@type': 'Question',
        name: 'How far in advance should I plan an experiential marketing campaign?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For optimal results, we recommend beginning the planning process 8 to 12 weeks before your activation date for standard campaigns, and 4 to 6 months for large-scale multi-city tours or complex productions. This timeline allows for proper strategy development, creative concepting, permit acquisition, staff recruitment and training, and logistical coordination. However, AirFresh Marketing maintains active talent pools in 50+ cities and established vendor relationships that allow us to execute certain campaign types in as little as 2 to 3 weeks when needed.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between experiential marketing and event marketing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'While the terms are sometimes used interchangeably, experiential marketing is a broader discipline that encompasses any marketing effort creating direct, immersive brand-consumer interactions. Event marketing specifically refers to marketing through hosted or sponsored events. Experiential marketing includes event marketing but also covers guerrilla activations, in-store experiences, product sampling, pop-up shops, mobile tours, and street team campaigns that may not fit the traditional definition of an event. AirFresh Marketing specializes in all forms of experiential marketing, whether they take place at a formal event or in everyday consumer environments.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can an experiential marketing agency handle nationwide campaigns?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. A national experiential marketing agency like AirFresh Marketing is specifically built to execute campaigns across multiple cities simultaneously. We maintain pre-vetted talent pools, established vendor networks, and logistical infrastructure in over 50 U.S. cities. This means you get local market expertise combined with centralized strategy, consistent brand standards, unified reporting, and a single point of accountability. Our technology platform enables real-time oversight of all markets from a single dashboard, eliminating the complexity of coordinating with multiple local agencies.',
        },
      },
      {
        '@type': 'Question',
        name: 'What industries benefit most from experiential marketing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Virtually every consumer-facing industry benefits from experiential marketing, but the highest ROI is typically seen in consumer packaged goods (product sampling drives trial and conversion), technology (hands-on demos overcome purchase hesitation), automotive (test drives and immersive brand experiences), food and beverage (tastings create immediate purchase intent), beauty and fashion (try-before-you-buy experiences), entertainment and media (immersive activations build anticipation), and sports (fan engagement deepens loyalty). AirFresh Marketing has executed successful experiential campaigns across all of these industries and more, including healthcare, financial services, and real estate.',
        },
      },
    ],
  }

  const experientialTypes = [
    {
      title: 'Pop-Up Activations',
      description:
        'Temporary branded environments that create urgency and exclusivity. From pop-up shops and lounges to interactive installations, pop-up activations generate buzz, drive trial, and create shareable moments that extend reach far beyond the physical footprint. AirFresh designs and staffs pop-ups that convert foot traffic into brand loyalists.',
      icon: Rocket,
      color: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'Product Sampling',
      description:
        'Strategic product sampling campaigns that put your product directly into the hands of your target consumer. Whether in-store at grocery and retail, at high-traffic urban locations, or at targeted events, our trained sampling teams drive trial, educate consumers, and capture real-time feedback and conversion data.',
      icon: ShoppingBag,
      color: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'Brand Immersion Events',
      description:
        'Multi-sensory brand experiences that transport consumers into your brand world. These high-production events combine environmental design, interactive technology, live entertainment, and curated touchpoints to create deep emotional connections that transform awareness into advocacy.',
      icon: Palette,
      color: 'from-purple-500 to-pink-600',
    },
    {
      title: 'Guerrilla Marketing',
      description:
        'Unexpected, high-impact activations in unconventional locations that disrupt the everyday and generate earned media. Street teams, flash experiences, projection mapping, and creative stunts that capture attention, go viral on social media, and position your brand as innovative and culturally relevant.',
      icon: Megaphone,
      color: 'from-orange-500 to-red-600',
    },
    {
      title: 'Mobile Tours',
      description:
        'Branded vehicles and mobile experiences that bring your campaign directly to consumers across multiple markets. From custom-wrapped trucks and trailers to fully built-out mobile showrooms, our mobile tours deliver consistent brand experiences in 10, 20, or 50+ cities with full logistical coordination.',
      icon: Truck,
      color: 'from-teal-500 to-cyan-600',
    },
    {
      title: 'Trade Show Experiences',
      description:
        'Booth experiences and activations that stand out on crowded show floors. We go beyond traditional booth staffing to create interactive product demonstrations, immersive environments, gamified engagement, and lead capture systems that maximize your trade show investment and fill your sales pipeline.',
      icon: Building,
      color: 'from-indigo-500 to-purple-600',
    },
    {
      title: 'Festival Activations',
      description:
        'Brand experiences designed for festival environments including music festivals, food festivals, cultural events, and sporting events. Our festival activations integrate seamlessly with the event atmosphere while creating branded moments that resonate with passionate, engaged audiences.',
      icon: Music,
      color: 'from-pink-500 to-rose-600',
    },
    {
      title: 'Retail Experiences',
      description:
        'In-store activations, product demonstrations, and branded retail environments that influence purchase decisions at the moment of truth. From end-cap displays and demo stations to full store takeovers, our retail experiences bridge the gap between marketing and sales in physical retail environments.',
      icon: Target,
      color: 'from-emerald-500 to-teal-600',
    },
  ]

  const processSteps = [
    {
      step: 1,
      title: 'Strategy & Discovery',
      description:
        'We begin every engagement with deep discovery — understanding your brand objectives, target audience, competitive landscape, and success metrics. Our strategists develop a tailored experiential concept aligned with your marketing goals and budget parameters.',
      icon: Lightbulb,
    },
    {
      step: 2,
      title: 'Creative Development',
      description:
        'Our creative team designs the activation concept, consumer journey, visual identity, interactive elements, and environmental design. Every detail is mapped to drive engagement, capture data, and create moments worth sharing.',
      icon: Palette,
    },
    {
      step: 3,
      title: 'Talent & Staffing',
      description:
        'We recruit, vet, and train brand ambassadors and experiential staff from our nationwide talent network. Each team member completes custom video-based brand training with verification to ensure deep product knowledge and authentic brand representation.',
      icon: Users,
    },
    {
      step: 4,
      title: 'Production & Logistics',
      description:
        'Our operations team manages all production, permitting, vendor coordination, shipping, venue relationships, and on-the-ground logistics. We handle every detail so your team can focus on the bigger picture.',
      icon: CalendarCheck,
    },
    {
      step: 5,
      title: 'Live Execution',
      description:
        'On activation day, our field management team oversees every detail. GPS-verified staff check-ins confirm deployment. Real-time dashboards give you live visibility into consumer engagement, impressions, samples distributed, and campaign KPIs as they happen.',
      icon: Zap,
    },
    {
      step: 6,
      title: 'Post-Event Analytics',
      description:
        'Within 48 hours, we deliver comprehensive post-event reports with quantitative performance data, qualitative consumer insights, photo and video documentation, and actionable recommendations for optimizing future activations.',
      icon: BarChart3,
    },
  ]

  const notableCampaigns = [
    {
      brand: 'Netflix',
      description: 'Multi-city experiential activations for series premieres and franchise launches, combining immersive environments, street teams, and social-first design across 15+ markets.',
      metric: '5M+ Impressions',
      href: '/case-studies',
    },
    {
      brand: 'Formula One',
      description: 'Large-scale fan activation and hospitality experiences at Grand Prix race weekends with 200+ brand ambassadors, VIP engagement, and immersive brand zones.',
      metric: '200+ Staff Deployed',
      href: '/case-studies',
    },
    {
      brand: 'Microsoft',
      description: 'Trade show experiences and product launch activations at CES, Build, and enterprise technology conferences with interactive demonstrations and qualified lead capture.',
      metric: '10,000+ Leads',
      href: '/case-studies',
    },
    {
      brand: 'Google',
      description: 'Consumer-facing product experience activations across retail environments and experiential pop-ups, driving hands-on engagement with new hardware and software products.',
      metric: '50K+ Engagements',
      href: '/case-studies',
    },
    {
      brand: 'MrBeast',
      description: 'Nationwide product sampling and brand activation campaigns for Feastables, deploying trained teams across grocery, retail, and high-traffic experiential environments in 30+ cities.',
      metric: '500K+ Samples',
      href: '/case-studies',
    },
    {
      brand: 'MAC Cosmetics',
      description: 'Luxury beauty brand activations at fashion events, retail locations, and experiential pop-ups with professional makeup artists and brand ambassadors driving trial and conversion.',
      metric: '25K+ Trials',
      href: '/case-studies',
    },
  ]

  const industries = [
    { name: 'Consumer Goods', icon: ShoppingBag, description: 'Product sampling, in-store activations, and brand launches' },
    { name: 'Technology', icon: Smartphone, description: 'Product demos, trade shows, and immersive tech experiences' },
    { name: 'Automotive', icon: Truck, description: 'Test drive events, auto shows, and lifestyle activations' },
    { name: 'Fashion & Beauty', icon: Palette, description: 'Pop-ups, runway events, and luxury brand experiences' },
    { name: 'Food & Beverage', icon: Heart, description: 'Tastings, sampling campaigns, and food festival activations' },
    { name: 'Sports & Entertainment', icon: Music, description: 'Fan zones, concert activations, and sponsored experiences' },
    { name: 'Healthcare', icon: Shield, description: 'Wellness activations, community events, and educational campaigns' },
    { name: 'Financial Services', icon: DollarSign, description: 'Consumer engagement, campus tours, and brand awareness' },
  ]

  const cities = [
    { name: 'New York', slug: 'new-york', state: 'NY' },
    { name: 'Los Angeles', slug: 'los-angeles', state: 'CA' },
    { name: 'Chicago', slug: 'chicago', state: 'IL' },
    { name: 'Miami', slug: 'miami', state: 'FL' },
    { name: 'Las Vegas', slug: 'las-vegas', state: 'NV' },
    { name: 'Denver', slug: 'denver', state: 'CO' },
    { name: 'Houston', slug: 'houston', state: 'TX' },
    { name: 'Dallas', slug: 'dallas', state: 'TX' },
    { name: 'Atlanta', slug: 'atlanta', state: 'GA' },
    { name: 'Phoenix', slug: 'phoenix', state: 'AZ' },
    { name: 'San Francisco', slug: 'san-francisco', state: 'CA' },
    { name: 'Seattle', slug: 'seattle', state: 'WA' },
    { name: 'Austin', slug: 'austin', state: 'TX' },
    { name: 'Nashville', slug: 'nashville', state: 'TN' },
    { name: 'Boston', slug: 'boston', state: 'MA' },
    { name: 'Philadelphia', slug: 'philadelphia', state: 'PA' },
    { name: 'Orlando', slug: 'orlando', state: 'FL' },
    { name: 'San Diego', slug: 'san-diego', state: 'CA' },
    { name: 'Portland', slug: 'portland', state: 'OR' },
    { name: 'Minneapolis', slug: 'minneapolis', state: 'MN' },
    { name: 'Detroit', slug: 'detroit', state: 'MI' },
    { name: 'Charlotte', slug: 'charlotte', state: 'NC' },
    { name: 'New Orleans', slug: 'new-orleans', state: 'LA' },
    { name: 'Tampa', slug: 'tampa', state: 'FL' },
  ]

  const faqs = [
    {
      question: 'What does an experiential marketing agency do?',
      answer:
        'An experiential marketing agency designs, produces, and executes immersive brand experiences that create direct, memorable connections between consumers and brands. This includes pop-up activations, product sampling campaigns, brand immersion events, mobile tours, guerrilla marketing, trade show experiences, festival activations, and retail experiences. A full-service experiential marketing agency like AirFresh Marketing handles everything from creative strategy and event design through staffing, logistics, execution, and post-event analytics — delivering measurable results across every touchpoint.',
    },
    {
      question: 'How much does an experiential marketing campaign cost?',
      answer:
        'Experiential marketing campaign costs vary widely based on scope, duration, number of markets, and production complexity. A single-city pop-up activation typically ranges from $15,000 to $75,000. Multi-city mobile tours can range from $100,000 to $500,000 or more depending on the number of stops and production value. Product sampling campaigns in retail environments may cost $5,000 to $25,000 per market. AirFresh Marketing provides transparent, all-inclusive pricing that covers strategy, creative, staffing, logistics, technology, and reporting. We work with budgets from $10,000 single-day activations to multi-million-dollar national campaigns.',
    },
    {
      question: 'How do you measure the ROI of experiential marketing?',
      answer:
        'Experiential marketing ROI is measured through a combination of quantitative and qualitative metrics. Key performance indicators include consumer impressions, direct engagements, samples distributed, leads captured, social media mentions, earned media value, email sign-ups, app downloads, and direct sales conversions. AirFresh Marketing uses GPS-verified check-in technology, real-time reporting dashboards, and post-event analytics to deliver precise measurement for every campaign. Our clients typically see 3x to 10x return on their experiential marketing investment when measured against customer acquisition cost and lifetime value.',
    },
    {
      question: 'How far in advance should I plan an experiential marketing campaign?',
      answer:
        'For optimal results, we recommend beginning the planning process 8 to 12 weeks before your activation date for standard campaigns, and 4 to 6 months for large-scale multi-city tours or complex productions. This timeline allows for proper strategy development, creative concepting, permit acquisition, staff recruitment and training, and logistical coordination. However, AirFresh Marketing maintains active talent pools in 50+ cities and established vendor relationships that allow us to execute certain campaign types in as little as 2 to 3 weeks when needed.',
    },
    {
      question: 'What is the difference between experiential marketing and event marketing?',
      answer:
        'While the terms are sometimes used interchangeably, experiential marketing is a broader discipline that encompasses any marketing effort creating direct, immersive brand-consumer interactions. Event marketing specifically refers to marketing through hosted or sponsored events. Experiential marketing includes event marketing but also covers guerrilla activations, in-store experiences, product sampling, pop-up shops, mobile tours, and street team campaigns that may not fit the traditional definition of an event. AirFresh Marketing specializes in all forms of experiential marketing, whether they take place at a formal event or in everyday consumer environments.',
    },
    {
      question: 'Can an experiential marketing agency handle nationwide campaigns?',
      answer:
        'Yes. A national experiential marketing agency like AirFresh Marketing is specifically built to execute campaigns across multiple cities simultaneously. We maintain pre-vetted talent pools, established vendor networks, and logistical infrastructure in over 50 U.S. cities. This means you get local market expertise combined with centralized strategy, consistent brand standards, unified reporting, and a single point of accountability. Our technology platform enables real-time oversight of all markets from a single dashboard, eliminating the complexity of coordinating with multiple local agencies.',
    },
    {
      question: 'What industries benefit most from experiential marketing?',
      answer:
        'Virtually every consumer-facing industry benefits from experiential marketing, but the highest ROI is typically seen in consumer packaged goods (product sampling drives trial and conversion), technology (hands-on demos overcome purchase hesitation), automotive (test drives and immersive brand experiences), food and beverage (tastings create immediate purchase intent), beauty and fashion (try-before-you-buy experiences), entertainment and media (immersive activations build anticipation), and sports (fan engagement deepens loyalty). AirFresh Marketing has executed successful experiential campaigns across all of these industries and more, including healthcare, financial services, and real estate.',
    },
  ]

  return (
    <div className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Breadcrumb */}
      <nav className="bg-gray-50 border-b" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-cyan-600">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3 h-3" />
            </li>
            <li className="text-gray-900 font-medium">Experiential Marketing Agency</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/40 via-transparent to-blue-900/40" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-300 uppercase tracking-wide">
                Full-Service Experiential Marketing Since 2004
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Experiential Marketing Agency —{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Immersive Brand Experiences Nationwide
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
              Experiential marketing agency AirFresh Marketing creates unforgettable brand activations that drive
              real consumer connections, measurable engagement, and lasting brand loyalty. For more than two decades,
              we have helped 300+ brands — from Fortune 500 enterprises to high-growth startups — design and execute
              immersive experiences across 50+ U.S. cities. Whether you need a single-market pop-up activation or a
              coast-to-coast mobile tour, our experiential marketing agency delivers end-to-end campaign execution
              powered by proprietary technology, trained talent, and data-driven strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-8 py-6 text-lg shadow-xl"
              >
                <Link href="/get-quote">
                  <Zap className="w-5 h-5 mr-2" />
                  Get a Free Campaign Proposal
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                <a href="tel:303-720-6060">
                  <Phone className="w-5 h-5 mr-2" />
                  (303) 720-6060
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {[
              { value: '500+', label: 'Campaigns Delivered' },
              { value: '50+', label: 'Cities Nationwide' },
              { value: '300+', label: 'Brands Served' },
              { value: '20+', label: 'Years of Experience' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                <div className="text-cyan-100 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AirFresh Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-50/50 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 rounded-full mb-6">
              <Award className="w-4 h-4 text-cyan-600" />
              <span className="text-sm font-semibold text-cyan-700 uppercase tracking-wide">
                Our Story
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Experiential Marketing Agency Built on{' '}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Two Decades of Innovation
              </span>
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Experiential marketing agency AirFresh Marketing was founded in 2004 with a clear vision: to bridge
                the gap between brands and consumers through meaningful, face-to-face experiences. At a time when
                most marketing budgets flowed exclusively into traditional media, we recognized that nothing creates
                brand loyalty faster than a personal, memorable interaction. Two decades later, that founding
                principle continues to drive every campaign we execute.
              </p>
              <p>
                From our headquarters in Denver, Colorado, we have grown from a regional event staffing company into
                a full-service experiential marketing agency with operations in more than 50 cities across the United
                States. Our evolution mirrors the growth of experiential marketing itself — from a niche tactic to
                a core pillar of modern brand strategy. Today, experiential marketing represents one of the
                fastest-growing segments of the marketing industry, and AirFresh Marketing is proud to be a leader
                driving that growth.
              </p>
              <p>
                What sets our experiential marketing agency apart is the combination of creative ambition and
                operational precision. We do not simply design beautiful experiences; we engineer campaigns that
                deliver measurable business outcomes. Our proprietary technology platform provides GPS-verified
                staff deployment, real-time performance dashboards, and comprehensive post-event analytics that
                give brands complete visibility into their experiential investment. This commitment to accountability
                has earned the trust of brands including Netflix, Google, Microsoft, Formula One, MAC Cosmetics,
                and hundreds more.
              </p>
              <p>
                As a{' '}
                <Link href="/services/experiential-marketing" className="text-cyan-600 hover:underline">
                  full-service experiential marketing
                </Link>{' '}
                partner, we handle every aspect of campaign development and execution — from initial strategy and
                creative concepting through{' '}
                <Link href="/services/brand-ambassadors" className="text-cyan-600 hover:underline">
                  brand ambassador staffing
                </Link>, production logistics, live execution, and post-event reporting. Our clients appreciate
                working with a single agency partner who can take their vision from concept to reality without
                the complexity of coordinating multiple vendors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8 Types of Experiential Marketing */}
      <section className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <Layers className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">
                Our Capabilities
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Experiential Marketing Agency Services —{' '}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                8 Core Activation Types
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experiential marketing agency capabilities must span the full spectrum of live brand experiences.
              AirFresh Marketing delivers expertise across every major activation format — each backed by proven
              process, trained talent, and measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experientialTypes.map((type, index) => {
              const Icon = type.icon
              return (
                <Card
                  key={index}
                  className="h-full bg-white border border-gray-100 hover:border-cyan-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className={`h-1.5 w-full bg-gradient-to-r ${type.color}`} />
                  <CardContent className="p-8">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-5`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{type.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Need a custom experiential concept or a combination of activation types?{' '}
              <Link href="/contact" className="text-cyan-600 hover:underline font-medium">
                Contact our strategy team
              </Link>{' '}
              to discuss your brand objectives. Explore our{' '}
              <Link href="/services/experiential-marketing" className="text-cyan-600 hover:underline font-medium">
                experiential marketing service page
              </Link>{' '}
              for additional detail on our capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/30 via-transparent to-blue-900/30" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-300 uppercase tracking-wide">
                Our Process
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Experiential Marketing Agency Process —{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                From Strategy to Analytics
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experiential marketing agency engagements at AirFresh Marketing follow a proven six-step process
              refined over 500+ campaigns. Each phase is designed to maximize creative impact while ensuring
              flawless operational execution and complete ROI accountability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.step} className="relative">
                  <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-cyan-400 text-sm font-bold mb-2 uppercase tracking-wide">
                      Step {item.step}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-14 text-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-10 py-6 text-lg shadow-xl"
            >
              <Link href="/get-quote">
                Start Your Campaign Brief
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Notable Campaigns */}
      <section className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <Star className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">
                Proven Results
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Experiential Marketing Agency Campaigns for{' '}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                World-Class Brands
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experiential marketing agency credibility is built on results. AirFresh Marketing has delivered
              500+ campaigns for 300+ brands — including some of the most recognizable names in entertainment,
              technology, consumer goods, and sports. Here are a few highlights from our portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notableCampaigns.map((study, index) => (
              <Link key={index} href={study.href} className="group">
                <Card className="h-full bg-white border border-gray-100 hover:border-cyan-200 shadow-sm hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="text-sm font-bold bg-cyan-50 text-cyan-700 px-3 py-1">
                        {study.brand}
                      </Badge>
                      <Badge variant="outline" className="text-xs font-semibold text-gray-600">
                        {study.metric}
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{study.description}</p>
                    <span className="inline-flex items-center text-cyan-600 text-sm font-semibold group-hover:gap-2 transition-all">
                      View case studies <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold"
            >
              <Link href="/case-studies">
                View All Case Studies
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 rounded-full mb-6">
              <Briefcase className="w-4 h-4 text-cyan-600" />
              <span className="text-sm font-semibold text-cyan-700 uppercase tracking-wide">
                Industry Expertise
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Experiential Marketing Agency Expertise Across{' '}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Every Major Industry
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experiential marketing agency services require deep understanding of each industry&apos;s unique
              consumer dynamics, regulatory requirements, and competitive landscape. AirFresh Marketing brings
              specialized experience across all major verticals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <Card
                  key={index}
                  className="bg-white border border-gray-100 hover:border-cyan-200 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{industry.name}</h3>
                    <p className="text-gray-600 text-sm">{industry.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technology Advantage */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/30 via-transparent to-blue-900/30" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full mb-6">
              <Smartphone className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-300 uppercase tracking-wide">
                Technology Platform
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Experiential Marketing Agency Technology That{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Delivers Accountability
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experiential marketing agency success depends on more than creative ideas — it demands operational
              precision and measurable accountability. Our proprietary technology platform sets AirFresh apart
              from every other experiential agency in the market.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: 'GPS Check-In Verification',
                description:
                  'Every team member checks in with GPS coordinates on our mobile app, providing real-time confirmation that your staff arrived at the correct location, on time. Eliminates no-shows and provides complete deployment visibility across all markets simultaneously.',
              },
              {
                icon: Video,
                title: 'Video-Based Training Platform',
                description:
                  'Custom brand training modules delivered via our mobile platform with embedded quizzes and knowledge verification. Staff arrive prepared with deep product knowledge and brand alignment — consistent quality whether you are activating in one city or fifty.',
              },
              {
                icon: BarChart3,
                title: 'Real-Time Reporting Dashboards',
                description:
                  'Live campaign dashboards accessible from any device give you instant visibility into consumer impressions, engagements, samples distributed, leads captured, photos, and custom KPIs. Post-event analytics delivered within 48 hours with actionable optimization insights.',
              },
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-14 text-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
            >
              <Link href="/technology">
                <Smartphone className="w-5 h-5 mr-2" />
                Explore Our Technology Platform
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* City Coverage */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-cyan-600" />
              <span className="text-sm font-semibold text-cyan-700 uppercase tracking-wide">
                National Coverage
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Experiential Marketing Agency Coverage in{' '}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                50+ U.S. Cities
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experiential marketing agency services from AirFresh Marketing are available in every major
              metropolitan area across the United States. Local talent, local knowledge, and local vendor
              relationships — backed by the consistency of a national operation.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/cities/${city.slug}`}
                className="bg-gray-50 rounded-xl p-4 text-center hover:shadow-lg hover:border-cyan-300 border border-gray-200 transition-all group"
              >
                <MapPin className="w-5 h-5 text-cyan-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-gray-900 text-sm">{city.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{city.state}</p>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4">
              Do not see your city? We expand into new markets regularly and can deploy teams to additional
              locations for specific campaigns. Our{' '}
              <Link href="/event-staffing-agency" className="text-cyan-600 hover:underline font-medium">
                event staffing agency
              </Link>{' '}
              infrastructure makes it possible to activate anywhere in the country.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" className="border-cyan-300 text-cyan-700 hover:bg-cyan-50">
                <Link href="/locations">
                  <MapPin className="w-4 h-4 mr-2" />
                  View All Locations
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-cyan-300 text-cyan-700 hover:bg-cyan-50">
                <Link href="/contact">
                  <Globe className="w-4 h-4 mr-2" />
                  Request a Custom Market
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Content Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Experiential Marketing Agency Selection — What Makes a Great Partner
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Experiential marketing agency selection is arguably the most important decision a brand makes when
              investing in live experiences. The agency you choose becomes the custodian of your brand in physical
              space — responsible for how consumers perceive, interact with, and remember your brand during the
              most impactful moments of engagement. Unlike digital advertising where creative can be adjusted in
              real time, experiential activations happen live, in front of real people, with no opportunity for a
              second first impression. This reality demands an agency partner with proven operational excellence,
              deep talent networks, and the strategic sophistication to translate brand objectives into physical
              experiences that resonate.
            </p>
            <p>
              When evaluating an experiential marketing agency, brands should begin by examining track record and
              breadth of experience. Has the agency executed campaigns at scale? Can they demonstrate success
              across multiple activation types — from intimate pop-ups to large-scale mobile tours? Do they have
              experience in your specific industry vertical? AirFresh Marketing brings 20+ years of campaign
              history across virtually every activation format and industry, with a portfolio that includes
              household-name brands and emerging challengers alike. Our longevity in this space means we have
              navigated every possible challenge — permit issues, weather disruptions, last-minute venue changes,
              staffing emergencies — and built systems to prevent and manage them.
            </p>
            <p>
              ROI measurement capability is another critical differentiator among experiential marketing agencies.
              The days of justifying experiential budgets with anecdotal feedback and estimated crowd counts are
              over. Modern brands demand the same data rigor from their experiential campaigns as they expect from
              digital channels. A great experiential marketing agency builds measurement into campaign design from
              day one — defining KPIs during strategy, engineering data capture into the consumer journey, and
              delivering comprehensive analytics that connect experiential touchpoints to business outcomes. At
              AirFresh Marketing, our{' '}
              <Link href="/technology" className="text-cyan-600 hover:underline">
                technology platform
              </Link>{' '}
              captures real-time data on impressions, engagements, conversions, and consumer sentiment, then
              synthesizes it into actionable post-event reports. This data-driven approach allows our clients to
              continuously optimize their experiential strategy and demonstrate clear return on investment to
              internal stakeholders.
            </p>
            <p>
              Finally, consider the agency&apos;s approach to talent and staffing. The people who represent your brand
              at live experiences are the single most important variable in campaign success. A great experiential
              marketing agency does not simply provide warm bodies — they recruit brand-aligned talent, deliver
              custom training that ensures authentic product knowledge, deploy accountability technology to verify
              performance, and provide field management to maintain quality standards in real time. AirFresh
              Marketing&apos;s{' '}
              <Link href="/services/brand-ambassadors" className="text-cyan-600 hover:underline">
                brand ambassador staffing
              </Link>{' '}
              operation is built on these principles, with video-based training, GPS-verified deployment, and
              dedicated field managers ensuring every consumer interaction reflects your brand at its best.
              Whether you are comparing us to other agencies or evaluating experiential marketing for the first
              time, we invite you to{' '}
              <Link href="/contact" className="text-cyan-600 hover:underline">
                schedule a strategy call
              </Link>{' '}
              to experience the AirFresh difference firsthand.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 rounded-full mb-6">
              <HelpCircle className="w-4 h-4 text-cyan-600" />
              <span className="text-sm font-semibold text-cyan-700 uppercase tracking-wide">
                FAQ
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Experiential Marketing Agency{' '}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border border-gray-200 hover:border-cyan-200 transition-colors">
                <CardContent className="p-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Experiential Marketing Agency Resources &amp; Related Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Experiential Marketing Services', href: '/services/experiential-marketing' },
              { label: 'Brand Ambassador Services', href: '/services/brand-ambassadors' },
              { label: 'Event Staffing Agency', href: '/event-staffing-agency' },
              { label: 'Hire Brand Ambassadors', href: '/hire-brand-ambassadors' },
              { label: 'Promotional Staffing Agency', href: '/promotional-staffing-agency' },
              { label: 'Corporate Event Staffing', href: '/corporate-event-staffing' },
              { label: 'Event Marketing Agency', href: '/event-marketing-agency' },
              { label: 'Brand Activation Agency', href: '/brand-activation-agency' },
              { label: 'Case Studies', href: '/case-studies' },
              { label: 'Technology Platform', href: '/technology' },
              { label: 'Pricing', href: '/pricing' },
              { label: 'Contact Us', href: '/contact' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 p-4 bg-white rounded-lg border border-gray-200 hover:border-cyan-300 hover:shadow-md transition-all group"
              >
                <ArrowRight className="w-4 h-4 text-cyan-500 group-hover:translate-x-1 transition-transform" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-cyan-700">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/40 via-transparent to-blue-900/40" />
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experiential Marketing Agency Ready to{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Bring Your Brand to Life
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            From strategy and creative through staffing, execution, and analytics — AirFresh Marketing is the
            experiential marketing agency that delivers measurable results for brands that demand more from their
            live experiences. Let us show you what 20+ years of expertise can do for your next campaign.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-10 py-6 text-lg shadow-xl"
            >
              <Link href="/get-quote">
                <Zap className="w-5 h-5 mr-2" />
                Get a Free Campaign Proposal
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
            >
              <Link href="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Schedule a Strategy Call
              </Link>
            </Button>
          </div>
          <p className="mt-8 text-gray-400 text-sm">
            Or call us directly at{' '}
            <a href="tel:303-720-6060" className="text-cyan-400 hover:underline">
              (303) 720-6060
            </a>{' '}
            — our team responds within one business day.
          </p>
        </div>
      </section>
    </div>
  )
}
