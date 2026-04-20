import Link from "next/link"
import { notFound } from "next/navigation"
import { portfolioCaseStudies } from "@/server/portfolioCaseStudies"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CaseStudyGallery } from "@/components/CaseStudyGallery"
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  ExternalLink,
  Briefcase,
  Share2
} from "lucide-react"

export async function generateStaticParams() {
  return portfolioCaseStudies.map((study) => ({ id: study.id }))
}

export default async function CaseStudyDetail(
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const caseStudy = portfolioCaseStudies.find((study) => study.id === id)

  if (!caseStudy) {
    notFound()
  }

  // Get images
  const images: string[] =
    caseStudy.images && caseStudy.images.length > 0
      ? caseStudy.images
      : caseStudy.heroImage
      ? [caseStudy.heroImage]
      : []

  const heroImageUrl =
    caseStudy.heroImage || images[0] || "/images/case-studies/gallery/formula1/formula1-1.jpg"

  const relatedStudies = portfolioCaseStudies
    .filter((study) => study.id !== caseStudy.id && study.category === caseStudy.category)
    .slice(0, 3)

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "name": caseStudy.name,
        "description": caseStudy.description,
        "url": `https://www.airfreshmarketing.com/case-studies/${caseStudy.id}`,
        "creator": {
          "@type": "Organization",
          "name": "AirFresh Marketing",
          "url": "https://www.airfreshmarketing.com",
        },
        "about": {
          "@type": "Thing",
          "name": caseStudy.category,
        },
        ...(caseStudy.heroImage && { image: caseStudy.heroImage }),
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.airfreshmarketing.com" },
          { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://www.airfreshmarketing.com/case-studies" },
          { "@type": "ListItem", "position": 3, "name": caseStudy.name, "item": `https://www.airfreshmarketing.com/case-studies/${caseStudy.id}` },
        ],
      },
    ],
  }

  return (
    <div className="pt-16 min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative text-white h-[60vh] flex items-end">
        {caseStudy.heroVideo ? (
          <>
            <div className="absolute inset-0 z-0 overflow-hidden">
              <iframe
                src={`https://player.vimeo.com/video/${caseStudy.heroVideo}?background=1&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0`}
                className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2"
                style={{ aspectRatio: "16/9" }}
                frameBorder="0"
                allow="autoplay; fullscreen"
                title="Hero Video"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-10" />
          </>
        ) : (
          <>
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url(${heroImageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: caseStudy.heroPosition || "top center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 z-10" />
          </>
        )}

        {/* Content Overlay */}
        <div className="relative z-20 w-full p-8 lg:p-16">
          <div className="max-w-7xl mx-auto">
            <Link href="/portfolio">
              <Button variant="ghost" className="text-white hover:text-gray-300 mb-6 -ml-2">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Button>
            </Link>

            <div className="animate-fade-in">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                {caseStudy.category}
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold mb-4">{caseStudy.name}</h1>

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
              </div>
            </div>
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
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{value}</div>
                  <div className="text-sm text-gray-600 capitalize">{key.replace(/_/g, " ")}</div>
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
                <p className="text-lg text-gray-700 leading-relaxed">{caseStudy.description}</p>
              </div>

              {/* Image Gallery (client component) */}
              <CaseStudyGallery images={images} name={caseStudy.name} />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="mb-8 sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Project Details</h3>

                  <div className="space-y-4">
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

                    {caseStudy.date && (
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-1">Date</h4>
                        <p className="text-gray-600">{caseStudy.date}</p>
                      </div>
                    )}

                    {caseStudy.markets && (
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-1">Markets</h4>
                        <p className="text-gray-600">{caseStudy.markets.join(", ")}</p>
                      </div>
                    )}
                  </div>

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
                        src={
                          study.heroImage ||
                          "/images/case-studies/gallery/formula1/formula1-2.jpg"
                        }
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
                      <p className="text-gray-600 line-clamp-2">{study.description}</p>
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
          <h2 className="text-4xl font-bold mb-4">Ready to Create Your Success Story?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let&apos;s discuss how we can help achieve similar results for your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
              >
                View More Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
