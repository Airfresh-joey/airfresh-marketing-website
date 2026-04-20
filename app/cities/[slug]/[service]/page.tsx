import { notFound } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, CheckCircle, Star, Phone, ArrowRight, Users, TrendingUp, Award, Clock, Target, Sparkles, Building, Briefcase, Gift, Megaphone, Calendar, Camera } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
interface ServiceCityPageProps {
  params: Promise<{ slug: string; service: string }>;
}

// City data
const cities: Record<string, {
  name: string;
  state: string;
  image: string;
  stats: { events: string; ambassadors: string; samples: string };
  neighborhoods: string[];
  venues: string[];
}> = {
  'new-york': {
    name: 'New York',
    state: 'NY',
    image: '/images/cities/new-york-activation.jpg',
    stats: { events: '500+', ambassadors: '200+', samples: '1M+' },
    neighborhoods: ['Times Square', 'Union Square', 'SoHo', 'Brooklyn', 'Midtown Manhattan', 'Financial District'],
    venues: ['Javits Center', 'Madison Square Garden', 'Barclays Center', 'Central Park', 'Hudson Yards']
  },
  'los-angeles': {
    name: 'Los Angeles',
    state: 'CA',
    image: '/images/cities/los-angeles-sampling.jpg',
    stats: { events: '400+', ambassadors: '150+', samples: '800K+' },
    neighborhoods: ['Hollywood', 'Venice Beach', 'Santa Monica', 'Downtown LA', 'Beverly Hills', 'Westwood'],
    venues: ['LA Convention Center', 'Staples Center', 'Rose Bowl', 'Hollywood Boulevard', 'The Grove']
  },
  'chicago': {
    name: 'Chicago',
    state: 'IL',
    image: '/images/cities/chicago-event.jpg',
    stats: { events: '300+', ambassadors: '100+', samples: '500K+' },
    neighborhoods: ['Millennium Park', 'Navy Pier', 'The Loop', 'Wicker Park', 'River North', 'Wrigleyville'],
    venues: ['McCormick Place', 'United Center', 'Soldier Field', 'Magnificent Mile', 'Grant Park']
  },
  'miami': {
    name: 'Miami',
    state: 'FL',
    image: '/images/cities/miami-beach.jpg',
    stats: { events: '350+', ambassadors: '120+', samples: '600K+' },
    neighborhoods: ['South Beach', 'Wynwood', 'Brickell', 'Downtown Miami', 'Coconut Grove', 'Design District'],
    venues: ['Miami Beach Convention Center', 'American Airlines Arena', 'Bayfront Park', 'Ocean Drive', 'Lincoln Road']
  },
  'denver': {
    name: 'Denver',
    state: 'CO',
    image: '/images/cities/denver-downtown.jpg',
    stats: { events: '250+', ambassadors: '80+', samples: '400K+' },
    neighborhoods: ['16th Street Mall', 'LoDo', 'RiNo', 'Cherry Creek', 'Capitol Hill', 'Five Points'],
    venues: ['Colorado Convention Center', 'Ball Arena', 'Empower Field', 'Red Rocks', 'Civic Center Park']
  },
  'san-francisco': {
    name: 'San Francisco',
    state: 'CA',
    image: '/images/cities/san-francisco-activation.jpg',
    stats: { events: '200+', ambassadors: '75+', samples: '350K+' },
    neighborhoods: ['Union Square', 'Fishermans Wharf', 'SOMA', 'Marina District', 'Mission District', 'Financial District'],
    venues: ['Moscone Center', 'Chase Center', 'Oracle Park', 'Pier 39', 'Ferry Building']
  },
  'austin': {
    name: 'Austin',
    state: 'TX',
    image: '/images/cities/austin-sxsw.jpg',
    stats: { events: '180+', ambassadors: '60+', samples: '300K+' },
    neighborhoods: ['6th Street', 'South Congress', 'Rainey Street', 'East Austin', 'Downtown', 'The Domain'],
    venues: ['Austin Convention Center', 'Zilker Park', 'Circuit of Americas', 'Moody Center', 'ACL Live']
  },
  'atlanta': {
    name: 'Atlanta',
    state: 'GA',
    image: '/images/cities/atlanta-activation.jpg',
    stats: { events: '220+', ambassadors: '90+', samples: '450K+' },
    neighborhoods: ['Midtown', 'Buckhead', 'Atlantic Station', 'Ponce City Market', 'Westside', 'Old Fourth Ward'],
    venues: ['Georgia World Congress Center', 'Mercedes-Benz Stadium', 'State Farm Arena', 'Piedmont Park', 'The BeltLine']
  }
};

// Service data
const services: Record<string, {
  name: string;
  slug: string;
  title: string;
  icon: any;
  description: string;
  benefits: string[];
  useCases: string[];
  pricing: string;
  faqs: { q: string; a: string }[];
}> = {
  'brand-ambassadors': {
    name: 'Brand Ambassadors',
    slug: 'brand-ambassadors',
    title: 'Brand Ambassador Agency',
    icon: Users,
    description: 'Professional brand ambassadors who embody your brand values and create authentic connections with consumers.',
    benefits: [
      'Trained professionals representing your brand with authenticity',
      'Multilingual ambassadors for diverse markets',
      'Background-checked and vetted talent',
      'Real-time reporting and GPS check-ins',
      'Flexible staffing for any event size'
    ],
    useCases: [
      'Product launches and demonstrations',
      'Trade show and convention staffing',
      'Retail and in-store promotions',
      'Street team marketing campaigns',
      'Corporate events and hospitality'
    ],
    pricing: 'Brand ambassador rates start at $25-$35/hour for standard activations, with premium rates for specialized skills.',
    faqs: [
      { q: 'How are brand ambassadors selected?', a: 'We match ambassadors based on demographics, experience, personality, and brand fit through our rigorous vetting process.' },
      { q: 'What training do ambassadors receive?', a: 'All ambassadors complete product knowledge training, brand messaging certification, and activation-specific preparation.' },
      { q: 'Can I interview ambassadors before booking?', a: 'Yes, we provide profiles and can arrange video interviews for key placements.' }
    ]
  },
  'experiential-marketing': {
    name: 'Experiential Marketing',
    slug: 'experiential-marketing',
    title: 'Experiential Marketing Agency',
    icon: Sparkles,
    description: 'Immersive brand experiences that create emotional connections and drive measurable business results.',
    benefits: [
      'Full-service campaign strategy and execution',
      'Creative concept development',
      'Custom installations and pop-up experiences',
      'Integrated digital and social amplification',
      'Comprehensive ROI measurement'
    ],
    useCases: [
      'Brand launch events and pop-ups',
      'Festival and concert activations',
      'Immersive brand experiences',
      'Mobile marketing tours',
      'Guerrilla marketing campaigns'
    ],
    pricing: 'Experiential campaigns range from $10,000 for single-day activations to $100,000+ for multi-city tours.',
    faqs: [
      { q: 'What makes experiential marketing effective?', a: 'Experiential marketing creates memorable, emotional connections that traditional advertising cannot achieve, driving higher brand recall and purchase intent.' },
      { q: 'How do you measure experiential ROI?', a: 'We track impressions, engagements, samples distributed, leads captured, social mentions, and tie back to sales data where possible.' },
      { q: 'How far in advance should we plan?', a: 'We recommend 6-8 weeks for standard activations, 3-4 months for complex experiences.' }
    ]
  },
  'street-team-marketing': {
    name: 'Street Team Marketing',
    slug: 'street-team-marketing',
    title: 'Street Team Marketing Agency',
    icon: Megaphone,
    description: 'High-energy street teams that take your brand directly to consumers in high-traffic locations.',
    benefits: [
      'Targeted geographic deployment',
      'High-impact guerrilla tactics',
      'Flyer and sample distribution',
      'Brand awareness campaigns',
      'Real-time location tracking'
    ],
    useCases: [
      'Product launch buzz campaigns',
      'Event promotion and ticket sales',
      'Restaurant and retail foot traffic',
      'App download campaigns',
      'Political and cause marketing'
    ],
    pricing: 'Street team campaigns start at $5,000 for single-day activations with 5-10 team members.',
    faqs: [
      { q: 'Where do street teams operate?', a: 'We deploy teams in high-traffic areas including downtown cores, transit hubs, universities, shopping districts, and event venues.' },
      { q: 'Do you handle permits?', a: 'Yes, we manage all permitting requirements for public space activations.' },
      { q: 'How quickly can you deploy a street team?', a: 'We can activate within 48-72 hours for urgent campaigns, though 2 weeks notice is ideal.' }
    ]
  },
  'promotional-models': {
    name: 'Promotional Models',
    slug: 'promotional-models',
    title: 'Promotional Models Agency',
    icon: Camera,
    description: 'Professional promotional models who bring glamour, energy, and expertise to your brand activations.',
    benefits: [
      'Diverse talent pool for any demographic',
      'Professional appearance and presentation',
      'Experienced in high-profile events',
      'Trained in product knowledge delivery',
      'Social media influencer options'
    ],
    useCases: [
      'Auto shows and boat shows',
      'Trade show booth staffing',
      'Nightlife and hospitality events',
      'Photo shoots and video productions',
      'VIP and red carpet events'
    ],
    pricing: 'Promotional model rates range from $30-$75/hour based on experience and event requirements.',
    faqs: [
      { q: 'What types of models do you represent?', a: 'We have diverse talent including fashion models, trade show models, spokesmodels, and brand ambassadors of all backgrounds.' },
      { q: 'Can models work multi-day events?', a: 'Yes, we staff multi-day trade shows, conventions, and tours with consistent talent throughout.' },
      { q: 'Do you provide wardrobe?', a: 'We can provide branded apparel or coordinate wardrobe requirements based on your specifications.' }
    ]
  },
  'convention-staffing': {
    name: 'Convention Staffing',
    slug: 'convention-staffing',
    title: 'Convention Staffing Agency',
    icon: Building,
    description: 'Expert trade show and convention staff who maximize your exhibition ROI and lead generation.',
    benefits: [
      'Experienced trade show professionals',
      'Lead qualification and capture',
      'Product demonstration expertise',
      'Multi-lingual capabilities',
      'Consistent staffing across shows'
    ],
    useCases: [
      'Trade show booth staffing',
      'Convention registration and check-in',
      'Product demonstrations',
      'Lead generation and qualification',
      'Hospitality and VIP services'
    ],
    pricing: 'Convention staffing rates range from $28-$45/hour with volume discounts for multi-day shows.',
    faqs: [
      { q: 'How do you train staff for our products?', a: 'We conduct pre-show training sessions covering your products, messaging, lead qualification criteria, and booth procedures.' },
      { q: 'Can staff scan badges and capture leads?', a: 'Yes, our staff are trained on all major lead capture systems and can integrate with your CRM.' },
      { q: 'Do you staff shows nationwide?', a: 'Yes, we provide consistent staffing for shows across the country, including mobile tours.' }
    ]
  },
  'product-sampling': {
    name: 'Product Sampling',
    slug: 'product-sampling',
    title: 'Product Sampling Agency',
    icon: Gift,
    description: 'Strategic product sampling campaigns that drive trial, awareness, and consumer loyalty.',
    benefits: [
      'Targeted demographic reach',
      'Temperature-controlled logistics for food/beverage',
      'Data collection and feedback capture',
      'Coupon and offer distribution',
      'Detailed reporting and analytics'
    ],
    useCases: [
      'CPG product launches',
      'Grocery and retail sampling',
      'Festival and event sampling',
      'Corporate office programs',
      'Gym and fitness sampling'
    ],
    pricing: 'Product sampling campaigns start at $5,000 including staffing, logistics, and reporting.',
    faqs: [
      { q: 'How do you target the right consumers?', a: 'We select locations and events based on your target demographic, using foot traffic data and consumer profiling.' },
      { q: 'Do you handle product logistics?', a: 'Yes, we manage product storage, transportation, temperature control, and inventory tracking.' },
      { q: 'What data do you collect?', a: 'We capture samples distributed, consumer demographics, feedback, opt-ins, and social media engagement.' }
    ]
  },
  'event-marketing': {
    name: 'Event Marketing',
    slug: 'event-marketing',
    title: 'Event Marketing Agency',
    icon: Calendar,
    description: 'Full-service event marketing that creates buzz, drives attendance, and maximizes engagement.',
    benefits: [
      'End-to-end event planning and execution',
      'Sponsor activation and management',
      'Attendee engagement strategies',
      'Social media and PR integration',
      'Post-event analytics and reporting'
    ],
    useCases: [
      'Corporate events and conferences',
      'Product launch parties',
      'Sponsor activations at festivals',
      'Influencer events',
      'Grand openings and celebrations'
    ],
    pricing: 'Event marketing services range from $15,000 for intimate events to $200,000+ for large-scale productions.',
    faqs: [
      { q: 'What size events do you handle?', a: 'We produce events from intimate VIP gatherings of 50 guests to large-scale activations with thousands of attendees.' },
      { q: 'Do you handle venue sourcing?', a: 'Yes, we leverage our network to secure optimal venues and negotiate favorable terms.' },
      { q: 'Can you manage vendor relationships?', a: 'We coordinate all vendors including catering, AV, entertainment, decor, and production.' }
    ]
  },
  'trade-show-marketing': {
    name: 'Trade Show Marketing',
    slug: 'trade-show-marketing',
    title: 'Trade Show Marketing Agency',
    icon: Briefcase,
    description: 'Comprehensive trade show marketing services that maximize your exhibition investment and ROI.',
    benefits: [
      'Pre-show promotion and awareness',
      'Booth design and production support',
      'Professional staffing and training',
      'Lead capture and qualification',
      'Post-show follow-up strategy'
    ],
    useCases: [
      'Major industry trade shows',
      'Regional exhibitions and expos',
      'Corporate conferences',
      'Association events',
      'Multi-show tour programs'
    ],
    pricing: 'Trade show marketing packages start at $10,000 for single shows, with tour pricing available.',
    faqs: [
      { q: 'How do you help us stand out at trade shows?', a: 'We combine eye-catching booth activations, trained staff, pre-show marketing, and strategic lead generation tactics.' },
      { q: 'Can you help with booth design?', a: 'We partner with top exhibit designers and can manage the entire booth production process.' },
      { q: 'What shows do you support?', a: 'We support all major trade shows across industries including CES, SXSW, NRF, and hundreds of regional shows.' }
    ]
  }
};

// Generate all combinations
export async function generateStaticParams() {
  const citySlugs = Object.keys(cities);
  const serviceSlugs = Object.keys(services);
  
  const params: { slug: string; service: string }[] = [];
  
  for (const citySlug of citySlugs) {
    for (const serviceSlug of serviceSlugs) {
      params.push({ slug: citySlug, service: serviceSlug });
    }
  }
  
  return params;
}

export default async function ServiceCityPage({ params }: ServiceCityPageProps) {
  const { slug, service } = await params;
  
  const city = cities[slug];
  const serviceData = services[service];
  
  if (!city || !serviceData) {
    notFound();
  }
  
  const ServiceIcon = serviceData.icon;
  
  const pageTitle = `${city.name} ${serviceData.title} | AirFresh Marketing`;
  const pageDescription = `Professional ${serviceData.name.toLowerCase()} in ${city.name}, ${city.state}. ${city.stats.ambassadors} trained professionals, ${city.stats.events} events completed. Get a free quote today.`;
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "MarketingAgency"],
        "@id": `https://www.airfreshmarketing.com/cities/${slug}/${service}#business`,
        "name": `AirFresh Marketing - ${city.name} ${serviceData.name}`,
        "description": pageDescription,
        "url": `https://www.airfreshmarketing.com/cities/${slug}/${service}`,
        "telephone": "+1-303-720-6060",
        "email": "hello@airfreshmarketing.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1580 N. Logan St., Suite 660",
          "addressLocality": "Denver",
          "addressRegion": "CO",
          "postalCode": "80203",
          "addressCountry": "US"
        },
        "sameAs": [
          "https://twitter.com/AirFreshMktg",
          "https://www.linkedin.com/company/airfreshmarketing",
          "https://www.instagram.com/airfreshmarketing"
        ],
        "areaServed": {
          "@type": "City",
          "name": city.name
        },
        "priceRange": "$$-$$$"
      },
      {
        "@type": "Service",
        "name": `${city.name} ${serviceData.name}`,
        "description": serviceData.description,
        "provider": {
          "@type": "Organization",
          "name": "AirFresh Marketing"
        },
        "areaServed": {
          "@type": "City",
          "name": city.name
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.airfreshmarketing.com" },
          { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://www.airfreshmarketing.com/locations" },
          { "@type": "ListItem", "position": 3, "name": city.name, "item": `https://www.airfreshmarketing.com/cities/${slug}` },
          { "@type": "ListItem", "position": 4, "name": serviceData.name, "item": `https://www.airfreshmarketing.com/cities/${slug}/${service}` }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": serviceData.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q.replace('?', ` in ${city.name}?`),
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={city.image}
            alt={`${serviceData.name} services by AirFresh Marketing in ${city.name}, ${city.state}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 pointer-events-none" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-semibold uppercase tracking-wide">{city.name}, {city.state}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {city.name} {serviceData.title}
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                {serviceData.description} Serving {city.name} with {city.stats.ambassadors} trained professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                  <Link href={`/contact?source=${slug}-${service}`}>
                    <Sparkles className="w-5 h-5 mr-2" />
                    Get Free {city.name} Quote
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20">
                  <Link href={`/services/${service}`}>
                    Learn About {serviceData.name}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">{city.stats.events}</div>
              <div className="text-cyan-100">Events in {city.name}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{city.stats.ambassadors}</div>
              <div className="text-cyan-100">Local Professionals</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{city.stats.samples}</div>
              <div className="text-cyan-100">Consumer Interactions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Column */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">
                Why Choose AirFresh Marketing for {serviceData.name} in {city.name}?
              </h2>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                As {city.name}'s leading {serviceData.name.toLowerCase()} agency, we bring {city.stats.events} successful campaigns of local experience to every activation. Our team understands the unique dynamics of the {city.name} market - from the high-traffic zones of {city.neighborhoods.slice(0, 3).join(', ')} to major venues like {city.venues.slice(0, 2).join(' and ')}.
              </p>

              {/* Benefits */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <ServiceIcon className="w-6 h-6 text-cyan-600" />
                    {city.name} {serviceData.name} Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {serviceData.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Use Cases */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Common {serviceData.name} Applications in {city.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {serviceData.useCases.map((useCase, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-cyan-600" />
                        <span className="text-gray-700">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Coverage Areas */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>{city.name} Coverage Areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    We deploy {serviceData.name.toLowerCase()} throughout {city.name}, including:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {city.neighborhoods.map((area, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-cyan-600" />
                        <span className="text-gray-700">{area}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-700 mt-4">
                    <strong>Major Venues:</strong> {city.venues.join(', ')}
                  </p>
                </CardContent>
              </Card>

              {/* FAQs */}
              <h3 className="text-2xl font-bold mb-6">{city.name} {serviceData.name} FAQs</h3>
              <div className="space-y-4">
                {serviceData.faqs.map((faq, i) => (
                  <Card key={i}>
                    <CardContent className="p-6">
                      <h4 className="font-bold text-lg mb-2">{faq.q.replace('?', ` in ${city.name}?`)}</h4>
                      <p className="text-gray-700">{faq.a}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* CTA Card */}
              <Card className="mb-6 border-0 shadow-xl sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Get Your Free {city.name} Quote</h3>
                  <p className="text-gray-600 mb-6">
                    Tell us about your {serviceData.name.toLowerCase()} needs and get a customized quote within 24 hours.
                  </p>
                  <Button asChild className="w-full bg-cyan-500 hover:bg-cyan-600 mb-4">
                    <Link href={`/contact?source=${slug}-${service}`}>
                      Request Quote
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="tel:+13037206060">
                      <Phone className="w-4 h-4 mr-2" />
                      (303) 720-6060
                    </Link>
                  </Button>
                  

                </CardContent>
              </Card>

              {/* Other Services */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Other Services in {city.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {Object.entries(services)
                      .filter(([key]) => key !== service)
                      .slice(0, 5)
                      .map(([key, svc]) => (
                        <li key={key}>
                          <Link 
                            href={`/cities/${slug}/${key}`}
                            className="text-cyan-600 hover:text-cyan-700 hover:underline text-sm"
                          >
                            {city.name} {svc.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Launch Your {city.name} {serviceData.name} Campaign?
          </h2>
          <p className="text-xl mb-8 text-cyan-50">
            Join {city.stats.events} successful campaigns in {city.name}. Get started today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
              <Link href={`/contact?source=${slug}-${service}`}>
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              <Link href="/portfolio">
                View {city.name} Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
