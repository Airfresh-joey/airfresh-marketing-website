import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { InteractiveMap } from "@/components/InteractiveMap";
import {
  Users,
  Target,
  Lightbulb,
  Award,
  Heart,
  Zap,
  TrendingUp,
  Building2,
  Store,
  Handshake,
  CheckCircle,
  MapPin,
  ArrowRight
} from "lucide-react";

const stats = [
  { number: "25+", label: "Years of Experience" },
  { number: "300+", label: "Brands Activated" },
  { number: "50+", label: "Cities Nationwide" },
  { number: "1000+", label: "Events Produced" }
];

const values = [
  {
    icon: Heart,
    title: "Passion-Driven",
    description: "Every project is fueled by our genuine passion for creating unforgettable experiences that connect brands with their audiences."
  },
  {
    icon: Target,
    title: "Results-Focused",
    description: "We measure success by the meaningful connections and measurable outcomes we create for your brand."
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We constantly push creative boundaries to deliver fresh, engaging experiences that stand out in the marketplace."
  }
];

const services = [
  {
    icon: Zap,
    title: "Production and Execution",
    description: "Complete project management from planning to flawless delivery"
  },
  {
    icon: TrendingUp,
    title: "Experiential & Digital Marketing",
    description: "Seamless integration of physical and digital brand experiences"
  },
  {
    icon: Target,
    title: "Asset Procurement",
    description: "Sourcing and managing all necessary materials and equipment"
  },
  {
    icon: Lightbulb,
    title: "Marketing Strategy",
    description: "Strategic planning perfectly aligned with your business objectives"
  },
  {
    icon: Award,
    title: "Creative Development",
    description: "Innovative concepts that captivate and engage your target audiences"
  }
];

const clientTypes = [
  {
    icon: Store,
    title: "Local Brands",
    description: "Pump up the volume with next-level events for your local business.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: Building2,
    title: "Corporations",
    description: "Give every customer an intimate experience when it comes to colossal nationwide campaigns.",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: Handshake,
    title: "Agencies",
    description: "Enhance your agency with fresh ideas, unique perspectives and innovative outreach.",
    color: "bg-green-50 text-green-600"
  }
];

const cities = [
  'Denver', 'Los Angeles', 'New York', 'Chicago', 'Houston', 'Phoenix',
  'San Francisco', 'Seattle', 'Miami', 'Atlanta', 'Boston', 'Dallas',
  'Austin', 'Portland', 'San Diego', 'Las Vegas', 'Nashville', 'Charlotte'
];

export default function About() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "url": "https://www.airfreshmarketing.com/about",
        "mainEntity": {
          "@type": "Organization",
          "@id": "https://www.airfreshmarketing.com/#organization",
          "name": "AirFresh Marketing",
          "description": "Experiential marketing agency creating memorable brand activations and customer engagement campaigns since 2004",
          "foundingDate": "2004",
          "founder": {
            "@type": "Person",
            "name": "AirFresh Marketing Founders"
          },
          "specialty": "Experiential Marketing, Brand Activations, Event Marketing, Guerrilla Marketing",
          "areaServed": {
            "@type": "Country",
            "name": "United States"
          },
          "knowsAbout": [
            "Experiential Marketing Strategy",
            "Brand Activation Campaigns",
            "Event Staffing and Management",
            "Guerrilla Marketing Tactics",
            "Product Sampling Programs",
            "Trade Show Marketing",
            "Corporate Event Production"
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why choose AirFresh Marketing for experiential marketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AirFresh Marketing brings over 25 years of expertise, 300+ successful brand campaigns, a network of trained brand ambassadors in 50+ cities, and nationwide operations. Our focus on client satisfaction and proven engagement strategies make us a trusted choice for experiential marketing."
            }
          },
          {
            "@type": "Question",
            "name": "What makes AirFresh different from other marketing agencies?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Unlike traditional agencies, AirFresh specializes exclusively in experiential marketing with in-house capabilities for strategy, creative, production, and execution. Our turnkey solutions, nationwide brand ambassador network, and data-driven approach deliver measurable ROI."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.airfreshmarketing.com" },
          { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.airfreshmarketing.com/about" }
        ]
      }
    ]
  };

  return (
    <div className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden" aria-label="About Hero">
        <div className="absolute inset-0 z-0">
          <iframe
            src="https://player.vimeo.com/video/394240533?background=1&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0"
            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2"
            style={{ aspectRatio: '16/9' }}
            frameBorder="0"
            allow="autoplay; fullscreen"
            title="AirFresh Marketing Team"
          />
        </div>
        <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />
        <article className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <header className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Why Is AirFresh <span className="text-cyan-400">Marketing</span> the Leading Experiential Agency?
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              We&apos;ve delivered <strong>successful campaigns</strong> for <strong>numerous brands</strong> across <strong>major cities nationwide</strong>.
              Our focus on <strong>client satisfaction</strong> and <strong>trained brand ambassadors</strong> make us a trusted choice for experiential marketing.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </header>
        </article>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50" aria-label="Company Story">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                How Did AirFresh Marketing Become the Premier Experiential Agency?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                <time dateTime="2004">Founded in 2004</time> in Denver, Colorado, AirFresh Marketing began with a simple yet powerful mission:
                to help brands create authentic, meaningful connections with their audiences through the
                power of experiential marketing.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                What started as a small team of passionate marketers has evolved into a nationwide company
                serving clients from coast to coast. Today, we&apos;ve helped over 300 brands create memorable
                experiences that drive real business results.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Nationwide coverage across 50+ cities</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Full-service in-house capabilities</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Data-driven insights and reporting</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/case-studies/williams-racing-2.jpg"
                alt="AirFresh Marketing team at Williams Racing activation event"
                width={600}
                height={400}
                className="rounded-lg shadow-xl object-cover w-full h-[400px]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">300+</div>
                <div className="text-sm">Brands Served</div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and define how we approach
              every client relationship and project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">WHAT WE DO</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Turnkey Services</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything we do is done in-house and as an extension of your team. We strategize
              what&apos;s best for meeting your goals and then come together to crush them as a single unit.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-gray-900">{service.title}</h4>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nationwide Coverage Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">NATIONWIDE COVERAGE</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Serving 50+ Cities Coast to Coast</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From our Denver headquarters to major markets nationwide, we deliver exceptional
              experiential marketing campaigns wherever your audience is located.
            </p>
          </div>

          <div className="relative bg-gradient-to-r from-cyan-600 to-blue-600 p-1 rounded-2xl shadow-2xl mb-12">
            <div className="bg-white rounded-xl overflow-hidden">
              <InteractiveMap />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-8">
            {cities.map((city) => (
              <div key={city} className="flex items-center text-gray-600 text-sm">
                <MapPin className="w-3 h-3 text-cyan-600 mr-1 flex-shrink-0" />
                {city}
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/locations">
              <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700">
                View All Locations
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Client Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">WHO WE SERVE</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Perfect For Every Business</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From local businesses to Fortune 500 corporations, we tailor our approach
              to meet the unique needs of every client.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientTypes.map((type, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${type.color}`}>
                    <type.icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{type.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Explore Our Resources</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/guides/event-staffing-101" className="group p-5 bg-white rounded-xl border border-gray-200 hover:border-cyan-400 hover:shadow-md transition-all">
              <div className="font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">Event Staffing 101</div>
              <p className="text-sm text-gray-500 mt-1">Everything you need to know</p>
            </Link>
            <Link href="/guides/brand-ambassador-hiring-guide" className="group p-5 bg-white rounded-xl border border-gray-200 hover:border-cyan-400 hover:shadow-md transition-all">
              <div className="font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">Brand Ambassador Guide</div>
              <p className="text-sm text-gray-500 mt-1">How to hire top ambassadors</p>
            </Link>
            <Link href="/technology" className="group p-5 bg-white rounded-xl border border-gray-200 hover:border-cyan-400 hover:shadow-md transition-all">
              <div className="font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">Our Technology</div>
              <p className="text-sm text-gray-500 mt-1">GPS check-in and real-time reporting</p>
            </Link>
            <Link href="/compare" className="group p-5 bg-white rounded-xl border border-gray-200 hover:border-cyan-400 hover:shadow-md transition-all">
              <div className="font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">Compare Agencies</div>
              <p className="text-sm text-gray-500 mt-1">See how we stack up</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Unforgettable Experiences?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let&apos;s discuss how we can help your brand connect with customers in meaningful ways.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
