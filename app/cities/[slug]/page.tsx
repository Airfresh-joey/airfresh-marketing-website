import { notFound } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, CheckCircle, Star, Phone, ArrowRight, Users, TrendingUp, Award, Clock, Target, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SEO from "@/components/SEO";
import { cities as allCitiesData } from "@/server/cities-data";
import type { Metadata } from 'next';

interface CityPageProps {
  params: Promise<{ slug: string }>;
}

// Generate metadata for SEO (server-side for crawlers)
export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const cityData = allCitiesData.find(c => c.slug === slug);
  
  if (!cityData) {
    return { title: 'City Not Found' };
  }
  
  const cityName = cityData.city;
  const stateName = cityData.state;
  
  return {
    title: `${cityName} Brand Ambassadors & Event Staffing`,
    description: `Professional brand ambassadors and event staffing in ${cityName}, ${stateName}. Street teams, product sampling, and experiential marketing with proven ROI.`,
    keywords: `${cityName} experiential marketing, ${cityName} brand ambassadors, ${cityName} street teams, ${cityName} product sampling, ${cityName} event staffing`,
    openGraph: {
      title: `${cityName} Experiential Marketing | AirFresh Marketing`,
      description: `Professional experiential marketing services in ${cityName}, ${stateName}. Brand ambassadors, street teams, and product sampling.`,
      url: `https://www.airfreshmarketing.com/cities/${slug}`,
      type: 'website',
      images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${cityName} Experiential Marketing | AirFresh Marketing`,
      description: `Professional experiential marketing services in ${cityName}, ${stateName}.`,
      images: ['/images/og-image.jpg'],
    },
    alternates: {
      canonical: `https://www.airfreshmarketing.com/cities/${slug}`,
    },
  };
}

// Rich city data with localized information (detailed content for major markets)
const richCities = [
  {
    slug: 'new-york',
    name: 'New York',
    state: 'NY',
    image: '/images/cities/new-york-activation.jpg',
    alt: 'New York experiential marketing activation with brand ambassadors in Times Square',
    problems: [
      'Cutting through the noise in America\'s busiest city',
      'Standing out among countless competing brands',
      'Reaching diverse, fast-moving audiences'
    ],
    solutions: [
      'Strategic Times Square and Union Square activations',
      'Multi-borough street team deployments',
      'NYC-specific influencer partnerships'
    ],
    stats: {
      events: '500+',
      ambassadors: '200+',
      samples: '1M+'
    },
    testimonial: 'AirFresh Marketing helped us achieve 300% ROI on our NYC product launch with their street teams.',
    clients: ['Google', 'Pepsi', 'Lyft']
  },
  {
    slug: 'los-angeles',
    name: 'Los Angeles',
    state: 'CA',
    image: '/images/cities/los-angeles-sampling.jpg',
    alt: 'Los Angeles experiential product sampling at Venice Beach and Hollywood',
    problems: [
      'Navigating LA\'s sprawling geography',
      'Reaching entertainment industry influencers',
      'Standing out in the entertainment capital'
    ],
    solutions: [
      'Beach activations from Venice to Malibu',
      'Hollywood Boulevard guerrilla campaigns',
      'Festival presence at Coachella and more'
    ],
    stats: {
      events: '400+',
      ambassadors: '150+',
      samples: '800K+'
    },
    testimonial: 'Their LA team knows exactly where to find our target demographic - from beaches to festivals.',
    clients: ['Mac Cosmetics', 'Red Bull', 'Adidas']
  },
  {
    slug: 'chicago',
    name: 'Chicago',
    state: 'IL',
    image: '/images/cities/chicago-event.jpg',
    alt: 'Chicago brand activation at Millennium Park with professional brand ambassadors',
    problems: [
      'Weather challenges for outdoor events',
      'Competing with major sports events',
      'Reaching both tourists and locals'
    ],
    solutions: [
      'Millennium Park strategic activations',
      'Navy Pier tourist engagement programs',
      'Loop business district sampling'
    ],
    stats: {
      events: '300+',
      ambassadors: '100+',
      samples: '500K+'
    },
    testimonial: 'AirFresh Marketing\'s Chicago team delivered exceptional results despite challenging weather conditions.',
    clients: ['Microsoft', '5-Hour Energy', 'Clif Bar']
  },
  {
    slug: 'miami',
    name: 'Miami',
    state: 'FL',
    image: '/images/cities/miami-beach.jpg',
    alt: 'Miami experiential marketing on South Beach with brand ambassadors',
    problems: [
      'Year-round competition for attention',
      'Reaching international visitors',
      'Beach and nightlife market saturation'
    ],
    solutions: [
      'South Beach premium activations',
      'Art Basel and Miami Music Week presence',
      'Wynwood Walls creative campaigns'
    ],
    stats: {
      events: '350+',
      ambassadors: '120+',
      samples: '600K+'
    },
    testimonial: 'Their Miami team perfectly captured the city\'s energy and delivered amazing engagement rates.',
    clients: ['Pepsi', 'Naked Juice', 'Nike']
  },
  {
    slug: 'denver',
    name: 'Denver',
    state: 'CO',
    image: '/images/cities/denver-downtown.jpg',
    alt: 'Denver experiential marketing downtown and at Red Rocks with street teams',
    problems: [
      'Altitude affecting outdoor events',
      'Seasonal tourist fluctuations',
      'Reaching outdoor enthusiast demographic'
    ],
    solutions: [
      'Red Rocks concert activations',
      'Downtown 16th Street Mall campaigns',
      'Ski resort winter programs'
    ],
    stats: {
      events: '250+',
      ambassadors: '80+',
      samples: '400K+'
    },
    testimonial: 'As a Denver-based agency, AirFresh Marketing knows our city inside and out.',
    clients: ['Merrell', 'Clif Bar', 'Coors']
  },
  {
    slug: 'san-francisco',
    name: 'San Francisco',
    state: 'CA',
    image: '/images/cities/san-francisco-activation.jpg',
    alt: 'San Francisco tech industry experiential marketing at Fisherman\'s Wharf',
    problems: [
      'Tech-saturated market',
      'High cost of activation spaces',
      'Reaching both tourists and tech workers'
    ],
    solutions: [
      'Union Square high-traffic activations',
      'Tech campus guerrilla marketing',
      'Fisherman\'s Wharf tourist engagement'
    ],
    stats: {
      events: '200+',
      ambassadors: '75+',
      samples: '350K+'
    },
    testimonial: 'They understand the unique SF market and delivered great results at tech conferences.',
    clients: ['Google', 'Lyft', 'Microsoft']
  },
  {
    slug: 'austin',
    name: 'Austin',
    state: 'TX',
    image: '/images/cities/austin-sxsw.jpg',
    alt: 'Austin SXSW experiential marketing activation with brand ambassadors',
    problems: [
      'SXSW competition overload',
      'Reaching music and tech audiences',
      'Year-round festival saturation'
    ],
    solutions: [
      'SXSW strategic presence',
      '6th Street activation programs',
      'ACL and music festival campaigns'
    ],
    stats: {
      events: '180+',
      ambassadors: '60+',
      samples: '300K+'
    },
    testimonial: 'AirFresh Marketing owns SXSW - they know exactly how to cut through the noise.',
    clients: ['Spotify', 'Red Bull', 'Samsung']
  },
  {
    slug: 'atlanta',
    name: 'Atlanta',
    state: 'GA',
    image: '/images/cities/atlanta-activation.jpg',
    alt: 'Atlanta experiential marketing at Mercedes-Benz Stadium and Midtown',
    problems: [
      'Sprawling metro area coverage',
      'Reaching diverse demographics',
      'Sports event competition'
    ],
    solutions: [
      'BeltLine strategic activations',
      'Mercedes-Benz Stadium programs',
      'Midtown and Buckhead campaigns'
    ],
    stats: {
      events: '220+',
      ambassadors: '90+',
      samples: '450K+'
    },
    testimonial: 'Their Atlanta team delivered incredible results during Super Bowl LIII.',
    clients: ['Coca-Cola', 'NFL', 'Delta']
  },
  {
    slug: 'san-diego',
    name: 'San Diego',
    state: 'CA',
    image: '/images/case-studies/gallery/netflix/netflix-5.jpg',
    alt: 'San Diego beach and convention center experiential marketing',
    problems: [
      'Competition from beach destinations',
      'Reaching military and tourist demographics',
      'Convention season saturation'
    ],
    solutions: [
      'Gaslamp Quarter activations',
      'Beach boardwalk campaigns',
      'Comic-Con brand experiences'
    ],
    stats: {
      events: '180+',
      ambassadors: '70+',
      samples: '350K+'
    },
    testimonial: 'Perfect execution at Comic-Con and beach activations throughout the summer.',
    clients: ['PlayStation', 'Monster Energy', 'GoPro']
  },
  {
    slug: 'seattle',
    name: 'Seattle',
    state: 'WA',
    image: '/images/case-studies/gallery/qwick/qwick-1.jpg',
    alt: 'Seattle Pike Place Market and tech industry experiential marketing',
    problems: [
      'Weather limitations for outdoor events',
      'Tech-savvy, marketing-resistant audience',
      'High cost of premium locations'
    ],
    solutions: [
      'Pike Place Market foot traffic campaigns',
      'Capitol Hill nightlife activations',
      'Tech campus guerrilla marketing'
    ],
    stats: {
      events: '160+',
      ambassadors: '65+',
      samples: '320K+'
    },
    testimonial: 'Exceptional local knowledge and perfect execution in the Seattle tech scene.',
    clients: ['Amazon', 'Starbucks', 'Boeing']
  },
  {
    slug: 'portland',
    name: 'Portland',
    state: 'OR',
    image: '/images/case-studies/gallery/qwick/qwick-2.jpg',
    alt: 'Portland downtown and food festival experiential marketing',
    problems: [
      'Unique, independent-minded market',
      'Resistance to corporate marketing',
      'Emphasis on sustainability'
    ],
    solutions: [
      'Pearl District artisan activations',
      'Food cart pod partnerships',
      'Eco-conscious campaign strategies'
    ],
    stats: {
      events: '120+',
      ambassadors: '50+',
      samples: '250K+'
    },
    testimonial: 'They understood our eco-friendly brand and delivered authentic Portland engagement.',
    clients: ['Nike', 'Columbia', 'New Seasons']
  },
  {
    slug: 'phoenix',
    name: 'Phoenix',
    state: 'AZ',
    image: '/images/case-studies/gallery/duracell/duracell-1.jpg',
    alt: 'Phoenix outdoor and sports venue experiential marketing',
    problems: [
      'Extreme summer heat limiting outdoor events',
      'Sprawling suburban geography',
      'Spring training and sports competition'
    ],
    solutions: [
      'Indoor mall strategic activations',
      'Spring training ballpark campaigns',
      'Evening and winter outdoor events'
    ],
    stats: {
      events: '140+',
      ambassadors: '60+',
      samples: '280K+'
    },
    testimonial: 'Smart seasonal planning and excellent execution in challenging desert conditions.',
    clients: ['Coors', 'State Farm', 'Chase']
  },
  {
    slug: 'las-vegas',
    name: 'Las Vegas',
    state: 'NV',
    image: '/images/case-studies/gallery/formula1/formula1-1.jpg',
    alt: 'Las Vegas Strip and convention experiential marketing',
    problems: [
      'Oversaturation of marketing messages',
      'Transient tourist population',
      'High costs for Strip locations'
    ],
    solutions: [
      'Fremont Street Experience activations',
      'Convention center strategic presence',
      'Nightclub and pool party sponsorships'
    ],
    stats: {
      events: '200+',
      ambassadors: '85+',
      samples: '400K+'
    },
    testimonial: 'Incredible ROI at CES and throughout our multi-week Vegas activation.',
    clients: ['MGM', 'Uber', 'Red Bull']
  },
  {
    slug: 'dallas',
    name: 'Dallas',
    state: 'TX',
    image: '/images/case-studies/gallery/duracell/duracell-2.jpg',
    alt: 'Dallas downtown and sports venue experiential marketing',
    problems: [
      'Dispersed suburban market',
      'Strong local brand loyalty',
      'Competition from Houston and Austin'
    ],
    solutions: [
      'Deep Ellum entertainment district',
      'Cowboys/Mavericks game day activations',
      'Uptown luxury brand experiences'
    ],
    stats: {
      events: '190+',
      ambassadors: '80+',
      samples: '380K+'
    },
    testimonial: 'Outstanding results at State Fair of Texas and year-round urban campaigns.',
    clients: ['AT&T', 'American Airlines', 'Southwest']
  },
  {
    slug: 'houston',
    name: 'Houston',
    state: 'TX',
    image: '/images/case-studies/gallery/1800-tequila/1800-tequila-1.jpg',
    alt: 'Houston energy corridor and sports venue experiential marketing',
    problems: [
      'Massive geographic sprawl',
      'Diverse multilingual audience',
      'Oil industry seasonal cycles'
    ],
    solutions: [
      'Midtown and Montrose activations',
      'Astros and Texans game day campaigns',
      'Energy industry convention presence'
    ],
    stats: {
      events: '210+',
      ambassadors: '90+',
      samples: '420K+'
    },
    testimonial: 'Perfect execution during Houston Rodeo and throughout the diverse Houston market.',
    clients: ['Shell', 'NASA', 'Houston Rockets']
  },
  {
    slug: 'charlotte',
    name: 'Charlotte',
    state: 'NC',
    image: '/images/cities/atlanta-activation.jpg',
    alt: 'Charlotte banking district and sports venue experiential marketing',
    problems: [
      'Banking industry focus limits consumer reach',
      'Growing but still developing market',
      'Competition from Atlanta'
    ],
    solutions: [
      'Uptown lunch crowd activations',
      'Panthers game day experiences',
      'South End brewery district campaigns'
    ],
    stats: {
      events: '100+',
      ambassadors: '45+',
      samples: '220K+'
    },
    testimonial: 'Great local insights and professional execution in the Charlotte financial district.',
    clients: ['Bank of America', 'Lowe\'s', 'Panthers']
  },
  {
    slug: 'nashville',
    name: 'Nashville',
    state: 'TN',
    image: '/images/case-studies/gallery/bww/bww-1.jpg',
    alt: 'Nashville Broadway and music venue experiential marketing',
    problems: [
      'Tourist-focused market challenges',
      'Music industry event saturation',
      'Bachelor/bachelorette party crowds'
    ],
    solutions: [
      'Broadway honky-tonk activations',
      'CMA Fest and music festival presence',
      'East Nashville local engagement'
    ],
    stats: {
      events: '130+',
      ambassadors: '55+',
      samples: '270K+'
    },
    testimonial: 'Perfect understanding of Nashville\'s unique music culture and tourist dynamics.',
    clients: ['Jack Daniel\'s', 'Gibson', 'Titans']
  },
  {
    slug: 'minneapolis',
    name: 'Minneapolis',
    state: 'MN',
    image: '/images/cities/chicago-event.jpg',
    alt: 'Minneapolis Mall of America and downtown experiential marketing',
    problems: [
      'Harsh winter weather limiting outdoor events',
      'Split market with St. Paul',
      'Indoor venue dependency'
    ],
    solutions: [
      'Mall of America mega-activations',
      'Indoor Vikings/Timberwolves events',
      'Summer festival concentration'
    ],
    stats: {
      events: '110+',
      ambassadors: '50+',
      samples: '240K+'
    },
    testimonial: 'Creative indoor solutions and excellent summer activation strategies.',
    clients: ['Target', 'Best Buy', '3M']
  },
  {
    slug: 'detroit',
    name: 'Detroit',
    state: 'MI',
    image: '/images/cities/chicago-event.jpg',
    alt: 'Detroit downtown renaissance and automotive experiential marketing',
    problems: [
      'Economic challenges in certain areas',
      'Automotive industry focus',
      'Rebuilding urban core'
    ],
    solutions: [
      'Campus Martius Park activations',
      'Auto show and industry event presence',
      'Sports district game day campaigns'
    ],
    stats: {
      events: '95+',
      ambassadors: '42+',
      samples: '210K+'
    },
    testimonial: 'Strong local partnerships and authentic connection to Detroit\'s comeback story.',
    clients: ['Ford', 'GM', 'Stellantis']
  },
  {
    slug: 'boston',
    name: 'Boston',
    state: 'MA',
    image: '/images/case-studies/gallery/byoma/byoma-1.jpg',
    alt: 'Boston college campus and historic district experiential marketing',
    problems: [
      'Dense college population with limited reach',
      'Historic preservation restrictions',
      'Seasonal tourism fluctuations'
    ],
    solutions: [
      'Faneuil Hall tourist engagement',
      'College campus programs',
      'Red Sox game day activations'
    ],
    stats: {
      events: '170+',
      ambassadors: '75+',
      samples: '340K+'
    },
    testimonial: 'Excellent college market penetration and authentic Boston brand understanding.',
    clients: ['Dunkin\'', 'Samuel Adams', 'New Balance']
  },
  {
    slug: 'philadelphia',
    name: 'Philadelphia',
    state: 'PA',
    image: '/images/case-studies/gallery/microsoft/microsoft-3.jpg',
    alt: 'Philadelphia historic district and sports complex experiential marketing',
    problems: [
      'Overshadowed by NYC market',
      'Historic district limitations',
      'Passionate but skeptical audience'
    ],
    solutions: [
      'Rittenhouse Square activations',
      'Eagles/Phillies game day campaigns',
      'Historic Old City experiences'
    ],
    stats: {
      events: '150+',
      ambassadors: '68+',
      samples: '310K+'
    },
    testimonial: 'They get Philly\'s unique personality and delivered campaigns that resonated locally.',
    clients: ['Comcast', 'Wawa', 'Tastykake']
  },
  {
    slug: 'washington',
    name: 'Washington',
    state: 'DC',
    image: '/images/case-studies/gallery/ted/ted-1.jpg',
    alt: 'Washington DC monuments and convention center experiential marketing',
    problems: [
      'Government/tourist split market',
      'Security restrictions near monuments',
      'Transient population'
    ],
    solutions: [
      'Georgetown shopping district',
      'Convention center conference presence',
      'National Mall adjacent activations'
    ],
    stats: {
      events: '140+',
      ambassadors: '62+',
      samples: '290K+'
    },
    testimonial: 'Professional execution navigating DC\'s unique security and permit requirements.',
    clients: ['Politico', 'Marriott', 'Lockheed Martin']
  }
];

export async function generateStaticParams() {
  // Generate pages for ALL cities from cities-data.ts
  return allCitiesData.map(city => ({
    slug: city.slug
  }));
}

// Helper to generate default content for cities without rich data
function generateDefaultCityData(cityData: typeof allCitiesData[0]) {
  const stateAbbrev = getStateAbbrev(cityData.state);
  return {
    slug: cityData.slug,
    name: cityData.city,
    state: stateAbbrev,
    image: '/images/heroes/mac-cosmetics-experiential-marketing.jpeg',
    alt: `${cityData.city} experiential marketing and brand activation services`,
    problems: [
      `Reaching target audiences effectively in ${cityData.city}`,
      `Standing out in competitive ${cityData.industries?.[0] || 'local'} markets`,
      `Building authentic brand connections with local consumers`
    ],
    solutions: [
      `Strategic activations in high-traffic ${cityData.city} locations`,
      `Local brand ambassador teams who know the ${cityData.city} market`,
      `Data-driven campaigns tailored to ${cityData.city} demographics`
    ],
    stats: {
      events: cityData.marketSize === 'Large' ? '200+' : cityData.marketSize === 'Medium' ? '100+' : '50+',
      ambassadors: cityData.marketSize === 'Large' ? '75+' : cityData.marketSize === 'Medium' ? '40+' : '20+',
      samples: cityData.marketSize === 'Large' ? '400K+' : cityData.marketSize === 'Medium' ? '200K+' : '100K+'
    },
    testimonial: `AirFresh Marketing delivered exceptional results in ${cityData.city}. Their local expertise made all the difference.`,
    clients: ['Fortune 500 Brands', 'National Retailers', 'Consumer Products']
  };
}

// State name to abbreviation mapping
function getStateAbbrev(stateName: string): string {
  const stateMap: Record<string, string> = {
    'Alabama': 'AL', 'Alaska': 'AK', 'Arizona': 'AZ', 'Arkansas': 'AR', 'California': 'CA',
    'Colorado': 'CO', 'Connecticut': 'CT', 'Delaware': 'DE', 'Florida': 'FL', 'Georgia': 'GA',
    'Hawaii': 'HI', 'Idaho': 'ID', 'Illinois': 'IL', 'Indiana': 'IN', 'Iowa': 'IA',
    'Kansas': 'KS', 'Kentucky': 'KY', 'Louisiana': 'LA', 'Maine': 'ME', 'Maryland': 'MD',
    'Massachusetts': 'MA', 'Michigan': 'MI', 'Minnesota': 'MN', 'Mississippi': 'MS', 'Missouri': 'MO',
    'Montana': 'MT', 'Nebraska': 'NE', 'Nevada': 'NV', 'New Hampshire': 'NH', 'New Jersey': 'NJ',
    'New Mexico': 'NM', 'New York': 'NY', 'North Carolina': 'NC', 'North Dakota': 'ND', 'Ohio': 'OH',
    'Oklahoma': 'OK', 'Oregon': 'OR', 'Pennsylvania': 'PA', 'Rhode Island': 'RI', 'South Carolina': 'SC',
    'South Dakota': 'SD', 'Tennessee': 'TN', 'Texas': 'TX', 'Utah': 'UT', 'Vermont': 'VT',
    'Virginia': 'VA', 'Washington': 'WA', 'West Virginia': 'WV', 'Wisconsin': 'WI', 'Wyoming': 'WY',
    'District of Columbia': 'DC'
  };
  return stateMap[stateName] || stateName.substring(0, 2).toUpperCase();
}

// Helper function to generate ImageObject schema
function generateImageSchema(imageData: {
  url: string;
  name: string;
  description: string;
  caption: string;
  width?: string;
  height?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "contentUrl": `https://airfreshmarketing.com${imageData.url}`,
    "name": imageData.name,
    "description": imageData.description,
    "caption": imageData.caption,
    "thumbnailUrl": `https://airfreshmarketing.com${imageData.url}`,
    "width": imageData.width || "1200",
    "height": imageData.height || "800"
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { slug } = await params;
  
  // First, check if we have rich data for this city
  let city = richCities.find(c => c.slug === slug);
  
  // If not, generate from cities-data.ts
  if (!city) {
    const basicCityData = allCitiesData.find(c => c.slug === slug);
    if (!basicCityData) {
      notFound();
    }
    city = generateDefaultCityData(basicCityData);
  }

  const pageTitle = `${city.name} Experiential Marketing & Brand Activation | AirFresh Marketing`;
  const pageDescription = `Professional experiential marketing services in ${city.name}, ${city.state}. Brand ambassadors, street teams, product sampling, and guerrilla marketing campaigns with proven ROI.`;

  // Generate structured data with ImageObject
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `https://airfreshmarketing.com/cities/${city.slug}#business`,
        "name": `AirFresh Marketing - ${city.name}`,
        "description": pageDescription,
        "url": `https://airfreshmarketing.com/cities/${city.slug}`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": city.name,
          "addressRegion": city.state,
          "addressCountry": "US"
        },
        "areaServed": {
          "@type": "City",
          "name": city.name
        }
      },
      generateImageSchema({
        url: city.image,
        name: `${city.name} Experiential Marketing`,
        description: `Experiential marketing activation in ${city.name} with brand ambassadors and sampling`,
        caption: city.alt
      }),
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": `How much does experiential marketing cost in ${city.name}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Experiential marketing costs in ${city.name} vary by campaign scope. Product sampling starts at $5,000, pop-up experiences range from $25,000-$100,000, and multi-location tours exceed $100,000. Contact us for a customized ${city.name} quote.`
            }
          },
          {
            "@type": "Question",
            "name": `What makes AirFresh Marketing the best choice for ${city.name} brand activations?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `With ${city.stats.events} events completed and ${city.stats.ambassadors} trained brand ambassadors in ${city.name}, we deliver proven results. Our local expertise and ${city.stats.samples} samples distributed demonstrate our market leadership.`
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords={[
          `${city.name} experiential marketing`,
          `${city.name} brand ambassadors`,
          `${city.name} street teams`,
          `${city.name} product sampling`,
          `${city.name} guerrilla marketing`,
          `${city.name} event staffing`,
          'brand activation',
          'event marketing'
        ].join(', ')}
        pageType="location"
        canonical={`https://airfreshmarketing.com/cities/${city.slug}`}
        structuredData={structuredData}
      />

      {/* Hero Section with Local Image */}
      <section className="relative h-[500px] lg:h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={city.image}
            alt={city.alt}
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
                <span className="text-cyan-400 font-semibold uppercase tracking-wide">{city.name}, {city.state}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {city.name} Experiential Marketing & Brand Activation
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Professional brand ambassadors, street teams, and guerrilla marketing campaigns that deliver measurable results in {city.name}.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                  <Link href={`/contact?source=${city.slug}`}>
                    <Sparkles className="w-5 h-5 mr-2" />
                    Get {city.name} Quote
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20">
                  <Link href="/portfolio">
                    View {city.name} Portfolio
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Stats Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{city.stats.events}</div>
              <div className="text-lg text-cyan-100">Events in {city.name}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{city.stats.ambassadors}</div>
              <div className="text-lg text-cyan-100">Local Brand Ambassadors</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{city.stats.samples}</div>
              <div className="text-lg text-cyan-100">Samples Distributed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems & Solutions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Problems */}
            <Card className="border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-red-500 to-orange-500 text-white">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Target className="w-6 h-6" />
                  {city.name} Marketing Challenges
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {city.problems.map((problem, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{problem}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Solutions */}
            <Card className="border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <CheckCircle className="w-6 h-6" />
                  Our {city.name} Solutions
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {city.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{solution}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-2xl text-gray-700 italic mb-6">"{city.testimonial}"</p>
          <p className="text-gray-600">- {city.name} Client</p>
        </div>
      </section>

      {/* Client Work Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Trusted by Leading Brands</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We've delivered successful experiential marketing campaigns for industry-leading brands nationwide.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-xl shadow-lg h-48">
              <Image src="/images/clients/microsoft-activation-exact.jpg" alt="Microsoft activation" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white font-bold text-lg">Microsoft</div>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-lg h-48">
              <Image src="/images/clients/google-activation-exact.jpg" alt="Google activation" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white font-bold text-lg">Google</div>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-lg h-48">
              <Image src="/images/clients/pepsi-activation-exact.jpg" alt="Pepsi activation" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white font-bold text-lg">Pepsi</div>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-lg h-48">
              <Image src="/images/clients/netflix-activation-exact.jpg" alt="Netflix activation" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white font-bold text-lg">Netflix</div>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-lg h-48">
              <Image src="/images/clients/red-bull-activation-exact.jpg" alt="Red Bull activation" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white font-bold text-lg">Red Bull</div>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-lg h-48">
              <Image src="/images/clients/lyft-activation-exact.jpg" alt="Lyft activation" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white font-bold text-lg">Lyft</div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Complete Experiential Marketing Services in {city.name}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to execution, we deliver full-service experiential marketing campaigns tailored to the unique dynamics of the {city.name} market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-cyan-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Brand Ambassador Programs</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our {city.name} brand ambassadors are carefully selected and trained to represent your brand with authenticity and enthusiasm. Each ambassador undergoes comprehensive product knowledge training and receives ongoing support throughout your campaign. We maintain a diverse pool of {city.stats.ambassadors} ambassadors spanning various demographics to match your target audience perfectly.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Target className="w-12 h-12 text-cyan-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Street Team Activations</h3>
                <p className="text-gray-600 leading-relaxed">
                  High-energy street teams that bring your brand directly to consumers in {city.name}'s busiest locations. Our teams excel at guerrilla marketing tactics that generate buzz, drive social media engagement, and create memorable brand interactions. We handle all permits, logistics, and on-ground execution while you track real-time results through our proprietary platform.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Sparkles className="w-12 h-12 text-cyan-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Product Sampling Campaigns</h3>
                <p className="text-gray-600 leading-relaxed">
                  Strategic product sampling that drives trial and conversion in {city.name}. We've distributed {city.stats.samples} samples across {city.name}, leveraging high-traffic locations, events, and targeted demographic zones. Our sampling programs include data collection, opt-in generation, and detailed ROI reporting to prove campaign effectiveness.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-cyan-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Event Staffing & Management</h3>
                <p className="text-gray-600 leading-relaxed">
                  Professional event staff for conferences, trade shows, festivals, and corporate events throughout {city.name}. Our team handles everything from booth staffing and crowd management to VIP experiences and product demonstrations. We've successfully staffed {city.stats.events} events in {city.name} with consistently high client satisfaction ratings.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-cyan-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Pop-Up Experiences</h3>
                <p className="text-gray-600 leading-relaxed">
                  Immersive pop-up activations that transform spaces and create Instagram-worthy moments. From retail pop-ups to interactive installations, we design and execute experiences that stop {city.name} consumers in their tracks. Our team manages venue sourcing, build-out, staffing, and social amplification for maximum impact.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Clock className="w-12 h-12 text-cyan-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Multi-Market Tours</h3>
                <p className="text-gray-600 leading-relaxed">
                  Coordinated campaigns that position {city.name} as part of a broader market strategy. Whether you're launching nationally or regionally, we seamlessly integrate your {city.name} activation with campaigns in other cities, ensuring consistent branding and messaging while adapting to local market nuances.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Market Insights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Deep {city.name} Market Expertise</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Success in {city.name} requires more than just showing up—it demands intimate knowledge of local culture, consumer behavior, and market dynamics. Our team has executed {city.stats.events} campaigns in {city.name}, giving us unparalleled insights into what works and what doesn't in this unique market.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                We understand the seasonal fluctuations, major events calendar, high-traffic locations, and demographic distributions that define the {city.name} market. This local intelligence informs every strategic decision, from timing and location selection to messaging and activation tactics.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our {city.stats.ambassadors} locally-based brand ambassadors aren't just staff—they're authentic representatives who live and breathe {city.name} culture. They know the neighborhoods, speak the language, and connect with consumers in ways that out-of-town teams simply cannot replicate.
              </p>
            </div>
            <div>
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">{city.name} Market Advantages</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-gray-900">Established Local Network:</strong>
                        <p className="text-gray-600">Vetted relationships with venues, vendors, and permit authorities throughout {city.name}.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-gray-900">Real-Time Market Intelligence:</strong>
                        <p className="text-gray-600">Ongoing monitoring of competitor activations, consumer trends, and emerging opportunities.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-gray-900">Proven Track Record:</strong>
                        <p className="text-gray-600">{city.stats.events} successful events with measurable ROI and client satisfaction.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-gray-900">Scalable Talent Pool:</strong>
                        <p className="text-gray-600">Access to {city.stats.ambassadors} trained ambassadors available on-demand for any campaign size.</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our {city.name} Campaign Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that transforms concepts into successful experiential marketing campaigns in {city.name}.
            </p>
          </div>

          <div className="grid gap-8">
            <Card className="border-l-4 border-cyan-500">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-cyan-600">1</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Discovery & Strategy</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We begin every {city.name} campaign with deep discovery—understanding your brand objectives, target audience, competitive landscape, and budget parameters. Our team conducts market research specific to {city.name}, analyzing foot traffic patterns, demographic concentrations, and event calendars to identify optimal activation opportunities. This strategic foundation ensures every tactical decision is data-driven and aligned with your goals.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-blue-500">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-blue-600">2</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Planning & Logistics</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our {city.name} operations team handles the complex logistics that make or break experiential campaigns. We secure all necessary permits and insurance, source optimal locations, coordinate with local authorities, and develop detailed activation timelines. Our established relationships throughout {city.name} often provide access to premium locations and preferential treatment that newer agencies cannot secure.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-purple-500">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-purple-600">3</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Talent Recruitment & Training</h3>
                    <p className="text-gray-700 leading-relaxed">
                      From our pool of {city.stats.ambassadors} {city.name}-based ambassadors, we carefully select individuals who match your brand's personality and target demographic. Each team member receives comprehensive training on your product, brand messaging, and campaign objectives. We conduct role-playing exercises and provide detailed activation guides to ensure consistent, high-quality brand representation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-green-500">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-green-600">4</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Execution & Real-Time Management</h3>
                    <p className="text-gray-700 leading-relaxed">
                      On activation day, our {city.name} field managers oversee every detail—from setup through breakdown. Our proprietary technology platform provides real-time GPS check-ins, photo documentation, and data collection from the field. You receive instant updates on campaign progress, consumer engagement metrics, and any issues requiring attention, ensuring complete transparency and control.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-orange-500">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-orange-600">5</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Reporting & Analysis</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Within 48 hours of campaign completion, you receive a comprehensive report detailing all key performance metrics—samples distributed, consumer interactions, lead captures, social media engagement, and photo/video documentation. We provide actionable insights and recommendations for future {city.name} activations, helping you optimize ROI across subsequent campaigns.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Expanded */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Leading Brands Choose AirFresh Marketing in {city.name}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience, expertise, and execution that delivers measurable results for your {city.name} experiential marketing campaigns.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Award className="w-8 h-8 text-cyan-600" />
                  Proven {city.name} Experience
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  With {city.stats.events} successfully executed events in {city.name}, we've developed an unmatched understanding of this market. Our team knows which locations generate the most foot traffic, when to activate for maximum impact, and how to navigate the unique permitting and logistics challenges specific to {city.name}.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This experience translates into campaigns that avoid common pitfalls, capitalize on local opportunities, and deliver superior results. Our {city.name} clients benefit from lessons learned across hundreds of activations, ensuring your campaign leverages best practices from day one.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Users className="w-8 h-8 text-cyan-600" />
                  Elite Talent Network
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our {city.stats.ambassadors} {city.name}-based brand ambassadors represent the best in the business—vetted, trained, and proven through multiple successful campaigns. Unlike agencies that hire anyone available, we maintain rigorous standards for professionalism, reliability, and brand representation quality.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Each ambassador completes our comprehensive onboarding process, including background checks, training modules, and trial activations before representing your brand. This quality control ensures consistent, exceptional experiences for every consumer interaction in {city.name}.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold mb-8 text-center">Additional {city.name} Advantages</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Technology-Enabled Operations
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Our proprietary platform provides real-time visibility into your {city.name} campaign, from GPS-verified check-ins to instant photo uploads and live data collection. You track ROI as it happens, not weeks later.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Flexible Scaling
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Whether you need 5 ambassadors for an intimate activation or 50 for a major {city.name} event, we scale seamlessly. Our extensive talent pool and operational infrastructure support campaigns of any size without sacrificing quality.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Insurance & Compliance
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  We maintain comprehensive general liability insurance and ensure full compliance with all {city.name} regulations, permits, and ordinances. You gain peace of mind knowing legal and insurance requirements are expertly handled.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Post-Campaign Support
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Our relationship doesn't end when your {city.name} activation concludes. We provide ongoing strategic consultation, helping you optimize future campaigns based on data-driven insights and market intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions About {city.name} Experiential Marketing</h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about running experiential marketing campaigns in {city.name}.
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">How much does experiential marketing cost in {city.name}?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Experiential marketing costs in {city.name} vary significantly based on campaign scope, duration, and complexity. Basic product sampling campaigns typically start around $5,000-$10,000 for a single-day activation with 5-10 brand ambassadors. Mid-size pop-up experiences range from $25,000-$50,000, while comprehensive multi-day activations or large-scale events can exceed $100,000. Factors affecting cost include talent quantity, venue fees, permit expenses, production requirements, and campaign duration. We provide detailed, transparent quotes for every {city.name} campaign, ensuring you understand exactly what you're investing in and the expected ROI.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">What makes experiential marketing effective in {city.name}?</h3>
                <p className="text-gray-700 leading-relaxed">
                  {city.name}'s unique characteristics create ideal conditions for experiential marketing success. The city's diverse demographics, high foot traffic in key zones, and active event culture provide numerous opportunities for brand engagement. Unlike traditional advertising, experiential marketing in {city.name} creates memorable, personal interactions that drive brand affinity and word-of-mouth promotion. Our {city.stats.samples} samples distributed across {city.name} have generated measurable increases in brand awareness, purchase intent, and social media engagement for our clients. The ability to target specific {city.name} neighborhoods and demographics ensures your message reaches the right consumers at the right time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">How long does it take to plan a {city.name} campaign?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Timeline varies by campaign complexity, but we recommend a 4-6 week planning window for standard {city.name} activations. This allows adequate time for strategy development, permit acquisition, talent recruitment, training, and logistics coordination. However, we've successfully executed rush campaigns in as little as 2 weeks when necessary. The {city.name} permitting process typically requires 2-3 weeks for outdoor activations in public spaces, while private venue campaigns can move faster. Larger campaigns involving custom builds, extensive production, or multiple locations benefit from 8-12 week lead times to ensure flawless execution.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Do you handle permits and insurance for {city.name} events?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Absolutely. We manage all permitting, insurance, and regulatory compliance for {city.name} activations. Our team is well-versed in {city.name}'s specific requirements for public space usage, vendor licensing, and event permits. We maintain comprehensive general liability insurance and can provide certificate of insurance naming your brand and any venues as additional insureds. This expertise is particularly valuable in {city.name}, where permitting requirements can be complex and navigating local regulations requires established relationships with city authorities. We handle these details so you can focus on campaign strategy and results.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">What type of reporting do you provide for {city.name} campaigns?</h3>
                <p className="text-gray-700 leading-relaxed">
                  We deliver comprehensive post-campaign reports within 48 hours of activation completion. Reports include quantitative metrics (samples distributed, consumer interactions, lead captures, social media mentions) and qualitative insights (consumer feedback, market observations, recommendations). All {city.name} campaigns include GPS-verified check-ins, timestamped photos, and real-time data collection through our proprietary platform. You receive detailed ROI analysis showing cost per engagement, reach statistics, and conversion metrics. This data proves campaign effectiveness to stakeholders and informs strategy for future {city.name} activations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Can you staff events at any {city.name} venue?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, we staff events throughout {city.name}—from major convention centers and sports venues to intimate retail locations and outdoor public spaces. Our {city.stats.ambassadors} local ambassadors are familiar with venues across {city.name} and can navigate any environment professionally. We've successfully executed campaigns at {city.name}'s premier locations and have established relationships with key venue operators. Whether your event requires trade show booth staff, promotional models, product demonstrators, or crowd management personnel, we provide qualified talent matched to your specific venue and campaign objectives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Activate Your Brand in {city.name}?
          </h2>
          <p className="text-xl mb-8 text-cyan-50">
            Join {city.stats.events} successful campaigns in {city.name}. Let's create something unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
              <Link href={`/contact?source=${city.slug}`}>
                <Phone className="w-5 h-5 mr-2" />
                Call (303) 720-6060
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              <Link href={`/contact?source=${city.slug}`}>
                Get Free {city.name} Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}