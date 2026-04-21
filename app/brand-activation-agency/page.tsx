import Link from "next/link";

export default function BrandActivationAgencyPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Brand Activation Agency",
    description:
      "Full-service brand activation agency delivering immersive pop-up experiences, in-store activations, mobile marketing tours, product launch events, sampling campaigns, interactive installations, street team activations, and VIP experiences across 50+ U.S. cities since 2004.",
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
      "Brand Activations",
      "Pop-Up Experiences",
      "In-Store Activations",
      "Mobile Marketing Tours",
      "Product Launch Events",
      "Sampling Campaigns",
      "Interactive Installations",
      "Street Team Activations",
      "VIP Experiences",
    ],
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "5000",
      highPrice: "500000",
      offerCount: "9",
      availability: "https://schema.org/InStock",
    },
    url: "https://www.airfreshmarketing.com/brand-activation-agency",
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
        name: "Brand Activation Agency",
        item: "https://www.airfreshmarketing.com/brand-activation-agency",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does a brand activation agency do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A brand activation agency designs, produces, and executes live experiences that create direct, memorable connections between consumers and brands. This includes pop-up experiences, in-store activations, mobile marketing tours, product launch events, sampling campaigns, interactive installations, street team activations, and VIP experiences. A full-service brand activation agency like Air Fresh Marketing handles everything from creative strategy and experience design through staffing, logistics, execution, and post-event analytics — delivering measurable results across every consumer touchpoint.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a brand activation campaign cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Brand activation campaign costs vary based on scope, duration, number of markets, and production complexity. A single-city pop-up activation typically ranges from $15,000 to $75,000. Multi-city mobile tours can range from $100,000 to $500,000 or more depending on stops and production value. In-store sampling campaigns may cost $5,000 to $25,000 per market. Air Fresh Marketing provides transparent, all-inclusive pricing that covers strategy, creative, staffing, logistics, technology, and reporting. We work with budgets from $10,000 single-day activations to multi-million-dollar national campaigns.",
        },
      },
      {
        "@type": "Question",
        name: "How do you measure brand activation ROI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Brand activation ROI is measured through quantitative and qualitative metrics including consumer impressions, direct engagements, samples distributed, leads captured, social media mentions, earned media value, email sign-ups, app downloads, and direct sales conversions. Air Fresh Marketing uses GPS-verified check-in technology, real-time reporting dashboards, and post-event analytics to deliver precise measurement for every campaign. Our clients typically see 3x to 10x return on their brand activation investment when measured against customer acquisition cost and lifetime value.",
        },
      },
      {
        "@type": "Question",
        name: "How far in advance should I plan a brand activation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For optimal results, we recommend beginning the planning process 8 to 12 weeks before your activation date for standard campaigns, and 4 to 6 months for large-scale multi-city tours or complex productions. This timeline allows for strategy development, creative concepting, permit acquisition, staff recruitment and training, and logistical coordination. However, Air Fresh Marketing maintains active talent pools in 50+ cities and established vendor relationships that allow us to execute certain activation types in as little as 2 to 3 weeks when needed.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between a brand activation and experiential marketing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Brand activation is a specific discipline within the broader experiential marketing category. While experiential marketing encompasses any marketing that creates immersive brand-consumer interactions, brand activation specifically focuses on driving a consumer action — whether that is product trial, purchase, sign-up, or brand advocacy. Brand activations are designed with clear conversion objectives and measurable outcomes. Air Fresh Marketing specializes in brand activations that deliver both memorable experiences and quantifiable business results, bridging the gap between awareness and action.",
        },
      },
      {
        "@type": "Question",
        name: "Can a brand activation agency handle nationwide campaigns?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. A national brand activation agency like Air Fresh Marketing is specifically built to execute campaigns across multiple cities simultaneously. We maintain pre-vetted talent pools, established vendor networks, and logistical infrastructure in over 50 U.S. cities. This means you get local market expertise combined with centralized strategy, consistent brand standards, unified reporting, and a single point of accountability. Our technology platform enables real-time oversight of all markets from a single dashboard, eliminating the complexity of coordinating with multiple local agencies.",
        },
      },
      {
        "@type": "Question",
        name: "What industries benefit most from brand activations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Virtually every consumer-facing industry benefits from brand activations, but the highest ROI is typically seen in consumer packaged goods (product sampling drives trial and conversion), technology (hands-on demos overcome purchase hesitation), automotive (test drives and immersive experiences), food and beverage (tastings create immediate purchase intent), beauty and fashion (try-before-you-buy experiences), entertainment and media (immersive activations build anticipation), and sports (fan engagement deepens loyalty). Air Fresh Marketing has executed successful brand activations across all of these industries and more, including healthcare, financial services, and real estate.",
        },
      },
    ],
  };

  const activationTypes = [
    {
      title: "Pop-Up Experiences",
      description:
        "Pop-up experiences are temporary branded environments that create urgency, exclusivity, and shareability. From pop-up shops and immersive lounges to interactive art installations and product showcases, pop-up activations generate buzz, drive product trial, and create social-first moments that extend your brand reach far beyond the physical footprint. Air Fresh Marketing designs, builds, and staffs pop-up experiences that convert curious foot traffic into passionate brand loyalists — with every detail engineered for maximum engagement and data capture.",
    },
    {
      title: "In-Store Activations",
      description:
        "In-store brand activations influence purchase decisions at the most critical moment — the point of sale. Whether it is an end-cap demonstration, a sampling station, a product education experience, or a full store takeover, in-store activations bridge the gap between brand marketing and retail sales. Our trained brand ambassadors bring product expertise, consumer engagement skills, and real-time reporting to every retail activation, ensuring your brand captures attention and converts shoppers in competitive retail environments.",
    },
    {
      title: "Mobile Marketing Tours",
      description:
        "Mobile marketing tours bring your brand activation directly to consumers across multiple cities and markets. From custom-wrapped vehicles and branded trailers to fully built-out mobile showrooms and experiential trucks, our mobile tours deliver consistent brand experiences whether you are activating in 5 cities or 50. Air Fresh Marketing handles all route planning, permitting, vehicle logistics, staffing, and real-time reporting for mobile tours that maximize consumer impressions and geographic coverage.",
    },
    {
      title: "Product Launch Events",
      description:
        "Product launch activations create the excitement, media attention, and consumer anticipation that new products need to break through in crowded markets. We design product launch experiences that combine theatrical reveals, hands-on product interaction, influencer engagement, media opportunities, and social amplification into cohesive launch moments. From intimate VIP unveilings to large-scale public launch festivals, Air Fresh Marketing ensures your product enters the market with maximum impact and measurable buzz.",
    },
    {
      title: "Sampling Campaigns",
      description:
        "Sampling campaigns are the most direct form of brand activation — putting your product directly into the hands and mouths of target consumers. Strategic sampling drives trial, creates immediate conversion opportunity, and generates authentic word-of-mouth. Our trained sampling teams operate in high-traffic urban locations, retail environments, events, gyms, college campuses, and office parks. Every sample distributed is tracked, every consumer interaction is documented, and every campaign delivers measurable trial and conversion data.",
    },
    {
      title: "Interactive Installations",
      description:
        "Interactive installations transform passive brand exposure into active brand participation. Using technology like augmented reality, motion sensors, touch screens, projection mapping, and gamification, interactive installations invite consumers to co-create their brand experience. These activations generate extraordinary dwell time, deep engagement, and highly shareable content. Air Fresh Marketing partners with leading technology vendors to design and deploy interactive installations that feel innovative and authentic to your brand story.",
    },
    {
      title: "Street Team Activations",
      description:
        "Street team activations deploy branded ambassador teams into high-traffic environments to create direct consumer connections at scale. Whether distributing samples, driving app downloads, promoting events, or generating sign-ups, street teams offer flexible, high-volume consumer engagement in markets where your target audience lives, works, and plays. Our street team program features GPS-verified deployment, custom brand training, real-time reporting, and field management to ensure consistent quality across every interaction and market.",
    },
    {
      title: "VIP Experiences",
      description:
        "VIP brand activations create exclusive, elevated experiences for your most valuable customers, key influencers, and media partners. From private tasting events and behind-the-scenes access to luxury hospitality suites and curated brand journeys, VIP experiences deepen relationships with the audiences that drive disproportionate brand value. Air Fresh Marketing staffs VIP activations with experienced hospitality professionals who understand premium service standards and brand representation at the highest level.",
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Discovery and Strategy",
      description:
        "Every brand activation begins with deep discovery. We immerse ourselves in your brand objectives, target audience personas, competitive landscape, and success metrics. Our strategists develop a tailored activation concept that aligns with your broader marketing strategy, identifies the optimal activation format, and defines clear KPIs. We present a comprehensive campaign brief with creative direction, market recommendations, staffing plans, technology integration, and detailed budgeting.",
    },
    {
      step: 2,
      title: "Creative Development",
      description:
        "Our creative team designs the activation experience from the consumer perspective — mapping the complete journey from initial attraction through engagement, conversion, and amplification. We develop visual identity, environmental design, interactive elements, messaging hierarchy, and content capture strategy. Every creative decision is made through the dual lens of brand authenticity and consumer engagement optimization.",
    },
    {
      step: 3,
      title: "Talent Recruitment and Training",
      description:
        "We recruit brand-aligned ambassadors from our nationwide talent network, selecting individuals whose energy, communication style, and demographic profile match your brand. Each team member completes custom video-based brand training with embedded quizzes and verification. Training covers product knowledge, brand voice, consumer engagement techniques, data capture protocols, and activation-specific responsibilities. Your brand ambassadors arrive prepared to authentically represent your brand.",
    },
    {
      step: 4,
      title: "Production and Logistics",
      description:
        "Our operations team manages every physical element of your activation — venue sourcing, permitting, fabrication, shipping, vendor coordination, insurance, and day-of logistics. We build detailed production timelines, contingency plans, and communication protocols. Whether your activation requires a simple sampling table or a 5,000-square-foot custom build, our logistics expertise ensures every detail is executed flawlessly.",
    },
    {
      step: 5,
      title: "Live Execution",
      description:
        "On activation day, our field management team oversees every aspect of execution. GPS-verified staff check-ins confirm team deployment at correct locations and times. Real-time dashboards give you live visibility into consumer engagement, impressions, samples distributed, leads captured, and custom KPIs. Dedicated field managers ensure brand standards are maintained, consumer interactions are optimized, and any on-site challenges are resolved immediately.",
    },
    {
      step: 6,
      title: "Reporting and Optimization",
      description:
        "Within 48 hours of activation completion, we deliver comprehensive post-event reports including quantitative performance data against all KPIs, qualitative consumer insights, photo and video documentation, social media metrics, and actionable recommendations for future campaign optimization. Our reporting connects activation metrics to business outcomes, giving you the data needed to demonstrate ROI and continuously improve your brand activation strategy.",
    },
  ];

  const industries = [
    {
      name: "Consumer Packaged Goods",
      description:
        "Product sampling, in-store demonstrations, retail activations, and trial-driving campaigns that convert shoppers into loyal customers at the point of purchase.",
    },
    {
      name: "Technology and Software",
      description:
        "Hands-on product demos, trade show experiences, launch events, and interactive installations that let consumers experience innovation firsthand and overcome purchase hesitation.",
    },
    {
      name: "Food and Beverage",
      description:
        "Tasting events, sampling campaigns, restaurant pop-ups, festival activations, and grocery store demonstrations that create immediate trial and purchase intent.",
    },
    {
      name: "Automotive",
      description:
        "Test drive experiences, auto show activations, lifestyle events, and brand immersion journeys that put consumers behind the wheel and build emotional connections with the brand.",
    },
    {
      name: "Beauty and Fashion",
      description:
        "Try-before-you-buy pop-ups, makeover stations, runway events, influencer experiences, and retail activations that drive product trial and social amplification.",
    },
    {
      name: "Sports and Entertainment",
      description:
        "Fan zones, concert activations, game-day experiences, premiere events, and sponsored entertainment moments that deepen audience loyalty and drive engagement.",
    },
    {
      name: "Healthcare and Wellness",
      description:
        "Community health events, fitness activations, wellness pop-ups, and educational campaigns that build trust and drive enrollment or product adoption in health-conscious audiences.",
    },
    {
      name: "Financial Services",
      description:
        "Campus activations, community events, financial literacy campaigns, and brand awareness experiences that humanize financial brands and drive new account acquisition.",
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
  ];

  const faqs = [
    {
      question: "What does a brand activation agency do?",
      answer:
        "A brand activation agency designs, produces, and executes live experiences that create direct, memorable connections between consumers and brands. This includes pop-up experiences, in-store activations, mobile marketing tours, product launch events, sampling campaigns, interactive installations, street team activations, and VIP experiences. A full-service brand activation agency like Air Fresh Marketing handles everything from creative strategy and experience design through staffing, logistics, execution, and post-event analytics — delivering measurable results across every consumer touchpoint.",
    },
    {
      question: "How much does a brand activation campaign cost?",
      answer:
        "Brand activation campaign costs vary based on scope, duration, number of markets, and production complexity. A single-city pop-up activation typically ranges from $15,000 to $75,000. Multi-city mobile tours can range from $100,000 to $500,000 or more depending on stops and production value. In-store sampling campaigns may cost $5,000 to $25,000 per market. Air Fresh Marketing provides transparent, all-inclusive pricing that covers strategy, creative, staffing, logistics, technology, and reporting. We work with budgets from $10,000 single-day activations to multi-million-dollar national campaigns.",
    },
    {
      question: "How do you measure brand activation ROI?",
      answer:
        "Brand activation ROI is measured through quantitative and qualitative metrics including consumer impressions, direct engagements, samples distributed, leads captured, social media mentions, earned media value, email sign-ups, app downloads, and direct sales conversions. Air Fresh Marketing uses GPS-verified check-in technology, real-time reporting dashboards, and post-event analytics to deliver precise measurement for every campaign. Our clients typically see 3x to 10x return on their brand activation investment when measured against customer acquisition cost and lifetime value.",
    },
    {
      question: "How far in advance should I plan a brand activation?",
      answer:
        "For optimal results, we recommend beginning the planning process 8 to 12 weeks before your activation date for standard campaigns, and 4 to 6 months for large-scale multi-city tours or complex productions. This timeline allows for strategy development, creative concepting, permit acquisition, staff recruitment and training, and logistical coordination. However, Air Fresh Marketing maintains active talent pools in 50+ cities and established vendor relationships that allow us to execute certain activation types in as little as 2 to 3 weeks when needed.",
    },
    {
      question:
        "What is the difference between a brand activation and experiential marketing?",
      answer:
        "Brand activation is a specific discipline within the broader experiential marketing category. While experiential marketing encompasses any marketing that creates immersive brand-consumer interactions, brand activation specifically focuses on driving a consumer action — whether that is product trial, purchase, sign-up, or brand advocacy. Brand activations are designed with clear conversion objectives and measurable outcomes. Air Fresh Marketing specializes in brand activations that deliver both memorable experiences and quantifiable business results, bridging the gap between awareness and action.",
    },
    {
      question: "Can a brand activation agency handle nationwide campaigns?",
      answer:
        "Yes. A national brand activation agency like Air Fresh Marketing is specifically built to execute campaigns across multiple cities simultaneously. We maintain pre-vetted talent pools, established vendor networks, and logistical infrastructure in over 50 U.S. cities. This means you get local market expertise combined with centralized strategy, consistent brand standards, unified reporting, and a single point of accountability. Our technology platform enables real-time oversight of all markets from a single dashboard, eliminating the complexity of coordinating with multiple local agencies.",
    },
    {
      question: "What industries benefit most from brand activations?",
      answer:
        "Virtually every consumer-facing industry benefits from brand activations, but the highest ROI is typically seen in consumer packaged goods (product sampling drives trial and conversion), technology (hands-on demos overcome purchase hesitation), automotive (test drives and immersive experiences), food and beverage (tastings create immediate purchase intent), beauty and fashion (try-before-you-buy experiences), entertainment and media (immersive activations build anticipation), and sports (fan engagement deepens loyalty). Air Fresh Marketing has executed successful brand activations across all of these industries and more, including healthcare, financial services, and real estate.",
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
              <Link
                href="/services/experiential-marketing"
                className="hover:text-[#00C853]"
              >
                Services
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-medium">
              Brand Activation Agency
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
              Full-Service Brand Activation Since 2004
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Brand Activation Agency —{" "}
              <span className="text-[#00C853]">
                Immersive Experiences That Drive Action
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
              Brand activation agency Air Fresh Marketing creates immersive
              pop-up experiences, in-store activations, mobile marketing tours,
              and experiential campaigns that connect brands directly with
              consumers. For more than twenty years, we have helped 300+ brands
              design and execute brand activations across 50+ U.S. cities —
              delivering measurable engagement, product trial, and lasting brand
              loyalty. Whether you need a single-market pop-up or a
              coast-to-coast mobile tour, our brand activation agency delivers
              end-to-end campaign execution powered by proprietary technology,
              trained talent, and data-driven strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-quote"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#00C853] hover:bg-[#00E676] text-[#001F3F] font-bold text-lg rounded-lg transition-colors"
              >
                Get a Free Activation Proposal
              </Link>
              <a
                href="tel:303-720-6060"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 font-bold text-lg rounded-lg transition-colors"
              >
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
                20+
              </div>
              <div className="text-gray-300 text-sm font-medium mt-1">
                Years of Experience
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#00C853]">
                50+
              </div>
              <div className="text-gray-300 text-sm font-medium mt-1">
                Cities Nationwide
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#00C853]">
                500+
              </div>
              <div className="text-gray-300 text-sm font-medium mt-1">
                Activations Delivered
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#00C853]">
                4.9/5
              </div>
              <div className="text-gray-300 text-sm font-medium mt-1">
                Client Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Brand Activation Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            What Is Brand Activation and Why Does It Matter?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Brand activation is the strategic process of driving consumer
              action through immersive, interactive experiences that bring a
              brand to life in physical environments. Unlike traditional
              advertising that talks at consumers, brand activation invites
              consumers to participate — to touch, taste, feel, and experience a
              brand in ways that create lasting emotional connections and
              measurable business outcomes. A brand activation transforms passive
              brand awareness into active brand engagement, converting curious
              onlookers into loyal customers and vocal advocates.
            </p>
            <p>
              The science behind brand activation is rooted in experiential
              psychology. Research consistently shows that consumers who
              physically interact with a product or brand are significantly more
              likely to purchase, recommend, and remain loyal compared to those
              exposed only to traditional advertising. A well-executed brand
              activation creates multi-sensory memory encoding — engaging sight,
              sound, touch, taste, and emotion simultaneously — which produces
              stronger recall and deeper brand associations than any two-
              dimensional media exposure.
            </p>
            <p>
              As a dedicated{" "}
              <Link
                href="/services/experiential-marketing"
                className="text-[#00C853] hover:underline font-medium"
              >
                experiential marketing
              </Link>{" "}
              and brand activation agency, Air Fresh Marketing has spent two
              decades refining the art and science of brand activation. We
              understand that successful activations require more than creative
              ideas — they demand operational precision, trained talent, strategic
              location selection, and rigorous measurement. Every brand
              activation we produce is designed with clear objectives: drive
              product trial, capture consumer data, generate social content,
              build brand affinity, or convert consumers at the point of
              interaction. Our{" "}
              <Link
                href="/services/brand-ambassadors"
                className="text-[#00C853] hover:underline font-medium"
              >
                brand ambassadors
              </Link>{" "}
              are trained to deliver authentic, knowledgeable interactions that
              represent your brand at the highest level.
            </p>
            <p>
              In today&apos;s marketing landscape, where consumers are
              increasingly resistant to interruptive advertising and digital ad
              fatigue is at an all-time high, brand activation offers something
              irreplaceable: genuine human connection. Consumers crave
              authenticity, and brand activations deliver it by creating
              voluntary, opt-in experiences where the consumer chooses to engage
              with your brand. This permission-based engagement creates
              fundamentally different — and stronger — brand relationships than
              any forced exposure can achieve. Whether through{" "}
              <Link
                href="/services/sampling"
                className="text-[#00C853] hover:underline font-medium"
              >
                product sampling
              </Link>
              ,{" "}
              <Link
                href="/services/street-teams"
                className="text-[#00C853] hover:underline font-medium"
              >
                street team activations
              </Link>
              , or immersive pop-up installations, brand activation puts your
              brand where it belongs: in the hands and hearts of your target
              consumers.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Brand Activations */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Types of Brand Activations We Create
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Brand activation agency capabilities must span the full spectrum of
              live brand experiences. Air Fresh Marketing delivers expertise
              across eight core activation formats — each backed by proven
              process, trained talent, and measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activationTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-[#00C853]/50 hover:shadow-lg transition-all"
              >
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
              Need a custom activation concept or combination of formats?
              Explore our{" "}
              <Link
                href="/services/experiential-marketing"
                className="text-[#00C853] hover:underline font-medium"
              >
                experiential marketing services
              </Link>{" "}
              or{" "}
              <Link
                href="/contact"
                className="text-[#00C853] hover:underline font-medium"
              >
                contact our strategy team
              </Link>{" "}
              to discuss your brand objectives. We also offer specialized{" "}
              <Link
                href="/services/food-beverage-sampling"
                className="text-[#00C853] hover:underline font-medium"
              >
                food and beverage sampling
              </Link>{" "}
              programs for CPG brands.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Activation Process */}
      <section className="py-20 lg:py-24 bg-[#001F3F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Brand Activation Process — From Strategy to Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Brand activation agency engagements at Air Fresh Marketing follow a
              proven six-step process refined over 500+ campaigns. Each phase is
              designed to maximize creative impact while ensuring flawless
              operational execution and complete ROI accountability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((item) => (
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
              href="/get-quote"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#00C853] hover:bg-[#00E676] text-[#001F3F] font-bold text-lg rounded-lg transition-colors"
            >
              Start Your Campaign Brief
            </Link>
          </div>
        </div>
      </section>

      {/* Industries We Activate Brands For */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Industries We Activate Brands For
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Brand activation agency services require deep understanding of each
              industry&apos;s unique consumer dynamics, regulatory requirements,
              and competitive landscape. Air Fresh Marketing brings specialized
              experience across all major verticals with tailored activation
              strategies for each.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-[#00C853]/50 hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {industry.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              No matter your industry, our{" "}
              <Link
                href="/experiential-marketing-agency"
                className="text-[#00C853] hover:underline font-medium"
              >
                experiential marketing agency
              </Link>{" "}
              team creates brand activations tailored to your audience and
              objectives. See our{" "}
              <Link
                href="/case-studies"
                className="text-[#00C853] hover:underline font-medium"
              >
                case studies
              </Link>{" "}
              for industry-specific examples.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Activation Case Study Highlights */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Brand Activation Case Study Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Brand activation agency credibility is built on results. Here are
              three campaign highlights from our portfolio of 500+ activations
              delivered for world-class brands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* F1 Case Study */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="inline-block px-3 py-1 bg-[#001F3F] text-[#00C853] text-sm font-bold rounded mb-4">
                Formula 1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Grand Prix Fan Activation
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Air Fresh Marketing deployed 200+ trained brand ambassadors
                across multiple Formula 1 Grand Prix race weekends to execute
                large-scale fan activation and hospitality experiences. Our teams
                managed VIP engagement zones, interactive brand installations,
                product sampling stations, and premium hospitality suites —
                creating unforgettable race-day experiences that deepened fan
                loyalty and drove sponsor brand awareness to millions of
                attendees.
              </p>
              <div className="flex items-center gap-4 text-sm">
                <span className="font-bold text-[#00C853]">
                  200+ Staff Deployed
                </span>
                <span className="text-gray-400">|</span>
                <span className="text-gray-600">Multi-Market</span>
              </div>
            </div>

            {/* Netflix Case Study */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="inline-block px-3 py-1 bg-[#001F3F] text-[#00C853] text-sm font-bold rounded mb-4">
                Netflix
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Series Premiere Activations
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Multi-city brand activations for Netflix series premieres and
                franchise launches, combining immersive themed environments,
                street team deployments, and social-first experiential design
                across 15+ markets simultaneously. Our activations generated
                massive earned media coverage, viral social content, and
                measurable viewership spikes — proving the power of physical
                brand activation to drive digital engagement and streaming
                subscriptions.
              </p>
              <div className="flex items-center gap-4 text-sm">
                <span className="font-bold text-[#00C853]">
                  5M+ Impressions
                </span>
                <span className="text-gray-400">|</span>
                <span className="text-gray-600">15+ Cities</span>
              </div>
            </div>

            {/* Microsoft Case Study */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="inline-block px-3 py-1 bg-[#001F3F] text-[#00C853] text-sm font-bold rounded mb-4">
                Microsoft
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Product Launch and Trade Shows
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Trade show experiences and product launch activations at major
                technology conferences including CES, Build, and enterprise
                events. Our brand activation teams delivered interactive product
                demonstrations, guided experience journeys, and qualified lead
                capture across sprawling show floors — helping Microsoft cut
                through the noise and create meaningful one-on-one connections
                with decision-makers and consumers alike.
              </p>
              <div className="flex items-center gap-4 text-sm">
                <span className="font-bold text-[#00C853]">
                  10,000+ Leads Captured
                </span>
                <span className="text-gray-400">|</span>
                <span className="text-gray-600">National</span>
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
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Cities We Cover — Brand Activation Nationwide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Brand activation agency services from Air Fresh Marketing are
              available in every major metropolitan area across the United
              States. Local talent, local knowledge, and local vendor
              relationships — backed by the consistency of a national operation.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/cities/${city.slug}`}
                className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md hover:border-[#00C853]/50 border border-gray-200 transition-all"
              >
                <span className="font-semibold text-gray-900 text-sm">
                  {city.name}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4">
              Do not see your city? We expand into new markets regularly and can
              deploy activation teams to additional locations. Our{" "}
              <Link
                href="/event-staffing-agency"
                className="text-[#00C853] hover:underline font-medium"
              >
                event staffing agency
              </Link>{" "}
              infrastructure and{" "}
              <Link
                href="/brand-ambassador-agency"
                className="text-[#00C853] hover:underline font-medium"
              >
                brand ambassador agency
              </Link>{" "}
              network make it possible to activate anywhere in the country.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose AirFresh */}
      <section className="py-20 lg:py-24 bg-gradient-to-r from-[#001F3F] to-[#003366] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Air Fresh as Your Brand Activation Agency
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choosing the right brand activation agency is the most important
              decision you make when investing in live experiences. Here is what
              sets Air Fresh Marketing apart from every other agency in the
              market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-xl font-bold text-[#00C853] mb-3">
                20+ Years of Proven Results
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Founded in 2004, Air Fresh Marketing has navigated every
                challenge in live brand activation — from permit issues and
                weather disruptions to last-minute venue changes and staffing
                emergencies. Our two decades of experience mean fewer surprises
                and better outcomes for your brand. We have delivered 500+
                activations for 300+ brands across every major activation format
                and industry vertical.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-xl font-bold text-[#00C853] mb-3">
                Proprietary Technology Platform
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Our technology sets us apart from traditional brand activation
                agencies. GPS-verified staff check-ins confirm deployment in real
                time. Video-based brand training ensures consistent product
                knowledge. Real-time reporting dashboards give you live campaign
                visibility. Post-event analytics connect activation metrics to
                business outcomes. No other brand activation agency offers this
                level of accountability and transparency.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-xl font-bold text-[#00C853] mb-3">
                Nationwide Talent Network
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Our pre-vetted talent pools in 50+ cities mean you get
                brand-aligned ambassadors wherever you activate. Every team
                member completes custom training specific to your brand and
                campaign. Our{" "}
                <Link
                  href="/promotional-staffing-agency"
                  className="text-[#00C853] hover:underline"
                >
                  promotional staffing
                </Link>{" "}
                infrastructure ensures consistent quality whether you are
                activating in one market or fifty simultaneously.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-xl font-bold text-[#00C853] mb-3">
                End-to-End Campaign Execution
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Unlike agencies that outsource key functions, Air Fresh Marketing
                handles every aspect of brand activation in-house — strategy,
                creative, talent recruitment, training, production, logistics,
                live execution, and analytics. One agency partner, one point of
                accountability, one consistent standard of excellence across
                every touchpoint and market.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-xl font-bold text-[#00C853] mb-3">
                Data-Driven ROI Measurement
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Every brand activation we produce is engineered for measurement
                from day one. We define KPIs during strategy, build data capture
                into the consumer journey, and deliver comprehensive analytics
                that prove ROI. Our clients use our reporting to justify
                experiential budgets, optimize future campaigns, and demonstrate
                clear return to internal stakeholders.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-xl font-bold text-[#00C853] mb-3">
                Trusted by World-Class Brands
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Netflix, Formula 1, Microsoft, Google, MrBeast, MAC Cosmetics —
                and hundreds more — trust Air Fresh Marketing to represent their
                brands in live environments. Our 4.9/5 client rating reflects
                our obsession with quality, reliability, and results. When your
                brand reputation is on the line, you need a brand activation
                agency with a proven track record of excellence.
              </p>
            </div>
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-300 space-y-6">
              <p>
                The brand activation agency you choose becomes the custodian of
                your brand in physical space — responsible for how consumers
                perceive, interact with, and remember your brand during the most
                impactful moments of engagement. Unlike digital advertising
                where creative can be adjusted in real time, brand activations
                happen live, in front of real people, with no opportunity for a
                second first impression. This reality demands an agency partner
                with proven operational excellence, deep talent networks, and the
                strategic sophistication to translate brand objectives into
                physical experiences that resonate.
              </p>
              <p>
                Air Fresh Marketing combines the creative ambition of a boutique
                agency with the operational infrastructure of a national
                organization. Our headquarters in Denver, Colorado serves as the
                strategic hub for campaigns executed coast to coast. Our{" "}
                <Link
                  href="/corporate-event-staffing"
                  className="text-[#00C853] hover:underline"
                >
                  corporate event staffing
                </Link>{" "}
                capabilities, combined with our{" "}
                <Link
                  href="/event-marketing-agency"
                  className="text-[#00C853] hover:underline"
                >
                  event marketing
                </Link>{" "}
                expertise, position us uniquely to handle activations of any
                scale — from intimate VIP experiences to festival activations
                reaching hundreds of thousands of consumers.
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
              Brand Activation Agency Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about working with a brand activation agency,
              campaign planning, pricing, and measurement.
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

      {/* Internal Links Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Related Brand Activation Services and Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                label: "Experiential Marketing Services",
                href: "/services/experiential-marketing",
              },
              {
                label: "Brand Ambassador Services",
                href: "/services/brand-ambassadors",
              },
              { label: "Sampling Services", href: "/services/sampling" },
              { label: "Street Team Services", href: "/services/street-teams" },
              { label: "Event Staffing Agency", href: "/event-staffing-agency" },
              {
                label: "Brand Ambassador Agency",
                href: "/brand-ambassador-agency",
              },
              {
                label: "Experiential Marketing Agency",
                href: "/experiential-marketing-agency",
              },
              {
                label: "Promotional Staffing Agency",
                href: "/promotional-staffing-agency",
              },
              {
                label: "Corporate Event Staffing",
                href: "/corporate-event-staffing",
              },
              {
                label: "Event Marketing Agency",
                href: "/event-marketing-agency",
              },
              {
                label: "Food & Beverage Sampling",
                href: "/services/food-beverage-sampling",
              },
              { label: "Pricing", href: "/pricing" },
              { label: "Contact Us", href: "/contact" },
              { label: "Get a Quote", href: "/get-quote" },
              { label: "Case Studies", href: "/case-studies" },
            ].map((link) => (
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
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore More Staffing Solutions</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: '/event-staffing-agency', label: 'Event Staffing Agency' },
              { href: '/brand-ambassador-agency', label: 'Brand Ambassador Agency' },
              { href: '/experiential-marketing-agency', label: 'Experiential Marketing Agency' },
              { href: '/promotional-staffing-agency', label: 'Promotional Staffing Agency' },
              { href: '/corporate-event-staffing', label: 'Corporate Event Staffing' },
              { href: '/event-marketing-agency', label: 'Event Marketing Agency' },
              { href: '/field-marketing-agency', label: 'Field Marketing Agency' },
              { href: '/guerrilla-marketing-agency', label: 'Guerrilla Marketing Agency' },
              { href: '/product-sampling-agency', label: 'Product Sampling Agency' },
              { href: '/mobile-marketing-tours', label: 'Mobile Marketing Tours' },
              { href: '/services/trade-show-staffing', label: 'Trade Show Staffing' },
              { href: '/services/food-beverage-sampling', label: 'Food & Beverage Sampling' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-[#00C853] hover:text-[#00C853] transition-colors shadow-sm">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#001F3F] to-[#003366] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Brand Activation Agency Ready to Bring Your Brand to Life
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            From strategy and creative through staffing, execution, and
            analytics — Air Fresh Marketing is the brand activation agency that
            delivers measurable results for brands that demand more from their
            live experiences. Let us show you what 20+ years of expertise can do
            for your next campaign.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-quote"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#00C853] hover:bg-[#00E676] text-[#001F3F] font-bold text-lg rounded-lg transition-colors"
            >
              Get a Free Activation Proposal
            </Link>
            <Link
              href="/contact"
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
    </div>
  );
}
