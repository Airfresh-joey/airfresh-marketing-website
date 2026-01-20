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
    heroImage: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=1200&h=800&fit=crop"
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
    heroImage: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=1200&h=800&fit=crop"
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
    heroImage: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=1200&h=800&fit=crop"
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
    heroImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&h=800&fit=crop"
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
    heroImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&h=800&fit=crop"
  },
  {
    id: "red-bull-campus-tour",
    name: "Red Bull Campus Rush",
    tagline: "Energy Meets Education",
    description: "Executed Red Bull's nationwide campus activation program, reaching 50+ universities with high-energy events, product sampling, and student athlete partnerships. Our teams created lasting brand connections with the next generation.",
    industry: "Beverage",
    services: ["Campus Marketing", "Product Sampling", "Event Activation"],
    markets: ["Nationwide - 50+ Universities"],
    date: "2024",
    stats: {
      "Students Reached": "500,000+",
      "Samples Distributed": "1M+",
      "Campus Events": "200+",
      "Brand Awareness Lift": "+45%"
    },
    category: "Beverage",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1572252821143-035a024857ac?w=1200&h=800&fit=crop"
  },
  {
    id: "spotify-wrapped-experience",
    name: "Spotify Wrapped Live",
    tagline: "Your Year in Music",
    description: "Brought Spotify Wrapped to life with interactive pop-up experiences in major cities, featuring personalized music moments, artist appearances, and shareable photo opportunities that celebrated users' listening habits.",
    industry: "Entertainment",
    services: ["Experiential Marketing", "Pop-up Events", "Social Media Activation"],
    markets: ["Los Angeles", "New York", "Miami", "Chicago"],
    date: "2023",
    stats: {
      "Experience Visitors": "100,000+",
      "Social Posts": "250,000+",
      "App Downloads": "50,000+",
      "User Engagement": "95%"
    },
    category: "Entertainment",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=800&fit=crop"
  },
  {
    id: "nike-air-max-day",
    name: "Nike Air Max Day",
    tagline: "Sneaker Culture Celebration",
    description: "Produced Nike's Air Max Day celebration with exclusive product launches, customization stations, and athlete appearances. Our street teams drove sneakerhead engagement and created authentic community connections.",
    industry: "Fashion",
    services: ["Street Teams", "Product Launch", "Community Marketing"],
    markets: ["New York", "Los Angeles", "Chicago", "Atlanta"],
    date: "2024",
    stats: {
      "Event Attendance": "30,000+",
      "Shoes Sold": "10,000+ pairs",
      "Custom Designs": "5,000+",
      "Social Reach": "20M+"
    },
    category: "Beauty & Fashion",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1200&h=800&fit=crop"
  },
  {
    id: "whole-foods-sustainability",
    name: "Whole Foods Earth Month",
    tagline: "Sustainable Shopping Experience",
    description: "Activated Whole Foods' Earth Month campaign with in-store education, product demonstrations, and community gardens. Our eco-ambassadors connected with conscious consumers and drove sustainable product sales.",
    industry: "Retail",
    services: ["Brand Ambassadors", "In-store Marketing", "Product Demos"],
    markets: ["San Francisco", "Portland", "Seattle", "Austin", "Boulder"],
    date: "2024",
    stats: {
      "Stores Activated": "100+",
      "Customer Interactions": "250,000+",
      "Sustainable Product Sales": "+65%",
      "Email Sign-ups": "30,000+"
    },
    category: "Retail",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&h=800&fit=crop"
  },
  {
    id: "coachella-brand-village",
    name: "Coachella Brand Village",
    tagline: "Festival Marketing Excellence",
    description: "Managed multiple brand activations within Coachella, creating Instagram-worthy moments, product experiences, and VIP lounges that captured the festival spirit while driving brand engagement.",
    industry: "Entertainment",
    services: ["Festival Marketing", "Brand Activation", "VIP Management"],
    markets: ["Indio, CA"],
    date: "2024",
    stats: {
      "Festival Attendees Engaged": "150,000+",
      "Social Media Tags": "500,000+",
      "Brand Interactions": "300,000+",
      "Influencer Partnerships": "100+"
    },
    category: "Entertainment",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1200&h=800&fit=crop"
  },
  {
    id: "amazon-prime-day-popup",
    name: "Amazon Prime Day Pop-ups",
    tagline: "Deals Come to Life",
    description: "Created physical pop-up experiences for Amazon Prime Day, showcasing deals, providing instant gratification purchases, and demonstrating Alexa-enabled devices to drive Prime memberships.",
    industry: "Technology",
    services: ["Pop-up Retail", "Product Demos", "Membership Drive"],
    markets: ["New York", "Los Angeles", "Chicago", "Seattle"],
    date: "2023",
    stats: {
      "Pop-up Visitors": "200,000+",
      "Prime Sign-ups": "15,000+",
      "Product Sales": "$5M+",
      "Device Demos": "50,000+"
    },
    category: "Technology",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&h=800&fit=crop"
  },
  {
    id: "disney-plus-launch",
    name: "Disney+ Launch Events",
    tagline: "Streaming Magic Nationwide",
    description: "Executed Disney+'s launch campaign with family-friendly events, character appearances, and exclusive screening parties that drove subscriptions and created magical moments for fans of all ages.",
    industry: "Entertainment",
    services: ["Event Production", "Character Management", "Family Marketing"],
    markets: ["Orlando", "Los Angeles", "New York", "Chicago"],
    date: "2023",
    stats: {
      "Event Attendees": "100,000+",
      "Subscriptions Generated": "25,000+",
      "Character Meet & Greets": "10,000+",
      "Family Engagement": "98%"
    },
    category: "Entertainment",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc31?w=1200&h=800&fit=crop"
  },
  {
    id: "tesla-roadshow",
    name: "Tesla Experience Roadshow",
    tagline: "The Future of Driving",
    description: "Produced Tesla's nationwide roadshow featuring test drives, technology demonstrations, and sustainability education that converted curious consumers into passionate brand advocates and buyers.",
    industry: "Automotive",
    services: ["Roadshow Management", "Test Drive Events", "Tech Demos"],
    markets: ["California", "Texas", "Florida", "New York", "Illinois"],
    date: "2024",
    stats: {
      "Test Drives": "50,000+",
      "Vehicle Orders": "5,000+",
      "Tech Demo Participants": "100,000+",
      "Conversion Rate": "10%"
    },
    category: "Automotive",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&h=800&fit=crop"
  },
  {
    id: "sephora-beauty-insider",
    name: "Sephora Beauty Insider Events",
    tagline: "VIP Beauty Experience",
    description: "Managed Sephora's exclusive Beauty Insider events nationwide, creating luxurious experiences with product previews, makeovers, and influencer meet-and-greets that strengthened loyalty program engagement.",
    industry: "Beauty",
    services: ["VIP Events", "Influencer Management", "Loyalty Marketing"],
    markets: ["Major US Cities - 25 locations"],
    date: "2024",
    stats: {
      "VIP Attendees": "50,000+",
      "Product Sales": "$10M+",
      "Loyalty Sign-ups": "20,000+",
      "Customer Satisfaction": "97%"
    },
    category: "Beauty & Fashion",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&h=800&fit=crop"
  },
  {
    id: "google-pixel-launch",
    name: "Google Pixel Launch",
    tagline: "Photography Reimagined",
    description: "Launched Google Pixel with interactive photography experiences, showcasing camera capabilities through real-world challenges and celebrity photographer workshops that demonstrated product superiority.",
    industry: "Technology",
    services: ["Product Launch", "Workshop Management", "Tech Demos"],
    markets: ["San Francisco", "New York", "Los Angeles", "Austin"],
    date: "2023",
    stats: {
      "Workshop Attendees": "25,000+",
      "Photos Taken": "1M+",
      "Device Pre-orders": "10,000+",
      "Media Coverage": "200+ outlets"
    },
    category: "Technology",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=1200&h=800&fit=crop"
  },
  {
    id: "adidas-originals-streetwear",
    name: "Adidas Originals Street Culture",
    tagline: "Where Sport Meets Style",
    description: "Activated Adidas Originals in urban markets with street art collaborations, sneaker customization workshops, and hip-hop performances that authentically connected with streetwear culture.",
    industry: "Fashion",
    services: ["Street Marketing", "Cultural Events", "Artist Collaborations"],
    markets: ["Brooklyn", "Los Angeles", "Atlanta", "Chicago", "Miami"],
    date: "2024",
    stats: {
      "Event Attendance": "75,000+",
      "Custom Sneakers": "10,000+",
      "Artist Collaborations": "50+",
      "Social Engagement": "5M+"
    },
    category: "Beauty & Fashion",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=1200&h=800&fit=crop"
  },
  {
    id: "chipotle-college-tour",
    name: "Chipotle College Tour",
    tagline: "Real Food for Real Students",
    description: "Executed Chipotle's college campus tour with free burrito days, study fuel stations, and sustainability education that made the brand essential to student life while driving app downloads.",
    industry: "Food & Beverage",
    services: ["Campus Marketing", "Product Sampling", "App Activation"],
    markets: ["50+ College Campuses Nationwide"],
    date: "2023",
    stats: {
      "Students Reached": "250,000+",
      "Burritos Served": "100,000+",
      "App Downloads": "75,000+",
      "Campus Brand Lift": "+60%"
    },
    category: "Food & Beverage",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?w=1200&h=800&fit=crop"
  },
  {
    id: "lululemon-sweat-sessions",
    name: "Lululemon Community Sweat",
    tagline: "Wellness in Motion",
    description: "Produced Lululemon's community workout series featuring celebrity trainers, yoga masters, and running clubs that built brand community while showcasing product performance in action.",
    industry: "Fashion",
    services: ["Community Events", "Fitness Activations", "Influencer Partnerships"],
    markets: ["Los Angeles", "New York", "San Francisco", "Chicago", "Denver"],
    date: "2024",
    stats: {
      "Workout Participants": "100,000+",
      "Community Members": "50,000+",
      "Product Sales Lift": "+40%",
      "Brand Advocacy": "92%"
    },
    category: "Beauty & Fashion",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&h=800&fit=crop"
  },
  {
    id: "budweiser-superbowl",
    name: "Budweiser Super Bowl Experience",
    tagline: "The King of Game Day",
    description: "Created Budweiser's Super Bowl fan experience with viewing parties, NFL legend appearances, and interactive football challenges that made the brand synonymous with the big game.",
    industry: "Beverage",
    services: ["Sports Marketing", "Event Production", "Celebrity Management"],
    markets: ["Super Bowl Host City + 10 Major Markets"],
    date: "2024",
    stats: {
      "Fan Engagement": "500,000+",
      "Viewing Party Attendees": "100,000+",
      "Social Impressions": "50M+",
      "Sales Increase": "+25%"
    },
    category: "Beverage",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1544919982-b61976f0ba43?w=1200&h=800&fit=crop"
  },
  {
    id: "target-back-to-school",
    name: "Target Back-to-School Bash",
    tagline: "School Prep Made Fun",
    description: "Transformed back-to-school shopping with interactive experiences, dorm room setups, and influencer styling sessions that made Target the destination for students and parents alike.",
    industry: "Retail",
    services: ["Retail Activation", "Family Events", "Influencer Marketing"],
    markets: ["Nationwide - 100+ Stores"],
    date: "2023",
    stats: {
      "Store Events": "200+",
      "Families Engaged": "1M+",
      "Sales Period Lift": "+35%",
      "Social Content": "100,000+ posts"
    },
    category: "Retail",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?w=1200&h=800&fit=crop"
  },
  {
        id: "1800-tequila-nba-all-star",
        name: "1800 Tequila - NBA All Star Weekend",
        tagline: "Premium Brand Activation at Professional Basketball's Biggest Weekend",
        description: "1800 Tequila partnered with NBA All Star Weekend to execute a comprehensive brand activation in Los Angeles. Air Fresh Marketing provided professional event staffing, experiential environment design, and sampling activation to create an immersive brand experience. Our team deployed 6+ brand ambassadors in custom branded apparel, facilitated product sampling, and created an Instagram-worthy activation space with agave plant installations and curated purple/blue lighting. The activation featured seamless execution across multiple days with consistent brand representation, engaging hundreds of attendees with knowledgeable and enthusiastic interactions. Results included successful brand visibility exposure to thousands of high-value consumers in a premium environment, meaningful brand interactions through product sampling opportunities, flawless execution with zero operational issues, and elevated premium positioning through immersive experiential design. The activation created shareable photo moments that extended brand reach beyond on-site attendees through organic social sharing.",
        industry: "Spirits & Beverage",
        services: ["Event Staffing", "Brand Activation", "Experiential Event Support", "Sampling Activation"],
        markets: ["Los Angeles"],
        date: "February 2020",
        stats: {
                "Brand Visibility": "1000s of high-value consumers exposed",
                "Attendee Engagement": "100+ active participants",
                "Event Duration": "2 days",
                "Brand Ambassadors": "6+",
                "Social Reach": "Extended through organic sharing"
        },
        category: "Spirits & Beverage",
        featured: true,
        heroImage: "https://images.unsplash.com/photo-1625206519989-e2f75e0a47f6?w=1200&h=800&fit=crop",
        images: [
                "https://images.unsplash.com/photo-1625206519989-e2f75e0a47f6?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop"
              ]
  }
        ]
        }
  }
];