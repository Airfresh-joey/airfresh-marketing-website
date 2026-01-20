export interface CityData {
  city: string;
  state: string;
  slug: string;
  population?: string;
  marketSize?: string;
  industries?: string[];
  coordinates?: { lat: number; lng: number };
}

export const cities: CityData[] = [
  // Major Markets
  { city: "New York City", state: "New York", slug: "new-york-city", population: "8.3M", marketSize: "Large", industries: ["Finance", "Media", "Tech", "Fashion"], coordinates: { lat: 40.7128, lng: -74.0060 } },
  { city: "Los Angeles", state: "California", slug: "los-angeles", population: "4M", marketSize: "Large", industries: ["Entertainment", "Tech", "Fashion"], coordinates: { lat: 34.0522, lng: -118.2437 } },
  { city: "Chicago", state: "Illinois", slug: "chicago", population: "2.7M", marketSize: "Large", industries: ["Finance", "Manufacturing", "Tech"], coordinates: { lat: 41.8781, lng: -87.6298 } },
  { city: "Houston", state: "Texas", slug: "houston", population: "2.3M", marketSize: "Large", industries: ["Energy", "Healthcare", "Aerospace"], coordinates: { lat: 29.7604, lng: -95.3698 } },
  { city: "Phoenix", state: "Arizona", slug: "phoenix", population: "1.7M", marketSize: "Large", industries: ["Tech", "Real Estate", "Healthcare"], coordinates: { lat: 33.4484, lng: -112.0740 } },
  { city: "Philadelphia", state: "Pennsylvania", slug: "philadelphia", population: "1.6M", marketSize: "Large", industries: ["Healthcare", "Education", "Finance"], coordinates: { lat: 39.9526, lng: -75.1652 } },
  { city: "San Antonio", state: "Texas", slug: "san-antonio", population: "1.5M", marketSize: "Large", industries: ["Military", "Healthcare", "Tourism"], coordinates: { lat: 29.4241, lng: -98.4936 } },
  { city: "San Diego", state: "California", slug: "san-diego", population: "1.4M", marketSize: "Large", industries: ["Military", "Tourism", "Biotech"], coordinates: { lat: 32.7157, lng: -117.1611 } },
  { city: "Dallas", state: "Texas", slug: "dallas", population: "1.3M", marketSize: "Large", industries: ["Tech", "Finance", "Telecom"], coordinates: { lat: 32.7767, lng: -96.7970 } },
  { city: "San Jose", state: "California", slug: "san-jose", population: "1M", marketSize: "Large", industries: ["Tech", "Innovation", "Manufacturing"], coordinates: { lat: 37.3382, lng: -121.8863 } },

  // Medium Markets
  { city: "Austin", state: "Texas", slug: "austin", population: "995K", marketSize: "Medium", industries: ["Tech", "Music", "Startups"], coordinates: { lat: 30.2672, lng: -97.7431 } },
  { city: "Jacksonville", state: "Florida", slug: "jacksonville", population: "955K", marketSize: "Medium", industries: ["Finance", "Healthcare", "Logistics"], coordinates: { lat: 30.3322, lng: -81.6557 } },
  { city: "San Francisco", state: "California", slug: "san-francisco", population: "875K", marketSize: "Large", industries: ["Tech", "Finance", "Tourism"], coordinates: { lat: 37.7749, lng: -122.4194 } },
  { city: "Columbus", state: "Ohio", slug: "columbus", population: "905K", marketSize: "Medium", industries: ["Education", "Insurance", "Tech"], coordinates: { lat: 39.9612, lng: -82.9988 } },
  { city: "Charlotte", state: "North Carolina", slug: "charlotte", population: "885K", marketSize: "Medium", industries: ["Banking", "Energy", "NASCAR"], coordinates: { lat: 35.2271, lng: -80.8431 } },
  { city: "Indianapolis", state: "Indiana", slug: "indianapolis", population: "880K", marketSize: "Medium", industries: ["Healthcare", "Sports", "Manufacturing"], coordinates: { lat: 39.7684, lng: -86.1581 } },
  { city: "Seattle", state: "Washington", slug: "seattle", population: "760K", marketSize: "Large", industries: ["Tech", "Aerospace", "Coffee"], coordinates: { lat: 47.6062, lng: -122.3321 } },
  { city: "Denver", state: "Colorado", slug: "denver", population: "735K", marketSize: "Medium", industries: ["Energy", "Tech", "Aerospace"], coordinates: { lat: 39.7392, lng: -104.9903 } },
  { city: "Boston", state: "Massachusetts", slug: "boston", population: "695K", marketSize: "Large", industries: ["Education", "Healthcare", "Finance"], coordinates: { lat: 42.3601, lng: -71.0589 } },
  { city: "Nashville", state: "Tennessee", slug: "nashville", population: "695K", marketSize: "Medium", industries: ["Music", "Healthcare", "Tourism"], coordinates: { lat: 36.1627, lng: -86.7816 } },

  // Additional Cities
  { city: "Detroit", state: "Michigan", slug: "detroit", population: "640K", marketSize: "Medium", industries: ["Automotive", "Manufacturing", "Tech"] },
  { city: "Memphis", state: "Tennessee", slug: "memphis", population: "630K", marketSize: "Medium", industries: ["Logistics", "Healthcare", "Music"] },
  { city: "Portland", state: "Oregon", slug: "portland", population: "655K", marketSize: "Medium", industries: ["Tech", "Manufacturing", "Green Energy"] },
  { city: "Las Vegas", state: "Nevada", slug: "las-vegas", population: "650K", marketSize: "Medium", industries: ["Tourism", "Entertainment", "Hospitality"] },
  { city: "Baltimore", state: "Maryland", slug: "baltimore", population: "585K", marketSize: "Medium", industries: ["Healthcare", "Biotech", "Cybersecurity"] },
  { city: "Milwaukee", state: "Wisconsin", slug: "milwaukee", population: "570K", marketSize: "Medium", industries: ["Manufacturing", "Healthcare", "Finance"] },
  { city: "Albuquerque", state: "New Mexico", slug: "albuquerque", population: "565K", marketSize: "Small", industries: ["Government", "Tech", "Film"] },
  { city: "Fresno", state: "California", slug: "fresno", population: "545K", marketSize: "Small", industries: ["Agriculture", "Healthcare", "Education"] },
  { city: "Sacramento", state: "California", slug: "sacramento", population: "525K", marketSize: "Medium", industries: ["Government", "Healthcare", "Tech"] },
  { city: "Mesa", state: "Arizona", slug: "mesa", population: "510K", marketSize: "Medium", industries: ["Tech", "Healthcare", "Aerospace"] },
  { city: "Kansas City", state: "Missouri", slug: "kansas-city", population: "510K", marketSize: "Medium", industries: ["Tech", "Healthcare", "Logistics"] },
  { city: "Atlanta", state: "Georgia", slug: "atlanta", population: "510K", marketSize: "Large", industries: ["Film", "Tech", "Logistics"] },
  { city: "Omaha", state: "Nebraska", slug: "omaha", population: "490K", marketSize: "Small", industries: ["Finance", "Healthcare", "Agriculture"] },
  { city: "Raleigh", state: "North Carolina", slug: "raleigh", population: "475K", marketSize: "Medium", industries: ["Tech", "Biotech", "Education"] },
  { city: "Long Beach", state: "California", slug: "long-beach", population: "465K", marketSize: "Large", industries: ["Shipping", "Healthcare", "Aerospace"] },
  { city: "Miami", state: "Florida", slug: "miami", population: "455K", marketSize: "Large", industries: ["Finance", "Tourism", "Real Estate"] },
  { city: "Oakland", state: "California", slug: "oakland", population: "435K", marketSize: "Large", industries: ["Shipping", "Tech", "Healthcare"] },
  { city: "Minneapolis", state: "Minnesota", slug: "minneapolis", population: "430K", marketSize: "Medium", industries: ["Finance", "Healthcare", "Retail"] },
  { city: "Cincinnati", state: "Ohio", slug: "cincinnati", population: "310K", marketSize: "Medium", industries: ["Finance", "Healthcare", "Manufacturing"] },
  { city: "Cleveland", state: "Ohio", slug: "cleveland", population: "375K", marketSize: "Medium", industries: ["Healthcare", "Manufacturing", "Finance"] },
  { city: "Oklahoma City", state: "Oklahoma", slug: "oklahoma-city", population: "700K", marketSize: "Medium", industries: ["Energy", "Aerospace", "Healthcare"] },
  { city: "Orlando", state: "Florida", slug: "orlando", population: "310K", marketSize: "Medium", industries: ["Tourism", "Tech", "Healthcare"] },
  { city: "Pittsburgh", state: "Pennsylvania", slug: "pittsburgh", population: "300K", marketSize: "Medium", industries: ["Healthcare", "Education", "Tech"] },
  { city: "New Orleans", state: "Louisiana", slug: "new-orleans", population: "385K", marketSize: "Medium", industries: ["Tourism", "Energy", "Shipping"] },
  { city: "Buffalo", state: "New York", slug: "buffalo", population: "280K", marketSize: "Small", industries: ["Healthcare", "Education", "Manufacturing"] },
  { city: "Saint Paul", state: "Minnesota", slug: "saint-paul", population: "310K", marketSize: "Medium", industries: ["Government", "Healthcare", "Education"] },
  { city: "Louisville", state: "Kentucky", slug: "louisville", population: "630K", marketSize: "Medium", industries: ["Healthcare", "Logistics", "Manufacturing"] },
  { city: "Richmond", state: "Virginia", slug: "richmond", population: "235K", marketSize: "Small", industries: ["Finance", "Government", "Healthcare"] },
  { city: "Salt Lake City", state: "Utah", slug: "salt-lake-city", population: "200K", marketSize: "Medium", industries: ["Tech", "Finance", "Healthcare"] },
  { city: "Spokane", state: "Washington", slug: "spokane", population: "230K", marketSize: "Small", industries: ["Healthcare", "Education", "Manufacturing"] },

  // Additional Cities from Sitemap
  { city: "Anchorage", state: "Alaska", slug: "anchorage", population: "285K", marketSize: "Small", industries: ["Oil & Gas", "Tourism", "Transportation"] },
  { city: "Arlington", state: "Texas", slug: "arlington", population: "395K", marketSize: "Medium", industries: ["Entertainment", "Manufacturing", "Education"] },
  { city: "Augusta", state: "Georgia", slug: "augusta", population: "200K", marketSize: "Small", industries: ["Healthcare", "Military", "Manufacturing"] },
  { city: "Aurora", state: "Colorado", slug: "aurora", population: "385K", marketSize: "Medium", industries: ["Healthcare", "Aerospace", "Defense"] },
  { city: "Bakersfield", state: "California", slug: "bakersfield", population: "385K", marketSize: "Small", industries: ["Oil & Gas", "Agriculture", "Logistics"] },
  { city: "Baton Rouge", state: "Louisiana", slug: "baton-rouge", population: "225K", marketSize: "Small", industries: ["Petrochemicals", "Government", "Healthcare"] },
  { city: "Boise", state: "Idaho", slug: "boise", population: "235K", marketSize: "Small", industries: ["Tech", "Healthcare", "Manufacturing"] },
  { city: "Bridgeport", state: "Connecticut", slug: "bridgeport", population: "145K", marketSize: "Small", industries: ["Finance", "Healthcare", "Manufacturing"] },
  { city: "Chandler", state: "Arizona", slug: "chandler", population: "280K", marketSize: "Medium", industries: ["Tech", "Finance", "Healthcare"] },
  { city: "Charleston", state: "South Carolina", slug: "charleston", population: "155K", marketSize: "Small", industries: ["Tourism", "Shipping", "Tech"] },
  { city: "Chesapeake", state: "Virginia", slug: "chesapeake", population: "250K", marketSize: "Small", industries: ["Agriculture", "Manufacturing", "Healthcare"] },
  { city: "Colorado Springs", state: "Colorado", slug: "colorado-springs", population: "500K", marketSize: "Medium", industries: ["Military", "Tech", "Tourism"] },
  { city: "Corpus Christi", state: "Texas", slug: "corpus-christi", population: "320K", marketSize: "Small", industries: ["Energy", "Shipping", "Tourism"] },
  { city: "Durham", state: "North Carolina", slug: "durham", population: "285K", marketSize: "Medium", industries: ["Healthcare", "Tech", "Education"] },
  { city: "El Paso", state: "Texas", slug: "el-paso", population: "680K", marketSize: "Medium", industries: ["Military", "Healthcare", "Manufacturing"] },
  { city: "Garland", state: "Texas", slug: "garland", population: "245K", marketSize: "Medium", industries: ["Manufacturing", "Tech", "Healthcare"] },
  { city: "Gilbert", state: "Arizona", slug: "gilbert", population: "270K", marketSize: "Medium", industries: ["Tech", "Healthcare", "Education"] },
  { city: "Glendale", state: "Arizona", slug: "glendale", population: "250K", marketSize: "Medium", industries: ["Sports", "Retail", "Healthcare"] },
  { city: "Greensboro", state: "North Carolina", slug: "greensboro", population: "300K", marketSize: "Small", industries: ["Manufacturing", "Finance", "Education"] },
  { city: "Henderson", state: "Nevada", slug: "henderson", population: "320K", marketSize: "Medium", industries: ["Healthcare", "Tech", "Retail"] },
  { city: "Hialeah", state: "Florida", slug: "hialeah", population: "225K", marketSize: "Large", industries: ["Healthcare", "Retail", "Manufacturing"] },
  { city: "Honolulu", state: "Hawaii", slug: "honolulu", population: "345K", marketSize: "Medium", industries: ["Tourism", "Military", "Healthcare"] },
  { city: "Irvine", state: "California", slug: "irvine", population: "310K", marketSize: "Large", industries: ["Tech", "Healthcare", "Finance"] },
  { city: "Jersey City", state: "New Jersey", slug: "jersey-city", population: "285K", marketSize: "Large", industries: ["Finance", "Tech", "Real Estate"] },
  { city: "Lexington", state: "Kentucky", slug: "lexington", population: "325K", marketSize: "Small", industries: ["Healthcare", "Manufacturing", "Education"] },
  { city: "Lincoln", state: "Nebraska", slug: "lincoln", population: "295K", marketSize: "Small", industries: ["Government", "Education", "Healthcare"] },
  { city: "Little Rock", state: "Arkansas", slug: "little-rock", population: "200K", marketSize: "Small", industries: ["Government", "Healthcare", "Finance"] },
  { city: "Lubbock", state: "Texas", slug: "lubbock", population: "265K", marketSize: "Small", industries: ["Agriculture", "Education", "Healthcare"] },
  { city: "Madison", state: "Wisconsin", slug: "madison", population: "270K", marketSize: "Small", industries: ["Government", "Education", "Healthcare"] },
  { city: "Newark", state: "New Jersey", slug: "newark", population: "285K", marketSize: "Large", industries: ["Transportation", "Finance", "Healthcare"] },
  { city: "North Las Vegas", state: "Nevada", slug: "north-las-vegas", population: "275K", marketSize: "Medium", industries: ["Logistics", "Manufacturing", "Retail"] },
  { city: "Plano", state: "Texas", slug: "plano", population: "290K", marketSize: "Large", industries: ["Tech", "Finance", "Healthcare"] },
  { city: "Reno", state: "Nevada", slug: "reno", population: "265K", marketSize: "Small", industries: ["Gaming", "Tech", "Logistics"] },
  { city: "Riverside", state: "California", slug: "riverside", population: "330K", marketSize: "Large", industries: ["Healthcare", "Education", "Logistics"] },
  { city: "Santa Ana", state: "California", slug: "santa-ana", population: "310K", marketSize: "Large", industries: ["Healthcare", "Manufacturing", "Retail"] },
  { city: "Scottsdale", state: "Arizona", slug: "scottsdale", population: "265K", marketSize: "Medium", industries: ["Tourism", "Healthcare", "Tech"] },

  // State Capitals and Smaller Markets
  { city: "Bismarck", state: "North Dakota", slug: "bismarck", population: "75K", marketSize: "Small", industries: ["Energy", "Government", "Healthcare"] },
  { city: "Cheyenne", state: "Wyoming", slug: "cheyenne", population: "65K", marketSize: "Small", industries: ["Government", "Energy", "Transportation"] },
  { city: "Concord", state: "New Hampshire", slug: "concord", population: "45K", marketSize: "Small", industries: ["Government", "Healthcare", "Education"] },
  { city: "Des Moines", state: "Iowa", slug: "des-moines", population: "215K", marketSize: "Small", industries: ["Insurance", "Finance", "Healthcare"] },
  { city: "Dover", state: "Delaware", slug: "dover", population: "40K", marketSize: "Small", industries: ["Government", "Military", "Healthcare"] },
  { city: "Helena", state: "Montana", slug: "helena", population: "35K", marketSize: "Small", industries: ["Government", "Healthcare", "Tourism"] },
  { city: "Jackson", state: "Mississippi", slug: "jackson", population: "150K", marketSize: "Small", industries: ["Government", "Healthcare", "Education"] },
  { city: "Juneau", state: "Alaska", slug: "juneau", population: "32K", marketSize: "Small", industries: ["Government", "Tourism", "Fishing"] },
  { city: "Montgomery", state: "Alabama", slug: "montgomery", population: "200K", marketSize: "Small", industries: ["Government", "Military", "Manufacturing"] },
  { city: "Montpelier", state: "Vermont", slug: "montpelier", population: "8K", marketSize: "Small", industries: ["Government", "Insurance", "Education"] },
  { city: "Pierre", state: "South Dakota", slug: "pierre", population: "14K", marketSize: "Small", industries: ["Government", "Healthcare", "Agriculture"] },
  { city: "Providence", state: "Rhode Island", slug: "providence", population: "185K", marketSize: "Small", industries: ["Healthcare", "Education", "Finance"] },
  { city: "Stockton", state: "California", slug: "stockton", population: "315K", marketSize: "Medium", industries: ["Agriculture", "Logistics", "Healthcare"] },
  { city: "St. Louis", state: "Missouri", slug: "st-louis", population: "300K", marketSize: "Medium", industries: ["Healthcare", "Finance", "Manufacturing"] },
  { city: "Tampa", state: "Florida", slug: "tampa", population: "400K", marketSize: "Medium", industries: ["Finance", "Healthcare", "Tourism"] },
  { city: "Toledo", state: "Ohio", slug: "toledo", population: "270K", marketSize: "Small", industries: ["Manufacturing", "Healthcare", "Education"] },
  { city: "Tucson", state: "Arizona", slug: "tucson", population: "545K", marketSize: "Medium", industries: ["Military", "Tech", "Tourism"] },
  { city: "Tulsa", state: "Oklahoma", slug: "tulsa", population: "415K", marketSize: "Small", industries: ["Energy", "Aerospace", "Healthcare"] },
  { city: "Virginia Beach", state: "Virginia", slug: "virginia-beach", population: "460K", marketSize: "Medium", industries: ["Military", "Tourism", "Agriculture"] },
  { city: "Washington", state: "DC", slug: "washington-dc", population: "705K", marketSize: "Large", industries: ["Government", "Tech", "Tourism"] },
  { city: "Wichita", state: "Kansas", slug: "wichita", population: "395K", marketSize: "Small", industries: ["Aerospace", "Healthcare", "Manufacturing"] },
  { city: "Winston-Salem", state: "North Carolina", slug: "winston-salem", population: "250K", marketSize: "Small", industries: ["Healthcare", "Finance", "Manufacturing"] }
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find(city => city.slug === slug.toLowerCase());
}

export function getAllCitySlugs(): string[] {
  return cities.map(city => city.slug);
}

export function getCitiesByState(state: string): CityData[] {
  return cities.filter(city => city.state.toLowerCase() === state.toLowerCase());
}

export function getCitiesByMarketSize(size: string): CityData[] {
  return cities.filter(city => city.marketSize?.toLowerCase() === size.toLowerCase());
}