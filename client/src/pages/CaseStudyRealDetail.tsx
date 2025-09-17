import { useParams, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import SEO from "@/components/SEO";
import type { CaseStudyReal } from "@shared/schema";
import { format } from "date-fns";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Building2,
  Target,
  Lightbulb,
  Zap,
  TrendingUp,
  Award,
  ChevronLeft,
  ChevronRight,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  ExternalLink,
  CheckCircle,
  Eye,
  Users,
  Clock,
  BarChart3
} from "lucide-react";
import { useState } from "react";

export default function CaseStudyRealDetail() {
  const { slug } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Fetch case study by slug
  const { data: caseStudy, isLoading } = useQuery<CaseStudyReal>({
    queryKey: [`/api/case-studies-real/slug/${slug}`],
    enabled: !!slug,
  });
  
  // Fetch all case studies for related section
  const { data: allCaseStudies = [] } = useQuery<CaseStudyReal[]>({
    queryKey: ['/api/case-studies-real'],
  });
  
  // Get related case studies (same industry or campaign type)
  const relatedCaseStudies = allCaseStudies
    .filter(cs => 
      cs.slug !== slug && 
      cs.status === "published" &&
      (cs.industry === caseStudy?.industry || cs.campaignType === caseStudy?.campaignType)
    )
    .slice(0, 3);
  
  if (isLoading) {
    return (
      <div className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Skeleton className="h-12 w-3/4 mb-4" />
          <Skeleton className="h-6 w-1/2 mb-8" />
          <Skeleton className="h-96 w-full mb-8" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </div>
    );
  }
  
  if (!caseStudy) {
    return (
      <div className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
  
  const allImages = [caseStudy.featuredImage, ...(caseStudy.images || [])].filter(Boolean);
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    "name": caseStudy.title,
    "client": caseStudy.client,
    "datePublished": caseStudy.date,
    "location": {
      "@type": "Place",
      "name": caseStudy.location
    },
    "description": caseStudy.challenge,
    "result": caseStudy.results
  };
  
  // Social sharing functions
  const shareUrl = `https://airfreshmarketing.com/case-studies/${caseStudy.slug}`;
  const shareTitle = `${caseStudy.title} - AirFresh Marketing Case Study`;
  
  const handleShare = (platform: string) => {
    const urls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    };
    
    if (urls[platform]) {
      window.open(urls[platform], '_blank', 'width=600,height=400');
    }
  };
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };
  
  return (
    <div className="pt-16">
      <SEO 
        title={`${caseStudy.title} | Case Study`}
        description={caseStudy.challenge}
        canonical={`https://airfreshmarketing.com/case-studies/${caseStudy.slug}`}
        structuredData={structuredData}
      />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm" data-testid="nav-breadcrumb">
            <Link href="/" className="text-gray-600 hover:text-primary">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/projects/case-studies" className="text-gray-600 hover:text-primary">Case Studies</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{caseStudy.client}</span>
          </nav>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          {caseStudy.featuredImage && (
            <img 
              src={caseStudy.featuredImage.startsWith('http') 
                ? caseStudy.featuredImage 
                : `/public-objects/${caseStudy.featuredImage}`}
              alt={caseStudy.title}
              className="w-full h-full object-cover opacity-30"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                {caseStudy.industry}
              </Badge>
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                {caseStudy.campaignType}
              </Badge>
            </div>
            
            <h1 className="text-5xl font-bold mb-6" data-testid="text-hero-title">
              {caseStudy.title}
            </h1>
            
            <div className="flex flex-wrap gap-6 text-white/80 mb-8">
              <span className="flex items-center" data-testid="text-client">
                <Building2 className="h-5 w-5 mr-2" />
                {caseStudy.client}
              </span>
              <span className="flex items-center" data-testid="text-date">
                <Calendar className="h-5 w-5 mr-2" />
                {format(new Date(caseStudy.date), 'MMMM yyyy')}
              </span>
              <span className="flex items-center" data-testid="text-location">
                <MapPin className="h-5 w-5 mr-2" />
                {caseStudy.location}
              </span>
            </div>
            
            {/* Social Sharing */}
            <div className="flex items-center space-x-4">
              <span className="text-white/60 text-sm">Share:</span>
              <button 
                onClick={() => handleShare('facebook')}
                className="text-white/80 hover:text-white transition-colors"
                data-testid="button-share-facebook"
              >
                <Facebook className="h-5 w-5" />
              </button>
              <button 
                onClick={() => handleShare('twitter')}
                className="text-white/80 hover:text-white transition-colors"
                data-testid="button-share-twitter"
              >
                <Twitter className="h-5 w-5" />
              </button>
              <button 
                onClick={() => handleShare('linkedin')}
                className="text-white/80 hover:text-white transition-colors"
                data-testid="button-share-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Story */}
            <div className="lg:col-span-2 space-y-12">
              {/* Challenge Section */}
              <div data-testid="section-challenge">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 rounded-full p-3 mr-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">The Challenge</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {caseStudy.challenge}
                </p>
              </div>
              
              {/* Strategy Section */}
              <div data-testid="section-strategy">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 rounded-full p-3 mr-4">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Strategy</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {caseStudy.strategy}
                </p>
              </div>
              
              {/* Execution Section */}
              <div data-testid="section-execution">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 rounded-full p-3 mr-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">The Execution</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                  {caseStudy.execution}
                </p>
                
                {/* Image Gallery */}
                {allImages.length > 0 && (
                  <div className="relative">
                    <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-gray-100">
                      <img 
                        src={allImages[currentImageIndex].startsWith('http') 
                          ? allImages[currentImageIndex] 
                          : `/public-objects/${allImages[currentImageIndex]}`}
                        alt={`Campaign image ${currentImageIndex + 1}`}
                        className="w-full h-96 object-cover"
                        data-testid={`img-gallery-${currentImageIndex}`}
                      />
                    </div>
                    
                    {allImages.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
                          data-testid="button-prev-image"
                        >
                          <ChevronLeft className="h-6 w-6" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
                          data-testid="button-next-image"
                        >
                          <ChevronRight className="h-6 w-6" />
                        </button>
                        
                        <div className="flex justify-center mt-4 space-x-2">
                          {allImages.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`w-2 h-2 rounded-full transition-colors ${
                                index === currentImageIndex ? 'bg-primary' : 'bg-gray-300'
                              }`}
                              data-testid={`button-dot-${index}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
              
              {/* Results Section */}
              <div data-testid="section-results">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 rounded-full p-3 mr-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">The Results</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {caseStudy.results}
                </p>
              </div>
              
              {/* Key Takeaways */}
              {caseStudy.keyTakeaways && caseStudy.keyTakeaways.length > 0 && (
                <div className="bg-gradient-to-br from-primary/5 to-white rounded-2xl p-8" data-testid="section-takeaways">
                  <div className="flex items-center mb-6">
                    <div className="bg-primary/10 rounded-full p-3 mr-4">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Key Takeaways</h2>
                  </div>
                  <ul className="space-y-3">
                    {caseStudy.keyTakeaways.map((takeaway, index) => (
                      <li key={index} className="flex items-start" data-testid={`text-takeaway-${index}`}>
                        <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Metrics Card */}
                {caseStudy.metrics && caseStudy.metrics.length > 0 && (
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                        <BarChart3 className="h-5 w-5 mr-2 text-primary" />
                        Campaign Metrics
                      </h3>
                      <div className="space-y-4">
                        {caseStudy.metrics.map((metric, index) => (
                          <div key={index} className="border-l-4 border-primary pl-4" data-testid={`text-metric-${index}`}>
                            <p className="text-sm text-gray-700">{metric}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
                
                {/* Tags */}
                {caseStudy.tags && caseStudy.tags.length > 0 && (
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-4">Related Topics</h3>
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" data-testid={`badge-tag-${index}`}>
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
                
                {/* CTA Card */}
                <Card className="bg-primary text-white">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3">Ready to create your success story?</h3>
                    <p className="text-white/90 mb-4 text-sm">
                      Let's discuss how we can help elevate your brand through experiential marketing.
                    </p>
                    <Button variant="secondary" asChild className="w-full" data-testid="button-sidebar-cta">
                      <Link href="/contact">
                        Get Started
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Case Studies */}
      {relatedCaseStudies.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedCaseStudies.map((related) => (
                <Card key={related.id} className="hover:shadow-lg transition-shadow" data-testid={`card-related-${related.id}`}>
                  {related.featuredImage && (
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={related.featuredImage.startsWith('http') 
                          ? related.featuredImage 
                          : `/public-objects/${related.featuredImage}`}
                        alt={related.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">{related.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{related.challenge}</p>
                    <Button variant="outline" asChild className="w-full" data-testid={`button-related-${related.id}`}>
                      <Link href={`/case-studies/${related.slug}`}>
                        View Case Study
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}