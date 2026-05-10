'use client'

import { use } from 'react';
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
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
  reviews?: {
    rating: number;
    reviewCount: number;
    testimonials: Array<{
      author: string;
      rating: number;
      text: string;
      company: string;
    }>;
  };
}

// Service configurations
const serviceConfigs: Record<string, ServiceConfig> = {
  'brand-ambassadors': {
    title: 'Professional Brand Ambassadors',
    subtitle: 'Authentic Brand Representation & Customer Engagement',
    description: 'AirFresh Marketing provides professional, trained brand ambassadors for events, trade shows, product launches, and brand activations nationwide. Our network of 5,000+ vetted brand ambassadors are trained in your brand messaging, equipped with GPS check-in technology for real-time accountability, and supported by on-site management. From Fortune 500 corporations to fast-growing startups, we deliver authentic brand representation that drives engagement, generates leads, and creates lasting customer connections across 50+ U.S. markets.',
    heroImage: '/images/heroes/mac-cosmetics-promotional-models.jpeg',
    icon: Users,
    color: 'from-blue-500 to-cyan-500',
    stats: [
      { value: '5000+', label: 'Trained Ambassadors' },
      { value: '50+', label: 'Cities Nationwide' },
      { value: '98%', label: 'Client Satisfaction' },
      { value: '2.5M+', label: 'Interactions Generated' }
    ],
    features: [
      {
        icon: Star,
        title: 'Elite Vetting Process',
        description: 'Every brand ambassador passes background checks, interviews, and brand-fit assessments. We accept only the top 5% of applicants to ensure premium representation.'
      },
      {
        icon: MapPin,
        title: 'GPS Check-In & Real-Time Tracking',
        description: 'Our proprietary technology verifies staff arrival, tracks location throughout events, and provides real-time status updates to your dashboard.'
      },
      {
        icon: Play,
        title: 'Video Training & Testing',
        description: 'Brand ambassadors complete video training modules and pass knowledge tests before every event, ensuring consistent brand messaging.'
      },
      {
        icon: TrendingUp,
        title: 'Data Capture & Reporting',
        description: 'Integrated data collection tools capture leads, survey responses, and consumer insights. Post-event reports include engagement metrics, photos, and actionable analytics.'
      }
    ],
    benefits: [
      'Drive 3-5x more engagement than traditional marketing',
      'Generate qualified leads with integrated data capture',
      'Ensure brand consistency with video training verification',
      'Track staff in real-time with GPS check-in technology',
      'Scale to 50+ cities with one agency partner',
      'Reduce no-show risk with backup staffing guarantees'
    ],
    caseStudy: {
      title: 'Formula 1 Las Vegas Grand Prix',
      description: 'Deployed 500+ brand ambassadors and event staff across the Las Vegas Strip for the F1 Grand Prix, managing fan engagement zones, VIP hospitality, and brand activations.',
      stats: { staff: '500+', interactions: '300K+', satisfaction: '98%' },
      image: '/images/case-studies/formula-1-4.jpg'
    },
    reviews: {
      rating: 4.9,
      reviewCount: 127,
      testimonials: [
        {
          author: 'Sarah Mitchell',
          rating: 5,
          text: 'AirFresh provided 20 brand ambassadors for our product launch across three cities. Every single person arrived on time, knew our product inside and out, and engaged consumers with genuine enthusiasm. The GPS tracking gave us real-time visibility we never had with previous agencies.',
          company: 'Unilever'
        },
        {
          author: 'David Chen',
          rating: 5,
          text: 'We have used AirFresh for over two years across dozens of activations. Their training system is what sets them apart - our ambassadors consistently outperform staff from other agencies in lead generation and brand messaging accuracy.',
          company: 'Samsung Electronics'
        },
        {
          author: 'Rachel Torres',
          rating: 5,
          text: 'The quality of talent and level of professionalism exceeded our expectations. Our brand ambassadors were not just presentable, they were knowledgeable, personable, and drove a 40% increase in booth engagement compared to our previous vendor.',
          company: 'Diageo'
        }
      ]
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
    },
    reviews: {
      rating: 4.8,
      reviewCount: 89,
      testimonials: [
        {
          author: 'Marcus Johnson',
          rating: 5,
          text: 'Our street team campaign with AirFresh generated more social media buzz in one weekend than our digital ads did all quarter. The team was high-energy, on-brand, and incredibly effective at stopping people in their tracks.',
          company: 'Red Bull'
        },
        {
          author: 'Jennifer Park',
          rating: 5,
          text: 'AirFresh handled everything from permits to execution across 8 cities simultaneously. Their street teams drove a measurable 35% increase in foot traffic to our retail locations during the campaign window.',
          company: 'Nike'
        },
        {
          author: 'Tom Richardson',
          rating: 5,
          text: 'The creativity and energy of the AirFresh street teams made our guerrilla campaign go viral. We got over 500K organic impressions on social media from content people created during the activation.',
          company: 'Spotify'
        }
      ]
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
    },
    reviews: {
      rating: 4.9,
      reviewCount: 74,
      testimonials: [
        {
          author: 'Amanda Foster',
          rating: 5,
          text: 'AirFresh transformed our product launch into an immersive experience that had people lining up around the block. The attention to detail in the activation design and the quality of on-site staff made it our most successful launch event ever.',
          company: 'L\'Oreal'
        },
        {
          author: 'Brian Wallace',
          rating: 5,
          text: 'We partnered with AirFresh on a multi-sensory pop-up experience and the results were extraordinary. Brand recall among attendees was 92%, and we generated 3x our lead goal within the first two days.',
          company: 'Microsoft'
        },
        {
          author: 'Christina Hayes',
          rating: 5,
          text: 'From concept to execution, AirFresh delivered a world-class experiential activation for our brand. Their team managed every detail flawlessly and our post-event survey showed a 4.8 out of 5 satisfaction rating from attendees.',
          company: 'BMW'
        }
      ]
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
    },
    reviews: {
      rating: 4.9,
      reviewCount: 112,
      testimonials: [
        {
          author: 'Kevin Nakamura',
          rating: 5,
          text: 'AirFresh staffed our booth at CES three years running and they get better every time. Their staff arrive trained, professional, and ready to engage attendees at a level that makes our competitors jealous. Lead capture increased 60% after switching to AirFresh.',
          company: 'Intel'
        },
        {
          author: 'Lisa Brennan',
          rating: 5,
          text: 'Convention staffing can make or break your trade show ROI, and AirFresh absolutely made ours. Every booth staffer knew our product line cold, qualified leads effectively, and represented our brand exactly as we wanted.',
          company: 'Salesforce'
        },
        {
          author: 'Robert Kim',
          rating: 5,
          text: 'We needed 30 staff across 4 booths at NRF in New York and AirFresh delivered flawlessly. The GPS check-in system gave us peace of mind, and the post-event reporting was the most detailed we have ever received from a staffing partner.',
          company: 'Oracle'
        }
      ]
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
    },
    reviews: {
      rating: 4.9,
      reviewCount: 96,
      testimonials: [
        {
          author: 'Michelle Rodriguez',
          rating: 5,
          text: 'AirFresh managed our 1,500-person corporate summit and every single detail was handled with precision. From vendor coordination to on-site troubleshooting, their team operated like an extension of ours. Attendee satisfaction was our highest ever at 97%.',
          company: 'Deloitte'
        },
        {
          author: 'James Patterson',
          rating: 5,
          text: 'We hired AirFresh for a product launch event with 800 guests and the execution was flawless. Their event management team anticipated issues before they arose and the real-time communication kept our leadership fully informed throughout.',
          company: 'Adobe'
        },
        {
          author: 'Stephanie Liu',
          rating: 5,
          text: 'After working with three other event management companies, AirFresh is in a different league. Their technology platform, staff professionalism, and post-event analytics give us insights no other agency has provided. They are now our exclusive event partner.',
          company: 'Cisco Systems'
        }
      ]
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
    },
    reviews: {
      rating: 4.8,
      reviewCount: 103,
      testimonials: [
        {
          author: 'Daniel Wright',
          rating: 5,
          text: 'AirFresh executed a 25-market sampling campaign for our new protein bar launch. Their trained samplers delivered consistent brand messaging, and the real-time tracking showed us exactly how many samples went out at each location. Conversion to purchase was 38%.',
          company: 'KIND Snacks'
        },
        {
          author: 'Emily Sanchez',
          rating: 5,
          text: 'The sampling team AirFresh provided was outstanding. They handled all health permits, food certifications, and cold chain logistics for our dairy product. We saw a 45% sales lift in sampled stores within two weeks of the campaign.',
          company: 'Chobani'
        },
        {
          author: 'Andrew Collins',
          rating: 5,
          text: 'We ran sampling programs with two other agencies before switching to AirFresh. The difference in staff quality and data reporting is night and day. Their platform gives us granular per-location metrics that directly inform our retail strategy.',
          company: 'Celsius'
        }
      ]
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
    },
    reviews: {
      rating: 4.9,
      reviewCount: 85,
      testimonials: [
        {
          author: 'Victoria Adams',
          rating: 5,
          text: 'AirFresh provided 12 promotional models for our auto show booth and every single one was polished, professional, and deeply knowledgeable about our vehicles. Booth traffic increased 50% compared to the previous year when we used a different agency.',
          company: 'Porsche'
        },
        {
          author: 'Nathan Brooks',
          rating: 5,
          text: 'The promotional models AirFresh sent for our trade show were exceptional. They arrived camera-ready, fully trained on our product line, and engaged attendees with confidence. We captured 2,000+ qualified leads in just three days.',
          company: 'Estee Lauder'
        },
        {
          author: 'Sophia Martinez',
          rating: 5,
          text: 'We needed bilingual promotional models for a luxury brand activation in Miami and AirFresh delivered talent that exceeded our expectations. Professional, elegant, and genuinely passionate about our brand story. They are our go-to agency now.',
          company: 'Hennessy'
        }
      ]
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

const serviceAliases: Record<string, string> = {
  'event-staffing': 'event-management',
};

export default function ServicePage({ params }: ServicePageProps) {
  const { service: serviceName } = use(params);
  const resolvedServiceName = serviceAliases[serviceName] ?? serviceName;
  const service = serviceConfigs[resolvedServiceName as keyof typeof serviceConfigs];

  if (!service) {
    notFound();
  }

  const IconComponent = service.icon;

  // FAQ data for each service
  const serviceFAQs: Record<string, Array<{question: string, answer: string}>> = {
    'brand-ambassadors': [
      {
        question: "What is a brand ambassador and what do they do at events?",
        answer: "A brand ambassador is a trained promotional professional who represents your company at events, trade shows, product launches, and activations. They engage consumers face-to-face, communicate key brand messages, distribute samples or marketing materials, capture leads, and create positive brand impressions. Unlike generic event staff, brand ambassadors are carefully selected to embody your brand values and receive product-specific training so every interaction feels authentic and informed. They serve as the human face of your brand in real-world environments."
      },
      {
        question: "How do you select and vet brand ambassadors for my campaign?",
        answer: "Our selection process is rigorous by design. Every candidate submits an application, completes a video interview, and passes a background check before entering our talent pool. From there, we match ambassadors to your campaign based on demographics, personality, industry experience, and brand alignment. We present you with candidate profiles for approval, so you always have input on who represents your brand. We accept only the top 5% of applicants, which means our talent pool is smaller but significantly higher quality than agencies that take all comers."
      },
      {
        question: "What types of events does AirFresh staff brand ambassadors for?",
        answer: "We staff brand ambassadors for a wide range of events including trade shows, conventions, product launches, sporting events, music festivals, retail activations, sampling campaigns, college campus tours, pop-up shops, corporate events, and community sponsorships. We have experience across industries including consumer packaged goods, technology, automotive, alcohol and beverage, beauty, healthcare, and entertainment. Whether your activation is one day or six weeks, one city or fifty, we can build a staffing solution that fits your campaign."
      },
      {
        question: "Can you staff brand ambassadors in multiple cities simultaneously?",
        answer: "Yes. Scaling across multiple markets is one of our core strengths. With a network spanning 50+ U.S. cities, we can execute coordinated multi-market activations simultaneously without sacrificing quality. Each market has a dedicated local talent pool and on-site management, supported by centralized coordination from our national operations team. This means you work with a single agency partner, receive consolidated reporting, and maintain brand consistency regardless of how many cities are running at once. We have executed programs covering 30+ markets in a single weekend."
      },
      {
        question: "Can I request specific demographics, skills, or languages?",
        answer: "Absolutely. We routinely match brand ambassadors based on age, gender, ethnicity, language fluency, physical appearance, industry background, and specialized skills. If your campaign targets Spanish-speaking consumers, we can staff bilingual ambassadors. If you need someone with a background in fitness, nutrition, or technology to have credible conversations, we can source for that expertise. Our talent profiles include detailed information on skills, languages, experience, and physical attributes so we can make highly specific matches that align with your brand and audience."
      },
      {
        question: "How do you train brand ambassadors before an event?",
        answer: "Training is delivered through our proprietary video training platform. Each ambassador receives a campaign-specific training module covering your brand story, product details, key talking points, objection handling, and activation goals. They must pass a knowledge test before being cleared to work the event. This ensures every ambassador arrives prepared and confident, not just briefed verbally on-site. For complex campaigns, we supplement video training with live briefings, physical product walk-throughs, and scenario-based role play. Training records are logged so you can verify completion for every staff member."
      },
      {
        question: "Will there be on-site management or supervision?",
        answer: "Yes, on-site management is included for all activations above a minimum staff threshold, and available as an add-on for smaller deployments. Our field managers are experienced event professionals who oversee logistics, maintain brand standards, handle real-time problem solving, and serve as your point of contact during the activation. They conduct staff check-ins, monitor performance, document the activation with photos and notes, and provide end-of-day summaries. For large-scale or multi-location events, we deploy regional leads who report up to a national account manager."
      },
      {
        question: "How do you ensure staff reliability and accountability?",
        answer: "Reliability is built into our systems rather than assumed. Every brand ambassador checks in through our GPS-enabled mobile app at the start of their shift, which verifies their location and timestamps their arrival. Staff location is visible on your real-time dashboard throughout the event. If a no-show occurs, our operations team is notified instantly and a backup ambassador is dispatched. We maintain a backup staffing pool in every active market specifically for this purpose. This combination of GPS check-in technology, backup staffing protocols, and real-time visibility gives clients confidence that their events are covered."
      },
      {
        question: "How is pricing determined for brand ambassador programs?",
        answer: "Pricing is based on several factors: number of staff, number of hours per day, number of event days, geographic markets, required skills or qualifications, and the level of management support needed. Multi-day and multi-market programs benefit from volume pricing. Training, management, reporting, and technology access are typically included in program packages rather than billed as add-ons. We provide detailed, itemized proposals after an initial discovery call so you can see exactly what is included. Most clients find our all-in pricing more transparent than agencies that quote a low staff rate and then add on every ancillary service."
      },
      {
        question: "What makes AirFresh different from other brand ambassador agencies?",
        answer: "The difference comes down to technology, process, and quality control. Most agencies still rely on text messages and spreadsheets to manage staff. AirFresh uses a purpose-built technology stack that includes GPS check-in for real-time accountability, video training with knowledge testing for verified readiness, integrated data capture tools for lead collection and consumer insights, and performance gamification that keeps staff motivated throughout long activations. Combined with our strict top-5% talent selection, dedicated on-site management, and backup staffing guarantees, we deliver a level of reliability and measurable outcomes that traditional staffing agencies cannot match."
      }
    ],
    'street-teams': [
      { question: "What is street team marketing?", answer: "Street team marketing involves deploying trained promotional teams in high-traffic public areas to engage directly with consumers, distribute samples or materials, and create brand awareness through face-to-face interactions." },
      { question: "How effective is street team marketing?", answer: "Street team marketing typically achieves 70%+ engagement rates compared to 2-3% for digital ads. Our clients see an average 300% ROI on street team campaigns through direct consumer engagement and immediate feedback." },
      { question: "Do you handle permits for street team activations?", answer: "Yes, AirFresh Marketing manages all permitting, insurance, and logistics for street team activations. We have established relationships with city authorities nationwide to streamline the permit process." },
      {
        question: "How much does it cost to hire a street team?",
        answer: "Street team pricing at AirFresh Marketing depends on team size, hours, number of activation days, geographic markets, and any specialized requirements such as bilingual staff or product sampling permits. A typical single-market street team activation starts around $2,500 per day for a team of four to six brand ambassadors with on-site management. Multi-day and multi-city programs benefit from volume pricing. We provide fully itemized proposals after a discovery call so you can see exactly what is included, from staff wages and training to permits, materials, and reporting. There are no hidden fees or surprise add-ons."
      },
      {
        question: "What cities do you operate street teams in?",
        answer: "AirFresh Marketing operates street teams in 50+ cities across the United States, including major markets like New York City, Los Angeles, Chicago, Miami, Dallas, Atlanta, San Francisco, Boston, Denver, Nashville, and Seattle. We also cover mid-size markets and college towns depending on campaign objectives. Each market draws from a local talent pool of vetted brand ambassadors who understand the area's culture, foot traffic patterns, and permitting requirements. For multi-market campaigns, our centralized operations team coordinates scheduling, logistics, and reporting across all cities simultaneously so you receive a unified experience."
      },
      {
        question: "How do you track street team performance and accountability?",
        answer: "Every street team member checks in through our GPS-enabled mobile app at the start of their shift, which verifies their exact location and timestamps their arrival. Throughout the activation, managers can view staff positions on a real-time dashboard. Our team members also log consumer interactions, samples distributed, photos, and qualitative feedback directly through the app. At the end of each day, you receive a summary report covering impressions, engagements, distribution counts, and field observations. This combination of GPS check-in technology, live monitoring, and structured data capture gives you full visibility into what is happening on the ground."
      },
      {
        question: "How many people should be on a street team?",
        answer: "The ideal street team size depends on your campaign goals, location density, and activation type. For targeted neighborhood campaigns, a team of four to six brand ambassadors with one field manager works well. For large-scale urban activations covering multiple zones simultaneously, we typically deploy teams of 10 to 20 across several locations. AirFresh Marketing will recommend team sizing during the planning phase based on your target impressions, the foot traffic data for each location, the complexity of the consumer interaction, and whether you are distributing samples, collecting leads, or both. We always include backup staff in the plan."
      },
      {
        question: "What kind of training do street team members receive?",
        answer: "Street team members complete AirFresh Marketing's proprietary video training program before every activation. Training modules cover your brand story, product knowledge, key talking points, target audience, engagement techniques, and objection handling. Each team member must pass a knowledge quiz before being cleared to work. For street-specific campaigns, we also train on public interaction etiquette, local permitting rules, safety protocols, and how to handle difficult situations such as aggressive passersby or inclement weather. On-site field managers reinforce training with a live briefing before the activation begins and coach team members throughout the day."
      },
      {
        question: "Can street teams distribute product samples?",
        answer: "Absolutely. Product sampling is one of the most popular street team activation formats, and AirFresh Marketing handles every aspect of the process. We manage health permits, food handler certifications, cooler and storage logistics, and compliance with local sampling regulations. Our street team brand ambassadors are trained in proper product handling and can speak knowledgeably about ingredients, benefits, and usage. We track every sample distributed through our mobile platform, giving you precise distribution counts, geographic heat maps, and consumer feedback data. Combining street teams with sampling typically produces higher engagement and stronger purchase intent than either tactic alone."
      },
      {
        question: "What is the difference between street teams and brand ambassadors?",
        answer: "Street teams and brand ambassadors share many similarities, but the deployment model differs. Brand ambassadors typically work at fixed locations such as trade shows, retail stores, or events, engaging consumers who come to them. Street teams are mobile and outbound, moving through high-traffic public areas to proactively approach consumers. At AirFresh Marketing, all street team members are brand ambassadors by training and quality standard. They go through the same rigorous vetting, video training, and GPS check-in process. The key distinction is strategy: street teams are designed to intercept consumers in their daily routines and generate awareness in places where your brand would not otherwise have a presence."
      }
    ],
    'experiential-marketing': [
      { question: "What is experiential marketing?", answer: "Experiential marketing creates immersive brand experiences that engage consumers directly, building emotional connections through interactive events, pop-ups, product demonstrations, and memorable activations." },
      { question: "How do you measure experiential marketing ROI?", answer: "We track engagement metrics, lead generation, social media impressions, sales lift, and brand sentiment. Our proprietary platform provides real-time data and comprehensive post-campaign analytics." },
      { question: "What types of experiential activations do you create?", answer: "We design and execute pop-up experiences, product launches, festival activations, mobile tours, interactive installations, VIP experiences, and custom brand activations tailored to your objectives." },
      {
        question: "How much does experiential marketing cost?",
        answer: "Experiential marketing costs vary widely based on scope, complexity, and duration. A single-day brand activation might start around $10,000 to $25,000, while multi-day experiential installations with custom fabrication, technology integrations, and multi-city rollouts can range from $50,000 to $500,000 or more. AirFresh Marketing provides detailed, itemized proposals after an initial discovery call. Our pricing covers concept development, design, fabrication, staffing, permitting, on-site management, and post-event reporting. We work within your budget to maximize impact and are transparent about where every dollar goes so there are no surprises."
      },
      {
        question: "How long does it take to plan an experiential marketing campaign?",
        answer: "Planning timelines depend on the complexity of the activation. Simple sampling activations or branded photo experiences can be planned and executed in four to six weeks. Large-scale experiential installations with custom builds, technology integrations, and multi-market deployments typically require eight to sixteen weeks from concept to execution. AirFresh Marketing has also delivered rush activations in as little as two weeks when circumstances demand it. During the planning phase, we handle concept development, design, fabrication, staffing, permitting, and logistics, keeping you informed with regular status updates throughout the process."
      },
      {
        question: "What industries benefit most from experiential marketing?",
        answer: "Experiential marketing delivers results across virtually every consumer-facing industry. AirFresh Marketing has executed campaigns for clients in food and beverage, technology, automotive, beauty and cosmetics, healthcare, entertainment, alcohol and spirits, fashion, fitness, and financial services. Industries that benefit most are those where product trial, sensory engagement, or emotional connection drives purchase decisions. For example, a beverage brand gains significantly from letting consumers taste the product, while a tech company benefits from hands-on product demos. If your brand has a story that resonates more in person than through a screen, experiential marketing is likely a strong fit."
      },
      {
        question: "Can you execute experiential marketing campaigns in multiple cities?",
        answer: "Yes, multi-market experiential campaigns are one of AirFresh Marketing's core strengths. With a network spanning 50+ U.S. cities and a roster of over 5,000 vetted brand ambassadors, we can deploy simultaneous activations across multiple markets without sacrificing quality or consistency. Each market has a local talent pool and on-site management, while our national operations team coordinates logistics, training, and reporting centrally. This means you work with a single agency partner, receive consolidated analytics, and maintain brand consistency from New York to Los Angeles. We have executed experiential programs covering 30+ cities in a single campaign."
      },
      {
        question: "How do you staff experiential marketing events?",
        answer: "AirFresh Marketing staffs experiential events using our curated network of over 5,000 brand ambassadors across 50+ cities. For each activation, we match staff based on demographics, personality, industry experience, language skills, and brand alignment. Every team member completes our proprietary video training program and must pass a knowledge test before being cleared to work. On-site, our field managers oversee staff, maintain brand standards, troubleshoot issues, and document the activation with photos and notes. We also maintain backup staff in every active market. GPS check-in technology ensures every person arrives on time and at the correct location."
      },
      {
        question: "What makes AirFresh different from other experiential marketing agencies?",
        answer: "AirFresh Marketing combines creative experiential strategy with technology-driven execution and rigorous quality control. While many agencies focus primarily on design and leave staffing to subcontractors, we own the entire process from concept to on-the-ground execution. Our proprietary platform includes GPS check-in for staff accountability, video training with knowledge testing, real-time data dashboards, and integrated lead capture tools. We accept only the top 5% of brand ambassador applicants, include backup staffing guarantees in every market, and provide dedicated on-site management for every activation. This end-to-end control is what allows us to deliver consistent, measurable results across campaigns of any scale."
      },
      {
        question: "Do you handle fabrication and build-outs for experiential activations?",
        answer: "Yes, AirFresh Marketing manages the full fabrication and build-out process for experiential installations. We work with trusted fabrication partners to produce custom structures, branded environments, interactive technology elements, furniture, signage, and specialty props. Our production team oversees design specifications, material selection, structural engineering when needed, and quality assurance throughout the build process. We coordinate delivery, on-site installation, and tear-down logistics so you do not need to manage multiple vendors. For recurring activations, we also handle storage and refurbishment between deployments, ensuring your assets stay in top condition for future events."
      }
    ],
    'event-management': [
      { question: "What event management services do you provide?", answer: "We offer full-service event management including venue sourcing, logistics, staffing, production, catering coordination, entertainment booking, and on-site management for corporate events, product launches, and brand activations." },
      { question: "How far in advance should I book event management services?", answer: "We recommend booking 4-8 weeks in advance for standard events and 3-6 months for large-scale activations. However, we've successfully executed events with as little as 2 weeks notice when needed." },
      { question: "Do you provide event staff for trade shows?", answer: "Yes, we specialize in trade show and convention staffing with trained booth staff, product demonstrators, lead capture specialists, and hospitality personnel across all major convention centers." },
      {
        question: "How much does event management cost?",
        answer: "Event management pricing at AirFresh Marketing depends on the scope, duration, location, staffing requirements, and level of production involved. A straightforward single-day brand activation with staffing and on-site management might start around $5,000 to $15,000, while large-scale multi-day corporate events or product launches with full production can range from $25,000 to $200,000 or more. We provide detailed, line-item proposals after an initial consultation so you can see exactly what is included and where your budget is being allocated. Our goal is transparency, and we work to maximize impact within whatever budget you bring to the table."
      },
      {
        question: "What cities does AirFresh Marketing provide event management services in?",
        answer: "AirFresh Marketing provides event management services in 50+ cities across the United States, including New York City, Los Angeles, Chicago, Miami, Dallas, Houston, Atlanta, San Francisco, Denver, Nashville, Boston, Las Vegas, and many more. Our national network of over 5,000 vetted event professionals allows us to staff and manage events in virtually any U.S. market. For each city, we draw from a local talent pool of experienced event staff who understand the venues, vendors, and logistics of their market. Centralized coordination ensures brand consistency and streamlined reporting regardless of how many locations you activate."
      },
      {
        question: "How do you ensure event staff show up on time and perform well?",
        answer: "Reliability is built into our systems rather than left to chance. Every event staff member checks in through AirFresh Marketing's GPS-enabled mobile app, which verifies their location and timestamps their arrival. If someone does not check in on time, our operations team is notified immediately and a backup staff member is dispatched. We maintain a dedicated backup staffing pool in every active market specifically for this purpose. On-site, our field managers monitor performance, enforce brand standards, and provide real-time coaching. Staff also receive video training with a mandatory knowledge quiz before every event, so they arrive prepared and confident."
      },
      {
        question: "Can you manage corporate events and conferences?",
        answer: "Yes, corporate events and conferences are a significant part of our event management portfolio. AirFresh Marketing handles everything from venue sourcing and vendor coordination to registration management, session facilitation, hospitality staffing, and VIP experiences. We have managed corporate conferences for up to 2,000 attendees with multiple breakout tracks, executive dinners, and awards ceremonies. Our approach includes detailed run-of-show documents, contingency planning, dedicated event managers, and post-event analysis with attendee feedback. Whether your event is an internal leadership summit or an industry-facing product showcase, we bring the same level of planning and execution."
      },
      {
        question: "What kind of reporting do I receive after an event?",
        answer: "AirFresh Marketing provides comprehensive post-event reporting that includes attendance figures, engagement metrics, lead counts, consumer feedback summaries, staff performance evaluations, and photo or video documentation. For activations with lead capture, you receive a full data export of all contacts collected, along with qualification notes from the field team. Our reports also include observations and strategic recommendations for future events. During the event itself, you have access to a real-time dashboard showing check-ins, engagement counts, and field updates. Most clients receive their full post-event report within three to five business days after the event concludes."
      },
      {
        question: "Do you provide event staffing only, or full event management?",
        answer: "AirFresh Marketing offers both standalone event staffing and full-service event management, depending on your needs. If you already have an event planned and simply need trained, reliable staff, we can provide brand ambassadors, product demonstrators, registration personnel, hospitality hosts, and on-site managers. If you need end-to-end support, our full event management service covers strategy, venue sourcing, vendor coordination, production, staffing, on-site management, and post-event reporting. Many clients start with staffing-only engagements and expand to full management once they experience our reliability and quality. We are flexible and scale our involvement to match your requirements."
      },
      {
        question: "How do you handle last-minute event changes or emergencies?",
        answer: "Contingency planning is a core part of AirFresh Marketing's event management approach. Before every event, we develop detailed backup plans covering staffing shortages, vendor failures, weather disruptions, venue changes, and technical issues. Our operations team is available around the clock during active events, and our backup staffing pool can deploy replacement team members on short notice in every major market. On-site, our field managers are trained to make real-time decisions and escalate issues quickly. We have successfully navigated last-minute venue relocations, sudden weather changes, and unexpected attendance surges without impacting the client experience."
      }
    ],
    'sampling': [
      { question: "What products can you sample?", answer: "We handle food, beverage, beauty, health, and consumer product sampling. We manage all required permits, health certifications, and compliance requirements for your product category." },
      { question: "How do you track product sampling results?", answer: "Our platform tracks samples distributed, consumer demographics, feedback, coupon redemptions, and geographic data. You receive real-time dashboards and comprehensive post-campaign reports." },
      { question: "How do I get a quote for a sampling campaign?", answer: "Contact us with your product details, target locations, and campaign timeline. We'll provide a customized proposal with detailed scope and deliverables." },
      {
        question: "How much does a product sampling campaign cost?",
        answer: "Sampling campaign costs at AirFresh Marketing vary based on the number of samples, number of markets, staffing requirements, sampling format, and permit complexity. A single-market, single-day sampling activation with a team of two to four brand ambassadors typically starts around $1,500 to $3,500. Multi-market campaigns distributing tens of thousands of samples over several weeks range from $15,000 to $100,000 or more. Our proposals are fully itemized, covering staff, training, permits, supplies, management, and reporting. We also offer volume pricing for larger programs. After a brief discovery call, we provide a customized proposal tailored to your product, audience, and goals."
      },
      {
        question: "What is the difference between in-store sampling and street sampling?",
        answer: "In-store sampling takes place inside retail locations such as grocery stores, big-box retailers, and specialty shops, allowing consumers to try your product at the point of purchase where conversion to a sale is immediate. Street sampling deploys brand ambassadors in high-traffic public areas like parks, transit hubs, business districts, and event perimeters to intercept consumers during their daily routines. AirFresh Marketing executes both formats and often recommends a combination for maximum impact. In-store sampling is strongest for driving immediate purchase at a specific retailer, while street sampling is ideal for generating broad awareness and reaching consumers outside of a retail context."
      },
      {
        question: "How do you select sampling locations?",
        answer: "AirFresh Marketing selects sampling locations using a data-driven approach that considers foot traffic volume, consumer demographics, proximity to retail partners, competitive presence, and permitting feasibility. For in-store programs, we coordinate with retail partners to identify high-performing locations and negotiate demo schedules. For street and event sampling, we analyze pedestrian traffic data, event calendars, and neighborhood demographics to choose high-impact locations that align with your target audience. Each location recommendation is presented with supporting rationale so you can approve or adjust the plan. We handle all permitting and logistics once locations are confirmed."
      },
      {
        question: "What compliance and permits are needed for food and beverage sampling?",
        answer: "Food and beverage sampling requires compliance with local health department regulations, which vary by city and state. Common requirements include food handler certifications for all sampling staff, temporary food service permits, liability insurance, proper storage and temperature control for perishable products, and adherence to allergen disclosure rules. AirFresh Marketing manages the entire compliance process for you. We ensure every team member holds current food handler certification, obtain all necessary permits in advance, and maintain cold chain protocols for temperature-sensitive products. Our compliance team stays current on local regulations across all 50+ markets we serve."
      },
      {
        question: "Can you run sampling campaigns in multiple cities at the same time?",
        answer: "Yes, multi-market sampling campaigns are one of AirFresh Marketing's key strengths. Our network spans 50+ U.S. cities with over 5,000 vetted brand ambassadors, allowing us to deploy coordinated sampling programs across dozens of markets simultaneously. Each market has a local talent pool and on-site management, while our centralized operations team handles training, logistics, permitting, and reporting across all locations. You receive a single consolidated dashboard with real-time data from every market, so you can track samples distributed, consumer feedback, and geographic performance in one place. We have executed sampling campaigns covering 30+ cities in a single week."
      },
      {
        question: "How do you train sampling staff on my product?",
        answer: "Every sampling team member completes AirFresh Marketing's proprietary video training program before the campaign begins. Training modules cover your brand story, product features and benefits, key talking points, target consumer profile, allergen and ingredient information for food products, and proper handling and presentation techniques. Each team member must pass a knowledge quiz before being cleared to work. For food and beverage sampling, training also includes food safety protocols, temperature control, and portion guidelines. On-site field managers reinforce training with a live briefing before the activation starts and provide coaching throughout the day to ensure consistent messaging."
      },
      {
        question: "What metrics and reporting do I receive from a sampling campaign?",
        answer: "AirFresh Marketing provides comprehensive real-time and post-campaign reporting for every sampling program. During the activation, you have access to a live dashboard showing samples distributed, geographic coverage, staff check-ins via GPS, and field photos. Post-campaign reports include total distribution counts, consumer demographic breakdowns, feedback scores, sentiment analysis, coupon redemption rates if applicable, and cost-per-sample metrics. We also include qualitative observations from field managers and strategic recommendations for future campaigns. Reports are typically delivered within three to five business days after the campaign concludes, with raw data exports available for your internal analysis."
      }
    ],
    'trade-show-staffing': [
      { question: "What types of trade show staff do you provide?", answer: "We provide booth staff, product demonstrators, lead capture specialists, hospitality hosts, registration staff, and management personnel. All staff receive comprehensive training on your brand and products before the event." },
      { question: "How far in advance should I book trade show staffing?", answer: "We recommend booking 3-4 weeks in advance for optimal staff selection. For major shows like CES, NAB, or SXSW, we suggest 6-8 weeks to secure top talent. We can accommodate rush requests when needed." },
      { question: "What's included in your trade show staffing rates?", answer: "Rates include staff recruitment, background checks, brand training, travel coordination (if applicable), management oversight, and detailed post-show reporting. Uniforms, meals, and travel expenses are quoted separately based on event requirements." },
      { question: "Do you staff shows outside the US?", answer: "Yes, we have experience staffing international trade shows in Canada, Mexico, and Europe. We partner with local agencies while maintaining our quality standards and providing consistent management oversight." },
      {
        question: "How much does trade show staffing cost?",
        answer: "Trade show staffing rates at AirFresh Marketing depend on the number of staff, hours per day, number of show days, the city, and any specialized skills required. Typical rates range from $35 to $75 per hour per staff member, with volume discounts for larger teams and multi-day events. Our all-in pricing includes recruitment, background checks, video training, GPS check-in, on-site management, and post-show reporting. Travel, lodging, uniforms, and meals are quoted separately when applicable. After an initial call to understand your booth goals, staff roles, and show details, we provide a detailed proposal with line-item pricing so you know exactly what you are paying for."
      },
      {
        question: "How do you train trade show staff on our products?",
        answer: "AirFresh Marketing uses a proprietary video training platform to prepare trade show staff before every event. We work with you to create a campaign-specific training module covering your brand story, product features and benefits, competitive differentiators, lead qualification criteria, and booth flow. Each staff member must watch the training video and pass a knowledge quiz before being cleared to work. For technically complex products, we supplement video training with live briefings, product walk-throughs, and role-play scenarios. Training records are logged and available for your review, so you can verify that every person on your booth floor has been fully prepared."
      },
      {
        question: "What major trade shows and conventions does AirFresh staff?",
        answer: "AirFresh Marketing has staffed brand ambassadors and booth professionals at major trade shows and conventions including CES in Las Vegas, NAB Show, SXSW in Austin, Natural Products Expo West, NRF in New York City, HIMSS, Mobile World Congress Americas, Dreamforce in San Francisco, and hundreds of regional and industry-specific events. We have experience across convention centers in every major U.S. city, including the Las Vegas Convention Center, McCormick Place in Chicago, Javits Center in New York, and the Orange County Convention Center in Orlando. Whatever your show, we likely have local talent and venue-specific experience."
      },
      {
        question: "How do you ensure trade show staff are reliable and show up on time?",
        answer: "Reliability is one of AirFresh Marketing's defining strengths. Every trade show staff member checks in through our GPS-enabled mobile app at the start of their shift, verifying their location and arrival time. If someone fails to check in, our operations team is alerted instantly and a backup staff member is dispatched. We maintain a backup staffing pool in every major convention city specifically for this purpose. Staff also receive detailed show-day logistics including parking, credential pickup, and booth location in advance, so there are no surprises on event morning. Our 99% on-time arrival rate reflects the systems and processes we have built around accountability."
      },
      {
        question: "Can you provide bilingual or multilingual trade show staff?",
        answer: "Yes, AirFresh Marketing regularly provides bilingual and multilingual trade show staff for events with diverse attendee populations. Spanish-English bilingual talent is available in virtually every U.S. market. We also source staff fluent in Mandarin, French, Portuguese, Korean, Japanese, German, and other languages depending on the market and event. Our talent profiles include detailed language proficiency information so we can match the right people to your booth. For international shows or events with significant non-English-speaking attendee segments, multilingual staff can dramatically increase engagement and lead capture by removing the language barrier from the conversation."
      },
      {
        question: "What reporting do I receive after a trade show?",
        answer: "AirFresh Marketing provides detailed post-show reports within three to five business days of event conclusion. Reports include staff attendance and shift compliance data verified by GPS check-in, total booth engagement and lead counts, qualitative observations from field managers about attendee sentiment and competitive activity, photo documentation, and performance evaluations for each staff member. If we managed lead capture, you receive a full export of all contacts with qualification notes. We also include strategic recommendations for future shows based on what we observed on the floor. During the show itself, you have access to a real-time dashboard with live updates from your booth team."
      }
    ],
    'product-sampling': [
      { question: "What types of sampling programs do you execute?", answer: "We execute in-store demos, street sampling, event sampling, venue partnerships, gym/fitness sampling, office sampling, and targeted distribution campaigns. Each program is customized to reach your ideal consumers effectively." },
      { question: "How do you ensure product safety and compliance?", answer: "We handle all required permits, food handler certifications, insurance, and health department approvals. Our teams are trained in proper product handling, storage, and sampling protocols for your specific product category." },
      { question: "What reporting do I receive from sampling campaigns?", answer: "You receive real-time dashboards showing samples distributed, geographic coverage, consumer demographics, feedback scores, and photos. Post-campaign reports include conversion data, ROI analysis, and strategic recommendations." },
      { question: "What's the minimum order for a sampling campaign?", answer: "We can execute targeted local campaigns with as few as 1,000 samples, though most clients see optimal ROI with programs of 10,000+ samples across multiple markets. Contact us for a customized proposal." },
      {
        question: "How much does product sampling cost per sample?",
        answer: "Cost per sample varies based on staffing requirements, location type, number of markets, permit complexity, and campaign duration. On average, AirFresh Marketing clients see a fully loaded cost of $1 to $5 per sample distributed, which includes staff wages, training, management, permits, supplies, and reporting. Higher-touch sampling programs with in-depth consumer engagement and data capture fall at the upper end, while high-volume street distribution campaigns achieve lower per-sample costs. Multi-market and multi-week programs benefit from volume pricing. We provide detailed proposals with per-sample cost projections after learning about your product, audience, and distribution goals."
      },
      {
        question: "How do you measure the ROI of a product sampling campaign?",
        answer: "AirFresh Marketing measures sampling ROI through multiple data points. During the campaign, we track samples distributed, consumer engagement counts, demographic information, and real-time feedback scores. Post-campaign, we analyze coupon redemption rates, retail sales lift in sampled markets versus control markets, social media mentions, and cost-per-trial metrics. Our reporting platform provides geographic heat maps showing distribution density and consumer sentiment by location. For clients with retail partnerships, we can coordinate with store-level sales data to measure direct purchase conversion within 30, 60, and 90 days of sampling. This comprehensive approach lets you quantify the true return on your sampling investment."
      },
      {
        question: "Can you handle temperature-sensitive or perishable product sampling?",
        answer: "Yes, AirFresh Marketing has extensive experience sampling temperature-sensitive and perishable products including dairy, frozen foods, chilled beverages, fresh produce, and prepared foods. We maintain cold chain protocols throughout the sampling process, using commercial-grade coolers, ice, refrigerated storage units, and temperature monitoring equipment. All sampling staff receive training on proper product handling, storage temperatures, and rotation schedules specific to your product. We also manage health department inspections and ensure compliance with local food safety regulations in every market. Our logistics team coordinates product delivery and storage so your samples are fresh and properly presented to every consumer."
      },
      {
        question: "What cities can you run product sampling campaigns in?",
        answer: "AirFresh Marketing runs product sampling campaigns in 50+ cities across the United States, including New York City, Los Angeles, Chicago, Miami, Dallas, Houston, Atlanta, San Francisco, Denver, Nashville, Boston, Seattle, Portland, Phoenix, and many more. We also cover college towns, suburban retail corridors, and event venues based on campaign objectives. Each market has a vetted local team of brand ambassadors experienced in sampling programs, along with established vendor relationships for permits, supplies, and logistics. For national product launches, we can coordinate simultaneous sampling in 30+ markets with centralized training, reporting, and quality control."
      },
      {
        question: "How do sampling brand ambassadors engage consumers effectively?",
        answer: "AirFresh Marketing brand ambassadors are trained to create positive, memorable sampling interactions that go beyond simply handing out product. Through our video training platform, each ambassador learns your brand story, product benefits, target consumer profile, and key talking points. They are coached on approach techniques, conversation starters, objection handling, and how to read consumer interest signals. On-site, ambassadors proactively engage passersby with a friendly, non-aggressive approach, offer samples while sharing product highlights, answer questions knowledgeably, and encourage follow-up actions like visiting a nearby retailer or scanning a QR code. Field managers observe and coach throughout the activation to maintain quality."
      },
      {
        question: "What is the difference between product sampling and product-sampling services at AirFresh?",
        answer: "Our product sampling service page focuses specifically on strategic sampling programs designed to drive product trial and purchase conversion. This includes in-store demonstrations, street sampling, event sampling, gym and fitness venue programs, office sampling, and targeted distribution. While our broader sampling service covers the fundamentals, our dedicated product sampling programs offer deeper strategic planning, more advanced consumer targeting, enhanced data capture, and detailed conversion tracking. Both services use AirFresh Marketing's trained brand ambassadors, GPS check-in technology, and real-time reporting platforms. The right fit depends on your campaign goals, and our team will recommend the best approach during the discovery process."
      }
    ],
    'mobile-tours': [
      { question: "What types of vehicles do you use for mobile tours?", answer: "We work with wrapped sprinter vans, custom trailers, food trucks, glass box trucks, experiential rigs, and specialty vehicles. We can also build custom units designed specifically for your activation concept." },
      { question: "How many markets can we cover in a tour?", answer: "A typical 8-12 week tour covers 30-50 markets. We optimize routing for efficiency while maximizing time at high-value locations. Tours can range from regional (10-15 markets) to national (75+ markets) based on your goals." },
      { question: "What's included in mobile tour management?", answer: "Full service includes route planning, permitting, vehicle logistics, staff recruitment and management, lodging and travel, experiential design, activation execution, daily reporting, and comprehensive post-tour analysis." },
      { question: "How do you select tour stop locations?", answer: "We analyze market prioritization, consumer demographics, retailer locations, event calendars, and permitting requirements. Each stop is strategically selected to maximize reach and align with campaign objectives." },
      {
        question: "How much does a mobile marketing tour cost?",
        answer: "Mobile tour costs at AirFresh Marketing depend on tour duration, number of markets, vehicle type, staff size, activation complexity, and production requirements. A regional mobile tour covering 10 to 15 markets over four to six weeks typically starts around $50,000 to $100,000. National tours spanning 30 to 75 markets over eight to sixteen weeks can range from $150,000 to $500,000 or more depending on the level of experiential build-out and staffing. Our proposals are fully itemized, covering vehicle logistics, staff wages and travel, permits, production, management, and reporting. We work with clients to scale mobile tours to fit a range of budgets while maximizing market impact."
      },
      {
        question: "How do you staff mobile tours across multiple cities?",
        answer: "AirFresh Marketing uses a hybrid staffing model for mobile tours. Core tour staff, typically two to four brand ambassadors and a tour manager, travel with the vehicle from market to market, providing continuity and deep product knowledge. In each city, we supplement the core team with local brand ambassadors from our network of 5,000+ vetted professionals across 50+ markets. Local staff handle additional consumer engagement, sampling, lead capture, and crowd management. Every team member, whether traveling or local, completes our proprietary video training and must pass a knowledge quiz. GPS check-in confirms on-time arrival at every tour stop."
      },
      {
        question: "How long does it take to plan and launch a mobile tour?",
        answer: "Planning timelines for mobile tours depend on complexity. A standard mobile tour using an existing wrapped vehicle with straightforward activations can be planned and launched in six to eight weeks. Tours requiring custom vehicle builds, elaborate experiential environments, or proprietary technology integrations typically need twelve to sixteen weeks from concept to launch. AirFresh Marketing manages every phase: creative development, vehicle design and fabrication, route planning, permitting across all markets, staff recruitment and training, lodging logistics, and activation setup protocols. We provide a detailed project timeline at the start of planning and keep you updated with regular progress reports throughout."
      },
      {
        question: "What kind of reporting do I receive during a mobile tour?",
        answer: "AirFresh Marketing provides real-time and end-of-tour reporting for mobile marketing programs. During the tour, you have access to a live dashboard showing daily impressions, consumer engagements, samples distributed, leads captured, staff check-ins via GPS, and field photos from each stop. Tour managers submit daily recap reports with qualitative observations and highlights. At the end of the tour, you receive a comprehensive report including total reach across all markets, engagement metrics, demographic breakdowns, consumer feedback analysis, social media performance, cost-per-engagement calculations, and strategic recommendations for future tours. Data exports are available for integration with your internal analytics systems."
      },
      {
        question: "Can you combine mobile tours with product sampling?",
        answer: "Absolutely. Combining mobile tours with product sampling is one of the most effective experiential marketing strategies, and AirFresh Marketing executes this format regularly. Your branded vehicle serves as both a mobile billboard and a sampling station, drawing consumers in with visual impact and converting them through hands-on product trial. We handle all sampling logistics including health permits, food handler certifications, cold storage, and product inventory management at each tour stop. Our team tracks every sample distributed with location-specific data, giving you a clear picture of distribution volume, consumer engagement, and geographic performance across the entire tour route."
      },
      {
        question: "What happens if the vehicle breaks down or there is a logistical issue during the tour?",
        answer: "AirFresh Marketing builds contingency planning into every mobile tour. Our logistics team maintains relationships with vehicle service providers across the tour route and carries emergency repair supplies. If a breakdown occurs, we coordinate immediate roadside assistance and, if necessary, arrange alternative transportation to keep the tour on schedule. For weather-related disruptions, we identify backup indoor locations in advance for each market. Our operations team monitors the tour in real time and is available around the clock to resolve issues. Tour managers are empowered to make on-ground decisions quickly. We have a strong track record of navigating logistical challenges without canceling tour stops."
      }
    ],
    'pop-up-activations': [
      { question: "What types of pop-up activations do you create?", answer: "We design and execute retail pop-ups, experiential installations, product launch events, sampling stations, interactive brand experiences, photo activations, and immersive environments. Each is custom-designed for your brand and objectives." },
      { question: "How long does it take to plan a pop-up?", answer: "Simple pop-ups can be executed in 4-6 weeks. Complex experiential installations typically require 8-12 weeks for design, fabrication, and logistics. We've executed rush projects in as little as 2 weeks when needed." },
      { question: "What's the cost range for pop-up activations?", answer: "Pop-ups range from $15,000 for simple single-day activations to $250,000+ for elaborate multi-week experiential installations. Most clients invest $30,000-$75,000 for high-impact, multi-day pop-ups with custom builds." },
      { question: "Where can you execute pop-up activations?", answer: "We activate in shopping centers, retail locations, event spaces, outdoor venues, festivals, conventions, corporate campuses, and high-traffic urban locations nationwide. We handle all venue negotiations and permitting." },
      {
        question: "How do you staff pop-up activations?",
        answer: "AirFresh Marketing staffs pop-up activations using our curated network of over 5,000 brand ambassadors across 50+ U.S. cities. For each pop-up, we select staff based on demographics, personality, product knowledge, and brand alignment. Every team member completes our proprietary video training program and passes a knowledge quiz before the activation. On-site, our field managers oversee the team, maintain brand standards, and handle logistics. Staff check in using our GPS-enabled mobile app so you can verify arrivals in real time. We also maintain backup brand ambassadors in every active market so last-minute staffing gaps are covered without impacting your activation."
      },
      {
        question: "How do you measure the success of a pop-up activation?",
        answer: "AirFresh Marketing measures pop-up activation success through a combination of quantitative metrics and qualitative insights. Key metrics include total foot traffic, consumer engagements, dwell time, samples distributed, leads captured, social media mentions, earned media impressions, and sales or conversion data when applicable. Our team collects consumer feedback on-site and documents the activation with photos and video. Post-event reports include a full data analysis with cost-per-engagement calculations, audience demographic breakdowns, and strategic recommendations. For retail pop-ups, we can also track sales lift and inventory movement to quantify direct revenue impact."
      },
      {
        question: "Can you handle venue sourcing and negotiation for pop-ups?",
        answer: "Yes, venue sourcing and negotiation are a core part of AirFresh Marketing's pop-up activation service. We identify potential venues based on your target audience, desired foot traffic, brand positioning, and budget. Our team evaluates options including shopping centers, vacant retail spaces, event venues, outdoor parks, parking lots, and high-traffic urban locations. We handle all negotiations with property owners and landlords, review lease agreements, coordinate insurance and liability requirements, and manage permitting with local authorities. Our established relationships with venue operators in major markets like New York City, Los Angeles, Chicago, Miami, and Dallas often result in favorable terms and streamlined approvals."
      },
      {
        question: "What is included in the design and fabrication of a pop-up?",
        answer: "AirFresh Marketing's pop-up design and fabrication services cover the complete creative and production process. This includes initial concept development, 3D renderings, structural design, material selection, branded graphics and signage, furniture and fixtures, lighting design, technology integrations such as interactive screens or social sharing stations, and specialty elements like photo walls or product display units. We manage fabrication through trusted production partners, oversee quality assurance, and coordinate delivery, on-site installation, and post-event teardown. For clients who plan recurring pop-ups, we also offer asset storage, maintenance, and refurbishment between activations."
      },
      {
        question: "Can pop-up activations include product sampling?",
        answer: "Absolutely. Combining pop-up activations with product sampling is a highly effective strategy, and AirFresh Marketing designs many of our pop-ups with sampling as a core component. Sampling within a pop-up environment creates a more immersive consumer experience than standalone sampling programs, because consumers engage with the brand in a curated setting that reinforces your story and positioning. We handle all sampling logistics including health permits, food handler certifications, cold storage, product inventory, and waste management. Our trained brand ambassadors sample products while sharing key brand messages, and our platform tracks every sample distributed alongside engagement and feedback data."
      },
      {
        question: "How do you promote a pop-up activation to drive foot traffic?",
        answer: "AirFresh Marketing takes a multi-channel approach to driving foot traffic for pop-up activations. Tactics include street team deployments in surrounding high-traffic areas to direct consumers to the pop-up location, social media promotion and geo-targeted digital advertising, influencer partnerships for pre-event buzz and on-site content creation, signage and wayfinding at the venue and surrounding areas, cross-promotion with venue partners and neighboring businesses, and email outreach to relevant consumer databases when available. We also design pop-ups to be visually striking and shareable, which generates organic social media exposure. Our team will develop a foot traffic plan tailored to your target audience, budget, and activation location."
      }
    ],
    'festival-staffing': [
      { question: "What festivals do you have experience staffing?", answer: "We've staffed activations at Coachella, Lollapalooza, SXSW, Bonnaroo, Outside Lands, Electric Daisy Carnival, Essence Festival, and hundreds of regional music, food, and cultural festivals across the country." },
      { question: "How do you prepare staff for festival environments?", answer: "Festival staff receive specialized training on working outdoors, managing high-volume engagement, festival culture and etiquette, crowd management, and maintaining energy through long shifts. We also cover heat safety and hydration protocols." },
      { question: "What's included in festival staffing packages?", answer: "Packages include staff recruitment, festival-specific training, credential management, on-site management, backup staffing, daily reporting, and post-event analysis. We coordinate with festival organizers on all credential and access requirements." },
      { question: "Can you handle last-minute festival staffing needs?", answer: "Yes, we maintain a network of experienced festival staff who can be deployed on short notice. For major festivals, we recommend booking 4-6 weeks out, but we've successfully staffed activations with as little as 1 week notice." },
      {
        question: "How much does festival staffing cost?",
        answer: "Festival staffing pricing at AirFresh Marketing depends on the number of staff, shift length, festival duration, location, and any specialized requirements such as product sampling or lead capture. Typical rates range from $30 to $65 per hour per staff member, with multi-day festival engagements benefiting from volume pricing. Our all-in packages include staff recruitment, festival-specific training, credential management, on-site management, backup staffing, and post-event reporting. Travel, lodging, meals, and festival tickets for staff are quoted separately based on the specific event. We provide detailed proposals with full cost breakdowns after learning about your festival activation goals."
      },
      {
        question: "How do you handle festival credential and access management?",
        answer: "AirFresh Marketing manages the entire credential and access process for your festival activation. We coordinate directly with festival organizers and production teams to secure the correct credential types for all staff members, including vendor passes, VIP access, load-in and load-out credentials, and parking passes. Our operations team tracks all credential requests, distributions, and returns. We provide staff with detailed check-in instructions including gate assignments, parking locations, and activation setup schedules. For large festivals with complex credentialing systems, we assign a dedicated logistics coordinator who serves as the single point of contact with the festival operations team throughout the event."
      },
      {
        question: "What types of festival activations do you staff?",
        answer: "AirFresh Marketing staffs a wide range of festival activation types including branded sampling stations, experiential installations, product demonstrations, photo activations, VIP hospitality lounges, pop-up retail, mobile tour stops, sponsor activations, interactive games, and guerrilla marketing teams. We also provide general festival support staff for registration, wayfinding, crowd management, and hospitality. Our brand ambassadors are experienced in the fast-paced, high-energy festival environment and know how to engage attendees authentically without being overly aggressive. Whether your activation is in the main festival grounds, a VIP area, or the surrounding perimeter, we can staff it with trained, reliable professionals."
      },
      {
        question: "How do you ensure staff reliability at multi-day festivals?",
        answer: "Multi-day festivals present unique staffing challenges, and AirFresh Marketing has systems built specifically to address them. Every staff member checks in through our GPS-enabled mobile app at the start of each shift, verifying their location and arrival time. For festivals lasting three days or more, we schedule overlapping shifts and maintain a dedicated backup pool of local brand ambassadors who can be deployed within hours. Our on-site managers monitor staff energy, enforce break schedules, and rotate positions to prevent fatigue. We also provide clear expectations during training about the physical demands of festival work, including long hours, outdoor conditions, and high engagement volume, which helps ensure only committed, prepared staff accept festival assignments."
      },
      {
        question: "Can you staff festival activations that involve alcohol sampling?",
        answer: "Yes, AirFresh Marketing has extensive experience staffing alcohol sampling and brand activations at festivals. We ensure all staff hold current state-required alcohol service certifications such as TIPS or equivalent, and we comply with all local and state regulations regarding alcohol promotion and distribution. Our brand ambassadors are trained in responsible service practices, age verification procedures, and consumption monitoring. We coordinate with festival organizers on all alcohol-related permitting and operational requirements. We have executed alcohol activations for beer, wine, spirits, and ready-to-drink beverage brands at festivals including SXSW, Lollapalooza, Bonnaroo, and numerous regional food and wine festivals."
      },
      {
        question: "What reporting do you provide from festival activations?",
        answer: "AirFresh Marketing delivers daily and post-event reporting for all festival activations. During the festival, you receive daily recap emails with engagement counts, sample distribution numbers, lead capture totals, staff attendance data verified by GPS check-in, and field photos. Our on-site managers document consumer reactions, competitive observations, and activation highlights throughout each day. After the festival concludes, you receive a comprehensive report within five business days that includes total metrics across all days, demographic breakdowns, consumer feedback analysis, social media impact if tracked, cost-per-engagement calculations, and strategic recommendations for future festival activations. Raw data exports are available for your internal analysis."
      }
    ],
    'convention-staffing': [
      {
        question: "What is convention staffing and what roles do you provide?",
        answer: "Convention staffing involves supplying trained event professionals to work booths, manage registration, demonstrate products, capture leads, and provide hospitality at trade shows, conventions, and industry conferences. AirFresh Marketing provides a full range of convention staffing roles including booth brand ambassadors, product demonstrators, lead capture specialists, registration and check-in staff, hospitality hosts, badge scanners, and on-site management personnel. Every staff member is carefully matched to your brand and event objectives, and all receive comprehensive training through our proprietary video platform before the convention begins. We staff conventions at every major convention center in the United States."
      },
      {
        question: "How much does convention staffing cost?",
        answer: "Convention staffing rates at AirFresh Marketing depend on the number of staff, hours per day, number of show days, geographic location, and any specialized skill requirements. Typical hourly rates range from $35 to $75 per person, with multi-day conventions and larger teams benefiting from volume pricing. Our all-in rates include recruitment, background checks, video training with knowledge testing, GPS check-in, on-site management, and post-event reporting. Travel, lodging, uniforms, and meals are quoted separately when applicable. We provide detailed, itemized proposals after a discovery call so you know exactly what is included and can compare our transparent pricing against other convention staffing agencies."
      },
      {
        question: "How far in advance should I book convention staffing?",
        answer: "For optimal talent selection, AirFresh Marketing recommends booking convention staffing three to four weeks before the event. For major conventions such as CES in Las Vegas, NAB Show, SXSW in Austin, NRF in New York City, or HIMSS, we recommend six to eight weeks of lead time to secure the most experienced, highest-quality talent in those competitive markets. That said, we have successfully staffed convention activations with as little as one week of notice by drawing from our extensive backup staffing pool. The earlier you book, the more options you have for demographic matching, language skills, and industry-specific experience."
      },
      {
        question: "What convention centers do you have experience staffing?",
        answer: "AirFresh Marketing has staffed conventions at every major convention center in the United States, including the Las Vegas Convention Center, McCormick Place in Chicago, Javits Center in New York City, Orange County Convention Center in Orlando, George R. Brown Convention Center in Houston, Moscone Center in San Francisco, Kay Bailey Hutchison Convention Center in Dallas, Austin Convention Center, and many more. In each market, we draw from a local talent pool of vetted brand ambassadors who have specific experience working in that venue and understand its layout, logistics, and operational requirements. Our 50+ city coverage ensures you have quality staff wherever your convention takes place."
      },
      {
        question: "How do you train convention staff on our products and brand?",
        answer: "AirFresh Marketing uses our proprietary video training platform to prepare convention staff before every event. We collaborate with you to build a custom training module that covers your brand story, product features and benefits, key talking points, competitive differentiators, lead qualification criteria, booth layout and flow, and any technology or tools staff will use on the floor. Each staff member must complete the training video and pass a knowledge quiz before being cleared to work. For technically complex products, we supplement with live briefing calls, product walk-throughs, and role-play scenarios. Training completion records are logged and available for your review."
      },
      {
        question: "How do you ensure convention staff show up on time?",
        answer: "On-time arrival is critical at conventions, and AirFresh Marketing has built systems specifically to guarantee it. Every convention staff member checks in through our GPS-enabled mobile app at the start of their shift, which verifies their physical location at the venue and timestamps their arrival. If someone fails to check in on time, our operations team is alerted immediately and a backup staff member is dispatched. We maintain a dedicated backup pool in every major convention city for this purpose. Staff also receive detailed pre-event logistics including parking information, credential pickup instructions, and booth location well in advance. Our on-time arrival rate at conventions exceeds 99%."
      },
      {
        question: "Can you provide lead capture and badge scanning staff for conventions?",
        answer: "Yes, lead capture is one of the most important convention staffing functions we provide. AirFresh Marketing trains staff on all major badge scanning systems and lead capture tools including those provided by convention organizers as well as third-party platforms. Our lead capture specialists are trained not just to scan badges, but to qualify leads through targeted questions, capture detailed notes about each prospect's needs and interests, and route high-priority leads to your sales team in real time when requested. Post-event, we provide a complete lead export with qualification data and engagement notes. This approach turns raw badge scans into actionable sales intelligence."
      },
      {
        question: "Do you provide on-site management at conventions?",
        answer: "Yes, on-site management is included for all convention staffing engagements above a minimum team size, and available as an add-on for smaller deployments. Our convention managers are experienced event professionals who handle staff check-ins, enforce brand standards, monitor performance, manage break schedules, troubleshoot real-time issues, and serve as your dedicated point of contact on the show floor. They provide daily recap reports with engagement metrics, staff performance notes, and observations about booth traffic and attendee sentiment. For large-scale conventions with multiple booth locations, we deploy regional leads who coordinate across all positions and report to a single account manager."
      },
      {
        question: "Can you staff multi-day conventions with consistent quality?",
        answer: "Absolutely. Multi-day conventions are a core part of AirFresh Marketing's staffing portfolio. We schedule the same staff across all show days whenever possible to maintain continuity, product knowledge, and rapport with returning attendees. For longer conventions, we build overlapping shifts and rotation schedules to prevent fatigue and keep energy levels high on the booth floor. Our on-site managers monitor staff performance daily and provide coaching between shifts. GPS check-in verifies attendance at the start of every shift, and our backup staffing pool is available throughout the convention to cover any last-minute needs. We have staffed conventions running one to ten days with consistent quality across every day."
      },
      {
        question: "What makes AirFresh different from other convention staffing agencies?",
        answer: "AirFresh Marketing differentiates from other convention staffing agencies through technology, process, and accountability. Most agencies rely on text messages and spreadsheets to coordinate staff, while we use a purpose-built platform that includes GPS check-in for verified attendance, video training with knowledge quizzes for confirmed readiness, real-time dashboards for live visibility, and integrated lead capture tools. We accept only the top 5% of applicants into our talent network, maintain backup staffing pools in every convention city, and include dedicated on-site management with every engagement. Our clients consistently tell us that the level of preparation, professionalism, and reliability we deliver is significantly above what they have experienced with other staffing providers."
      }
    ],
    'promotional-models': [
      {
        question: "What is a promotional model and what do they do?",
        answer: "A promotional model is a trained brand representative who combines professional appearance with strong communication skills to represent your company at trade shows, product launches, corporate events, experiential activations, and marketing campaigns. Unlike generic event staff, promotional models are selected for their polished presentation, camera-readiness, and ability to engage diverse audiences. At AirFresh Marketing, our promotional models do far more than stand and smile. They are trained on your brand, product, and messaging so they can hold informed conversations, capture leads, demonstrate products, guide guests, host VIP experiences, and create a premium impression that elevates your brand presence at any event."
      },
      {
        question: "How much does it cost to hire promotional models?",
        answer: "Promotional model rates at AirFresh Marketing depend on the number of models, hours per day, number of event days, geographic market, and any specialized requirements such as bilingual skills, industry experience, or specific physical attributes. Typical hourly rates range from $40 to $85 per model, with multi-day events and larger teams qualifying for volume pricing. Our rates include recruitment, vetting, background checks, video training, GPS check-in, on-site management support, and post-event reporting. Travel, lodging, wardrobe, hair and makeup, and meals are quoted separately based on event requirements. We provide transparent, itemized proposals with no hidden fees."
      },
      {
        question: "How do you select and vet promotional models?",
        answer: "AirFresh Marketing's selection process is rigorous by design. Every promotional model candidate submits an application with professional photos, completes a video interview, and passes a background check before entering our talent network. We accept only the top 5% of applicants, which means our roster is smaller but significantly higher quality than agencies that take everyone who applies. When staffing your event, we match models based on demographics, physical attributes, personality, language skills, industry experience, and brand alignment. You receive candidate profiles with photos and qualifications for your review and approval before any bookings are confirmed, so you always have input on who represents your brand."
      },
      {
        question: "What types of events do promotional models work?",
        answer: "AirFresh Marketing provides promotional models for a wide range of events including trade shows and conventions, product launches, auto shows, corporate galas and conferences, brand activations, experiential marketing campaigns, red carpet events, nightlife and hospitality promotions, sporting events, fashion events, music festivals, retail activations, and photo shoots. Our talent is versatile and experienced across industries including automotive, technology, beauty and cosmetics, alcohol and beverage, fashion, healthcare, entertainment, and consumer packaged goods. Whether your event is a formal corporate dinner or a high-energy festival activation, we match the right talent to the right environment."
      },
      {
        question: "Can I request specific demographics or physical attributes for promotional models?",
        answer: "Yes, AirFresh Marketing routinely matches promotional models based on specific client requirements including age range, gender, ethnicity, height, hair color, body type, and overall aesthetic. We also match based on language fluency, personality type, and industry background. Our talent profiles include detailed information and professional photos so we can make highly specific matches that align with your brand identity and target audience. If your campaign requires a specific look or feel, our casting team will present a curated selection of candidates for your review and approval. We work closely with you to ensure every model on-site is a strong representation of your brand."
      },
      {
        question: "How do you train promotional models before an event?",
        answer: "Every promotional model at AirFresh Marketing completes our proprietary video training program before the event. Training modules cover your brand story, product details, key talking points, target audience, event objectives, dress code, and activation-specific protocols. Each model must pass a knowledge quiz before being cleared to work, ensuring they arrive prepared and confident rather than learning on the spot. For complex activations, we supplement video training with live briefing calls, product walk-throughs, and role-play scenarios. On-site, our field managers conduct a pre-event huddle to reinforce key messages and answer last-minute questions. Training completion records are logged for your verification."
      },
      {
        question: "Do you provide promotional models in multiple cities?",
        answer: "Yes, AirFresh Marketing provides promotional models in 50+ cities across the United States, including New York City, Los Angeles, Miami, Chicago, Dallas, Las Vegas, Atlanta, San Francisco, Denver, Nashville, Boston, Houston, Phoenix, Seattle, and many more. Our network of over 5,000 vetted brand ambassadors and promotional models allows us to staff simultaneous activations across multiple markets without compromising quality. Each city has a local talent pool managed by regional coordinators, while our national operations team ensures consistent training, brand standards, and reporting across all locations. We have executed multi-market promotional model programs covering 30+ cities in a single campaign."
      },
      {
        question: "How do you ensure promotional models are reliable and show up on time?",
        answer: "Reliability is one of AirFresh Marketing's core differentiators. Every promotional model checks in through our GPS-enabled mobile app at the start of their shift, verifying their location at the venue and timestamping their arrival. If someone does not check in on time, our operations team is notified immediately and a backup model is dispatched from our reserve pool. We maintain backup promotional models in every active market specifically for this purpose. Models also receive detailed pre-event logistics including venue location, parking, credential pickup, dress code, and call time well in advance. Our consistent on-time arrival rate of 99% reflects the accountability systems we have built into every booking."
      },
      {
        question: "What is the difference between promotional models and brand ambassadors?",
        answer: "The terms promotional models and brand ambassadors are sometimes used interchangeably, but there are meaningful differences. Promotional models are typically selected with a stronger emphasis on professional appearance, camera-readiness, and the ability to create a premium visual brand presence. They are commonly booked for trade shows, auto shows, red carpet events, product launches, and photo activations where visual impact is a priority. Brand ambassadors, while also professionally presented, are selected more heavily for communication skills, product expertise, and the ability to drive consumer engagement and lead capture. At AirFresh Marketing, many of our talent qualify for both roles, and we recommend the best fit based on your event objectives."
      },
      {
        question: "What makes AirFresh different from other promotional model agencies?",
        answer: "AirFresh Marketing stands apart from other promotional model agencies through our combination of technology, training, and quality control. While many agencies simply send talent to a venue with minimal preparation, we use a purpose-built technology platform that includes GPS check-in for accountability, video training with knowledge testing for verified readiness, real-time performance dashboards, and integrated data capture tools. We accept only the top 5% of applicants, provide dedicated on-site management, and guarantee backup staffing in every market. Our clients consistently find that AirFresh promotional models arrive better prepared, more engaged, and more professional than talent from competing agencies, which translates directly into stronger brand representation and event outcomes."
      }
    ]
  };

  const faqs = serviceFAQs[resolvedServiceName] || [];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.airfreshmarketing.com" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.airfreshmarketing.com/services" },
          { "@type": "ListItem", "position": 3, "name": service.title, "item": `https://www.airfreshmarketing.com/services/${serviceName}` }
        ]
      },
      {
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "provider": {
          "@type": "Organization",
          "name": "AirFresh Marketing",
          "url": "https://www.airfreshmarketing.com"
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

  // Generate JSON-LD for AggregateRating and Reviews
  const reviewStructuredData = service.reviews ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "provider": {
      "@type": "Organization",
      "name": "AirFresh Marketing",
      "url": "https://www.airfreshmarketing.com"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": String(service.reviews.rating),
      "reviewCount": String(service.reviews.reviewCount),
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": service.reviews.testimonials.map(testimonial => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": testimonial.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": String(testimonial.rating),
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": testimonial.text,
      "publisher": {
        "@type": "Organization",
        "name": testimonial.company
      }
    }))
  } : null;

  return (
    <div className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* AggregateRating and Review JSON-LD */}
      {reviewStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewStructuredData) }}
        />
      )}

      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: service.title }]} />

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
                <Link href="/get-quote">Get a Staffing Quote</Link>
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
              <Image
                src="/images/case-studies/gallery/1800-tequila/1800-tequila-1.jpg"
                alt={`${service.title} services by AirFresh Marketing`}
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
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
                <Image
                  src={service.caseStudy.image}
                  alt={`${service.caseStudy.title} - ${service.title} case study by AirFresh Marketing`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
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
                    href={`/city-services/${citySlug}-${resolvedServiceName}`}
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
                    href={`/city-services/${citySlug}-${resolvedServiceName}`}
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

      {/* Related Resources Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 text-center">Related Resources</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/pricing" className="group">
              <Card className="hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-5">
                  <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors mb-1">Event Staffing Pricing</h3>
                  <p className="text-sm text-gray-500">Transparent rates and packages</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/technology" className="group">
              <Card className="hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-5">
                  <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors mb-1">Our Technology Platform</h3>
                  <p className="text-sm text-gray-500">GPS tracking, video training, and real-time reporting</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/guides/event-staffing-101" className="group">
              <Card className="hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-5">
                  <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors mb-1">Event Staffing 101 Guide</h3>
                  <p className="text-sm text-gray-500">Everything you need to know about event staffing</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/guides/brand-ambassador-hiring-guide" className="group">
              <Card className="hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-5">
                  <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors mb-1">Brand Ambassador Hiring Guide</h3>
                  <p className="text-sm text-gray-500">How to find and hire the best brand ambassadors</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/compare/atn-event-staffing" className="group">
              <Card className="hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-5">
                  <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors mb-1">AirFresh vs ATN Event Staffing</h3>
                  <p className="text-sm text-gray-500">Side-by-side comparison</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/case-studies" className="group">
              <Card className="hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-5">
                  <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors mb-1">Client Case Studies</h3>
                  <p className="text-sm text-gray-500">Real results from real campaigns</p>
                </CardContent>
              </Card>
            </Link>
          </div>
          {/* Service-Specific Blog Links */}
          <div className="mt-8 text-center">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">From Our Blog</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {resolvedServiceName === 'brand-ambassadors' && (<>
                <Link href="/blog/brand-ambassador-career" className="text-sm text-primary hover:underline">Brand Ambassador Career Guide</Link>
                <span className="text-gray-300">|</span>
                <Link href="/blog/brand-ambassador-pay-rates" className="text-sm text-primary hover:underline">Pay Rates Guide</Link>
                <span className="text-gray-300">|</span>
                <Link href="/blog/brand-ambassador-job-description" className="text-sm text-primary hover:underline">Writing Job Descriptions</Link>
                <span className="text-gray-300">|</span>
                <Link href="/blog/event-staff-training" className="text-sm text-primary hover:underline">Staff Training Best Practices</Link>
              </>)}
              {resolvedServiceName === 'street-teams' && (<>
                <Link href="/blog/street-teams-vs-digital-marketing" className="text-sm text-primary hover:underline">Street Teams vs Digital Marketing</Link>
                <span className="text-gray-300">|</span>
                <Link href="/blog/street-teams-marketing-guide" className="text-sm text-primary hover:underline">Street Teams Marketing Guide</Link>
                <span className="text-gray-300">|</span>
                <Link href="/blog/mobile-marketing-tours-explained" className="text-sm text-primary hover:underline">Mobile Marketing Tours</Link>
              </>)}
              {resolvedServiceName === 'sampling' && (<>
                <Link href="/blog/product-sampling-campaigns" className="text-sm text-primary hover:underline">Product Sampling Campaigns</Link>
                <span className="text-gray-300">|</span>
                <Link href="/blog/food-beverage-sampling-regulations" className="text-sm text-primary hover:underline">Sampling Regulations Guide</Link>
                <span className="text-gray-300">|</span>
                <Link href="/blog/retail-demo-programs" className="text-sm text-primary hover:underline">Retail Demo Programs</Link>
              </>)}
              {resolvedServiceName === 'convention-staffing' && (<>
                <Link href="/blog/convention-center-marketing" className="text-sm text-primary hover:underline">Convention Center Marketing</Link>
                <span className="text-gray-300">|</span>
                <Link href="/blog/trade-show-marketing-strategies" className="text-sm text-primary hover:underline">Trade Show Strategies</Link>
                <span className="text-gray-300">|</span>
                <Link href="/blog/lead-capture-events" className="text-sm text-primary hover:underline">Lead Capture at Events</Link>
              </>)}
              {resolvedServiceName === 'experiential-marketing' && (<>
                <Link href="/blog/experiential-vs-traditional" className="text-sm text-primary hover:underline">Experiential vs Traditional</Link>
                <span className="text-gray-300">|</span>
                <Link href="/blog/experiential-marketing-budget" className="text-sm text-primary hover:underline">Budgeting Guide</Link>
                <span className="text-gray-300">|</span>
                <Link href="/blog/experiential-marketing-roi-case-studies" className="text-sm text-primary hover:underline">ROI Case Studies</Link>
              </>)}
              {resolvedServiceName === 'event-management' && (<>
                <Link href="/blog/event-permits-legal" className="text-sm text-primary hover:underline">Event Permits & Legal</Link>
                <span className="text-gray-300">|</span>
                <Link href="/blog/post-event-reporting" className="text-sm text-primary hover:underline">Post-Event Reporting</Link>
                <span className="text-gray-300">|</span>
                <Link href="/blog/event-marketing-calendar" className="text-sm text-primary hover:underline">Event Marketing Calendar</Link>
              </>)}
              {resolvedServiceName === 'promotional-models' && (<>
                <Link href="/blog/event-uniforms-dress-code" className="text-sm text-primary hover:underline">Event Uniforms & Dress Code</Link>
                <span className="text-gray-300">|</span>
                <Link href="/blog/managing-difficult-situations" className="text-sm text-primary hover:underline">Managing Event Situations</Link>
                <span className="text-gray-300">|</span>
                <Link href="/blog/event-photography-content" className="text-sm text-primary hover:underline">Event Photography Guide</Link>
              </>)}
            </div>
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      {service.reviews && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Client Reviews</h2>
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-2xl font-bold text-gray-900">{service.reviews.rating}</span>
                <span className="text-gray-500">/ 5</span>
              </div>
              <p className="text-lg text-gray-600">
                Based on {service.reviews.reviewCount} verified client reviews
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.reviews.testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6 italic">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
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
              <Link href="/get-quote">Request a Proposal</Link>
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
