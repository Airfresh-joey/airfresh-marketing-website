import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Building, ArrowRight, Users, Star, Square } from "lucide-react";
import SEO from "@/components/SEO";
import { venues, getFeaturedVenues, getVenuesByTier } from "@/server/venues-data";

export default function VenuesDirectory() {
  const featuredVenues = getFeaturedVenues();
  const tier2Venues = getVenuesByTier(2);
  const tier3Venues = getVenuesByTier(3);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Convention Centers & Venues - Event Staffing",
    "description": "Comprehensive directory of major US convention centers and venues where AirFresh provides professional staffing services.",
    "numberOfItems": venues.length,
    "itemListElement": venues.slice(0, 20).map((venue, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Place",
        "name": venue.name,
        "url": `https://airfreshmarketing.com/venues/${venue.slug}`
      }
    }))
  };

  return (
    <div className="pt-16 min-h-screen">
      <SEO
        title="Convention Centers & Venues | Event Staffing Directory | AirFresh Marketing"
        description="Find professional event staffing for major US convention centers and venues. McCormick Place, Las Vegas Convention Center, OCCC, and 40+ more venues."
        keywords="convention center staffing, venue staffing, trade show staff, event staff, mccormick place staffing, lvcc staffing, convention staff"
        structuredData={structuredData}
        canonical="https://airfreshmarketing.com/venues"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-0">
              <Building className="w-4 h-4 mr-1" />
              {venues.length}+ Convention Centers Nationwide
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Convention Centers & Venues
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Professional event staffing for America's largest convention centers and venues.
              From McCormick Place to the Las Vegas Convention Center, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Venues (Tier 1) */}
      {featuredVenues.length > 0 && (
        <section className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-8">
              <Star className="w-6 h-6 text-yellow-500" />
              <h2 className="text-2xl font-bold">Top Tier Convention Centers</h2>
              <Badge variant="secondary">{featuredVenues.length}</Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredVenues.map((venue) => (
                <Link key={venue.slug} href={`/venues/${venue.slug}`}>
                  <Card className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer h-full">
                    <div className="relative h-48">
                      <Image
                        src={venue.image}
                        alt={venue.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <Badge className="absolute top-4 left-4 bg-yellow-500 text-black">
                        <Star className="w-3 h-3 mr-1" /> Tier 1
                      </Badge>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-1">{venue.shortName}</h3>
                        <div className="flex items-center gap-2 text-white/90 text-sm">
                          <MapPin className="w-4 h-4" />
                          {venue.city}, {venue.stateAbbrev}
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Square className="w-4 h-4" />
                          {venue.exhibitSpace}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {venue.meetingRooms} rooms
                        </div>
                      </div>
                      <div className="mt-3 flex items-center text-primary font-medium text-sm">
                        View Staffing Options
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tier 2 Venues */}
      {tier2Venues.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Building className="w-6 h-6 text-primary" />
              Major Convention Centers
              <Badge variant="secondary">{tier2Venues.length}</Badge>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tier2Venues.map((venue) => (
                <Link key={venue.slug} href={`/venues/${venue.slug}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-all group cursor-pointer h-full">
                    <div className="relative h-40">
                      <Image
                        src={venue.image}
                        alt={venue.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="text-lg font-bold text-white line-clamp-1">{venue.shortName}</h3>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                        <MapPin className="w-4 h-4" />
                        <span>{venue.city}, {venue.stateAbbrev}</span>
                      </div>
                      <div className="text-xs text-gray-500">
                        {venue.exhibitSpace} exhibit space
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tier 3 Venues */}
      {tier3Venues.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Building className="w-6 h-6 text-primary" />
              Regional Convention Centers
              <Badge variant="secondary">{tier3Venues.length}</Badge>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {tier3Venues.map((venue) => (
                <Link key={venue.slug} href={`/venues/${venue.slug}`}>
                  <Card className="overflow-hidden hover:shadow-md transition-all group cursor-pointer h-full">
                    <CardContent className="p-4">
                      <h3 className="font-bold text-base mb-2 line-clamp-1">{venue.shortName}</h3>
                      <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <MapPin className="w-3 h-3" />
                        {venue.city}, {venue.stateAbbrev}
                      </div>
                      <div className="mt-2 text-xs text-gray-400">
                        {venue.exhibitSpace}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Staff for Your Next Event?
          </h2>
          <p className="text-xl mb-8 text-indigo-50">
            We provide professional event staffing at convention centers across the nation.
            Get a custom quote for your upcoming trade show, conference, or event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
              <Link href="/contact">
                Get Free Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="tel:3037206060">Call (303) 720-6060</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
