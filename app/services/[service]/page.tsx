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

interface ServiceConfig {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  heroVideo?: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  stats: Array<{ value: string; label: string }>;
  features: Array<{ icon: React.ComponentType<{ className?: string }>; title: string; description: string }>;
  benefits: string[];
  caseStudy: {
    title: string;
    description: string;
    stats: Record<string, string>;
    image: string;
  };
}

// Service configurations
const serviceConfigs: Record<string, ServiceConfig> = {
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
  },
  'trade-show-staffing': {
    title: 'Trade Show Staffing Solutions',
    subtitle: 'Expert Staff for Maximum Trade Show Impact',
    description: 'Elevate your trade show presence with our professionally trained booth staff. From lead capture specialists to product demonstrators, we provide the talent that turns booth visitors into qualified prospects.',
    heroImage: '/images/case-studies/gallery/microsoft/microsoft-1.jpg',
    icon: Building2,
    color: 'from-indigo-600 to-purple-600',
    stats: [
      { value: '500+', label: 'Trade Shows Staffed' },
      { value: '50+', label: 'Convention Centers' },
      { value: '98%', label: 'Client Retention' },
      { value: '10K+', label: 'Leads/Month' }
    ],
    features: [
      {
        icon: Users,
        title: 'Trained Booth Staff',
        description: 'Professional staff trained in lead qualification, product demos, and customer engagement for maximum booth ROI.'
      },
      {
        icon: Target,
        title: 'Lead Capture Specialists',
        description: 'Expert staff focused on qualifying visitors and capturing actionable leads for your sales team.'
      },
      {
        icon: Award,
        title: 'Industry-Specific Expertise',
        description: 'Staff experienced in tech, healthcare, automotive, CPG, and other verticals for authentic conversations.'
      },
      {
        icon: Clock,
        title: 'Multi-Day Coverage',
        description: 'Reliable staffing for single-day events to week-long conventions with consistent quality.'
      }
    ],
    benefits: [
      'Maximize booth traffic and engagement',
      'Generate qualified leads efficiently',
      'Professional product demonstrations',
      'Seamless badge scanning and data capture',
      'Bilingual staff available nationwide',
      'Detailed daily reporting and analytics'
    ],
    caseStudy: {
      title: 'CES 2024 Success Story',
      description: 'Staffed 12 tech company booths at CES, generating over 4,500 qualified leads across the 4-day event.',
      stats: { leads: '4.5K+', booths: '12', conversion: '35%' },
      image: '/images/case-studies/gallery/microsoft/microsoft-2.jpg'
    }
  },
  'product-sampling': {
    title: 'Product Sampling Campaigns',
    subtitle: 'Get Your Products Into Consumers\' Hands',
    description: 'Strategic product sampling programs that drive trial, generate feedback, and convert samplers to buyers. From in-store demos to street sampling and event activations, we execute campaigns that deliver measurable results.',
    heroImage: '/images/case-studies/gallery/skinny-mixes/skinny-mixes-1.jpg',
    heroVideo: '394240533',
    icon: Sparkles,
    color: 'from-amber-500 to-orange-600',
    stats: [
      { value: '10M+', label: 'Samples Distributed' },
      { value: '85%', label: 'Trial-to-Purchase Rate' },
      { value: '300+', label: 'Retail Partners' },
      { value: '1500+', label: 'Events Annually' }
    ],
    features: [
      {
        icon: Target,
        title: 'Strategic Targeting',
        description: 'Data-driven placement at high-traffic locations that reach your ideal customer demographics.'
      },
      {
        icon: Users,
        title: 'Trained Brand Samplers',
        description: 'Professional staff trained on product benefits, talking points, and engagement techniques.'
      },
      {
        icon: Eye,
        title: 'Real-Time Feedback',
        description: 'Instant consumer feedback collection and reaction tracking during sampling activations.'
      },
      {
        icon: TrendingUp,
        title: 'Conversion Analytics',
        description: 'Track sample-to-purchase conversion with coupon redemption and sales lift data.'
      }
    ],
    benefits: [
      'Drive immediate product trial',
      'Collect authentic consumer feedback',
      'Support new product launches',
      'Build retail partner relationships',
      'Generate word-of-mouth buzz',
      'Measure ROI with precision tracking'
    ],
    caseStudy: {
      title: 'Beverage Launch Success',
      description: 'Distributed 75,000 samples across 30 markets for a new energy drink, achieving 42% purchase conversion.',
      stats: { samples: '75K', markets: '30', conversion: '42%' },
      image: '/images/case-studies/gallery/waiakea/waiakea-1.jpg'
    }
  },
  'mobile-tours': {
    title: 'Mobile Marketing Tours',
    subtitle: 'Take Your Brand On The Road',
    description: 'Multi-market mobile tours that bring your brand directly to consumers. Custom-branded vehicles, experiential activations, and strategic routing to maximize reach and engagement across target markets.',
    heroImage: '/images/case-studies/gallery/1800-tequila/1800-tequila-1.jpg',
    icon: Play,
    color: 'from-green-500 to-emerald-600',
    stats: [
      { value: '200+', label: 'Tours Executed' },
      { value: '500+', label: 'Cities Visited' },
      { value: '5M+', label: 'Consumers Reached' },
      { value: '4.5x', label: 'Average ROI' }
    ],
    features: [
      {
        icon: MapPin,
        title: 'Strategic Route Planning',
        description: 'Data-driven tour routing to maximize market coverage and consumer touchpoints.'
      },
      {
        icon: Sparkles,
        title: 'Custom Vehicle Builds',
        description: 'Branded vehicles from wrapped vans to custom experiential trailers and pop-up units.'
      },
      {
        icon: Users,
        title: 'Tour Staff Management',
        description: 'Professional tour teams managed end-to-end including travel, lodging, and logistics.'
      },
      {
        icon: Eye,
        title: 'Integrated Activations',
        description: 'Combine sampling, demos, social media, and lead capture at each tour stop.'
      }
    ],
    benefits: [
      'Reach multiple markets efficiently',
      'Create immersive brand experiences',
      'Generate content for social media',
      'Build local market awareness',
      'Flexible stop durations and activities',
      'Comprehensive tour reporting'
    ],
    caseStudy: {
      title: 'National Snack Brand Tour',
      description: '12-week tour across 45 cities generated 2.5M impressions and 50,000+ product samples distributed.',
      stats: { weeks: '12', cities: '45', impressions: '2.5M' },
      image: '/images/case-studies/gallery/netflix/netflix-1.jpg'
    }
  },
  'pop-up-activations': {
    title: 'Pop-Up Activations',
    subtitle: 'Memorable Brand Experiences',
    description: 'Create buzz with immersive pop-up experiences that captivate audiences and drive engagement. From retail pop-ups to experiential installations, we design and execute activations that leave lasting impressions.',
    heroImage: '/images/case-studies/gallery/ted/ted-1.jpg',
    icon: Lightbulb,
    color: 'from-purple-500 to-pink-600',
    stats: [
      { value: '300+', label: 'Pop-Ups Executed' },
      { value: '92%', label: 'Brand Recall Rate' },
      { value: '2M+', label: 'Social Impressions' },
      { value: '5x', label: 'Engagement Rate' }
    ],
    features: [
      {
        icon: Lightbulb,
        title: 'Creative Concept Design',
        description: 'Innovative pop-up concepts that align with your brand story and campaign objectives.'
      },
      {
        icon: Building2,
        title: 'End-to-End Production',
        description: 'Full production from concept development to build-out, staffing, and breakdown.'
      },
      {
        icon: Eye,
        title: 'Social-First Design',
        description: 'Instagram-worthy moments and shareable experiences that amplify reach organically.'
      },
      {
        icon: Calendar,
        title: 'Flexible Formats',
        description: 'From single-day activations to multi-week installations at retail or event spaces.'
      }
    ],
    benefits: [
      'Create viral brand moments',
      'Generate earned media coverage',
      'Drive foot traffic and sales',
      'Collect first-party customer data',
      'Test new products or concepts',
      'Build brand affinity through experience'
    ],
    caseStudy: {
      title: 'Beauty Brand Pop-Up Shop',
      description: '2-week pop-up in NYC generated 15,000 visitors, 3M social impressions, and $200K in direct sales.',
      stats: { visitors: '15K', impressions: '3M', sales: '$200K' },
      image: '/images/case-studies/gallery/clarins/clarins-1.jpg'
    }
  },
  'festival-staffing': {
    title: 'Festival Staffing Services',
    subtitle: 'Expert Staff for Festival Activations',
    description: 'Specialized staffing for music festivals, food festivals, cultural events, and outdoor activations. Our experienced festival teams thrive in high-energy environments and know how to engage festival-goers authentically.',
    heroImage: '/images/heroes/la-kings-street-teams.jpeg',
    icon: Heart,
    color: 'from-rose-500 to-red-600',
    stats: [
      { value: '150+', label: 'Festivals Staffed' },
      { value: '50+', label: 'Festival Partners' },
      { value: '10K+', label: 'Staff Deployed' },
      { value: '99%', label: 'On-Time Rate' }
    ],
    features: [
      {
        icon: Users,
        title: 'Festival-Experienced Staff',
        description: 'Teams who understand festival culture and know how to connect with diverse audiences.'
      },
      {
        icon: Zap,
        title: 'High-Energy Engagement',
        description: 'Staff who thrive in fast-paced, outdoor environments and maintain energy all day.'
      },
      {
        icon: Award,
        title: 'Multi-Day Reliability',
        description: 'Consistent staffing across 3-5 day festivals with backup teams ready if needed.'
      },
      {
        icon: Target,
        title: 'Activation Specialists',
        description: 'Trained in sampling, games, photo ops, and interactive experiences for festival settings.'
      }
    ],
    benefits: [
      'Connect with engaged audiences',
      'Create memorable brand moments',
      'Drive social media content',
      'Sample products at scale',
      'Build brand affinity with key demos',
      'Capture leads and consumer data'
    ],
    caseStudy: {
      title: 'Coachella Activation',
      description: 'Staffed a major beverage brand activation at Coachella, sampling 50,000+ products and generating viral social content.',
      stats: { samples: '50K+', staff: '25', social: '1M+' },
      image: '/images/heroes/la-kings-street-teams.jpeg'
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

  // FAQ data for each service
  const serviceFAQs: Record<string, Array<{question: string, answer: string}>> = {
    'brand-ambassadors': [
      { question: "How do you select brand ambassadors for my campaign?", answer: "We match ambassadors based on your target demographics, brand values, and campaign requirements. Each ambassador undergoes background checks, training, and brand-specific preparation to ensure authentic representation." },
      { question: "What cities do you provide brand ambassadors in?", answer: "AirFresh Marketing provides professional brand ambassadors in 50+ cities nationwide, including New York, Los Angeles, Chicago, Miami, Denver, San Francisco, Austin, and Atlanta." },
      { question: "How do I get started?", answer: "Contact us for a free consultation. We'll discuss your campaign goals, timeline, and requirements, then provide a customized proposal tailored to your specific needs." }
    ],
    'street-teams': [
      { question: "What is street team marketing?", answer: "Street team marketing involves deploying trained promotional teams in high-traffic public areas to engage directly with consumers, distribute samples or materials, and create brand awareness through face-to-face interactions." },
      { question: "How effective is street team marketing?", answer: "Street team marketing typically achieves 70%+ engagement rates compared to 2-3% for digital ads. Our clients see an average 300% ROI on street team campaigns through direct consumer engagement and immediate feedback." },
      { question: "Do you handle permits for street team activations?", answer: "Yes, AirFresh Marketing manages all permitting, insurance, and logistics for street team activations. We have established relationships with city authorities nationwide to streamline the permit process." }
    ],
    'experiential-marketing': [
      { question: "What is experiential marketing?", answer: "Experiential marketing creates immersive brand experiences that engage consumers directly, building emotional connections through interactive events, pop-ups, product demonstrations, and memorable activations." },
      { question: "How do you measure experiential marketing ROI?", answer: "We track engagement metrics, lead generation, social media impressions, sales lift, and brand sentiment. Our proprietary platform provides real-time data and comprehensive post-campaign analytics." },
      { question: "What types of experiential activations do you create?", answer: "We design and execute pop-up experiences, product launches, festival activations, mobile tours, interactive installations, VIP experiences, and custom brand activations tailored to your objectives." }
    ],
    'event-management': [
      { question: "What event management services do you provide?", answer: "We offer full-service event management including venue sourcing, logistics, staffing, production, catering coordination, entertainment booking, and on-site management for corporate events, product launches, and brand activations." },
      { question: "How far in advance should I book event management services?", answer: "We recommend booking 4-8 weeks in advance for standard events and 3-6 months for large-scale activations. However, we've successfully executed events with as little as 2 weeks notice when needed." },
      { question: "Do you provide event staff for trade shows?", answer: "Yes, we specialize in trade show and convention staffing with trained booth staff, product demonstrators, lead capture specialists, and hospitality personnel across all major convention centers." }
    ],
    'sampling': [
      { question: "What products can you sample?", answer: "We handle food, beverage, beauty, health, and consumer product sampling. We manage all required permits, health certifications, and compliance requirements for your product category." },
      { question: "How do you track product sampling results?", answer: "Our platform tracks samples distributed, consumer demographics, feedback, coupon redemptions, and geographic data. You receive real-time dashboards and comprehensive post-campaign reports." },
      { question: "How do I get a quote for a sampling campaign?", answer: "Contact us with your product details, target locations, and campaign timeline. We'll provide a customized proposal with detailed scope and deliverables." }
    ],
    'trade-show-staffing': [
      { question: "What types of trade show staff do you provide?", answer: "We provide booth staff, product demonstrators, lead capture specialists, hospitality hosts, registration staff, and management personnel. All staff receive comprehensive training on your brand and products before the event." },
      { question: "How far in advance should I book trade show staffing?", answer: "We recommend booking 3-4 weeks in advance for optimal staff selection. For major shows like CES, NAB, or SXSW, we suggest 6-8 weeks to secure top talent. We can accommodate rush requests when needed." },
      { question: "What's included in your trade show staffing rates?", answer: "Rates include staff recruitment, background checks, brand training, travel coordination (if applicable), management oversight, and detailed post-show reporting. Uniforms, meals, and travel expenses are quoted separately based on event requirements." },
      { question: "Do you staff shows outside the US?", answer: "Yes, we have experience staffing international trade shows in Canada, Mexico, and Europe. We partner with local agencies while maintaining our quality standards and providing consistent management oversight." }
    ],
    'product-sampling': [
      { question: "What types of sampling programs do you execute?", answer: "We execute in-store demos, street sampling, event sampling, venue partnerships, gym/fitness sampling, office sampling, and targeted distribution campaigns. Each program is customized to reach your ideal consumers effectively." },
      { question: "How do you ensure product safety and compliance?", answer: "We handle all required permits, food handler certifications, insurance, and health department approvals. Our teams are trained in proper product handling, storage, and sampling protocols for your specific product category." },
      { question: "What reporting do I receive from sampling campaigns?", answer: "You receive real-time dashboards showing samples distributed, geographic coverage, consumer demographics, feedback scores, and photos. Post-campaign reports include conversion data, ROI analysis, and strategic recommendations." },
      { question: "What's the minimum order for a sampling campaign?", answer: "We can execute targeted local campaigns with as few as 1,000 samples, though most clients see optimal ROI with programs of 10,000+ samples across multiple markets. Contact us for a customized proposal." }
    ],
    'mobile-tours': [
      { question: "What types of vehicles do you use for mobile tours?", answer: "We work with wrapped sprinter vans, custom trailers, food trucks, glass box trucks, experiential rigs, and specialty vehicles. We can also build custom units designed specifically for your activation concept." },
      { question: "How many markets can we cover in a tour?", answer: "A typical 8-12 week tour covers 30-50 markets. We optimize routing for efficiency while maximizing time at high-value locations. Tours can range from regional (10-15 markets) to national (75+ markets) based on your goals." },
      { question: "What's included in mobile tour management?", answer: "Full service includes route planning, permitting, vehicle logistics, staff recruitment and management, lodging and travel, experiential design, activation execution, daily reporting, and comprehensive post-tour analysis." },
      { question: "How do you select tour stop locations?", answer: "We analyze market prioritization, consumer demographics, retailer locations, event calendars, and permitting requirements. Each stop is strategically selected to maximize reach and align with campaign objectives." }
    ],
    'pop-up-activations': [
      { question: "What types of pop-up activations do you create?", answer: "We design and execute retail pop-ups, experiential installations, product launch events, sampling stations, interactive brand experiences, photo activations, and immersive environments. Each is custom-designed for your brand and objectives." },
      { question: "How long does it take to plan a pop-up?", answer: "Simple pop-ups can be executed in 4-6 weeks. Complex experiential installations typically require 8-12 weeks for design, fabrication, and logistics. We've executed rush projects in as little as 2 weeks when needed." },
      { question: "What's the cost range for pop-up activations?", answer: "Pop-ups range from $15,000 for simple single-day activations to $250,000+ for elaborate multi-week experiential installations. Most clients invest $30,000-$75,000 for high-impact, multi-day pop-ups with custom builds." },
      { question: "Where can you execute pop-up activations?", answer: "We activate in shopping centers, retail locations, event spaces, outdoor venues, festivals, conventions, corporate campuses, and high-traffic urban locations nationwide. We handle all venue negotiations and permitting." }
    ],
    'festival-staffing': [
      { question: "What festivals do you have experience staffing?", answer: "We've staffed activations at Coachella, Lollapalooza, SXSW, Bonnaroo, Outside Lands, Electric Daisy Carnival, Essence Festival, and hundreds of regional music, food, and cultural festivals across the country." },
      { question: "How do you prepare staff for festival environments?", answer: "Festival staff receive specialized training on working outdoors, managing high-volume engagement, festival culture and etiquette, crowd management, and maintaining energy through long shifts. We also cover heat safety and hydration protocols." },
      { question: "What's included in festival staffing packages?", answer: "Packages include staff recruitment, festival-specific training, credential management, on-site management, backup staffing, daily reporting, and post-event analysis. We coordinate with festival organizers on all credential and access requirements." },
      { question: "Can you handle last-minute festival staffing needs?", answer: "Yes, we maintain a network of experienced festival staff who can be deployed on short notice. For major festivals, we recommend booking 4-6 weeks out, but we've successfully staffed activations with as little as 1 week notice." }
    ]
  };

  const faqs = serviceFAQs[serviceName] || [];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
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
      },
      // Only include FAQPage if there are actual FAQs
      ...(faqs.length > 0 ? [{
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }] : [])
    ]
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
            <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />
          </>
        ) : (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${service.heroImage}')` }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 pointer-events-none" />
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

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Common questions about our {service.title.toLowerCase()} services
              </p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

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