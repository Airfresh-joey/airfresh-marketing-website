import { useParams, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import GoogleDriveImage from "@/components/GoogleDriveImage";
import SEO from "@/components/SEO";
import { 
  ArrowLeft, 
  Briefcase, 
  Target, 
  Calendar,
  MapPin,
  Package,
  Award,
  CheckCircle,
  ExternalLink,
  Users,
  TrendingUp,
  FileText,
  Folder,
  Image as ImageIcon
} from "lucide-react";

// Interface for case studies with Google Drive images from Notion
interface CaseStudyWithImages {
  id: string;
  title: string;
  client: string;
  industry: string;
  campaign_type: string;
  description: string;
  results: string;
  what_we_did: string;
  services_provided: string[];
  markets: string[];
  product_offering: string;
  google_drive_folder: string;
  assets_folder: string;
  notion_url: string;
  image_url: string;
  has_real_assets: boolean;
  google_drive_images: string[];
  date: string;
  status: string;
}

export default function NotionCaseStudyDetail() {
  const { id } = useParams();

  // Fetch individual case study
  const { data: caseStudy, isLoading, error } = useQuery<CaseStudyWithImages>({
    queryKey: ['/api/case-studies', id],
    queryFn: async () => {
      const response = await fetch(`/api/case-studies/${id}`);
      if (!response.ok) throw new Error('Failed to fetch case study');
      return response.json();
    },
    enabled: !!id,
  });

  const structuredData = caseStudy ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": caseStudy.title,
    "description": caseStudy.description,
    "datePublished": caseStudy.date,
    "author": {
      "@type": "Organization",
      "name": "AirFresh Marketing"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AirFresh Marketing",
      "logo": {
        "@type": "ImageObject",
        "url": "https://airfreshmarketing.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://airfreshmarketing.com/notion-case-studies/${caseStudy.id}`
    }
  } : undefined;

  if (error) {
    return (
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Case Study</h2>
            <p className="text-gray-600 mb-8">Unable to fetch case study details. Please try again later.</p>
            <Link href="/notion-case-studies">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="mb-8">
            <Skeleton className="h-10 w-32" />
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Skeleton className="h-96 w-full mb-8" />
              <Skeleton className="h-8 w-3/4 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-5/6" />
            </div>
            <div>
              <Skeleton className="h-64 w-full" />
            </div>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Case Study Not Found</h2>
            <p className="text-gray-600 mb-8">The case study you're looking for doesn't exist.</p>
            <Link href="/notion-case-studies">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <SEO
        title={`${caseStudy.title} | Notion Case Study`}
        description={caseStudy.description}
        keywords={`${caseStudy.client}, ${caseStudy.industry}, ${caseStudy.campaign_type}, experiential marketing case study`}
        pageType="article"
        canonical={`https://airfreshmarketing.com/notion-case-studies/${caseStudy.id}`}
        structuredData={structuredData}
      />

      {/* Back Button */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/notion-case-studies">
            <Button variant="outline" data-testid="button-back">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Button>
          </Link>
        </div>
      </section>

      {/* Hero Section with Main Image */}
      <section className="bg-gradient-to-br from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="text-case-study-title">
                {caseStudy.title}
              </h1>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {caseStudy.has_real_assets && (
                  <Badge className="bg-green-600 text-white">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Real Client Assets
                  </Badge>
                )}
                <Badge variant="outline">
                  <Briefcase className="h-4 w-4 mr-1" />
                  {caseStudy.industry}
                </Badge>
                <Badge variant="outline">
                  <Target className="h-4 w-4 mr-1" />
                  {caseStudy.campaign_type}
                </Badge>
                <Badge variant="outline">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(caseStudy.date).toLocaleDateString('en-US', { 
                    month: 'long', 
                    year: 'numeric' 
                  })}
                </Badge>
              </div>

              <p className="text-lg text-gray-600 mb-8">
                {caseStudy.description}
              </p>

              {/* External Links */}
              <div className="flex flex-wrap gap-4">
                {caseStudy.notion_url && (
                  <a 
                    href={caseStudy.notion_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    <FileText className="h-4 w-4 mr-1" />
                    View in Notion
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                )}
                {caseStudy.google_drive_folder && (
                  <a 
                    href={caseStudy.google_drive_folder} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    <Folder className="h-4 w-4 mr-1" />
                    View Assets Folder
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                )}
              </div>
            </div>

            {/* Main Image */}
            <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
              {caseStudy.has_real_assets && caseStudy.google_drive_images.length > 0 ? (
                <GoogleDriveImage
                  src={caseStudy.google_drive_images[0]}
                  alt={`${caseStudy.title} main campaign image`}
                  className="w-full h-full object-cover"
                  fallbackSrc={caseStudy.image_url}
                  driveUrl={caseStudy.google_drive_folder}
                />
              ) : (
                <img
                  src={caseStudy.image_url}
                  alt={`${caseStudy.title} main campaign image`}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2">
              {/* What We Did Section */}
              {caseStudy.what_we_did && (
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="h-5 w-5 mr-2 text-primary" />
                      What We Did
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{caseStudy.what_we_did}</p>
                  </CardContent>
                </Card>
              )}

              {/* Results Section */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                    Campaign Results
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{caseStudy.results}</p>
                </CardContent>
              </Card>

              {/* Services Provided */}
              {caseStudy.services_provided.length > 0 && (
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Package className="h-5 w-5 mr-2 text-primary" />
                      Services Provided
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {caseStudy.services_provided.map((service, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{service}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Image Gallery */}
              {caseStudy.google_drive_images.length > 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <ImageIcon className="h-5 w-5 mr-2 text-primary" />
                      Campaign Gallery ({caseStudy.google_drive_images.length} Images)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {caseStudy.google_drive_images.slice(1).map((imageUrl, idx) => (
                        <div key={idx} className="relative h-64 rounded-lg overflow-hidden group">
                          <GoogleDriveImage
                            src={imageUrl}
                            alt={`${caseStudy.title} campaign image ${idx + 2}`}
                            className="w-full h-full object-cover"
                            fallbackSrc={caseStudy.image_url}
                            driveUrl={caseStudy.google_drive_folder}
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Campaign Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Campaign Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-1">Client</p>
                    <p className="text-gray-900">{caseStudy.client}</p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-1">Industry</p>
                    <p className="text-gray-900">{caseStudy.industry}</p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-1">Campaign Type</p>
                    <p className="text-gray-900">{caseStudy.campaign_type}</p>
                  </div>
                  
                  {caseStudy.product_offering && (
                    <>
                      <Separator />
                      <div>
                        <p className="text-sm font-semibold text-gray-500 mb-1">Product Focus</p>
                        <p className="text-gray-900">{caseStudy.product_offering}</p>
                      </div>
                    </>
                  )}
                  
                  <Separator />
                  
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-1">Date</p>
                    <p className="text-gray-900">
                      {new Date(caseStudy.date).toLocaleDateString('en-US', { 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Markets */}
              {caseStudy.markets.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-primary" />
                      Markets Covered
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.markets.map((market, idx) => (
                        <Badge key={idx} variant="secondary">
                          {market}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Assets Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Folder className="h-5 w-5 mr-2 text-primary" />
                    Assets & Resources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      {caseStudy.has_real_assets ? (
                        <>
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                          <span className="text-sm text-gray-700">Real client assets available</span>
                        </>
                      ) : (
                        <>
                          <ImageIcon className="h-5 w-5 text-gray-400 mr-2" />
                          <span className="text-sm text-gray-500">Stock images used</span>
                        </>
                      )}
                    </div>
                    
                    {caseStudy.google_drive_images.length > 0 && (
                      <div className="flex items-center">
                        <ImageIcon className="h-5 w-5 text-blue-600 mr-2" />
                        <span className="text-sm text-gray-700">
                          {caseStudy.google_drive_images.length} campaign images
                        </span>
                      </div>
                    )}
                    
                    {caseStudy.google_drive_folder && (
                      <a 
                        href={caseStudy.google_drive_folder}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-primary hover:underline"
                      >
                        <Folder className="h-5 w-5 mr-2" />
                        View full assets folder
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Call to Action */}
              <Card className="bg-primary text-white">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Ready to Create Your Success Story?</h3>
                  <p className="mb-6 text-white/90">
                    Let's discuss how we can help you achieve similar results for your brand.
                  </p>
                  <Link href="/contact">
                    <Button variant="secondary" className="w-full">
                      Get Started
                      <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}