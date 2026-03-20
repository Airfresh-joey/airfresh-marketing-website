import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import {
  Smartphone,
  Shield,
  Wifi,
  Video,
  Bell,
  Activity,
  Phone,
  CheckCircle,
  Star,
  Clock,
  AlertTriangle,
  Zap,
  HeartPulse,
  Home,
  Eye,
  Volume2,
  ArrowRight
} from "lucide-react";

export default function TechMonitoring() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Smart Home Technology & Monitoring for Seniors",
        "provider": {
          "@type": "LocalBusiness",
          "name": "By My Side Senior Services"
        },
        "description": "Professional installation and monitoring of medical alert systems, fall detection devices, smart home sensors, and video monitoring technology designed specifically for seniors and aging in place.",
        "serviceType": "Senior Safety Technology Installation",
        "areaServed": "United States",
        "offers": {
          "@type": "Offer",
          "description": "Free in-home technology assessment and installation services"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a medical alert system for seniors?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A medical alert system is a wearable device (pendant or wristband) that connects to a 24/7 monitoring center. When pressed, it immediately connects seniors to trained emergency responders who can dispatch help, contact family members, or provide assistance. Modern systems include automatic fall detection."
            }
          },
          {
            "@type": "Question",
            "name": "How does fall detection technology work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Fall detection uses accelerometers and gyroscopes to detect sudden changes in movement patterns that indicate a fall. When detected, the system automatically contacts the monitoring center even if the senior is unable to press the alert button. This technology can be life-saving for seniors who live alone."
            }
          },
          {
            "@type": "Question",
            "name": "Can smart home technology really help seniors stay independent longer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, smart home technology significantly extends independent living. Motion sensors can detect unusual patterns, medication dispensers ensure proper dosing, smart lighting prevents falls, and video monitoring allows family to check in remotely. Studies show these technologies reduce emergency room visits and hospital stays."
            }
          }
        ]
      }
    ]
  };

  const technologies = [
    {
      icon: HeartPulse,
      title: "Medical Alert Systems",
      description: "24/7 emergency response at the push of a button. Wearable pendants and wristbands connect your loved one directly to trained emergency responders.",
      features: ["One-touch emergency button", "GPS location tracking", "Waterproof designs", "Two-way voice communication"],
      highlight: "Most Popular"
    },
    {
      icon: Activity,
      title: "Automatic Fall Detection",
      description: "Advanced sensors detect falls automatically and alert emergency services—even if your loved one can't press a button.",
      features: ["Instant automatic alerts", "Works 24/7", "No button press needed", "Peace of mind for families"],
      highlight: "Life-Saving"
    },
    {
      icon: Video,
      title: "Video Monitoring & Check-ins",
      description: "Secure video systems let family members check in visually while respecting privacy. See that mom is okay without being intrusive.",
      features: ["Privacy-first design", "Mobile app access", "Two-way video calls", "Motion-triggered recording"],
      highlight: null
    },
    {
      icon: Eye,
      title: "Motion & Activity Sensors",
      description: "Smart sensors track daily routines and alert families to unusual patterns—like if dad hasn't opened the fridge by noon.",
      features: ["Activity pattern learning", "Unusual behavior alerts", "Door/window sensors", "Sleep monitoring"],
      highlight: null
    },
    {
      icon: Bell,
      title: "Smart Medication Management",
      description: "Automated dispensers and reminders ensure medications are taken correctly and on time, every time.",
      features: ["Automated dispensing", "Missed dose alerts", "Family notifications", "Refill reminders"],
      highlight: null
    },
    {
      icon: Wifi,
      title: "Smart Home Integration",
      description: "Voice-controlled lighting, thermostats, and door locks make daily living easier and safer for seniors with mobility challenges.",
      features: ["Voice control", "Automated lighting", "Smart thermostats", "Remote door locks"],
      highlight: null
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Immediate Emergency Response",
      description: "Help is always seconds away. Our monitoring partners respond within 30 seconds, 24 hours a day, 365 days a year."
    },
    {
      icon: Home,
      title: "Age in Place Confidently",
      description: "The right technology allows seniors to remain in their own homes longer while giving families peace of mind."
    },
    {
      icon: Zap,
      title: "Easy-to-Use Interfaces",
      description: "We select and install technology designed specifically for seniors—large buttons, simple interfaces, and minimal complexity."
    },
    {
      icon: Volume2,
      title: "Family Connectivity",
      description: "Stay connected with your loved ones through video calls, activity updates, and real-time alerts on your phone."
    }
  ];

  const process = [
    {
      step: "1",
      title: "Free Technology Assessment",
      description: "We visit the home to understand your loved one's specific needs, daily routines, and any mobility or cognitive considerations."
    },
    {
      step: "2",
      title: "Personalized Recommendations",
      description: "Based on our assessment, we recommend the right combination of devices and monitoring services for your situation."
    },
    {
      step: "3",
      title: "Professional Installation",
      description: "Our certified technicians install and configure all equipment, ensuring everything works perfectly before we leave."
    },
    {
      step: "4",
      title: "Training & Ongoing Support",
      description: "We train your loved one on using each device and provide ongoing technical support whenever questions arise."
    }
  ];

  return (
    <div className="pt-16">
      <SEO
        title="Senior Smart Home Technology & Medical Alert Systems | By My Side Senior Services"
        description="Professional installation of medical alert systems, fall detection devices, and smart home technology for seniors. 24/7 monitoring, GPS tracking, and family connectivity. Free assessments."
        pageType="service"
        canonical="https://bymysideseniorservices.com/senior-services/tech-monitoring"
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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/85 to-blue-800/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Smartphone className="h-4 w-4 text-cyan-400" />
              <span className="text-white/90 text-sm font-medium">Technology That Saves Lives</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Smart Home Technology & <span className="text-cyan-400">24/7 Monitoring</span> for Seniors
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Give your loved ones the freedom to live independently while knowing help is always just a button press away. Our professional installation ensures everything works perfectly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold text-lg px-8 py-6">
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Free Tech Assessment
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                <a href="tel:+18005551234">Call (800) 555-1234</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Alert Banner */}
      <section className="py-6 bg-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <AlertTriangle className="h-6 w-6 text-amber-900" />
            <p className="text-amber-900 font-medium text-lg">
              <strong>Did you know?</strong> Every 11 seconds, an older adult is treated in an emergency room for a fall.
              The right technology can prevent these emergencies.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">Our Technology Solutions</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Advanced Safety Technology Made Simple
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We partner with the most trusted names in senior safety technology and handle every aspect of installation and setup.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                {tech.highlight && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {tech.highlight}
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <tech.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{tech.title}</h4>
                  <p className="text-slate-600 mb-6 leading-relaxed">{tech.description}</p>
                  <ul className="space-y-2">
                    {tech.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-700">
                        <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4">Why Technology Matters</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Safety, Independence & Peace of Mind
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{benefit.title}</h4>
                <p className="text-white/70 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">Our Process</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              From Assessment to Installation in Days, Not Weeks
            </h3>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent -translate-x-8" />
                )}
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl bg-white">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <blockquote className="text-2xl text-slate-700 italic mb-8 leading-relaxed">
                "The fall detection system saved my father's life. He fell in the bathroom at 3 AM and couldn't reach his phone.
                The system detected the fall and had paramedics there within 8 minutes. I can't thank By My Side enough."
              </blockquote>
              <div>
                <p className="font-semibold text-slate-900 text-lg">Margaret S.</p>
                <p className="text-slate-500">Daughter of client, Denver CO</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">Common Questions</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h3>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "How much does a medical alert system cost?",
                a: "Medical alert systems typically range from $20-50 per month for monitoring, plus a one-time equipment fee or rental. We help you find the best value for your specific needs and budget. Many systems have no long-term contracts."
              },
              {
                q: "Will my loved one actually use the technology?",
                a: "We carefully select senior-friendly devices with large buttons, simple interfaces, and comfortable wearables. Our training ensures your loved one feels confident using every device. Most seniors quickly appreciate the added security."
              },
              {
                q: "What happens when the alert button is pressed?",
                a: "Within seconds, a trained operator responds through the speaker on the device. They assess the situation, contact emergency services if needed, and notify family members according to your preferences."
              },
              {
                q: "Does the equipment require WiFi or a landline?",
                a: "We offer solutions for every home situation. Cellular-based systems work anywhere with cell service, landline systems use existing phone lines, and some devices combine multiple connection methods for reliability."
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
                <Shield className="h-10 w-10 text-emerald-500 mb-4" />
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Home Safety Modifications</h4>
                <p className="text-slate-600 mb-4">Grab bars, walk-in showers, and more to prevent falls.</p>
                <Link href="/senior-services/safety-mobility" className="text-blue-600 font-medium flex items-center group-hover:text-blue-700">
                  Learn More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <HeartPulse className="h-10 w-10 text-rose-500 mb-4" />
                <h4 className="text-lg font-semibold text-slate-900 mb-2">In-Home Caregiving</h4>
                <p className="text-slate-600 mb-4">Compassionate caregivers for daily living assistance.</p>
                <Link href="/senior-services/in-home-care" className="text-blue-600 font-medium flex items-center group-hover:text-blue-700">
                  Learn More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Home className="h-10 w-10 text-amber-500 mb-4" />
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Decluttering Services</h4>
                <p className="text-slate-600 mb-4">Compassionate help organizing and downsizing.</p>
                <Link href="/senior-services/decluttering-downsizing" className="text-blue-600 font-medium flex items-center group-hover:text-blue-700">
                  Learn More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Protect Your Loved One?
          </h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Schedule a free in-home technology assessment. We'll evaluate your loved one's needs and recommend
            the perfect combination of safety devices—with no pressure and no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold text-lg px-10 py-6">
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
