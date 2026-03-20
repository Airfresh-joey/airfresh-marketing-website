import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import {
  Smartphone,
  Shield,
  Home,
  Heart,
  Building2,
  Phone,
  CheckCircle,
  Star,
  Users,
  Clock,
  Award,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function SeniorServicesHub() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "By My Side Senior Services",
        "@id": "https://bymysideseniorservices.com/#organization",
        "description": "Comprehensive senior care services including home safety modifications, smart home technology, in-home caregiving, decluttering assistance, and assisted living placement help.",
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "serviceType": [
          "Senior Home Safety Modifications",
          "Smart Home Technology Installation",
          "Non-Medical In-Home Care",
          "Decluttering and Downsizing Services",
          "Assisted Living Placement"
        ]
      },
      {
        "@type": "Service",
        "provider": {
          "@type": "LocalBusiness",
          "name": "By My Side Senior Services"
        },
        "serviceType": "Senior Care Services",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Senior Care Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Smart Home Technology & Monitoring",
                "description": "Professional installation of medical alert systems, smart sensors, and remote monitoring technology to keep seniors safe at home."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Home Safety & Mobility Modifications",
                "description": "Professional installation of grab bars, walk-in showers, ramps, and other safety modifications for aging in place."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Decluttering & Downsizing",
                "description": "Compassionate help organizing, sorting, and downsizing belongings for seniors transitioning to smaller living spaces."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Non-Medical In-Home Care",
                "description": "Trained caregivers providing companionship, meal preparation, light housekeeping, and personal care assistance."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Assisted Living Placement",
                "description": "Expert guidance navigating assisted living options, facility tours, and placement assistance at no cost to families."
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What senior care services does By My Side offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "By My Side Senior Services offers comprehensive aging-in-place solutions including smart home technology installation, home safety modifications like grab bars and walk-in showers, decluttering and downsizing help, non-medical in-home caregiving, and assisted living search assistance."
            }
          },
          {
            "@type": "Question",
            "name": "How do I know which senior care services my loved one needs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer free in-home consultations to assess your loved one's needs and recommend the right combination of services. Our care coordinators consider mobility, safety concerns, daily living needs, and future care requirements to create a personalized care plan."
            }
          }
        ]
      }
    ]
  };

  const services = [
    {
      icon: Smartphone,
      title: "Smart Home Technology & Monitoring",
      description: "Keep your loved ones safe with professional installation of medical alert systems, motion sensors, video monitoring, and smart home devices designed specifically for seniors.",
      features: ["Medical alert systems", "Fall detection sensors", "Video monitoring", "Smart home automation"],
      link: "/senior-services/tech-monitoring",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Shield,
      title: "Home Safety & Mobility Modifications",
      description: "Transform any home into a safe haven with professional installation of grab bars, walk-in showers, stairlifts, ramps, and other mobility modifications.",
      features: ["Grab bars & handrails", "Walk-in shower conversions", "Stairlifts & ramps", "Non-slip flooring"],
      link: "/senior-services/safety-mobility",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50"
    },
    {
      icon: Home,
      title: "Decluttering & Downsizing Services",
      description: "Compassionate, hands-on help sorting through a lifetime of possessions. We make downsizing stress-free with organized systems and caring support.",
      features: ["Sorting & organizing", "Estate sale coordination", "Donation pickups", "Moving assistance"],
      link: "/senior-services/decluttering-downsizing",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50"
    },
    {
      icon: Heart,
      title: "Non-Medical In-Home Caregiving",
      description: "Trained, compassionate caregivers provide personalized support so your loved one can maintain independence and quality of life at home.",
      features: ["Companionship & socialization", "Meal preparation", "Light housekeeping", "Personal care assistance"],
      link: "/senior-services/in-home-care",
      color: "from-rose-500 to-pink-500",
      bgColor: "bg-rose-50"
    },
    {
      icon: Building2,
      title: "Assisted Living Search Help",
      description: "Navigate the overwhelming world of senior living options with expert guidance. We help you find the perfect community at no cost to your family.",
      features: ["Personalized recommendations", "Facility tours", "Cost comparison", "Placement assistance"],
      link: "/senior-services/assisted-living-search",
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-50"
    }
  ];

  const stats = [
    { number: "5,000+", label: "Families Served", icon: Users },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "98%", label: "Client Satisfaction", icon: Star },
    { number: "24/7", label: "Support Available", icon: Clock }
  ];

  const testimonials = [
    {
      quote: "By My Side made the transition so much easier for our mother. The grab bars and walk-in shower gave her back her independence.",
      author: "Jennifer M.",
      relation: "Daughter of client",
      rating: 5
    },
    {
      quote: "The caregivers are like family. Mom looks forward to their visits and we have peace of mind knowing she's well cared for.",
      author: "Robert T.",
      relation: "Son of client",
      rating: 5
    },
    {
      quote: "Finding the right assisted living facility felt impossible until By My Side guided us through the process. They truly care.",
      author: "Susan K.",
      relation: "Family caregiver",
      rating: 5
    }
  ];

  return (
    <div className="pt-16">
      <SEO
        title="Senior Care Services | Home Safety, In-Home Care & Assisted Living Help | By My Side"
        description="Comprehensive senior care services: smart home technology, home safety modifications, in-home caregiving, decluttering help, and assisted living placement. Serving families with compassion."
        pageType="services"
        canonical="https://bymysideseniorservices.com/services"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative py-24 lg:py-36 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-amber-400" />
              <span className="text-white/90 text-sm font-medium">Trusted by 5,000+ Families Nationwide</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Helping Seniors <span className="text-amber-400">Age in Place</span> with Dignity & Independence
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              From home safety modifications to compassionate caregiving, we provide everything your loved one needs to live safely and comfortably at home—or find the perfect care community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold text-lg px-8 py-6">
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Free Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                <a href="tel:+18005551234">Call (800) 555-1234</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 text-amber-400 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-white/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-4">Our Services</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Complete Senior Care Solutions
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Whether you need help making a home safer, finding quality care, or navigating senior living options,
              we're by your side every step of the way.
            </p>
          </div>

          <div className="grid gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 ${service.bgColor}`}
              >
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row">
                    <div className={`lg:w-1/4 p-8 flex items-center justify-center bg-gradient-to-br ${service.color}`}>
                      <service.icon className="h-20 w-20 text-white" />
                    </div>
                    <div className="lg:w-3/4 p-8 lg:p-10">
                      <h4 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0" />
                            <span className="text-slate-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button asChild className="bg-slate-900 hover:bg-slate-800 group/btn">
                        <Link href={service.link}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-4">Why Families Choose Us</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                We Treat Your Family Like Our Own
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                At By My Side, we understand that caring for an aging loved one is one of life's most important responsibilities.
                That's why we approach every family with the same compassion, respect, and dedication we'd want for our own parents.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Licensed & Insured Professionals</h4>
                    <p className="text-slate-600">Every team member is fully vetted, trained, and certified in senior care best practices.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Personalized Care Plans</h4>
                    <p className="text-slate-600">No cookie-cutter solutions. We create custom plans based on your loved one's unique needs and preferences.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">24/7 Family Support</h4>
                    <p className="text-slate-600">Questions don't follow business hours. Our team is available around the clock for emergencies and peace of mind.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Caregiver helping senior with daily activities"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm italic mb-2">
                  "They gave us our lives back. Mom is thriving and we finally have peace of mind."
                </p>
                <p className="text-slate-900 font-semibold text-sm">— The Martinez Family</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-4">Client Stories</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Hear From Families We've Helped
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-lg italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-slate-900">{testimonial.author}</p>
                    <p className="text-slate-500 text-sm">{testimonial.relation}</p>
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
            <h2 className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-4">How It Works</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Getting Started Is Easy
            </h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We've simplified the process so you can focus on what matters most—your loved one.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Free Consultation", desc: "Call us or fill out our form. We'll discuss your needs and answer all your questions." },
              { step: "2", title: "Home Assessment", desc: "Our care coordinator visits to evaluate needs and recommend the right services." },
              { step: "3", title: "Custom Care Plan", desc: "We create a personalized plan tailored to your loved one's specific situation." },
              { step: "4", title: "Ongoing Support", desc: "Services begin with continuous monitoring and adjustments as needs change." }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Give Your Loved One the Best Care?
          </h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Every family's situation is unique. Let's talk about how we can help your loved one
            live safely, comfortably, and with dignity. Your free consultation is just a call away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold text-lg px-10 py-6">
              <Link href="/contact">
                Schedule Free Consultation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-10 py-6">
              <a href="tel:+18005551234">
                <Phone className="mr-2 h-5 w-5" />
                (800) 555-1234
              </a>
            </Button>
          </div>
          <p className="mt-6 text-white/60 text-sm">
            No obligation. No pressure. Just honest advice from people who care.
          </p>
        </div>
      </section>
    </div>
  );
}
