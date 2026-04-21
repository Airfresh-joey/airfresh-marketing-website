'use client'

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

import {
  Linkedin,
  Mail,
  Users,
  Target,
  Award,
  Heart,
  ArrowRight
} from "lucide-react";

// Leadership team data
const leadership = [
  {
    name: "Joey Kercher",
    title: "Founder & CEO",
    bio: "Joey founded Air Fresh Marketing in 2004 with a vision to revolutionize how brands connect with consumers. With over 20 years of experience in experiential marketing, he has led campaigns for Fortune 500 companies and emerging brands alike. His passion for authentic consumer engagement drives the company's innovative approach to brand activations.",
    image: "/images/team/joey-kercher.jpg",
    linkedin: "https://www.linkedin.com/in/joeykercher/"
  },
  {
    name: "Kimberly Keeler",
    title: "Director of Operations",
    bio: "Kimberly brings 10+ years of event marketing and operations experience to Air Fresh. She oversees all campaign execution, talent management, and client delivery. Her background in division-level event marketing for major brands ensures every activation runs seamlessly from concept to completion.",
    image: "/images/team/kimberly-keeler.jpg",
    linkedin: "#"
  },
  {
    name: "Krista Castillo",
    title: "Account Director",
    bio: "Krista leads client relationships and business development, bringing deep expertise in experiential marketing strategy. She works closely with brands to understand their objectives and craft campaigns that deliver measurable results and memorable experiences.",
    image: "/images/team/krista-castillo.jpg",
    linkedin: "#"
  }
];

// Values that define the team
const teamValues = [
  {
    icon: Heart,
    title: "Passion for Excellence",
    description: "Every team member brings genuine enthusiasm and dedication to creating unforgettable brand experiences."
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description: "We work as one team with our clients, treating every campaign as a shared mission for success."
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Our focus is always on delivering measurable outcomes that move the needle for our clients' businesses."
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description: "Decades of combined experience in experiential marketing, events, and brand activation."
  }
];

export default function TeamPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "AirFresh Marketing",
      "url": "https://www.airfreshmarketing.com",
      "employee": leadership.map(person => ({
        "@type": "Person",
        "name": person.name,
        "jobTitle": person.title,
        "worksFor": {
          "@type": "Organization",
          "name": "AirFresh Marketing"
        }
      }))
    }
  };

  return (
    <div className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-gray-900 via-cyan-900 to-blue-900">
        <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Meet Our <span className="text-cyan-400">Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            The experienced professionals behind successful brand activations 
            for hundreds of companies nationwide.
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-cyan-600 uppercase tracking-wide mb-4">LEADERSHIP</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              The People Behind Your Success
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our leadership team brings decades of combined experience in experiential marketing, 
              event production, and brand strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((person, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-[4/3] relative bg-gradient-to-br from-cyan-100 to-blue-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">
                        {person.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{person.name}</h4>
                  <p className="text-cyan-600 font-medium mb-4">{person.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{person.bio}</p>
                  <div className="flex gap-3">
                    <a 
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-500 hover:text-cyan-600 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">
            Experiential Marketing Team Built for Results
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Since 2004, our experiential marketing team has managed thousands of brand activations for companies ranging from Fortune 500 corporations to high-growth startups. What sets the AirFresh leadership team apart is our hands-on approach — every campaign is personally overseen by senior team members who understand both the strategic and operational sides of experiential marketing.
            </p>
            <p>
              Our team&apos;s expertise spans the full spectrum of event staffing and brand activation: from product sampling programs at major retailers like Costco and Whole Foods, to large-scale experiential campaigns at music festivals, sporting events, and trade shows. We&apos;ve built a proprietary technology platform with GPS-verified check-ins and video training certification that ensures consistent quality across every market we serve.
            </p>
            <p>
              Joey Kercher founded AirFresh Marketing with the belief that brand activations should be measurable, accountable, and genuinely engaging. That philosophy drives everything our team does today. We don&apos;t just provide staff — we design experiences that create lasting connections between brands and consumers. Our team has delivered campaigns for Netflix, Microsoft, Google, Formula One, MAC Cosmetics, and hundreds of other brands that demand excellence.
            </p>
            <p>
              Every member of our leadership team brings deep expertise in event logistics, talent management, and marketing strategy. Combined with our network of 500+ trained brand ambassadors across all 50 states, we have the bench strength to execute campaigns of any scale, in any market, on any timeline.
            </p>
          </div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-cyan-600 uppercase tracking-wide mb-4">OUR VALUES</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              What Drives Our Team
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core values guide how we work together and serve our clients every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamValues.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-4 bg-cyan-100 rounded-full flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-gray-900">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Ambassador Network Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-sm font-semibold text-cyan-600 uppercase tracking-wide mb-4">OUR NETWORK</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                500+ Brand Ambassadors Nationwide
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Beyond our leadership team, we've built an extensive network of trained, professional 
                brand ambassadors across all 50 states. Each ambassador is carefully vetted, trained, 
                and matched to campaigns that fit their expertise.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  Rigorous vetting and background checks
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  Brand-specific training for every activation
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  Local market expertise in 50+ cities
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  Diverse talent for any demographic target
                </li>
              </ul>
              <Button asChild className="bg-cyan-600 hover:bg-cyan-700">
                <Link href="/careers">
                  Join Our Team
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg p-6 text-white">
                    <div className="text-4xl font-bold mb-1">500+</div>
                    <div className="text-cyan-100">Brand Ambassadors</div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-6">
                    <div className="text-4xl font-bold text-gray-900 mb-1">50+</div>
                    <div className="text-gray-600">Cities Covered</div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-gray-100 rounded-lg p-6">
                    <div className="text-4xl font-bold text-gray-900 mb-1">1000+</div>
                    <div className="text-gray-600">Events Per Year</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg p-6 text-white">
                    <div className="text-4xl font-bold mb-1">300+</div>
                    <div className="text-purple-100">Brands Served</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work With Our Team?</h2>
          <p className="text-xl mb-8 text-cyan-100 max-w-2xl mx-auto">
            Let's discuss how our experienced team can help bring your brand to life 
            through unforgettable experiential marketing campaigns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
              <Link href="/contact">Start a Project</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
