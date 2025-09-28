import { useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, CheckCircle, Star, Phone, ArrowRight } from "lucide-react";
import { useEffect } from "react";

export default function CityServicePage() {
  const [match, params] = useRoute("/city-services/:slug");
  const slug = params?.slug || "";

  // Fetch city-service data from API
  const { data: pageData, isLoading, error } = useQuery({
    queryKey: ['/api/city-services', slug],
    queryFn: async () => {
      const response = await fetch(`/api/city-services/${slug}`);
      if (!response.ok) throw new Error('Failed to fetch city-service data');
      return response.json();
    }
  });

  // Add structured data for SEO
  useEffect(() => {
    if (pageData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": pageData.title,
        "description": pageData.metaDescription,
        "provider": {
          "@type": "Organization",
          "name": "AirFresh Marketing",
          "url": "https://airfreshmarketing.com"
        },
        "areaServed": {
          "@type": "City",
          "name": pageData.cityName
        },
        "serviceType": pageData.serviceName
      });
      document.head.appendChild(script);

      // Update meta tags
      document.title = pageData.title;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', pageData.metaDescription);
      }

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [pageData]);

  if (isLoading) {
    return (
      <div className="pt-16">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="text-lg">Loading...</div>
        </div>
      </div>
    );
  }

  if (error || !pageData) {
    return (
      <div className="pt-16">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="text-lg text-red-600">Service page not found</div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section with Background Image */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage: pageData?.images?.service
            ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${pageData.images.service})`
            : pageData?.images?.city?.hero
            ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${pageData.images.city.hero})`
            : `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/heroes/mac-cosmetics.jpg)`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              {pageData.h1}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto drop-shadow">
              {pageData.heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3">
                <a href="/contact">Get a Free Quote</a>
              </Button>
              <Button asChild size="lg" className="bg-white/90 hover:bg-white text-gray-900 px-8 py-3">
                <a href="/portfolio">View Our Work</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-12">
              {pageData.sections && pageData.sections.map((section: any, index: number) => (
                <div key={index}>
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">{section.title}</h2>
                  <ul className="space-y-3">
                    {section.content.map((item: string, itemIndex: number) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Local Insight */}
              <Card className="border-cyan-200 bg-cyan-50/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-cyan-500" />
                    Local Market Expertise
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{pageData.localInsight}</p>
                </CardContent>
              </Card>

              {/* FAQs */}
              {pageData.faqs && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {pageData.faqs.map((faq: any, index: number) => (
                      <div key={index} className="border-l-4 border-cyan-500 pl-6">
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">{faq.question}</h3>
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <Card className="sticky top-20">
                <CardHeader className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white">
                  <CardTitle>Get Started Today</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-cyan-500" />
                      <a href="tel:3037206060" className="font-semibold hover:text-cyan-500">
                        (303) 720-6060
                      </a>
                    </div>
                    <p className="text-gray-600">
                      Speak with our {pageData.cityName} team about your {pageData.serviceName} needs.
                    </p>
                    <Button asChild className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">
                      <a href="/contact">
                        Contact Us
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Service Areas Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Service Coverage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">
                    We provide {pageData.serviceName} throughout the {pageData.cityName} metro area.
                  </p>
                  <div className="flex items-center gap-2 text-cyan-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">Full Metro Coverage</span>
                  </div>
                </CardContent>
              </Card>

              {/* Trust Indicators */}
              <Card className="border-gray-200">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-yellow-500" />
                      <span className="font-semibold">20+ Years Experience</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-semibold">300+ Brands Served</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-cyan-500" />
                      <span className="font-semibold">Local Team</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {pageData.cta && (
        <section className="py-20 bg-gradient-to-r from-cyan-500 to-cyan-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              {pageData.cta.title}
            </h2>
            <p className="text-xl text-cyan-50 mb-8 max-w-3xl mx-auto">
              {pageData.cta.description}
            </p>
            <Button asChild size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3">
              <a href={pageData.cta.buttonLink}>
                {pageData.cta.buttonText}
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </section>
      )}
    </div>
  );
}