import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import {
  Heart,
  Users,
  Utensils,
  Shirt,
  Car,
  Calendar,
  Phone,
  CheckCircle,
  Star,
  Clock,
  Shield,
  Award,
  Sun,
  Moon,
  Stethoscope,
  Brain,
  Activity,
  UserCheck,
  GraduationCap,
  ArrowRight,
  Sparkles,
  HandHeart,
  Coffee,
  Gamepad2,
  BookOpen
} from "lucide-react";

export default function InHomeCare() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Non-Medical In-Home Care for Seniors",
        "provider": {
          "@type": "LocalBusiness",
          "name": "By My Side Senior Services"
        },
        "description": "Compassionate non-medical in-home caregiving services including companionship, meal preparation, light housekeeping, personal care assistance, medication reminders, and transportation for seniors.",
        "serviceType": "In-Home Care Services",
        "areaServed": "United States",
        "offers": {
          "@type": "Offer",
          "description": "Free in-home care consultation and customized care plan development"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the difference between non-medical and medical home care?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Non-medical home care focuses on daily living assistance like companionship, meal preparation, housekeeping, personal care (bathing, dressing), and transportation. Medical home care involves skilled nursing tasks like wound care, injections, and medical monitoring. Many seniors need non-medical care to maintain independence without requiring medical intervention."
            }
          },
          {
            "@type": "Question",
            "name": "How do you match caregivers with seniors?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We carefully match caregivers based on personality, interests, care needs, schedule preferences, and special requirements. Families meet potential caregivers before care begins. If the match isn't perfect, we'll find a better fit at no additional cost. Our goal is lasting relationships, not just filled shifts."
            }
          },
          {
            "@type": "Question",
            "name": "How much does in-home senior care cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In-home care costs vary based on hours needed, care level, and location. Most families pay between $25-35 per hour. We offer flexible scheduling from a few hours weekly to 24/7 live-in care. Many long-term care insurance policies cover non-medical home care. We help families explore all funding options during our free consultation."
            }
          }
        ]
      }
    ]
  };

  const careServices = [
    {
      icon: Coffee,
      title: "Companionship & Socialization",
      description: "Loneliness is a serious health risk for seniors. Our caregivers provide meaningful conversation, engagement, and genuine friendship.",
      items: ["Conversation & emotional support", "Playing games & puzzles", "Reading together", "Accompanying on outings", "Video calls with family", "Hobby assistance"]
    },
    {
      icon: Utensils,
      title: "Meal Preparation & Nutrition",
      description: "Proper nutrition is essential for health. We prepare delicious, nutritious meals tailored to dietary needs and preferences.",
      items: ["Meal planning & cooking", "Special diet accommodation", "Grocery shopping", "Kitchen cleanup", "Feeding assistance if needed", "Hydration monitoring"]
    },
    {
      icon: Shirt,
      title: "Personal Care Assistance",
      description: "Help with daily personal care tasks that may have become difficult, always delivered with dignity and respect.",
      items: ["Bathing & showering", "Dressing & grooming", "Oral hygiene", "Mobility assistance", "Toileting & incontinence care", "Skin care"]
    },
    {
      icon: Users,
      title: "Light Housekeeping",
      description: "A clean, organized home promotes safety and wellbeing. We handle everyday household tasks.",
      items: ["Laundry & ironing", "Vacuuming & dusting", "Bed making", "Dish washing", "Organizing & tidying", "Trash removal"]
    },
    {
      icon: Car,
      title: "Transportation & Errands",
      description: "Maintain independence and stay connected to the community with safe, reliable transportation.",
      items: ["Doctor appointments", "Grocery shopping", "Pharmacy runs", "Social visits", "Religious services", "Community activities"]
    },
    {
      icon: Calendar,
      title: "Medication Reminders",
      description: "We ensure medications are taken on schedule (note: we remind but do not administer medications).",
      items: ["Timely reminders", "Prescription pickup", "Organization assistance", "Refill coordination", "Doctor communication", "Side effect monitoring"]
    }
  ];

  const careOptions = [
    {
      icon: Sun,
      title: "Hourly Care",
      description: "Flexible care for a few hours per day or week. Perfect for families who need help during specific times.",
      features: ["Minimum 3-4 hours per visit", "Consistent caregiver scheduling", "Perfect for respite care", "Most flexible option"]
    },
    {
      icon: Clock,
      title: "Full-Day Care",
      description: "Comprehensive care throughout the day while family members work or handle responsibilities.",
      features: ["8-12 hour shifts", "Day or night coverage", "Ideal for working families", "Covers all daily needs"]
    },
    {
      icon: Moon,
      title: "24-Hour Care",
      description: "Round-the-clock care with rotating caregivers to ensure your loved one is never alone.",
      features: ["Multiple caregiver rotation", "Complete peace of mind", "For higher care needs", "No overnight gaps"]
    },
    {
      icon: Heart,
      title: "Live-In Care",
      description: "A dedicated caregiver lives in the home, providing continuous companionship and assistance.",
      features: ["One consistent caregiver", "Most cost-effective for full-time", "Deep relationship building", "Requires sleeping quarters"]
    }
  ];

  const caregiverStandards = [
    {
      icon: Shield,
      title: "Rigorous Screening",
      description: "Every caregiver undergoes comprehensive background checks, reference verification, and skills assessment."
    },
    {
      icon: GraduationCap,
      title: "Ongoing Training",
      description: "Continuous education in senior care best practices, dementia care, safety protocols, and more."
    },
    {
      icon: UserCheck,
      title: "Perfect Matching",
      description: "We match caregivers based on personality, interests, and care needs—not just availability."
    },
    {
      icon: HandHeart,
      title: "Genuine Compassion",
      description: "We hire for heart first. Technical skills can be taught; genuine caring cannot."
    }
  ];

  const specializedCare = [
    {
      icon: Brain,
      title: "Alzheimer's & Dementia Care",
      description: "Specially trained caregivers who understand memory care challenges and use proven engagement techniques."
    },
    {
      icon: Activity,
      title: "Post-Surgery Recovery",
      description: "Short-term care to help seniors recover safely at home after hospital stays or procedures."
    },
    {
      icon: Heart,
      title: "Parkinson's Care",
      description: "Caregivers trained in mobility assistance and the unique challenges of Parkinson's disease."
    },
    {
      icon: Stethoscope,
      title: "Chronic Condition Support",
      description: "Ongoing care support for seniors managing diabetes, heart disease, COPD, and other conditions."
    }
  ];

  return (
    <div className="pt-16">
      <SEO
        title="Non-Medical In-Home Care for Seniors | Companionship & Personal Care | By My Side"
        description="Compassionate in-home caregivers providing companionship, meal prep, personal care, housekeeping, and transportation for seniors. Flexible hourly to 24/7 care. Free consultations."
        pageType="service"
        canonical="https://bymysideseniorservices.com/senior-services/in-home-care"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-rose-900/95 via-rose-900/85 to-pink-800/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Heart className="h-4 w-4 text-rose-400" />
              <span className="text-white/90 text-sm font-medium">Care That Feels Like Family</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Compassionate <span className="text-rose-400">In-Home Caregiving</span> for Your Loved One
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Our trained, caring professionals provide the assistance and companionship your loved one needs
              to live safely and happily at home—while giving your family peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-rose-500 hover:bg-rose-600 text-white font-semibold text-lg px-8 py-6">
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Free Care Consultation
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">500+</div>
              <div className="text-white/70">Trained Caregivers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">98%</div>
              <div className="text-white/70">Family Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">24/7</div>
              <div className="text-white/70">Support Available</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">15+</div>
              <div className="text-white/70">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Care Services */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-rose-600 uppercase tracking-wider mb-4">What Our Caregivers Do</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Comprehensive Non-Medical Care
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From meaningful companionship to hands-on personal care, our services help seniors maintain
              independence and quality of life at home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careServices.map((service, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-xl transition-all bg-white">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.items.map((item, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-rose-500 mr-2 flex-shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Care Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-rose-600 uppercase tracking-wider mb-4">Flexible Care Options</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Care That Fits Your Schedule
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Whether you need a few hours of respite or round-the-clock care, we have flexible options to meet your family's needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {careOptions.map((option, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all bg-gradient-to-b from-rose-50 to-white">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                    <option.icon className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{option.title}</h4>
                  <p className="text-slate-600 mb-6 leading-relaxed">{option.description}</p>
                  <ul className="space-y-2 text-left">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-700">
                        <CheckCircle className="h-4 w-4 text-rose-500 mr-2 flex-shrink-0" />
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

      {/* Caregiver Standards */}
      <section className="py-20 bg-rose-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-rose-400 uppercase tracking-wider mb-4">Our Caregivers</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The Heart of Everything We Do
            </h3>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              We don't just hire caregivers—we build a family of compassionate professionals who genuinely love what they do.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caregiverStandards.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <item.icon className="h-8 w-8 text-rose-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-white/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Care */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-rose-600 uppercase tracking-wider mb-4">Specialized Programs</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Condition-Specific Care Expertise
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializedCare.map((care, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-rose-100 rounded-2xl flex items-center justify-center">
                    <care.icon className="h-8 w-8 text-rose-600" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3">{care.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{care.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-rose-600 uppercase tracking-wider mb-4">Getting Started</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              How We Begin Your Care Journey
            </h3>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Free Consultation", desc: "We discuss your needs, answer questions, and explain our services in detail." },
              { step: "2", title: "Care Assessment", desc: "Our care coordinator visits to understand needs and create a personalized plan." },
              { step: "3", title: "Caregiver Matching", desc: "We introduce you to carefully matched caregivers for your approval." },
              { step: "4", title: "Care Begins", desc: "Services start with ongoing supervision and communication with your family." }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-rose-500 to-pink-500 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-b from-rose-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 lg:p-12 flex flex-col justify-center">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <blockquote className="text-xl text-slate-700 italic mb-8 leading-relaxed">
                  "Maria has been with my mom for two years now. She's not just a caregiver—she's become part of our family.
                  Mom lights up when Maria arrives. Knowing someone truly cares about her when I can't be there...
                  that's priceless. By My Side didn't just give us care. They gave us peace."
                </blockquote>
                <div>
                  <p className="font-semibold text-slate-900 text-lg">Linda T.</p>
                  <p className="text-slate-500">Daughter of client, San Diego CA</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-rose-400 to-pink-500 p-10 lg:p-12 flex items-center justify-center">
                <div className="text-center text-white">
                  <Heart className="h-16 w-16 mx-auto mb-6 opacity-80" />
                  <p className="text-2xl font-bold mb-2">2+ Years Together</p>
                  <p className="text-white/80">A caregiver match that became family</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-rose-600 uppercase tracking-wider mb-4">Questions Answered</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h3>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "What if my loved one doesn't want outside help?",
                a: "Resistance to care is common. We recommend starting small—perhaps just a 'companion visit' a few times per week. Most seniors come to enjoy the company once they meet the right caregiver. We're patient and understanding during this transition."
              },
              {
                q: "Are your caregivers employees or independent contractors?",
                a: "All our caregivers are employees, not contractors. This means they're fully insured, bonded, covered by workers' compensation, and receive ongoing training. You're protected from liability, and we handle all payroll and taxes."
              },
              {
                q: "What happens if our regular caregiver is sick?",
                a: "We maintain a team of backup caregivers who are familiar with your loved one's care plan. If your regular caregiver can't make it, we ensure a qualified substitute arrives—you're never left without care."
              },
              {
                q: "Can care be adjusted as needs change?",
                a: "Absolutely. Care needs often evolve, and we adjust services accordingly. Whether you need more hours, different scheduling, or additional support, we adapt your care plan without hassle."
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
                <p className="text-slate-600 mb-4">Grab bars, ramps, and mobility solutions.</p>
                <Link href="/senior-services/safety-mobility" className="text-rose-600 font-medium flex items-center group-hover:text-rose-700">
                  Learn More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Activity className="h-10 w-10 text-blue-500 mb-4" />
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Smart Home Technology</h4>
                <p className="text-slate-600 mb-4">Medical alerts and monitoring systems.</p>
                <Link href="/senior-services/tech-monitoring" className="text-rose-600 font-medium flex items-center group-hover:text-rose-700">
                  Learn More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <BookOpen className="h-10 w-10 text-violet-500 mb-4" />
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Assisted Living Search</h4>
                <p className="text-slate-600 mb-4">Help finding the right senior community.</p>
                <Link href="/senior-services/assisted-living-search" className="text-rose-600 font-medium flex items-center group-hover:text-rose-700">
                  Learn More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-rose-800 to-pink-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Find the Perfect Caregiver for Your Loved One
          </h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Every senior deserves compassionate care that treats them with dignity. Let's talk about
            how we can support your loved one while giving your family peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white hover:bg-slate-100 text-rose-900 font-semibold text-lg px-10 py-6">
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
