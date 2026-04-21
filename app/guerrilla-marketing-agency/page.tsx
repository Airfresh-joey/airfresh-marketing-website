import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Users,
  Zap,
  Target,
  TrendingUp,
  Shield,
  Phone,
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Eye,
  Megaphone,
  Camera,
  Building,
  DollarSign,
} from "lucide-react";

export default function GuerrillaMarketingAgencyPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Guerrilla Marketing Agency",
    description:
      "Guerrilla marketing agency specializing in unconventional street-level campaigns including street teams, flash mobs, wild postings, wheat paste advertising, guerrilla projections, pop-up activations, ambush marketing, and viral stunts. Air Fresh Marketing deploys 5,000+ trained brand ambassadors across 200+ U.S. cities to execute high-impact guerrilla campaigns that generate massive consumer attention at a fraction of traditional advertising costs.",
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
      "Guerrilla Marketing",
      "Street Team Marketing",
      "Flash Mob Marketing",
      "Wild Posting Campaigns",
      "Wheat Paste Advertising",
      "Guerrilla Projections",
      "Pop-Up Activations",
      "Ambush Marketing",
      "Viral Stunt Marketing",
      "Sticker Marketing Campaigns",
    ],
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "2500",
      highPrice: "250000",
      offerCount: "10",
      availability: "https://schema.org/InStock",
    },
    url: "https://www.airfreshmarketing.com/guerrilla-marketing-agency",
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
        name: "Guerrilla Marketing Agency",
        item: "https://www.airfreshmarketing.com/guerrilla-marketing-agency",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is guerrilla marketing and how does it work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Guerrilla marketing is an unconventional advertising strategy that uses surprise, creativity, and high-energy street-level tactics to promote a brand or product in unexpected ways. Unlike traditional advertising that relies on paid media placements, guerrilla marketing creates organic consumer interactions in public spaces — sidewalks, parks, transit stations, entertainment districts, and anywhere target audiences naturally congregate. A guerrilla marketing agency like Air Fresh Marketing designs campaigns that interrupt daily routines with memorable, shareable experiences that generate word-of-mouth, social media buzz, and earned media coverage at a fraction of traditional advertising costs.",
        },
      },
      {
        "@type": "Question",
        name: "How much does guerrilla marketing cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Guerrilla marketing campaign costs vary based on tactic, market, duration, and scale. Street team campaigns typically range from $30 to $55 per hour per team member. Wild posting campaigns cost $3,000 to $15,000 per market depending on posting locations and duration. Flash mob campaigns range from $10,000 to $50,000 depending on performer count and choreography complexity. Guerrilla projection campaigns cost $5,000 to $25,000 per night depending on equipment and location. Comprehensive multi-tactic guerrilla campaigns range from $15,000 to $250,000 or more. Air Fresh Marketing provides transparent, all-inclusive pricing with no hidden fees.",
        },
      },
      {
        "@type": "Question",
        name: "Is guerrilla marketing legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Guerrilla marketing legality depends entirely on the specific tactics employed and local regulations. Many guerrilla tactics — such as permitted street teams, sanctioned wild postings, flash mobs in public spaces, and projection advertising — are completely legal when executed properly. However, certain tactics like unsanctioned wheat pasting, unauthorized projections on private buildings, or blocking public thoroughfares can result in fines or legal action. Air Fresh Marketing employs compliance specialists who research local ordinances, secure necessary permits, obtain property owner permissions, and ensure every campaign element is legally sound. We never put our clients at legal risk.",
        },
      },
      {
        "@type": "Question",
        name: "How do you measure guerrilla marketing ROI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Guerrilla marketing ROI is measured through multiple quantitative and qualitative metrics including direct consumer impressions, social media mentions and earned media value, hashtag engagement, website traffic spikes, QR code scans, promo code redemptions, lead captures, app downloads, and direct sales conversions. Air Fresh Marketing uses GPS-verified staff deployment, real-time reporting dashboards, social listening tools, and post-campaign analytics to deliver comprehensive ROI measurement. Our clients typically see 5x to 15x earned media value compared to campaign investment, making guerrilla marketing one of the highest-ROI channels available.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between guerrilla marketing and experiential marketing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Guerrilla marketing and experiential marketing are related but distinct disciplines. Experiential marketing creates immersive brand experiences that invite consumer participation — events, activations, and installations where consumers opt in to engage. Guerrilla marketing, by contrast, interrupts consumers in unexpected ways and places, creating surprise encounters that generate buzz and word-of-mouth. Guerrilla tactics are typically more disruptive, lower-cost, and designed for virality. Many campaigns combine both approaches — using guerrilla tactics to drive awareness and traffic toward experiential activations. Air Fresh Marketing specializes in both disciplines and often integrates them for maximum impact.",
        },
      },
      {
        "@type": "Question",
        name: "How far in advance should I plan a guerrilla marketing campaign?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For optimal results, guerrilla marketing campaigns should be planned 4 to 8 weeks in advance for standard tactics like street teams and wild postings, and 8 to 12 weeks for complex productions like flash mobs, projection campaigns, or multi-market rollouts. This timeline allows for creative development, location scouting, permit acquisition, staff recruitment and training, materials production, and logistics coordination. However, Air Fresh Marketing maintains rapid-deployment capabilities and can execute certain guerrilla tactics in as little as 7 to 10 days for time-sensitive opportunities — such as cultural moments, competitor responses, or trending conversations.",
        },
      },
      {
        "@type": "Question",
        name: "Can guerrilla marketing work for B2B brands?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. B2B guerrilla marketing is highly effective when deployed strategically around industry events, trade shows, corporate campuses, and business districts. Tactics include conference ambush marketing (activating near competitor events without paying sponsorship fees), targeted wild postings in business districts, street teams distributing thought leadership at industry events, projection advertising on buildings near trade show venues, and pop-up experiences in office parks. Air Fresh Marketing has executed B2B guerrilla campaigns for technology companies, SaaS platforms, and professional services firms — generating qualified leads at 60 to 80 percent lower cost per acquisition than traditional B2B advertising channels.",
        },
      },
      {
        "@type": "Question",
        name: "What cities do you cover for guerrilla marketing campaigns?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Air Fresh Marketing executes guerrilla marketing campaigns in over 200 cities across the United States. Our primary guerrilla marketing markets include New York City, Los Angeles, Chicago, Miami, San Francisco, Austin, Denver, Nashville, Atlanta, Boston, Seattle, Portland, Dallas, Houston, Phoenix, Philadelphia, Washington DC, Las Vegas, San Diego, Minneapolis, Detroit, New Orleans, Charlotte, and Tampa. We maintain pre-vetted street teams, established vendor relationships for wild postings and projections, and local market expertise in each city. For campaigns requiring coverage in smaller markets, we recruit and train local teams within our standard planning timeline.",
        },
      },
      {
        "@type": "Question",
        name: "What makes Air Fresh Marketing different from other guerrilla marketing agencies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Air Fresh Marketing differentiates through three key advantages: scale, technology, and compliance. Scale means 5,000+ pre-vetted brand ambassadors across 200+ cities, allowing nationwide guerrilla deployment with local market expertise. Technology means GPS-verified check-in systems, real-time reporting dashboards, and video training platforms that ensure accountability and transparency across every campaign. Compliance means dedicated legal and permitting specialists who ensure every guerrilla tactic is executed within local regulations — protecting your brand reputation while maximizing creative impact. We have executed over 1,000 events for 300+ brands including Netflix, Microsoft, Formula 1, and MAC Cosmetics since 2004.",
        },
      },
    ],
  };

  const guerrillaTypes = [
    {
      title: "Street Team Marketing",
      description:
        "Street team marketing deploys branded ambassador teams into high-traffic urban environments to create direct consumer connections. Our street teams distribute samples, promotional materials, and branded merchandise while engaging pedestrians with compelling brand messaging. Street teams operate in entertainment districts, transit hubs, college campuses, festival perimeters, sporting event tailgates, and anywhere your target audience congregates. Air Fresh Marketing street teams are GPS-verified, brand-trained, and managed by field supervisors who ensure consistent quality across every interaction.",
    },
    {
      title: "Flash Mob Campaigns",
      description:
        "Flash mob marketing creates sudden, choreographed performances in public spaces that surprise and delight unsuspecting audiences while delivering brand messages. Our flash mobs combine professional dancers, actors, musicians, or performers with brand messaging integration that feels organic rather than forced. Flash mobs generate massive social media content, news coverage, and viral video potential. Air Fresh Marketing handles all choreography, rehearsal, location scouting, permitting, and content capture to deliver flash mob campaigns that generate millions of organic impressions.",
    },
    {
      title: "Sticker and Wheat Paste Campaigns",
      description:
        "Sticker and wheat paste advertising places bold, eye-catching brand visuals on approved surfaces throughout urban environments. These street-level placements create ambient brand presence that targets pedestrians, commuters, and nightlife audiences in the neighborhoods where they live and socialize. When executed on sanctioned surfaces and approved locations, sticker and wheat paste campaigns deliver sustained visibility at extremely low cost-per-impression. Air Fresh Marketing works exclusively with authorized posting locations and property owners to ensure legal compliance while maximizing creative impact and geographic saturation.",
    },
    {
      title: "Wild Posting Campaigns",
      description:
        "Wild posting covers urban surfaces with large-format poster advertisements that create impossible-to-ignore brand presence in high-traffic pedestrian areas. Wild postings dominate streetscapes in entertainment districts, arts neighborhoods, college areas, and nightlife zones where traditional advertising cannot reach. Our wild posting campaigns include location scouting, surface negotiation, poster production, installation, maintenance, and documentation. Air Fresh Marketing manages wild posting campaigns across 50+ U.S. cities with established relationships at premium posting locations in every major market.",
    },
    {
      title: "Guerrilla Projection Advertising",
      description:
        "Guerrilla projection advertising transforms building facades, sidewalks, and urban surfaces into massive brand canvases using high-powered projection technology. Projection campaigns create spectacular nighttime brand experiences that stop pedestrians, generate social media content, and earn news coverage. Projections can display static images, animated content, interactive elements, and even real-time social media feeds. Air Fresh Marketing handles all equipment sourcing, power logistics, building permissions, content creation, and on-site technical management for projection campaigns that turn cities into brand billboards.",
    },
    {
      title: "Pop-Up Guerrilla Activations",
      description:
        "Pop-up guerrilla activations create temporary branded experiences in unexpected locations — transforming parking lots into product showcases, alleyways into immersive brand worlds, and storefronts into interactive installations. Unlike traditional pop-ups that rely on foot traffic, guerrilla pop-ups are designed to generate buzz through their unexpected nature and locations. The surprise element drives social sharing, media coverage, and word-of-mouth that extends impact far beyond physical attendees. Air Fresh Marketing designs, builds, staffs, and promotes guerrilla pop-ups that create cultural moments.",
    },
    {
      title: "Ambush Marketing",
      description:
        "Ambush marketing strategically positions your brand near competitor events, sponsorship activations, or industry gatherings without paying official sponsorship fees. Legal ambush marketing tactics include activating in public spaces near event venues, deploying street teams along attendee routes, wild posting in surrounding neighborhoods, mobile billboard routes near stadiums, and hosting counter-events that draw attention from official programming. Air Fresh Marketing executes ambush campaigns that are creative, compliant, and impossible to ignore — delivering event-level exposure without event-level sponsorship investment.",
    },
    {
      title: "Viral Stunt Marketing",
      description:
        "Viral stunt marketing creates spectacular, unexpected brand moments engineered for maximum social media amplification and earned media coverage. Viral stunts range from large-scale public performances and impossible installations to celebrity surprise appearances and record-breaking attempts. The key to successful viral stunt marketing is creating moments so remarkable that witnesses feel compelled to capture and share them. Air Fresh Marketing develops stunt concepts, handles all production logistics, positions content capture teams, seeds initial social amplification, and manages media outreach to ensure maximum viral potential for every stunt execution.",
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Strategy and Creative Development",
      description:
        "We begin every guerrilla campaign with deep discovery into your brand objectives, target audience behavior, competitive landscape, and cultural context. Our strategists identify the optimal guerrilla tactics, target neighborhoods, timing windows, and creative concepts that will generate maximum disruption and brand impact. We deliver a comprehensive campaign plan with creative concepts, tactical recommendations, market selection, timeline, staffing requirements, compliance assessment, and measurement framework.",
    },
    {
      step: 2,
      title: "Location Scouting and Permitting",
      description:
        "Our field teams scout specific activation locations in each target market — identifying high-traffic areas, optimal visibility angles, power access points, and logistical staging positions. Simultaneously, our compliance team researches local ordinances, secures required permits, negotiates surface access with property owners, and obtains any necessary insurance certificates. This dual-track approach ensures every campaign location is both strategically optimal and legally sound.",
    },
    {
      step: 3,
      title: "Talent Recruitment and Training",
      description:
        "We recruit guerrilla marketing specialists from our network of 5,000+ brand ambassadors, selecting team members based on market familiarity, physical capabilities, brand alignment, and relevant experience. Every team member completes brand-specific training through our video training platform covering campaign objectives, brand messaging, consumer engagement techniques, compliance guidelines, and safety protocols. Field supervisors are assigned to manage on-ground execution in each market.",
    },
    {
      step: 4,
      title: "Production and Materials",
      description:
        "Our production team manages all campaign materials — from wild posting artwork and sticker production to flash mob costumes, projection content, and pop-up fabrication. We handle printing, shipping, warehousing, and distribution logistics to ensure materials arrive in every market on schedule and in perfect condition. All creative assets are produced to withstand weather, handling, and the specific conditions of street-level deployment.",
    },
    {
      step: 5,
      title: "Execution and Real-Time Management",
      description:
        "Campaign launch day activates our full operational infrastructure. Street teams check in via GPS-verified mobile platform. Field supervisors provide real-time updates and quality control. Content capture teams document every activation moment. Our operations center monitors all markets simultaneously through our real-time reporting dashboard, enabling immediate adjustments to optimize performance. Clients receive live access to campaign data throughout execution.",
    },
    {
      step: 6,
      title: "Reporting and Optimization",
      description:
        "Post-campaign, we deliver comprehensive analytics including total impressions, engagement metrics, social media earned value, content performance, lead captures, and ROI analysis. For multi-day or ongoing campaigns, we provide optimization recommendations based on real-time performance data — adjusting locations, timing, messaging, and tactics to continuously improve results. Every campaign generates learnings that inform future guerrilla strategy.",
    },
  ];

  const cities = [
    { name: "New York City", slug: "new-york-city" },
    { name: "Los Angeles", slug: "los-angeles" },
    { name: "Chicago", slug: "chicago" },
    { name: "Miami", slug: "miami" },
    { name: "San Francisco", slug: "san-francisco" },
    { name: "Austin", slug: "austin" },
    { name: "Denver", slug: "denver" },
    { name: "Nashville", slug: "nashville" },
    { name: "Atlanta", slug: "atlanta" },
    { name: "Boston", slug: "boston" },
    { name: "Seattle", slug: "seattle" },
    { name: "Portland", slug: "portland" },
    { name: "Dallas", slug: "dallas" },
    { name: "Houston", slug: "houston" },
    { name: "Phoenix", slug: "phoenix" },
    { name: "Philadelphia", slug: "philadelphia" },
    { name: "Washington DC", slug: "washington-dc" },
    { name: "Las Vegas", slug: "las-vegas" },
    { name: "San Diego", slug: "san-diego" },
    { name: "Minneapolis", slug: "minneapolis" },
    { name: "Detroit", slug: "detroit" },
    { name: "New Orleans", slug: "new-orleans" },
    { name: "Charlotte", slug: "charlotte" },
    { name: "Tampa", slug: "tampa" },
    { name: "Orlando", slug: "orlando" },
    { name: "Salt Lake City", slug: "salt-lake-city" },
    { name: "Indianapolis", slug: "indianapolis" },
    { name: "Columbus", slug: "columbus" },
  ];

  const industries = [
    {
      name: "Consumer Packaged Goods",
      description:
        "Product sampling street teams, wild posting for new product launches, guerrilla activations in grocery and retail districts, and viral stunt campaigns that drive trial and conversion for CPG brands entering new markets or launching new SKUs.",
    },
    {
      name: "Technology and Apps",
      description:
        "App download street teams, QR code guerrilla placements, flash mob product reveals, projection advertising for product launches, and ambush marketing at tech conferences that drive installs and sign-ups at dramatically lower CPA than digital acquisition channels.",
    },
    {
      name: "Entertainment and Media",
      description:
        "Movie premiere guerrilla campaigns, streaming service street team promotions, concert and festival ambush marketing, wild posting for album and show launches, and viral stunts that generate massive social buzz and earned media for entertainment properties.",
    },
    {
      name: "Food and Beverage",
      description:
        "Sampling street teams in high-traffic pedestrian areas, guerrilla pop-up tastings, food truck activations, wild posting in nightlife and dining districts, and flash mob campaigns that create shareable moments driving brand trial and restaurant traffic.",
    },
    {
      name: "Fashion and Beauty",
      description:
        "Style-focused street teams in fashion districts, wild posting during fashion weeks, guerrilla pop-up shops, beauty sampling in lifestyle neighborhoods, projection advertising on iconic buildings, and viral stunt campaigns that generate fashion media coverage.",
    },
    {
      name: "Automotive",
      description:
        "Guerrilla vehicle displays in unexpected locations, street team campaigns at commuter touchpoints, projection advertising showcasing new models, ambush marketing near competitor dealerships and auto shows, and viral stunt campaigns that demonstrate vehicle capabilities in dramatic ways.",
    },
    {
      name: "Sports and Fitness",
      description:
        "Game-day street teams and sampling near stadiums, guerrilla activations at marathon routes and fitness events, wild posting in athletic neighborhoods, flash mob fitness challenges, and ambush marketing around major sporting events that capture fan attention without sponsorship fees.",
    },
    {
      name: "Cannabis and CBD",
      description:
        "Compliant guerrilla marketing in legal markets including education-focused street teams, wild posting in appropriate districts, pop-up brand experiences, and projection campaigns that build brand awareness within strict regulatory frameworks governing cannabis advertising.",
    },
  ];

  const caseStudies = [
    {
      brand: "Major Streaming Platform",
      campaign: "Series Launch Guerrilla Takeover",
      description:
        "Deployed 200+ street team members across 8 cities simultaneously with wild postings, guerrilla projections, and flash mob performances to launch a major original series. Generated 45 million earned media impressions and 2.3 million social engagements in 72 hours.",
      metrics: ["45M earned impressions", "8 cities in 72 hours", "2.3M social engagements"],
    },
    {
      brand: "Leading Energy Drink Brand",
      campaign: "Urban Sampling Blitz",
      description:
        "Executed a 30-day guerrilla sampling campaign across 12 markets targeting college campuses, fitness centers, and nightlife districts. Street teams distributed 500,000 samples with integrated digital engagement that drove 85,000 app downloads and a 340% increase in market share in target demographics.",
      metrics: ["500K samples distributed", "85K app downloads", "340% market share increase"],
    },
    {
      brand: "Global Sneaker Brand",
      campaign: "Limited Drop Guerrilla Campaign",
      description:
        "Created an underground-style guerrilla campaign with cryptic wild postings, projection clues, and street team treasure hunts across 5 cities to build anticipation for a limited sneaker release. Generated complete sell-out in 11 minutes and 12 million organic social impressions from user-generated content.",
      metrics: ["Sold out in 11 minutes", "12M organic impressions", "5 city simultaneous activation"],
    },
  ];

  const pillarPages = [
    { title: "Event Staffing Agency", href: "/event-staffing-agency" },
    { title: "Hire Brand Ambassadors", href: "/hire-brand-ambassadors" },
    { title: "Brand Ambassador Agency", href: "/brand-ambassador-agency" },
    { title: "Experiential Marketing Agency", href: "/experiential-marketing-agency" },
    { title: "Promotional Staffing Agency", href: "/promotional-staffing-agency" },
    { title: "Corporate Event Staffing", href: "/corporate-event-staffing" },
    { title: "Event Marketing Agency", href: "/event-marketing-agency" },
    { title: "Brand Activation Agency", href: "/brand-activation-agency" },
    { title: "Field Marketing Agency", href: "/field-marketing-agency" },
  ];

  return (
    <>
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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#001F3F] to-[#003366] py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-4xl">
            <p className="text-[#00C853] font-semibold text-sm uppercase tracking-wider mb-4">
              Unconventional Marketing That Demands Attention
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Guerrilla Marketing Agency — Street-Level Campaigns That Go Viral
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
              Guerrilla marketing agency deploying 5,000+ brand ambassadors across 200+ cities
              to execute unconventional street teams, flash mobs, wild postings, projections,
              and viral stunts that generate massive brand awareness at a fraction of traditional
              advertising costs. Since 2004, Air Fresh Marketing has helped 300+ brands break
              through the noise with guerrilla campaigns engineered for maximum disruption and
              measurable ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/get-quote">
                <Button className="bg-[#00C853] hover:bg-[#00E676] text-black font-bold px-8 py-6 text-lg rounded-lg">
                  Get a Guerrilla Marketing Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 font-bold px-8 py-6 text-lg rounded-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  (303) 720-6060
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-[#00C853]">5,000+</p>
                <p className="text-gray-400 text-sm">Brand Ambassadors</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#00C853]">200+</p>
                <p className="text-gray-400 text-sm">Cities Nationwide</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#00C853]">1,000+</p>
                <p className="text-gray-400 text-sm">Events Executed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#00C853]">300+</p>
                <p className="text-gray-400 text-sm">Brands Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Guerrilla Marketing */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-6">
              What Is Guerrilla Marketing?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Guerrilla marketing is an unconventional advertising strategy that uses surprise,
                creativity, and high-energy street-level tactics to promote brands in unexpected ways
                and places. Coined by Jay Conrad Levinson in his 1984 book, guerrilla marketing
                borrows its name from guerrilla warfare — small, agile forces using unconventional
                tactics to achieve outsized impact against larger opponents. In marketing terms, this
                translates to brands using creative disruption rather than massive media budgets to
                capture consumer attention.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Unlike traditional advertising that interrupts consumers through paid media placements
                — television commercials, billboard rentals, digital display ads — guerrilla marketing
                creates organic, memorable encounters in the physical world. These encounters happen on
                sidewalks, in parks, at transit stations, outside concert venues, along commuter routes,
                and in every public space where target audiences naturally exist. The fundamental
                principle is simple: if you cannot outspend your competition, you can out-create them.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Modern guerrilla marketing has evolved far beyond its scrappy, low-budget origins.
                Today, major brands including Netflix, Red Bull, Nike, and Spotify deploy sophisticated
                guerrilla campaigns precisely because the format delivers something traditional
                advertising cannot — genuine surprise, authentic cultural relevance, and organic social
                amplification. When a guerrilla campaign succeeds, consumers do not feel marketed to;
                they feel entertained, surprised, or inspired. They voluntarily share the experience
                with their networks, transforming marketing spend into earned media at exponential scale.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Air Fresh Marketing has been at the forefront of guerrilla marketing execution since
                2004, deploying street teams, flash mobs, wild postings, projections, and viral stunts
                for brands ranging from Fortune 500 corporations to venture-backed startups. Our
                nationwide infrastructure — 5,000+ trained brand ambassadors, established vendor
                networks in 200+ cities, and proprietary technology platform — enables guerrilla
                campaigns that combine creative disruption with operational precision and measurable
                accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Guerrilla Marketing */}
      <section className="py-16 md:py-20 bg-[#001F3F]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Types of Guerrilla Marketing Campaigns
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Air Fresh Marketing executes every major guerrilla marketing tactic — from traditional
              street teams and wild postings to cutting-edge projections and viral stunt productions.
              Each tactic is deployable individually or combined into comprehensive multi-channel
              guerrilla campaigns.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {guerrillaTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-[#00C853]/50 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#00C853]/10 p-3 rounded-lg flex-shrink-0">
                    {index === 0 && <Users className="h-6 w-6 text-[#00C853]" />}
                    {index === 1 && <Zap className="h-6 w-6 text-[#00C853]" />}
                    {index === 2 && <Target className="h-6 w-6 text-[#00C853]" />}
                    {index === 3 && <Eye className="h-6 w-6 text-[#00C853]" />}
                    {index === 4 && <Camera className="h-6 w-6 text-[#00C853]" />}
                    {index === 5 && <Star className="h-6 w-6 text-[#00C853]" />}
                    {index === 6 && <Megaphone className="h-6 w-6 text-[#00C853]" />}
                    {index === 7 && <TrendingUp className="h-6 w-6 text-[#00C853]" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{type.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{type.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Guerrilla Marketing Works */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-4">
              How Guerrilla Marketing Works — Our Process
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Air Fresh Marketing transforms guerrilla marketing from unpredictable creative gamble into
              repeatable, measurable campaign methodology. Our six-phase process ensures every guerrilla
              campaign delivers both creative disruption and quantifiable business results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="bg-[#001F3F] text-[#00C853] w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-[#001F3F] mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Guerrilla Marketing */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-6">
              Why Guerrilla Marketing Outperforms Traditional Advertising
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              In an era of ad blockers, streaming skip buttons, and banner blindness, guerrilla
              marketing cuts through consumer indifference by meeting people in the physical world
              with experiences they cannot ignore, skip, or scroll past. Here is why brands are
              shifting budgets from traditional channels to guerrilla tactics:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                <CheckCircle className="h-6 w-6 text-[#00C853] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#001F3F] mb-2">Unskippable Brand Encounters</h3>
                  <p className="text-gray-600">
                    Consumers cannot ad-block a street team, skip a flash mob, or scroll past a
                    building projection. Guerrilla marketing creates physical brand encounters that
                    demand attention and engagement in ways digital ads simply cannot achieve.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                <CheckCircle className="h-6 w-6 text-[#00C853] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#001F3F] mb-2">Earned Media Multiplication</h3>
                  <p className="text-gray-600">
                    Effective guerrilla campaigns generate 5x to 15x their cost in earned media
                    value through social sharing, news coverage, and word-of-mouth amplification
                    that extends far beyond the physical campaign footprint.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                <CheckCircle className="h-6 w-6 text-[#00C853] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#001F3F] mb-2">Hyper-Local Targeting</h3>
                  <p className="text-gray-600">
                    Guerrilla tactics can target specific neighborhoods, venues, events, and
                    micro-audiences with precision impossible through mass media. Reach exactly the
                    consumers you want, where they naturally spend time, with zero wasted impressions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                <CheckCircle className="h-6 w-6 text-[#00C853] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#001F3F] mb-2">Cultural Relevance</h3>
                  <p className="text-gray-600">
                    Guerrilla marketing creates cultural moments rather than advertising interruptions.
                    When executed well, campaigns become part of the cultural conversation — shared,
                    discussed, and remembered as experiences rather than advertisements.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                <CheckCircle className="h-6 w-6 text-[#00C853] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#001F3F] mb-2">Lower Cost Per Impression</h3>
                  <p className="text-gray-600">
                    Guerrilla campaigns typically deliver cost-per-impression rates 60 to 90 percent
                    lower than traditional out-of-home advertising, with higher engagement rates and
                    stronger brand recall due to the interactive, memorable nature of encounters.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                <CheckCircle className="h-6 w-6 text-[#00C853] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#001F3F] mb-2">Competitive Disruption</h3>
                  <p className="text-gray-600">
                    Guerrilla tactics let challenger brands compete with market leaders without
                    matching their media budgets. A well-executed guerrilla campaign can generate
                    more cultural impact than competitors spending 10x on traditional channels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-20 bg-[#001F3F]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Guerrilla Marketing Costs and Pricing
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Transparent pricing for every guerrilla marketing tactic. All rates include
              recruitment, training, management, GPS verification, real-time reporting, and
              post-campaign analytics. No hidden fees or surprise charges.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <DollarSign className="h-8 w-8 text-[#00C853] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Brand Ambassadors</h3>
              <p className="text-3xl font-bold text-[#00C853] mb-2">$35-65<span className="text-lg text-gray-400">/hr</span></p>
              <p className="text-gray-400">Per team member. Includes brand training, uniforms, GPS check-in, and field management.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <DollarSign className="h-8 w-8 text-[#00C853] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Street Teams</h3>
              <p className="text-3xl font-bold text-[#00C853] mb-2">$30-55<span className="text-lg text-gray-400">/hr</span></p>
              <p className="text-gray-400">Per team member. High-energy street-level teams for sampling, flyering, and brand engagement.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <DollarSign className="h-8 w-8 text-[#00C853] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Wild Postings</h3>
              <p className="text-3xl font-bold text-[#00C853] mb-2">$3K-15K<span className="text-lg text-gray-400">/market</span></p>
              <p className="text-gray-400">Includes location scouting, surface negotiation, printing, installation, and documentation.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <DollarSign className="h-8 w-8 text-[#00C853] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Flash Mobs</h3>
              <p className="text-3xl font-bold text-[#00C853] mb-2">$10K-50K<span className="text-lg text-gray-400">/event</span></p>
              <p className="text-gray-400">Choreography, rehearsal, performers, permits, content capture, and post-production included.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <DollarSign className="h-8 w-8 text-[#00C853] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Projection Campaigns</h3>
              <p className="text-3xl font-bold text-[#00C853] mb-2">$5K-25K<span className="text-lg text-gray-400">/night</span></p>
              <p className="text-gray-400">Equipment, content creation, building permissions, power logistics, and technical crew.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <DollarSign className="h-8 w-8 text-[#00C853] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Full Guerrilla Campaigns</h3>
              <p className="text-3xl font-bold text-[#00C853] mb-2">$15K-250K<span className="text-lg text-gray-400">/campaign</span></p>
              <p className="text-gray-400">Multi-tactic, multi-market campaigns with strategy, creative, execution, and analytics.</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/get-quote">
              <Button className="bg-[#00C853] hover:bg-[#00E676] text-black font-bold px-8 py-6 text-lg rounded-lg">
                Get Custom Pricing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-4">
              Guerrilla Marketing Case Studies
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Real results from guerrilla campaigns executed by Air Fresh Marketing. These case
              studies demonstrate the measurable impact of unconventional marketing tactics deployed
              at scale with professional execution.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 border border-gray-100"
              >
                <div className="bg-[#001F3F] text-[#00C853] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-4">
                  Case Study
                </div>
                <h3 className="text-xl font-bold text-[#001F3F] mb-2">{study.brand}</h3>
                <p className="text-[#00C853] font-semibold text-sm mb-3">{study.campaign}</p>
                <p className="text-gray-600 leading-relaxed mb-4">{study.description}</p>
                <div className="space-y-2">
                  {study.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#00C853]" />
                      <span className="text-sm font-semibold text-[#001F3F]">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/case-studies" className="text-[#00C853] font-semibold hover:underline">
              View All Case Studies <ArrowRight className="inline h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-4">
              Industries That Benefit From Guerrilla Marketing
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Guerrilla marketing delivers exceptional ROI across consumer-facing industries.
              Air Fresh Marketing has executed successful guerrilla campaigns for brands in
              every category below — and many more.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <Building className="h-6 w-6 text-[#00C853] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#001F3F] mb-2">{industry.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{industry.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Platform */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-6">
              Guerrilla Marketing Technology Platform
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Guerrilla marketing has historically been difficult to measure and manage at scale.
              Air Fresh Marketing solves this challenge with proprietary technology that brings
              accountability, transparency, and data-driven optimization to every guerrilla campaign.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <MapPin className="h-10 w-10 text-[#00C853] mx-auto mb-4" />
                <h3 className="font-bold text-[#001F3F] mb-2">GPS Check-In Verification</h3>
                <p className="text-gray-600 text-sm">
                  Every team member checks in via GPS-verified mobile app, confirming they are
                  at the correct location, on time, and in proper brand attire. Real-time location
                  tracking ensures full accountability throughout campaign deployment.
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Camera className="h-10 w-10 text-[#00C853] mx-auto mb-4" />
                <h3 className="font-bold text-[#001F3F] mb-2">Video Training Platform</h3>
                <p className="text-gray-600 text-sm">
                  Brand-specific training modules delivered through our video platform ensure
                  every guerrilla team member understands campaign objectives, brand messaging,
                  engagement techniques, and compliance requirements before deployment.
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <TrendingUp className="h-10 w-10 text-[#00C853] mx-auto mb-4" />
                <h3 className="font-bold text-[#001F3F] mb-2">Real-Time Reporting Dashboard</h3>
                <p className="text-gray-600 text-sm">
                  Live campaign metrics visible through our client dashboard including impressions,
                  engagements, samples distributed, leads captured, photos, and field notes. Monitor
                  all markets simultaneously from a single interface.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal and Compliance */}
      <section className="py-16 md:py-20 bg-[#001F3F]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-8">
              <Shield className="h-10 w-10 text-[#00C853] flex-shrink-0" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Guerrilla Marketing Legal and Compliance Considerations
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  The line between creative guerrilla marketing and illegal activity is often
                  narrow and varies dramatically by city, state, and tactic. Air Fresh Marketing
                  employs dedicated compliance specialists who ensure every campaign element is
                  legally sound — protecting your brand from fines, liability, and reputational risk.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-bold text-white mb-3">Permitting and Licensing</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Many guerrilla tactics require permits — street team deployments, amplified sound,
                  temporary structures, sidewalk usage, projection equipment, and large gatherings all
                  have permit requirements that vary by jurisdiction. We research and secure all
                  required permits before campaign launch, ensuring legal compliance in every market.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-bold text-white mb-3">Property Rights and Surface Access</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Wild postings, projections, and sticker placements require explicit property owner
                  permission in most jurisdictions. Unauthorized postings constitute vandalism and can
                  result in fines, cleanup costs, and brand liability. Air Fresh Marketing works
                  exclusively with authorized surfaces and maintains documented permission agreements.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-bold text-white mb-3">Public Safety Requirements</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Flash mobs, viral stunts, and large-scale guerrilla activations must not create
                  public safety hazards — blocking emergency access, creating crowd crush risks, or
                  causing traffic disruptions. We coordinate with local authorities when required and
                  maintain safety protocols, crowd management plans, and liability insurance for every activation.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-bold text-white mb-3">Trademark and Competitor References</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Ambush marketing campaigns must navigate trademark law carefully. While activating
                  near competitor events is legal, using competitor trademarks, implying official
                  sponsorship, or creating consumer confusion can trigger legal action. Our campaigns
                  achieve competitive positioning while respecting intellectual property boundaries.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-bold text-white mb-3">Insurance and Liability</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  All Air Fresh Marketing guerrilla campaigns carry comprehensive general liability
                  insurance, workers compensation coverage, and additional insured certificates for
                  client protection. Many venues and municipalities require proof of insurance before
                  granting activation permits — we maintain coverage that satisfies all standard requirements.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-bold text-white mb-3">Content Capture and Privacy</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Filming and photographing guerrilla activations in public spaces is generally
                  permitted, but using consumer likenesses in commercial content requires proper
                  releases. We maintain photo/video release protocols and ensure all content usage
                  complies with state-specific privacy and publicity rights laws.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* City Coverage */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-4">
              Guerrilla Marketing Cities — Nationwide Coverage
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Air Fresh Marketing executes guerrilla marketing campaigns in 200+ cities across the
              United States. Our primary guerrilla marketing markets feature pre-vetted street teams,
              established wild posting vendors, projection equipment access, and local market expertise.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/cities/${city.slug}`}
                className="bg-white border border-gray-200 rounded-lg px-3 py-3 text-center hover:border-[#00C853] hover:shadow-sm transition-all duration-200"
              >
                <span className="text-sm font-medium text-[#001F3F] hover:text-[#00C853]">
                  {city.name}
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/cities" className="text-[#00C853] font-semibold hover:underline">
              View All 200+ Cities <ArrowRight className="inline h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Air Fresh Marketing */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-6">
              Why Brands Choose Air Fresh Marketing for Guerrilla Campaigns
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Since 2004, Air Fresh Marketing has been the guerrilla marketing agency of choice for
              brands including Netflix, Microsoft, Formula 1, MAC Cosmetics, and hundreds more.
              Here is what separates us from other agencies claiming guerrilla marketing capabilities:
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                <Globe className="h-8 w-8 text-[#00C853] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[#001F3F] mb-2">
                    National Scale, Local Expertise
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Most guerrilla marketing agencies operate in a single market and partner with
                    subcontractors elsewhere. Air Fresh Marketing maintains owned talent pools,
                    established vendor relationships, and local market managers in 200+ cities.
                    This means consistent quality, unified reporting, and single-point accountability
                    whether you are activating in 1 city or 50 simultaneously.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                <Shield className="h-8 w-8 text-[#00C853] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[#001F3F] mb-2">
                    Compliance-First Approach
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Many agencies treat guerrilla marketing as inherently risky and play fast and loose
                    with permits, permissions, and regulations. We take the opposite approach — our
                    compliance team ensures every campaign element is legally sound before deployment.
                    This protects your brand while still delivering the creative disruption that makes
                    guerrilla marketing effective. We have never had a client face legal consequences
                    from a campaign we executed.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                <TrendingUp className="h-8 w-8 text-[#00C853] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[#001F3F] mb-2">
                    Measurable Accountability
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Guerrilla marketing has historically lacked measurement rigor. Our technology
                    platform changes this entirely — GPS-verified deployment, real-time KPI tracking,
                    photo and video documentation, social listening integration, and comprehensive
                    post-campaign analytics. Every dollar invested in guerrilla marketing with Air
                    Fresh Marketing is tracked, measured, and reported with the same rigor as digital
                    advertising channels.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                <Users className="h-8 w-8 text-[#00C853] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[#001F3F] mb-2">
                    5,000+ Trained Brand Ambassadors
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our guerrilla teams are not random labor pulled from gig platforms. They are
                    recruited, interviewed, trained, and managed professionals who understand brand
                    representation, consumer engagement, and street-level marketing psychology. Every
                    team member completes brand-specific video training, passes brand knowledge
                    assessments, and operates under active field management supervision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-8 text-center">
              Guerrilla Marketing FAQs
            </h2>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-[#001F3F] mb-3">
                    {faq.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Link Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-4">
              Explore Our Marketing Services
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Air Fresh Marketing provides comprehensive event staffing and experiential marketing
              services nationwide. Explore our full range of capabilities:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {pillarPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg px-5 py-4 hover:border-[#00C853] hover:bg-gray-100 transition-all duration-200 group"
              >
                <ArrowRight className="h-4 w-4 text-[#00C853] flex-shrink-0 group-hover:translate-x-1 transition-transform duration-200" />
                <span className="font-medium text-[#001F3F]">{page.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-[#001F3F] to-[#003366]">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Launch a Guerrilla Marketing Campaign?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Air Fresh Marketing is the guerrilla marketing agency trusted by Netflix, Microsoft,
            Formula 1, and 300+ brands to execute unconventional campaigns that break through the
            noise. Get a custom guerrilla marketing proposal within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/get-quote">
              <Button className="bg-[#00C853] hover:bg-[#00E676] text-black font-bold px-10 py-6 text-lg rounded-lg">
                Get Your Free Guerrilla Marketing Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-bold px-10 py-6 text-lg rounded-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (303) 720-6060
              </Button>
            </Link>
          </div>
          <p className="text-gray-400 text-sm">
            No commitment required. Proposals delivered within 24 hours. Serving all 50 states.
          </p>
        </div>
      </section>
    </>
  );
}
