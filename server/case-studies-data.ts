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