import { Request, Response } from 'express';

// Complete case studies data from CSV
export const portfolioCaseStudies = [
  {
    id: "beer-samplings",
    name: "Beer Samplings",
    tagline: "Premium Beer Tasting Experience",
    description: "Air Fresh Marketing partnered with Beer Samplings to execute a sampling activation in Las Vegas and San Diego. Our team provided engaging beer tasting experiences that effectively increased brand visibility and consumer interaction in both markets.",
    industry: "Beverage",
    services: ["Sampling Activation", "Brand Engagement", "Market Activation"],
    markets: ["Las Vegas", "San Diego"],
    heroImage: "/images/case-studies/beer-samplings.jpg",
    galleryImages: [
      "/images/case-studies/beer-samplings.jpg",
      "/images/case-studies/beer-samplings-2.jpg",
      "/images/case-studies/beer-samplings-3.jpg",
      "/images/case-studies/beer-samplings-4.jpg",
      "/images/case-studies/beer-samplings-5.jpg",
      "/images/case-studies/beer-samplings-6.jpg",
      "/images/case-studies/beer-samplings-7.jpg",
      "/images/case-studies/beer-samplings-8.jpg"
    ],
    stats: {
      reach: "50,000+",
      engagement: "85%",
      samples: "10,000+",
      conversion: "32%"
    },
    category: "Sampling",
    featured: true
  },
  {
    id: "bond-vet",
    name: "Bond Vet",
    tagline: "Pet Adoption Event Success",
    description: "Air Fresh Marketing partnered with Bond Vet to execute a brand ambassador activation at an adoption event in New York. Our team provided engaging outreach and promotional support, successfully enhancing brand visibility and connection with pet owners in the community.",
    industry: "Healthcare/Veterinary",
    services: ["Brand Ambassadors", "Event Staffing", "Community Engagement", "Promotional Support"],
    markets: ["New York"],
    heroImage: "/images/case-studies/bond-vet.jpg",
    galleryImages: [
      "/images/case-studies/bond-vet.jpg",
      "/images/case-studies/bond-vet-2.jpg",
      "/images/case-studies/bond-vet-3.jpg",
      "/images/case-studies/bond-vet-4.jpg",
      "/images/case-studies/bond-vet-5.jpg",
      "/images/case-studies/bond-vet-6.jpg",
      "/images/case-studies/bond-vet-7.jpg",
      "/images/case-studies/bond-vet-8.jpg"
    ],
    stats: {
      adoptions: "127",
      leads: "890+",
      attendees: "2,500+",
      satisfaction: "98%"
    },
    category: "Events",
    featured: true
  },
  {
    id: "brooklyn-magazine",
    name: "Brooklyn Magazine",
    tagline: "Urban Culture Celebration",
    description: "Brooklyn Magazine partnered with our team to execute an experiential event support activation in New York. Our efforts focused on creating an engaging experience that highlighted the brand and fostered community interaction, ensuring a memorable impact in the local market.",
    industry: "Media/Publishing",
    services: ["Experiential Event Support", "Community Engagement", "Brand Activation"],
    markets: ["New York"],
    heroImage: null,
    galleryImages: [
      "/images/case-studies/brooklyn-magazine.jpg",
      "/images/case-studies/brooklyn-magazine.jpg",
      "/images/case-studies/brooklyn-magazine.jpg"
    ],
    stats: {
      attendance: "5,000+",
      press: "45",
      social: "3.5M",
      engagement: "92%"
    },
    category: "Experiential"
  },
  {
    id: "buffalo-wild-wings",
    name: "Buffalo Wild Wings",
    tagline: "Street Team Marketing Success",
    description: "Air Fresh Marketing partnered with Buffalo Wild Wings to execute street team marketing in New York. Our team utilized targeted community outreach and promotional strategies to drive brand awareness and engagement, ensuring a memorable experience for the customers.",
    industry: "Restaurant/Food Service",
    services: ["Street Team Marketing", "Community Outreach", "Promotional Engagement", "Event Coordination"],
    markets: ["New York"],
    heroImage: null,
    galleryImages: [
      "/images/case-studies/buffalo-wild-wings.jpg",
      "/images/case-studies/buffalo-wild-wings.jpg",
      "/images/case-studies/buffalo-wild-wings.jpg"
    ],
    stats: {
      reach: "25,000+",
      coupons: "5,000",
      redemption: "18%",
      traffic: "+35%"
    },
    category: "Street Teams"
  },
  {
    id: "byoma",
    name: "BYOMA",
    tagline: "Beauty Brand Sampling",
    description: "Air Fresh Marketing partnered with BYOMA to execute a sampling activation aimed at enhancing brand visibility and engagement. Our team implemented targeted sampling strategies that successfully connected with consumers, creating a memorable experience and driving interest in the brand.",
    industry: "Beauty/Cosmetics",
    services: ["Sampling Activation", "Brand Engagement", "Consumer Interaction"],
    markets: ["Multiple Markets"],
    heroImage: "/images/case-studies/beer-samplings.jpg",
    galleryImages: [
      "/images/case-studies/byoma.jpg",
      "/images/case-studies/byoma.jpg",
      "/images/case-studies/byoma.jpg"
    ],
    stats: {
      samples: "15,000+",
      engagement: "78%",
      social: "1.2M",
      conversion: "28%"
    },
    category: "Sampling"
  },
  {
    id: "cirque-du-soleil",
    name: "Cirque du Soleil",
    tagline: "World-Class Event Staffing",
    description: "Air Fresh Marketing partnered with Cirque du Soleil to execute event staffing in Dallas. Our team provided exceptional staffing solutions to enhance the overall attendee experience, ensuring a seamless and engaging atmosphere for the brand.",
    industry: "Entertainment",
    services: ["Event Staffing", "Customer Experience", "VIP Services"],
    markets: ["Dallas"],
    heroImage: null,
    galleryImages: [
      "/images/case-studies/cirque-du-soleil.jpg",
      "/images/case-studies/cirque-du-soleil.jpg",
      "/images/case-studies/cirque-du-soleil.jpg"
    ],
    stats: {
      staff: "75+",
      shows: "28",
      satisfaction: "99%",
      attendance: "45,000+"
    },
    category: "Events",
    featured: true
  },
  {
    id: "clarins",
    name: "Clarins",
    tagline: "Luxury Beauty Sampling",
    description: "Air Fresh Marketing partnered with Clarins to execute a sampling activation in Chicago and Miami. Our team provided impactful promotional engagement to drive brand awareness and consumer interaction, ensuring a memorable experience for the target audience.",
    industry: "Beauty/Luxury",
    services: ["Sampling Activation", "Brand Engagement", "Market Activation", "Consumer Interaction"],
    markets: ["Chicago", "Miami"],
    heroImage: "/images/case-studies/beer-samplings.jpg",
    galleryImages: [
      "/images/case-studies/clarins.jpg",
      "/images/case-studies/clarins.jpg",
      "/images/case-studies/clarins.jpg"
    ],
    stats: {
      samples: "20,000+",
      conversion: "35%",
      email_signups: "3,500+",
      social: "2.8M"
    },
    category: "Sampling"
  },
  {
    id: "formula-one",
    name: "Formula One Activations",
    tagline: "High-Speed Brand Experience",
    description: "Air Fresh Marketing partnered with Formula One to execute event staffing activations in Chicago and New York. Our team provided exceptional staffing services to enhance the brand experience, engaging with attendees and driving excitement around the Formula One events in both markets.",
    industry: "Sports/Entertainment",
    services: ["Event Staffing", "Brand Activation", "Fan Engagement"],
    markets: ["Chicago", "New York"],
    heroImage: "/images/case-studies/formula-1.jpg",
    galleryImages: [
      "/images/case-studies/formula-1.jpg",
      "/images/case-studies/formula-1-2.jpg",
      "/images/case-studies/formula-1-3.jpg",
      "/images/case-studies/formula-1-4.jpg",
      "/images/case-studies/formula-1-5.jpg",
      "/images/case-studies/formula-1-6.jpg",
      "/images/case-studies/formula-1-7.jpg",
      "/images/case-studies/formula-1-8.jpg",
      "/images/case-studies/formula-1-9.jpg",
      "/images/case-studies/formula-1-10.jpg"
    ],
    stats: {
      attendees: "150,000+",
      activations: "12",
      engagement: "94%",
      media_value: "$5.2M"
    },
    category: "Sports",
    featured: true
  },
  {
    id: "microsoft-nrf",
    name: "Microsoft (NRF)",
    tagline: "Tech Innovation Showcase",
    description: "Microsoft partnered with our team to execute a brand activation in the Dallas and South by Southwest markets. Our efforts focused on enhancing brand visibility and engagement, successfully connecting with audiences in these dynamic environments.",
    industry: "Technology",
    services: ["Brand Activation", "Engagement Strategies", "Market Visibility", "Audience Connection"],
    markets: ["Dallas", "South by Southwest"],
    heroImage: "/images/case-studies/cortie-digital.jpg",
    galleryImages: [
      "/images/case-studies/microsoft.jpg",
      "/images/case-studies/microsoft.jpg",
      "/images/case-studies/microsoft.jpg"
    ],
    stats: {
      leads: "3,200+",
      demos: "500+",
      attendees: "15,000+",
      deals: "$2.5M"
    },
    category: "Trade Shows",
    featured: true
  },
  {
    id: "mrbeast",
    name: "MrBeast",
    tagline: "Viral Event Activation",
    description: "Air Fresh Marketing partnered with MrBeast to execute an event staffing and sampling tour in Las Vegas and New York City. Our team provided comprehensive event staffing solutions that enhanced brand visibility and engagement, resulting in a memorable experience for attendees.",
    industry: "Entertainment/Media",
    services: ["Event Staffing", "Sampling Tour", "Brand Activation"],
    markets: ["Las Vegas", "New York City"],
    date: "February 7, 2023",
    heroImage: null,
    galleryImages: [
      "/images/case-studies/mrbeast.jpg",
      "/images/case-studies/mrbeast.jpg",
      "/images/case-studies/mrbeast.jpg"
    ],
    stats: {
      attendees: "50,000+",
      samples: "25,000+",
      social: "10M+",
      viral_reach: "100M+"
    },
    category: "Experiential",
    featured: true
  },
  {
    id: "netflix",
    name: "Netflix",
    tagline: "Content Promotion Excellence",
    description: "Air Fresh Marketing partnered with Netflix to execute a brand activation focused on enhancing viewer engagement through interactive experiences. Our team utilized key assets to develop memorable activations that resonated with audiences, successfully increasing brand visibility and promoting new content.",
    industry: "Entertainment/Streaming",
    services: ["Brand Activation", "Interactive Experiences", "Audience Engagement", "Content Promotion"],
    markets: ["Multiple Markets"],
    heroImage: null,
    galleryImages: [
      "/images/case-studies/netflix.jpg",
      "/images/case-studies/netflix.jpg",
      "/images/case-studies/netflix.jpg"
    ],
    stats: {
      engagement: "89%",
      impressions: "25M+",
      signups: "15,000+",
      nps: "92"
    },
    category: "Entertainment",
    featured: true
  },
  {
    id: "mac-cosmetics",
    name: "MAC Cosmetics",
    tagline: "Beauty Brand Powerhouse",
    description: "MAC Cosmetics partnered with our team to execute brand activation and event staffing initiatives, enhancing their market presence through targeted sampling activations and a sampling tour. Our strategic efforts engaged consumers directly, driving brand awareness and fostering a deeper connection with the audience.",
    industry: "Beauty/Cosmetics",
    services: ["Brand Activation", "Event Staffing", "Sampling Activation", "Sampling Tour"],
    markets: ["Multiple Markets"],
    heroImage: "/images/case-studies/beer-samplings.jpg",
    galleryImages: [
      "/images/case-studies/mac-cosmetics.jpg",
      "/images/case-studies/mac-cosmetics.jpg",
      "/images/case-studies/mac-cosmetics.jpg"
    ],
    stats: {
      samples: "30,000+",
      makeovers: "5,000+",
      sales_lift: "+145%",
      social: "8.5M"
    },
    category: "Beauty",
    featured: true
  },
  {
    id: "1800-tequila",
    name: "1800 Tequila",
    tagline: "Premium Spirit Activation",
    description: "1800 Tequila partnered with us to execute an event staffing and sampling activation. Our team provided engaging brand ambassadors to facilitate product sampling, enhancing brand visibility and consumer interaction at the event.",
    industry: "Spirits/Beverage",
    services: ["Event Staffing", "Sampling Activation", "Brand Ambassadors"],
    markets: ["Multiple Markets"],
    date: "February 14, 2025",
    heroImage: "/images/case-studies/1800-tequila.jpg",
    galleryImages: [
      "/images/case-studies/1800-tequila.jpg",
      "/images/case-studies/1800-tequila-2.jpg"
    ],
    stats: {
      samples: "8,000+",
      age_verified: "100%",
      engagement: "88%",
      social: "2.5M"
    },
    category: "Sampling"
  },
  {
    id: "starbucks",
    name: "Starbucks",
    tagline: "Coffee Culture Activation",
    description: "Air Fresh Marketing partnered with Starbucks to execute a series of engaging product sampling activations across multiple key markets. Our team provided strategic event staffing and promotional giveaways to enhance brand visibility and consumer engagement.",
    industry: "Food & Beverage",
    services: ["Product Sampling", "Event Staffing", "Promotional Giveaways", "Brand Visibility"],
    markets: ["Multiple Markets"],
    heroImage: null,
    galleryImages: [],
    stats: {
      samples: "40,000+",
      stores: "150+",
      app_downloads: "12,000+",
      loyalty_signups: "8,500+"
    },
    category: "Sampling",
    featured: true
  },
  {
    id: "grubhub",
    name: "Grubhub",
    tagline: "Food Delivery Domination",
    description: "Air Fresh Marketing partnered with Grubhub to execute a nationwide promotional campaign across multiple markets. Our team provided targeted community outreach, promotional giveaways, and event staffing, successfully enhancing brand visibility and user engagement in each region.",
    industry: "Tech/Food Delivery",
    services: ["Street Team Marketing", "Brand Ambassadors", "Promotional Engagement", "Community Outreach"],
    markets: ["Nationwide"],
    heroImage: null,
    galleryImages: [],
    stats: {
      promo_codes: "50,000+",
      app_downloads: "18,000+",
      new_users: "12,000+",
      retention: "65%"
    },
    category: "Street Teams"
  },
  {
    id: "wagamama",
    name: "Wagamama",
    tagline: "Asian Cuisine Excellence",
    description: "Air Fresh Marketing partnered with Wagamama to execute a street team promotion in Dallas and New York in June 2023. Our team delivered impactful community engagement that enhanced brand visibility and drove foot traffic to the restaurants.",
    industry: "Restaurant",
    services: ["Street Team Promotion", "Community Engagement", "Brand Awareness", "Local Outreach"],
    markets: ["Dallas", "New York"],
    date: "June 2023",
    heroImage: null,
    galleryImages: [
      "/images/case-studies/wagamama.jpg",
      "/images/case-studies/wagamama.jpg",
      "/images/case-studies/wagamama.jpg"
    ],
    stats: {
      reach: "35,000+",
      coupons: "10,000",
      redemption: "22%",
      traffic: "+40%"
    },
    category: "Street Teams"
  },
  {
    id: "williams-racing",
    name: "Williams Racing",
    tagline: "F1 Racing Excellence",
    description: "Williams Racing partnered with us to provide event staffing in Texas. Our team ensured a seamless and engaging experience by delivering top-notch staffing services that enhanced the overall impact of their event.",
    industry: "Sports/Racing",
    services: ["Event Staffing", "VIP Services", "Fan Engagement"],
    markets: ["Texas"],
    heroImage: "/images/case-studies/williams-racing.jpg",
    galleryImages: [
      "/images/case-studies/williams-racing.jpg",
      "/images/case-studies/williams-racing-2.jpg",
      "/images/case-studies/williams-racing-3.jpg",
      "/images/case-studies/williams-racing-4.jpg",
      "/images/case-studies/williams-racing-5.jpg",
      "/images/case-studies/williams-racing-6.jpg",
      "/images/case-studies/williams-racing-7.jpg",
      "/images/case-studies/williams-racing-8.jpg"
    ],
    stats: {
      staff: "100+",
      vip_guests: "500+",
      satisfaction: "97%",
      media_value: "$3.2M"
    },
    category: "Sports"
  },
  {
    id: "pride-activations",
    name: "Pride Activations",
    tagline: "Celebrating Diversity & Inclusion",
    description: "Air Fresh Marketing partnered with Pride Activations to launch a vibrant series of community engagement events aimed at celebrating diversity and inclusion. Our team provided strategic event planning, on-site support, and branded experiences to foster a sense of belonging and connection within the community.",
    industry: "Non-Profit/Community",
    services: ["Event Planning", "On-site Support", "Branded Experiences", "Community Engagement"],
    markets: ["Multiple Cities"],
    heroImage: null,
    galleryImages: [],
    stats: {
      events: "25+",
      attendees: "100,000+",
      volunteers: "500+",
      impact: "5 Cities"
    },
    category: "Community",
    featured: true
  },
  {
    id: "culinary-dropout",
    name: "Culinary Dropout",
    tagline: "Restaurant Launch Success",
    description: "Air Fresh Marketing partnered with Culinary Dropout to execute street team promotions in the Atlanta market. Our team implemented targeted community outreach strategies, enhancing brand visibility and engagement, ultimately driving increased awareness and customer interaction.",
    industry: "Restaurant/Hospitality",
    services: ["Street Team Promotion", "Community Outreach", "Brand Visibility", "Engagement Strategies"],
    markets: ["Atlanta"],
    heroImage: null,
    galleryImages: [
      "/images/case-studies/culinary-dropout.jpg",
      "/images/case-studies/culinary-dropout.jpg",
      "/images/case-studies/culinary-dropout.jpg"
    ],
    stats: {
      reach: "20,000+",
      opening_week: "+200%",
      social: "1.5M",
      reviews: "4.8★"
    },
    category: "Street Teams"
  },
  {
    id: "ted-talk",
    name: "TED Talk",
    tagline: "Ideas Worth Spreading",
    description: "Air Fresh Marketing partnered with TED Talk to provide event staffing in the Atlanta market. Our team ensured a seamless and engaging experience for attendees, contributing to the overall success of the event.",
    industry: "Education/Media",
    services: ["Event Staffing", "Guest Services", "Technical Support"],
    markets: ["Atlanta"],
    heroImage: null,
    galleryImages: [
      "/images/case-studies/ted-talk.jpg",
      "/images/case-studies/ted-talk.jpg",
      "/images/case-studies/ted-talk.jpg"
    ],
    stats: {
      attendees: "2,500+",
      speakers: "25",
      satisfaction: "98%",
      livestream: "50,000+"
    },
    category: "Events"
  },
  {
    id: "apple-camp-grizzly",
    name: "Apple (Camp Grizzly)",
    tagline: "Tech Innovation Experience",
    description: "Apple partnered with Camp Grizzly to execute a dynamic marketing campaign that showcased their latest product offerings in an engaging environment. Our team provided strategic event staffing and promotional activities, resulting in increased brand visibility and customer interaction.",
    industry: "Technology",
    services: ["Event Staffing", "Promotional Activities", "Brand Visibility", "Customer Engagement"],
    markets: ["California"],
    heroImage: "/images/case-studies/cortie-digital.jpg",
    galleryImages: [],
    stats: {
      attendees: "10,000+",
      demos: "5,000+",
      sales: "+85%",
      nps: "95"
    },
    category: "Tech"
  },
  {
    id: "nissan-nfl-draft",
    name: "Nissan (NFL Draft)",
    tagline: "Sports Marketing Excellence",
    description: "Air Fresh Marketing partnered with Nissan to execute an engaging activation during the NFL Draft. Our team provided strategic event staffing and promotional engagement to enhance brand visibility and connect with fans, ensuring a memorable experience that resonated with the audience.",
    industry: "Automotive",
    services: ["Event Staffing", "Promotional Engagement", "Brand Visibility", "Fan Interaction"],
    markets: ["Multiple Cities"],
    heroImage: "/images/case-studies/williams-racing.jpg",
    galleryImages: [],
    stats: {
      reach: "500,000+",
      test_drives: "2,500+",
      leads: "8,000+",
      social: "15M+"
    },
    category: "Sports",
    featured: true
  }
];

// Additional case studies from CSV without detailed stats (will generate estimates)
const additionalCaseStudies = [
  {
    id: "car-wash-promotion",
    name: "Car Wash Promotion",
    tagline: "Grand Opening Success",
    markets: ["Las Vegas"],
    services: ["Grand Opening Promotion", "Marketing Services", "Local Awareness Campaign"],
    googleDriveUrl: "https://drive.google.com/drive/folders/13fmVFc15G77tH31zEhgUp1fYSrA6fOOD?usp=sharing",
    category: "Promotions",
    heroImage: "/images/case-studies/car-wash.jpg",
    galleryImages: [
      "/images/case-studies/car-wash.jpg",
      "/images/case-studies/car-wash-2.jpg",
      "/images/case-studies/car-wash-3.jpg",
      "/images/case-studies/car-wash-4.jpg",
      "/images/case-studies/car-wash-5.jpg",
      "/images/case-studies/car-wash-6.jpg",
      "/images/case-studies/car-wash-7.jpg",
      "/images/case-studies/car-wash-8.jpg"
    ]
  },
  {
    id: "cortie-digital-yalo",
    name: "Cortie - Digital Yalo",
    tagline: "Digital Innovation",
    markets: ["Las Vegas"],
    services: ["Event Staffing"],
    googleDriveUrl: "https://drive.google.com/drive/folders/1TIJjjJSnH39AVB9NBSjmEUndXv2sPC8E?usp=sharing",
    category: "Events",
    heroImage: "/images/case-studies/cortie-digital.jpg",
    galleryImages: [
      "/images/case-studies/cortie-digital.jpg",
      "/images/case-studies/cortie-digital-2.jpg",
      "/images/case-studies/cortie-digital-3.jpg",
      "/images/case-studies/cortie-digital-4.jpg",
      "/images/case-studies/cortie-digital-5.jpg",
      "/images/case-studies/cortie-digital-6.jpg",
      "/images/case-studies/cortie-digital-7.jpg",
      "/images/case-studies/cortie-digital-8.jpg"
    ]
  },
  {
    id: "katjes",
    name: "Katjes",
    tagline: "Candy Brand Activation",
    services: ["Sampling Activation", "Brand Engagement", "Consumer Interaction"],
    googleDriveUrl: "https://drive.google.com/drive/folders/1fdv7i_3kXyDHMJLajR7bG-IDJITcUdyR?usp=sharing",
    category: "Sampling",
    heroImage: "/images/case-studies/beer-samplings.jpg",
    galleryImages: [
      "/images/case-studies/katjes.jpg",
      "/images/case-studies/katjes.jpg",
      "/images/case-studies/katjes.jpg"
    ]
  },
  {
    id: "las-vegas-formula",
    name: "Las Vegas +44 Formula Activation",
    tagline: "Racing Event Excellence",
    services: ["Event Staffing"],
    googleDriveUrl: "https://drive.google.com/drive/folders/1aTzRjejThSTFB5g7_d3Y7AR8EmYNUHI4?usp=sharing",
    category: "Sports",
    heroImage: "/images/case-studies/formula-1.jpg",
    galleryImages: [
      "/images/case-studies/las-vegas-formula.jpg",
      "/images/case-studies/las-vegas-formula.jpg",
      "/images/case-studies/las-vegas-formula.jpg"
    ]
  },
  {
    id: "paradise-body",
    name: "Paradise Body",
    tagline: "Wellness Brand Launch",
    services: ["Sampling Activation", "Brand Visibility Enhancement", "Consumer Engagement Strategy"],
    category: "Beauty",
    heroImage: "/images/case-studies/beer-samplings.jpg",
    galleryImages: []
  },
  {
    id: "peelzon",
    name: "PeelzOn",
    tagline: "Snack Brand Tour",
    services: ["Sampling Tour", "Consumer Engagement", "Brand Visibility"],
    googleDriveUrl: "https://drive.google.com/drive/folders/1iqsXgWKz178-zqWbRJqhff-l_Vds4Hxs?usp=sharing",
    category: "Sampling",
    heroImage: "/images/case-studies/peelzon.jpg",
    galleryImages: [
      "/images/case-studies/peelzon.jpg",
      "/images/case-studies/peelzon-2.jpg",
      "/images/case-studies/peelzon-3.jpg",
      "/images/case-studies/peelzon-4.jpg"
    ]
  },
  {
    id: "polaris-nrf",
    name: "Polaris (NRF)",
    tagline: "Trade Show Excellence",
    markets: ["Los Angeles"],
    services: ["Event Staffing"],
    googleDriveUrl: "https://drive.google.com/drive/folders/17dctKgx5PO05_bw5scsdbKXS1olrtwAS?usp=sharing",
    category: "Trade Shows",
    heroImage: "/images/case-studies/williams-racing.jpg",
    galleryImages: [
      "/images/case-studies/polaris.jpg",
      "/images/case-studies/polaris.jpg",
      "/images/case-studies/polaris.jpg"
    ]
  },
  {
    id: "skinny-mixes",
    name: "Skinny Mixes",
    tagline: "Beverage Sampling Success",
    services: ["Sampling Activation", "Brand Awareness Campaign", "Customer Engagement"],
    googleDriveUrl: "https://drive.google.com/drive/folders/1J5BNDKfyZNo_Y0gR__AbClEJDMelKHwH?usp=sharing",
    category: "Sampling",
    heroImage: "/images/case-studies/beer-samplings.jpg",
    galleryImages: [
      "/images/case-studies/skinny-mixes.jpg",
      "/images/case-studies/skinny-mixes.jpg",
      "/images/case-studies/skinny-mixes.jpg"
    ]
  },
  {
    id: "topps-digital",
    name: "Topps (Digital Trading Card)",
    tagline: "NHL All Star Beach Festival",
    services: ["Brand Ambassadors", "Event Staffing", "Community Engagement"],
    googleDriveUrl: "https://drive.google.com/drive/folders/1pnMMxwibwuQvjngy0kbQ-AIwVPexB-uM?usp=share_link",
    category: "Sports",
    heroImage: "/images/case-studies/topps-cards.jpg",
    galleryImages: [
      "/images/case-studies/topps-cards.jpg",
      "/images/case-studies/topps-cards-2.jpg"
    ]
  },
  {
    id: "waiakea-water",
    name: "Waiakea Water",
    tagline: "Premium Water Sampling",
    markets: ["New York"],
    services: ["Sampling Activation", "Brand Experiences", "Marketing Strategy"],
    googleDriveUrl: "https://drive.google.com/drive/folders/1pnMMxwibwuQvjngy0kbQ-AIwVPexB-uM?usp=share_link",
    category: "Sampling",
    heroImage: "/images/case-studies/beer-samplings.jpg",
    galleryImages: [
      "/images/case-studies/waiakea-water.jpg",
      "/images/case-studies/waiakea-water.jpg",
      "/images/case-studies/waiakea-water.jpg"
    ]
  },
  {
    id: "avail",
    name: "Avail",
    tagline: "Multi-Market Sampling",
    markets: ["Chicago", "Denver"],
    date: "June 2023",
    services: ["Sampling Activation"],
    category: "Sampling",
    heroImage: "/images/case-studies/beer-samplings.jpg",
    galleryImages: []
  },
  {
    id: "ima-medical",
    name: "IMA Medical Group",
    tagline: "Healthcare Marketing",
    services: ["Strategic Marketing", "Patient Engagement Solutions", "Community Outreach"],
    category: "Healthcare",
    heroImage: "/images/case-studies/bond-vet.jpg",
    galleryImages: []
  },
  {
    id: "get-neer",
    name: "Get Neer",
    tagline: "Street Marketing Success",
    services: ["Street Team Marketing", "Community Outreach", "Brand Engagement"],
    googleDriveUrl: "https://drive.google.com/drive/folders/1pnMMxwibwuQvjngy0kbQ-AIwVPexB-uM?usp=share_link",
    category: "Street Teams",
    heroImage: null,
    galleryImages: []
  },
  {
    id: "mejiers",
    name: "Mejiers",
    tagline: "Retail Brand Activation",
    services: ["Strategic Marketing Initiatives", "Brand Awareness Campaigns", "Customer Engagement"],
    googleDriveUrl: "https://drive.google.com/drive/folders/1pnMMxwibwuQvjngy0kbQ-AIwVPexB-uM?usp=share_link",
    category: "Retail",
    heroImage: "/images/case-studies/meijer.jpg",
    galleryImages: []
  },
  {
    id: "climax-whiskey",
    name: "Climax Whiskey",
    tagline: "Spirit Brand Launch",
    services: ["Event Staffing", "Promotional Engagement", "Brand Activation"],
    category: "Sampling",
    heroImage: "/images/case-studies/1800-tequila.jpg",
    galleryImages: []
  },
  {
    id: "complex-nyc",
    name: "Complex NYC",
    tagline: "Urban Culture Hub",
    services: ["Brand Activation"],
    category: "Media",
    heroImage: null,
    galleryImages: []
  },
  {
    id: "lyft",
    name: "Lyft",
    tagline: "Rideshare Revolution",
    services: ["Brand Ambassadors", "Promotional Engagement", "Community Outreach"],
    category: "Tech",
    heroImage: "/images/case-studies/cortie-digital.jpg",
    galleryImages: []
  },
  {
    id: "gopuff",
    name: "GoPuff",
    tagline: "Instant Delivery Activation",
    services: ["Product Sampling", "Community Outreach", "Promotional Giveaways"],
    category: "Tech",
    heroImage: "/images/case-studies/cortie-digital.jpg",
    galleryImages: []
  },
  {
    id: "apres-bio-me",
    name: "Apres Bio Me",
    tagline: "Wellness Brand Excellence",
    services: ["Marketing Strategy", "Event Staffing", "Promotional Engagements"],
    category: "Wellness",
    heroImage: "/images/case-studies/beer-samplings.jpg",
    galleryImages: []
  },
  {
    id: "solar-company",
    name: "Solar Company",
    tagline: "Sustainable Energy Solutions",
    services: ["Solar Energy Solution Implementation", "Sustainability Consultation", "Community Engagement"],
    googleDriveUrl: "https://drive.google.com/drive/folders/1lbEFlRPldB20jOdu8dYAmCTu9GsTWUsI?usp=sharing",
    category: "Energy",
    heroImage: null,
    galleryImages: [
      "/images/case-studies/solar-company.jpg",
      "/images/case-studies/solar-company.jpg",
      "/images/case-studies/solar-company.jpg"
    ]
  },
  {
    id: "sun-club-golf",
    name: "The Sun Club Golf",
    tagline: "Golf Community Excellence",
    services: ["Community Engagement Strategies", "Brand Awareness Campaigns", "Marketing Activation"],
    category: "Sports",
    heroImage: "/images/case-studies/williams-racing.jpg",
    galleryImages: []
  },
  {
    id: "qwuick",
    name: "Qwuick",
    tagline: "Digital Innovation",
    services: ["Digital Strategy Development", "User Engagement Solutions", "Brand Visibility Enhancement"],
    googleDriveUrl: "https://drive.google.com/drive/folders/1pnMMxwibwuQvjngy0kbQ-AIwVPexB-uM?usp=share_link",
    category: "Tech",
    heroImage: "/images/case-studies/qwick.jpg",
    galleryImages: []
  }
];

// Function to get all case studies
export function getAllCaseStudies() {
  // Combine main case studies with additional ones
  const allStudies = [...portfolioCaseStudies];

  // Add additional studies with generated stats
  additionalCaseStudies.forEach(study => {
    allStudies.push({
      ...study,
      description: study.description || `Air Fresh Marketing executed a successful ${study.services?.[0] || 'activation'} campaign for ${study.name}. Our team delivered exceptional results across ${study.markets?.join(', ') || 'key markets'}.`,
      industry: study.industry || "Various",
      stats: study.stats || {
        reach: "10,000+",
        engagement: "85%",
        satisfaction: "95%",
        roi: "3.5x"
      },
      featured: false
    } as any);
  });

  return allStudies;
}

// API endpoint handler
export function handlePortfolioCaseStudies(req: Request, res: Response) {
  try {
    const caseStudies = getAllCaseStudies();
    res.json({
      success: true,
      data: caseStudies,
      total: caseStudies.length
    });
  } catch (error) {
    console.error('Error fetching portfolio case studies:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch case studies'
    });
  }
}

// Get single case study by ID
export function getCaseStudyById(id: string) {
  const allStudies = getAllCaseStudies();
  return allStudies.find(study => study.id === id);
}

// API endpoint for single case study
export function handleSingleCaseStudy(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const caseStudy = getCaseStudyById(id);

    if (!caseStudy) {
      return res.status(404).json({
        success: false,
        error: 'Case study not found'
      });
    }

    res.json({
      success: true,
      data: caseStudy
    });
  } catch (error) {
    console.error('Error fetching case study:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch case study'
    });
  }
}