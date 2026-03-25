/**
 * UNIQUE CITY CONTENT - AirFresh Marketing
 * Each city has genuinely localized content per service type.
 * NO templated swaps - real venues, events, culture, and industries.
 */

import { ServiceType } from "./city-services-data";

export interface CityCultureProfile {
  citySlug: string;
  cityName: string;
  state: string;
  population: string;
  marketCharacter: string;
  keyVenues: string[];
  annualEvents: string[];
  neighborhoods: string[];
  localIndustries: string[];
  culturalTouchpoints: string;
}

export interface UniqueServiceContent {
  heroDescription: string;
  localInsight: string;
  whyChooseUs: string[];
  servicesInclude: string[];
  industriesWeServe: string[];
  faq1Question: string;
  faq1Answer: string;
  faq2Question: string;
  faq2Answer: string;
  faq3Question: string;
  faq3Answer: string;
}

export const cityProfiles: Record<string, CityCultureProfile> = {
  "new-york-city": {
    citySlug: "new-york-city",
    cityName: "New York City",
    state: "NY",
    population: "8.3 million (19M metro)",
    marketCharacter: "Fast-paced, trend-setting, globally diverse, hyper-competitive",
    keyVenues: ["Javits Center", "Madison Square Garden", "Times Square", "Barclays Center", "Radio City Music Hall", "Rockefeller Center", "Hudson Yards", "Pier 17"],
    annualEvents: ["New York Fashion Week", "Comic Con NYC", "NYC Marathon", "Tribeca Film Festival", "NYC Pride", "Macy's Thanksgiving Parade", "New Year's Eve in Times Square"],
    neighborhoods: ["SoHo", "Midtown Manhattan", "Williamsburg", "Lower East Side", "Chelsea", "Flatiron District", "Harlem", "DUMBO"],
    localIndustries: ["Finance & Banking", "Fashion & Apparel", "Media & Publishing", "Tech Startups", "Food & Beverage", "Tourism", "Real Estate"],
    culturalTouchpoints: "NYC moves at a relentless pace — locals are savvy, media-literate, and quick to dismiss anything that feels generic or off-brand. Campaigns that feel native to specific NYC neighborhoods outperform those that treat the city as one monolithic market."
  },
  "los-angeles": {
    citySlug: "los-angeles",
    cityName: "Los Angeles",
    state: "CA",
    population: "4 million (13M metro)",
    marketCharacter: "Entertainment-driven, image-conscious, health-focused, influencer culture",
    keyVenues: ["Crypto.com Arena", "SoFi Stadium", "LA Convention Center", "Hollywood Bowl", "Dodger Stadium", "Santa Monica Pier", "Griffith Observatory", "The Forum"],
    annualEvents: ["LA Auto Show", "Coachella & Stagecoach", "LA Film Festival", "LA Pride", "Sunset Strip Music Festival", "AFI Fest", "Taste of LA"],
    neighborhoods: ["Hollywood", "Venice Beach", "Santa Monica", "Silver Lake", "West Hollywood", "Downtown LA (DTLA)", "Culver City", "Melrose"],
    localIndustries: ["Entertainment & Film", "Music & Media", "Fashion / Streetwear", "Health & Wellness", "Cannabis", "Technology (Silicon Beach)", "Aerospace"],
    culturalTouchpoints: "LA audiences are media-literate and trend-driven. Visual storytelling and outdoor activations dominate here. The city's influencer economy means every activation is a content opportunity — build for the camera as much as the crowd."
  },
  "chicago": {
    citySlug: "chicago",
    cityName: "Chicago",
    state: "IL",
    population: "2.7 million (9.5M metro)",
    marketCharacter: "Hardworking, sports-loyal, neighborhood-proud, massive convention hub",
    keyVenues: ["McCormick Place", "United Center", "Wrigley Field", "Guaranteed Rate Field", "Soldier Field", "Navy Pier", "Chicago Theatre", "Merchandise Mart"],
    annualEvents: ["Lollapalooza", "Chicago Air & Water Show", "Chicago Marathon", "Chicago Auto Show", "St. Patrick's Day River Dyeing", "Taste of Chicago", "Chicago Jazz Festival"],
    neighborhoods: ["Magnificent Mile", "Wicker Park", "River North", "Lincoln Park", "West Loop", "Pilsen", "Logan Square", "South Loop"],
    localIndustries: ["Finance & Trading", "Healthcare", "Food & Beverage (Kraft, McDonald's HQ)", "Technology", "Advertising (Leo Burnett, DDB)", "Manufacturing", "Convention & Hospitality"],
    culturalTouchpoints: "Chicagoans take fierce pride in their city and can spot an outsider brand instantly. Deep neighborhood loyalty — Wicker Park is not the same as Lincoln Park, and local campaigns should reflect that. Sports loyalty to the Cubs, Bears, and Blackhawks runs deep and is a legitimate cultural access point."
  },
  "houston": {
    citySlug: "houston",
    cityName: "Houston",
    state: "TX",
    population: "2.3 million (7.3M metro)",
    marketCharacter: "Diverse, sprawling, energy-sector wealth, massive event capacity",
    keyVenues: ["NRG Stadium", "George R. Brown Convention Center", "Toyota Center", "Minute Maid Park", "The Galleria", "Cynthia Woods Mitchell Pavilion", "Smart Financial Centre"],
    annualEvents: ["Houston Livestock Show & Rodeo (world's largest)", "Houston Texans NFL season", "Houston Art Car Parade", "Free Press Summer Fest", "Houston Restaurant Weeks", "H-Town Takeover"],
    neighborhoods: ["Midtown", "Montrose", "The Heights", "River Oaks", "EaDo (East Downtown)", "Greenway Plaza", "Uptown/Galleria District", "Memorial"],
    localIndustries: ["Oil & Gas / Energy", "Healthcare (Texas Medical Center)", "Aerospace (NASA JSC)", "Petrochemical", "Logistics & Port", "Real Estate Development", "Hospitality"],
    culturalTouchpoints: "Houston is one of the most ethnically diverse cities in the US — over 145 languages spoken. Brands win by embracing multicultural audiences authentically. The Houston Rodeo isn't a niche event; it's 3 weeks and 2.5 million attendees — the heartbeat of the city."
  },
  "phoenix": {
    citySlug: "phoenix",
    cityName: "Phoenix",
    state: "AZ",
    population: "1.6 million (5M metro)",
    marketCharacter: "Sun Belt growth city, resort/golf economy, outdoor lifestyle, heavy convention traffic",
    keyVenues: ["Chase Field", "Footprint Center", "State Farm Stadium", "Phoenix Convention Center", "Westgate Entertainment District", "Scottsdale Quarter", "Talking Stick Resort"],
    annualEvents: ["Super Bowl (frequent host)", "Barrett-Jackson Auto Auction", "Waste Management Phoenix Open", "Arizona State Fair", "Innings Festival", "Phoenix Open PGA", "Cactus League Spring Training"],
    neighborhoods: ["Scottsdale Old Town", "Downtown Phoenix", "Tempe Mill Avenue", "Chandler", "Mesa Arts District", "Arcadia", "Biltmore Corridor", "Camelback East"],
    localIndustries: ["Real Estate & Construction", "Healthcare", "Tourism & Hospitality", "Finance (major HQ relocations)", "Technology (Intel, GoDaddy)", "Golf & Recreation", "Retail"],
    culturalTouchpoints: "Phoenix has a massive transplant population and a strong snowbird demographic (Oct–April). The Waste Management Phoenix Open is the most-attended PGA event in the world and a legitimate cultural moment. Resort activations and outdoor experiences are primary channels — but summers require indoor or evening strategies due to extreme heat."
  },
  "san-francisco": {
    citySlug: "san-francisco",
    cityName: "San Francisco",
    state: "CA",
    population: "870,000 (4.7M Bay Area metro)",
    marketCharacter: "Tech-driven, progressive, affluent, early-adopter, sustainability-focused",
    keyVenues: ["Moscone Center", "Chase Center", "Oracle Park", "Bill Graham Civic Auditorium", "Outside Lands at Golden Gate Park", "Salesforce Tower Plaza", "Ferry Building", "Fort Mason Center"],
    annualEvents: ["Outside Lands Music Festival", "Dreamforce (Salesforce)", "SF Pride", "Hardly Strictly Bluegrass", "Bay to Breakers", "SF Marathon", "GDC (Game Developers Conference)"],
    neighborhoods: ["Union Square", "SoMa (South of Market)", "Mission District", "Hayes Valley", "Marina District", "The Castro", "Embarcadero", "North Beach"],
    localIndustries: ["Technology (Salesforce, Uber, Airbnb, Twitter)", "Biotech & Pharma", "Finance (Wells Fargo, Visa)", "Venture Capital", "Hospitality & Tourism", "Food & Wine"],
    culturalTouchpoints: "SF audiences are highly educated, sustainability-conscious, and deeply skeptical of inauthenticity. B Corp credentials, genuine sustainability messaging, and innovation-forward narratives resonate. Greenwashing gets called out publicly and immediately. The tech community moves in tight networks — credibility is everything."
  },
  "dallas": {
    citySlug: "dallas",
    cityName: "Dallas",
    state: "TX",
    population: "1.3 million (7.8M DFW metro)",
    marketCharacter: "Big Texas ambition, corporate-heavy, fashion-forward South, sports-obsessed",
    keyVenues: ["AT&T Stadium (Arlington)", "American Airlines Center", "Kay Bailey Hutchison Convention Center", "Klyde Warren Park", "Fair Park", "Toyota Music Factory", "Dos Equis Pavilion"],
    annualEvents: ["State Fair of Texas (3M+ attendees)", "AT&T Byron Nelson Golf", "Dallas Cowboys NFL season", "Deep Ellum Arts Festival", "Dallas International Film Festival", "Dallas Mavericks Playoffs"],
    neighborhoods: ["Deep Ellum", "Uptown Dallas", "Victory Park", "Design District", "Bishop Arts District", "Oak Cliff", "Knox-Henderson", "Greenville Avenue"],
    localIndustries: ["Finance & Insurance (AT&T, Southwest Airlines HQ)", "Real Estate", "Healthcare", "Technology", "Retail (JCPenney, 7-Eleven HQ)", "Energy", "Fashion & Beauty"],
    culturalTouchpoints: "Dallas has two identities: corporate sophistication and Texas swagger. Campaigns that blend aspirational luxury with authentic Texas pride hit both audiences. Cowboys fandom is practically a civic religion — NFL season creates massive activation windows."
  },
  "austin": {
    citySlug: "austin",
    cityName: "Austin",
    state: "TX",
    population: "978,000 (2.3M metro)",
    marketCharacter: "Tech-meets-music-culture, progressive in a red state, outdoorsy, America's fastest-growing large city",
    keyVenues: ["Austin Convention Center", "Moody Center", "Stubb's Waller Creek Amphitheater", "ACL Live at Moody Theater", "Circuit of the Americas (COTA)", "Barton Springs Pool", "Long Center for the Performing Arts"],
    annualEvents: ["SXSW (South by Southwest)", "Austin City Limits Music Festival (ACL)", "F1 US Grand Prix at COTA", "Austin Film Festival", "Pecan Street Festival", "Austin Reggae Festival", "Old Settler's Music Festival"],
    neighborhoods: ["6th Street Entertainment District", "Rainey Street", "East Austin", "South Congress (SoCo)", "The Domain", "West 6th", "Barton Hills", "Mueller District"],
    localIndustries: ["Technology (Dell, Apple, Tesla, Oracle campus)", "Music & Entertainment", "Film Production", "Startups & VC", "Education (UT Austin)", "Government & Policy", "Food & Beverage"],
    culturalTouchpoints: "Austin is proudly weird — 'Keep Austin Weird' is a genuine civic ethos. Brands that lean into creativity, anti-corporate authenticity, and live-music culture earn loyalty. During SXSW, the city becomes the world's largest brand activation playground; the brands that win are those that add to the experience, not just interrupt it."
  },
  "miami": {
    citySlug: "miami",
    cityName: "Miami",
    state: "FL",
    population: "450,000 (6.2M metro)",
    marketCharacter: "International, luxury-forward, Latin-influenced, nightlife epicenter, year-round outdoor culture",
    keyVenues: ["Miami Beach Convention Center", "Kaseya Center", "LoanDepot Park", "Hard Rock Stadium", "Bayside Marketplace", "Wynwood Walls", "Pérez Art Museum Miami", "Fontainebleau Hotel"],
    annualEvents: ["Art Basel Miami Beach (December)", "Miami Music Week / Ultra Music Festival", "Miami International Boat Show", "Miami Open Tennis", "Calle Ocho Festival", "Miami Film Festival", "Formula E Miami Grand Prix"],
    neighborhoods: ["South Beach", "Wynwood", "Brickell", "Coconut Grove", "Little Havana", "Design District", "Midtown Miami", "Doral"],
    localIndustries: ["International Finance & Banking", "Real Estate (luxury)", "Tourism & Hospitality", "Music & Entertainment", "Fashion", "Healthcare", "Technology (growing hub)", "Latin American Trade & Commerce"],
    culturalTouchpoints: "Miami is unlike any other US city — bilingual, bicultural, and internationally-minded. Spanish-English bilingual campaigns are standard, not optional. Luxury brands, nightlife, and Art Basel have set the aesthetic bar high. Art Basel week in December transforms Wynwood and South Beach into a global activation zone."
  },
  "denver": {
    citySlug: "denver",
    cityName: "Denver",
    state: "CO",
    population: "715,000 (2.9M metro)",
    marketCharacter: "Active, health-conscious, outdoor-first, cannabis-progressive, young professional boom",
    keyVenues: ["Colorado Convention Center", "Ball Arena", "Empower Field at Mile High", "Coors Field", "Red Rocks Amphitheatre", "National Western Complex", "Dick's Sporting Goods Park"],
    annualEvents: ["National Western Stock Show (January)", "Denver Cinco de Mayo (largest in US)", "Great American Beer Festival (GABF)", "Denver PrideFest", "Colorado Rockies season at Coors Field", "Broncos NFL season", "Denver Arts Week"],
    neighborhoods: ["LoDo (Lower Downtown)", "RiNo (River North Art District)", "Cherry Creek", "Capitol Hill", "Highlands", "Washington Park", "Stapleton / Central Park", "Five Points"],
    localIndustries: ["Aerospace & Defense (Lockheed Martin, Boeing)", "Cannabis", "Healthcare", "Outdoor Recreation / Sporting Goods", "Technology (growing)", "Oil & Gas", "Tourism & Ski Industry"],
    culturalTouchpoints: "Denver is the gateway to the Rockies — outdoor lifestyle isn't a demographic, it's the entire culture. Seasonal campaigns tied to ski season (November–April) and summer hiking/festivals dominate. RiNo has emerged as one of the country's best street art and food districts, drawing a creative, young professional crowd. The Broncos are a year-round obsession."
  },
  "seattle": {
    citySlug: "seattle",
    cityName: "Seattle",
    state: "WA",
    population: "750,000 (4M metro)",
    marketCharacter: "Tech-wealthy, coffee-obsessed, progressive, Pacific Northwest outdoorsy, sustainability-first",
    keyVenues: ["Lumen Field", "T-Mobile Park", "Seattle Convention Center (WSCC)", "Climate Pledge Arena", "Pike Place Market", "Seattle Center / Space Needle", "Paramount Theatre"],
    annualEvents: ["Seahawks NFL season", "Bumbershoot Music Festival", "Seattle Seafair (Blue Angels over Lake Washington)", "PAX West Gaming Convention", "Seattle International Film Festival", "Capitol Hill Block Party"],
    neighborhoods: ["Capitol Hill", "South Lake Union (Amazon HQ)", "Pioneer Square", "Belltown", "Queen Anne", "Ballard", "Fremont (self-declared Center of the Universe)", "Columbia City"],
    localIndustries: ["Technology (Amazon, Microsoft, Boeing, Tableau, Valve)", "Aerospace (Boeing)", "Coffee & Food (Starbucks, Amazon Go)", "Healthcare (UW Medicine)", "Video Games", "Maritime & Fishing", "Outdoor Recreation"],
    culturalTouchpoints: "Seattle's identity is inseparable from Amazon, Starbucks, and outdoor culture. PAX West brings 70,000 gaming enthusiasts downtown every year. The rainy climate makes year-round indoor or covered activations essential strategy. Sustainability and social responsibility aren't differentiators here — they're baseline expectations."
  },
  "boston": {
    citySlug: "boston",
    cityName: "Boston",
    state: "MA",
    population: "685,000 (4.9M metro)",
    marketCharacter: "Educated, sports-rabid, tradition-meets-innovation, dense urban college culture",
    keyVenues: ["Fenway Park", "TD Garden", "Boston Convention & Exhibition Center (BCEC)", "Hynes Convention Center", "Gillette Stadium (Foxborough)", "Faneuil Hall Marketplace", "Seaport Hotel & World Trade Center"],
    annualEvents: ["Boston Marathon (Patriots Day, April)", "Red Sox season at Fenway", "South Boston St. Patrick's Day Parade", "Boston Calling Music Festival", "Boston Seafood Expo", "Hubweek Innovation Festival", "Head of the Charles Regatta"],
    neighborhoods: ["Seaport District", "Back Bay", "South End", "Fenway / Kenmore", "Cambridge / Harvard Square", "Allston", "Beacon Hill", "North End"],
    localIndustries: ["Biotech & Pharma (Kendall Square 'Biotech Hub')", "Finance (Fidelity, State Street, Liberty Mutual)", "Education (MIT, Harvard, 40+ colleges)", "Healthcare (Mass General, Dana-Farber)", "Technology", "Defense & Robotics"],
    culturalTouchpoints: "Boston has some of the most intense sports loyalty in America — Red Sox Nation is a real phenomenon, and brands that authentically engage with that culture earn deep loyalty. The city's 250,000-plus student population creates constant audience renewal. Cambridge's innovation culture and Boston's financial culture are different audiences that require different messaging."
  },
  "atlanta": {
    citySlug: "atlanta",
    cityName: "Atlanta",
    state: "GA",
    population: "500,000 (6.1M metro)",
    marketCharacter: "Hip-hop cultural capital, Fortune 500 corporate hub, film production boomtown, Black cultural leadership",
    keyVenues: ["Mercedes-Benz Stadium", "State Farm Arena", "Georgia World Congress Center", "Centennial Olympic Park", "Atlanta Botanical Garden", "Ponce City Market", "Pullman Yards"],
    annualEvents: ["Dragon Con (400K+ attendees, Labor Day)", "Atlanta Film Festival", "Music Midtown", "Atlanta Jazz Festival (free, 300K)", "Peach Bowl / SEC Championship", "Atlanta Dogwood Festival", "ONE MusicFest"],
    neighborhoods: ["Buckhead", "Midtown Atlanta", "Old Fourth Ward (O4W)", "Inman Park", "West End", "Sweet Auburn", "Decatur", "Ponce City Market corridor"],
    localIndustries: ["Film & TV Production ('Hollywood of the South')", "Hip-Hop & Music Industry", "Fortune 500 (Coca-Cola, Delta, Home Depot, UPS HQ)", "Technology (NCR, Mailchimp)", "Logistics", "Finance", "Healthcare (CDC, Emory, Grady)"],
    culturalTouchpoints: "Atlanta is the cultural capital of Black America and the creative South. This shapes everything: music, fashion, food, and how brands communicate. Authentically engaging with Atlanta's Black creative community is not just socially responsible — it's strategically essential in a city where that community drives cultural trends nationally. 'ATL' pride is fierce."
  },
  "las-vegas": {
    citySlug: "las-vegas",
    cityName: "Las Vegas",
    state: "NV",
    population: "650,000 (2.2M metro)",
    marketCharacter: "24/7 entertainment economy, convention mecca, luxury consumer, global tourism destination",
    keyVenues: ["Las Vegas Convention Center (LVCC)", "T-Mobile Arena", "Allegiant Stadium", "MGM Grand Garden Arena", "Venetian Expo", "Mandalay Bay Events Center", "MSG Sphere", "Fremont Street Experience"],
    annualEvents: ["CES (Consumer Electronics Show, 180K attendees)", "SHOT Show", "NAB Show", "EDC Las Vegas", "Las Vegas Grand Prix F1", "Raiders NFL season", "Life is Beautiful Festival", "World Series of Poker"],
    neighborhoods: ["The Strip", "Downtown (Fremont Street)", "Summerlin", "Henderson", "Arts District (18b)", "Chinatown", "Spring Valley", "Centennial Hills"],
    localIndustries: ["Hospitality & Casino", "Entertainment & Production", "Convention & Trade Shows", "Real Estate", "Healthcare (rapidly growing)", "Technology (Switch data centers)", "Retail Luxury", "Restaurant & Food"],
    culturalTouchpoints: "Las Vegas hosts 42 million visitors annually AND has 2.2 million residents who are sophisticated consumers tired of tourist-trap messaging. The best campaigns work for both. CES alone brings 180,000 tech industry decision-makers to one location — a once-a-year opportunity for B2B brands. The new MSG Sphere has transformed what 'experiential' means in Las Vegas."
  },
  "nashville": {
    citySlug: "nashville",
    cityName: "Nashville",
    state: "TN",
    population: "715,000 (2.1M metro)",
    marketCharacter: "Music City soul, America's bachelorette capital, healthcare industry anchor, fastest-growing major city",
    keyVenues: ["Bridgestone Arena", "Nissan Stadium", "Music City Center (Convention)", "Ryman Auditorium", "Ascend Amphitheater", "Nashville Fairgrounds Speedway", "Grand Ole Opry House"],
    annualEvents: ["CMA Fest (June, 80K+)", "Nashville New Year's Eve", "Bonnaroo (nearby Manchester)", "Music City Grand Prix", "Tennessee Whiskey Festival", "Nashville Film Festival", "NHL Predators season"],
    neighborhoods: ["Broadway (Honky Tonk Highway)", "The Gulch", "12 South", "East Nashville", "Germantown", "Midtown", "Sylvan Park", "Wedgewood-Houston (WeHo)"],
    localIndustries: ["Music & Entertainment", "Healthcare (HCA, Vanderbilt, 300+ health companies — Nashville is healthcare's company town)", "Tourism & Hospitality", "Technology (Oracle HQ relocation)", "Real Estate (explosive growth)", "Food & Beverage"],
    culturalTouchpoints: "Nashville is simultaneously America's fastest-growing city, its #1 bachelorette destination, and a genuine music industry powerhouse. Broadway's honky-tonks are world-famous. But Nashville locals are quick to point out the city is far more than 'hot chicken and cowboy hats' — a sophisticated arts, food, and tech scene is growing fast beneath the tourist surface."
  },
  "san-diego": {
    citySlug: "san-diego",
    cityName: "San Diego",
    state: "CA",
    population: "1.4 million (3.3M metro)",
    marketCharacter: "Military-civic culture, perfect weather year-round, beer culture epicenter, Comic-Con phenomenon",
    keyVenues: ["San Diego Convention Center", "Petco Park", "Snapdragon Stadium", "Pechanga Arena SD", "Del Mar Fairgrounds", "SDSU Viejas Arena", "The Rady Shell at Jacobs Park"],
    annualEvents: ["San Diego Comic-Con International (135K)", "San Diego Beer Week (November)", "San Diego County Fair at Del Mar", "Thunderboat Weekend", "Rock 'n' Roll Marathon", "Over the Line Tournament", "Padres baseball season"],
    neighborhoods: ["Gaslamp Quarter", "Little Italy", "North Park", "Hillcrest", "Pacific Beach", "La Jolla", "East Village", "Barrio Logan"],
    localIndustries: ["Defense & Military (largest US military presence)", "Biotech (Illumina, Scripps Research, J&J)", "Tourism & Hospitality", "Craft Beer (150+ breweries)", "Healthcare (Scripps, Sharp)", "Technology (Qualcomm)", "Real Estate"],
    culturalTouchpoints: "San Diego has an easygoing, beach-first identity that runs deep — campaigns that feel rushed or overly aggressive miss the mark here. Comic-Con International is the city's defining annual event, transforming downtown into a 135,000-person fan activation zone. The craft beer scene isn't just a trend — San Diego is the birthplace of West Coast craft beer culture."
  },
  "orlando": {
    citySlug: "orlando",
    cityName: "Orlando",
    state: "FL",
    population: "310,000 (3.3M metro)",
    marketCharacter: "Theme park economy, second-largest convention market in US, tourism-first but diversifying into tech and medical",
    keyVenues: ["Orange County Convention Center (2nd largest in US)", "Amway Center", "Camping World Stadium", "Walt Disney World", "Universal Studios Florida", "SeaWorld Orlando", "Dr. Phillips Center for the Arts"],
    annualEvents: ["IAAPA Expo (global attractions industry HQ)", "Florida Supercon", "Orlando City Soccer season", "Epcot International Food & Wine Festival", "Star Wars: Galactic Nights at Disney", "EDC Florida"],
    neighborhoods: ["International Drive (I-Drive)", "Downtown Orlando", "Lake Nona (Medical City)", "Winter Park", "Thornton Park", "College Park", "Mills 50 District", "Dr. Phillips"],
    localIndustries: ["Tourism & Theme Parks", "Convention & Hospitality", "Healthcare & Medical Simulation (UCF Medical, AdventHealth)", "Defense & Simulation Technology (Lockheed, CAE)", "Technology (growing rapidly)", "Real Estate", "Restaurant & Entertainment"],
    culturalTouchpoints: "Orlando is the world's most visited tourist destination, but it has a 'real Orlando' beyond the theme parks that locals are proud of. The convention market here is second only to Las Vegas — the Orange County Convention Center hosts 200+ events annually. Lake Nona's Medical City is one of the fastest-growing healthcare and biotech campuses in the Southeast."
  },
  "minneapolis": {
    citySlug: "minneapolis",
    cityName: "Minneapolis",
    state: "MN",
    population: "430,000 (3.6M metro)",
    marketCharacter: "Proudly progressive Midwest, creative economy, outdoor-tough, Fortune 500 corporate hub",
    keyVenues: ["U.S. Bank Stadium", "Target Center", "Target Field", "Minneapolis Convention Center", "Mall of America (Bloomington)", "First Avenue Music Venue", "Xcel Energy Center (St. Paul)"],
    annualEvents: ["Minnesota State Fair (2 weeks, 2M attendees — America's largest state fair)", "Twin Cities Marathon", "Soundset Hip Hop Festival", "Minneapolis-St. Paul International Film Festival", "Holidazzle Village (winter)", "Super Bowl legacy events"],
    neighborhoods: ["North Loop", "Uptown Minneapolis", "NE Minneapolis Arts District", "Dinkytown", "Warehouse District", "Seward", "Longfellow", "St. Paul Summit Hill"],
    localIndustries: ["Retail (Target, Best Buy HQ)", "Finance (US Bank, Ameriprise)", "Healthcare (Mayo Clinic, Allina, M Health Fairview)", "Food & Agriculture (Cargill, General Mills, Land O'Lakes)", "Medical Devices (Medtronic)", "Technology"],
    culturalTouchpoints: "Minnesotans have 'Minnesota Nice' — a genuine warmth that brands should authentically match. Don't be slick; be earnest. The State Fair is a profound cultural institution that draws 2 million people in 12 days — serious brands build campaigns around it. Prince's legacy runs deep through the creative community and shapes the city's artistic identity."
  },
  "portland": {
    citySlug: "portland",
    cityName: "Portland",
    state: "OR",
    population: "650,000 (2.5M metro)",
    marketCharacter: "Fiercely independent, sustainability-obsessed, food-forward, anti-corporate by reflex, cycling and outdoors culture",
    keyVenues: ["Oregon Convention Center", "Moda Center", "Providence Park", "Arlene Schnitzer Concert Hall", "McMenamins Crystal Ballroom", "Tom McCall Waterfront Park", "Portland Expo Center"],
    annualEvents: ["Portland Rose Festival (June)", "Waterfront Blues Festival", "Feast Portland (food & drink)", "Portland Jazz Festival", "Pickathon Music Festival (nearby)", "Oregon Brewers Festival", "Pedalpalooza (cycling festival)"],
    neighborhoods: ["Pearl District", "Alberta Arts District", "Mississippi Avenue", "Hawthorne District", "Division Street", "Buckman", "Lloyd District", "Sellwood-Moreland"],
    localIndustries: ["Technology (Intel, Nike, Adidas North America HQ)", "Apparel (Nike, Columbia Sportswear, Adidas)", "Food & Craft Beer", "Healthcare (OHSU)", "Outdoor Recreation", "Sustainability / Cleantech", "Timber & Manufacturing"],
    culturalTouchpoints: "Portland's identity is 'Keep Portland Weird' — and that's not a joke; it's the cost of entry for brands. Authenticity isn't optional. Brands perceived as greenwashing, corporate, or exploitative get publicly called out by Portland's vocal, social-media-fluent consumer base. Local sourcing, sustainability credentials, and genuine community involvement carry enormous weight. Nike and Adidas built global empires from Portland — the city's apparel and outdoor DNA runs deep."
  },
  "charlotte": {
    citySlug: "charlotte",
    cityName: "Charlotte",
    state: "NC",
    population: "875,000 (2.7M metro)",
    marketCharacter: "Banking hub, NASCAR country, rapidly diversifying, Southeast's fastest-growing major city",
    keyVenues: ["Bank of America Stadium", "Spectrum Center", "Charlotte Convention Center", "PNC Music Pavilion", "Truist Field (baseball)", "Charlotte Motor Speedway (Concord)", "Bojangles Coliseum"],
    annualEvents: ["NASCAR All-Star Race at Charlotte Motor Speedway", "Coca-Cola 600 (Memorial Day weekend)", "Carolina Panthers NFL season", "Charlotte SHOUT! Festival", "Charlotte Knights baseball", "Carolina Ale House events", "ACC Championship (frequent host)"],
    neighborhoods: ["Uptown Charlotte", "NoDa (North Davidson Arts District)", "South End", "Plaza Midwood", "Dilworth", "Myers Park", "Wesley Heights", "University City"],
    localIndustries: ["Finance & Banking (Bank of America, Wells Fargo ops HQ, Truist HQ)", "NASCAR & Motorsports industry", "Healthcare (Atrium Health, Novant, CaroMont)", "Technology (IBM, Red Ventures, LendingTree)", "Energy (Duke Energy HQ)", "Real Estate", "Logistics & Distribution"],
    culturalTouchpoints: "Charlotte is America's second-largest banking center after New York, yet NASCAR is equally woven into its cultural fabric — these two identities coexist uniquely here. The city's explosive growth (100+ people relocating here daily) means a massive transplant audience alongside deeply-rooted Carolinians. The NoDa arts district and South End have transformed Charlotte's creative scene in the last decade."
  }
};

type ServiceContentFn = (p: CityCultureProfile) => Partial<UniqueServiceContent>;

const serviceGenerators: Record<string, ServiceContentFn> = {

  "brand-ambassadors": (p) => ({
    heroDescription: `${p.cityName}'s ${p.marketCharacter.split(',')[0].toLowerCase()} market and packed event calendar make it one of the top brand ambassador cities in the country. AirFresh Marketing's locally-rooted ambassadors bring authentic ${p.cityName} energy to every activation — from ${p.annualEvents[0]} sampling campaigns to retail programs in ${p.neighborhoods[0]} and ${p.neighborhoods[1]}. With a population of ${p.population}, this is a market where local credibility matters. Our ${p.cityName} ambassadors aren't outsiders with a clipboard; they're community members who understand the city's culture, speak its language, and know what moves local audiences.`,
    localInsight: `${p.culturalTouchpoints} Our ${p.cityName} ambassador roster is built from local talent who have worked campaigns at ${p.keyVenues[0]}, ${p.keyVenues[1]}, and throughout the ${p.neighborhoods[2]} and ${p.neighborhoods[3]} corridors. When ${p.annualEvents[0]} transforms ${p.cityName}'s energy, our ambassadors are already in position — because they live here. The ${p.localIndustries[0]} and ${p.localIndustries[1]} sectors are particularly active in ${p.cityName}'s brand ambassador market, and we have specialized talent experienced in both.`,
    whyChooseUs: [
      `Locally-recruited team members who actually live in ${p.cityName}'s key neighborhoods`,
      `Proven experience at ${p.keyVenues[0]} and ${p.keyVenues[1]} activations`,
      `Cultural fluency built from real ${p.cityName} market experience, not a training manual`,
      `Scheduling expertise around ${p.annualEvents[0]} and the full ${p.cityName} event calendar`,
      `Bilingual capabilities reflecting ${p.cityName}'s diverse demographics`
    ],
    faq1Question: `What ${p.cityName} events are best for brand ambassador campaigns?`,
    faq1Answer: `${p.cityName} offers prime activation windows around ${p.annualEvents[0]}, ${p.annualEvents[1]}, and ${p.annualEvents[2]}. Our ambassadors have staffed all of these events and know exactly how to maximize engagement in each environment. We also run successful evergreen programs in ${p.neighborhoods[0]} and ${p.neighborhoods[1]} outside of major events.`,
    faq2Question: `Which ${p.cityName} neighborhoods get the best brand ambassador results?`,
    faq2Answer: `For consumer brands, ${p.neighborhoods[0]} and ${p.neighborhoods[1]} consistently deliver high engagement. For professional or B2B audiences, ${p.neighborhoods[2]} and ${p.neighborhoods[3]} are ideal. We map your target demographic to ${p.cityName}'s neighborhood data and recommend routes accordingly.`,
    faq3Question: `How do your ambassadors understand ${p.cityName}'s local culture?`,
    faq3Answer: `We hire locally whenever possible and require ${p.cityName}-specific briefings for every campaign. ${p.culturalTouchpoints.split('.')[0]}. That knowledge isn't something you can train from a slide deck — it comes from living here.`
  }),

  "convention-staffing": (p) => {
    const conventionVenue = p.keyVenues.find(v => v.toLowerCase().includes("conven") || v.toLowerCase().includes("expo") || v.toLowerCase().includes("mart")) || p.keyVenues[0];
    return {
      heroDescription: `${conventionVenue} is one of the premier convention venues in the country, and ${p.cityName}'s event calendar is packed with trade shows, expos, and industry gatherings year-round. AirFresh Marketing provides professional convention staff who know how to perform in this environment — booth management, lead capture, product demonstration, and attendee engagement executed at the highest level. Whether you need a single lead gen specialist or a 30-person booth team for ${p.annualEvents[0]}, we have the trained ${p.cityName} talent to deliver. Our convention staff look the part, know your product, and understand that every interaction is a sales opportunity.`,
      localInsight: `${p.cityName}'s convention market draws industry professionals from across the country. Your booth competition at ${conventionVenue} is intense, and generic staffing shows immediately. Our ${p.cityName} convention team members are trained on lead qualification, CRM tools, and product demonstration before any event. They understand the professional culture of ${p.cityName}'s major trade shows — ${p.annualEvents[0]} attracts a very different audience profile than ${p.annualEvents[2]}, and we staff accordingly.`,
      faq1Question: `What major conventions and trade shows happen in ${p.cityName}?`,
      faq1Answer: `${conventionVenue} hosts dozens of major events annually. Among the highest-profile: ${p.annualEvents[0]} and ${p.annualEvents[1]}. AirFresh maintains a trained bench of convention professionals available for ${p.cityName}'s full trade show calendar, including last-minute staffing needs.`,
      faq2Question: `Can you staff a booth at short notice for a ${p.cityName} show?`,
      faq2Answer: `Yes. We maintain pre-trained convention staff in ${p.cityName} and can deploy in 24–72 hours for urgent requests, depending on team size. For larger teams or specialized product knowledge requirements, 1–2 weeks lead time is ideal.`,
      faq3Question: `Do your ${p.cityName} convention staff handle lead capture?`,
      faq3Answer: `Absolutely. Our convention team is trained on badge scanners, lead capture apps, and manual qualification processes. We coordinate directly with your sales team on lead scoring criteria so every contact captured at your ${p.cityName} booth meets your qualification standards.`
    };
  },

  "event-management": (p) => ({
    heroDescription: `${p.cityName} sets a high bar for events. ${p.annualEvents[0]} and ${p.annualEvents[1]} have shown what world-class execution looks like here, and that standard shapes what audiences expect from corporate events and brand activations in this market. AirFresh Marketing's ${p.cityName} event management team handles the entire lifecycle — concept, venue selection at ${p.keyVenues[0]} or ${p.keyVenues[2]}, logistics, staffing, permits, and post-event reporting — so your team can focus on the experience itself. We've managed events from intimate 50-person product launches to large-scale activations at major ${p.cityName} venues, and we bring the same operational discipline to every scale.`,
    localInsight: `Our vendor network in ${p.cityName} has been built over years of hands-on work in ${p.neighborhoods[0]}, ${p.neighborhoods[1]}, and at ${p.keyVenues[0]}. We have established relationships with ${p.cityName}'s best A/V companies, caterers, security firms, and venue managers — and those relationships mean faster problem-solving and better pricing. We navigate ${p.cityName} city permits, insurance requirements, and venue-specific compliance in-house, which eliminates the coordination chaos that derails most corporate events. When it comes to events tied to ${p.annualEvents[0]}, we book early and build contingencies — because in ${p.cityName}, competition for resources during peak seasons is fierce.`,
    faq1Question: `What types of corporate events do you manage in ${p.cityName}?`,
    faq1Answer: `Our range spans intimate product launches (50 guests) to large-scale brand activations at ${p.keyVenues[0]} (10,000+ attendees). We manage corporate events, product launches, brand pop-ups, experiential activations, client appreciation events, and conference management throughout ${p.cityName} and surrounding areas.`,
    faq2Question: `Do you handle city permits for outdoor events in ${p.cityName}?`,
    faq2Answer: `Yes — permit acquisition, coordination with ${p.cityName} municipal departments, insurance requirements, and all venue compliance needs are managed in-house. We've done this dozens of times and know the process, timeline, and contacts involved.`,
    faq3Question: `How far in advance should we book event management in ${p.cityName}?`,
    faq3Answer: `For major venue bookings like ${p.keyVenues[0]}, 8–12 weeks minimum. Smaller activations can move in 3–4 weeks. During peak periods around ${p.annualEvents[0]}, venue and vendor availability tightens significantly — contact us early.`
  }),

  "experiential-marketing": (p) => ({
    heroDescription: `${p.cityName} audiences have seen thousands of brand activations. They know what's generic, and they ignore it. AirFresh Marketing creates experiential campaigns that feel genuinely native to ${p.cityName} — designed around local culture, staged in the right environments, and built to generate real conversation and social sharing. From immersive pop-ups in ${p.neighborhoods[0]} to large-scale brand experiences tied to ${p.annualEvents[0]}, our ${p.cityName} activations earn media coverage and measurable brand recall. We don't just build experiences — we build ${p.cityName} experiences, which is a different thing entirely.`,
    localInsight: `The most effective experiential campaigns in ${p.cityName} begin with a deep understanding of what makes the city unique. ${p.culturalTouchpoints} We map your brand to the right ${p.cityName} touchpoints — ${p.neighborhoods[0]} and ${p.neighborhoods[2]} attract very different audiences, and ${p.annualEvents[0]} creates a different mindset than ${p.annualEvents[2]}. Our design process identifies the intersection of your brand's narrative and ${p.cityName}'s cultural calendar, then builds an activation that belongs in that moment rather than interrupting it.`,
    faq1Question: `What experiential formats work best in ${p.cityName}?`,
    faq1Answer: `${p.cityName}'s market responds well to activations that feel locally-rooted: neighborhood pop-ups in ${p.neighborhoods[0]}, event-adjacent brand experiences tied to ${p.annualEvents[0]}, and interactive installations that reflect the city's aesthetic sensibility. We design every activation to be shareable on social media because in ${p.cityName}, earned digital reach amplifies in-person impact significantly.`,
    faq2Question: `Can you build an experiential campaign around a specific ${p.cityName} event?`,
    faq2Answer: `Yes — event-adjacent activations are often our highest-ROI campaigns. We have experience activating legally and compellingly around ${p.annualEvents[0]}, ${p.annualEvents[1]}, and ${p.annualEvents[2]}, using event energy to dramatically amplify brand exposure without the cost of official sponsorship.`,
    faq3Question: `How do you measure experiential campaign ROI in ${p.cityName}?`,
    faq3Answer: `We track impressions, average engagement dwell time, social shares and mentions, opt-in/sample conversion rates, and post-campaign brand recall surveys. For ${p.cityName} specifically, we benchmark against local norms so your results have market context.`
  }),

  "guerilla-marketing": (p) => ({
    heroDescription: `The best guerilla marketing in ${p.cityName} doesn't feel like marketing — it feels like the city itself. AirFresh uses ${p.cityName}'s streets, culture, and energy as the canvas for unconventional campaigns that earn attention paid media can't buy. We know which ${p.cityName} locations generate maximum social sharing, how to navigate permit requirements for legal executions, and how to design activations that the local press and social media audiences in ${p.neighborhoods[0]} and ${p.neighborhoods[1]} will actually care about. From unexpected installations to coordinated street-level moments around ${p.annualEvents[0]}, our guerilla campaigns generate buzz that spreads well beyond the activation footprint.`,
    localInsight: `Guerilla marketing in ${p.cityName} lives or dies by location intelligence and cultural read. ${p.neighborhoods[0]} pedestrian traffic peaks at different hours than ${p.neighborhoods[2]}, and the audience demographics are entirely different. Our ${p.cityName} team has mapped the city's attention economy: where people slow down, where they look up, where they share what they see. ${p.culturalTouchpoints.split('.')[0]}. That local knowledge — combined with our creative team's experience designing for earned media — is what separates a forgettable sidewalk stunt from a campaign that trends in ${p.cityName}.`,
    faq1Question: `What guerilla tactics get the best response in ${p.cityName}?`,
    faq1Answer: `In ${p.cityName}, the highest-impact tactics include large-format unexpected installations in ${p.neighborhoods[0]}, social-seeded flash moments in high-traffic zones near ${p.keyVenues[0]}, and culturally-resonant creative in the ${p.neighborhoods[2]} corridor. We match tactics to your brand's personality and target audience's location patterns.`,
    faq2Question: `Do you handle permits for street activations in ${p.cityName}?`,
    faq2Answer: `Yes. We manage ${p.cityName}'s permit process for sidewalk activations, projections, large-scale installs, and activity in public spaces. We know the timeline, the contacts, and the requirements — and we design campaigns to work within legal parameters without losing creative impact.`,
    faq3Question: `How do you prevent guerilla campaigns from backfiring in ${p.cityName}?`,
    faq3Answer: `We research local sensitivities, neighborhood dynamics, and current community conversations before every campaign design. ${p.cityName}'s consumers are discerning — we make sure every activation is clearly intentional, creative, and adds value to the street rather than extracting it.`
  }),

  "marketing-mascots": (p) => ({
    heroDescription: `A great brand mascot creates photo moments that live on social media for years. AirFresh Marketing's professional mascot performers in ${p.cityName} bring your brand character to life at events, retail activations, and fan experiences with the training, energy, and safety protocols that large-scale events demand. Our ${p.cityName} mascot team has performed at ${p.keyVenues[0]}, ${p.keyVenues[1]}, and during major events including ${p.annualEvents[0]}. They're experienced with crowd dynamics in ${p.cityName}'s specific venues, professionally trained in safe character interaction, and skilled at generating the branded photo moments that become organic social media content for your brand.`,
    localInsight: `${p.cityName}'s event calendar creates natural stages for mascot activations throughout the year. ${p.annualEvents[0]} and ${p.annualEvents[1]} draw audiences that are already in a celebratory, photo-taking mindset — exactly the right context for a compelling mascot appearance. Our ${p.cityName} performers understand the heat, crowd density, and layout of the city's major event spaces. We coordinate photography and social media capture as part of every appearance, turning mascot interactions into branded content assets with real shelf life.`,
    faq1Question: `What ${p.cityName} events work best for mascot appearances?`,
    faq1Answer: `Mascot activations are particularly effective at ${p.annualEvents[0]}, ${p.annualEvents[1]}, retail grand openings, and fan activation zones near ${p.keyVenues[0]}. Family-oriented events throughout ${p.cityName}'s parks and community spaces are also strong opportunities — we can recommend a full calendar of high-impact appearance opportunities.`,
    faq2Question: `Can mascots work at indoor and outdoor ${p.cityName} venues?`,
    faq2Answer: `Yes. Our performers and costume inventory are equipped for both indoor convention environments and ${p.cityName}'s outdoor events. We account for ${p.cityName}'s specific climate and seasonal conditions in all bookings, including appropriate costume ventilation and performer rotation schedules for long outdoor appearances.`,
    faq3Question: `Can you design and build an original mascot for our ${p.cityName} brand?`,
    faq3Answer: `Yes — we offer full mascot program development: character concept, costume design and fabrication, performer casting and training, and ongoing campaign management. We've built original mascot programs for ${p.cityName}-area brands and national companies activating in the ${p.cityName} market.`
  }),

  "promotional-models": (p) => ({
    heroDescription: `Your promotional models are often the first human face of your brand that ${p.cityName} consumers see. AirFresh Marketing's talent pool is drawn from ${p.cityName}'s genuinely diverse local population — people who reflect the city's demographics because they live here. Our promotional models are trained specifically on your brand's products, messaging, and campaign objectives before any activation begins, ensuring professional and consistent representation across every consumer interaction. From high-volume sampling programs at ${p.keyVenues[0]} to premium brand presentations at ${p.keyVenues[1]}, our ${p.cityName} talent delivers the right combination of professional appearance, product knowledge, and authentic engagement.`,
    localInsight: `${p.cityName}'s ${p.marketCharacter.split(',')[0].toLowerCase()} consumer base responds to authentic, relatable representation. Our talent recruitment for ${p.cityName} prioritizes people who genuinely reflect the city's demographics and cultural energy — not generic staffing from a national database that's never set foot in ${p.neighborhoods[0]}. For activations tied to ${p.annualEvents[0]}, we select talent who understand the event's culture and audience. The result is promotional staffing that feels like a natural part of ${p.cityName}'s scene. We also have bilingual talent available to reach ${p.cityName}'s diverse communities.`,
    industriesWeServe: p.localIndustries,
    faq1Question: `Which industries use promotional models most in ${p.cityName}?`,
    faq1Answer: `In ${p.cityName}, the strongest demand comes from ${p.localIndustries[0]}, ${p.localIndustries[1]}, and ${p.localIndustries[2]} brands running product launches, trade show appearances, and consumer sampling campaigns. We have specialized talent with experience in each sector.`,
    faq2Question: `Do you provide bilingual promotional models in ${p.cityName}?`,
    faq2Answer: `Yes. Given ${p.cityName}'s diverse demographics, bilingual capabilities — particularly Spanish — are frequently needed and readily available in our talent pool. We can also source Mandarin, Portuguese, and other language capabilities for campaigns targeting specific ${p.cityName} communities.`,
    faq3Question: `How are promotional models selected and prepared for a ${p.cityName} campaign?`,
    faq3Answer: `Selection is based on demographic fit, product experience, language skills, and professional presentation. Every model then completes brand-specific training covering your products, talking points, and campaign goals. We don't send talent to your ${p.cityName} activation until they can represent your brand confidently and consistently.`
  }),

  "street-team-marketing": (p) => ({
    heroDescription: `Street team marketing in ${p.cityName} is about local presence that feels genuine, not grassroots marketing that feels staged. AirFresh Marketing's ${p.cityName} street teams are locally-recruited, energetic, and trained to represent your brand authentically across ${p.neighborhoods[0]}, ${p.neighborhoods[1]}, ${p.neighborhoods[2]}, and every high-traffic corridor in between. We've run sampling and distribution campaigns throughout ${p.cityName} during events like ${p.annualEvents[0]}, on game days near ${p.keyVenues[0]}, and in the daily foot traffic patterns of the city's best neighborhoods. Every team member uses real-time geo-reporting, so you know exactly where your campaign is landing and what's converting.`,
    localInsight: `The most effective street team routes in ${p.cityName} shift with the season, event calendar, and time of day. Our ${p.cityName} field managers have mapped these patterns over years of campaigns: they know when ${p.neighborhoods[0]} peaks, how traffic moves around ${p.keyVenues[0]} on event days, and which routes through ${p.neighborhoods[2]} yield the best sampling conversion. ${p.culturalTouchpoints.split('.')[0]}. We use that knowledge to build routes and timing that maximize impressions and minimize waste — because every sample has a cost, and we take that seriously.`,
    faq1Question: `Which ${p.cityName} neighborhoods should street team campaigns target?`,
    faq1Answer: `For consumer brands, ${p.neighborhoods[0]} and ${p.neighborhoods[1]} deliver consistently high engagement in ${p.cityName}. For professional or B2B campaigns, ${p.neighborhoods[2]} and ${p.neighborhoods[3]} are the right environment. We build route recommendations based on your specific target demographic and campaign objectives.`,
    faq2Question: `Can street teams activate during ${p.annualEvents[0]} in ${p.cityName}?`,
    faq2Answer: `Yes — ${p.annualEvents[0]} dramatically amplifies street team reach in ${p.cityName}. We plan routes to legally operate in and around event zones, capturing the elevated foot traffic that major ${p.cityName} events generate. Advance planning is essential for event-adjacent activations — contact us early for peak-season campaigns.`,
    faq3Question: `How do you report street team results for ${p.cityName} campaigns?`,
    faq3Answer: `Every team member uses our mobile reporting platform to log samples distributed, materials handed out, QR scans, and consumer conversations — by specific location within ${p.cityName}. You receive a full campaign report with heat maps, distribution counts, route performance data, and qualitative consumer feedback within 24 hours of campaign completion.`
  })

};

export function getUniqueCityServiceContent(
  citySlug: string,
  service: ServiceType,
  cityName: string,
  stateName: string
): UniqueServiceContent | null {
  const profile = cityProfiles[citySlug];
  if (!profile) return null;

  const generator = serviceGenerators[service.slug];
  if (!generator) return null;

  const base: UniqueServiceContent = {
    heroDescription: `Looking for professional ${service.name.toLowerCase()} in ${cityName}? AirFresh Marketing delivers exceptional ${service.title.toLowerCase()} services throughout the ${cityName} metro area, backed by 20+ years of experience and a network of trained local professionals.`,
    localInsight: `${cityName} offers unique opportunities for ${service.name.toLowerCase()}. Our team leverages local events, venues, and cultural touchpoints to maximize your campaign's impact.`,
    whyChooseUs: [
      `Local market knowledge in ${cityName}`,
      `Experienced, vetted professionals`,
      `Proven track record with 300+ national brands`,
      `Full-service support from planning to execution`,
      `Data-driven results and comprehensive reporting`
    ],
    servicesInclude: [
      'Strategic campaign planning and development',
      'Professional talent recruitment and training',
      'On-site management and coordination',
      'Real-time reporting and analytics',
      'Post-campaign analysis and insights'
    ],
    industriesWeServe: profile.localIndustries,
    faq1Question: `How quickly can you deploy ${service.name.toLowerCase()} in ${cityName}?`,
    faq1Answer: `We can typically deploy within 48-72 hours for urgent requests, though we recommend 1-2 weeks lead time for optimal planning.`,
    faq2Question: `Do you cover the full ${cityName} metro area?`,
    faq2Answer: `Yes — we cover all of ${cityName} and surrounding suburbs.`,
    faq3Question: `What makes AirFresh different in ${cityName}?`,
    faq3Answer: `Local talent, genuine market knowledge, and a 20+ year track record with national brands.`
  };

  const unique = generator(profile);
  return { ...base, ...unique };
}

export function hasCityProfile(citySlug: string): boolean {
  return citySlug in cityProfiles;
}
