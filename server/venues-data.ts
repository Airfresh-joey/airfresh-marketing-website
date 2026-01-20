// Convention center venue data for targeting pages
export interface Venue {
  slug: string;
  name: string;
  shortName: string;
  city: string;
  state: string;
  stateAbbrev: string;
  address: string;
  squareFootage: string;
  exhibitSpace: string;
  meetingRooms: number;
  description: string;
  features: string[];
  majorEvents: string[];
  nearbyAttractions: string[];
  transportInfo: string;
  website: string;
  latitude: number;
  longitude: number;
  image: string;
  tier: 1 | 2 | 3; // 1 = largest/most important, 3 = smaller
}

export const venues: Venue[] = [
  // TIER 1 - Largest Convention Centers
  {
    slug: "mccormick-place-chicago",
    name: "McCormick Place",
    shortName: "McCormick Place",
    city: "Chicago",
    state: "Illinois",
    stateAbbrev: "IL",
    address: "2301 S Martin Luther King Dr, Chicago, IL 60616",
    squareFootage: "2.6 million sq ft",
    exhibitSpace: "2,600,000 sq ft",
    meetingRooms: 173,
    description: "McCormick Place is the largest convention center in North America, featuring four interconnected buildings and hosting over 3 million visitors annually. Located on Chicago's lakefront, it's the premier destination for major trade shows, conventions, and corporate events.",
    features: [
      "Four interconnected buildings",
      "On-site Marriott Marquis Chicago hotel",
      "Lakeside Center with stunning views",
      "State-of-the-art technology infrastructure",
      "Multiple food service options",
      "Direct access to public transportation"
    ],
    majorEvents: [
      "Chicago Auto Show",
      "National Restaurant Association Show",
      "IMTS - International Manufacturing Technology Show",
      "Pack Expo",
      "Sweets & Snacks Expo"
    ],
    nearbyAttractions: ["Soldier Field", "Museum Campus", "Chinatown", "Bronzeville"],
    transportInfo: "Accessible via CTA Green Line, Metra Electric, and multiple bus routes. On-site parking available.",
    website: "https://www.mccormickplace.com",
    latitude: 41.8507,
    longitude: -87.6159,
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=85",
    tier: 1
  },
  {
    slug: "las-vegas-convention-center",
    name: "Las Vegas Convention Center",
    shortName: "LVCC",
    city: "Las Vegas",
    state: "Nevada",
    stateAbbrev: "NV",
    address: "3150 Paradise Rd, Las Vegas, NV 89109",
    squareFootage: "2.9 million sq ft",
    exhibitSpace: "2,500,000 sq ft",
    meetingRooms: 144,
    description: "The Las Vegas Convention Center is one of the busiest convention facilities in the world, recently expanded with the state-of-the-art West Hall. Located just minutes from the Las Vegas Strip, it hosts the world's largest trade shows.",
    features: [
      "Brand new West Hall expansion",
      "Vegas Loop underground transportation",
      "World-class technology infrastructure",
      "Adjacent to major hotel resorts",
      "24/7 event capability",
      "Outdoor exhibit space"
    ],
    majorEvents: [
      "CES - Consumer Electronics Show",
      "NAB Show",
      "CONEXPO-CON/AGG",
      "SEMA Show",
      "World of Concrete"
    ],
    nearbyAttractions: ["Las Vegas Strip", "Fremont Street", "Las Vegas Motor Speedway", "Downtown Vegas"],
    transportInfo: "Connected to resorts via Vegas Loop. Monorail station on-site. Minutes from McCarran International Airport.",
    website: "https://www.vegasmeansbusiness.com",
    latitude: 36.1318,
    longitude: -115.1512,
    image: "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=1920&q=85",
    tier: 1
  },
  {
    slug: "orange-county-convention-center-orlando",
    name: "Orange County Convention Center",
    shortName: "OCCC",
    city: "Orlando",
    state: "Florida",
    stateAbbrev: "FL",
    address: "9800 International Dr, Orlando, FL 32819",
    squareFootage: "2.1 million sq ft",
    exhibitSpace: "2,055,222 sq ft",
    meetingRooms: 74,
    description: "The Orange County Convention Center is the second-largest convention center in the US, strategically located on International Drive near Orlando's world-famous theme parks. It attracts millions of visitors annually.",
    features: [
      "Two connected buildings (West and North/South)",
      "Spectacular Florida architecture",
      "Proximity to theme parks",
      "Extensive outdoor event space",
      "On-site business center",
      "Award-winning sustainability programs"
    ],
    majorEvents: [
      "IAAPA Expo",
      "PGA Merchandise Show",
      "HIMSS Global Health Conference",
      "InfoComm",
      "ICAST Fishing Show"
    ],
    nearbyAttractions: ["Walt Disney World", "Universal Studios", "SeaWorld", "International Drive"],
    transportInfo: "I-Ride Trolley service. 15 minutes from Orlando International Airport. Ample parking.",
    website: "https://www.occc.net",
    latitude: 28.4267,
    longitude: -81.4679,
    image: "https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?w=1920&q=85",
    tier: 1
  },
  {
    slug: "ernest-n-morial-convention-center-new-orleans",
    name: "Ernest N. Morial Convention Center",
    shortName: "New Orleans Convention Center",
    city: "New Orleans",
    state: "Louisiana",
    stateAbbrev: "LA",
    address: "900 Convention Center Blvd, New Orleans, LA 70130",
    squareFootage: "3.1 million sq ft",
    exhibitSpace: "1,100,000 sq ft",
    meetingRooms: 140,
    description: "The Ernest N. Morial Convention Center is one of the nation's largest exhibition facilities, located along the Mississippi River in downtown New Orleans. It offers the unique cultural experience of the Big Easy.",
    features: [
      "Riverfront location",
      "Connected to French Quarter via streetcar",
      "Award-winning catering with local cuisine",
      "Great Hall column-free exhibit space",
      "Outdoor event terraces",
      "Adjacent to Warehouse District"
    ],
    majorEvents: [
      "Mardi Gras events",
      "Essence Festival",
      "NCAA Final Four (hosted)",
      "Super Bowl (hosted)",
      "New Orleans Boat & Sportshow"
    ],
    nearbyAttractions: ["French Quarter", "Bourbon Street", "Garden District", "Audubon Zoo"],
    transportInfo: "Streetcar access. Walking distance to French Quarter. Louis Armstrong Airport 15 minutes away.",
    website: "https://www.mccno.com",
    latitude: 29.9439,
    longitude: -90.0629,
    image: "https://images.unsplash.com/photo-1568402102990-bc541580b59f?w=1920&q=85",
    tier: 1
  },
  {
    slug: "georgia-world-congress-center-atlanta",
    name: "Georgia World Congress Center",
    shortName: "GWCC",
    city: "Atlanta",
    state: "Georgia",
    stateAbbrev: "GA",
    address: "285 Andrew Young International Blvd NW, Atlanta, GA 30313",
    squareFootage: "3.9 million sq ft",
    exhibitSpace: "1,500,000 sq ft",
    meetingRooms: 106,
    description: "The Georgia World Congress Center is the world's largest LEED-certified convention center and a cornerstone of downtown Atlanta. Adjacent to Mercedes-Benz Stadium and State Farm Arena.",
    features: [
      "LEED Platinum certified",
      "Connected to Mercedes-Benz Stadium",
      "Three exhibit buildings",
      "Signia by Hilton hotel on-site",
      "State-of-the-art broadcast facilities",
      "Extensive outdoor plaza"
    ],
    majorEvents: [
      "Atlanta International Auto Show",
      "Chick-fil-A Peach Bowl events",
      "Dragon Con",
      "International Poultry Expo",
      "Super Bowl (hosted)"
    ],
    nearbyAttractions: ["Mercedes-Benz Stadium", "Centennial Olympic Park", "World of Coca-Cola", "Georgia Aquarium"],
    transportInfo: "MARTA rail station adjacent. Hartsfield-Jackson Airport 15 minutes via MARTA.",
    website: "https://www.gwcca.org",
    latitude: 33.7596,
    longitude: -84.3963,
    image: "https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?w=1920&q=85",
    tier: 1
  },

  // TIER 2 - Major Convention Centers
  {
    slug: "javits-center-new-york",
    name: "Jacob K. Javits Convention Center",
    shortName: "Javits Center",
    city: "New York",
    state: "New York",
    stateAbbrev: "NY",
    address: "429 11th Ave, New York, NY 10001",
    squareFootage: "2.1 million sq ft",
    exhibitSpace: "850,000 sq ft",
    meetingRooms: 102,
    description: "The Javits Center is New York City's premier convention venue, recently expanded with a stunning rooftop pavilion. Located in Manhattan's Hudson Yards district.",
    features: [
      "New expansion with rooftop farm",
      "Panoramic Hudson River views",
      "Green roof with bird sanctuary",
      "Direct High Line access",
      "State-of-the-art event technology",
      "Sustainable operations"
    ],
    majorEvents: [
      "New York International Auto Show",
      "New York Comic Con",
      "BookExpo",
      "NRF Retail's Big Show",
      "PhotoPlus Expo"
    ],
    nearbyAttractions: ["Hudson Yards", "High Line", "Times Square", "Chelsea Market"],
    transportInfo: "7 train to 34th St-Hudson Yards. Numerous bus routes. NYC Ferry nearby.",
    website: "https://www.javitscenter.com",
    latitude: 40.7579,
    longitude: -74.0024,
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1920&q=85",
    tier: 1
  },
  {
    slug: "san-diego-convention-center",
    name: "San Diego Convention Center",
    shortName: "SDCC",
    city: "San Diego",
    state: "California",
    stateAbbrev: "CA",
    address: "111 W Harbor Dr, San Diego, CA 92101",
    squareFootage: "2.6 million sq ft",
    exhibitSpace: "615,700 sq ft",
    meetingRooms: 72,
    description: "The San Diego Convention Center is an architectural landmark on San Diego Bay, famous for hosting Comic-Con International and featuring stunning waterfront views.",
    features: [
      "Iconic sail-shaped architecture",
      "Bayfront location",
      "Connected to Gaslamp Quarter",
      "Outdoor terraces with bay views",
      "On-site catering excellence",
      "Adjacent to downtown hotels"
    ],
    majorEvents: [
      "San Diego Comic-Con",
      "American Academy of Neurology",
      "Bio International Convention",
      "ASCE Conference",
      "ADA Scientific Sessions"
    ],
    nearbyAttractions: ["Gaslamp Quarter", "Petco Park", "USS Midway", "Balboa Park"],
    transportInfo: "Trolley Green Line direct access. Walking distance to Amtrak. San Diego Airport 10 minutes.",
    website: "https://www.visitsandiego.com/meetings",
    latitude: 32.7066,
    longitude: -117.1635,
    image: "https://images.unsplash.com/photo-1538964173425-93640f1b10e5?w=1920&q=85",
    tier: 1
  },
  {
    slug: "los-angeles-convention-center",
    name: "Los Angeles Convention Center",
    shortName: "LACC",
    city: "Los Angeles",
    state: "California",
    stateAbbrev: "CA",
    address: "1201 S Figueroa St, Los Angeles, CA 90015",
    squareFootage: "720,000 sq ft",
    exhibitSpace: "720,000 sq ft",
    meetingRooms: 64,
    description: "The Los Angeles Convention Center is in the heart of downtown LA, adjacent to L.A. LIVE, Crypto.com Arena, and the newly opened Peacock Theater. A hub for entertainment events.",
    features: [
      "Adjacent to L.A. LIVE",
      "Connected to Crypto.com Arena",
      "Gilbert Lindsay Plaza",
      "Entertainment district location",
      "Metro access",
      "World-class hotel proximity"
    ],
    majorEvents: [
      "E3 Expo (historically)",
      "LA Auto Show",
      "Anime Expo",
      "Grammy Awards events",
      "Los Angeles Times Festival of Books"
    ],
    nearbyAttractions: ["L.A. LIVE", "Crypto.com Arena", "The Grammy Museum", "Arts District"],
    transportInfo: "Metro Blue/Expo Lines. Easy freeway access. Near Union Station.",
    website: "https://www.lacclink.com",
    latitude: 34.0407,
    longitude: -118.2698,
    image: "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=1920&q=85",
    tier: 2
  },
  {
    slug: "moscone-center-san-francisco",
    name: "Moscone Center",
    shortName: "Moscone",
    city: "San Francisco",
    state: "California",
    stateAbbrev: "CA",
    address: "747 Howard St, San Francisco, CA 94103",
    squareFootage: "2 million sq ft",
    exhibitSpace: "502,000 sq ft",
    meetingRooms: 106,
    description: "Moscone Center is San Francisco's premier convention facility, comprising three buildings in the heart of the SOMA district. Recently renovated with cutting-edge sustainability features.",
    features: [
      "Three interconnected buildings",
      "LEED Platinum certified",
      "Rooftop terrace at Moscone North",
      "Tech-forward amenities",
      "Yerba Buena Gardens adjacent",
      "World-class dining nearby"
    ],
    majorEvents: [
      "Dreamforce",
      "Apple WWDC",
      "Google I/O",
      "Oracle OpenWorld",
      "RSA Conference"
    ],
    nearbyAttractions: ["Yerba Buena Gardens", "SFMOMA", "Union Square", "Ferry Building"],
    transportInfo: "BART Powell St and Montgomery stations. Muni bus and streetcar. SFO Airport 30 minutes.",
    website: "https://www.moscone.com",
    latitude: 37.7842,
    longitude: -122.4016,
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1920&q=85",
    tier: 2
  },
  {
    slug: "kay-bailey-hutchison-convention-center-dallas",
    name: "Kay Bailey Hutchison Convention Center Dallas",
    shortName: "Dallas Convention Center",
    city: "Dallas",
    state: "Texas",
    stateAbbrev: "TX",
    address: "650 S Griffin St, Dallas, TX 75202",
    squareFootage: "2 million sq ft",
    exhibitSpace: "1,000,000 sq ft",
    meetingRooms: 88,
    description: "The Kay Bailey Hutchison Convention Center is one of the largest convention facilities in the Southwest, located in downtown Dallas with easy access to the city's vibrant entertainment districts.",
    features: [
      "Million square feet of exhibit space",
      "Connected to Omni Dallas Hotel",
      "Dallas Ballroom seats 4,000",
      "State-of-the-art technology",
      "Downtown Dallas location",
      "DART light rail access"
    ],
    majorEvents: [
      "Dallas Auto Show",
      "State Fair of Texas events",
      "Southwest Veterinary Symposium",
      "Dallas Fan Expo",
      "TX State Fire Association Conference"
    ],
    nearbyAttractions: ["Dallas Arts District", "Deep Ellum", "Reunion Tower", "AT&T Stadium (nearby)"],
    transportInfo: "DART Convention Center station. Easy highway access. DFW Airport 25 minutes.",
    website: "https://www.dallasconventioncenter.com",
    latitude: 32.7757,
    longitude: -96.8011,
    image: "https://images.unsplash.com/photo-1545194445-dddb8f4487c6?w=1920&q=85",
    tier: 2
  },
  {
    slug: "walter-e-washington-convention-center-dc",
    name: "Walter E. Washington Convention Center",
    shortName: "DC Convention Center",
    city: "Washington",
    state: "District of Columbia",
    stateAbbrev: "DC",
    address: "801 Mt Vernon Pl NW, Washington, DC 20001",
    squareFootage: "2.3 million sq ft",
    exhibitSpace: "703,000 sq ft",
    meetingRooms: 77,
    description: "The Walter E. Washington Convention Center is the nation's capital's premier meeting venue, located in the heart of downtown DC with access to world-class museums and monuments.",
    features: [
      "Penn Quarter location",
      "Steps from Chinatown",
      "Green building features",
      "Metro access at three stations",
      "Flexible meeting spaces",
      "Connected to major hotels"
    ],
    majorEvents: [
      "AIPAC Policy Conference",
      "Washington Auto Show",
      "American Association for Cancer Research",
      "CPAC events",
      "National Association of Broadcasters"
    ],
    nearbyAttractions: ["National Mall", "Smithsonian Museums", "White House", "Capital One Arena"],
    transportInfo: "Metro Green/Yellow Lines at Mt Vernon Sq. Multiple bus routes. Union Station nearby.",
    website: "https://www.eventsdc.com",
    latitude: 38.9048,
    longitude: -77.0229,
    image: "https://images.unsplash.com/photo-1617581629397-a72507c3de9e?w=1920&q=85",
    tier: 2
  },
  {
    slug: "nrg-center-houston",
    name: "NRG Center",
    shortName: "NRG Center",
    city: "Houston",
    state: "Texas",
    stateAbbrev: "TX",
    address: "1 NRG Park, Houston, TX 77054",
    squareFootage: "1.4 million sq ft",
    exhibitSpace: "706,000 sq ft",
    meetingRooms: 36,
    description: "NRG Center is part of NRG Park, Houston's premier event campus that includes NRG Stadium and the Astrodome. It hosts major consumer and trade shows year-round.",
    features: [
      "Part of NRG Park campus",
      "Adjacent to NRG Stadium",
      "Connected exhibit halls",
      "Outdoor exhibit space",
      "On-site parking for 26,000",
      "Houston Livestock Show venue"
    ],
    majorEvents: [
      "Houston Livestock Show and Rodeo",
      "Offshore Technology Conference",
      "Texas Home & Garden Show",
      "Houston Auto Show",
      "Comicpalooza"
    ],
    nearbyAttractions: ["NRG Stadium", "Houston Medical Center", "Museum District", "Hermann Park"],
    transportInfo: "METROrail Red Line to NRG Park. Extensive parking. 12 miles from downtown.",
    website: "https://www.nrgpark.com",
    latitude: 29.6847,
    longitude: -95.4107,
    image: "https://images.unsplash.com/photo-1530089711124-9ca31fb9e863?w=1920&q=85",
    tier: 2
  },
  {
    slug: "pennsylvania-convention-center-philadelphia",
    name: "Pennsylvania Convention Center",
    shortName: "PA Convention Center",
    city: "Philadelphia",
    state: "Pennsylvania",
    stateAbbrev: "PA",
    address: "1101 Arch St, Philadelphia, PA 19107",
    squareFootage: "1 million sq ft",
    exhibitSpace: "679,000 sq ft",
    meetingRooms: 82,
    description: "The Pennsylvania Convention Center spans four city blocks in Center City Philadelphia, connected to the historic Reading Terminal Market and featuring the restored Reading Railroad train shed.",
    features: [
      "Historic train shed ballroom",
      "Reading Terminal Market connected",
      "Center City location",
      "Skybridge to Marriott",
      "Multiple event halls",
      "Award-winning architecture"
    ],
    majorEvents: [
      "Philadelphia Auto Show",
      "Philadelphia Flower Show",
      "Pennsylvania Farm Show (overflow)",
      "DNC/RNC conventions (hosted)",
      "American Pharmacists Association"
    ],
    nearbyAttractions: ["Reading Terminal Market", "City Hall", "Chinatown", "Independence Hall"],
    transportInfo: "SEPTA Regional Rail at Market East. Multiple subway lines. 30th St Station nearby.",
    website: "https://www.paconvention.com",
    latitude: 39.9546,
    longitude: -75.1588,
    image: "https://images.unsplash.com/photo-1569761316261-9a8696fa2ca3?w=1920&q=85",
    tier: 2
  },
  {
    slug: "huntington-place-detroit",
    name: "Huntington Place",
    shortName: "Huntington Place",
    city: "Detroit",
    state: "Michigan",
    stateAbbrev: "MI",
    address: "1 Washington Blvd, Detroit, MI 48226",
    squareFootage: "723,000 sq ft",
    exhibitSpace: "723,000 sq ft",
    meetingRooms: 82,
    description: "Huntington Place (formerly Cobo Center) is Detroit's premier convention center, located on the riverfront with views of Canada. Recently renovated with modern amenities.",
    features: [
      "Detroit riverfront location",
      "Views of Windsor, Canada",
      "Connected to GM Renaissance Center",
      "People Mover access",
      "Outdoor riverwalk",
      "State-of-the-art renovations"
    ],
    majorEvents: [
      "North American International Auto Show",
      "Society of Automotive Engineers",
      "Detroit Auto Dealers Association events",
      "America's Thanksgiving Parade events",
      "Autorama"
    ],
    nearbyAttractions: ["GM Renaissance Center", "Detroit Riverwalk", "Greektown", "Comerica Park"],
    transportInfo: "People Mover Cobo station. QLine streetcar nearby. 25 minutes to DTW Airport.",
    website: "https://www.huntingtonplacedetroit.com",
    latitude: 42.3266,
    longitude: -83.0522,
    image: "https://images.unsplash.com/photo-1564182842519-8a3b2af3e228?w=1920&q=85",
    tier: 2
  },
  {
    slug: "indiana-convention-center-indianapolis",
    name: "Indiana Convention Center",
    shortName: "ICC",
    city: "Indianapolis",
    state: "Indiana",
    stateAbbrev: "IN",
    address: "100 S Capitol Ave, Indianapolis, IN 46225",
    squareFootage: "750,000 sq ft",
    exhibitSpace: "566,000 sq ft",
    meetingRooms: 71,
    description: "The Indiana Convention Center is connected to Lucas Oil Stadium and surrounded by major hotels via skywalks. Indianapolis is known as the 'Amateur Sports Capital of the World.'",
    features: [
      "Connected to Lucas Oil Stadium",
      "Downtown skywalk system",
      "Adjacent to multiple hotels",
      "Sagamore Ballroom",
      "Central U.S. location",
      "Walkable downtown"
    ],
    majorEvents: [
      "Gen Con",
      "FFA National Convention",
      "FDIC International",
      "Performance Racing Industry Show",
      "Indianapolis Boat, Sport & Travel Show"
    ],
    nearbyAttractions: ["Lucas Oil Stadium", "Monument Circle", "Mass Ave", "White River State Park"],
    transportInfo: "IndyGo bus service. Easy highway access. Indianapolis Airport 15 minutes.",
    website: "https://www.icclos.com",
    latitude: 39.7641,
    longitude: -86.1635,
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1920&q=85",
    tier: 2
  },
  {
    slug: "colorado-convention-center-denver",
    name: "Colorado Convention Center",
    shortName: "CCC",
    city: "Denver",
    state: "Colorado",
    stateAbbrev: "CO",
    address: "700 14th St, Denver, CO 80202",
    squareFootage: "2.2 million sq ft",
    exhibitSpace: "577,000 sq ft",
    meetingRooms: 63,
    description: "The Colorado Convention Center features the iconic Big Blue Bear sculpture and offers stunning Rocky Mountain views. Located in downtown Denver with access to the 16th Street Mall.",
    features: [
      "Iconic Blue Bear sculpture",
      "Rocky Mountain views",
      "LEED Gold certified",
      "Bellco Theatre on-site",
      "Mile High Ballroom",
      "16th Street Mall access"
    ],
    majorEvents: [
      "Great American Beer Festival",
      "Outdoor Retailer",
      "National Western Stock Show events",
      "Denver Comic Con",
      "Democratic National Convention (hosted)"
    ],
    nearbyAttractions: ["16th Street Mall", "Larimer Square", "Denver Art Museum", "Coors Field"],
    transportInfo: "RTD Light Rail at Convention Center. Free MallRide shuttle. DIA 45 minutes via train.",
    website: "https://denverconvention.com",
    latitude: 39.7436,
    longitude: -104.9954,
    image: "https://images.unsplash.com/photo-1546156929-a4c0ac411f47?w=1920&q=85",
    tier: 2
  },
  {
    slug: "phoenix-convention-center",
    name: "Phoenix Convention Center",
    shortName: "PCC",
    city: "Phoenix",
    state: "Arizona",
    stateAbbrev: "AZ",
    address: "100 N 3rd St, Phoenix, AZ 85004",
    squareFootage: "900,000 sq ft",
    exhibitSpace: "585,000 sq ft",
    meetingRooms: 99,
    description: "The Phoenix Convention Center is the Southwest's premier meeting destination, featuring stunning desert architecture and year-round sunshine in downtown Phoenix.",
    features: [
      "Three connected buildings",
      "Desert contemporary architecture",
      "Symphony Hall on campus",
      "Light rail access",
      "Adjacent to Chase Field",
      "Year-round pleasant weather"
    ],
    majorEvents: [
      "Phoenix Fan Fusion",
      "Barrett-Jackson Auto Auction events",
      "ASU graduation ceremonies",
      "Arizona SciTech Festival",
      "AzTech Council events"
    ],
    nearbyAttractions: ["Chase Field", "Footprint Center", "Roosevelt Row", "Desert Botanical Garden"],
    transportInfo: "Valley Metro Light Rail directly connected. Sky Harbor Airport 10 minutes.",
    website: "https://www.phoenixconventioncenter.com",
    latitude: 33.4475,
    longitude: -112.0697,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85",
    tier: 2
  },
  {
    slug: "boston-convention-exhibition-center",
    name: "Boston Convention & Exhibition Center",
    shortName: "BCEC",
    city: "Boston",
    state: "Massachusetts",
    stateAbbrev: "MA",
    address: "415 Summer St, Boston, MA 02210",
    squareFootage: "2.1 million sq ft",
    exhibitSpace: "516,000 sq ft",
    meetingRooms: 82,
    description: "The Boston Convention & Exhibition Center is New England's largest convention center, located in the Seaport District with stunning harbor views and access to Boston's historic attractions.",
    features: [
      "Seaport District location",
      "Harbor views",
      "LEED Silver certified",
      "Connected to Westin Boston Waterfront",
      "Lawn on D outdoor venue",
      "Adjacent to innovation district"
    ],
    majorEvents: [
      "PAX East",
      "BIO International Convention",
      "Seafood Expo North America",
      "Boston Marathon events",
      "HubSpot INBOUND"
    ],
    nearbyAttractions: ["Seaport District", "Boston Harbor", "ICA Boston", "Freedom Trail"],
    transportInfo: "Silver Line to World Trade Center. Water taxi available. Logan Airport 15 minutes.",
    website: "https://www.massconvention.com",
    latitude: 42.3463,
    longitude: -71.0448,
    image: "https://images.unsplash.com/photo-1501979376754-1d09a9bc6abb?w=1920&q=85",
    tier: 2
  },
  {
    slug: "salt-palace-convention-center-salt-lake-city",
    name: "Salt Palace Convention Center",
    shortName: "Salt Palace",
    city: "Salt Lake City",
    state: "Utah",
    stateAbbrev: "UT",
    address: "100 S W Temple, Salt Lake City, UT 84101",
    squareFootage: "679,000 sq ft",
    exhibitSpace: "515,000 sq ft",
    meetingRooms: 66,
    description: "The Salt Palace Convention Center is Utah's largest convention facility, located in downtown Salt Lake City with views of the Wasatch Mountains and easy access to world-class skiing.",
    features: [
      "Mountain views",
      "Downtown location",
      "Connected to Hilton Salt Lake City Center",
      "TRAX light rail access",
      "Gateway District adjacent",
      "Outdoor recreation access"
    ],
    majorEvents: [
      "Outdoor Retailer (historically)",
      "RootsTech",
      "Salt Lake Comic Con/FanX",
      "Utah Auto Expo",
      "International Sportsmen's Exposition"
    ],
    nearbyAttractions: ["Temple Square", "City Creek Center", "Gateway District", "Natural History Museum of Utah"],
    transportInfo: "TRAX light rail direct access. 15 minutes to Salt Lake City International Airport.",
    website: "https://www.visitsaltlake.com/salt-palace",
    latitude: 40.7675,
    longitude: -111.8977,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&q=85",
    tier: 2
  },
  {
    slug: "henry-b-gonzalez-convention-center-san-antonio",
    name: "Henry B. Gonzalez Convention Center",
    shortName: "San Antonio CC",
    city: "San Antonio",
    state: "Texas",
    stateAbbrev: "TX",
    address: "900 E Market St, San Antonio, TX 78205",
    squareFootage: "1.3 million sq ft",
    exhibitSpace: "514,000 sq ft",
    meetingRooms: 70,
    description: "The Henry B. Gonzalez Convention Center is located in the heart of downtown San Antonio along the famous River Walk, offering unique access to the city's rich cultural heritage.",
    features: [
      "River Walk location",
      "Hemisfair Park adjacent",
      "Lila Cockrell Theatre",
      "Stars at Night Ballroom",
      "Historic downtown setting",
      "Connected to Grand Hyatt"
    ],
    majorEvents: [
      "SHOT Show (historically)",
      "Texas Public Health Association",
      "Build Expo",
      "Texas Restaurant Association events",
      "Alamo Bowl events"
    ],
    nearbyAttractions: ["River Walk", "The Alamo", "Hemisfair Park", "Pearl District"],
    transportInfo: "VIA bus and streetcar. 15 minutes to San Antonio International Airport.",
    website: "https://www.sahbgcc.com",
    latitude: 29.4209,
    longitude: -98.4856,
    image: "https://images.unsplash.com/photo-1531766269738-4b855de6d14a?w=1920&q=85",
    tier: 2
  },
  {
    slug: "miami-beach-convention-center",
    name: "Miami Beach Convention Center",
    shortName: "MBCC",
    city: "Miami Beach",
    state: "Florida",
    stateAbbrev: "FL",
    address: "1901 Convention Center Dr, Miami Beach, FL 33139",
    squareFootage: "1.4 million sq ft",
    exhibitSpace: "492,000 sq ft",
    meetingRooms: 84,
    description: "The Miami Beach Convention Center underwent a $620 million renovation and is now one of the most modern and sustainable convention centers in the world, steps from South Beach.",
    features: [
      "Recently renovated $620M",
      "LEED Silver certified",
      "Steps from South Beach",
      "Grand Ballroom with terrace",
      "Pride Park public space",
      "Art Deco district access"
    ],
    majorEvents: [
      "Art Basel Miami Beach",
      "Miami Boat Show",
      "Miami International Auto Show",
      "Swim Week",
      "eMerge Americas"
    ],
    nearbyAttractions: ["South Beach", "Lincoln Road", "Art Deco District", "Ocean Drive"],
    transportInfo: "Miami Beach Trolley. 30 minutes to Miami International Airport. Parking on-site.",
    website: "https://www.miamibeachconvention.com",
    latitude: 25.7948,
    longitude: -80.1365,
    image: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=1920&q=85",
    tier: 2
  },
  {
    slug: "music-city-center-nashville",
    name: "Music City Center",
    shortName: "MCC Nashville",
    city: "Nashville",
    state: "Tennessee",
    stateAbbrev: "TN",
    address: "201 Rep. John Lewis Way S, Nashville, TN 37203",
    squareFootage: "2.1 million sq ft",
    exhibitSpace: "353,000 sq ft",
    meetingRooms: 60,
    description: "Music City Center is Nashville's premier convention venue, featuring a distinctive guitar-pick shaped building and the largest green roof in the Southeast. Located in the heart of downtown Nashville.",
    features: [
      "Guitar-pick shaped design",
      "Largest green roof in Southeast",
      "Country Music Hall of Fame adjacent",
      "LEED Silver certified",
      "Downtown Broadway access",
      "State-of-the-art acoustics"
    ],
    majorEvents: [
      "CMA Fest events",
      "National Automobile Dealers Association",
      "Bonnaroo kickoff events",
      "Healthcare Information and Management Systems Society",
      "American Society of Association Executives"
    ],
    nearbyAttractions: ["Broadway honky-tonks", "Country Music Hall of Fame", "Ryman Auditorium", "Bridgestone Arena"],
    transportInfo: "Nashville MTA bus. Downtown location walkable. BNA Airport 15 minutes.",
    website: "https://www.nashvillemusiccitycenter.com",
    latitude: 36.1565,
    longitude: -86.7773,
    image: "https://images.unsplash.com/photo-1545419913-793b5c9f8e71?w=1920&q=85",
    tier: 2
  },

  // TIER 3 - Important Regional Convention Centers
  {
    slug: "austin-convention-center",
    name: "Austin Convention Center",
    shortName: "ACC",
    city: "Austin",
    state: "Texas",
    stateAbbrev: "TX",
    address: "500 E Cesar Chavez St, Austin, TX 78701",
    squareFootage: "881,400 sq ft",
    exhibitSpace: "247,052 sq ft",
    meetingRooms: 54,
    description: "The Austin Convention Center is located in downtown Austin between Lady Bird Lake and the legendary Sixth Street entertainment district. LEED Gold certified and GBAC Star accredited.",
    features: [
      "LEED Gold certified",
      "Downtown location",
      "Adjacent to Sixth Street",
      "Lady Bird Lake nearby",
      "7 ballrooms",
      "Live music capital amenities"
    ],
    majorEvents: [
      "SXSW - South by Southwest",
      "Austin City Limits events",
      "Texas Tribune Festival",
      "Dell Technologies World",
      "Game Developers Conference (satellite)"
    ],
    nearbyAttractions: ["Sixth Street", "Lady Bird Lake", "Texas State Capitol", "Rainey Street"],
    transportInfo: "Capital Metro bus. Downtown walkable. Austin-Bergstrom Airport 15 minutes.",
    website: "https://www.austinconventioncenter.com",
    latitude: 30.2634,
    longitude: -97.7398,
    image: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=1920&q=85",
    tier: 3
  },
  {
    slug: "seattle-convention-center",
    name: "Seattle Convention Center",
    shortName: "SCC",
    city: "Seattle",
    state: "Washington",
    stateAbbrev: "WA",
    address: "705 Pike St, Seattle, WA 98101",
    squareFootage: "574,000 sq ft",
    exhibitSpace: "205,700 sq ft",
    meetingRooms: 62,
    description: "The Seattle Convention Center recently expanded with the Summit building, doubling its capacity. Located in the heart of downtown Seattle near Pike Place Market.",
    features: [
      "New Summit building expansion",
      "Pike Place Market nearby",
      "Downtown retail district",
      "Light rail access",
      "Sustainable design",
      "Tech hub location"
    ],
    majorEvents: [
      "PAX West",
      "Emerald City Comic Con",
      "GeekWire Summit",
      "Seattle Restaurant Week events",
      "International Boat Show"
    ],
    nearbyAttractions: ["Pike Place Market", "Space Needle", "Amazon Spheres", "Capitol Hill"],
    transportInfo: "Link Light Rail to Westlake. Seattle Streetcar. Sea-Tac Airport 30 minutes via train.",
    website: "https://www.visitseattle.org/convention-center",
    latitude: 47.6116,
    longitude: -122.3315,
    image: "https://images.unsplash.com/photo-1502175353174-a7a70e73b362?w=1920&q=85",
    tier: 3
  },
  {
    slug: "oregon-convention-center-portland",
    name: "Oregon Convention Center",
    shortName: "OCC",
    city: "Portland",
    state: "Oregon",
    stateAbbrev: "OR",
    address: "777 NE Martin Luther King Jr Blvd, Portland, OR 97232",
    squareFootage: "1 million sq ft",
    exhibitSpace: "255,000 sq ft",
    meetingRooms: 52,
    description: "The Oregon Convention Center is famous for its twin glass spires and commitment to sustainability. Located on Portland's light rail line with easy access to the city's renowned food scene.",
    features: [
      "Iconic twin glass spires",
      "LEED Platinum certified",
      "Solar panel installation",
      "Farm-to-table catering",
      "Light rail access",
      "Pendleton Roundup Room"
    ],
    majorEvents: [
      "Portland Auto Show",
      "Portland Home & Garden Show",
      "Rose City Comic Con",
      "Oregon Dental Conference",
      "Northwest Food & Beverage World"
    ],
    nearbyAttractions: ["Lloyd District", "Rose Quarter", "Pearl District", "Japanese Garden"],
    transportInfo: "MAX Light Rail direct. Portland Streetcar nearby. PDX Airport 25 minutes.",
    website: "https://www.oregoncc.org",
    latitude: 45.5284,
    longitude: -122.6627,
    image: "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=1920&q=85",
    tier: 3
  },
  {
    slug: "minneapolis-convention-center",
    name: "Minneapolis Convention Center",
    shortName: "MCC Minneapolis",
    city: "Minneapolis",
    state: "Minnesota",
    stateAbbrev: "MN",
    address: "1301 2nd Ave S, Minneapolis, MN 55403",
    squareFootage: "1.6 million sq ft",
    exhibitSpace: "475,000 sq ft",
    meetingRooms: 87,
    description: "The Minneapolis Convention Center is the largest convention venue in the Upper Midwest, connected via skyway to downtown hotels and attractions for year-round accessibility.",
    features: [
      "Largest in Upper Midwest",
      "Skyway connected",
      "3,400-seat auditorium",
      "Climate-controlled skyways",
      "Downtown location",
      "Adjacent to Target Center"
    ],
    majorEvents: [
      "Minneapolis Home + Remodeling Show",
      "Super Bowl events (hosted)",
      "Final Four events (hosted)",
      "Minnesota State High School League events",
      "Twin Cities Auto Show"
    ],
    nearbyAttractions: ["Target Center", "Nicollet Mall", "Mill City Museum", "Stone Arch Bridge"],
    transportInfo: "Metro Transit Blue/Green Lines. Skyway system. MSP Airport 20 minutes via train.",
    website: "https://www.minneapolis.org/minneapolis-convention-center",
    latitude: 44.9693,
    longitude: -93.2733,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85",
    tier: 3
  },
  {
    slug: "baltimore-convention-center",
    name: "Baltimore Convention Center",
    shortName: "BCC",
    city: "Baltimore",
    state: "Maryland",
    stateAbbrev: "MD",
    address: "1 W Pratt St, Baltimore, MD 21201",
    squareFootage: "1.2 million sq ft",
    exhibitSpace: "300,000 sq ft",
    meetingRooms: 50,
    description: "The Baltimore Convention Center is located in downtown Baltimore adjacent to Oriole Park at Camden Yards and the vibrant Inner Harbor, offering unique East Coast charm.",
    features: [
      "Inner Harbor adjacent",
      "Camden Yards nearby",
      "Walkable downtown",
      "Connected to Hilton Baltimore",
      "Historic neighborhood access",
      "Harbor views"
    ],
    majorEvents: [
      "American College of Cardiology",
      "Baltimore Comic-Con",
      "Maryland Home & Garden Show",
      "Otakon",
      "American Association of Immunologists"
    ],
    nearbyAttractions: ["Inner Harbor", "Oriole Park at Camden Yards", "National Aquarium", "Fells Point"],
    transportInfo: "Light Rail Camden Yards station. MARC Train nearby. BWI Airport 20 minutes.",
    website: "https://www.bccenter.org",
    latitude: 39.2865,
    longitude: -76.6180,
    image: "https://images.unsplash.com/photo-1569503533657-3e3d44b1760f?w=1920&q=85",
    tier: 3
  },
  {
    slug: "david-l-lawrence-convention-center-pittsburgh",
    name: "David L. Lawrence Convention Center",
    shortName: "DLCC",
    city: "Pittsburgh",
    state: "Pennsylvania",
    stateAbbrev: "PA",
    address: "1000 Fort Duquesne Blvd, Pittsburgh, PA 15222",
    squareFootage: "1.5 million sq ft",
    exhibitSpace: "313,400 sq ft",
    meetingRooms: 53,
    description: "The David L. Lawrence Convention Center is the world's first and largest LEED Platinum certified convention center, located on Pittsburgh's scenic riverfront.",
    features: [
      "World's first LEED Platinum convention center",
      "Riverfront location",
      "Natural daylight design",
      "Sustainable operations",
      "Spirit of Pittsburgh Ballroom",
      "Downtown Cultural District access"
    ],
    majorEvents: [
      "Pittsburgh Auto Show",
      "Anthrocon",
      "Pittsburgh Home & Garden Show",
      "American Chemical Society events",
      "Steel City Con"
    ],
    nearbyAttractions: ["Cultural District", "PNC Park", "Heinz Field", "Point State Park"],
    transportInfo: "Pittsburgh Light Rail. Downtown walkable. Pittsburgh Airport 30 minutes.",
    website: "https://www.pittsburghcc.com",
    latitude: 40.4456,
    longitude: -80.0058,
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1920&q=85",
    tier: 3
  },
  {
    slug: "charlotte-convention-center",
    name: "Charlotte Convention Center",
    shortName: "CCC Charlotte",
    city: "Charlotte",
    state: "North Carolina",
    stateAbbrev: "NC",
    address: "501 S College St, Charlotte, NC 28202",
    squareFootage: "600,000 sq ft",
    exhibitSpace: "280,000 sq ft",
    meetingRooms: 50,
    description: "The Charlotte Convention Center is located in the heart of Uptown Charlotte, connected via skywalk to major hotels and the NASCAR Hall of Fame.",
    features: [
      "Uptown Charlotte location",
      "NASCAR Hall of Fame connected",
      "Skywalk to hotels",
      "Richardson Ballroom",
      "LYNX Light Rail access",
      "Banking district proximity"
    ],
    majorEvents: [
      "CIAA Tournament events",
      "Charlotte Auto Fair",
      "Carolina Premier Home Show",
      "Association of Equipment Manufacturers events",
      "National Sports Collectors Convention"
    ],
    nearbyAttractions: ["NASCAR Hall of Fame", "Bank of America Stadium", "Spectrum Center", "First Ward Park"],
    transportInfo: "LYNX Blue Line. Easy I-77 access. CLT Airport 15 minutes.",
    website: "https://www.charlotteconventionctr.com",
    latitude: 35.2237,
    longitude: -80.8426,
    image: "https://images.unsplash.com/photo-1560186247-6b2e904b10e0?w=1920&q=85",
    tier: 3
  },
  {
    slug: "huntington-convention-center-cleveland",
    name: "Huntington Convention Center of Cleveland",
    shortName: "HCC Cleveland",
    city: "Cleveland",
    state: "Ohio",
    stateAbbrev: "OH",
    address: "300 Lakeside Ave E, Cleveland, OH 44114",
    squareFootage: "565,000 sq ft",
    exhibitSpace: "225,000 sq ft",
    meetingRooms: 36,
    description: "The Huntington Convention Center of Cleveland is part of the downtown lakefront development, featuring modern design and connection to the Global Center for Health Innovation.",
    features: [
      "Lakefront location",
      "Connected to Global Center for Health Innovation",
      "Medical Mart integration",
      "Modern sustainable design",
      "Public Square nearby",
      "Cleveland Clinic partnership"
    ],
    majorEvents: [
      "Cleveland Auto Show",
      "Cleveland Comic Con",
      "I-X Indoor Amusement Park",
      "Great Big Home + Garden Show",
      "American Coatings Show"
    ],
    nearbyAttractions: ["Rock & Roll Hall of Fame", "Progressive Field", "Playhouse Square", "West Side Market"],
    transportInfo: "RTA HealthLine. Downtown walkable. Cleveland Hopkins Airport 25 minutes.",
    website: "https://www.clevelandconventions.com",
    latitude: 41.5030,
    longitude: -81.6905,
    image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=1920&q=85",
    tier: 3
  },
  {
    slug: "tampa-convention-center",
    name: "Tampa Convention Center",
    shortName: "TCC",
    city: "Tampa",
    state: "Florida",
    stateAbbrev: "FL",
    address: "333 S Franklin St, Tampa, FL 33602",
    squareFootage: "600,000 sq ft",
    exhibitSpace: "200,000 sq ft",
    meetingRooms: 36,
    description: "The Tampa Convention Center is located on Tampa's waterfront with stunning views of the Hillsborough River and easy access to the Riverwalk and downtown attractions.",
    features: [
      "Waterfront location",
      "Tampa Riverwalk access",
      "Stunning bay views",
      "Adjacent to hotels",
      "Modern expansion completed",
      "Outdoor event space"
    ],
    majorEvents: [
      "Florida State Fair events",
      "Tampa Bay Comic Convention",
      "Super Bowl events (hosted)",
      "Gasparilla events",
      "American Society of Clinical Oncology"
    ],
    nearbyAttractions: ["Tampa Riverwalk", "Amalie Arena", "Ybor City", "Busch Gardens"],
    transportInfo: "TECO Line Streetcar. Downtown walkable. TPA Airport 15 minutes.",
    website: "https://www.tampagov.net/tcc",
    latitude: 27.9442,
    longitude: -82.4592,
    image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=1920&q=85",
    tier: 3
  },
  {
    slug: "kentucky-exposition-center-louisville",
    name: "Kentucky Exposition Center",
    shortName: "KEC",
    city: "Louisville",
    state: "Kentucky",
    stateAbbrev: "KY",
    address: "937 Phillips Ln, Louisville, KY 40209",
    squareFootage: "1.3 million sq ft",
    exhibitSpace: "1,200,000 sq ft",
    meetingRooms: 24,
    description: "The Kentucky Exposition Center is one of the largest exhibition facilities in the US, located near Churchill Downs and hosting major equestrian and agricultural events.",
    features: [
      "One of largest exhibit spaces in US",
      "Near Churchill Downs",
      "Freedom Hall arena",
      "Extensive parking",
      "Equestrian facilities",
      "Agricultural show expertise"
    ],
    majorEvents: [
      "Kentucky State Fair",
      "North American International Livestock Exposition",
      "National Farm Machinery Show",
      "Louisville Boat, RV & Sportshow",
      "SHOT Show (historically)"
    ],
    nearbyAttractions: ["Churchill Downs", "Louisville Slugger Museum", "Fourth Street Live", "Kentucky Kingdom"],
    transportInfo: "TARC bus service. Near Louisville Airport. Easy I-65 access.",
    website: "https://www.kystatefair.org",
    latitude: 38.1906,
    longitude: -85.7475,
    image: "https://images.unsplash.com/photo-1558642084-fd07fae5282e?w=1920&q=85",
    tier: 3
  },
  {
    slug: "americas-center-st-louis",
    name: "America's Center Convention Complex",
    shortName: "America's Center",
    city: "St. Louis",
    state: "Missouri",
    stateAbbrev: "MO",
    address: "701 Convention Plaza, St. Louis, MO 63101",
    squareFootage: "2.7 million sq ft",
    exhibitSpace: "574,000 sq ft",
    meetingRooms: 95,
    description: "America's Center Convention Complex includes the iconic Gateway Arch and features the Dome at America's Center, formerly home to the St. Louis Rams NFL team.",
    features: [
      "The Dome at America's Center",
      "Gateway Arch views",
      "Ferrara Theatre",
      "Downtown location",
      "Connected to hotels",
      "MetroLink access"
    ],
    majorEvents: [
      "St. Louis Auto Show",
      "NCAA Tournament events",
      "Trans World Airlines events (historically)",
      "National Speakers Association",
      "Educational Theatre Association"
    ],
    nearbyAttractions: ["Gateway Arch", "Busch Stadium", "City Museum", "Union Station"],
    transportInfo: "MetroLink Convention Center station. Easy highway access. STL Airport 20 minutes.",
    website: "https://www.explorestlouis.com",
    latitude: 38.6313,
    longitude: -90.1918,
    image: "https://images.unsplash.com/photo-1569087682520-45253cc2e0ee?w=1920&q=85",
    tier: 3
  },
  {
    slug: "sands-expo-las-vegas",
    name: "The Venetian Expo",
    shortName: "Venetian Expo",
    city: "Las Vegas",
    state: "Nevada",
    stateAbbrev: "NV",
    address: "201 Sands Ave, Las Vegas, NV 89169",
    squareFootage: "2.25 million sq ft",
    exhibitSpace: "1,300,000 sq ft",
    meetingRooms: 85,
    description: "The Venetian Expo (formerly Sands Expo) is directly connected to The Venetian and The Palazzo resorts, offering premium Las Vegas Strip convention experience.",
    features: [
      "Connected to Venetian/Palazzo",
      "Las Vegas Strip location",
      "1.3 million sq ft exhibit space",
      "Premium hospitality",
      "Private meeting suites",
      "Direct resort access"
    ],
    majorEvents: [
      "Magic Fashion Show",
      "ASD Market Week",
      "Shot Show (current home)",
      "JCK Las Vegas",
      "IBS/KBIS"
    ],
    nearbyAttractions: ["Las Vegas Strip", "Grand Canal Shoppes", "Madame Tussauds", "High Roller"],
    transportInfo: "On the Las Vegas Strip. Monorail access. LAS Airport 10 minutes.",
    website: "https://www.venetianexpo.com",
    latitude: 36.1215,
    longitude: -115.1656,
    image: "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?w=1920&q=85",
    tier: 2
  },
  {
    slug: "mandalay-bay-convention-center",
    name: "Mandalay Bay Convention Center",
    shortName: "Mandalay Bay CC",
    city: "Las Vegas",
    state: "Nevada",
    stateAbbrev: "NV",
    address: "3950 Las Vegas Blvd S, Las Vegas, NV 89119",
    squareFootage: "2.1 million sq ft",
    exhibitSpace: "1,000,000 sq ft",
    meetingRooms: 100,
    description: "Mandalay Bay Convention Center is part of the Mandalay Bay Resort & Casino, featuring the Michelob ULTRA Arena and direct beach access at the resort.",
    features: [
      "Connected to Mandalay Bay Resort",
      "Michelob ULTRA Arena",
      "South Strip location",
      "Beach and pool access",
      "Multiple dining options",
      "Shark Reef Aquarium"
    ],
    majorEvents: [
      "Adobe MAX",
      "Medtrade",
      "DEMA Show",
      "Licensing Expo",
      "International Vision Expo"
    ],
    nearbyAttractions: ["Mandalay Bay Beach", "Shark Reef", "Luxor", "Allegiant Stadium"],
    transportInfo: "Las Vegas Monorail nearby. LAS Airport 5 minutes. South Strip location.",
    website: "https://www.mandalaybay.com/en/meetings.html",
    latitude: 36.0910,
    longitude: -115.1761,
    image: "https://images.unsplash.com/photo-1516496636080-14fb876e029d?w=1920&q=85",
    tier: 2
  },
  {
    slug: "raleigh-convention-center",
    name: "Raleigh Convention Center",
    shortName: "RCC",
    city: "Raleigh",
    state: "North Carolina",
    stateAbbrev: "NC",
    address: "500 S Salisbury St, Raleigh, NC 27601",
    squareFootage: "500,000 sq ft",
    exhibitSpace: "150,000 sq ft",
    meetingRooms: 32,
    description: "The Raleigh Convention Center features stunning modern architecture and a 20,000 sq ft outdoor plaza, located in downtown Raleigh in the heart of the Research Triangle.",
    features: [
      "Modern sustainable design",
      "20,000 sq ft outdoor plaza",
      "Red Hat Amphitheater adjacent",
      "Research Triangle location",
      "Connected to Marriott City Center",
      "Downtown walkable"
    ],
    majorEvents: [
      "GalaxyCon Raleigh",
      "North Carolina State Fair events",
      "SAS Championship events",
      "Dreamville Festival events",
      "NC State Engineering events"
    ],
    nearbyAttractions: ["North Carolina Museum of Natural Sciences", "NC State Capitol", "Warehouse District", "Glenwood South"],
    transportInfo: "GoRaleigh bus. Downtown walkable. RDU Airport 25 minutes.",
    website: "https://www.raleighconvention.com",
    latitude: 35.7726,
    longitude: -78.6382,
    image: "https://images.unsplash.com/photo-1558642084-fd07fae5282e?w=1920&q=85",
    tier: 3
  },
  {
    slug: "anaheim-convention-center",
    name: "Anaheim Convention Center",
    shortName: "ACC Anaheim",
    city: "Anaheim",
    state: "California",
    stateAbbrev: "CA",
    address: "800 W Katella Ave, Anaheim, CA 92802",
    squareFootage: "1.8 million sq ft",
    exhibitSpace: "815,000 sq ft",
    meetingRooms: 99,
    description: "The Anaheim Convention Center is the largest convention center on the West Coast, located adjacent to the Disneyland Resort and the newly developed Anaheim Resort District.",
    features: [
      "Largest on West Coast",
      "Adjacent to Disneyland Resort",
      "Honda Center nearby",
      "Recently expanded",
      "Anaheim Resort District",
      "Angel Stadium area"
    ],
    majorEvents: [
      "D23 Expo",
      "NAMM Show",
      "Natural Products Expo West",
      "Anime Expo (historically)",
      "WonderCon"
    ],
    nearbyAttractions: ["Disneyland Resort", "Disney California Adventure", "Honda Center", "Angel Stadium"],
    transportInfo: "ART shuttle. ARTIC transit center. John Wayne Airport 20 minutes.",
    website: "https://www.anaheimconventioncenter.com",
    latitude: 33.8003,
    longitude: -117.9205,
    image: "https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=1920&q=85",
    tier: 2
  },
  {
    slug: "hawaii-convention-center-honolulu",
    name: "Hawaii Convention Center",
    shortName: "HCC Hawaii",
    city: "Honolulu",
    state: "Hawaii",
    stateAbbrev: "HI",
    address: "1801 Kalakaua Ave, Honolulu, HI 96815",
    squareFootage: "1.1 million sq ft",
    exhibitSpace: "200,000 sq ft",
    meetingRooms: 47,
    description: "The Hawaii Convention Center offers a unique tropical setting with stunning architecture inspired by Hawaiian culture, located between Waikiki and Ala Moana.",
    features: [
      "Tropical open-air design",
      "Hawaiian cultural elements",
      "Waikiki adjacent",
      "Rooftop terrace",
      "Sustainable operations",
      "Pacific Rim gateway"
    ],
    majorEvents: [
      "APEC events (hosted)",
      "Hawaii Food & Wine Festival",
      "Comic Con Honolulu",
      "Pan Pacific Festival",
      "Hawaii Tourism Authority events"
    ],
    nearbyAttractions: ["Waikiki Beach", "Ala Moana Center", "Diamond Head", "Honolulu Zoo"],
    transportInfo: "TheBus routes. Waikiki walkable. HNL Airport 20 minutes.",
    website: "https://www.hawaiiconvention.com",
    latitude: 21.2911,
    longitude: -157.8382,
    image: "https://images.unsplash.com/photo-1507876466758-bc54f384809c?w=1920&q=85",
    tier: 3
  },
  {
    slug: "greater-columbus-convention-center",
    name: "Greater Columbus Convention Center",
    shortName: "GCCC",
    city: "Columbus",
    state: "Ohio",
    stateAbbrev: "OH",
    address: "400 N High St, Columbus, OH 43215",
    squareFootage: "1.8 million sq ft",
    exhibitSpace: "426,000 sq ft",
    meetingRooms: 75,
    description: "The Greater Columbus Convention Center is located in the heart of downtown Columbus, connected to the Short North Arts District and featuring distinctive architectural murals.",
    features: [
      "Downtown location",
      "Short North adjacent",
      "Architectural murals",
      "Connected to Hilton Columbus",
      "Near Nationwide Arena",
      "Arena District access"
    ],
    majorEvents: [
      "Columbus International Auto Show",
      "Arnold Sports Festival",
      "Origins Game Fair",
      "Ohayocon",
      "Farm Science Review events"
    ],
    nearbyAttractions: ["Short North Arts District", "Nationwide Arena", "North Market", "German Village"],
    transportInfo: "COTA bus. Downtown walkable. CMH Airport 15 minutes.",
    website: "https://www.columbusconventions.com",
    latitude: 39.9726,
    longitude: -83.0007,
    image: "https://images.unsplash.com/photo-1564182842519-8a3b2af3e228?w=1920&q=85",
    tier: 3
  },
  {
    slug: "san-jose-convention-center",
    name: "San Jose McEnery Convention Center",
    shortName: "SJCC",
    city: "San Jose",
    state: "California",
    stateAbbrev: "CA",
    address: "150 W San Carlos St, San Jose, CA 95113",
    squareFootage: "550,000 sq ft",
    exhibitSpace: "165,000 sq ft",
    meetingRooms: 31,
    description: "The San Jose McEnery Convention Center is located in the heart of Silicon Valley, surrounded by tech headquarters and offering easy access to San Francisco Bay Area attractions.",
    features: [
      "Silicon Valley location",
      "Downtown San Jose",
      "Tech industry hub",
      "VTA Light Rail access",
      "SAP Center nearby",
      "Innovation district"
    ],
    majorEvents: [
      "Apple events (historically)",
      "FanimeCon",
      "Big Wow ComicFest",
      "SiliCon",
      "TechCrunch events"
    ],
    nearbyAttractions: ["SAP Center", "San Jose Museum of Art", "Tech Museum of Innovation", "Winchester Mystery House"],
    transportInfo: "VTA Light Rail. Caltrain nearby. SJC Airport 10 minutes.",
    website: "https://www.sanjose.org/plan/convention-center",
    latitude: 37.3293,
    longitude: -121.8879,
    image: "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?w=1920&q=85",
    tier: 3
  },
  {
    slug: "kansas-city-convention-center",
    name: "Kansas City Convention Center",
    shortName: "KCCC",
    city: "Kansas City",
    state: "Missouri",
    stateAbbrev: "MO",
    address: "301 W 13th St, Kansas City, MO 64105",
    squareFootage: "800,000 sq ft",
    exhibitSpace: "388,800 sq ft",
    meetingRooms: 45,
    description: "The Kansas City Convention Center is connected to the Sprint Center and located in the vibrant Power & Light entertainment district of downtown Kansas City.",
    features: [
      "Connected to T-Mobile Center",
      "Power & Light District",
      "Kansas City Live! adjacent",
      "Downtown location",
      "Recently renovated",
      "BBQ capital amenities"
    ],
    majorEvents: [
      "Kansas City Auto Show",
      "Big 12 Tournament events",
      "Planet Comicon",
      "Kansas Livestock Association",
      "Mid-America Trucking Show satellite"
    ],
    nearbyAttractions: ["Power & Light District", "T-Mobile Center", "Union Station", "Country Club Plaza"],
    transportInfo: "KC Streetcar. Downtown walkable. MCI Airport 25 minutes.",
    website: "https://www.kcconvention.com",
    latitude: 39.0979,
    longitude: -94.5825,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85",
    tier: 3
  },
  {
    slug: "new-orleans-ernest-n-morial-convention-center",
    name: "Ernest N. Morial Convention Center",
    shortName: "MCCNO",
    city: "New Orleans",
    state: "Louisiana",
    stateAbbrev: "LA",
    address: "900 Convention Center Blvd, New Orleans, LA 70130",
    squareFootage: "3.1 million sq ft",
    exhibitSpace: "1,100,000 sq ft",
    meetingRooms: 140,
    description: "Located along the Mississippi River, this massive convention center offers unique New Orleans hospitality with Cajun/Creole cuisine and proximity to the French Quarter.",
    features: [
      "Mississippi River location",
      "French Quarter access",
      "Cajun/Creole catering",
      "Great Hall exhibit space",
      "Warehouse District adjacent",
      "Streetcar service"
    ],
    majorEvents: [
      "Essence Festival",
      "New Orleans Boat & Sport Show",
      "Louisiana Restaurant Association",
      "Offshore Technology Conference satellite",
      "NCAA events"
    ],
    nearbyAttractions: ["French Quarter", "Bourbon Street", "Garden District", "Warehouse District"],
    transportInfo: "Streetcar. French Quarter walkable. MSY Airport 20 minutes.",
    website: "https://www.mccno.com",
    latitude: 29.9439,
    longitude: -90.0629,
    image: "https://images.unsplash.com/photo-1568402102990-bc541580b59f?w=1920&q=85",
    tier: 1
  },
  {
    slug: "wisconsin-center-milwaukee",
    name: "Wisconsin Center",
    shortName: "Wisconsin Center",
    city: "Milwaukee",
    state: "Wisconsin",
    stateAbbrev: "WI",
    address: "400 W Wisconsin Ave, Milwaukee, WI 53203",
    squareFootage: "400,000 sq ft",
    exhibitSpace: "188,695 sq ft",
    meetingRooms: 28,
    description: "The Wisconsin Center is located in downtown Milwaukee, featuring Wisconsin's largest ballroom and stunning views of Lake Michigan. Recently expanded to better serve growing demand.",
    features: [
      "Lake Michigan views",
      "Wisconsin's largest ballroom",
      "Downtown location",
      "Fiserv Forum adjacent",
      "Recently expanded",
      "Riverwalk access"
    ],
    majorEvents: [
      "Milwaukee Auto Show",
      "Democratic National Convention 2020 (hosted)",
      "Midwest Gaming Classic",
      "Wisconsin Dental Association",
      "State Bar of Wisconsin"
    ],
    nearbyAttractions: ["Fiserv Forum", "Third Ward", "Milwaukee Art Museum", "Lakefront Brewery"],
    transportInfo: "The Hop streetcar. Downtown walkable. MKE Airport 15 minutes.",
    website: "https://www.wisconsincenter.com",
    latitude: 43.0389,
    longitude: -87.9159,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85",
    tier: 3
  },
  {
    slug: "gaylord-opryland-nashville",
    name: "Gaylord Opryland Resort & Convention Center",
    shortName: "Gaylord Opryland",
    city: "Nashville",
    state: "Tennessee",
    stateAbbrev: "TN",
    address: "2800 Opryland Dr, Nashville, TN 37214",
    squareFootage: "700,000 sq ft",
    exhibitSpace: "288,540 sq ft",
    meetingRooms: 85,
    description: "Gaylord Opryland is a unique resort convention center featuring 9 acres of indoor gardens and waterfalls, located next to the Grand Ole Opry in Nashville.",
    features: [
      "9 acres indoor gardens",
      "2,888 hotel rooms on-site",
      "Grand Ole Opry adjacent",
      "Delta River indoor boat ride",
      "Multiple restaurants",
      "Full resort amenities"
    ],
    majorEvents: [
      "NQC - National Quartet Convention",
      "American Bus Association",
      "Gospel Music Association events",
      "NAMM regional events",
      "Country Radio Seminar"
    ],
    nearbyAttractions: ["Grand Ole Opry", "Opry Mills", "General Jackson Showboat", "Downtown Nashville"],
    transportInfo: "Hotel shuttle. 15 minutes to downtown. BNA Airport 10 minutes.",
    website: "https://www.marriott.com/gaylord-opryland",
    latitude: 36.2106,
    longitude: -86.6951,
    image: "https://images.unsplash.com/photo-1545419913-793b5c9f8e71?w=1920&q=85",
    tier: 3
  },
  {
    slug: "gaylord-texan-grapevine",
    name: "Gaylord Texan Resort & Convention Center",
    shortName: "Gaylord Texan",
    city: "Grapevine",
    state: "Texas",
    stateAbbrev: "TX",
    address: "1501 Gaylord Trail, Grapevine, TX 76051",
    squareFootage: "500,000 sq ft",
    exhibitSpace: "180,000 sq ft",
    meetingRooms: 89,
    description: "Gaylord Texan features a stunning 4.5-acre indoor atrium with Texas-themed environments, located between Dallas and Fort Worth near DFW Airport.",
    features: [
      "4.5-acre indoor atrium",
      "1,814 hotel rooms on-site",
      "Texas-themed environments",
      "Paradise Springs water park",
      "Full resort amenities",
      "Near DFW Airport"
    ],
    majorEvents: [
      "Texas Restaurant Association",
      "Great Wolf Lodge events",
      "Corporate retreats",
      "Technology conferences",
      "Medical association meetings"
    ],
    nearbyAttractions: ["Grapevine Historic District", "DFW Airport", "Globe Life Field", "AT&T Stadium"],
    transportInfo: "Near DFW Airport. Hotel shuttle. Easy highway access.",
    website: "https://www.marriott.com/gaylord-texan",
    latitude: 32.9546,
    longitude: -97.0553,
    image: "https://images.unsplash.com/photo-1545194445-dddb8f4487c6?w=1920&q=85",
    tier: 3
  },
  {
    slug: "gaylord-national-harbor",
    name: "Gaylord National Resort & Convention Center",
    shortName: "Gaylord National",
    city: "National Harbor",
    state: "Maryland",
    stateAbbrev: "MD",
    address: "201 Waterfront St, National Harbor, MD 20745",
    squareFootage: "500,000 sq ft",
    exhibitSpace: "180,000 sq ft",
    meetingRooms: 82,
    description: "Gaylord National features an 18-story atrium overlooking the Potomac River, located at National Harbor with views of Washington DC and the Capital Wheel.",
    features: [
      "18-story atrium",
      "Potomac River views",
      "2,000 hotel rooms on-site",
      "National Harbor location",
      "Capital Wheel adjacent",
      "DC area access"
    ],
    majorEvents: [
      "Conservative Political Action Conference (CPAC)",
      "American Farm Bureau Federation",
      "Association events",
      "Government conferences",
      "Military events"
    ],
    nearbyAttractions: ["National Harbor", "Capital Wheel", "MGM National Harbor", "Washington DC"],
    transportInfo: "Water taxi to DC. Near I-495. DCA Airport 15 minutes.",
    website: "https://www.marriott.com/gaylord-national",
    latitude: 38.7824,
    longitude: -77.0175,
    image: "https://images.unsplash.com/photo-1617581629397-a72507c3de9e?w=1920&q=85",
    tier: 3
  }
];

// Helper functions
export function getVenueBySlug(slug: string): Venue | undefined {
  return venues.find(v => v.slug === slug);
}

export function getVenuesByCity(city: string): Venue[] {
  return venues.filter(v => v.city.toLowerCase() === city.toLowerCase());
}

export function getVenuesByState(state: string): Venue[] {
  return venues.filter(v =>
    v.state.toLowerCase() === state.toLowerCase() ||
    v.stateAbbrev.toLowerCase() === state.toLowerCase()
  );
}

export function getVenuesByTier(tier: 1 | 2 | 3): Venue[] {
  return venues.filter(v => v.tier === tier);
}

export function getAllVenues(): Venue[] {
  return venues;
}

export function getFeaturedVenues(): Venue[] {
  return venues.filter(v => v.tier === 1);
}

export function searchVenues(query: string): Venue[] {
  const q = query.toLowerCase();
  return venues.filter(v =>
    v.name.toLowerCase().includes(q) ||
    v.city.toLowerCase().includes(q) ||
    v.state.toLowerCase().includes(q) ||
    v.majorEvents.some(e => e.toLowerCase().includes(q))
  );
}
