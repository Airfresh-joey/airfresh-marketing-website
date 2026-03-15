'use client'

import { useState, useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
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
  Calculator,
  TrendingUp,
  DollarSign,
  Users,
  Target,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Sparkles
} from "lucide-react"

interface ROIResults {
  totalImpressions: number
  directEngagements: number
  estimatedLeads: number
  estimatedConversions: number
  estimatedRevenue: number
  roi: number
  costPerLead: number
  costPerImpression: number
}

export default function ROICalculator() {
  const [budget, setBudget] = useState<number>(10000)
  const [eventType, setEventType] = useState<string>('trade-show')
  const [duration, setDuration] = useState<number>(3)
  const [averageOrderValue, setAverageOrderValue] = useState<number>(500)
  const [conversionRate, setConversionRate] = useState<number>(5)

  // Industry benchmarks based on event type
  const benchmarks: Record<string, { impressionsPerDollar: number; engagementRate: number; leadRate: number }> = {
    'trade-show': { impressionsPerDollar: 15, engagementRate: 0.12, leadRate: 0.08 },
    'sampling': { impressionsPerDollar: 25, engagementRate: 0.35, leadRate: 0.15 },
    'brand-activation': { impressionsPerDollar: 20, engagementRate: 0.25, leadRate: 0.12 },
    'street-team': { impressionsPerDollar: 30, engagementRate: 0.20, leadRate: 0.10 },
    'event-staffing': { impressionsPerDollar: 12, engagementRate: 0.15, leadRate: 0.06 },
    'corporate': { impressionsPerDollar: 8, engagementRate: 0.18, leadRate: 0.10 },
  }

  const results: ROIResults = useMemo(() => {
    const benchmark = benchmarks[eventType] || benchmarks['trade-show']
    const durationMultiplier = Math.sqrt(duration) // Diminishing returns on longer events
    
    const totalImpressions = Math.round(budget * benchmark.impressionsPerDollar * durationMultiplier)
    const directEngagements = Math.round(totalImpressions * benchmark.engagementRate)
    const estimatedLeads = Math.round(directEngagements * benchmark.leadRate)
    const estimatedConversions = Math.round(estimatedLeads * (conversionRate / 100))
    const estimatedRevenue = estimatedConversions * averageOrderValue
    const roi = budget > 0 ? ((estimatedRevenue - budget) / budget) * 100 : 0
    const costPerLead = estimatedLeads > 0 ? budget / estimatedLeads : 0
    const costPerImpression = totalImpressions > 0 ? budget / totalImpressions : 0

    return {
      totalImpressions,
      directEngagements,
      estimatedLeads,
      estimatedConversions,
      estimatedRevenue,
      roi,
      costPerLead,
      costPerImpression
    }
  }, [budget, eventType, duration, averageOrderValue, conversionRate])

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Experiential Marketing ROI Calculator",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "provider": {
      "@type": "Organization",
      "name": "AirFresh Marketing"
    }
  }

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(Math.round(num))
  }

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(num)
  }

  return (
    <>
      <SEO 
        title="ROI Calculator | Experiential Marketing Investment Returns | AirFresh Marketing"
        description="Calculate the potential return on investment for your experiential marketing campaigns. Estimate impressions, leads, and revenue from trade shows, sampling, brand activations, and more."
        canonical="/tools/roi-calculator"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Calculator className="w-4 h-4" />
                Free Marketing Tool
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Experiential Marketing
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> ROI Calculator</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Estimate the return on investment for your next experiential marketing campaign. Get instant insights on impressions, leads, and projected revenue.
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              
              {/* Input Card */}
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Target className="w-6 h-6 text-blue-600" />
                    Campaign Details
                  </CardTitle>
                  <CardDescription>
                    Enter your campaign parameters to calculate estimated ROI
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Budget */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="budget" className="text-base font-medium">Campaign Budget</Label>
                      <span className="text-2xl font-bold text-blue-600">{formatCurrency(budget)}</span>
                    </div>
                    <Slider
                      id="budget"
                      min={1000}
                      max={100000}
                      step={1000}
                      value={[budget]}
                      onValueChange={(value) => setBudget(value[0])}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>$1,000</span>
                      <span>$100,000</span>
                    </div>
                  </div>

                  {/* Event Type */}
                  <div className="space-y-3">
                    <Label htmlFor="eventType" className="text-base font-medium">Campaign Type</Label>
                    <Select value={eventType} onValueChange={setEventType}>
                      <SelectTrigger id="eventType" className="w-full">
                        <SelectValue placeholder="Select campaign type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="trade-show">Trade Show / Convention</SelectItem>
                        <SelectItem value="sampling">Product Sampling</SelectItem>
                        <SelectItem value="brand-activation">Brand Activation</SelectItem>
                        <SelectItem value="street-team">Street Team Marketing</SelectItem>
                        <SelectItem value="event-staffing">Event Staffing</SelectItem>
                        <SelectItem value="corporate">Corporate Event</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Duration */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="duration" className="text-base font-medium">Event Duration</Label>
                      <span className="text-lg font-semibold">{duration} day{duration > 1 ? 's' : ''}</span>
                    </div>
                    <Slider
                      id="duration"
                      min={1}
                      max={14}
                      step={1}
                      value={[duration]}
                      onValueChange={(value) => setDuration(value[0])}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>1 day</span>
                      <span>14 days</span>
                    </div>
                  </div>

                  {/* Average Order Value */}
                  <div className="space-y-3">
                    <Label htmlFor="aov" className="text-base font-medium">Average Order/Contract Value</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        id="aov"
                        type="number"
                        value={averageOrderValue}
                        onChange={(e) => setAverageOrderValue(Number(e.target.value) || 0)}
                        className="pl-10"
                        min={0}
                      />
                    </div>
                  </div>

                  {/* Conversion Rate */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="conversion" className="text-base font-medium">Lead-to-Customer Rate</Label>
                      <span className="text-lg font-semibold">{conversionRate}%</span>
                    </div>
                    <Slider
                      id="conversion"
                      min={1}
                      max={25}
                      step={1}
                      value={[conversionRate]}
                      onValueChange={(value) => setConversionRate(value[0])}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>1%</span>
                      <span>25%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Results Card */}
              <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl text-white">
                    <BarChart3 className="w-6 h-6" />
                    Projected Results
                  </CardTitle>
                  <CardDescription className="text-blue-100">
                    Estimated performance based on industry benchmarks
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Main ROI Display */}
                  <div className="text-center py-6 bg-white/10 rounded-xl backdrop-blur">
                    <p className="text-blue-100 text-sm uppercase tracking-wide mb-2">Estimated ROI</p>
                    <p className={`text-5xl md:text-6xl font-bold ${results.roi >= 0 ? 'text-green-300' : 'text-red-300'}`}>
                      {results.roi > 0 ? '+' : ''}{results.roi.toFixed(0)}%
                    </p>
                    <p className="text-blue-200 text-sm mt-2">
                      {formatCurrency(results.estimatedRevenue)} projected revenue
                    </p>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-4 h-4 text-blue-200" />
                        <span className="text-blue-200 text-sm">Impressions</span>
                      </div>
                      <p className="text-2xl font-bold">{formatNumber(results.totalImpressions)}</p>
                    </div>

                    <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-4 h-4 text-blue-200" />
                        <span className="text-blue-200 text-sm">Engagements</span>
                      </div>
                      <p className="text-2xl font-bold">{formatNumber(results.directEngagements)}</p>
                    </div>

                    <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="w-4 h-4 text-blue-200" />
                        <span className="text-blue-200 text-sm">Estimated Leads</span>
                      </div>
                      <p className="text-2xl font-bold">{formatNumber(results.estimatedLeads)}</p>
                    </div>

                    <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-blue-200" />
                        <span className="text-blue-200 text-sm">Conversions</span>
                      </div>
                      <p className="text-2xl font-bold">{formatNumber(results.estimatedConversions)}</p>
                    </div>
                  </div>

                  {/* Cost Metrics */}
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-200">Cost per Lead</span>
                      <span className="font-bold">{formatCurrency(results.costPerLead)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-200">Cost per 1,000 Impressions</span>
                      <span className="font-bold">{formatCurrency(results.costPerImpression * 1000)}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link href="/contact" className="block">
                    <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold py-6 text-lg">
                      Get a Custom Quote
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">How We Calculate Your ROI</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold text-xl">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Industry Benchmarks</h3>
                  <p className="text-gray-600 text-sm">
                    We use real data from thousands of experiential marketing campaigns to establish baseline performance metrics.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold text-xl">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Campaign Variables</h3>
                  <p className="text-gray-600 text-sm">
                    Your budget, event type, and duration are factored in to provide realistic estimates for your specific situation.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold text-xl">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Revenue Projection</h3>
                  <p className="text-gray-600 text-sm">
                    Using your average order value and conversion rate, we calculate potential revenue and overall ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Maximize Your Marketing ROI?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our team of experiential marketing experts will help you create campaigns that deliver real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8">
                  Request a Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
