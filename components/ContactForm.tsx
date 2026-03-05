'use client';

import { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSubmissionSchema } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useSearchParams } from "next/navigation";
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import type { InsertContactSubmission } from "@shared/schema";

// Format phone number as user types
const formatPhoneNumber = (value: string) => {
  const phoneNumber = value.replace(/\D/g, "");
  if (phoneNumber.length === 0) return "";
  if (phoneNumber.length <= 3) return `(${phoneNumber}`;
  if (phoneNumber.length <= 6) return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  if (phoneNumber.length <= 10) return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
};

// Validate email format
const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Capitalize first letter of each word
const capitalizeWords = (str: string) => str.replace(/\b\w/g, (char) => char.toUpperCase());

// Attribution tracking data interface
interface AttributionData {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  gclid: string;
  fbclid: string;
  referrer: string;
  landing_page: string;
  source_page: string;
}

// Get or initialize attribution data from localStorage
const getAttributionData = (): AttributionData => {
  if (typeof window === 'undefined') {
    return {
      utm_source: '', utm_medium: '', utm_campaign: '', utm_content: '', utm_term: '',
      gclid: '', fbclid: '', referrer: '', landing_page: '', source_page: ''
    };
  }
  
  const stored = localStorage.getItem('afm_attribution');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      // Invalid JSON, start fresh
    }
  }
  
  return {
    utm_source: '', utm_medium: '', utm_campaign: '', utm_content: '', utm_term: '',
    gclid: '', fbclid: '', referrer: '', landing_page: '', source_page: ''
  };
};

// Save attribution data to localStorage
const saveAttributionData = (data: AttributionData) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('afm_attribution', JSON.stringify(data));
  }
};

export default function ContactForm() {
  const { toast } = useToast();
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const searchParams = useSearchParams();
  const { executeRecaptcha } = useGoogleReCaptcha();
  
  // Attribution tracking state
  const [attribution, setAttribution] = useState<AttributionData>({
    utm_source: '', utm_medium: '', utm_campaign: '', utm_content: '', utm_term: '',
    gclid: '', fbclid: '', referrer: '', landing_page: '', source_page: ''
  });
  
  // Capture attribution data on mount and URL changes
  useEffect(() => {
    const currentAttribution = getAttributionData();
    const urlParams = new URLSearchParams(window.location.search);
    
    // Capture UTM parameters (only if present in URL - first touch wins)
    const utm_source = urlParams.get('utm_source') || currentAttribution.utm_source;
    const utm_medium = urlParams.get('utm_medium') || currentAttribution.utm_medium;
    const utm_campaign = urlParams.get('utm_campaign') || currentAttribution.utm_campaign;
    const utm_content = urlParams.get('utm_content') || currentAttribution.utm_content;
    const utm_term = urlParams.get('utm_term') || currentAttribution.utm_term;
    
    // Capture click IDs (Google Ads, Facebook)
    const gclid = urlParams.get('gclid') || currentAttribution.gclid;
    const fbclid = urlParams.get('fbclid') || currentAttribution.fbclid;
    
    // Capture referrer (only on first visit)
    let referrer = currentAttribution.referrer;
    if (!referrer && document.referrer) {
      try {
        const refUrl = new URL(document.referrer);
        // Only capture external referrers
        if (!refUrl.hostname.includes('airfreshmarketing.com')) {
          referrer = document.referrer;
        }
      } catch {
        referrer = document.referrer;
      }
    }
    
    // Capture landing page (only on first visit)
    const landing_page = currentAttribution.landing_page || window.location.pathname;
    
    // Current page (always update)
    const source_page = window.location.pathname;
    
    // Determine source if not explicitly set
    let finalSource = utm_source;
    if (!finalSource && gclid) {
      finalSource = 'google';
    } else if (!finalSource && fbclid) {
      finalSource = 'facebook';
    } else if (!finalSource && referrer) {
      // Infer source from referrer
      if (referrer.includes('google.com')) finalSource = 'google_organic';
      else if (referrer.includes('bing.com')) finalSource = 'bing_organic';
      else if (referrer.includes('linkedin.com')) finalSource = 'linkedin';
      else if (referrer.includes('facebook.com')) finalSource = 'facebook_organic';
      else if (referrer.includes('instagram.com')) finalSource = 'instagram';
      else finalSource = 'referral';
    } else if (!finalSource) {
      finalSource = 'direct';
    }
    
    const newAttribution: AttributionData = {
      utm_source: finalSource,
      utm_medium: utm_medium || (gclid ? 'cpc' : ''),
      utm_campaign,
      utm_content,
      utm_term,
      gclid,
      fbclid,
      referrer,
      landing_page,
      source_page
    };
    
    setAttribution(newAttribution);
    saveAttributionData(newAttribution);
  }, [searchParams]);

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      inquiryType: undefined,
      message: "",
    },
  });

  // Check form validity whenever fields change
  useEffect(() => {
    const subscription = form.watch((value) => {
      const hasRequiredFields = !!(
        value.firstName?.trim() &&
        value.lastName?.trim() &&
        value.email?.trim() &&
        value.message?.trim()
      );
      const isEmailValid = value.email ? validateEmail(value.email) : false;
      setIsFormValid(hasRequiredFields && isEmailValid);
    });
    return () => subscription.unsubscribe();
  }, [form]);

  const onSubmit = useCallback(async (data: InsertContactSubmission) => {
    // Additional validation before submission
    if (!data.firstName || !data.lastName || !data.email || !data.message) {
      toast({
        title: "Missing Required Fields",
        description: "Please fill in all required fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(data.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // reCAPTCHA disabled - Formshield handles spam protection
      const recaptchaToken = "";

      const response = await fetch("https://formspree.io/f/myznknaa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone ? formatPhoneNumber(data.phone) : "",
          company: data.company || "",
          inquiryType: data.inquiryType || "",
          message: data.message,
          // Attribution tracking fields
          _source: attribution.utm_source || "direct",
          _medium: attribution.utm_medium || "",
          _campaign: attribution.utm_campaign || "",
          _content: attribution.utm_content || "",
          _term: attribution.utm_term || "",
          _gclid: attribution.gclid || "",
          _fbclid: attribution.fbclid || "",
          _referrer: attribution.referrer || "",
          _landingPage: attribution.landing_page || "",
          _sourcePage: attribution.source_page || "",
          "g-recaptcha-response": recaptchaToken,
        }),
      });

      if (!response.ok) throw new Error("Failed to submit form");

      // Track form submission as conversion for Google Ads
      if (typeof window !== 'undefined' && (window as any).gtag) {
        // Google Ads conversion tracking
        (window as any).gtag('event', 'conversion', {
          'send_to': 'AW-969773658/6QBGCIm0pYIcENqkts4D',
        });
        // GA4 generate_lead event
        (window as any).gtag('event', 'generate_lead', {
          'event_category': 'contact_form',
        });
        console.log('Contact form conversion tracked');
      }

      toast({
        title: "Message sent!",
        description: "We'll be in touch with you shortly.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [executeRecaptcha, form, attribution, toast]);

  return (
    <div className="bg-gray-100 p-8 rounded-lg max-w-2xl mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-xl">A</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Request more information from AirFresh</h2>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="John"
                      onChange={(e) => field.onChange(capitalizeWords(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Doe"
                      onChange={(e) => field.onChange(capitalizeWords(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      {...field}
                      placeholder="john.doe@company.com"
                      onBlur={(e) => {
                        field.onBlur();
                        if (e.target.value && !validateEmail(e.target.value)) {
                          form.setError("email", { type: "manual", message: "Please enter a valid email address" });
                        } else {
                          form.clearErrors("email");
                        }
                      }}
                    />
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
                      {...field}
                      value={formatPhoneNumber(field.value || "")}
                      placeholder="(555) 123-4567"
                      onChange={(e) => {
                        const rawValue = e.target.value.replace(/\D/g, "");
                        if (rawValue.length <= 10) field.onChange(rawValue);
                      }}
                      maxLength={14}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      value={field.value || ""}
                      placeholder="Acme Corporation"
                      onChange={(e) => field.onChange(capitalizeWords(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="inquiryType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Inquiry Type</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value || undefined}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select one..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="quote">Request a Quote</SelectItem>
                      <SelectItem value="job">Job Inquiry</SelectItem>
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
                <FormItem className="md:col-span-2">
                  <FormLabel>Message <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Textarea rows={4} placeholder="Tell us about your project..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="md:col-span-2">
              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={!isFormValid || isSubmitting}
              >
                {isSubmitting ? "Sending..." : !isFormValid ? "Please fill in all required fields" : "Send Message"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
