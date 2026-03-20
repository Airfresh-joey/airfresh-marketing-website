import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import {
  Shield,
  Droplets,
  ArrowUpDown,
  Footprints,
  Lightbulb,
  DoorOpen,
  Phone,
  CheckCircle,
  Star,
  Clock,
  Award,
  AlertTriangle,
  Wrench,
  Home,
  Heart,
  ArrowRight,
  Bath,
  Accessibility
} from "lucide-react";

export default function SafetyMobility() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Home Safety & Mobility Modifications for Seniors",
        "provider": {
          "@type": "LocalBusiness",
          "name": "By My Side Senior Services"
        },
        "description": "Professional installation of grab bars, walk-in showers, stairlifts, wheelchair ramps, and other home safety modifications to help seniors age in place safely and comfortably.",
        "serviceType": "Senior Home Modifications",
        "areaServed": "United States",
        "offers": {
          "@type": "Offer",
          "description": "Free in-home safety assessment and installation quote"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are the most important home modifications for senior safety?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The most critical modifications include bathroom grab bars near toilets and showers, walk-in showers or tub conversions, non-slip flooring, improved lighting, stair railings, and removing trip hazards. A professional assessment identifies which modifications will have the greatest impact for each individual's needs."
            }
          },
          {
            "@type": "Question",
            "name": "How much does it cost to install grab bars and bathroom safety features?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Basic grab bar installation typically ranges from $100-300 per bar including hardware and professional installation. Walk-in shower conversions range from $3,000-10,000 depending on scope. We provide detailed quotes after our free home assessment and work with all budgets to prioritize the most impactful safety improvements."
            }
          },
          {
            "@type": "Question",
            "name": "Does Medicare cover home safety modifications?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Traditional Medicare typically doesn't cover home modifications, but some Medicare Advantage plans do. Medicaid may cover modifications in certain states. VA benefits often cover home modifications for veterans. We help families navigate funding options including state programs, grants, and reverse mortgage solutions."
            }
          }
        ]
      }
    ]
  };

  const modifications = [
    {
      icon: Bath,
      title: "Bathroom Safety Solutions",
      description: "The bathroom is where 80% of senior falls occur. Our comprehensive bathroom modifications dramatically reduce this risk.",
      items: [
        "Grab bars by toilet and shower",
        "Walk-in shower conversions",
        "Comfort-height toilets",
        "Non-slip flooring and mats",
        "Handheld showerheads",
        "Shower seats and benches"
      ],
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: ArrowUpDown,
      title: "Stairlifts & Elevators",
      description: "Stairs shouldn't keep your loved one confined to one floor. Our mobility solutions restore access to the entire home.",
      items: [
        "Straight stairlifts",
        "Curved stairlifts",
        "Outdoor stairlifts",
        "Home elevators",
        "Platform lifts",
        "Ceiling track lifts"
      ],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Accessibility,
      title: "Wheelchair Ramps & Entry",
      description: "Safe, code-compliant ramps that blend with your home's aesthetics while providing easy access.",
      items: [
        "Permanent aluminum ramps",
        "Modular ramp systems",
        "Threshold ramps",
        "Portable folding ramps",
        "Entry door widening",
        "Automatic door openers"
      ],
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: Footprints,
      title: "Flooring & Trip Hazards",
      description: "We identify and eliminate fall risks throughout the home with safe, attractive flooring solutions.",
      items: [
        "Non-slip flooring installation",
        "Carpet to hard floor conversion",
        "Transition strip safety",
        "Cord management",
        "Area rug removal/securing",
        "Threshold modifications"
      ],
      image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Lightbulb,
      title: "Lighting Improvements",
      description: "Poor lighting is a leading cause of falls. We brighten every corner of the home for maximum safety.",
      items: [
        "Motion-sensor lighting",
        "Night lights throughout",
        "Under-cabinet kitchen lights",
        "Stairway lighting",
        "Outdoor pathway lighting",
        "Easy-reach switches"
      ],
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-yellow-500 to-amber-500"
    },
    {
      icon: DoorOpen,
      title: "Door & Hallway Modifications",
      description: "Wider doorways and accessible handles make navigating the home easier for those with mobility aids.",
      items: [
        "Door widening",
        "Lever door handles",
        "Pocket door installation",
        "Offset hinges",
        "Hallway railings",
        "Keyless entry systems"
      ],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-rose-500 to-pink-500"
    }
  ];

  const stats = [
    { number: "1 in 4", label: "seniors fall each year" },
    { number: "3M", label: "ER visits from falls" },
    { number: "80%", label: "of falls happen in bathroom" },
    { number: "95%", label: "of hip fractures from falls" }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Certified Aging-in-Place Specialists",
      description: "Our team includes CAPS-certified professionals trained specifically in senior home modifications."
    },
    {
      icon: Wrench,
      title: "Licensed, Bonded & Insured",
      description: "Every installation meets or exceeds ADA guidelines and local building codes."
    },
    {
      icon: Clock,
      title: "Fast, Clean Installation",
      description: "Most projects completed in 1-3 days. We respect your home and clean up thoroughly."
    },
    {
      icon: Heart,
      title: "Compassionate Service",
      description: "We treat every home like our own parents' home—with care, respect, and attention to detail."
    }
  ];

  return (
    <div className="pt-16">
      <SEO
        title="Home Safety Modifications for Seniors | Grab Bars, Walk-In Showers, Stairlifts | By My Side"
        description="Professional installation of grab bars, walk-in shower conversions, stairlifts, wheelchair ramps, and home safety modifications for seniors. Free assessments. Licensed & insured."
        pageType="service"
        canonical="https://bymysideseniorservices.com/senior-services/safety-mobility"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/95 via-emerald-900/85 to-teal-800/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Shield className="h-4 w-4 text-emerald-400" />
              <span className="text-white/90 text-sm font-medium">Prevent Falls, Preserve Independence</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Home Safety & <span className="text-emerald-400">Mobility Modifications</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Transform any home into a safe haven with professional installation of grab bars, walk-in showers,
              stairlifts, ramps, and accessibility features that let your loved one age in place with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-lg px-8 py-6">
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Free Safety Assessment
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                <a href="tel:+18005551234">Call (800) 555-1234</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-amber-400 font-semibold text-lg flex items-center justify-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Falls Are the #1 Cause of Injury for Seniors
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modifications Grid */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-4">Our Modification Services</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Comprehensive Home Safety Solutions
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From simple grab bar installations to complete bathroom renovations, we handle every aspect of making
              homes safer for seniors.
            </p>
          </div>

          <div className="space-y-16">
            {modifications.map((mod, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                <div className="lg:w-1/2">
                  <div className="relative">
                    <img
                      src={mod.image}
                      alt={mod.title}
                      className="rounded-2xl shadow-2xl w-full"
                    />
                    <div className={`absolute -bottom-6 ${index % 2 === 1 ? '-left-6' : '-right-6'} w-24 h-24 bg-gradient-to-br ${mod.color} rounded-2xl flex items-center justify-center shadow-xl`}>
                      <mod.icon className="h-12 w-12 text-white" />
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h4 className="text-3xl font-bold text-slate-900 mb-4">{mod.title}</h4>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">{mod.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {mod.items.map((item, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-4">Why By My Side</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The Right Team for the Job
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-emerald-500/20 rounded-2xl flex items-center justify-center">
                    <item.icon className="h-8 w-8 text-emerald-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-white/70 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-4">Our Process</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Simple Steps to a Safer Home
            </h3>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Free Safety Assessment", desc: "We walk through the entire home, identifying fall risks and discussing mobility concerns." },
              { step: "2", title: "Detailed Proposal", desc: "You receive a comprehensive plan with prioritized recommendations and transparent pricing." },
              { step: "3", title: "Professional Installation", desc: "Our certified team completes the work quickly, cleanly, and to the highest standards." },
              { step: "4", title: "Training & Follow-Up", desc: "We ensure everyone knows how to use new features and check back to ensure satisfaction." }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Testimonial */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                "We Gave Dad His Bathroom Back"
              </h2>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <blockquote className="text-xl text-slate-600 italic mb-8 leading-relaxed">
                "Dad was terrified to shower after his fall. He'd go days without bathing because he was so scared.
                By My Side installed a walk-in shower with a bench, grab bars everywhere, and non-slip flooring.
                Now he showers every day with confidence. The whole project took just two days. I can't believe
                we waited so long to do this."
              </blockquote>
              <div>
                <p className="font-semibold text-slate-900 text-lg">Patricia H.</p>
                <p className="text-slate-500">Daughter of client, Austin TX</p>
              </div>
            </div>
            <div className="relative">
              <Card className="border-0 shadow-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Senior-friendly bathroom with safety features"
                  className="w-full"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-4">Common Questions</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h3>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "Will the modifications look institutional or medical?",
                a: "Not at all! Today's safety products come in beautiful finishes that blend seamlessly with your home's decor. Grab bars come in brushed nickel, oil-rubbed bronze, and designer colors. Walk-in showers look like spa retreats, not hospital rooms."
              },
              {
                q: "How long does installation typically take?",
                a: "Most projects are completed in 1-3 days. Grab bar installation takes just a few hours. Bathroom conversions typically take 2-3 days. Stairlift installation is usually same-day. We minimize disruption to your daily routine."
              },
              {
                q: "Do I need a permit for home modifications?",
                a: "It depends on your location and the scope of work. We handle all permit requirements and ensure every installation meets local building codes. You never have to worry about compliance issues."
              },
              {
                q: "Can modifications be removed if we sell the home?",
                a: "Many modifications actually increase home value as the population ages. Grab bars and railings are easily removed if desired. Stairlifts can be relocated. Walk-in showers are highly desirable features for any homebuyer."
              }
            ].map((faq, index) => (
              <Card key={index} className="border border-slate-200">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">{faq.q}</h4>
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Related Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Droplets className="h-10 w-10 text-blue-500 mb-4" />
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Smart Home Technology</h4>
                <p className="text-slate-600 mb-4">Medical alerts, fall detection, and monitoring systems.</p>
                <Link href="/senior-services/tech-monitoring" className="text-emerald-600 font-medium flex items-center group-hover:text-emerald-700">
                  Learn More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Heart className="h-10 w-10 text-rose-500 mb-4" />
                <h4 className="text-lg font-semibold text-slate-900 mb-2">In-Home Caregiving</h4>
                <p className="text-slate-600 mb-4">Compassionate caregivers for daily living assistance.</p>
                <Link href="/senior-services/in-home-care" className="text-emerald-600 font-medium flex items-center group-hover:text-emerald-700">
                  Learn More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Home className="h-10 w-10 text-amber-500 mb-4" />
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Decluttering Services</h4>
                <p className="text-slate-600 mb-4">Compassionate help organizing and downsizing.</p>
                <Link href="/senior-services/decluttering-downsizing" className="text-emerald-600 font-medium flex items-center group-hover:text-emerald-700">
                  Learn More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900 to-teal-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Make Your Loved One's Home Safer Today
          </h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Don't wait for a fall to happen. Schedule a free in-home safety assessment and get a detailed
            plan for modifications that can prevent accidents and preserve independence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white hover:bg-slate-100 text-emerald-900 font-semibold text-lg px-10 py-6">
              <Link href="/contact">Schedule Free Assessment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-10 py-6">
              <a href="tel:+18005551234">
                <Phone className="mr-2 h-5 w-5" />
                (800) 555-1234
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
