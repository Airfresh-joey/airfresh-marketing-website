'use client'

import { use } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import SEO from "@/components/SEO";
import {
  Users,
  Target,
  Lightbulb,
  Award,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  MapPin,
  Clock,
  Zap,
  Heart,
  Megaphone,
  Calendar,
  Building2,
  Sparkles,
  Eye,
  Play
} from "lucide-react";
import { notFound } from "next/navigation";

interface ServicePageProps {
  params: Promise<{
    service: string;
  }>;
}

// Service configurations
const serviceConfigs = {
  'brand-ambassadors': {
    title: 'Professional Brand Ambassadors',
    subtitle: 'Authentic Brand Representation & Customer Engagement',
    description: 'Connect with your audience through our network of professional, trained brand ambassadors who embody your brand values and create meaningful customer interactions.',
    heroImage: '/images/heroes/mac-cosmetics-promotional-models.jpeg',
    icon: Users,
    color: 'from-blue-500 to-cyan-500',
    stats: [
      { value: '1000+', label: 'Trained Ambassadors' },
      { value: '50+', label: 'Cities Nationwide' },
      { value: '95%', label: 'Client Satisfaction' },
      { value: '2.5M+', label: 'Interactions Generated' }
    ],
    features: [
      {
        icon: Star,
        title: 'Elite Training Program',
        description: 'Comprehensive training on brand messaging, product knowledge, and customer engagement techniques.'
      },
      {
        icon: Target,
        title: 'Targeted Recruitment',
        description: 'We select ambassadors who match your brand demographics and values for authentic representation.'
      },
      {
        icon: Award,
        title: 'Quality Assurance',
        description: 'Ongoing monitoring and performance evaluation to ensure consistent brand representation.'
      },
      {
        icon: TrendingUp,
        title: 'Real-Time Reporting',
        description: 'Live updates and detailed analytics on engagement metrics and campaign performance.'
      }
    ],
    benefits: [
      'Increase brand awareness through personal connections',
      'Generate qualified leads and drive conversions',
      'Build authentic relationships with target customers',
      'Create memorable brand experiences',
      'Expand market reach with local expertise',
      'Collect valuable customer feedback and insights'
    ],
    caseStudy: {
      title: 'Tech Startup Launch Success',
      description: 'Helped a tech startup increase brand awareness by 300% through strategic brand ambassador deployment.',
      stats: { reach: '100K+', conversion: '45%', roi: '6.2x' },
      image: '/images/case-studies/netflix.jpg'
    }
  },
  'street-teams': {
    title: 'High-Impact Street Team Campaigns',
    subtitle: 'Guerrilla Marketing & Urban Brand Activation',
    description: 'Make a bold statement with our dynamic street teams that create buzz, generate viral moments, and drive immediate brand awareness in high-traffic urban environments.',
    heroImage: '/images/heroes/la-kings-street-teams.jpeg',
    heroVideo: '394240533',
    icon: Megaphone,
    color: 'from-orange-500 to-red-500',
    stats: [
      { value: '500+', label: 'Campaigns Executed' },
      { value: '25+', label: 'Major Cities' },
      { value: '3M+', label: 'People Reached' },
      { value: '85%', label: 'Engagement Rate' }
    ],
    features: [
      {
        icon: Zap,
        title: 'High-Energy Activation',
        description: 'Dynamic, attention-grabbing campaigns that stop people in their tracks and create memorable moments.'
      },
      {
        icon: MapPin,
        title: 'Strategic Location Planning',
        description: 'Data-driven selection of high-traffic locations to maximize exposure and target audience reach.'
      },
      {
        icon: Sparkles,
        title: 'Creative Campaign Design',
        description: 'Innovative concepts that align with your brand while creating shareable, viral-worthy experiences.'
      },
      {
        icon: Eye,
        title: 'Social Media Integration',
        description: 'Seamless integration with social platforms to amplify reach and encourage user-generated content.'
      }
    ],
    benefits: [
      'Create immediate brand buzz and awareness',
      'Generate viral social media content',
      'Reach audiences in unexpected moments',
      'Drive foot traffic to retail locations',
      'Build excitement around product launches',
      'Capture attention in competitive markets'
    ],
    caseStudy: {
      title: 'Energy Drink Launch Blitz',
      description: 'Street team campaign generated 2M social impressions and 40% increase in retail sales.',
      stats: { impressions: '2M+', sales: '+40%', viral: '150K' },
      image: '/images/case-studies/la-kings-street-teams.jpeg'
    }
  },
  'experiential-marketing': {
    title: 'Immersive Experiential Marketing',
    subtitle: 'Unforgettable Brand Experiences & Customer Journeys',
    description: 'Create lasting emotional connections through immersive, multi-sensory brand experiences that engage customers on a deeper level and drive meaningful business results.',
    heroImage: '/images/heroes/mac-cosmetics-experiential-marketing.jpeg',
    icon: Heart,
    color: 'from-purple-500 to-pink-500',
    stats: [
      { value: '200+', label: 'Experiences Created' },
      { value: '90%', label: 'Brand Recall Rate' },
      { value: '4.8x', label: 'Average ROI' },
      { value: '1M+', label: 'Participants Engaged' }
    ],
    features: [
      {
        icon: Lightbulb,
        title: 'Innovative Experience Design',
        description: 'Custom-designed experiences that combine technology, storytelling, and brand messaging.'
      },
      {
        icon: Building2,
        title: 'End-to-End Production',
        description: 'Full-service production from concept development to execution and post-event analysis.'
      },
      {
        icon: Calendar,
        title: 'Multi-Touch Campaigns',
        description: 'Coordinated experiences across multiple touchpoints to create comprehensive customer journeys.'
      },
      {
        icon: Award,
        title: 'Award-Winning Creativity',
        description: 'Recognized excellence in experiential marketing with industry awards and client testimonials.'
      }
    ],
    benefits: [
      'Create emotional brand connections',
      'Increase customer lifetime value',
      'Generate premium brand perception',
      'Drive word-of-mouth marketing',
      'Collect rich customer data and insights',
      'Differentiate from competitors'
    ],
    caseStudy: {
      title: 'Automotive VR Experience',
      description: 'Immersive VR test drive experience increased purchase intent by 65% and generated 500K social shares.',
      stats: { intent: '+65%', shares: '500K', leads: '2.8K' },
      image: '/images/case-studies/microsoft.jpg'
    }
  },
  'convention-staffing': {
    title: 'Professional Convention Staffing',
    subtitle: 'Trade Show & Conference Event Staff',
    description: 'Expert convention and trade show staffing services for conferences, expos, and industry events. Our trained professionals handle booth staffing, lead capture, product demonstrations, and guest services.',
    heroImage: '/images/case-studies/gallery/microsoft/microsoft-1.jpg',
    icon: Building2,
    color: 'from-indigo-500 to-blue-500',
    stats: [
      { value: '300+', label: 'Conventions Staffed' },
      { value: '40+', label: 'Cities Covered' },
      { value: '98%', label: 'Client Retention' },
      { value: '5000+', label: 'Leads Captured Monthly' }
    ],
    features: [
      {
        icon: Users,
        title: 'Trained Booth Staff',
        description: 'Professional staff trained in product knowledge, lead qualification, and customer engagement.'
      },
      {
        icon: Target,
        title: 'Lead Generation',
        description: 'Expert lead capture and qualification to maximize your trade show ROI.'
      },
      {
        icon: Award,
        title: 'Industry Experience',
        description: 'Staff experienced across tech, healthcare, automotive, and more industries.'
      },
      {
        icon: TrendingUp,
        title: 'Real-Time Reporting',
        description: 'Live metrics and detailed post-event analytics on booth performance.'
      }
    ],
    benefits: [
      'Professional booth representation',
      'Maximize lead generation at trade shows',
      'Trained product demonstrators',
      'Seamless event coordination',
      'Multi-day and multi-show coverage',
      'Bilingual staff available'
    ],
    caseStudy: {
      title: 'Tech Conference Success',
      description: 'Staffed 15 booths at CES, generating over 3,000 qualified leads for our clients.',
      stats: { leads: '3K+', booths: '15', satisfaction: '99%' },
      image: '/images/case-studies/gallery/microsoft/microsoft-2.jpg'
    }
  },
  'event-management': {
    title: 'Full-Service Event Management',
    subtitle: 'End-to-End Event Planning & Execution',
    description: 'Comprehensive event management services from planning to execution. We handle logistics, staffing, vendor coordination, and on-site management to ensure flawless events.',
    heroImage: '/images/case-studies/gallery/ted/ted-1.jpg',
    icon: Calendar,
    color: 'from-emerald-500 to-teal-500',
    stats: [
      { value: '500+', label: 'Events Managed' },
      { value: '100%', label: 'On-Time Delivery' },
      { value: '4.9/5', label: 'Client Rating' },
      { value: '50+', label: 'Cities Nationwide' }
    ],
    features: [
      {
        icon: Lightbulb,
        title: 'Strategic Planning',
        description: 'Comprehensive event strategy aligned with your brand goals and audience.'
      },
      {
        icon: Building2,
        title: 'Venue & Vendor Management',
        description: 'Full coordination of venues, catering, AV, and all event vendors.'
      },
      {
        icon: Users,
        title: 'On-Site Management',
        description: 'Dedicated event managers ensuring smooth execution from start to finish.'
      },
      {
        icon: TrendingUp,
        title: 'Post-Event Analysis',
        description: 'Detailed reporting and insights to measure event success and ROI.'
      }
    ],
    benefits: [
      'Reduce planning stress and workload',
      'Professional on-site coordination',
      'Budget management and optimization',
      'Vendor negotiation and oversight',
      'Risk management and contingency planning',
      'Post-event reporting and analysis'
    ],
    caseStudy: {
      title: 'Corporate Conference Excellence',
      description: 'Managed a 2,000-person corporate conference with multiple tracks and VIP experiences.',
      stats: { attendees: '2K+', satisfaction: '98%', sessions: '45' },
      image: '/images/case-studies/gallery/ted/ted-2.jpg'
    }
  },
  'sampling': {
    title: 'Product Sampling Programs',
    subtitle: 'Trial-Driving Sampling & Distribution',
    description: 'Get your products directly into consumers\' hands with strategic sampling programs. We execute in-store demos, street sampling, event activations, and targeted distribution campaigns.',
    heroImage: '/images/case-studies/gallery/skinny-mixes/skinny-mixes-1.jpg',
    heroVideo: '394240533',
    icon: Sparkles,
    color: 'from-amber-500 to-orange-500',
    stats: [
      { value: '5M+', label: 'Samples Distributed' },
      { value: '85%', label: 'Trial-to-Purchase Rate' },
      { value: '200+', label: 'Retail Partners' },
      { value: '1000+', label: 'Sampling Events/Year' }
    ],
    features: [
      {
        icon: Target,
        title: 'Strategic Placement',
        description: 'Targeted sampling at high-traffic locations reaching your ideal customers.'
      },
      {
        icon: Users,
        title: 'Trained Samplers',
        description: 'Brand ambassadors trained in product benefits and engagement techniques.'
      },
      {
        icon: Eye,
        title: 'Consumer Insights',
        description: 'Real-time feedback collection and consumer reaction tracking.'
      },
      {
        icon: TrendingUp,
        title: 'Conversion Tracking',
        description: 'Measure sampling-to-purchase conversion and program ROI.'
      }
    ],
    benefits: [
      'Drive product trial and awareness',
      'Collect real consumer feedback',
      'Support new product launches',
      'Build retail relationships',
      'Create word-of-mouth buzz',
      'Measure campaign effectiveness'
    ],
    caseStudy: {
      title: 'Beverage Brand Launch',
      description: 'Distributed 50,000 samples across NYC, achieving 40% purchase conversion within 30 days.',
      stats: { samples: '50K', conversion: '40%', locations: '25' },
      image: '/images/case-studies/gallery/waiakea/waiakea-1.jpg'
    }
  },
  'promotional-models': {
    title: 'Professional Promotional Models',
    subtitle: 'Elevate Your Brand Presence',
    description: 'Premium promotional talent for trade shows, product launches, corporate events, and brand activations. Our models are trained professionals who represent your brand with polish and expertise.',
    heroImage: '/images/case-studies/gallery/clarins/clarins-1.jpg',
    icon: Star,
    color: 'from-pink-500 to-rose-500',
    stats: [
      { value: '2000+', label: 'Talent Network' },
      { value: '50+', label: 'Markets Covered' },
      { value: '99%', label: 'On-Time Arrival' },
      { value: '4.9/5', label: 'Client Satisfaction' }
    ],
    features: [
      {
        icon: Award,
        title: 'Premium Talent',
        description: 'Carefully selected, professional models with experience in brand representation.'
      },
      {
        icon: Target,
        title: 'Custom Matching',
        description: 'We match talent to your brand demographics, style, and event requirements.'
      },
      {
        icon: Users,
        title: 'Trained & Prepared',
        description: 'All talent receives brand training and arrives event-ready.'
      },
      {
        icon: Zap,
        title: 'Quick Booking',
        description: 'Fast turnaround for last-minute needs with our extensive talent network.'
      }
    ],
    benefits: [
      'Elevate brand perception',
      'Professional booth presence',
      'Attract attention at events',
      'Versatile talent for any event type',
      'Reliable and punctual staff',
      'Multilingual options available'
    ],
    caseStudy: {
      title: 'Auto Show Success',
      description: 'Provided 20 promotional models for major auto show, driving 5,000+ qualified leads.',
      stats: { models: '20', leads: '5K+', days: '10' },
      image: '/images/case-studies/gallery/polaris/polaris-1.jpg'
    }
  }
};

export default function ServicePage({ params }: ServicePageProps) {
  const { service: serviceName } = use(params);
  const service = serviceConfigs[serviceName as keyof typeof serviceConfigs];

  if (!service) {
    notFound();
  }

  const IconComponent = service.icon;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "AirFresh Marketing",
      "url": "https://airfreshmarketing.com"
    },
    "areaServed": "United States",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": service.title,
      "itemListElement": service.benefits.map((benefit, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": benefit
        }
      }))
    }
  };

  return (
    <div className="pt-16">
      <SEO
        title={`${service.title} | Professional Services - AirFresh Marketing`}
        description={service.description}
        pageType="service"
        canonical={`https://airfreshmarketing.com/services/${serviceName}`}
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {service.heroVideo ? (
          <>
            <div className="absolute inset-0 z-0">
              <iframe
                src={`https://player.vimeo.com/video/${service.heroVideo}?background=1&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0`}
                className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2"
                style={{ aspectRatio: '16/9' }}
                frameBorder="0"
                allow="autoplay; fullscreen"
                title="Hero Video"
              />
            </div>
            <div className="absolute inset-0 bg-black/60 z-10" />
          </>
        ) : (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${service.heroImage}')` }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </>
        )}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-4xl">
            <Badge className={`mb-4 px-4 py-2 bg-gradient-to-r ${service.color} text-white border-0`}>
              <IconComponent className="w-4 h-4 mr-2" />
              Professional Service
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl mb-6 leading-relaxed opacity-90">
              {service.subtitle}
            </p>
            <p className="text-lg mb-8 leading-relaxed opacity-80 max-w-3xl">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {service.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Choose Our {service.title}?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach ensures every campaign delivers exceptional results and measurable ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.features.map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-0">
                  <div className="flex items-start mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mr-6 shadow-sm`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Key Benefits You'll Experience
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our {service.title.toLowerCase()} deliver measurable results that drive your business forward.
              </p>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/case-studies/gallery/1800-tequila/1800-tequila-1.jpg"
                alt="Professional brand ambassadors team"
                className="rounded-lg shadow-xl"
              />
              <div className={`absolute -bottom-6 -right-6 bg-gradient-to-r ${service.color} text-white p-6 rounded-lg shadow-lg`}>
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Success Story</h2>
            <p className="text-lg text-gray-600">Real results from our recent campaigns</p>
          </div>

          <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={service.caseStudy.image}
                  alt={service.caseStudy.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-white/90 text-gray-900">
                  Case Study
                </Badge>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.caseStudy.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.caseStudy.description}</p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(service.caseStudy.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-primary">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <Link href="/portfolio">
                  <Button className="group">
                    View More Case Studies
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From initial consultation to campaign execution, we ensure every detail is perfect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Discovery", description: "We dive deep into your brand, goals, and target audience." },
              { step: "2", title: "Strategy", description: "Custom strategy development tailored to your objectives." },
              { step: "3", title: "Execution", description: "Professional implementation with real-time monitoring." },
              { step: "4", title: "Analysis", description: "Comprehensive reporting and optimization recommendations." }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${service.color} text-white rounded-full flex items-center justify-center text-2xl font-bold`}>
                  {item.step}
                </div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Locations Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              {service.title} Available Nationwide
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From coast to coast, our network of professional {service.title.toLowerCase()} is ready to represent your brand in any market. Select your city below to learn more about local services.
            </p>
          </div>

          {/* Major Markets */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Major Markets</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                'New York', 'Los Angeles', 'Chicago', 'Houston',
                'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego',
                'Dallas', 'Austin', 'San Francisco', 'Miami'
              ].map((city) => {
                const citySlug = city.toLowerCase().replace(/\s+/g, '-');
                return (
                  <Link
                    key={city}
                    href={`/city-services/${citySlug}-${serviceName}`}
                    className="group"
                  >
                    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 text-primary mr-2" />
                            <span className="font-medium text-gray-800 group-hover:text-primary transition-colors">
                              {city}
                            </span>
                          </div>
                          <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary transition-colors" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* All Service Locations */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">All Service Locations</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {[
                'Atlanta', 'Boston', 'Charlotte', 'Denver', 'Detroit', 'Las Vegas',
                'Nashville', 'Orlando', 'Portland', 'Seattle', 'Tampa', 'Washington DC',
                'Baltimore', 'Columbus', 'Indianapolis', 'Jacksonville', 'Kansas City', 'Memphis',
                'Milwaukee', 'Minneapolis', 'New Orleans', 'Oklahoma City', 'Pittsburgh', 'Raleigh',
                'Richmond', 'Sacramento', 'Salt Lake City', 'San Jose', 'St. Louis', 'Tucson'
              ].map((city) => {
                const citySlug = city.toLowerCase().replace(/\s+/g, '-');
                return (
                  <Link
                    key={city}
                    href={`/city-services/${citySlug}-${serviceName}`}
                    className="text-gray-600 hover:text-primary transition-colors flex items-center group"
                  >
                    <MapPin className="h-3 w-3 mr-1 text-gray-400 group-hover:text-primary" />
                    <span className="text-sm">{city}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 bg-gradient-to-r ${service.color} text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <IconComponent className="w-16 h-16 mx-auto mb-6 text-white/90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our {service.title.toLowerCase()} can help your brand achieve its goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              <Link href="/contact">Get A Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}