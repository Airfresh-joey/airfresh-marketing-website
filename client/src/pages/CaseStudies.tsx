import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import SEO from "@/components/SEO";
import CaseStudyImage from "@/components/CaseStudyImage";
import type { CaseStudy } from "@shared/schema";
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
  DollarSign
} from "lucide-react";
import LinkedInShare from "@/components/LinkedInShare";


export default function CaseStudies() {
  // Structured data for better SEO and LLM understanding
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Experiential Marketing Case Studies",
    "description": "Success stories and case studies from AirFresh Marketing's experiential marketing campaigns",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": "500+",
      "itemListElement": [
        {
          "@type": "CaseStudy",
          "name": "Brand Activation Case Studies",
          "description": "Real results from brand activation campaigns across multiple industries"
        },
        {
          "@type": "CaseStudy",
          "name": "Product Sampling Success Stories", 
          "description": "Measurable outcomes from product sampling and trial campaigns"
        },
        {
          "@type": "CaseStudy",
          "name": "Corporate Event Case Studies",
          "description": "Successful corporate events and experiential marketing activations"
        }
      ]
    }
  };

  // Fetch case studies from API
  const { data: caseStudies = [], isLoading, error } = useQuery<CaseStudy[]>({
    queryKey: ['/api/case-studies'],
  });


  // Get featured case study (first one)
  const featuredCaseStudy = caseStudies[0];

  // Get remaining case studies for grid
  const gridCaseStudies = caseStudies.slice(1);

  if (isLoading) {
    return (
      <div className="pt-16">
        <SEO 
          title="Experiential Marketing Case Studies | Guerrilla Marketing Success Stories"
          description="500+ proven experiential marketing case studies. Brand activation results, guerrilla marketing campaigns & event staffing success stories from 300+ brands."
          pageType="case-studies"
          canonical="https://airfreshmarketing.com/projects/case-studies"
          structuredData={structuredData}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading case studies...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-primary">Success Stories</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped leading brands create unforgettable experiences that drive measurable results through strategic experiential marketing campaigns.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600 font-medium">Campaigns Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50M+</div>
              <div className="text-gray-600 font-medium">Consumer Interactions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-gray-600 font-medium">Global Brands Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      {featuredCaseStudy && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">FEATURED SUCCESS STORY</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Driving Results Through Experience</h3>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="lg:grid lg:grid-cols-2">
                <div className="relative">
                  <img 
                    src={featuredCaseStudy.image_url} 
                    alt={featuredCaseStudy.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="mb-6">
                    <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {featuredCaseStudy.title}
                    </h4>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Building2 className="h-4 w-4 mr-1" />
                        {featuredCaseStudy.client}
                      </div>
                      <div className="flex items-center">
                        <Target className="h-4 w-4 mr-1" />
                        {featuredCaseStudy.industry}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {featuredCaseStudy.campaign_type}
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {featuredCaseStudy.description}
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <LinkedInShare 
                      variant="button"
                      title={`Success Story: ${featuredCaseStudy.title}`}
                      summary={`${featuredCaseStudy.client} achieved incredible results through our ${featuredCaseStudy.campaign_type} campaign. ${featuredCaseStudy.description}`}
                    />
                  </div>

                  {featuredCaseStudy.results && (
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-900 mb-3">Key Results:</h5>
                      <p className="text-gray-600 leading-relaxed">
                        {featuredCaseStudy.results}
                      </p>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(featuredCaseStudy.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Award className="h-4 w-4 mr-2" />
                      Campaign Complete
                    </div>
                  </div>

                  <Button asChild className="w-full lg:w-auto">
                    <Link href="/contact">Start Your Campaign</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Case Studies Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">More Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of successful experiential marketing campaigns across various industries and markets.
            </p>
          </div>

          {gridCaseStudies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridCaseStudies.map((caseStudy) => (
                <Card key={caseStudy.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative">
<CaseStudyImage
                      src={caseStudy.image_url}
                      alt={caseStudy.title}
                      client={caseStudy.client}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-primary px-2 py-1 rounded text-xs font-semibold">
                        {caseStudy.campaign_type}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {caseStudy.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <Building2 className="h-3 w-3 mr-1" />
                        <span>{caseStudy.client}</span>
                        <span className="mx-2">•</span>
                        <span>{caseStudy.industry}</span>
                      </div>
                      <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                        {caseStudy.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-xs text-gray-500">
                        <MapPin className="h-3 w-3 mr-1" />
                        {caseStudy.industry}
                      </div>
                      {caseStudy.has_real_assets && (
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                          📁 Real Assets
                        </span>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button asChild variant="ghost" size="sm" className="text-primary hover:text-primary/90 flex-1">
                        <Link href={`/projects/case-studies/${caseStudy.id}`}>
                          Learn More <ArrowRight className="h-3 w-3 ml-1" />
                        </Link>
                      </Button>
                      {caseStudy.assets_folder && (
                        <Button 
                          asChild 
                          variant="outline" 
                          size="sm"
                          className="text-blue-600 border-blue-600 hover:bg-blue-50"
                        >
                          <a 
                            href={caseStudy.assets_folder} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            📸
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <BarChart3 className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Case Studies Yet</h3>
              <p className="text-gray-600 mb-6">
                We're working on connecting to our case studies database. Check back soon for amazing success stories!
              </p>
              <Button asChild>
                <Link href="/contact">Discuss Your Project</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Let's collaborate to design an experiential marketing campaign that drives real results for your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-primary border-white hover:bg-white">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}