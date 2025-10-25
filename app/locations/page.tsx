'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, ArrowRight, Building2, Users, Award } from "lucide-react";

// Major cities where AirFresh operates
const cities = [
  { name: "Denver", state: "CO", region: "Mountain", lat: 39.7392, lng: -104.9903, isHQ: true },
  { name: "Los Angeles", state: "CA", region: "West Coast", lat: 34.0522, lng: -118.2437 },
  { name: "San Francisco", state: "CA", region: "West Coast", lat: 37.7749, lng: -122.4194 },
  { name: "San Diego", state: "CA", region: "West Coast", lat: 32.7157, lng: -117.1611 },
  { name: "Seattle", state: "WA", region: "Pacific Northwest", lat: 47.6062, lng: -122.3321 },
  { name: "Portland", state: "OR", region: "Pacific Northwest", lat: 45.5152, lng: -122.6784 },
  { name: "Phoenix", state: "AZ", region: "Southwest", lat: 33.4484, lng: -112.0740 },
  { name: "Las Vegas", state: "NV", region: "Southwest", lat: 36.1699, lng: -115.1398 },
  { name: "Austin", state: "TX", region: "South", lat: 30.2672, lng: -97.7431 },
  { name: "Dallas", state: "TX", region: "South", lat: 32.7767, lng: -96.7970 },
  { name: "Houston", state: "TX", region: "South", lat: 29.7604, lng: -95.3698 },
  { name: "Miami", state: "FL", region: "Southeast", lat: 25.7617, lng: -80.1918 },
  { name: "Atlanta", state: "GA", region: "Southeast", lat: 33.7490, lng: -84.3880 },
  { name: "Charlotte", state: "NC", region: "Southeast", lat: 35.2271, lng: -80.8431 },
  { name: "Nashville", state: "TN", region: "South", lat: 36.1627, lng: -86.7816 },
  { name: "Chicago", state: "IL", region: "Midwest", lat: 41.8781, lng: -87.6298 },
  { name: "Minneapolis", state: "MN", region: "Midwest", lat: 44.9778, lng: -93.2650 },
  { name: "Detroit", state: "MI", region: "Midwest", lat: 42.3314, lng: -83.0458 },
  { name: "New York", state: "NY", region: "Northeast", lat: 40.7128, lng: -74.0060 },
  { name: "Boston", state: "MA", region: "Northeast", lat: 42.3601, lng: -71.0589 },
  { name: "Philadelphia", state: "PA", region: "Northeast", lat: 39.9526, lng: -75.1652 },
  { name: "Washington", state: "DC", region: "Northeast", lat: 38.9072, lng: -77.0369 },
];

const regions = [
  { name: "West Coast", color: "bg-blue-500" },
  { name: "Pacific Northwest", color: "bg-green-500" },
  { name: "Southwest", color: "bg-orange-500" },
  { name: "South", color: "bg-red-500" },
  { name: "Southeast", color: "bg-purple-500" },
  { name: "Midwest", color: "bg-yellow-500" },
  { name: "Northeast", color: "bg-cyan-500" },
  { name: "Mountain", color: "bg-pink-500" },
];

export default function Locations() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const filteredCities = selectedRegion
    ? cities.filter(city => city.region === selectedRegion)
    : cities;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AirFresh Marketing",
    "areaServed": cities.map(city => ({
      "@type": "City",
      "name": `${city.name}, ${city.state}`
    }))
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <SEO
        title="Nationwide Locations | Experiential Marketing in 50+ Cities - AirFresh"
        description="AirFresh Marketing serves 50+ cities nationwide with experiential marketing services. Find our locations from coast to coast."
        pageType="locations"
        canonical="https://airfreshmarketing.com/locations"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-cyan-600 via-blue-600 to-cyan-700">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 px-4 py-2 text-sm font-semibold bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              Nationwide Coverage
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Experiential Marketing
              <br />
              <span className="text-yellow-300">Coast to Coast</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              We deliver exceptional brand experiences in <strong>50+ major cities</strong> across the United States,
              from our Denver headquarters to markets nationwide.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              {[
                { icon: MapPin, value: "50+", label: "Cities" },
                { icon: Users, value: "1000+", label: "Ambassadors" },
                { icon: Award, value: "300+", label: "Brands" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Nationwide Network</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Filter by region to see our coverage across the United States
            </p>
          </div>

          {/* Region Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Button
              variant={selectedRegion === null ? "default" : "outline"}
              onClick={() => setSelectedRegion(null)}
              className="rounded-full"
            >
              All Regions
            </Button>
            {regions.map((region) => (
              <Button
                key={region.name}
                variant={selectedRegion === region.name ? "default" : "outline"}
                onClick={() => setSelectedRegion(region.name)}
                className="rounded-full"
              >
                <div className={`w-3 h-3 rounded-full ${region.color} mr-2`}></div>
                {region.name}
              </Button>
            ))}
          </div>

          {/* Google Maps Embed */}
          <div className="relative bg-gradient-to-r from-cyan-600 to-blue-600 p-1 rounded-2xl shadow-2xl mb-12">
            <div className="bg-white rounded-xl overflow-hidden">
              <div className="aspect-video relative">
                <iframe
                  src="https://www.google.com/maps/d/u/0/embed?mid=1uXbH8Px2s2mENx8_GsRNcRPKPTiYkXw&ehbc=2E312F&noprof=1"
                  className="absolute inset-0 w-full h-full"
                  style={{
                    border: 0,
                    marginTop: '-80px',
                    height: 'calc(100% + 80px)',
                    pointerEvents: 'none'
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AirFresh Marketing Locations Map"
                ></iframe>
                <div
                  className="absolute inset-0 cursor-pointer"
                  onClick={(e) => {
                    const iframe = e.currentTarget.previousElementSibling as HTMLIFrameElement;
                    if (iframe) {
                      iframe.style.pointerEvents = 'auto';
                      e.currentTarget.style.display = 'none';
                    }
                  }}
                  style={{ background: 'transparent' }}
                ></div>
              </div>
            </div>
          </div>

          {/* Cities Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredCities.map((city, index) => {
              const region = regions.find(r => r.name === city.region);
              const citySlug = city.name.toLowerCase().replace(/\s+/g, '-');

              const cardContent = (
                <Card className="hover:shadow-lg transition-all duration-300 group cursor-pointer h-full">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 group-hover:text-cyan-600 transition-colors">
                          {city.name}
                        </h3>
                        <p className="text-sm text-gray-500">{city.state}</p>
                      </div>
                      {city.isHQ && (
                        <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs">
                          HQ
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                      <div className={`w-2 h-2 rounded-full ${region?.color}`}></div>
                      {city.region}
                    </div>
                    <div className="flex items-center text-xs text-cyan-600 font-medium">
                      View Details <ArrowRight className="w-3 h-3 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              );

              return (
                <motion.div
                  key={city.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href={`/cities/${citySlug}`}>
                    {cardContent}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Headquarters Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700">
                <Building2 className="w-4 h-4 mr-1" />
                Headquarters
              </Badge>
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Based in Denver, Colorado
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our headquarters in Denver serves as the hub for our nationwide operations.
                From the heart of the Mile High City, we coordinate experiential marketing campaigns
                across all 50+ markets we serve.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-cyan-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">720 S. Colorado Blvd., Penthouse North<br />Denver, CO 80246</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-cyan-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a href="tel:+13037206060" className="text-cyan-600 hover:text-cyan-700">+1 (303) 720-6060</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-cyan-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:hello@airfreshmarketing.com" className="text-cyan-600 hover:text-cyan-700">hello@airfreshmarketing.com</a>
                  </div>
                </div>
              </div>
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700">
                  Get in Touch
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-2xl opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1619947790672-f0720d5f1d6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Denver skyline"
                className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Launch Your Campaign?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              No matter where your target audience is located, we have the local expertise
              and national reach to make your experiential marketing campaign a success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Start Your Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-cyan-600">
                  View Our Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
