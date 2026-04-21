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
  ShoppingBag,
  Tv,
  Car,
  Beer,
  HeartPulse,
  Cpu,
  Music,
  Utensils,
} from 'lucide-react'

export default function BrandAmbassadorAgencyPage() {
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a brand ambassador agency?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A brand ambassador agency is a specialized staffing and marketing company that recruits, trains, and manages brand ambassadors on behalf of businesses. Unlike general temp agencies, a brand ambassador agency focuses specifically on finding talent who can authentically represent brands at live events, trade shows, product launches, sampling campaigns, and experiential marketing activations. AirFresh Marketing is a full-service brand ambassador agency with over 20 years of experience deploying trained brand ambassadors across 50+ US cities.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does a brand ambassador agency charge?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Brand ambassador agency rates vary based on the type of ambassador, market location, campaign duration, and scope. Event brand ambassadors typically cost $35 to $65 per hour, trade show specialists range from $40 to $75 per hour, in-store demo staff cost $35 to $55 per hour, and promotional models range from $50 to $95 per hour. Premium markets like New York, Los Angeles, and Miami command higher rates. AirFresh Marketing provides all-inclusive pricing covering recruitment, training, GPS-verified check-ins, management, and reporting with no hidden fees.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does a brand ambassador agency train its staff?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A professional brand ambassador agency uses a multi-step training process. At AirFresh Marketing, every brand ambassador completes custom video-based training modules specific to your brand, product, and campaign objectives. Training includes product knowledge quizzes, brand voice guidelines, consumer engagement techniques, and campaign-specific protocols. Ambassadors must pass verification assessments before deployment. This ensures every representative can articulate your value proposition and engage consumers authentically.',
        },
      },
      {
        '@type': 'Question',
        name: 'How quickly can a brand ambassador agency deploy staff?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Deployment timelines depend on campaign complexity and market. AirFresh Marketing can deploy brand ambassadors in as little as 48 to 72 hours for urgent requests in major markets thanks to our pre-vetted talent pools in 50+ cities. For optimal results with custom training and talent matching, we recommend 2 to 4 weeks lead time for standard campaigns and 4 to 8 weeks for large-scale multi-city tours. Rush deployments may incur a 15 to 25 percent expedite fee.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between a brand ambassador agency and a staffing agency?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A traditional staffing agency provides general temporary workers across industries like warehousing, office admin, and food service. A brand ambassador agency specializes exclusively in experiential marketing talent with skills in consumer engagement, product demonstration, lead capture, brand storytelling, and event activation. Brand ambassador agencies like AirFresh Marketing also provide campaign-specific training, GPS-verified accountability technology, real-time reporting dashboards, and dedicated account management that general staffing firms cannot offer.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can a brand ambassador agency handle nationwide campaigns?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. A national brand ambassador agency like AirFresh Marketing maintains pre-vetted talent pools across 50+ US cities, enabling seamless multi-market execution through a single agency partner. This eliminates the need to coordinate with multiple local agencies while ensuring consistent training, quality standards, and reporting across every market. Our centralized technology platform provides unified campaign management whether you are activating in 1 city or 50.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you measure brand ambassador campaign success?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A professional brand ambassador agency tracks multiple performance metrics including consumer interactions, samples distributed, leads captured, social media impressions, sales conversions, and brand sentiment. AirFresh Marketing provides real-time reporting dashboards during campaigns and delivers comprehensive post-event recaps within 24 hours featuring photos, GPS-verified attendance data, engagement metrics, and ROI analysis. Our technology platform captures data at every touchpoint for full campaign transparency.',
        },
      },
    ],
  }

  const ambassadorTypes = [
    {
      title: 'Event Brand Ambassadors',
      description:
        'Charismatic, outgoing professionals trained to represent your brand at live events, product launches, grand openings, and brand activations. They excel at consumer engagement, product education, lead capture, and creating memorable brand experiences that drive loyalty and conversion.',
      icon: Users,
      color: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'In-Store Demo Specialists',
      description:
        'Experienced product demonstration experts for grocery chains, retail stores, big box locations, and specialty shops. Food handler certified where required. Trained in sampling best practices, conversion techniques, and compliant product messaging to drive trial and purchase at point of sale.',
      icon: ShoppingBag,
      color: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Trade Show Staff',
      description:
        'Professional booth staff for trade shows, conventions, and industry expos from CES and SXSW to regional conferences. Skilled in lead qualification, product demonstration, badge scanning, and attendee engagement. They turn booth traffic into qualified sales pipeline.',
      icon: Building,
      color: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'Street Team Members',
      description:
        'High-energy, outgoing team members for guerrilla marketing, flyering, product sampling, and grassroots buzz campaigns. Deployed in targeted neighborhoods, transit hubs, college campuses, and high-traffic zones to generate awareness and drive trial at scale.',
      icon: Megaphone,
      color: 'from-orange-500 to-red-600',
    },
    {
      title: 'Promotional Models',
      description:
        'Polished, articulate promotional talent for premium brand activations, auto shows, luxury events, trade shows, and high-profile experiential campaigns. Professional appearance combined with strong product knowledge and the ability to engage diverse audiences.',
      icon: Award,
      color: 'from-pink-500 to-rose-600',
    },
    {
      title: 'Digital & Social Media Ambassadors',
      description:
        'Content-savvy brand representatives who create authentic social media content, capture user-generated photos and videos, drive hashtag engagement, and amplify your brand presence across Instagram, TikTok, and other platforms during live events and ongoing campaigns.',
      icon: Smartphone,
      color: 'from-purple-500 to-violet-600',
    },
  ]

  const processSteps = [
    {
      step: 1,
      title: 'Consultation & Campaign Brief',
      description:
        'Share your campaign objectives, brand guidelines, target audience, event details, and staffing requirements. Our team responds with a detailed staffing proposal and transparent pricing within one business day.',
      icon: FileText,
    },
    {
      step: 2,
      title: 'Talent Matching & Selection',
      description:
        'We hand-select brand ambassadors from our local talent pools based on experience, skills, personality, and brand alignment. You review profiles and approve your team before we proceed to training.',
      icon: Users,
    },
    {
      step: 3,
      title: 'Training & Certification',
      description:
        'Every ambassador completes custom video-based brand training modules with product knowledge quizzes and verification assessments. They arrive fully prepared to represent your brand with confidence and accuracy.',
      icon: Award,
    },
    {
      step: 4,
      title: 'Deployment with GPS Tracking',
      description:
        'On activation day, ambassadors check in via our GPS-verified mobile app. You receive real-time confirmation of on-site arrival at the correct location. Dedicated field managers coordinate logistics on the ground.',
      icon: MapPin,
    },
    {
      step: 5,
      title: 'Real-Time Reporting & Recap',
      description:
        'Access live campaign dashboards to monitor interactions, samples, leads, and photos as they happen. Comprehensive post-event recap reports with full performance data and ROI metrics delivered within 24 hours.',
      icon: BarChart3,
    },
  ]

  const industries = [
    { name: 'Technology & SaaS', icon: Cpu, description: 'Trade shows, product demos, and launch events' },
    { name: 'Food & Beverage', icon: Utensils, description: 'In-store sampling, festivals, and tastings' },
    { name: 'Alcohol & Spirits', icon: Beer, description: 'Bar promotions, tastings, and brand nights' },
    { name: 'Automotive', icon: Car, description: 'Auto shows, test drives, and dealership events' },
    { name: 'Entertainment & Media', icon: Tv, description: 'Premieres, street teams, and fan activations' },
    { name: 'Health & Wellness', icon: HeartPulse, description: 'Fitness events, expos, and sampling' },
    { name: 'Retail & Fashion', icon: ShoppingBag, description: 'Pop-ups, store openings, and launches' },
    { name: 'Music & Festivals', icon: Music, description: 'Concert activations and festival sponsorships' },
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

  const caseStudies = [
    {
      brand: 'Netflix',
      description: 'Multi-city brand ambassador campaign for a new series launch with street teams and experiential activations across 12 major markets. GPS-verified deployments with real-time photo reporting.',
      metric: '2M+ Impressions',
      href: '/case-studies',
    },
    {
      brand: 'Formula 1',
      description: 'Large-scale brand ambassador deployment for the Las Vegas Grand Prix featuring 100+ trained ambassadors managing VIP hospitality, fan engagement zones, and sponsor activations.',
      metric: '100+ Ambassadors',
      href: '/case-studies',
    },
    {
      brand: 'Microsoft',
      description: 'Trade show brand ambassadors for product demonstrations and lead capture at CES, enterprise technology conferences, and Microsoft-hosted launch events nationwide.',
      metric: '5,000+ Leads',
      href: '/case-studies',
    },
    {
      brand: 'Google',
      description: 'Brand ambassador teams for product sampling activations, pop-up experiences, and device launch events in top-tier markets across the United States.',
      metric: '25+ Events',
      href: '/case-studies',
    },
  ]

  const benefits = [
    {
      icon: Shield,
      title: 'Vetted & Background Checked',
      description:
        'Every brand ambassador passes background checks, professional screening, and in-person or video interviews before joining our talent network. Only the top 15% of applicants are accepted.',
    },
    {
      icon: Video,
      title: 'Custom Brand Training',
      description:
        'Video-based training modules with quizzes ensure every ambassador arrives with deep product knowledge, brand voice alignment, and campaign-specific protocols. No generic orientations.',
    },
    {
      icon: Smartphone,
      title: 'GPS-Verified Accountability',
      description:
        'Real-time GPS check-ins confirm your ambassadors arrived at the correct location, on time, every time. Eliminate no-shows and guesswork with technology-verified attendance.',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Campaign Dashboards',
      description:
        'Live reporting dashboards let you monitor consumer interactions, samples distributed, leads captured, photos, and KPIs as they happen. Full transparency throughout every activation.',
    },
    {
      icon: Globe,
      title: '50+ Cities Nationwide',
      description:
        'Pre-vetted local talent pools in over 50 major US cities. Execute multi-city campaigns through a single agency partner with consistent quality across every market.',
    },
    {
      icon: Zap,
      title: '48-Hour Rush Deployment',
      description:
        'Urgent campaign needs? Our deep local networks and streamlined onboarding enable qualified brand ambassador deployment in as little as 48 hours in most major markets.',
    },
  ]

  const faqs = [
    {
      question: 'What is a brand ambassador agency?',
      answer:
        'A brand ambassador agency is a specialized staffing and marketing company that recruits, trains, and manages brand ambassadors on behalf of businesses. Unlike general temp agencies, a brand ambassador agency focuses specifically on finding talent who can authentically represent brands at live events, trade shows, product launches, sampling campaigns, and experiential marketing activations. AirFresh Marketing is a full-service brand ambassador agency with over 20 years of experience deploying trained brand ambassadors across 50+ US cities.',
    },
    {
      question: 'How much does a brand ambassador agency charge?',
      answer:
        'Brand ambassador agency rates vary based on the type of ambassador, market location, campaign duration, and scope. Event brand ambassadors typically cost $35 to $65 per hour, trade show specialists range from $40 to $75 per hour, in-store demo staff cost $35 to $55 per hour, and promotional models range from $50 to $95 per hour. Premium markets like New York, Los Angeles, and Miami command higher rates. AirFresh Marketing provides all-inclusive pricing covering recruitment, training, GPS-verified check-ins, management, and reporting with no hidden fees.',
    },
    {
      question: 'How does a brand ambassador agency train its staff?',
      answer:
        'A professional brand ambassador agency uses a multi-step training process. At AirFresh Marketing, every brand ambassador completes custom video-based training modules specific to your brand, product, and campaign objectives. Training includes product knowledge quizzes, brand voice guidelines, consumer engagement techniques, and campaign-specific protocols. Ambassadors must pass verification assessments before deployment. This ensures every representative can articulate your value proposition and engage consumers authentically.',
    },
    {
      question: 'How quickly can a brand ambassador agency deploy staff?',
      answer:
        'Deployment timelines depend on campaign complexity and market. AirFresh Marketing can deploy brand ambassadors in as little as 48 to 72 hours for urgent requests in major markets thanks to our pre-vetted talent pools in 50+ cities. For optimal results with custom training and talent matching, we recommend 2 to 4 weeks lead time for standard campaigns and 4 to 8 weeks for large-scale multi-city tours. Rush deployments may incur a 15 to 25 percent expedite fee.',
    },
    {
      question: 'What is the difference between a brand ambassador agency and a staffing agency?',
      answer:
        'A traditional staffing agency provides general temporary workers across industries like warehousing, office admin, and food service. A brand ambassador agency specializes exclusively in experiential marketing talent with skills in consumer engagement, product demonstration, lead capture, brand storytelling, and event activation. Brand ambassador agencies like AirFresh Marketing also provide campaign-specific training, GPS-verified accountability technology, real-time reporting dashboards, and dedicated account management that general staffing firms cannot offer.',
    },
    {
      question: 'Can a brand ambassador agency handle nationwide campaigns?',
      answer:
        'Yes. A national brand ambassador agency like AirFresh Marketing maintains pre-vetted talent pools across 50+ US cities, enabling seamless multi-market execution through a single agency partner. This eliminates the need to coordinate with multiple local agencies while ensuring consistent training, quality standards, and reporting across every market. Our centralized technology platform provides unified campaign management whether you are activating in 1 city or 50.',
    },
    {
      question: 'How do you measure brand ambassador campaign success?',
      answer:
        'A professional brand ambassador agency tracks multiple performance metrics including consumer interactions, samples distributed, leads captured, social media impressions, sales conversions, and brand sentiment. AirFresh Marketing provides real-time reporting dashboards during campaigns and delivers comprehensive post-event recaps within 24 hours featuring photos, GPS-verified attendance data, engagement metrics, and ROI analysis. Our technology platform captures data at every touchpoint for full campaign transparency.',
    },
  ]

  return (
    <div className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
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
            <li className="text-gray-900 font-medium">Brand Ambassador Agency</li>
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
                Trusted by 300+ Brands Since 2004
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Brand Ambassador Agency —{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Trained Staff in 50+ Cities
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
              Brand ambassador agency services from AirFresh Marketing connect your brand with trained, vetted,
              and GPS-verified brand ambassadors in over 50 cities nationwide. Whether you need ambassadors for a
              single product launch or a 50-market national tour, our brand ambassador agency has delivered
              results-driven experiential marketing campaigns for Fortune 500 companies and high-growth startups
              since 2004. Every engagement includes custom video training, real-time reporting dashboards, and a
              dedicated account manager committed to your campaign success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-8 py-6 text-lg shadow-xl"
              >
                <Link href="/get-quote">
                  <Zap className="w-5 h-5 mr-2" />
                  Get a Free Quote
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
              { value: '5,000+', label: 'Brand Ambassadors Deployed' },
              { value: '50+', label: 'Cities Nationwide' },
              { value: '1,000+', label: 'Campaigns Completed' },
              { value: '20+', label: 'Years Experience' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                <div className="text-cyan-100 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose a Professional Brand Ambassador Agency */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-50/50 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 rounded-full mb-6">
              <CheckCircle2 className="w-4 h-4 text-cyan-600" />
              <span className="text-sm font-semibold text-cyan-700 uppercase tracking-wide">
                Why AirFresh
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Brand Ambassador Agency Benefits That{' '}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Set Us Apart
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Brand ambassador agency quality varies enormously. AirFresh Marketing has spent over two decades
              building the technology, talent networks, training systems, and operational processes that make us
              the preferred brand ambassador agency for brands demanding measurable ROI from every activation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card
                  key={index}
                  className="h-full bg-white border border-gray-100 hover:border-cyan-200 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="w-12 h-12 mb-5 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Learn more about the proprietary technology powering our brand ambassador operations.
            </p>
            <Button asChild variant="outline" className="border-cyan-300 text-cyan-700 hover:bg-cyan-50">
              <Link href="/technology">
                <Smartphone className="w-4 h-4 mr-2" />
                Explore Our Technology Platform
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 6 Types of Brand Ambassadors */}
      <section className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <Users className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">
                Ambassador Types
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Brand Ambassador Agency Services for{' '}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Every Campaign Type
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Brand ambassador agency needs differ by campaign objective, venue, and audience. AirFresh Marketing
              provides six distinct categories of brand ambassadors, each trained for specific activation
              environments and marketing goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ambassadorTypes.map((type, index) => {
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
            <p className="text-gray-600">
              Need a specific type of brand ambassador or a custom combination?{' '}
              <Link href="/contact" className="text-cyan-600 hover:underline font-medium">
                Contact our team
              </Link>{' '}
              to discuss your requirements. You can also explore our{' '}
              <Link href="/services/brand-ambassadors" className="text-cyan-600 hover:underline font-medium">
                brand ambassador services page
              </Link>{' '}
              or learn about{' '}
              <Link href="/hire-brand-ambassadors" className="text-cyan-600 hover:underline font-medium">
                hiring brand ambassadors
              </Link>{' '}
              for your next campaign.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works - 5 Steps */}
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
              Brand Ambassador Agency Process —{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Five Proven Steps
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Brand ambassador agency engagements with AirFresh Marketing follow a proven five-step process
              engineered to deliver consistent, measurable results whether you are staffing one event or a
              50-city national tour.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.step} className="relative">
                  <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-cyan-400 text-sm font-bold mb-2 uppercase tracking-wide">
                      Step {item.step}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
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
              <Link href="/contact">
                Start Your Campaign Brief
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <Briefcase className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">
                Industries We Serve
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Brand Ambassador Agency Experience Across{' '}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Every Major Industry
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Brand ambassador agency expertise requires deep industry knowledge. AirFresh Marketing has
              deployed trained ambassadors across virtually every consumer-facing vertical, from technology
              and automotive to food and beverage and entertainment.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <Card
                  key={index}
                  className="bg-gray-50 border border-gray-100 hover:border-cyan-200 hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">{industry.name}</h3>
                    <p className="text-xs text-gray-500">{industry.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4">
              Explore industry-specific brand ambassador solutions for your vertical.
            </p>
            <Button asChild variant="outline" className="border-cyan-300 text-cyan-700 hover:bg-cyan-50">
              <Link href="/services/experiential-marketing">
                <Target className="w-4 h-4 mr-2" />
                Experiential Marketing Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* City Coverage - 24 Cities */}
      <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-cyan-600" />
              <span className="text-sm font-semibold text-cyan-700 uppercase tracking-wide">
                National Coverage
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Brand Ambassador Agency Coverage in{' '}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                50+ U.S. Cities
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Brand ambassador agency services from AirFresh Marketing are available in every major metropolitan
              area across the United States. Our local talent pools ensure you get brand ambassadors who know your
              market combined with the consistent quality of a national operation.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/cities/${city.slug}`}
                className="bg-white rounded-xl p-4 text-center hover:shadow-lg hover:border-cyan-300 border border-gray-200 transition-all group"
              >
                <MapPin className="w-5 h-5 text-cyan-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-gray-900 text-sm">{city.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{city.state}</p>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4">
              Do not see your city? We expand into new markets regularly and can source brand ambassador talent
              in additional locations for specific campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" className="border-cyan-300 text-cyan-700 hover:bg-cyan-50">
                <Link href="/locations">
                  <MapPin className="w-4 h-4 mr-2" />
                  View All Locations
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-cyan-300 text-cyan-700 hover:bg-cyan-50">
                <Link href="/event-staffing-near-me">
                  <Globe className="w-4 h-4 mr-2" />
                  Event Staffing Near Me
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-cyan-50 border border-cyan-100 rounded-3xl p-10 md:p-16">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 rounded-full mb-6">
                <Target className="w-4 h-4 text-cyan-600" />
                <span className="text-sm font-semibold text-cyan-700 uppercase tracking-wide">
                  Transparent Pricing
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Brand Ambassador Agency Pricing — All-Inclusive Rates
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Brand ambassador agency pricing at AirFresh Marketing is transparent and all-inclusive. Our rates
                cover recruitment, vetting, background checks, custom brand training, GPS-verified check-ins,
                on-site management coordination, real-time reporting access, and post-event recap delivery. No
                hidden fees, no surprise charges.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                {[
                  { role: 'Event BAs', range: '$35-65/hr' },
                  { role: 'Trade Show', range: '$40-75/hr' },
                  { role: 'Demo Staff', range: '$35-55/hr' },
                  { role: 'Promo Models', range: '$50-95/hr' },
                ].map((price, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="text-lg font-bold text-cyan-600">{price.range}</div>
                    <div className="text-sm text-gray-500">{price.role}</div>
                  </div>
                ))}
              </div>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-8 py-6 text-lg"
              >
                <Link href="/pricing">
                  View Full Pricing Details
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
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
              Brand Ambassador Agency Results for{' '}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                World-Class Brands
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Brand ambassador agency performance is measured by results. AirFresh Marketing has delivered
              measurable outcomes for 300+ brands including Netflix, Formula 1, Microsoft, and Google across
              industries from entertainment and motorsport to enterprise technology and consumer products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudies.map((study, index) => (
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

      {/* Deep Content Section - Complete Guide */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Brand Ambassador Agency — Complete Guide to Hiring the Right Partner
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Brand ambassador agency selection is one of the most important decisions a brand can make when
              planning experiential marketing campaigns. The ambassadors who represent your company at live
              events, trade shows, product launches, and sampling activations are the human embodiment of
              your brand. Their professionalism, product knowledge, authenticity, and ability to connect with
              consumers directly influence campaign ROI, brand perception, customer acquisition costs, and
              long-term brand loyalty.
            </p>
            <p>
              The brand ambassador agency industry has evolved significantly over the past two decades. What
              began as a fragmented network of local talent agencies and freelance coordinators has matured
              into a sophisticated sector with technology-driven operations, standardized training protocols,
              GPS-verified accountability systems, and data-rich performance reporting. AirFresh Marketing has
              led this evolution since 2004, pioneering many of the systems and processes that define modern
              brand ambassador agency operations — including GPS-verified mobile check-ins, video-based brand
              training platforms with quiz verification, and real-time campaign performance dashboards that
              provide brands with unprecedented transparency into their activations.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              What to Look for in a Brand Ambassador Agency
            </h3>
            <p>
              When evaluating a brand ambassador agency, brands should assess several critical capabilities.
              First, examine geographic reach — can the agency deploy trained ambassadors in every market you
              need, or will you be forced to coordinate with multiple vendors in different cities? AirFresh
              Marketing covers 50+ cities through a single point of contact, eliminating the complexity of
              multi-vendor coordination while maintaining local market expertise in every city.
            </p>
            <p>
              Second, investigate the agency&apos;s training methodology. Generic orientations and basic
              briefing documents are insufficient for creating authentic brand representatives. Your{' '}
              <Link href="/services/brand-ambassadors" className="text-cyan-600 hover:underline">
                brand ambassadors
              </Link>{' '}
              should complete custom video-based training with product knowledge quizzes and verification
              assessments before they ever interact with your customers. This investment in training is what
              separates a professional brand ambassador agency from a general temp staffing firm.
            </p>
            <p>
              Third, ask about accountability and verification technology. GPS-verified check-ins, like those
              built into the{' '}
              <Link href="/technology" className="text-cyan-600 hover:underline">
                AirFresh technology platform
              </Link>, eliminate the no-show problems and location fraud that plague traditional staffing
              approaches. When a brand ambassador checks in, you should receive real-time confirmation with
              GPS coordinates proving they arrived at the correct venue, at the scheduled time.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Brand Ambassador Agency vs. Hiring Directly
            </h3>
            <p>
              Many brands consider hiring brand ambassadors directly through job boards or social media. While
              this approach can work for ongoing, single-location programs, it presents significant challenges
              for event-based and multi-city campaigns. Direct hiring requires the brand to handle recruitment
              advertising, resume screening, interviewing, background checks, training development, scheduling,
              payroll processing, workers compensation insurance, on-site management, and performance tracking
              — all operational functions that a brand ambassador agency handles end-to-end.
            </p>
            <p>
              Working with a professional brand ambassador agency like AirFresh Marketing provides several
              distinct advantages: access to pre-vetted talent pools in 50+ cities, established training
              infrastructure that can be customized within days, GPS-verified accountability technology, W-2
              employment handling that protects the client from worker misclassification liability, dedicated
              account managers who serve as a single point of contact, and comprehensive reporting that
              quantifies campaign performance. For most brands, the all-inclusive per-hour rate from a brand
              ambassador agency represents better total value than the hidden costs of direct hiring when you
              factor in recruitment time, training development, technology, insurance, and management overhead.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Brand Ambassador Agency for Multi-City National Campaigns
            </h3>
            <p>
              One of the most complex challenges in experiential marketing is maintaining brand consistency
              across multiple cities simultaneously. When you run a product sampling tour through{' '}
              <Link href="/cities/new-york" className="text-cyan-600 hover:underline">New York</Link>,{' '}
              <Link href="/cities/los-angeles" className="text-cyan-600 hover:underline">Los Angeles</Link>,{' '}
              <Link href="/cities/chicago" className="text-cyan-600 hover:underline">Chicago</Link>,{' '}
              <Link href="/cities/miami" className="text-cyan-600 hover:underline">Miami</Link>, and{' '}
              <Link href="/cities/denver" className="text-cyan-600 hover:underline">Denver</Link>,
              every ambassador team in every market must deliver the same caliber of brand representation,
              product knowledge, and consumer engagement quality.
            </p>
            <p>
              This is where a national brand ambassador agency provides significant value over assembling
              local agencies in each city. AirFresh Marketing&apos;s centralized training platform ensures
              every ambassador across every market receives identical brand education. Our standardized
              operating procedures create consistency in setup, consumer interaction protocols, data capture,
              and tear-down. Our unified reporting dashboard aggregates performance data from all markets into
              a single view, enabling real-time comparison and optimization. This national infrastructure is
              why brands like Netflix, Microsoft, and Google choose AirFresh Marketing as their brand
              ambassador agency partner for multi-city campaigns.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Brand Ambassador Agency Services Beyond Staffing
            </h3>
            <p>
              A full-service brand ambassador agency offers capabilities far beyond placing bodies at events.
              AirFresh Marketing provides end-to-end{' '}
              <Link href="/services/experiential-marketing" className="text-cyan-600 hover:underline">
                experiential marketing services
              </Link>{' '}
              including campaign strategy development, activation concept design, logistics coordination,
              vendor management, real-time campaign optimization, and comprehensive post-campaign analysis
              with ROI attribution. Our team serves as an extension of your marketing department, handling
              the operational complexity of live activations so your team can focus on creative strategy and
              brand direction.
            </p>
            <p>
              Whether you need a single brand ambassador for an in-store demo or a team of 200 for a
              multi-day festival activation, the right brand ambassador agency makes the difference between
              campaigns that generate measurable business results and activations that consume budget without
              demonstrable return. Explore our full range of services on our{' '}
              <Link href="/services/brand-ambassadors" className="text-cyan-600 hover:underline">
                brand ambassador services page
              </Link>{' '}
              or visit our{' '}
              <Link href="/event-staffing-agency" className="text-cyan-600 hover:underline">
                event staffing agency page
              </Link>{' '}
              for broader staffing capabilities.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Brand Ambassador Agency Pricing and What to Expect
            </h3>
            <p>
              Transparent pricing is a hallmark of a reputable brand ambassador agency. At AirFresh Marketing,
              our all-inclusive rates cover every aspect of the ambassador lifecycle: recruitment, vetting,
              background checks, custom video-based brand training, GPS-verified mobile check-ins, on-site
              management coordination, real-time reporting dashboard access, and post-event recap delivery
              with photos and metrics. We do not charge hidden fees for training development, technology
              access, or reporting. Visit our{' '}
              <Link href="/pricing" className="text-cyan-600 hover:underline">
                pricing page
              </Link>{' '}
              for detailed rate ranges by role and market, or{' '}
              <Link href="/get-quote" className="text-cyan-600 hover:underline">
                request a custom quote
              </Link>{' '}
              for your specific campaign.
            </p>

            <p className="mt-8">
              Ready to partner with a proven brand ambassador agency?{' '}
              <Link href="/contact" className="text-cyan-600 hover:underline font-medium">
                Contact AirFresh Marketing
              </Link>{' '}
              and receive a detailed staffing proposal within one business day. Or call our team directly at{' '}
              <a href="tel:303-720-6060" className="text-cyan-600 hover:underline font-medium">
                (303) 720-6060
              </a>{' '}
              to discuss your upcoming campaign. You can also explore our{' '}
              <Link href="/hire-brand-ambassadors" className="text-cyan-600 hover:underline font-medium">
                hire brand ambassadors
              </Link>{' '}
              page for additional information on working with our agency.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 bg-gray-50 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 rounded-full mb-6">
              <HelpCircle className="w-4 h-4 text-cyan-600" />
              <span className="text-sm font-semibold text-cyan-700 uppercase tracking-wide">
                Common Questions
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Brand Ambassador Agency{' '}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                FAQ
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Answers to the most common questions about hiring a brand ambassador agency and working with
              AirFresh Marketing for your campaigns.
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

      {/* Related Internal Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Brand Ambassador Agency Resources
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/services/brand-ambassadors"
              className="group p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-cyan-400 hover:shadow-md transition-all"
            >
              <div className="font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                Brand Ambassador Services
              </div>
              <p className="text-sm text-gray-500 mt-1">Full service details and capabilities</p>
            </Link>
            <Link
              href="/hire-brand-ambassadors"
              className="group p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-cyan-400 hover:shadow-md transition-all"
            >
              <div className="font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                Hire Brand Ambassadors
              </div>
              <p className="text-sm text-gray-500 mt-1">Step-by-step guide to hiring BAs</p>
            </Link>
            <Link
              href="/services/experiential-marketing"
              className="group p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-cyan-400 hover:shadow-md transition-all"
            >
              <div className="font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                Experiential Marketing
              </div>
              <p className="text-sm text-gray-500 mt-1">Full-service experiential campaigns</p>
            </Link>
            <Link
              href="/event-staffing-agency"
              className="group p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-cyan-400 hover:shadow-md transition-all"
            >
              <div className="font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                Event Staffing Agency
              </div>
              <p className="text-sm text-gray-500 mt-1">Broader event staffing capabilities</p>
            </Link>
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
            <Zap className="w-4 h-4 text-cyan-200" />
            <span className="text-sm font-semibold text-cyan-100 uppercase tracking-wide">
              Free, No-Obligation Quote
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Partner with a Proven Brand Ambassador Agency
          </h2>
          <p className="text-xl md:text-2xl text-cyan-50 max-w-3xl mx-auto mb-10 leading-relaxed">
            AirFresh Marketing is the brand ambassador agency trusted by Netflix, Formula 1, Microsoft, Google,
            and 300+ brands nationwide. Tell us about your campaign and receive a detailed proposal within one
            business day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-cyan-600 hover:bg-gray-100 font-bold text-lg px-10 py-7 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              <Link href="/get-quote">
                <Zap className="w-6 h-6 mr-3" />
                Get My Free Quote
                <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 text-lg px-10 py-7"
            >
              <Link href="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-cyan-100 text-sm">
            {[
              'Free Quote in 24 Hours',
              'No Hidden Fees',
              '50+ Cities Nationwide',
              '5,000+ Ambassadors Deployed',
              '20+ Years Experience',
            ].map((trust, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-300" />
                {trust}
              </div>
            ))}
          </div>
          <div className="mt-10 pt-8 border-t border-white/10">
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <Link href="/services/brand-ambassadors" className="text-white/70 hover:text-cyan-200 transition-colors">
                Brand Ambassadors
              </Link>
              <Link href="/hire-brand-ambassadors" className="text-white/70 hover:text-cyan-200 transition-colors">
                Hire Brand Ambassadors
              </Link>
              <Link href="/services/experiential-marketing" className="text-white/70 hover:text-cyan-200 transition-colors">
                Experiential Marketing
              </Link>
              <Link href="/event-staffing-agency" className="text-white/70 hover:text-cyan-200 transition-colors">
                Event Staffing Agency
              </Link>
              <Link href="/pricing" className="text-white/70 hover:text-cyan-200 transition-colors">
                Pricing
              </Link>
              <Link href="/technology" className="text-white/70 hover:text-cyan-200 transition-colors">
                Technology
              </Link>
              <Link href="/contact" className="text-white/70 hover:text-cyan-200 transition-colors">
                Contact
              </Link>
              <Link href="/case-studies" className="text-white/70 hover:text-cyan-200 transition-colors">
                Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
