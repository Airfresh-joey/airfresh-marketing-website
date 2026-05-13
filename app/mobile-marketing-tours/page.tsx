import Link from "next/link";
import {
  Truck,
  MapPin,
  Users,
  BarChart3,
  Shield,
  Clock,
  Phone,
  CheckCircle,
  Navigation,
  Smartphone,
  Calendar,
  DollarSign,
  Route,
  Wrench,
  Camera,
  Globe,
} from "lucide-react";

export default function MobileMarketingToursPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mobile Marketing Tours",
    description:
      "Full-service mobile marketing tour planning and execution including branded vehicles, sample trucks, pop-up trailers, mobile showrooms, route optimization, multi-city coordination, professional tour staffing, and real-time GPS tracking across 200+ U.S. cities.",
    provider: {
      "@type": "Organization",
      name: "Air Fresh Marketing",
      url: "https://www.airfreshmarketing.com",
      telephone: "+1-303-720-6060",
      email: "hello@airfreshmarketing.com",
      foundingDate: "2004",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1580 N. Logan St. Suite 660",
        addressLocality: "Denver",
        addressRegion: "CO",
        postalCode: "80203",
        addressCountry: "US",
      },
      sameAs: [
        "https://www.instagram.com/airfreshmarketing",
        "https://www.linkedin.com/company/airfreshmarketing",
      ],
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: [
      "Mobile Marketing Tours",
      "Branded Vehicle Tours",
      "Food Truck Marketing",
      "Sample Truck Campaigns",
      "Pop-Up Trailer Activations",
      "Mobile Showroom Tours",
      "Multi-City Tour Coordination",
      "Tour Staffing",
      "Route Optimization",
      "GPS Tracking and Reporting",
    ],
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "25000",
      highPrice: "750000",
      offerCount: "10",
      availability: "https://schema.org/InStock",
    },
    url: "https://www.airfreshmarketing.com/mobile-marketing-tours",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.airfreshmarketing.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.airfreshmarketing.com/services/experiential-marketing",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Mobile Marketing Tours",
        item: "https://www.airfreshmarketing.com/mobile-marketing-tours",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a mobile marketing tour?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A mobile marketing tour is a multi-city experiential marketing campaign that brings your brand directly to consumers using branded vehicles, sample trucks, pop-up trailers, or mobile showrooms. Unlike static activations, mobile tours travel from city to city on a planned route, reaching consumers at festivals, college campuses, retail locations, corporate parks, and high-traffic areas. Mobile marketing tours combine the reach of a national campaign with the personal engagement of face-to-face marketing, delivering measurable impressions, product trials, and consumer data at every stop.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a mobile marketing tour cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mobile marketing tour costs depend on tour duration, number of cities, vehicle type, staffing requirements, and production complexity. A regional tour covering 5 to 10 cities over 2 to 4 weeks typically ranges from $50,000 to $150,000. National tours spanning 20 to 50 cities over 2 to 6 months can range from $150,000 to $750,000 or more. Costs typically include vehicle wrap or build-out, staffing, fuel and logistics, permits, insurance, inventory, technology, and reporting. Air Fresh Marketing provides transparent all-inclusive pricing with detailed budget breakdowns for every tour proposal.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to plan a mobile marketing tour?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most mobile marketing tours require 8 to 16 weeks of lead time for full planning and execution. This includes route development, vehicle procurement or wrap production, permit acquisition across multiple cities, staff recruitment and training, inventory procurement, technology setup, and advance logistics coordination. Smaller regional tours with simpler setups can be executed in 4 to 6 weeks. Larger national tours with custom vehicle builds may require 4 to 6 months. Air Fresh Marketing recommends engaging as early as possible to secure optimal venue dates and routing efficiency.",
        },
      },
      {
        "@type": "Question",
        name: "What types of vehicles are used for mobile marketing tours?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mobile marketing tours utilize a wide range of vehicle types depending on campaign objectives. Common options include wrapped sprinter vans and box trucks for product sampling, custom-built food trucks for culinary activations, glass-sided trailers for mobile showrooms, airstream trailers for premium brand experiences, converted buses for interactive installations, refrigerated trucks for temperature-sensitive products, and custom fabricated vehicles designed from scratch. Air Fresh Marketing works with vetted vehicle partners nationwide to source, wrap, and build out mobile tour assets that match your brand vision and operational requirements.",
        },
      },
      {
        "@type": "Question",
        name: "How do you staff a mobile marketing tour?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mobile marketing tour staffing typically includes a dedicated tour manager who travels with the vehicle, brand ambassadors for consumer engagement at each stop, CDL drivers for larger vehicles, and setup and teardown crews. Air Fresh Marketing recruits tour staff from our network of 5,000+ brand ambassadors across 200+ cities — enabling both traveling core teams and local market supplemental staff. All tour team members complete custom video-based brand training, GPS check-in verification, and daily performance reporting. We handle payroll, insurance, travel logistics, and per diem for all touring personnel.",
        },
      },
      {
        "@type": "Question",
        name: "What permits are needed for a mobile marketing tour?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Permit requirements vary by city and activation type but commonly include special event permits, commercial parking permits, food handling permits for sampling, health department approvals, noise permits for amplified sound, fire department inspections for enclosed spaces, and liability insurance certificates. Some cities require advance applications 30 to 60 days before activation. Air Fresh Marketing handles all permitting across every tour stop, maintaining relationships with permitting offices in 200+ cities and staying current on local regulations that affect mobile marketing activations.",
        },
      },
      {
        "@type": "Question",
        name: "How do you measure mobile marketing tour success?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mobile marketing tour success is measured through multiple quantitative and qualitative metrics including total consumer impressions, direct engagements, samples distributed, leads captured, social media mentions and earned media, email sign-ups, app downloads, QR code scans, and survey responses. Air Fresh Marketing equips every tour with GPS tracking for route verification, real-time reporting dashboards for daily performance data, consumer data capture tools, photo and video documentation, and post-tour analytics reports. Our technology platform aggregates data across all tour stops to show cumulative campaign performance and per-market comparisons.",
        },
      },
      {
        "@type": "Question",
        name: "Can you run a mobile marketing tour in winter months?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Mobile marketing tours can run year-round with proper planning for seasonal conditions. Winter tours often focus on warmer-climate cities in the South and Southwest, indoor venue partnerships like malls and convention centers, or cold-weather-appropriate activations like hot beverage sampling and heated enclosed trailers. Air Fresh Marketing develops seasonal routing strategies that account for weather patterns, daylight hours, and regional event calendars to maximize consumer engagement regardless of season. We also maintain contingency plans for weather-related disruptions at every stop.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between a mobile marketing tour and a pop-up event?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A mobile marketing tour is a traveling campaign that visits multiple cities on a planned route using branded vehicles or trailers, while a pop-up event is a temporary activation at a single fixed location. Mobile tours offer broader geographic reach and the ability to hit many markets with one cohesive campaign, while pop-ups allow for deeper single-market presence and more elaborate build-outs. Many brands combine both strategies — using a mobile tour to create awareness across markets and pop-up events in key priority cities for deeper engagement. Air Fresh Marketing executes both formats and can develop hybrid strategies.",
        },
      },
      {
        "@type": "Question",
        name: "How many cities can a mobile marketing tour cover?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A mobile marketing tour can cover anywhere from 5 to 100+ cities depending on budget, timeline, and campaign objectives. A typical national tour covers 20 to 40 cities over 8 to 16 weeks, with 2 to 3 activation days per city. Regional tours may cover 5 to 15 cities in a concentrated geographic area over 2 to 6 weeks. Air Fresh Marketing uses proprietary route optimization to maximize the number of stops while minimizing drive time and fuel costs. We have executed tours ranging from 3-city regional sprints to 60-city coast-to-coast campaigns spanning multiple months.",
        },
      },
    ],
  };

  const tourTypes = [
    {
      title: "Branded Vehicle Tours",
      icon: Truck,
      description:
        "Custom-wrapped sprinter vans, box trucks, and specialty vehicles that transform into mobile brand experiences. Branded vehicle tours deliver high-visibility impressions during transit and immersive consumer engagement at every stop. The vehicle itself becomes a rolling billboard that generates thousands of daily impressions between activation points, while the wrap design creates instant brand recognition and consumer curiosity that drives foot traffic to your activation footprint.",
    },
    {
      title: "Food Truck Marketing Tours",
      icon: Wrench,
      description:
        "Custom food trucks and culinary vehicles designed for product sampling, recipe demonstrations, and food-and-beverage brand activations. Food truck tours leverage the universal appeal of free samples and culinary experiences to create high-dwell-time consumer interactions that build brand affinity. Whether you are launching a new snack brand, promoting a restaurant chain, or sampling beverages, food truck tours deliver the sensory engagement that drives immediate trial and conversion.",
    },
    {
      title: "Sample Truck Campaigns",
      icon: CheckCircle,
      description:
        "Purpose-built sampling vehicles designed for high-volume product distribution at festivals, sporting events, college campuses, and retail locations. Sample trucks feature climate-controlled storage, efficient distribution workflows, and integrated data capture systems that track every sample distributed. Our sample truck campaigns combine the scale of mass distribution with the quality of trained brand ambassador interactions — ensuring every consumer touchpoint builds brand equity.",
    },
    {
      title: "Pop-Up Trailer Activations",
      icon: Globe,
      description:
        "Expandable trailers and custom-built mobile structures that unfold into full-scale experiential environments at each tour stop. Pop-up trailers offer the production value of a built environment with the mobility of a touring vehicle, creating Instagram-worthy branded spaces that can be deployed in parking lots, festival grounds, and urban plazas. These trailers feature hydraulic expansion systems, integrated lighting and sound, and modular interior configurations adaptable to any brand experience.",
    },
    {
      title: "Mobile Showroom Tours",
      icon: Camera,
      description:
        "Glass-sided trailers, converted buses, and custom-built mobile showrooms designed for product demonstration, retail experiences, and immersive brand storytelling. Mobile showrooms bring the retail or product experience directly to consumers in markets where you may not have permanent presence, offering controlled environments for product interaction, consultation, and purchase. Ideal for automotive, technology, beauty, and luxury brands seeking premium mobile presentation.",
    },
  ];

  const planningSteps = [
    {
      step: 1,
      title: "Campaign Strategy and Objectives",
      description:
        "Every mobile marketing tour begins with clear objective definition. We work with your team to identify target audience personas, priority markets, key performance indicators, and campaign messaging. Our strategists develop a tour concept that aligns with your broader marketing calendar, identifies optimal timing windows, and defines the consumer experience at each stop. Strategy phase deliverables include a campaign brief, creative direction, market recommendations, and preliminary budget framework.",
    },
    {
      step: 2,
      title: "Route Development and Optimization",
      description:
        "Route optimization is critical to mobile tour ROI. Our logistics team develops routing that maximizes the number of high-value stops while minimizing drive time, fuel costs, and crew fatigue. We analyze population density, target demographic concentration, event calendars, permitting timelines, and seasonal factors for each potential market. Routes are designed with logical geographic flow, accounting for drive-time constraints, mandatory rest periods, and setup and teardown schedules at each venue.",
    },
    {
      step: 3,
      title: "Vehicle Procurement and Build-Out",
      description:
        "Whether wrapping an existing vehicle or building a custom mobile experience from scratch, our production team manages the entire vehicle preparation process. This includes vehicle sourcing, wrap design and installation, interior build-out, electrical and plumbing systems, point-of-sale integration, storage solutions, and safety compliance. We work with certified fabricators and wrap installers nationwide to deliver tour-ready vehicles on time and on brand.",
    },
    {
      step: 4,
      title: "Permitting and Compliance",
      description:
        "Navigating the permit landscape across multiple cities is one of the most complex aspects of mobile tour logistics. Our team manages permit applications, health department approvals, parking authorizations, noise variances, and liability requirements for every stop on your tour. We maintain established relationships with permitting offices across 200+ cities and begin applications well in advance to prevent delays that could disrupt your tour schedule.",
    },
    {
      step: 5,
      title: "Staff Recruitment and Training",
      description:
        "We recruit and train dedicated tour teams including tour managers, brand ambassadors, drivers, and setup crew. All team members complete brand-specific video training with embedded knowledge assessments before deployment. Tour managers receive additional training on vehicle operation, inventory management, daily reporting protocols, and crisis management. Our training ensures consistent brand representation across every market and every consumer interaction throughout the tour.",
    },
    {
      step: 6,
      title: "Live Tour Execution and Monitoring",
      description:
        "During tour execution, our operations team monitors performance through GPS tracking, daily recap reports, and real-time dashboards. Tour managers submit daily reports covering impressions, engagements, inventory levels, and qualitative observations. Our headquarters team provides centralized oversight, handles advance logistics for upcoming stops, coordinates with local venue contacts, and resolves any issues that arise on the road. You receive regular updates with live campaign performance data.",
    },
  ];

  const staffingRoles = [
    {
      role: "Tour Manager",
      description:
        "The tour manager travels with the vehicle for the entire tour duration, serving as the on-the-ground campaign leader responsible for daily operations, staff supervision, venue coordination, inventory management, and client communication. Tour managers are experienced field marketing professionals who understand brand standards, consumer engagement optimization, and the logistical complexity of multi-city touring. They serve as the single point of accountability for everything that happens on the road.",
    },
    {
      role: "Brand Ambassadors",
      description:
        "Brand ambassadors are the face of your tour — engaging consumers, distributing samples, demonstrating products, capturing data, and creating memorable brand interactions at every stop. We staff tours with both traveling ambassadors who move with the vehicle and local market ambassadors recruited from our network in each city. All ambassadors complete brand-specific training and are selected for alignment with your brand personality, target demographic, and activation requirements.",
    },
    {
      role: "CDL Drivers",
      description:
        "For larger vehicles including full-size trucks, buses, and trailer-towing setups, we provide licensed CDL drivers with clean driving records, DOT compliance, and extensive experience operating oversized vehicles in urban environments. Drivers handle all vehicle operation, fueling, maintenance coordination, and route navigation between stops. Many of our drivers also serve dual roles as setup crew, maximizing staffing efficiency on touring campaigns.",
    },
    {
      role: "Setup and Teardown Crew",
      description:
        "Dedicated setup and teardown crews ensure your activation footprint is deployed efficiently and professionally at every stop. This team handles vehicle positioning, canopy and signage installation, product display setup, technology activation, inventory staging, and end-of-day breakdown. Crew members are trained on your specific activation layout and can transition from arrival to activation-ready in a defined timeframe, maximizing your consumer engagement window at each venue.",
    },
  ];

  const technologyFeatures = [
    {
      title: "GPS Tracking and Route Verification",
      icon: Navigation,
      description:
        "Real-time GPS tracking confirms your tour vehicle is at the correct location at the correct time. Route verification data provides accountability documentation, mileage tracking, and historical position data for campaign reporting. Geofencing alerts notify our operations team of arrivals and departures, enabling proactive logistics management and real-time client updates.",
    },
    {
      title: "Real-Time Reporting Dashboard",
      icon: BarChart3,
      description:
        "Our proprietary reporting dashboard aggregates data from every tour stop into a single unified view. Track impressions, engagements, samples distributed, leads captured, and custom KPIs in real time. Compare performance across markets, identify trends, and make data-driven decisions about route adjustments or staffing optimization while the tour is still active.",
    },
    {
      title: "Consumer Data Capture",
      icon: Smartphone,
      description:
        "Integrated data capture tools collect consumer information at every touchpoint — email sign-ups, survey responses, social media follows, app downloads, QR code scans, and custom form submissions. All data feeds directly into your CRM or marketing automation platform, enabling immediate follow-up nurturing sequences and post-tour audience retargeting campaigns.",
    },
    {
      title: "Social Media Integration",
      icon: Camera,
      description:
        "Social media amplification tools are built into the tour experience — photo opportunities with branded backdrops, hashtag displays, social sharing incentives, user-generated content capture, and influencer coordination at key stops. Our teams document every activation with professional photo and video content for your brand channels, creating a library of authentic marketing assets across diverse markets.",
    },
  ];

  const budgetBreakdown = [
    { category: "Vehicle (Wrap, Build-Out, or Rental)", percentage: "20-30%" },
    { category: "Staffing (Tour Manager, BAs, Drivers, Crew)", percentage: "25-35%" },
    { category: "Logistics (Fuel, Lodging, Per Diem, Parking)", percentage: "15-20%" },
    { category: "Permits and Insurance", percentage: "5-8%" },
    { category: "Product Inventory and Supplies", percentage: "10-15%" },
    { category: "Technology (GPS, Reporting, Data Capture)", percentage: "5-8%" },
    { category: "Creative and Production (Signage, Collateral)", percentage: "5-10%" },
    { category: "Management and Reporting", percentage: "10-15%" },
  ];

  const cities = [
    { name: "New York", slug: "new-york" },
    { name: "Los Angeles", slug: "los-angeles" },
    { name: "Chicago", slug: "chicago" },
    { name: "Miami", slug: "miami" },
    { name: "Dallas", slug: "dallas" },
    { name: "Houston", slug: "houston" },
    { name: "Atlanta", slug: "atlanta" },
    { name: "Denver", slug: "denver" },
    { name: "Las Vegas", slug: "las-vegas" },
    { name: "San Francisco", slug: "san-francisco" },
    { name: "Seattle", slug: "seattle" },
    { name: "Phoenix", slug: "phoenix" },
    { name: "Austin", slug: "austin" },
    { name: "Nashville", slug: "nashville" },
    { name: "Boston", slug: "boston" },
    { name: "Philadelphia", slug: "philadelphia" },
    { name: "San Diego", slug: "san-diego" },
    { name: "Orlando", slug: "orlando" },
    { name: "Minneapolis", slug: "minneapolis" },
    { name: "Portland", slug: "portland" },
    { name: "Detroit", slug: "detroit" },
    { name: "Charlotte", slug: "charlotte" },
    { name: "New Orleans", slug: "new-orleans" },
    { name: "Tampa", slug: "tampa" },
    { name: "Salt Lake City", slug: "salt-lake-city" },
    { name: "Indianapolis", slug: "indianapolis" },
    { name: "Kansas City", slug: "kansas-city" },
    { name: "Columbus", slug: "columbus" },
  ];

  const faqs = [
    {
      question: "What is a mobile marketing tour?",
      answer:
        "A mobile marketing tour is a multi-city experiential marketing campaign that brings your brand directly to consumers using branded vehicles, sample trucks, pop-up trailers, or mobile showrooms. Unlike static activations, mobile tours travel from city to city on a planned route, reaching consumers at festivals, college campuses, retail locations, corporate parks, and high-traffic areas. Mobile marketing tours combine the reach of a national campaign with the personal engagement of face-to-face marketing, delivering measurable impressions, product trials, and consumer data at every stop.",
    },
    {
      question: "How much does a mobile marketing tour cost?",
      answer:
        "Mobile marketing tour costs depend on tour duration, number of cities, vehicle type, staffing requirements, and production complexity. A regional tour covering 5 to 10 cities over 2 to 4 weeks typically ranges from $50,000 to $150,000. National tours spanning 20 to 50 cities over 2 to 6 months can range from $150,000 to $750,000 or more. Costs typically include vehicle wrap or build-out, staffing, fuel and logistics, permits, insurance, inventory, technology, and reporting. Air Fresh Marketing provides transparent all-inclusive pricing with detailed budget breakdowns for every tour proposal.",
    },
    {
      question: "How long does it take to plan a mobile marketing tour?",
      answer:
        "Most mobile marketing tours require 8 to 16 weeks of lead time for full planning and execution. This includes route development, vehicle procurement or wrap production, permit acquisition across multiple cities, staff recruitment and training, inventory procurement, technology setup, and advance logistics coordination. Smaller regional tours with simpler setups can be executed in 4 to 6 weeks. Larger national tours with custom vehicle builds may require 4 to 6 months. Air Fresh Marketing recommends engaging as early as possible to secure optimal venue dates and routing efficiency.",
    },
    {
      question: "What types of vehicles are used for mobile marketing tours?",
      answer:
        "Mobile marketing tours utilize a wide range of vehicle types depending on campaign objectives. Common options include wrapped sprinter vans and box trucks for product sampling, custom-built food trucks for culinary activations, glass-sided trailers for mobile showrooms, airstream trailers for premium brand experiences, converted buses for interactive installations, refrigerated trucks for temperature-sensitive products, and custom fabricated vehicles designed from scratch. Air Fresh Marketing works with vetted vehicle partners nationwide to source, wrap, and build out mobile tour assets that match your brand vision and operational requirements.",
    },
    {
      question: "How do you staff a mobile marketing tour?",
      answer:
        "Mobile marketing tour staffing typically includes a dedicated tour manager who travels with the vehicle, brand ambassadors for consumer engagement at each stop, CDL drivers for larger vehicles, and setup and teardown crews. Air Fresh Marketing recruits tour staff from our network of 5,000+ brand ambassadors across 200+ cities — enabling both traveling core teams and local market supplemental staff. All tour team members complete custom video-based brand training, GPS check-in verification, and daily performance reporting. We handle payroll, insurance, travel logistics, and per diem for all touring personnel.",
    },
    {
      question: "What permits are needed for a mobile marketing tour?",
      answer:
        "Permit requirements vary by city and activation type but commonly include special event permits, commercial parking permits, food handling permits for sampling, health department approvals, noise permits for amplified sound, fire department inspections for enclosed spaces, and liability insurance certificates. Some cities require advance applications 30 to 60 days before activation. Air Fresh Marketing handles all permitting across every tour stop, maintaining relationships with permitting offices in 200+ cities and staying current on local regulations that affect mobile marketing activations.",
    },
    {
      question: "How do you measure mobile marketing tour success?",
      answer:
        "Mobile marketing tour success is measured through multiple quantitative and qualitative metrics including total consumer impressions, direct engagements, samples distributed, leads captured, social media mentions and earned media, email sign-ups, app downloads, QR code scans, and survey responses. Air Fresh Marketing equips every tour with GPS tracking for route verification, real-time reporting dashboards for daily performance data, consumer data capture tools, photo and video documentation, and post-tour analytics reports. Our technology platform aggregates data across all tour stops to show cumulative campaign performance and per-market comparisons.",
    },
    {
      question: "Can you run a mobile marketing tour in winter months?",
      answer:
        "Yes. Mobile marketing tours can run year-round with proper planning for seasonal conditions. Winter tours often focus on warmer-climate cities in the South and Southwest, indoor venue partnerships like malls and convention centers, or cold-weather-appropriate activations like hot beverage sampling and heated enclosed trailers. Air Fresh Marketing develops seasonal routing strategies that account for weather patterns, daylight hours, and regional event calendars to maximize consumer engagement regardless of season. We also maintain contingency plans for weather-related disruptions at every stop.",
    },
    {
      question:
        "What is the difference between a mobile marketing tour and a pop-up event?",
      answer:
        "A mobile marketing tour is a traveling campaign that visits multiple cities on a planned route using branded vehicles or trailers, while a pop-up event is a temporary activation at a single fixed location. Mobile tours offer broader geographic reach and the ability to hit many markets with one cohesive campaign, while pop-ups allow for deeper single-market presence and more elaborate build-outs. Many brands combine both strategies — using a mobile tour to create awareness across markets and pop-up events in key priority cities for deeper engagement. Air Fresh Marketing executes both formats and can develop hybrid strategies.",
    },
    {
      question: "How many cities can a mobile marketing tour cover?",
      answer:
        "A mobile marketing tour can cover anywhere from 5 to 100+ cities depending on budget, timeline, and campaign objectives. A typical national tour covers 20 to 40 cities over 8 to 16 weeks, with 2 to 3 activation days per city. Regional tours may cover 5 to 15 cities in a concentrated geographic area over 2 to 6 weeks. Air Fresh Marketing uses proprietary route optimization to maximize the number of stops while minimizing drive time and fuel costs. We have executed tours ranging from 3-city regional sprints to 60-city coast-to-coast campaigns spanning multiple months.",
    },
  ];

  const quoteHref = (intent: string) =>
    `/get-quote?source=mobile-marketing-tours&intent=${intent}`;

  const pillarLinks = [
    { href: "/event-staffing-agency", label: "Event Staffing Agency" },
    { href: "/hire-brand-ambassadors", label: "Hire Brand Ambassadors" },
    { href: "/brand-ambassador-agency", label: "Brand Ambassador Agency" },
    {
      href: "/experiential-marketing-agency",
      label: "Experiential Marketing Agency",
    },
    {
      href: "/promotional-staffing-agency",
      label: "Promotional Staffing Agency",
    },
    { href: "/corporate-event-staffing", label: "Corporate Event Staffing" },
    { href: "/event-marketing-agency", label: "Event Marketing Agency" },
    { href: "/brand-activation-agency", label: "Brand Activation Agency" },
    { href: "/field-marketing-agency", label: "Field Marketing Agency" },
    {
      href: "/guerrilla-marketing-agency",
      label: "Guerrilla Marketing Agency",
    },
    { href: "/product-sampling-agency", label: "Product Sampling Agency" },
  ];

  return (
    <div className="pt-16">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <nav className="bg-gray-50 border-b" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-[#00C853]">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                href="/services/experiential-marketing"
                className="hover:text-[#00C853]"
              >
                Services
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-medium">
              Mobile Marketing Tours
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-r from-[#001F3F] to-[#003366]">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00C853]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00C853]/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-[#00C853] uppercase tracking-wide mb-4">
              Nationwide Mobile Tour Execution Since 2004
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Mobile Marketing Tours —{" "}
              <span className="text-[#00C853]">
                Bring Your Brand Directly to Consumers Nationwide
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
              Mobile marketing tours deliver your brand experience directly to
              consumers across multiple cities using branded vehicles, sample
              trucks, pop-up trailers, and mobile showrooms. Air Fresh Marketing
              plans, staffs, and executes mobile marketing tours nationwide —
              handling route optimization, permitting, vehicle logistics, trained
              tour staff, real-time GPS tracking, and comprehensive reporting for
              brands that demand geographic reach without sacrificing personal
              engagement. From 5-city regional sprints to 60-city national
              campaigns, our mobile tour expertise gets your brand in front of
              the right consumers in the right markets at the right time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={quoteHref("hero-tour-proposal")}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#00C853] hover:bg-[#00E676] text-[#001F3F] font-bold text-lg rounded-lg transition-colors"
              >
                Get a Free Tour Proposal
              </Link>
              <a
                href="tel:303-720-6060"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 font-bold text-lg rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                (303) 720-6060
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#001F3F] py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#00C853]">
                5,000+
              </div>
              <div className="text-gray-300 text-sm font-medium mt-1">
                Brand Ambassadors
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#00C853]">
                200+
              </div>
              <div className="text-gray-300 text-sm font-medium mt-1">
                Cities Nationwide
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#00C853]">
                1,000+
              </div>
              <div className="text-gray-300 text-sm font-medium mt-1">
                Events Executed
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#00C853]">
                300+
              </div>
              <div className="text-gray-300 text-sm font-medium mt-1">
                Brands Served
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Are Mobile Marketing Tours */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            What Are Mobile Marketing Tours and Why Do They Work?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Mobile marketing tours are multi-city experiential marketing
              campaigns that bring your brand directly to consumers through
              branded vehicles, sample trucks, pop-up trailers, and mobile
              showrooms. Rather than waiting for consumers to come to you, mobile
              tours take the brand experience on the road — visiting festivals,
              college campuses, retail parking lots, corporate parks, sporting
              events, and high-traffic urban areas across multiple markets on a
              strategically planned route. Mobile marketing tours combine the
              geographic reach of national advertising with the personal
              engagement and sensory impact of face-to-face experiential
              marketing.
            </p>
            <p>
              The power of mobile marketing tours lies in their ability to create
              thousands of meaningful one-on-one consumer interactions across
              dozens of markets within a single campaign. While digital
              advertising generates impressions measured in fractions of seconds,
              a mobile tour stop creates engagement windows of 3 to 15 minutes
              per consumer — time spent touching, tasting, experiencing, and
              connecting with your brand in ways that build lasting memory and
              purchase intent. Research shows that experiential marketing
              interactions generate 4 to 7 times higher purchase intent than
              traditional advertising exposure, and mobile tours deliver these
              interactions at national scale.
            </p>
            <p>
              Mobile marketing tours are particularly effective for brands
              entering new markets, launching new products, building sampling
              scale, generating grassroots awareness, or reaching consumers who
              do not engage with traditional media channels. The touring format
              creates natural urgency — consumers know the experience is
              temporary, which drives higher engagement rates than permanent
              installations. The branded vehicle itself generates impressions
              during transit, turning every mile of your route into passive brand
              advertising that builds awareness in markets between stops.
            </p>
            <p>
              As a full-service{" "}
              <Link
                href="/experiential-marketing-agency"
                className="text-[#00C853] hover:underline font-medium"
              >
                experiential marketing agency
              </Link>{" "}
              with more than two decades of tour execution experience, Air Fresh
              Marketing handles every aspect of mobile marketing tour planning
              and delivery. From initial strategy and route development through
              vehicle build-out, permitting, staffing, live execution, and
              post-tour analytics — our team ensures your mobile tour delivers
              maximum consumer impact in every market. Our{" "}
              <Link
                href="/hire-brand-ambassadors"
                className="text-[#00C853] hover:underline font-medium"
              >
                brand ambassadors
              </Link>{" "}
              are trained specifically for mobile tour environments, bringing
              product knowledge, consumer engagement skills, and data capture
              proficiency to every stop on your route.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Mobile Tours */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Types of Mobile Marketing Tours We Execute
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mobile marketing tour formats range from simple branded vehicle
              deployments to complex custom-built mobile experiences. Air Fresh
              Marketing has executed every type of mobile tour and can recommend
              the optimal format for your campaign objectives, budget, and target
              audience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-[#00C853]/50 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-[#001F3F] rounded-lg flex items-center justify-center mb-4">
                  <type.icon className="w-6 h-6 text-[#00C853]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {type.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Not sure which mobile tour format is right for your brand? Our{" "}
              <Link
                href="/brand-activation-agency"
                className="text-[#00C853] hover:underline font-medium"
              >
                brand activation team
              </Link>{" "}
              can develop a custom tour concept that matches your objectives,
              timeline, and budget.{" "}
              <Link
                href={quoteHref("tour-format-consultation")}
                className="text-[#00C853] hover:underline font-medium"
              >
                Get a tour recommendation
              </Link>{" "}
              and a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Tour Planning and Route Optimization */}
      <section className="py-20 lg:py-24 bg-[#001F3F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tour Planning and Route Optimization Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Mobile marketing tour success depends on meticulous advance
              planning. Air Fresh Marketing follows a proven six-phase process
              refined across hundreds of mobile tours — ensuring your campaign
              launches on time, stays on route, and delivers results at every
              stop.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {planningSteps.map((item) => (
              <div
                key={item.step}
                className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all"
              >
                <div className="w-10 h-10 bg-[#00C853] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-[#001F3F] font-bold text-lg">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href={quoteHref("route-planning")}
              className="inline-flex items-center justify-center px-10 py-4 bg-[#00C853] hover:bg-[#00E676] text-[#001F3F] font-bold text-lg rounded-lg transition-colors"
            >
              Start Planning Your Tour
            </Link>
          </div>
        </div>
      </section>

      {/* Staffing for Mobile Tours */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Staffing for Mobile Marketing Tours
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mobile marketing tours require specialized staffing that combines
              touring stamina with brand ambassador excellence. Air Fresh
              Marketing recruits, trains, and manages complete tour teams from
              our nationwide network of 5,000+ brand ambassadors across 200+
              cities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {staffingRoles.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-[#00C853]/50 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-[#00C853]" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.role}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Staffing is the single most critical success factor in mobile
                marketing tour execution. The people representing your brand at
                every stop determine the quality of every consumer interaction,
                the accuracy of every data point captured, and the consistency of
                your brand experience across markets. Air Fresh Marketing invests
                heavily in tour staff recruitment, training, and management
                because we understand that a mobile tour is only as strong as the
                team executing it on the ground.
              </p>
              <p>
                Our staffing model combines the consistency of a traveling core
                team with the local market knowledge and scalability of city-
                specific supplemental staff. This hybrid approach ensures your
                tour maintains brand continuity while adapting to local consumer
                dynamics. Whether your tour requires 3 team members or 30, our{" "}
                <Link
                  href="/promotional-staffing-agency"
                  className="text-[#00C853] hover:underline font-medium"
                >
                  promotional staffing
                </Link>{" "}
                infrastructure delivers qualified, trained, and brand-aligned
                personnel at every stop. All staff undergo our proprietary video
                training platform with embedded quizzes, and deployment is
                verified through GPS check-in technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Tour Logistics */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Mobile Tour Logistics — Permits, Insurance, Vehicles, and
              Inventory
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The logistics of operating a mobile marketing tour across multiple
              cities involve complex coordination of permits, insurance, vehicle
              maintenance, inventory management, and venue relationships. Air
              Fresh Marketing manages every logistical detail so your team can
              focus on brand strategy and campaign results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-[#00C853]" />
                <h3 className="text-xl font-bold text-gray-900">
                  Permits and Compliance
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Every city has unique permitting requirements for mobile
                marketing activations. Our logistics team navigates commercial
                parking permits, special event applications, health department
                approvals for food sampling, noise ordinance compliance, fire
                safety inspections, and liability documentation across every
                market on your route. We begin permit applications 30 to 90 days
                in advance depending on municipality requirements, and we
                maintain established relationships with permitting offices in
                200+ cities to expedite the process.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 flex-shrink-0" />
                  Special event and commercial parking permits
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 flex-shrink-0" />
                  Health department and food handling approvals
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 flex-shrink-0" />
                  Noise ordinance and amplified sound permits
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 flex-shrink-0" />
                  Fire department inspections for enclosed spaces
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 flex-shrink-0" />
                  DOT compliance for commercial vehicles
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-[#00C853]" />
                <h3 className="text-xl font-bold text-gray-900">
                  Insurance and Liability
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Mobile marketing tours require comprehensive insurance coverage
                that satisfies venue requirements, protects your brand, and
                covers touring operations. Air Fresh Marketing maintains general
                liability, auto liability, workers compensation, and umbrella
                policies that meet or exceed the requirements of every major
                venue type. We provide certificates of insurance naming venue
                owners and your brand as additional insureds — a standard
                requirement at retail locations, festivals, and public spaces.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 flex-shrink-0" />
                  General liability coverage ($2M+ per occurrence)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 flex-shrink-0" />
                  Commercial auto liability for tour vehicles
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 flex-shrink-0" />
                  Workers compensation for all touring staff
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 flex-shrink-0" />
                  Additional insured certificates for venues
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 flex-shrink-0" />
                  Product liability for sampling campaigns
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Truck className="w-6 h-6 text-[#00C853]" />
                <h3 className="text-xl font-bold text-gray-900">
                  Vehicle Wraps and Maintenance
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Your tour vehicle is a mobile billboard and brand experience
                platform — it must look flawless at every stop. Air Fresh
                Marketing coordinates vehicle wrap design and installation with
                certified 3M installers, schedules preventive maintenance at
                intervals throughout the tour route, and maintains relationships
                with service providers in every major market for emergency
                repairs. We build maintenance stops into the tour schedule and
                carry critical spare parts to minimize any risk of tour
                interruption.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 flex-shrink-0" />
                  Professional wrap design and 3M-certified installation
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 flex-shrink-0" />
                  Scheduled preventive maintenance throughout tour
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 flex-shrink-0" />
                  Emergency repair network in all major markets
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 flex-shrink-0" />
                  Backup vehicle contingency plans
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 flex-shrink-0" />
                  Daily vehicle inspection protocols
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Route className="w-6 h-6 text-[#00C853]" />
                <h3 className="text-xl font-bold text-gray-900">
                  Inventory Management
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Efficient inventory management is critical for mobile tours that
                distribute samples, promotional items, or retail products across
                multiple cities. Our logistics team develops inventory
                forecasting models based on anticipated engagement rates per
                market, coordinates resupply shipments to strategic points along
                your route, and implements daily inventory tracking that prevents
                stockouts and waste. Temperature-sensitive products receive
                climate-controlled storage with continuous monitoring.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 flex-shrink-0" />
                  Per-market inventory forecasting and allocation
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 flex-shrink-0" />
                  Strategic resupply coordination along route
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 flex-shrink-0" />
                  Climate-controlled storage for sensitive products
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 flex-shrink-0" />
                  Daily tracking and waste prevention
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 flex-shrink-0" />
                  End-of-tour inventory reconciliation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 lg:py-24 bg-[#001F3F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Mobile Tour Technology — GPS, Reporting, and Data Capture
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Technology transforms mobile marketing tours from experiential
              activations into data-driven performance marketing engines. Air
              Fresh Marketing equips every tour with proprietary technology that
              provides real-time visibility, accountability, and measurable
              results across every stop and market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologyFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-12 bg-[#00C853]/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[#00C853]" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-300 space-y-6">
              <p>
                The technology stack we deploy on mobile marketing tours goes
                beyond simple tracking — it creates an integrated system that
                connects campaign strategy to consumer interaction to business
                outcomes. Every data point captured at each stop feeds into a
                unified analytics platform that enables real-time optimization
                decisions. If one market is outperforming expectations, we can
                extend activation hours or add stops. If a particular venue type
                is underdelivering, we can redirect to higher-performing
                locations on subsequent days. This agility is only possible with
                the real-time data infrastructure we build into every mobile
                tour.
              </p>
              <p>
                Our reporting goes beyond vanity metrics to connect experiential
                engagement to downstream business results. By integrating with
                your CRM, marketing automation platform, and sales data, we can
                track the consumer journey from mobile tour interaction through
                purchase conversion — proving the true ROI of your mobile
                marketing tour investment and informing future campaign strategy.
                Our{" "}
                <Link
                  href="/field-marketing-agency"
                  className="text-[#00C853] hover:underline"
                >
                  field marketing
                </Link>{" "}
                technology platform is purpose-built for the unique challenges of
                mobile, multi-city campaign execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Breakdown */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Mobile Marketing Tour Budget Breakdown and Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding where your mobile tour budget goes helps you make
              informed decisions about scope, duration, and investment. Below is
              a typical budget allocation for a national mobile marketing tour
              managed by Air Fresh Marketing.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <DollarSign className="w-6 h-6 text-[#00C853]" />
                <h3 className="text-xl font-bold text-gray-900">
                  Typical Budget Allocation
                </h3>
              </div>
              <div className="space-y-4">
                {budgetBreakdown.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-3 border-b border-gray-200 last:border-0"
                  >
                    <span className="text-gray-700 font-medium">
                      {item.category}
                    </span>
                    <span className="text-[#00C853] font-bold">
                      {item.percentage}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Mobile marketing tour pricing varies significantly based on
                campaign scope. A regional 5-city tour with a wrapped sprinter
                van and 2-person team might cost $25,000 to $50,000. A national
                30-city tour with a custom-built trailer, full touring crew, and
                local supplemental staff could range from $200,000 to $500,000.
                Premium builds with custom fabricated vehicles and complex
                interactive installations can exceed $750,000 for extensive
                national campaigns.
              </p>
              <p>
                Air Fresh Marketing provides all-inclusive pricing that
                eliminates surprise costs. Our proposals detail every line item
                so you understand exactly where your investment goes. We also
                offer flexible scoping — if budget is fixed, we can optimize
                route length, staffing levels, or vehicle type to deliver the
                highest impact within your parameters. Contact our team for a
                custom quote tailored to your specific mobile tour objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-City Coordination */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Multi-City Tour Coordination and Route Strategy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Coordinating a mobile marketing tour across multiple cities
              requires expertise in logistics, timing, and market prioritization.
              Air Fresh Marketing develops routing strategies that balance
              geographic efficiency with market value to deliver maximum ROI
              across your entire tour.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Route Optimization Factors
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Geographic Flow",
                    desc: "Routes are designed with logical directional progression to minimize backtracking and reduce fuel costs. A West Coast launch might flow from San Diego through Los Angeles, San Francisco, Portland, and Seattle before jumping to an East Coast leg.",
                  },
                  {
                    title: "Market Priority Ranking",
                    desc: "High-priority markets receive more activation days and weekend positioning. Secondary markets may receive single-day midweek stops. Your market prioritization drives scheduling decisions throughout route development.",
                  },
                  {
                    title: "Event Calendar Alignment",
                    desc: "We align tour stops with local events, festivals, sporting events, and cultural moments that concentrate your target audience. A college-focused tour aligns with back-to-school timing. A music brand tour routes through festival cities during peak season.",
                  },
                  {
                    title: "Seasonal Considerations",
                    desc: "Winter routing may favor southern markets while summer campaigns can leverage outdoor venues nationwide. We account for weather patterns, daylight hours, and seasonal consumer behavior in every routing decision.",
                  },
                  {
                    title: "Venue Availability",
                    desc: "Premium activation locations — retail parking lots, festival grounds, college campuses, corporate parks — require advance booking. Route timing is influenced by venue availability confirmations across markets.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-6 border border-gray-200"
                  >
                    <h4 className="font-bold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Multi-City Operations Management
              </h3>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p>
                  Managing a mobile marketing tour across 20, 30, or 50+ cities
                  requires centralized oversight combined with local market
                  execution. Air Fresh Marketing operates tours from our Denver
                  headquarters, with dedicated account managers providing
                  centralized communication and an operations coordinator
                  managing advance logistics for every upcoming stop.
                </p>
                <p>
                  Our advance team confirms venue details, local permits, and
                  supplemental staffing 2 to 3 weeks before the tour arrives in
                  each market. This forward-looking approach prevents surprises
                  and ensures every stop is fully prepared for activation.
                  Simultaneously, our reporting team processes data from
                  completed stops, identifies performance trends, and recommends
                  real-time optimizations.
                </p>
                <p>
                  For brands running simultaneous tours in multiple regions, we
                  provide unified reporting that aggregates all tour data into a
                  single dashboard — enabling apples-to-apples comparison across
                  tours, regions, and time periods. Our{" "}
                  <Link
                    href="/event-staffing-agency"
                    className="text-[#00C853] hover:underline font-medium"
                  >
                    event staffing
                  </Link>{" "}
                  infrastructure supports simultaneous multi-vehicle deployments
                  with consistent quality standards across every unit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Highlights */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Mobile Marketing Tour Case Study Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mobile marketing tour results from Air Fresh Marketing campaigns
              across festivals, college campuses, retail locations, and urban
              high-traffic areas nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Festival Tour */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="inline-block px-3 py-1 bg-[#001F3F] text-[#00C853] text-sm font-bold rounded mb-4">
                Festival Circuit
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                National Music Festival Sampling Tour
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                A major beverage brand deployed a branded sample truck across 18
                music festivals in 14 cities over a 12-week summer tour. Our
                team of touring brand ambassadors distributed 500,000+ samples,
                captured 45,000 email sign-ups, and generated 2.8 million earned
                impressions through social media activations at each festival
                stop. The sample truck became a destination within each festival,
                with consumers seeking out the branded experience and sharing
                content that amplified reach far beyond on-site attendance.
              </p>
              <div className="flex items-center gap-4 text-sm">
                <span className="font-bold text-[#00C853]">
                  500K+ Samples
                </span>
                <span className="text-gray-400">|</span>
                <span className="text-gray-600">14 Cities</span>
              </div>
            </div>

            {/* College Campus Tour */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="inline-block px-3 py-1 bg-[#001F3F] text-[#00C853] text-sm font-bold rounded mb-4">
                College Campus
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Back-to-School Mobile Showroom Tour
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                A technology company launched a mobile showroom tour visiting 25
                college campuses during fall back-to-school season. A custom
                glass-sided trailer featured hands-on product demonstrations,
                student ambassador team recruitment, and exclusive campus-only
                promotional offers. The tour generated 120,000+ direct
                engagements, 8,500 student sign-ups for the brand ambassador
                program, and a 340% increase in campus retail sales during tour
                weeks compared to non-tour control markets.
              </p>
              <div className="flex items-center gap-4 text-sm">
                <span className="font-bold text-[#00C853]">
                  120K+ Engagements
                </span>
                <span className="text-gray-400">|</span>
                <span className="text-gray-600">25 Campuses</span>
              </div>
            </div>

            {/* Retail Parking Lot Tour */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="inline-block px-3 py-1 bg-[#001F3F] text-[#00C853] text-sm font-bold rounded mb-4">
                Retail Locations
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Grocery Retail Sampling Tour
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                A CPG brand executed a 30-city sample truck tour positioned at
                major grocery retailer parking lots to drive in-store purchase at
                the point of decision. Consumers sampled products in the branded
                truck, received coupons, and walked directly into the adjacent
                store to purchase. The tour delivered a 28% coupon redemption
                rate — 7 times higher than traditional FSI distribution — and
                contributed to a 45% sales velocity increase in tour markets
                during the campaign period and 4 weeks following.
              </p>
              <div className="flex items-center gap-4 text-sm">
                <span className="font-bold text-[#00C853]">
                  28% Redemption
                </span>
                <span className="text-gray-400">|</span>
                <span className="text-gray-600">30 Cities</span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#00C853] hover:bg-[#00E676] text-[#001F3F] font-bold rounded-lg transition-colors"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Cities We Cover */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Mobile Marketing Tour Cities — Nationwide Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Air Fresh Marketing executes mobile marketing tours with local
              staffing support, venue relationships, and permitting expertise in
              every major metropolitan area. Our tour routes can include any
              combination of these markets and beyond.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/cities/${city.slug}`}
                className="bg-white rounded-lg p-3 text-center hover:shadow-md hover:border-[#00C853]/50 border border-gray-200 transition-all"
              >
                <span className="font-semibold text-gray-900 text-sm">
                  {city.name}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4">
              Mobile marketing tours can include any U.S. market — not just those
              listed above. Our logistics team develops routes that reach your
              priority markets regardless of location. For markets where we do
              not maintain permanent local teams, we recruit and train
              market-specific staff in advance of tour arrival. Explore our{" "}
              <Link
                href="/event-staffing-agency"
                className="text-[#00C853] hover:underline font-medium"
              >
                event staffing
              </Link>{" "}
              capabilities or view{" "}
              <Link
                href="/brand-ambassador-agency"
                className="text-[#00C853] hover:underline font-medium"
              >
                brand ambassador services
              </Link>{" "}
              by market.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Air Fresh for Mobile Tours */}
      <section className="py-20 lg:py-24 bg-gradient-to-r from-[#001F3F] to-[#003366] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Air Fresh Marketing for Your Mobile Tour
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Mobile marketing tours are complex, multi-disciplinary campaigns
              that demand an agency partner with proven touring experience,
              nationwide infrastructure, and the operational excellence to
              deliver consistent results across every market and every stop.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-xl font-bold text-[#00C853] mb-3">
                Proven Tour Execution Track Record
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                With 20+ years and 1,000+ events executed, Air Fresh Marketing
                has the experience to handle every challenge that arises on the
                road. From vehicle breakdowns and weather disruptions to permit
                issues and staffing emergencies, our team has navigated it all
                and built the processes to prevent and resolve problems before
                they impact your campaign. We have executed mobile tours for 300+
                brands across every vehicle type and activation format.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-xl font-bold text-[#00C853] mb-3">
                200+ City Infrastructure
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Our nationwide presence means your mobile tour has local support
                in every market — pre-vetted supplemental staff, established
                venue relationships, permitting contacts, and service vendor
                networks. This infrastructure eliminates the uncertainty of
                entering new markets and ensures professional execution from the
                first stop to the last, regardless of how many cities your tour
                covers.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-xl font-bold text-[#00C853] mb-3">
                GPS-Verified Accountability
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Every aspect of your mobile tour is tracked and verified. GPS
                confirms vehicle location and timing. Staff check-ins verify
                team deployment. Real-time dashboards give you live visibility
                into campaign performance. Daily reports document everything that
                happened at each stop. No other mobile tour agency offers this
                level of transparency and accountability across every mile and
                every market.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-xl font-bold text-[#00C853] mb-3">
                End-to-End Tour Management
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                From initial strategy through post-tour analytics, Air Fresh
                Marketing handles every aspect of your mobile tour in-house.
                Vehicle procurement, wrap production, route optimization, permit
                acquisition, staff recruitment, training, live execution,
                inventory management, and reporting — all managed by one
                dedicated team with one point of accountability and one
                consistent standard of excellence.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-xl font-bold text-[#00C853] mb-3">
                5,000+ Trained Brand Ambassadors
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Our talent network ensures you have qualified, brand-trained
                staff at every tour stop — whether you need a traveling core team
                or local market supplemental ambassadors in 50 simultaneous
                cities. Every team member completes your custom brand training
                through our video platform with embedded assessments before they
                represent your brand to a single consumer.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-xl font-bold text-[#00C853] mb-3">
                Real-Time Performance Optimization
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Our technology platform enables in-flight campaign optimization
                that maximizes ROI across your tour. Underperforming venues can
                be swapped. High-performing markets can receive additional days.
                Staffing levels can be adjusted based on engagement data. This
                agility is only possible with the real-time data infrastructure
                and operational flexibility that Air Fresh Marketing brings to
                every mobile tour.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Mobile Marketing Tour Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about planning, pricing, staffing, and executing
              mobile marketing tours with Air Fresh Marketing.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 border border-gray-200"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Link Section to All Pillar Pages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Explore All Air Fresh Marketing Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillarLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 p-4 bg-white rounded-lg border border-gray-200 hover:border-[#00C853]/50 hover:shadow-md transition-all group"
              >
                <span className="text-[#00C853] font-bold">&#8594;</span>
                <span className="text-sm font-medium text-gray-700 group-hover:text-[#00C853]">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              { href: "/services/experiential-marketing", label: "Experiential Marketing Services" },
              { href: "/services/brand-ambassadors", label: "Brand Ambassador Services" },
              { href: "/services/sampling", label: "Sampling Services" },
              { href: "/services/street-teams", label: "Street Team Services" },
              { href: "/case-studies", label: "Case Studies" },
              { href: "/pricing", label: "Pricing" },
              { href: "/contact", label: "Contact Us" },
              { href: quoteHref("related-links-quote"), label: "Get a Quote" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-[#00C853] hover:text-[#00C853] transition-colors shadow-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#001F3F] to-[#003366] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Take Your Brand on the Road?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            From route planning and vehicle build-out through staffing,
            permitting, live execution, and comprehensive analytics — Air Fresh
            Marketing is the mobile marketing tour partner that delivers
            measurable results in every market. Let us show you how 20+ years of
            touring expertise and 200+ city infrastructure can drive your next
            campaign.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={quoteHref("final-tour-proposal")}
              className="inline-flex items-center justify-center px-10 py-4 bg-[#00C853] hover:bg-[#00E676] text-[#001F3F] font-bold text-lg rounded-lg transition-colors"
            >
              Get a Free Tour Proposal
            </Link>
            <Link
              href={quoteHref("strategy-call")}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 font-bold text-lg rounded-lg transition-colors"
            >
              Schedule a Strategy Call
            </Link>
          </div>
          <p className="mt-8 text-gray-400 text-sm">
            Or call us directly at{" "}
            <a
              href="tel:303-720-6060"
              className="text-[#00C853] hover:underline"
            >
              (303) 720-6060
            </a>{" "}
            — Air Fresh Marketing, 1580 N. Logan St., Suite 660, Denver, CO
            80203. Our team responds within one business day.
          </p>
        </div>
      </section>

      {/* Compare Event Staffing Agencies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Compare Event Staffing Agencies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { href: '/compare/atn-event-staffing', label: 'AirFresh vs ATN Event Staffing' },
              { href: '/compare/elev8-staffing', label: 'AirFresh vs Elev8 Staffing' },
              { href: '/compare/attack-marketing', label: 'AirFresh vs Attack! Marketing' },
              { href: '/compare/alt-terrain', label: 'AirFresh vs Alt Terrain' },
              { href: '/compare/hype-agency', label: 'AirFresh vs The Hype Agency' },
              { href: '/compare/cea-staffing', label: 'AirFresh vs CEA Staffing' },
              { href: '/compare/ignite-productions', label: 'AirFresh vs Ignite Productions' },
              { href: '/compare/assist-marketing', label: 'AirFresh vs Assist Marketing' },
              { href: '/compare/kinetic-events', label: 'AirFresh vs Kinetic Events' },
              { href: '/compare/mosaic-experiential', label: 'AirFresh vs Mosaic Experiential' },
              { href: '/compare/pro-motion-staffing', label: 'AirFresh vs Pro Motion Staffing' },
              { href: '/compare/advantage-solutions', label: 'AirFresh vs Advantage Solutions' },
              { href: '/compare/allied-experiential', label: 'AirFresh vs Allied Experiential' },
              { href: '/compare/team-enterprises', label: 'AirFresh vs Team Enterprises' },
              { href: '/compare/encore-nationwide', label: 'AirFresh vs Encore Nationwide' },
              { href: '/compare/2x4-experiential', label: 'AirFresh vs 2x4 Experiential' },
              { href: '/compare/fusion-marketing', label: 'AirFresh vs Fusion Marketing' },
              { href: '/compare/event-strategy-group', label: 'AirFresh vs Event Strategy Group' },
              { href: '/compare/sparks-marketing', label: 'AirFresh vs Sparks Marketing' },
              { href: '/compare/grammy-staffing', label: 'AirFresh vs Grammy Staffing' },
              { href: '/compare/next-level-promotions', label: 'AirFresh vs Next Level Promotions' },
              { href: '/compare/lime-media', label: 'AirFresh vs Lime Media' },
              { href: '/compare/modern-marketing', label: 'AirFresh vs Modern Marketing' },
              { href: '/compare/nparallel', label: 'AirFresh vs NParallel' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block p-3 bg-white rounded-lg border border-gray-200 hover:border-[#00C853] hover:shadow-md transition-all text-center"
              >
                <span className="text-sm font-medium text-gray-700">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
