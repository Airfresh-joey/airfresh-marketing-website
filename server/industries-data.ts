// Industry Vertical Pages for targeted SEO

export interface Industry {
  id: string;
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  heroTitle: string;
  heroSubtitle: string;
  description: string;
  challenges: string[];
  solutions: string[];
  services: string[];
  caseStudyIds: string[];
  stats: { label: string; value: string }[];
  heroImage: string;
}

export const industries: Industry[] = [
  {
    id: "alcohol-beverage",
    slug: "alcohol-beverage",
    name: "Alcohol & Beverage",
    title: "Alcohol & Beverage Brand Activations | Beer, Wine & Spirits Marketing",
    metaDescription: "Professional brand ambassadors and event staff for alcohol and beverage activations. TIPS certified staff for beer, wine, spirits sampling and promotions nationwide.",
    keywords: ["alcohol brand ambassadors", "beverage sampling staff", "beer promotions", "wine tasting events", "spirits marketing", "TIPS certified staff"],
    heroTitle: "Alcohol & Beverage Marketing",
    heroSubtitle: "TIPS Certified Brand Ambassadors for Responsible Sampling",
    description: "AirFresh provides TIPS-certified brand ambassadors and promotional staff for alcohol and beverage brands. From craft beer festivals to premium spirits launches, our staff delivers responsible, engaging brand experiences that drive trial and loyalty.",
    challenges: ["Age verification compliance", "Responsible consumption messaging", "Standing out in crowded bar/retail environments", "Measuring sampling ROI"],
    solutions: ["100% TIPS certified staff", "Digital age verification tools", "Real-time sampling data collection", "Post-event analytics and reporting"],
    services: ["Product Sampling", "Bar Takeovers", "Festival Activations", "Retail Promotions", "Launch Events", "Brand Ambassador Programs"],
    caseStudyIds: ["coca-cola-music-festival"],
    stats: [
      { label: "Samples Distributed", value: "5M+" },
      { label: "TIPS Certified Staff", value: "100%" },
      { label: "Beverage Brands Served", value: "150+" }
    ],
    heroImage: "/images/case-studies/gallery/formula1/formula1-14.jpg"
  },
  {
    id: "automotive",
    slug: "automotive",
    name: "Automotive",
    title: "Automotive Experiential Marketing | Auto Shows & Test Drive Events",
    metaDescription: "Professional event staff for automotive brands. Auto show booth staff, test drive coordinators, and brand ambassadors for car launches and experiential events.",
    keywords: ["automotive event staff", "auto show staffing", "car launch events", "test drive coordinators", "automotive brand ambassadors"],
    heroTitle: "Automotive Experiential Marketing",
    heroSubtitle: "Drive Brand Engagement at Auto Shows & Launch Events",
    description: "AirFresh provides knowledgeable, professional staff for automotive brands at auto shows, dealership events, test drive experiences, and new vehicle launches. Our staff combines product expertise with engaging personalities.",
    challenges: ["Technical product knowledge requirements", "Premium brand representation", "Managing test drive logistics", "Multi-day auto show staffing"],
    solutions: ["Comprehensive vehicle training programs", "Experienced auto show veterans", "Test drive coordination systems", "Flexible multi-day scheduling"],
    services: ["Auto Show Booth Staff", "Test Drive Coordinators", "Product Specialists", "VIP Hospitality", "Launch Event Staff", "Ride & Drive Programs"],
    caseStudyIds: [],
    stats: [
      { label: "Auto Shows Staffed", value: "500+" },
      { label: "Test Drives Coordinated", value: "100K+" },
      { label: "Automotive Brands", value: "40+" }
    ],
    heroImage: "/images/case-studies/gallery/formula1/formula1-14.jpg"
  },
  {
    id: "technology",
    slug: "technology",
    name: "Technology",
    title: "Tech Conference Staffing | CES, SXSW & Tech Event Staff",
    metaDescription: "Professional staff for technology conferences and product launches. Demo specialists, booth staff, and brand ambassadors for CES, SXSW, Dreamforce and tech events.",
    keywords: ["tech conference staffing", "CES booth staff", "SXSW event staff", "product demo specialists", "tech brand ambassadors"],
    heroTitle: "Technology Event Staffing",
    heroSubtitle: "Expert Demo Staff for Tech Conferences & Product Launches",
    description: "AirFresh provides tech-savvy staff for conferences, product launches, and experiential activations. From CES to SXSW, our demo specialists and brand ambassadors bring technical products to life.",
    challenges: ["Complex product demonstrations", "Technical troubleshooting needs", "Fast-paced conference environments", "Lead capture and qualification"],
    solutions: ["Rigorous product training", "Tech-native talent pool", "Real-time lead capture tools", "Multi-device demo expertise"],
    services: ["Product Demo Specialists", "Booth Staff", "Lead Generation Teams", "Technical Presenters", "VIP Hospitality", "Registration Staff"],
    caseStudyIds: ["microsoft-nrf-activation"],
    stats: [
      { label: "Tech Events Staffed", value: "300+" },
      { label: "Product Demos", value: "1M+" },
      { label: "Tech Clients", value: "75+" }
    ],
    heroImage: "/images/case-studies/gallery/formula1/formula1-14.jpg"
  },
  {
    id: "cpg-consumer-goods",
    slug: "cpg-consumer-goods",
    name: "CPG & Consumer Goods",
    title: "CPG Sampling & Retail Activations | Consumer Goods Marketing",
    metaDescription: "Professional sampling teams and retail activation staff for CPG brands. In-store demos, product sampling, and consumer engagement programs nationwide.",
    keywords: ["CPG sampling staff", "retail activation teams", "in-store demos", "consumer goods marketing", "product sampling programs"],
    heroTitle: "CPG & Consumer Goods Marketing",
    heroSubtitle: "Drive Trial & Purchase at the Point of Decision",
    description: "AirFresh provides experienced sampling teams and retail activation staff for CPG brands. We drive trial, collect consumer feedback, and boost sales at the shelf through engaging in-store experiences.",
    challenges: ["Retail partner compliance", "Consistent brand messaging", "Measuring in-store ROI", "Scaling across multiple markets"],
    solutions: ["Retailer relationship management", "Brand training certification", "Real-time sales lift tracking", "National footprint with local execution"],
    services: ["Product Sampling", "In-Store Demos", "Retail Activations", "Shopper Marketing", "Merchandising Support", "Consumer Research"],
    caseStudyIds: ["coca-cola-music-festival"],
    stats: [
      { label: "Retail Locations", value: "10K+" },
      { label: "Samples Distributed", value: "25M+" },
      { label: "CPG Brands Served", value: "200+" }
    ],
    heroImage: "/images/case-studies/gallery/formula1/formula1-14.jpg"
  },
  {
    id: "sports-entertainment",
    slug: "sports-entertainment",
    name: "Sports & Entertainment",
    title: "Sports Event Staffing | Stadium & Entertainment Venue Staff",
    metaDescription: "Professional event staff for sports venues, concerts, and entertainment events. Stadium ambassadors, VIP hospitality, and fan engagement teams.",
    keywords: ["sports event staffing", "stadium staff", "concert event staff", "entertainment venue staffing", "fan engagement teams"],
    heroTitle: "Sports & Entertainment Staffing",
    heroSubtitle: "Championship-Level Staff for World-Class Events",
    description: "AirFresh provides energetic, fan-focused staff for sports venues, concerts, festivals, and entertainment events. From Super Bowl activations to arena concerts, we deliver memorable fan experiences.",
    challenges: ["High-energy environments", "Large crowd management", "Sponsor activation coordination", "Weather and outdoor variables"],
    solutions: ["Sports-passionate talent", "Crowd engagement training", "Multi-sponsor coordination", "All-weather preparedness"],
    services: ["Fan Zone Staff", "VIP Hospitality", "Sponsor Activations", "Stadium Ambassadors", "Concert Staff", "Festival Teams"],
    caseStudyIds: ["nike-marathon-activation"],
    stats: [
      { label: "Sporting Events", value: "2K+" },
      { label: "Fans Engaged", value: "50M+" },
      { label: "Venues Served", value: "300+" }
    ],
    heroImage: "/images/case-studies/gallery/formula1/formula1-14.jpg"
  },
  {
    id: "fashion-retail",
    slug: "fashion-retail",
    name: "Fashion & Retail",
    title: "Fashion Event Staffing | Runway Shows & Retail Launch Events",
    metaDescription: "Professional models and event staff for fashion shows, retail launches, and brand activations. Fashion week staffing, pop-up shops, and VIP events.",
    keywords: ["fashion event staffing", "runway show staff", "retail launch events", "fashion week staff", "pop-up shop teams"],
    heroTitle: "Fashion & Retail Staffing",
    heroSubtitle: "Stylish Staff for Fashion-Forward Brand Experiences",
    description: "AirFresh provides polished, fashion-forward staff for runway shows, retail launches, pop-up shops, and VIP shopping events. Our talent embodies brand aesthetics while delivering exceptional customer experiences.",
    challenges: ["Brand aesthetic alignment", "High-touch customer service", "Fast-paced fashion week schedules", "VIP client expectations"],
    solutions: ["Style-matched talent casting", "Luxury service training", "Fashion week veterans", "Concierge-level hospitality"],
    services: ["Runway Show Staff", "Pop-Up Shop Teams", "VIP Shopping Events", "Brand Ambassadors", "Fitting Room Attendants", "Personal Shoppers"],
    caseStudyIds: [],
    stats: [
      { label: "Fashion Events", value: "500+" },
      { label: "Retail Brands", value: "100+" },
      { label: "Pop-Up Shops", value: "250+" }
    ],
    heroImage: "/images/case-studies/gallery/formula1/formula1-14.jpg"
  },
  {
    id: "healthcare-pharma",
    slug: "healthcare-pharma",
    name: "Healthcare & Pharma",
    title: "Healthcare Event Staffing | Medical Conferences & Pharma Events",
    metaDescription: "Professional staff for healthcare conferences, pharma launches, and medical events. HIPAA-aware staff for HCP engagement and patient education programs.",
    keywords: ["healthcare event staffing", "pharma conference staff", "medical event teams", "HCP engagement", "patient education staff"],
    heroTitle: "Healthcare & Pharma Staffing",
    heroSubtitle: "Compliant, Knowledgeable Staff for Healthcare Events",
    description: "AirFresh provides professional, compliance-trained staff for healthcare conferences, pharma product launches, and patient education programs. Our staff understands the unique requirements of healthcare marketing.",
    challenges: ["Regulatory compliance", "Complex medical terminology", "HCP engagement protocols", "Patient privacy requirements"],
    solutions: ["Compliance training programs", "Medical terminology education", "HCP communication protocols", "HIPAA awareness training"],
    services: ["Medical Conference Staff", "HCP Engagement Teams", "Patient Education Programs", "Pharma Launch Events", "Health Fair Staff", "Clinical Trial Support"],
    caseStudyIds: [],
    stats: [
      { label: "Medical Conferences", value: "200+" },
      { label: "Healthcare Brands", value: "50+" },
      { label: "HCPs Engaged", value: "100K+" }
    ],
    heroImage: "/images/case-studies/gallery/formula1/formula1-14.jpg"
  },
  {
    id: "financial-services",
    slug: "financial-services",
    name: "Financial Services",
    title: "Financial Services Event Staffing | Banking & Fintech Events",
    metaDescription: "Professional event staff for financial services conferences, banking events, and fintech activations. Polished, professional staff for premium brand experiences.",
    keywords: ["financial services event staff", "banking conference staffing", "fintech event teams", "financial brand ambassadors"],
    heroTitle: "Financial Services Staffing",
    heroSubtitle: "Professional Staff for Premium Financial Brand Experiences",
    description: "AirFresh provides polished, articulate staff for financial services events, from banking conferences to fintech product launches. Our staff projects the professionalism and trust that financial brands require.",
    challenges: ["Premium brand standards", "Complex product education", "High-net-worth client expectations", "Compliance considerations"],
    solutions: ["Executive-level presentation", "Financial product training", "White-glove service approach", "Compliance-aware staff"],
    services: ["Conference Staff", "VIP Client Events", "Product Launch Teams", "Lead Generation", "Registration Staff", "Hospitality Teams"],
    caseStudyIds: [],
    stats: [
      { label: "Financial Events", value: "150+" },
      { label: "Banking Clients", value: "30+" },
      { label: "Fintech Activations", value: "75+" }
    ],
    heroImage: "/images/case-studies/gallery/formula1/formula1-14.jpg"
  },
  {
    id: "motorsport-racing",
    slug: "motorsport-racing",
    name: "Motorsport & Racing",
    title: "Motorsport Event Staffing | F1, NASCAR, IndyCar & Racing Events",
    metaDescription: "Professional event staffing for motorsport events. Brand ambassadors, VIP hospitality, and experiential marketing teams for F1, NASCAR, IndyCar, and racing activations.",
    keywords: ["motorsport event staffing", "f1 brand ambassadors", "nascar event staff", "indycar staffing", "racing event marketing", "formula 1 hospitality staff", "motorsport activation"],
    heroTitle: "Motorsport & Racing Event Staffing",
    heroSubtitle: "Premium Staff for High-Speed Brand Experiences",
    description: "AirFresh provides premium staffing for motorsport events across F1, NASCAR, IndyCar, IMSA, and MotoGP. From the glamour of the F1 Miami Grand Prix to the tradition of the Daytona 500, our staff delivers the sophistication and energy these high-profile events demand. We understand the unique requirements of motorsport activations—from paddock hospitality to fan zone engagement.",
    challenges: ["Luxury brand standards for F1 events", "High-energy fan engagement for NASCAR", "Multi-day race weekend scheduling", "VIP hospitality expertise", "Technical product knowledge for sponsors"],
    solutions: ["Motorsport-experienced talent roster", "Luxury hospitality training", "Flexible multi-day scheduling", "Premium appearance standards", "Sponsor-specific product education"],
    services: ["F1 Paddock Club Hospitality", "NASCAR Fan Zone Activations", "IndyCar Brand Ambassadors", "Race Weekend VIP Hosting", "Pit Lane Experiences", "Driver Meet & Greets", "Sponsor Sampling Programs", "Hospitality Suite Staff"],
    caseStudyIds: [],
    stats: [
      { label: "Race Events Staffed", value: "150+" },
      { label: "Motorsport Sponsors Served", value: "45+" },
      { label: "Fans Engaged", value: "5M+" },
      { label: "F1 Grand Prix Events", value: "12+" }
    ],
    heroImage: "/images/case-studies/gallery/formula1/formula1-1.jpg"
  },
  {
    id: "gaming-esports",
    slug: "gaming-esports",
    name: "Gaming & Esports",
    title: "Gaming & Esports Event Staffing | Tournaments & Game Launches",
    metaDescription: "Professional event staffing for gaming tournaments, esports events, and video game launches. Demo specialists, cosplay staff, and brand ambassadors for gaming activations.",
    keywords: ["gaming event staffing", "esports event staff", "game launch staff", "gaming brand ambassadors", "tournament staffing", "cosplay event staff"],
    heroTitle: "Gaming & Esports Event Staffing",
    heroSubtitle: "Level Up Your Gaming Events with Expert Staff",
    description: "AirFresh provides gaming-native staff for esports tournaments, game launches, conventions, and experiential activations. Our talent understands gaming culture and connects authentically with this passionate audience.",
    challenges: ["Gaming culture authenticity", "Technical demo proficiency", "Long tournament hours", "Cosplay coordination", "Streaming-friendly presentation"],
    solutions: ["Gaming-enthusiast talent pool", "Game-specific training", "Extended shift experience", "Professional cosplay coordination", "Camera-ready presentation"],
    services: ["Tournament Staff", "Game Demo Specialists", "Cosplay Performers", "Brand Ambassadors", "VIP Gaming Lounges", "Launch Event Staff", "Convention Booth Teams"],
    caseStudyIds: [],
    stats: [
      { label: "Gaming Events", value: "200+" },
      { label: "Game Launches", value: "75+" },
      { label: "Esports Tournaments", value: "50+" }
    ],
    heroImage: "/images/case-studies/gallery/formula1/formula1-14.jpg"
  },
  {
    id: "cannabis-cbd",
    slug: "cannabis-cbd",
    name: "Cannabis & CBD",
    title: "Cannabis Event Staffing | Dispensary Events & CBD Brand Activations",
    metaDescription: "Professional event staffing for cannabis events, dispensary activations, and CBD brand experiences. Compliance-trained staff for the regulated cannabis industry.",
    keywords: ["cannabis event staffing", "dispensary event staff", "cbd brand ambassadors", "cannabis trade show staff", "marijuana marketing events"],
    heroTitle: "Cannabis & CBD Event Staffing",
    heroSubtitle: "Compliant, Professional Staff for the Cannabis Industry",
    description: "AirFresh provides compliance-trained staff for cannabis industry events, dispensary activations, and CBD brand experiences. Our staff understands the unique regulatory requirements and consumer education needs of this growing industry.",
    challenges: ["State-by-state compliance requirements", "Consumer education needs", "Industry stigma navigation", "Age verification protocols", "Product knowledge complexity"],
    solutions: ["Compliance-first training", "Educational messaging expertise", "Professional presentation", "Age verification protocols", "Strain and product education"],
    services: ["Dispensary Grand Openings", "Trade Show Booth Staff", "Brand Ambassadors", "Product Educators", "Sampling Events (where legal)", "Industry Conference Staff"],
    caseStudyIds: [],
    stats: [
      { label: "Cannabis Events", value: "100+" },
      { label: "Dispensary Openings", value: "50+" },
      { label: "States Covered", value: "20+" }
    ],
    heroImage: "/images/case-studies/gallery/formula1/formula1-14.jpg"
  },
  // ── New SEO-targeted verticals ─────────────────────────────────────────────

  {
    id: "tech-saas",
    slug: "tech-saas",
    name: "Tech & SaaS",
    title: "Tech & SaaS Event Marketing | Conference Staffing & Product Demos",
    metaDescription: "Specialized experiential marketing for tech and SaaS brands. Demo specialists, brand ambassadors, and field marketing teams for product launches, conferences, and demand-gen campaigns nationwide.",
    keywords: ["tech event marketing", "SaaS field marketing", "software product demos", "tech conference staffing", "B2B event marketing", "demand gen campaigns"],
    heroTitle: "Tech & SaaS Event Marketing",
    heroSubtitle: "Demo Specialists and Field Teams That Turn Interest Into Pipeline",
    description: "AirFresh Marketing helps tech and SaaS companies convert event audiences into qualified leads. From CES and Dreamforce to smaller demand-gen road shows, our teams are trained on your product, your ICP, and your conversion goals so every interaction moves prospects down the funnel.",
    challenges: ["Explaining complex software to non-technical audiences", "Standing out in saturated conference expo halls", "Capturing high-quality leads at scale", "Aligning field teams with sales messaging"],
    solutions: ["Product-specific training for every rep", "Interactive demo scripting and objection guides", "CRM-integrated lead capture tools", "Real-time performance dashboards shared with your sales team"],
    services: ["Product Demo Specialists", "Conference Booth Staff", "Demand-Gen Road Shows", "Lead Qualification Teams", "Launch Event Staffing", "Developer Advocacy Support"],
    caseStudyIds: ["microsoft-nrf-activation"],
    stats: [
      { label: "Years Experience", value: "20+" },
      { label: "Tech Events Staffed", value: "300+" },
      { label: "Product Demos Delivered", value: "1M+" },
      { label: "Tech Clients Served", value: "75+" },
      { label: "Cities Nationwide", value: "50+" }
    ],
    heroImage: "/images/case-studies/gallery/formula1/formula1-14.jpg"
  },
  {
    id: "food-beverage",
    slug: "food-beverage",
    name: "Food & Beverage",
    title: "Food & Beverage Sampling & Activation | Event Marketing Agency",
    metaDescription: "Full-service food and beverage sampling programs, in-store demos, and festival activations. TIPS-certified staff, compliance-ready, and experienced across grocery, food service, and DTC brands.",
    keywords: ["food and beverage sampling", "F&B brand activation", "grocery store demos", "food festival staffing", "beverage event marketing", "product sampling programs"],
    heroTitle: "Food & Beverage Sampling & Activation",
    heroSubtitle: "Drive Trial, Build Loyalty, and Move Units at the Point of Taste",
    description: "AirFresh Marketing executes product sampling, pop-up tastings, and large-scale festival activations for food and beverage brands. Our staff are trained on your flavor profiles, nutritional claims, and brand story so every sample is a sales conversation.",
    challenges: ["Consistent brand story across hundreds of demo locations", "Regulatory compliance for alcohol and health claims", "Perishable product logistics at scale", "Measuring trial-to-purchase conversion"],
    solutions: ["Centralized brand training with digital certification", "TIPS-certified staff for all alcohol activations", "Cold-chain logistics coordination", "POS data integration and post-event sales lift reporting"],
    services: ["In-Store Product Sampling", "Festival & Event Activations", "Bar & Restaurant Takeovers", "Launch Events & Media Tastings", "Grocery Demo Programs", "Brand Ambassador Teams"],
    caseStudyIds: ["coca-cola-music-festival"],
    stats: [
      { label: "Years Experience", value: "20+" },
      { label: "Samples Distributed", value: "25M+" },
      { label: "F&B Brands Served", value: "200+" },
      { label: "Retail Locations", value: "10K+" },
      { label: "Cities Nationwide", value: "50+" }
    ],
    heroImage: "/images/case-studies/gallery/formula1/formula1-14.jpg"
  },
  {
    id: "finance-insurance",
    slug: "finance-insurance",
    name: "Finance & Insurance",
    title: "Finance & Insurance Field Marketing | Event Staffing & Lead Generation",
    metaDescription: "Professional field marketing for finance and insurance brands. Brand ambassadors, lead generation teams, and event staff for fintech launches, banking activations, and insurance enrollment campaigns.",
    keywords: ["finance event marketing", "insurance field marketing", "fintech brand ambassadors", "banking activation staffing", "financial services lead generation", "enrollment event staff"],
    heroTitle: "Finance & Insurance Field Marketing",
    heroSubtitle: "Compliant, Professional Teams That Build Trust and Generate Leads",
    description: "AirFresh Marketing provides polished, compliance-aware field marketing staff for banks, insurers, fintech companies, and wealth management firms. Our teams are trained to represent your brand with precision, handle sensitive conversations professionally, and deliver measurable lead volume.",
    challenges: ["Strict compliance and disclosure requirements", "Building consumer trust in a skeptical environment", "High-net-worth client service expectations", "Tracking cost-per-lead across field activations"],
    solutions: ["Compliance script review and approval workflows", "Trust-building communication training", "White-glove hospitality protocols", "Closed-loop lead attribution to your CRM"],
    services: ["Enrollment & Sign-Up Events", "Financial Product Launch Staff", "Branch Opening Activations", "Fintech Conference Teams", "Trade Show Booth Staff", "Lead Generation Campaigns"],
    caseStudyIds: [],
    stats: [
      { label: "Years Experience", value: "20+" },
      { label: "Financial Events Staffed", value: "150+" },
      { label: "Banking & Fintech Clients", value: "60+" },
      { label: "Leads Generated", value: "500K+" },
      { label: "Cities Nationwide", value: "50+" }
    ],
    heroImage: "/images/case-studies/gallery/formula1/formula1-14.jpg"
  },
  {
    id: "retail-cpg",
    slug: "retail-cpg",
    name: "Retail & CPG",
    title: "Retail & CPG Sampling Programs | In-Store Activation & Field Marketing",
    metaDescription: "National retail activation and CPG sampling programs. Drive trial, capture shopper data, and lift sales at the shelf with AirFresh Marketing's trained in-store demo teams and street sampling crews.",
    keywords: ["CPG sampling programs", "retail activation agency", "in-store product demos", "shopper marketing staff", "consumer goods field marketing", "national sampling programs"],
    heroTitle: "Retail & CPG Sampling Programs",
    heroSubtitle: "Turn Shelf Space Into Market Share With Hands-On Sampling",
    description: "AirFresh Marketing operates national in-store demo programs and retail activations for CPG brands across grocery, drug, club, mass, and specialty retail channels. Our trained brand educators drive trial and capture real-time consumer feedback that informs your product and marketing decisions.",
    challenges: ["Retailer relationship and compliance requirements", "Scaling consistent execution across 100+ locations", "Capturing shopper insights in real time", "Measuring ROI and sales lift at the SKU level"],
    solutions: ["Dedicated retail channel expertise for each major banner", "Standardized training with retailer-specific modules", "Tablet-based data collection with brand dashboard access", "Pre/post scan data analysis and sales lift reporting"],
    services: ["In-Store Demo Programs", "Grocery & Club Sampling", "Mass Retail Activations", "DTC Pop-Up Shops", "Street Sampling Teams", "Shopper Research Programs"],
    caseStudyIds: ["coca-cola-music-festival"],
    stats: [
      { label: "Years Experience", value: "20+" },
      { label: "Retail Locations Serviced", value: "10K+" },
      { label: "Samples Distributed", value: "25M+" },
      { label: "CPG Brands Served", value: "200+" },
      { label: "Cities Nationwide", value: "50+" }
    ],
    heroImage: "/images/case-studies/gallery/formula1/formula1-14.jpg"
  },
  {
    id: "entertainment-media",
    slug: "entertainment-media",
    name: "Entertainment & Media",
    title: "Entertainment & Media Activations | Experiential Marketing for Studios & Networks",
    metaDescription: "Experiential marketing and event staffing for entertainment and media brands. Fan activations, premiere events, streaming campaign staffing, and pop-culture experiential for studios, networks, and streaming platforms.",
    keywords: ["entertainment event marketing", "media brand activation", "film premiere staffing", "streaming campaign staff", "fan engagement events", "pop-up entertainment experiences"],
    heroTitle: "Entertainment & Media Activations",
    heroSubtitle: "Create Superfans With Immersive Brand Experiences",
    description: "AirFresh Marketing designs and staffs experiential campaigns for studios, networks, streaming platforms, live entertainment companies, and media brands. From world-premiere activations to ongoing fan engagement programs, we create the memorable moments that build loyal audiences and generate social buzz.",
    challenges: ["Generating organic social coverage from live activations", "Managing large, passionate fan crowds safely", "Coordinating talent appearances and brand protocols", "Maintaining brand secrecy for unreleased projects"],
    solutions: ["Social-first activation design with shareable moments built in", "Crowd management trained staff and flow planning", "Talent liaison and green room coordination", "NDA compliance protocols and secure briefing processes"],
    services: ["Premiere & Launch Activations", "Fan Zone Experiences", "Streaming Campaign Pop-Ups", "Convention & Comic-Con Booths", "Brand Ambassador Programs", "Tour & Road Show Staffing"],
    caseStudyIds: [],
    stats: [
      { label: "Years Experience", value: "20+" },
      { label: "Entertainment Events Staffed", value: "400+" },
      { label: "Fans Engaged", value: "50M+" },
      { label: "Media & Studio Clients", value: "60+" },
      { label: "Cities Nationwide", value: "50+" }
    ],
    heroImage: "/images/case-studies/gallery/formula1/formula1-14.jpg"
  },
  {
    id: "cannabis",
    slug: "cannabis",
    name: "Cannabis & CBD",
    title: "Cannabis & CBD Marketing | Dispensary Events & Brand Activations",
    metaDescription: "Compliance-trained event staffing and brand activation for cannabis and CBD brands. Dispensary grand openings, trade show booth staff, product educators, and experiential campaigns in legal markets nationwide.",
    keywords: ["cannabis event marketing", "dispensary event staff", "CBD brand ambassadors", "cannabis brand activation", "marijuana trade show staffing", "cannabis consumer education"],
    heroTitle: "Cannabis & CBD Marketing",
    heroSubtitle: "Professional, Compliant Teams for the Regulated Cannabis Market",
    description: "AirFresh Marketing provides compliance-trained brand ambassadors and event staff for cannabis brands, multi-state operators, and CBD companies. We understand state-by-state regulatory landscapes and build activations that educate consumers, represent your brand professionally, and drive dispensary traffic.",
    challenges: ["State-by-state compliance requirements differ significantly", "Consumer education and stigma reduction", "Age verification and responsible use protocols", "Limited traditional advertising channels increasing reliance on events"],
    solutions: ["Market-specific compliance training per state", "Educational storytelling frameworks for staff", "Digital age-gate verification at all activations", "Heavy investment in experiential as a primary growth channel"],
    services: ["Dispensary Grand Openings", "Cannabis Trade Show Staff", "Product Education Teams", "Brand Ambassador Programs", "Sampling Events (where permitted)", "Industry Conference Staffing"],
    caseStudyIds: [],
    stats: [
      { label: "Years Experience", value: "20+" },
      { label: "Cannabis Events Staffed", value: "100+" },
      { label: "Dispensary Openings", value: "50+" },
      { label: "States Covered", value: "20+" },
      { label: "Cities Nationwide", value: "50+" }
    ],
    heroImage: "/images/case-studies/gallery/formula1/formula1-14.jpg"
  },

  // ── Existing non-targeted verticals ────────────────────────────────────────
  {
    id: "real-estate-property",
    slug: "real-estate-property",
    name: "Real Estate & Property",
    title: "Real Estate Event Staffing | Open Houses & Property Launch Events",
    metaDescription: "Professional event staffing for real estate launches, open houses, and property marketing events. Brand ambassadors and hospitality staff for luxury property experiences.",
    keywords: ["real estate event staffing", "property launch staff", "open house staff", "luxury real estate events", "property marketing staff"],
    heroTitle: "Real Estate & Property Event Staffing",
    heroSubtitle: "Elevate Your Property Marketing with Professional Staff",
    description: "AirFresh provides polished, professional staff for real estate launches, model home experiences, and property marketing events. Our staff creates welcoming, informative experiences that help convert prospects to buyers.",
    challenges: ["Luxury presentation standards", "Local market knowledge", "Extended open house hours", "Lead capture coordination", "Multi-property scheduling"],
    solutions: ["Real estate-experienced talent", "Local market orientation", "Flexible scheduling", "CRM integration support", "Multi-site coordination"],
    services: ["Model Home Hosts", "Open House Staff", "Property Launch Events", "VIP Broker Events", "Community Grand Openings", "Sales Center Staff"],
    caseStudyIds: [],
    stats: [
      { label: "Property Events", value: "300+" },
      { label: "Developer Partners", value: "40+" },
      { label: "Leads Generated", value: "50K+" }
    ],
    heroImage: "/images/case-studies/gallery/formula1/formula1-14.jpg"
  },
  {
    id: "non-profit-cause",
    slug: "non-profit-cause",
    name: "Non-Profit & Cause Marketing",
    title: "Non-Profit Event Staffing | Charity Events & Cause Marketing",
    metaDescription: "Professional event staffing for non-profit galas, charity events, and cause marketing activations. Mission-aligned staff who represent your cause with passion.",
    keywords: ["non-profit event staffing", "charity event staff", "cause marketing staff", "fundraising event teams", "gala event staffing"],
    heroTitle: "Non-Profit & Cause Marketing Staffing",
    heroSubtitle: "Passionate Staff for Mission-Driven Events",
    description: "AirFresh provides mission-aligned staff for non-profit galas, charity events, and cause marketing activations. Our staff brings genuine passion to cause-based events while maintaining professional event execution.",
    challenges: ["Mission alignment and authenticity", "Budget-conscious operations", "Volunteer coordination", "Donor engagement protocols", "Emotional sensitivity"],
    solutions: ["Values-matched staffing", "Non-profit pricing programs", "Volunteer integration", "Donor relations training", "Compassionate communication"],
    services: ["Gala Event Staff", "Charity Walk/Run Teams", "Fundraising Events", "Awareness Campaigns", "Donor Appreciation Events", "Volunteer Management Support"],
    caseStudyIds: [],
    stats: [
      { label: "Charity Events", value: "250+" },
      { label: "Non-Profits Served", value: "100+" },
      { label: "Funds Raised Support", value: "$50M+" }
    ],
    heroImage: "/images/case-studies/gallery/formula1/formula1-14.jpg"
  },
  {
    id: "hospitality-tourism",
    slug: "hospitality-tourism",
    name: "Hospitality & Tourism",
    title: "Hospitality Event Staffing | Hotels, Resorts & Tourism Marketing",
    metaDescription: "Professional event staffing for hospitality brands, hotels, resorts, and tourism marketing. White-glove service staff for guest experiences and destination marketing.",
    keywords: ["hospitality event staffing", "hotel event staff", "resort marketing staff", "tourism brand ambassadors", "destination marketing staff"],
    heroTitle: "Hospitality & Tourism Event Staffing",
    heroSubtitle: "White-Glove Service for Hospitality Brand Experiences",
    description: "AirFresh provides hospitality-trained staff for hotels, resorts, and tourism marketing activations. Our staff delivers the warm, professional service that hospitality brands demand for guest experiences and destination marketing.",
    challenges: ["Service excellence standards", "Multilingual requirements", "24/7 hospitality needs", "Luxury brand alignment", "Cultural sensitivity"],
    solutions: ["Hospitality industry veterans", "Multilingual talent pool", "Flexible shift coverage", "Luxury service training", "Cultural competency training"],
    services: ["Hotel Opening Events", "Resort Activations", "Tourism Trade Shows", "Destination Marketing", "Guest Experience Programs", "Concierge Services"],
    caseStudyIds: [],
    stats: [
      { label: "Hospitality Events", value: "400+" },
      { label: "Hotels & Resorts Served", value: "150+" },
      { label: "Languages Available", value: "25+" }
    ],
    heroImage: "/images/case-studies/gallery/formula1/formula1-14.jpg"
  }
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find(industry => industry.slug === slug);
}
