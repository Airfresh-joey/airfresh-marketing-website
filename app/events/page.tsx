import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Calendar, Users, ArrowRight, Star, Trophy, Building } from "lucide-react";
import SEO from "@/components/SEO";
import { usaEvents, getFeaturedEvents, getTier1Events, getTier2Events } from "@/server/usa-events-data";

const categoryColors: Record<string, string> = {
  sports: "bg-green-500",
  festival: "bg-purple-500",
  conference: "bg-blue-500",
  convention: "bg-orange-500",
  expo: "bg-cyan-500",
  cultural: "bg-pink-500"
};

export default function EventsDirectory() {
  const featuredEvents = getFeaturedEvents();
  const tier1Events = getTier1Events();
  const tier2Events = getTier2Events();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "USA Events & Conferences - Event Staffing",
    "description": "Comprehensive directory of major US events, conferences, festivals, and sporting events where AirFresh provides professional staffing services.",
    "numberOfItems": usaEvents.length,
    "itemListElement": usaEvents.slice(0, 20).map((event, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Event",
        "name": event.name,
        "url": `https://airfreshmarketing.com/events/${event.slug}`
      }
    }))
  };

  return (
    <div className="pt-16 min-h-screen">
      <SEO
        title="USA Events & Conferences | Event Staffing Directory | AirFresh Marketing"
        description="Find professional event staffing for major US conferences, festivals, sporting events, and conventions. CES, Coachella, Super Bowl, Olympics 2028, and 100+ more events."
        keywords="event staffing, conference staffing, festival staff, trade show staff, super bowl staffing, ces staffing, coachella staffing, olympics 2028 staffing"
        structuredData={structuredData}
        canonical="https://airfreshmarketing.com/events"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0 bg-[url('/images/case-studies/gallery/cirque/cirque-1.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-0">
              <Calendar className="w-4 h-4 mr-1" />
              {usaEvents.length}+ Events Nationwide
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              USA Events & Conferences
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Professional event staffing for America's biggest conferences, festivals, sporting events,
              and conventions. From CES to Coachella, Super Bowl to the 2028 Olympics.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      {featuredEvents.length > 0 && (
        <section className="py-16 bg-gradient-to-r from-yellow-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-8">
              <Star className="w-6 h-6 text-yellow-500" />
              <h2 className="text-2xl font-bold">Featured Events</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredEvents.slice(0, 6).map((event) => (
                <Link key={event.id} href={`/events/${event.slug}`}>
                  <Card className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer h-full">
                    <div className="relative h-48">
                      <Image
                        src={event.heroImage}
                        alt={event.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <Badge className={`absolute top-4 left-4 ${categoryColors[event.category]} text-white`}>
                        {event.category}
                      </Badge>
                      <Badge className="absolute top-4 right-4 bg-yellow-500 text-black">
                        <Star className="w-3 h-3 mr-1" /> Featured
                      </Badge>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-1">{event.name}</h3>
                        <div className="flex items-center gap-2 text-white/90 text-sm">
                          <MapPin className="w-4 h-4" />
                          {event.city}, {event.state}
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {event.dates || event.month}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {event.attendees}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tier 1 Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Trophy className="w-6 h-6 text-primary" />
            Major Events
            <Badge variant="secondary">{tier1Events.length}</Badge>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tier1Events.map((event) => (
              <Link key={event.id} href={`/events/${event.slug}`}>
                <Card className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer h-full">
                  <div className="relative h-40">
                    <Image
                      src={event.heroImage}
                      alt={event.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <Badge className={`absolute top-3 left-3 ${categoryColors[event.category]} text-white text-xs`}>
                      {event.subcategory}
                    </Badge>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-lg font-bold text-white line-clamp-1">{event.name}</h3>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.city}, {event.state}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1 text-gray-500">
                        <Calendar className="w-4 h-4" />
                        {event.month}
                      </div>
                      <div className="flex items-center gap-1 text-gray-500">
                        <Users className="w-4 h-4" />
                        {event.attendees}
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

      {/* Tier 2 Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Building className="w-6 h-6 text-primary" />
            More Events
            <Badge variant="secondary">{tier2Events.length}</Badge>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tier2Events.map((event) => (
              <Link key={event.id} href={`/events/${event.slug}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-all group cursor-pointer h-full">
                  <div className="relative h-32">
                    <Image
                      src={event.heroImage}
                      alt={event.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <h3 className="text-sm font-bold text-white line-clamp-2">{event.name}</h3>
                    </div>
                  </div>
                  <CardContent className="p-3">
                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                      <MapPin className="w-3 h-3" />
                      {event.city}, {event.state}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Olympics 2028 CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-0 text-lg py-2 px-4">
            Coming 2028
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Los Angeles Olympics 2028
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Be part of history. AirFresh is preparing to staff the world's greatest sporting event
            with brand ambassadors, hospitality staff, and experiential teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Link href="/events/olympics-2028-los-angeles">
                Learn About Olympics Staffing
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Don't See Your Event?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We staff events of all sizes across the United States. Contact us for a custom
            staffing solution for your conference, festival, or activation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Get a Custom Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="tel:3037206060">Call (303) 720-6060</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
