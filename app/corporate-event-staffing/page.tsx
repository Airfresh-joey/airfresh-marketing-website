import Link from "next/link";

export default function CorporateEventStaffingPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Corporate Event Staffing Services",
        description:
          "Professional corporate event staffing agency providing trained coordinators, registration staff, brand ambassadors, hospitality teams, and AV technicians for conferences, galas, product launches, and corporate activations in 50+ cities nationwide.",
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
          "Corporate Event Staffing",
          "Conference Staffing",
          "Gala Staffing",
          "Product Launch Staff",
          "Corporate Activation Staff",
          "Registration Staff",
          "VIP Hosting",
        ],
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "USD",
          lowPrice: "35",
          highPrice: "95",
          offerCount: "7",
          availability: "https://schema.org/InStock",
        },
        url: "https://www.airfreshmarketing.com/corporate-event-staffing",
      },
      {
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
            name: "Corporate Event Staffing",
            item: "https://www.airfreshmarketing.com/corporate-event-staffing",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is corporate event staffing?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Corporate event staffing is the process of sourcing, training, and deploying professional personnel to manage and support corporate functions such as conferences, galas, product launches, shareholder meetings, trade shows, and corporate retreats. A specialized corporate event staffing agency like Air Fresh Marketing handles recruitment, background checks, brand-specific training, on-site management, and post-event reporting so that organizations can focus on their business objectives while trained professionals execute the event.",
            },
          },
          {
            "@type": "Question",
            name: "How much does corporate event staffing cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Corporate event staffing rates vary based on role complexity, market, and event duration. Registration staff and ushers typically cost $35 to $55 per hour, event coordinators range from $50 to $75 per hour, AV technicians run $55 to $85 per hour, and VIP hosts or emcees can cost $65 to $95 per hour. Premium markets like New York City, San Francisco, and Los Angeles command higher rates. Air Fresh Marketing provides all-inclusive pricing that covers recruitment, training, uniforms, management, and real-time reporting.",
            },
          },
          {
            "@type": "Question",
            name: "How far in advance should I book corporate event staff?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For optimal staff selection and thorough training, we recommend booking corporate event staff 3 to 6 weeks before your event for standard corporate functions and 6 to 10 weeks in advance for large-scale conferences or multi-day events. However, Air Fresh Marketing maintains active talent pools in over 50 cities and can often fulfill urgent corporate staffing requests within 48 to 72 hours in most major markets. Rush bookings may carry a 15 to 25 percent premium.",
            },
          },
          {
            "@type": "Question",
            name: "What types of corporate events can you staff?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Air Fresh Marketing provides staffing for all types of corporate events including conferences and seminars, trade shows and expos, product launches, galas and awards ceremonies, corporate retreats and team-building events, shareholder meetings and annual general meetings, grand openings and ribbon cuttings, holiday parties and corporate celebrations, corporate activations and brand experiences, executive summits, board meetings, press conferences, and networking events.",
            },
          },
          {
            "@type": "Question",
            name: "Do your corporate event staff receive brand-specific training?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, every corporate event staff member receives comprehensive brand-specific training before deployment. Our training process includes a digital brand guide with company messaging and values, video-based product or service training modules with knowledge assessments, protocol briefings for VIP interactions and corporate culture alignment, dress code and professional appearance standards, and a pre-event walkthrough of venue layout and logistics. This ensures every team member represents your brand with the professionalism and accuracy your organization demands.",
            },
          },
          {
            "@type": "Question",
            name: "Can you staff multi-day corporate conferences in multiple cities?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. Multi-city and multi-day corporate event staffing is one of Air Fresh Marketing's core capabilities. With pre-vetted talent pools in over 50 cities across the United States, we can deploy consistent, trained staff for national conference tours, regional roadshows, and simultaneous corporate activations. You get a single point of contact, unified training standards, centralized reporting dashboards, and consistent quality across every market — eliminating the complexity of coordinating with multiple local agencies.",
            },
          },
          {
            "@type": "Question",
            name: "What is the difference between corporate event staffing and general temp staffing?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Corporate event staffing is a specialized discipline focused on professional corporate environments, while general temp staffing provides basic labor across all industries. Corporate event staff from Air Fresh Marketing are specifically trained in executive-level hospitality, brand representation, guest engagement, and event logistics. They undergo background checks, receive custom brand training, check in via GPS-verified mobile apps, and are managed by experienced field supervisors — capabilities that general temp agencies simply do not provide.",
            },
          },
          {
            "@type": "Question",
            name: "How do you ensure quality and accountability for corporate event staff?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Air Fresh Marketing ensures quality through a multi-layered accountability system. Every staff member passes a comprehensive background check and professional interview screening. Before each event, staff complete brand-specific training with verified assessments. On event day, GPS-verified check-ins confirm on-time arrival at the correct venue. Dedicated field managers provide on-site oversight, and real-time reporting dashboards let clients monitor staff performance as it happens. Post-event recaps with photos, metrics, and client feedback are delivered within 24 hours.",
            },
          },
        ],
      },
    ],
  };

  const cities = [
    { name: "New York City", slug: "new-york-city" },
    { name: "Los Angeles", slug: "los-angeles" },
    { name: "Chicago", slug: "chicago" },
    { name: "Houston", slug: "houston" },
    { name: "Phoenix", slug: "phoenix" },
    { name: "Dallas", slug: "dallas" },
    { name: "San Francisco", slug: "san-francisco" },
    { name: "Austin", slug: "austin" },
    { name: "Denver", slug: "denver" },
    { name: "Miami", slug: "miami" },
    { name: "Atlanta", slug: "atlanta" },
    { name: "Seattle", slug: "seattle" },
    { name: "Boston", slug: "boston" },
    { name: "Nashville", slug: "nashville" },
    { name: "San Diego", slug: "san-diego" },
    { name: "Orlando", slug: "orlando" },
    { name: "Las Vegas", slug: "las-vegas" },
    { name: "Philadelphia", slug: "philadelphia" },
    { name: "Minneapolis", slug: "minneapolis" },
    { name: "Charlotte", slug: "charlotte" },
    { name: "Portland", slug: "portland" },
    { name: "Tampa", slug: "tampa" },
    { name: "San Antonio", slug: "san-antonio" },
    { name: "Washington DC", slug: "washington-dc" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#001F3F] to-[#003366] py-20 md:py-28">
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
            <span className="text-[#00C853]">Corporate Event Staffing</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Corporate Event Staffing That Elevates Your Brand
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Corporate event staffing solutions built for Fortune 500 companies, mid-market enterprises, and fast-growing startups. Air Fresh Marketing delivers trained, professional event staff for conferences, galas, product launches, and corporate activations in 50+ cities nationwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/get-quote"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#00C853] hover:bg-[#00E676] text-white font-semibold rounded-lg transition-colors text-lg"
                >
                  Get a Free Quote
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[#001F3F] font-semibold rounded-lg transition-colors text-lg"
                >
                  Call (303) 720-6060
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <p className="text-4xl font-bold text-[#00C853]">50+</p>
                <p className="text-gray-200 mt-2">Cities Covered</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <p className="text-4xl font-bold text-[#00C853]">20+</p>
                <p className="text-gray-200 mt-2">Years Experience</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <p className="text-4xl font-bold text-[#00C853]">300+</p>
                <p className="text-gray-200 mt-2">Brands Served</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <p className="text-4xl font-bold text-[#00C853]">10K+</p>
                <p className="text-gray-200 mt-2">Events Staffed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Corporate Event Staffing */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-8">
            What Is Corporate Event Staffing?
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Corporate event staffing is the strategic process of sourcing, vetting, training, and deploying professional personnel to support and execute corporate events of all sizes and complexities. Unlike general temporary staffing, corporate event staffing requires specialized talent who understand professional business environments, executive-level hospitality, brand representation, and the unique demands of high-profile corporate functions.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At Air Fresh Marketing, our corporate event staffing solutions encompass every touchpoint of your event experience. From the moment your first guest arrives to the final breakdown, our trained professionals ensure seamless execution that reflects the professionalism and prestige your brand demands. We have been delivering exceptional corporate event staffing since 2004, serving Fortune 500 companies, government agencies, nonprofit organizations, and emerging brands across the United States.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you need a team of five registration specialists for a one-day seminar or a crew of fifty coordinators, brand ambassadors, and hospitality professionals for a week-long national conference, our corporate event staffing platform scales to meet your exact requirements. Every staff member is background-checked, brand-trained, and managed by experienced field supervisors who ensure quality at every stage of your event.
              </p>
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The corporate events landscape has evolved dramatically over the past decade. Today's attendees expect personalized, technology-driven experiences that rival the best consumer activations. Corporate event staffing has adapted to meet these expectations, with professionals who are skilled in digital check-in platforms, lead retrieval technology, audience engagement tools, and hybrid event production. Our corporate event staff are not simply warm bodies filling space — they are trained brand representatives equipped with the skills and technology to create measurable value for your organization.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Effective corporate event staffing begins with understanding your objectives. Are you launching a product and need staff who can articulate technical specifications? Hosting a gala where VIP guests require white-glove hospitality? Running a multi-track conference where logistics coordination is critical? Each scenario demands a different staffing profile, and our corporate event staffing consultants work with you to define the ideal team composition, skill requirements, and training protocols for your specific event.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With Air Fresh Marketing as your corporate event staffing partner, you gain access to a nationwide network of over 15,000 pre-vetted professionals, proprietary technology for real-time staff management, and two decades of operational expertise across every type of corporate event imaginable. We are not just a staffing vendor — we are an extension of your team, committed to delivering the polished, professional presence your corporate events deserve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Corporate Events We Staff */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-4">
            Types of Corporate Events We Staff
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            Air Fresh Marketing provides corporate event staffing for the full spectrum of professional functions. Our teams are trained to deliver flawless execution regardless of event format, scale, or complexity.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#001F3F] rounded-lg flex items-center justify-center mb-4">
                <span className="text-[#00C853] text-xl font-bold">01</span>
              </div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">Conferences &amp; Seminars</h3>
              <p className="text-gray-600">
                Multi-day conference staffing including registration management, session moderators, wayfinding assistants, breakout room coordinators, and speaker liaisons. We handle events from 50 to 50,000+ attendees with the same precision and professionalism. Our conference staff are experienced with platforms like Cvent, Eventbrite, and Bizzabo for seamless digital integration.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#001F3F] rounded-lg flex items-center justify-center mb-4">
                <span className="text-[#00C853] text-xl font-bold">02</span>
              </div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">Trade Shows &amp; Expos</h3>
              <p className="text-gray-600">
                Professional <Link href="/services/trade-show-staffing" className="text-[#00C853] hover:underline">trade show staff</Link> including booth personnel, product demonstrators, lead capture specialists, and traffic drivers. Our trade show teams are trained in consultative selling, lead qualification, and brand storytelling to maximize your ROI on the exhibition floor.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#001F3F] rounded-lg flex items-center justify-center mb-4">
                <span className="text-[#00C853] text-xl font-bold">03</span>
              </div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">Product Launches</h3>
              <p className="text-gray-600">
                High-energy product launch staffing with <Link href="/brand-ambassador-agency" className="text-[#00C853] hover:underline">brand ambassadors</Link>, product demonstrators, media liaisons, and experience guides. Our launch teams create buzz, drive engagement, and ensure your new product makes the impact it deserves. From tech unveilings to consumer goods launches, we bring the energy and expertise to make your moment unforgettable.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#001F3F] rounded-lg flex items-center justify-center mb-4">
                <span className="text-[#00C853] text-xl font-bold">04</span>
              </div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">Galas &amp; Awards Ceremonies</h3>
              <p className="text-gray-600">
                White-glove hospitality staffing for black-tie galas, awards dinners, charity events, and formal corporate celebrations. Our gala staff are trained in fine dining service protocols, VIP escort procedures, stage management, and the refined etiquette that formal corporate events demand. We ensure every guest feels like the most important person in the room.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#001F3F] rounded-lg flex items-center justify-center mb-4">
                <span className="text-[#00C853] text-xl font-bold">05</span>
              </div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">Corporate Retreats</h3>
              <p className="text-gray-600">
                Retreat and team-building event staffing including activity facilitators, logistics coordinators, registration teams, and hospitality staff. Whether your retreat is at a mountain resort, urban venue, or remote destination, our staff handle the operational details so your team can focus on connection, strategy, and collaboration.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#001F3F] rounded-lg flex items-center justify-center mb-4">
                <span className="text-[#00C853] text-xl font-bold">06</span>
              </div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">Shareholder Meetings</h3>
              <p className="text-gray-600">
                Professional staffing for annual general meetings, investor days, and shareholder events. Our teams manage credentialing, voting logistics, security coordination, media management, and executive hospitality with the discretion and precision these high-stakes events require. Experience with SEC compliance protocols and proxy voting procedures.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#001F3F] rounded-lg flex items-center justify-center mb-4">
                <span className="text-[#00C853] text-xl font-bold">07</span>
              </div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">Grand Openings</h3>
              <p className="text-gray-600">
                Grand opening and ribbon-cutting event staff including greeters, brand ambassadors, crowd management teams, media coordinators, and experience hosts. We create the energy and organization that transforms a location opening into a memorable brand moment. Our teams drive foot traffic, manage queues, and create shareable moments for social media amplification.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#001F3F] rounded-lg flex items-center justify-center mb-4">
                <span className="text-[#00C853] text-xl font-bold">08</span>
              </div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">Holiday Parties &amp; Celebrations</h3>
              <p className="text-gray-600">
                Corporate celebration staffing for holiday parties, milestone events, employee appreciation events, and company anniversaries. Our hospitality teams manage guest reception, coat check, entertainment coordination, gift distribution, and all the logistics that make corporate celebrations feel special and professionally executed.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#001F3F] rounded-lg flex items-center justify-center mb-4">
                <span className="text-[#00C853] text-xl font-bold">09</span>
              </div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">Corporate Activations</h3>
              <p className="text-gray-600">
                <Link href="/experiential-marketing-agency" className="text-[#00C853] hover:underline">Experiential marketing</Link> and corporate activation staffing including experience guides, interactive technology operators, data capture specialists, and brand storytellers. Our activation teams transform corporate messaging into immersive brand experiences that engage audiences and generate measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Event Staff Roles */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-4">
            Corporate Event Staff Roles We Provide
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            Every corporate event requires a unique mix of talent. Air Fresh Marketing provides specialized professionals across all key event roles, each trained to deliver exceptional performance in corporate environments.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-gray-200 rounded-xl p-6 hover:border-[#00C853] transition-colors">
              <h3 className="text-lg font-bold text-[#001F3F] mb-3">Event Coordinators</h3>
              <p className="text-gray-600 text-sm mb-4">
                Senior-level professionals who manage event flow, coordinate vendors, troubleshoot issues in real-time, and serve as the operational backbone of your corporate event. Our coordinators have 3+ years of corporate event experience.
              </p>
              <p className="text-[#00C853] font-semibold text-sm">$50 - $75/hour</p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 hover:border-[#00C853] transition-colors">
              <h3 className="text-lg font-bold text-[#001F3F] mb-3">Registration Staff</h3>
              <p className="text-gray-600 text-sm mb-4">
                Trained check-in professionals experienced with badge printing systems, QR code scanners, and event registration platforms. They ensure smooth arrivals, manage queues, and provide first-impression hospitality that sets the tone for your event.
              </p>
              <p className="text-[#00C853] font-semibold text-sm">$35 - $55/hour</p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 hover:border-[#00C853] transition-colors">
              <h3 className="text-lg font-bold text-[#001F3F] mb-3">AV Technicians</h3>
              <p className="text-gray-600 text-sm mb-4">
                Certified audio-visual professionals who manage presentation technology, microphone systems, lighting rigs, live streaming setups, and hybrid event production. They ensure your speakers and content are delivered flawlessly.
              </p>
              <p className="text-[#00C853] font-semibold text-sm">$55 - $85/hour</p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 hover:border-[#00C853] transition-colors">
              <h3 className="text-lg font-bold text-[#001F3F] mb-3">Brand Ambassadors</h3>
              <p className="text-gray-600 text-sm mb-4">
                Charismatic, articulate professionals who represent your brand through product demonstrations, guest engagement, lead generation, and experiential activations. Our <Link href="/brand-ambassador-agency" className="text-[#00C853] hover:underline">brand ambassadors</Link> are trained storytellers.
              </p>
              <p className="text-[#00C853] font-semibold text-sm">$40 - $65/hour</p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 hover:border-[#00C853] transition-colors">
              <h3 className="text-lg font-bold text-[#001F3F] mb-3">Hospitality Staff</h3>
              <p className="text-gray-600 text-sm mb-4">
                Professional hospitality personnel including servers, bartenders, coat check attendants, and guest services representatives. Trained in formal service protocols, dietary accommodation management, and corporate entertainment standards.
              </p>
              <p className="text-[#00C853] font-semibold text-sm">$35 - $60/hour</p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 hover:border-[#00C853] transition-colors">
              <h3 className="text-lg font-bold text-[#001F3F] mb-3">Ushers &amp; Wayfinders</h3>
              <p className="text-gray-600 text-sm mb-4">
                Friendly, knowledgeable staff who guide attendees through complex venues, manage seating arrangements, control room capacity, and ensure smooth traffic flow between sessions, breakout rooms, and networking areas.
              </p>
              <p className="text-[#00C853] font-semibold text-sm">$30 - $50/hour</p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 hover:border-[#00C853] transition-colors">
              <h3 className="text-lg font-bold text-[#001F3F] mb-3">VIP Hosts</h3>
              <p className="text-gray-600 text-sm mb-4">
                Executive-level hospitality professionals who manage VIP lounges, speaker green rooms, and executive experiences. Trained in C-suite protocol, confidentiality standards, and the elevated service expectations of senior leadership and high-profile guests.
              </p>
              <p className="text-[#00C853] font-semibold text-sm">$55 - $80/hour</p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 hover:border-[#00C853] transition-colors">
              <h3 className="text-lg font-bold text-[#001F3F] mb-3">Emcees &amp; Moderators</h3>
              <p className="text-gray-600 text-sm mb-4">
                Professional speakers who host main-stage sessions, moderate panel discussions, facilitate Q&amp;A sessions, and maintain audience energy throughout your event. Available for both in-person and virtual/hybrid formats with teleprompter experience.
              </p>
              <p className="text-[#00C853] font-semibold text-sm">$65 - $95/hour</p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 hover:border-[#00C853] transition-colors">
              <h3 className="text-lg font-bold text-[#001F3F] mb-3">Lead Capture Specialists</h3>
              <p className="text-gray-600 text-sm mb-4">
                Data-driven professionals skilled in lead retrieval technology, badge scanning, survey administration, and attendee engagement tracking. They ensure every valuable interaction is captured and qualified for your sales pipeline.
              </p>
              <p className="text-[#00C853] font-semibold text-sm">$40 - $60/hour</p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 hover:border-[#00C853] transition-colors">
              <h3 className="text-lg font-bold text-[#001F3F] mb-3">Setup &amp; Breakdown Crews</h3>
              <p className="text-gray-600 text-sm mb-4">
                Experienced event production staff who handle venue setup, signage installation, furniture arrangement, technology staging, and post-event breakdown. Efficient, careful, and experienced with union venue requirements and loading dock logistics.
              </p>
              <p className="text-[#00C853] font-semibold text-sm">$30 - $50/hour</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 md:py-20 bg-[#001F3F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Industries We Serve with Corporate Event Staffing
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl">
            Air Fresh Marketing has deep experience staffing corporate events across diverse industries. Our teams understand the unique culture, compliance requirements, and audience expectations of each sector.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#00C853] mb-3">Technology</h3>
              <p className="text-gray-300 text-sm">
                Developer conferences, product launches, hackathons, user summits, and SaaS industry events. Our tech-savvy staff understand demos, APIs, and developer culture — ensuring credible representation for brands like startups and enterprise software companies alike.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#00C853] mb-3">Pharmaceutical &amp; Healthcare</h3>
              <p className="text-gray-300 text-sm">
                Medical conferences, HCP symposiums, patient advocacy events, and pharmaceutical product launches. Staff trained in HIPAA awareness, pharma compliance protocols, and medical terminology for credible interactions with healthcare professionals.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#00C853] mb-3">Finance &amp; Banking</h3>
              <p className="text-gray-300 text-sm">
                Investor conferences, shareholder meetings, fintech launches, and financial advisor summits. Our staff understand regulatory sensitivity, confidentiality requirements, and the conservative professional standards expected in financial services environments.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#00C853] mb-3">Automotive</h3>
              <p className="text-gray-300 text-sm">
                Auto shows, dealer events, ride-and-drive experiences, and new model reveals. Product specialists trained on vehicle features, performance specifications, and competitive positioning to deliver compelling presentations to consumers and media.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#00C853] mb-3">Consumer Goods &amp; CPG</h3>
              <p className="text-gray-300 text-sm">
                Product sampling events, retail activations, influencer summits, and brand experience centers. Staff skilled in consumer engagement, product demonstration, sampling distribution, and collecting consumer insights for brand teams.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#00C853] mb-3">Professional Services</h3>
              <p className="text-gray-300 text-sm">
                Law firm events, consulting firm retreats, accounting industry conferences, and professional development summits. Staff who understand the nuances of B2B professional environments and can interact credibly with senior executives.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#00C853] mb-3">Energy &amp; Utilities</h3>
              <p className="text-gray-300 text-sm">
                Industry conferences, sustainability summits, community engagement events, and regulatory hearings. Our teams are trained on safety protocols, environmental messaging, and the community relations aspects of energy sector events.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#00C853] mb-3">Nonprofit &amp; Government</h3>
              <p className="text-gray-300 text-sm">
                Fundraising galas, advocacy events, government summits, and community outreach programs. Staff experienced with donor relations, political protocol, security coordination, and the mission-driven culture of nonprofit and public sector organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Corporate Event Staffing Process */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-4">
            Our Corporate Event Staffing Process
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            Air Fresh Marketing follows a proven six-step corporate event staffing process that ensures quality, consistency, and measurable results for every engagement. Here is how we deliver excellence from initial consultation to post-event reporting.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative">
              <div className="w-14 h-14 bg-[#00C853] rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">Consultation &amp; Scoping</h3>
              <p className="text-gray-600">
                We begin every corporate event staffing engagement with a thorough discovery call. Our account managers learn about your event objectives, brand standards, audience demographics, venue logistics, and success metrics. This consultation ensures we understand not just what you need, but why — enabling us to recommend the ideal staffing mix, skill profiles, and team size for maximum impact. We also review past event data, if available, to benchmark performance expectations.
              </p>
            </div>

            <div className="relative">
              <div className="w-14 h-14 bg-[#00C853] rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">Talent Selection &amp; Matching</h3>
              <p className="text-gray-600">
                Using our proprietary database of 15,000+ pre-vetted professionals, we curate a custom team matched to your specific requirements. We evaluate candidates on industry experience, language skills, physical appearance standards, personality fit, and technical competencies. For executive events, we conduct additional screening including professional reference checks and portfolio reviews. You approve all staff selections before deployment.
              </p>
            </div>

            <div className="relative">
              <div className="w-14 h-14 bg-[#00C853] rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">Brand-Specific Training</h3>
              <p className="text-gray-600">
                Every staff member completes comprehensive brand training customized for your event. This includes a digital brand guide with messaging frameworks and talking points, video-based training modules with knowledge assessments, role-specific protocol briefings, venue walkthroughs and logistics orientation, and dress code and professional appearance standards. Our training ensures every team member is a credible, confident extension of your brand.
              </p>
            </div>

            <div className="relative">
              <div className="w-14 h-14 bg-[#00C853] rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">Deployment &amp; Check-In</h3>
              <p className="text-gray-600">
                On event day, our proprietary technology platform manages staff deployment with military precision. GPS-verified check-ins confirm on-time arrival at the correct venue entrance. Field managers conduct pre-shift briefings to review day-of logistics, address questions, and confirm assignments. Backup staff are on standby in every market to cover any last-minute needs. You receive real-time notifications as your team checks in and begins their shifts.
              </p>
            </div>

            <div className="relative">
              <div className="w-14 h-14 bg-[#00C853] rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">5</span>
              </div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">On-Site Management</h3>
              <p className="text-gray-600">
                Dedicated field managers provide hands-on supervision throughout your event. They monitor staff performance, manage break rotations, handle real-time adjustments, coordinate with your internal team, and troubleshoot any issues before they impact guest experience. Our management team uses real-time communication tools to maintain constant visibility across multi-room and multi-floor venues. Performance metrics are tracked throughout the day.
              </p>
            </div>

            <div className="relative">
              <div className="w-14 h-14 bg-[#00C853] rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">6</span>
              </div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">Reporting &amp; Analytics</h3>
              <p className="text-gray-600">
                Within 24 hours of event conclusion, you receive a comprehensive post-event report including attendance and interaction metrics, staff performance evaluations, photo documentation, guest feedback compilation, lead capture data (if applicable), and recommendations for future events. Our reporting transforms raw event data into actionable insights that inform your future corporate event strategy and demonstrate clear ROI to stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Event Staffing Pricing */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-4">
            Corporate Event Staffing Pricing
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            Transparent, all-inclusive corporate event staffing rates with no hidden fees. Our pricing includes recruitment, training, management, technology, and post-event reporting. Visit our <Link href="/pricing" className="text-[#00C853] hover:underline">pricing page</Link> for detailed rate cards.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-[#001F3F] mb-2">Standard Roles</h3>
              <p className="text-3xl font-bold text-[#00C853] mb-2">$35 - $55<span className="text-lg text-gray-500">/hour</span></p>
              <p className="text-gray-600 text-sm mb-4">Registration staff, ushers, wayfinders, setup crews, hospitality assistants</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2"><span className="text-[#00C853] font-bold">&#10003;</span> Background-checked</li>
                <li className="flex items-start gap-2"><span className="text-[#00C853] font-bold">&#10003;</span> Brand training included</li>
                <li className="flex items-start gap-2"><span className="text-[#00C853] font-bold">&#10003;</span> GPS-verified check-in</li>
                <li className="flex items-start gap-2"><span className="text-[#00C853] font-bold">&#10003;</span> Field management</li>
                <li className="flex items-start gap-2"><span className="text-[#00C853] font-bold">&#10003;</span> Post-event reporting</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border-2 border-[#00C853] relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#00C853] text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-2">Professional Roles</h3>
              <p className="text-3xl font-bold text-[#00C853] mb-2">$50 - $75<span className="text-lg text-gray-500">/hour</span></p>
              <p className="text-gray-600 text-sm mb-4">Event coordinators, brand ambassadors, lead capture specialists, VIP hosts</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2"><span className="text-[#00C853] font-bold">&#10003;</span> Everything in Standard</li>
                <li className="flex items-start gap-2"><span className="text-[#00C853] font-bold">&#10003;</span> Advanced brand training</li>
                <li className="flex items-start gap-2"><span className="text-[#00C853] font-bold">&#10003;</span> Real-time reporting dashboard</li>
                <li className="flex items-start gap-2"><span className="text-[#00C853] font-bold">&#10003;</span> Client-approved selections</li>
                <li className="flex items-start gap-2"><span className="text-[#00C853] font-bold">&#10003;</span> Dedicated account manager</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-[#001F3F] mb-2">Specialist Roles</h3>
              <p className="text-3xl font-bold text-[#00C853] mb-2">$65 - $95<span className="text-lg text-gray-500">/hour</span></p>
              <p className="text-gray-600 text-sm mb-4">AV technicians, emcees, moderators, executive-level hospitality, technical demonstrators</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2"><span className="text-[#00C853] font-bold">&#10003;</span> Everything in Professional</li>
                <li className="flex items-start gap-2"><span className="text-[#00C853] font-bold">&#10003;</span> Certified specialists</li>
                <li className="flex items-start gap-2"><span className="text-[#00C853] font-bold">&#10003;</span> Portfolio/reel review</li>
                <li className="flex items-start gap-2"><span className="text-[#00C853] font-bold">&#10003;</span> Extended rehearsal time</li>
                <li className="flex items-start gap-2"><span className="text-[#00C853] font-bold">&#10003;</span> Priority scheduling</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-[#001F3F] mb-4">Factors That Affect Corporate Event Staffing Pricing</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-[#001F3F] mb-2">Market Location</h4>
                <p className="text-gray-600 text-sm">Premium markets like NYC, SF, and LA typically run 15-25% above standard rates due to higher cost of living and talent competition.</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#001F3F] mb-2">Event Duration</h4>
                <p className="text-gray-600 text-sm">Multi-day events and long-term programs qualify for volume discounts of 10-20% off standard hourly rates.</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#001F3F] mb-2">Team Size</h4>
                <p className="text-gray-600 text-sm">Larger teams (10+ staff) receive scaled pricing benefits. Enterprise accounts with recurring needs receive preferred rates.</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#001F3F] mb-2">Specialization Level</h4>
                <p className="text-gray-600 text-sm">Roles requiring certifications, bilingual skills, or niche industry expertise command premium rates due to limited talent availability.</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#001F3F] mb-2">Lead Time</h4>
                <p className="text-gray-600 text-sm">Rush bookings (under 72 hours) may carry a 15-25% premium. Advance booking of 3+ weeks ensures standard pricing and optimal talent selection.</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#001F3F] mb-2">Custom Requirements</h4>
                <p className="text-gray-600 text-sm">Special uniforms, extended training, overnight shifts, or travel requirements may adjust pricing. All customizations are quoted transparently.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities We Cover */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-4">
            Corporate Event Staffing Cities We Cover
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            Air Fresh Marketing provides corporate event staffing in 50+ cities across the United States. Our local talent pools mean you get professionals who know each market combined with consistent national quality standards.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/cities/${city.slug}`}
                className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 hover:border-[#00C853] hover:bg-green-50 transition-colors"
              >
                <span className="text-[#00C853]">&#9679;</span>
                <span className="text-[#001F3F] font-medium">{city.name}</span>
              </Link>
            ))}
          </div>

          <p className="text-gray-500 mt-8 text-center">
            Do not see your city? We cover 50+ markets nationwide.{" "}
            <Link href="/contact" className="text-[#00C853] hover:underline">
              Contact us
            </Link>{" "}
            to discuss your location.
          </p>
        </div>
      </section>

      {/* Why Fortune 500 Companies Choose AirFresh */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#001F3F] to-[#003366]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Fortune 500 Companies Choose Air Fresh Marketing
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl">
            Since 2004, the world&apos;s most recognizable brands have trusted Air Fresh Marketing for their corporate event staffing needs. Here is what sets us apart from other staffing agencies.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-xl font-bold text-[#00C853] mb-3">20+ Years of Corporate Experience</h3>
              <p className="text-gray-200">
                Founded in 2004, Air Fresh Marketing has two decades of corporate event staffing expertise. We have staffed thousands of corporate events across every industry, format, and scale — giving us unmatched operational knowledge and a vast network of proven professionals.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-xl font-bold text-[#00C853] mb-3">Proprietary Technology Platform</h3>
              <p className="text-gray-200">
                Our custom-built staffing technology provides GPS-verified check-ins, real-time reporting dashboards, digital training delivery with knowledge verification, automated scheduling and communication, and client-facing portals for full transparency into your event team.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-xl font-bold text-[#00C853] mb-3">Nationwide Scale, Local Expertise</h3>
              <p className="text-gray-200">
                With active talent pools in 50+ cities, we combine national reach with local market knowledge. Your corporate events in New York, Los Angeles, Chicago, Miami, and everywhere in between are staffed by professionals who know the venues, culture, and logistics of each market.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-xl font-bold text-[#00C853] mb-3">Rigorous Quality Standards</h3>
              <p className="text-gray-200">
                Every corporate event staff member passes comprehensive background checks, professional interviews, and skill assessments. We maintain a 97% client satisfaction rate because we never compromise on the quality of talent representing your brand at corporate events.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-xl font-bold text-[#00C853] mb-3">Dedicated Account Management</h3>
              <p className="text-gray-200">
                Every corporate client receives a dedicated account manager who understands your brand, culture, and event objectives. No call centers, no rotating contacts — one experienced professional who owns your success and builds institutional knowledge across your event programs.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-xl font-bold text-[#00C853] mb-3">End-to-End Service Model</h3>
              <p className="text-gray-200">
                From initial consultation through post-event analytics, Air Fresh Marketing manages the entire corporate event staffing lifecycle. We integrate seamlessly with your internal teams, event producers, and venue partners — functioning as a true extension of your organization, not just a vendor.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-6 text-lg">
              Ready to experience the difference? Join 300+ brands that trust Air Fresh Marketing for corporate event staffing.
            </p>
            <Link
              href="/get-quote"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#00C853] hover:bg-[#00E676] text-white font-semibold rounded-lg transition-colors text-lg"
            >
              Request a Corporate Staffing Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-8">
            Related Corporate Event Services
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl">
            Corporate event staffing is just one part of our comprehensive event solutions. Explore our related services to build a complete event strategy.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/services/event-management" className="block p-6 border border-gray-200 rounded-xl hover:border-[#00C853] hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-[#001F3F] mb-2">Event Management</h3>
              <p className="text-gray-600 text-sm">Full-service event management from concept development through execution and post-event analysis.</p>
            </Link>
            <Link href="/services/convention-staffing" className="block p-6 border border-gray-200 rounded-xl hover:border-[#00C853] hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-[#001F3F] mb-2">Convention Staffing</h3>
              <p className="text-gray-600 text-sm">Specialized convention and expo staffing with trained booth personnel and lead generation teams.</p>
            </Link>
            <Link href="/services/experiential-marketing" className="block p-6 border border-gray-200 rounded-xl hover:border-[#00C853] hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-[#001F3F] mb-2">Experiential Marketing</h3>
              <p className="text-gray-600 text-sm">Immersive brand experiences that transform corporate events into memorable audience engagements.</p>
            </Link>
            <Link href="/event-staffing-agency" className="block p-6 border border-gray-200 rounded-xl hover:border-[#00C853] hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-[#001F3F] mb-2">Event Staffing Agency</h3>
              <p className="text-gray-600 text-sm">Our full suite of event staffing solutions covering brand ambassadors, promotional models, and more.</p>
            </Link>
            <Link href="/services/trade-show-staffing" className="block p-6 border border-gray-200 rounded-xl hover:border-[#00C853] hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-[#001F3F] mb-2">Trade Show Staffing</h3>
              <p className="text-gray-600 text-sm">Expert trade show staff for booth management, product demos, and lead capture at exhibitions.</p>
            </Link>
            <Link href="/promotional-staffing-agency" className="block p-6 border border-gray-200 rounded-xl hover:border-[#00C853] hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-[#001F3F] mb-2">Promotional Staffing</h3>
              <p className="text-gray-600 text-sm">Promotional staff and street teams for product launches, sampling campaigns, and brand activations.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-12">
            Corporate Event Staffing FAQs
          </h2>

          <div className="space-y-6 max-w-4xl">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">What is corporate event staffing?</h3>
              <p className="text-gray-600 leading-relaxed">
                Corporate event staffing is the process of sourcing, training, and deploying professional personnel to manage and support corporate functions such as conferences, galas, product launches, shareholder meetings, trade shows, and corporate retreats. A specialized corporate event staffing agency like Air Fresh Marketing handles recruitment, background checks, brand-specific training, on-site management, and post-event reporting so that organizations can focus on their business objectives while trained professionals execute the event flawlessly.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">How much does corporate event staffing cost?</h3>
              <p className="text-gray-600 leading-relaxed">
                Corporate event staffing rates vary based on role complexity, market location, and event duration. Registration staff and ushers typically cost $35 to $55 per hour, event coordinators range from $50 to $75 per hour, AV technicians run $55 to $85 per hour, and VIP hosts or emcees can cost $65 to $95 per hour. Premium markets like New York City, San Francisco, and Los Angeles command higher rates. Air Fresh Marketing provides all-inclusive pricing that covers recruitment, training, uniforms, management, and real-time reporting with no hidden fees.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">How far in advance should I book corporate event staff?</h3>
              <p className="text-gray-600 leading-relaxed">
                For optimal staff selection and thorough training, we recommend booking corporate event staff 3 to 6 weeks before your event for standard corporate functions and 6 to 10 weeks in advance for large-scale conferences or multi-day events. However, Air Fresh Marketing maintains active talent pools in over 50 cities and can often fulfill urgent corporate staffing requests within 48 to 72 hours in most major markets. Rush bookings may carry a 15 to 25 percent premium.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">What types of corporate events can you staff?</h3>
              <p className="text-gray-600 leading-relaxed">
                Air Fresh Marketing provides staffing for all types of corporate events including conferences and seminars, trade shows and expos, product launches, galas and awards ceremonies, corporate retreats and team-building events, shareholder meetings and annual general meetings, grand openings and ribbon cuttings, holiday parties and corporate celebrations, corporate activations and brand experiences, executive summits, board meetings, press conferences, and networking events. No matter the format or scale, we have the talent and expertise to staff it professionally.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">Do your corporate event staff receive brand-specific training?</h3>
              <p className="text-gray-600 leading-relaxed">
                Yes, every corporate event staff member receives comprehensive brand-specific training before deployment. Our training process includes a digital brand guide with company messaging and values, video-based product or service training modules with knowledge assessments, protocol briefings for VIP interactions and corporate culture alignment, dress code and professional appearance standards, and a pre-event walkthrough of venue layout and logistics. This ensures every team member represents your brand with the professionalism and accuracy your organization demands.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">Can you staff multi-day corporate conferences in multiple cities?</h3>
              <p className="text-gray-600 leading-relaxed">
                Absolutely. Multi-city and multi-day corporate event staffing is one of Air Fresh Marketing&apos;s core capabilities. With pre-vetted talent pools in over 50 cities across the United States, we can deploy consistent, trained staff for national conference tours, regional roadshows, and simultaneous corporate activations. You get a single point of contact, unified training standards, centralized reporting dashboards, and consistent quality across every market — eliminating the complexity of coordinating with multiple local agencies.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">What is the difference between corporate event staffing and general temp staffing?</h3>
              <p className="text-gray-600 leading-relaxed">
                Corporate event staffing is a specialized discipline focused on professional corporate environments, while general temp staffing provides basic labor across all industries. Corporate event staff from Air Fresh Marketing are specifically trained in executive-level hospitality, brand representation, guest engagement, and event logistics. They undergo background checks, receive custom brand training, check in via GPS-verified mobile apps, and are managed by experienced field supervisors — capabilities that general temp agencies simply do not provide. The result is a measurably higher standard of professionalism and performance.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">How do you ensure quality and accountability for corporate event staff?</h3>
              <p className="text-gray-600 leading-relaxed">
                Air Fresh Marketing ensures quality through a multi-layered accountability system. Every staff member passes a comprehensive background check and professional interview screening. Before each event, staff complete brand-specific training with verified assessments. On event day, GPS-verified check-ins confirm on-time arrival at the correct venue. Dedicated field managers provide on-site oversight, and real-time reporting dashboards let clients monitor staff performance as it happens. Post-event recaps with photos, metrics, and client feedback are delivered within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#001F3F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get Started with Corporate Event Staffing Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join 300+ brands that trust Air Fresh Marketing for their corporate event staffing needs. Get a customized quote within 24 hours and experience the difference that 20+ years of expertise makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-quote"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#00C853] hover:bg-[#00E676] text-white font-semibold rounded-lg transition-colors text-lg"
            >
              Get a Free Corporate Staffing Quote
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-[#001F3F] font-semibold rounded-lg transition-colors text-lg"
            >
              Call (303) 720-6060
            </Link>
          </div>
          <p className="text-gray-400 mt-8 text-sm">
            Air Fresh Marketing | 1580 N. Logan St., Suite 660, Denver, CO 80203 | (303) 720-6060 | Serving 50+ cities since 2004
          </p>
        </div>
      </section>
    </>
  );
}
