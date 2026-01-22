import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import {
  Users,
  MapPin,
  Calendar,
  DollarSign,
  Star,
  ArrowRight,
  CheckCircle,
  Globe,
  Heart,
  Target,
  TrendingUp,
  Award,
  Sparkles,
  Phone,
  Mail
} from "lucide-react";
import SEO from "@/components/SEO";

const benefits = [
  {
    icon: Calendar,
    title: "Flexible Schedule",
    description: "Work when it suits you. Choose events that fit your lifestyle and availability."
  },
  {
    icon: Globe,
    title: "Diverse Clients",
    description: "Represent top brands across tech, beauty, food & beverage, automotive, and more."
  },
  {
    icon: MapPin,
    title: "Nationwide Events",
    description: "Work at exciting events across the country, from major cities to local venues."
  },
  {
    icon: DollarSign,
    title: "Competitive Pay",
    description: "Earn great hourly rates with opportunities for bonuses and tips."
  },
  {
    icon: Star,
    title: "Career Growth",
    description: "Develop valuable skills in marketing, sales, and customer engagement."
  },
  {
    icon: Heart,
    title: "Great Team Culture",
    description: "Join a supportive community of passionate brand ambassadors."
  }
];

const cultureValues = [
  {
    icon: Target,
    title: "Excellence First",
    description: "We hold ourselves to the highest standards, delivering exceptional experiences for every brand we represent."
  },
  {
    icon: Users,
    title: "Team Spirit",
    description: "Success is a team effort. We support each other, celebrate wins together, and grow as a community."
  },
  {
    icon: Sparkles,
    title: "Bring the Energy",
    description: "Enthusiasm is contagious. We bring positive energy to every activation and create memorable moments."
  },
  {
    icon: TrendingUp,
    title: "Always Growing",
    description: "We invest in our team's development through training, feedback, and opportunities to advance."
  }
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Brand Ambassador",
    location: "Denver, CO",
    tenure: "2 years",
    quote: "Working with AirFresh has been incredible. The flexibility lets me balance school while gaining real marketing experience. I've worked with Netflix, Google, and so many amazing brands!",
    image: "/images/testimonials/aimee-ambassador.jpg"
  },
  {
    name: "Marcus J.",
    role: "Team Lead",
    location: "Los Angeles, CA",
    tenure: "3 years",
    quote: "I started as a brand ambassador and worked my way up to team lead. The growth opportunities here are real. Every event is different, and I've built skills I use every day.",
    image: "/images/testimonials/anonymous-review.jpg"
  },
  {
    name: "Jessica L.",
    role: "Event Specialist",
    location: "Miami, FL",
    tenure: "1.5 years",
    quote: "The team culture is what makes AirFresh special. Everyone genuinely cares about each other's success. Plus, representing Formula One and major sports events? Dream come true!",
    image: "/images/testimonials/kristin-quinn.jpg"
  }
];

const faqs = [
  {
    question: "What does a typical event look like?",
    answer: "Events vary widely! You might be sampling products at a grocery store, engaging crowds at a music festival, demonstrating tech at a trade show, or representing a brand at a sporting event. Most shifts are 4-8 hours, and you'll receive detailed briefings and training before each activation."
  },
  {
    question: "How often can I work?",
    answer: "It's completely flexible. Some ambassadors work weekly events, others pick up shifts monthly. You choose the opportunities that fit your schedule. We post available events regularly, and you can accept or decline based on your availability."
  },
  {
    question: "What kind of training do you provide?",
    answer: "All ambassadors receive comprehensive training through our online portal, including brand-specific training for each activation. We also provide on-site support and have team leads at larger events."
  },
  {
    question: "How much can I expect to earn?",
    answer: "Pay varies by event type and location, typically ranging from $20-35/hour. Specialty events, trade shows, and multi-day activations often pay more. Some events also include tips, bonuses, or product perks."
  },
  {
    question: "Do I need previous experience?",
    answer: "While experience is a plus, it's not required. We value enthusiasm, reliability, and great communication skills. If you're outgoing, professional, and excited to represent amazing brands, we want to hear from you!"
  },
  {
    question: "What brands will I work with?",
    answer: "Our clients include Fortune 500 companies, beloved consumer brands, and exciting startups. Past clients include Netflix, MrBeast, Google, Microsoft, MAC Cosmetics, Formula One, and many more."
  }
];

const stats = [
  { value: "500+", label: "Brand Ambassadors Nationwide" },
  { value: "1000+", label: "Events Per Year" },
  { value: "50+", label: "Major Brand Partners" },
  { value: "40+", label: "Cities Covered" }
];

const openPositions = [
  {
    title: "Brand Ambassador",
    location: "Multiple Cities",
    type: "Part-time / Flexible",
    description: "Represent top brands at events, trade shows, and activations across the country."
  },
  {
    title: "Event Team Lead",
    location: "Major Markets",
    type: "Part-time / Contract",
    description: "Lead teams at major activations. Requires 1+ year experience as brand ambassador."
  },
  {
    title: "Street Team Member",
    location: "Multiple Cities",
    type: "Part-time / Flexible",
    description: "High-energy role for guerrilla marketing, sampling, and grassroots activations."
  },
  {
    title: "Promotional Model",
    location: "Major Markets",
    type: "Part-time / Event-based",
    description: "Professional modeling for product launches, auto shows, and high-profile events."
  },
  {
    title: "Trade Show Specialist",
    location: "Las Vegas, Chicago, Orlando",
    type: "Contract / Event-based",
    description: "Experienced booth staff for major trade shows and conventions."
  },
  {
    title: "Hospitality Staff",
    location: "Multiple Cities",
    type: "Part-time / Event-based",
    description: "VIP hosting, bartending, and premium hospitality for corporate events."
  }
];

export default function CareersPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Brand Ambassador",
    "description": "Join AirFresh Marketing as a brand ambassador and represent top brands at events nationwide.",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "AirFresh Marketing",
      "sameAs": "https://airfreshmarketing.com"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      }
    },
    "employmentType": "PART_TIME"
  };

  return (
    <div className="pt-16 min-h-screen">
      <SEO
        title="Careers | Join Our Team | AirFresh Marketing"
        description="Join AirFresh Marketing's team of brand ambassadors and event staff. Flexible schedules, competitive pay, and opportunities to work with top brands nationwide."
        keywords="brand ambassador jobs, event staff jobs, promotional model jobs, marketing jobs, flexible work, experiential marketing careers"
        structuredData={structuredData}
        canonical="https://airfreshmarketing.com/careers"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-1/2 left-1/2 w-[177.77vh] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2">
            <iframe
              src="https://player.vimeo.com/video/394084617?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1"
              className="absolute top-0 left-0 w-full h-full"
              style={{ border: 'none', pointerEvents: 'none' }}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="Air Fresh Marketing Careers"
            />
          </div>
        </div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-24">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-0">
              <Sparkles className="w-4 h-4 mr-1" />
              Now Hiring Nationwide
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join the AirFresh Team
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Love events? Want to represent amazing brands? Join our team of brand ambassadors
              and event professionals working with the world's top companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
                <a href="#positions">
                  View Open Positions
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/careers/apply">Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold text-cyan-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer more than just a job - we offer an experience that helps you grow professionally while having fun.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Icon className="w-12 h-12 text-cyan-600 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find the perfect role for your skills and schedule. All positions offer flexible hours and competitive pay.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-cyan-100 text-cyan-700">{position.type}</Badge>
                  <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <MapPin className="w-4 h-4" />
                    {position.location}
                  </div>
                  <p className="text-gray-600 mb-4">{position.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/careers/apply">Apply Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Culture</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              At AirFresh, we're more than coworkers - we're a community of passionate professionals who love what we do.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Team Says</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from real team members about their experience working with AirFresh Marketing.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-xs text-gray-500">{testimonial.location} • {testimonial.tenure}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA Section */}
      <section id="apply" className="py-20 bg-gradient-to-br from-gray-900 via-cyan-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Apply today and start your journey with AirFresh Marketing. We&apos;re always looking for
            enthusiastic, professional individuals to join our growing team.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 text-lg px-8 py-6">
              <Link href="/careers/apply">
                Start Your Application
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-cyan-500/20 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="font-semibold text-white text-lg mb-1">Quick Application</h3>
              <p className="text-cyan-100 text-sm">Complete in minutes</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-cyan-500/20 rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="font-semibold text-white text-lg mb-1">Fast Response</h3>
              <p className="text-cyan-100 text-sm">We review within 48 hours</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-cyan-500/20 rounded-full flex items-center justify-center mb-4">
                <Star className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="font-semibold text-white text-lg mb-1">No Experience Required</h3>
              <p className="text-cyan-100 text-sm">Full training provided</p>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8">
            <p className="text-cyan-100 mb-4">Prefer to reach out directly?</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:talent@airfreshmarketing.com"
                className="inline-flex items-center text-white hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                talent@airfreshmarketing.com
              </a>
              <a
                href="tel:3037206060"
                className="inline-flex items-center text-white hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                (303) 720-6060
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
