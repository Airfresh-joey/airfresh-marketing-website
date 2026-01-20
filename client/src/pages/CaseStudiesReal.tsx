import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import type { CaseStudyReal } from "@shared/schema";
import { format } from "date-fns";
import {
  Calendar,
  MapPin,
  Building2,
  Target,
  ArrowRight,
  Star,
  TrendingUp,
  Award,
  Users,
  Zap
} from "lucide-react";

export default function CaseStudiesReal() {
  const { data: caseStudies = [], isLoading } = useQuery<CaseStudyReal[]>({
    queryKey: ['/api/case-studies-real'],
  });

  // Filter published case studies
  const publishedCaseStudies = caseStudies.filter(cs => cs.status === "published");
  const featuredCaseStudy = publishedCaseStudies.find(cs => cs.featured === "true");
  const regularCaseStudies = publishedCaseStudies.filter(cs => cs.featured !== "true");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Case Studies - AirFresh Marketing",
    "description": "Real success stories from our experiential marketing campaigns",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": publishedCaseStudies.length,
      "itemListElement": publishedCaseStudies.map((cs, index) => ({
        "@type": "CaseStudy",
        "position": index + 1,
        "name": cs.title,
        "client": cs.client,
        "datePublished": cs.date
      }))
    }
  };

  if (isLoading) {
    return (
      <div className="pt-16">
        <SEO 
          title="Case Studies | AirFresh Marketing"
          description="Explore our portfolio of successful experiential marketing campaigns and brand activations."
          canonical="https://airfreshmarketing.com/case-studies"
          structuredData={structuredData}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="space-y-8">
            <Skeleton className="h-12 w-3/4" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Skeleton key={i} className="h-96" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (publishedCaseStudies.length === 0) {
    return (
      <div className="pt-16">
        <SEO 
          title="Case Studies | AirFresh Marketing"
          description="Explore our portfolio of successful experiential marketing campaigns and brand activations."
          canonical="https://airfreshmarketing.com/case-studies"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Studies Coming Soon</h1>
            <p className="text-xl text-gray-600 mb-8">We're currently updating our portfolio with new success stories.</p>
            <Button asChild>
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <SEO 
        title="Case Studies | AirFresh Marketing"
        description="Explore our portfolio of successful experiential marketing campaigns and brand activations."
        canonical="https://airfreshmarketing.com/case-studies"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6" data-testid="text-page-title">
              Our Success Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-page-description">
              Real results from innovative experiential marketing campaigns that create lasting brand connections
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center" data-testid="stat-campaigns">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Campaigns Delivered</div>
            </div>
            <div className="text-center" data-testid="stat-interactions">
              <div className="text-4xl font-bold text-primary mb-2">50M+</div>
              <div className="text-gray-600">Consumer Interactions</div>
            </div>
            <div className="text-center" data-testid="stat-satisfaction">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center" data-testid="stat-brands">
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-gray-600">Brands Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      {featuredCaseStudy && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Badge className="mb-4" data-testid="badge-featured">
                <Star className="h-3 w-3 mr-1" />
                Featured Case Study
              </Badge>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {featuredCaseStudy.featuredImage && (
                  <img 
                    src={featuredCaseStudy.featuredImage.startsWith('http') 
                      ? featuredCaseStudy.featuredImage 
                      : `/public-objects/${featuredCaseStudy.featuredImage}`}
                    alt={featuredCaseStudy.title}
                    className="w-full h-96 object-cover rounded-2xl shadow-xl"
                    data-testid={`img-featured-${featuredCaseStudy.id}`}
                  />
                )}
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid={`text-title-${featuredCaseStudy.id}`}>
                  {featuredCaseStudy.title}
                </h2>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                  <span className="flex items-center" data-testid={`text-client-${featuredCaseStudy.id}`}>
                    <Building2 className="h-4 w-4 mr-1" />
                    {featuredCaseStudy.client}
                  </span>
                  <span className="flex items-center" data-testid={`text-date-${featuredCaseStudy.id}`}>
                    <Calendar className="h-4 w-4 mr-1" />
                    {format(new Date(featuredCaseStudy.date), 'MMMM yyyy')}
                  </span>
                  <span className="flex items-center" data-testid={`text-location-${featuredCaseStudy.id}`}>
                    <MapPin className="h-4 w-4 mr-1" />
                    {featuredCaseStudy.location}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed" data-testid={`text-challenge-${featuredCaseStudy.id}`}>
                  {featuredCaseStudy.challenge}
                </p>
                
                {featuredCaseStudy.metrics && featuredCaseStudy.metrics.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Key Results:</h3>
                    <div className="space-y-2">
                      {featuredCaseStudy.metrics.slice(0, 3).map((metric, index) => (
                        <div key={index} className="flex items-center text-sm" data-testid={`text-metric-${index}`}>
                          <TrendingUp className="h-4 w-4 text-primary mr-2" />
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <Button asChild size="lg" data-testid={`button-view-${featuredCaseStudy.id}`}>
                  <Link href={`/case-studies/${featuredCaseStudy.slug}`}>
                    View Full Case Study
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Case Studies Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Case Studies</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore how we've helped brands create memorable experiences and drive measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularCaseStudies.map((caseStudy) => (
              <Card 
                key={caseStudy.id} 
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
                data-testid={`card-case-study-${caseStudy.id}`}
              >
                {caseStudy.featuredImage && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={caseStudy.featuredImage.startsWith('http') 
                        ? caseStudy.featuredImage 
                        : `/public-objects/${caseStudy.featuredImage}`}
                      alt={caseStudy.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      data-testid={`img-thumbnail-${caseStudy.id}`}
                    />
                  </div>
                )}
                
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2" data-testid={`text-card-title-${caseStudy.id}`}>
                      {caseStudy.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-4">
                      <span className="flex items-center">
                        <Building2 className="h-3 w-3 mr-1" />
                        {caseStudy.client}
                      </span>
                      <span className="flex items-center">
                        <Target className="h-3 w-3 mr-1" />
                        {caseStudy.industry}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 line-clamp-3 mb-4">
                      {caseStudy.challenge}
                    </p>
                    
                    {caseStudy.tags && caseStudy.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {caseStudy.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full"
                    data-testid={`button-read-more-${caseStudy.id}`}
                  >
                    <Link href={`/case-studies/${caseStudy.slug}`}>
                      Read Case Study
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's work together to create an unforgettable experiential marketing campaign for your brand.
          </p>
          <Button size="lg" variant="secondary" asChild data-testid="button-contact-cta">
            <Link href="/contact">
              Start Your Campaign
              <Zap className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}