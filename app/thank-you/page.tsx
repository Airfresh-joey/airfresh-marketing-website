'use client'

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { portfolioCaseStudies } from "@/server/portfolioCaseStudies";
import {
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Sparkles,
  Calendar,
  Users,
  TrendingUp,
  Award
} from "lucide-react";

export default function ThankYou() {
  // Track conversion on page load (for Formspree redirect)
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-969773658/6QBGCIm0pYIcENqkts4D',
      });
      (window as any).gtag('event', 'generate_lead', {
        'event_category': 'contact_form',
        'event_label': 'formspree_redirect'
      });
    }
  }, []);

  // Get featured case studies
  const featuredStudies = portfolioCaseStudies.filter(s => s.featured).slice(0, 3);
  
  // Get a few more recent studies
  const recentStudies = portfolioCaseStudies.filter(s => !s.featured).slice(0, 3);

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Success Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Hero background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2000&q=80"
            alt="Event marketing success"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/90 via-blue-600/85 to-blue-700/90" />
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center shadow-2xl">
              <CheckCircle className="w-14 h-14 text-green-500" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Thank You!
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Your message has been received. Our team will review your inquiry and get back to you within 24 hours.
          </p>

          {/* What to Expect */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-2xl mx-auto mb-8">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center justify-center">
              <Clock className="w-5 h-5 mr-2" />
              What Happens Next?
            </h2>
            <div className="grid md:grid-cols-3 gap-4 text-left">
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-cyan-300 font-bold text-lg mb-1">1. Review</div>
                <p className="text-white/80 text-sm">Our team reviews your project details</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-cyan-300 font-bold text-lg mb-1">2. Research</div>
                <p className="text-white/80 text-sm">We identify the best talent for your needs</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-cyan-300 font-bold text-lg mb-1">3. Respond</div>
                <p className="text-white/80 text-sm">You'll receive a custom quote within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Contact Options */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              <a href="tel:+13037206060">
                <Phone className="h-5 w-5 mr-2" />
                Call: 303-720-6060
              </a>
            </Button>
            <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/20">
              <Link href="/">
                Return Home
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: TrendingUp, value: "4.2x", label: "Average ROI" },
              { icon: Users, value: "5M+", label: "People Reached" },
              { icon: Award, value: "300+", label: "Brands Served" },
              { icon: Calendar, value: "1000+", label: "Events Produced" }
            ].map((stat, idx) => (
              <div key={idx} className="p-4">
                <stat.icon className="w-6 h-6 text-cyan-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-cyan-100 text-cyan-800 border-0">
              <Sparkles className="w-4 h-4 mr-1" />
              While You Wait
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how we've helped brands like yours create memorable experiences and achieve measurable results.
            </p>
          </div>

          {/* Featured Studies Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredStudies.map((study) => (
              <Link key={study.id} href={`/case-studies/${study.id}`}>
                <Card className="group h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
                  <div className="relative h-56 overflow-hidden">
                    {study.heroImage ? (
                      <Image
                        src={study.heroImage}
                        alt={study.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        style={{ objectPosition: study.heroPosition || 'center' }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-cyan-500 text-white border-0">
                      Featured
                    </Badge>
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge variant="outline" className="bg-white/20 backdrop-blur-sm text-white border-white/30 mb-2">
                        {study.category}
                      </Badge>
                      <h3 className="text-xl font-bold text-white">
                        {study.name}
                      </h3>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                      {study.tagline}
                    </p>
                    <div className="flex items-center text-cyan-600 font-medium text-sm group-hover:text-cyan-700">
                      View Case Study
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* More Case Studies */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">More Success Stories</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {recentStudies.map((study) => (
                <Link key={study.id} href={`/case-studies/${study.id}`}>
                  <Card className="group overflow-hidden border hover:border-cyan-300 hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="relative h-40 overflow-hidden">
                      {study.heroImage ? (
                        <Image
                          src={study.heroImage}
                          alt={study.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          style={{ objectPosition: study.heroPosition || 'center' }}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
                      )}
                    </div>
                    <CardContent className="p-4">
                      <Badge variant="outline" className="text-xs mb-2">
                        {study.category}
                      </Badge>
                      <h4 className="font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors line-clamp-1">
                        {study.name}
                      </h4>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <Button asChild size="lg" variant="outline">
              <Link href="/case-studies">
                View All Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Our team is available Monday - Friday, 9AM - 6PM MST
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-400 text-white">
              <a href="tel:+13037206060">
                <Phone className="h-5 w-5 mr-2" />
                303-720-6060
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
              <a href="mailto:hello@airfreshmarketing.com">
                <Mail className="h-5 w-5 mr-2" />
                hello@airfreshmarketing.com
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
