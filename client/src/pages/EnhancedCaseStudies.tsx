import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import SEO from "@/components/SEO";
import { 
  Award, 
  Users, 
  TrendingUp, 
  Target, 
  Eye, 
  Heart, 
  ArrowRight,
  Calendar,
  MapPin,
  BarChart3,
  Building2,
  DollarSign,
  Package,
  Truck,
  CheckCircle,
  UserCheck,
  ClipboardList,
  Megaphone
} from "lucide-react";
import LinkedInShare from "@/components/LinkedInShare";
import { Badge } from "@/components/ui/badge";

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

export default function EnhancedCaseStudies() {
  // Comprehensive structured data for SEO and LLM extraction
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Experiential Marketing Case Studies with Deliverables",
    "description": "Detailed case studies showcasing brand activation deliverables, event staffing solutions, and guerrilla marketing logistics with measurable results",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": 500,
      "itemListElement": [
        {
          "@type": "CreativeWork",
          "name": "Brand Activation Deliverables",
          "description": "Comprehensive deliverables including staffing, sampling, logistics, and event management for brand activation campaigns",
          "about": "Marketing",
          "provider": {
            "@type": "Organization",
            "name": "AirFresh Marketing"
          }
        },
        {
          "@type": "CreativeWork",
          "name": "Event Staffing Solutions", 
          "description": "Detailed breakdown of brand ambassadors, street teams, and event managers deployed for experiential campaigns",
          "about": "Event Management",
          "provider": {
            "@type": "Organization",
            "name": "AirFresh Marketing"
          }
        },
        {
          "@type": "CreativeWork",
          "name": "Guerrilla Marketing Logistics",
          "description": "Complete logistics deliverables including permits, transportation, equipment, and venue coordination",
          "about": "Marketing Logistics",
          "provider": {
            "@type": "Organization",
            "name": "AirFresh Marketing"
          }
        }
      ]
    }
  };

  // Fetch enhanced case studies with deliverables
  const { data: caseStudies = [], isLoading, error } = useQuery<EnhancedCaseStudy[]>({
    queryKey: ['/api/case-studies-enhanced'],
  });

  // Get featured case study (first one)
  const featuredCaseStudy = caseStudies[0];

  // Get remaining case studies for grid
  const gridCaseStudies = caseStudies.slice(1);

  // Calculate total deliverables across all case studies
  const totalDeliverables = caseStudies.reduce((acc, cs) => {
    const staffing = cs.deliverables.staffing?.total_staff_hours || 0;
    const sampling = cs.deliverables.sampling?.products_distributed || 0;
    return {
      totalStaffHours: acc.totalStaffHours + staffing,
      totalSamples: acc.totalSamples + sampling,
    };
  }, { totalStaffHours: 0, totalSamples: 0 });

  if (isLoading) {
    return (
      <div className="pt-16">
        <SEO 
          title="Brand Activation Deliverables | Event Staffing Solutions Case Studies"
          description="500+ experiential marketing case studies with detailed deliverables. Brand activation staffing, sampling logistics, guerrilla marketing results & ROI metrics."
          pageType="case-studies"
          canonical="https://airfreshmarketing.com/projects/case-studies"
          structuredData={structuredData}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading case studies with deliverables...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <SEO 
        title="Brand Activation Deliverables | Event Staffing Solutions Case Studies"
        description="500+ experiential marketing case studies with detailed deliverables. Brand activation staffing, sampling logistics, guerrilla marketing results & ROI metrics."
        keywords="brand activation deliverables, event staffing solutions, guerrilla marketing logistics, sampling campaign results, experiential marketing deliverables, brand ambassador programs, street team deployment, event management solutions"
        pageType="case-studies"
        canonical="https://airfreshmarketing.com/projects/case-studies"
        structuredData={structuredData}
      />

      {/* Hero Section with Deliverables Focus */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="text-page-title">
              Case Studies with <span className="text-primary">Comprehensive Deliverables</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-page-description">
              Explore our brand activation deliverables, event staffing solutions, and guerrilla marketing logistics 
              with detailed metrics showcasing measurable results and ROI for leading brands.
            </p>
          </div>

          {/* Enhanced Stats Section - Deliverables Focused */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2" data-testid="text-stat-campaigns">500+</div>
              <div className="text-gray-600 font-medium">Campaigns Delivered</div>
              <div className="text-sm text-gray-500 mt-1">With Complete Deliverables</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2" data-testid="text-stat-staff-hours">{(totalDeliverables.totalStaffHours / 1000).toFixed(0)}K+</div>
              <div className="text-gray-600 font-medium">Staff Hours Deployed</div>
              <div className="text-sm text-gray-500 mt-1">Brand Ambassadors & Teams</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2" data-testid="text-stat-samples">{(totalDeliverables.totalSamples / 1000000).toFixed(1)}M+</div>
              <div className="text-gray-600 font-medium">Products Sampled</div>
              <div className="text-sm text-gray-500 mt-1">Nationwide Distribution</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2" data-testid="text-stat-roi">625%</div>
              <div className="text-gray-600 font-medium">Average ROI</div>
              <div className="text-sm text-gray-500 mt-1">Across All Campaigns</div>
            </div>
          </div>

          {/* Deliverables Categories */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Comprehensive Deliverables Include:</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start">
                <UserCheck className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Event Staffing Solutions</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Brand Ambassadors (10-500+ per event)</li>
                    <li>• Street Teams & Guerrilla Units</li>
                    <li>• Event Managers & Supervisors</li>
                    <li>• Product Specialists & Demonstrators</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start">
                <Package className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Sampling & Distribution</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Product Sampling Logistics</li>
                    <li>• Multi-Location Coordination</li>
                    <li>• Inventory Management</li>
                    <li>• Distribution Metrics & Tracking</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start">
                <ClipboardList className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Logistics & Management</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Permit Acquisition & Compliance</li>
                    <li>• Transportation & Equipment</li>
                    <li>• On-Site Event Management</li>
                    <li>• Safety Protocols & Insurance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study with Deliverables Highlight */}
      {featuredCaseStudy && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Featured Success Story</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Latest Campaign with Full Deliverables
              </h2>
            </div>
            
            <article className="bg-gradient-to-br from-primary/5 to-transparent rounded-2xl overflow-hidden shadow-xl">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <Badge>{featuredCaseStudy.campaign_type}</Badge>
                    <Badge variant="outline">{featuredCaseStudy.industry}</Badge>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4" data-testid={`text-case-study-title-${featuredCaseStudy.id}`}>
                    {featuredCaseStudy.title}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
                    <span className="flex items-center">
                      <Building2 className="h-4 w-4 mr-1 text-primary" />
                      {featuredCaseStudy.client}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-primary" />
                      {featuredCaseStudy.location}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-primary" />
                      {featuredCaseStudy.date}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-8">{featuredCaseStudy.description}</p>
                  
                  {/* Key Deliverables Highlight */}
                  <div className="bg-white rounded-lg p-6 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      Key Deliverables Provided
                    </h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      {featuredCaseStudy.deliverables.staffing && (
                        <div>
                          <span className="font-medium text-primary">
                            {featuredCaseStudy.deliverables.staffing.brand_ambassadors}
                          </span>
                          <span className="text-gray-600 ml-1">Brand Ambassadors</span>
                        </div>
                      )}
                      {featuredCaseStudy.deliverables.sampling && (
                        <div>
                          <span className="font-medium text-primary">
                            {featuredCaseStudy.deliverables.sampling.products_distributed?.toLocaleString()}
                          </span>
                          <span className="text-gray-600 ml-1">Products Sampled</span>
                        </div>
                      )}
                      {featuredCaseStudy.deliverables.staffing?.total_staff_hours && (
                        <div>
                          <span className="font-medium text-primary">
                            {featuredCaseStudy.deliverables.staffing.total_staff_hours.toLocaleString()}
                          </span>
                          <span className="text-gray-600 ml-1">Staff Hours</span>
                        </div>
                      )}
                      {featuredCaseStudy.deliverables.sampling?.locations && (
                        <div>
                          <span className="font-medium text-primary">
                            {featuredCaseStudy.deliverables.sampling.locations}
                          </span>
                          <span className="text-gray-600 ml-1">Locations</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Metrics Preview */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{featuredCaseStudy.metrics.roi}</div>
                      <div className="text-xs text-gray-600">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{featuredCaseStudy.metrics.engagement_rate}</div>
                      <div className="text-xs text-gray-600">Engagement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{featuredCaseStudy.metrics.impressions}</div>
                      <div className="text-xs text-gray-600">Impressions</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button asChild>
                      <Link href={`/projects/case-studies/${featuredCaseStudy.id}`} data-testid={`button-view-deliverables-${featuredCaseStudy.id}`}>
                        View Full Deliverables
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                    <LinkedInShare 
                      url={`https://airfreshmarketing.com/projects/case-studies/${featuredCaseStudy.id}`}
                      title={`${featuredCaseStudy.client} - ${featuredCaseStudy.campaign_type} Deliverables`}
                    />
                  </div>
                </div>
                
                <div className="relative h-full min-h-[400px] lg:min-h-[600px]">
                  <img 
                    src={featuredCaseStudy.featured_image || "/api/placeholder/800/600"}
                    alt={`${featuredCaseStudy.client} ${featuredCaseStudy.campaign_type} Deliverables`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* Case Studies Grid with Deliverables Focus */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              More Success Stories with Detailed Deliverables
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive brand activation deliverables, event staffing solutions, 
              and guerrilla marketing logistics across various industries and campaign types.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gridCaseStudies.map((caseStudy) => (
              <article key={caseStudy.id} className="group">
                <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={caseStudy.featured_image || "/api/placeholder/400/300"}
                      alt={`${caseStudy.client} ${caseStudy.campaign_type} Deliverables`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className="bg-white/90 text-gray-900">
                        {caseStudy.campaign_type}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Building2 className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-primary">{caseStudy.client}</span>
                      <span className="text-sm text-gray-500">• {caseStudy.industry}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2" data-testid={`text-case-study-${caseStudy.id}`}>
                      {caseStudy.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {caseStudy.description}
                    </p>
                    
                    {/* Deliverables Summary */}
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Quick Deliverables:</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {caseStudy.deliverables.staffing?.brand_ambassadors && (
                          <li className="flex items-center">
                            <Users className="h-3 w-3 mr-2 text-primary" />
                            {caseStudy.deliverables.staffing.brand_ambassadors} Brand Ambassadors
                          </li>
                        )}
                        {caseStudy.deliverables.sampling?.products_distributed && (
                          <li className="flex items-center">
                            <Package className="h-3 w-3 mr-2 text-primary" />
                            {caseStudy.deliverables.sampling.products_distributed.toLocaleString()} Products Distributed
                          </li>
                        )}
                        {caseStudy.deliverables.sampling?.locations && (
                          <li className="flex items-center">
                            <MapPin className="h-3 w-3 mr-2 text-primary" />
                            {caseStudy.deliverables.sampling.locations} Activation Locations
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    {/* Key Metrics */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center text-gray-600">
                          <TrendingUp className="h-4 w-4 mr-1 text-green-600" />
                          {caseStudy.metrics.roi} ROI
                        </span>
                        <span className="flex items-center text-gray-600">
                          <Eye className="h-4 w-4 mr-1 text-blue-600" />
                          {caseStudy.metrics.impressions}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Button asChild variant="outline" size="sm" data-testid={`button-view-case-study-${caseStudy.id}`}>
                        <Link href={`/projects/case-studies/${caseStudy.id}`}>
                          View All Deliverables
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                      <LinkedInShare 
                        url={`https://airfreshmarketing.com/projects/case-studies/${caseStudy.id}`}
                        title={`${caseStudy.client} Campaign Deliverables`}
                      />
                    </div>
                  </CardContent>
                </Card>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Deliverables Focused */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Megaphone className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Similar Event Staffing Solutions?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your brand activation deliverables, guerrilla marketing logistics, 
            and comprehensive event staffing needs for your next experiential campaign.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" data-testid="button-contact-deliverables">
              <Link href="/contact">
                Request Campaign Deliverables
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20" data-testid="button-download-capabilities">
              <a href="/api/download/capabilities-deck" target="_blank">
                Download Our Capabilities Deck
                <ArrowRight className="h-5 w-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}