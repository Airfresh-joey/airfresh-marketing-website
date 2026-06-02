import type { Metadata } from 'next';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { industries } from "@/server/industries-data";
import {
  Wine,
  Car,
  Laptop,
  ShoppingCart,
  Trophy,
  Shirt,
  Heart,
  Building2,
  ArrowRight,
  Cpu,
  UtensilsCrossed,
  Landmark,
  Store,
  Clapperboard,
  Leaf
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve | Experiential Marketing by Vertical | AirFresh Marketing",
  description: "AirFresh Marketing delivers specialized experiential marketing and event staffing for tech, food & beverage, healthcare, automotive, retail, entertainment, finance, cannabis, and more.",
  alternates: {
    canonical: "https://www.airfreshmarketing.com/industries",
  },
};

// Priority verticals shown at the top of the hub
const PRIORITY_SLUGS = [
  "tech-saas",
  "food-beverage",
  "healthcare-pharma",
  "automotive",
  "finance-insurance",
  "retail-cpg",
  "entertainment-media",
  "cannabis",
];

const industryIcons: Record<string, typeof Wine> = {
  // Primary 8 verticals
  "tech-saas": Cpu,
  "food-beverage": UtensilsCrossed,
  "healthcare-pharma": Heart,
  "automotive": Car,
  "finance-insurance": Landmark,
  "retail-cpg": Store,
  "entertainment-media": Clapperboard,
  "cannabis": Leaf,
  // Legacy verticals
  "alcohol-beverage": Wine,
  "technology": Laptop,
  "cpg-consumer-goods": ShoppingCart,
  "sports-entertainment": Trophy,
  "fashion-retail": Shirt,
  "financial-services": Building2,
};

export default function IndustriesPage() {
  const quoteHref = (intent: string) => `/get-quote?source=industries&intent=${intent}`;

  // Sort: priority 8 verticals first, then the rest
  const priorityIndustries = PRIORITY_SLUGS
    .map(slug => industries.find(i => i.slug === slug))
    .filter(Boolean) as typeof industries;
  const otherIndustries = industries.filter(i => !PRIORITY_SLUGS.includes(i.slug));
  const sortedIndustries = [...priorityIndustries, ...otherIndustries];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        "name": "Industries Served by AirFresh Marketing",
        "description": "Experiential marketing and event staffing solutions for various industries",
        "itemListElement": sortedIndustries.map((industry, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": industry.name,
          "url": `https://www.airfreshmarketing.com/industries/${industry.slug}`
        }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.airfreshmarketing.com" },
          { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://www.airfreshmarketing.com/industries" }
        ]
      }
    ]
  };

  return (
    <div className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/case-studies/gallery/formula1/formula1-14.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/70 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Industries We <span className="text-cyan-400">Serve</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
            Specialized experiential marketing expertise across every major industry.
            We understand your unique challenges and deliver tailored staffing solutions.
          </p>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">20+</div>
              <div className="text-sm text-gray-600 mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">300+</div>
              <div className="text-sm text-gray-600 mt-1">Brands Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">8</div>
              <div className="text-sm text-gray-600 mt-1">Industry Verticals</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-gray-600 mt-1">Cities Nationwide</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-gray-600 mt-1">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary 8 Industry Verticals */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Industry Verticals</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Deep expertise in 8 key sectors, each with purpose-built programs, compliance-aware staff, and measurable results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {priorityIndustries.map((industry) => {
              const IconComponent = industryIcons[industry.slug] || Building2;
              return (
                <Link key={industry.id} href={`/industries/${industry.slug}`}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer border-2 hover:border-primary/30">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.name}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{industry.heroSubtitle}</p>
                      <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                        Learn More <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* City Coverage Note */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Nationwide Coverage, Local Expertise</h2>
          <p className="text-lg text-gray-600">
            AirFresh Marketing operates across 50+ U.S. cities. Each industry program is staffed by locally-recruited, brand-trained talent who know your market. From New York and Los Angeles to Denver and Nashville, we put the right people in the right places.
          </p>
        </div>
      </section>

      {/* Additional Industries */}
      {otherIndustries.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">More Industries We Serve</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherIndustries.map((industry) => {
                const IconComponent = industryIcons[industry.slug] || Building2;
                return (
                  <Link key={industry.id} href={`/industries/${industry.slug}`}>
                    <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                      <CardContent className="p-6">
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="h-7 w-7 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.name}</h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{industry.heroSubtitle}</p>
                        <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                          Learn More <ArrowRight className="ml-1 h-4 w-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don&apos;t See Your Industry?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We have experience across virtually every industry. Request a custom quote to discuss your specific staffing, sampling, or activation needs.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href={quoteHref('custom-industry-quote')}>
              Get a Custom Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
