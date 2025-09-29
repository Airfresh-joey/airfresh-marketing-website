'use client'

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { portfolioCaseStudies } from "@/client/src/data/portfolioCaseStudies";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Calendar,
  Users,
  Target,
  Award,
  Clock,
  ExternalLink,
  Building,
  Briefcase,
  ChevronRight,
  Eye,
  Share2,
  Download,
  Play,
  Image as ImageIcon
} from "lucide-react";

export default function CaseStudyDetail() {
  const params = useParams();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Find the case study by ID
  const caseStudy = portfolioCaseStudies.find(study => study.id === params.id);

  if (!caseStudy) {
    notFound();
  }

  // Get placeholder images if not provided
  const getPlaceholderImages = () => {
    const baseImages = [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&h=800&fit=crop"
    ];
    return caseStudy.images || baseImages;
  };

  const images = getPlaceholderImages();

  // Ensure we have a hero image
  const heroImageUrl = caseStudy.heroImage || images[0] || "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop";

  // Find related case studies
  const relatedStudies = portfolioCaseStudies
    .filter(study => study.id !== caseStudy.id && study.category === caseStudy.category)
    .slice(0, 3);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": caseStudy.name,
    "description": caseStudy.description,
    "url": `https://airfreshmarketing.com/case-studies/${caseStudy.id}`,
    "creator": {
      "@type": "Organization",
      "name": "AirFresh Marketing"
    },
    "about": {
      "@type": "Thing",
      "name": caseStudy.category
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-white">
      <SEO
        title={`${caseStudy.name} | Case Study - AirFresh Marketing`}
        description={caseStudy.description}
        canonical={`https://airfreshmarketing.com/case-studies/${caseStudy.id}`}
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative text-white h-[60vh] flex items-end">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 z-10" />

        {/* Content Overlay */}
        <div className="relative z-20 w-full p-8 lg:p-16">
          <div className="max-w-7xl mx-auto">
              <Link href="/portfolio">
                <Button variant="ghost" className="text-white hover:text-gray-300 mb-6 -ml-2">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Portfolio
                </Button>
              </Link>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="mb-4 bg-white/20 text-white border-white/30">
                  {caseStudy.category}
                </Badge>

                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {caseStudy.name}
                </h1>

                <p className="text-xl md:text-2xl opacity-90 mb-6 max-w-3xl">
                  {caseStudy.tagline}
                </p>

                <div className="flex flex-wrap gap-4 text-sm">
                  {caseStudy.industry && (
                    <div className="flex items-center">
                      <Briefcase className="w-4 h-4 mr-2" />
                      {caseStudy.industry}
                    </div>
                  )}
                  {caseStudy.markets && caseStudy.markets.length > 0 && (
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {caseStudy.markets.join(", ")}
                    </div>
                  )}
                  {caseStudy.timeline && (
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {caseStudy.timeline}
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
      </section>

      {/* Stats Bar */}
      {caseStudy.stats && Object.keys(caseStudy.stats).length > 0 && (
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(caseStudy.stats).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {value}
                  </div>
                  <div className="text-sm text-gray-600 capitalize">
                    {key.replace(/_/g, ' ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {caseStudy.description}
                </p>
              </div>

              {/* Challenge */}
              {caseStudy.challenge && (
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
                  <p className="text-gray-700 leading-relaxed">
                    {caseStudy.challenge}
                  </p>
                </div>
              )}

              {/* Solution */}
              {caseStudy.solution && (
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
                  <p className="text-gray-700 leading-relaxed">
                    {caseStudy.solution}
                  </p>
                </div>
              )}

              {/* Results */}
              {caseStudy.results && (
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Results</h2>
                  {Array.isArray(caseStudy.results) ? (
                    <ul className="space-y-3">
                      {caseStudy.results.map((result, index) => (
                        <li key={index} className="flex items-start">
                          <ChevronRight className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-700 leading-relaxed">
                      {caseStudy.results}
                    </p>
                  )}
                </div>
              )}

              {/* Image Gallery */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Campaign Gallery</h2>
                <div className="relative rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={images[activeImageIndex]}
                    alt={`${caseStudy.name} - Image ${activeImageIndex + 1}`}
                    className="w-full h-[500px] object-cover"
                  />

                  {/* Image Navigation */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={() => setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
                      >
                        <ArrowLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setActiveImageIndex((prev) => (prev + 1) % images.length)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </button>

                      {/* Dots */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              index === activeImageIndex ? 'bg-white' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Thumbnail Grid */}
                {images.length > 1 && (
                  <div className="grid grid-cols-4 gap-4 mt-4">
                    {images.slice(0, 4).map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImageIndex(index)}
                        className={`relative rounded-lg overflow-hidden ${
                          index === activeImageIndex ? 'ring-2 ring-primary' : ''
                        }`}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-24 object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Project Details Card */}
              <Card className="mb-8 sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Project Details</h3>

                  <div className="space-y-4">
                    {/* Services */}
                    {caseStudy.services && (
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Services</h4>
                        <div className="flex flex-wrap gap-2">
                          {caseStudy.services.map((service) => (
                            <Badge key={service} variant="outline">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Timeline */}
                    {caseStudy.timeline && (
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-1">Timeline</h4>
                        <p className="text-gray-600">{caseStudy.timeline}</p>
                      </div>
                    )}

                    {/* Markets */}
                    {caseStudy.markets && (
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-1">Markets</h4>
                        <p className="text-gray-600">{caseStudy.markets.join(", ")}</p>
                      </div>
                    )}

                    {/* Team Size */}
                    {caseStudy.teamSize && (
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-1">Team Size</h4>
                        <p className="text-gray-600">{caseStudy.teamSize}</p>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 space-y-3">
                    {caseStudy.googleDriveUrl && (
                      <a
                        href={caseStudy.googleDriveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button className="w-full">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Assets
                        </Button>
                      </a>
                    )}

                    <Button variant="outline" className="w-full">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share Case Study
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedStudies.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Related Case Studies</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedStudies.map((study) => (
                <Link key={study.id} href={`/case-studies/${study.id}`}>
                  <Card className="group hover:shadow-xl transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={study.heroImage || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop"}
                        alt={study.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <Badge className="absolute top-4 left-4 bg-white/90 text-gray-900">
                        {study.category}
                      </Badge>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {study.name}
                      </h3>
                      <p className="text-gray-600 line-clamp-2">
                        {study.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help achieve similar results for your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                View More Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}