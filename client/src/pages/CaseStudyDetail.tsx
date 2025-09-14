import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import CaseStudyImage from "@/components/CaseStudyImage";
import VideoPlayer from "@/components/ui/video-player";
import type { CaseStudy } from "@shared/schema";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Award,
  TrendingUp,
  Users,
  Target,
  ExternalLink,
  Play,
  Image as ImageIcon,
  FileText,
  Building2,
  Lightbulb,
  Zap,
  Star
} from "lucide-react";
import LinkedInShare from "@/components/LinkedInShare";

export default function CaseStudyDetail() {
  const { id } = useParams();

  // Fetch all case studies and find the specific one
  const { data: caseStudies = [], isLoading, error } = useQuery<CaseStudy[]>({
    queryKey: ['/api/case-studies'],
  });

  const caseStudy = caseStudies.find(cs => cs.id === id);

  if (isLoading) {
    return (
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading case study...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!caseStudy) {
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    "name": caseStudy.title,
    "description": caseStudy.description,
    "author": {
      "@type": "Organization",
      "name": "AirFresh Marketing"
    },
    "datePublished": caseStudy.date,
    "industry": caseStudy.industry,
    "result": caseStudy.results
  };

  return (
    <div className="pt-16">
      <SEO 
        title={`${caseStudy.title} | ${caseStudy.campaign_type} Case Study - AirFresh`}
        description={`${caseStudy.client} ${caseStudy.campaign_type.toLowerCase()} case study. ${caseStudy.description?.slice(0, 100)}... See results & insights.`}
        keywords={`${caseStudy.client}, ${caseStudy.industry}, ${caseStudy.campaign_type}, experiential marketing case study, brand activation results, guerrilla marketing success`}
        canonical={`https://airfreshmarketing.com/projects/case-studies/${caseStudy.id}`}
        structuredData={structuredData}
      />

      {/* Hero Section with Large Image */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Button asChild variant="ghost" size="sm" className="text-primary hover:text-primary/90 p-0">
                  <Link href="/projects/case-studies">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Case Studies
                  </Link>
                </Button>
              </div>
              
              <Badge variant="secondary" className="mb-4 text-sm">
                {caseStudy.campaign_type}
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {caseStudy.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-600">
                <div className="flex items-center">
                  <Building2 className="h-5 w-5 mr-2 text-primary" />
                  <span className="font-medium">{caseStudy.client}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  <span>{caseStudy.industry}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  <span>{new Date(caseStudy.date).toLocaleDateString('en-US', { 
                    month: 'long', 
                    year: 'numeric' 
                  })}</span>
                </div>
              </div>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                {caseStudy.description}
              </p>

              <div className="mb-6">
                <LinkedInShare 
                  variant="button"
                  title={`${caseStudy.client} Success Story: ${caseStudy.title}`}
                  summary={`Discover how AirFresh Marketing helped ${caseStudy.client} achieve remarkable results through ${caseStudy.campaign_type}. ${caseStudy.description}`}
                />
              </div>

              {caseStudy.has_real_assets && (
                <div className="flex gap-4">
                  {caseStudy.assets_folder && (
                    <Button 
                      asChild 
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                    >
                      <a 
                        href={caseStudy.assets_folder} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ImageIcon className="h-5 w-5" />
                        View Project Assets
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  
                  {caseStudy.notion_url && (
                    <Button 
                      asChild 
                      variant="outline"
                      size="lg"
                      className="border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      <a 
                        href={caseStudy.notion_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <FileText className="h-5 w-5" />
                        Full Project Details
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
<CaseStudyImage
                  src={caseStudy.image_url}
                  alt={caseStudy.title}
                  client={caseStudy.client}
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                {caseStudy.has_real_assets && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-500 hover:bg-green-600 text-white">
                      <ImageIcon className="h-3 w-3 mr-1" />
                      Real Project Assets
                    </Badge>
                  </div>
                )}
              </div>
              
              {/* Floating elements for visual appeal */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full blur-sm animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-400/20 rounded-full blur-sm animate-bounce"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-green-400/30 rounded-full blur-sm animate-ping"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Did Section - Enhanced */}
      {caseStudy.what_we_did && (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                What We Delivered
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto"></div>
            </div>
            
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50/50 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <CardContent className="p-12">
                <div className="prose prose-lg max-w-none">
                  <div className="text-xl leading-relaxed text-gray-700 space-y-6">
                    {caseStudy.what_we_did.split('.').map((sentence, index) => (
                      sentence.trim() && (
                        <div key={index} className="flex items-start gap-4 group">
                          <div className="flex-shrink-0 w-3 h-3 bg-gradient-to-br from-primary to-blue-600 rounded-full mt-3 group-hover:scale-125 transition-transform duration-300"></div>
                          <p className="text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-300">{sentence.trim()}.</p>
                        </div>
                      )
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Services & Markets Grid */}
      {(caseStudy.services_provided.length > 0 || caseStudy.markets.length > 0) && (
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Services Provided */}
              {caseStudy.services_provided.length > 0 && (
                <Card className="border-0 shadow-xl bg-gradient-to-br from-primary/5 to-blue-50">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                        <Zap className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Services Provided</h3>
                    </div>
                    <div className="space-y-3">
                      {caseStudy.services_provided.map((service, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <Star className="h-4 w-4 text-primary fill-current" />
                          <span className="text-gray-700 font-medium">{service}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Markets */}
              {caseStudy.markets.length > 0 && (
                <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-emerald-50">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                        <MapPin className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Markets Covered</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {caseStudy.markets.map((market, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700 font-medium">{market}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Results Section - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Campaign Results
            </h2>
            <div className="w-24 h-1 bg-white/30 mx-auto"></div>
          </div>
          
          <Card className="border-0 shadow-2xl bg-white/10 backdrop-blur-sm">
            <CardContent className="p-12">
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-xl leading-relaxed text-white/90">
                  {caseStudy.results}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Product Offering */}
      {caseStudy.product_offering && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-primary mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Product Focus</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {caseStudy.product_offering}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how we can deliver similar results for your brand with a custom experiential marketing campaign.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Start Your Campaign</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              <Link href="/projects/case-studies">View More Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}