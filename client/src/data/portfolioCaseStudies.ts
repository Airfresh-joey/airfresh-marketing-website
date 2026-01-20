export interface CaseStudy {
  id: string;
  name: string;
  tagline: string;
  description: string;
  industry?: string;
  services: string[];
  markets?: string[];
  date?: string;
  googleDriveUrl?: string;
  stats: Record<string, string>;
  category: string;
  featured?: boolean;
  heroImage?: string;
  images?: string[];
  videoUrl?: string;
}

export const portfolioCaseStudies: CaseStudy[] = [
  // ============ FEATURED CASE STUDIES ============
  {
    id: "skinny-mixes",
    name: "Skinny Mixes National Sampling",
    tagline: "Sugar-Free Flavor Revolution",
    description: "Nationwide product sampling campaign for Skinny Mixes featuring in-store demonstrations, street team activations, and event sampling. Our brand ambassadors introduced health-conscious consumers to the full line of sugar-free syrups and drink mixes.",
    industry: "Food & Beverage",
    services: ["Product Sampling", "In-Store Demos", "Brand Ambassadors"],
    markets: ["Nationwide"],
    date: "2024",
    stats: {
      "Samples Distributed": "50,000+",
      "Retail Locations": "200+",
      "Consumer Interactions": "75,000+",
      "Purchase Intent": "+65%"
    },
    category: "Food & Beverage",
    featured: true,
    heroImage: "/images/case-studies/skinny-mixes-hero.jpg"
  },
  {
    id: "formula-1-las-vegas",
    name: "Formula 1 Las Vegas Grand Prix",
    tagline: "Racing Into the Future",
    description: "Executed comprehensive event staffing and brand activation for the Formula 1 Las Vegas Grand Prix, managing hospitality suites, fan zones, and VIP experiences across the Las Vegas Strip.",
    industry: "Sports & Entertainment",
    services: ["Event Staffing", "VIP Management", "Brand Activation"],
    markets: ["Las Vegas"],
    date: "2024",
    stats: {
      "Event Staff": "500+",
      "Fan Interactions": "300,000+",
      "VIP Guests Served": "10,000+",
      "Satisfaction Rate": "98%"
    },
    category: "Entertainment",
    featured: true,
    heroImage: "/images/case-studies/formula-1-5.jpg",
    images: [
      "/images/case-studies/formula-1-5.jpg",
      "/images/case-studies/formula-1-2.jpg",
      "/images/case-studies/formula-1-3.jpg"
    ]
  },
  {
    id: "williams-racing-f1",
    name: "Williams Racing Fan Experience",
    tagline: "Racing Heritage Meets Innovation",
    description: "Delivered premium fan experiences and hospitality services for Williams Racing at Formula 1 events, managing paddock tours, autograph sessions, and sponsor activations.",
    industry: "Sports & Entertainment",
    services: ["VIP Management", "Hospitality", "Fan Activation"],
    markets: ["F1 Circuit"],
    date: "2024",
    stats: {
      "VIP Experiences": "5,000+",
      "Fan Interactions": "100,000+",
      "Sponsor Activations": "50+",
      "Guest Satisfaction": "97%"
    },
    category: "Entertainment",
    featured: true,
    heroImage: "/images/case-studies/williams-racing.jpg",
    images: [
      "/images/case-studies/williams-racing.jpg",
      "/images/case-studies/williams-racing-2.jpg",
      "/images/case-studies/williams-racing-3.jpg"
    ]
  },

  // ============ FOOD & BEVERAGE ============
  {
    id: "1800-tequila",
    name: "1800 Tequila Bar Activations",
    tagline: "Elevate Your Night",
    description: "Premium bar and nightlife activation campaign for 1800 Tequila featuring brand ambassadors, sampling events, and signature cocktail promotions at top venues.",
    industry: "Beverage",
    services: ["Bar Activations", "Brand Ambassadors", "Sampling"],
    markets: ["Las Vegas", "Miami", "Los Angeles"],
    date: "2024",
    stats: {
      "Venues Activated": "150+",
      "Samples Served": "25,000+",
      "Social Impressions": "2M+",
      "Brand Lift": "+40%"
    },
    category: "Food & Beverage",
    featured: false,
    heroImage: "/images/case-studies/1800-tequila.jpg"
  },
  {
    id: "beer-samplings-national",
    name: "Craft Beer Festival Tour",
    tagline: "Taste the Craft",
    description: "Multi-city beer festival staffing and sampling program featuring brand ambassadors, pour teams, and consumer education about craft brewing techniques.",
    industry: "Beverage",
    services: ["Festival Staffing", "Product Sampling", "Consumer Education"],
    markets: ["Nationwide"],
    date: "2024",
    stats: {
      "Festivals Staffed": "50+",
      "Samples Poured": "100,000+",
      "Consumer Surveys": "15,000+",
      "Brand Awareness": "+55%"
    },
    category: "Food & Beverage",
    featured: false,
    heroImage: "/images/case-studies/beer-samplings.jpg",
    images: [
      "/images/case-studies/beer-samplings.jpg",
      "/images/case-studies/beer-samplings-2.jpg",
      "/images/case-studies/beer-samplings-3.jpg"
    ]
  },
  {
    id: "meijer-retail",
    name: "Meijer In-Store Sampling",
    tagline: "Midwest Retail Excellence",
    description: "Comprehensive in-store sampling and demonstration program at Meijer locations across the Midwest, featuring trained product specialists and consumer engagement.",
    industry: "Retail",
    services: ["In-Store Sampling", "Product Demos", "Retail Marketing"],
    markets: ["Midwest"],
    date: "2024",
    stats: {
      "Stores Activated": "100+",
      "Demos Conducted": "5,000+",
      "Samples Distributed": "250,000+",
      "Sales Lift": "+35%"
    },
    category: "Retail",
    featured: false,
    heroImage: "/images/case-studies/meijer.jpg",
    images: [
      "/images/case-studies/meijer.jpg",
      "/images/case-studies/meijer-2.jpg",
      "/images/case-studies/meijer-3.jpg"
    ]
  },
  {
    id: "waiakea-water",
    name: "Waiakea Hawaiian Water Launch",
    tagline: "Pure Hawaiian Hydration",
    description: "Product launch campaign for Waiakea volcanic water featuring fitness center activations, event sampling, and retail demonstrations to introduce this premium sustainable water brand.",
    industry: "Beverage",
    services: ["Product Launch", "Sampling", "Retail Activation"],
    markets: ["California", "Hawaii", "National"],
    date: "2024",
    stats: {
      "Samples Distributed": "75,000+",
      "Fitness Centers": "200+",
      "Events Activated": "50+",
      "Purchase Intent": "+70%"
    },
    category: "Food & Beverage",
    featured: false,
    heroImage: "/images/case-studies/waiakea-hero.jpg"
  },
  {
    id: "buffalo-wild-wings",
    name: "Buffalo Wild Wings Game Day",
    tagline: "Wings. Beer. Sports.",
    description: "Game day promotional staffing for Buffalo Wild Wings featuring brand ambassadors, trivia hosts, and promotional teams during major sporting events.",
    industry: "Food & Beverage",
    services: ["Promotional Staffing", "Event Marketing", "Brand Ambassadors"],
    markets: ["Nationwide"],
    date: "2024",
    stats: {
      "Locations Staffed": "300+",
      "Game Days": "100+",
      "Guest Interactions": "500,000+",
      "Loyalty Sign-ups": "50,000+"
    },
    category: "Food & Beverage",
    featured: false,
    heroImage: "/images/case-studies/buffalo-wild-wings-hero.jpg"
  },
  {
    id: "wagamama-launch",
    name: "Wagamama US Expansion",
    tagline: "Asian Soul Food",
    description: "Restaurant opening support for Wagamama US expansion featuring street teams, sampling activations, and grand opening event staffing.",
    industry: "Food & Beverage",
    services: ["Restaurant Launch", "Street Teams", "Event Staffing"],
    markets: ["New York", "Boston", "DC"],
    date: "2024",
    stats: {
      "Store Openings": "10+",
      "Samples Distributed": "50,000+",
      "Grand Opening Guests": "25,000+",
      "Social Mentions": "10,000+"
    },
    category: "Food & Beverage",
    featured: false,
    heroImage: "/images/case-studies/wagamama-hero.jpg"
  },
  {
    id: "culinary-dropout",
    name: "Culinary Dropout Events",
    tagline: "Comfort Food Revolution",
    description: "Event staffing and promotional support for Culinary Dropout restaurant locations featuring live music events, game tournaments, and special dining experiences.",
    industry: "Food & Beverage",
    services: ["Event Staffing", "Promotional Marketing", "Hospitality"],
    markets: ["Phoenix", "Denver", "Austin"],
    date: "2024",
    stats: {
      "Events Staffed": "200+",
      "Guest Experiences": "50,000+",
      "Event Capacity": "Sold Out",
      "Repeat Visits": "+45%"
    },
    category: "Food & Beverage",
    featured: false,
    heroImage: "/images/case-studies/culinary-dropout.jpg"
  },
  {
    id: "katjes-candy",
    name: "Katjes Candy Sampling Tour",
    tagline: "European Candy Excellence",
    description: "National sampling tour introducing Katjes vegan candy to American consumers through retail demonstrations, festival activations, and strategic sampling events.",
    industry: "Food & Beverage",
    services: ["Product Sampling", "Mobile Tour", "Retail Demos"],
    markets: ["Nationwide"],
    date: "2024",
    stats: {
      "Tour Stops": "75+",
      "Samples Distributed": "500,000+",
      "Retail Partners": "1,000+",
      "Trial Rate": "85%"
    },
    category: "Food & Beverage",
    featured: false,
    heroImage: "/images/case-studies/katjes-hero.jpg"
  },

  // ============ TECHNOLOGY & MEDIA ============
  {
    id: "microsoft-events",
    name: "Microsoft Product Launches",
    tagline: "Empowering Every Person",
    description: "Product launch and retail support for Microsoft featuring trained product specialists, in-store demonstrations, and consumer education on Surface, Xbox, and Windows products.",
    industry: "Technology",
    services: ["Product Launch", "Retail Staffing", "Product Demos"],
    markets: ["Nationwide"],
    date: "2024",
    stats: {
      "Retail Locations": "500+",
      "Product Demos": "100,000+",
      "Launch Events": "25+",
      "Consumer Satisfaction": "96%"
    },
    category: "Technology",
    featured: false,
    heroImage: "/images/case-studies/microsoft-hero.jpg",
    images: [
      "/images/case-studies/microsoft.jpg",
      "/images/case-studies/microsoft-2.jpg",
      "/images/case-studies/microsoft-3.jpg"
    ]
  },
  {
    id: "netflix-activations",
    name: "Netflix Premiere Events",
    tagline: "Stories That Move You",
    description: "Premiere event staffing and fan experience activations for Netflix original series launches, including red carpet events, fan screenings, and immersive pop-up experiences.",
    industry: "Entertainment",
    services: ["Premiere Events", "Fan Experiences", "VIP Management"],
    markets: ["Los Angeles"],
    date: "2021",
    googleDriveUrl: "https://drive.google.com/drive/folders/17ffDXAso3Tu5-ossU3AXTfdqjr2p-YkU",
    stats: {
      "Premiere Events": "3",
      "Event Staff": "Team of 7",
      "Location": "Goya Studios, Hollywood"
    },
    category: "Entertainment",
    featured: false,
    heroImage: "/images/case-studies/netflix-hero.jpg"
  },
  {
    id: "ted-talk-events",
    name: "TED Conference Staffing",
    tagline: "Ideas Worth Spreading",
    description: "Premium event staffing for TED conferences including registration, hospitality, speaker support, and attendee services for these world-renowned thought leadership events.",
    industry: "Events",
    services: ["Conference Staffing", "Hospitality", "VIP Services"],
    markets: ["Vancouver", "New York", "Various"],
    date: "2024",
    stats: {
      "Conferences Staffed": "15+",
      "Attendees Served": "20,000+",
      "Speaker Support": "500+",
      "Satisfaction Rate": "99%"
    },
    category: "Technology",
    featured: false,
    heroImage: "/images/case-studies/ted-talk-hero.jpg"
  },

  // ============ BEAUTY & FASHION ============
  {
    id: "clarins-beauty",
    name: "Clarins Skincare Launch",
    tagline: "Plant-Powered Beauty",
    description: "Luxury skincare launch support for Clarins featuring trained beauty consultants, in-store demonstrations, and VIP customer events at premium retail locations.",
    industry: "Beauty",
    services: ["Product Launch", "Beauty Consultants", "VIP Events"],
    markets: ["Nationwide"],
    date: "2024",
    stats: {
      "Retail Partners": "200+",
      "Consultations": "25,000+",
      "VIP Events": "50+",
      "Sales Lift": "+40%"
    },
    category: "Beauty & Fashion",
    featured: false,
    heroImage: "/images/case-studies/clarins.jpg"
  },
  {
    id: "byoma-skincare",
    name: "Byoma Gen-Z Skincare Launch",
    tagline: "Barrier Care Made Simple",
    description: "National sampling campaign for Byoma skincare targeting Gen-Z consumers at college campuses, shopping centers, and social events.",
    industry: "Beauty",
    services: ["Product Sampling", "Campus Marketing", "Social Activation"],
    markets: ["New York", "Los Angeles", "Chicago"],
    date: "2024",
    stats: {
      "Campuses Visited": "50+",
      "Samples Distributed": "100,000+",
      "Social Followers": "+50,000",
      "Purchase Intent": "+75%"
    },
    category: "Beauty & Fashion",
    featured: false,
    heroImage: "/images/case-studies/byoma-hero.jpg"
  },

  // ============ AUTOMOTIVE & OUTDOOR ============
  {
    id: "polaris-powersports",
    name: "Polaris Demo Events",
    tagline: "Think Outside",
    description: "Product demonstration and test ride events for Polaris powersports vehicles featuring trained demo drivers, lead capture, and consumer education.",
    industry: "Automotive",
    services: ["Demo Events", "Product Specialists", "Lead Generation"],
    markets: ["Nationwide"],
    date: "2024",
    stats: {
      "Demo Events": "100+",
      "Test Rides": "25,000+",
      "Leads Captured": "15,000+",
      "Conversion Rate": "22%"
    },
    category: "Automotive",
    featured: false,
    heroImage: "/images/case-studies/polaris-hero.jpg"
  },
  {
    id: "car-wash-promotions",
    name: "Express Car Wash Grand Openings",
    tagline: "Shine On",
    description: "Grand opening staffing for express car wash locations featuring street teams, promotional giveaways, and membership sign-up activations.",
    industry: "Automotive",
    services: ["Grand Openings", "Street Teams", "Membership Sales"],
    markets: ["Southwest", "Southeast"],
    date: "2024",
    stats: {
      "Grand Openings": "50+",
      "Free Washes": "100,000+",
      "Memberships Sold": "25,000+",
      "ROI": "400%+"
    },
    category: "Automotive",
    featured: false,
    heroImage: "/images/case-studies/car-wash-hero.jpg",
    images: [
      "/images/case-studies/car-wash-hero.jpg",
      "/images/case-studies/car-wash-2.jpg",
      "/images/case-studies/car-wash-3.jpg"
    ]
  },

  // ============ ENTERTAINMENT ============
  {
    id: "cirque-du-soleil",
    name: "Cirque du Soleil Promotions",
    tagline: "Spark the Imagination",
    description: "Street team and promotional staffing for Cirque du Soleil productions featuring costumed performers, ticket promotions, and experiential marketing in high-traffic areas.",
    industry: "Entertainment",
    services: ["Street Teams", "Promotional Marketing", "Experiential"],
    markets: ["Las Vegas", "Touring Cities"],
    date: "2024",
    stats: {
      "Shows Supported": "8+",
      "Street Team Hours": "10,000+",
      "Flyers Distributed": "500,000+",
      "Ticket Sales Lift": "+25%"
    },
    category: "Entertainment",
    featured: false,
    heroImage: "/images/case-studies/cirque-du-soleil-hero.jpg"
  },
  {
    id: "mrbeast-events",
    name: "MrBeast Feastables Launch",
    tagline: "Better Ingredients, Better Chocolate",
    description: "Product launch and sampling support for MrBeast's Feastables chocolate bars featuring influencer events, retail activations, and viral marketing campaigns.",
    industry: "Food & Beverage",
    services: ["Product Launch", "Influencer Events", "Retail Activation"],
    markets: ["Nationwide"],
    date: "2024",
    stats: {
      "Launch Events": "25+",
      "Samples Distributed": "1M+",
      "Social Views": "100M+",
      "Retail Sellout": "First Week"
    },
    category: "Entertainment",
    featured: false,
    heroImage: "/images/case-studies/mrbeast-hero.jpg"
  },

  // ============ RETAIL & SERVICES ============
  {
    id: "bond-vet",
    name: "Bond Vet Clinic Openings",
    tagline: "Modern Pet Care",
    description: "Grand opening and community event staffing for Bond Vet clinics featuring pet-friendly activations, community outreach, and new client acquisition.",
    industry: "Healthcare",
    services: ["Grand Openings", "Community Events", "Lead Generation"],
    markets: ["New York", "Chicago", "Boston"],
    date: "2024",
    stats: {
      "Clinic Openings": "15+",
      "Pet Parents Engaged": "25,000+",
      "New Client Sign-ups": "10,000+",
      "Community Events": "50+"
    },
    category: "Healthcare",
    featured: false,
    heroImage: "/images/case-studies/bond-vet.jpg",
    images: [
      "/images/case-studies/bond-vet.jpg",
      "/images/case-studies/bond-vet-2.jpg",
      "/images/case-studies/bond-vet-3.jpg"
    ]
  },
  {
    id: "qwick-staffing",
    name: "Qwick Hospitality Platform",
    tagline: "Staff On Demand",
    description: "Brand ambassador program promoting Qwick's hospitality staffing platform to restaurants and event venues, driving platform adoption and professional sign-ups.",
    industry: "Technology",
    services: ["Brand Ambassadors", "B2B Marketing", "Lead Generation"],
    markets: ["Phoenix", "Dallas", "Miami"],
    date: "2024",
    stats: {
      "Venues Visited": "2,000+",
      "Platform Sign-ups": "5,000+",
      "Demo Requests": "1,500+",
      "Conversion Rate": "35%"
    },
    category: "Technology",
    featured: false,
    heroImage: "/images/case-studies/qwick.jpg",
    images: [
      "/images/case-studies/qwick.jpg",
      "/images/case-studies/qwick-2.jpg",
      "/images/case-studies/qwick-3.jpg"
    ]
  },
  {
    id: "starbucks-seasonal",
    name: "Starbucks Seasonal Promotions",
    tagline: "Inspiring Connection",
    description: "Seasonal promotional staffing for Starbucks featuring holiday-themed activations, new product sampling, and loyalty program promotions.",
    industry: "Food & Beverage",
    services: ["Seasonal Marketing", "Product Sampling", "Loyalty Activation"],
    markets: ["Nationwide"],
    date: "2024",
    stats: {
      "Locations Activated": "500+",
      "Samples Distributed": "2M+",
      "Rewards Sign-ups": "100,000+",
      "Sales Lift": "+30%"
    },
    category: "Food & Beverage",
    featured: false,
    heroImage: "/images/case-studies/starbucks-hero.jpg"
  },
  {
    id: "solar-company",
    name: "Solar Energy Home Shows",
    tagline: "Power Your Future",
    description: "Lead generation and event staffing for solar energy companies at home shows, community events, and retail locations throughout the Southwest.",
    industry: "Energy",
    services: ["Trade Show Staffing", "Lead Generation", "Consumer Education"],
    markets: ["Arizona", "California", "Nevada"],
    date: "2024",
    stats: {
      "Events Staffed": "200+",
      "Leads Generated": "50,000+",
      "Consultations Booked": "15,000+",
      "Installation Rate": "25%"
    },
    category: "Technology",
    featured: false,
    heroImage: "/images/case-studies/solar-company.jpg"
  },
  {
    id: "topps-cards",
    name: "Topps Trading Card Events",
    tagline: "Collect the Moment",
    description: "Event staffing and promotional support for Topps trading card releases featuring athlete appearances, pack breaks, and collector events.",
    industry: "Entertainment",
    services: ["Event Staffing", "Athlete Appearances", "Collector Events"],
    markets: ["Sports Venues Nationwide"],
    date: "2024",
    stats: {
      "Card Events": "100+",
      "Athlete Appearances": "50+",
      "Packs Distributed": "500,000+",
      "Collector Engagement": "250,000+"
    },
    category: "Entertainment",
    featured: false,
    heroImage: "/images/case-studies/topps-cards.jpg"
  },
  {
    id: "cortie-digital",
    name: "Cortie Digital Marketing Events",
    tagline: "Digital Innovation",
    description: "Conference and trade show staffing for Cortie Digital featuring tech demonstrations, lead capture, and B2B networking support.",
    industry: "Technology",
    services: ["Trade Show Staffing", "Lead Generation", "Tech Demos"],
    markets: ["Tech Conferences Nationwide"],
    date: "2024",
    stats: {
      "Conferences": "25+",
      "Leads Captured": "10,000+",
      "Demos Conducted": "5,000+",
      "Meeting Bookings": "2,000+"
    },
    category: "Technology",
    featured: false,
    heroImage: "/images/case-studies/cortie-digital.jpg",
    images: [
      "/images/case-studies/cortie-digital.jpg",
      "/images/case-studies/cortie-digital-2.jpg",
      "/images/case-studies/cortie-digital-3.jpg"
    ]
  },
  {
    id: "peelzon-beauty",
    name: "Peelzon Skincare Launch",
    tagline: "Reveal Your Best Skin",
    description: "Product launch and sampling campaign for Peelzon skincare featuring beauty consultants, in-store demonstrations, and influencer events.",
    industry: "Beauty",
    services: ["Product Launch", "Sampling", "Influencer Events"],
    markets: ["Los Angeles", "New York", "Miami"],
    date: "2024",
    stats: {
      "Launch Events": "20+",
      "Samples Distributed": "50,000+",
      "Influencer Partners": "100+",
      "Sales Generated": "$2M+"
    },
    category: "Beauty & Fashion",
    featured: false,
    heroImage: "/images/case-studies/peelzon.jpg"
  },
  {
    id: "brooklyn-magazine",
    name: "Brooklyn Magazine Events",
    tagline: "Brooklyn Culture",
    description: "Event staffing and promotional support for Brooklyn Magazine events including launch parties, cultural events, and brand partnerships.",
    industry: "Media",
    services: ["Event Staffing", "Brand Partnerships", "VIP Management"],
    markets: ["New York"],
    date: "2024",
    stats: {
      "Events Staffed": "30+",
      "Attendees Served": "15,000+",
      "Brand Partners": "50+",
      "Media Impressions": "10M+"
    },
    category: "Entertainment",
    featured: false,
    heroImage: "/images/case-studies/brooklyn-magazine.jpg"
  },

  // ============ ADDITIONAL CASE STUDIES FROM OLD SITE ============
  {
    id: "merrell-outdoor",
    name: "Merrell Outdoor Activations",
    tagline: "Trail Tested",
    description: "Brand activation and product sampling for Merrell outdoor footwear featuring hiking events, trail activations, and outdoor enthusiast engagement.",
    industry: "Outdoor & Sports",
    services: ["Brand Activation", "Product Sampling", "Event Marketing"],
    markets: ["Denver, CO"],
    date: "2024",
    stats: {
      "Events": "25+",
      "Product Trials": "10,000+",
      "Trail Activations": "50+",
      "Brand Engagement": "100,000+"
    },
    category: "Sports",
    featured: false,
    heroImage: "/images/case-studies/merrell-hero.jpg"
  },
  {
    id: "grubhub-campaign",
    name: "Grubhub National Campaign",
    tagline: "Delivering Happiness",
    description: "National marketing campaign for Grubhub featuring street team activations, promotional giveaways, and brand ambassador programs in major metropolitan areas.",
    industry: "Food Tech",
    services: ["Street Teams", "Promotional Marketing", "Brand Ambassadors"],
    markets: ["Nationwide"],
    date: "2024",
    stats: {
      "Cities Activated": "50+",
      "Promo Codes Distributed": "500,000+",
      "New User Sign-ups": "100,000+",
      "Brand Impressions": "25M+"
    },
    category: "Technology",
    featured: false,
    heroImage: "/images/case-studies/grubhub-hero.jpg"
  },
  {
    id: "premier-protein-sampling",
    name: "Premier Protein National Sampling",
    tagline: "Fuel Your Day",
    description: "National sampling campaign for Premier Protein featuring in-store demos, gym activations, and health-focused event marketing.",
    industry: "Health & Nutrition",
    services: ["Product Sampling", "In-Store Demos", "Gym Activations"],
    markets: ["Nationwide"],
    date: "2024",
    stats: {
      "Samples Distributed": "1M+",
      "Retail Locations": "5,000+",
      "Gym Partnerships": "500+",
      "Purchase Intent": "+70%"
    },
    category: "Food & Beverage",
    featured: false,
    heroImage: "/images/case-studies/premier-protein-hero.jpg"
  },
  {
    id: "clif-bar-marketing",
    name: "Clif Bar National Marketing",
    tagline: "Adventure Fueled",
    description: "National marketing campaign for Clif Bar featuring outdoor event sponsorships, athlete partnerships, and adventure sports activations.",
    industry: "Health & Nutrition",
    services: ["Event Sponsorship", "Athlete Partnerships", "Sampling"],
    markets: ["Nationwide"],
    date: "2024",
    stats: {
      "Events Sponsored": "200+",
      "Samples Distributed": "2M+",
      "Athlete Partners": "50+",
      "Social Reach": "50M+"
    },
    category: "Food & Beverage",
    featured: false,
    heroImage: "/images/case-studies/clif-bar-hero.jpg"
  },
  {
    id: "boss-coffee-launch",
    name: "Boss Coffee US Launch",
    tagline: "Boss Level Coffee",
    description: "US product launch campaign for Boss Coffee featuring street team activations, sampling events, and brand awareness campaigns in key urban markets.",
    industry: "Beverage",
    services: ["Product Launch", "Street Teams", "Sampling"],
    markets: ["Denver, Colorado"],
    date: "2024",
    stats: {
      "Launch Events": "50+",
      "Samples Distributed": "100,000+",
      "Brand Awareness": "+200%",
      "Retail Placement": "1,000+"
    },
    category: "Food & Beverage",
    featured: false,
    heroImage: "/images/case-studies/boss-coffee-hero.jpg"
  },
  {
    id: "aimco-residential",
    name: "Aimco Residential Marketing",
    tagline: "Home Sweet Home",
    description: "Residential property marketing and leasing support for Aimco featuring community events, prospect engagement, and brand ambassador programs.",
    industry: "Real Estate",
    services: ["Community Events", "Leasing Support", "Brand Ambassadors"],
    markets: ["Nationwide"],
    date: "2024",
    stats: {
      "Properties Supported": "100+",
      "Community Events": "500+",
      "Prospect Engagements": "50,000+",
      "Lease Conversions": "+35%"
    },
    category: "Retail",
    featured: false,
    heroImage: "/images/case-studies/aimco-hero.jpg"
  },
  {
    id: "lyft-national",
    name: "Lyft National Marketing Campaign",
    tagline: "Your Ride Awaits",
    description: "National marketing campaign for Lyft featuring driver recruitment events, rider promotions, and brand activations at major events and venues.",
    industry: "Transportation",
    services: ["Driver Recruitment", "Promotional Marketing", "Event Activations"],
    markets: ["Nationwide"],
    date: "2024",
    stats: {
      "Cities Activated": "100+",
      "Driver Sign-ups": "25,000+",
      "Promo Rides": "500,000+",
      "Event Activations": "1,000+"
    },
    category: "Technology",
    featured: false,
    heroImage: "/images/case-studies/lyft-hero.jpg"
  },
  {
    id: "mac-cosmetics-campaign",
    name: "MAC Cosmetics National Campaign",
    tagline: "All Ages, All Races, All Genders",
    description: "National marketing campaign for MAC Cosmetics featuring beauty consultations, product launches, and experiential activations at retail and events.",
    industry: "Beauty",
    services: ["Beauty Consultations", "Product Launch", "Experiential Marketing"],
    markets: ["Nationwide"],
    date: "2024",
    stats: {
      "Consultations": "100,000+",
      "Product Launches": "25+",
      "Retail Activations": "500+",
      "Social Impressions": "100M+"
    },
    category: "Beauty & Fashion",
    featured: false,
    heroImage: "/images/case-studies/mac-cosmetics-new-hero.jpg"
  },
  {
    id: "adidas-staffing",
    name: "Adidas National Marketing Campaign",
    tagline: "Impossible Is Nothing",
    description: "National staffing and marketing campaign for Adidas featuring athlete events, retail activations, and sports marketing initiatives.",
    industry: "Sports & Apparel",
    services: ["Event Staffing", "Athlete Events", "Retail Activations"],
    markets: ["Nationwide"],
    date: "2024",
    stats: {
      "Events Staffed": "500+",
      "Athlete Appearances": "100+",
      "Retail Activations": "2,000+",
      "Brand Impressions": "500M+"
    },
    category: "Sports",
    featured: false,
    heroImage: "/images/case-studies/adidas-hero.jpg"
  },
  {
    id: "visible-wireless",
    name: "Visible National Marketing Campaign",
    tagline: "Wireless Made Simple",
    description: "National marketing campaign for Visible wireless featuring street team activations, promotional events, and customer acquisition programs.",
    industry: "Telecommunications",
    services: ["Street Teams", "Promotional Events", "Customer Acquisition"],
    markets: ["Nationwide"],
    date: "2024",
    stats: {
      "Cities Activated": "75+",
      "New Subscribers": "50,000+",
      "Promotional Events": "1,000+",
      "Brand Awareness": "+150%"
    },
    category: "Technology",
    featured: false,
    heroImage: "/images/case-studies/visible-hero.jpg"
  }
];
