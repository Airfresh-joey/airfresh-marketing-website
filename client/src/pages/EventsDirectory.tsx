import { useState } from "react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  MapPin, Calendar, Users, Search, Filter, ArrowRight, Star,
  Music, Trophy, Briefcase, Palette, Building, ChevronRight
} from "lucide-react";

interface USAEvent {
  id: string;
  slug: string;
  name: string;
  category: string;
  subcategory: string;
  city: string;
  state: string;
  venue: string;
  month: string;
  dates?: string;
  attendees: string;
  industry: string;
  heroImage: string;
  featured?: boolean;
  tier: number;
}

const categoryIcons: Record<string, any> = {
  sports: Trophy,
  festival: Music,
  conference: Briefcase,
  convention: Building,
  expo: Building,
  cultural: Palette
};

const categoryColors: Record<string, string> = {
  sports: "bg-green-500 hover:bg-green-600",
  festival: "bg-purple-500 hover:bg-purple-600",
  conference: "bg-blue-500 hover:bg-blue-600",
  convention: "bg-orange-500 hover:bg-orange-600",
  expo: "bg-cyan-500 hover:bg-cyan-600",
  cultural: "bg-pink-500 hover:bg-pink-600"
};

export default function EventsDirectory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const { data: events = [], isLoading } = useQuery<USAEvent[]>({
    queryKey: ['/api/events'],
    queryFn: async () => {
      const response = await fetch('/api/events');
      if (!response.ok) throw new Error('Failed to fetch events');
      return response.json();
    }
  });

  const categories = Array.from(new Set(events.map(e => e.category)));
  const cities = Array.from(new Set(events.map(e => e.city))).sort();

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.industry.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || event.category === selectedCategory;
    const matchesCity = !selectedCity || event.city === selectedCity;
    return matchesSearch && matchesCategory && matchesCity;
  });

  const featuredEvents = events.filter(e => e.featured);
  const tier1Events = filteredEvents.filter(e => e.tier === 1);
  const tier2Events = filteredEvents.filter(e => e.tier === 2);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "USA Events & Conferences - Event Staffing",
    "description": "Comprehensive directory of major US events, conferences, festivals, and sporting events where AirFresh provides professional staffing services.",
    "numberOfItems": events.length,
    "itemListElement": events.slice(0, 20).map((event, index) => ({
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
    <>
      <SEO
        title="USA Events & Conferences | Event Staffing Directory | AirFresh Marketing"
        description="Find professional event staffing for major US conferences, festivals, sporting events, and conventions. CES, Coachella, Super Bowl, Olympics 2028, and 100+ more events."
        keywords="event staffing, conference staffing, festival staff, trade show staff, super bowl staffing, ces staffing, coachella staffing, olympics 2028 staffing"
        structuredData={structuredData}
        canonical="https://airfreshmarketing.com/events"
      />

      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920')] bg-cover bg-center opacity-20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <Badge className="mb-4 bg-white/20 text-white border-0">
                <Calendar className="w-4 h-4 mr-1" />
                {events.length}+ Events Nationwide
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                USA Events & Conferences
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Professional event staffing for America's biggest conferences, festivals, sporting events,
                and conventions. From CES to Coachella, Super Bowl to the 2028 Olympics.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search events, cities, or industries..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 py-6 text-lg rounded-full border-0 shadow-xl"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Filter className="w-5 h-5" />
                <span className="font-medium">Filter:</span>
              </div>
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(null)}
              >
                All Events
              </Button>
              {categories.map(category => {
                const Icon = categoryIcons[category] || Building;
                return (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="capitalize"
                  >
                    <Icon className="w-4 h-4 mr-1" />
                    {category}
                  </Button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Events - Olympics 2028 Highlight */}
        {featuredEvents.length > 0 && !selectedCategory && !searchTerm && (
          <section className="py-16 bg-gradient-to-r from-yellow-50 to-orange-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-2 mb-8">
                <Star className="w-6 h-6 text-yellow-500" />
                <h2 className="text-2xl font-bold">Featured Events</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredEvents.slice(0, 6).map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={`/events/${event.slug}`}>
                      <Card className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer h-full">
                        <div className="relative h-48">
                          <img
                            src={event.heroImage}
                            alt={event.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                          <Badge className={`absolute top-4 left-4 ${categoryColors[event.category]}`}>
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
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Main Events Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tier 1 - Mega Events */}
            {tier1Events.length > 0 && (
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-primary" />
                  Major Events
                  <Badge variant="secondary">{tier1Events.length}</Badge>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence>
                    {tier1Events.map((event, index) => (
                      <EventCard key={event.id} event={event} index={index} />
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            )}

            {/* Tier 2 Events */}
            {tier2Events.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-primary" />
                  More Events
                  <Badge variant="secondary">{tier2Events.length}</Badge>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence>
                    {tier2Events.map((event, index) => (
                      <EventCard key={event.id} event={event} index={index} />
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            )}

            {/* No Results */}
            {filteredEvents.length === 0 && (
              <div className="text-center py-16">
                <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">No Events Found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
                <Button onClick={() => { setSearchTerm(""); setSelectedCategory(null); }}>
                  Clear Filters
                </Button>
              </div>
            )}
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
                <a href="/contact">Contact Us</a>
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
                <a href="/contact">Get a Custom Quote</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:3037206060">Call (303) 720-6060</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function EventCard({ event, index }: { event: USAEvent; index: number }) {
  const Icon = categoryIcons[event.category] || Building;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ delay: index * 0.05 }}
    >
      <Link href={`/events/${event.slug}`}>
        <Card className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer h-full">
          <div className="relative h-40">
            <img
              src={event.heroImage}
              alt={event.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <Badge className={`absolute top-3 left-3 ${categoryColors[event.category]} text-white text-xs`}>
              <Icon className="w-3 h-3 mr-1" />
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
            <div className="mt-3 flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
              View Staffing Options
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
