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
    heroImage: "https://images.unsplash.com/photo-1504707748692-419802cf939d?w=800&h=600&fit=crop&q=80"
  },
  {
    id: "super-bowl-hospitality",
    name: "Super Bowl VIP Hospitality",
    tagline: "Championship Experience",
    description: "Premium hospitality staffing for Super Bowl events including VIP suites, fan experiences, and sponsor activations throughout game week.",
    industry: "Sports & Entertainment",
    services: ["VIP Management", "Hospitality", "Event Staffing"],
    markets: ["Super Bowl Host Cities"],
    date: "2024",
    stats: {
      "VIP Guests": "10,000+",
      "Hospitality Staff": "200+",
      "Sponsor Activations": "25+",
      "Guest Satisfaction": "98%"
    },
    category: "Entertainment",
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&h=600&fit=crop&q=80"
  },

  // ============ FOOD & BEVERAGE ============
  {
    id: "craft-beer-festivals",
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
    heroImage: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800&h=600&fit=crop&q=80"
  },
  {
    id: "coffee-brand-sampling",
    name: "Premium Coffee Sampling",
    tagline: "Wake Up to Better Coffee",
    description: "Nationwide coffee sampling program at grocery stores, office buildings, and events featuring trained baristas and brand ambassadors.",
    industry: "Beverage",
    services: ["Product Sampling", "Brand Ambassadors", "Retail Marketing"],
    markets: ["Nationwide"],
    date: "2024",
    stats: {
      "Samples Served": "500,000+",
      "Locations": "1,000+",
      "Trial Rate": "85%",
      "Purchase Intent": "+70%"
    },
    category: "Food & Beverage",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop&q=80"
  },
  {
    id: "food-truck-activation",
    name: "Food Truck Brand Activation",
    tagline: "Street Food Revolution",
    description: "Mobile food truck activation campaigns featuring custom branded vehicles, product sampling, and street team support at high-traffic locations.",
    industry: "Food & Beverage",
    services: ["Mobile Marketing", "Product Sampling", "Street Teams"],
    markets: ["Major US Cities"],
    date: "2024",
    stats: {
      "Cities Visited": "25+",
      "Samples Served": "100,000+",
      "Social Impressions": "5M+",
      "Media Coverage": "National"
    },
    category: "Food & Beverage",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=800&h=600&fit=crop&q=80"
  },

  // ============ TECHNOLOGY ============
  {
    id: "tech-product-launch",
    name: "Tech Product Launch Events",
    tagline: "Innovation Unveiled",
    description: "Product launch event staffing for major tech companies featuring trained product specialists, demo teams, and VIP management.",
    industry: "Technology",
    services: ["Product Launch", "Demo Teams", "VIP Management"],
    markets: ["Nationwide"],
    date: "2024",
    stats: {
      "Launch Events": "50+",
      "Product Demos": "100,000+",
      "Media Attendees": "5,000+",
      "Social Reach": "50M+"
    },
    category: "Technology",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&q=80"
  },
  {
    id: "ces-trade-show",
    name: "CES Trade Show Staffing",
    tagline: "The Future is Here",
    description: "Comprehensive booth staffing for CES exhibitors featuring product specialists, lead capture teams, and hospitality staff.",
    industry: "Technology",
    services: ["Trade Show Staffing", "Lead Capture", "Product Demos"],
    markets: ["Las Vegas"],
    date: "2024",
    stats: {
      "Exhibitors Staffed": "25+",
      "Leads Captured": "50,000+",
      "Booth Staff": "150+",
      "Client Satisfaction": "97%"
    },
    category: "Technology",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop&q=80"
  },

  // ============ BEAUTY & FASHION ============
  {
    id: "beauty-brand-sampling",
    name: "Beauty Brand Sampling Tour",
    tagline: "Discover Your Glow",
    description: "National beauty sampling campaign at malls, events, and retail locations featuring trained beauty consultants and product demonstrations.",
    industry: "Beauty",
    services: ["Product Sampling", "Beauty Consultants", "Retail Marketing"],
    markets: ["Nationwide"],
    date: "2024",
    stats: {
      "Samples Distributed": "250,000+",
      "Consultations": "50,000+",
      "Retail Partners": "500+",
      "Purchase Intent": "+75%"
    },
    category: "Beauty & Fashion",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=600&fit=crop&q=80"
  },
  {
    id: "fashion-week-staffing",
    name: "Fashion Week Event Staffing",
    tagline: "Style Meets Service",
    description: "Premium event staffing for Fashion Week events including runway shows, after parties, and VIP experiences.",
    industry: "Fashion",
    services: ["Event Staffing", "VIP Management", "Hospitality"],
    markets: ["New York", "Los Angeles", "Miami"],
    date: "2024",
    stats: {
      "Fashion Events": "100+",
      "VIP Guests Served": "25,000+",
      "Staff Deployed": "500+",
      "Designer Partners": "50+"
    },
    category: "Beauty & Fashion",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80"
  },

  // ============ ENTERTAINMENT ============
  {
    id: "music-festival-staffing",
    name: "Music Festival Activations",
    tagline: "Feel the Beat",
    description: "Festival staffing and brand activations at major music festivals including Coachella, Lollapalooza, and Austin City Limits.",
    industry: "Entertainment",
    services: ["Festival Staffing", "Brand Activation", "Experiential Marketing"],
    markets: ["Festival Circuit"],
    date: "2024",
    stats: {
      "Festivals": "25+",
      "Staff Deployed": "1,000+",
      "Fan Interactions": "500,000+",
      "Brand Partners": "50+"
    },
    category: "Entertainment",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop&q=80"
  },
  {
    id: "movie-premiere-events",
    name: "Movie Premiere Staffing",
    tagline: "Red Carpet Ready",
    description: "Premium event staffing for Hollywood movie premieres including red carpet management, VIP hospitality, and fan experiences.",
    industry: "Entertainment",
    services: ["Premiere Events", "VIP Management", "Red Carpet"],
    markets: ["Los Angeles", "New York"],
    date: "2024",
    stats: {
      "Premieres Staffed": "50+",
      "VIP Guests": "10,000+",
      "Media Managed": "500+",
      "Fan Experiences": "25,000+"
    },
    category: "Entertainment",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=600&fit=crop&q=80"
  },
  {
    id: "concert-vip-services",
    name: "Concert VIP Services",
    tagline: "Backstage Access",
    description: "VIP hospitality and backstage management for major concert tours and arena shows.",
    industry: "Entertainment",
    services: ["VIP Hospitality", "Backstage Management", "Artist Services"],
    markets: ["Nationwide"],
    date: "2024",
    stats: {
      "Concert Tours": "30+",
      "VIP Guests": "50,000+",
      "Artist Meet & Greets": "500+",
      "Satisfaction Rate": "99%"
    },
    category: "Entertainment",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&q=80"
  },

  // ============ SPORTS ============
  {
    id: "nba-all-star-weekend",
    name: "NBA All-Star Weekend",
    tagline: "Where Amazing Happens",
    description: "Event staffing for NBA All-Star Weekend including fan festival, celebrity game, and all-star game hospitality.",
    industry: "Sports",
    services: ["Event Staffing", "VIP Hospitality", "Fan Activation"],
    markets: ["All-Star Host Cities"],
    date: "2024",
    stats: {
      "Weekend Events": "15+",
      "Fan Zone Visitors": "200,000+",
      "VIP Experiences": "5,000+",
      "Sponsor Activations": "30+"
    },
    category: "Sports",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop&q=80"
  },
  {
    id: "golf-tournament-hospitality",
    name: "Golf Tournament Hospitality",
    tagline: "Championship Experience",
    description: "Premium hospitality staffing for PGA tournaments including corporate tents, VIP experiences, and player viewing areas.",
    industry: "Sports",
    services: ["Hospitality Staffing", "VIP Services", "Corporate Events"],
    markets: ["PGA Tour"],
    date: "2024",
    stats: {
      "Tournaments": "20+",
      "VIP Guests Served": "50,000+",
      "Corporate Tents": "100+",
      "Guest Satisfaction": "97%"
    },
    category: "Sports",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&h=600&fit=crop&q=80"
  },

  // ============ AUTOMOTIVE ============
  {
    id: "auto-show-staffing",
    name: "Auto Show Product Specialists",
    tagline: "Drive the Experience",
    description: "Trained product specialists for auto shows featuring vehicle presentations, lead capture, and test drive coordination.",
    industry: "Automotive",
    services: ["Trade Show Staffing", "Product Specialists", "Lead Capture"],
    markets: ["Major Auto Shows"],
    date: "2024",
    stats: {
      "Auto Shows": "15+",
      "OEMs Supported": "10+",
      "Leads Captured": "100,000+",
      "Test Drives Coordinated": "25,000+"
    },
    category: "Automotive",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&h=600&fit=crop&q=80"
  },
  {
    id: "ev-launch-events",
    name: "Electric Vehicle Launch Events",
    tagline: "The Future of Driving",
    description: "Product launch support for electric vehicle brands featuring test drive events, charging station activations, and consumer education.",
    industry: "Automotive",
    services: ["Product Launch", "Test Drive Events", "Consumer Education"],
    markets: ["Nationwide"],
    date: "2024",
    stats: {
      "Launch Events": "50+",
      "Test Drives": "25,000+",
      "Consumer Education": "100,000+",
      "Purchase Intent": "+60%"
    },
    category: "Automotive",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=600&fit=crop&q=80"
  },

  // ============ RETAIL ============
  {
    id: "retail-grand-openings",
    name: "Retail Grand Opening Events",
    tagline: "Open for Business",
    description: "Grand opening staffing for retail locations featuring crowd management, promotional teams, and customer engagement.",
    industry: "Retail",
    services: ["Grand Openings", "Promotional Teams", "Customer Engagement"],
    markets: ["Nationwide"],
    date: "2024",
    stats: {
      "Store Openings": "100+",
      "Opening Day Guests": "500,000+",
      "Promotional Staff": "2,000+",
      "Sales Lift": "+200%"
    },
    category: "Retail",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&q=80"
  },
  {
    id: "holiday-retail-staffing",
    name: "Holiday Retail Staffing",
    tagline: "Seasonal Success",
    description: "Holiday season staffing augmentation for retailers featuring trained sales associates, gift wrappers, and customer service support.",
    industry: "Retail",
    services: ["Seasonal Staffing", "Sales Associates", "Customer Service"],
    markets: ["Nationwide"],
    date: "2024",
    stats: {
      "Retailers Supported": "50+",
      "Seasonal Staff": "5,000+",
      "Holiday Season": "8 Weeks",
      "Sales Support": "$100M+"
    },
    category: "Retail",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=800&h=600&fit=crop&q=80"
  }
];
