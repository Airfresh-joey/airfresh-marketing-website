// City data for Google My Business expansion
export interface CityLocation {
  storeCode: string;
  businessName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  latitude: number;
  longitude: number;
  primaryCategory: string;
  additionalCategories: string[];
  website: string;
  description: string;
  openingHours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  services: string[];
  serviceAreas: string[];
  attributes: string[];
  photos: string[];
  localUpdates: string[];
}

export const cityLocations: CityLocation[] = [
  {
    storeCode: "AIRFRESH-NYC",
    businessName: "AirFresh Marketing - New York City",
    address: "350 5th Ave, Floor 77",
    city: "New York",
    state: "NY",
    zip: "10118",
    phone: "(212) 555-0100",
    latitude: 40.7484,
    longitude: -73.9857,
    primaryCategory: "Marketing Agency",
    additionalCategories: ["Event Management Company", "Advertising Agency", "Brand Marketing Consultant"],
    website: "https://airfreshmarketing.com/city/new-york",
    description: "AirFresh Marketing New York specializes in experiential marketing, brand activations, and event staffing throughout NYC and the tri-state area. We create unforgettable brand experiences in Times Square, Brooklyn, Manhattan, and beyond.",
    openingHours: {
      monday: "09:00-18:00",
      tuesday: "09:00-18:00",
      wednesday: "09:00-18:00",
      thursday: "09:00-18:00",
      friday: "09:00-18:00",
      saturday: "Closed",
      sunday: "Closed"
    },
    services: [
      "Experiential Marketing",
      "Brand Ambassadors",
      "Event Staffing",
      "Product Sampling",
      "Pop-up Events",
      "Guerrilla Marketing",
      "Trade Show Marketing",
      "Corporate Events"
    ],
    serviceAreas: ["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island", "Long Island", "New Jersey", "Connecticut"],
    attributes: ["Identifies as women-owned", "Online appointments", "On-site services available"],
    photos: [
      "nyc-times-square-activation.jpg",
      "brooklyn-pop-up-event.jpg",
      "manhattan-brand-ambassadors.jpg",
      "nyc-corporate-event.jpg"
    ],
    localUpdates: [
      "Successfully launched 50+ brand activations in Times Square this year",
      "Now offering same-day event staffing for NYC emergencies",
      "Expanded team to 200+ trained brand ambassadors in the NYC metro area"
    ]
  },
  {
    storeCode: "AIRFRESH-MIA",
    businessName: "AirFresh Marketing - Miami",
    address: "1001 Brickell Bay Dr, Suite 2700",
    city: "Miami",
    state: "FL",
    zip: "33131",
    phone: "(305) 555-0200",
    latitude: 25.7617,
    longitude: -80.1918,
    primaryCategory: "Marketing Agency",
    additionalCategories: ["Event Management Company", "Advertising Agency", "Brand Marketing Consultant"],
    website: "https://airfreshmarketing.com/city/miami",
    description: "AirFresh Marketing Miami delivers innovative experiential marketing and brand activations throughout South Florida. From South Beach to Wynwood, we create memorable brand experiences that resonate with Miami's diverse audience.",
    openingHours: {
      monday: "09:00-18:00",
      tuesday: "09:00-18:00",
      wednesday: "09:00-18:00",
      thursday: "09:00-18:00",
      friday: "09:00-18:00",
      saturday: "Closed",
      sunday: "Closed"
    },
    services: [
      "Beach Activations",
      "Festival Marketing",
      "Brand Ambassadors",
      "Product Sampling",
      "Nightlife Marketing",
      "Sports Marketing",
      "Art Basel Events",
      "Latin Market Campaigns"
    ],
    serviceAreas: ["Miami Beach", "Downtown Miami", "Coral Gables", "Aventura", "Fort Lauderdale", "West Palm Beach", "Boca Raton", "Keys"],
    attributes: ["Identifies as women-owned", "Online appointments", "On-site services available", "Spanish-speaking staff"],
    photos: [
      "miami-beach-activation.jpg",
      "wynwood-street-marketing.jpg",
      "art-basel-brand-event.jpg",
      "miami-festival-staffing.jpg"
    ],
    localUpdates: [
      "Premier partner for Art Basel Miami Beach 2025",
      "Launched bilingual brand ambassador program",
      "Expanded beach activation services for spring break season"
    ]
  },
  {
    storeCode: "AIRFRESH-LA",
    businessName: "AirFresh Marketing - Los Angeles",
    address: "10250 Constellation Blvd, Suite 100",
    city: "Los Angeles",
    state: "CA",
    zip: "90067",
    phone: "(310) 555-0300",
    latitude: 34.0522,
    longitude: -118.2437,
    primaryCategory: "Marketing Agency",
    additionalCategories: ["Event Management Company", "Entertainment Marketing", "Brand Marketing Consultant"],
    website: "https://airfreshmarketing.com/city/los-angeles",
    description: "AirFresh Marketing Los Angeles specializes in entertainment industry marketing, celebrity events, and brand activations throughout LA County. From Hollywood to Santa Monica, we create star-studded brand experiences.",
    openingHours: {
      monday: "09:00-18:00",
      tuesday: "09:00-18:00",
      wednesday: "09:00-18:00",
      thursday: "09:00-18:00",
      friday: "09:00-18:00",
      saturday: "Closed",
      sunday: "Closed"
    },
    services: [
      "Celebrity Events",
      "Film Premiere Marketing",
      "Influencer Activations",
      "Beach Marketing",
      "Festival Staffing",
      "Hollywood Events",
      "Product Launches",
      "Entertainment Marketing"
    ],
    serviceAreas: ["Hollywood", "Beverly Hills", "Santa Monica", "Venice Beach", "Downtown LA", "Pasadena", "Orange County", "Malibu"],
    attributes: ["Identifies as women-owned", "Online appointments", "Celebrity partnerships", "Film industry expertise"],
    photos: [
      "hollywood-premiere-event.jpg",
      "santa-monica-beach-activation.jpg",
      "beverly-hills-luxury-event.jpg",
      "la-influencer-campaign.jpg"
    ],
    localUpdates: [
      "Official marketing partner for major Hollywood studios",
      "Launched influencer ambassador program with 500+ creators",
      "Expanded services to include virtual production events"
    ]
  },
  {
    storeCode: "AIRFRESH-CHI",
    businessName: "AirFresh Marketing - Chicago",
    address: "233 S Wacker Dr, Suite 8400",
    city: "Chicago",
    state: "IL",
    zip: "60606",
    phone: "(312) 555-0400",
    latitude: 41.8781,
    longitude: -87.6298,
    primaryCategory: "Marketing Agency",
    additionalCategories: ["Event Management Company", "Trade Show Marketing", "Brand Marketing Consultant"],
    website: "https://airfreshmarketing.com/city/chicago",
    description: "AirFresh Marketing Chicago delivers experiential marketing and brand activations throughout the Midwest. From Navy Pier to Millennium Park, we create engaging brand experiences that connect with Chicago's diverse communities.",
    openingHours: {
      monday: "09:00-18:00",
      tuesday: "09:00-18:00",
      wednesday: "09:00-18:00",
      thursday: "09:00-18:00",
      friday: "09:00-18:00",
      saturday: "Closed",
      sunday: "Closed"
    },
    services: [
      "Trade Show Marketing",
      "Convention Staffing",
      "Street Team Marketing",
      "Sports Marketing",
      "Festival Activations",
      "Corporate Events",
      "Product Sampling",
      "Retail Promotions"
    ],
    serviceAreas: ["Loop", "River North", "Lincoln Park", "Wicker Park", "Gold Coast", "Milwaukee", "Indianapolis", "Detroit"],
    attributes: ["Identifies as women-owned", "Online appointments", "Convention expertise", "Winter event specialists"],
    photos: [
      "chicago-navy-pier-activation.jpg",
      "millennium-park-brand-event.jpg",
      "mccormick-place-trade-show.jpg",
      "chicago-street-team.jpg"
    ],
    localUpdates: [
      "Preferred vendor for McCormick Place conventions",
      "Launched cold-weather activation team for winter events",
      "Expanded Midwest coverage to 6 additional cities"
    ]
  },
  {
    storeCode: "AIRFRESH-ATL",
    businessName: "AirFresh Marketing - Atlanta",
    address: "3340 Peachtree Rd NE, Suite 1800",
    city: "Atlanta",
    state: "GA",
    zip: "30326",
    phone: "(404) 555-0500",
    latitude: 33.7490,
    longitude: -84.3880,
    primaryCategory: "Marketing Agency",
    additionalCategories: ["Event Management Company", "Sports Marketing Agency", "Brand Marketing Consultant"],
    website: "https://airfreshmarketing.com/city/atlanta",
    description: "AirFresh Marketing Atlanta specializes in experiential marketing and brand activations throughout the Southeast. From Midtown to Buckhead, we create impactful brand experiences that resonate with Atlanta's dynamic market.",
    openingHours: {
      monday: "09:00-18:00",
      tuesday: "09:00-18:00",
      wednesday: "09:00-18:00",
      thursday: "09:00-18:00",
      friday: "09:00-18:00",
      saturday: "Closed",
      sunday: "Closed"
    },
    services: [
      "Sports Marketing",
      "Music Festival Marketing",
      "College Campus Marketing",
      "Brand Ambassadors",
      "Corporate Events",
      "Product Launches",
      "Community Activations",
      "Influencer Events"
    ],
    serviceAreas: ["Buckhead", "Midtown", "Downtown", "Decatur", "Sandy Springs", "Marietta", "Athens", "Savannah"],
    attributes: ["Identifies as women-owned", "Online appointments", "College marketing expertise", "Music industry connections"],
    photos: [
      "atlanta-music-festival.jpg",
      "georgia-tech-campus-activation.jpg",
      "buckhead-luxury-event.jpg",
      "atlanta-sports-marketing.jpg"
    ],
    localUpdates: [
      "Official partner for Atlanta's major music festivals",
      "Expanded college marketing to 15 Southeast campuses",
      "Launched diversity-focused brand ambassador program"
    ]
  },
  {
    storeCode: "AIRFRESH-DEN",
    businessName: "AirFresh Marketing - Denver HQ",
    address: "1580 N. Logan St. Suite 660",
    city: "Denver",
    state: "CO",
    zip: "80203",
    phone: "(303) 720-6060",
    latitude: 39.7392,
    longitude: -104.9903,
    primaryCategory: "Marketing Agency",
    additionalCategories: ["Event Management Company", "Outdoor Marketing Specialist", "Brand Marketing Consultant"],
    website: "https://airfreshmarketing.com/city/denver",
    description: "AirFresh Marketing headquarters in Denver leads nationwide experiential marketing campaigns. We specialize in outdoor brand activations, ski resort marketing, and craft beverage promotions throughout Colorado.",
    openingHours: {
      monday: "09:00-18:00",
      tuesday: "09:00-18:00",
      wednesday: "09:00-18:00",
      thursday: "09:00-18:00",
      friday: "09:00-18:00",
      saturday: "Closed",
      sunday: "Closed"
    },
    services: [
      "Outdoor Brand Activations",
      "Ski Resort Marketing",
      "Craft Beer Promotions",
      "Cannabis Marketing",
      "Festival Marketing",
      "Adventure Sports Events",
      "Sustainability Campaigns",
      "Tech Startup Launches"
    ],
    serviceAreas: ["Denver Metro", "Boulder", "Aurora", "Littleton", "Aspen", "Vail", "Colorado Springs", "Fort Collins"],
    attributes: ["Identifies as women-owned", "Headquarters location", "Sustainability focus", "Outdoor expertise"],
    photos: [
      "denver-red-rocks-activation.jpg",
      "vail-ski-resort-event.jpg",
      "boulder-outdoor-campaign.jpg",
      "denver-craft-beer-festival.jpg"
    ],
    localUpdates: [
      "Celebrating 20 years of experiential marketing excellence",
      "Launched sustainable event practices initiative",
      "Expanded mountain resort marketing services"
    ]
  },
  {
    storeCode: "AIRFRESH-SF",
    businessName: "AirFresh Marketing - San Francisco",
    address: "555 California St, Suite 4925",
    city: "San Francisco",
    state: "CA",
    zip: "94104",
    phone: "(415) 555-0700",
    latitude: 37.7749,
    longitude: -122.4194,
    primaryCategory: "Marketing Agency",
    additionalCategories: ["Tech Marketing Agency", "Event Management Company", "Brand Marketing Consultant"],
    website: "https://airfreshmarketing.com/city/san-francisco",
    description: "AirFresh Marketing San Francisco specializes in tech industry marketing, startup launches, and innovative brand activations throughout the Bay Area. From Union Square to Silicon Valley, we create cutting-edge brand experiences.",
    openingHours: {
      monday: "09:00-18:00",
      tuesday: "09:00-18:00",
      wednesday: "09:00-18:00",
      thursday: "09:00-18:00",
      friday: "09:00-18:00",
      saturday: "Closed",
      sunday: "Closed"
    },
    services: [
      "Tech Product Launches",
      "Startup Marketing",
      "Developer Events",
      "Conference Marketing",
      "Innovation Showcases",
      "VR/AR Experiences",
      "Sustainability Events",
      "Food Tech Promotions"
    ],
    serviceAreas: ["Financial District", "SOMA", "Mission", "Oakland", "Berkeley", "San Jose", "Palo Alto", "Mountain View"],
    attributes: ["Identifies as women-owned", "Tech industry expertise", "Innovation focus", "Startup specialists"],
    photos: [
      "sf-tech-conference.jpg",
      "silicon-valley-launch.jpg",
      "golden-gate-activation.jpg",
      "bay-area-startup-event.jpg"
    ],
    localUpdates: [
      "Preferred partner for major tech conferences",
      "Launched AR/VR experiential marketing division",
      "Expanded Silicon Valley presence with new team"
    ]
  },
  {
    storeCode: "AIRFRESH-BOS",
    businessName: "AirFresh Marketing - Boston",
    address: "200 State St, Floor 15",
    city: "Boston",
    state: "MA",
    zip: "02109",
    phone: "(617) 555-0800",
    latitude: 42.3601,
    longitude: -71.0589,
    primaryCategory: "Marketing Agency",
    additionalCategories: ["Event Management Company", "College Marketing Specialist", "Brand Marketing Consultant"],
    website: "https://airfreshmarketing.com/city/boston",
    description: "AirFresh Marketing Boston delivers experiential marketing and brand activations throughout New England. From Fenway to Harvard Square, we create memorable brand experiences that connect with Boston's educated and diverse audience.",
    openingHours: {
      monday: "09:00-18:00",
      tuesday: "09:00-18:00",
      wednesday: "09:00-18:00",
      thursday: "09:00-18:00",
      friday: "09:00-18:00",
      saturday: "Closed",
      sunday: "Closed"
    },
    services: [
      "College Campus Marketing",
      "Sports Fan Engagement",
      "Healthcare Marketing",
      "Biotech Events",
      "Historical Tours Marketing",
      "Marathon Sponsorships",
      "Academic Conferences",
      "Innovation Events"
    ],
    serviceAreas: ["Downtown", "Back Bay", "Cambridge", "Somerville", "Brookline", "Providence", "Worcester", "New Hampshire"],
    attributes: ["Identifies as women-owned", "College marketing expertise", "Healthcare focus", "Sports marketing"],
    photos: [
      "boston-fenway-activation.jpg",
      "harvard-campus-event.jpg",
      "boston-marathon-sponsorship.jpg",
      "cambridge-tech-launch.jpg"
    ],
    localUpdates: [
      "Official partner for Boston Marathon brand activations",
      "Expanded college network to 30+ New England schools",
      "Launched healthcare marketing division"
    ]
  },
  {
    storeCode: "AIRFRESH-DAL",
    businessName: "AirFresh Marketing - Dallas",
    address: "1717 Main St, Suite 3700",
    city: "Dallas",
    state: "TX",
    zip: "75201",
    phone: "(214) 555-0900",
    latitude: 32.7767,
    longitude: -96.7970,
    primaryCategory: "Marketing Agency",
    additionalCategories: ["Event Management Company", "Sports Marketing Agency", "Brand Marketing Consultant"],
    website: "https://airfreshmarketing.com/city/dallas",
    description: "AirFresh Marketing Dallas specializes in experiential marketing and brand activations throughout Texas. From Deep Ellum to Uptown, we create big brand experiences that match the Texas-sized market opportunity.",
    openingHours: {
      monday: "09:00-18:00",
      tuesday: "09:00-18:00",
      wednesday: "09:00-18:00",
      thursday: "09:00-18:00",
      friday: "09:00-18:00",
      saturday: "Closed",
      sunday: "Closed"
    },
    services: [
      "Sports Marketing",
      "Rodeo Events",
      "Oil & Gas Events",
      "Country Music Festivals",
      "Corporate Events",
      "State Fair Marketing",
      "BBQ Festival Promotions",
      "Retail Activations"
    ],
    serviceAreas: ["Downtown Dallas", "Uptown", "Fort Worth", "Arlington", "Plano", "Frisco", "Austin", "Houston"],
    attributes: ["Identifies as women-owned", "Large-scale event expertise", "Texas market specialists", "Bilingual services"],
    photos: [
      "dallas-state-fair.jpg",
      "fort-worth-rodeo-event.jpg",
      "uptown-corporate-activation.jpg",
      "texas-stadium-marketing.jpg"
    ],
    localUpdates: [
      "Official marketing partner for State Fair of Texas",
      "Expanded services to Austin and Houston markets",
      "Launched Texas-sized activation fleet with custom vehicles"
    ]
  },
  {
    storeCode: "AIRFRESH-SEA",
    businessName: "AirFresh Marketing - Seattle",
    address: "1201 3rd Ave, Suite 2200",
    city: "Seattle",
    state: "WA",
    zip: "98101",
    phone: "(206) 555-1000",
    latitude: 47.6062,
    longitude: -122.3321,
    primaryCategory: "Marketing Agency",
    additionalCategories: ["Event Management Company", "Tech Marketing Agency", "Brand Marketing Consultant"],
    website: "https://airfreshmarketing.com/city/seattle",
    description: "AirFresh Marketing Seattle delivers innovative experiential marketing throughout the Pacific Northwest. From Pike Place to Capitol Hill, we create authentic brand experiences that resonate with Seattle's progressive market.",
    openingHours: {
      monday: "09:00-18:00",
      tuesday: "09:00-18:00",
      wednesday: "09:00-18:00",
      thursday: "09:00-18:00",
      friday: "09:00-18:00",
      saturday: "Closed",
      sunday: "Closed"
    },
    services: [
      "Coffee Shop Marketing",
      "Tech Company Events",
      "Outdoor Brand Activations",
      "Music Festival Marketing",
      "Sustainability Campaigns",
      "Gaming Events",
      "Farmers Market Promotions",
      "Maritime Events"
    ],
    serviceAreas: ["Downtown", "Capitol Hill", "Fremont", "Ballard", "Bellevue", "Tacoma", "Portland", "Vancouver BC"],
    attributes: ["Identifies as women-owned", "Sustainability focus", "Coffee culture expertise", "Tech industry connections"],
    photos: [
      "seattle-pike-place-activation.jpg",
      "capitol-hill-street-event.jpg",
      "seattle-tech-launch.jpg",
      "puget-sound-outdoor-campaign.jpg"
    ],
    localUpdates: [
      "Launched sustainable event practices certification",
      "Expanded Pacific Northwest coverage to Portland",
      "Official partner for Seattle's major music festivals"
    ]
  }
];

// Import cities data
import { cities as citiesData, CityData } from './cities-data';

// Helper function to create a CityLocation from CityData
function createCityLocationFromData(cityData: CityData): CityLocation {
  const stateAbbreviation = getStateAbbreviation(cityData.state);
  return {
    storeCode: `AIRFRESH-${cityData.slug.toUpperCase()}`,
    businessName: `AirFresh Marketing - ${cityData.city}`,
    address: "Contact for local address",
    city: cityData.city,
    state: stateAbbreviation,
    zip: "00000",
    phone: "(303) 720-6060",
    latitude: cityData.coordinates?.lat || 0,
    longitude: cityData.coordinates?.lng || 0,
    primaryCategory: "Marketing Agency",
    additionalCategories: ["Event Management Company", "Brand Marketing Consultant", "Advertising Agency"],
    website: `https://airfreshmarketing.com/city/${cityData.slug}`,
    description: `AirFresh Marketing ${cityData.city} specializes in experiential marketing, brand activations, and event staffing throughout ${cityData.city} and the surrounding area. We create unforgettable brand experiences tailored to the local market.`,
    openingHours: {
      monday: "09:00-18:00",
      tuesday: "09:00-18:00",
      wednesday: "09:00-18:00",
      thursday: "09:00-18:00",
      friday: "09:00-18:00",
      saturday: "Closed",
      sunday: "Closed"
    },
    services: [
      "Brand Activations",
      "Experiential Marketing",
      "Event Staffing",
      "Product Launches",
      "Corporate Events",
      "Promotional Campaigns",
      "Pop-up Experiences",
      "Street Marketing"
    ],
    serviceAreas: [`${cityData.city} Metro Area`],
    attributes: ["Identifies as women-owned", "Local market expertise", "Full-service agency"],
    photos: [],
    localUpdates: [
      `Serving ${cityData.city} with innovative experiential marketing`,
      "Over 20 years of brand activation experience",
      "Trusted by 300+ national brands"
    ]
  };
}

// Helper function to get state abbreviation
function getStateAbbreviation(stateName: string): string {
  const stateAbbreviations: { [key: string]: string } = {
    "Alabama": "AL", "Alaska": "AK", "Arizona": "AZ", "Arkansas": "AR", "California": "CA",
    "Colorado": "CO", "Connecticut": "CT", "Delaware": "DE", "Florida": "FL", "Georgia": "GA",
    "Hawaii": "HI", "Idaho": "ID", "Illinois": "IL", "Indiana": "IN", "Iowa": "IA",
    "Kansas": "KS", "Kentucky": "KY", "Louisiana": "LA", "Maine": "ME", "Maryland": "MD",
    "Massachusetts": "MA", "Michigan": "MI", "Minnesota": "MN", "Mississippi": "MS", "Missouri": "MO",
    "Montana": "MT", "Nebraska": "NE", "Nevada": "NV", "New Hampshire": "NH", "New Jersey": "NJ",
    "New Mexico": "NM", "New York": "NY", "North Carolina": "NC", "North Dakota": "ND", "Ohio": "OH",
    "Oklahoma": "OK", "Oregon": "OR", "Pennsylvania": "PA", "Rhode Island": "RI", "South Carolina": "SC",
    "South Dakota": "SD", "Tennessee": "TN", "Texas": "TX", "Utah": "UT", "Vermont": "VT",
    "Virginia": "VA", "Washington": "WA", "West Virginia": "WV", "Wisconsin": "WI", "Wyoming": "WY",
    "DC": "DC"
  };
  return stateAbbreviations[stateName] || stateName;
}

// Helper function to get city by name or slug
export function getCityByName(cityNameOrSlug: string): CityLocation | undefined {
  // First check if it's in our detailed city locations
  const detailedCity = cityLocations.find(city =>
    city.city.toLowerCase() === cityNameOrSlug.toLowerCase() ||
    city.city.toLowerCase().includes(cityNameOrSlug.toLowerCase()) ||
    city.city.toLowerCase().replace(/\s+/g, '-') === cityNameOrSlug.toLowerCase()
  );

  if (detailedCity) {
    return detailedCity;
  }

  // Then check the comprehensive cities data by slug or name
  const cityData = citiesData.find(city =>
    city.slug === cityNameOrSlug.toLowerCase() ||
    city.city.toLowerCase() === cityNameOrSlug.toLowerCase() ||
    city.city.toLowerCase().replace(/\s+/g, '-') === cityNameOrSlug.toLowerCase()
  );

  if (cityData) {
    return createCityLocationFromData(cityData);
  }

  return undefined;
}

// Helper function to get all cities
export function getAllCities(): CityLocation[] {
  // Combine detailed locations with generated locations from cities data
  const detailedCityNames = new Set(cityLocations.map(city => city.city.toLowerCase()));

  // Add cities from citiesData that aren't already in cityLocations
  const additionalCities = citiesData
    .filter(city => !detailedCityNames.has(city.city.toLowerCase()))
    .map(cityData => createCityLocationFromData(cityData));

  return [...cityLocations, ...additionalCities];
}

// Helper function to format phone for display
export function formatPhone(phone: string): string {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}