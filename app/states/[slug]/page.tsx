import { notFound } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, CheckCircle, Star, Phone, ArrowRight, Building, TrendingUp, Award, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SEO from "@/components/SEO";

interface StatePageProps {
  params: Promise<{ slug: string }>;
}

// State data with comprehensive information
const states = [
  {
    slug: 'ca',
    name: 'California',
    fullName: 'California',
    image: '/images/states/california-events.jpg',
    alt: 'California experiential marketing events from Los Angeles to San Francisco',
    majorCities: ['Los Angeles', 'San Francisco', 'San Diego', 'Sacramento', 'San Jose'],
    stats: {
      events: '2000+',
      cities: '30+',
      ambassadors: '500+'
    },
    description: 'From the beaches of Southern California to the tech hubs of the Bay Area, we deliver comprehensive experiential marketing campaigns throughout the Golden State.',
    services: [
      'Beach and boardwalk activations',
      'Music festival brand experiences',
      'Tech conference guerrilla marketing',
      'Hollywood entertainment events'
    ]
  },
  {
    slug: 'ny',
    name: 'New York',
    fullName: 'New York',
    image: '/images/states/new-york-events.jpg',
    alt: 'New York statewide experiential marketing from NYC to Buffalo',
    majorCities: ['New York City', 'Buffalo', 'Rochester', 'Albany', 'Syracuse'],
    stats: {
      events: '1500+',
      cities: '25+',
      ambassadors: '350+'
    },
    description: 'Covering the entire Empire State from Manhattan\'s Times Square to Niagara Falls, delivering impactful brand experiences across diverse markets.',
    services: [
      'NYC metropolitan area campaigns',
      'Upstate New York market penetration',
      'Multi-city tour coordination',
      'Fashion Week and cultural events'
    ]
  },
  {
    slug: 'tx',
    name: 'Texas',
    fullName: 'Texas',
    image: '/images/states/texas-events.jpg',
    alt: 'Texas experiential marketing from Austin to Houston and Dallas',
    majorCities: ['Houston', 'Austin', 'Dallas', 'San Antonio', 'Fort Worth'],
    stats: {
      events: '1200+',
      cities: '20+',
      ambassadors: '300+'
    },
    description: 'Everything\'s bigger in Texas, including our experiential marketing campaigns. From SXSW in Austin to rodeos in Houston, we cover the Lone Star State.',
    services: [
      'SXSW and festival activations',
      'Sports venue campaigns',
      'Oil & gas industry events',
      'University campus programs'
    ]
  },
  {
    slug: 'fl',
    name: 'Florida',
    fullName: 'Florida',
    image: '/images/states/florida-events.jpg',
    alt: 'Florida experiential marketing from Miami Beach to Orlando theme parks',
    majorCities: ['Miami', 'Orlando', 'Tampa', 'Jacksonville', 'Fort Lauderdale'],
    stats: {
      events: '1000+',
      cities: '18+',
      ambassadors: '250+'
    },
    description: 'From South Beach to theme parks, spring break to Art Basel, we activate brands across the Sunshine State\'s diverse markets.',
    services: [
      'Beach and resort activations',
      'Theme park partnerships',
      'Spring break campaigns',
      'Art Basel and cultural events'
    ]
  },
  {
    slug: 'il',
    name: 'Illinois',
    fullName: 'Illinois',
    image: '/images/states/illinois-events.jpg',
    alt: 'Illinois experiential marketing centered in Chicago metropolitan area',
    majorCities: ['Chicago', 'Aurora', 'Rockford', 'Joliet', 'Naperville'],
    stats: {
      events: '800+',
      cities: '15+',
      ambassadors: '200+'
    },
    description: 'Anchored in Chicago but covering the entire state, we bring experiential marketing excellence to the Land of Lincoln.',
    services: [
      'Chicago Loop activations',
      'Millennium Park events',
      'Sports venue campaigns',
      'University campus programs'
    ]
  },
  {
    slug: 'co',
    name: 'Colorado',
    fullName: 'Colorado',
    image: '/images/states/colorado-events.jpg',
    alt: 'Colorado experiential marketing from Denver to ski resorts',
    majorCities: ['Denver', 'Colorado Springs', 'Aurora', 'Fort Collins', 'Boulder'],
    stats: {
      events: '600+',
      cities: '12+',
      ambassadors: '150+'
    },
    description: 'Our home state advantage means unparalleled experiential marketing from Denver\'s urban core to Aspen\'s ski slopes.',
    services: [
      'Red Rocks concert activations',
      'Ski resort brand experiences',
      'Outdoor adventure campaigns',
      'Cannabis industry events'
    ]
  },
  {
    slug: 'ga',
    name: 'Georgia',
    fullName: 'Georgia',
    image: '/images/states/georgia-events.jpg',
    alt: 'Georgia experiential marketing focused on Atlanta metropolitan area',
    majorCities: ['Atlanta', 'Augusta', 'Columbus', 'Savannah', 'Athens'],
    stats: {
      events: '500+',
      cities: '10+',
      ambassadors: '120+'
    },
    description: 'From Atlanta\'s bustling downtown to Savannah\'s historic district, we activate brands throughout the Peach State.',
    services: [
      'Atlanta BeltLine activations',
      'Music and film industry events',
      'College football campaigns',
      'Convention center programs'
    ]
  },
  {
    slug: 'wa',
    name: 'Washington',
    fullName: 'Washington',
    image: '/images/states/washington-events.jpg',
    alt: 'Washington state experiential marketing from Seattle to Spokane',
    majorCities: ['Seattle', 'Spokane', 'Tacoma', 'Vancouver', 'Bellevue'],
    stats: {
      events: '450+',
      cities: '10+',
      ambassadors: '100+'
    },
    description: 'From Seattle\'s Pike Place Market to the wine country of Eastern Washington, we deliver experiential excellence statewide.',
    services: [
      'Tech industry activations',
      'Pike Place Market campaigns',
      'Music festival experiences',
      'Outdoor recreation events'
    ]
  }
];

// Helper function to generate ImageObject schema
function generateImageSchema(imageData: {
  url: string;
  name: string;
  description: string;
  caption: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "contentUrl": `https://airfreshmarketing.com${imageData.url}`,
    "name": imageData.name,
    "description": imageData.description,
    "caption": imageData.caption,
    "thumbnailUrl": `https://airfreshmarketing.com${imageData.url}`,
    "width": "1200",
    "height": "800"
  };
}

export async function generateStaticParams() {
  return states.map(state => ({
    slug: state.slug
  }));
}

export default async function StatePage({ params }: StatePageProps) {
  const { slug } = await params;
  const state = states.find(s => s.slug === slug);

  if (!state) {
    notFound();
  }

  const pageTitle = `${state.fullName} Experiential Marketing & Event Staffing | AirFresh Marketing`;
  const pageDescription = `Professional experiential marketing services across ${state.fullName}. Brand ambassadors, street teams, and guerrilla marketing in ${state.majorCities.slice(0, 3).join(', ')} and more.`;

  // Generate structured data with ImageObject
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `https://airfreshmarketing.com/states/${state.slug}#business`,
        "name": `AirFresh Marketing - ${state.fullName}`,
        "description": pageDescription,
        "url": `https://airfreshmarketing.com/states/${state.slug}`,
        "address": {
          "@type": "PostalAddress",
          "addressRegion": state.name,
          "addressCountry": "US"
        },
        "areaServed": {
          "@type": "State",
          "name": state.fullName
        }
      },
      generateImageSchema({
        url: state.image,
        name: `${state.fullName} Experiential Marketing`,
        description: `Experiential marketing campaigns across ${state.fullName}`,
        caption: state.alt
      })
    ]
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords={[
          `${state.fullName} experiential marketing`,
          `${state.fullName} brand ambassadors`,
          `${state.fullName} event staffing`,
          ...state.majorCities.map(city => `${city} marketing`),
          'guerrilla marketing',
          'product sampling'
        ].join(', ')}
        pageType="location"
        canonical={`https://airfreshmarketing.com/states/${state.slug}`}
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative h-[500px] lg:h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={state.image}
            alt={state.alt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 pointer-events-none" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-semibold uppercase tracking-wide">{state.fullName}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {state.fullName} Experiential Marketing Agency
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                {state.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                  <Link href="/contact">
                    Get {state.name} Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20">
                  <Link href={`tel:3037206060`}>
                    <Phone className="w-5 h-5 mr-2" />
                    (303) 720-6060
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* State Stats */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{state.stats.events}</div>
              <div className="text-lg text-cyan-100">Events Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{state.stats.cities}</div>
              <div className="text-lg text-cyan-100">Cities Covered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{state.stats.ambassadors}</div>
              <div className="text-lg text-cyan-100">Brand Ambassadors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Major Cities Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our {state.fullName} Locations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {state.majorCities.map((city, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Building className="w-8 h-8 text-cyan-600" />
                    <h3 className="text-xl font-bold">{city}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Professional experiential marketing services in {city} and surrounding areas.
                  </p>
                  <Link href={`/cities/${city.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Button variant="outline" className="w-full">
                      View {city} Services
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {state.fullName} Experiential Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {state.services.map((service, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-700">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose AirFresh Marketing for {state.fullName}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-8">
                <Users className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Local Expertise</h3>
                <p className="text-gray-600">
                  {state.stats.ambassadors} trained brand ambassadors who know {state.fullName} markets inside and out.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-8">
                <TrendingUp className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Proven Results</h3>
                <p className="text-gray-600">
                  {state.stats.events} successful events delivered across {state.stats.cities} cities in {state.fullName}.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-8">
                <Award className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Full Coverage</h3>
                <p className="text-gray-600">
                  From major metros to smaller markets, we cover all of {state.fullName}.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Activate Your Brand Across {state.fullName}?
          </h2>
          <p className="text-xl mb-8 text-cyan-50">
            Let's create an unforgettable experiential marketing campaign in {state.fullName}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
              <Link href="/contact">
                Start Your {state.name} Campaign
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              <Link href="/portfolio">
                View {state.name} Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}