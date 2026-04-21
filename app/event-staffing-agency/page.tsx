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
} from 'lucide-react'

export default function EventStaffingAgencyPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
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
            name: 'Event Staffing Agency',
            item: 'https://www.airfreshmarketing.com/event-staffing-agency',
          },
        ],
      },
      {
        '@type': 'Service',
        name: 'Event Staffing Agency Services',
        description:
          'Professional event staffing agency providing trained brand ambassadors, promotional models, trade show staff, convention staff, street teams, and sampling teams in 50+ cities across the United States.',
        provider: {
          '@type': 'Organization',
          name: 'Air Fresh Marketing',
          url: 'https://www.airfreshmarketing.com',
          telephone: '+1-303-720-6060',
          email: 'hello@airfreshmarketing.com',
          foundingDate: '2004',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '1580 N. Logan St. Suite 660',
            addressLocality: 'Denver',
            addressRegion: 'CO',
            postalCode: '80203',
            addressCountry: 'US',
          },
          sameAs: [
            'https://www.instagram.com/airfreshmarketing',
            'https://www.linkedin.com/company/airfreshmarketing',
          ],
        },
        areaServed: {
          '@type': 'Country',
          name: 'United States',
        },
        serviceType: [
          'Event Staffing',
          'Brand Ambassadors',
          'Promotional Models',
          'Trade Show Staff',
          'Convention Staff',
          'Street Teams',
          'Product Sampling Staff',
        ],
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'USD',
          lowPrice: '30',
          highPrice: '95',
          offerCount: '7',
          availability: 'https://schema.org/InStock',
        },
        url: 'https://www.airfreshmarketing.com/event-staffing-agency',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What does an event staffing agency do?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'An event staffing agency recruits, trains, and manages professional event personnel on behalf of brands and companies. This includes brand ambassadors, promotional models, trade show staff, convention staff, street teams, and sampling specialists. A full-service event staffing agency like AirFresh Marketing handles the entire process from sourcing and vetting talent to on-site management and post-event reporting, so brands can focus on their campaign strategy while the agency handles execution.',
            },
          },
          {
            '@type': 'Question',
            name: 'How much does it cost to hire an event staffing agency?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Event staffing agency rates vary by role, market, and campaign scope. Brand ambassadors typically cost $35 to $65 per hour, trade show staff run $40 to $70 per hour, promotional models range from $45 to $85 per hour, and street team members cost $35 to $60 per hour. Premium markets like New York City and Los Angeles command higher rates. AirFresh Marketing provides all-inclusive pricing that covers recruitment, training, GPS-verified check-ins, on-site management, and post-event reporting.',
            },
          },
          {
            '@type': 'Question',
            name: 'How far in advance should I book an event staffing agency?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'For optimal staff selection and training, we recommend booking your event staffing agency 2 to 4 weeks before your event for standard activations and 4 to 8 weeks in advance for trade shows and large-scale campaigns. However, AirFresh Marketing maintains active talent pools in 50+ cities and can often accommodate urgent requests within 48 to 72 hours in most major markets. Rush bookings may incur an additional fee of 15 to 25 percent.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the difference between an event staffing agency and a temp agency?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A temp agency provides general labor for a wide range of industries, while an event staffing agency specializes in experiential marketing and live events. Event staffing agencies like AirFresh Marketing recruit talent with specific skills such as consumer engagement, product demonstration, lead capture, and brand storytelling. Our staff receive custom brand training, check in via GPS-verified mobile apps, and are managed by dedicated field teams — capabilities that general temp agencies simply do not offer.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does AirFresh Marketing ensure event staff quality?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'AirFresh Marketing ensures quality through a multi-layered process. Every staff member passes a background check and interview screening. Before each event, staff complete video-based brand training with quizzes to verify product knowledge. On event day, GPS-verified check-ins confirm on-time arrival at the correct location. Field managers provide on-site oversight, and real-time reporting dashboards let clients monitor performance as it happens. Post-event recaps with photos and metrics are delivered within 24 hours.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can an event staffing agency handle multi-city campaigns?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. One of the primary advantages of working with a national event staffing agency like AirFresh Marketing is the ability to execute multi-city and nationwide campaigns through a single partner. We maintain pre-vetted talent pools in over 50 cities, which means you get local staff who know each market combined with consistent training, reporting, and quality standards across every location. This eliminates the need to coordinate with multiple local agencies.',
            },
          },
          {
            '@type': 'Question',
            name: 'What types of events can a staffing agency support?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A professional event staffing agency can support virtually any type of live event or experiential marketing campaign. Common event types include trade shows and conventions, product launches, brand activations, product sampling campaigns, street marketing, corporate events, festivals and concerts, sporting events, retail promotions, pop-up shops, grand openings, mobile marketing tours, and auto shows. AirFresh Marketing has staffed all of these event types for brands ranging from Fortune 500 companies to emerging direct-to-consumer brands.',
            },
          },
        ],
      },
    ],
  }

  const serviceTypes = [
    {
      title: 'Brand Ambassadors',
      href: '/services/brand-ambassadors',
      description:
        'Charismatic, trained representatives who embody your brand at events, sampling campaigns, and live activations. Our brand ambassadors excel at consumer engagement, product storytelling, and driving trial.',
      icon: Users,
      color: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'Trade Show Staff',
      href: '/services/event-staffing',
      description:
        'Skilled booth professionals who generate leads, demonstrate products, and engage attendees at trade shows from CES to regional industry expos. Trained in lead capture and qualification.',
      icon: Building,
      color: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'Promotional Models',
      href: '/services/promotional-models',
      description:
        'Professional promotional talent for luxury activations, auto shows, product launches, and high-profile brand experiences. Poised, articulate, and brand-aligned.',
      icon: Award,
      color: 'from-pink-500 to-rose-600',
    },
    {
      title: 'Convention Staff',
      href: '/services/convention-staffing',
      description:
        'Registration assistants, badge scanners, wayfinders, and booth support staff for conventions and conferences of any scale. Reliable, professional, and detail-oriented.',
      icon: Briefcase,
      color: 'from-indigo-500 to-purple-600',
    },
    {
      title: 'Street Teams',
      href: '/services/street-teams',
      description:
        'High-energy teams for guerrilla marketing, flyer distribution, product sampling, and grassroots buzz campaigns in targeted neighborhoods, transit hubs, and high-foot-traffic zones.',
      icon: Megaphone,
      color: 'from-cyan-600 to-teal-600',
    },
    {
      title: 'Sampling Teams',
      href: '/services/sampling',
      description:
        'Trained product sampling specialists for in-store demos, grocery chains, retail locations, and live events. Food handler certified where required. Experts in driving trial and conversion.',
      icon: Target,
      color: 'from-teal-500 to-cyan-600',
    },
  ]

  const processSteps = [
    {
      step: 1,
      title: 'Brief Us',
      description:
        'Share your event details, dates, locations, staff requirements, and brand guidelines. We respond with a detailed proposal and transparent pricing within one business day.',
      icon: FileText,
    },
    {
      step: 2,
      title: 'We Staff',
      description:
        'Our team hand-selects staff from our local talent pools, matched by experience, skills, and brand fit. Each team member completes custom video-based brand training with verification quizzes.',
      icon: Users,
    },
    {
      step: 3,
      title: 'Execute',
      description:
        'On event day, staff check in via GPS-verified mobile app. You receive real-time confirmation of on-site arrival. Dedicated field managers coordinate logistics and ensure brand standards.',
      icon: CalendarCheck,
    },
    {
      step: 4,
      title: 'Report',
      description:
        'Access live dashboards during the event to track engagement metrics, photos, and KPIs. Post-event recap reports with full performance data delivered within 24 hours.',
      icon: BarChart3,
    },
  ]

  const features = [
    {
      icon: Globe,
      title: '50+ Cities Nationwide',
      description:
        'Pre-vetted talent pools in over 50 major U.S. cities. Local staff who know your market, your venues, and your audience — backed by national-scale processes.',
    },
    {
      icon: Smartphone,
      title: 'GPS-Verified Check-Ins',
      description:
        'Every staff member checks in with GPS coordinates on our mobile app. Real-time confirmation that your team arrived at the right place, at the right time. Zero guesswork.',
    },
    {
      icon: Video,
      title: 'Video-Based Brand Training',
      description:
        'Custom video training modules with quizzes ensure every team member arrives prepared with deep product knowledge and brand alignment. Consistent quality across all markets.',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Reporting Dashboards',
      description:
        'Live campaign dashboards let you monitor check-ins, consumer interactions, samples distributed, leads captured, and photos as they happen. Full transparency.',
    },
    {
      icon: Shield,
      title: 'Vetted W-2 Professionals',
      description:
        'All staff are W-2 employees — not independent contractors. Background checked, professionally screened, and fully insured. Better reliability and legal protection for your brand.',
    },
    {
      icon: Zap,
      title: '48-Hour Rush Deployment',
      description:
        'Need staff fast? Our deep local talent networks and streamlined onboarding process allow us to deploy qualified event staff in as little as 48 hours in most major markets.',
    },
  ]

  const cities = [
    { name: 'New York City', slug: 'new-york-city', state: 'NY' },
    { name: 'Los Angeles', slug: 'los-angeles', state: 'CA' },
    { name: 'Chicago', slug: 'chicago', state: 'IL' },
    { name: 'Miami', slug: 'miami', state: 'FL' },
    { name: 'Denver', slug: 'denver', state: 'CO' },
    { name: 'San Francisco', slug: 'san-francisco', state: 'CA' },
    { name: 'Austin', slug: 'austin', state: 'TX' },
    { name: 'Atlanta', slug: 'atlanta', state: 'GA' },
    { name: 'Dallas', slug: 'dallas', state: 'TX' },
    { name: 'Houston', slug: 'houston', state: 'TX' },
    { name: 'Seattle', slug: 'seattle', state: 'WA' },
    { name: 'Boston', slug: 'boston', state: 'MA' },
    { name: 'Nashville', slug: 'nashville', state: 'TN' },
    { name: 'Las Vegas', slug: 'las-vegas', state: 'NV' },
    { name: 'Phoenix', slug: 'phoenix', state: 'AZ' },
    { name: 'San Diego', slug: 'san-diego', state: 'CA' },
    { name: 'Philadelphia', slug: 'philadelphia', state: 'PA' },
    { name: 'Portland', slug: 'portland', state: 'OR' },
    { name: 'Minneapolis', slug: 'minneapolis', state: 'MN' },
    { name: 'Tampa', slug: 'tampa', state: 'FL' },
    { name: 'Orlando', slug: 'orlando', state: 'FL' },
    { name: 'Charlotte', slug: 'charlotte', state: 'NC' },
    { name: 'Washington DC', slug: 'washington-dc', state: 'DC' },
    { name: 'Detroit', slug: 'detroit', state: 'MI' },
  ]

  const caseStudies = [
    {
      brand: 'Netflix',
      description: 'Multi-city street team campaign driving awareness for a new series launch across 12 markets with GPS-verified activations.',
      metric: '2M+ Impressions',
      href: '/case-studies',
    },
    {
      brand: 'Formula 1',
      description: 'Large-scale event staffing for the Las Vegas Grand Prix with 100+ brand ambassadors, hospitality staff, and promotional models.',
      metric: '100+ Staff Deployed',
      href: '/case-studies',
    },
    {
      brand: 'Grubhub',
      description: 'Nationwide sampling campaign across 20+ college campuses with trained brand ambassadors distributing promo codes and driving app downloads.',
      metric: '50K+ Samples',
      href: '/case-studies',
    },
    {
      brand: 'Microsoft',
      description: 'Trade show staffing for product demonstrations and lead capture at CES and enterprise technology conferences.',
      metric: '5,000+ Leads',
      href: '/case-studies',
    },
    {
      brand: 'Williams Racing',
      description: 'Premium hospitality and brand ambassador staffing for Formula 1 race weekends with VIP guest engagement and activation support.',
      metric: '3 Race Weekends',
      href: '/case-studies',
    },
  ]

  const faqs = [
    {
      question: 'What does an event staffing agency do?',
      answer:
        'An event staffing agency recruits, trains, and manages professional event personnel on behalf of brands and companies. This includes brand ambassadors, promotional models, trade show staff, convention staff, street teams, and sampling specialists. A full-service event staffing agency like AirFresh Marketing handles the entire process from sourcing and vetting talent to on-site management and post-event reporting, so brands can focus on their campaign strategy while the agency handles execution.',
    },
    {
      question: 'How much does it cost to hire an event staffing agency?',
      answer:
        'Event staffing agency rates vary by role, market, and campaign scope. Brand ambassadors typically cost $35 to $65 per hour, trade show staff run $40 to $70 per hour, promotional models range from $45 to $85 per hour, and street team members cost $35 to $60 per hour. Premium markets like New York City and Los Angeles command higher rates. AirFresh Marketing provides all-inclusive pricing that covers recruitment, training, GPS-verified check-ins, on-site management, and post-event reporting. Visit our pricing page for detailed rate ranges.',
    },
    {
      question: 'How far in advance should I book an event staffing agency?',
      answer:
        'For optimal staff selection and training, we recommend booking your event staffing agency 2 to 4 weeks before your event for standard activations and 4 to 8 weeks in advance for trade shows and large-scale campaigns. However, AirFresh Marketing maintains active talent pools in 50+ cities and can often accommodate urgent requests within 48 to 72 hours in most major markets. Rush bookings may incur an additional fee of 15 to 25 percent.',
    },
    {
      question: 'What is the difference between an event staffing agency and a temp agency?',
      answer:
        'A temp agency provides general labor for a wide range of industries, while an event staffing agency specializes in experiential marketing and live events. Event staffing agencies like AirFresh Marketing recruit talent with specific skills such as consumer engagement, product demonstration, lead capture, and brand storytelling. Our staff receive custom brand training, check in via GPS-verified mobile apps, and are managed by dedicated field teams — capabilities that general temp agencies simply do not offer.',
    },
    {
      question: 'How does AirFresh Marketing ensure event staff quality?',
      answer:
        'AirFresh Marketing ensures quality through a multi-layered process. Every staff member passes a background check and interview screening. Before each event, staff complete video-based brand training with quizzes to verify product knowledge. On event day, GPS-verified check-ins confirm on-time arrival at the correct location. Field managers provide on-site oversight, and real-time reporting dashboards let clients monitor performance as it happens. Post-event recaps with photos and metrics are delivered within 24 hours.',
    },
    {
      question: 'Can an event staffing agency handle multi-city campaigns?',
      answer:
        'Yes. One of the primary advantages of working with a national event staffing agency like AirFresh Marketing is the ability to execute multi-city and nationwide campaigns through a single partner. We maintain pre-vetted talent pools in over 50 cities, which means you get local staff who know each market combined with consistent training, reporting, and quality standards across every location. This eliminates the need to coordinate with multiple local agencies.',
    },
    {
      question: 'What types of events can a staffing agency support?',
      answer:
        'A professional event staffing agency can support virtually any type of live event or experiential marketing campaign. Common event types include trade shows and conventions, product launches, brand activations, product sampling campaigns, street marketing, corporate events, festivals and concerts, sporting events, retail promotions, pop-up shops, grand openings, mobile marketing tours, and auto shows. AirFresh Marketing has staffed all of these event types for brands ranging from Fortune 500 companies to emerging direct-to-consumer brands.',
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
            <li className="text-gray-900 font-medium">Event Staffing Agency</li>
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
              Event Staffing Agency — Professional Staff in{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                50+ Cities Nationwide
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
              Event staffing agency services from AirFresh Marketing deliver trained, GPS-verified brand ambassadors,
              promotional models, and event professionals to power your campaigns across the United States. From single-city
              activations to 50-market national tours, our event staffing agency has provided Fortune 500 brands and
              fast-growing startups alike with reliable, results-driven event staff since 2004. Every engagement includes
              custom video training, real-time reporting, and a dedicated account manager.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-8 py-6 text-lg shadow-xl"
              >
                <Link href="/contact">
                  <Zap className="w-5 h-5 mr-2" />
                  Get a Free Staffing Quote
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
              { value: '25+', label: 'Years of Experience' },
              { value: '300+', label: 'Brands Served' },
              { value: '50+', label: 'Cities Nationwide' },
              { value: '20,000+', label: 'Staff Deployed' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                <div className="text-cyan-100 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Event Staffing Agency */}
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
              Event Staffing Agency Features That{' '}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Set Us Apart
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Event staffing agency quality varies dramatically. AirFresh Marketing has spent over two decades building
              the technology, talent networks, and processes that make us the preferred event staffing partner for
              brands that demand measurable results from every activation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={index}
                  className="h-full bg-white border border-gray-100 hover:border-cyan-200 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="w-12 h-12 mb-5 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Learn more about the technology powering our event staffing operations.
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

      {/* Event Staffing Agency Service Types */}
      <section className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <Users className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">
                Staffing Categories
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Event Staffing Agency Services for{' '}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Every Campaign Type
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Event staffing agency needs differ by campaign. Whether you need a single brand ambassador for an in-store
              demo or a team of 100 for a multi-day trade show, AirFresh Marketing has specialized talent for every
              role and every event format.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceTypes.map((service, index) => {
              const Icon = service.icon
              return (
                <Link key={index} href={service.href} className="group">
                  <Card className="h-full bg-white border border-gray-100 hover:border-cyan-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className={`h-1.5 w-full bg-gradient-to-r ${service.color}`} />
                    <CardContent className="p-8">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-700 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                      <span className="inline-flex items-center text-cyan-600 text-sm font-semibold group-hover:gap-2 transition-all">
                        Learn more <ArrowRight className="w-4 h-4 ml-1" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Need a combination of staff types or a custom solution?{' '}
              <Link href="/contact" className="text-cyan-600 hover:underline font-medium">
                Contact our team
              </Link>{' '}
              to discuss your specific requirements. You can also explore our{' '}
              <Link href="/services/event-staffing" className="text-cyan-600 hover:underline font-medium">
                full event staffing service page
              </Link>{' '}
              or read the comprehensive{' '}
              <Link href="/guides/best-event-staffing-agency" className="text-cyan-600 hover:underline font-medium">
                guide to choosing the best event staffing agency
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
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
              Event Staffing Agency Process —{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Four Simple Steps
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Event staffing agency engagements with AirFresh Marketing follow a proven four-step process designed
              to deliver consistent results whether you are staffing one event or fifty.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <Link href="/contact">
                Start Your Staffing Brief
                <ArrowRight className="w-5 h-5 ml-2" />
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
              Event Staffing Agency Coverage in{' '}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                50+ U.S. Cities
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Event staffing agency services from AirFresh Marketing are available in every major metropolitan area
              across the United States. Our local talent pools ensure you get staff who know your market — combined
              with the consistent quality of a national operation.
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
              Do not see your city? We expand into new markets regularly and can source talent in additional locations for
              specific campaigns.
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

      {/* Case Study Highlights */}
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
              Event Staffing Agency Results for{' '}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                World-Class Brands
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Event staffing agency performance is measured by results. AirFresh Marketing has delivered
              measurable outcomes for 300+ brands across industries — from streaming platforms and motorsport to
              food delivery and enterprise technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Deep Content Section for SEO */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Event Staffing Agency — What Brands Need to Know Before Hiring
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Event staffing agency selection is one of the most consequential decisions a brand makes when planning
              an experiential marketing campaign. The staff who represent your brand at live events, trade shows,
              sampling activations, and promotional experiences are the human face of your company. Their
              professionalism, product knowledge, and ability to connect with consumers directly impact
              campaign ROI, brand perception, and customer acquisition costs.
            </p>
            <p>
              The event staffing industry has evolved dramatically over the past decade. What was once a fragmented
              landscape of local temp agencies and freelance networks has matured into a sophisticated sector with
              technology-driven operations, standardized quality controls, and data-rich reporting. AirFresh
              Marketing has been at the forefront of this evolution since 2004, pioneering GPS-verified check-in
              systems, video-based staff training platforms, and real-time performance dashboards that give brands
              unprecedented visibility into their event operations.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              How to Evaluate an Event Staffing Agency
            </h3>
            <p>
              When evaluating an event staffing agency, brands should assess several critical factors. First,
              examine the agency&apos;s geographic reach — can they staff events in all the markets you need, or will
              you be coordinating with multiple vendors? AirFresh Marketing covers 50+ cities through a single
              point of contact. Second, investigate their training process. General orientations are not sufficient;
              your{' '}
              <Link href="/services/brand-ambassadors" className="text-cyan-600 hover:underline">
                brand ambassadors
              </Link>{' '}
              should receive custom brand training with product knowledge verification before they ever interact
              with your customers. Third, ask about accountability technology. GPS-verified check-ins, like those
              built into the{' '}
              <Link href="/technology" className="text-cyan-600 hover:underline">
                AirFresh technology platform
              </Link>, eliminate the no-show problems that plague traditional staffing approaches.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Event Staffing Agency Services Across Industries
            </h3>
            <p>
              Different industries require different event staffing approaches. Consumer packaged goods brands
              rely heavily on{' '}
              <Link href="/services/sampling" className="text-cyan-600 hover:underline">
                sampling teams
              </Link>{' '}
              for in-store demos at grocery chains and retail locations. Technology companies need knowledgeable{' '}
              <Link href="/services/event-staffing" className="text-cyan-600 hover:underline">
                trade show staff
              </Link>{' '}
              who can demonstrate complex products and qualify leads at conventions like CES, SXSW, and NAB.
              Automotive brands require{' '}
              <Link href="/services/promotional-models" className="text-cyan-600 hover:underline">
                promotional models
              </Link>{' '}
              and brand specialists for auto shows and test drive events. Entertainment companies deploy{' '}
              <Link href="/services/street-teams" className="text-cyan-600 hover:underline">
                street teams
              </Link>{' '}
              for grassroots buzz campaigns ahead of film premieres and series launches. Beverage brands need
              experienced brand ambassadors for bar promotions, festivals, and sports venue activations.
              AirFresh Marketing has deep experience across all of these verticals — visit our{' '}
              <Link href="/industries" className="text-cyan-600 hover:underline">
                industries page
              </Link>{' '}
              for sector-specific capabilities.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              The Cost of Choosing the Wrong Event Staffing Agency
            </h3>
            <p>
              Partnering with the wrong event staffing agency carries real financial and reputational risk.
              No-shows at a trade show booth mean lost leads and wasted exhibit investment. Poorly trained
              staff at a product sampling event can misrepresent your brand or fail to communicate key messages.
              Unprofessional event staff at a luxury activation can damage brand equity that took years to build.
              These risks are why brands increasingly choose established event staffing agencies with proven
              track records, technology-verified accountability, and dedicated account management over cheaper,
              less reliable alternatives. Compare AirFresh Marketing to other agencies on our{' '}
              <Link href="/compare" className="text-cyan-600 hover:underline">
                comparison pages
              </Link>{' '}
              to understand the difference that quality makes.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Event Staffing Agency for National and Multi-City Campaigns
            </h3>
            <p>
              One of the most challenging aspects of experiential marketing is maintaining brand consistency
              across multiple cities. When you run a sampling tour through{' '}
              <Link href="/cities/new-york-city" className="text-cyan-600 hover:underline">New York</Link>,{' '}
              <Link href="/cities/chicago" className="text-cyan-600 hover:underline">Chicago</Link>,{' '}
              <Link href="/cities/los-angeles" className="text-cyan-600 hover:underline">Los Angeles</Link>,{' '}
              <Link href="/cities/miami" className="text-cyan-600 hover:underline">Miami</Link>, and{' '}
              <Link href="/cities/denver" className="text-cyan-600 hover:underline">Denver</Link>,
              every team in every market should deliver the same caliber of brand representation. This is where
              a national event staffing agency like AirFresh Marketing provides significant value over
              cobbling together local agencies in each city. Our centralized training platform, standardized
              operating procedures, and unified reporting dashboard ensure every market receives the same level
              of preparation, professionalism, and accountability. Read our{' '}
              <Link href="/blog/complete-event-staffing-services-guide" className="text-cyan-600 hover:underline">
                complete event staffing services guide
              </Link>{' '}
              for a deeper dive into multi-city campaign logistics.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Event Staffing Agency Pricing and What to Expect
            </h3>
            <p>
              Transparent pricing is a hallmark of a reputable event staffing agency. At AirFresh Marketing,
              our all-inclusive rates cover every aspect of the staffing lifecycle: recruitment, vetting,
              background checks, custom brand training, GPS-verified check-ins, on-site management
              coordination, real-time reporting access, and post-event recap delivery. We do not charge
              hidden fees for training, technology, or reporting. Visit our{' '}
              <Link href="/pricing" className="text-cyan-600 hover:underline">
                pricing page
              </Link>{' '}
              for detailed rate ranges by role and market, or{' '}
              <Link href="/contact" className="text-cyan-600 hover:underline">
                request a custom quote
              </Link>{' '}
              for your specific campaign.
            </p>

            <p className="mt-8">
              Ready to work with a proven event staffing agency?{' '}
              <Link href="/contact" className="text-cyan-600 hover:underline font-medium">
                Request a free quote
              </Link>{' '}
              from AirFresh Marketing and we will deliver a detailed staffing proposal within one business day.
              Or call our team directly at{' '}
              <a href="tel:303-720-6060" className="text-cyan-600 hover:underline font-medium">
                (303) 720-6060
              </a>{' '}
              to discuss your upcoming campaign. You can also read our{' '}
              <Link href="/blog/choosing-staffing-agency" className="text-cyan-600 hover:underline font-medium">
                blog post on choosing the right staffing agency
              </Link>{' '}
              or explore the{' '}
              <Link href="/guides/event-staffing-101" className="text-cyan-600 hover:underline font-medium">
                Event Staffing 101 guide
              </Link>{' '}
              for first-time buyers.
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
              Event Staffing Agency{' '}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                FAQ
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Answers to the most common questions about hiring an event staffing agency and working with
              AirFresh Marketing.
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

      {/* Related Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Event Staffing Agency Resources
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/guides/best-event-staffing-agency"
              className="group p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-cyan-400 hover:shadow-md transition-all"
            >
              <div className="font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                Best Event Staffing Agency Guide
              </div>
              <p className="text-sm text-gray-500 mt-1">How to choose the right agency partner</p>
            </Link>
            <Link
              href="/guides/event-staffing-101"
              className="group p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-cyan-400 hover:shadow-md transition-all"
            >
              <div className="font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                Event Staffing 101
              </div>
              <p className="text-sm text-gray-500 mt-1">Complete beginner guide to hiring event staff</p>
            </Link>
            <Link
              href="/blog/event-staffing-roi-measuring-success"
              className="group p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-cyan-400 hover:shadow-md transition-all"
            >
              <div className="font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                Event Staffing ROI
              </div>
              <p className="text-sm text-gray-500 mt-1">Measuring success from event staffing campaigns</p>
            </Link>
            <Link
              href="/blog/event-staff-training"
              className="group p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-cyan-400 hover:shadow-md transition-all"
            >
              <div className="font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                Event Staff Training
              </div>
              <p className="text-sm text-gray-500 mt-1">How top agencies train event staff for success</p>
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
            Partner with a Proven Event Staffing Agency
          </h2>
          <p className="text-xl md:text-2xl text-cyan-50 max-w-3xl mx-auto mb-10 leading-relaxed">
            AirFresh Marketing is the event staffing agency trusted by Netflix, Formula 1, Microsoft, and 300+
            brands nationwide. Tell us about your campaign and receive a detailed staffing proposal within one
            business day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-cyan-600 hover:bg-gray-100 font-bold text-lg px-10 py-7 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              <Link href="/contact">
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
              <a href="tel:303-720-6060">
                <Phone className="w-5 h-5 mr-2" />
                (303) 720-6060
              </a>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-cyan-100 text-sm">
            {[
              'Free Quote in 24 Hours',
              'No Hidden Fees',
              '50+ Cities Nationwide',
              '300+ Brands Served',
              '25+ Years Experience',
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
              <Link href="/services/event-staffing" className="text-white/70 hover:text-cyan-200 transition-colors">
                Event Staffing
              </Link>
              <Link href="/services/convention-staffing" className="text-white/70 hover:text-cyan-200 transition-colors">
                Convention Staffing
              </Link>
              <Link href="/services/street-teams" className="text-white/70 hover:text-cyan-200 transition-colors">
                Street Teams
              </Link>
              <Link href="/services/sampling" className="text-white/70 hover:text-cyan-200 transition-colors">
                Sampling
              </Link>
              <Link href="/services/promotional-models" className="text-white/70 hover:text-cyan-200 transition-colors">
                Promotional Models
              </Link>
              <Link href="/pricing" className="text-white/70 hover:text-cyan-200 transition-colors">
                Pricing
              </Link>
              <Link href="/case-studies" className="text-white/70 hover:text-cyan-200 transition-colors">
                Case Studies
              </Link>
              <Link href="/blog" className="text-white/70 hover:text-cyan-200 transition-colors">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
