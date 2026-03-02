// Neighborhood data for hyper-local SEO pages
// Targets searches like "brand ambassadors in SoHo" or "event staff DUMBO"

export interface Neighborhood {
  slug: string;
  name: string;
  city: string;
  citySlug: string;
  state: string;
  description: string;
  venues: string[];
  eventTypes: string[];
}

export const neighborhoods: Neighborhood[] = [
  // NEW YORK CITY
  {
    slug: "soho",
    name: "SoHo",
    city: "New York",
    citySlug: "new-york",
    state: "NY",
    description: "SoHo's cobblestone streets, luxury boutiques, and art galleries make it prime territory for high-end brand activations and pop-up experiences.",
    venues: ["Apple SoHo", "Bloomingdale's SoHo", "Various galleries"],
    eventTypes: ["Pop-up shops", "Fashion events", "Art activations", "Luxury sampling"]
  },
  {
    slug: "dumbo",
    name: "DUMBO",
    city: "New York",
    citySlug: "new-york",
    state: "NY",
    description: "DUMBO (Down Under the Manhattan Bridge Overpass) offers iconic Brooklyn views, creative spaces, and a tech-forward community perfect for innovative brand experiences.",
    venues: ["Brooklyn Bridge Park", "St. Ann's Warehouse", "Empire Stores"],
    eventTypes: ["Tech events", "Photo activations", "Outdoor experiences", "Corporate events"]
  },
  {
    slug: "williamsburg",
    name: "Williamsburg",
    city: "New York",
    citySlug: "new-york",
    state: "NY",
    description: "Williamsburg is Brooklyn's cultural epicenter, home to young creatives, trendy venues, and audiences that set trends for the rest of America.",
    venues: ["Brooklyn Bowl", "Music Hall of Williamsburg", "Domino Park"],
    eventTypes: ["Music events", "Brand launches", "Food & beverage", "Lifestyle activations"]
  },
  {
    slug: "midtown-manhattan",
    name: "Midtown Manhattan",
    city: "New York",
    citySlug: "new-york",
    state: "NY",
    description: "Midtown Manhattan is the commercial heart of NYC, home to Times Square, Rockefeller Center, and millions of daily commuters and tourists.",
    venues: ["Times Square", "Rockefeller Center", "Grand Central Terminal", "Bryant Park"],
    eventTypes: ["High-visibility activations", "Tourist marketing", "Corporate events", "Product launches"]
  },
  {
    slug: "chelsea",
    name: "Chelsea",
    city: "New York",
    citySlug: "new-york",
    state: "NY",
    description: "Chelsea's gallery district, High Line park, and Chelsea Market make it a hub for art, food, and lifestyle brand activations.",
    venues: ["Chelsea Market", "The High Line", "Chelsea Piers", "Various galleries"],
    eventTypes: ["Art events", "Food sampling", "Fitness activations", "Experiential marketing"]
  },
  
  // LOS ANGELES
  {
    slug: "hollywood",
    name: "Hollywood",
    city: "Los Angeles",
    citySlug: "los-angeles",
    state: "CA",
    description: "Hollywood is the entertainment capital of the world, offering unmatched celebrity proximity and media attention for brand activations.",
    venues: ["Hollywood & Highland", "TCL Chinese Theatre", "Dolby Theatre", "Hollywood Bowl"],
    eventTypes: ["Premiere events", "Celebrity activations", "Entertainment marketing", "Red carpet events"]
  },
  {
    slug: "santa-monica",
    name: "Santa Monica",
    city: "Los Angeles",
    citySlug: "los-angeles",
    state: "CA",
    description: "Santa Monica's beach culture, Third Street Promenade, and affluent residents create perfect conditions for lifestyle and wellness brand activations.",
    venues: ["Santa Monica Pier", "Third Street Promenade", "Santa Monica Place"],
    eventTypes: ["Beach activations", "Fitness events", "Lifestyle marketing", "Tourist engagement"]
  },
  {
    slug: "venice-beach",
    name: "Venice Beach",
    city: "Los Angeles",
    citySlug: "los-angeles",
    state: "CA",
    description: "Venice Beach's boardwalk, Muscle Beach, and Abbot Kinney Boulevard attract an eclectic mix of tourists, locals, and influencers.",
    venues: ["Venice Boardwalk", "Abbot Kinney", "Muscle Beach"],
    eventTypes: ["Street activations", "Fitness sampling", "Lifestyle events", "Influencer marketing"]
  },
  {
    slug: "downtown-la",
    name: "Downtown LA",
    city: "Los Angeles",
    citySlug: "los-angeles",
    state: "CA",
    description: "DTLA has transformed into a cultural hub with arts district murals, rooftop venues, and a young professional population.",
    venues: ["LA Live", "The Broad", "Arts District", "Grand Central Market"],
    eventTypes: ["Corporate events", "Art activations", "Food events", "Nightlife marketing"]
  },
  {
    slug: "beverly-hills",
    name: "Beverly Hills",
    city: "Los Angeles",
    citySlug: "los-angeles",
    state: "CA",
    description: "Beverly Hills represents the pinnacle of luxury, attracting high-net-worth consumers and setting trends for premium brand experiences.",
    venues: ["Rodeo Drive", "Beverly Wilshire", "Various luxury hotels"],
    eventTypes: ["Luxury activations", "VIP experiences", "High-end sampling", "Fashion events"]
  },
  
  // CHICAGO
  {
    slug: "river-north",
    name: "River North",
    city: "Chicago",
    citySlug: "chicago",
    state: "IL",
    description: "River North's gallery district, restaurants, and nightlife make it Chicago's premier destination for upscale brand activations.",
    venues: ["House of Blues", "Various galleries", "Nightclubs"],
    eventTypes: ["Art events", "Nightlife activations", "Restaurant partnerships", "Corporate events"]
  },
  {
    slug: "wicker-park",
    name: "Wicker Park",
    city: "Chicago",
    citySlug: "chicago",
    state: "IL",
    description: "Wicker Park is Chicago's creative heart, home to independent shops, music venues, and a young, trend-setting population.",
    venues: ["The Flat Iron Building", "Local boutiques", "Music venues"],
    eventTypes: ["Indie brand launches", "Music events", "Pop-up shops", "Street activations"]
  },
  {
    slug: "magnificent-mile",
    name: "Magnificent Mile",
    city: "Chicago",
    citySlug: "chicago",
    state: "IL",
    description: "Chicago's Magnificent Mile is a premier shopping destination with flagship stores, hotels, and millions of annual visitors.",
    venues: ["Water Tower Place", "John Hancock Center", "Flagship stores"],
    eventTypes: ["Retail activations", "Holiday marketing", "Luxury experiences", "Tourist engagement"]
  },
  {
    slug: "wrigleyville",
    name: "Wrigleyville",
    city: "Chicago",
    citySlug: "chicago",
    state: "IL",
    description: "Wrigleyville surrounds Wrigley Field and becomes a massive party zone on Cubs game days, perfect for sports-focused activations.",
    venues: ["Wrigley Field", "Local bars", "Gallagher Way"],
    eventTypes: ["Sports marketing", "Game day activations", "Bar takeovers", "Fan experiences"]
  },
  
  // MIAMI
  {
    slug: "south-beach",
    name: "South Beach",
    city: "Miami",
    citySlug: "miami",
    state: "FL",
    description: "South Beach is Miami's iconic beachfront playground, attracting international tourists, celebrities, and lifestyle brands year-round.",
    venues: ["Ocean Drive", "Lincoln Road", "Various hotels and clubs"],
    eventTypes: ["Beach activations", "Nightclub marketing", "Fashion events", "International campaigns"]
  },
  {
    slug: "wynwood",
    name: "Wynwood",
    city: "Miami",
    citySlug: "miami",
    state: "FL",
    description: "Wynwood's world-famous murals, galleries, and creative businesses make it Miami's arts district and a must-visit for experiential marketing.",
    venues: ["Wynwood Walls", "Various galleries", "Breweries"],
    eventTypes: ["Art activations", "Mural partnerships", "Creative events", "Art Basel adjacent"]
  },
  {
    slug: "brickell",
    name: "Brickell",
    city: "Miami",
    citySlug: "miami",
    state: "FL",
    description: "Brickell is Miami's financial district, home to young professionals, luxury condos, and upscale dining and nightlife.",
    venues: ["Brickell City Centre", "Mary Brickell Village", "Rooftop venues"],
    eventTypes: ["Corporate events", "After-work activations", "Luxury sampling", "Professional networking"]
  },
  
  // SAN FRANCISCO
  {
    slug: "mission-district",
    name: "Mission District",
    city: "San Francisco",
    citySlug: "san-francisco",
    state: "CA",
    description: "The Mission District blends Latino heritage with tech culture, offering diverse audiences and iconic murals for authentic activations.",
    venues: ["Mission Dolores Park", "Valencia Street", "Various murals"],
    eventTypes: ["Community events", "Food sampling", "Cultural activations", "Tech-adjacent marketing"]
  },
  {
    slug: "soma",
    name: "SoMa",
    city: "San Francisco",
    citySlug: "san-francisco",
    state: "CA",
    description: "South of Market (SoMa) is San Francisco's tech hub, home to startups, Moscone Center, and Oracle Park.",
    venues: ["Moscone Center", "Oracle Park", "Tech company HQs"],
    eventTypes: ["Tech conferences", "Baseball activations", "Corporate events", "Startup launches"]
  },
  
  // AUSTIN
  {
    slug: "sixth-street",
    name: "Sixth Street",
    city: "Austin",
    citySlug: "austin",
    state: "TX",
    description: "Sixth Street is Austin's legendary entertainment district, packed with live music venues and the epicenter of SXSW.",
    venues: ["Live music venues", "Bars", "SXSW venues"],
    eventTypes: ["Music marketing", "SXSW activations", "Nightlife events", "Bar takeovers"]
  },
  {
    slug: "south-congress",
    name: "South Congress (SoCo)",
    city: "Austin",
    citySlug: "austin",
    state: "TX",
    description: "South Congress Avenue is Austin's hipster heart, lined with boutiques, food trailers, and the iconic 'I Love You So Much' mural.",
    venues: ["Local boutiques", "Food trailer parks", "Hotel San Jose"],
    eventTypes: ["Boutique events", "Food sampling", "Lifestyle activations", "Keep Austin Weird marketing"]
  },
  {
    slug: "east-austin",
    name: "East Austin",
    city: "Austin",
    citySlug: "austin",
    state: "TX",
    description: "East Austin's breweries, taquerias, and creative spaces attract young professionals and artists to Austin's most dynamic neighborhood.",
    venues: ["Breweries", "Art galleries", "Food halls"],
    eventTypes: ["Brewery partnerships", "Art events", "Food activations", "Community marketing"]
  },
  
  // DENVER
  {
    slug: "rino",
    name: "RiNo (River North)",
    city: "Denver",
    citySlug: "denver",
    state: "CO",
    description: "RiNo is Denver's arts district, filled with breweries, galleries, street art, and a thriving creative community.",
    venues: ["Local breweries", "Art galleries", "The Source"],
    eventTypes: ["Brewery events", "Art activations", "Food hall marketing", "Creative partnerships"]
  },
  {
    slug: "lodo",
    name: "LoDo (Lower Downtown)",
    city: "Denver",
    citySlug: "denver",
    state: "CO",
    description: "LoDo is Denver's historic downtown, home to Coors Field, Union Station, and the city's best nightlife.",
    venues: ["Coors Field", "Union Station", "Dairy Block"],
    eventTypes: ["Baseball activations", "Transit marketing", "Corporate events", "Nightlife activations"]
  },
  {
    slug: "cherry-creek",
    name: "Cherry Creek",
    city: "Denver",
    citySlug: "denver",
    state: "CO",
    description: "Cherry Creek is Denver's upscale shopping and dining destination, attracting affluent consumers and luxury brands.",
    venues: ["Cherry Creek Mall", "Cherry Creek North", "Local boutiques"],
    eventTypes: ["Luxury retail", "High-end sampling", "Fashion events", "Art festivals"]
  },
  
  // ATLANTA
  {
    slug: "buckhead",
    name: "Buckhead",
    city: "Atlanta",
    citySlug: "atlanta",
    state: "GA",
    description: "Buckhead is Atlanta's upscale district, known for luxury shopping, fine dining, and a vibrant nightlife scene.",
    venues: ["Lenox Square", "Phipps Plaza", "Nightclubs"],
    eventTypes: ["Luxury marketing", "Nightlife activations", "High-end retail", "VIP experiences"]
  },
  {
    slug: "midtown-atlanta",
    name: "Midtown Atlanta",
    city: "Atlanta",
    citySlug: "atlanta",
    state: "GA",
    description: "Midtown is Atlanta's cultural heart, home to the arts, Piedmont Park, and a diverse LGBTQ+ community.",
    venues: ["Piedmont Park", "Fox Theatre", "High Museum"],
    eventTypes: ["Pride events", "Cultural activations", "Park events", "Arts marketing"]
  },
  
  // BOSTON
  {
    slug: "back-bay",
    name: "Back Bay",
    city: "Boston",
    citySlug: "boston",
    state: "MA",
    description: "Back Bay's elegant brownstones, Newbury Street shopping, and Copley Square make it Boston's most prestigious neighborhood.",
    venues: ["Newbury Street", "Copley Square", "Prudential Center"],
    eventTypes: ["Luxury retail", "Marathon events", "Shopping activations", "Corporate events"]
  },
  {
    slug: "seaport",
    name: "Seaport District",
    city: "Boston",
    citySlug: "boston",
    state: "MA",
    description: "Boston's Seaport District is a gleaming waterfront neighborhood with new developments, tech companies, and modern venues.",
    venues: ["Boston Convention Center", "Seaport Common", "Various restaurants"],
    eventTypes: ["Tech events", "Waterfront activations", "Corporate marketing", "Convention support"]
  },
  
  // NASHVILLE
  {
    slug: "broadway-nashville",
    name: "Broadway (Lower Broadway)",
    city: "Nashville",
    citySlug: "nashville",
    state: "TN",
    description: "Nashville's Broadway is the Honky Tonk Highway, lined with live music venues and millions of annual visitors.",
    venues: ["Honky tonks", "Ryman Auditorium", "Bridgestone Arena"],
    eventTypes: ["Music marketing", "Bar activations", "Tourist engagement", "Country brand partnerships"]
  },
  {
    slug: "the-gulch",
    name: "The Gulch",
    city: "Nashville",
    citySlug: "nashville",
    state: "TN",
    description: "The Gulch is Nashville's trendy urban neighborhood, featuring upscale dining, boutique hotels, and the famous wings mural.",
    venues: ["Boutique hotels", "Restaurants", "Street murals"],
    eventTypes: ["Instagram activations", "Food events", "Lifestyle marketing", "Influencer partnerships"]
  },
  
  // LAS VEGAS
  {
    slug: "the-strip",
    name: "The Strip",
    city: "Las Vegas",
    citySlug: "las-vegas",
    state: "NV",
    description: "The Las Vegas Strip is the entertainment capital of the world, with casino resorts, shows, and endless marketing opportunities.",
    venues: ["Casino resorts", "Convention center", "Nightclubs", "The Sphere"],
    eventTypes: ["Casino marketing", "Convention support", "Nightlife activations", "Mega events"]
  },
  {
    slug: "fremont-street",
    name: "Fremont Street",
    city: "Las Vegas",
    citySlug: "las-vegas",
    state: "NV",
    description: "Fremont Street is downtown Las Vegas, offering a more eclectic vibe with the Viva Vision canopy and vintage Vegas energy.",
    venues: ["Fremont Street Experience", "Container Park", "Downtown casinos"],
    eventTypes: ["Downtown activations", "Alternative Vegas marketing", "Street events", "Music festivals"]
  },
  
  // SEATTLE
  {
    slug: "pike-place",
    name: "Pike Place Market",
    city: "Seattle",
    citySlug: "seattle",
    state: "WA",
    description: "Pike Place Market is Seattle's iconic public market, drawing tourists and locals to its food vendors, crafts, and the original Starbucks.",
    venues: ["Pike Place Market", "Post Alley", "Waterfront"],
    eventTypes: ["Food sampling", "Tourist marketing", "Artisan partnerships", "Seattle icon activations"]
  },
  {
    slug: "capitol-hill-seattle",
    name: "Capitol Hill",
    city: "Seattle",
    citySlug: "seattle",
    state: "WA",
    description: "Capitol Hill is Seattle's LGBTQ+ neighborhood, known for its nightlife, music venues, and progressive community.",
    venues: ["Neumos", "Local bars", "Cal Anderson Park"],
    eventTypes: ["Pride events", "Music marketing", "Nightlife activations", "Community events"]
  }
];

// Services available for neighborhood pages
export const neighborhoodServices = [
  { slug: 'brand-ambassadors', name: 'Brand Ambassadors' },
  { slug: 'event-staffing', name: 'Event Staffing' },
  { slug: 'promotional-models', name: 'Promotional Models' },
  { slug: 'street-teams', name: 'Street Teams' },
  { slug: 'product-sampling', name: 'Product Sampling' }
];

export function getNeighborhoodBySlug(slug: string) {
  return neighborhoods.find(n => n.slug === slug);
}

export function getNeighborhoodsByCitySlug(citySlug: string) {
  return neighborhoods.filter(n => n.citySlug === citySlug);
}
