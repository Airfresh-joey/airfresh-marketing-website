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
  heroVideo?: string;
  heroPosition?: string;
  images?: string[];
  videoUrl?: string;
  videos?: string[];
}

export const portfolioCaseStudies: CaseStudy[] = [
  // ============ FEATURED CASE STUDIES ============
  {
    id: "skinny-mixes",
    name: "Skinny Mixes - NYC Street Team",
    tagline: "Sugar-Free Flavor Revolution",
    description: "Air Fresh Marketing partnered with Skinny Mixes to execute a sampling activation in New York City. Our team provided effective promotional engagement through street team product distribution to enhance brand visibility and consumer interaction, ensuring a memorable experience for the audience.",
    industry: "Food & Beverage",
    services: ["Sampling Activation", "Street Team", "Product Distribution"],
    markets: ["New York City"],
    date: "March 2025",
    googleDriveUrl: "https://drive.google.com/drive/folders/1J5BNDKfyZNo_Y0gR__AbClEJDMelKHwH?usp=sharing",
    stats: {
      "Location": "New York City",
      "Type": "Street Team Product Distribution",
      "Services": "Sampling Activation"
    },
    category: "Food & Beverage",
    featured: true,
    heroImage: "/images/case-studies/skinny-mixes-hero.jpg",
    heroPosition: "center right",
    images: [
      "/images/case-studies/gallery/skinny-mixes/skinny-mixes-1.jpg",
      "/images/case-studies/gallery/skinny-mixes/skinny-mixes-2.jpg",
      "/images/case-studies/gallery/skinny-mixes/skinny-mixes-3.jpg",
      "/images/case-studies/gallery/skinny-mixes/skinny-mixes-4.jpg",
      "/images/case-studies/gallery/skinny-mixes/skinny-mixes-5.jpg",
      "/images/case-studies/gallery/skinny-mixes/skinny-mixes-6.jpg",
      "/images/case-studies/gallery/skinny-mixes/skinny-mixes-7.jpg",
      "/images/case-studies/gallery/skinny-mixes/skinny-mixes-8.jpg"
    ],
    videos: ["1183200407", "1183200399", "1183200366"]
  },
  {
    id: "durex-milwaukee-activation",
    name: "Durex Milwaukee Street Team Activation",
    tagline: "Bold Engagement, Bold Results",
    description: "Air Fresh Marketing partnered with Durex to execute a dynamic street team activation in Milwaukee, Wisconsin. Our energetic team of brand ambassadors engaged the local community through strategic product sampling, promotional giveaways, and interactive consumer engagement at high-traffic locations throughout the city. The campaign successfully reached thousands of consumers, creating memorable brand interactions and driving significant awareness for Durex products in the Milwaukee market.",
    industry: "Consumer Goods",
    services: ["Street Team Marketing", "Product Sampling", "Brand Ambassadors", "Promotional Giveaways"],
    markets: ["Milwaukee, Wisconsin"],
    date: "February 2026",
    stats: {
      "Budget": "$20,000",
      "Duration": "2 Weeks",
      "Samples Distributed": "15,000+",
      "Brand Impressions": "50,000+"
    },
    category: "Consumer Goods",
    featured: true,
    heroImage: "/images/case-studies/beer-samplings.jpg",
    heroPosition: "center",
    images: []
  },
  {
    id: "libon-nyc-launch",
    name: "Libon NYC Brand Ambassador Launch Campaign",
    tagline: "Connecting Communities, Building Brands",
    description: "Air Fresh Marketing executed a comprehensive brand ambassador campaign for Libon's NYC market expansion, targeting the vibrant Brooklyn and Bronx communities. Our diverse team of locally-sourced brand ambassadors conducted grassroots outreach, engaging residents through neighborhood activations, community events, and one-on-one consumer interactions. The campaign successfully introduced Libon to thousands of new potential users while building authentic connections within these culturally rich neighborhoods.",
    industry: "Technology",
    services: ["Brand Ambassadors", "Grassroots Marketing", "Community Outreach", "App Download Promotion"],
    markets: ["Brooklyn, NY", "Bronx, NY"],
    date: "March 2026",
    stats: {
      "Neighborhoods Covered": "25+",
      "App Downloads": "8,500+",
      "Consumer Engagements": "35,000+",
      "Team Size": "20 Ambassadors"
    },
    category: "Technology",
    featured: true,
    heroImage: "/images/case-studies/cortie-digital.jpg",
    heroPosition: "center",
    images: []
  },
  {
    id: "formula-1-las-vegas",
    name: "+44 Formula One - The Wynn Las Vegas",
    tagline: "Racing Into the Future",
    description: "When +44 Formula One needed to make a statement at the inaugural Las Vegas Grand Prix, they turned to Air Fresh Marketing to staff their premium activation at The Wynn. Over 11 electrifying days, our team of 25+ brand ambassadors created VIP-level experiences for thousands of racing fans, managing guest flow, product showcases, and high-touch hospitality that matched the luxury positioning of both brands. The activation became one of the most talked-about experiences of race week.",
    industry: "Sports & Entertainment",
    services: ["Brand Activation", "Event Staffing", "Experiential Support", "VIP Hospitality"],
    markets: ["Las Vegas"],
    date: "November 2024",
    googleDriveUrl: "https://drive.google.com/drive/folders/1aTzRjejThSTFB5g7_d3Y7AR8EmYNUHI4?usp=sharing",
    stats: {
      "Guest Interactions": "15,000+",
      "Duration": "11 Days",
      "Team Size": "25+ Brand Ambassadors",
      "Client Satisfaction": "100%"
    },
    category: "Entertainment",
    featured: true,
    heroImage: "/images/case-studies/formula-1-5.jpg",
    images: [
      "/images/case-studies/gallery/formula1/formula1-1.jpg",
      "/images/case-studies/gallery/formula1/formula1-2.jpg",
      "/images/case-studies/gallery/formula1/formula1-3.jpg",
      "/images/case-studies/gallery/formula1/formula1-4.jpg",
      "/images/case-studies/gallery/formula1/formula1-5.jpg",
      "/images/case-studies/gallery/formula1/formula1-6.jpg",
      "/images/case-studies/gallery/formula1/formula1-7.jpg",
      "/images/case-studies/gallery/formula1/formula1-8.jpg"
    ]
  },
  {
    id: "williams-racing-f1",
    name: "Williams Racing Event Staffing",
    tagline: "Racing Heritage Meets Innovation",
    description: "Air Fresh Marketing partnered with Williams Racing to execute event staffing in Las Vegas, Miami, and Texas. Our team provided essential support to enhance brand presence and engagement at key racing events, ensuring a memorable experience for attendees and strengthening the brand's market impact.",
    industry: "Sports & Entertainment",
    services: ["Event Staffing"],
    markets: ["Las Vegas", "Miami", "Texas"],
    date: "2023-2024",
    googleDriveUrl: "https://drive.google.com/drive/folders/1pnMMxwibwuQvjngy0kbQ-AIwVPexB-uM?usp=share_link",
    stats: {
      "Events": "F1 Race Events",
      "Markets": "Las Vegas, Miami, Texas",
      "Services": "Event Staffing"
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
    name: "1800 Tequila - NBA All Star Weekend",
    tagline: "Elevate Your Night",
    description: "1800 Tequila partnered with Air Fresh Marketing to execute an engaging brand activation during the NBA All Star Weekend in Los Angeles. Our team provided comprehensive event staffing, experiential event support, and sampling activation at Terra Gallery to enhance brand visibility and create memorable experiences for attendees.",
    industry: "Beverage",
    services: ["Brand Activation", "Event Staffing", "Sampling Activation"],
    markets: ["Los Angeles"],
    date: "February 2020",
    stats: {
      "Event": "NBA All Star Weekend",
      "Location": "Terra Gallery, Los Angeles",
      "Services": "Experiential Event Staffing"
    },
    category: "Food & Beverage",
    featured: false,
    heroImage: "/images/case-studies/1800-tequila.jpg",
    images: [
      "/images/case-studies/gallery/1800-tequila/1800-tequila-1.jpg",
      "/images/case-studies/gallery/1800-tequila/1800-tequila-2.jpg"
    ]
  },
  {
    id: "beer-samplings-national",
    name: "Baja Brewing - Beer Sampling",
    tagline: "Taste the Craft",
    description: "Air Fresh Marketing partnered with Baja Brewing to execute a beer sampling activation in Las Vegas and San Diego at Northgate Market locations. Our team provided brand ambassadors and event staffing to drive engagement and enhance brand awareness, ensuring a memorable experience for attendees.",
    industry: "Beverage",
    services: ["Brand Activation", "Event Staffing", "Sampling Activation"],
    markets: ["Las Vegas", "San Diego"],
    date: "January 2023 - Ongoing",
    googleDriveUrl: "https://drive.google.com/drive/folders/12S5545-sD78eDYSxcC438kra_vTnG7xI?usp=share_link",
    stats: {
      "Retailer": "Northgate Market",
      "Markets": "Las Vegas, San Diego",
      "Services": "Beer Sampling"
    },
    category: "Food & Beverage",
    featured: false,
    heroImage: "/images/case-studies/beer-samplings.jpg",
    images: [
      "/images/case-studies/gallery/northgate-beer/northgate-beer-1.jpg",
      "/images/case-studies/gallery/northgate-beer/northgate-beer-2.jpg",
      "/images/case-studies/gallery/northgate-beer/northgate-beer-3.jpg",
      "/images/case-studies/gallery/northgate-beer/northgate-beer-4.jpg"
    ]
  },
  {
    id: "meijer-retail",
    name: "Meijer Brand Activations",
    tagline: "Midwest Retail Excellence",
    description: "Air Fresh Marketing partnered with Meijer to execute brand activations across the Midwest including OSU Football Tailgates, University of Michigan Beach Day, Milwaukee Zoo events, and Illini Frenzy. Our team provided strategic marketing services to enhance customer engagement and awareness.",
    industry: "Retail",
    services: ["Brand Activation", "Event Marketing", "Customer Engagement"],
    markets: ["Ohio", "Michigan", "Milwaukee", "Illinois"],
    date: "2021-2022",
    googleDriveUrl: "https://drive.google.com/drive/folders/1pnMMxwibwuQvjngy0kbQ-AIwVPexB-uM?usp=share_link",
    stats: {
      "Events": "Multiple College & Community Events",
      "Markets": "Midwest Region",
      "Services": "Brand Activation"
    },
    category: "Retail",
    featured: false,
    heroImage: "/images/case-studies/meijer.jpg",
    images: [
      "/images/case-studies/gallery/meijer/meijer-1.jpg",
      "/images/case-studies/gallery/meijer/meijer-2.jpg",
      "/images/case-studies/gallery/meijer/meijer-3.jpg",
      "/images/case-studies/gallery/meijer/meijer-4.jpg",
      "/images/case-studies/gallery/meijer/meijer-5.jpg",
      "/images/case-studies/gallery/meijer/meijer-6.jpg",
      "/images/case-studies/gallery/meijer/meijer-7.jpg"
    ]
  },
  {
    id: "waiakea-water",
    name: "Waiakea Water x Aaron Judge Opening Day",
    tagline: "Pure Hawaiian Hydration",
    description: "Air Fresh Marketing partnered with Waiakea Hawaiian Volcanic Water to execute a street team activation during the Opening Weekend at Yankee Stadium in New York City. Our brand ambassadors engaged thousands of fans through product sampling and positive interactions, leveraging Aaron Judge's endorsement to enhance brand awareness and recognition.",
    industry: "Beverage",
    services: ["Brand Ambassadors", "Street Teams", "Product Distribution"],
    markets: ["New York City"],
    date: "April 2024",
    googleDriveUrl: "https://drive.google.com/drive/folders/1pnMMxwibwuQvjngy0kbQ-AIwVPexB-uM?usp=share_link",
    stats: {
      "Event Duration": "3 Days",
      "Location": "Yankee Stadium, NYC",
      "Services": "Street Team Activation"
    },
    category: "Food & Beverage",
    featured: false,
    heroImage: "/images/case-studies/waiakea-hero.jpg",
    images: [
      "/images/case-studies/gallery/waiakea/waiakea-1.jpg",
      "/images/case-studies/gallery/waiakea/waiakea-2.jpg",
      "/images/case-studies/gallery/waiakea/waiakea-3.jpg",
      "/images/case-studies/gallery/waiakea/waiakea-4.jpg",
      "/images/case-studies/gallery/waiakea/waiakea-5.jpg"
    ]
  },
  {
    id: "buffalo-wild-wings",
    name: "Buffalo Wild Wings GO! - East Village",
    tagline: "Wings. Beer. Sports.",
    description: "Buffalo Wild Wings GO! partnered with Air Fresh Marketing to execute a brand activation in New York City. Our team provided brand ambassadors and street team promotion to enhance local engagement and visibility for the Buffalo Wild Wings brand in the East Village area.",
    industry: "Food & Beverage",
    services: ["Brand Activation", "Event Staffing", "Street Team Promotion"],
    markets: ["New York City"],
    date: "September 2024",
    googleDriveUrl: "https://drive.google.com/drive/folders/1vJCWTW2O6eaVkpkBjGX1vWJkFOLyrnyq?usp=sharing",
    stats: {
      "Location": "East Village, NYC",
      "Services": "Street Team Promotion",
      "Market": "New York City"
    },
    category: "Food & Beverage",
    featured: false,
    heroImage: "/images/case-studies/buffalo-wild-wings-hero.jpg",
    images: [
      "/images/case-studies/gallery/bww/bww-1.jpg",
      "/images/case-studies/gallery/bww/bww-2.jpg",
      "/images/case-studies/gallery/bww/bww-3.jpg",
      "/images/case-studies/gallery/bww/bww-4.jpg",
      "/images/case-studies/gallery/bww/bww-5.jpg",
      "/images/case-studies/gallery/bww/bww-6.jpg",
      "/images/case-studies/gallery/bww/bww-7.jpg",
      "/images/case-studies/gallery/bww/bww-8.jpg"
    ]
  },
  {
    id: "wagamama-launch",
    name: "Wagamama - Street Team Restaurant Launch",
    tagline: "Asian Soul Food",
    description: "Air Fresh Marketing partnered with Wagamama to execute a street team marketing campaign across multiple U.S. markets. Our brand ambassadors engaged consumers directly, distributing promotional offers and food samples to increase awareness and foot traffic, resulting in significant consumer interaction and immediate dining decisions.",
    industry: "Food & Beverage",
    services: ["Street Team Marketing", "Coupon Distribution", "Food Sampling"],
    markets: ["Tampa", "Atlanta", "New York City", "Boston"],
    date: "June 2023",
    googleDriveUrl: "https://drive.google.com/drive/folders/1UJPN2dD94SUdHDsUgICfUfDqUBzOhhRS?usp=share_link",
    stats: {
      "Markets": "Tampa, Atlanta, NYC, Boston",
      "Services": "Street Team Marketing",
      "Type": "Restaurant Promotion"
    },
    category: "Food & Beverage",
    featured: false,
    heroImage: "/images/case-studies/wagamama-hero.jpg"
  },
  {
    id: "culinary-dropout",
    name: "Culinary Dropout - Ashford Crossing Launch",
    tagline: "Comfort Food Revolution",
    description: "Air Fresh Marketing partnered with Culinary Dropout to execute a grand opening promotion in the Atlanta market. Our team provided brand activation and street team promotion to create an engaging experience that successfully increased local awareness and customer engagement during the launch event.",
    industry: "Food & Beverage",
    services: ["Brand Activation", "Grand Opening Promotion", "Street Team"],
    markets: ["Atlanta"],
    date: "February 2024",
    googleDriveUrl: "https://drive.google.com/drive/folders/1X6ZCgE1j8rhk9m65RLXfZ0FsZjZAfZC7?usp=sharing",
    stats: {
      "Event Duration": "10 Days",
      "Location": "Dunwoody, Atlanta",
      "Services": "Grand Opening Promotion"
    },
    category: "Food & Beverage",
    featured: false,
    heroImage: "/images/case-studies/culinary-dropout.jpg",
    images: [
      "/images/case-studies/gallery/culinary-dropout/culinary-dropout-1.jpg",
      "/images/case-studies/gallery/culinary-dropout/culinary-dropout-2.jpg",
      "/images/case-studies/gallery/culinary-dropout/culinary-dropout-3.jpg",
      "/images/case-studies/gallery/culinary-dropout/culinary-dropout-4.jpg",
      "/images/case-studies/gallery/culinary-dropout/culinary-dropout-5.jpg"
    ]
  },
  {
    id: "katjes-candy",
    name: "Katjes USA - Sweets & Snacks Trade Show",
    tagline: "European Candy Excellence",
    description: "Air Fresh Marketing partnered with Katjes USA Inc. to execute a brand activation at the Sweets & Snacks trade show in Chicago/Indianapolis. Our team provided experiential event staffing and sampling activation, effectively engaging attendees and enhancing brand visibility during the event.",
    industry: "Food & Beverage",
    services: ["Brand Activation", "Event Staffing", "Sampling Activation"],
    markets: ["Chicago", "Indianapolis"],
    date: "May 2024",
    googleDriveUrl: "https://drive.google.com/drive/folders/1fdv7i_3kXyDHMJLajR7bG-IDJITcUdyR?usp=sharing",
    stats: {
      "Event Duration": "3 Days",
      "Location": "Indiana Convention Center",
      "Services": "Experiential Event Staffing"
    },
    category: "Food & Beverage",
    featured: false,
    heroImage: "/images/case-studies/katjes-hero.jpg",
    images: [
      "/images/case-studies/gallery/katjes/katjes-1.jpg",
      "/images/case-studies/gallery/katjes/katjes-2.jpg",
      "/images/case-studies/gallery/katjes/katjes-3.jpg",
      "/images/case-studies/gallery/katjes/katjes-4.jpg",
      "/images/case-studies/gallery/katjes/katjes-5.jpg",
      "/images/case-studies/gallery/katjes/katjes-6.jpg",
      "/images/case-studies/gallery/katjes/katjes-7.jpg",
      "/images/case-studies/gallery/katjes/katjes-8.jpg"
    ]
  },

  // ============ TECHNOLOGY & MEDIA ============
  {
    id: "microsoft-events",
    name: "Microsoft - NRF Conference",
    tagline: "Empowering Every Person",
    description: "Microsoft needed flawless execution for their presence at NRF, the world's largest retail conference. Air Fresh deployed a team of 15 trained brand ambassadors to manage guest experience across Microsoft's 10,000+ sq ft exhibition space at the Javits Center. Our team handled VIP meeting coordination, product demo scheduling, attendee flow management, and real-time support for Microsoft executives - resulting in their smoothest NRF activation to date and a multi-year partnership.",
    industry: "Technology",
    services: ["Event Staffing", "Guest Experience", "Meeting Check-In", "Wayfinding", "VIP Support"],
    markets: ["New York City"],
    date: "January 2020",
    googleDriveUrl: "https://drive.google.com/drive/folders/1YEVNExT1l9Eiaj9sKmxAuBqkNz8huCiD?usp=sharing",
    stats: {
      "Booth Size": "10,000+ sq ft",
      "Attendees Served": "5,000+",
      "Demo Appointments": "500+",
      "Team Size": "15 Ambassadors"
    },
    category: "Technology",
    featured: true,
    heroImage: "/images/case-studies/microsoft-hero.jpg",
    images: [
      "/images/case-studies/gallery/microsoft/microsoft-1.jpg",
      "/images/case-studies/gallery/microsoft/microsoft-2.jpg",
      "/images/case-studies/gallery/microsoft/microsoft-3.jpg",
      "/images/case-studies/gallery/microsoft/microsoft-4.jpg",
      "/images/case-studies/gallery/microsoft/microsoft-5.jpg",
      "/images/case-studies/gallery/microsoft/microsoft-6.jpg",
      "/images/case-studies/gallery/microsoft/microsoft-7.jpg",
      "/images/case-studies/gallery/microsoft/microsoft-8.jpg"
    ]
  },
  {
    id: "netflix-activations",
    name: "Netflix Premiere Events",
    tagline: "Stories That Move You",
    description: "Netflix enlisted Air Fresh to staff their Hollywood premiere events at Goya Studios - high-stakes, celebrity-attended launches where every detail matters. Our team managed red carpet flow, VIP arrivals, talent green rooms, and fan experiences for 3 major series premieres. We coordinated with Netflix's production team, security, and talent management to ensure seamless execution while maintaining the electric energy fans expect from a Netflix premiere.",
    industry: "Entertainment",
    services: ["Premiere Events", "Fan Experiences", "VIP Management", "Red Carpet Support"],
    markets: ["Los Angeles"],
    date: "2021",
    googleDriveUrl: "https://drive.google.com/drive/folders/17ffDXAso3Tu5-ossU3AXTfdqjr2p-YkU",
    stats: {
      "Premiere Events": "3 Major Launches",
      "Attendees Managed": "2,000+",
      "Celebrities Supported": "50+",
      "Location": "Goya Studios, Hollywood"
    },
    category: "Entertainment",
    featured: true,
    heroImage: "/images/case-studies/netflix-hero.jpg",
    images: [
      "/images/case-studies/gallery/netflix/netflix-1.jpg",
      "/images/case-studies/gallery/netflix/netflix-2.jpg",
      "/images/case-studies/gallery/netflix/netflix-3.jpg",
      "/images/case-studies/gallery/netflix/netflix-4.jpg",
      "/images/case-studies/gallery/netflix/netflix-5.jpg",
      "/images/case-studies/gallery/netflix/netflix-6.jpg",
      "/images/case-studies/gallery/netflix/netflix-7.jpg",
      "/images/case-studies/gallery/netflix/netflix-8.jpg"
    ]
  },
  {
    id: "ted-talk-events",
    name: "TED Conference Staffing",
    tagline: "Ideas Worth Spreading",
    description: "Air Fresh Marketing partnered with TED to execute event staffing for the TED Conference in Atlanta. Our team provided comprehensive guest experience support across multiple venues including Pullman Yards, ensuring smooth check-in, badge distribution, attendee flow management, refuel area staffing, and VIP arrival support throughout the event.",
    industry: "Events",
    services: ["Front-of-House Staffing", "Check-in & Registration", "VIP Support", "Wayfinding"],
    markets: ["Atlanta"],
    date: "October 2024",
    googleDriveUrl: "https://drive.google.com/drive/folders/1pnMMxwibwuQvjngy0kbQ-AIwVPexB-uM?usp=share_link",
    stats: {
      "Event Duration": "6 Days",
      "Location": "Pullman Yards, Atlanta",
      "Venues": "Multiple Locations"
    },
    category: "Technology",
    featured: false,
    heroImage: "/images/case-studies/ted-talk-hero.jpg",
    images: [
      "/images/case-studies/gallery/ted/ted-1.jpg",
      "/images/case-studies/gallery/ted/ted-2.jpg",
      "/images/case-studies/gallery/ted/ted-3.jpg",
      "/images/case-studies/gallery/ted/ted-4.jpg",
      "/images/case-studies/gallery/ted/ted-5.jpg",
      "/images/case-studies/gallery/ted/ted-6.jpg",
      "/images/case-studies/gallery/ted/ted-7.jpg",
      "/images/case-studies/gallery/ted/ted-8.jpg"
    ]
  },

  // ============ BEAUTY & FASHION ============
  {
    id: "clarins-beauty",
    name: "Clarins - Multi-Market Product Launch Tour",
    tagline: "Plant-Powered Beauty",
    description: "Clarins partnered with Air Fresh Marketing to execute a multi-market product launch tour in the beauty and skincare industry. Our team provided event staffing, sampling activation, and street team promotion at Macy's and Nordstrom locations, ensuring a seamless and engaging experience for the brand while effectively reaching target audiences.",
    industry: "Beauty",
    services: ["Event Staffing", "Sampling Activation", "Street Team Promotion"],
    markets: ["Yonkers", "Skokie", "Orlando", "Garden City", "Flushing", "Costa Mesa", "Boca Raton"],
    date: "September 2024",
    googleDriveUrl: "https://drive.google.com/drive/folders/1CQEzIZzsl9pjuHBAdjlq9RIwbRs4etAR?usp=drive_link",
    stats: {
      "Locations": "Macy's & Nordstrom",
      "Markets": "Multiple US Cities",
      "Services": "Sampling Activation"
    },
    category: "Beauty & Fashion",
    featured: false,
    heroImage: "/images/case-studies/clarins.jpg",
    images: [
      "/images/case-studies/gallery/clarins/clarins-1.jpg",
      "/images/case-studies/gallery/clarins/clarins-2.jpg",
      "/images/case-studies/gallery/clarins/clarins-3.jpg",
      "/images/case-studies/gallery/clarins/clarins-4.jpg",
      "/images/case-studies/gallery/clarins/clarins-5.jpg",
      "/images/case-studies/gallery/clarins/clarins-6.jpg",
      "/images/case-studies/gallery/clarins/clarins-7.jpg",
      "/images/case-studies/gallery/clarins/clarins-8.jpg"
    ]
  },
  {
    id: "byoma-skincare",
    name: "BYOMA - Ulta Beauty Product Sampling Tour",
    tagline: "Barrier Care Made Simple",
    description: "Air Fresh Marketing partnered with BYOMA to execute a product sampling tour across major markets including Atlanta, Chicago, Denver, Miami, New York City, and Texas. Our team provided event staffing, sampling activation, and street team promotion at Ulta Beauty locations, successfully enhancing brand visibility and engagement during the activation period.",
    industry: "Beauty",
    services: ["Event Staffing", "Sampling Activation", "Street Team Promotion"],
    markets: ["Atlanta", "Chicago", "Denver", "Miami", "New York City", "Texas"],
    date: "September-October 2023",
    googleDriveUrl: "https://drive.google.com/drive/folders/1_6AwLOOI-bKa3NeoRI_K8vcfojtLAZRP?usp=sharing",
    stats: {
      "Retail Partner": "Ulta Beauty",
      "Markets": "6 Major Cities",
      "Duration": "2 Months"
    },
    category: "Beauty & Fashion",
    featured: false,
    heroImage: "/images/case-studies/byoma-hero.jpg",
    images: [
      "/images/case-studies/gallery/byoma/byoma-1.jpg",
      "/images/case-studies/gallery/byoma/byoma-2.jpg",
      "/images/case-studies/gallery/byoma/byoma-3.jpg",
      "/images/case-studies/gallery/byoma/byoma-4.jpg",
      "/images/case-studies/gallery/byoma/byoma-5.jpg",
      "/images/case-studies/gallery/byoma/byoma-6.jpg",
      "/images/case-studies/gallery/byoma/byoma-7.jpg",
      "/images/case-studies/gallery/byoma/byoma-8.jpg"
    ]
  },

  // ============ AUTOMOTIVE & OUTDOOR ============
  {
    id: "polaris-powersports",
    name: "Polaris - National Finals Rodeo",
    tagline: "Think Outside",
    description: "Air Fresh Marketing partnered with Polaris to execute a booth activation at the National Finals Rodeo in Las Vegas. Our team provided event staffing and brand ambassador services to drive consumer engagement and lead capture, ensuring a seamless and engaging experience for the brand throughout the 10-day event.",
    industry: "Automotive",
    services: ["Event Staffing", "Brand Ambassadors", "Lead Capture", "Giveaway Distribution"],
    markets: ["Las Vegas"],
    date: "December 2024",
    googleDriveUrl: "https://drive.google.com/drive/folders/17dctKgx5PO05_bw5scsdbKXS1olrtwAS?usp=sharing",
    stats: {
      "Event": "National Finals Rodeo",
      "Duration": "10 Days",
      "Location": "Thomas & Mack Stadium"
    },
    category: "Automotive",
    featured: false,
    heroImage: "/images/case-studies/gallery/polaris/polaris-15.jpg",
    images: [
      "/images/case-studies/gallery/polaris/polaris-15.jpg",
      "/images/case-studies/gallery/polaris/polaris-1.jpg",
      "/images/case-studies/gallery/polaris/polaris-2.jpg",
      "/images/case-studies/gallery/polaris/polaris-3.jpg",
      "/images/case-studies/gallery/polaris/polaris-4.jpg",
      "/images/case-studies/gallery/polaris/polaris-5.jpg",
      "/images/case-studies/gallery/polaris/polaris-6.jpg",
      "/images/case-studies/gallery/polaris/polaris-7.jpg",
      "/images/case-studies/gallery/polaris/polaris-8.jpg",
      "/images/case-studies/gallery/polaris/polaris-9.jpg",
      "/images/case-studies/gallery/polaris/polaris-10.jpg",
      "/images/case-studies/gallery/polaris/polaris-11.jpg",
      "/images/case-studies/gallery/polaris/polaris-12.jpg"
    ]
  },
  {
    id: "car-wash-promotions",
    name: "Dash Car Wash - Las Vegas Grand Opening",
    tagline: "Shine On",
    description: "Dash Car Wash partnered with Air Fresh Marketing to execute a grand opening event in Las Vegas from September 26 to October 13, 2024. Our team provided event staffing and promotional support through brand ambassadors and street teams, successfully driving engagement and awareness for the new location.",
    industry: "Automotive",
    services: ["Event Staffing", "Grand Opening Promotion", "Street Team"],
    markets: ["Las Vegas"],
    date: "September-October 2024",
    googleDriveUrl: "https://drive.google.com/drive/folders/13fmVFc15G77tH31zEhgUp1fYSrA6fOOD?usp=sharing",
    stats: {
      "Event Duration": "18 Days",
      "Location": "Las Vegas",
      "Services": "Grand Opening Promotion"
    },
    category: "Automotive",
    featured: false,
    heroImage: "/images/case-studies/car-wash-hero.jpg",
    images: [
      "/images/case-studies/gallery/car-wash/car-wash-1.jpg",
      "/images/case-studies/gallery/car-wash/car-wash-2.jpg",
      "/images/case-studies/gallery/car-wash/car-wash-3.jpg",
      "/images/case-studies/gallery/car-wash/car-wash-4.jpg"
    ]
  },

  // ============ ENTERTAINMENT ============
  {
    id: "cirque-du-soleil",
    name: "Cirque du Soleil - Dallas Street Team",
    tagline: "Spark the Imagination",
    description: "Cirque du Soleil partnered with Air Fresh Marketing to execute a street team promotion in Dallas at the Great State Fair of Texas from October 11-14, 2024. Our brand ambassadors provided engaging brand activation and event staffing, successfully enhancing the brand's visibility and interaction within the local community.",
    industry: "Entertainment",
    services: ["Brand Activation", "Event Staffing", "Street Team Promotion"],
    markets: ["Dallas"],
    date: "October 2024",
    googleDriveUrl: "https://drive.google.com/drive/folders/1iGpR3Ked9i9r9P5aoj0LA2DyyMozbCfF?usp=sharing",
    stats: {
      "Event Duration": "4 Days",
      "Location": "Great State Fair of Texas",
      "Services": "Street Team Promotion"
    },
    category: "Entertainment",
    featured: false,
    heroImage: "/images/case-studies/cirque-du-soleil-hero.jpg",
    images: [
      "/images/case-studies/gallery/cirque/cirque-1.jpg",
      "/images/case-studies/gallery/cirque/cirque-2.jpg",
      "/images/case-studies/gallery/cirque/cirque-3.jpg",
      "/images/case-studies/gallery/cirque/cirque-4.jpg",
      "/images/case-studies/gallery/cirque/cirque-5.jpg",
      "/images/case-studies/gallery/cirque/cirque-6.jpg",
      "/images/case-studies/gallery/cirque/cirque-7.jpg",
      "/images/case-studies/gallery/cirque/cirque-8.jpg"
    ]
  },
  {
    id: "mrbeast-events",
    name: "MrBeast Feastables Tour",
    tagline: "Better Ingredients, Better Chocolate",
    description: "Air Fresh Marketing partnered with MrBeast to execute an experiential event staffing and sampling tour in Las Vegas and New York City. Our team provided comprehensive event staffing services, ensuring engaging and memorable experiences that resonated with attendees and enhanced brand visibility.",
    industry: "Food & Beverage",
    services: ["Event Staffing", "Sampling Tour"],
    markets: ["Las Vegas", "New York City"],
    date: "February 2023",
    googleDriveUrl: "https://drive.google.com/drive/folders/1jDA_ff4MWc9LlLMx7S65Oru15Yy-VOBc?usp=drive_link",
    stats: {
      "Markets": "Las Vegas, NYC",
      "Services": "Event Staffing & Sampling",
      "Type": "Experiential Tour"
    },
    category: "Entertainment",
    featured: false,
    heroImage: "/images/case-studies/mrbeast-hero.jpg"
  },

  // ============ RETAIL & SERVICES ============
  {
    id: "bond-vet",
    name: "Bond Vet - Grand Openings",
    tagline: "Modern Pet Care",
    description: "Bond Vet partnered with Air Fresh Marketing to execute grand opening events across multiple locations including Narbeth PA, Paramus NJ, Glenview, and Ponce. Our efforts included event staffing, flyering, and street team promotions, driving awareness and engagement within pet owner communities for these new veterinary facilities.",
    industry: "Healthcare",
    services: ["Event Staffing", "Grand Opening Promotion", "Street Team"],
    markets: ["New York", "New Jersey", "Atlanta"],
    date: "2023-2024",
    googleDriveUrl: "https://drive.google.com/drive/folders/1CyEDNF_36_1siTdUChYEhQCQtykn6yAi?usp=sharing",
    stats: {
      "Markets": "NY, NJ, Atlanta",
      "Services": "Grand Opening Promotion",
      "Type": "Veterinary Clinic Launch"
    },
    category: "Healthcare",
    featured: false,
    heroImage: "/images/case-studies/bond-vet.jpg",
    images: [
      "/images/case-studies/gallery/bond-vet/bond-vet-1.jpg",
      "/images/case-studies/gallery/bond-vet/bond-vet-2.jpg",
      "/images/case-studies/gallery/bond-vet/bond-vet-3.jpg",
      "/images/case-studies/gallery/bond-vet/bond-vet-4.jpg",
      "/images/case-studies/gallery/bond-vet/bond-vet-5.jpg"
    ]
  },
  {
    id: "qwick-staffing",
    name: "Qwick - SXSW Street Team Activation",
    tagline: "Staff On Demand",
    description: "Air Fresh Marketing partnered with Qwick to execute a street team activation at SXSW in Austin, Texas. Our team provided brand ambassadors and guerilla marketing services to enhance brand awareness and engage festival attendees, resulting in hundreds of direct interactions and heightened visibility across the event.",
    industry: "Technology",
    services: ["Brand Ambassadors", "Street Team Marketing", "Consumer Engagement"],
    markets: ["Austin, Texas"],
    date: "March 2023",
    googleDriveUrl: "https://drive.google.com/drive/folders/1pnMMxwibwuQvjngy0kbQ-AIwVPexB-uM?usp=share_link",
    stats: {
      "Event": "SXSW Festival",
      "Duration": "2 Days",
      "Services": "Street Team Marketing"
    },
    category: "Technology",
    featured: false,
    heroImage: "/images/case-studies/qwick.jpg",
    images: [
      "/images/case-studies/gallery/qwick/qwick-1.jpg",
      "/images/case-studies/gallery/qwick/qwick-2.jpg",
      "/images/case-studies/gallery/qwick/qwick-3.jpg",
      "/images/case-studies/gallery/qwick/qwick-4.jpg",
      "/images/case-studies/gallery/qwick/qwick-5.jpg",
      "/images/case-studies/gallery/qwick/qwick-6.jpg",
      "/images/case-studies/gallery/qwick/qwick-7.jpg"
    ]
  },
  {
    id: "starbucks-seasonal",
    name: "Starbucks Brand Activation",
    tagline: "Inspiring Connection",
    description: "Air Fresh Marketing partnered with Starbucks to execute a dynamic brand activation in the coffee industry. Our team provided engaging promotional events that enhanced customer interaction and increased brand loyalty, ensuring a memorable experience that resonated with coffee lovers.",
    industry: "Food & Beverage",
    services: ["Event Staffing", "Promotional Engagement", "Brand Activation"],
    markets: ["Various"],
    date: "Ongoing",
    stats: {
      "Industry": "Coffee & Beverage",
      "Services": "Brand Activation",
      "Type": "Promotional Events"
    },
    category: "Food & Beverage",
    featured: false,
    heroImage: "/images/case-studies/starbucks-hero.jpg"
  },
  {
    id: "solar-company",
    name: "Solar Company Marketing Activation",
    tagline: "Power Your Future",
    description: "Air Fresh Marketing partnered with Solar Company to execute a comprehensive marketing activation focused on promoting solar energy solutions. Our team provided targeted outreach and engagement strategies to increase brand awareness and customer acquisition, ensuring a significant impact in the renewable energy market.",
    industry: "Energy",
    services: ["Marketing Activation", "Targeted Outreach", "Customer Engagement"],
    markets: ["Southwest Region"],
    date: "Ongoing",
    googleDriveUrl: "https://drive.google.com/drive/folders/1lbEFlRPldB20jOdu8dYAmCTu9GsTWUsI?usp=sharing",
    stats: {
      "Industry": "Renewable Energy",
      "Services": "Marketing Activation",
      "Region": "Southwest"
    },
    category: "Technology",
    featured: false,
    heroImage: "/images/case-studies/solar-company.jpg"
  },
  {
    id: "topps-cards",
    name: "Topps - NHL All Star Beach Fest",
    tagline: "Collect the Moment",
    description: "Air Fresh Marketing partnered with Topps to execute a fan engagement activation at the NHL All Star Beach Fest in Miami. Our team provided brand ambassadors, booth support, and consumer education, driving app downloads and creating a high-energy experience that resonated with attendees, resulting in hundreds of interactions and strong demand for exclusive giveaways.",
    industry: "Entertainment",
    services: ["Brand Ambassadors", "Booth Support", "App Promotion", "Giveaways"],
    markets: ["Miami"],
    date: "February 2023",
    googleDriveUrl: "https://drive.google.com/drive/folders/1pnMMxwibwuQvjngy0kbQ-AIwVPexB-uM?usp=share_link",
    stats: {
      "Event": "NHL All Star Beach Fest",
      "Duration": "3 Days",
      "Location": "Ft. Lauderdale Beach Park"
    },
    category: "Entertainment",
    featured: false,
    heroImage: "/images/case-studies/topps-cards.jpg",
    images: [
      "/images/case-studies/gallery/topps/topps-1.jpg",
      "/images/case-studies/gallery/topps/topps-2.jpg"
    ]
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
    description: "Air Fresh Marketing partnered with Merrell to execute a high-energy brand activation campaign in Denver, Colorado, bringing the brand's 'Trail Tested' ethos directly to outdoor enthusiasts. Our team of trained brand ambassadors set up experiential activations at trailheads, outdoor festivals, and retail locations across the Front Range, giving consumers hands-on product trials with Merrell's latest hiking footwear and apparel. Each activation featured guided trail walks, product fitting stations, and interactive brand experiences designed to connect consumers with the Merrell lifestyle. Our ambassadors educated attendees on Merrell's Vibram sole technology, waterproof construction, and sustainability initiatives while capturing leads and driving retail traffic. The campaign generated significant foot traffic at local REI, Dick's Sporting Goods, and independent outdoor retailers, resulting in measurable sell-through increases during the activation period.",
    industry: "Outdoor & Sports",
    services: ["Brand Activation", "Product Sampling", "Event Marketing", "Experiential Marketing", "Retail Traffic Driving"],
    markets: ["Denver, CO"],
    date: "2021",
    stats: {
      "Product Trials": "10,000+",
      "Consumer Engagements": "50,000+",
      "Retail Partners": "15+",
      "Campaign Duration": "6 Months"
    },
    category: "Sports",
    featured: false,
    heroImage: "/images/case-studies/merrell-hero.jpg",
    heroVideo: "649976065",
    videoUrl: "https://player.vimeo.com/video/649976065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
    images: []
  },
  {
    id: "grubhub-campaign",
    name: "Grubhub - NYC Street Team",
    tagline: "Delivering Happiness",
    description: "Air Fresh Marketing partnered with Grubhub to enhance their brand presence through targeted activations in the food delivery industry in New York City. Our team provided restaurant catering street team services, driving customer engagement and awareness through strategic outreach campaigns.",
    industry: "Food Tech",
    services: ["Street Teams", "Brand Activation", "Market Outreach"],
    markets: ["New York City"],
    date: "January 2019",
    googleDriveUrl: "https://drive.google.com/drive/folders/1STigwcAMOkNqjLeSia9U9EM00xwCxcbQ?usp=drive_link",
    stats: {
      "Location": "New York City",
      "Type": "Restaurant Catering Street Team",
      "Services": "Brand Activation"
    },
    category: "Technology",
    featured: false,
    heroImage: "/images/case-studies/grubhub-hero.jpg",
    images: [
      "/images/case-studies/gallery/grubhub/grubhub-1.jpg",
      "/images/case-studies/gallery/grubhub/grubhub-2.jpg",
      "/images/case-studies/gallery/grubhub/grubhub-3.jpg",
      "/images/case-studies/gallery/grubhub/grubhub-4.jpg"
    ]
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
    heroImage: "/images/case-studies/premier-protein-hero.jpg",
    heroVideo: "394084617"
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
    name: "Lyft - Multi-Market Experiential Activations",
    tagline: "Your Ride Awaits",
    description: "Lyft needed boots on the ground in 6 major markets to drive app downloads and rider acquisition during peak summer season. Air Fresh coordinated a 4-month campaign deploying street teams across Chicago, Dallas, Denver, Los Angeles, Miami, and NYC - hitting festivals, sporting events, and high-traffic locations. Our teams distributed 50,000+ promo codes, drove 12,000+ new app downloads, and generated 25,000+ direct consumer engagements. The campaign delivered a $2.30 cost-per-acquisition - 40% below Lyft's digital-only benchmarks.",
    industry: "Transportation",
    services: ["Brand Activation", "Event Staffing", "Street Teams", "App Downloads"],
    markets: ["Chicago", "Dallas", "Denver", "Los Angeles", "Miami", "New York City"],
    date: "June-September 2023",
    googleDriveUrl: "https://drive.google.com/drive/folders/1JTWP62tu34XtUA-YKqI4DqUHNOBDc6L5?usp=drive_link",
    stats: {
      "New App Downloads": "12,000+",
      "Consumer Engagements": "25,000+",
      "Promo Codes Distributed": "50,000+",
      "Cost Per Acquisition": "$2.30 (40% below benchmark)"
    },
    category: "Technology",
    featured: true,
    heroImage: "/images/case-studies/lyft-hero.jpg"
  },
  {
    id: "mac-cosmetics-campaign",
    name: "MAC Cosmetics - Powder Kiss National Launch",
    tagline: "All Ages, All Races, All Genders",
    description: "MAC tapped Air Fresh to execute the nationwide launch of their Powder Kiss lipstick collection - one of their biggest product launches of the year. We deployed 75+ beauty-trained brand ambassadors across 9 major markets simultaneously, activating at MAC flagship stores, Macy's, Nordstrom, Ulta, and Bloomingdale's. Our team conducted live makeup applications, drove social sharing, and captured customer data. The launch exceeded sales targets by 40% in staffed locations vs. non-staffed stores.",
    industry: "Beauty",
    services: ["Brand Activation", "Event Staffing", "Sampling Activation", "Retail Support"],
    markets: ["Atlanta", "Chicago", "Dallas", "Denver", "Las Vegas", "Los Angeles", "Miami", "New York City", "Honolulu"],
    date: "April 2019",
    googleDriveUrl: "https://drive.google.com/drive/folders/13-8CKGX1d_CUGcog49Wpx1gH9tmeHiqy?usp=sharing",
    stats: {
      "Markets": "9 Simultaneous Cities",
      "Ambassadors Deployed": "75+",
      "Retail Partners": "5 Major Retailers",
      "Sales Lift": "+40% vs Control"
    },
    category: "Beauty & Fashion",
    featured: true,
    heroImage: "/images/case-studies/mac-cosmetics-new-hero.jpg",
    images: [
      "/images/case-studies/gallery/mac/mac-1.jpg",
      "/images/case-studies/gallery/mac/mac-2.jpg",
      "/images/case-studies/gallery/mac/mac-3.jpg",
      "/images/case-studies/gallery/mac/mac-4.jpg",
      "/images/case-studies/gallery/mac/mac-5.jpg"
    ]
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
