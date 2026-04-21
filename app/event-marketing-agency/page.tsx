import Link from "next/link";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Event Marketing Agency",
  description:
    "Full-service event marketing agency delivering brand activations, trade shows, product launches, experiential campaigns, and staffing solutions across 50+ cities nationwide.",
  provider: {
    "@type": "Organization",
    name: "Air Fresh Marketing",
    url: "https://www.airfreshmarketing.com",
    logo: "https://www.airfreshmarketing.com/logo.png",
    telephone: "(303) 720-6060",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1580 N. Logan St., Suite 660",
      addressLocality: "Denver",
      addressRegion: "CO",
      postalCode: "80203",
      addressCountry: "US",
    },
    foundingDate: "2004",
    areaServed: "United States",
  },
  serviceType: "Event Marketing",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
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
      name: "Event Marketing Agency",
      item: "https://www.airfreshmarketing.com/event-marketing-agency",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does an event marketing agency do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An event marketing agency plans, staffs, and executes live brand experiences such as trade shows, product launches, sampling campaigns, pop-up activations, mobile marketing tours, and corporate events. The agency handles everything from strategy and creative development to logistics, staffing, and post-event analytics so brands can focus on their core business while maximizing ROI from every live interaction.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to hire an event marketing agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Event marketing agency costs vary based on scope, location, staffing needs, and campaign duration. Small single-day activations may start around $5,000, while large-scale national tours can range from $50,000 to $500,000 or more. Air Fresh Marketing provides transparent pricing and customized proposals tailored to each client's budget and objectives.",
      },
    },
    {
      "@type": "Question",
      name: "How far in advance should I book an event marketing agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We recommend booking your event marketing agency at least 6 to 8 weeks before your event for standard activations and 3 to 6 months ahead for large-scale campaigns, national tours, or trade shows. Early planning allows time for strategy development, creative production, staff recruitment, and venue coordination to ensure flawless execution.",
      },
    },
    {
      "@type": "Question",
      name: "What types of events can an event marketing agency handle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full-service event marketing agency like Air Fresh Marketing handles trade show marketing, product launch events, pop-up experiences, sampling campaigns, mobile marketing tours, festival and concert activations, corporate events, conferences, sports marketing activations, retail promotions, grand openings, and experiential marketing campaigns of all sizes.",
      },
    },
    {
      "@type": "Question",
      name: "How do you measure event marketing ROI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We measure event marketing ROI through a combination of quantitative and qualitative metrics including consumer impressions, direct engagements, samples distributed, lead captures, social media mentions, earned media value, sales lift, cost per engagement, brand sentiment surveys, and post-event conversion tracking. Our proprietary technology platform provides real-time dashboards and comprehensive post-event reports.",
      },
    },
    {
      "@type": "Question",
      name: "Does Air Fresh Marketing provide event staff nationwide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Air Fresh Marketing maintains a vetted network of over 100,000 trained brand ambassadors, event staff, promotional models, and experiential marketing professionals across 50 or more cities in the United States. We handle recruitment, training, scheduling, and on-site management so you receive consistent, high-quality staffing no matter where your event takes place.",
      },
    },
    {
      "@type": "Question",
      name: "What industries benefit most from event marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Industries that benefit most from event marketing include consumer packaged goods, beverage and spirits, technology, automotive, health and wellness, fashion and beauty, financial services, and entertainment. Any brand looking to build awareness, generate leads, drive trial, or deepen customer loyalty through face-to-face engagement can achieve exceptional results with a strategic event marketing program.",
      },
    },
  ],
};

const cities = [
  { name: "New York", slug: "new-york" },
  { name: "Los Angeles", slug: "los-angeles" },
  { name: "Chicago", slug: "chicago" },
  { name: "Houston", slug: "houston" },
  { name: "Dallas", slug: "dallas" },
  { name: "Miami", slug: "miami" },
  { name: "Atlanta", slug: "atlanta" },
  { name: "Denver", slug: "denver" },
  { name: "San Francisco", slug: "san-francisco" },
  { name: "Seattle", slug: "seattle" },
  { name: "Phoenix", slug: "phoenix" },
  { name: "San Diego", slug: "san-diego" },
  { name: "Austin", slug: "austin" },
  { name: "Nashville", slug: "nashville" },
  { name: "Las Vegas", slug: "las-vegas" },
  { name: "Orlando", slug: "orlando" },
  { name: "Charlotte", slug: "charlotte" },
  { name: "Minneapolis", slug: "minneapolis" },
  { name: "Tampa", slug: "tampa" },
  { name: "Portland", slug: "portland" },
  { name: "Philadelphia", slug: "philadelphia" },
  { name: "Boston", slug: "boston" },
  { name: "Detroit", slug: "detroit" },
  { name: "Washington DC", slug: "washington-dc" },
];

export default function EventMarketingAgencyPage() {
  return (
    <>
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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#001F3F] to-[#003366] text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <nav className="mb-8 text-sm text-gray-300">
            <Link href="/" className="hover:text-[#00C853] transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link
              href="/services"
              className="hover:text-[#00C853] transition-colors"
            >
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#00C853]">Event Marketing Agency</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Event Marketing Agency That Drives Real Results
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Air Fresh Marketing is a full-service event marketing agency
            specializing in brand activations, trade shows, product launches,
            and experiential campaigns across 50+ cities nationwide. From
            strategy and creative development to trained event staff and
            post-event analytics, we deliver measurable outcomes for the
            world&apos;s most recognized brands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/get-quote"
              className="bg-[#00C853] hover:bg-[#00E676] text-[#001F3F] font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/contact"
              className="border-2 border-[#00C853] text-[#00C853] hover:bg-[#00C853] hover:text-[#001F3F] font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Contact Our Team
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-[#00C853]">
                20+
              </p>
              <p className="text-gray-300 mt-2">Years of Experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-[#00C853]">
                50+
              </p>
              <p className="text-gray-300 mt-2">Cities Nationwide</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-[#00C853]">
                1,000+
              </p>
              <p className="text-gray-300 mt-2">Events Executed</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-[#00C853]">
                4.9/5
              </p>
              <p className="text-gray-300 mt-2">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Event Marketing Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-8 text-center">
            What Is Event Marketing and Why Is It Essential?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Event marketing is the practice of promoting a brand, product, or
              service through interactive, in-person experiences. Unlike
              traditional advertising that relies on passive impressions, event
              marketing creates direct, face-to-face connections between brands
              and consumers. These live engagements produce emotional responses,
              build trust, and generate word-of-mouth advocacy that digital
              channels alone cannot replicate.
            </p>
            <p>
              As an experienced event marketing agency, Air Fresh Marketing
              understands that consumers today crave authentic experiences. A
              2024 study by the Event Marketing Institute found that 91 percent
              of consumers reported more positive feelings about a brand after
              attending an event, and 85 percent said they were likely to
              purchase after participating in an experiential activation.
              These statistics underscore why event marketing has become an
              indispensable component of modern brand strategy.
            </p>
            <p>
              When you partner with an event marketing agency like Air Fresh
              Marketing, you gain access to a team of strategists, producers,
              and field staff who specialize in turning concepts into
              high-impact live experiences. Our approach combines creative
              storytelling, data-driven planning, meticulous logistics, and
              trained{" "}
              <Link
                href="/brand-ambassador-agency"
                className="text-[#00C853] hover:underline font-semibold"
              >
                brand ambassadors
              </Link>{" "}
              to ensure every event achieves its goals, whether those goals are
              brand awareness, lead generation, product trial, or direct sales.
            </p>
            <p>
              Event marketing encompasses a broad spectrum of formats, from
              intimate VIP dinners and exclusive product reveals to massive
              festival activations and multi-city mobile marketing tours. What
              unites every event marketing initiative is the core principle of
              creating meaningful, memorable interactions that turn audience
              members into brand advocates. At Air Fresh Marketing, we have
              spent more than two decades perfecting this craft for brands
              across every industry and budget level.
            </p>
            <p>
              The strategic value of event marketing extends far beyond the
              event itself. Well-executed events generate social media content,
              press coverage, influencer partnerships, user-generated content,
              and long-term customer relationships. They provide rich
              first-party data that informs future marketing decisions and
              creates competitive advantages that competitors cannot easily
              replicate. When integrated with your broader{" "}
              <Link
                href="/services/experiential-marketing"
                className="text-[#00C853] hover:underline font-semibold"
              >
                experiential marketing
              </Link>{" "}
              strategy, events become a powerful engine for sustained brand
              growth.
            </p>
          </div>
        </div>
      </section>

      {/* Event Marketing Services Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-4 text-center">
            Event Marketing Services We Provide
          </h2>
          <p className="text-gray-600 text-lg text-center mb-12 max-w-3xl mx-auto">
            As a full-service event marketing agency, Air Fresh Marketing
            delivers end-to-end solutions for every type of live brand
            experience. Our comprehensive service portfolio ensures you have a
            single trusted partner for all your event marketing needs.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Trade Show Marketing */}
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow border-t-4 border-[#00C853]">
              <div className="text-4xl mb-4">&#127915;</div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">
                Trade Show Marketing
              </h3>
              <p className="text-gray-600 mb-4">
                Our event marketing agency delivers comprehensive trade show
                solutions including booth design consultation, trained{" "}
                <Link
                  href="/services/trade-show-staffing"
                  className="text-[#00C853] hover:underline"
                >
                  trade show staff
                </Link>
                , lead capture systems, product demonstrations, and attendee
                engagement strategies. We help brands stand out on crowded
                exhibition floors, drive meaningful booth traffic, and convert
                visitors into qualified leads. Our trade show teams are
                experienced in working major industry events from CES and SXSW
                to regional conferences and specialized expos.
              </p>
            </div>

            {/* Product Launch Events */}
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow border-t-4 border-[#00C853]">
              <div className="text-4xl mb-4">&#128640;</div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">
                Product Launch Events
              </h3>
              <p className="text-gray-600 mb-4">
                Launch your product with maximum impact through strategically
                planned launch events that generate buzz, media coverage, and
                consumer excitement. Our event marketing team handles venue
                selection, creative production, media outreach, influencer
                coordination, and on-site execution to ensure your product
                debut makes a lasting impression. From tech gadgets to consumer
                packaged goods, we have launched hundreds of products
                successfully across the country.
              </p>
            </div>

            {/* Pop-Up Experiences */}
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow border-t-4 border-[#00C853]">
              <div className="text-4xl mb-4">&#127978;</div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">
                Pop-Up Experiences
              </h3>
              <p className="text-gray-600 mb-4">
                Pop-up activations create urgency and exclusivity that drive
                consumer engagement. Our event marketing agency designs and
                executes immersive pop-up experiences in high-traffic retail
                locations, shopping centers, urban venues, and unexpected
                spaces. We handle permitting, build-out, staffing, and
                teardown while creating Instagram-worthy moments that extend
                your reach far beyond the physical footprint of the event. Pop-up
                experiences are ideal for brands seeking direct consumer
                interaction in targeted markets.
              </p>
            </div>

            {/* Sampling Campaigns */}
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow border-t-4 border-[#00C853]">
              <div className="text-4xl mb-4">&#127873;</div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">
                Sampling Campaigns
              </h3>
              <p className="text-gray-600 mb-4">
                Product{" "}
                <Link
                  href="/services/sampling"
                  className="text-[#00C853] hover:underline"
                >
                  sampling campaigns
                </Link>{" "}
                put your product directly into the hands of target consumers.
                Our event marketing agency manages every aspect of sampling
                programs, from demographic targeting and location scouting to
                trained brand ambassadors who can articulate your value
                proposition and collect real-time consumer feedback. We execute
                sampling activations at grocery stores, fitness centers,
                colleges, festivals, sporting events, and high-traffic urban
                locations throughout the United States.
              </p>
            </div>

            {/* Mobile Marketing Tours */}
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow border-t-4 border-[#00C853]">
              <div className="text-4xl mb-4">&#128662;</div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">
                Mobile Marketing Tours
              </h3>
              <p className="text-gray-600 mb-4">
                Take your brand on the road with multi-city mobile marketing
                tours that reach consumers in their own communities. Our event
                marketing agency coordinates vehicle wraps, custom buildouts,
                route planning, local permitting, staffing in each market, and
                logistics management across every tour stop. Mobile tours are
                an exceptionally effective way to generate nationwide awareness
                while maintaining the personal touch of local activations. We
                have managed tours spanning 10 to 50+ cities in a single
                campaign.
              </p>
            </div>

            {/* Festival Activations */}
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow border-t-4 border-[#00C853]">
              <div className="text-4xl mb-4">&#127926;</div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">
                Festival and Concert Activations
              </h3>
              <p className="text-gray-600 mb-4">
                Music festivals, food festivals, and cultural events draw
                massive, highly engaged audiences. Our event marketing agency
                creates branded festival activations that capture attention
                amid the excitement. We design interactive installations, photo
                experiences, charging stations, lounges, and product sampling
                zones that become integral parts of the festival experience.
                Our teams are experienced at Coachella, Lollapalooza, SXSW,
                Art Basel, and hundreds of regional events nationwide.
              </p>
            </div>

            {/* Corporate Event Marketing */}
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow border-t-4 border-[#00C853]">
              <div className="text-4xl mb-4">&#127970;</div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">
                Corporate Event Marketing
              </h3>
              <p className="text-gray-600 mb-4">
                From conferences and galas to team-building retreats and
                shareholder meetings, our{" "}
                <Link
                  href="/corporate-event-staffing"
                  className="text-[#00C853] hover:underline"
                >
                  corporate event marketing
                </Link>{" "}
                services ensure flawless execution at every touchpoint. Our
                event marketing agency provides registration management, guest
                coordination, audiovisual support, branded environments,
                professional event staff, and executive-level hospitality.
                We understand that corporate events reflect your brand identity
                and have the expertise to deliver experiences that impress
                stakeholders and strengthen business relationships.
              </p>
            </div>

            {/* Sports Marketing */}
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow border-t-4 border-[#00C853]">
              <div className="text-4xl mb-4">&#127941;</div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">
                Sports Marketing Activations
              </h3>
              <p className="text-gray-600 mb-4">
                Sports venues and events provide unparalleled access to
                passionate, loyal audiences. Our event marketing agency creates
                game-day activations, tailgate experiences, arena promotions,
                and athlete meet-and-greet programs that connect your brand
                with fans in high-energy environments. We work with NFL, NBA,
                MLB, NHL, MLS, and NCAA events as well as marathons, golf
                tournaments, and extreme sports competitions to deliver
                memorable brand moments that fans associate with the sports
                they love.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6 text-lg">
              Every event marketing service is backed by our proprietary{" "}
              <Link
                href="/technology"
                className="text-[#00C853] hover:underline font-semibold"
              >
                technology platform
              </Link>{" "}
              for real-time reporting, staff management, and campaign analytics.
            </p>
            <Link
              href="/services"
              className="text-[#00C853] hover:underline font-semibold text-lg"
            >
              View All Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Event Marketing Process Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-4 text-center">
            Event Marketing Process: From Strategy to Post-Event Analytics
          </h2>
          <p className="text-gray-600 text-lg text-center mb-16 max-w-3xl mx-auto">
            Our proven six-step event marketing process ensures every campaign
            is strategically planned, flawlessly executed, and rigorously
            measured. Here is how our event marketing agency brings your vision
            to life from the initial conversation to the final analytics report.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-[#001F3F] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">
                Discovery and Strategy Development
              </h3>
              <p className="text-gray-600">
                Every successful event marketing campaign begins with deep
                discovery. We sit down with your team to understand your brand
                identity, target audience, competitive landscape, campaign
                objectives, and success metrics. Our strategists then develop a
                comprehensive event marketing plan that aligns with your
                broader marketing goals and budget parameters. This phase
                includes audience research, venue recommendations, creative
                direction, staffing plans, and a detailed timeline that maps
                every milestone from concept approval to event day.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-[#001F3F] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">
                Creative Design and Production
              </h3>
              <p className="text-gray-600">
                Our creative team translates strategy into tangible event
                elements. We design branded environments, signage, digital
                displays, interactive installations, and promotional materials
                that capture your brand essence and engage your audience from
                the moment they arrive. Whether your activation requires a
                custom-built pop-up structure, a wrapped mobile tour vehicle,
                or a simple yet elegant sampling station, our production
                capabilities bring the creative vision to life with precision
                and quality.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-[#001F3F] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">
                Staff Recruitment and Training
              </h3>
              <p className="text-gray-600">
                The people representing your brand at live events are critical
                to success. Our event marketing agency recruits from a network
                of over 100,000 vetted{" "}
                <Link
                  href="/event-staffing-agency"
                  className="text-[#00C853] hover:underline"
                >
                  event staff
                </Link>{" "}
                and{" "}
                <Link
                  href="/brand-ambassador-agency"
                  className="text-[#00C853] hover:underline"
                >
                  brand ambassadors
                </Link>{" "}
                nationwide. We select team members based on your specific
                requirements, including industry experience, language skills,
                personality fit, and physical presentation. Every staff member
                completes brand-specific training covering product knowledge,
                key messaging, consumer engagement techniques, and reporting
                protocols before stepping onto the event floor.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="bg-[#001F3F] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">
                Logistics and Venue Coordination
              </h3>
              <p className="text-gray-600">
                Flawless logistics separate great event marketing agencies from
                average ones. Our operations team manages venue contracts,
                permits, insurance, shipping, freight, load-in and load-out
                schedules, vendor coordination, audiovisual equipment, catering,
                and contingency planning. We conduct advance site visits when
                possible and maintain detailed run-of-show documents that
                account for every minute of the event day. This meticulous
                planning ensures there are no surprises and your event runs
                seamlessly from start to finish.
              </p>
            </div>

            {/* Step 5 */}
            <div className="relative">
              <div className="bg-[#001F3F] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                5
              </div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">
                On-Site Execution and Management
              </h3>
              <p className="text-gray-600">
                On event day, our experienced field managers lead the on-site
                team through every phase of execution. They manage staff
                check-in, ensure brand standards are maintained, troubleshoot
                issues in real time, coordinate with venue personnel, and
                serve as the single point of contact between your team and ours.
                Our{" "}
                <Link
                  href="/technology"
                  className="text-[#00C853] hover:underline"
                >
                  technology platform
                </Link>{" "}
                enables live photo uploads, real-time attendance tracking, and
                instant communication between field teams and headquarters so
                you always know exactly what is happening on the ground.
              </p>
            </div>

            {/* Step 6 */}
            <div className="relative">
              <div className="bg-[#001F3F] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                6
              </div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">
                Post-Event Analytics and Reporting
              </h3>
              <p className="text-gray-600">
                After every event, our analytics team compiles comprehensive
                performance reports that quantify your results against the
                original campaign objectives. Reports include consumer
                impressions, direct engagements, samples or products
                distributed, leads captured, social media metrics, photos and
                videos, staff performance scores, and actionable recommendations
                for future events. We believe that what gets measured gets
                improved, and our commitment to transparent reporting ensures
                you always understand the return on your event marketing
                investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-6 bg-[#001F3F] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Industries That Benefit from Event Marketing
          </h2>
          <p className="text-gray-300 text-lg text-center mb-12 max-w-3xl mx-auto">
            Our event marketing agency has delivered results for brands across
            virtually every industry. Here are the sectors where event marketing
            consistently produces the highest return on investment and strongest
            brand engagement.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-[#00C853] mb-3">
                Consumer Packaged Goods
              </h3>
              <p className="text-gray-300">
                CPG brands rely on event marketing to drive product trial,
                increase shelf awareness, and build loyalty. Our sampling
                campaigns and in-store activations place products in the hands
                of target consumers at the point of purchase and in lifestyle
                settings where they are most receptive to trying new brands.
                From food and beverage launches to household product
                demonstrations, event marketing creates the tangible product
                experiences that drive repeat purchase behavior.
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-[#00C853] mb-3">
                Beverage and Spirits
              </h3>
              <p className="text-gray-300">
                The beverage industry thrives on event marketing through
                tastings, bar activations, festival sponsorships, and branded
                lounge experiences. Our event marketing agency understands
                state and local alcohol regulations, responsible serving
                practices, and the art of creating memorable tasting moments
                that convert casual consumers into brand loyalists. We have
                executed thousands of beverage activations from craft brewery
                launch parties to national spirits tours.
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-[#00C853] mb-3">
                Technology and SaaS
              </h3>
              <p className="text-gray-300">
                Technology companies use event marketing to demonstrate
                products, generate leads, and build relationships at trade
                shows, conferences, and product launch events. Our event
                marketing team creates interactive demo stations, VR and AR
                experiences, hands-on workshops, and networking events that
                position tech brands as industry leaders and fill sales
                pipelines with qualified prospects.
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-[#00C853] mb-3">
                Automotive
              </h3>
              <p className="text-gray-300">
                Automotive brands leverage event marketing for test drive
                programs, auto show activations, new model reveals, and
                dealership events. Our agency creates experiential moments that
                put consumers behind the wheel and build emotional connections
                with vehicles. We manage everything from ride-and-drive
                logistics to VIP launch dinners for the automotive industry.
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-[#00C853] mb-3">
                Health and Wellness
              </h3>
              <p className="text-gray-300">
                Health and wellness brands benefit from event marketing at
                fitness expos, yoga festivals, marathons, and wellness
                retreats. Our event marketing agency creates activations that
                align with healthy lifestyles, featuring product sampling,
                fitness challenges, health screenings, and expert-led workshops
                that educate and inspire consumers while building brand
                credibility in the wellness space.
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-[#00C853] mb-3">
                Fashion and Beauty
              </h3>
              <p className="text-gray-300">
                Fashion and beauty brands use event marketing for runway shows,
                beauty bar pop-ups, product demonstrations, influencer events,
                and retail activations. Our team creates glamorous, on-brand
                experiences that showcase products in their best light, generate
                social media content, and drive both foot traffic and online
                sales through compelling in-person engagement.
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-[#00C853] mb-3">
                Financial Services
              </h3>
              <p className="text-gray-300">
                Financial services companies use event marketing to build trust,
                educate consumers, and generate leads through community events,
                sponsorship activations, and educational seminars. Our event
                marketing agency creates approachable, informative experiences
                that demystify financial products and services while positioning
                your brand as a trusted advisor in the financial wellness space.
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-[#00C853] mb-3">
                Entertainment and Media
              </h3>
              <p className="text-gray-300">
                Entertainment brands rely on event marketing for premiere
                events, fan conventions, immersive experiences, and promotional
                tours. Our agency creates buzz-generating activations for film
                releases, streaming platforms, gaming companies, and media
                brands that turn audiences into passionate advocates and drive
                viewership, downloads, and subscriptions through memorable
                live experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI and Measurement Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-4 text-center">
            Event Marketing ROI and Measurement
          </h2>
          <p className="text-gray-600 text-lg text-center mb-12 max-w-3xl mx-auto">
            Our data-driven approach to event marketing ensures every dollar
            invested is tracked, measured, and optimized. We believe in
            complete transparency and accountability in demonstrating the value
            of your event marketing investment.
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#001F3F]">
                Metrics We Track for Every Event Marketing Campaign
              </h3>
              <p className="text-gray-600">
                As a results-driven event marketing agency, we go beyond vanity
                metrics to measure the indicators that matter most to your
                business. Our measurement framework is customized to each
                campaign but typically includes a robust set of quantitative and
                qualitative data points that paint a complete picture of event
                performance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#00C853] font-bold mr-3 mt-1">
                    &#10003;
                  </span>
                  <span className="text-gray-600">
                    <strong>Consumer Impressions:</strong> Total number of
                    people exposed to your brand through the event, including
                    foot traffic, signage visibility, and digital extensions
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00C853] font-bold mr-3 mt-1">
                    &#10003;
                  </span>
                  <span className="text-gray-600">
                    <strong>Direct Engagements:</strong> One-on-one interactions
                    between brand ambassadors and consumers, measured through
                    our real-time tracking technology
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00C853] font-bold mr-3 mt-1">
                    &#10003;
                  </span>
                  <span className="text-gray-600">
                    <strong>Samples Distributed:</strong> Precise counts of
                    products sampled, including demographic data on recipients
                    when available
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00C853] font-bold mr-3 mt-1">
                    &#10003;
                  </span>
                  <span className="text-gray-600">
                    <strong>Lead Captures:</strong> Email addresses, phone
                    numbers, and qualified prospect information collected
                    through digital lead forms and interactive activations
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00C853] font-bold mr-3 mt-1">
                    &#10003;
                  </span>
                  <span className="text-gray-600">
                    <strong>Social Media Impact:</strong> Hashtag usage, brand
                    mentions, user-generated content, shares, and earned media
                    value from social amplification
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00C853] font-bold mr-3 mt-1">
                    &#10003;
                  </span>
                  <span className="text-gray-600">
                    <strong>Cost Per Engagement:</strong> Your total investment
                    divided by total meaningful interactions, providing a clear
                    efficiency benchmark
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00C853] font-bold mr-3 mt-1">
                    &#10003;
                  </span>
                  <span className="text-gray-600">
                    <strong>Sales Lift and Conversion:</strong> Where possible,
                    we track post-event sales data, redemption rates, and
                    conversion metrics to tie events directly to revenue
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#001F3F] mb-6">
                Our Reporting Technology
              </h3>
              <p className="text-gray-600 mb-6">
                Air Fresh Marketing&apos;s proprietary{" "}
                <Link
                  href="/technology"
                  className="text-[#00C853] hover:underline font-semibold"
                >
                  technology platform
                </Link>{" "}
                powers our event marketing measurement capabilities. Unlike
                agencies that rely on manual counting and subjective
                assessments, our technology provides objective, verifiable data
                that gives you confidence in reported results.
              </p>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold text-[#001F3F]">
                    Real-Time Dashboards
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Monitor event performance as it happens through live
                    dashboards accessible from any device. See engagement
                    counts, staff check-ins, photo uploads, and consumer
                    feedback in real time during every event.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold text-[#001F3F]">
                    GPS-Verified Staff Tracking
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Verify that your event marketing staff are on location, on
                    time, and working the scheduled hours through GPS check-in
                    and check-out functionality built into our mobile platform.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold text-[#001F3F]">
                    Photo and Video Documentation
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Receive time-stamped, geo-tagged photos and videos from
                    every event, providing visual documentation of setup,
                    consumer interactions, and overall event execution quality.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold text-[#001F3F]">
                    Comprehensive Post-Event Reports
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Receive detailed reports within 48 hours of event completion,
                    including all key metrics, photos, consumer feedback, staff
                    evaluations, and strategic recommendations for optimizing
                    future events.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-4 text-center">
            Cities We Serve with Event Marketing
          </h2>
          <p className="text-gray-600 text-lg text-center mb-12 max-w-3xl mx-auto">
            As a nationwide event marketing agency, Air Fresh Marketing
            provides full-service event marketing solutions, trained event
            staff, and on-the-ground support in over 50 major metropolitan
            areas. Select a city below to learn more about our local event
            marketing capabilities.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/cities/${city.slug}`}
                className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow border border-gray-200 hover:border-[#00C853] group"
              >
                <span className="text-[#001F3F] group-hover:text-[#00C853] font-semibold transition-colors">
                  {city.name}
                </span>
              </Link>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-8">
            Don&apos;t see your city?{" "}
            <Link
              href="/contact"
              className="text-[#00C853] hover:underline font-semibold"
            >
              Contact us
            </Link>{" "}
            &mdash; we cover 50+ markets across the United States and can
            deploy event marketing teams to virtually any location.
          </p>
        </div>
      </section>

      {/* Why AirFresh Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-4 text-center">
            Why Air Fresh Is the Top Event Marketing Agency
          </h2>
          <p className="text-gray-600 text-lg text-center mb-12 max-w-3xl mx-auto">
            With over two decades of experience and thousands of successful
            events behind us, Air Fresh Marketing has earned a reputation as
            one of the most trusted and results-driven event marketing agencies
            in the country. Here is what sets us apart from other event
            marketing companies.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-xl p-8 hover:border-[#00C853] transition-colors">
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">
                20+ Years of Event Marketing Expertise
              </h3>
              <p className="text-gray-600">
                Founded in 2004, Air Fresh Marketing has navigated every trend,
                challenge, and evolution in the event marketing industry.
                Our two decades of experience mean we have seen what works and
                what does not, and we apply those lessons to every campaign.
                This depth of experience provides our clients with the
                confidence that their event marketing investment is in the hands
                of seasoned professionals who have delivered results in every
                conceivable scenario.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-8 hover:border-[#00C853] transition-colors">
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">
                100,000+ Vetted Event Staff
              </h3>
              <p className="text-gray-600">
                Our nationwide network of over 100,000 trained{" "}
                <Link
                  href="/promotional-staffing-agency"
                  className="text-[#00C853] hover:underline"
                >
                  promotional staff
                </Link>
                ,{" "}
                <Link
                  href="/brand-ambassador-agency"
                  className="text-[#00C853] hover:underline"
                >
                  brand ambassadors
                </Link>
                , and{" "}
                <Link
                  href="/event-staffing-agency"
                  className="text-[#00C853] hover:underline"
                >
                  event specialists
                </Link>{" "}
                is the backbone of our event marketing agency. Every team
                member is background-checked, trained, and evaluated to ensure
                they deliver the professionalism and brand knowledge your events
                demand. This massive talent pool means we can staff events of
                any size in any market with minimal lead time.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-8 hover:border-[#00C853] transition-colors">
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">
                Proprietary Technology Platform
              </h3>
              <p className="text-gray-600">
                Our investment in proprietary{" "}
                <Link
                  href="/technology"
                  className="text-[#00C853] hover:underline"
                >
                  event management technology
                </Link>{" "}
                sets us apart from other event marketing agencies. Real-time
                reporting, GPS staff tracking, digital check-in systems,
                consumer engagement dashboards, and comprehensive analytics
                tools provide transparency and accountability that our clients
                value. You never have to wonder how your event is performing
                because the data is available at your fingertips, live.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-8 hover:border-[#00C853] transition-colors">
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">
                End-to-End Event Marketing Solutions
              </h3>
              <p className="text-gray-600">
                Unlike agencies that specialize in only one aspect of event
                marketing, Air Fresh Marketing provides truly end-to-end
                solutions. From initial strategy and creative design through
                staffing, logistics, on-site execution, and post-event
                analytics, we serve as your single point of accountability for
                every element of the campaign. This integrated approach
                eliminates the complexity and communication gaps that arise
                when multiple vendors are involved, resulting in smoother
                execution and better outcomes.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-8 hover:border-[#00C853] transition-colors">
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">
                Transparent Pricing and Reporting
              </h3>
              <p className="text-gray-600">
                We believe in complete transparency in everything we do. Our{" "}
                <Link
                  href="/pricing"
                  className="text-[#00C853] hover:underline"
                >
                  pricing
                </Link>{" "}
                is clear, competitive, and free from hidden fees. Our reporting
                is data-driven, comprehensive, and delivered promptly after
                every event. You always know exactly where your investment is
                going and precisely what results it is producing. This
                commitment to transparency has earned us long-term partnerships
                with brands that value accountability and trust.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-8 hover:border-[#00C853] transition-colors">
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">
                Trusted by Leading Brands
              </h3>
              <p className="text-gray-600">
                Fortune 500 companies and emerging brands alike trust Air Fresh
                Marketing as their event marketing agency of choice. Our client
                roster spans consumer packaged goods, technology, automotive,
                beverage, health and wellness, entertainment, and financial
                services. We bring the same level of dedication, creativity,
                and professionalism to every campaign regardless of size or
                budget, because we know that every event is an opportunity to
                strengthen the relationship between a brand and its audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-12 text-center">
            Event Marketing Agency Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-lg font-bold text-[#001F3F] mb-3">
                What does an event marketing agency do?
              </h3>
              <p className="text-gray-600">
                An event marketing agency plans, staffs, and executes live
                brand experiences such as trade shows, product launches,
                sampling campaigns, pop-up activations, mobile marketing tours,
                and corporate events. The agency handles everything from
                strategy and creative development to logistics, staffing, and
                post-event analytics so brands can focus on their core business
                while maximizing ROI from every live interaction. At Air Fresh
                Marketing, we serve as your complete event marketing partner,
                managing every detail from concept to completion and providing
                the trained staff and technology infrastructure that ensure
                flawless execution.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-lg font-bold text-[#001F3F] mb-3">
                How much does it cost to hire an event marketing agency?
              </h3>
              <p className="text-gray-600">
                Event marketing agency costs vary based on scope, location,
                staffing needs, and campaign duration. Small single-day
                activations may start around $5,000, while large-scale national
                tours can range from $50,000 to $500,000 or more. Air Fresh
                Marketing provides transparent{" "}
                <Link
                  href="/pricing"
                  className="text-[#00C853] hover:underline"
                >
                  pricing
                </Link>{" "}
                and customized proposals tailored to each client&apos;s budget
                and objectives. We work with brands of all sizes and can
                design event marketing programs that deliver results within
                any reasonable budget.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-lg font-bold text-[#001F3F] mb-3">
                How far in advance should I book an event marketing agency?
              </h3>
              <p className="text-gray-600">
                We recommend booking your event marketing agency at least 6 to
                8 weeks before your event for standard activations and 3 to 6
                months ahead for large-scale campaigns, national tours, or
                trade shows. Early planning allows time for strategy
                development, creative production, staff recruitment, and venue
                coordination to ensure flawless execution. That said, Air Fresh
                Marketing has the infrastructure and talent network to
                accommodate shorter timelines when needed, and we frequently
                execute high-quality events with as little as two weeks of
                lead time.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-lg font-bold text-[#001F3F] mb-3">
                What types of events can an event marketing agency handle?
              </h3>
              <p className="text-gray-600">
                A full-service event marketing agency like Air Fresh Marketing
                handles trade show marketing, product launch events, pop-up
                experiences, sampling campaigns, mobile marketing tours,
                festival and concert activations, corporate events,
                conferences, sports marketing activations, retail promotions,
                grand openings, and{" "}
                <Link
                  href="/services/experiential-marketing"
                  className="text-[#00C853] hover:underline"
                >
                  experiential marketing
                </Link>{" "}
                campaigns of all sizes. We also provide specialized services
                including{" "}
                <Link
                  href="/services/convention-staffing"
                  className="text-[#00C853] hover:underline"
                >
                  convention staffing
                </Link>
                ,{" "}
                <Link
                  href="/services/event-management"
                  className="text-[#00C853] hover:underline"
                >
                  event management
                </Link>
                , and brand ambassador programs for any type of live brand
                activation.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-lg font-bold text-[#001F3F] mb-3">
                How do you measure event marketing ROI?
              </h3>
              <p className="text-gray-600">
                We measure event marketing ROI through a combination of
                quantitative and qualitative metrics including consumer
                impressions, direct engagements, samples distributed, lead
                captures, social media mentions, earned media value, sales
                lift, cost per engagement, brand sentiment surveys, and
                post-event conversion tracking. Our proprietary{" "}
                <Link
                  href="/technology"
                  className="text-[#00C853] hover:underline"
                >
                  technology platform
                </Link>{" "}
                provides real-time dashboards and comprehensive post-event
                reports that give you complete visibility into how your event
                marketing investment is performing against your defined
                objectives.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-lg font-bold text-[#001F3F] mb-3">
                Does Air Fresh Marketing provide event staff nationwide?
              </h3>
              <p className="text-gray-600">
                Yes. Air Fresh Marketing maintains a vetted network of over
                100,000 trained brand ambassadors,{" "}
                <Link
                  href="/event-staffing-agency"
                  className="text-[#00C853] hover:underline"
                >
                  event staff
                </Link>
                , promotional models, and experiential marketing professionals
                across 50 or more cities in the United States. We handle
                recruitment, training, scheduling, and on-site management so
                you receive consistent, high-quality staffing no matter where
                your event takes place. Whether you need two brand ambassadors
                for a local activation or 200 team members for a multi-city
                tour, our event marketing agency has the infrastructure to
                deliver.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-lg font-bold text-[#001F3F] mb-3">
                What industries benefit most from event marketing?
              </h3>
              <p className="text-gray-600">
                Industries that benefit most from event marketing include
                consumer packaged goods, beverage and spirits, technology,
                automotive, health and wellness, fashion and beauty, financial
                services, and entertainment. However, any brand looking to
                build awareness, generate leads, drive product trial, or deepen
                customer loyalty through face-to-face engagement can achieve
                exceptional results with a strategic event marketing program.{" "}
                <Link
                  href="/contact"
                  className="text-[#00C853] hover:underline"
                >
                  Contact our team
                </Link>{" "}
                to discuss how event marketing can drive results in your
                specific industry.
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
              { href: '/promotional-staffing-agency', label: 'Promotional Staffing Agency' },
              { href: '/corporate-event-staffing', label: 'Corporate Event Staffing' },
              { href: '/brand-activation-agency', label: 'Brand Activation Agency' },
              { href: '/field-marketing-agency', label: 'Field Marketing Agency' },
              { href: '/guerrilla-marketing-agency', label: 'Guerrilla Marketing Agency' },
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
      <section className="py-20 px-6 bg-gradient-to-r from-[#001F3F] to-[#003366] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work with the Leading Event Marketing Agency?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Air Fresh Marketing has been delivering exceptional event marketing
            results for brands nationwide since 2004. Whether you are planning
            a single activation or a multi-city campaign, our team is ready to
            bring your vision to life with the strategy, staff, and technology
            to exceed your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="/get-quote"
              className="bg-[#00C853] hover:bg-[#00E676] text-[#001F3F] font-bold py-4 px-10 rounded-lg text-lg transition-colors"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-[#001F3F] font-bold py-4 px-10 rounded-lg text-lg transition-colors"
            >
              Schedule a Call
            </Link>
          </div>
          <div className="text-gray-300 space-y-2">
            <p>
              <strong className="text-white">Air Fresh Marketing</strong>
            </p>
            <p>1580 N. Logan St., Suite 660, Denver, CO 80203</p>
            <p>
              Phone:{" "}
              <a
                href="tel:3037206060"
                className="text-[#00C853] hover:underline"
              >
                (303) 720-6060
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
