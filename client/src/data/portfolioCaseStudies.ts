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
    id: "formula-1-las-vegas",
    name: "Formula 1 Las Vegas Grand Prix",
    tagline: "Racing Into the Future",
    description: "Executed comprehensive event staffing and brand activation for the Formula 1 Las Vegas Grand Prix, managing hospitality suites, fan zones, and VIP experiences across the Las Vegas Strip. Our team delivered world-class service for one of motorsport's most anticipated events.",
    industry: "Sports & Entertainment",
    services: ["Event Staffing", "VIP Management", "Brand Activation", "Hospitality"],
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
    heroImage: "/images/case-studies/formula-1.jpg",
    images: [
      "/images/case-studies/formula-1.jpg",
      "/images/case-studies/formula-1-2.jpg",
      "/images/case-studies/formula-1-3.jpg",
      "/images/case-studies/formula-1-4.jpg",
      "/images/case-studies/formula-1-5.jpg"
    ]
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
    featured: true,
    heroImage: "/images/case-studies/williams-racing.jpg",
    images: [
      "/images/case-studies/williams-racing.jpg",
      "/images/case-studies/williams-racing-2.jpg",
      "/images/case-studies/williams-racing-3.jpg",
      "/images/case-studies/williams-racing-4.jpg",
      "/images/case-studies/williams-racing-5.jpg"
    ]
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
    featured: true,
    heroImage: "/images/case-studies/beer-samplings.jpg",
    images: [
      "/images/case-studies/beer-samplings.jpg",
      "/images/case-studies/beer-samplings-2.jpg",
      "/images/case-studies/beer-samplings-3.jpg",
      "/images/case-studies/beer-samplings-4.jpg",
      "/images/case-studies/beer-samplings-5.jpg"
    ]
  },
  {
    id: "cortie-digital-activation",
    name: "Cortie Digital Brand Launch",
    tagline: "Digital Innovation Meets Live Experience",
    description: "Launched Cortie Digital's innovative platform with multi-city activation events, product demonstrations, and influencer partnerships. Our brand ambassadors educated consumers on the technology while creating shareable social moments.",
    industry: "Technology",
    services: ["Product Launch", "Brand Ambassadors", "Tech Demos"],
    markets: ["Los Angeles", "San Francisco", "New York", "Austin"],
    date: "2024",
    stats: {
      "Product Demos": "25,000+",
      "Lead Generation": "15,000+",
      "Social Impressions": "5M+",
      "Conversion Rate": "12%"
    },
    category: "Technology",
    featured: false,
    heroImage: "/images/case-studies/cortie-digital.jpg",
    images: [
      "/images/case-studies/cortie-digital.jpg",
      "/images/case-studies/cortie-digital-2.jpg",
      "/images/case-studies/cortie-digital-3.jpg",
      "/images/case-studies/cortie-digital-4.jpg",
      "/images/case-studies/cortie-digital-5.jpg"
    ]
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
    heroImage: "/images/case-studies/meijer.jpg",
    images: [
      "/images/case-studies/meijer.jpg",
      "/images/case-studies/meijer-2.jpg",
      "/images/case-studies/meijer-3.jpg",
      "/images/case-studies/meijer-4.jpg",
      "/images/case-studies/meijer-5.jpg"
    ]
  },
  {
    id: "bond-vet-grand-opening",
    name: "Bond Vet Clinic Openings",
    tagline: "Modern Pet Care Experience",
    description: "Supported Bond Vet's expansion with grand opening events and community outreach programs at new clinic locations, creating welcoming experiences for pet owners and building local brand awareness.",
    industry: "Healthcare",
    services: ["Grand Opening Events", "Community Marketing", "Brand Ambassadors"],
    markets: ["New York", "Boston", "Chicago", "Washington DC"],
    date: "2024",
    stats: {
      "Clinic Openings": "15+",
      "Pet Owner Interactions": "50,000+",
      "New Patient Sign-ups": "10,000+",
      "Community Events": "100+"
    },
    category: "Retail",
    featured: false,
    heroImage: "/images/case-studies/bond-vet.jpg",
    images: [
      "/images/case-studies/bond-vet.jpg",
      "/images/case-studies/bond-vet-2.jpg",
      "/images/case-studies/bond-vet-3.jpg",
      "/images/case-studies/bond-vet-4.jpg",
      "/images/case-studies/bond-vet-5.jpg"
    ]
  },
  {
    id: "car-wash-promo",
    name: "Express Car Wash Promotion",
    tagline: "Shine Bright Campaign",
    description: "Drove membership sign-ups and brand awareness for express car wash locations through strategic street team marketing, promotional events, and sampling programs that showcased the premium wash experience.",
    industry: "Automotive",
    services: ["Street Teams", "Promotional Marketing", "Membership Drives"],
    markets: ["Texas", "Arizona", "California", "Florida"],
    date: "2024",
    stats: {
      "Locations Activated": "50+",
      "Free Wash Samples": "100,000+",
      "Membership Sign-ups": "25,000+",
      "Revenue Increase": "+35%"
    },
    category: "Automotive",
    featured: false,
    heroImage: "/images/case-studies/car-wash.jpg",
    images: [
      "/images/case-studies/car-wash.jpg",
      "/images/case-studies/car-wash-2.jpg",
      "/images/case-studies/car-wash-3.jpg",
      "/images/case-studies/car-wash-4.jpg",
      "/images/case-studies/car-wash-5.jpg"
    ]
  },
  {
    id: "peelzon-launch",
    name: "Peelzon Product Launch",
    tagline: "Peel Away the Competition",
    description: "Launched Peelzon's innovative product line with targeted sampling campaigns, retail demonstrations, and influencer partnerships that introduced consumers to the brand's unique value proposition.",
    industry: "Consumer Products",
    services: ["Product Launch", "Sampling", "Retail Demos"],
    markets: ["Major Retailers Nationwide"],
    date: "2024",
    stats: {
      "Samples Distributed": "500,000+",
      "Retail Locations": "1,000+",
      "Brand Awareness Lift": "+60%",
      "Trial-to-Purchase": "25%"
    },
    category: "Retail",
    featured: false,
    heroImage: "/images/case-studies/peelzon.jpg",
    images: [
      "/images/case-studies/peelzon.jpg",
      "/images/case-studies/peelzon-2.jpg",
      "/images/case-studies/peelzon-3.jpg",
      "/images/case-studies/peelzon-4.jpg"
    ]
  },
  {
    id: "qwick-staffing-events",
    name: "Qwick Platform Events",
    tagline: "Staffing Solutions Showcase",
    description: "Partnered with Qwick to staff high-profile hospitality events and showcase the platform's on-demand staffing capabilities, demonstrating quality service while building brand awareness in the hospitality industry.",
    industry: "Technology",
    services: ["Event Staffing", "Platform Demonstration", "Industry Events"],
    markets: ["Phoenix", "Los Angeles", "Dallas", "Miami"],
    date: "2024",
    stats: {
      "Events Staffed": "200+",
      "Staff Deployed": "5,000+",
      "Client Satisfaction": "98%",
      "Platform Sign-ups": "10,000+"
    },
    category: "Technology",
    featured: false,
    heroImage: "/images/case-studies/qwick.jpg",
    images: [
      "/images/case-studies/qwick.jpg",
      "/images/case-studies/qwick-2.jpg",
      "/images/case-studies/qwick-3.jpg",
      "/images/case-studies/qwick-4.jpg",
      "/images/case-studies/qwick-5.jpg"
    ]
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
    heroImage: "/images/case-studies/topps-cards.jpg",
    images: [
      "/images/case-studies/topps-cards.jpg",
      "/images/case-studies/topps-cards-2.jpg"
    ]
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
    heroImage: "/images/case-studies/1800-tequila.jpg",
    images: [
      "/images/case-studies/1800-tequila.jpg",
      "/images/case-studies/1800-tequila-2.jpg"
    ]
  }
];
