import Link from "next/link";
import {
  MapPin,
  CheckCircle,
  Users,
  BarChart3,
  Shield,
  Clock,
  Phone,
  ArrowRight,
  Target,
  Zap,
  Globe,
  DollarSign,
  Video,
  Smartphone,
  TrendingUp,
  Award,
} from "lucide-react";

export default function FieldMarketingAgencyPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Field Marketing Agency",
    description:
      "Full-service field marketing agency providing product demonstrations, sampling campaigns, retail audits, mystery shopping, direct sales teams, street teams, and in-store merchandising programs across 200+ U.S. cities. GPS-verified check-ins, video training platform, and real-time reporting dashboard for complete campaign transparency.",
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
      "Field Marketing",
      "Product Demonstrations",
      "Sampling Campaigns",
      "Retail Audits",
      "Mystery Shopping",
      "Direct Sales Teams",
      "Street Teams",
      "In-Store Merchandising",
      "Guerrilla Marketing",
      "Event Staffing",
    ],
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "30",
      highPrice: "70",
      offerCount: "10",
      availability: "https://schema.org/InStock",
    },
    url: "https://www.airfreshmarketing.com/field-marketing-agency",
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
        item: "https://www.airfreshmarketing.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Field Marketing Agency",
        item: "https://www.airfreshmarketing.com/field-marketing-agency",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a field marketing agency?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A field marketing agency is a specialized marketing firm that deploys trained personnel into physical locations to execute brand-building activities directly with consumers. This includes product demonstrations, sampling campaigns, retail audits, mystery shopping, direct sales, street team activations, and in-store merchandising. Unlike digital marketing agencies that operate exclusively online, field marketing agencies create face-to-face interactions between brands and their target audiences in retail environments, events, public spaces, and commercial locations. Air Fresh Marketing is a full-service field marketing agency with 5,000+ trained brand ambassadors operating in over 200 cities across the United States.",
        },
      },
      {
        "@type": "Question",
        name: "How much does field marketing cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Field marketing costs vary based on program type, market, duration, and staffing requirements. Brand ambassador rates typically range from $35 to $65 per hour, trade show staff from $40 to $70 per hour, and street team members from $30 to $55 per hour. These rates include recruitment, training, GPS-verified check-ins, real-time reporting, field management, and post-campaign analytics. Multi-day programs, volume commitments, and ongoing retainer agreements often qualify for preferred pricing. Air Fresh Marketing provides transparent, all-inclusive quotes with no hidden fees — what we quote is what you pay.",
        },
      },
      {
        "@type": "Question",
        name: "How do you ensure field marketing staff quality?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Quality assurance in field marketing requires a multi-layered approach. Air Fresh Marketing implements a rigorous process that includes: thorough vetting and background checks during recruitment, custom video-based brand training with embedded comprehension quizzes, GPS check-in verification confirming staff arrive at the correct location on time, real-time photo and video documentation during activations, dedicated field managers providing on-site oversight, live reporting dashboards allowing clients to monitor performance in real time, and post-event quality scoring. Our 96% client satisfaction rate reflects the effectiveness of this quality infrastructure.",
        },
      },
      {
        "@type": "Question",
        name: "What industries use field marketing agencies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Field marketing agencies serve virtually every consumer-facing industry. The highest-volume sectors include consumer packaged goods (product sampling and demonstrations), technology (hands-on product demos and trade show support), food and beverage (tastings, samplings, and restaurant promotions), alcohol and spirits (compliant sampling and brand education), beauty and cosmetics (makeover stations and product trials), automotive (test drives and auto show staffing), telecommunications (retail activations and direct sales), financial services (campus activations and community events), healthcare (wellness events and educational campaigns), and entertainment (street teams and premiere events). Air Fresh Marketing has executed field marketing programs for brands including Netflix, Microsoft, Formula 1, and MAC Cosmetics.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between field marketing and experiential marketing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Field marketing and experiential marketing overlap significantly but serve different strategic functions. Field marketing is the broader discipline encompassing all marketing activities executed by personnel in physical locations — including product demos, sampling, retail audits, mystery shopping, direct sales, and merchandising. Experiential marketing is a subset of field marketing specifically focused on creating immersive, memorable brand experiences such as pop-up installations, mobile tours, and interactive activations. Think of field marketing as the operational infrastructure and experiential marketing as a creative format within that infrastructure. Air Fresh Marketing delivers both field marketing programs and experiential marketing campaigns through a single, integrated platform.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly can a field marketing agency deploy a campaign?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Deployment timelines depend on program complexity, geographic scope, and staffing requirements. Simple programs in single markets can be deployed in as few as 5 to 7 business days. Multi-city product demonstration campaigns typically require 2 to 3 weeks for proper staff recruitment, training, and logistics coordination. Large-scale national programs with custom training, specialized talent requirements, or complex logistics should allow 4 to 6 weeks for optimal execution. Air Fresh Marketing maintains active talent pools in 200+ cities, which significantly accelerates deployment compared to agencies that must recruit from scratch for each campaign.",
        },
      },
      {
        "@type": "Question",
        name: "What technology does a field marketing agency use for reporting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Modern field marketing agencies use integrated technology platforms for accountability and measurement. Air Fresh Marketing's proprietary technology stack includes GPS check-in verification (staff must check in at the exact campaign location, confirming arrival time and geo-coordinates), a video training platform (custom brand training modules with quiz verification ensuring staff preparedness), a real-time reporting dashboard (live campaign metrics including impressions, engagements, samples distributed, leads captured, and custom KPIs), photo and video documentation (timestamped visual verification from every shift), and automated post-campaign analytics (comprehensive reports delivered within 48 hours of campaign completion). This technology infrastructure provides complete transparency and accountability across every field marketing program.",
        },
      },
      {
        "@type": "Question",
        name: "Can a field marketing agency handle both retail and event programs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. A full-service field marketing agency like Air Fresh Marketing manages both retail-based programs (in-store demonstrations, product sampling, merchandising audits, retail resets, mystery shopping) and event-based programs (trade shows, festivals, conferences, sporting events, concerts, corporate events). The key advantage of working with a single agency for both is unified talent management, consistent brand training, integrated reporting, and streamlined communication. Many brands run ongoing retail demonstration programs alongside seasonal event activations — our platform supports both simultaneously across any number of markets with a single point of contact and consolidated reporting.",
        },
      },
    ],
  };

  const programTypes = [
    {
      title: "Product Demonstrations",
      icon: Target,
      description:
        "Product demonstrations place trained brand ambassadors in retail environments, trade shows, and public spaces to showcase your product's features and benefits through live, hands-on interaction. Unlike passive shelf displays or digital ads, product demonstrations create direct engagement where consumers can touch, test, taste, or experience your product with guidance from a knowledgeable representative. Our demonstration teams are trained in consultative selling techniques, objection handling, and data capture protocols — turning every demo into a measurable conversion opportunity. Air Fresh Marketing executes product demonstrations in grocery, big-box retail, specialty stores, warehouse clubs, and consumer electronics environments nationwide.",
    },
    {
      title: "Sampling Campaigns",
      icon: Users,
      description:
        "Sampling campaigns are the most direct path to product trial — putting your product literally into the hands of target consumers in high-traffic environments. Strategic sampling goes far beyond handing out free products; it involves precise audience targeting, brand storytelling during the sample interaction, data capture for remarketing, and real-time volume tracking. Our field marketing teams execute sampling programs in retail stores, office parks, fitness centers, college campuses, transit hubs, festivals, and urban street locations. Every sample distributed is tracked through our reporting platform, giving you precise cost-per-trial metrics and geographic distribution data.",
    },
    {
      title: "Retail Audits",
      icon: CheckCircle,
      description:
        "Retail audit programs deploy trained field teams to systematically assess your brand's in-store presence across distribution channels. Auditors document shelf placement, pricing accuracy, promotional compliance, planogram adherence, out-of-stock conditions, competitor positioning, and point-of-sale material condition. Audit data is collected digitally with photographic verification and uploaded to reporting dashboards in real time. Air Fresh Marketing executes retail audit programs for brands needing ongoing compliance monitoring, new product launch verification, seasonal reset confirmation, or competitive intelligence across hundreds or thousands of retail locations simultaneously.",
    },
    {
      title: "Mystery Shopping",
      icon: Shield,
      description:
        "Mystery shopping programs provide objective, unbiased assessment of customer experience quality across your retail, hospitality, or service locations. Our trained mystery shoppers visit your locations anonymously, evaluating staff knowledge, service standards, brand compliance, facility conditions, and the complete customer journey against your defined criteria. Detailed reports with quantitative scores and qualitative observations are delivered through our secure portal. Mystery shopping data reveals operational strengths, identifies training gaps, validates promotional execution, and provides actionable intelligence for improving customer experience consistency across all locations.",
    },
    {
      title: "Direct Sales Teams",
      icon: TrendingUp,
      description:
        "Direct sales field marketing programs deploy trained sales representatives into environments where they can engage prospects and close transactions on behalf of your brand. Whether positioned in retail locations, door-to-door campaigns, B2B office environments, or event settings, our direct sales teams are trained in your product's value proposition, competitive differentiation, objection handling, and compliant sales practices. Air Fresh Marketing recruits sales-oriented talent, provides custom product training, implements performance tracking, and delivers detailed conversion reporting — giving you a fully managed field sales force without the overhead of permanent employment.",
    },
    {
      title: "Street Teams",
      icon: Zap,
      description:
        "Street team field marketing deploys energetic, on-brand ambassadors into high-traffic urban environments to create direct consumer engagement at scale. Street teams distribute samples, flyers, and promotional materials; drive app downloads and social follows; promote events and grand openings; generate sign-ups and leads; and build grassroots brand awareness in target neighborhoods and demographics. Our street team program features GPS-verified deployment confirming exact locations, custom branded uniforms, photo documentation from the field, and real-time engagement tracking — delivering measurable guerrilla marketing results with the accountability of a professional field marketing operation.",
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Campaign Strategy and Planning",
      description:
        "Every field marketing program begins with strategic alignment. We work with your team to define campaign objectives, identify target demographics and geographic markets, select optimal program formats, establish KPIs, and develop a comprehensive execution timeline. Our strategists analyze market data, retail traffic patterns, competitive activity, and audience behavior to recommend the field marketing approach most likely to achieve your specific goals — whether that is driving product trial, increasing retail velocity, gathering competitive intelligence, or generating qualified leads.",
    },
    {
      step: 2,
      title: "Talent Recruitment and Training",
      description:
        "We recruit field marketing professionals from our nationwide network of 5,000+ vetted brand ambassadors, selecting individuals whose skills, experience, and demographic profile align with your brand and program requirements. Every team member completes custom video-based brand training through our proprietary platform, with embedded quizzes verifying comprehension of your product knowledge, brand messaging, engagement techniques, data collection protocols, and program-specific responsibilities. Staff do not deploy until training is completed and verified.",
    },
    {
      step: 3,
      title: "Logistics and Deployment",
      description:
        "Our operations team coordinates all deployment logistics including scheduling, location assignments, material shipping, permit acquisition, uniform distribution, and communication protocols. GPS check-in technology verifies that every team member arrives at their assigned location at the scheduled time. Dedicated field managers provide on-site oversight for complex programs, while our operations center maintains real-time communication with all deployed staff. Contingency protocols ensure backup staff are available if any scheduling conflicts arise.",
    },
    {
      step: 4,
      title: "Live Execution and Monitoring",
      description:
        "During live execution, our technology platform provides real-time visibility into campaign performance. GPS verification confirms staff locations, timestamped photos document activities, and live data feeds track consumer engagements, samples distributed, leads captured, sales closed, and custom KPIs. Your dedicated account manager monitors performance against targets and can communicate adjustments to field teams in real time. This live monitoring ensures brand standards are maintained and performance targets are achieved throughout the campaign.",
    },
    {
      step: 5,
      title: "Reporting and Optimization",
      description:
        "Within 48 hours of program completion, we deliver comprehensive campaign reports including quantitative performance metrics against all established KPIs, geographic heat maps showing engagement density, staff performance scorecards, photographic documentation from every shift, qualitative consumer feedback summaries, and strategic recommendations for future optimization. For ongoing programs, we conduct regular performance reviews and implement continuous improvements based on data trends — ensuring your field marketing investment delivers increasing returns over time.",
    },
  ];

  const industries = [
    {
      name: "Consumer Packaged Goods",
      description:
        "In-store product demonstrations, sampling campaigns, retail audits, planogram compliance checks, and new product launch programs that drive trial and retail velocity in grocery, mass, and club channels.",
    },
    {
      name: "Technology and Electronics",
      description:
        "Hands-on product demonstrations, trade show staffing, retail advocacy programs, product launch events, and in-store brand educator programs that help consumers experience complex products firsthand.",
    },
    {
      name: "Food and Beverage",
      description:
        "Tasting programs, sampling campaigns, recipe demonstrations, grocery store activations, restaurant promotions, festival activations, and food truck marketing that create immediate taste-driven trial and conversion.",
    },
    {
      name: "Alcohol and Spirits",
      description:
        "Compliant sampling programs, brand education events, bar and restaurant activations, liquor store demonstrations, and tasting room experiences executed by TIPS-certified brand ambassadors who understand regulatory requirements.",
    },
    {
      name: "Beauty and Cosmetics",
      description:
        "Makeover stations, product trial activations, retail beauty counter support, skincare demonstrations, fragrance sampling, and influencer meet-and-greets that drive product adoption through personal experience.",
    },
    {
      name: "Automotive",
      description:
        "Test drive experiences, auto show staffing, dealership events, ride-and-drive activations, and lifestyle event integrations that put consumers behind the wheel and create emotional connections with vehicle brands.",
    },
    {
      name: "Telecommunications",
      description:
        "Retail activation programs, device demonstrations, plan comparison education, door-to-door sales teams, event kiosk staffing, and campus activations that drive new subscriber acquisition and plan upgrades.",
    },
    {
      name: "Healthcare and Wellness",
      description:
        "Community health screenings, wellness fair activations, fitness event sponsorships, supplement sampling, pharmacy demonstrations, and patient education programs that build trust and drive enrollment.",
    },
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
    { name: "Washington DC", slug: "washington-dc" },
    { name: "Indianapolis", slug: "indianapolis" },
    { name: "San Antonio", slug: "san-antonio" },
    { name: "Columbus", slug: "columbus" },
  ];

  const faqs = [
    {
      question: "What is a field marketing agency?",
      answer:
        "A field marketing agency is a specialized marketing firm that deploys trained personnel into physical locations to execute brand-building activities directly with consumers. This includes product demonstrations, sampling campaigns, retail audits, mystery shopping, direct sales, street team activations, and in-store merchandising. Unlike digital marketing agencies that operate exclusively online, field marketing agencies create face-to-face interactions between brands and their target audiences in retail environments, events, public spaces, and commercial locations. Air Fresh Marketing is a full-service field marketing agency with 5,000+ trained brand ambassadors operating in over 200 cities across the United States.",
    },
    {
      question: "How much does field marketing cost?",
      answer:
        "Field marketing costs vary based on program type, market, duration, and staffing requirements. Brand ambassador rates typically range from $35 to $65 per hour, trade show staff from $40 to $70 per hour, and street team members from $30 to $55 per hour. These rates include recruitment, training, GPS-verified check-ins, real-time reporting, field management, and post-campaign analytics. Multi-day programs, volume commitments, and ongoing retainer agreements often qualify for preferred pricing. Air Fresh Marketing provides transparent, all-inclusive quotes with no hidden fees — what we quote is what you pay.",
    },
    {
      question: "How do you ensure field marketing staff quality?",
      answer:
        "Quality assurance in field marketing requires a multi-layered approach. Air Fresh Marketing implements a rigorous process that includes: thorough vetting and background checks during recruitment, custom video-based brand training with embedded comprehension quizzes, GPS check-in verification confirming staff arrive at the correct location on time, real-time photo and video documentation during activations, dedicated field managers providing on-site oversight, live reporting dashboards allowing clients to monitor performance in real time, and post-event quality scoring. Our 96% client satisfaction rate reflects the effectiveness of this quality infrastructure.",
    },
    {
      question: "What industries use field marketing agencies?",
      answer:
        "Field marketing agencies serve virtually every consumer-facing industry. The highest-volume sectors include consumer packaged goods (product sampling and demonstrations), technology (hands-on product demos and trade show support), food and beverage (tastings, samplings, and restaurant promotions), alcohol and spirits (compliant sampling and brand education), beauty and cosmetics (makeover stations and product trials), automotive (test drives and auto show staffing), telecommunications (retail activations and direct sales), financial services (campus activations and community events), healthcare (wellness events and educational campaigns), and entertainment (street teams and premiere events). Air Fresh Marketing has executed field marketing programs for brands including Netflix, Microsoft, Formula 1, and MAC Cosmetics.",
    },
    {
      question:
        "What is the difference between field marketing and experiential marketing?",
      answer:
        "Field marketing and experiential marketing overlap significantly but serve different strategic functions. Field marketing is the broader discipline encompassing all marketing activities executed by personnel in physical locations — including product demos, sampling, retail audits, mystery shopping, direct sales, and merchandising. Experiential marketing is a subset of field marketing specifically focused on creating immersive, memorable brand experiences such as pop-up installations, mobile tours, and interactive activations. Think of field marketing as the operational infrastructure and experiential marketing as a creative format within that infrastructure. Air Fresh Marketing delivers both field marketing programs and experiential marketing campaigns through a single, integrated platform.",
    },
    {
      question: "How quickly can a field marketing agency deploy a campaign?",
      answer:
        "Deployment timelines depend on program complexity, geographic scope, and staffing requirements. Simple programs in single markets can be deployed in as few as 5 to 7 business days. Multi-city product demonstration campaigns typically require 2 to 3 weeks for proper staff recruitment, training, and logistics coordination. Large-scale national programs with custom training, specialized talent requirements, or complex logistics should allow 4 to 6 weeks for optimal execution. Air Fresh Marketing maintains active talent pools in 200+ cities, which significantly accelerates deployment compared to agencies that must recruit from scratch for each campaign.",
    },
    {
      question:
        "What technology does a field marketing agency use for reporting?",
      answer:
        "Modern field marketing agencies use integrated technology platforms for accountability and measurement. Air Fresh Marketing's proprietary technology stack includes GPS check-in verification (staff must check in at the exact campaign location, confirming arrival time and geo-coordinates), a video training platform (custom brand training modules with quiz verification ensuring staff preparedness), a real-time reporting dashboard (live campaign metrics including impressions, engagements, samples distributed, leads captured, and custom KPIs), photo and video documentation (timestamped visual verification from every shift), and automated post-campaign analytics (comprehensive reports delivered within 48 hours of campaign completion). This technology infrastructure provides complete transparency and accountability across every field marketing program.",
    },
    {
      question:
        "Can a field marketing agency handle both retail and event programs?",
      answer:
        "Yes. A full-service field marketing agency like Air Fresh Marketing manages both retail-based programs (in-store demonstrations, product sampling, merchandising audits, retail resets, mystery shopping) and event-based programs (trade shows, festivals, conferences, sporting events, concerts, corporate events). The key advantage of working with a single agency for both is unified talent management, consistent brand training, integrated reporting, and streamlined communication. Many brands run ongoing retail demonstration programs alongside seasonal event activations — our platform supports both simultaneously across any number of markets with a single point of contact and consolidated reporting.",
    },
  ];

  const pillarPages = [
    {
      title: "Event Staffing Agency",
      href: "/event-staffing-agency",
      description: "Professional event staff for conferences, galas, and corporate functions",
    },
    {
      title: "Hire Brand Ambassadors",
      href: "/hire-brand-ambassadors",
      description: "Find and hire trained brand ambassadors in any U.S. city",
    },
    {
      title: "Brand Ambassador Agency",
      href: "/brand-ambassador-agency",
      description: "Full-service brand ambassador recruitment, training, and management",
    },
    {
      title: "Experiential Marketing Agency",
      href: "/experiential-marketing-agency",
      description: "Immersive brand experiences that create lasting consumer connections",
    },
    {
      title: "Promotional Staffing Agency",
      href: "/promotional-staffing-agency",
      description: "Promotional models and staff for trade shows and product launches",
    },
    {
      title: "Corporate Event Staffing",
      href: "/corporate-event-staffing",
      description: "Registration, hospitality, and support staff for corporate events",
    },
    {
      title: "Event Marketing Agency",
      href: "/event-marketing-agency",
      description: "Strategic event marketing campaigns that drive measurable ROI",
    },
    {
      title: "Brand Activation Agency",
      href: "/brand-activation-agency",
      description: "Pop-ups, mobile tours, and interactive brand activations",
    },
    {
      title: "Guerrilla Marketing Agency",
      href: "/guerrilla-marketing-agency",
      description: "Unconventional street-level marketing that captures attention",
    },
    {
      title: "Product Sampling Agency",
      href: "/product-sampling-agency",
      description: "Nationwide product sampling programs with real-time reporting",
    },
    {
      title: "Mobile Marketing Tours",
      href: "/mobile-marketing-tours",
      description: "Multi-city branded vehicle tours and mobile activations",
    },
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
              <Link href="/services" className="hover:text-[#00C853]">
                Services
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-medium">
              Field Marketing Agency
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
              Full-Service Field Marketing Since 2004
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Field Marketing Agency —{" "}
              <span className="text-[#00C853]">
                Boots on the Ground in 200+ Cities
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
              Field marketing agency Air Fresh Marketing deploys trained brand
              ambassadors, product demonstrators, retail auditors, mystery
              shoppers, and street teams into 200+ cities nationwide. For over
              twenty years, we have helped 300+ brands execute field marketing
              programs that drive product trial, increase retail velocity, gather
              competitive intelligence, and generate measurable consumer
              engagement. From single-store product demonstrations to
              coast-to-coast sampling tours, our field marketing agency delivers
              end-to-end campaign execution powered by GPS-verified technology,
              video-trained talent, and real-time reporting dashboards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-quote"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#00C853] hover:bg-[#00E676] text-[#001F3F] font-bold text-lg rounded-lg transition-colors"
              >
                Get a Free Field Marketing Quote
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

      {/* What Is Field Marketing Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            What Is Field Marketing and Why Do Brands Invest in It?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Field marketing is the strategic discipline of deploying trained
              personnel into physical environments to represent a brand, engage
              consumers, drive product trial, gather market intelligence, and
              generate sales through direct human interaction. Unlike digital
              marketing channels that compete for attention on crowded screens,
              field marketing creates real-world, face-to-face connections
              between brands and their target audiences in the environments
              where purchase decisions are made — retail stores, events, office
              parks, campuses, and public gathering spaces.
            </p>
            <p>
              The effectiveness of field marketing is grounded in behavioral
              psychology. Research consistently demonstrates that consumers who
              physically interact with a product — who taste it, touch it, see
              it demonstrated, or receive a personalized recommendation from a
              knowledgeable representative — convert at dramatically higher
              rates than those exposed only to advertising. A product
              demonstration in a retail environment can increase sales velocity
              by 200% to 500% on the day of the demo, with residual lift
              persisting for weeks after the activation. Sampling campaigns
              convert 30% to 70% of recipients into purchasers within the
              following month. These conversion rates are unmatched by any
              digital advertising channel.
            </p>
            <p>
              As a dedicated field marketing agency, Air Fresh Marketing has
              spent more than two decades building the infrastructure that
              makes large-scale field marketing execution possible: a nationwide
              network of 5,000+ vetted{" "}
              <Link
                href="/hire-brand-ambassadors"
                className="text-[#00C853] hover:underline font-medium"
              >
                brand ambassadors
              </Link>
              , proprietary training and verification technology, logistics
              capabilities spanning 200+ cities, and reporting systems that
              connect field activities to business outcomes. We understand that
              successful field marketing requires more than hiring people and
              sending them to locations — it demands strategic planning,
              rigorous training, operational precision, real-time accountability,
              and measurable results.
            </p>
            <p>
              In an era where digital ad costs continue to rise while attention
              spans shrink, field marketing offers brands something
              increasingly rare and valuable: genuine human connection at the
              moment of truth. Whether your objective is driving trial for a new
              product launch, auditing retail compliance across thousands of
              locations, generating direct sales through face-to-face
              interaction, or building grassroots awareness through{" "}
              <Link
                href="/guerrilla-marketing-agency"
                className="text-[#00C853] hover:underline font-medium"
              >
                guerrilla marketing
              </Link>{" "}
              street teams, field marketing puts your brand in front of
              consumers when and where they are most receptive to engagement.
              Our{" "}
              <Link
                href="/experiential-marketing-agency"
                className="text-[#00C853] hover:underline font-medium"
              >
                experiential marketing
              </Link>{" "}
              capabilities complement our field marketing programs, creating
              immersive experiences that amplify consumer engagement beyond
              simple product interaction.
            </p>
            <p>
              The field marketing landscape has evolved significantly over the
              past decade. Where once brands had limited visibility into
              whether their field teams showed up, followed protocols, or
              generated results, modern field marketing agencies like Air Fresh
              Marketing provide complete transparency through GPS-verified
              check-ins, video-based training verification, real-time reporting
              dashboards, and photo documentation from every shift. This
              technology-enabled accountability has transformed field marketing
              from an opaque, hard-to-measure tactic into a data-driven,
              performance-optimized channel that sits alongside digital and
              traditional media as a core pillar of the marketing mix.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Field Marketing Programs */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Types of Field Marketing Programs We Execute
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive field marketing agency must deliver expertise
              across the full spectrum of in-market activation formats. Air Fresh
              Marketing executes six core program types — each backed by proven
              methodology, trained talent, technology infrastructure, and
              measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programTypes.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-[#00C853]/50 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#00C853]/10 flex items-center justify-center">
                    <program.icon className="w-5 h-5 text-[#00C853]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {program.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {program.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Need a custom field marketing program combining multiple formats?
              Explore our{" "}
              <Link
                href="/promotional-staffing-agency"
                className="text-[#00C853] hover:underline font-medium"
              >
                promotional staffing solutions
              </Link>{" "}
              or{" "}
              <Link
                href="/contact"
                className="text-[#00C853] hover:underline font-medium"
              >
                contact our strategy team
              </Link>{" "}
              to discuss a tailored approach.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Industries We Serve with Field Marketing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Field marketing delivers measurable results across every
              consumer-facing industry. Our field marketing agency has deep
              experience executing programs for these sectors — understanding
              the unique compliance requirements, audience behaviors, and success
              metrics that define each vertical.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-[#00C853]/50 transition-all"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {industry.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#001F3F] rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Trusted by Leading Brands Across Industries
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Our field marketing agency has executed programs for 300+ brands
                including Netflix, Microsoft, Formula 1, MAC Cosmetics, and
                dozens of Fortune 500 companies. From single-market pilot
                programs to nationwide multi-year campaigns, we scale to meet
                your field marketing needs.
              </p>
              <Link
                href="/case-studies"
                className="inline-flex items-center text-[#00C853] hover:text-[#00E676] font-medium"
              >
                View Our Case Studies
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 lg:py-24 bg-[#001F3F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Field Marketing Technology That Delivers Accountability
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The biggest challenge in field marketing has always been
              accountability — knowing whether your teams showed up, followed
              protocols, and generated results. Our proprietary technology
              platform eliminates that uncertainty entirely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="w-12 h-12 rounded-lg bg-[#00C853]/20 flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-[#00C853]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                GPS Check-In Verification
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Every field marketing team member must check in via our mobile
                app upon arrival at their assigned location. The system captures
                precise geo-coordinates and timestamps, instantly verifying that
                staff are present at the correct location at the scheduled time.
                Any discrepancies trigger immediate alerts to field managers.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 shrink-0" />
                  Geo-fenced location verification
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 shrink-0" />
                  Timestamped arrival and departure
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 shrink-0" />
                  Real-time absence alerts
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 shrink-0" />
                  Historical location audit trail
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="w-12 h-12 rounded-lg bg-[#00C853]/20 flex items-center justify-center mb-6">
                <Video className="w-6 h-6 text-[#00C853]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Video Training Platform
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our proprietary video training system delivers custom brand
                education to every field marketing team member before deployment.
                Interactive modules cover product knowledge, brand messaging,
                engagement techniques, and program-specific protocols. Embedded
                quizzes verify comprehension — staff cannot deploy until training
                is completed and passed.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 shrink-0" />
                  Custom branded training modules
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 shrink-0" />
                  Embedded comprehension quizzes
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 shrink-0" />
                  Completion verification tracking
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 shrink-0" />
                  Updateable content for ongoing programs
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="w-12 h-12 rounded-lg bg-[#00C853]/20 flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-[#00C853]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Real-Time Reporting Dashboard
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our live reporting dashboard gives you real-time visibility into
                every aspect of your field marketing campaign as it happens.
                Monitor consumer engagements, samples distributed, leads
                captured, sales conversions, and custom KPIs across all markets
                from a single interface. No more waiting days or weeks for
                post-event reports.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 shrink-0" />
                  Live KPI tracking across markets
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 shrink-0" />
                  Photo and video documentation feed
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 shrink-0" />
                  Exportable data and analytics
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 shrink-0" />
                  48-hour post-campaign reports
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/technology"
              className="inline-flex items-center text-[#00C853] hover:text-[#00E676] font-medium text-lg"
            >
              Explore Our Full Technology Platform
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Field Marketing Pricing — Transparent Rates, No Hidden Fees
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in transparent pricing. Our field marketing rates are
              all-inclusive — covering recruitment, training, GPS verification,
              real-time reporting, field management, and post-campaign analytics.
              What we quote is what you pay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 border-2 border-gray-200 hover:border-[#00C853] transition-colors">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Brand Ambassadors
                </h3>
                <p className="text-sm text-gray-500">
                  Product demos, sampling, retail activations
                </p>
              </div>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-[#001F3F]">
                  $35-65
                </span>
                <span className="text-gray-500">/hr</span>
              </div>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 shrink-0" />
                  Vetted and background-checked talent
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 shrink-0" />
                  Custom video brand training
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 shrink-0" />
                  GPS check-in verification
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 shrink-0" />
                  Real-time reporting dashboard
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 shrink-0" />
                  Post-event analytics report
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 shrink-0" />
                  Dedicated account manager
                </li>
              </ul>
              <div className="mt-8">
                <Link
                  href="/get-quote"
                  className="block w-full text-center px-6 py-3 bg-[#00C853] hover:bg-[#00E676] text-[#001F3F] font-bold rounded-lg transition-colors"
                >
                  Get a Quote
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border-2 border-[#00C853] relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#00C853] text-[#001F3F] text-xs font-bold rounded-full">
                MOST POPULAR
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Trade Show Staff
                </h3>
                <p className="text-sm text-gray-500">
                  Conferences, expos, industry events
                </p>
              </div>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-[#001F3F]">
                  $40-70
                </span>
                <span className="text-gray-500">/hr</span>
              </div>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 shrink-0" />
                  Industry-experienced professionals
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 shrink-0" />
                  Product knowledge training
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 shrink-0" />
                  Lead capture and qualification
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 shrink-0" />
                  Booth management expertise
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 shrink-0" />
                  Multi-day event support
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 shrink-0" />
                  Post-event lead reports
                </li>
              </ul>
              <div className="mt-8">
                <Link
                  href="/get-quote"
                  className="block w-full text-center px-6 py-3 bg-[#00C853] hover:bg-[#00E676] text-[#001F3F] font-bold rounded-lg transition-colors"
                >
                  Get a Quote
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border-2 border-gray-200 hover:border-[#00C853] transition-colors">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Street Teams
                </h3>
                <p className="text-sm text-gray-500">
                  Guerrilla marketing, flyering, grassroots
                </p>
              </div>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-[#001F3F]">
                  $30-55
                </span>
                <span className="text-gray-500">/hr</span>
              </div>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 shrink-0" />
                  Energetic, on-brand ambassadors
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 shrink-0" />
                  GPS route tracking
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 shrink-0" />
                  Photo documentation per shift
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 shrink-0" />
                  Distribution volume tracking
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 shrink-0" />
                  Branded uniform coordination
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 shrink-0" />
                  Engagement and impression data
                </li>
              </ul>
              <div className="mt-8">
                <Link
                  href="/get-quote"
                  className="block w-full text-center px-6 py-3 bg-[#00C853] hover:bg-[#00E676] text-[#001F3F] font-bold rounded-lg transition-colors"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 max-w-2xl mx-auto">
              All rates are fully loaded and include recruitment, training, GPS
              verification, reporting, field management, and insurance. Volume
              discounts available for multi-day and ongoing programs.{" "}
              <Link
                href="/pricing"
                className="text-[#00C853] hover:underline font-medium"
              >
                View full pricing details
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Process / Methodology */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Field Marketing Process and Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every successful field marketing campaign follows a proven
              methodology. Our five-phase process ensures strategic alignment,
              operational precision, and measurable outcomes from planning
              through post-campaign optimization.
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 flex flex-col md:flex-row gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-[#001F3F] flex items-center justify-center">
                    <span className="text-[#00C853] font-bold text-xl">
                      {step.step}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Air Fresh Marketing */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Brands Choose Air Fresh Marketing as Their Field Marketing Agency
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Not all field marketing agencies are created equal. Here is what
              differentiates Air Fresh Marketing from competitors and why 300+
              brands trust us to represent them in the field.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-full bg-[#00C853]/10 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-7 h-7 text-[#00C853]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Nationwide Coverage
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Active talent pools in 200+ cities mean we can deploy field
                marketing teams anywhere in the United States without recruiting
                from scratch. Single point of contact for multi-market campaigns.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-full bg-[#00C853]/10 flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-[#00C853]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                20+ Years of Experience
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Founded in 2004, Air Fresh Marketing brings two decades of field
                marketing expertise across every industry, program type, and
                market condition. We have seen what works and what does not.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-full bg-[#00C853]/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-[#00C853]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Technology-Driven Accountability
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                GPS check-ins, video training verification, real-time dashboards,
                and photo documentation deliver complete transparency. You always
                know exactly what is happening in the field.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-full bg-[#00C853]/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-[#00C853]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                5,000+ Vetted Ambassadors
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our nationwide talent network of pre-vetted, experienced field
                marketing professionals means faster deployment, higher quality,
                and the ability to match staff to your specific brand requirements.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-full bg-[#00C853]/10 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-7 h-7 text-[#00C853]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Transparent Pricing
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                All-inclusive rates with no hidden fees, surprise charges, or
                opaque markups. Our transparent pricing model means you know
                exactly what you are paying for and can budget with confidence.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-full bg-[#00C853]/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-[#00C853]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Rapid Deployment
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Pre-established talent pools and streamlined processes enable
                campaign deployment in as few as 5-7 business days for standard
                programs — significantly faster than agencies building from scratch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* City Coverage Section */}
      <section className="py-20 lg:py-24 bg-[#001F3F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Field Marketing Teams in 200+ Cities Nationwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our field marketing agency maintains active, pre-vetted talent
              pools in major metropolitan areas across the United States. This
              means faster deployment, local market expertise, and the ability
              to execute multi-city programs with a single point of contact.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {cities.map((city, index) => (
              <Link
                key={index}
                href={`/cities/${city.slug}`}
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00C853]/50 rounded-lg px-4 py-3 text-center text-white text-sm font-medium transition-all"
              >
                <MapPin className="w-4 h-4 text-[#00C853] mx-auto mb-1" />
                {city.name}
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-6">
              Do not see your city listed? We cover 200+ markets nationwide.
              Contact us to confirm availability in your target area.
            </p>
            <Link
              href="/cities"
              className="inline-flex items-center text-[#00C853] hover:text-[#00E676] font-medium"
            >
              View All Cities
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Field Marketing vs Other Channels */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Field Marketing vs. Digital Marketing: Why Both Matter
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              The most effective marketing strategies integrate both digital and
              field marketing channels. While digital marketing excels at scale,
              targeting precision, and cost-per-impression efficiency, field
              marketing delivers something digital cannot replicate: physical
              product interaction, human connection, and sensory engagement at
              the moment of truth.
            </p>
            <p>
              Consider the customer journey for a new consumer packaged goods
              product. Digital advertising creates initial awareness and drives
              consideration. But it is the in-store product demonstration — where
              a trained{" "}
              <Link
                href="/brand-ambassador-agency"
                className="text-[#00C853] hover:underline font-medium"
              >
                brand ambassador
              </Link>{" "}
              offers a sample, explains the product&apos;s unique benefits, and
              answers questions in real time — that converts a curious shopper
              into a first-time buyer. Studies show that product demonstrations
              increase same-day sales by 200% to 500%, with 60% to 80% of
              consumers who try a product through a demo purchasing it within the
              following 30 days.
            </p>
            <p>
              Field marketing also generates first-party data that enriches
              digital campaigns. Consumer interactions captured during field
              marketing activations — email addresses, product preferences,
              purchase intent signals — feed directly into CRM systems and
              retargeting audiences. This creates a virtuous cycle where field
              marketing generates high-quality leads that digital channels
              nurture to conversion, while digital campaigns drive awareness that
              makes consumers more receptive to field marketing interactions.
            </p>
            <p>
              The brands achieving the highest marketing ROI today are those
              that view field marketing and digital marketing not as competing
              channels but as complementary forces within an integrated strategy.
              Air Fresh Marketing partners with brands to design field marketing
              programs that amplify digital campaigns, generate content for
              social media, capture first-party data, and create the physical
              brand experiences that no digital channel can deliver. Our{" "}
              <Link
                href="/event-marketing-agency"
                className="text-[#00C853] hover:underline font-medium"
              >
                event marketing
              </Link>{" "}
              programs and{" "}
              <Link
                href="/event-staffing-agency"
                className="text-[#00C853] hover:underline font-medium"
              >
                event staffing
              </Link>{" "}
              capabilities further extend the impact of field marketing into
              conferences, trade shows, and branded events.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Field Marketing Agency — Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get answers to the most common questions brands ask when
              evaluating field marketing agencies and planning their first
              field marketing campaign.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Link Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Explore Our Full Range of Marketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Field marketing is one component of our comprehensive suite of
              staffing and experiential marketing services. Explore our
              specialized capabilities across every type of in-person marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillarPages.map((page, index) => (
              <Link
                key={index}
                href={page.href}
                className="group bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-[#00C853] hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#00C853] transition-colors mb-2">
                  {page.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {page.description}
                </p>
                <span className="inline-flex items-center text-[#00C853] text-sm font-medium">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-r from-[#001F3F] to-[#003366]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Launch Your Field Marketing Campaign?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you need a single-market product demonstration or a
            coast-to-coast field marketing program, Air Fresh Marketing has the
            talent, technology, and twenty years of experience to deliver
            measurable results. Get a free campaign proposal tailored to your
            objectives, markets, and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-quote"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#00C853] hover:bg-[#00E676] text-[#001F3F] font-bold text-lg rounded-lg transition-colors"
            >
              Get a Free Proposal
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="tel:303-720-6060"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 font-bold text-lg rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              (303) 720-6060
            </a>
          </div>
          <p className="mt-6 text-gray-400 text-sm">
            No commitment required. Most proposals delivered within 24 hours.
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
