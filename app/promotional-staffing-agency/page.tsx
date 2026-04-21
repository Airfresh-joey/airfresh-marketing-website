import Link from "next/link";

export default function PromotionalStaffingAgencyPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Promotional Staffing Agency Services",
    description:
      "Professional promotional staffing agency providing trained promo models, brand ambassadors, product demonstrators, sampling teams, street teams, and event staff in 50+ cities across the United States.",
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
      "Promotional Staffing",
      "Brand Ambassadors",
      "Promo Models",
      "Product Demonstrators",
      "Sampling Teams",
      "Street Teams",
      "Event Hosts",
      "Registration Staff",
      "Brand Representatives",
    ],
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "28",
      highPrice: "95",
      offerCount: "9",
      availability: "https://schema.org/InStock",
    },
    url: "https://www.airfreshmarketing.com/promotional-staffing-agency",
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
        name: "Promotional Staffing Agency",
        item: "https://www.airfreshmarketing.com/promotional-staffing-agency",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does a promotional staffing agency do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A promotional staffing agency recruits, trains, and deploys promotional staff for brand activations, product launches, sampling campaigns, trade shows, and experiential marketing events. The agency handles sourcing, vetting, scheduling, training, and managing promotional talent so brands can focus on strategy and results.",
        },
      },
      {
        "@type": "Question",
        name: "How much does promotional staffing cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Promotional staffing rates typically range from $28 to $95 per hour depending on the role, market, and experience required. Basic sampling staff starts around $28-$35/hour, brand ambassadors average $35-$55/hour, and specialized trade show models or bilingual staff can range from $55-$95/hour. Volume discounts are available for multi-day or multi-city campaigns.",
        },
      },
      {
        "@type": "Question",
        name: "How far in advance should I book promotional staff?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We recommend booking promotional staff at least 2-3 weeks in advance for standard activations. For large-scale campaigns, trade shows, or events requiring specialized talent, 4-6 weeks lead time is ideal. However, our extensive talent network allows us to accommodate rush requests in as little as 48-72 hours in most major markets.",
        },
      },
      {
        "@type": "Question",
        name: "What types of promotional staff can you provide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide trade show models, brand ambassadors, product demonstrators, sampling teams, street teams, event hosts and hostesses, registration staff, brand representatives, bilingual promo staff, cocktail servers, mascot performers, and experiential marketing specialists. All staff are trained specifically for your brand and event objectives.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide promotional staff nationwide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Air Fresh Marketing provides promotional staffing in 50+ cities across the United States. Our major markets include New York, Los Angeles, Chicago, Miami, Dallas, Denver, Atlanta, San Francisco, Las Vegas, and many more. We can also deploy teams to smaller markets and rural locations for touring campaigns.",
        },
      },
      {
        "@type": "Question",
        name: "How do you ensure promotional staff quality?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We maintain quality through a rigorous multi-step process: thorough background checks, in-person interviews, brand-specific training programs, GPS-verified check-ins, real-time event reporting, on-site management for large events, post-event performance reviews, and client feedback integration. Our staff retention rate is over 85%, ensuring experienced talent for repeat campaigns.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between a brand ambassador and a promotional model?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Brand ambassadors focus primarily on verbal engagement, product education, and building authentic connections with consumers. They excel at storytelling, lead generation, and driving conversions through conversation. Promotional models combine visual presence with brand messaging, ideal for trade shows, product launches, and photo activations where appearance standards and visual impact are key components of the marketing strategy.",
        },
      },
      {
        "@type": "Question",
        name: "Can you handle multi-city promotional campaigns?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Multi-city campaigns are one of our specialties. We coordinate promotional staff across 50+ markets simultaneously, maintaining consistent brand messaging, appearance standards, and reporting metrics. A dedicated campaign manager oversees logistics, and our proprietary technology platform enables real-time visibility across all markets from a single dashboard.",
        },
      },
    ],
  };

  const cities = [
    { name: "New York", slug: "new-york" },
    { name: "Los Angeles", slug: "los-angeles" },
    { name: "Chicago", slug: "chicago" },
    { name: "Miami", slug: "miami" },
    { name: "Dallas", slug: "dallas" },
    { name: "Denver", slug: "denver" },
    { name: "Atlanta", slug: "atlanta" },
    { name: "San Francisco", slug: "san-francisco" },
    { name: "Las Vegas", slug: "las-vegas" },
    { name: "Houston", slug: "houston" },
    { name: "Phoenix", slug: "phoenix" },
    { name: "Philadelphia", slug: "philadelphia" },
    { name: "San Diego", slug: "san-diego" },
    { name: "Austin", slug: "austin" },
    { name: "Nashville", slug: "nashville" },
    { name: "Orlando", slug: "orlando" },
    { name: "Seattle", slug: "seattle" },
    { name: "Boston", slug: "boston" },
    { name: "Minneapolis", slug: "minneapolis" },
    { name: "Charlotte", slug: "charlotte" },
    { name: "Tampa", slug: "tampa" },
    { name: "Portland", slug: "portland" },
    { name: "San Antonio", slug: "san-antonio" },
    { name: "Washington DC", slug: "washington-dc" },
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
      <section className="bg-gradient-to-r from-[#001F3F] to-[#003366] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm text-gray-300">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-white">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#00C853]">Promotional Staffing Agency</span>
          </nav>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Promotional Staffing Agency for Nationwide Brand Activations
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Promotional staffing agency trusted by 300+ leading brands to
                provide trained promo models, brand ambassadors, and event staff
                for product launches, sampling campaigns, trade shows, and
                experiential marketing activations in 50+ cities nationwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/get-quote"
                  className="inline-block bg-[#00C853] hover:bg-[#00E676] text-white font-semibold px-8 py-4 rounded-lg text-center transition-colors duration-200"
                >
                  Get a Free Quote
                </Link>
                <Link
                  href="/contact"
                  className="inline-block border-2 border-white hover:bg-white hover:text-[#001F3F] text-white font-semibold px-8 py-4 rounded-lg text-center transition-colors duration-200"
                >
                  Call (303) 720-6060
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <p className="text-4xl font-bold text-[#00C853]">20+</p>
                <p className="text-gray-200 mt-2">Years Experience</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <p className="text-4xl font-bold text-[#00C853]">50+</p>
                <p className="text-gray-200 mt-2">Cities Nationwide</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <p className="text-4xl font-bold text-[#00C853]">500+</p>
                <p className="text-gray-200 mt-2">Events Per Year</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <p className="text-4xl font-bold text-[#00C853]">4.9/5</p>
                <p className="text-gray-200 mt-2">Client Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Promotional Staffing Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-8">
            What Is Promotional Staffing and Why Does It Matter?
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Promotional staffing is the practice of hiring trained,
                professional talent to represent brands at marketing events,
                product launches, retail activations, and experiential campaigns.
                A promotional staffing agency like Air Fresh Marketing serves as
                the bridge between brands that need talented, reliable
                promotional staff and the vetted professionals who bring
                campaigns to life.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Unlike general temp staffing or event staffing firms that provide
                bodies to fill roles, a dedicated promotional staffing agency
                specializes in talent that understands brand messaging, consumer
                engagement, and the art of face-to-face marketing. Our
                promotional staff are not just warm bodies at an event — they are
                trained marketing professionals who drive measurable results for
                your brand.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Since 2004, Air Fresh Marketing has operated as a
                full-service{" "}
                <Link
                  href="/brand-ambassador-agency"
                  className="text-[#00C853] hover:underline font-medium"
                >
                  brand ambassador agency
                </Link>{" "}
                and promotional staffing company, deploying thousands of trained
                professionals to events ranging from intimate product demos to
                massive multi-city touring campaigns. We understand that every
                consumer interaction is a brand moment, and we staff accordingly.
              </p>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                The promotional staffing industry has evolved significantly over
                the past two decades. Today, brands demand more than physical
                presence — they need staff who can articulate value propositions,
                generate leads, capture data, create social content, and deliver
                authentic consumer experiences. Modern promotional staff must be
                part marketer, part salesperson, and part brand storyteller.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Working with a professional promotional staffing agency provides
                several critical advantages over hiring directly or using
                generalist temp firms. First, you gain access to a pre-vetted
                talent pool of thousands of experienced promotional
                professionals. Second, you benefit from professional training
                programs that ensure consistent brand representation. Third, you
                get operational support including scheduling, logistics, GPS
                verification, and real-time reporting.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you need{" "}
                <Link
                  href="/services/sampling"
                  className="text-[#00C853] hover:underline font-medium"
                >
                  sampling teams
                </Link>{" "}
                for a grocery store tour,{" "}
                <Link
                  href="/services/trade-show-staffing"
                  className="text-[#00C853] hover:underline font-medium"
                >
                  trade show staff
                </Link>{" "}
                for a major convention, or{" "}
                <Link
                  href="/services/brand-ambassadors"
                  className="text-[#00C853] hover:underline font-medium"
                >
                  brand ambassadors
                </Link>{" "}
                for a nationwide product launch, a specialized promotional
                staffing agency ensures your investment in live marketing
                delivers maximum return.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Types Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-4">
            Promotional Staff Types We Provide
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            Our promotional staffing agency provides a comprehensive range of
            talent types to cover every marketing scenario. Each category
            undergoes role-specific training to ensure exceptional performance.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-[#00C853]/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#00C853]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">
                Trade Show Models
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Professional trade show models who combine polished appearance
                with product knowledge to attract booth traffic, qualify leads,
                scan badges, and deliver presentations at conventions and expos.
                Experienced at CES, SXSW, NRF, and hundreds of industry events.
              </p>
              <Link
                href="/services/trade-show-staffing"
                className="inline-block mt-4 text-[#00C853] font-medium hover:underline"
              >
                Learn more
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-[#00C853]/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#00C853]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">
                Brand Ambassadors
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Charismatic brand ambassadors trained in your brand story who
                create authentic consumer connections, drive trial, generate
                social content, and build lasting brand affinity through
                one-on-one interactions and engaging experiences.
              </p>
              <Link
                href="/services/brand-ambassadors"
                className="inline-block mt-4 text-[#00C853] font-medium hover:underline"
              >
                Learn more
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-[#00C853]/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#00C853]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">
                Product Demonstrators
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Skilled product demonstrators who showcase features, answer
                technical questions, and drive purchase decisions at retail
                locations, showrooms, and events. Expert at turning product
                curiosity into sales conversions through live demonstrations.
              </p>
              <Link
                href="/services/experiential-marketing"
                className="inline-block mt-4 text-[#00C853] font-medium hover:underline"
              >
                Learn more
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-[#00C853]/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#00C853]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">
                Sampling Teams
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Energetic{" "}
                <Link
                  href="/services/food-beverage-sampling"
                  className="text-[#00C853] hover:underline"
                >
                  sampling teams
                </Link>{" "}
                who distribute product samples while delivering key brand
                messages. Trained in food safety, responsible alcohol service,
                and consumer engagement tactics that maximize trial-to-purchase
                conversion rates.
              </p>
              <Link
                href="/services/sampling"
                className="inline-block mt-4 text-[#00C853] font-medium hover:underline"
              >
                Learn more
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-[#00C853]/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#00C853]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">
                Street Teams
              </h3>
              <p className="text-gray-600 leading-relaxed">
                High-energy street teams who take your brand directly to
                consumers in high-traffic locations. Ideal for guerrilla
                marketing, flyering, product seeding, pop-up events, and
                creating buzz in targeted neighborhoods and event corridors.
              </p>
              <Link
                href="/services/experiential-marketing"
                className="inline-block mt-4 text-[#00C853] font-medium hover:underline"
              >
                Learn more
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-[#00C853]/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#00C853]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">
                Event Hosts & Hostesses
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Professional event hosts and hostesses who welcome guests, manage
                check-in processes, provide wayfinding, facilitate VIP
                experiences, and ensure every attendee feels valued from the
                moment they arrive until departure.
              </p>
              <Link
                href="/event-staffing-agency"
                className="inline-block mt-4 text-[#00C853] font-medium hover:underline"
              >
                Learn more
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-[#00C853]/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#00C853]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">
                Registration Staff
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Detail-oriented registration staff who manage attendee check-in,
                badge printing, credential verification, data capture, and guest
                list management. Proficient with registration platforms including
                Cvent, Eventbrite, and Bizzabo.
              </p>
              <Link
                href="/event-staffing-agency"
                className="inline-block mt-4 text-[#00C853] font-medium hover:underline"
              >
                Learn more
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-[#00C853]/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#00C853]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">
                Brand Representatives
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Dedicated brand representatives who serve as an extension of your
                marketing team for ongoing campaigns, retail programs, and field
                marketing initiatives. Trained extensively in brand guidelines,
                competitive positioning, and sales techniques.
              </p>
              <Link
                href="/hire-brand-ambassadors"
                className="inline-block mt-4 text-[#00C853] font-medium hover:underline"
              >
                Learn more
              </Link>
            </div>
          </div>

          <div className="mt-12 bg-[#001F3F] rounded-xl p-8 text-white">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-3">
                  Need a Custom Staffing Solution?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Every campaign is unique. If you need specialized promotional
                  staff that do not fit neatly into one category — bilingual
                  talent, costumed performers, licensed bartenders, or technical
                  specialists — our team can source and train the perfect fit for
                  your program.
                </p>
              </div>
              <div className="text-center md:text-right">
                <Link
                  href="/get-quote"
                  className="inline-block bg-[#00C853] hover:bg-[#00E676] text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
                >
                  Request Custom Staff
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-4">
            Industries We Serve with Promotional Staffing
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            Our promotional staffing solutions span every major industry. We
            understand the unique requirements, compliance standards, and
            consumer dynamics of each sector.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group p-6 rounded-xl border border-gray-200 hover:border-[#00C853] transition-colors">
              <h3 className="text-lg font-bold text-[#001F3F] mb-3 group-hover:text-[#00C853] transition-colors">
                Food & Beverage
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sampling staff, brand ambassadors, and demo specialists for
                grocery stores, festivals, restaurants, and CPG product launches.
                All staff are ServSafe and food handler certified where required.
                We help brands like craft breweries, snack companies, and
                beverage startups connect directly with consumers through taste
                and trial.
              </p>
            </div>
            <div className="group p-6 rounded-xl border border-gray-200 hover:border-[#00C853] transition-colors">
              <h3 className="text-lg font-bold text-[#001F3F] mb-3 group-hover:text-[#00C853] transition-colors">
                Technology & Electronics
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Technically proficient demo staff and trade show professionals
                for product launches, tech conferences, retail demos, and CES
                activations. Our tech-savvy promotional staff can explain complex
                features, run live demos, and generate qualified leads for SaaS,
                hardware, and consumer electronics brands.
              </p>
            </div>
            <div className="group p-6 rounded-xl border border-gray-200 hover:border-[#00C853] transition-colors">
              <h3 className="text-lg font-bold text-[#001F3F] mb-3 group-hover:text-[#00C853] transition-colors">
                Automotive
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Professional event staff for auto shows, dealership events, test
                drive campaigns, and ride-and-drive experiences. Our automotive
                promotional staff understand vehicle features, financing options,
                and the test-drive-to-purchase customer journey that drives
                dealership revenue.
              </p>
            </div>
            <div className="group p-6 rounded-xl border border-gray-200 hover:border-[#00C853] transition-colors">
              <h3 className="text-lg font-bold text-[#001F3F] mb-3 group-hover:text-[#00C853] transition-colors">
                Health & Beauty
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Beauty advisors, sampling specialists, and promotional models for
                cosmetics launches, wellness events, pharmaceutical conferences,
                and retail beauty counter activations. Staff trained in product
                application, ingredient education, and personalized beauty
                consultations.
              </p>
            </div>
            <div className="group p-6 rounded-xl border border-gray-200 hover:border-[#00C853] transition-colors">
              <h3 className="text-lg font-bold text-[#001F3F] mb-3 group-hover:text-[#00C853] transition-colors">
                Sports & Entertainment
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Energetic promotional staff for stadium activations, concert
                sponsorships, fan zones, sports marketing events, and
                entertainment brand partnerships. Our teams thrive in
                high-energy, high-volume environments where crowd engagement and
                brand visibility are paramount.
              </p>
            </div>
            <div className="group p-6 rounded-xl border border-gray-200 hover:border-[#00C853] transition-colors">
              <h3 className="text-lg font-bold text-[#001F3F] mb-3 group-hover:text-[#00C853] transition-colors">
                Spirits & Alcohol
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                TIPS-certified and state-compliant promotional staff for liquor
                tastings, bar nights, festival sponsorships, and responsible
                alcohol sampling programs. We ensure full compliance with local
                liquor laws and ABC regulations while maximizing brand engagement
                at every pour.
              </p>
            </div>
            <div className="group p-6 rounded-xl border border-gray-200 hover:border-[#00C853] transition-colors">
              <h3 className="text-lg font-bold text-[#001F3F] mb-3 group-hover:text-[#00C853] transition-colors">
                Retail & E-Commerce
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                In-store promotional staff, pop-up shop teams, and retail brand
                ambassadors for product launches, seasonal campaigns, and
                omnichannel activations. Staff trained in retail selling
                techniques, visual merchandising, and driving both in-store and
                online conversions.
              </p>
            </div>
            <div className="group p-6 rounded-xl border border-gray-200 hover:border-[#00C853] transition-colors">
              <h3 className="text-lg font-bold text-[#001F3F] mb-3 group-hover:text-[#00C853] transition-colors">
                Cannabis & CBD
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Knowledgeable promotional staff for cannabis industry events,
                dispensary activations, CBD brand launches, and MJBizCon
                appearances. Our team understands evolving regulations, product
                education requirements, and the unique compliance considerations
                across different state markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 md:py-20 bg-[#001F3F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Promotional Staffing Process
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl">
            From initial consultation to post-event reporting, our proven
            six-step process ensures flawless execution for every promotional
            staffing campaign.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute -top-2 -left-2 w-10 h-10 bg-[#00C853] rounded-full flex items-center justify-center font-bold text-white text-lg">
                1
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 pt-12 border border-white/10">
                <h3 className="text-xl font-bold mb-3 text-[#00C853]">
                  Discovery & Consultation
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We begin with a thorough discovery call to understand your
                  brand objectives, campaign goals, target audience, event
                  logistics, and success metrics. Our team asks the right
                  questions to build a comprehensive staffing brief that aligns
                  talent selection with your marketing strategy and expected
                  outcomes.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-2 -left-2 w-10 h-10 bg-[#00C853] rounded-full flex items-center justify-center font-bold text-white text-lg">
                2
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 pt-12 border border-white/10">
                <h3 className="text-xl font-bold mb-3 text-[#00C853]">
                  Talent Selection & Matching
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Using our proprietary database of 10,000+ vetted promotional
                  professionals, we hand-select talent that matches your brand
                  voice, demographic requirements, skill needs, and market
                  locations. You receive curated talent profiles with photos,
                  experience details, and availability confirmation before
                  booking.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-2 -left-2 w-10 h-10 bg-[#00C853] rounded-full flex items-center justify-center font-bold text-white text-lg">
                3
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 pt-12 border border-white/10">
                <h3 className="text-xl font-bold mb-3 text-[#00C853]">
                  Brand Training & Preparation
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Every promotional staff member completes comprehensive
                  brand-specific training covering product knowledge, key
                  messaging, FAQs, dress code, engagement techniques, and event
                  protocols. Training is delivered via video modules, live
                  sessions, or written briefs depending on campaign complexity
                  and timeline.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-2 -left-2 w-10 h-10 bg-[#00C853] rounded-full flex items-center justify-center font-bold text-white text-lg">
                4
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 pt-12 border border-white/10">
                <h3 className="text-xl font-bold mb-3 text-[#00C853]">
                  Logistics & Coordination
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Our operations team handles all logistical details: scheduling
                  confirmations, travel arrangements for touring campaigns,
                  uniform distribution, equipment coordination, venue
                  communication, and backup staff assignment. We eliminate the
                  operational headaches so you can focus on strategy.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-2 -left-2 w-10 h-10 bg-[#00C853] rounded-full flex items-center justify-center font-bold text-white text-lg">
                5
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 pt-12 border border-white/10">
                <h3 className="text-xl font-bold mb-3 text-[#00C853]">
                  Event Execution & Monitoring
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  On event day, staff check in via GPS-verified mobile app,
                  confirming punctuality and location. Our team monitors
                  real-time check-ins, receives photo documentation, and is
                  available for instant communication. For large events, we
                  deploy on-site managers to ensure seamless execution.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-2 -left-2 w-10 h-10 bg-[#00C853] rounded-full flex items-center justify-center font-bold text-white text-lg">
                6
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 pt-12 border border-white/10">
                <h3 className="text-xl font-bold mb-3 text-[#00C853]">
                  Reporting & Optimization
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  After each activation, you receive comprehensive reports
                  including samples distributed, leads captured, consumer
                  feedback, photos, hours worked, and performance metrics. We
                  analyze data to optimize future activations, providing insights
                  that improve ROI with every subsequent campaign deployment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-4">
            Promotional Staffing Pricing and Rates
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            Transparent promotional staffing pricing that scales with your
            campaign needs. All rates include recruiting, training, management,
            payroll, insurance, and reporting.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-[#001F3F] mb-2">
                Sampling & Street Teams
              </h3>
              <p className="text-3xl font-bold text-[#00C853] mb-2">
                $28 - $40
              </p>
              <p className="text-gray-500 text-sm mb-4">per hour per staff</p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C853] mt-0.5">&#10003;</span>
                  Product sampling distribution
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C853] mt-0.5">&#10003;</span>
                  Flyer and coupon distribution
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C853] mt-0.5">&#10003;</span>
                  Guerrilla marketing activations
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C853] mt-0.5">&#10003;</span>
                  Basic consumer engagement
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C853] mt-0.5">&#10003;</span>
                  GPS-verified attendance
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border-2 border-[#00C853] relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00C853] text-white text-xs font-bold px-4 py-1 rounded-full">
                MOST POPULAR
              </span>
              <h3 className="text-xl font-bold text-[#001F3F] mb-2">
                Brand Ambassadors
              </h3>
              <p className="text-3xl font-bold text-[#00C853] mb-2">
                $35 - $55
              </p>
              <p className="text-gray-500 text-sm mb-4">per hour per staff</p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C853] mt-0.5">&#10003;</span>
                  Brand storytelling and education
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C853] mt-0.5">&#10003;</span>
                  Lead generation and data capture
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C853] mt-0.5">&#10003;</span>
                  Product demonstrations
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C853] mt-0.5">&#10003;</span>
                  Social media content creation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C853] mt-0.5">&#10003;</span>
                  Detailed event reporting
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C853] mt-0.5">&#10003;</span>
                  Custom brand training
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-[#001F3F] mb-2">
                Trade Show & Specialty
              </h3>
              <p className="text-3xl font-bold text-[#00C853] mb-2">
                $55 - $95
              </p>
              <p className="text-gray-500 text-sm mb-4">per hour per staff</p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C853] mt-0.5">&#10003;</span>
                  Professional trade show models
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C853] mt-0.5">&#10003;</span>
                  Bilingual promotional staff
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C853] mt-0.5">&#10003;</span>
                  Emcees and presenters
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C853] mt-0.5">&#10003;</span>
                  Licensed promotional bartenders
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C853] mt-0.5">&#10003;</span>
                  Technical product specialists
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C853] mt-0.5">&#10003;</span>
                  On-site team management
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-[#001F3F] mb-4">
              Factors That Affect Promotional Staffing Pricing
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-[#001F3F] mb-2">
                  Market Location
                </h4>
                <p className="text-gray-600 text-sm">
                  Major metros like NYC and LA have higher rates than secondary
                  markets due to cost of living and talent demand. Rates vary by
                  15-30% between Tier 1 and Tier 3 markets.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[#001F3F] mb-2">
                  Campaign Duration
                </h4>
                <p className="text-gray-600 text-sm">
                  Multi-day bookings and long-term campaigns receive volume
                  discounts. A 10-day touring campaign will have lower per-hour
                  rates than a single one-day activation.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[#001F3F] mb-2">
                  Staff Specialization
                </h4>
                <p className="text-gray-600 text-sm">
                  Specialized skills like bilingual ability, technical product
                  expertise, industry certifications, or performance talents
                  command premium rates.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[#001F3F] mb-2">
                  Team Size
                </h4>
                <p className="text-gray-600 text-sm">
                  Larger team deployments of 10+ staff qualify for volume
                  pricing. Multi-city deployments with consistent team sizes
                  across markets also benefit from scaled rates.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[#001F3F] mb-2">
                  Lead Time
                </h4>
                <p className="text-gray-600 text-sm">
                  Rush requests within 72 hours may incur an expedite fee.
                  Standard 2-3 week lead time ensures best rates and optimal
                  talent selection.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[#001F3F] mb-2">
                  Additional Services
                </h4>
                <p className="text-gray-600 text-sm">
                  On-site management, travel coordination, custom uniforms,
                  specialized training, and enhanced reporting are available as
                  add-on services.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/pricing"
                className="text-[#00C853] font-semibold hover:underline mr-8"
              >
                View Full Pricing Details
              </Link>
              <Link
                href="/get-quote"
                className="inline-block bg-[#00C853] hover:bg-[#00E676] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
              >
                Get a Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-4">
            Promotional Staffing Cities We Cover
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            Air Fresh Marketing provides promotional staffing services in 50+
            cities across the United States. Our local talent networks ensure you
            get experienced professionals who know their markets.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/cities/${city.slug}`}
                className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow border border-gray-200 hover:border-[#00C853] group"
              >
                <span className="text-[#001F3F] font-medium group-hover:text-[#00C853] transition-colors">
                  {city.name}
                </span>
              </Link>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-8">
            Do not see your city? We likely cover it.{" "}
            <Link
              href="/contact"
              className="text-[#00C853] font-medium hover:underline"
            >
              Contact us
            </Link>{" "}
            to confirm availability in your market.
          </p>
        </div>
      </section>

      {/* Why Choose AirFresh Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-4">
            Why Choose AirFresh as Your Promotional Staffing Agency
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            With over 20 years in the promotional staffing industry, Air Fresh
            Marketing delivers what generalist staffing firms cannot: specialized
            expertise, proven processes, and consistent results across every
            market.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#00C853]/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-[#00C853]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#001F3F] mb-2">
                  20+ Years of Proven Experience
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Founded in 2004, Air Fresh Marketing has executed thousands of
                  promotional staffing campaigns across every industry, venue
                  type, and market condition. Our institutional knowledge means
                  fewer surprises and better outcomes for your brand. We have
                  seen every scenario and know how to navigate challenges before
                  they become problems.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#00C853]/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-[#00C853]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#001F3F] mb-2">
                  True Nationwide Coverage
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  With active talent pools in 50+ US cities, we deliver
                  consistent quality whether you are activating in Manhattan or
                  Missoula. Our local market managers maintain relationships with
                  top talent in each city, ensuring you always get experienced
                  professionals who know their communities and venues.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#00C853]/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-[#00C853]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#001F3F] mb-2">
                  Technology-Powered Operations
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our proprietary platform provides GPS-verified check-ins,
                  real-time event dashboards, photo documentation, digital
                  timesheets, and comprehensive post-event analytics. You get
                  complete visibility into every activation without needing to be
                  on-site, making multi-city campaign management effortless.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#00C853]/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-[#00C853]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#001F3F] mb-2">
                  Rigorous Training Programs
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Every staff member completes brand-specific training before
                  stepping into the field. Our multi-layered training approach
                  includes product knowledge, brand messaging, engagement
                  techniques, compliance requirements, and situational scenarios.
                  The result is staff who represent your brand as well as your
                  own employees would.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#00C853]/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-[#00C853]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#001F3F] mb-2">
                  Rapid Response Capability
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Need staff in 48 hours? Our extensive nationwide network and
                  streamlined operations enable rapid deployment for last-minute
                  opportunities. While we recommend 2-3 weeks lead time for
                  optimal results, our team routinely accommodates rush requests
                  without compromising quality or training standards.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#00C853]/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-[#00C853]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#001F3F] mb-2">
                  Dedicated Account Management
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Every client receives a dedicated account manager who becomes
                  an extension of your team. Your account manager understands
                  your brand inside and out, maintains institutional knowledge
                  across campaigns, and proactively identifies opportunities to
                  improve performance and efficiency over time.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-4 gap-6 bg-gray-50 rounded-xl p-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-[#00C853]">300+</p>
              <p className="text-gray-600 text-sm mt-1">Brands Served</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#00C853]">10,000+</p>
              <p className="text-gray-600 text-sm mt-1">Vetted Talent</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#00C853]">85%</p>
              <p className="text-gray-600 text-sm mt-1">Staff Retention</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#00C853]">98%</p>
              <p className="text-gray-600 text-sm mt-1">On-Time Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experiential Marketing Connection */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-8">
            Promotional Staffing for Experiential Marketing Campaigns
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-700 leading-relaxed mb-6">
                The most effective promotional staffing exists within the context
                of broader{" "}
                <Link
                  href="/experiential-marketing-agency"
                  className="text-[#00C853] hover:underline font-medium"
                >
                  experiential marketing
                </Link>{" "}
                campaigns. When promotional staff are deployed as part of an
                integrated experiential strategy, engagement rates increase by
                40-60% compared to standalone activations. This is because
                trained promotional talent amplifies every element of an
                experience — from initial attraction to final conversion.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Air Fresh Marketing approaches promotional staffing holistically.
                We do not just provide bodies — we provide{" "}
                <Link
                  href="/services/experiential-marketing"
                  className="text-[#00C853] hover:underline font-medium"
                >
                  experiential marketing professionals
                </Link>{" "}
                who understand how their role fits within the larger campaign
                architecture. Whether it is a pop-up activation, mobile tour,
                retail takeover, or festival sponsorship, our staff are trained
                to maximize every consumer touchpoint.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This integrated approach is why brands like Fortune 500 consumer
                goods companies, emerging DTC brands, and entertainment
                companies trust Air Fresh Marketing as their go-to promotional
                staffing partner. We understand that staffing is not just an
                operational need — it is a strategic differentiator that directly
                impacts campaign ROI.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-[#001F3F] mb-2">
                  Product Launch Activations
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Teams of brand ambassadors and{" "}
                  <Link
                    href="/services/promotional-models"
                    className="text-[#00C853] hover:underline"
                  >
                    promotional models
                  </Link>{" "}
                  who create buzz, drive trial, capture content, and generate
                  social amplification for new product introductions. Ideal for
                  CPG, tech, beauty, and beverage brands entering new markets or
                  launching new SKUs.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-[#001F3F] mb-2">
                  Multi-City Touring Campaigns
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Coordinated promotional teams deployed across multiple markets
                  simultaneously or sequentially for mobile tours, festival
                  circuits, and national sampling programs. Consistent brand
                  experience across every stop with localized market expertise.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-[#001F3F] mb-2">
                  Retail & In-Store Programs
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Trained demo staff and brand representatives for retail chains,
                  grocery stores, club stores, and specialty retail environments.
                  Drive trial, educate consumers, and increase velocity at the
                  point of purchase where buying decisions happen.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-[#001F3F] mb-2">
                  Trade Shows & Conventions
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Professional{" "}
                  <Link
                    href="/services/trade-show-staffing"
                    className="text-[#00C853] hover:underline"
                  >
                    trade show staff
                  </Link>{" "}
                  who attract booth traffic, qualify leads, deliver
                  presentations, scan badges, and represent your brand at
                  industry events. Experienced at every major convention center
                  in the US.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-4">
            Frequently Asked Questions About Promotional Staffing
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            Get answers to the most common questions brands ask when hiring a
            promotional staffing agency.
          </p>
          <div className="space-y-6 max-w-4xl">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#001F3F] mb-3">
                What does a promotional staffing agency do?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                A promotional staffing agency recruits, trains, and deploys
                promotional staff for brand activations, product launches,
                sampling campaigns, trade shows, and experiential marketing
                events. The agency handles sourcing, vetting, scheduling,
                training, and managing promotional talent so brands can focus on
                strategy and results. Air Fresh Marketing goes beyond basic
                staffing by providing comprehensive campaign management,
                technology-powered reporting, and strategic consultation to
                maximize your live marketing investment.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#001F3F] mb-3">
                How much does promotional staffing cost?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Promotional staffing rates typically range from $28 to $95 per
                hour depending on the role, market, and experience required.
                Basic sampling staff starts around $28-$35/hour, brand
                ambassadors average $35-$55/hour, and specialized trade show
                models or bilingual staff can range from $55-$95/hour. Volume
                discounts are available for multi-day or multi-city campaigns.
                Visit our{" "}
                <Link
                  href="/pricing"
                  className="text-[#00C853] hover:underline"
                >
                  pricing page
                </Link>{" "}
                for detailed rate information or{" "}
                <Link
                  href="/get-quote"
                  className="text-[#00C853] hover:underline"
                >
                  request a custom quote
                </Link>{" "}
                for your specific campaign needs.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#001F3F] mb-3">
                How far in advance should I book promotional staff?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We recommend booking promotional staff at least 2-3 weeks in
                advance for standard activations. For large-scale campaigns,
                trade shows, or events requiring specialized talent, 4-6 weeks
                lead time is ideal. However, our extensive talent network allows
                us to accommodate rush requests in as little as 48-72 hours in
                most major markets. The earlier you book, the better talent
                selection and rates you will receive. Contact our team to discuss
                your timeline.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#001F3F] mb-3">
                What types of promotional staff can you provide?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We provide trade show models, brand ambassadors, product
                demonstrators, sampling teams, street teams, event hosts and
                hostesses, registration staff, brand representatives, bilingual
                promo staff, cocktail servers, mascot performers, and
                experiential marketing specialists. All staff are trained
                specifically for your brand and event objectives. If you need a
                specialized role not listed here,{" "}
                <Link
                  href="/contact"
                  className="text-[#00C853] hover:underline"
                >
                  contact us
                </Link>{" "}
                — we can source virtually any promotional talent type.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#001F3F] mb-3">
                Do you provide promotional staff nationwide?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Yes, Air Fresh Marketing provides promotional staffing in 50+
                cities across the United States. Our major markets include New
                York, Los Angeles, Chicago, Miami, Dallas, Denver, Atlanta, San
                Francisco, Las Vegas, and many more. We can also deploy teams to
                smaller markets and rural locations for touring campaigns. Our
                local talent pools are managed by regional coordinators who
                understand each market and maintain relationships with top local
                talent.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#001F3F] mb-3">
                How do you ensure promotional staff quality?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We maintain quality through a rigorous multi-step process:
                thorough background checks, in-person interviews, brand-specific
                training programs, GPS-verified check-ins, real-time event
                reporting, on-site management for large events, post-event
                performance reviews, and client feedback integration. Our staff
                retention rate is over 85%, ensuring experienced talent for
                repeat campaigns. Additionally, every activation includes backup
                staff on standby to guarantee coverage.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#001F3F] mb-3">
                What is the difference between a brand ambassador and a
                promotional model?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Brand ambassadors focus primarily on verbal engagement, product
                education, and building authentic connections with consumers.
                They excel at storytelling, lead generation, and driving
                conversions through conversation. Promotional models combine
                visual presence with brand messaging, ideal for trade shows,
                product launches, and photo activations where appearance
                standards and visual impact are key components of the marketing
                strategy. Many campaigns benefit from a combination of both. Learn more about our{" "}
                <Link
                  href="/hire-brand-ambassadors"
                  className="text-[#00C853] hover:underline"
                >
                  brand ambassador hiring process
                </Link>
                .
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#001F3F] mb-3">
                Can you handle multi-city promotional campaigns?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Absolutely. Multi-city campaigns are one of our specialties. We
                coordinate promotional staff across 50+ markets simultaneously,
                maintaining consistent brand messaging, appearance standards, and
                reporting metrics. A dedicated campaign manager oversees
                logistics, and our proprietary technology platform enables
                real-time visibility across all markets from a single dashboard.
                Whether you need teams in 3 cities or 30, we scale efficiently
                while maintaining quality standards across every activation.
              </p>
            </div>
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
              { href: '/corporate-event-staffing', label: 'Corporate Event Staffing' },
              { href: '/event-marketing-agency', label: 'Event Marketing Agency' },
              { href: '/brand-activation-agency', label: 'Brand Activation Agency' },
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
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#001F3F] to-[#003366] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Staff Your Next Promotional Campaign?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join 300+ brands that trust Air Fresh Marketing as their
            promotional staffing agency. Get a custom quote in 24 hours and
            staff confirmed within days — not weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-quote"
              className="inline-block bg-[#00C853] hover:bg-[#00E676] text-white font-semibold px-10 py-4 rounded-lg text-lg transition-colors duration-200"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/contact"
              className="inline-block border-2 border-white hover:bg-white hover:text-[#001F3F] text-white font-semibold px-10 py-4 rounded-lg text-lg transition-colors duration-200"
            >
              Call (303) 720-6060
            </Link>
          </div>
          <p className="text-gray-400 mt-6 text-sm">
            Air Fresh Marketing | 1580 N. Logan St., Suite 660, Denver, CO
            80203 | Promotional staffing in 50+ cities since 2004
          </p>
        </div>
      </section>
    </>
  );
}
