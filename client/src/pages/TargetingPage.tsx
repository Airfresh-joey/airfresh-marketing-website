import { useRoute } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Users, 
  TrendingUp, 
  Award, 
  CheckCircle, 
  ArrowRight,
  MapPin,
  Phone,
  Calendar,
  Building,
  Briefcase,
  Trophy
} from "lucide-react";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import ContactForm from "@/components/ContactForm";
import { Link } from "wouter";
import { 
  breadcrumbSchema,
  cityLocalBusinessSchema,
  webPageSchema,
  organizationSchema 
} from "@/lib/structured-data";

interface TargetingData {
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  challenges: string[];
  solutions: {
    title: string;
    description: string;
  }[];
  deliverables: string[];
  metrics: {
    metric: string;
    description: string;
  }[];
  keywords: string[];
  relatedCaseStudies?: string[];
  citySpecific?: {
    title: string;
    description: string;
  };
  city?: any;
}

export default function TargetingPage() {
  const [matchType, paramsType] = useRoute("/:type/:slug");
  const [matchTypeCity, paramsTypeCity] = useRoute("/:type/:slug/:city");
  
  const isMatch = matchType || matchTypeCity;
  const type = paramsType?.type || paramsTypeCity?.type;
  const slug = paramsType?.slug || paramsTypeCity?.slug;
  const city = paramsTypeCity?.city;
  
  // Fetch targeting data
  const { data: targetingData, isLoading, error } = useQuery<TargetingData>({
    queryKey: ['/api/targeting', type, slug, city],
    queryFn: async () => {
      const url = city 
        ? `/api/targeting/${type}/${slug}/${city}`
        : `/api/targeting/${type}/${slug}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch targeting data');
      return response.json();
    },
    enabled: !!type && !!slug
  });

  // Add structured data for SEO
  useEffect(() => {
    if (!targetingData) return;
    
    const scripts: HTMLScriptElement[] = [];
    
    // Create breadcrumb items
    const breadcrumbItems = [
      { name: "Home", url: "https://airfreshmarketing.com" },
      { 
        name: type === 'verticals' ? 'Industries' : 
              type === 'conventions' ? 'Conventions' :
              type === 'events' ? 'Events' : 'Sports',
        url: `https://airfreshmarketing.com/${type}`
      },
      { 
        name: targetingData.name, 
        url: `https://airfreshmarketing.com/${type}/${slug}` 
      }
    ];
    
    if (city && targetingData.city) {
      breadcrumbItems.push({
        name: targetingData.city.city,
        url: `https://airfreshmarketing.com/${type}/${slug}/${city}`
      });
    }
    
    // Add breadcrumb schema
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.text = JSON.stringify(breadcrumbSchema(breadcrumbItems));
    document.head.appendChild(breadcrumbScript);
    scripts.push(breadcrumbScript);
    
    // Add LocalBusiness schema for city-specific pages
    if (city && targetingData.city) {
      const localBusinessScript = document.createElement('script');
      localBusinessScript.type = 'application/ld+json';
      const cityBusinessData = {
        ...targetingData.city,
        businessName: `AirFresh Marketing - ${targetingData.name} - ${targetingData.city.city}`,
        website: `https://airfreshmarketing.com/${type}/${slug}/${city}`,
        description: `${targetingData.metaDescription} Serving ${targetingData.city.city} and surrounding areas with professional ${targetingData.name.toLowerCase()} services.`
      };
      localBusinessScript.text = JSON.stringify(cityLocalBusinessSchema(cityBusinessData));
      document.head.appendChild(localBusinessScript);
      scripts.push(localBusinessScript);
    }
    
    // Add WebPage schema
    const webPageScript = document.createElement('script');
    webPageScript.type = 'application/ld+json';
    const pageUrl = city 
      ? `https://airfreshmarketing.com/${type}/${slug}/${city}`
      : `https://airfreshmarketing.com/${type}/${slug}`;
    const pageTitle = city && targetingData.citySpecific
      ? targetingData.citySpecific.title
      : targetingData.title;
    const pageDescription = city && targetingData.citySpecific
      ? targetingData.citySpecific.description
      : targetingData.metaDescription;
      
    webPageScript.text = JSON.stringify(webPageSchema({
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      type: 'WebPage'
    }));
    document.head.appendChild(webPageScript);
    scripts.push(webPageScript);
    
    // Add Organization schema
    const orgScript = document.createElement('script');
    orgScript.type = 'application/ld+json';
    orgScript.text = JSON.stringify(organizationSchema);
    document.head.appendChild(orgScript);
    scripts.push(orgScript);
    
    return () => {
      scripts.forEach(script => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      });
    };
  }, [targetingData, type, slug, city]);

  if (!isMatch) return null;
  if (isLoading) return <div className="container mx-auto py-12">Loading...</div>;
  if (error || !targetingData) return <div className="container mx-auto py-12">Page not found</div>;

  const pageTitle = city && targetingData.citySpecific 
    ? targetingData.citySpecific.title 
    : targetingData.heroTitle;
    
  const pageDescription = city && targetingData.citySpecific
    ? targetingData.citySpecific.description
    : targetingData.heroSubtitle;

  return (
    <>
      <SEO
        title={targetingData.title}
        description={targetingData.metaDescription}
        keywords={targetingData.keywords.join(', ')}
        canonical={`https://airfreshmarketing.com/${type}/${slug}${city ? `/${city}` : ''}`}
      />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumbs */}
            <nav className="flex justify-center mb-6" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link href="/" className="text-gray-200 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2">/</span>
                    <Link 
                      href={`/${type}`} 
                      className="text-gray-200 hover:text-white capitalize"
                    >
                      {type}
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2">/</span>
                    <span className="text-white font-medium">
                      {targetingData.name}
                    </span>
                  </div>
                </li>
                {city && targetingData.city && (
                  <li>
                    <div className="flex items-center">
                      <span className="mx-2">/</span>
                      <span className="text-white font-medium">
                        {targetingData.city.city}
                      </span>
                    </div>
                  </li>
                )}
              </ol>
            </nav>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {pageTitle}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              {pageDescription}
            </p>
            
            {/* City-specific info */}
            {city && targetingData.city && (
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-8 inline-flex items-center gap-4">
                <MapPin className="h-5 w-5" />
                <span className="font-medium">
                  {targetingData.city.address}, {targetingData.city.city}, {targetingData.city.state}
                </span>
                <span className="text-gray-200">|</span>
                <Phone className="h-5 w-5" />
                <span>{targetingData.city.phone}</span>
              </div>
            )}
            
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
                asChild
              >
                <a href="#contact">Get Started</a>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href="/projects/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {targetingData.metrics.map((metric, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {metric.metric}
                  </div>
                  <p className="text-sm text-gray-600">
                    {metric.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="challenges" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="challenges">Industry Challenges</TabsTrigger>
              <TabsTrigger value="solutions">Our Solutions</TabsTrigger>
            </TabsList>
            
            <TabsContent value="challenges" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-6 w-6 text-blue-600" />
                    Common Challenges We Solve
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {targetingData.challenges.map((challenge, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="bg-red-100 rounded-full p-1 mt-1">
                          <span className="block w-2 h-2 bg-red-500 rounded-full" />
                        </div>
                        <p className="text-gray-700">{challenge}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="solutions" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {targetingData.solutions.map((solution, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        {solution.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{solution.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What We Deliver</h2>
              <p className="text-xl text-gray-600">
                Comprehensive services tailored for {targetingData.name}
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {targetingData.deliverables.map((deliverable, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{deliverable}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas (for city-specific pages) */}
      {city && targetingData.city && targetingData.city.serviceAreas && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                Service Areas in {targetingData.city.city} Region
              </h2>
              <div className="flex flex-wrap gap-2 justify-center">
                {targetingData.city.serviceAreas.map((area: string, index: number) => (
                  <Badge key={index} variant="secondary" className="text-base px-4 py-2">
                    {area}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose AirFresh - Enhanced Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Why Choose AirFresh for {targetingData.name}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                With over a decade of experience in experiential marketing and brand activations,
                AirFresh Marketing has established itself as the premier partner for {targetingData.name.toLowerCase()} campaigns.
                Our comprehensive approach combines strategic planning, creative execution, and measurable results
                to deliver exceptional value for our clients.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <Users className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>Expert Teams</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our specialized professionals bring deep industry knowledge and hands-on experience
                    to every {targetingData.name.toLowerCase()} campaign. With dedicated account managers,
                    creative directors, and field teams, we ensure flawless execution from concept to completion.
                    Our team members are continuously trained on the latest industry trends and best practices,
                    guaranteeing cutting-edge solutions for your brand.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-green-600 mb-4" />
                  <CardTitle>Proven Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our track record speaks for itself with hundreds of successful campaigns delivering
                    measurable ROI for Fortune 500 companies and emerging brands alike. We leverage
                    data-driven insights and real-time analytics to optimize performance and exceed KPIs.
                    Every campaign is backed by comprehensive reporting that demonstrates clear value
                    and actionable insights for future initiatives.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Award className="h-12 w-12 text-purple-600 mb-4" />
                  <CardTitle>Full Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    From initial strategy development through post-campaign analysis, we provide
                    end-to-end campaign management that simplifies execution for our clients.
                    Our full-service approach includes creative development, logistics coordination,
                    talent management, permit acquisition, and detailed performance reporting,
                    ensuring seamless execution at every touchpoint.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Additional content for SEO */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Our Commitment to Excellence in {targetingData.name}
              </h3>
              <p className="text-gray-700 mb-4">
                At AirFresh Marketing, we understand that successful {targetingData.name.toLowerCase()} campaigns
                require more than just execution – they demand strategic insight, creative innovation, and
                meticulous attention to detail. Our team works closely with each client to understand their
                unique objectives, target audience, and brand values, crafting customized solutions that
                resonate with consumers and drive meaningful engagement.
              </p>
              <p className="text-gray-700 mb-4">
                Whether you're launching a new product, entering a new market, or strengthening brand loyalty,
                our experiential marketing expertise ensures your message reaches the right audience at the
                right time. We combine traditional marketing wisdom with innovative approaches, leveraging
                both offline and digital channels to maximize campaign impact and reach.
              </p>
              <div className="mt-6">
                <p className="text-gray-700 font-medium mb-2">Explore our related services:</p>
                <div className="flex flex-wrap gap-2">
                  <Link href="/services/experiential-marketing">
                    <Badge variant="secondary" className="cursor-pointer hover:bg-blue-100">
                      Experiential Marketing
                    </Badge>
                  </Link>
                  <Link href="/services/brand-strategy">
                    <Badge variant="secondary" className="cursor-pointer hover:bg-blue-100">
                      Brand Strategy
                    </Badge>
                  </Link>
                  <Link href="/services/event-production">
                    <Badge variant="secondary" className="cursor-pointer hover:bg-blue-100">
                      Event Production
                    </Badge>
                  </Link>
                  <Link href="/projects/case-studies">
                    <Badge variant="secondary" className="cursor-pointer hover:bg-blue-100">
                      View Case Studies
                    </Badge>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Elevate Your {targetingData.name} Strategy?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's create an experiential marketing campaign that delivers 
            measurable results and unforgettable brand experiences.
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
              asChild
            >
              <a href="#contact">Start Your Campaign</a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <a href="tel:303-720-6060">Call 303-720-6060</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Get Your Custom {targetingData.name} Proposal
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Explore More Services</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <Link href="/services/experiential-marketing" className="block">
                    <Building className="h-8 w-8 text-blue-600 mb-3" />
                    <h4 className="font-semibold mb-2">Experiential Marketing</h4>
                    <p className="text-sm text-gray-600">
                      Create immersive brand experiences
                    </p>
                    <ArrowRight className="h-4 w-4 mt-3 text-blue-600" />
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <Link href="/services/event-production" className="block">
                    <Calendar className="h-8 w-8 text-green-600 mb-3" />
                    <h4 className="font-semibold mb-2">Event Production</h4>
                    <p className="text-sm text-gray-600">
                      Full-service event management
                    </p>
                    <ArrowRight className="h-4 w-4 mt-3 text-green-600" />
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <Link href="/talent" className="block">
                    <Briefcase className="h-8 w-8 text-purple-600 mb-3" />
                    <h4 className="font-semibold mb-2">Brand Ambassadors</h4>
                    <p className="text-sm text-gray-600">
                      Professional event staffing nationwide
                    </p>
                    <ArrowRight className="h-4 w-4 mt-3 text-purple-600" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}