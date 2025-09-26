import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import GoogleDriveImage from "@/components/GoogleDriveImage";
import SEO from "@/components/SEO";
import { 
  ArrowRight, 
  Calendar, 
  Briefcase, 
  MapPin, 
  Award,
  Package,
  Users,
  Target,
  CheckCircle
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

export default function NotionCaseStudies() {
  // Fetch case studies from the API endpoint that gets Notion data
  const { data: caseStudies = [], isLoading, error } = useQuery<CaseStudyWithImages[]>({
    queryKey: ['/api/case-studies'],
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Notion Case Studies Portfolio",
    "description": "Real case studies from our Notion database showcasing successful experiential marketing campaigns with actual client assets",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": caseStudies.length,
      "itemListElement": caseStudies.map((cs, index) => ({
        "@type": "CreativeWork",
        "position": index + 1,
        "name": cs.title,
        "description": cs.description,
        "author": {
          "@type": "Organization",
          "name": "AirFresh Marketing"
        }
      }))
    }
  };

  if (error) {
    return (
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Case Studies</h2>
            <p className="text-gray-600">Unable to fetch case studies. Please try again later.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <SEO
        title="Case Studies Portfolio | Real Client Campaign Results"
        description="Explore our real case studies showcasing successful brand activations, product sampling, and experiential marketing campaigns with actual client assets."
        keywords="case studies, real campaign results, client assets, brand activation portfolio, experiential marketing case studies"
        pageType="case-studies"
        canonical="https://airfreshmarketing.com/case-studies"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="text-page-title">
              <span className="text-primary">Case Studies</span> Portfolio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-page-description">
              Real campaign results showcasing our successful brand activations. Explore detailed case studies 
              with actual client assets, campaign imagery, and comprehensive deliverables.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {caseStudies.length}
              </div>
              <div className="text-gray-600 font-medium">Total Case Studies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {caseStudies.filter(cs => cs.has_real_assets).length}
              </div>
              <div className="text-gray-600 font-medium">With Real Assets</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {Array.from(new Set(caseStudies.map(cs => cs.industry))).length}
              </div>
              <div className="text-gray-600 font-medium">Industries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {Array.from(new Set(caseStudies.flatMap(cs => cs.services_provided))).length}
              </div>
              <div className="text-gray-600 font-medium">Service Types</div>
            </div>
          </div>
        </div>
      </section>

      {/* Loading State */}
      {isLoading && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="overflow-hidden">
                  <Skeleton className="h-64 w-full" />
                  <CardHeader>
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/2" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-5/6" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Studies Grid */}
      {!isLoading && caseStudies.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((caseStudy) => (
                <Card 
                  key={caseStudy.id} 
                  className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                  data-testid={`card-case-study-${caseStudy.id}`}
                >
                  <div className="relative h-64 overflow-hidden">
                    {caseStudy.has_real_assets && caseStudy.google_drive_images.length > 0 ? (
                      <GoogleDriveImage
                        src={caseStudy.google_drive_images[0]}
                        alt={`${caseStudy.title} campaign`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        fallbackSrc={caseStudy.image_url}
                        driveUrl={caseStudy.google_drive_folder}
                      />
                    ) : (
                      <img
                        src={caseStudy.image_url}
                        alt={`${caseStudy.title} campaign`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                    
                    {/* Badge for real assets */}
                    {caseStudy.has_real_assets && (
                      <Badge className="absolute top-4 left-4 bg-green-600 text-white">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Real Assets
                      </Badge>
                    )}

                    {/* Image count badge if multiple images */}
                    {caseStudy.google_drive_images.length > 1 && (
                      <Badge variant="secondary" className="absolute top-4 right-4">
                        {caseStudy.google_drive_images.length} Images
                      </Badge>
                    )}
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl">{caseStudy.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="outline">
                        <Briefcase className="h-3 w-3 mr-1" />
                        {caseStudy.industry}
                      </Badge>
                      <Badge variant="outline">
                        <Target className="h-3 w-3 mr-1" />
                        {caseStudy.campaign_type}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {caseStudy.description}
                    </p>

                    {/* Services Provided */}
                    {caseStudy.services_provided.length > 0 && (
                      <div className="mb-4">
                        <p className="text-sm font-semibold mb-2 flex items-center">
                          <Package className="h-4 w-4 mr-1" />
                          Services:
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {caseStudy.services_provided.slice(0, 3).map((service, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {service}
                            </Badge>
                          ))}
                          {caseStudy.services_provided.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{caseStudy.services_provided.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Markets */}
                    {caseStudy.markets.length > 0 && (
                      <div className="mb-4">
                        <p className="text-sm font-semibold mb-2 flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          Markets:
                        </p>
                        <p className="text-sm text-gray-600">
                          {caseStudy.markets.slice(0, 2).join(', ')}
                          {caseStudy.markets.length > 2 && ` +${caseStudy.markets.length - 2} more`}
                        </p>
                      </div>
                    )}

                    {/* Date */}
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(caseStudy.date).toLocaleDateString('en-US', { 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </div>

                    <Link href={`/notion-case-studies/${caseStudy.id}`}>
                      <Button className="w-full" data-testid={`button-view-${caseStudy.id}`}>
                        View Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty State */}
      {!isLoading && caseStudies.length === 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">No Case Studies Available</h2>
              <p className="text-gray-600">Check back later for updated case studies from our portfolio.</p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}