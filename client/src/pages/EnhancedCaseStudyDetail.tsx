import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import LinkedInShare from "@/components/LinkedInShare";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Award,
  TrendingUp,
  Users,
  Target,
  ExternalLink,
  Building2,
  Lightbulb,
  CheckCircle,
  Package,
  Truck,
  ClipboardList,
  UserCheck,
  Shield,
  Megaphone,
  BarChart3,
  DollarSign,
  Eye,
  Heart,
  Share2,
  Quote
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface EnhancedCaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  campaign_type: string;
  date: string;
  location: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  deliverables: {
    staffing?: {
      brand_ambassadors?: number;
      street_teams?: number;
      event_managers?: number;
      product_specialists?: number;
      total_staff_hours?: number;
    };
    sampling?: {
      products_distributed?: number;
      locations?: number;
      days?: number;
      samples_per_hour?: number;
    };
    logistics?: {
      permits_secured?: string[];
      transportation?: string[];
      equipment?: string[];
      venue_coordination?: boolean;
    };
    event_management?: {
      on_site_oversight?: boolean;
      coordination_points?: string[];
      safety_protocols?: boolean;
      contingency_planning?: boolean;
    };
    creative?: {
      custom_activation?: string;
      branded_materials?: string[];
      digital_integration?: string[];
    };
  };
  metrics: {
    impressions: string;
    engagement_rate: string;
    roi: string;
    sales_uplift?: string;
    social_reach?: string;
    conversion_rate?: string;
    brand_awareness_lift?: string;
  };
  testimonial?: {
    quote: string;
    author: string;
    title: string;
  };
  keywords: string[];
  featured_image?: string;
  gallery_images?: string[];
}

export default function EnhancedCaseStudyDetail() {
  const { id } = useParams();

  // Fetch enhanced case study with deliverables
  const { data: caseStudy, isLoading, error } = useQuery<EnhancedCaseStudy>({
    queryKey: [`/api/case-studies-enhanced/${id}`],
  });

  if (isLoading) {
    return (
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading case study deliverables...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!caseStudy || error) {
    return (
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
            <p className="text-gray-600 mb-8">The case study you're looking for doesn't exist.</p>
            <Button asChild>
              <Link href="/projects/case-studies">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Comprehensive structured data for SEO and LLM extraction
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": `${caseStudy.title} - Deliverables & Results`,
    "description": caseStudy.description,
    "author": {
      "@type": "Organization",
      "name": "AirFresh Marketing"
    },
    "datePublished": caseStudy.date,
    "about": caseStudy.industry,
    "provider": {
      "@type": "Organization",
      "name": caseStudy.client
    },
    "contentLocation": {
      "@type": "Place",
      "name": caseStudy.location
    },
    "text": caseStudy.results.join(". "),
    "hasPart": [
      {
        "@type": "CreativeWork",
        "name": "Event Staffing",
        "description": `${caseStudy.deliverables.staffing?.brand_ambassadors || 0} brand ambassadors, ${caseStudy.deliverables.staffing?.total_staff_hours || 0} total staff hours`
      },
      {
        "@type": "CreativeWork",
        "name": "Product Sampling",
        "description": `${caseStudy.deliverables.sampling?.products_distributed || 0} products distributed across ${caseStudy.deliverables.sampling?.locations || 0} locations`
      },
      {
        "@type": "CreativeWork",
        "name": "Logistics Management",
        "description": `Permits secured, transportation coordinated, equipment deployed`
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": parseFloat(caseStudy.metrics.roi.replace('%', '')) / 100,
      "bestRating": 10,
      "worstRating": 0,
      "ratingCount": 1
    }
  };

  return (
    <article className="pt-16">
      <SEO 
        title={`${caseStudy.client} ${caseStudy.campaign_type} Deliverables | Event Staffing Solutions Case Study`}
        description={`Detailed case study: ${caseStudy.client} ${caseStudy.campaign_type.toLowerCase()} campaign deliverables. ${caseStudy.deliverables.staffing?.brand_ambassadors || 0} brand ambassadors, ${caseStudy.deliverables.sampling?.products_distributed || 0} products sampled, ${caseStudy.metrics.roi} ROI.`}
        keywords={`${caseStudy.client} case study, ${caseStudy.campaign_type} deliverables, ${caseStudy.industry} experiential marketing, brand activation results, event staffing solutions, ${caseStudy.location} marketing campaign`}
        canonical={`https://airfreshmarketing.com/projects/case-studies/${caseStudy.id}`}
        structuredData={structuredData}
      />

      {/* Hero Section with Comprehensive Overview */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center mb-6">
                <Button asChild variant="ghost" size="sm" className="text-primary hover:text-primary/90 p-0">
                  <Link href="/projects/case-studies" data-testid="button-back-to-case-studies">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Case Studies
                  </Link>
                </Button>
              </div>
              
              <div className="flex gap-2 mb-4">
                <Badge variant="secondary" className="text-sm">
                  {caseStudy.campaign_type}
                </Badge>
                <Badge variant="outline" className="text-sm">
                  {caseStudy.industry}
                </Badge>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight" data-testid="text-case-study-title">
                {caseStudy.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-600">
                <div className="flex items-center">
                  <Building2 className="h-5 w-5 mr-2 text-primary" />
                  <span className="font-medium">{caseStudy.client}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  <span>{caseStudy.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  <span>{caseStudy.date}</span>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {caseStudy.description}
              </p>

              {/* Quick Metrics Overview */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <TrendingUp className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{caseStudy.metrics.roi}</div>
                  <div className="text-xs text-gray-600">ROI</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <Eye className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{caseStudy.metrics.impressions}</div>
                  <div className="text-xs text-gray-600">Impressions</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <Heart className="h-6 w-6 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{caseStudy.metrics.engagement_rate}</div>
                  <div className="text-xs text-gray-600">Engagement</div>
                </div>
                {caseStudy.metrics.conversion_rate && (
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <Target className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{caseStudy.metrics.conversion_rate}</div>
                    <div className="text-xs text-gray-600">Conversion</div>
                  </div>
                )}
              </div>
              
              <div className="flex gap-4">
                <Button asChild size="lg" data-testid="button-request-similar">
                  <Link href="/contact">
                    Request Similar Campaign
                    <Megaphone className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
                <LinkedInShare 
                  url={`https://airfreshmarketing.com/projects/case-studies/${caseStudy.id}`}
                  title={`${caseStudy.client} Campaign Deliverables & Results`}
                />
              </div>
            </div>
            
            <div className="relative">
              {caseStudy.featured_image && (
                <img 
                  src={caseStudy.featured_image}
                  alt={`${caseStudy.client} ${caseStudy.campaign_type} Campaign`}
                  className="w-full rounded-xl shadow-2xl"
                />
              )}
              {caseStudy.testimonial && (
                <Card className="absolute -bottom-8 left-4 right-4 bg-white/95 backdrop-blur shadow-xl">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-primary/20 mb-3" />
                    <blockquote className="text-gray-700 italic mb-3">
                      "{caseStudy.testimonial.quote}"
                    </blockquote>
                    <cite className="text-sm text-gray-600 not-italic">
                      <strong>{caseStudy.testimonial.author}</strong><br />
                      {caseStudy.testimonial.title}
                    </cite>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge, Solution, Results Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Challenge */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Lightbulb className="h-5 w-5 mr-2 text-yellow-600" />
                  The Challenge
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{caseStudy.challenge}</p>
              </CardContent>
            </Card>

            {/* Solution */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Target className="h-5 w-5 mr-2 text-blue-600" />
                  Our Solution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{caseStudy.solution}</p>
              </CardContent>
            </Card>

            {/* Results */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Award className="h-5 w-5 mr-2 text-green-600" />
                  Key Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {caseStudy.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{result}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comprehensive Deliverables Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Campaign Deliverables & Execution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive breakdown of our brand activation deliverables, event staffing solutions, 
              and guerrilla marketing logistics for this campaign.
            </p>
          </div>

          <Tabs defaultValue="staffing" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="staffing">Staffing</TabsTrigger>
              <TabsTrigger value="sampling">Sampling</TabsTrigger>
              <TabsTrigger value="logistics">Logistics</TabsTrigger>
              <TabsTrigger value="management">Management</TabsTrigger>
              <TabsTrigger value="creative">Creative</TabsTrigger>
            </TabsList>

            {/* Event Staffing Solutions */}
            <TabsContent value="staffing">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <UserCheck className="h-5 w-5 mr-2 text-primary" />
                    Event Staffing Solutions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {caseStudy.deliverables.staffing && (
                      <>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <h4 className="font-semibold text-gray-900">Staffing Numbers</h4>
                            <ul className="space-y-3">
                              {caseStudy.deliverables.staffing.brand_ambassadors && (
                                <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                  <span className="flex items-center">
                                    <Users className="h-4 w-4 mr-2 text-primary" />
                                    Brand Ambassadors
                                  </span>
                                  <span className="font-bold text-primary">
                                    {caseStudy.deliverables.staffing.brand_ambassadors}
                                  </span>
                                </li>
                              )}
                              {caseStudy.deliverables.staffing.street_teams && (
                                <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                  <span className="flex items-center">
                                    <Users className="h-4 w-4 mr-2 text-primary" />
                                    Street Team Members
                                  </span>
                                  <span className="font-bold text-primary">
                                    {caseStudy.deliverables.staffing.street_teams}
                                  </span>
                                </li>
                              )}
                              {caseStudy.deliverables.staffing.event_managers && (
                                <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                  <span className="flex items-center">
                                    <UserCheck className="h-4 w-4 mr-2 text-primary" />
                                    Event Managers
                                  </span>
                                  <span className="font-bold text-primary">
                                    {caseStudy.deliverables.staffing.event_managers}
                                  </span>
                                </li>
                              )}
                              {caseStudy.deliverables.staffing.product_specialists && (
                                <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                  <span className="flex items-center">
                                    <Award className="h-4 w-4 mr-2 text-primary" />
                                    Product Specialists
                                  </span>
                                  <span className="font-bold text-primary">
                                    {caseStudy.deliverables.staffing.product_specialists}
                                  </span>
                                </li>
                              )}
                            </ul>
                          </div>
                          <div className="space-y-4">
                            <h4 className="font-semibold text-gray-900">Total Effort</h4>
                            <div className="bg-primary/5 rounded-xl p-6 text-center">
                              <div className="text-4xl font-bold text-primary mb-2">
                                {caseStudy.deliverables.staffing.total_staff_hours?.toLocaleString()}
                              </div>
                              <div className="text-gray-600">Total Staff Hours</div>
                            </div>
                            <p className="text-sm text-gray-600">
                              Our comprehensive event staffing solutions included recruiting, training, 
                              and managing all personnel to ensure flawless campaign execution.
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Product Sampling Campaign */}
            <TabsContent value="sampling">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Package className="h-5 w-5 mr-2 text-primary" />
                    Product Sampling Campaign
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {caseStudy.deliverables.sampling && (
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-4 gap-4">
                        <div className="bg-blue-50 rounded-lg p-4 text-center">
                          <Package className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-gray-900">
                            {caseStudy.deliverables.sampling.products_distributed?.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600">Products Distributed</div>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4 text-center">
                          <MapPin className="h-8 w-8 text-green-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-gray-900">
                            {caseStudy.deliverables.sampling.locations}
                          </div>
                          <div className="text-sm text-gray-600">Activation Locations</div>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-4 text-center">
                          <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-gray-900">
                            {caseStudy.deliverables.sampling.days}
                          </div>
                          <div className="text-sm text-gray-600">Campaign Days</div>
                        </div>
                        <div className="bg-orange-50 rounded-lg p-4 text-center">
                          <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-gray-900">
                            {caseStudy.deliverables.sampling.samples_per_hour}
                          </div>
                          <div className="text-sm text-gray-600">Samples/Hour</div>
                        </div>
                      </div>
                      <p className="text-gray-700">
                        Our sampling campaign logistics ensured efficient product distribution across all 
                        target locations, with real-time tracking and inventory management throughout the activation.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Logistics & Operations */}
            <TabsContent value="logistics">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Truck className="h-5 w-5 mr-2 text-primary" />
                    Logistics & Operations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {caseStudy.deliverables.logistics && (
                    <div className="space-y-6">
                      {/* Permits */}
                      {caseStudy.deliverables.logistics.permits_secured && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Permits Secured</h4>
                          <ul className="grid md:grid-cols-2 gap-2">
                            {caseStudy.deliverables.logistics.permits_secured.map((permit, index) => (
                              <li key={index} className="flex items-center p-2 bg-gray-50 rounded">
                                <Shield className="h-4 w-4 mr-2 text-green-600" />
                                <span className="text-sm">{permit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Transportation */}
                      {caseStudy.deliverables.logistics.transportation && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Transportation</h4>
                          <ul className="grid md:grid-cols-2 gap-2">
                            {caseStudy.deliverables.logistics.transportation.map((transport, index) => (
                              <li key={index} className="flex items-center p-2 bg-gray-50 rounded">
                                <Truck className="h-4 w-4 mr-2 text-blue-600" />
                                <span className="text-sm">{transport}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Equipment */}
                      {caseStudy.deliverables.logistics.equipment && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Equipment Deployed</h4>
                          <ul className="grid md:grid-cols-2 gap-2">
                            {caseStudy.deliverables.logistics.equipment.map((item, index) => (
                              <li key={index} className="flex items-center p-2 bg-gray-50 rounded">
                                <Package className="h-4 w-4 mr-2 text-purple-600" />
                                <span className="text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {caseStudy.deliverables.logistics.venue_coordination && (
                        <div className="bg-green-50 rounded-lg p-4">
                          <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                            <span className="font-semibold">Full Venue Coordination Provided</span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Event Management */}
            <TabsContent value="management">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ClipboardList className="h-5 w-5 mr-2 text-primary" />
                    Event Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {caseStudy.deliverables.event_management && (
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Coordination Points</h4>
                          <ul className="space-y-2">
                            {caseStudy.deliverables.event_management.coordination_points?.map((point, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle className="h-4 w-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-700">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-4">
                          {caseStudy.deliverables.event_management.on_site_oversight && (
                            <div className="bg-blue-50 rounded-lg p-4">
                              <div className="flex items-center">
                                <UserCheck className="h-5 w-5 mr-2 text-blue-600" />
                                <span className="font-semibold">24/7 On-Site Oversight</span>
                              </div>
                            </div>
                          )}
                          {caseStudy.deliverables.event_management.safety_protocols && (
                            <div className="bg-green-50 rounded-lg p-4">
                              <div className="flex items-center">
                                <Shield className="h-5 w-5 mr-2 text-green-600" />
                                <span className="font-semibold">Comprehensive Safety Protocols</span>
                              </div>
                            </div>
                          )}
                          {caseStudy.deliverables.event_management.contingency_planning && (
                            <div className="bg-purple-50 rounded-lg p-4">
                              <div className="flex items-center">
                                <ClipboardList className="h-5 w-5 mr-2 text-purple-600" />
                                <span className="font-semibold">Full Contingency Planning</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Creative & Digital */}
            <TabsContent value="creative">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Megaphone className="h-5 w-5 mr-2 text-primary" />
                    Creative & Digital Integration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {caseStudy.deliverables.creative && (
                    <div className="space-y-6">
                      {caseStudy.deliverables.creative.custom_activation && (
                        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6">
                          <h4 className="font-semibold text-gray-900 mb-2">Custom Activation</h4>
                          <p className="text-lg text-gray-700">{caseStudy.deliverables.creative.custom_activation}</p>
                        </div>
                      )}

                      <div className="grid md:grid-cols-2 gap-6">
                        {caseStudy.deliverables.creative.branded_materials && (
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Branded Materials</h4>
                            <ul className="space-y-2">
                              {caseStudy.deliverables.creative.branded_materials.map((material, index) => (
                                <li key={index} className="flex items-center">
                                  <Award className="h-4 w-4 mr-2 text-primary" />
                                  <span className="text-sm text-gray-700">{material}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {caseStudy.deliverables.creative.digital_integration && (
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Digital Integration</h4>
                            <ul className="space-y-2">
                              {caseStudy.deliverables.creative.digital_integration.map((digital, index) => (
                                <li key={index} className="flex items-center">
                                  <Share2 className="h-4 w-4 mr-2 text-primary" />
                                  <span className="text-sm text-gray-700">{digital}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Comprehensive Metrics Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Campaign Performance Metrics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed performance metrics demonstrating the success and ROI of our 
              brand activation deliverables and event staffing solutions.
            </p>
          </div>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableCaption className="p-4">
                  All metrics are based on third-party verification and client-reported data
                </TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Metric</TableHead>
                    <TableHead>Result</TableHead>
                    <TableHead>Industry Benchmark</TableHead>
                    <TableHead>Performance</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <TrendingUp className="h-4 w-4 mr-2 text-green-600" />
                        Return on Investment (ROI)
                      </div>
                    </TableCell>
                    <TableCell className="font-bold text-green-600">{caseStudy.metrics.roi}</TableCell>
                    <TableCell>150-200%</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-green-50">Above Average</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-2 text-blue-600" />
                        Total Impressions
                      </div>
                    </TableCell>
                    <TableCell className="font-bold">{caseStudy.metrics.impressions}</TableCell>
                    <TableCell>500K-1M</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-blue-50">Excellent</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <Heart className="h-4 w-4 mr-2 text-red-600" />
                        Engagement Rate
                      </div>
                    </TableCell>
                    <TableCell className="font-bold">{caseStudy.metrics.engagement_rate}</TableCell>
                    <TableCell>60-70%</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-red-50">Outstanding</Badge>
                    </TableCell>
                  </TableRow>
                  {caseStudy.metrics.sales_uplift && (
                    <TableRow>
                      <TableCell className="font-medium">
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-2 text-green-600" />
                          Sales Uplift
                        </div>
                      </TableCell>
                      <TableCell className="font-bold text-green-600">{caseStudy.metrics.sales_uplift}</TableCell>
                      <TableCell>15-25%</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-green-50">Above Average</Badge>
                      </TableCell>
                    </TableRow>
                  )}
                  {caseStudy.metrics.social_reach && (
                    <TableRow>
                      <TableCell className="font-medium">
                        <div className="flex items-center">
                          <Share2 className="h-4 w-4 mr-2 text-purple-600" />
                          Social Media Reach
                        </div>
                      </TableCell>
                      <TableCell className="font-bold">{caseStudy.metrics.social_reach}</TableCell>
                      <TableCell>100K-500K</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-purple-50">Excellent</Badge>
                      </TableCell>
                    </TableRow>
                  )}
                  {caseStudy.metrics.conversion_rate && (
                    <TableRow>
                      <TableCell className="font-medium">
                        <div className="flex items-center">
                          <Target className="h-4 w-4 mr-2 text-orange-600" />
                          Conversion Rate
                        </div>
                      </TableCell>
                      <TableCell className="font-bold">{caseStudy.metrics.conversion_rate}</TableCell>
                      <TableCell>20-30%</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-orange-50">High Performance</Badge>
                      </TableCell>
                    </TableRow>
                  )}
                  {caseStudy.metrics.brand_awareness_lift && (
                    <TableRow>
                      <TableCell className="font-medium">
                        <div className="flex items-center">
                          <BarChart3 className="h-4 w-4 mr-2 text-indigo-600" />
                          Brand Awareness Lift
                        </div>
                      </TableCell>
                      <TableCell className="font-bold">{caseStudy.metrics.brand_awareness_lift}</TableCell>
                      <TableCell>30-40%</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-indigo-50">Exceptional</Badge>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gallery Section */}
      {caseStudy.gallery_images && caseStudy.gallery_images.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Campaign Execution Gallery
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {caseStudy.gallery_images.map((image, index) => (
                <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={image}
                    alt={`${caseStudy.client} campaign execution ${index + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Megaphone className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Similar Event Staffing Solutions?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your brand activation deliverables, guerrilla marketing logistics, 
            and comprehensive event staffing needs. Get a custom proposal with detailed 
            deliverables tailored to your campaign objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" data-testid="button-request-proposal">
              <Link href="/contact">
                Request Custom Proposal
                <ArrowLeft className="h-5 w-5 ml-2 rotate-180" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white text-white hover:bg-white/20"
              data-testid="button-download-case-study"
            >
              <a href={`/api/download/case-study/${caseStudy.id}`} target="_blank">
                Download Full Case Study
                <ExternalLink className="h-5 w-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
}