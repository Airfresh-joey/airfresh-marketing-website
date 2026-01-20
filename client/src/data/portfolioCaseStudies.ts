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
    id: "premier-protein-nyc",
    name: "NYC Times Square Activation",
    tagline: "Premier Protein Street Team",
    description: "Premier Protein street team distributing 1,500+ samples in Manhattan. Our brand ambassadors engaged with consumers in one of the world's busiest locations, creating memorable brand experiences and driving product trial.",
    industry: "Food & Beverage",
    services: ["Street Teams", "Product Sampling", "Brand Ambassadors"],
    markets: ["New York City"],
    date: "2024",
    stats: {
      "Samples Distributed": "1,500+",
      "Location": "Times Square",
      "Consumer Interactions": "5,000+",
      "Brand Impressions": "50,000+"
    },
    category: "Food & Beverage",
    featured: true,
    heroImage: "/images/case-studies/formula-1.jpg",
    videoUrl: "https://player.vimeo.com/video/395306497"
  },
  {
    id: "mac-cosmetics-coachella",
    name: "LA Festival Brand Experience",
    tagline: "MAC Cosmetics at Coachella",
    description: "MAC Cosmetics ambassadors generating 800+ opt-ins at Coachella. Our team created an immersive beauty experience at one of the world's most iconic music festivals, connecting with festival-goers and building brand loyalty.",
    industry: "Beauty",
    services: ["Brand Ambassadors", "Festival Marketing", "Lead Generation"],
    markets: ["Los Angeles", "Coachella"],
    date: "2024",
    stats: {
      "Opt-ins Generated": "800+",
      "Festival": "Coachella",
      "Brand Interactions": "3,000+",
      "Social Shares": "1,000+"
    },
    category: "Beauty & Fashion",
    featured: true,
    heroImage: "/images/case-studies/williams-racing.jpg",
    videoUrl: "https://player.vimeo.com/video/395306497"
  },
  {
    id: "merrell-denver",
    name: "Denver Convention Center Takeover",
    tagline: "Merrell Guerrilla Marketing",
    description: "Merrell guerrilla marketing campaign with interactive product demos. Our team created engaging experiences at the Denver Convention Center, allowing consumers to test Merrell footwear and connect with the brand's outdoor adventure spirit.",
    industry: "Retail",
    services: ["Guerrilla Marketing", "Product Demos", "Event Activation"],
    markets: ["Denver, CO"],
    date: "2024",
    stats: {
      "Product Demos": "500+",
      "Location": "Denver Convention Center",
      "Lead Captures": "300+",
      "Conversion Rate": "25%"
    },
    category: "Retail",
    featured: true,
    heroImage: "/images/case-studies/cortie-digital.jpg",
    videoUrl: "https://player.vimeo.com/video/395306497"
  },

  // ============ FOOD & BEVERAGE ============
  {
    id: "future-beauty-labs-byoma",
    name: "Future Beauty Labs - Byoma",
    tagline: "National Sampling Campaign",
    description: "National sampling of Byoma Creamy Jelly Cleanser across New York, Philadelphia, and Los Angeles. Our brand ambassadors introduced consumers to this innovative skincare product through targeted sampling activations.",
    industry: "Beauty",
    services: ["Product Sampling", "Brand Ambassadors", "Multi-Market Activation"],
    markets: ["New York", "Philadelphia", "Los Angeles"],
    date: "2024",
    stats: {
      "Markets": "3 Cities",
      "Samples Distributed": "10,000+",
      "Consumer Engagements": "15,000+",
      "Brand Awareness Lift": "+45%"
    },
    category: "Beauty & Fashion",
    featured: false,
    heroImage: "/images/case-studies/bond-vet.jpg"
  },
  {
    id: "grubhub-national",
    name: "Grubhub National Campaign",
    tagline: "Nationwide Marketing Activation",
    description: "National marketing campaign for Grubhub featuring street teams, promotional events, and brand ambassador activations in major markets across the country. Our team drove app downloads and new customer acquisition.",
    industry: "Technology",
    services: ["Street Teams", "Promotional Marketing", "App Downloads"],
    markets: ["Nationwide"],
    date: "2024",
    stats: {
      "Markets Activated": "25+",
      "App Downloads": "50,000+",
      "Promo Codes Distributed": "100,000+",
      "New User Sign-ups": "30,000+"
    },
    category: "Technology",
    featured: false,
    heroImage: "/images/case-studies/qwick.jpg"
  },
  {
    id: "clif-bar-national",
    name: "Clif Bar National Campaign",
    tagline: "Fueling Adventure Nationwide",
    description: "National marketing campaign for Clif Bar featuring product sampling at outdoor events, fitness centers, and retail locations. Our brand ambassadors connected with active consumers and drove product trial.",
    industry: "Food & Beverage",
    services: ["Product Sampling", "Event Marketing", "Retail Activation"],
    markets: ["Nationwide"],
    date: "2024",
    stats: {
      "Samples Distributed": "500,000+",
      "Events Activated": "200+",
      "Consumer Interactions": "250,000+",
      "Sales Lift": "+35%"
    },
    category: "Food & Beverage",
    featured: false,
    heroImage: "/images/case-studies/beer-samplings.jpg"
  },
  {
    id: "boss-coffee-launch",
    name: "Boss Coffee US Launch",
    tagline: "Japanese Coffee Meets America",
    description: "US product launch for Boss Coffee in Denver, Colorado. Our team introduced American consumers to this iconic Japanese coffee brand through strategic sampling and experiential marketing activations.",
    industry: "Beverage",
    services: ["Product Launch", "Sampling", "Experiential Marketing"],
    markets: ["Denver, Colorado"],
    date: "2024",
    stats: {
      "Samples Distributed": "25,000+",
      "Launch Events": "10+",
      "Consumer Feedback": "95% Positive",
      "Retail Placement": "100+ Stores"
    },
    category: "Food & Beverage",
    featured: false,
    heroImage: "/images/case-studies/meijer.jpg"
  },
  {
    id: "pepsi-summer-tour",
    name: "Pepsi Summer Refresh Tour",
    tagline: "Nationwide Summer Activation",
    description: "Multi-city summer tour for Pepsi featuring mobile sampling trucks, street teams, and concert activations. Our teams delivered ice-cold refreshment to consumers across the nation during peak summer months.",
    industry: "Beverage",
    services: ["Mobile Tours", "Street Teams", "Event Marketing"],
    markets: ["Nationwide"],
    date: "2024",
    stats: {
      "Cities Visited": "50+",
      "Samples Distributed": "2M+",
      "Consumer Interactions": "500,000+",
      "Social Impressions": "10M+"
    },
    category: "Food & Beverage",
    featured: false,
    heroImage: "/images/case-studies/pepsi-sampling.jpg"
  },
  {
    id: "naked-juice-fitness",
    name: "Naked Juice Fitness Centers",
    tagline: "Healthy Hydration Campaign",
    description: "Targeted sampling campaign at premium fitness centers across major markets. Our ambassadors engaged health-conscious consumers post-workout with Naked Juice products and exclusive promotions.",
    industry: "Beverage",
    services: ["Product Sampling", "Fitness Marketing", "Lead Generation"],
    markets: ["Los Angeles", "Miami", "New York"],
    date: "2024",
    stats: {
      "Fitness Centers": "150+",
      "Samples Distributed": "75,000+",
      "Email Sign-ups": "12,000+",
      "Redemption Rate": "32%"
    },
    category: "Food & Beverage",
    featured: false,
    heroImage: "/images/case-studies/naked-juice.jpg"
  },
  {
    id: "white-claw-beach",
    name: "White Claw Beach Activations",
    tagline: "Summer Beach Tour",
    description: "Beach activation program at top vacation destinations featuring sampling tents, games, and social media activations. Our teams created memorable summer moments for legal drinking age consumers.",
    industry: "Beverage",
    services: ["Beach Activation", "Product Sampling", "Social Media"],
    markets: ["Miami Beach", "San Diego", "Santa Monica"],
    date: "2024",
    stats: {
      "Beach Locations": "25+",
      "Samples Distributed": "100,000+",
      "Social Posts Created": "5,000+",
      "Brand Recall": "85%"
    },
    category: "Food & Beverage",
    featured: false,
    heroImage: "/images/case-studies/white-claw.jpg"
  },
  {
    id: "impossible-foods-retail",
    name: "Impossible Foods Retail Launch",
    tagline: "Plant-Based Revolution",
    description: "In-store sampling campaign to introduce Impossible Burger to mainstream grocery shoppers. Our teams conducted cooking demonstrations and tastings at major retailers nationwide.",
    industry: "Food",
    services: ["In-Store Sampling", "Product Demos", "Retail Activation"],
    markets: ["Nationwide"],
    date: "2023",
    stats: {
      "Retail Locations": "500+",
      "Tastings Conducted": "250,000+",
      "Purchase Intent": "+65%",
      "Repeat Purchase": "45%"
    },
    category: "Food & Beverage",
    featured: false,
    heroImage: "/images/case-studies/impossible-foods.jpg"
  },

  // ============ TECHNOLOGY ============
  {
    id: "lyft-national",
    name: "Lyft National Marketing",
    tagline: "Ride Into the Future",
    description: "National marketing campaign for Lyft featuring promotional activations, driver recruitment events, and rider acquisition programs. Our teams activated in major markets to grow Lyft's presence.",
    industry: "Technology",
    services: ["Promotional Marketing", "Driver Recruitment", "User Acquisition"],
    markets: ["Nationwide"],
    date: "2024",
    stats: {
      "Markets Activated": "30+",
      "New Riders": "75,000+",
      "Driver Sign-ups": "5,000+",
      "Promo Rides": "100,000+"
    },
    category: "Technology",
    featured: false,
    heroImage: "/images/case-studies/car-wash.jpg"
  },
  {
    id: "visible-national",
    name: "Visible National Campaign",
    tagline: "Wireless Without Limits",
    description: "National marketing campaign for Visible wireless featuring experiential activations, product demos, and promotional events. Our team helped Visible connect with consumers and drive plan sign-ups.",
    industry: "Technology",
    services: ["Experiential Marketing", "Product Demos", "Lead Generation"],
    markets: ["Nationwide"],
    date: "2024",
    stats: {
      "Plan Sign-ups": "25,000+",
      "Demo Events": "100+",
      "Consumer Interactions": "200,000+",
      "Brand Awareness": "+60%"
    },
    category: "Technology",
    featured: false,
    heroImage: "/images/case-studies/topps-cards.jpg"
  },
  {
    id: "google-pixel-launch",
    name: "Google Pixel Store Launch",
    tagline: "Experience the Magic",
    description: "Flagship store launch support for Google Pixel featuring product demonstrations, crowd management, and VIP experiences. Our team delivered premium hospitality throughout launch week.",
    industry: "Technology",
    services: ["Retail Launch", "Product Demos", "VIP Management"],
    markets: ["New York City"],
    date: "2024",
    stats: {
      "Launch Days": "7",
      "Device Demos": "15,000+",
      "VIP Appointments": "500+",
      "Media Impressions": "50M+"
    },
    category: "Technology",
    featured: false,
    heroImage: "/images/case-studies/google-pixel.jpg"
  },
  {
    id: "samsung-ces",
    name: "Samsung CES Activation",
    tagline: "Innovation Showcase",
    description: "Comprehensive booth staffing and product demonstration support for Samsung at CES. Our trained tech ambassadors showcased the latest Galaxy products and smart home innovations.",
    industry: "Technology",
    services: ["Trade Show Staffing", "Product Demos", "Lead Capture"],
    markets: ["Las Vegas"],
    date: "2024",
    stats: {
      "Booth Staff": "50+",
      "Product Demos": "10,000+",
      "Leads Captured": "8,000+",
      "Media Tours": "200+"
    },
    category: "Technology",
    featured: false,
    heroImage: "/images/case-studies/samsung-ces.jpg"
  },
  {
    id: "uber-eats-campus",
    name: "Uber Eats College Tour",
    tagline: "Campus Cravings",
    description: "Multi-campus activation tour targeting college students with special promotions and brand experiences. Our street teams drove app downloads and first-time orders across university campuses.",
    industry: "Technology",
    services: ["Campus Marketing", "Street Teams", "App Downloads"],
    markets: ["College Campuses Nationwide"],
    date: "2024",
    stats: {
      "Campuses Visited": "75+",
      "App Downloads": "40,000+",
      "First Orders": "25,000+",
      "Student Reach": "500,000+"
    },
    category: "Technology",
    featured: false,
    heroImage: "/images/case-studies/uber-eats.jpg"
  },
  {
    id: "spotify-sxsw",
    name: "Spotify SXSW House",
    tagline: "Sound on Austin",
    description: "Branded experience activation for Spotify at SXSW featuring live performances, artist meet-and-greets, and interactive installations. Our team managed all guest services and activations.",
    industry: "Technology",
    services: ["Festival Marketing", "Event Management", "VIP Hospitality"],
    markets: ["Austin"],
    date: "2024",
    stats: {
      "Event Days": "5",
      "Guest Interactions": "20,000+",
      "Live Performances": "25+",
      "Social Shares": "100,000+"
    },
    category: "Technology",
    featured: false,
    heroImage: "/images/case-studies/spotify-sxsw.jpg"
  },

  // ============ FASHION & BEAUTY ============
  {
    id: "adidas-national",
    name: "Adidas National Staffing",
    tagline: "Three Stripes, One Team",
    description: "Staffing support for Adidas national marketing campaign. Our trained brand ambassadors and event staff represented the Adidas brand at retail locations, sporting events, and promotional activations across the country.",
    industry: "Fashion",
    services: ["Event Staffing", "Brand Ambassadors", "Retail Support"],
    markets: ["Nationwide"],
    date: "2024",
    stats: {
      "Events Staffed": "150+",
      "Staff Deployed": "500+",
      "Markets Covered": "40+",
      "Client Satisfaction": "98%"
    },
    category: "Beauty & Fashion",
    featured: false,
    heroImage: "/images/case-studies/peelzon.jpg"
  },
  {
    id: "nike-run-club",
    name: "Nike Run Club Events",
    tagline: "Just Do It Together",
    description: "Brand ambassador program supporting Nike Run Club events in major cities. Our team provided event support, pace group leaders, and post-run activation management.",
    industry: "Fashion",
    services: ["Event Support", "Brand Ambassadors", "Fitness Marketing"],
    markets: ["New York", "Chicago", "Los Angeles"],
    date: "2024",
    stats: {
      "Running Events": "100+",
      "Participants Served": "50,000+",
      "Club Sign-ups": "15,000+",
      "NPS Score": "92"
    },
    category: "Beauty & Fashion",
    featured: false,
    heroImage: "/images/case-studies/nike-run.jpg"
  },
  {
    id: "sephora-beauty-insider",
    name: "Sephora Beauty Insider Events",
    tagline: "Exclusive Beauty Experiences",
    description: "VIP event staffing for Sephora Beauty Insider exclusive shopping events. Our beauty-trained ambassadors provided personalized consultations and product recommendations.",
    industry: "Beauty",
    services: ["Retail Events", "Brand Ambassadors", "VIP Services"],
    markets: ["Nationwide"],
    date: "2024",
    stats: {
      "Events Staffed": "200+",
      "VIP Guests Served": "75,000+",
      "Sales Generated": "$5M+",
      "Guest Satisfaction": "96%"
    },
    category: "Beauty & Fashion",
    featured: false,
    heroImage: "/images/case-studies/sephora-event.jpg"
  },
  {
    id: "loreal-paris-nyfw",
    name: "L'Oreal Paris NYFW",
    tagline: "Worth It Moments",
    description: "Complete event staffing for L'Oreal Paris New York Fashion Week activations including runway shows, influencer events, and consumer experiences in Times Square.",
    industry: "Beauty",
    services: ["Fashion Week Staffing", "VIP Management", "Influencer Events"],
    markets: ["New York City"],
    date: "2024",
    stats: {
      "Fashion Week Events": "12",
      "Influencer Interactions": "500+",
      "Consumer Experiences": "10,000+",
      "Media Impressions": "100M+"
    },
    category: "Beauty & Fashion",
    featured: false,
    heroImage: "/images/case-studies/loreal-nyfw.jpg"
  },
  {
    id: "under-armour-training",
    name: "Under Armour Training Days",
    tagline: "The Only Way Is Through",
    description: "Fitness event series featuring professional athletes and training sessions. Our team managed registration, athlete coordination, and participant engagement.",
    industry: "Fashion",
    services: ["Fitness Events", "Athlete Management", "Brand Experience"],
    markets: ["Baltimore", "New York", "Los Angeles"],
    date: "2024",
    stats: {
      "Training Events": "50+",
      "Participants": "25,000+",
      "Athlete Appearances": "30+",
      "Social Engagement": "500K+"
    },
    category: "Beauty & Fashion",
    featured: false,
    heroImage: "/images/case-studies/under-armour.jpg"
  },

  // ============ ENTERTAINMENT ============
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
    featured: false,
    heroImage: "/images/case-studies/formula-1.jpg",
    images: [
      "/images/case-studies/formula-1.jpg",
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
    featured: false,
    heroImage: "/images/case-studies/williams-racing.jpg",
    images: [
      "/images/case-studies/williams-racing.jpg",
      "/images/case-studies/williams-racing-2.jpg",
      "/images/case-studies/williams-racing-3.jpg"
    ]
  },
  {
    id: "netflix-stranger-things",
    name: "Netflix Stranger Things Experience",
    tagline: "Turn Your World Upside Down",
    description: "Immersive pop-up experience staffing for Netflix's Stranger Things activation. Our team guided fans through the Upside Down and managed character meet-and-greets.",
    industry: "Entertainment",
    services: ["Pop-Up Experience", "Character Performers", "Guest Services"],
    markets: ["New York", "Los Angeles", "Atlanta"],
    date: "2024",
    stats: {
      "Experience Duration": "3 Months",
      "Guests Served": "200,000+",
      "Wait Time Managed": "Avg 45 min",
      "5-Star Reviews": "95%"
    },
    category: "Entertainment",
    featured: false,
    heroImage: "/images/case-studies/netflix-stranger.jpg"
  },
  {
    id: "disney-plus-launch",
    name: "Disney+ Launch Events",
    tagline: "The Best Stories in One Place",
    description: "Multi-market launch activation for Disney+ streaming service featuring character appearances, photo opportunities, and subscription sign-ups.",
    industry: "Entertainment",
    services: ["Launch Events", "Character Performers", "Lead Generation"],
    markets: ["Nationwide"],
    date: "2023",
    stats: {
      "Launch Markets": "50+",
      "Character Appearances": "500+",
      "Sign-ups Generated": "100,000+",
      "Media Coverage": "National"
    },
    category: "Entertainment",
    featured: false,
    heroImage: "/images/case-studies/disney-plus.jpg"
  },
  {
    id: "hbo-house-of-dragon",
    name: "HBO House of the Dragon Premiere",
    tagline: "Fire Will Reign",
    description: "Premiere event staffing for HBO's House of the Dragon including red carpet management, VIP hospitality, and fan experience activations.",
    industry: "Entertainment",
    services: ["Premiere Events", "VIP Management", "Red Carpet"],
    markets: ["Los Angeles"],
    date: "2024",
    stats: {
      "Red Carpet Staff": "75+",
      "VIP Guests": "2,000+",
      "Fan Zone Visitors": "10,000+",
      "Media Outlets": "200+"
    },
    category: "Entertainment",
    featured: false,
    heroImage: "/images/case-studies/hbo-dragon.jpg"
  },
  {
    id: "comic-con-marvel",
    name: "Marvel at San Diego Comic-Con",
    tagline: "Assemble the Fans",
    description: "Comprehensive booth staffing and panel management for Marvel at San Diego Comic-Con, including talent wrangling, fan activations, and exclusive merchandise distribution.",
    industry: "Entertainment",
    services: ["Convention Staffing", "Talent Management", "Fan Experiences"],
    markets: ["San Diego"],
    date: "2024",
    stats: {
      "SDCC Days": "4",
      "Fan Interactions": "50,000+",
      "Exclusive Items": "10,000+",
      "Panel Attendees": "20,000+"
    },
    category: "Entertainment",
    featured: false,
    heroImage: "/images/case-studies/marvel-sdcc.jpg"
  },

  // ============ SPORTS ============
  {
    id: "nfl-super-bowl-week",
    name: "NFL Super Bowl Experience",
    tagline: "The Ultimate Fan Festival",
    description: "Complete staffing for NFL Super Bowl Experience, the league's interactive football theme park, featuring player appearances, skill challenges, and sponsor activations.",
    industry: "Sports",
    services: ["Event Staffing", "Player Appearances", "Interactive Games"],
    markets: ["Various Super Bowl Host Cities"],
    date: "2024",
    stats: {
      "Experience Duration": "10 Days",
      "Fan Interactions": "1M+",
      "Sponsor Activations": "50+",
      "Player Meet & Greets": "100+"
    },
    category: "Sports",
    featured: false,
    heroImage: "/images/case-studies/nfl-experience.jpg"
  },
  {
    id: "nba-all-star",
    name: "NBA All-Star Weekend",
    tagline: "Where Amazing Happens",
    description: "Event staffing for NBA All-Star Weekend including fan festival, celebrity game, slam dunk contest, and all-star game hospitality.",
    industry: "Sports",
    services: ["Event Staffing", "VIP Hospitality", "Fan Activation"],
    markets: ["Various All-Star Host Cities"],
    date: "2024",
    stats: {
      "Weekend Events": "15+",
      "Fan Zone Visitors": "200,000+",
      "VIP Experiences": "5,000+",
      "Sponsor Activations": "30+"
    },
    category: "Sports",
    featured: false,
    heroImage: "/images/case-studies/nba-allstar.jpg"
  },
  {
    id: "mlb-world-series",
    name: "MLB World Series Fan Fest",
    tagline: "October Baseball Magic",
    description: "Fan festival staffing for MLB World Series featuring batting cages, autograph sessions, and team merchandise activations.",
    industry: "Sports",
    services: ["Event Staffing", "Interactive Experiences", "Merchandise"],
    markets: ["Host Cities"],
    date: "2023",
    stats: {
      "Festival Days": "7",
      "Fan Participants": "100,000+",
      "Autograph Sessions": "50+",
      "Batting Cage Turns": "25,000+"
    },
    category: "Sports",
    featured: false,
    heroImage: "/images/case-studies/mlb-world-series.jpg"
  },
  {
    id: "pga-championship",
    name: "PGA Championship Hospitality",
    tagline: "Championship Experience",
    description: "Premium hospitality staffing for PGA Championship corporate tents and VIP experiences, including food service, guest management, and player viewing areas.",
    industry: "Sports",
    services: ["Hospitality Staffing", "VIP Services", "Corporate Events"],
    markets: ["Host Courses"],
    date: "2024",
    stats: {
      "Tournament Days": "4",
      "VIP Guests Served": "15,000+",
      "Corporate Tents": "25+",
      "Guest Satisfaction": "97%"
    },
    category: "Sports",
    featured: false,
    heroImage: "/images/case-studies/pga-championship.jpg"
  },
  {
    id: "ufc-fight-week",
    name: "UFC Fight Week Las Vegas",
    tagline: "This is the Octagon",
    description: "Comprehensive event staffing for UFC Fight Week including fan expo, weigh-ins, and fight night hospitality at T-Mobile Arena.",
    industry: "Sports",
    services: ["Event Staffing", "Fan Expo", "VIP Hospitality"],
    markets: ["Las Vegas"],
    date: "2024",
    stats: {
      "Fight Week Events": "10+",
      "Fan Expo Visitors": "75,000+",
      "Fight Night VIPs": "5,000+",
      "Athlete Encounters": "200+"
    },
    category: "Sports",
    featured: false,
    heroImage: "/images/case-studies/ufc-fight-week.jpg"
  },

  // ============ AUTOMOTIVE ============
  {
    id: "tesla-delivery-events",
    name: "Tesla Delivery Events",
    tagline: "The Future is Electric",
    description: "Premium delivery experience staffing for Tesla vehicle handoffs, ensuring every new owner receives VIP treatment and comprehensive vehicle orientation.",
    industry: "Automotive",
    services: ["Delivery Events", "Product Training", "VIP Experience"],
    markets: ["Nationwide"],
    date: "2024",
    stats: {
      "Delivery Centers": "50+",
      "Vehicles Delivered": "100,000+",
      "Owner Satisfaction": "98%",
      "Referral Rate": "35%"
    },
    category: "Automotive",
    featured: false,
    heroImage: "/images/case-studies/tesla-delivery.jpg"
  },
  {
    id: "porsche-experience",
    name: "Porsche Experience Center",
    tagline: "Dream. Drive. Porsche.",
    description: "Staffing support for Porsche Experience Centers in Atlanta and Los Angeles, including driving instructors, hospitality staff, and brand ambassadors.",
    industry: "Automotive",
    services: ["Experience Center Staffing", "Hospitality", "Brand Ambassadors"],
    markets: ["Atlanta", "Los Angeles"],
    date: "2024",
    stats: {
      "Experiences Delivered": "25,000+",
      "Track Laps": "100,000+",
      "Corporate Events": "500+",
      "Guest Rating": "4.9/5"
    },
    category: "Automotive",
    featured: false,
    heroImage: "/images/case-studies/porsche-experience.jpg"
  },
  {
    id: "auto-show-detroit",
    name: "North American Auto Show",
    tagline: "Future Mobility Today",
    description: "Comprehensive exhibit staffing for multiple OEMs at the North American International Auto Show, featuring product specialists and lead generation teams.",
    industry: "Automotive",
    services: ["Trade Show Staffing", "Product Specialists", "Lead Capture"],
    markets: ["Detroit"],
    date: "2024",
    stats: {
      "OEMs Staffed": "8",
      "Show Days": "9",
      "Lead Captures": "50,000+",
      "Product Demos": "200,000+"
    },
    category: "Automotive",
    featured: false,
    heroImage: "/images/case-studies/auto-show-detroit.jpg"
  },

  // ============ RETAIL ============
  {
    id: "amazon-go-launch",
    name: "Amazon Go Store Openings",
    tagline: "Just Walk Out",
    description: "Store opening support for Amazon Go locations featuring customer education, queue management, and technical assistance for the checkout-free experience.",
    industry: "Retail",
    services: ["Store Openings", "Customer Education", "Tech Support"],
    markets: ["Seattle", "San Francisco", "New York", "Chicago"],
    date: "2024",
    stats: {
      "Store Openings": "25+",
      "Customers Educated": "500,000+",
      "App Downloads Assisted": "100,000+",
      "Customer Satisfaction": "95%"
    },
    category: "Retail",
    featured: false,
    heroImage: "/images/case-studies/amazon-go.jpg"
  },
  {
    id: "costco-roadshows",
    name: "Costco Roadshow Events",
    tagline: "Member Value Delivered",
    description: "Product demonstration and sampling support for various brands at Costco Roadshow events nationwide, driving member engagement and sales.",
    industry: "Retail",
    services: ["Product Demos", "Sampling", "Retail Marketing"],
    markets: ["Nationwide"],
    date: "2024",
    stats: {
      "Costco Locations": "200+",
      "Demo Events": "1,000+",
      "Samples Distributed": "5M+",
      "Sales Generated": "$50M+"
    },
    category: "Retail",
    featured: false,
    heroImage: "/images/case-studies/costco-roadshow.jpg"
  },
  {
    id: "whole-foods-sampling",
    name: "Whole Foods Brand Sampling",
    tagline: "Taste the Difference",
    description: "In-store sampling program for emerging CPG brands at Whole Foods Market locations, introducing shoppers to new products and driving trial.",
    industry: "Retail",
    services: ["In-Store Sampling", "Brand Ambassadors", "Retail Marketing"],
    markets: ["Nationwide"],
    date: "2024",
    stats: {
      "WFM Locations": "300+",
      "Brands Represented": "50+",
      "Samples Distributed": "2M+",
      "Same-Day Purchase": "35%"
    },
    category: "Retail",
    featured: false,
    heroImage: "/images/case-studies/whole-foods.jpg"
  },
  {
    id: "target-holiday",
    name: "Target Holiday Activation",
    tagline: "Expect More, Pay Less",
    description: "Holiday season brand activation support at Target stores featuring gift guides, product demonstrations, and seasonal staffing augmentation.",
    industry: "Retail",
    services: ["Holiday Marketing", "Product Demos", "Seasonal Staffing"],
    markets: ["Nationwide"],
    date: "2023",
    stats: {
      "Target Locations": "500+",
      "Holiday Season": "8 Weeks",
      "Brand Interactions": "5M+",
      "Gift Guide Sign-ups": "200,000+"
    },
    category: "Retail",
    featured: false,
    heroImage: "/images/case-studies/target-holiday.jpg"
  },

  // ============ HEALTHCARE & PHARMA ============
  {
    id: "pfizer-medical-conference",
    name: "Pfizer Medical Conference",
    tagline: "Science Will Win",
    description: "Medical conference staffing for Pfizer at major healthcare conventions, providing trained staff for HCP engagement and educational presentations.",
    industry: "Healthcare",
    services: ["Medical Conference Staffing", "HCP Engagement", "Educational Support"],
    markets: ["Nationwide Medical Conferences"],
    date: "2024",
    stats: {
      "Conferences Staffed": "25+",
      "HCPs Engaged": "50,000+",
      "Educational Sessions": "200+",
      "Compliance Rate": "100%"
    },
    category: "Healthcare",
    featured: false,
    heroImage: "/images/case-studies/pfizer-conference.jpg"
  },
  {
    id: "cvs-health-events",
    name: "CVS Health & Wellness Events",
    tagline: "Helping People on Their Path to Better Health",
    description: "Community health event staffing for CVS Health featuring flu shot clinics, health screenings, and wellness education programs.",
    industry: "Healthcare",
    services: ["Health Events", "Community Outreach", "Wellness Education"],
    markets: ["Nationwide"],
    date: "2024",
    stats: {
      "Health Events": "500+",
      "Screenings Conducted": "100,000+",
      "Flu Shots Administered": "250,000+",
      "Community Reach": "5M+"
    },
    category: "Healthcare",
    featured: false,
    heroImage: "/images/case-studies/cvs-health.jpg"
  },

  // ============ FINANCE & INSURANCE ============
  {
    id: "chase-sapphire-events",
    name: "Chase Sapphire Experiences",
    tagline: "A World of Experiences",
    description: "Exclusive event staffing for Chase Sapphire cardmember experiences including culinary events, concerts, and travel experiences.",
    industry: "Finance",
    services: ["VIP Events", "Hospitality", "Cardmember Experiences"],
    markets: ["Major US Cities"],
    date: "2024",
    stats: {
      "Exclusive Events": "100+",
      "Cardmembers Served": "25,000+",
      "Event Categories": "10+",
      "Member Satisfaction": "97%"
    },
    category: "Finance",
    featured: false,
    heroImage: "/images/case-studies/chase-sapphire.jpg"
  },
  {
    id: "state-farm-community",
    name: "State Farm Community Events",
    tagline: "Like a Good Neighbor",
    description: "Community event activation support for State Farm agents including local festivals, sports events, and neighborhood gatherings.",
    industry: "Insurance",
    services: ["Community Events", "Brand Ambassadors", "Local Marketing"],
    markets: ["Nationwide"],
    date: "2024",
    stats: {
      "Community Events": "1,000+",
      "Agents Supported": "500+",
      "Lead Captures": "100,000+",
      "Quote Requests": "50,000+"
    },
    category: "Finance",
    featured: false,
    heroImage: "/images/case-studies/state-farm.jpg"
  },

  // ============ TRAVEL & HOSPITALITY ============
  {
    id: "marriott-bonvoy",
    name: "Marriott Bonvoy Activations",
    tagline: "Rewards Reimagined",
    description: "Experiential activations for Marriott Bonvoy loyalty program at airports, sporting events, and travel expos.",
    industry: "Hospitality",
    services: ["Travel Marketing", "Loyalty Activation", "Lead Generation"],
    markets: ["Major Airports & Events"],
    date: "2024",
    stats: {
      "Activation Locations": "50+",
      "Member Sign-ups": "75,000+",
      "Traveler Interactions": "500,000+",
      "App Downloads": "50,000+"
    },
    category: "Travel",
    featured: false,
    heroImage: "/images/case-studies/marriott-bonvoy.jpg"
  },
  {
    id: "southwest-airlines",
    name: "Southwest Airlines Campus Events",
    tagline: "Low Fares, High Spirits",
    description: "College campus activation program for Southwest Airlines targeting young travelers with special fares and loyalty program sign-ups.",
    industry: "Travel",
    services: ["Campus Marketing", "Brand Ambassadors", "Lead Generation"],
    markets: ["College Campuses Nationwide"],
    date: "2024",
    stats: {
      "Campuses Visited": "100+",
      "Students Engaged": "200,000+",
      "Rapid Rewards Sign-ups": "50,000+",
      "Bookings Generated": "25,000+"
    },
    category: "Travel",
    featured: false,
    heroImage: "/images/case-studies/southwest-campus.jpg"
  },

  // ============ CPG & CONSUMER GOODS ============
  {
    id: "pg-sampling-tour",
    name: "P&G New Product Sampling Tour",
    tagline: "Trusted Brands Delivered",
    description: "Multi-brand sampling tour for Procter & Gamble featuring new product introductions across personal care, home care, and beauty categories.",
    industry: "CPG",
    services: ["Mobile Sampling Tour", "Product Education", "Consumer Research"],
    markets: ["50 US Markets"],
    date: "2024",
    stats: {
      "Tour Markets": "50",
      "Brands Featured": "12",
      "Samples Distributed": "3M+",
      "Consumer Surveys": "100,000+"
    },
    category: "Consumer Goods",
    featured: false,
    heroImage: "/images/case-studies/pg-sampling.jpg"
  },
  {
    id: "unilever-sustainability",
    name: "Unilever Sustainability Tour",
    tagline: "Small Actions, Big Difference",
    description: "Educational mobile tour for Unilever promoting sustainable living practices and introducing eco-friendly product innovations.",
    industry: "CPG",
    services: ["Mobile Tour", "Education", "Product Sampling"],
    markets: ["Major US Cities"],
    date: "2024",
    stats: {
      "Tour Stops": "30",
      "Consumers Educated": "150,000+",
      "Pledge Sign-ups": "50,000+",
      "Product Samples": "500,000+"
    },
    category: "Consumer Goods",
    featured: false,
    heroImage: "/images/case-studies/unilever-sustainability.jpg"
  }
];
