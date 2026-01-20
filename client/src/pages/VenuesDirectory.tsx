import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  MapPin,
  Search,
  ArrowRight,
  Building2,
  Star,
  Landmark,
  SquareStack,
  Filter
} from "lucide-react";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

interface Venue {
  slug: string;
  name: string;
  shortName: string;
  city: string;
  state: string;
  stateAbbrev: string;
  exhibitSpace: string;
  majorEvents: string[];
  tier: 1 | 2 | 3;
  image: string;
}

export default function VenuesDirectory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTier, setSelectedTier] = useState<number | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const { data: venues = [], isLoading } = useQuery<Venue[]>({
    queryKey: ['/api/venues'],
    queryFn: async () => {
      const response = await fetch('/api/venues');
      if (!response.ok) throw new Error('Failed to fetch venues');
      return response.json();
    }
  });

  const states = useMemo(() => {
    const stateSet = new Set(venues.map(v => v.state));
    return Array.from(stateSet).sort();
  }, [venues]);

  const filteredVenues = useMemo(() => {
    return venues.filter(venue => {
      const matchesSearch = searchQuery === "" ||
        venue.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        venue.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        venue.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
        venue.majorEvents.some(e => e.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTier = selectedTier === null || venue.tier === selectedTier;
      const matchesState = selectedState === null || venue.state === selectedState;

      return matchesSearch && matchesTier && matchesState;
    });
  }, [venues, searchQuery, selectedTier, selectedState]);

  const tier1Venues = filteredVenues.filter(v => v.tier === 1);
  const tier2Venues = filteredVenues.filter(v => v.tier === 2);
  const tier3Venues = filteredVenues.filter(v => v.tier === 3);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Convention Centers - AirFresh Marketing Event Staffing",
    "description": "Professional event staffing at 50+ convention centers across the USA",
    "numberOfItems": venues.length,
    "itemListElement": venues.slice(0, 20).map((venue, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Place",
        "name": venue.name,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": venue.city,
          "addressRegion": venue.stateAbbrev
        },
        "url": `https://airfreshmarketing.com/venues/${venue.slug}`
      }
    }))
  };

  return (
    <>
      <SEO
        title="Convention Center Event Staffing | 50+ Venues Nationwide | AirFresh Marketing"
        description="Professional event staffing, brand ambassadors & trade show staff at 50+ convention centers across the USA. McCormick Place, Las Vegas Convention Center, Javits Center & more. Get a free quote."
        structuredData={structuredData}
      />

      <div className="pt-16">
        {/* Hero Section */}
        <section
          className="relative py-20 md:py-28 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=85)`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/70 via-purple-900/60 to-blue-900/70" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Badge className="mb-4 bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                <Landmark className="w-4 h-4 mr-2" />
                50+ Convention Centers Nationwide
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Convention Center{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Event Staffing
                </span>
              </h1>

              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Professional brand ambassadors, trade show staff, and experiential marketing teams at every major convention center in the United States.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg font-semibold rounded-full"
                >
                  <Link href="/contact">
                    Get a Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 bg-white/10 hover:bg-white/20 text-white px-8 py-6 text-lg font-semibold rounded-full"
                >
                  <Link href="/services/convention-staffing">Our Services</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 bg-white border-b sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search venues, cities, or events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="flex gap-2 flex-wrap">
                <Button
                  variant={selectedTier === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTier(null)}
                >
                  All Tiers
                </Button>
                <Button
                  variant={selectedTier === 1 ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTier(selectedTier === 1 ? null : 1)}
                >
                  <Star className="w-4 h-4 mr-1" /> Premier
                </Button>
                <Button
                  variant={selectedTier === 2 ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTier(selectedTier === 2 ? null : 2)}
                >
                  Major
                </Button>
                <Button
                  variant={selectedTier === 3 ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTier(selectedTier === 3 ? null : 3)}
                >
                  Regional
                </Button>

                <select
                  className="border rounded-md px-3 py-1 text-sm"
                  value={selectedState || ""}
                  onChange={(e) => setSelectedState(e.target.value || null)}
                >
                  <option value="">All States</option>
                  {states.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {isLoading ? (
          <div className="py-20 flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div>
          </div>
        ) : (
          <>
            {/* Tier 1 - Premier Venues */}
            {tier1Venues.length > 0 && (
              <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex items-center gap-3 mb-8">
                    <Star className="w-6 h-6 text-yellow-500" />
                    <h2 className="text-2xl font-bold text-gray-900">Premier Convention Centers</h2>
                    <Badge variant="secondary">{tier1Venues.length} venues</Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tier1Venues.map((venue) => (
                      <VenueCard key={venue.slug} venue={venue} featured />
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Tier 2 - Major Venues */}
            {tier2Venues.length > 0 && (
              <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex items-center gap-3 mb-8">
                    <Building2 className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl font-bold text-gray-900">Major Convention Centers</h2>
                    <Badge variant="secondary">{tier2Venues.length} venues</Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tier2Venues.map((venue) => (
                      <VenueCard key={venue.slug} venue={venue} />
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Tier 3 - Regional Venues */}
            {tier3Venues.length > 0 && (
              <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex items-center gap-3 mb-8">
                    <Landmark className="w-6 h-6 text-gray-500" />
                    <h2 className="text-2xl font-bold text-gray-900">Regional Convention Centers</h2>
                    <Badge variant="secondary">{tier3Venues.length} venues</Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tier3Venues.map((venue) => (
                      <VenueCard key={venue.slug} venue={venue} />
                    ))}
                  </div>
                </div>
              </section>
            )}

            {filteredVenues.length === 0 && (
              <div className="py-20 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No venues found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search or filters.</p>
                <Button onClick={() => {
                  setSearchQuery("");
                  setSelectedTier(null);
                  setSelectedState(null);
                }}>
                  Clear Filters
                </Button>
              </div>
            )}
          </>
        )}

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Event Staffing at a Venue Not Listed?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We staff events at venues across the entire United States. If you don't see your venue, just ask—we've got you covered.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-cyan-700 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-full shadow-xl"
            >
              <Link href="/contact">
                Request Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}

function VenueCard({ venue, featured = false }: { venue: Venue; featured?: boolean }) {
  return (
    <Link href={`/venues/${venue.slug}`}>
      <Card className={`h-full hover:shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden ${featured ? 'border-yellow-300 bg-yellow-50/30' : 'border-gray-200'}`}>
        {/* Venue Image */}
        <div
          className="h-40 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${venue.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          {featured && (
            <div className="absolute top-3 right-3">
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400 drop-shadow-lg" />
            </div>
          )}
          <div className="absolute bottom-3 left-3 right-3">
            <h3 className="text-lg font-bold text-white drop-shadow-lg line-clamp-1">
              {venue.shortName}
            </h3>
            <div className="flex items-center text-white/90 text-sm mt-1">
              <MapPin className="w-4 h-4 mr-1" />
              {venue.city}, {venue.stateAbbrev}
            </div>
          </div>
        </div>

        <CardContent className="p-4">
          <div className="flex items-center text-gray-600 text-sm mb-3">
            <SquareStack className="w-4 h-4 mr-1" />
            {venue.exhibitSpace}
          </div>

          <div className="mb-3">
            <p className="text-xs text-gray-500 mb-1">Major Events:</p>
            <p className="text-sm text-gray-700 line-clamp-2">
              {venue.majorEvents.slice(0, 2).join(', ')}
            </p>
          </div>

          <div className="flex items-center text-cyan-600 text-sm font-medium group-hover:text-cyan-700">
            View Details
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
