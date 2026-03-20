import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import {
  Building2,
  Search,
  MapPin,
  DollarSign,
  ClipboardCheck,
  Heart,
  Phone,
  CheckCircle,
  Star,
  Clock,
  Users,
  Award,
  Shield,
  Compass,
  FileText,
  Handshake,
  ArrowRight,
  Sparkles,
  Brain,
  Activity,
  Home,
  ChevronRight,
  Gift
} from "lucide-react";

export default function AssistedLivingSearch() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Assisted Living Placement & Senior Living Search Services",
        "provider": {
          "@type": "LocalBusiness",
          "name": "By My Side Senior Services"
        },
        "description": "Free assisted living placement services helping families find the perfect senior living community. We provide personalized recommendations, facility tours, cost comparisons, and placement assistance at no cost to families.",
        "serviceType": "Senior Living Placement",
        "areaServed": "United States",
        "offers": {
          "@type": "Offer",
          "description": "Free senior living placement services - no cost to families"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How is senior living placement free for families?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Senior living communities pay a referral fee when we help families find the right match. This industry-standard practice means families receive expert guidance at no cost. Our obligation is to you, not the communities—we recommend the best fit for your loved one, not the highest-paying facility."
            }
          },
          {
            "@type": "Question",
            "name": "What's the difference between assisted living and memory care?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Assisted living provides help with daily activities like bathing, dressing, and medication management for seniors who are mostly independent. Memory care is specialized for those with Alzheimer's or dementia, offering secured environments, structured activities, and staff trained in cognitive decline. Many communities offer both levels of care."
            }
          },
          {
            "@type": "Question",
            "name": "How do I know when it's time for assisted living?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Signs include difficulty with daily tasks, frequent falls, medication mismanagement, isolation, declining nutrition, safety concerns, or caregiver burnout. It's not about 'giving up'—it's about ensuring your loved one receives proper care and socialization. Our free assessment helps families evaluate readiness objectively."
            }
          }
        ]
      }
    ]
  };

  const communityTypes = [
    {
      icon: Building2,
      title: "Assisted Living",
      description: "For seniors who need help with daily activities but want to maintain as much independence as possible.",
      features: ["Personal care assistance", "Medication management", "Social activities", "Restaurant-style dining"]
    },
    {
      icon: Brain,
      title: "Memory Care",
      description: "Specialized care for those with Alzheimer's disease, dementia, or other memory impairments.",
      features: ["Secured environment", "Cognitive therapies", "Specialized staff", "Structured programming"]
    },
    {
      icon: Home,
      title: "Independent Living",
      description: "Active adult communities for seniors who don't need care but want maintenance-free living and socialization.",
      features: ["Apartment living", "Amenities & activities", "Maintenance-free", "Social opportunities"]
    },
    {
      icon: Activity,
      title: "Continuing Care (CCRC)",
      description: "Communities offering multiple levels of care so residents never have to move as needs change.",
      features: ["All care levels on-site", "Lifetime guarantee", "Comprehensive amenities", "Transition support"]
    },
    {
      icon: Heart,
      title: "Skilled Nursing",
      description: "24-hour medical care for those with complex health needs requiring regular nursing attention.",
      features: ["24/7 nursing care", "Medical supervision", "Rehabilitation services", "Chronic care management"]
    },
    {
      icon: Shield,
      title: "Board & Care Homes",
      description: "Smaller, residential-style homes offering personalized care in a home-like environment.",
      features: ["Small group setting", "Home-like atmosphere", "Personalized attention", "Often more affordable"]
    }
  ];

  const ourProcess = [
    {
      icon: Search,
      title: "Needs Assessment",
      description: "We start with an in-depth conversation about your loved one's care needs, preferences, personality, and important criteria.",
      detail: "Medical needs, social preferences, location, budget, and must-have amenities"
    },
    {
      icon: Compass,
      title: "Personalized Matching",
      description: "Using our extensive database and community relationships, we identify communities that match your specific requirements.",
      detail: "Pre-screened for quality, licensing, and inspection records"
    },
    {
      icon: ClipboardCheck,
      title: "Community Tours",
      description: "We schedule and often accompany you on tours, asking the right questions and helping you evaluate each option.",
      detail: "We know what to look for beyond the sales pitch"
    },
    {
      icon: DollarSign,
      title: "Cost Analysis",
      description: "We help you understand the true cost of each option, including all fees, and explore payment options.",
      detail: "No surprise fees—we ensure complete cost transparency"
    },
    {
      icon: Handshake,
      title: "Move-In Support",
      description: "We assist with paperwork, coordinate move-in logistics, and follow up to ensure a smooth transition.",
      detail: "We stay involved until your loved one is settled and happy"
    }
  ];

  const whyFree = [
    {
      title: "Industry Standard",
      description: "Communities budget for referral fees as a standard marketing expense. Using us doesn't increase your costs."
    },
    {
      title: "Our Loyalty Is to You",
      description: "We recommend the best fit, not the highest-paying community. Our reputation depends on happy families."
    },
    {
      title: "Time Savings",
      description: "The time you'd spend researching and visiting communities is worth far more than our services would cost."
    },
    {
      title: "Expert Guidance",
      description: "You benefit from our relationships, knowledge, and negotiating power at no cost to your family."
    }
  ];

  const whatWeLookFor = [
    "State licensing and inspection history",
    "Staff-to-resident ratios",
    "Staff turnover and training",
    "Resident satisfaction surveys",
    "Activity programming quality",
    "Food quality and dining options",
    "Care transition procedures",
    "Family communication practices",
    "Physical environment and safety",
    "Financial stability of the operator"
  ];

  return (
    <div className="pt-16">
      <SEO
        title="Free Assisted Living Placement | Senior Living Search Help | By My Side Senior Services"
        description="Free assisted living placement services. We help families find the perfect senior living community with personalized recommendations, tours, and move-in support. No cost to families."
        pageType="service"
        canonical="https://bymysideseniorservices.com/senior-services/assisted-living-search"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/95 via-violet-900/85 to-purple-800/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Gift className="h-4 w-4 text-violet-400" />
              <span className="text-white/90 text-sm font-medium">100% Free to Families</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Find the Perfect <span className="text-violet-400">Senior Living</span> Community
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Navigating senior living options shouldn't feel overwhelming. Our placement experts guide you through
              every step—from assessment to move-in—at absolutely no cost to your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-violet-500 hover:bg-violet-600 text-white font-semibold text-lg px-8 py-6">
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Free Placement Help
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                <a href="tel:+18005551234">Call (800) 555-1234</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Free Service Banner */}
      <section className="py-8 bg-emerald-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <Gift className="h-8 w-8 text-white" />
            <p className="text-white font-semibold text-xl">
              Our placement services are 100% free to families. Communities pay us—not you.
            </p>
          </div>
        </div>
      </section>

      {/* Community Types */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-4">Senior Living Options</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Understanding Your Options
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Senior living comes in many forms. We help you understand each option and find the level of care
              that's right for your loved one—now and in the future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityTypes.map((type, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-xl transition-all bg-white">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <type.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{type.title}</h4>
                  <p className="text-slate-600 mb-6 leading-relaxed">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-700">
                        <CheckCircle className="h-4 w-4 text-violet-500 mr-2 flex-shrink-0" />
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

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-4">How We Help</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Your Journey to the Right Community
            </h3>
          </div>

          <div className="space-y-8">
            {ourProcess.map((step, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 bg-gradient-to-br from-violet-500 to-purple-600 p-8 flex items-center justify-center">
                      <div className="text-center">
                        <step.icon className="h-12 w-12 text-white mx-auto mb-4" />
                        <div className="text-white/60 text-sm font-medium">STEP {index + 1}</div>
                      </div>
                    </div>
                    <div className="md:w-3/4 p-8">
                      <h4 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h4>
                      <p className="text-lg text-slate-600 mb-4 leading-relaxed">{step.description}</p>
                      <div className="flex items-center text-sm text-violet-600 font-medium">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        {step.detail}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why It's Free */}
      <section className="py-20 bg-violet-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-violet-400 uppercase tracking-wider mb-4">No Catch</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Is This Really Free?
            </h3>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              We know it sounds too good to be true. Here's exactly how it works and why there's no cost to you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyFree.map((item, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-violet-500/30 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                    {index + 1}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-white/70 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Evaluate */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-4">Our Expertise</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                We Know What to Look For
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Not all senior living communities are created equal. We evaluate dozens of factors
                that families often overlook—protecting you from making a decision you'll regret.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whatWeLookFor.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-violet-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Card className="border-0 shadow-2xl">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-slate-700 italic mb-6 leading-relaxed">
                    "We toured 8 communities on our own and felt overwhelmed. Then we called By My Side.
                    Within a week, they identified 3 perfect matches we hadn't even found. They knew
                    exactly what questions to ask and caught red flags we would have missed.
                    Mom is thriving in her new home."
                  </blockquote>
                  <div>
                    <p className="font-semibold text-slate-900">The Anderson Family</p>
                    <p className="text-slate-500 text-sm">Seattle, WA</p>
                  </div>
                </CardContent>
              </Card>
              <div className="absolute -bottom-6 -right-6 bg-violet-500 text-white p-4 rounded-xl shadow-lg">
                <p className="font-bold">Found the perfect community</p>
                <p className="text-sm text-white/80">In just 10 days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Consider */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-4">Is It Time?</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Signs It May Be Time for Senior Living
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Safety Concerns",
                signs: ["Frequent falls or near-misses", "Leaving stove on", "Wandering or getting lost", "Medication errors"]
              },
              {
                title: "Declining Self-Care",
                signs: ["Poor nutrition or weight loss", "Declining hygiene", "Unkempt home", "Unpaid bills piling up"]
              },
              {
                title: "Isolation & Wellbeing",
                signs: ["Depression or withdrawal", "Loss of interest in activities", "Limited social contact", "Caregiver burnout"]
              }
            ].map((category, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-slate-900 mb-6">{category.title}</h4>
                  <ul className="space-y-4">
                    {category.signs.map((sign, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        </div>
                        <span className="text-slate-600">{sign}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-slate-600 mb-6">
              Recognizing these signs doesn't mean failure—it means you're paying attention to your loved one's needs.
            </p>
            <Button asChild className="bg-violet-600 hover:bg-violet-700">
              <Link href="/contact">Get a Free Assessment</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-4">Questions Answered</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h3>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "How much does assisted living cost?",
                a: "Costs vary significantly by location, care level, and amenities. Nationally, assisted living averages $4,500-$6,000/month. Memory care typically runs $5,500-$7,500/month. We help families understand all costs, including potential fee increases, and explore payment options including long-term care insurance, VA benefits, and Medicaid."
              },
              {
                q: "How long does the placement process take?",
                a: "For planned moves, we typically identify the right community within 1-2 weeks, with move-in 2-4 weeks later. For urgent situations (hospital discharge, safety crisis), we can often find placement within days. We work on your timeline while ensuring we don't rush such an important decision."
              },
              {
                q: "What if my loved one doesn't want to move?",
                a: "Resistance is normal and doesn't mean you shouldn't proceed if care is needed. We can help facilitate these conversations, involve your loved one in the decision-making process, and identify communities where they can maintain independence. Most seniors adjust well once they experience the social benefits and reduced burden."
              },
              {
                q: "Do you only work with certain communities?",
                a: "We work with thousands of communities of all types and price points. We have relationships across the industry but maintain objectivity—we recommend the best fit, not communities that pay us more. We'll even recommend communities outside our network if they're the right choice for your family."
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
                <Home className="h-10 w-10 text-amber-500 mb-4" />
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Decluttering & Downsizing</h4>
                <p className="text-slate-600 mb-4">Help preparing for the move to senior living.</p>
                <Link href="/senior-services/decluttering-downsizing" className="text-violet-600 font-medium flex items-center group-hover:text-violet-700">
                  Learn More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Heart className="h-10 w-10 text-rose-500 mb-4" />
                <h4 className="text-lg font-semibold text-slate-900 mb-2">In-Home Care</h4>
                <p className="text-slate-600 mb-4">Care while you search or as an alternative.</p>
                <Link href="/senior-services/in-home-care" className="text-violet-600 font-medium flex items-center group-hover:text-violet-700">
                  Learn More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Shield className="h-10 w-10 text-emerald-500 mb-4" />
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Home Safety Modifications</h4>
                <p className="text-slate-600 mb-4">If staying home is the better choice.</p>
                <Link href="/senior-services/safety-mobility" className="text-violet-600 font-medium flex items-center group-hover:text-violet-700">
                  Learn More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-violet-800 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Let Us Help You Find the Perfect Community
          </h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Stop feeling overwhelmed by choices. Our senior living experts will guide you to
            the right community for your loved one—and it won't cost you a thing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white hover:bg-slate-100 text-violet-900 font-semibold text-lg px-10 py-6">
              <Link href="/contact">Start Your Free Search</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-10 py-6">
              <a href="tel:+18005551234">
                <Phone className="mr-2 h-5 w-5" />
                (800) 555-1234
              </a>
            </Button>
          </div>
          <p className="mt-6 text-white/60 text-sm">
            No obligation. No cost. Just expert guidance when you need it most.
          </p>
        </div>
      </section>
    </div>
  );
}
