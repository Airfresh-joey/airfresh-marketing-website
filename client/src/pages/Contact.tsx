import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  Users,
  Award,
  Zap,
  ArrowRight,
  CheckCircle
} from "lucide-react";

// Simple inline form schema
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  inquiryType: z.string().optional(),
  message: z.string().min(1, "Please tell us about your project"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

// Format phone number as user types
const formatPhoneNumber = (value: string) => {
  const phoneNumber = value.replace(/\D/g, "");
  if (phoneNumber.length === 0) return "";
  if (phoneNumber.length <= 3) return `(${phoneNumber}`;
  if (phoneNumber.length <= 6) return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
};

export default function Contact() {
  const { toast } = useToast();
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "AirFresh Marketing",
      "telephone": "+1-303-720-6060",
      "email": "hello@airfreshmarketing.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-303-720-6060",
        "contactType": "customer service",
        "email": "hello@airfreshmarketing.com",
        "availableLanguage": "en"
      }
    }
  };

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      inquiryType: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await fetch("https://formspree.io/f/myznknaa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone ? formatPhoneNumber(data.phone) : "",
          inquiryType: data.inquiryType || "General",
          message: data.message,
        }),
      });
      if (!response.ok) throw new Error("Failed to submit form");
      return response.json();
    },
    onSuccess: () => {
      // Redirect to thank-you page for conversion tracking
      window.location.href = "/thank-you";
      toast({
        title: "Message sent!",
        description: "We'll be in touch within 24 hours.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  const stats = [
    { icon: Users, number: "300+", label: "Brands Served" },
    { icon: Award, number: "20+", label: "Years Experience" },
    { icon: Zap, number: "1000+", label: "Events Produced" }
  ];

  const benefits = [
    "Nationwide coverage in 50+ cities",
    "Response within 24 hours",
    "No obligation quote",
    "20+ years experience"
  ];

  return (
    <div className="pt-16">
      <SEO 
        title="Get a Free Quote | Experiential Marketing - AirFresh Marketing"
        description="Get a free quote for brand ambassadors, event staffing & experiential marketing. Call 303-720-6060. Nationwide coverage, 20+ years experience."
        pageType="contact"
        canonical="https://airfreshmarketing.com/contact"
        structuredData={structuredData}
      />

      {/* Hero Section with Inline Form */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-70" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Let's Work <span className="text-yellow-300 italic font-serif">Together</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
                Ready to create unforgettable brand experiences? Tell us about your project and we'll get back to you within 24 hours.
              </p>
              
              <div className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-white/90">
                    <CheckCircle className="h-5 w-5 text-yellow-300 mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="outline" className="text-primary border-white bg-white hover:bg-gray-100">
                  <a href="tel:+13037206060">
                    <Phone className="h-5 w-5 mr-2" />
                    Call: 303-720-6060
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-white border-white/50 hover:bg-white/10">
                  <a href="mailto:hello@airfreshmarketing.com">
                    <Mail className="h-5 w-5 mr-2" />
                    Email Us
                  </a>
                </Button>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get a Free Quote</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                          <Input placeholder="John Smith" {...field} className="h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email <span className="text-red-500">*</span></FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@company.com" {...field} className="h-12" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="(555) 123-4567"
                              value={formatPhoneNumber(field.value || "")}
                              onChange={(e) => {
                                const rawValue = e.target.value.replace(/\D/g, "");
                                if (rawValue.length <= 10) field.onChange(rawValue);
                              }}
                              className="h-12"
                              maxLength={14}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="inquiryType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>What can we help with?</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder="Select one..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="quote">Request a Quote</SelectItem>
                            <SelectItem value="brand-ambassadors">Brand Ambassadors</SelectItem>
                            <SelectItem value="event-staffing">Event Staffing</SelectItem>
                            <SelectItem value="street-teams">Street Teams</SelectItem>
                            <SelectItem value="general">General Inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tell us about your project <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                          <Textarea 
                            rows={4} 
                            placeholder="What are you looking to accomplish? Include dates, locations, and any other details..."
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full h-14 text-lg font-semibold"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? "Sending..." : "Get My Free Quote"}
                    {!mutation.isPending && <ArrowRight className="ml-2 h-5 w-5" />}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                  <stat.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Prefer to Reach Out Directly?</h2>
            <p className="text-lg text-gray-600">We're here Monday - Friday, 9AM - 6PM MST</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Call Us</h3>
                <a 
                  href="tel:+13037206060" 
                  className="text-2xl text-primary hover:text-primary/80 font-bold block mb-2"
                >
                  303-720-6060
                </a>
                <p className="text-gray-600 text-sm">Mon-Fri, 9AM-6PM MST</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Email Us</h3>
                <a 
                  href="mailto:hello@airfreshmarketing.com" 
                  className="text-lg text-primary hover:text-primary/80 font-medium block mb-2"
                >
                  hello@airfreshmarketing.com
                </a>
                <p className="text-gray-600 text-sm">We respond within 24 hours</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Looking for Work Banner */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Looking for Work?</h3>
              <p className="text-gray-300">Join our nationwide team of brand ambassadors and event staff.</p>
            </div>
            <Button asChild size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-semibold whitespace-nowrap">
              <Link href="/talent">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
