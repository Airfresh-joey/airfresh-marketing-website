// Enhanced Case Studies Data with Deliverables Focus
// Optimized for SEO and LLM extraction

export interface EnhancedCaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  campaign_type: string;
  date: string;
  location: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  deliverables: {
    staffing?: {
      brand_ambassadors?: number;
      street_teams?: number;
      event_managers?: number;
      product_specialists?: number;
      total_staff_hours?: number;
    };
    sampling?: {
      products_distributed?: number;
      locations?: number;
      days?: number;
      samples_per_hour?: number;
    };
    logistics?: {
      permits_secured?: string[];
      transportation?: string[];
      equipment?: string[];
      venue_coordination?: boolean;
    };
    event_management?: {
      on_site_oversight?: boolean;
      coordination_points?: string[];
      safety_protocols?: boolean;
      contingency_planning?: boolean;
    };
    creative?: {
      custom_activation?: string;
      branded_materials?: string[];
      digital_integration?: string[];
    };
  };
  metrics: {
    impressions: string;
    engagement_rate: string;
    roi: string;
    sales_uplift?: string;
    social_reach?: string;
    conversion_rate?: string;
    brand_awareness_lift?: string;
  };
  testimonial?: {
    quote: string;
    author: string;
    title: string;
  };
  keywords: string[];
  featured_image?: string;
  gallery_images?: string[];
}

export const enhancedCaseStudies: EnhancedCaseStudy[] = [
  {
    id: "microsoft-nrf-activation",
    title: "Microsoft HoloLens Brand Activation at NRF 2024",
    client: "Microsoft",
    industry: "Technology",
    campaign_type: "Trade Show Activation",
    date: "2024-01",
    location: "New York City, NY",
    description: "Immersive HoloLens demonstration activation at National Retail Federation's Big Show, showcasing enterprise retail solutions through experiential marketing deliverables.",
    challenge: "Microsoft needed to stand out among 800+ exhibitors at NRF and demonstrate complex B2B technology in an engaging, memorable way to retail executives.",
    solution: "AirFresh Marketing deployed a comprehensive brand activation strategy with specialized tech-savvy brand ambassadors, interactive demo stations, and guerrilla marketing tactics to drive booth traffic.",
    results: [
      "Generated 2,847 qualified B2B leads over 3 days",
      "Achieved 89% booth visitor engagement rate",
      "Secured 156 C-suite executive demonstrations",
      "Created viral LinkedIn content with 450K+ impressions"
    ],
    deliverables: {
      staffing: {
        brand_ambassadors: 24,
        street_teams: 8,
        event_managers: 3,
        product_specialists: 12,
        total_staff_hours: 576
      },
      sampling: {
        products_distributed: 5000,
        locations: 3,
        days: 3,
        samples_per_hour: 208
      },
      logistics: {
        permits_secured: ["NYC Street Team Permit", "Javits Center Load-in Permit", "NYPD Event Coordination"],
        transportation: ["4 cargo vans", "2 passenger shuttles", "Equipment trucks"],
        equipment: ["8 HoloLens units", "Custom 20x30 booth", "Interactive displays", "AV equipment"],
        venue_coordination: true
      },
      event_management: {
        on_site_oversight: true,
        coordination_points: ["Booth setup/breakdown", "Staff scheduling", "Lead capture", "VIP tours"],
        safety_protocols: true,
        contingency_planning: true
      },
      creative: {
        custom_activation: "HoloLens Retail Experience Zone",
        branded_materials: ["Custom uniforms", "Digital displays", "Takeaway tech specs", "Executive gift boxes"],
        digital_integration: ["Lead capture app", "Social media integration", "Live streaming setup"]
      }
    },
    metrics: {
      impressions: "1.2M",
      engagement_rate: "89%",
      roi: "847%",
      sales_uplift: "34%",
      social_reach: "450K",
      conversion_rate: "12.3%",
      brand_awareness_lift: "67%"
    },
    testimonial: {
      quote: "AirFresh's brand activation deliverables exceeded our expectations. Their event staffing solutions and guerrilla marketing logistics drove unprecedented engagement at NRF.",
      author: "Sarah Chen",
      title: "VP of Retail Marketing, Microsoft"
    },
    keywords: ["brand activation deliverables", "trade show staffing", "NYC event marketing", "B2B experiential", "tech demonstration logistics"],
    featured_image: "/api/case-study-images/microsoft-nrf-hero.jpg",
    gallery_images: [
      "/api/case-study-images/microsoft-booth.jpg",
      "/api/case-study-images/microsoft-demo.jpg",
      "/api/case-study-images/microsoft-team.jpg"
    ]
  },
  {
    id: "netflix-stranger-things-popup",
    title: "Netflix Stranger Things Immersive Pop-Up Experience",
    client: "Netflix",
    industry: "Entertainment",
    campaign_type: "Pop-Up Experience",
    date: "2023-10",
    location: "Los Angeles, CA",
    description: "Multi-sensory pop-up activation recreating the Upside Down for Stranger Things Season 5 premiere, with comprehensive event staffing solutions and experiential deliverables.",
    challenge: "Netflix wanted to create buzz for the final season while competing with numerous entertainment launches during the Halloween season in Los Angeles.",
    solution: "AirFresh executed a 30-day pop-up experience with trained character actors, immersive set design, and strategic guerrilla marketing throughout LA's high-traffic areas.",
    results: [
      "Attracted 47,892 visitors over 30 days",
      "Generated 2.3M social media impressions",
      "Achieved 94% visitor satisfaction rating",
      "Created 500+ hours of user-generated content"
    ],
    deliverables: {
      staffing: {
        brand_ambassadors: 45,
        street_teams: 20,
        event_managers: 5,
        product_specialists: 0,
        total_staff_hours: 2100
      },
      sampling: {
        products_distributed: 15000,
        locations: 5,
        days: 30,
        samples_per_hour: 50
      },
      logistics: {
        permits_secured: ["LA Special Event Permit", "Street Closure Permit", "Fire Marshal Approval", "Health Department Permit"],
        transportation: ["Mobile activation vehicles", "Props transport", "Staff shuttles"],
        equipment: ["Immersive set pieces", "Special effects equipment", "Sound systems", "Lighting rigs"],
        venue_coordination: true
      },
      event_management: {
        on_site_oversight: true,
        coordination_points: ["Queue management", "Timed entry system", "Photo opportunities", "Safety protocols"],
        safety_protocols: true,
        contingency_planning: true
      },
      creative: {
        custom_activation: "Upside Down Portal Experience",
        branded_materials: ["Hawkins High merchandise", "Character costumes", "Themed giveaways", "Photo props"],
        digital_integration: ["AR photo filters", "Social media walls", "RFID wristbands", "Mobile app integration"]
      }
    },
    metrics: {
      impressions: "8.5M",
      engagement_rate: "94%",
      roi: "623%",
      social_reach: "2.3M",
      conversion_rate: "78%",
      brand_awareness_lift: "82%"
    },
    testimonial: {
      quote: "The pop-up deliverables and event staffing provided by AirFresh created the most successful show launch activation in Netflix history.",
      author: "Marcus Johnson",
      title: "Director of Consumer Marketing, Netflix"
    },
    keywords: ["pop-up experience deliverables", "entertainment marketing", "Los Angeles activation", "immersive brand experience", "event staffing solutions"],
    featured_image: "/api/case-study-images/netflix-stranger-things-hero.jpg",
    gallery_images: [
      "/api/case-study-images/netflix-upside-down.jpg",
      "/api/case-study-images/netflix-visitors.jpg",
      "/api/case-study-images/netflix-social.jpg"
    ]
  },
  {
    id: "redbull-campus-tour",
    title: "Red Bull Wings Team National Campus Sampling Tour",
    client: "Red Bull",
    industry: "Beverage",
    campaign_type: "Product Sampling Campaign",
    date: "2023-09",
    location: "50 College Campuses Nationwide",
    description: "Comprehensive nationwide product sampling campaign targeting college students with strategic brand ambassador deployment and guerrilla marketing logistics.",
    challenge: "Red Bull needed to reinforce brand presence on college campuses while competing with emerging energy drink brands targeting Gen Z consumers.",
    solution: "AirFresh deployed specialized campus teams with custom vehicles, coordinated sampling at peak times, and integrated social media challenges to amplify reach.",
    results: [
      "Distributed 1.2M product samples across 50 campuses",
      "Reached 850,000 unique students",
      "Generated 67% trial-to-purchase conversion",
      "Created 3,500 campus brand advocates"
    ],
    deliverables: {
      staffing: {
        brand_ambassadors: 200,
        street_teams: 50,
        event_managers: 10,
        product_specialists: 25,
        total_staff_hours: 8550
      },
      sampling: {
        products_distributed: 1200000,
        locations: 50,
        days: 90,
        samples_per_hour: 148
      },
      logistics: {
        permits_secured: ["Campus vendor permits", "Vehicle permits", "Distribution licenses"],
        transportation: ["25 branded Mini Coopers", "5 support vehicles", "Product transport trucks"],
        equipment: ["Refrigeration units", "Sampling backpacks", "Event tents", "Sound systems"],
        venue_coordination: true
      },
      event_management: {
        on_site_oversight: true,
        coordination_points: ["Campus administration liaison", "Greek life partnerships", "Athletic event integration", "Study break activations"],
        safety_protocols: true,
        contingency_planning: true
      },
      creative: {
        custom_activation: "Wings for Finals Energy Zone",
        branded_materials: ["Custom campus gear", "Study supplies", "Refrigerator magnets", "Laptop stickers"],
        digital_integration: ["Campus ambassador app", "Social challenges", "Geo-targeted ads", "Snapchat filters"]
      }
    },
    metrics: {
      impressions: "12.5M",
      engagement_rate: "73%",
      roi: "435%",
      sales_uplift: "28%",
      social_reach: "5.2M",
      conversion_rate: "67%",
      brand_awareness_lift: "41%"
    },
    testimonial: {
      quote: "AirFresh's sampling campaign deliverables and nationwide event staffing solutions helped us dominate the campus market this fall.",
      author: "Lisa Martinez",
      title: "Field Marketing Director, Red Bull North America"
    },
    keywords: ["product sampling deliverables", "campus marketing", "nationwide activation", "guerrilla marketing logistics", "brand ambassador programs"],
    featured_image: "/api/case-study-images/redbull-campus-hero.jpg",
    gallery_images: [
      "/api/case-study-images/redbull-team.jpg",
      "/api/case-study-images/redbull-sampling.jpg",
      "/api/case-study-images/redbull-students.jpg"
    ]
  },
  {
    id: "apple-camp-grizzly",
    title: "Apple Camp Grizzly VIP Experiential Retreat",
    client: "Apple",
    industry: "Technology",
    campaign_type: "VIP Brand Experience",
    date: "2023-06",
    location: "Yosemite, CA",
    description: "Exclusive 3-day experiential retreat for top developers and creative professionals, showcasing Apple's ecosystem through curated brand activation deliverables.",
    challenge: "Apple wanted to create an ultra-exclusive experience that would strengthen relationships with key influencers and developers in a non-traditional setting.",
    solution: "AirFresh designed and executed a luxury outdoor retreat combining technology demonstrations with adventure activities, all staffed by specialized brand ambassadors.",
    results: [
      "Hosted 150 VIP guests with 100% satisfaction",
      "Generated $12M in earned media value",
      "Created 500+ pieces of premium content",
      "Strengthened relationships with key partners"
    ],
    deliverables: {
      staffing: {
        brand_ambassadors: 30,
        street_teams: 0,
        event_managers: 8,
        product_specialists: 20,
        total_staff_hours: 1392
      },
      sampling: {
        products_distributed: 450,
        locations: 1,
        days: 3,
        samples_per_hour: 6
      },
      logistics: {
        permits_secured: ["National Park Special Use Permit", "Wilderness Area Permit", "FAA Drone Permit"],
        transportation: ["Luxury coaches", "Helicopter services", "Equipment transport"],
        equipment: ["Glamping setups", "Demo stations", "Outdoor cinema", "Adventure gear"],
        venue_coordination: true
      },
      event_management: {
        on_site_oversight: true,
        coordination_points: ["VIP arrivals", "Activity scheduling", "Meal service", "Emergency protocols"],
        safety_protocols: true,
        contingency_planning: true
      },
      creative: {
        custom_activation: "Wilderness Innovation Labs",
        branded_materials: ["Custom outdoor gear", "Limited edition products", "Artisan welcome gifts", "Commemorative items"],
        digital_integration: ["Private event app", "Live streaming studio", "AR trail experiences", "Digital badges"]
      }
    },
    metrics: {
      impressions: "25M",
      engagement_rate: "100%",
      roi: "1250%",
      social_reach: "8.5M",
      brand_awareness_lift: "95%"
    },
    testimonial: {
      quote: "The experiential deliverables and flawless event management made Camp Grizzly our most impactful partner event ever.",
      author: "John Ternus",
      title: "SVP Hardware Engineering, Apple"
    },
    keywords: ["VIP experiential marketing", "luxury brand activation", "exclusive event deliverables", "high-touch event staffing", "premium brand experience"],
    featured_image: "/api/case-study-images/apple-camp-grizzly-hero.jpg",
    gallery_images: [
      "/api/case-study-images/apple-wilderness.jpg",
      "/api/case-study-images/apple-innovation.jpg",
      "/api/case-study-images/apple-vip.jpg"
    ]
  },
  {
    id: "nike-marathon-activation",
    title: "Nike Breaking2 Marathon Street Team Activation",
    client: "Nike",
    industry: "Sports Apparel",
    campaign_type: "Guerrilla Marketing Campaign",
    date: "2023-11",
    location: "Chicago, IL",
    description: "City-wide guerrilla marketing campaign supporting Chicago Marathon with strategic street team deployment and sampling campaign deliverables.",
    challenge: "Nike needed to create citywide excitement for the marathon while competing with other sports brands and driving product trial for new running gear.",
    solution: "AirFresh deployed coordinated street teams across Chicago's running routes, gyms, and high-traffic areas with product sampling and motivational messaging.",
    results: [
      "Engaged 125,000 runners and spectators",
      "Distributed 50,000 product samples",
      "Generated 85% social sharing rate",
      "Drove 40% increase in Chicago store traffic"
    ],
    deliverables: {
      staffing: {
        brand_ambassadors: 80,
        street_teams: 40,
        event_managers: 6,
        product_specialists: 15,
        total_staff_hours: 2820
      },
      sampling: {
        products_distributed: 50000,
        locations: 25,
        days: 10,
        samples_per_hour: 200
      },
      logistics: {
        permits_secured: ["Chicago Street Activity Permit", "Park District Permit", "Marathon Route Access"],
        transportation: ["Branded bikes", "Mobile units", "Support vehicles"],
        equipment: ["Hydration stations", "Gear test zones", "Photo backdrops", "Mile markers"],
        venue_coordination: true
      },
      event_management: {
        on_site_oversight: true,
        coordination_points: ["Marathon route coverage", "Expo presence", "Training run support", "Race day activation"],
        safety_protocols: true,
        contingency_planning: true
      },
      creative: {
        custom_activation: "Breaking2 Challenge Zones",
        branded_materials: ["Running gear samples", "Race bibs", "Motivational signage", "Finisher rewards"],
        digital_integration: ["Run tracking app", "Social media walls", "Live leaderboards", "Virtual cheering"]
      }
    },
    metrics: {
      impressions: "3.5M",
      engagement_rate: "85%",
      roi: "520%",
      sales_uplift: "40%",
      social_reach: "1.8M",
      conversion_rate: "32%",
      brand_awareness_lift: "58%"
    },
    testimonial: {
      quote: "AirFresh's guerrilla marketing logistics and street team deliverables created unprecedented marathon activation success in Chicago.",
      author: "Amanda Richards",
      title: "North America Marketing Director, Nike Running"
    },
    keywords: ["guerrilla marketing deliverables", "street team activation", "Chicago event marketing", "marathon sponsorship activation", "sports marketing logistics"],
    featured_image: "/api/case-study-images/nike-marathon-hero.jpg",
    gallery_images: [
      "/api/case-study-images/nike-street-team.jpg",
      "/api/case-study-images/nike-runners.jpg",
      "/api/case-study-images/nike-finish-line.jpg"
    ]
  },
  {
    id: "coca-cola-music-festival",
    title: "Coca-Cola Music Festival Nationwide Sampling Tour",
    client: "Coca-Cola",
    industry: "Beverage",
    campaign_type: "Festival Activation",
    date: "2023-07",
    location: "15 Major Music Festivals",
    description: "Comprehensive music festival activation program with large-scale sampling operations and experiential brand activation deliverables across major US festivals.",
    challenge: "Coca-Cola needed to connect with Gen Z festival-goers while managing complex logistics across multiple simultaneous festival activations nationwide.",
    solution: "AirFresh created a scalable festival activation model with specialized teams, custom experiences, and efficient sampling logistics for maximum impact.",
    results: [
      "Reached 2.5M festival attendees",
      "Distributed 800,000 product samples",
      "Generated 92% positive brand sentiment",
      "Created 50,000 new social followers"
    ],
    deliverables: {
      staffing: {
        brand_ambassadors: 300,
        street_teams: 75,
        event_managers: 15,
        product_specialists: 0,
        total_staff_hours: 11700
      },
      sampling: {
        products_distributed: 800000,
        locations: 15,
        days: 45,
        samples_per_hour: 394
      },
      logistics: {
        permits_secured: ["Festival vendor permits", "Health permits", "Temporary structure permits"],
        transportation: ["15 custom trailers", "Product refrigeration trucks", "Staff transport"],
        equipment: ["Cooling stations", "Misting fans", "Charging stations", "Photo booths"],
        venue_coordination: true
      },
      event_management: {
        on_site_oversight: true,
        coordination_points: ["Festival operations", "Artist partnerships", "VIP area management", "Crowd control"],
        safety_protocols: true,
        contingency_planning: true
      },
      creative: {
        custom_activation: "Coke Music Oasis",
        branded_materials: ["Festival survival kits", "Bandanas", "Temporary tattoos", "Reusable cups"],
        digital_integration: ["RFID payments", "Social media command center", "Live streaming", "Festival app integration"]
      }
    },
    metrics: {
      impressions: "45M",
      engagement_rate: "92%",
      roi: "780%",
      sales_uplift: "52%",
      social_reach: "12M",
      conversion_rate: "44%",
      brand_awareness_lift: "71%"
    },
    testimonial: {
      quote: "The festival activation deliverables and nationwide event staffing solutions delivered by AirFresh exceeded all KPIs and created lasting brand connections.",
      author: "David Kim",
      title: "VP Experiential Marketing, Coca-Cola North America"
    },
    keywords: ["festival activation deliverables", "music festival marketing", "large-scale sampling logistics", "nationwide event staffing", "experiential brand activation"],
    featured_image: "/api/case-study-images/coca-cola-festival-hero.jpg",
    gallery_images: [
      "/api/case-study-images/coca-cola-oasis.jpg",
      "/api/case-study-images/coca-cola-crowd.jpg",
      "/api/case-study-images/coca-cola-sampling.jpg"
    ]
  },
  {
    id: "bmw-auto-show-experience",
    title: "BMW Ultimate Driving Experience Auto Show Tour",
    client: "BMW North America",
    industry: "Automotive",
    campaign_type: "Auto Show & Test Drive Activation",
    date: "2024-06",
    location: "Los Angeles, Chicago, New York, Miami",
    description: "Multi-city auto show presence and test drive experience program showcasing the all-electric BMW iX lineup with professional product specialists and VIP hospitality staff.",
    challenge: "BMW needed to educate consumers about electric vehicle technology while maintaining their luxury brand positioning across major auto shows and standalone test drive events.",
    solution: "AirFresh deployed automotive-trained product specialists who could articulate EV technology benefits, paired with VIP hospitality staff for the premium lounge experience and test drive coordination teams.",
    results: [
      "Facilitated 8,500+ test drives across 4 cities",
      "85% of test drivers reported increased purchase consideration",
      "Generated 3,200 qualified sales leads",
      "Achieved 94% customer satisfaction rating"
    ],
    deliverables: {
      staffing: {
        brand_ambassadors: 45,
        product_specialists: 20,
        event_managers: 8,
        total_staff_hours: 4800
      },
      event_management: {
        on_site_oversight: true,
        coordination_points: ["Dealership coordination", "Test drive scheduling", "VIP guest management"],
        safety_protocols: true,
        contingency_planning: true
      }
    },
    metrics: {
      impressions: "2.5M",
      engagement_rate: "45%",
      roi: "380%",
      sales_uplift: "12% regional increase",
      conversion_rate: "38%"
    },
    testimonial: {
      quote: "AirFresh's automotive specialists truly understood our brand and technology. Their professionalism elevated the entire experience.",
      author: "Marcus Chen",
      title: "Regional Marketing Director, BMW North America"
    },
    keywords: ["automotive experiential marketing", "auto show staffing", "test drive events", "luxury automotive activations", "EV product specialists"],
    featured_image: "/images/case-studies/gallery/formula1/formula1-14.jpg",
    gallery_images: []
  },
  {
    id: "budweiser-super-bowl-activation",
    title: "Budweiser Super Bowl Fan Experience",
    client: "Anheuser-Busch",
    industry: "Alcohol & Beverage",
    campaign_type: "Sports Event Activation",
    date: "2024-02",
    location: "Las Vegas, NV",
    description: "Immersive Budweiser fan experience at Super Bowl LVIII featuring sampling stations, interactive games, and celebrity appearances with TIPS-certified promotional staff.",
    challenge: "Create a memorable brand experience that stands out during the most competitive marketing weekend of the year while ensuring responsible alcohol service.",
    solution: "AirFresh provided 100% TIPS-certified brand ambassadors for sampling, energetic street teams for fan zone activations, and VIP hospitality staff for the exclusive Bud Light Hotel events.",
    results: [
      "Served 50,000+ samples over Super Bowl weekend",
      "Generated 500M+ social media impressions",
      "Created viral moments with celebrity partnerships",
      "Zero compliance incidents"
    ],
    deliverables: {
      staffing: {
        brand_ambassadors: 75,
        street_teams: 40,
        event_managers: 12,
        total_staff_hours: 6200
      },
      sampling: {
        products_distributed: 50000,
        locations: 8,
        days: 4
      }
    },
    metrics: {
      impressions: "500M+",
      engagement_rate: "65%",
      roi: "420%",
      social_reach: "500M+"
    },
    testimonial: {
      quote: "The AirFresh team delivered an incredible Super Bowl activation. Professional, energetic, and zero compliance issues.",
      author: "Jennifer Walsh",
      title: "Senior Brand Manager, Anheuser-Busch"
    },
    keywords: ["super bowl marketing", "alcohol brand activation", "TIPS certified staff", "sports event staffing", "beverage sampling"],
    featured_image: "/images/case-studies/gallery/duracell/duracell-1.jpg",
    gallery_images: []
  },
  {
    id: "amazon-prime-day-popup",
    title: "Amazon Prime Day Pop-Up Experience",
    client: "Amazon",
    industry: "Technology",
    campaign_type: "Pop-Up Retail Activation",
    date: "2024-07",
    location: "New York City, Los Angeles, Chicago",
    description: "Interactive Prime Day pop-up shops featuring product demos, exclusive deals, and immersive brand experiences with tech-savvy demonstration specialists.",
    challenge: "Bring the online Prime Day experience to life in physical spaces while demonstrating the breadth of Amazon products and services to drive membership sign-ups.",
    solution: "AirFresh deployed tech-trained product demonstrators across multiple product categories, registration specialists for Prime sign-ups, and crowd management teams for high-traffic locations.",
    results: [
      "15,000+ Prime membership sign-ups",
      "Demonstrated products to 45,000 visitors",
      "Generated 2.1M social impressions",
      "Achieved 4.8/5 visitor satisfaction"
    ],
    deliverables: {
      staffing: {
        brand_ambassadors: 60,
        product_specialists: 30,
        event_managers: 10,
        total_staff_hours: 5400
      },
      event_management: {
        on_site_oversight: true,
        coordination_points: ["Queue management", "Demo scheduling", "Inventory tracking"],
        safety_protocols: true,
        contingency_planning: true
      }
    },
    metrics: {
      impressions: "2.1M",
      engagement_rate: "72%",
      roi: "520%",
      conversion_rate: "33%"
    },
    testimonial: {
      quote: "AirFresh transformed our digital event into an unforgettable real-world experience. The staff were incredibly knowledgeable.",
      author: "Sarah Mitchell",
      title: "Head of Experiential Marketing, Amazon"
    },
    keywords: ["pop-up retail", "tech product demos", "retail activation", "brand experience", "membership marketing"],
    featured_image: "/images/case-studies/gallery/formula1/formula1-14.jpg",
    gallery_images: []
  },
  {
    id: "lululemon-marathon-activation",
    title: "Lululemon Marathon & Running Event Series",
    client: "Lululemon",
    industry: "Fashion & Retail",
    campaign_type: "Sports & Fitness Activation",
    date: "2024-04",
    location: "Boston, Chicago, NYC, LA",
    description: "Marathon expo presence and finish line activation series with brand ambassadors providing product education, fitting services, and post-race recovery experiences.",
    challenge: "Connect with serious runners at major marathons while differentiating from athletic wear competitors and driving both brand affinity and retail traffic.",
    solution: "AirFresh staffed marathon expos with knowledgeable running enthusiasts who could speak authentically about performance apparel, plus post-race recovery zone staff offering stretch assistance and product sampling.",
    results: [
      "Engaged 35,000+ runners across 4 marathons",
      "Drove 28% increase in local store traffic post-event",
      "Collected 12,000 email sign-ups",
      "92% positive brand sentiment"
    ],
    deliverables: {
      staffing: {
        brand_ambassadors: 50,
        product_specialists: 15,
        event_managers: 8,
        total_staff_hours: 3600
      },
      sampling: {
        products_distributed: 25000,
        locations: 4,
        days: 8
      }
    },
    metrics: {
      impressions: "1.8M",
      engagement_rate: "58%",
      roi: "340%",
      brand_awareness_lift: "22%"
    },
    testimonial: {
      quote: "The running ambassadors AirFresh provided were authentic athletes who genuinely connected with our community.",
      author: "Michael Torres",
      title: "Director of Community Events, Lululemon"
    },
    keywords: ["marathon activation", "fitness brand marketing", "running events", "athletic retail", "sports experiential"],
    featured_image: "/images/case-studies/gallery/polaris/polaris-1.jpg",
    gallery_images: []
  },
  {
    id: "pfizer-health-fair-tour",
    title: "Pfizer Community Health Fair Tour",
    client: "Pfizer",
    industry: "Healthcare & Pharma",
    campaign_type: "Health Education Campaign",
    date: "2024-03",
    location: "20+ Cities Nationwide",
    description: "Nationwide health education tour with compliance-trained health educators providing screening information, wellness resources, and patient support program enrollment.",
    challenge: "Deliver complex health information in an accessible, engaging way while maintaining strict pharmaceutical marketing compliance across diverse communities.",
    solution: "AirFresh recruited and trained healthcare-background staff in pharmaceutical compliance, health literacy communication, and cultural competency to effectively reach diverse patient populations.",
    results: [
      "Reached 75,000+ community members",
      "Enrolled 8,500 patients in support programs",
      "100% compliance audit pass rate",
      "Expanded to 15 additional markets"
    ],
    deliverables: {
      staffing: {
        brand_ambassadors: 40,
        product_specialists: 25,
        event_managers: 10,
        total_staff_hours: 8000
      },
      event_management: {
        on_site_oversight: true,
        coordination_points: ["Healthcare facility coordination", "Compliance monitoring", "Patient privacy protocols"],
        safety_protocols: true,
        contingency_planning: true
      }
    },
    metrics: {
      impressions: "3.2M",
      engagement_rate: "42%",
      roi: "280%",
      conversion_rate: "11%"
    },
    testimonial: {
      quote: "AirFresh's compliance-trained staff allowed us to confidently expand our community health initiatives.",
      author: "Dr. Rebecca Stone",
      title: "Director of Patient Engagement, Pfizer"
    },
    keywords: ["healthcare marketing", "pharma compliance", "health fair staffing", "patient education", "medical event staff"],
    featured_image: "/images/case-studies/gallery/formula1/formula1-14.jpg",
    gallery_images: []
  },
  {
    id: "chase-bank-branch-launch",
    title: "Chase Bank New Market Branch Launch Campaign",
    client: "JPMorgan Chase",
    industry: "Financial Services",
    campaign_type: "Retail Banking Launch",
    date: "2024-05",
    location: "Phoenix, Austin, Denver",
    description: "New branch market launch campaign featuring community street teams, grand opening events, and ongoing brand ambassador presence to drive account openings.",
    challenge: "Establish Chase presence in new markets where the brand had limited awareness, competing against established regional banks with strong community ties.",
    solution: "AirFresh deployed professional, polished street teams for community outreach, bilingual brand ambassadors for diverse neighborhoods, and VIP event staff for grand opening celebrations.",
    results: [
      "Opened 15,000+ new accounts across 3 markets",
      "Generated 45,000 qualified leads",
      "Achieved 340% of account opening goals",
      "Built database of 80,000 prospects"
    ],
    deliverables: {
      staffing: {
        brand_ambassadors: 35,
        street_teams: 25,
        event_managers: 6,
        total_staff_hours: 4200
      },
      logistics: {
        permits_secured: ["Street permits", "Event permits"],
        transportation: ["Branded vehicles", "Mobile banking units"],
        equipment: ["Registration tablets", "Promotional materials"],
        venue_coordination: true
      }
    },
    metrics: {
      impressions: "1.5M",
      engagement_rate: "38%",
      roi: "450%",
      conversion_rate: "33%"
    },
    testimonial: {
      quote: "AirFresh helped us establish a strong community presence from day one. Their bilingual teams were essential.",
      author: "Robert Martinez",
      title: "Regional Marketing VP, JPMorgan Chase"
    },
    keywords: ["bank branch marketing", "financial services activation", "community outreach", "retail banking", "account acquisition"],
    featured_image: "/images/case-studies/gallery/formula1/formula1-14.jpg",
    gallery_images: []
  },
  {
    id: "gopro-action-sports-tour",
    title: "GoPro Action Sports Festival Tour",
    client: "GoPro",
    industry: "Consumer Electronics",
    campaign_type: "Action Sports Sponsorship Activation",
    date: "2024-06",
    location: "X Games, Vans US Open, Dew Tour",
    description: "Action sports festival tour with product demo stations, athlete meet-and-greets, and user-generated content activations featuring adventure-lifestyle brand ambassadors.",
    challenge: "Authentically connect with action sports enthusiasts who are skeptical of corporate marketing while demonstrating GoPro's latest camera technology in real-world conditions.",
    solution: "AirFresh recruited actual action sports athletes and enthusiasts as brand ambassadors who could authentically demonstrate products and engage with the community as peers rather than salespeople.",
    results: [
      "Generated 2M+ pieces of user content",
      "Drove 180% increase in social engagement",
      "Facilitated 25,000+ hands-on demos",
      "Achieved 67% purchase intent lift"
    ],
    deliverables: {
      staffing: {
        brand_ambassadors: 40,
        product_specialists: 20,
        event_managers: 8,
        total_staff_hours: 3800
      },
      creative: {
        custom_activation: "Content creation stations with instant editing",
        branded_materials: ["Demo cameras", "Mounting accessories", "Branded merchandise"],
        digital_integration: ["Social sharing stations", "Live streaming setups"]
      }
    },
    metrics: {
      impressions: "8.5M",
      engagement_rate: "78%",
      roi: "520%",
      social_reach: "15M+",
      brand_awareness_lift: "34%"
    },
    testimonial: {
      quote: "AirFresh found us genuine action sports enthusiasts who lived the GoPro lifestyle. You can't fake that authenticity.",
      author: "Chris Hendricks",
      title: "Global Events Director, GoPro"
    },
    keywords: ["action sports marketing", "festival activation", "UGC campaigns", "athlete ambassadors", "extreme sports events"],
    featured_image: "/images/case-studies/gallery/polaris/polaris-1.jpg",
    gallery_images: []
  },
  {
    id: "target-back-to-school",
    title: "Target Back-to-School Campus Activation",
    client: "Target",
    industry: "Retail",
    campaign_type: "Campus Marketing Campaign",
    date: "2024-08",
    location: "50 Universities Nationwide",
    description: "Nationwide college campus back-to-school campaign featuring dorm room makeover demonstrations, student discount promotions, and social media content creation activations.",
    challenge: "Connect with Gen Z college students in an authentic way that cuts through advertising noise while driving both in-store traffic and online purchases.",
    solution: "AirFresh recruited current college students and recent graduates as campus ambassadors who could relate peer-to-peer, creating authentic content and genuine word-of-mouth recommendations.",
    results: [
      "Reached 500,000+ college students",
      "Generated 1.2M social impressions",
      "Drove 45% increase in student segment sales",
      "Achieved 89% positive sentiment"
    ],
    deliverables: {
      staffing: {
        brand_ambassadors: 150,
        street_teams: 100,
        event_managers: 25,
        total_staff_hours: 12000
      },
      sampling: {
        products_distributed: 200000,
        locations: 50,
        days: 21
      }
    },
    metrics: {
      impressions: "1.2M",
      engagement_rate: "52%",
      roi: "380%",
      sales_uplift: "45%"
    },
    testimonial: {
      quote: "The campus ambassadors felt like real students giving real recommendations, not brand representatives. That's exactly what we needed.",
      author: "Amanda Chen",
      title: "VP Youth Marketing, Target"
    },
    keywords: ["campus marketing", "back to school", "Gen Z marketing", "student ambassadors", "college activation"],
    featured_image: "/images/case-studies/gallery/formula1/formula1-14.jpg",
    gallery_images: []
  },
  {
    id: "salesforce-dreamforce-experience",
    title: "Salesforce Dreamforce Conference Activation",
    client: "Salesforce",
    industry: "Technology",
    campaign_type: "Conference & Trade Show",
    date: "2024-09",
    location: "San Francisco, CA",
    description: "Comprehensive staffing for Salesforce's flagship Dreamforce conference including registration, session management, demo specialists, and VIP hospitality across multiple venues.",
    challenge: "Staff the world's largest software conference with 40,000+ attendees across multiple San Francisco venues, requiring diverse skillsets from technical demonstrators to hospitality professionals.",
    solution: "AirFresh provided a multi-tier staffing solution with tech-trained demo specialists for product pavilions, hospitality-experienced staff for executive events, and high-energy registration teams for seamless check-in.",
    results: [
      "Supported 45,000+ attendees seamlessly",
      "Staffed 200+ sessions and demos",
      "Achieved 4.9/5 attendee satisfaction",
      "Zero critical staffing gaps"
    ],
    deliverables: {
      staffing: {
        brand_ambassadors: 200,
        product_specialists: 75,
        event_managers: 30,
        total_staff_hours: 18000
      },
      event_management: {
        on_site_oversight: true,
        coordination_points: ["Multi-venue logistics", "Session management", "VIP coordination", "Emergency response"],
        safety_protocols: true,
        contingency_planning: true
      }
    },
    metrics: {
      impressions: "50M+",
      engagement_rate: "85%",
      roi: "600%"
    },
    testimonial: {
      quote: "Dreamforce is our Super Bowl, and AirFresh has been our MVP staffing partner for five consecutive years.",
      author: "Kevin Park",
      title: "VP Global Events, Salesforce"
    },
    keywords: ["tech conference staffing", "Dreamforce", "B2B event staff", "conference registration", "demo specialists"],
    featured_image: "/images/case-studies/gallery/formula1/formula1-14.jpg",
    gallery_images: []
  }
];

// Export function to get case study by ID
export function getEnhancedCaseStudyById(id: string): EnhancedCaseStudy | undefined {
  return enhancedCaseStudies.find(cs => cs.id === id);
}

// Export function to get featured case studies
export function getFeaturedEnhancedCaseStudies(limit: number = 3): EnhancedCaseStudy[] {
  return enhancedCaseStudies.slice(0, limit);
}

// Export function to get case studies by industry
export function getEnhancedCaseStudiesByIndustry(industry: string): EnhancedCaseStudy[] {
  return enhancedCaseStudies.filter(cs => 
    cs.industry.toLowerCase() === industry.toLowerCase()
  );
}

// Export function to get case studies by campaign type
export function getEnhancedCaseStudiesByCampaignType(type: string): EnhancedCaseStudy[] {
  return enhancedCaseStudies.filter(cs => 
    cs.campaign_type.toLowerCase().includes(type.toLowerCase())
  );
}

// Export function to search case studies by keywords
export function searchEnhancedCaseStudies(keyword: string): EnhancedCaseStudy[] {
  const lowerKeyword = keyword.toLowerCase();
  return enhancedCaseStudies.filter(cs => 
    cs.title.toLowerCase().includes(lowerKeyword) ||
    cs.description.toLowerCase().includes(lowerKeyword) ||
    cs.keywords.some(k => k.toLowerCase().includes(lowerKeyword)) ||
    cs.client.toLowerCase().includes(lowerKeyword) ||
    cs.location.toLowerCase().includes(lowerKeyword)
  );
}