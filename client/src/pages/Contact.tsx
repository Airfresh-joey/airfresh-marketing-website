import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare,
  CheckCircle,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
  Users,
  Award,
  Zap
} from "lucide-react";

export default function Contact() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "AirFresh Marketing",
      "telephone": "+1-303-720-6060",
      "email": "hello@airfreshmarketing.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "720 S. Colorado Blvd., Penthouse North",
        "addressLocality": "Denver",
        "addressRegion": "CO",
        "postalCode": "80246",
        "addressCountry": "US"
      },
      "openingHours": "Mo-Fr 09:00-18:00",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-303-720-6060",
        "contactType": "customer service",
        "email": "hello@airfreshmarketing.com",
        "availableLanguage": "en"
      }
    }
  };
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      value: "303-720-6060",
      href: "tel:+13037206060",
      description: "Monday - Friday, 9AM - 6PM MST"
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "hello@airfreshmarketing.com",
      href: "mailto:hello@airfreshmarketing.com",
      description: "We respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "720 S. Colorado Blvd., Penthouse North",
      description: "Denver, Colorado 80246",
      href: "#"
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/airfresh-marketing", color: "text-blue-600 hover:text-blue-700" },
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/AirFreshMarketing", color: "text-blue-600 hover:text-blue-700" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/AirFreshmktg", color: "text-blue-400 hover:text-blue-500" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/airfreshmarketing/", color: "text-pink-600 hover:text-pink-700" }
  ];

  const stats = [
    { icon: Users, number: "300+", label: "Brands Served" },
    { icon: Award, number: "20+", label: "Years Experience" },
    { icon: Zap, number: "1000+", label: "Events Produced" }
  ];

  const reasons = [
    "Nationwide coverage across 50+ cities",
    "Full-service in-house capabilities", 
    "Data-driven insights and reporting",
    "20+ years of proven experience",
    "Dedicated project management",
    "End-to-end event production"
  ];

  return (
    <div className="pt-16">
      <SEO 
        title="Contact Us | Free Experiential Marketing Consultation - AirFresh Marketing"
        description="Get a free consultation for brand ambassadors, event staffing & guerrilla marketing. Call 303-720-6060. Denver-based, nationwide experiential marketing."
        pageType="contact"
        canonical="https://airfreshmarketing.com/contact"
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Let's <span className="text-yellow-300 italic font-serif">Connect</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
              Ready to create unforgettable brand experiences? Let's start the conversation. 
              Whether you're planning a brand activation, corporate event, or experiential marketing campaign, 
              our team is here to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="#contact-form">Get Started</Link>
              </Button>
              <Link
                href="/talent"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-gray-800 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105"
                style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)'
                }}
                data-testid="button-looking-for-work-contact-hero"
              >
                <span className="mr-1.5">💼</span>
                Looking for Work
              </Link>
              <Button asChild size="lg" variant="outline" className="text-primary border-primary bg-white hover:bg-primary hover:text-white hover:border-primary">
                <a href="tel:+13037206060">Call Now: 303-720-6060</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">GET IN TOUCH</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Multiple Ways to Reach Us</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the method that works best for you. We're here to answer your questions 
              and discuss how we can help your brand create meaningful connections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <info.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{info.title}</h3>
                  <a 
                    href={info.href} 
                    className="text-lg text-primary hover:text-primary/80 transition-colors font-medium block mb-2"
                  >
                    {info.value}
                  </a>
                  <p className="text-gray-600">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white" id="contact-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Start Your Project</h2>
              <p className="text-lg text-gray-600 mb-8">
                Tell us about your upcoming project and we'll get back to you within 24 hours 
                with ideas, insights, and next steps.
              </p>
              <ContactForm />
            </div>

            {/* Why Choose Us */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Partner With Us?</h2>
              <p className="text-lg text-gray-600 mb-8">
                With over 20 years of experience and 300+ successful campaigns, 
                we bring unmatched expertise to every project.
              </p>
              
              <div className="space-y-4 mb-8">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{reason}</span>
                  </div>
                ))}
              </div>

              {/* Office Hours */}
              <Card className="p-6 bg-gray-50">
                <CardContent className="p-0">
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-primary mr-4 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM MST</p>
                        <p>Saturday - Sunday: Closed</p>
                        <p className="text-sm text-gray-500 mt-2">
                          Emergency project support available 24/7
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Social */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Location */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Denver Headquarters</h2>
              <p className="text-lg text-gray-600 mb-8">
                Located in the heart of Denver, our office serves as the hub for our nationwide operations. 
                While we work with clients across the country, you're always welcome to visit us in Colorado.
              </p>
              
              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-start mb-4">
                    <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">AirFresh Marketing</h3>
                      <p className="text-gray-600">
                        720 S. Colorado Blvd., Penthouse North<br />
                        Denver, Colorado 80246
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-semibold mb-2">Nearby Landmarks:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Cherry Creek Shopping Center (0.5 miles)</li>
                      <li>• Denver Tech Center (2 miles)</li>
                      <li>• Denver International Airport (25 miles)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social & Updates */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Stay Connected</h2>
              <p className="text-lg text-gray-600 mb-8">
                Follow us on social media for the latest updates, industry insights, 
                behind-the-scenes content, and inspiration from our recent projects.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="h-6 w-6 mr-3" />
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>

              {/* Newsletter Signup */}
              <Card className="p-6 bg-primary text-white">
                <CardContent className="p-0">
                  <div className="flex items-start">
                    <MessageSquare className="h-6 w-6 mr-4 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">Marketing Insights Newsletter</h3>
                      <p className="text-white/90 mb-4 text-sm">
                        Get monthly insights, case studies, and industry trends delivered to your inbox.
                      </p>
                      <div className="flex gap-2">
                        <input 
                          type="email" 
                          placeholder="Your email" 
                          className="flex-1 px-3 py-2 text-gray-900 rounded text-sm"
                        />
                        <Button variant="secondary" size="sm">
                          Subscribe
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Every great project starts with a conversation. Let's discuss how we can 
            help your brand create unforgettable experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="#contact-form">Send Us a Message</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-primary border-primary bg-white hover:bg-primary hover:text-white hover:border-primary">
              <a href="tel:+13037206060">Call: 303-720-6060</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}