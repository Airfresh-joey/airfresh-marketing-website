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
}

export const portfolioCaseStudies: CaseStudy[] = [
  {
    id: "netflix-stranger-things",
    name: "Netflix Stranger Things",
    tagline: "Immersive 80's Experience",
    description: "Created an immersive pop-up experience for Netflix's Stranger Things Season 4 launch, featuring interactive sets, character meet-and-greets, and exclusive merchandise. Our team managed 50+ brand ambassadors across 10 major markets, generating massive social media buzz and fan engagement.",
    industry: "Entertainment",
    services: ["Brand Ambassadors", "Experiential Marketing", "Event Production"],
    markets: ["Los Angeles", "New York", "Chicago", "Miami", "San Francisco"],
    date: "2024",
    stats: {
      "Total Attendees": "250,000+",
      "Social Impressions": "15M+",
      "Media Coverage": "500+ outlets",
      "Engagement Rate": "92%"
    },
    category: "Entertainment",
    featured: true,
    heroImage: "/images/case-studies/netflix.jpg"
  },
  {
    id: "mrbeast-burger-launch",
    name: "MrBeast Burger Grand Opening",
    tagline: "YouTube's Biggest Food Launch",
    description: "Executed nationwide grand opening events for MrBeast Burger locations, managing crowds of thousands of fans. Our street teams created viral moments, managed VIP experiences, and ensured smooth operations despite overwhelming demand.",
    industry: "Food & Beverage",
    services: ["Street Teams", "Event Management", "Crowd Control"],
    markets: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"],
    date: "2023",
    stats: {
      "Launch Day Sales": "$1.2M+",
      "Fans Served": "50,000+",
      "Social Reach": "25M+",
      "Store Traffic Increase": "400%"
    },
    category: "Food & Beverage",
    featured: true,
    heroImage: "/images/case-studies/mrbeast.jpg"
  },
  {
    id: "microsoft-xbox-activation",
    name: "Microsoft Xbox Series X Launch",
    tagline: "Next-Gen Gaming Experience",
    description: "Designed and executed a multi-city gaming tournament and product demonstration tour for Xbox Series X launch. Created interactive gaming lounges, competitive tournaments, and influencer partnerships that drove pre-orders and brand awareness.",
    industry: "Technology",
    services: ["Experiential Marketing", "Product Demos", "Tournament Management"],
    markets: ["Seattle", "San Francisco", "Los Angeles", "Austin", "Boston"],
    date: "2023",
    stats: {
      "Gamers Engaged": "75,000+",
      "Pre-orders Generated": "5,000+",
      "Tournament Participants": "10,000+",
      "Brand Sentiment": "+85%"
    },
    category: "Technology",
    featured: true,
    heroImage: "/images/case-studies/microsoft.jpg"
  },
  {
    id: "mac-cosmetics-masterclass",
    name: "MAC Cosmetics Masterclass Tour",
    tagline: "Beauty Education Nationwide",
    description: "Produced a 20-city masterclass tour featuring MAC's senior artists, providing personalized makeup consultations and tutorials. Our brand ambassadors drove foot traffic, managed appointments, and created shareable social moments.",
    industry: "Beauty",
    services: ["Brand Ambassadors", "Event Production", "Influencer Marketing"],
    markets: ["New York", "Los Angeles", "Miami", "Dallas", "Atlanta"],
    date: "2024",
    stats: {
      "Masterclass Attendees": "15,000+",
      "Products Sold": "$2.5M+",
      "Email Captures": "12,000+",
      "Conversion Rate": "78%"
    },
    category: "Beauty & Fashion",
    featured: false,
    heroImage: "/images/case-studies/mac-cosmetics.jpg"
  },
  {
    id: "starbucks-reserve-opening",
    name: "Starbucks Reserve Roastery",
    tagline: "Premium Coffee Experience",
    description: "Managed grand opening events for Starbucks Reserve Roastery locations, creating exclusive VIP previews, coffee education sessions, and community engagement programs that established each location as a neighborhood destination.",
    industry: "Food & Beverage",
    services: ["Event Management", "Brand Ambassadors", "Community Engagement"],
    markets: ["Chicago", "New York", "Seattle"],
    date: "2023",
    stats: {
      "Opening Week Visitors": "50,000+",
      "VIP Event Attendees": "2,000+",
      "Media Impressions": "10M+",
      "Member Sign-ups": "8,000+"
    },
    category: "Food & Beverage",
    featured: false,
    heroImage: "/images/case-studies/starbucks.jpg"
  },
  {
    id: "formula-1-las-vegas",
    name: "Formula 1 Las Vegas Grand Prix",
    tagline: "Racing Into the Future",
    description: "Executed comprehensive event staffing and brand activation for the inaugural Formula 1 Las Vegas Grand Prix, managing hospitality suites, fan zones, and VIP experiences across the Las Vegas Strip.",
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
    heroImage: "/images/case-studies/formula-1.jpg"
  },
  {
    id: "cirque-du-soleil-activation",
    name: "Cirque du Soleil Tour Launch",
    tagline: "Spectacular Brand Experience",
    description: "Created immersive pre-show experiences and street marketing campaigns for Cirque du Soleil touring productions, driving ticket sales and building excitement in each market through creative guerrilla marketing and brand ambassador activations.",
    industry: "Entertainment",
    services: ["Street Teams", "Brand Ambassadors", "Experiential Marketing"],
    markets: ["Las Vegas", "Los Angeles", "New York", "Chicago", "Miami"],
    date: "2024",
    stats: {
      "Markets Activated": "25+",
      "Ticket Sales Driven": "50,000+",
      "Street Team Impressions": "2M+",
      "Brand Awareness Lift": "+40%"
    },
    category: "Entertainment",
    featured: false,
    heroImage: "/images/case-studies/cirque-du-soleil.jpg"
  },
  {
    id: "1800-tequila-sampling",
    name: "1800 Tequila National Sampling",
    tagline: "Premium Spirits Experience",
    description: "Executed a nationwide sampling and brand ambassador program for 1800 Tequila, featuring premium tasting experiences at bars, restaurants, and special events. Our trained brand ambassadors educated consumers on the brand's heritage and cocktail culture.",
    industry: "Beverage",
    services: ["Product Sampling", "Brand Ambassadors", "Bar Marketing"],
    markets: ["Los Angeles", "Miami", "New York", "Dallas", "Chicago"],
    date: "2024",
    stats: {
      "Samples Distributed": "500,000+",
      "Venues Activated": "1,000+",
      "Consumer Interactions": "250,000+",
      "Sales Lift": "+35%"
    },
    category: "Beverage",
    featured: false,
    heroImage: "/images/case-studies/1800-tequila.jpg"
  },
  {
    id: "beer-sampling-program",
    name: "National Craft Beer Sampling",
    tagline: "Taste the Craft Revolution",
    description: "Managed comprehensive beer sampling programs for multiple craft breweries at festivals, retail locations, and sports venues nationwide. Our trained beer ambassadors delivered engaging brand experiences that converted samplers to loyal customers.",
    industry: "Beverage",
    services: ["Product Sampling", "Festival Marketing", "Retail Activation"],
    markets: ["Nationwide - 50+ Markets"],
    date: "2024",
    stats: {
      "Events Staffed": "500+",
      "Samples Poured": "2M+",
      "New Customers Acquired": "100,000+",
      "Retail Sales Lift": "+45%"
    },
    category: "Beverage",
    featured: false,
    heroImage: "/images/case-studies/beer-samplings.jpg"
  },
  {
    id: "buffalo-wild-wings-promotion",
    name: "Buffalo Wild Wings Game Day",
    tagline: "Wings Meet Championship Moments",
    description: "Staffed major sporting event activations and game day promotions for Buffalo Wild Wings, creating engaging fan experiences at stadiums, tailgates, and watch parties that drove restaurant traffic and brand loyalty.",
    industry: "Food & Beverage",
    services: ["Sports Marketing", "Event Staffing", "Promotional Marketing"],
    markets: ["Nationwide - NFL Cities"],
    date: "2023",
    stats: {
      "Events Activated": "200+",
      "Fan Engagements": "500,000+",
      "App Downloads": "75,000+",
      "Traffic Increase": "+30%"
    },
    category: "Food & Beverage",
    featured: false,
    heroImage: "/images/case-studies/buffalo-wild-wings.jpg"
  },
  {
    id: "byoma-skincare-launch",
    name: "BYOMA Skincare Launch",
    tagline: "Barrier Care Revolution",
    description: "Launched BYOMA's barrier skincare line with in-store demos at major retailers, influencer events, and pop-up activations. Our beauty ambassadors educated consumers on the science of skin barrier health while driving trial and purchase.",
    industry: "Beauty",
    services: ["Product Launch", "In-Store Demos", "Influencer Events"],
    markets: ["Target Stores Nationwide"],
    date: "2024",
    stats: {
      "Store Demos": "500+",
      "Samples Distributed": "200,000+",
      "Social Impressions": "5M+",
      "First-Month Sales": "Exceeded Target by 150%"
    },
    category: "Beauty & Fashion",
    featured: false,
    heroImage: "/images/case-studies/byoma.jpg"
  },
  {
    id: "williams-racing-f1",
    name: "Williams Racing Fan Experience",
    tagline: "Racing Heritage Meets Innovation",
    description: "Delivered premium fan experiences and hospitality services for Williams Racing at Formula 1 events, managing paddock tours, autograph sessions, and sponsor activations that brought fans closer to the action.",
    industry: "Sports & Entertainment",
    services: ["VIP Management", "Hospitality", "Fan Activation"],
    markets: ["F1 Circuit - Multiple Grand Prix"],
    date: "2024",
    stats: {
      "VIP Experiences": "5,000+",
      "Fan Interactions": "100,000+",
      "Sponsor Activations": "50+",
      "Guest Satisfaction": "97%"
    },
    category: "Entertainment",
    featured: false,
    heroImage: "/images/case-studies/williams-racing.jpg"
  },
  {
    id: "meijer-retail-activation",
    name: "Meijer In-Store Activation",
    tagline: "Midwest Retail Excellence",
    description: "Executed comprehensive in-store sampling and promotional programs for multiple brands at Meijer locations across the Midwest, driving product trial and increasing basket size through engaging customer interactions.",
    industry: "Retail",
    services: ["In-Store Marketing", "Product Sampling", "Promotional Events"],
    markets: ["Michigan", "Ohio", "Indiana", "Illinois", "Wisconsin"],
    date: "2024",
    stats: {
      "Stores Activated": "200+",
      "Samples Distributed": "1M+",
      "Sales Lift": "+55%",
      "Brand Awareness": "+40%"
    },
    category: "Retail",
    featured: false,
    heroImage: "/images/case-studies/meijer.jpg"
  },
  {
    id: "polaris-outdoor-tour",
    name: "Polaris Adventures Tour",
    tagline: "Off-Road Brand Experience",
    description: "Managed a nationwide demo tour for Polaris powersports vehicles, staffing test ride events, dealer activations, and outdoor festivals. Our trained product specialists helped customers experience the thrill of Polaris vehicles firsthand.",
    industry: "Automotive",
    services: ["Demo Tours", "Product Specialists", "Dealer Events"],
    markets: ["Outdoor Events Nationwide"],
    date: "2024",
    stats: {
      "Test Rides": "25,000+",
      "Events Staffed": "100+",
      "Leads Generated": "15,000+",
      "Conversion Rate": "12%"
    },
    category: "Automotive",
    featured: false,
    heroImage: "/images/case-studies/polaris.jpg"
  },
  {
    id: "clarins-beauty-experience",
    name: "Clarins Spa Experience Tour",
    tagline: "Luxury Skincare Discovery",
    description: "Created premium spa experiences and beauty consultations for Clarins at department stores and luxury retail locations, featuring personalized skincare analysis and product recommendations from trained beauty experts.",
    industry: "Beauty",
    services: ["Brand Ambassadors", "Beauty Consultations", "Luxury Retail"],
    markets: ["Nordstrom & Neiman Marcus Nationwide"],
    date: "2024",
    stats: {
      "Consultations Delivered": "30,000+",
      "Average Transaction": "+65%",
      "Customer Loyalty Sign-ups": "20,000+",
      "Return Customer Rate": "45%"
    },
    category: "Beauty & Fashion",
    featured: false,
    heroImage: "/images/case-studies/clarins.jpg"
  },
  {
    id: "wagamama-opening",
    name: "Wagamama US Expansion",
    tagline: "Asian-Inspired Fast Casual",
    description: "Supported Wagamama's US market expansion with grand opening events, local marketing activations, and community engagement programs that introduced the brand to new markets and built loyal customer bases.",
    industry: "Food & Beverage",
    services: ["Grand Opening Events", "Local Marketing", "Community Engagement"],
    markets: ["New York", "Boston", "Washington DC"],
    date: "2023",
    stats: {
      "Grand Openings": "10+",
      "Opening Week Traffic": "5,000+ per location",
      "Social Media Growth": "+200%",
      "Repeat Visit Rate": "35%"
    },
    category: "Food & Beverage",
    featured: false,
    heroImage: "/images/case-studies/wagamama.jpg"
  },
  {
    id: "skinny-mixes-sampling",
    name: "Skinny Mixes National Campaign",
    tagline: "Zero Sugar, Full Flavor",
    description: "Executed a nationwide sampling campaign for Skinny Mixes at grocery stores, fitness centers, and wellness events, connecting with health-conscious consumers and driving trial of the zero-sugar cocktail mixer brand.",
    industry: "Beverage",
    services: ["Product Sampling", "Wellness Marketing", "Retail Activation"],
    markets: ["Nationwide Retail"],
    date: "2024",
    stats: {
      "Samples Distributed": "500,000+",
      "Retail Locations": "2,000+",
      "Social Engagements": "100,000+",
      "Sales Growth": "+80%"
    },
    category: "Beverage",
    featured: false,
    heroImage: "/images/case-studies/skinny-mixes.jpg"
  },
  {
    id: "topps-trading-cards",
    name: "Topps Trading Card Events",
    tagline: "Collecting Comes Alive",
    description: "Staffed major sports card and collectibles events for Topps, managing autograph sessions, pack breaks, and collector meetups that created memorable experiences for sports and entertainment fans.",
    industry: "Entertainment",
    services: ["Event Staffing", "Autograph Sessions", "Fan Experiences"],
    markets: ["Major Sports Events Nationwide"],
    date: "2024",
    stats: {
      "Events Staffed": "50+",
      "Collector Interactions": "75,000+",
      "Exclusive Pack Sales": "100,000+",
      "Social Impressions": "10M+"
    },
    category: "Entertainment",
    featured: false,
    heroImage: "/images/case-studies/topps-cards.jpg"
  },
  {
    id: "waiakea-water-campaign",
    name: "Waiakea Hawaiian Water",
    tagline: "Sustainable Hydration",
    description: "Launched Waiakea's premium Hawaiian volcanic water with eco-focused sampling campaigns at yoga studios, farmers markets, and wellness events, highlighting the brand's sustainability story and unique mineral content.",
    industry: "Beverage",
    services: ["Product Sampling", "Wellness Marketing", "Sustainability Events"],
    markets: ["California", "Hawaii", "Colorado", "Arizona"],
    date: "2024",
    stats: {
      "Samples Distributed": "300,000+",
      "Wellness Events": "200+",
      "Brand Awareness Lift": "+60%",
      "Retail Velocity": "+45%"
    },
    category: "Beverage",
    featured: false,
    heroImage: "/images/case-studies/waiakea-water.jpg"
  },
  {
    id: "katjes-candy-launch",
    name: "Katjes Plant-Based Candy",
    tagline: "Germany's Favorite Goes Stateside",
    description: "Introduced Katjes plant-based gummy candies to US consumers through targeted sampling at natural grocery stores, vegan festivals, and lifestyle events, building awareness for the European confection brand.",
    industry: "Food & Beverage",
    services: ["Product Launch", "Sampling", "Specialty Retail"],
    markets: ["Whole Foods & Natural Retailers Nationwide"],
    date: "2024",
    stats: {
      "Stores Activated": "500+",
      "Samples Distributed": "250,000+",
      "Retailer Reorders": "95%",
      "Consumer Trial Rate": "70%"
    },
    category: "Food & Beverage",
    featured: false,
    heroImage: "/images/case-studies/katjes.jpg"
  }
];
