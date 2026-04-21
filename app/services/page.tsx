import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Users,
  CheckCircle,
  Megaphone,
  Calendar,
  Sparkles,
  Cog,
  Laptop,
  ShoppingCart,
  TrendingUp,
  Palette,
  BarChart3,
} from "lucide-react";

const mainServices = [
  {
    icon: Sparkles,
    title: "Brand Activations & Product Sampling",
    description: "Create memorable first impressions with interactive brand experiences that let customers touch, taste, and experience your products firsthand.",
    features: ["Product Demonstrations", "Sampling Campaigns", "Pop-up Experiences", "Interactive Displays"],
    color: "bg-gradient-to-br from-blue-50 to-cyan-50"
  },
  {
    icon: Users,
    title: "Corporate Events & Team Building",
    description: "Strengthen company culture and client relationships through professionally managed corporate events and team building experiences.",
    features: ["Conference Management", "Team Building Activities", "Client Entertainment", "Award Ceremonies"],
    color: "bg-gradient-to-br from-purple-50 to-pink-50"
  },
  {
    icon: Megaphone,
    title: "Guerrilla Marketing & Street Teams",
    description: "Make a bold statement with creative guerrilla marketing campaigns that generate buzz and create viral moments for your brand.",
    features: ["Street Team Campaigns", "Flash Mob Events", "Viral Stunts", "Community Engagement"],
    color: "bg-gradient-to-br from-green-50 to-emerald-50"
  },
  {
    icon: Calendar,
    title: "Trade Show & Convention Marketing",
    description: "Maximize your trade show ROI with professional booth management, lead generation, and attendee engagement strategies.",
    features: ["Booth Management", "Lead Generation", "Product Launches", "Attendee Engagement"],
    color: "bg-gradient-to-br from-orange-50 to-yellow-50"
  }
];

const turnkeyServices = [
  {
    icon: Cog,
    title: "Production & Execution",
    description: "Complete project management from planning to delivery"
  },
  {
    icon: Laptop,
    title: "Experiential & Digital",
    description: "Seamless integration of physical and digital experiences"
  },
  {
    icon: ShoppingCart,
    title: "Asset Procurement",
    description: "Sourcing all necessary materials and equipment"
  },
  {
    icon: TrendingUp,
    title: "Marketing Strategy",
    description: "Strategic planning aligned with your objectives"
  },
  {
    icon: Palette,
    title: "Creative Development",
    description: "Innovative concepts that captivate audiences"
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Data-driven insights and performance metrics"
  }
];

const cityLinks = [
  { city: 'New York', slug: 'new-york' },
  { city: 'Los Angeles', slug: 'los-angeles' },
  { city: 'Chicago', slug: 'chicago' },
  { city: 'Houston', slug: 'houston' },
  { city: 'Phoenix', slug: 'phoenix' },
  { city: 'San Francisco', slug: 'san-francisco' },
  { city: 'Dallas', slug: 'dallas' },
  { city: 'Austin', slug: 'austin' },
  { city: 'Miami', slug: 'miami' },
  { city: 'Atlanta', slug: 'atlanta' },
  { city: 'Seattle', slug: 'seattle' },
  { city: 'Denver', slug: 'denver' },
  { city: 'Boston', slug: 'boston' },
  { city: 'Nashville', slug: 'nashville' },
  { city: 'Las Vegas', slug: 'las-vegas' },
  { city: 'San Diego', slug: 'san-diego' },
  { city: 'Portland', slug: 'portland' },
  { city: 'Detroit', slug: 'detroit' },
  { city: 'Minneapolis', slug: 'minneapolis' },
  { city: 'Philadelphia', slug: 'philadelphia' },
  { city: 'Charlotte', slug: 'charlotte' },
  { city: 'Orlando', slug: 'orlando' },
  { city: 'Tampa', slug: 'tampa' },
  { city: 'San Antonio', slug: 'san-antonio' },
];

const popularServices = [
  { label: 'Brand Ambassadors New York', href: '/city-services/new-york-brand-ambassadors' },
  { label: 'Experiential Marketing Los Angeles', href: '/city-services/los-angeles-experiential-marketing' },
  { label: 'Street Teams Chicago', href: '/city-services/chicago-street-teams' },
  { label: 'Product Sampling Miami', href: '/city-services/miami-sampling' },
  { label: 'Convention Staffing Las Vegas', href: '/city-services/las-vegas-convention-staffing' },
  { label: 'Event Management Austin', href: '/city-services/austin-event-management' },
  { label: 'Promotional Models Denver', href: '/city-services/denver-promotional-models' },
  { label: 'Guerrilla Marketing Atlanta', href: '/city-services/atlanta-guerilla-marketing' },
  { label: 'Brand Ambassadors San Francisco', href: '/city-services/san-francisco-marketing-mascots' },
  { label: 'Brand Ambassadors Seattle', href: '/city-services/seattle-brand-ambassadors' },
];

export default function Services() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "provider": {
          "@type": "Organization",
          "name": "AirFresh Marketing",
          "url": "https://www.airfreshmarketing.com"
        },
        "serviceType": [
          "Experiential Marketing",
          "Brand Activations",
          "Corporate Events",
          "Event Production",
          "Product Sampling",
          "Trade Show Marketing",
          "Guerrilla Marketing",
          "Brand Ambassador Services"
        ],
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "url": "https://www.airfreshmarketing.com/services"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.airfreshmarketing.com" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.airfreshmarketing.com/services" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What experiential marketing services does AirFresh Marketing offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AirFresh Marketing offers brand activations, product sampling, corporate events, trade show marketing, guerrilla marketing, street teams, brand ambassador staffing, event production, creative development, and analytics reporting. We handle everything in-house from strategy to execution."
            }
          },
          {
            "@type": "Question",
            "name": "How much does experiential marketing cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Experiential marketing costs vary by scope and service type. Small-scale activations start around $5,000, mid-scale campaigns range from $25,000-$150,000, and large-scale national campaigns can exceed $150,000. Contact us for a free custom quote tailored to your goals and budget."
            }
          },
          {
            "@type": "Question",
            "name": "What cities does AirFresh Marketing serve?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AirFresh Marketing serves 50+ major cities nationwide including New York, Los Angeles, Chicago, Miami, Dallas, San Francisco, Denver, Austin, Atlanta, Seattle, Boston, Nashville, Las Vegas, and many more. Our Denver headquarters coordinates campaigns across all U.S. markets."
            }
          },
          {
            "@type": "Question",
            "name": "How quickly can AirFresh staff my event?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We can typically deploy trained event staff within 48-72 hours for most markets. For larger activations or specialized roles, we recommend 2-4 weeks lead time. Our nationwide network of 1,000+ pre-vetted brand ambassadors allows us to scale quickly for any campaign size."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide turnkey event marketing solutions?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, AirFresh Marketing provides full turnkey solutions including production, strategy, creative development, asset procurement, experiential and digital integration, and post-event analytics. We operate as an extension of your team from concept to completion."
            }
          }
        ]
      }
    ]
  };

  const faqs = [
    { question: "What experiential marketing services does AirFresh Marketing offer?", answer: "AirFresh Marketing offers brand activations, product sampling, corporate events, trade show marketing, guerrilla marketing, street teams, brand ambassador staffing, event production, creative development, and analytics reporting. We handle everything in-house from strategy to execution." },
    { question: "How much does experiential marketing cost?", answer: "Experiential marketing costs vary by scope and service type. Small-scale activations start around $5,000, mid-scale campaigns range from $25,000-$150,000, and large-scale national campaigns can exceed $150,000. Contact us for a free custom quote tailored to your goals and budget." },
    { question: "What cities does AirFresh Marketing serve?", answer: "AirFresh Marketing serves 50+ major cities nationwide including New York, Los Angeles, Chicago, Miami, Dallas, San Francisco, Denver, Austin, Atlanta, Seattle, Boston, Nashville, Las Vegas, and many more. Our Denver headquarters coordinates campaigns across all U.S. markets." },
    { question: "How quickly can AirFresh staff my event?", answer: "We can typically deploy trained event staff within 48-72 hours for most markets. For larger activations or specialized roles, we recommend 2-4 weeks lead time. Our nationwide network of 1,000+ pre-vetted brand ambassadors allows us to scale quickly for any campaign size." },
    { question: "Do you provide turnkey event marketing solutions?", answer: "Yes, AirFresh Marketing provides full turnkey solutions including production, strategy, creative development, asset procurement, experiential and digital integration, and post-event analytics. We operate as an extension of your team from concept to completion." },
  ];

  return (
    <div className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/case-studies/gallery/microsoft/microsoft-1.jpg')"
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 pointer-events-none" />
        <article className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <header className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              What <span className="text-yellow-300 italic font-serif">Experiential Marketing Services</span> Do We Offer?
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
              We deliver comprehensive experiential marketing campaigns
              designed to achieve higher engagement rates and create lasting emotional connections with your customers.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </header>
        </article>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">WHAT WE SPECIALIZE IN</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What Services Can Transform Your Brand?</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From intimate brand activations to large-scale corporate events, we create
              experiences that resonate with your audience and drive meaningful business results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className={`p-8 hover:shadow-xl transition-all duration-300 ${service.color}`}>
                <CardContent className="p-0">
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mr-6 shadow-sm">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Turnkey Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">TURNKEY SOLUTIONS</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Everything In-House</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We do everything in-house as an extension of your team. We strategize what&apos;s best
              for meeting your goals and then come together to crush them as a single unit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {turnkeyServices.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-0">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">OUR PROCESS</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">How We Work</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our proven process ensures every project is executed flawlessly from concept to completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <h4 className="text-lg font-bold mb-2">Discovery</h4>
              <p className="text-gray-600">We dive deep into your brand, goals, and target audience to understand your unique needs.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <h4 className="text-lg font-bold mb-2">Strategy</h4>
              <p className="text-gray-600">We develop a comprehensive strategy tailored to your objectives and target market.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <h4 className="text-lg font-bold mb-2">Execution</h4>
              <p className="text-gray-600">Our experienced team brings your vision to life with flawless execution and attention to detail.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                4
              </div>
              <h4 className="text-lg font-bold mb-2">Analysis</h4>
              <p className="text-gray-600">We provide detailed analytics and insights to measure success and optimize future campaigns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by City Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Services by City</h2>
          <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            Find our full range of experiential marketing services in major cities across the United States.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {cityLinks.map((c) => (
              <Link
                key={c.slug}
                href={`/city-services/${c.slug}-brand-ambassadors`}
                className="px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-primary/5 rounded transition-colors text-center"
              >
                {c.city}
              </Link>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
            <span className="col-span-full text-sm font-semibold text-gray-500 mb-2">Popular Services:</span>
            {popularServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="px-3 py-2 text-xs text-gray-500 hover:text-primary hover:bg-primary/5 rounded transition-colors"
              >
                {s.label}
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/locations" className="text-primary hover:underline font-medium">
              View all locations →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Experiential Marketing Services FAQ</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Staffing Solutions Links */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Staffing Solutions</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <Link href="/event-staffing-agency" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Event Staffing Agency</Link>
            <Link href="/services/trade-show-staffing" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Trade Show Staffing</Link>
            <Link href="/services/convention-staffing" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Convention Staffing</Link>
            <Link href="/services/brand-ambassadors" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Brand Ambassadors</Link>
            <Link href="/event-staffing-near-me" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Event Staffing Near Me</Link>
            <Link href="/services/luxury-brand-marketing" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Luxury Brand Marketing</Link>
            <Link href="/services/retail-activations" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Retail Activations</Link>
            <Link href="/services/food-beverage-sampling" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Food & Beverage Sampling</Link>
            <Link href="/hire-brand-ambassadors" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Hire Brand Ambassadors</Link>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/pricing" className="text-cyan-600 hover:text-cyan-700 font-medium">Pricing</Link>
            <span className="text-gray-300">|</span>
            <Link href="/technology" className="text-cyan-600 hover:text-cyan-700 font-medium">Our Technology</Link>
            <span className="text-gray-300">|</span>
            <Link href="/case-studies" className="text-cyan-600 hover:text-cyan-700 font-medium">Case Studies</Link>
            <span className="text-gray-300">|</span>
            <Link href="/compare" className="text-cyan-600 hover:text-cyan-700 font-medium">Compare Agencies</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Unforgettable Experiences?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let&apos;s discuss how our experiential marketing services can help your brand connect with customers in meaningful ways.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white">
              <Link href="/case-studies">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
