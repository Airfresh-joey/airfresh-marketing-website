// Comprehensive targeting data for dynamic landing pages

export interface TargetingData {
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  challenges: string[];
  solutions: {
    title: string;
    description: string;
  }[];
  deliverables: string[];
  metrics: {
    metric: string;
    description: string;
  }[];
  keywords: string[];
  relatedCaseStudies?: string[];
  cityModifier?: (cityName: string) => {
    title: string;
    description: string;
  };
}

// Verticals targeting data
export const verticals: TargetingData[] = [
  {
    slug: "cpg-sampling",
    name: "CPG Product Sampling",
    title: "CPG Product Sampling & Brand Activations | AirFresh Marketing",
    metaDescription: "Expert CPG product sampling campaigns and brand activations. Drive trial, increase awareness, and boost sales with targeted sampling programs nationwide.",
    heroTitle: "CPG Product Sampling Campaigns",
    heroSubtitle: "Drive trial, build awareness, and accelerate sales with strategic product sampling",
    challenges: [
      "Reaching the right target demographic at scale",
      "Measuring sampling campaign ROI and conversion rates",
      "Managing logistics for multi-market sampling programs",
      "Ensuring brand consistency across all touchpoints",
      "Competing for consumer attention in crowded retail environments"
    ],
    solutions: [
      {
        title: "Targeted Sampling Strategy",
        description: "Data-driven approach to identify high-value sampling locations and demographics for maximum conversion"
      },
      {
        title: "Professional Brand Ambassadors",
        description: "Extensively trained product specialists who embody your brand values and drive meaningful interactions"
      },
      {
        title: "Real-Time Analytics",
        description: "Digital reporting dashboard tracking samples distributed, consumer feedback, and engagement metrics"
      },
      {
        title: "Multi-Channel Integration",
        description: "Seamless connection between sampling experiences and digital campaigns for amplified reach"
      }
    ],
    deliverables: [
      "Pre-campaign consumer research and location scouting",
      "Brand ambassador recruitment and training",
      "Sample distribution and inventory management",
      "Consumer data capture and lead generation",
      "Post-campaign analytics and ROI reporting",
      "Social media content creation during activations",
      "Compliance with health and safety regulations"
    ],
    metrics: [
      { metric: "85%", description: "Average trial-to-purchase conversion rate" },
      { metric: "2.5M+", description: "Annual samples distributed nationwide" },
      { metric: "92%", description: "Consumer brand recall after sampling" },
      { metric: "3.2x", description: "Average ROI on sampling campaigns" }
    ],
    keywords: ["CPG sampling", "product sampling", "brand activation", "consumer packaged goods", "product demonstration", "retail sampling"],
    cityModifier: (cityName) => ({
      title: `CPG Product Sampling in ${cityName}`,
      description: `Execute targeted CPG sampling campaigns throughout ${cityName} with local brand ambassadors who understand the market dynamics and consumer preferences.`
    })
  },
  {
    slug: "nightlife-promotions",
    name: "Nightlife Marketing",
    title: "Nightlife Marketing & Club Promotions | AirFresh Marketing",
    metaDescription: "Premier nightlife marketing agency specializing in club promotions, bottle service campaigns, and venue launches. Reach influential nightlife audiences nationwide.",
    heroTitle: "Nightlife Marketing & Promotions",
    heroSubtitle: "Elevate your brand in the nightlife scene with immersive experiences",
    challenges: [
      "Reaching trend-setting nightlife influencers",
      "Standing out in competitive nightclub environments",
      "Managing late-night activation logistics",
      "Ensuring age-appropriate targeting and compliance",
      "Creating Instagram-worthy moments that drive social sharing"
    ],
    solutions: [
      {
        title: "VIP Influencer Programs",
        description: "Connect with nightlife influencers and tastemakers through exclusive experiences and partnerships"
      },
      {
        title: "Venue Takeovers",
        description: "Transform entire venues into branded experiences with custom décor, performances, and activations"
      },
      {
        title: "Bottle Service Integration",
        description: "Premium brand placement and custom bottle presentations that elevate the VIP experience"
      },
      {
        title: "Social Media Amplification",
        description: "Create shareable moments with photo ops, branded content, and real-time social engagement"
      }
    ],
    deliverables: [
      "Venue partnership negotiations",
      "Nightlife brand ambassador staffing",
      "Custom bottle service presentations",
      "VIP event production and management",
      "Social media content creation",
      "Influencer outreach and management",
      "Compliance with liquor licensing laws"
    ],
    metrics: [
      { metric: "500+", description: "Nightlife venues in our network" },
      { metric: "10M+", description: "Social impressions per campaign" },
      { metric: "75%", description: "Increase in venue traffic during promotions" },
      { metric: "200+", description: "Nightlife influencer partnerships" }
    ],
    keywords: ["nightlife marketing", "club promotions", "bottle service", "venue marketing", "nightclub advertising", "bar promotions"],
    cityModifier: (cityName) => ({
      title: `Nightlife Marketing in ${cityName}`,
      description: `Dominate the ${cityName} nightlife scene with strategic club promotions and venue partnerships at the hottest spots in town.`
    })
  },
  {
    slug: "beauty-activations",
    name: "Beauty Brand Activations",
    title: "Beauty Brand Activations & Cosmetics Marketing | AirFresh Marketing",
    metaDescription: "Specialized beauty brand activations and cosmetics marketing campaigns. From product launches to influencer events, we create beautiful brand experiences.",
    heroTitle: "Beauty Brand Activations",
    heroSubtitle: "Create stunning experiences that showcase your beauty brand's unique story",
    challenges: [
      "Demonstrating product benefits in sanitary environments",
      "Reaching diverse beauty consumers across demographics",
      "Competing with established beauty brands for attention",
      "Managing product samples and shade matching",
      "Creating inclusive experiences for all skin types and tones"
    ],
    solutions: [
      {
        title: "Hygienic Product Trials",
        description: "Safe, sanitary product demonstration protocols that meet health standards while delivering experiences"
      },
      {
        title: "Beauty Consultations",
        description: "Licensed aestheticians and makeup artists providing personalized consultations and applications"
      },
      {
        title: "Influencer Partnerships",
        description: "Collaborate with beauty influencers and micro-influencers for authentic product endorsements"
      },
      {
        title: "Pop-Up Beauty Bars",
        description: "Instagram-worthy pop-up experiences featuring makeovers, tutorials, and product education"
      }
    ],
    deliverables: [
      "Beauty consultant recruitment and training",
      "Sanitary product demonstration setup",
      "Shade matching and consultation services",
      "Mini-makeover experiences",
      "Product sample distribution",
      "Digital shade finder integration",
      "Social media content creation"
    ],
    metrics: [
      { metric: "88%", description: "Purchase intent after consultation" },
      { metric: "15K+", description: "Beauty consultations monthly" },
      { metric: "94%", description: "Customer satisfaction rating" },
      { metric: "2.8x", description: "Social sharing rate vs. standard campaigns" }
    ],
    keywords: ["beauty activations", "cosmetics marketing", "makeup demonstrations", "beauty events", "skincare sampling", "beauty brand ambassadors"],
    cityModifier: (cityName) => ({
      title: `Beauty Activations in ${cityName}`,
      description: `Execute flawless beauty brand activations throughout ${cityName} with experienced beauty consultants who understand local beauty trends and preferences.`
    })
  },
  {
    slug: "tech-conferences",
    name: "Tech Conference Marketing",
    title: "Tech Conference Marketing & Trade Show Activations | AirFresh Marketing",
    metaDescription: "Expert tech conference marketing and trade show activations. From CES to TechCrunch Disrupt, we help tech brands stand out and generate qualified leads.",
    heroTitle: "Tech Conference Marketing",
    heroSubtitle: "Make your mark at major tech conferences with innovative activations",
    challenges: [
      "Standing out among hundreds of tech exhibitors",
      "Attracting qualified leads vs. booth browsers",
      "Demonstrating complex technology simply",
      "Managing technical setup and connectivity needs",
      "Capturing and qualifying leads efficiently"
    ],
    solutions: [
      {
        title: "Interactive Tech Demos",
        description: "Hands-on product demonstrations that simplify complex technology for diverse audiences"
      },
      {
        title: "Lead Qualification System",
        description: "Digital lead capture with real-time scoring and CRM integration for immediate follow-up"
      },
      {
        title: "Developer Engagement",
        description: "Technical staff who speak the language of developers, engineers, and IT professionals"
      },
      {
        title: "Booth Traffic Drivers",
        description: "Creative activations and incentives that draw qualified prospects to your booth"
      }
    ],
    deliverables: [
      "Booth design and setup management",
      "Technical staff and product specialists",
      "Lead capture and qualification",
      "Product demonstration scripts",
      "Swag and giveaway management",
      "Meeting scheduling and coordination",
      "Post-show lead nurturing support"
    ],
    metrics: [
      { metric: "250+", description: "Average qualified leads per show" },
      { metric: "45%", description: "Lead-to-opportunity conversion rate" },
      { metric: "92%", description: "Booth visitor engagement rate" },
      { metric: "3.5x", description: "ROI on conference investment" }
    ],
    keywords: ["tech conference marketing", "trade show marketing", "tech events", "B2B marketing", "conference booth staffing", "tech demonstrations"],
    cityModifier: (cityName) => ({
      title: `Tech Conference Marketing in ${cityName}`,
      description: `Maximize your presence at ${cityName} tech conferences and trade shows with experienced staff who understand the local tech ecosystem.`
    })
  },
  {
    slug: "retail-activations",
    name: "Retail Activations",
    title: "In-Store Retail Activations & Shopper Marketing | AirFresh Marketing",
    metaDescription: "Drive sales with strategic retail activations and shopper marketing programs. From product launches to seasonal campaigns, we boost retail performance.",
    heroTitle: "Retail Activation Programs",
    heroSubtitle: "Transform shoppers into buyers with engaging in-store experiences",
    challenges: [
      "Gaining retailer approval for in-store activations",
      "Training staff on diverse product lines",
      "Measuring in-store conversion and sales lift",
      "Coordinating multi-location retail campaigns",
      "Competing for shopper attention at point of purchase"
    ],
    solutions: [
      {
        title: "Retailer Relations",
        description: "Established relationships with major retailers for streamlined activation approvals"
      },
      {
        title: "Sales Specialist Training",
        description: "Comprehensive product knowledge training creating authentic brand advocates"
      },
      {
        title: "Conversion Tracking",
        description: "POS integration and sales tracking to measure true campaign impact"
      },
      {
        title: "Multi-Store Coordination",
        description: "Centralized management for consistent execution across all retail locations"
      }
    ],
    deliverables: [
      "Retailer approval and coordination",
      "In-store brand ambassador staffing",
      "Product demonstration stations",
      "Shopper intercept and education",
      "Sales tracking and reporting",
      "Merchandising support",
      "Inventory management"
    ],
    metrics: [
      { metric: "32%", description: "Average sales lift during activations" },
      { metric: "5,000+", description: "Retail locations activated" },
      { metric: "78%", description: "Shopper trial-to-purchase rate" },
      { metric: "95%", description: "Retailer satisfaction score" }
    ],
    keywords: ["retail activations", "shopper marketing", "in-store marketing", "retail promotions", "product demonstrations", "sales activation"],
    cityModifier: (cityName) => ({
      title: `Retail Activations in ${cityName}`,
      description: `Execute high-impact retail activations across ${cityName} stores with local brand ambassadors who drive sales and build brand loyalty.`
    })
  },
  {
    slug: "automotive-launches",
    name: "Automotive Marketing",
    title: "Automotive Marketing & Vehicle Launch Events | AirFresh Marketing",
    metaDescription: "Specialized automotive marketing for vehicle launches, auto shows, and test drive events. Rev up your brand with experiential automotive campaigns.",
    heroTitle: "Automotive Marketing Events",
    heroSubtitle: "Accelerate your automotive brand with immersive driving experiences",
    challenges: [
      "Creating safe test drive experiences",
      "Managing vehicle logistics and transportation",
      "Training staff on technical specifications",
      "Generating qualified leads for dealerships",
      "Showcasing vehicles in non-traditional venues"
    ],
    solutions: [
      {
        title: "Test Drive Programs",
        description: "Managed test drive experiences with trained drivers and safety protocols"
      },
      {
        title: "Auto Show Excellence",
        description: "Premium auto show presentations with product specialists and interactive displays"
      },
      {
        title: "Ride & Drive Events",
        description: "Pop-up driving experiences in high-traffic locations for maximum exposure"
      },
      {
        title: "Dealership Integration",
        description: "Lead routing and appointment setting directly with local dealerships"
      }
    ],
    deliverables: [
      "Vehicle logistics and transportation",
      "Certified driving instructors",
      "Product specialist training",
      "Lead capture and qualification",
      "Safety protocol management",
      "Insurance and permit coordination",
      "Dealership lead distribution"
    ],
    metrics: [
      { metric: "65%", description: "Test drive to purchase rate within 90 days" },
      { metric: "1,200+", description: "Test drives facilitated monthly" },
      { metric: "89%", description: "Customer satisfaction with experience" },
      { metric: "4.2x", description: "Higher conversion vs. traditional advertising" }
    ],
    keywords: ["automotive marketing", "vehicle launch", "auto shows", "test drive events", "car marketing", "automotive experiential"],
    cityModifier: (cityName) => ({
      title: `Automotive Marketing in ${cityName}`,
      description: `Drive automotive sales in ${cityName} with strategic vehicle launches, test drive events, and auto show activations tailored to local preferences.`
    })
  },
  {
    slug: "fitness-wellness",
    name: "Fitness & Wellness Marketing",
    title: "Fitness & Wellness Brand Activations | AirFresh Marketing",
    metaDescription: "Energize your fitness and wellness brand with experiential marketing campaigns. From gym samplings to wellness festivals, we help brands connect with health-conscious consumers.",
    heroTitle: "Fitness & Wellness Activations",
    heroSubtitle: "Inspire healthy lifestyles with engaging fitness experiences",
    challenges: [
      "Reaching fitness enthusiasts outside gym environments",
      "Demonstrating products safely during physical activities",
      "Managing outdoor event logistics and weather",
      "Creating inclusive experiences for all fitness levels",
      "Competing with established fitness brands"
    ],
    solutions: [
      {
        title: "Pop-Up Fitness Classes",
        description: "Branded workout sessions with certified instructors in high-traffic locations"
      },
      {
        title: "Race & Event Sponsorships",
        description: "Strategic presence at marathons, triathlons, and fitness competitions"
      },
      {
        title: "Wellness Sampling",
        description: "Product trials at gyms, yoga studios, and health food stores"
      },
      {
        title: "Influencer Partnerships",
        description: "Collaborations with fitness influencers and wellness professionals"
      }
    ],
    deliverables: [
      "Certified fitness instructors",
      "Pop-up gym equipment setup",
      "Product sampling programs",
      "Fitness challenge coordination",
      "Health screening services",
      "Athletic event staffing",
      "Social media content creation"
    ],
    metrics: [
      { metric: "73%", description: "Participants who purchase post-activation" },
      { metric: "50K+", description: "Fitness enthusiasts engaged monthly" },
      { metric: "91%", description: "Brand favorability increase" },
      { metric: "2.9x", description: "Social media engagement rate" }
    ],
    keywords: ["fitness marketing", "wellness activations", "gym marketing", "health brand promotion", "fitness events", "wellness sampling"],
    cityModifier: (cityName) => ({
      title: `Fitness & Wellness Marketing in ${cityName}`,
      description: `Connect with ${cityName}'s health-conscious community through strategic fitness activations and wellness events at gyms, parks, and sporting venues.`
    })
  },
  {
    slug: "food-beverage",
    name: "Food & Beverage Marketing",
    title: "Food & Beverage Sampling and Tastings | AirFresh Marketing",
    metaDescription: "Expert food and beverage marketing with sampling campaigns, taste tests, and culinary events. Deliver delicious brand experiences that drive purchase intent.",
    heroTitle: "Food & Beverage Marketing",
    heroSubtitle: "Serve up memorable taste experiences that convert",
    challenges: [
      "Managing food safety and health regulations",
      "Maintaining product quality during sampling",
      "Handling dietary restrictions and allergies",
      "Creating appetite appeal in various settings",
      "Measuring taste preference and purchase intent"
    ],
    solutions: [
      {
        title: "Safe Sampling Protocols",
        description: "Food safety certified staff following strict health department guidelines"
      },
      {
        title: "Mobile Kitchen Units",
        description: "Professional mobile kitchens for hot food preparation and service"
      },
      {
        title: "Dietary Accommodations",
        description: "Allergen awareness and alternative options for diverse dietary needs"
      },
      {
        title: "Purchase Integration",
        description: "Immediate purchase options and retailer partnerships for conversion"
      }
    ],
    deliverables: [
      "Food safety certified staff",
      "Mobile kitchen setup and operation",
      "Sample preparation and service",
      "Health permit coordination",
      "Allergen management protocols",
      "Purchase facilitation",
      "Waste management and cleanup"
    ],
    metrics: [
      { metric: "82%", description: "Sample-to-purchase conversion rate" },
      { metric: "3M+", description: "Food samples distributed annually" },
      { metric: "96%", description: "Taste approval rating" },
      { metric: "2.7x", description: "Sales lift during sampling periods" }
    ],
    keywords: ["food sampling", "beverage marketing", "taste testing", "food marketing", "culinary events", "restaurant marketing"],
    cityModifier: (cityName) => ({
      title: `Food & Beverage Marketing in ${cityName}`,
      description: `Delight ${cityName} foodies with strategic food and beverage sampling campaigns at grocery stores, festivals, and high-traffic venues throughout the city.`
    })
  }
];

// Conventions targeting data
export const conventions: TargetingData[] = [
  {
    slug: "comic-conventions",
    name: "Comic Con Marketing",
    title: "Comic Con & Pop Culture Convention Marketing | AirFresh Marketing",
    metaDescription: "Stand out at Comic-Con and pop culture conventions with costumed brand ambassadors, interactive booths, and fan engagement strategies that generate buzz.",
    heroTitle: "Comic Convention Marketing",
    heroSubtitle: "Connect with passionate fans through immersive pop culture experiences",
    challenges: [
      "Competing with major entertainment studios for attention",
      "Creating authentic connections with discerning fans",
      "Managing costume and prop logistics",
      "Generating social media buzz in crowded feeds",
      "Converting fan interest into sales"
    ],
    solutions: [
      {
        title: "Costumed Brand Ambassadors",
        description: "Professional cosplayers and character actors who embody your brand in costume"
      },
      {
        title: "Interactive Fan Experiences",
        description: "Photo ops, gaming stations, and exclusive previews that fans crave"
      },
      {
        title: "Exclusive Convention Swag",
        description: "Limited edition merchandise and collectibles that drive booth traffic"
      },
      {
        title: "Influencer Partnerships",
        description: "Collaborations with comic artists, cosplayers, and pop culture influencers"
      }
    ],
    deliverables: [
      "Booth design and construction",
      "Costumed character actors",
      "Interactive experience setup",
      "Exclusive merchandise management",
      "Panel discussion coordination",
      "Artist alley activations",
      "Social media live coverage"
    ],
    metrics: [
      { metric: "15K+", description: "Average booth visitors per convention" },
      { metric: "5M+", description: "Social media impressions per event" },
      { metric: "88%", description: "Fan engagement rate" },
      { metric: "3,500+", description: "Qualified leads captured per show" }
    ],
    keywords: ["comic con marketing", "pop culture conventions", "fan conventions", "cosplay marketing", "geek culture events", "comic convention booth"],
    cityModifier: (cityName) => ({
      title: `Comic Convention Marketing in ${cityName}`,
      description: `Dominate ${cityName} comic conventions and pop culture events with experienced teams who understand fan culture and create authentic brand connections.`
    })
  },
  {
    slug: "trade-shows",
    name: "Trade Show Marketing",
    title: "Trade Show Marketing & B2B Event Staffing | AirFresh Marketing",
    metaDescription: "Professional trade show marketing services including booth staffing, lead generation, and B2B engagement strategies that deliver measurable ROI.",
    heroTitle: "Trade Show Marketing Excellence",
    heroSubtitle: "Generate quality leads and build partnerships at industry trade shows",
    challenges: [
      "Attracting decision-makers to your booth",
      "Qualifying leads efficiently during busy periods",
      "Training staff on complex B2B solutions",
      "Following up with leads post-show",
      "Measuring true ROI from trade show investment"
    ],
    solutions: [
      {
        title: "Lead Qualification Experts",
        description: "Trained B2B specialists who identify and engage decision-makers"
      },
      {
        title: "Digital Lead Capture",
        description: "Seamless CRM integration with real-time lead scoring and routing"
      },
      {
        title: "Executive Engagement",
        description: "VIP experiences and private meetings for high-value prospects"
      },
      {
        title: "Post-Show Nurturing",
        description: "Follow-up campaigns and appointment setting services"
      }
    ],
    deliverables: [
      "Professional booth staff training",
      "Lead capture technology setup",
      "Appointment scheduling",
      "Product demonstration support",
      "VIP hospitality services",
      "Competitive intelligence gathering",
      "Post-show lead follow-up"
    ],
    metrics: [
      { metric: "300+", description: "Qualified B2B leads per show" },
      { metric: "42%", description: "Lead-to-customer conversion rate" },
      { metric: "25+", description: "C-level meetings scheduled per event" },
      { metric: "4.8x", description: "Average trade show ROI" }
    ],
    keywords: ["trade show marketing", "B2B events", "trade show staffing", "lead generation", "business conventions", "exhibition marketing"],
    cityModifier: (cityName) => ({
      title: `Trade Show Marketing in ${cityName}`,
      description: `Maximize ROI at ${cityName} trade shows and B2B events with experienced teams who understand your industry and deliver qualified leads.`
    })
  },
  {
    slug: "gaming-conventions",
    name: "Gaming Convention Marketing",
    title: "Gaming Convention & Esports Event Marketing | AirFresh Marketing",
    metaDescription: "Level up your brand at gaming conventions and esports events. From PAX to E3, we create engaging experiences for the gaming community.",
    heroTitle: "Gaming Convention Marketing",
    heroSubtitle: "Power up your brand in the gaming and esports community",
    challenges: [
      "Engaging skeptical gaming audiences authentically",
      "Managing gaming station setup and technology",
      "Creating competitive tournament experiences",
      "Building credibility within gaming culture",
      "Converting gamers into brand advocates"
    ],
    solutions: [
      {
        title: "Gaming Tournaments",
        description: "Professional tournament organization with live streaming and commentary"
      },
      {
        title: "Influencer Partnerships",
        description: "Collaborations with streamers, pro gamers, and gaming content creators"
      },
      {
        title: "Demo Stations",
        description: "High-performance gaming setups for optimal gameplay experiences"
      },
      {
        title: "Swag & Loot",
        description: "Gaming-themed merchandise and digital goods that resonate with players"
      }
    ],
    deliverables: [
      "Gaming station setup and management",
      "Tournament organization and prizes",
      "Stream production and broadcasting",
      "Pro gamer appearances",
      "Gaming influencer coordination",
      "Digital code distribution",
      "Community management"
    ],
    metrics: [
      { metric: "10K+", description: "Gamers engaged per convention" },
      { metric: "2M+", description: "Twitch impressions per event" },
      { metric: "85%", description: "Positive sentiment score" },
      { metric: "500+", description: "Tournament participants average" }
    ],
    keywords: ["gaming conventions", "esports marketing", "gaming events", "video game marketing", "esports sponsorship", "gaming activation"],
    cityModifier: (cityName) => ({
      title: `Gaming Convention Marketing in ${cityName}`,
      description: `Connect with ${cityName}'s gaming community at conventions and esports events with activations that speak the language of gamers.`
    })
  },
  {
    slug: "medical-conventions",
    name: "Medical Convention Marketing",
    title: "Medical Convention & Healthcare Trade Show Marketing | AirFresh Marketing",
    metaDescription: "Professional medical convention marketing and healthcare trade show services. Engage HCPs, showcase medical devices, and generate qualified healthcare leads.",
    heroTitle: "Medical Convention Marketing",
    heroSubtitle: "Connect with healthcare professionals at medical conferences",
    challenges: [
      "Navigating healthcare compliance and regulations",
      "Engaging time-pressed healthcare professionals",
      "Demonstrating complex medical technologies",
      "Managing sensitive health information",
      "Building trust with medical professionals"
    ],
    solutions: [
      {
        title: "Clinical Educators",
        description: "Medical professionals who can discuss clinical benefits and applications"
      },
      {
        title: "Compliance Management",
        description: "Full adherence to FDA, HIPAA, and industry regulations"
      },
      {
        title: "HCP Engagement",
        description: "Targeted outreach to physicians, nurses, and healthcare administrators"
      },
      {
        title: "Medical Demonstrations",
        description: "Safe, compliant product demonstrations in clinical settings"
      }
    ],
    deliverables: [
      "Clinical educator staffing",
      "Regulatory compliance management",
      "Medical device demonstrations",
      "HCP appointment scheduling",
      "Continuing education coordination",
      "Sample distribution management",
      "Key opinion leader engagement"
    ],
    metrics: [
      { metric: "400+", description: "HCP interactions per convention" },
      { metric: "75%", description: "Follow-up appointment rate" },
      { metric: "95%", description: "Compliance audit score" },
      { metric: "60+", description: "KOL meetings facilitated per show" }
    ],
    keywords: ["medical conventions", "healthcare marketing", "medical trade shows", "HCP engagement", "medical device marketing", "pharma conventions"],
    cityModifier: (cityName) => ({
      title: `Medical Convention Marketing in ${cityName}`,
      description: `Engage healthcare professionals at ${cityName} medical conventions with compliant, professional teams experienced in medical device and pharma marketing.`
    })
  },
  {
    slug: "auto-shows",
    name: "Auto Show Marketing",
    title: "Auto Show Marketing & Automotive Events | AirFresh Marketing",
    metaDescription: "Rev up your presence at auto shows with professional product specialists, interactive displays, and test drive experiences that convert browsers to buyers.",
    heroTitle: "Auto Show Marketing",
    heroSubtitle: "Showcase your vehicles with premium auto show experiences",
    challenges: [
      "Standing out among dozens of automotive brands",
      "Training staff on technical specifications",
      "Managing test drive logistics at shows",
      "Capturing quality leads for dealerships",
      "Creating memorable experiences beyond static displays"
    ],
    solutions: [
      {
        title: "Product Specialists",
        description: "Automotive experts who know every feature and can answer technical questions"
      },
      {
        title: "Interactive Displays",
        description: "VR experiences, simulators, and hands-on technology demonstrations"
      },
      {
        title: "Lead Management",
        description: "Digital lead capture with immediate routing to local dealerships"
      },
      {
        title: "Premium Experiences",
        description: "VIP lounges and exclusive reveals for high-value prospects"
      }
    ],
    deliverables: [
      "Auto show booth staffing",
      "Product specialist training",
      "Interactive display setup",
      "Lead capture and qualification",
      "Test drive coordination",
      "VIP experience management",
      "Dealership integration"
    ],
    metrics: [
      { metric: "20K+", description: "Qualified leads per major auto show" },
      { metric: "68%", description: "Lead-to-showroom visit rate" },
      { metric: "850+", description: "Test drives scheduled per show" },
      { metric: "92%", description: "Visitor engagement rate" }
    ],
    keywords: ["auto show marketing", "automotive events", "car shows", "auto show staffing", "vehicle launch events", "automotive exhibitions"],
    cityModifier: (cityName) => ({
      title: `Auto Show Marketing in ${cityName}`,
      description: `Dominate the ${cityName} auto show with experienced automotive specialists who drive qualified leads to your local dealerships.`
    })
  }
];

// Major events targeting data
export const events: TargetingData[] = [
  {
    slug: "super-bowl",
    name: "Super Bowl Activations",
    title: "Super Bowl Marketing & Game Day Activations | AirFresh Marketing",
    metaDescription: "Create winning Super Bowl marketing campaigns with experiential activations, tailgate experiences, and fan engagement throughout the big game weekend.",
    heroTitle: "Super Bowl Marketing Activations",
    heroSubtitle: "Score big with championship-level brand experiences",
    challenges: [
      "Competing for attention during the biggest marketing week",
      "Managing security and logistics in restricted zones",
      "Creating non-official sponsor activations legally",
      "Reaching fans without NFL licensing",
      "Maximizing impact with limited time window"
    ],
    solutions: [
      {
        title: "Fan Experience Zones",
        description: "High-energy activations in permitted areas near stadiums and fan events"
      },
      {
        title: "Tailgate Marketing",
        description: "Branded tailgate experiences with games, giveaways, and product sampling"
      },
      {
        title: "Celebrity Appearances",
        description: "Former players and sports celebrities for meet-and-greets"
      },
      {
        title: "Viewing Parties",
        description: "Branded viewing party experiences at sports bars and venues"
      }
    ],
    deliverables: [
      "Activation location scouting",
      "Permit and compliance management",
      "Brand ambassador teams",
      "Tailgate experience setup",
      "Celebrity appearance coordination",
      "Product sampling programs",
      "Social media amplification"
    ],
    metrics: [
      { metric: "100K+", description: "Fans engaged during Super Bowl week" },
      { metric: "15M+", description: "Social media impressions" },
      { metric: "95%", description: "Brand recall post-event" },
      { metric: "5,000+", description: "Product samples distributed daily" }
    ],
    keywords: ["Super Bowl marketing", "Super Bowl activations", "game day marketing", "football events", "tailgate marketing", "championship marketing"],
    cityModifier: (cityName) => ({
      title: `Super Bowl Marketing in ${cityName}`,
      description: `Execute championship-level Super Bowl activations throughout ${cityName} with experienced teams who understand the excitement and scale of the big game.`
    })
  },
  {
    slug: "sxsw",
    name: "SXSW Marketing",
    title: "SXSW Marketing & Austin Festival Activations | AirFresh Marketing",
    metaDescription: "Stand out at SXSW with innovative brand activations, tech demos, and immersive experiences that capture the spirit of innovation and creativity.",
    heroTitle: "SXSW Festival Marketing",
    heroSubtitle: "Innovate and activate at the intersection of tech, film, and music",
    challenges: [
      "Breaking through the noise of hundreds of activations",
      "Reaching the right audience across multiple venues",
      "Managing permits and logistics in Austin",
      "Creating experiences for diverse SXSW audiences",
      "Sustaining energy across 10-day festival"
    ],
    solutions: [
      {
        title: "House Takeovers",
        description: "Transform Austin venues into immersive brand experiences"
      },
      {
        title: "Tech Innovations",
        description: "Showcase cutting-edge technology with interactive demonstrations"
      },
      {
        title: "Music Venue Partnerships",
        description: "Sponsor showcases and concerts at iconic Austin venues"
      },
      {
        title: "Film & Interactive",
        description: "Premieres, panels, and VR experiences for diverse audiences"
      }
    ],
    deliverables: [
      "Venue sourcing and rental",
      "Austin permit coordination",
      "Multi-day activation staffing",
      "Tech demo setup and support",
      "Music showcase production",
      "Panel and speaker coordination",
      "Badge holder targeting"
    ],
    metrics: [
      { metric: "50K+", description: "Attendees engaged at SXSW" },
      { metric: "20M+", description: "Social impressions during festival" },
      { metric: "200+", description: "Media mentions average" },
      { metric: "85%", description: "Attendee satisfaction rating" }
    ],
    keywords: ["SXSW marketing", "Austin festival marketing", "SXSW activations", "tech festival marketing", "music festival marketing", "interactive marketing"],
    cityModifier: (cityName) => ({
      title: `SXSW Marketing Support from ${cityName}`,
      description: `Leverage our ${cityName} team for SXSW planning and execution, bringing experienced staff to Austin for the ultimate festival activation.`
    })
  },
  {
    slug: "coachella",
    name: "Coachella Marketing",
    title: "Coachella & Music Festival Marketing | AirFresh Marketing",
    metaDescription: "Create Instagram-worthy Coachella activations and music festival experiences that resonate with influencers and festival-goers in the desert.",
    heroTitle: "Coachella Festival Marketing",
    heroSubtitle: "Create the most Instagrammable experiences in the desert",
    challenges: [
      "Competing with major brand activations for attention",
      "Managing desert weather and logistics",
      "Creating shareable moments for social media",
      "Reaching VIPs and influencers",
      "Sustaining activation quality across both weekends"
    ],
    solutions: [
      {
        title: "Festival Oasis Creation",
        description: "Branded retreats offering respite with amenities and experiences"
      },
      {
        title: "Influencer Hosting",
        description: "VIP experiences for influencers and content creators"
      },
      {
        title: "Art Installations",
        description: "Interactive art pieces that become festival landmarks"
      },
      {
        title: "Beauty & Wellness",
        description: "Festival beauty bars and wellness experiences"
      }
    ],
    deliverables: [
      "Desert venue development",
      "Festival permit management",
      "Influencer guest list coordination",
      "Art installation creation",
      "Beauty service stations",
      "VIP hospitality services",
      "Content creation teams"
    ],
    metrics: [
      { metric: "30K+", description: "Festival-goers engaged per weekend" },
      { metric: "50M+", description: "Social media reach" },
      { metric: "500+", description: "Influencer activations" },
      { metric: "92%", description: "Instagram sharing rate" }
    ],
    keywords: ["Coachella marketing", "music festival marketing", "festival activations", "influencer marketing", "desert festival", "Instagram activations"],
    cityModifier: (cityName) => ({
      title: `Festival Marketing Team from ${cityName}`,
      description: `Deploy our experienced ${cityName} team to Coachella and music festivals nationwide for world-class brand activations.`
    })
  },
  {
    slug: "ces",
    name: "CES Marketing",
    title: "CES Las Vegas Tech Marketing & Activations | AirFresh Marketing",
    metaDescription: "Dominate CES Las Vegas with innovative tech demonstrations, booth experiences, and networking events that generate buzz and business leads.",
    heroTitle: "CES Tech Marketing",
    heroSubtitle: "Showcase innovation at the world's largest tech event",
    challenges: [
      "Standing out among 4,000+ exhibitors",
      "Managing complex tech demonstrations",
      "Attracting media and analyst attention",
      "Navigating Vegas logistics during peak season",
      "Connecting with qualified B2B buyers"
    ],
    solutions: [
      {
        title: "Tech Demonstration Experts",
        description: "Engineers and product experts who can explain complex technology"
      },
      {
        title: "Media Relations",
        description: "Press event coordination and journalist engagement"
      },
      {
        title: "Suite Experiences",
        description: "Private suite meetings for VIP prospects and partners"
      },
      {
        title: "Awards Support",
        description: "CES Innovation Awards submission and showcase support"
      }
    ],
    deliverables: [
      "Booth design and construction",
      "Technical staff training",
      "Press conference support",
      "VIP suite management",
      "Product demonstration scripts",
      "Lead capture systems",
      "After-hours event production"
    ],
    metrics: [
      { metric: "5,000+", description: "Booth visitors average at CES" },
      { metric: "350+", description: "Media interactions per show" },
      { metric: "150+", description: "Qualified enterprise leads" },
      { metric: "25M+", description: "Media impressions generated" }
    ],
    keywords: ["CES marketing", "CES Las Vegas", "tech trade show", "technology marketing", "CES booth", "tech demonstrations"],
    cityModifier: (cityName) => ({
      title: `CES Marketing Team from ${cityName}`,
      description: `Bring our ${cityName} tech marketing experts to CES Las Vegas for comprehensive booth staffing and activation support.`
    })
  },
  {
    slug: "art-basel",
    name: "Art Basel Marketing",
    title: "Art Basel Miami & Art Fair Marketing | AirFresh Marketing",
    metaDescription: "Elevate your brand at Art Basel Miami with sophisticated art activations, VIP events, and cultural experiences that resonate with collectors and tastemakers.",
    heroTitle: "Art Basel Marketing",
    heroSubtitle: "Create artful brand experiences for cultural tastemakers",
    challenges: [
      "Appealing to sophisticated art world audience",
      "Competing with gallery events and parties",
      "Managing Miami Beach logistics during Basel",
      "Creating authentic cultural connections",
      "Reaching international VIP collectors"
    ],
    solutions: [
      {
        title: "Artist Collaborations",
        description: "Partnerships with contemporary artists for authentic activations"
      },
      {
        title: "VIP Gallery Events",
        description: "Private viewings and collector experiences"
      },
      {
        title: "Beach Club Takeovers",
        description: "Sophisticated beach and poolside experiences"
      },
      {
        title: "Cultural Programming",
        description: "Panels, performances, and cultural conversations"
      }
    ],
    deliverables: [
      "Gallery event production",
      "Artist partnership coordination",
      "VIP invitation management",
      "Beach venue transformation",
      "Art installation support",
      "Collector concierge services",
      "International guest relations"
    ],
    metrics: [
      { metric: "2,000+", description: "VIP collectors engaged" },
      { metric: "80%", description: "International attendee rate" },
      { metric: "15M+", description: "Earned media value" },
      { metric: "95%", description: "VIP satisfaction score" }
    ],
    keywords: ["Art Basel marketing", "Art Basel Miami", "art fair marketing", "cultural marketing", "luxury events", "collector engagement"],
    cityModifier: (cityName) => ({
      title: `Art Basel Support from ${cityName}`,
      description: `Deploy our sophisticated ${cityName} team to Art Basel Miami for elevated brand experiences that resonate with the international art community.`
    })
  }
];

// Sports targeting data
export const sports: TargetingData[] = [
  {
    slug: "nfl-games",
    name: "NFL Game Day Marketing",
    title: "NFL Game Day Marketing & Football Activations | AirFresh Marketing",
    metaDescription: "Score touchdowns with NFL game day marketing, tailgate activations, and fan experiences at football stadiums nationwide.",
    heroTitle: "NFL Game Day Marketing",
    heroSubtitle: "Win over football fans with championship game day experiences",
    challenges: [
      "Navigating NFL trademark and licensing restrictions",
      "Managing large crowds and tailgate logistics",
      "Weather-dependent outdoor activations",
      "Creating family-friendly experiences",
      "Competing with official NFL sponsors"
    ],
    solutions: [
      {
        title: "Tailgate Experiences",
        description: "Branded tailgate zones with games, food, and entertainment"
      },
      {
        title: "Fan Zone Activations",
        description: "Interactive experiences near stadiums on game day"
      },
      {
        title: "Sports Bar Takeovers",
        description: "Branded viewing parties at popular sports venues"
      },
      {
        title: "Fantasy Football Integration",
        description: "Engage fantasy players with stats, prizes, and competitions"
      }
    ],
    deliverables: [
      "Tailgate setup and management",
      "Game day brand ambassadors",
      "Fan engagement activities",
      "Product sampling programs",
      "Contest and giveaway management",
      "Sports bar partnerships",
      "Social media coverage"
    ],
    metrics: [
      { metric: "25K+", description: "Fans engaged per game day" },
      { metric: "87%", description: "Brand recall among fans" },
      { metric: "5x", description: "Social engagement vs. standard campaigns" },
      { metric: "10K+", description: "Samples distributed per game" }
    ],
    keywords: ["NFL marketing", "football game marketing", "NFL tailgate", "game day activations", "football fan engagement", "stadium marketing"],
    cityModifier: (cityName) => ({
      title: `NFL Game Day Marketing in ${cityName}`,
      description: `Dominate ${cityName} NFL game days with tailgate experiences and fan activations that celebrate local team pride and football culture.`
    })
  },
  {
    slug: "nba-games",
    name: "NBA Game Marketing",
    title: "NBA Game Marketing & Basketball Arena Activations | AirFresh Marketing",
    metaDescription: "Drive to the hoop with NBA game marketing, arena activations, and basketball fan experiences that connect with diverse urban audiences.",
    heroTitle: "NBA Game Marketing",
    heroSubtitle: "Connect with basketball fans through high-energy arena experiences",
    challenges: [
      "Engaging diverse, urban basketball audiences",
      "Working within arena vendor restrictions",
      "Creating experiences for 41+ home games",
      "Reaching younger, social-media-savvy fans",
      "Competing with halftime entertainment"
    ],
    solutions: [
      {
        title: "Arena Concourse Activations",
        description: "High-traffic activations in arena concourses and atriums"
      },
      {
        title: "Pre-Game Fan Experiences",
        description: "Interactive zones outside arenas before tip-off"
      },
      {
        title: "Halftime Contests",
        description: "On-court promotions and fan competitions"
      },
      {
        title: "VIP Experiences",
        description: "Courtside and suite hospitality programs"
      }
    ],
    deliverables: [
      "Arena activation setup",
      "Game night brand ambassadors",
      "Contest coordination",
      "VIP hospitality services",
      "Social media activations",
      "Youth engagement programs",
      "Merchandise distribution"
    ],
    metrics: [
      { metric: "15K+", description: "Fans engaged per game" },
      { metric: "92%", description: "Social sharing rate" },
      { metric: "3M+", description: "Annual arena impressions" },
      { metric: "85%", description: "Youth demographic reach" }
    ],
    keywords: ["NBA marketing", "basketball game marketing", "arena activations", "NBA fan engagement", "basketball events", "sports marketing"],
    cityModifier: (cityName) => ({
      title: `NBA Game Marketing in ${cityName}`,
      description: `Elevate your brand at ${cityName} NBA games with arena activations that resonate with basketball fans and the local community.`
    })
  },
  {
    slug: "mlb-games",
    name: "MLB Game Marketing",
    title: "MLB Baseball Game Marketing & Ballpark Activations | AirFresh Marketing",
    metaDescription: "Hit home runs with MLB game marketing, ballpark activations, and family-friendly baseball experiences at America's favorite pastime.",
    heroTitle: "MLB Game Marketing",
    heroSubtitle: "Create grand slam experiences at the ballpark",
    challenges: [
      "Engaging families and diverse age groups",
      "Managing 81 home game schedule",
      "Weather-dependent outdoor venues",
      "Creating memorable experiences beyond the game",
      "Competing with ballpark traditions"
    ],
    solutions: [
      {
        title: "Family Fun Zones",
        description: "Kid-friendly activations and entertainment areas"
      },
      {
        title: "Ballpark Tours",
        description: "Behind-the-scenes experiences and field access"
      },
      {
        title: "Theme Night Integration",
        description: "Align with fireworks, giveaways, and special events"
      },
      {
        title: "Concession Partnerships",
        description: "Branded food and beverage experiences"
      }
    ],
    deliverables: [
      "Ballpark activation setup",
      "Family engagement activities",
      "Theme night participation",
      "Kids Club programs",
      "Sampling at concessions",
      "Pre-game plaza events",
      "Season-long programs"
    ],
    metrics: [
      { metric: "500K+", description: "Fans engaged per season" },
      { metric: "78%", description: "Family participation rate" },
      { metric: "81", description: "Home games activated" },
      { metric: "94%", description: "Positive sentiment score" }
    ],
    keywords: ["MLB marketing", "baseball game marketing", "ballpark activations", "baseball fan engagement", "family sports marketing", "stadium events"],
    cityModifier: (cityName) => ({
      title: `MLB Game Marketing in ${cityName}`,
      description: `Create memorable experiences at ${cityName} baseball games with family-friendly ballpark activations that celebrate America's pastime.`
    })
  },
  {
    slug: "soccer-matches",
    name: "Soccer Match Marketing",
    title: "Soccer Match Marketing & MLS Fan Activations | AirFresh Marketing",
    metaDescription: "Score goals with soccer match marketing, supporter section activations, and international football experiences for passionate fans.",
    heroTitle: "Soccer Match Marketing",
    heroSubtitle: "Engage passionate soccer fans with authentic football experiences",
    challenges: [
      "Connecting with diverse international audiences",
      "Respecting supporter group traditions",
      "Managing pre-match tailgate culture",
      "Creating authentic football atmosphere",
      "Engaging youth soccer communities"
    ],
    solutions: [
      {
        title: "Supporter Section Engagement",
        description: "Authentic activations that respect fan culture and traditions"
      },
      {
        title: "Youth Soccer Clinics",
        description: "Skills clinics and meet-and-greets with players"
      },
      {
        title: "International Fan Zones",
        description: "Cultural celebrations for diverse fan communities"
      },
      {
        title: "March to the Match",
        description: "Pre-game parade and supporter experiences"
      }
    ],
    deliverables: [
      "Supporter section activations",
      "Youth clinic coordination",
      "International food and culture",
      "Tailgate zone management",
      "Tifo and banner support",
      "Multilingual brand ambassadors",
      "Community outreach programs"
    ],
    metrics: [
      { metric: "20K+", description: "Supporters engaged per match" },
      { metric: "85%", description: "International audience reach" },
      { metric: "1,500+", description: "Youth players in clinics" },
      { metric: "12", description: "Languages supported" }
    ],
    keywords: ["soccer marketing", "MLS marketing", "football match marketing", "soccer fan engagement", "supporter marketing", "futbol events"],
    cityModifier: (cityName) => ({
      title: `Soccer Match Marketing in ${cityName}`,
      description: `Connect with ${cityName}'s diverse soccer community through authentic match day experiences and supporter-focused activations.`
    })
  },
  {
    slug: "golf-tournaments",
    name: "Golf Tournament Marketing",
    title: "Golf Tournament Marketing & PGA Event Activations | AirFresh Marketing",
    metaDescription: "Drive success at golf tournaments with hospitality tents, pro-am experiences, and upscale activations for affluent golf enthusiasts.",
    heroTitle: "Golf Tournament Marketing",
    heroSubtitle: "Elevate your brand on the greens with premium golf experiences",
    challenges: [
      "Reaching affluent, decision-maker demographics",
      "Managing quiet zone restrictions on course",
      "Creating multi-day tournament experiences",
      "Weather-dependent outdoor events",
      "Competing with corporate hospitality tents"
    ],
    solutions: [
      {
        title: "Hospitality Pavilions",
        description: "Premium tents with catering, viewing, and networking"
      },
      {
        title: "Pro-Am Experiences",
        description: "Client entertainment with PGA professionals"
      },
      {
        title: "Driving Range Activations",
        description: "Interactive experiences and lessons at practice facilities"
      },
      {
        title: "19th Hole Events",
        description: "Post-round hospitality and networking"
      }
    ],
    deliverables: [
      "Hospitality tent setup",
      "VIP client management",
      "Pro-am coordination",
      "Driving range activations",
      "Course marshal support",
      "Executive networking events",
      "Tournament-long staffing"
    ],
    metrics: [
      { metric: "500+", description: "VIP clients hosted per tournament" },
      { metric: "95%", description: "C-suite attendance rate" },
      { metric: "$2M+", description: "Average deal value influenced" },
      { metric: "98%", description: "Client satisfaction score" }
    ],
    keywords: ["golf tournament marketing", "PGA events", "golf hospitality", "golf sponsorship", "corporate golf events", "golf activations"],
    cityModifier: (cityName) => ({
      title: `Golf Tournament Marketing in ${cityName}`,
      description: `Host premium golf experiences at ${cityName} tournaments with hospitality programs that connect with affluent decision-makers.`
    })
  }
];

// Helper function to get all targeting data
export function getAllTargetingData(): TargetingData[] {
  return [...verticals, ...conventions, ...events, ...sports];
}

// Helper function to get targeting data by type and slug
export function getTargetingData(type: string, slug: string): TargetingData | undefined {
  let data: TargetingData[] = [];
  
  switch(type) {
    case 'verticals':
      data = verticals;
      break;
    case 'conventions':
      data = conventions;
      break;
    case 'events':
      data = events;
      break;
    case 'sports':
      data = sports;
      break;
  }
  
  return data.find(item => item.slug === slug);
}

// Helper function to get all categories
export function getTargetingCategories() {
  return {
    verticals: verticals.map(v => ({ slug: v.slug, name: v.name })),
    conventions: conventions.map(c => ({ slug: c.slug, name: c.name })),
    events: events.map(e => ({ slug: e.slug, name: e.name })),
    sports: sports.map(s => ({ slug: s.slug, name: s.name }))
  };
}