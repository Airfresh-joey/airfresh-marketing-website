'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from "next/link"
import SEO from "@/components/SEO"
import {
  Users,
  Calendar,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  Building2,
  Phone,
  Mail,
  FileText,
  Sparkles,
  Shield,
  Zap
} from "lucide-react"

interface FormData {
  // Contact Info
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  // Event Details
  eventType: string
  eventName: string
  eventLocation: string
  eventDate: string
  eventDuration: string
  // Staffing Needs
  staffCount: string
  staffRoles: string[]
  shiftLength: string
  // Additional Info
  budget: string
  description: string
  hearAboutUs: string
}

const staffRoleOptions = [
  { id: 'brand-ambassadors', label: 'Brand Ambassadors' },
  { id: 'product-demonstrators', label: 'Product Demonstrators' },
  { id: 'trade-show-staff', label: 'Trade Show Staff' },
  { id: 'registration-staff', label: 'Registration / Check-in Staff' },
  { id: 'hospitality', label: 'Hospitality Staff' },
  { id: 'promo-models', label: 'Promotional Models' },
  { id: 'sampling-teams', label: 'Sampling Teams' },
  { id: 'event-managers', label: 'Event Managers / Team Leads' },
  { id: 'mascots', label: 'Mascot Performers' },
  { id: 'street-teams', label: 'Street Teams' },
]

export default function GetQuote() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    eventType: '',
    eventName: '',
    eventLocation: '',
    eventDate: '',
    eventDuration: '',
    staffCount: '',
    staffRoles: [],
    shiftLength: '',
    budget: '',
    description: '',
    hearAboutUs: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [step, setStep] = useState(1)

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleRoleToggle = (roleId: string) => {
    setFormData(prev => ({
      ...prev,
      staffRoles: prev.staffRoles.includes(roleId)
        ? prev.staffRoles.filter(r => r !== roleId)
        : [...prev.staffRoles, roleId]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const canProceedStep1 = formData.firstName && formData.lastName && formData.email && formData.phone
  const canProceedStep2 = formData.eventType && formData.eventLocation && formData.eventDate
  const canProceedStep3 = formData.staffCount && formData.staffRoles.length > 0

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Event Staffing Quote",
    "description": "Get a custom quote for professional event staffing services including brand ambassadors, trade show staff, and promotional teams.",
    "provider": {
      "@type": "Organization",
      "name": "AirFresh Marketing"
    },
    "areaServed": "United States"
  }

  if (isSubmitted) {
    return (
      <>
        <SEO 
          title="Quote Request Received | AirFresh Marketing"
          description="Thank you for your event staffing quote request. Our team will contact you within 24 hours."
          canonical="/get-quote"
        />
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-slate-100 flex items-center justify-center py-20">
          <Card className="max-w-lg mx-4 shadow-2xl border-0">
            <CardContent className="pt-12 pb-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Quote Request Received!</h1>
              <p className="text-gray-600 mb-8">
                Thank you for your interest in AirFresh Marketing. Our team will review your requirements and get back to you within 24 hours with a customized quote.
              </p>
              <div className="space-y-3">
                <Link href="/">
                  <Button className="w-full">Return to Home</Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" className="w-full">Explore Our Services</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </main>
      </>
    )
  }

  return (
    <>
      <SEO 
        title="Get a Quote | Event Staffing & Brand Ambassadors | AirFresh Marketing"
        description="Request a custom quote for professional event staffing services. Brand ambassadors, trade show staff, promotional teams, and more. Fast response guaranteed."
        canonical="/get-quote"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
        {/* Hero Section */}
        <section className="relative py-12 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <FileText className="w-4 h-4" />
                Free Quote Request
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Get Your Custom
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500"> Staffing Quote</span>
              </h1>
              <p className="text-xl text-gray-600">
                Tell us about your event and staffing needs. We'll provide a detailed quote within 24 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Progress Steps */}
              <div className="flex items-center justify-center mb-10">
                {[1, 2, 3, 4].map((s) => (
                  <div key={s} className="flex items-center">
                    <button
                      onClick={() => s < step && setStep(s)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                        step === s 
                          ? 'bg-orange-500 text-white shadow-lg' 
                          : step > s 
                            ? 'bg-green-500 text-white cursor-pointer' 
                            : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
                    </button>
                    {s < 4 && (
                      <div className={`w-16 md:w-24 h-1 mx-1 rounded ${step > s ? 'bg-green-500' : 'bg-gray-200'}`} />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-4 text-sm text-gray-600 mb-8">
                <span className={step === 1 ? 'text-orange-600 font-medium' : ''}>Contact</span>
                <span className={step === 2 ? 'text-orange-600 font-medium' : ''}>Event</span>
                <span className={step === 3 ? 'text-orange-600 font-medium' : ''}>Staffing</span>
                <span className={step === 4 ? 'text-orange-600 font-medium' : ''}>Details</span>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Step 1: Contact Information */}
                {step === 1 && (
                  <Card className="shadow-xl border-0">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-2xl">
                        <Users className="w-6 h-6 text-orange-500" />
                        Contact Information
                      </CardTitle>
                      <CardDescription>
                        How can we reach you about your quote?
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            placeholder="John"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            placeholder="Smith"
                            required
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              placeholder="john@company.com"
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone *</Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <Input
                              id="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => handleInputChange('phone', e.target.value)}
                              placeholder="(555) 123-4567"
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company / Organization</Label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => handleInputChange('company', e.target.value)}
                            placeholder="Acme Inc."
                            className="pl-10"
                          />
                        </div>
                      </div>
                      <div className="pt-4 flex justify-end">
                        <Button 
                          type="button" 
                          onClick={() => setStep(2)}
                          disabled={!canProceedStep1}
                          className="bg-orange-500 hover:bg-orange-600"
                        >
                          Continue <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Step 2: Event Details */}
                {step === 2 && (
                  <Card className="shadow-xl border-0">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-2xl">
                        <Calendar className="w-6 h-6 text-orange-500" />
                        Event Details
                      </CardTitle>
                      <CardDescription>
                        Tell us about your event
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="eventType">Event Type *</Label>
                        <Select value={formData.eventType} onValueChange={(value) => handleInputChange('eventType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select event type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="trade-show">Trade Show / Convention</SelectItem>
                            <SelectItem value="product-launch">Product Launch</SelectItem>
                            <SelectItem value="corporate-event">Corporate Event</SelectItem>
                            <SelectItem value="sampling-campaign">Sampling Campaign</SelectItem>
                            <SelectItem value="brand-activation">Brand Activation</SelectItem>
                            <SelectItem value="festival">Festival / Concert</SelectItem>
                            <SelectItem value="sports-event">Sporting Event</SelectItem>
                            <SelectItem value="retail">Retail / In-Store</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="eventName">Event Name</Label>
                        <Input
                          id="eventName"
                          value={formData.eventName}
                          onChange={(e) => handleInputChange('eventName', e.target.value)}
                          placeholder="e.g., CES 2026"
                        />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="eventLocation">Event Location *</Label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <Input
                              id="eventLocation"
                              value={formData.eventLocation}
                              onChange={(e) => handleInputChange('eventLocation', e.target.value)}
                              placeholder="City, State or Venue"
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="eventDate">Event Date(s) *</Label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <Input
                              id="eventDate"
                              type="text"
                              value={formData.eventDate}
                              onChange={(e) => handleInputChange('eventDate', e.target.value)}
                              placeholder="e.g., March 15-17, 2026"
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="eventDuration">Event Duration</Label>
                        <Select value={formData.eventDuration} onValueChange={(value) => handleInputChange('eventDuration', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="half-day">Half Day (4 hours)</SelectItem>
                            <SelectItem value="full-day">Full Day (8 hours)</SelectItem>
                            <SelectItem value="2-days">2 Days</SelectItem>
                            <SelectItem value="3-days">3 Days</SelectItem>
                            <SelectItem value="4-days">4 Days</SelectItem>
                            <SelectItem value="week">1 Week</SelectItem>
                            <SelectItem value="ongoing">Ongoing / Multiple Events</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="pt-4 flex justify-between">
                        <Button type="button" variant="outline" onClick={() => setStep(1)}>
                          Back
                        </Button>
                        <Button 
                          type="button" 
                          onClick={() => setStep(3)}
                          disabled={!canProceedStep2}
                          className="bg-orange-500 hover:bg-orange-600"
                        >
                          Continue <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Step 3: Staffing Requirements */}
                {step === 3 && (
                  <Card className="shadow-xl border-0">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-2xl">
                        <Users className="w-6 h-6 text-orange-500" />
                        Staffing Requirements
                      </CardTitle>
                      <CardDescription>
                        What kind of staff do you need?
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="staffCount">Number of Staff Needed *</Label>
                          <Select value={formData.staffCount} onValueChange={(value) => handleInputChange('staffCount', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select staff count" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-5">1-5 Staff</SelectItem>
                              <SelectItem value="6-10">6-10 Staff</SelectItem>
                              <SelectItem value="11-20">11-20 Staff</SelectItem>
                              <SelectItem value="21-50">21-50 Staff</SelectItem>
                              <SelectItem value="50+">50+ Staff</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="shiftLength">Shift Length</Label>
                          <div className="relative">
                            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <Select value={formData.shiftLength} onValueChange={(value) => handleInputChange('shiftLength', value)}>
                              <SelectTrigger className="pl-10">
                                <SelectValue placeholder="Select shift length" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="4">4 Hours</SelectItem>
                                <SelectItem value="6">6 Hours</SelectItem>
                                <SelectItem value="8">8 Hours</SelectItem>
                                <SelectItem value="10">10 Hours</SelectItem>
                                <SelectItem value="12">12 Hours</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <Label>Staff Roles Needed *</Label>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {staffRoleOptions.map((role) => (
                            <div
                              key={role.id}
                              className={`flex items-center space-x-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                                formData.staffRoles.includes(role.id)
                                  ? 'border-orange-500 bg-orange-50'
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                              onClick={() => handleRoleToggle(role.id)}
                            >
                              <Checkbox
                                id={role.id}
                                checked={formData.staffRoles.includes(role.id)}
                                onCheckedChange={() => handleRoleToggle(role.id)}
                              />
                              <label htmlFor={role.id} className="text-sm cursor-pointer flex-1">
                                {role.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="pt-4 flex justify-between">
                        <Button type="button" variant="outline" onClick={() => setStep(2)}>
                          Back
                        </Button>
                        <Button 
                          type="button" 
                          onClick={() => setStep(4)}
                          disabled={!canProceedStep3}
                          className="bg-orange-500 hover:bg-orange-600"
                        >
                          Continue <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Step 4: Additional Details */}
                {step === 4 && (
                  <Card className="shadow-xl border-0">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-2xl">
                        <FileText className="w-6 h-6 text-orange-500" />
                        Additional Details
                      </CardTitle>
                      <CardDescription>
                        Any other information that would help us prepare your quote
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="budget">Estimated Budget</Label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-5k">Under $5,000</SelectItem>
                            <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                            <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                            <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                            <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                            <SelectItem value="100k+">$100,000+</SelectItem>
                            <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="description">Project Description</Label>
                        <Textarea
                          id="description"
                          value={formData.description}
                          onChange={(e) => handleInputChange('description', e.target.value)}
                          placeholder="Tell us more about your event, specific requirements, or any questions you have..."
                          rows={5}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="hearAboutUs">How did you hear about us?</Label>
                        <Select value={formData.hearAboutUs} onValueChange={(value) => handleInputChange('hearAboutUs', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="google">Google Search</SelectItem>
                            <SelectItem value="referral">Referral</SelectItem>
                            <SelectItem value="social">Social Media</SelectItem>
                            <SelectItem value="trade-show">Trade Show</SelectItem>
                            <SelectItem value="previous-client">Previous Client</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="pt-4 flex justify-between">
                        <Button type="button" variant="outline" onClick={() => setStep(3)}>
                          Back
                        </Button>
                        <Button 
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-orange-500 hover:bg-orange-600 px-8"
                        >
                          {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </form>

              {/* Trust Signals */}
              <div className="mt-12 grid sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-1">Fast Response</h3>
                  <p className="text-sm text-gray-600">Quote within 24 hours</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-1">No Obligation</h3>
                  <p className="text-sm text-gray-600">Free quotes, no pressure</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Sparkles className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-1">Expert Team</h3>
                  <p className="text-sm text-gray-600">10+ years experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
