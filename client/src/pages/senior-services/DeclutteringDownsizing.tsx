import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import {
  Home,
  Package,
  Heart,
  Truck,
  Tag,
  Camera,
  Phone,
  CheckCircle,
  Star,
  Clock,
  Users,
  Gift,
  Recycle,
  Boxes,
  Archive,
  ArrowRight,
  Sparkles,
  HandHeart,
  MapPin
} from "lucide-react";

export default function DeclutteringDownsizing() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Senior Decluttering & Downsizing Services",
        "provider": {
          "@type": "LocalBusiness",
          "name": "By My Side Senior Services"
        },
        "description": "Compassionate decluttering and downsizing services for seniors transitioning to smaller homes, assisted living, or those who simply need help organizing a lifetime of belongings.",
        "serviceType": "Senior Move Management",
        "areaServed": "United States",
        "offers": {
          "@type": "Offer",
          "description": "Free in-home consultation for decluttering and downsizing services"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do you help seniors emotionally cope with downsizing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our team is specially trained in the emotional aspects of downsizing. We never rush or pressure. We help seniors preserve memories through photographs, memory books, and thoughtful distribution of heirlooms to family members. We acknowledge that each item tells a story and treat the process with the respect it deserves."
            }
          },
          {
            "@type": "Question",
            "name": "What happens to items that won't fit in the new home?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We help distribute special items to family members, coordinate donations to favorite charities, organize estate sales for valuable items, arrange consignment for antiques, and responsibly dispose of anything remaining. Nothing goes to waste that has value, and families receive detailed documentation of where everything went."
            }
          },
          {
            "@type": "Question",
            "name": "How long does the downsizing process typically take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Timeline varies based on home size and accumulation, but typically ranges from one week to one month. We can work on any schedule that's comfortable for the senior. Some prefer intensive sessions to get it done quickly; others need a gentler pace. We adapt to each family's needs and timeline."
            }
          }
        ]
      }
    ]
  };

  const services = [
    {
      icon: Boxes,
      title: "Sorting & Organizing",
      description: "We work alongside your loved one to sort through every room, helping decide what to keep, donate, sell, or discard—with patience and without judgment.",
      points: ["Room-by-room systematic approach", "Respect for sentimental items", "Decision support without pressure", "Organization systems that last"]
    },
    {
      icon: Camera,
      title: "Memory Preservation",
      description: "Photos, documents, and memorabilia are digitized and organized. We create memory books and ensure precious items are properly distributed to family.",
      points: ["Photo scanning & organizing", "Document digitization", "Memory book creation", "Heirloom distribution planning"]
    },
    {
      icon: Tag,
      title: "Estate Sales & Auctions",
      description: "We coordinate professional estate sales for valuable items, ensuring your loved one receives fair value while items find appreciative new homes.",
      points: ["Professional appraisals", "Full estate sale management", "Online auction coordination", "Antique dealer connections"]
    },
    {
      icon: Gift,
      title: "Donation Coordination",
      description: "Items that don't sell find new life through donations. We handle all logistics, from scheduling pickups to providing tax documentation.",
      points: ["Charity coordination", "Pickup scheduling", "Tax receipt documentation", "Furniture bank partnerships"]
    },
    {
      icon: Truck,
      title: "Moving Assistance",
      description: "From packing to unpacking, we manage the entire moving process. Your loved one's new space will feel like home from day one.",
      points: ["Packing & labeling", "Mover coordination", "Unpacking & setup", "New home organization"]
    },
    {
      icon: Recycle,
      title: "Responsible Disposal",
      description: "Anything remaining is handled responsibly—recycling, hazardous waste disposal, and junk removal—so nothing becomes your family's burden.",
      points: ["Eco-friendly disposal", "Electronics recycling", "Document shredding", "Cleanout services"]
    }
  ];

  const emotionalApproach = [
    {
      icon: HandHeart,
      title: "Patience & Compassion",
      description: "We never rush. Every item holds memories, and we honor that by working at your loved one's pace with genuine empathy."
    },
    {
      icon: Users,
      title: "Family Involvement",
      description: "We facilitate family discussions about heirlooms and meaningful items, helping avoid conflict and ensure wishes are respected."
    },
    {
      icon: Heart,
      title: "Dignity Always",
      description: "This is your loved one's life we're helping organize. We approach every session with the respect and dignity they deserve."
    },
    {
      icon: Sparkles,
      title: "Fresh Start Focus",
      description: "We help reframe downsizing as an opportunity for a fresh start, focusing on the exciting possibilities of the next chapter."
    }
  ];

  const situations = [
    {
      title: "Moving to a Smaller Home",
      description: "Transitioning from a family home to a condo, apartment, or smaller residence",
      icon: Home
    },
    {
      title: "Transitioning to Senior Living",
      description: "Preparing for a move to assisted living, memory care, or independent living communities",
      icon: MapPin
    },
    {
      title: "After Loss of a Spouse",
      description: "Compassionate help sorting through belongings during an already difficult time",
      icon: Heart
    },
    {
      title: "Estate Clearing",
      description: "Full estate cleanout services for families managing a parent's home",
      icon: Archive
    },
    {
      title: "Aging in Place",
      description: "Decluttering to create safer, more manageable living spaces without moving",
      icon: Boxes
    },
    {
      title: "Hoarding Situations",
      description: "Sensitive, non-judgmental assistance for challenging accumulation situations",
      icon: Package
    }
  ];

  return (
    <div className="pt-16">
      <SEO
        title="Senior Decluttering & Downsizing Services | Estate Clearing | By My Side Senior Services"
        description="Compassionate decluttering and downsizing help for seniors. Estate sales, donation coordination, moving assistance, and memory preservation. We handle everything with care."
        pageType="service"
        canonical="https://bymysideseniorservices.com/senior-services/decluttering-downsizing"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/95 via-amber-900/85 to-orange-800/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Home className="h-4 w-4 text-amber-400" />
              <span className="text-white/90 text-sm font-medium">Compassionate Transitions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Decluttering & <span className="text-amber-400">Downsizing</span> Made Manageable
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              A lifetime of memories shouldn't feel overwhelming. Our compassionate team helps seniors and families
              sort, organize, and transition with dignity—handling every detail so you don't have to.
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

      {/* Quote Banner */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl md:text-2xl text-white italic leading-relaxed">
            "It's not about getting rid of things. It's about making room for the next beautiful chapter of life."
          </p>
          <p className="text-amber-400 mt-4 font-medium">— Our Philosophy</p>
        </div>
      </section>

      {/* When We Help */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-4">When Families Call Us</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              We're Here for Every Situation
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Whether it's a planned transition or an unexpected change, we bring the same compassion and expertise to every family.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {situations.map((situation, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <situation.icon className="h-7 w-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{situation.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{situation.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-4">What We Do</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Comprehensive Downsizing Support
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-xl transition-all bg-gradient-to-b from-amber-50 to-white">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.points.map((point, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-700">
                        <CheckCircle className="h-4 w-4 text-amber-500 mr-2 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emotional Approach */}
      <section className="py-20 bg-amber-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-4">Our Approach</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The Emotional Side Matters Most
            </h3>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Downsizing isn't just about stuff—it's about memories, identity, and major life transitions.
              We approach every project with the sensitivity it deserves.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {emotionalApproach.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <item.icon className="h-8 w-8 text-amber-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-white/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-4">Our Process</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              How We Work Together
            </h3>
          </div>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: "1", title: "Discovery Call", desc: "We learn about your situation, timeline, and goals." },
              { step: "2", title: "In-Home Visit", desc: "We walk through the space and create a customized plan." },
              { step: "3", title: "Sorting Sessions", desc: "We work room-by-room at your loved one's pace." },
              { step: "4", title: "Distribution", desc: "Items are sold, donated, or distributed to family." },
              { step: "5", title: "Final Touches", desc: "Cleanout, move coordination, and new home setup." }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                {index < 4 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-amber-500 to-transparent -translate-x-8" />
                )}
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  {item.step}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-amber-50 to-white">
            <CardContent className="p-12">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <blockquote className="text-2xl text-slate-700 italic mb-8 leading-relaxed text-center">
                "Mom had 50 years of memories in that house. I was dreading the process—I thought it would break her heart.
                But the By My Side team was incredible. They turned it into a celebration of her life, not a goodbye.
                Mom even said it felt like spring cleaning with good friends. I'll never forget their kindness."
              </blockquote>
              <div className="text-center">
                <p className="font-semibold text-slate-900 text-lg">David R.</p>
                <p className="text-slate-500">Son of client, Phoenix AZ</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-4">Questions Answered</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h3>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "How much does downsizing assistance cost?",
                a: "Costs vary based on home size, accumulation level, and services needed. We typically work hourly or project-based. After our free consultation, you'll receive a detailed estimate with no hidden fees. Many families find the peace of mind and time savings far outweigh the cost."
              },
              {
                q: "What if my parent doesn't want to let anything go?",
                a: "This is common and completely understandable. We're trained to work with reluctant downsizers using gentle techniques that honor attachment while working toward practical goals. Sometimes it helps to digitize photos of items, or to know that a donation goes to a cause they care about."
              },
              {
                q: "Can you help if there's family disagreement about items?",
                a: "Yes, we often serve as neutral mediators. We facilitate family meetings, help document wishes, and suggest fair distribution methods. Our goal is to preserve family relationships while ensuring the senior's preferences are respected."
              },
              {
                q: "Do you handle estate sales and auctions?",
                a: "Absolutely. We coordinate with professional estate sale companies and auction houses. We can also arrange private sales for valuable antiques, coordinate consignment, and ensure your loved one gets fair value for their belongings."
              }
            ].map((faq, index) => (
              <Card key={index} className="border border-slate-200 bg-white">
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Related Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <MapPin className="h-10 w-10 text-violet-500 mb-4" />
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Assisted Living Search</h4>
                <p className="text-slate-600 mb-4">Help finding the perfect senior living community.</p>
                <Link href="/senior-services/assisted-living-search" className="text-amber-600 font-medium flex items-center group-hover:text-amber-700">
                  Learn More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Heart className="h-10 w-10 text-rose-500 mb-4" />
                <h4 className="text-lg font-semibold text-slate-900 mb-2">In-Home Caregiving</h4>
                <p className="text-slate-600 mb-4">Compassionate caregivers for daily living assistance.</p>
                <Link href="/senior-services/in-home-care" className="text-amber-600 font-medium flex items-center group-hover:text-amber-700">
                  Learn More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Home className="h-10 w-10 text-emerald-500 mb-4" />
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Home Safety Modifications</h4>
                <p className="text-slate-600 mb-4">Grab bars, ramps, and mobility solutions.</p>
                <Link href="/senior-services/safety-mobility" className="text-amber-600 font-medium flex items-center group-hover:text-amber-700">
                  Learn More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-800 to-orange-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Make This Transition Easier Together
          </h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            You don't have to face this alone. Schedule a free consultation to discuss your situation
            and learn how we can help your family navigate this important transition with care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white hover:bg-slate-100 text-amber-900 font-semibold text-lg px-10 py-6">
              <Link href="/contact">Schedule Free Consultation</Link>
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
