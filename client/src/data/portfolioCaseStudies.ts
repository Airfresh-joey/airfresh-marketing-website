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
    category: "Beverage",
    featured: false,
    heroImage: "/images/case-studies/meijer.jpg"
  },
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
  }
];
