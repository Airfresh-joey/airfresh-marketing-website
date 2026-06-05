# Air Fresh Website Growth Work Log

## 2026-06-05 MDT (Run 46)

Goal: City page depth — add enriched content for Anchorage AK (Priority #5 continued).

Audit:
- 48th city enriched; selected Anchorage AK as highest-leverage unenriched market (next on list per Run 45 WORK_LOG)
- Anchorage: 300,000 residents = 41% of Alaska's entire state population in one metro; Alaska's commercial, financial, and logistical capital
- Ted Stevens Anchorage International Airport (ANC) — #4 cargo airport in the world by landed cargo weight; 8,000+ cargo flights/month; FedEx, UPS, DHL, Amazon Air, Cargolux, Nippon Cargo, Cathay Pacific Cargo, Atlas Air hub
- Iditarod Trail Sled Dog Race Ceremonial Start (4th Ave Downtown — 80,000+ in-person spectators; global media to 50+ countries; early March; "The Last Great Race on Earth")
- Fur Rendezvous Winter Carnival (Rondy — 100,000+ attendance, 10+ days, late February — Anchorage's oldest and largest winter festival since 1936)
- Alaska State Fair (Palmer, 45mi north, 330,000+ attendance, 12 days late August — Alaska's largest annual event)
- Joint Base Elmendorf-Richardson (JBER — 673,280 acres, 13,000+ active-duty, 11th Air Force HQ, F-22 3rd Wing, 1st Stryker Brigade 25th ID)
- Hilcorp Alaska (Alaska's largest private employer, 1,700+ employees) + ConocoPhillips Alaska (200,000+ bbl/day North Slope, Downtown ANC HQ)
- Dena'ina Civic and Convention Center (49,000 sq ft, 2,500-seat main hall — Alaska's largest convention facility)
- Providence Alaska Medical Center (401 beds, Level II Trauma — Southcentral Alaska's largest hospital)
- Alaska Regional Hospital (HCA Healthcare, 250 beds) + Alaska Native Medical Center (ANTHC, 173 beds, 65,000+ Alaska Native patients)
- Alaska Federation of Natives Annual Convention (AFN — 3,000+ delegates)
- Alaska Oil and Gas Association (AOGA) Annual Conference (Dena'ina, January)
- Alaska Native cultural competency callout: ANCSA structures, Elders-first protocol — unique national differentiator
- Alyeska Resort Girdwood (1,600+ skiable acres — Alaska's premier ski resort, corporate retreat circuit)

Shipped (commit 4bdc3eb) — new file server/city-content/anchorage.ts:
- anchorage-brand-ambassadors: Iditarod Ceremonial Start (80K+ spectators)/Fur Rendezvous (100K+)/Alaska State Fair (330K+); JBER/Hilcorp/ConocoPhillips/SLB oil & gas corporate; Providence Alaska/Alaska Regional/ANMC pharma NSM; Ted Stevens ANC #4 world cargo hub; AMCO compliance; $22-42/hr; 6 FAQs; 10 areasServed
- anchorage-experiential-marketing: Iditarod 4th Ave activation (cold-weather kit/heated tents standard); Rondy multi-event strategy; Alaska State Fair pavilion guide; City of Anchorage + ANC airport + AMCO permit guide; 4 FAQs
- anchorage-event-management: Dena'ina Convention Center specialist; AOGA/AFN conventions; Providence Alaska/Alaska Regional pharma NSM (FDA Sunshine Act); JBER military gala (base-access credentialed); Hotel Captain Cook/Marriott/Hilton circuit; $22-50/hr; 4 FAQs
- anchorage-convention-staffing: 4-vertical (oil & gas/AOGA, defense/JBER, healthcare/pharma/Sunshine Act, Alaska Native/AFN/ANCSA); North Slope-familiar UAA engineering alumni pipeline; Alaska Native cultural competency unique national differentiator; AMCO standard; $25-55/hr; 5 FAQs
- anchorage-promotional-models: North Slope oil industry familiar/genuine Alaska outdoor lifestyle/pharma clinical FDA Sunshine Act/JBER-protocol-fluent/AMCO-certified; Iditarod sponsor cold-weather activation bundle; Hotel Captain Cook/Hilton/Alyeska Resort luxury circuit; $28-65/hr; 4 FAQs

Checks:
- npm run check passed (TypeScript clean, 0 errors)
- npm run build passed (6,324 static pages — 9 Anchorage city-service HTML files confirmed in .next/server/app/city-services/)
- Local build verified: anchorage-brand-ambassadors.html — Iditarod 28×, Fur Rendezvous 28×, Alaska State Fair 20×, Joint Base Elmendorf 12×, Alaska Regional Hospital 10×; FAQPage JSON-LD confirmed ✓
- Committed 4bdc3eb, pushed to origin/main
- Live HTTP 200 confirmed on /city-services/anchorage-brand-ambassadors and /city-services/anchorage-convention-staffing ✓

Status after this run:
- 48 cities now have enriched city-service content (240 enriched pages total)
- 110 cities remain on thin fallback templates

Next actions:
- Priority #5 continued: Boise ID, Lincoln NE, Chandler AZ, Scottsdale AZ

## 2026-06-05 MDT (Run 45)

Goal: City page depth — add enriched content for Laredo TX (Priority #5 continued).

Audit:
- 47th city enriched; selected Laredo TX as highest-leverage unenriched US-Mexico border / international trade market (next on list per Run 44 WORK_LOG)
- Laredo: 280,000 US pop / 650,000+ binational metro, #1 US inland port by cargo value (handles ~40% of all US-Mexico overland trade)
- World Trade Bridge (FM 1472/IH-35 North — 4M+ commercial truck crossings/year; facilitates $300B+ annual US-Mexico trade — largest commercial land border crossing in the Western Hemisphere)
- Four international bridges: Gateway to the Americas (Bridge 1), Juárez-Lincoln (Bridge 2), World Trade Bridge, Columbia-Solidarity Bridge
- Washington's Birthday Celebration (12 days, February — 400,000+ attendance — world's largest WBC; continuous since 1898; Jalapeño Festival [20K+], WBC Grand Parade [50K+ spectators], International Bridge Ceremony, Society of Martha Washington Colonial Ball)
- Eagle Ford Shale (Webb County southwestern edge — Laredo Petroleum [NYSE: LPI], ConocoPhillips Webb County ops, Centennial Resource/Jagged Peak, Penn Virginia)
- Laredo Medical Center (HCA Healthcare, 326 beds — primary pharma NSM venue) + Doctors Hospital of Laredo (500+ beds) + CHRISTUS Laredo
- 96%+ Hispanic/Latino population — most Hispanic major US city; Spanish is the dominant daily business and consumer language
- Texas A&M International University (TAMIU, 8,000+ students — College of Nursing and Health Sciences, A.R. Sanchez Business School, Tesoro Arena 5,600 cap)
- Mall Del Norte (1.1M sq ft — one of highest revenue/sq ft enclosed malls in US due to Mexico retail tourism; $2B+ annual cross-border retail purchasing)
- Laredo Energy Arena (10,000+ cap — Laredo Heat SC USL League One, Laredo Jackrabbits AHL-affiliated hockey, concerts)
- Added Laredo to cities-data.ts (was missing — required for generateStaticParams to build 9 service-specific HTML pages)
- TABC alcohol sampling compliance; bilingual Spanish-English standard

Shipped (commit 111575b) — new file server/city-content/laredo.ts:
- laredo-brand-ambassadors: World Trade Bridge (#1 US inland port, $300B+ annual trade)/Washington's Birthday Celebration (400K+, world's largest WBC)/Eagle Ford Shale Webb County anchors; Laredo Medical Center (HCA 326 beds)/Doctors Hospital (500+ beds)/CHRISTUS Laredo pharma NSM; 96%+ Hispanic bilingual Spanish-English standard (Spanish-dominant daily language); TAMIU (8K+ students); Mall Del Norte Mexico retail tourism; Laredo Energy Arena; TABC compliance; $20-38/hr; 6 FAQs; 10 areasServed
- laredo-experiential-marketing: WBC Jalapeño Festival (20K+)/WBC Grand Parade (50K+ spectators)/WBC Carnival Grounds activation strategy; Mall Del Norte Mexico cross-border retail tourism ($2B+) — in-store Spanish-dominant sampling strategy; World Trade Bridge B2B customs technology and logistics trade event corridor; City of Laredo permit guide + TABC; 4 FAQs
- laredo-event-management: Laredo Civic Center (Downtown, Rio Grande) + Laredo Energy Arena (10K+) specialist; Laredo Medical Center/Doctors Hospital pharma NSM (FDA Sunshine Act); Eagle Ford Webb County energy corporate events; US CBP/Border Patrol appreciation events; Webb County government civic events; bilingual Spanish-English standard; $22-48/hr; 3 FAQs
- laredo-convention-staffing: 4-vertical approach (international trade-logistics/customs tech/maquiladora/Border Trade Alliance, healthcare-pharma/FDA Sunshine Act, energy-Eagle Ford/petroleum engineering, government-border security/CBP/Border Patrol); TABC-certified; World Trade Bridge customs technology expos; bilingual; $25-48/hr; 5 FAQs
- laredo-promotional-models: background-matched (international trade-logistics-aware for customs tech shows, Eagle Ford petroleum engineering for energy corporate events, pharma/clinical FDA Sunshine Act-compliant bilingual for Laredo Medical/Doctors Hospital, Mexico retail tourism-fluent for Mall Del Norte/Laredo Outlet Shoppes cross-border campaigns, TABC-certified spirits/wine); Laredo Marriott/Hilton Garden Inn luxury venue circuit; $28-60/hr; 4 FAQs

Checks:
- npm run check passed (TypeScript clean)
- npm run build passed (9 Laredo city-service HTML files confirmed in .next/server/app/city-services/)
- Local build verified: laredo-brand-ambassadors.html — 20 keyword signal matches (World Trade Bridge/Washington's Birthday/Eagle Ford/Laredo Medical/TABC/96% Hispanic); FAQPage JSON-LD confirmed ✓
- Committed 111575b, pushed to origin/main
- Live HTTP 200 confirmed on /city-services/laredo-brand-ambassadors and /city-services/laredo-convention-staffing ✓

Status after this run:
- 47 cities now have enriched city-service content (235 enriched pages total)
- 111 cities remain on thin fallback templates

Next actions:
- Priority #5 continued: Anchorage AK, Boise ID, Lincoln NE, Chandler AZ

## 2026-06-05 MDT (Run 44)

Goal: City page depth — add enriched content for Corpus Christi TX (Priority #5 continued).

Audit:
- 46th city enriched; selected Corpus Christi TX as highest-leverage unenriched South Texas / Coastal Bend market (next on list per Run 43 WORK_LOG)
- Corpus Christi: 450,000 metro, 4th-largest Texas city, South Texas's premier port city and #1 US crude oil export hub
- Naval Air Station Corpus Christi (largest naval aviation training base in the United States — 11,000+ military/civilian; 92nd Naval Air Station training pipeline producing 550+ pilots/year; Corpus Christi Army Depot adjacent; Coastal Bend's single largest employer)
- Port of Corpus Christi (#1 crude oil export seaport in the United States — 1.5M+ bbl/day; 4th busiest US seaport by total tonnage; 20+ deep-water berths; $13B+ capital investment underway)
- Valero Energy CC West Refinery (325,000+ bbl/day); Flint Hills Resources-Koch Industries East Plant (290,000+ bbl/day); Citgo Petroleum CC (250,000+ bbl/day) — combined ~900K+ bbl/day, largest refining concentration outside Houston Ship Channel
- Christus Spohn Health System (Memorial 432 beds + Shoreline 316 beds + South 365 beds + 30+ clinics — dominant Coastal Bend health system, 11-county service area)
- Driscoll Children's Hospital (South Texas's only freestanding children's hospital, 190+ beds, Level II Pediatric Trauma, 26-county service area)
- Texas A&M University-Corpus Christi (12,000+ students, island campus Oso Bay, NCAA Division I Islanders)
- American Bank Center (Arena 10,400 cap + Exhibit Hall 33,000+ sq ft + Auditorium 2,500 seats — directly on Corpus Christi Bay)
- Selena Quintanilla-Pérez (born/raised/died in CC; Selena Museum; Mirador de la Flor; Selena Forever Weekend 30,000+ fans)
- Corpus Christi Hooks (Whataburger Field, 5,000 cap — Double-A Central, Astros affiliate)
- USS Lexington Museum (WWII aircraft carrier, Inner Harbor — 600,000+ annual visitors)
- Texas State Aquarium (North Beach — 600,000+ annual visitors)
- Buc Days (200,000+, late April–May); WindFest (March — windsurfing capital NA); Bay Fest (20,000+/day, October)
- 64%+ Hispanic/Latino population — bilingual Spanish-English standard; Tejano cultural identity
- Padre Island National Seashore (world's longest undeveloped barrier island); Port Aransas TX (22mi NE, resort market)
- TABC alcohol sampling compliance

Shipped (commit 0d82800) — new file server/city-content/corpus-christi.ts:
- corpus-christi-brand-ambassadors: NAS Corpus Christi (11K+, largest US naval aviation training base)/Port of Corpus Christi (#1 US crude oil export seaport)/Valero-Flint Hills-Citgo refining corridor; Selena Forever Weekend (30K+)/Buc Days/American Bank Center/Whataburger Field venues; Christus Spohn Health (3 campuses)/Driscoll Children's Hospital (26-county area) pharma NSM market; bilingual Spanish-English (64%+ Hispanic); TABC compliance; $20-38/hr; 6 FAQs; 10 areasServed
- corpus-christi-experiential-marketing: Shoreline Drive/Bayfront activation (Selena Mirador/USS Lexington/Texas State Aquarium); Selena legacy heritage brand activations (US Hispanic market); Buc Days (200K+)/WindFest/Bay Fest (20K+/day)/Great Texas Birding Classic; Padre Island/Port Aransas Cinnamon Shore resort circuit; City of Corpus Christi Special Events + TABC permit guide; 4 FAQs
- corpus-christi-event-management: American Bank Center (Arena 10.4K/Exhibit Hall 33K sq ft/Auditorium 2.5K) + Omni CC Bayfront (470 rooms) specialist; Christus Spohn/Driscoll pharmaceutical NSM (FDA Sunshine Act); Valero/Flint Hills/Citgo energy corporate events; NAS Corpus Christi Navy Ball/military functions; $22-48/hr; 3 FAQs
- corpus-christi-convention-staffing: American Bank Center Exhibit Hall specialist; 4-vertical (energy/petrochemical/API South Texas, healthcare/pharma/Christus Spohn/Driscoll, defense/NAS CC/AUSA, maritime/agriculture); bilingual Spanish-English standard; TAMUCC coverage; Laredo TX (150mi west, busiest US inland port) regional reach; $25-48/hr; 5 FAQs
- corpus-christi-promotional-models: background-matched (pharmaceutical/clinical for Christus Spohn/Driscoll FDA Sunshine Act NSMs, energy/petroleum for Valero/Flint Hills/Citgo, military-community-fluent for NAS CC, coastal/marine for Texas State Aquarium/Port Aransas, Selena/Tejano cultural heritage-fluent for US Hispanic market); Omni CC/Marriott Bayfront/Cinnamon Shore Port Aransas luxury circuit; $28-60/hr; 4 FAQs

Checks:
- npm run check passed (TypeScript clean)
- npm run build passed (9 Corpus Christi city-service HTML files confirmed in .next/server/app/city-services/)
- Local build verified: corpus-christi-brand-ambassadors.html — Christus Spohn 38×, NAS Corpus Christi 28×, Driscoll 22×, Selena 14×, Whataburger Field 10×, Valero 8×; FAQPage JSON-LD confirmed (2 matches) ✓
- Committed 0d82800, pushed to origin/main
- Live HTTP 200 confirmed on /city-services/corpus-christi-brand-ambassadors and /city-services/corpus-christi-convention-staffing ✓

Status after this run:
- 46 cities now have enriched city-service content (230 enriched pages total)
- 112 cities remain on thin fallback templates

Next actions:
- Priority #5 continued: Laredo TX, Anchorage AK, Boise ID, Lincoln NE

## 2026-06-05 MDT (Run 43)

Goal: City page depth — add enriched content for Spokane WA (Priority #5 continued).

Audit:
- 45th city enriched; selected Spokane WA as highest-leverage unenriched Pacific Northwest / Inland Northwest market (next on list per Run 42 WORK_LOG)
- Spokane: 600,000 metro, Eastern Washington's largest city, commercial hub of the Inland Northwest (Eastern WA + Northern ID + NE Oregon + Western MT)
- Lilac Bloomsday Run (first Sunday in May — 50,000+ registered participants, 100,000+ spectators; world's largest timed road race by official timing finishers; 12km/7.46mi course from Riverside Ave through Spokane River Gorge)
- Hoopfest (last weekend of June — 500,000+ attendance; world's largest 3-on-3 basketball tournament; 6,000+ teams, 24,000+ players, 450+ courts across 45 downtown blocks)
- Spokane Interstate Fair (Spokane County Fair & Expo Center, 404 N. Havana — late September, 10 days; 200,000+ attendees; Eastern Washington's premier county fair)
- Fairchild Air Force Base (Airway Heights, 35mi west — 4,200+ active duty, 8,000+ total; 92nd Air Refueling Wing KC-135R; $1.3B+ annual economic impact; Eastern WA's largest employer)
- Providence Sacred Heart Medical Center (W 101 8th Ave — 646 beds, Level II Trauma, Inland Northwest's largest hospital)
- MultiCare Deaconess Hospital + Spokane VA Medical Center + WSU Spokane (Elson S. Floyd College of Medicine + College of Pharmacy) pharmaceutical NSM market
- Gonzaga University (502 E. Boone Ave — 7,000+ students; nationally ranked Bulldogs basketball; McCarthey Athletic Center 6,000 cap; Gonzaga Law School)
- Eastern Washington University (Cheney, 12mi west — 12,000+ students; EWU Eagles FCS football)
- Avista Corporation (NYSE: AVA — Spokane HQ, 400,000+ customers WA/ID/OR/MT; 2,000+ local employees)
- Itron Inc (Liberty Lake WA — Fortune 1000, 8,000+ global employees, smart meters/energy management)
- Schweitzer Engineering Laboratories (Pullman WA, 60mi south — 5,000+ global employees, power protection technology)
- Northern Quest Resort & Casino (Kalispel Tribe, Airway Heights — 250 rooms, 10,000-seat outdoor amphitheater, 21,000 sq ft conference center)
- The Historic Davenport Hotel (National Historic Landmark 1914 — 716+ rooms, Grand Ballroom; 4 properties)
- Spokane Convention Center (334 W. Spokane Falls Blvd — 100,000+ sq ft, 28 meeting rooms, DoubleTree walkway)
- Coeur d'Alene ID (30mi east — 160,000+ metro, Forbes 4-Star Coeur d'Alene Resort, 35,000 sq ft conference center)
- Washington State LCB alcohol sampling compliance; Eastern WA wine appellations (Walla Walla AVA, Columbia Valley AVA, Yakima Valley)
- Northwest Winterfest (Riverfront Park, Nov–Jan — 500,000+ visits, Spokane's largest winter festival)

Shipped (commit 7a4c6c1) — new file server/city-content/spokane.ts:
- spokane-brand-ambassadors: Hoopfest (500K+, world's largest 3-on-3 tournament)/Bloomsday (50K+ participants, world's largest timed road race)/Spokane Interstate Fair (200K+) event calendar; Fairchild AFB (4,200+ active duty, $1.3B+)/Gonzaga (nationally ranked Bulldogs)/EWU economic anchors; Providence Sacred Heart (646 beds, Level II Trauma)/MultiCare Deaconess/WSU Spokane medical campus pharma NSM market; WA LCB alcohol sampling compliance; $20-38/hr; 6 FAQs; 10 areasServed
- spokane-experiential-marketing: Hoopfest 45-block multi-zone activation strategy (sponsored courts/Start Line/Main Stage/neighborhood zones); Bloomsday course activation (Start Line Sponsor Village/Mile 3 Hydration/Doomsday Hill Cheer Zone/Finish Festival); Northern Quest Amphitheater (10,000-seat, 150K+ annual); Riverfront Park Northwest Winterfest (500K+ visits); City of Spokane + Run Bloomsday Association + WA LCB permit guide; 4 FAQs
- spokane-event-management: Spokane Convention Center (100K+ sq ft, 28 rooms, DoubleTree walkway) + Northern Quest Conference Center (21K sq ft) specialist; Providence/MultiCare/WSU Spokane pharmaceutical NSM (FDA Sunshine Act); Fairchild AFB military event staffing; Avista Corporation corporate events; Historic Davenport Hotel (National Historic Landmark) gala staffing; $22-48/hr; 3 FAQs
- spokane-convention-staffing: SCC specialist; 4-vertical approach (healthcare/pharma/Providence/WSU Spokane, government-defense/Fairchild/Hanford DOE, technology-energy/Avista/Itron/Schweitzer, agriculture-forestry-natural resources/Pacific Northwest); STEM-credentialed pipeline from Gonzaga/WSU/EWU; WA LCB consumer expo compliance; Coeur d'Alene Resort (35K sq ft, 30mi east) coverage; $25-48/hr; 5 FAQs
- spokane-promotional-models: background-matched (pharma/clinical FDA Sunshine Act for Providence/Northern Quest NSMs, outdoor/sports/active-lifestyle for Hoopfest/Bloomsday/Mt. Spokane activations, STEM-credentialed engineering for Avista/Itron/Schweitzer, military-community-fluent for Fairchild AFB, WA LCB-endorsed Eastern WA wine/spirits specialists); Northern Quest Resort/Davenport Hotel/Coeur d'Alene Resort (Forbes 4-Star) luxury venue network; Idaho ABC compliance for CDA Resort activations; $28-60/hr; 4 FAQs

Checks:
- npm run check passed (TypeScript clean)
- npm run build passed (9 Spokane city-service HTML files confirmed in .next/server/app/city-services/)
- Local build verified: spokane-brand-ambassadors.html — Hoopfest 36×, Bloomsday 36×, Gonzaga 30×, Fairchild 22×, Providence Sacred Heart 22×; FAQPage JSON-LD confirmed ✓
- Committed 7a4c6c1, pushed to origin/main
- Live HTTP 200 confirmed on /city-services/spokane-brand-ambassadors and /city-services/spokane-convention-staffing ✓

Status after this run:
- 45 cities now have enriched city-service content (225 enriched pages total)
- 113 cities remain on thin fallback templates

Next actions:
- Priority #5 continued: Corpus Christi TX, Laredo TX, Anchorage AK, Boise ID

## 2026-06-05 MDT (Run 42)

Goal: City page depth — add enriched content for Stockton CA (Priority #5 continued).

Audit:
- 44th city enriched; selected Stockton CA as highest-leverage unenriched San Joaquin Valley / Central California inland port market (next on list per Run 41 WORK_LOG)
- Stockton: 800,000 metro, San Joaquin County seat, inland deepwater port city on the San Joaquin River Delta
- Port of Stockton (California's only inland deepwater seaport, 40+ miles from Pacific — one of westernmost inland seaports in US; 3M+ tons cargo/year; primary maritime industry event venue)
- Stockton–Tracy–Lathrop logistics triangle: 40M+ sq ft warehouse/distribution space; Amazon (Tracy, 3,000+ workers), Target (Tracy, 1,500+), Walmart (Lathrop, 1,200+), Home Depot (Tracy), FedEx (Stockton Ground hub), UPS
- Stockton Arena (248 W. Fremont St, Downtown — 11,000 cap; Stockton Kings NBA G League, 160+ events/year)
- Banner Island Ballpark (5,000 cap — Stockton Ports, Class-A SF Giants affiliate, 70 home games/season)
- San Joaquin County Fair (1658 S. Airport Way, June — 300,000+ over 10 days; California's 3rd-largest county fair)
- Lodi Wine Country (SR-12, 12 miles north — Lodi AVA, 85+ wineries, 110,000+ acres; Lodi Wine & Food Festival, ZinFest)
- University of the Pacific (3601 Pacific Ave — California's oldest chartered university, est. 1851; 6,000+ students; Brubeck Institute; McGeorge School of Law; Alex G. Spanos Center 6,150 cap; Stagg Stadium 30,000 cap)
- Dignity Health St. Joseph's Medical Center (350+ beds) + Dameron Hospital + San Joaquin General Hospital (Level II Trauma) pharma NSM market
- 42%+ Hispanic/Latino population — bilingual Spanish-English standard
- One of largest Southeast Asian-American communities in CA: Cambodian-American, Hmong, Vietnamese, Filipino-American
- California ABC (Department of Alcoholic Beverage Control) alcohol sampling compliance callout
- Weber Point Events Center (Downtown waterfront, outdoor amphitheater 3,000+ cap — summer concert series)

Shipped (commit b47e8d0) — new file server/city-content/stockton.ts:
- stockton-brand-ambassadors: Port of Stockton deepwater inland seaport framing; Tracy–Lathrop distribution corridor (Amazon/Target/Walmart/FedEx/UPS logistics hub); Stockton Arena (11K, Kings)/Banner Island Ballpark (Ports)/San Joaquin Fairgrounds/Weber Point waterfront venues; San Joaquin County Fair (300K+)/Lodi Wine Country/Stockton Kings/Stockton Ports events; Dignity Health/Dameron/San Joaquin General pharma NSM market; bilingual Spanish-English standard (42%+ Hispanic) + multilingual SE Asian callout (Khmer/Hmong/Vietnamese/Tagalog); California ABC compliance; $20-36/hr; 6 FAQs; 10 areasServed
- stockton-experiential-marketing: Downtown waterfront/Weber Point activation strategy; Stockton Arena + Banner Island Ballpark fan zone zones; San Joaquin County Fair activation guide; Lodi Wine Country lifestyle brand corridor (85+ wineries, 12mi north); City of Stockton Office of Economic Development special event permit + California ABC process; 4 FAQs
- stockton-event-management: Stockton Arena + Banner Island Ballpark + DoubleTree–Courtyard Marriott hotel circuit specialist; Dignity Health/Dameron pharma NSM (FDA Sunshine Act); Tracy–Lathrop logistics corporate events (Amazon/Target/Walmart distribution center employee recognition); UOP academic events; $22-48/hr; 3 FAQs
- stockton-convention-staffing: San Joaquin County Fairgrounds + Stockton Arena convention specialist; 4-vertical approach (agriculture/agribusiness/San Joaquin Valley produce, logistics/supply chain/Tracy corridor, healthcare/pharma/Dignity Health, education/law/UOP-McGeorge); bilingual + SE Asian multilingual staff; California ABC-certified; $25-48/hr; 5 FAQs
- stockton-promotional-models: background-matched (pharma/pre-med/nursing for Dignity Health NSMs, wine-educated/sommelier for Lodi Wine Country, logistics-industry-aware for Amazon/Target/Walmart DCs, sports-fluent for Kings/Ports arena activations, bilingual Spanish-English + Khmer/Hmong/Vietnamese/Tagalog multilingual); DoubleTree Stockton/Holiday Inn/Courtyard Marriott luxury circuit; $28-60/hr; 4 FAQs

Checks:
- npm run check passed (TypeScript clean)
- npm run build passed (9 Stockton city-service HTML files confirmed in .next/server/app/city-services/)
- Local build verified: stockton-brand-ambassadors.html — San Joaquin County Fair 32×, Stockton Arena 32×, Port of Stockton 16×, Stockton Kings 16×, University of the Pacific 20×; FAQPage JSON-LD confirmed ✓
- Committed b47e8d0, pushed to origin/main
- Live HTTP 200 confirmed on /city-services/stockton-brand-ambassadors and /city-services/stockton-convention-staffing ✓

Status after this run:
- 44 cities now have enriched city-service content (220 enriched pages total)
- 114 cities remain on thin fallback templates

Next actions:
- Priority #5 continued: Spokane WA, Corpus Christi TX, Laredo TX, Anchorage AK

## 2026-06-04 MDT (Run 41)

Goal: City page depth — add enriched content for Colorado Springs CO (Priority #5 continued).

Audit:
- 43rd city enriched; selected Colorado Springs CO as highest-leverage unenriched Mountain West military/aerospace market (next on list per Run 40 WORK_LOG)
- Colorado Springs: 750,000 metro, Military City USA and Olympic City USA, El Paso County
- NORAD/USNORTHCOM (Peterson Space Force Base — North American Aerospace Defense Command; both commands share Peterson SFB)
- Cheyenne Mountain Space Force Station (original NORAD Cheyenne Mountain Complex, 2,000+ feet underground, alternate command center, 1,000+ personnel)
- US Space Command (USSPACECOM, reactivated 2019, Peterson SFB — one of only 11 unified combatant commands, 1,400+ and growing)
- Fort Carson (SE Colorado Springs — 35,000+ active-duty/civilian/contractor; 4th Infantry Division; Mountain Post; $3.7B+ annual economic impact)
- US Air Force Academy (5,700-acre campus, 4,400 cadets, Falcon Stadium 46,692 cap, 1.5M+ annual visitors)
- Schriever Space Force Base (24mi east, primary US Space Force operational mission base, 8,000+)
- Defense contractor ecosystem: Lockheed Martin (2,000+ local), Northrop Grumman, Raytheon (1,000+), General Dynamics IT (1,500+), L3Harris, Leidos, SAIC, Booz Allen Hamilton, MITRE
- Space Symposium (The Broadmoor, April — world's premier space industry conference; 15,000+ from 50+ nations; Space Foundation HQ Colorado Springs)
- Pikes Peak International Hill Climb — Race to the Clouds (late June/July — 12.42 miles, 156 turns, 14,115-ft summit; 80,000+; 100+ years; global TV, 60+ countries; one of world's most famous motorsport events)
- Colorado Balloon Classic (Memorial Park, Labor Day weekend — 80,000+, 100+ balloons)
- Pikes Peak or Bust Rodeo (Norris-Penrose Event Center, August — PRCA, 50,000+)
- The Broadmoor (1 Lake Avenue — Colorado's only Forbes 5-Star hotel; 740 rooms; 180,000+ sq ft meeting space; International Center; primary pharmaceutical NSM and Space Symposium venue)
- UCHealth Memorial Hospital Central (438 beds, Level I Trauma, Southern Colorado flagship)
- Penrose-St. Francis Health Services (Centura Health, 522 beds, Penrose + St. Francis Medical Center)
- US Olympic & Paralympic Committee HQ + 30+ National Governing Bodies based in Colorado Springs
- US Olympic & Paralympic Museum (Downtown, 2020, TIME 100 Best Places, 500,000+ annual visitors)
- Garden of the Gods (2M+ annual visitors — 300-ft red-rock formations, National Natural Landmark)
- Cheyenne Mountain Resort (316 rooms, 35,000 sq ft meeting), Colorado Springs Convention Center (200K sq ft, 100K sq ft exhibit hall)

Shipped (commit 77e4a80) — new file server/city-content/colorado-springs.ts:
- colorado-springs-brand-ambassadors: NORAD/USNORTHCOM/US Space Command/Fort Carson (35K+)/USAFA defense-capital framing; Space Symposium (15K+, 50+ nations)/Pikes Peak Hill Climb (80K+)/Colorado Balloon Classic (80K+)/Pikes Peak or Bust Rodeo (50K+) events; UCHealth Memorial Level I Trauma + Penrose-St. Francis (Centura Health) pharma NSM market; The Broadmoor (Forbes 5-Star)/CSCC/Cheyenne Mountain Resort/Norris-Penrose/Falcon Stadium venues; defense contractor ecosystem (Lockheed/Northrop/Raytheon/GDITA/L3Harris); USOC + USOP Museum Olympic City framing; $20-38/hr; 6 FAQs; 10 areasServed
- colorado-springs-experiential-marketing: Space Symposium B2B activation (The Broadmoor International Center, 15K+ C-suite/government audience); Pikes Peak Hill Climb multi-zone strategy (start line/mid-mountain/Summit House 14,115ft/Glen Cove Fan Zone); Colorado Balloon Classic (Memorial Park, 80K+ family platform); Garden of the Gods permit process + commercial zones; US Olympic & Paralympic Museum brand activations; City of Colorado Springs Parks permit guide (45-90 day lead); 4 FAQs
- colorado-springs-event-management: The Broadmoor (Forbes 5-Star, 180K+ sq ft) + CSCC specialist; UCHealth Memorial/Penrose-St. Francis pharma NSM (FDA Sunshine Act); Space Symposium management; Fort Carson Mountain Post/Elkhorn Conference Center military event staffing; $22-48/hr; 3 FAQs
- colorado-springs-convention-staffing: CSCC + Broadmoor International Center specialist; 4-vertical approach (defense/aerospace/space-tech for Space Symposium/Fort Carson/Peterson SFB, healthcare/pharma for UCHealth/Centura NSMs, sports/Olympic for USOC/NGB events, tourism/hospitality); STEM-credentialed aerospace/defense staff; full hotel circuit (Broadmoor/Cheyenne Mountain/Marriott/Antlers); Pueblo CO coverage (45mi south); $25-48/hr; 5 FAQs
- colorado-springs-promotional-models: background-matched (STEM-credentialed aerospace/defense for Space Symposium, pharmaceutical/clinical FDA Sunshine Act for UCHealth/Penrose NSMs, motorsport-credible outdoor-athletes for Pikes Peak Hill Climb, military-community-fluent for Fort Carson/USAFA, Olympic-credentialed sports-background for USOC events); The Broadmoor/Cheyenne Mountain/Antlers luxury venue network; $28-65/hr; 4 FAQs

Checks:
- npm run check passed (TypeScript clean)
- npm run build passed (9 Colorado Springs city-service HTML files confirmed in .next/server/app/city-services/)
- Local build verified: colorado-springs-brand-ambassadors.html — Space Symposium 28×, Fort Carson 38×, NORAD 14×, The Broadmoor 24×, Pikes Peak 40×; FAQPage JSON-LD confirmed (2 matches) ✓
- Committed 77e4a80, pushed to origin/main
- Live HTTP 200 confirmed on /city-services/colorado-springs-brand-ambassadors and /city-services/colorado-springs-convention-staffing ✓

Status after this run:
- 43 cities now have enriched city-service content (215 enriched pages total)
- 115 cities remain on thin fallback templates

Next actions:
- Priority #5 continued: Stockton CA, Spokane WA, Corpus Christi TX, Laredo TX

## 2026-06-04 MDT (Run 40)

Goal: City page depth — add enriched content for Reno NV (Priority #5 continued).

Audit:
- 42nd city enriched; selected Reno NV as highest-leverage unenriched Mountain West / Northern Nevada market (next on list per Run 39 WORK_LOG)
- Reno-Sparks: 500,000+ metro, "The Biggest Little City in the World," commercial capital of Northern Nevada
- Tesla Gigafactory 1 (Sparks NV, TRIC — Tesla's first purpose-built gigafactory, 10,000+ employees; produces Model 3/Y drive units, battery packs, energy storage; one of the largest building footprints in the world)
- Panasonic Energy of North America (Gigafactory co-tenant — 2170 cylindrical lithium-ion battery cells for Tesla; 2,000+ employees)
- Switch (The Citadel campus, 3M+ sq ft — world's largest data center campus outside government facilities; Tier 5 Platinum; 1,000+ Fortune 1000 clients including Google/AWS/Microsoft/Apple)
- Tahoe Reno Industrial Center (TRIC, Storey County — 107,000-acre industrial park, world's largest by area; Tesla, Switch, Panasonic, Walmart, Google, Apple all located there)
- Renown Health (Northern Nevada's largest not-for-profit health system — Renown Regional Medical Center 808 beds Level II Trauma, Renown South Meadows, Renown Children's Hospital; 7,000+ employees)
- Saint Mary's Regional Medical Center (Dignity Health/CommonSpirit, 380 beds, major Northern Nevada acute care)
- Hot August Nights (August, six days, 250,000+ — world's premier vintage automobile and classic rock and roll festival; 5,000+ registered classic vehicles; multiple venues across Reno-Sparks)
- Reno Rodeo (June — one of 10 largest PRCA professional rodeos in US; 100,000+ over nine performances)
- Great Reno Balloon Race (September — world's largest free hot-air balloon event; 100,000+ over three days)
- National Championship Air Races (Reno-Stead, September — fastest motorsport in the world; 60,000+)
- Artown (July — 75+ events, 300,000+ attendees, largest monthlong urban arts festival in the United States)
- Burning Man (Black Rock City, 80 miles north — 80,000+ global attendees; Reno is primary supply/staging city)
- University of Nevada, Reno (22,000+ students; Mackay Stadium 30,000 cap; Lawlor Events Center 11,200 cap)
- National Bowling Stadium (78 lanes — world's largest dedicated tournament bowling facility; USBC Open Championships 80,000+ entries, 4+ months annually)
- Grand Sierra Resort (2,000 rooms, 160,000 sq ft meeting space); Peppermill Reno (1,635 rooms — preferred pharma NSM resort); Atlantis Casino Resort Spa (974 rooms); Whitney Peak Hotel (non-gaming, Downtown)
- Nevada Gaming Control Board alcohol/gaming compliance for casino activations
- 26%+ Hispanic/Latino population (one of fastest-growing demographic segments in Northern Nevada)
- Nevada: world's fifth-largest gold-producing jurisdiction; major mining convention market

Shipped (commit a179a94) — new file server/city-content/reno.ts:
- reno-brand-ambassadors: Tesla Gigafactory (10K+)/Switch (world's largest data center campus)/Panasonic Energy tech corridor; Hot August Nights (250K+)/Reno Rodeo (100K+)/Great Reno Balloon Race (100K+)/National Championship Air Races/Artown (300K+)/Burning Man (80K+, 80mi); Renown Health + Saint Mary's pharma NSM; Nevada Gaming Control Board compliance; bilingual Spanish-English (26%+ Latino); $20-38/hr; 6 FAQs; 10 areasServed
- reno-experiential-marketing: Hot August Nights multi-venue strategy (Sparks Nugget/Grand Sierra/Virginia Street Casino Corridor); Reno Rodeo + BBQ Cook-Off; Great Reno Balloon Race Dawn Patrol/Mass Ascension; Artown (Wingfield Park/Pioneer Center/Nevada Museum of Art); Truckee River Whitewater Park; Midtown Reno corridor; NV Gaming Control Board + City of Reno/Sparks permit guide; 4 FAQs
- reno-event-management: Reno-Sparks Convention Center (200K+ sq ft) + Grand Sierra Resort (160K sq ft) + Peppermill Reno (preferred NSM resort, non-smoking meeting floors) specialist; Renown Health/Saint Mary's pharma NSM (FDA Sunshine Act); Tesla/Switch tech corporate events; $22-48/hr; 3 FAQs
- reno-convention-staffing: 4-vertical approach (technology/advanced manufacturing/Tesla-Switch, healthcare/pharma/Renown, mining/natural resources/Nevada gold industry, gaming technology); National Bowling Stadium (78 lanes, USBC Open 4+ months, 80K+ entries); $25-48/hr; 5 FAQs
- reno-promotional-models: background-matched (EV/STEM for Tesla, pharma/clinical FDA Sunshine Act for Renown/Saint Mary's, Nevada Gaming Control Board-compliant casino models, classic car/Hot August Nights specialists, western lifestyle/Reno Rodeo, Sierra Nevada outdoor/skiing); Ritz-Carlton Lake Tahoe + Edgewood Tahoe (Forbes 4-Star) luxury circuit; $28-65/hr; 4 FAQs

Checks:
- npm run check passed (TypeScript clean)
- npm run build passed (9 Reno city-service HTML files confirmed in .next/server/app/city-services/)
- Local build verified: reno-brand-ambassadors.html — Tesla 30×, Hot August Nights 20×; FAQPage JSON-LD confirmed ✓
- Committed a179a94, pushed to origin/main
- Live HTTP 200 confirmed on /city-services/reno-brand-ambassadors and /city-services/reno-convention-staffing ✓

Status after this run:
- 42 cities now have enriched city-service content (210 enriched pages total)
- 116 cities remain on thin fallback templates

Next actions:
- Priority #5 continued: Colorado Springs CO, Stockton CA, Spokane WA, Corpus Christi TX

## 2026-06-04 MDT (Run 39)

Goal: City page depth — add enriched content for Bakersfield CA (Priority #5 continued).

Audit:
- 41st city enriched; selected Bakersfield CA as highest-leverage unenriched southern San Joaquin Valley / energy capital market (next on list per Run 38 WORK_LOG)
- Bakersfield: 600,000 metro, Kern County — California's single highest oil-producing county, ~70% of all California oil output
- California Resources Corporation (CRC — California's largest oil producer by volume, NYSE: CRC, Bakersfield metro HQ)
- Chevron (major San Joaquin Valley operations — Kern River Oil Field, Lost Hills, Cymric; thousands of local employees)
- Aera Energy (Shell-ExxonMobil JV, second-largest California oil producer)
- Grimmway Farms (Arvin CA, Kern County — world's largest producer of carrots; Cal-Organic Farms subsidiary; $750M+ annual revenue)
- Bolthouse Farms (Bakersfield — world's most recognized baby carrot brand, #1 US carrot brand, $1B+ revenue)
- Wonderful Company (Shafter CA, Kern County — Wonderful Pistachios, POM Wonderful, FIJI Water, Halos mandarins)
- Kern County Fair (Kern County Fairgrounds — California's oldest continuously operating county fair est. 1875; 300,000+ attendees over 12 days, late September–October)
- Mechanics Bank Arena (formerly Rabobank Arena; 11,116 cap; Bakersfield Condors ECHL, NHL Edmonton Oilers affiliate; 150+ events/year)
- Bakersfield Convention Center (adjacent to arena — county's primary convention venue)
- Buck Owens' Crystal Palace (2800 Buck Owens Blvd — one of America's most celebrated honky-tonk venues; live country music multiple nights weekly; Bakersfield Sound heritage anchor)
- Kern Medical (Kern County Level II Trauma Center, county teaching hospital, primary pharmaceutical NSM venue)
- Adventist Health Bakersfield + Dignity Health Mercy Hospitals (Mercy Southwest + Mercy Hospital Bakersfield) + Kaiser Permanente Bakersfield
- 51%+ Hispanic/Latino population — bilingual Spanish-English standard across all activations
- California ABC (Department of Alcoholic Beverage Control) alcohol sampling compliance
- CSUB (California State University Bakersfield — 11,000+ students, Big West, Roadrunners; Mechanics Bank Arena as primary arena)

Shipped (commit b22ebea) — new file server/city-content/bakersfield.ts:
- bakersfield-brand-ambassadors: CRC/Chevron/Aera Energy California energy capital framing; Grimmway (world's largest carrot producer)/Bolthouse ($1B+ brand)/Wonderful Company agribusiness anchors; Kern County Fair (300,000+)/Mechanics Bank Arena (11,116 Condors)/Bakersfield Convention Center/Buck Owens Crystal Palace venues; Western Farm Show + World Ag Expo (Tulare, 100K+, 60mi N) trade show circuit; Kern Medical/Adventist Health/Dignity Health pharma NSM market; bilingual Spanish-English standard (51%+ Latino); California ABC sampling compliance; $20-36/hr; 6 FAQs; 12 areasServed
- bakersfield-experiential-marketing: Kern County Fair multi-zone activation strategy (Grandstand/exhibit halls/food sampling/midway); Mechanics Bank Arena Condors game-night fan engagement; Buck Owens Crystal Palace heritage brand experience (western lifestyle, spirits, country music brands); Chester Ave/Ming Ave/Marketplace at River Walk neighborhood zones; San Joaquin Valley agricultural B2B circuit; Kern County energy corridor B2B (Oildale/Taft CA/Lost Hills); City of Bakersfield + Kern County permits + California ABC; 4 FAQs
- bakersfield-event-management: Bakersfield Convention Center + Mechanics Bank Arena specialist; Kern Medical/Adventist Health/Dignity Health pharma NSM (FDA Sunshine Act); CRC/Chevron/Aera Energy corporate events; Grimmway/Bolthouse/Wonderful agribusiness functions; Hotel Bakersfield/Padre Hotel luxury circuit; $22-48/hr; 3 FAQs
- bakersfield-convention-staffing: 4-vertical approach (energy/oil-gas/CRC/Chevron, agriculture/food-processing/Grimmway/Bolthouse, healthcare/pharma/Kern Medical/Dignity Health, government/education/Kern County/CSUB); STEM-credentialed energy staff specialty; Western Farm Show + World Ag Expo circuit coverage; Hotel Bakersfield/Padre Hotel/DoubleTree/Marriott hotel circuit; bilingual Spanish-English standard; $25-48/hr; 5 FAQs
- bakersfield-promotional-models: background-matched (petroleum engineering/energy for CRC/Chevron/Aera Energy, agri/produce-industry/bilingual for Grimmway/Bolthouse, pharma/clinical FDA Sunshine Act for Kern Medical/Dignity Health, western-lifestyle/country-music-fluent for Buck Owens Crystal Palace); Hotel Bakersfield/Padre Hotel/DoubleTree/Marriott luxury venue network; $28-60/hr; 4 FAQs

Checks:
- npm run check passed (TypeScript clean)
- npm run build passed (9 Bakersfield city-service HTML files confirmed in .next/server/app/city-services/)
- Local build verified: bakersfield-brand-ambassadors.html — Kern County Fair 32×, Mechanics Bank 38×, Bolthouse 20×, California Resources 18×, Buck Owens 18×; FAQPage JSON-LD confirmed ✓
- Committed b22ebea, pushed to origin/main
- Live HTTP 200 confirmed on /city-services/bakersfield-brand-ambassadors and /city-services/bakersfield-convention-staffing ✓

Status after this run:
- 41 cities now have enriched city-service content (205 enriched pages total)
- 117 cities remain on thin fallback templates

Next actions:
- Priority #5 continued: Reno NV, Colorado Springs CO, Stockton CA, Spokane WA

## 2026-06-04 MDT (Run 38)

Goal: City page depth — add enriched content for Fresno CA (Priority #5 continued).

Audit:
- 40th city enriched; selected Fresno CA as highest-leverage unenriched Central California / San Joaquin Valley market (next on list per Run 37 WORK_LOG)
- Fresno: 1.1M metro, commercial capital of the San Joaquin Valley — the most productive agricultural region on earth; generates $50B+ annual agricultural output
- World Ag Expo (International Agri-Center, Tulare CA, 50 miles south — world's largest agricultural exposition, 100,000+ attendees, 2,750+ exhibitors, 2.6 million sq ft of exhibits; February) — premier B2B agribusiness activation event in North America
- Western Farm Show (Fresno Convention Center — leading ag equipment/precision agriculture trade show, 10,000+ industry attendees)
- Big Fresno Fair (Fresno Fairgrounds — 350,000+ attendees, 10 October days — California's fourth-largest county fair)
- Clovis Rodeo (Clovis CA, April — 75,000+ over 5 performances — one of California's largest professional rodeos)
- California State University Fresno (Fresno State — 25,000+ students; Bulldog Stadium 41,031 cap; Save Mart Center 15,596 cap — Valley's largest indoor arena; Mountain West Conference)
- Fresno Grizzlies (Chukchansi Park, downtown, 12,500 cap — Triple-A affiliate of Colorado Rockies; 70 home games/season)
- Valley Children's Hospital (Madera, 9300 Valley Children's Place — one of the most respected children's hospitals in the western US; 358 beds; 3,000+ employees — primary pharma NSM venue for Central California)
- Community Medical Centers (Fresno — largest health system in San Joaquin Valley; Community Regional Medical Center / Clovis Community Medical Center / Fresno Heart & Surgical)
- Sun-Maid Growers (Kingsburg, global HQ — world's most recognized raisin brand), Foster Farms (Livingston/Fresno — major West Coast poultry producer), Harris Ranch Beef Company (Coalinga, one of largest integrated cattle operations in US), Wonderful Company (Wonderful Pistachios, POM Wonderful, Fiji Water — major Central Valley agribusiness)
- 50%+ Hispanic/Latino population — majority-Latino major California city; large Sikh-Punjabi agricultural and business community in Fresno and Kings counties
- California ABC (Department of Alcoholic Beverage Control) alcohol sampling compliance; California AB5 labor law compliance callout

Shipped (commit 3f2adf0) — new file server/city-content/fresno.ts:
- fresno-brand-ambassadors: World Ag Expo (world's largest ag expo)/Western Farm Show/Big Fresno Fair (350K+)/Clovis Rodeo (75K+)/Bulldog Stadium (41K)/Chukchansi Park/Save Mart Center; Valley Children's Hospital + Community Medical Centers pharma NSM market; bilingual Spanish-English (50%+ Latino) + Punjabi-English (Sikh-Punjabi farming community); California ABC sampling compliance; Sun-Maid/Foster Farms/Harris Ranch/Wonderful Company agribusiness employers; $20-36/hr; 6 FAQs; 12 areasServed
- fresno-experiential-marketing: Bulldog Stadium game-day tailgate activation strategy (Fowler Ave/Shaw Ave corridors); Big Fresno Fair fairgrounds; Chukchansi Park baseball season; Tower District + Fulton + River Park + Fig Garden + Woodward Park neighborhood zones; World Ag Expo B2B Tulare activation; Fresno County + City of Clovis + California ABC permit guide; 4 FAQs
- fresno-event-management: Fresno Convention Center (150K sq ft, 24 rooms, DoubleTree skywalk) specialist; Valley Children's Hospital/Community Medical Centers pharma NSM (FDA Sunshine Act); Sun-Maid/Foster Farms/Wonderful corporate events; California AB5 labor law compliance callout; $22-48/hr; 3 FAQs
- fresno-convention-staffing: 4-vertical approach (agriculture/ag trade shows, healthcare/pharma, government/California agencies, food processing/distribution); bilingual Spanish-English + Punjabi-English standard; Fresno Convention Center Hall A + World Ag Expo 50mi circuit; DoubleTree/Marriott/Hilton Garden Inn/Hyatt Place hotel circuit; $25-48/hr; 5 FAQs
- fresno-promotional-models: background-matched (Fresno State College of Ag/FFA alumni for agribusiness, pre-med/nursing for pharma NSMs, bilingual Spanish-English + Punjabi-English, Bulldog game-day specialists, California ABC-certified); Chukchansi Gold Resort (35mi N) + DoubleTree + Fresno Marriott luxury network; $28-60/hr; 4 FAQs

Checks:
- npm run check passed (TypeScript clean)
- npm run build passed (9 Fresno city-service HTML files confirmed in .next/server/app/city-services/)
- Local build verified: fresno-brand-ambassadors.html — World Ag Expo 22×, Valley Children's 32×, Big Fresno Fair 18×, Bulldog Stadium 16×; FAQPage JSON-LD confirmed ✓
- Committed 3f2adf0, pushed to origin/main
- Live HTTP 200 confirmed on /city-services/fresno-brand-ambassadors and /city-services/fresno-convention-staffing ✓

Status after this run:
- 40 cities now have enriched city-service content (200 enriched pages total)
- 118 cities remain on thin fallback templates

Next actions:
- Priority #5 continued: Bakersfield CA, Reno NV, Colorado Springs CO, Stockton CA

## 2026-06-04 MDT (Run 37)

Goal: City page depth — add enriched content for Baton Rouge LA (Priority #5 continued).

Audit:
- 39th city enriched; selected Baton Rouge LA as highest-leverage unenriched Gulf South / Louisiana capital market (next on list per Run 36 WORK_LOG)
- Baton Rouge: 870,000 metro, Louisiana's state capital and second-largest city
- ExxonMobil Baton Rouge Complex (2801 Scenic Hwy — ExxonMobil's Baton Rouge Refinery + Chemical Plant + Plastics Plant combined = largest integrated petroleum refinery/chemical complex in the United States; 500K+ bbl/day refining capacity; 3,000+ employees/contractors)
- Turner Industries Group (private, global HQ Baton Rouge — one of North America's largest industrial construction/maintenance/fabrication firms; $3B+ revenue; 25,000+ employees; primary contractor at ExxonMobil, Dow, BASF, LyondellBasell across the Louisiana Petrochemical Corridor)
- Dow Chemical Plaquemine (10mi SW — Dow Inc.'s largest single Western Hemisphere manufacturing facility; 40+ production units; 5,000+ employees); BASF Geismar; Albemarle Baton Rouge (lithium chemicals, EV battery supply chain); Entergy Louisiana (utility HQ, 1.1M customers)
- LSU Tiger Stadium (102,321 capacity — largest in the SEC, 4th largest stadium in the United States; Death Valley night game atmosphere; 7 home games per fall season)
- Pete Maravich Assembly Center (PMAC, 13,495 cap); Alex Box Stadium (9,048 cap); LSU 37,000+ students, $450M+ research
- Southern University (Baton Rouge — one of largest HBCUs in the US, 6,000+ students, SWAC)
- Our Lady of the Lake Regional Medical Center (FMOLHS, 1,000+ beds — Louisiana's largest hospital; primary pharma NSM venue in Greater Baton Rouge)
- Woman's Hospital (Louisiana's leading women's and neonatal health hospital; major pharma NSM venue)
- Pennington Biomedical Research Center (LSU system — world-renowned obesity/metabolic disease research; 500+ staff; $30M+ NIH funding)
- Baton Rouge River Center (82,000 sq ft exhibit hall + 17,000 sq ft ballroom + 23 meeting rooms + Marriott skybridge, Downtown)
- L'Auberge Casino Resort Baton Rouge (1,000 rooms, 30,000 sq ft meeting space — premier NSM and corporate gala venue)
- Hilton Baton Rouge Capitol Center (historic 1927 Heidelberg Hotel); Embassy Suites Baton Rouge; Marriott Baton Rouge
- Spanish Town Mardi Gras (50,000+, Saturday before Fat Tuesday — Louisiana's most irreverent Mardi Gras celebration)
- Baton Rouge Blues Festival (50,000+, Downtown, April — birthplace of Buddy Guy, Slim Harpo, Lightnin' Slim, Tabby Thomas)
- Louisiana Legislature annual session (February–June) — year-round government/legal convention market
- Louisiana ATC Title 26 alcohol sampling compliance; bilingual Spanish-English + Vietnamese-English callouts

Shipped (commit 3ce2d3f) — new file server/city-content/baton-rouge.ts:
- baton-rouge-brand-ambassadors: ExxonMobil (largest US integrated refinery/chem complex)/Turner Industries (private HQ)/Dow Plaquemine/BASF/Albemarle Petrochemical Corridor capital framing; LSU Tiger Stadium (102,321/SEC largest)/PMAC/Alex Box/River Center/L'Auberge venues; Spanish Town Mardi Gras (50K+)/Blues Festival (50K+)/Louisiana Marathon/Greek Festival events; FMOLHS/Our Lady of the Lake/Woman's Hospital pharma NSM market; Pennington Biomedical/Southern University; bilingual Spanish-English + Vietnamese-English callout; Louisiana ATC Title 26 compliance; $20-38/hr; 6 FAQs; 12 areasServed
- baton-rouge-experiential-marketing: LSU Tiger Stadium game-day tailgate activation (100K+ fans, 6–8 hr window, Victory Hill/Indian Mounds/Parade Grounds zones); Spanish Town Mardi Gras street experience; Blues Festival Downtown riverfront; L'Auberge Casino luxury brand activations; Perkins Road Overpass Arts Market; City of Baton Rouge/EBR Special Events permit + LSU Office of Student Life approvals; 4 FAQs
- baton-rouge-event-management: River Center (82K sq ft, 23 rooms, Marriott skybridge) + L'Auberge (1,000 rooms, 30K sq ft) specialist; Our Lady of the Lake/Woman's Hospital pharma NSM (FDA Sunshine Act); ExxonMobil/Turner Industries corporate events; Louisiana Legislature session events at Hilton Capitol Center; Pennington Biomedical clinical research symposia; $22-48/hr; 3 FAQs
- baton-rouge-convention-staffing: River Center Hall specialist; 4-vertical approach (petrochemical/industrial engineering/AIChE, healthcare/pharma FMOLHS, state government/legal/Louisiana Bar, academic/athletics/LSU); L'Auberge + Marriott + Embassy Suites + Hilton Capitol Center hotel circuit; STEM-credentialed petrochemical staff; bilingual callout; Louisiana ATC sampling credentials; $25-48/hr; 5 FAQs
- baton-rouge-promotional-models: background-matched (pharmaceutical/clinical for Our Lady of the Lake NSMs, petrochemical/STEM for ExxonMobil/Turner, SEC game-day/high-energy for Tiger Stadium tailgates, Louisiana cultural-festival fluent for Mardi Gras/Blues Festival); L'Auberge Casino Resort/Hilton Capitol Center/Marriott/Embassy Suites luxury venue network; Louisiana ATC-certified for alcohol sampling; $28-65/hr; 4 FAQs

Checks:
- npm run check passed (TypeScript clean)
- npm run build passed (9 Baton Rouge city-service HTML files confirmed in .next/server/app/city-services/)
- Local build verified: baton-rouge-brand-ambassadors.html — ExxonMobil 28×, Tiger Stadium 28×, L'Auberge 8×; FAQPage JSON-LD confirmed ✓
- Committed 3ce2d3f, pushed to origin/main
- Live HTTP 200 confirmed on /city-services/baton-rouge-brand-ambassadors and /city-services/baton-rouge-convention-staffing ✓

Status after this run:
- 39 cities now have enriched city-service content (195 enriched pages total)
- 119 cities remain on thin fallback templates

Next actions:
- Priority #5 continued: Fresno CA, Bakersfield CA, Reno NV, Colorado Springs CO
- Priority #6: Case study internal links — ensure all case study pages link back to relevant service pages

## 2026-06-04 MDT (Run 36)

Goal: City page depth — add enriched content for Tucson AZ (Priority #5 continued).

Audit:
- 38th city enriched; selected Tucson AZ as highest-leverage unenriched Southwest defense/aerospace/trade market (next on list per Run 35 WORK_LOG)
- Tucson: 1.1M metro, Arizona's second-largest city, anchoring Southern Arizona from Nogales AZ/Mexico border (63mi south) to Sierra Vista/Fort Huachuca (60mi SE)
- Raytheon Missiles & Defense (global HQ, Tucson — RTX subsidiary, world's largest missile systems manufacturer: Patriot, Tomahawk, AMRAAM, Javelin, Stinger, HARM, SM-3, AIM-9X; 15,000+ Tucson employees — single largest private employer in Southern Arizona)
- Davis-Monthan AFB (6,000+ active-duty/civilian/contractor; 309th AMARG "The Boneyard" — world's largest aircraft storage facility, 4,400+ aircraft on 2,600 Sonoran Desert acres)
- Fort Huachuca (Sierra Vista AZ, 60mi SE — US Army Intelligence Center of Excellence, 10,000+ personnel, $2.1B+ economic impact)
- Tucson Gem, Mineral & Fossil Showcase (TGMS — world's largest gem and mineral trade event, 40+ venues, 50,000+ buyers from 50+ countries, $120M+ economic impact, January–February)
- University of Arizona (50,000+ students, $2B+ annual research, Big 12, Arizona Stadium 55,000 cap, McKale Center 14,545 cap, NCI-designated UA Cancer Center, Tech Parks Arizona 2,400+ employees)
- Banner University Medical Center Tucson (UA College of Medicine, NCI Cancer Center, Level 1 Trauma); Tucson Medical Center (551 beds); Carondelet Health (Dignity Health); Ventana Medical Systems (Roche, global pathology leader)
- 42%+ Hispanic/Latino population; Tohono O'odham and Pascua Yaqui tribal communities; Nogales AZ/Mexico border corridor ($30B+ annual trade)
- Major events: Tucson Rodeo (47,000+, oldest continuous outdoor rodeo 1925); 4th Avenue Street Fair (100,000+, spring/fall); Tucson Meet Yourself (120,000+, 70+ cultures); El Tour de Tucson (7,000–9,000 cyclists); Pima County Fair (500,000+); Tucson Festival of Books (130,000+)
- JW Marriott Tucson Starr Pass Resort (575 rooms, 100K sq ft); Loews Ventana Canyon Resort; Miraval Arizona (Forbes 4-Star); Westin La Paloma (487 rooms); Hacienda del Sol (National Historic Landmark); El Conquistador Tucson Hilton (428 rooms, 75K sq ft)
- Tucson Convention Center (205,000 sq ft; Exhibit Hall 50,000 sq ft; Arena 9,100 cap; 32 meeting rooms)

Shipped (commit 52e3272) — new file server/city-content/tucson.ts:
- tucson-brand-ambassadors: Raytheon (15K+, world's largest missile manufacturer) + Davis-Monthan AFB (The Boneyard) defense capital framing; TGMS Gem Show (world's largest, 50K+ buyers, 40+ venues, $120M+)/Tucson Rodeo/4th Avenue Street Fair/Tucson Meet Yourself/Pima County Fair events; UA campus + McKale/Arizona Stadium; Banner/TMC/Carondelet/Ventana pharmaceutical NSM; bilingual 42%+ Hispanic + Nogales border; $20-38/hr; 6 FAQs; 12 areasServed
- tucson-experiential-marketing: TGMS multilingual trade activation (50+ countries, 6 languages); 4th Ave + Meet Yourself + Pima Fair consumer calendar; UA game-day activations; Catalina Foothills luxury resort circuit; City of Tucson permit guide; 4 FAQs
- tucson-event-management: TCC + JW Marriott Starr Pass + Loews Ventana Canyon + Miraval pharmaceutical NSM specialist; Raytheon/Davis-Monthan defense corporate events; TGMS 40-venue distributed management; $22-48/hr; 3 FAQs
- tucson-convention-staffing: TCC + TGMS 40-venue circuit; 4-vertical approach (defense/aerospace, healthcare/pharma, technology/UA, minerals/gems — unique to Tucson); multilingual TGMS (Spanish/Mandarin/German/Portuguese/Japanese/Italian); $25-48/hr; 5 FAQs
- tucson-promotional-models: background-matched (STEM-credentialed for Raytheon, pharmaceutical for Banner/TMC, gemology-aware multilingual for TGMS, bilingual Sonoran Spanish, outdoor/endurance, luxury resort); $28-65/hr; 4 FAQs

Checks:
- npm run check passed (TypeScript clean)
- npm run build passed (9 Tucson city-service HTML files confirmed in .next/server/app/city-services/)
- Local build verified: tucson-brand-ambassadors.html — Raytheon 24×, TGMS/Gem Show 46×, University of Arizona 30×, Davis-Monthan 20×; FAQPage JSON-LD confirmed ✓
- Committed 52e3272, pushed to origin/main
- Live HTTP 200 confirmed on /city-services/tucson-brand-ambassadors and /city-services/tucson-convention-staffing ✓

Status after this run:
- 38 cities now have enriched city-service content (190 enriched pages total)
- 120 cities remain on thin fallback templates

Next actions:
- Priority #5 continued: Baton Rouge LA, El Paso TX, Fresno CA, Bakersfield CA
- Priority #6: Case study internal links — ensure all case study pages link back to relevant service pages

## 2026-06-04 MDT (Run 35)

Goal: City page depth — add enriched content for Albuquerque NM (Priority #5 continued).

Audit:
- 37th city enriched; selected Albuquerque NM as highest-leverage unenriched Mountain West / Southwest market (next on list per Run 34 WORK_LOG)
- Albuquerque: 940,000 metro, New Mexico's largest city and I-25/I-40 crossroads hub anchoring Central New Mexico
- Sandia National Laboratories (Kirtland AFB, SE Albuquerque — 17,000+ employees, $4.1B+ annual budget — DOE/NNSA national lab, one of world's foremost nuclear security research institutions)
- Kirtland Air Force Base (24,000+ military/civilian/contractor personnel — Air Force Nuclear Weapons Center, AFRL Space Vehicles Directorate; $4.8B+ annual economic impact)
- Intel New Mexico (Rio Rancho, Sandoval County — 11,000+ employees, Fab 11X/Fab 22 — one of Intel's largest global semiconductor manufacturing facilities; $20B+ cumulative investment)
- Presbyterian Healthcare Services (9 hospitals, 10,000+ employees — New Mexico's largest private employer); Lovelace Health System (HCA Healthcare, 6 hospitals); UNM Health Sciences Center (NCI-designated Cancer Center)
- Albuquerque International Balloon Fiesta (750,000–800,000+ total attendance — most-photographed event in the world, largest balloon festival in North America)
- New Mexico State Fair (Expo NM — 1M+ attendees over 17 September days — largest single annual event in New Mexico)
- Gathering of Nations Powwow (Tingley Coliseum, 150,000+ — world's largest Native American powwow, 500+ tribes)
- New Mexico United FC (USL Championship, 13,500 cap — among highest-attended lower-division soccer clubs in North America)
- 47%+ Hispanic/Latino demographic — one of most genuinely bilingual major US metros
- 19 neighboring Pueblo nations and tribal communities (Sandia Pueblo, Isleta Pueblo, Santa Ana Pueblo et al.)
- Isleta Resort & Casino (Isleta Pueblo, 15mi south — 1,000+ rooms, Isleta Amphitheater 12,500 cap)
- Sandia Resort & Casino (Sandia Pueblo, NE foothills — 228 rooms, Twin Peaks Ballroom)
- Los Poblanos Historic Inn (Los Ranchos de Albuquerque — Forbes 4-Star, lavender estate)
- Albuquerque Convention Center (167,000 sq ft, Hall A/B, 32 meeting rooms, Kiva Auditorium 2,067 seats)

Shipped (commit 588efeb) — new file server/city-content/albuquerque.ts:
- albuquerque-brand-ambassadors: Sandia National Labs/Kirtland AFB defense-research capital framing; Intel NM (Rio Rancho, 11K employees) tech manufacturing anchor; Presbyterian Healthcare/Lovelace/UNM Health Sciences pharma NSM market; Balloon Fiesta (750K+, world's most-photographed event)/NM State Fair (1M+)/Gathering of Nations (150K+ powwow)/NM United FC events; bilingual Spanish-English callout (47%+ Hispanic demographic); Indigenous cultural competency callout (19 neighboring Pueblo nations); NM Alcohol & Gaming Division compliance; $20-38/hr; 6 FAQs; 12 areasServed
- albuquerque-experiential-marketing: Balloon Fiesta Corporate Hospitality Zone + Mass Ascension sunrise activation strategy; Old Town Albuquerque (1706, 2M+ annual visitors) historic district; Nob Hill/Route 66 corridor; National Hispanic Cultural Center; Gathering of Nations cultural activation; Expo NM/NM State Fair Commission + City of Albuquerque Parks permit guidance; 4 FAQs
- albuquerque-event-management: ACC (167K sq ft, Hall A/B, 32 rooms, Kiva Auditorium) specialist; Isleta Resort (1,000+ rooms) + Sandia Resort (Twin Peaks Ballroom) venue circuit; Presbyterian/UNM pharmaceutical NSM (FDA Sunshine Act); Sandia Labs/Intel NM corporate events; 3 FAQs
- albuquerque-convention-staffing: ACC Hall A/B specialist; 4-vertical approach (healthcare/pharma, government-defense/Sandia/LANL/NNSA, energy-environmental, education-tech/UNM-Intel); Expo NM trade show coverage; bilingual + STEM-credentialed UNM/NM Tech staff callout; Hyatt Regency/Sheraton/Hotel Albuquerque/Sandia Resort hotel circuit; $25-48/hr; 5 FAQs
- albuquerque-promotional-models: background-matched (defense/tech for Sandia/Intel, pharma/clinical for Presbyterian/Lovelace/UNM FDA Sunshine Act, bilingual for majority-Hispanic market, Indigenous cultural competency, Balloon Fiesta sunrise specialists); Los Poblanos (Forbes 4-Star)/Hyatt Regency/Isleta Resort/Sandia Resort luxury venue network; $28-65/hr; 4 FAQs

Checks:
- npm run check passed (TypeScript clean)
- npm run build passed (Albuquerque city-service HTML files confirmed in .next/server/app/city-services/)
- Local build verified: albuquerque-brand-ambassadors.html — Balloon Fiesta 46×, Kirtland AFB 18×, Sandia National Laboratories 14×, Presbyterian Healthcare 12×; FAQPage JSON-LD confirmed ✓
- Committed 588efeb, pushed to origin/main
- Live HTTP 200 confirmed on /city-services/albuquerque-brand-ambassadors and /city-services/albuquerque-convention-staffing ✓

Status after this run:
- 37 cities now have enriched city-service content (185 enriched pages total)
- 121 cities remain on thin fallback templates

Next actions:
- Priority #5 continued: Tucson AZ, Baton Rouge LA, El Paso TX, Fresno CA
- Priority #6: Case study internal links — ensure all case study pages link back to relevant service pages

## 2026-06-03 MDT (Run 34)

Goal: City page depth — add enriched content for Richmond VA (Priority #5 continued).

Audit:
- 36th city enriched; selected Richmond VA as highest-leverage unenriched Mid-Atlantic / Southeast capital-city market (next on list per Run 33 WORK_LOG)
- Richmond VA: 1.3M MSA, Virginia's state capital, anchoring a Central Virginia trade area spanning the Richmond-Petersburg corridor, Northern Neck, and Charlottesville-to-Hampton Roads arc
- CarMax (global HQ, Goochland County adjacent Richmond — Fortune 500, world's largest used-car retailer, $35B+ annual revenue, 30,000+ employees nationally)
- Dominion Energy (global HQ, 120 Tredegar St, Downtown Richmond — Fortune 500, $14B+ annual revenue, 7M+ customers in 16 states — Virginia's largest publicly traded company by revenue)
- Altria Group (global HQ, 6601 W. Broad St, Richmond — Fortune 500, parent of Philip Morris USA; $25B+ annual revenue)
- VCU Health System (1,000+ licensed beds, NCI-designated Massey Cancer Center, 700+ physician faculty — Central Virginia's academic medical center)
- Bon Secours Mercy Health Virginia (Virginia's second-largest health system, 25,000+ healthcare workers metro)
- Richmond Raceway (58,000 cap — NASCAR Cup Series spring and fall race weekends, 80,000-100,000 fans per weekend)
- Richmond Folk Festival (Brown's Island, 150,000+, October — one of nation's largest free folk and world music festivals)
- Dominion Energy Riverrock (Brown's Island, 40,000+, May — outdoor sports/music festival)
- Scott's Addition (40+ craft breweries, cideries, distilleries in 1 sq mile — one of America's most celebrated craft beverage districts)
- Greater Richmond Convention Center (700,000 sq ft, Hall A/B, Grand Ballroom 3,000 cap, 170+ rooms, Marriott Richmond Downtown skywalk)
- Virginia State Bar Annual Meeting (GRCC, June — 5,000+ attorneys) anchor legal convention
- Virginia ABC alcohol sampling compliance; bilingual Spanish-English + Vietnamese-English callout

Shipped (commit 2ca83b6) — new file server/city-content/richmond.ts:
- richmond-brand-ambassadors: CarMax/Dominion Energy/Altria Fortune 500 framing; VCU Health/Bon Secours pharma NSM market; Richmond Raceway (58K, NASCAR)/GRCC/Brown's Island/Siegel Center/Altria Theater/VMFA venues; Richmond Folk Festival (150K+)/Riverrock (40K+)/Richmond Marathon/RVA Beer Week events; Scott's Addition (40+ craft breweries) Virginia ABC-compliant spirits-fluent staff; bilingual callout; $20-38/hr; 6 FAQs; 14 areasServed
- richmond-experiential-marketing: Brown's Island / James River waterfront activation strategy (Folk Festival 150K+, Riverrock 40K+); Scott's Addition craft brewery district pop-ups; Carytown/The Fan/Shockoe Slip neighborhood zones; James River Park System outdoor-lifestyle framing; City of Richmond DOT / Parks / James River Advisory Council permitting; 4 FAQs
- richmond-event-management: GRCC (700K sq ft, Hall A/B, Grand Ballroom, 170+ rooms, Marriott skywalk) specialist; VCU Health/Bon Secours pharma NSM (FDA Sunshine Act); CarMax/Dominion/Altria Fortune 500 corporate events; Richmond Raceway NASCAR hospitality (Champions Club, fan zone, Victory Lane); Altria Theater (3,565 cap, 1927 NHL)/Science Museum/VMFA/Maymont luxury circuit; 3 FAQs
- richmond-convention-staffing: GRCC Hall A/B Grand Ballroom specialist; 4-vertical approach (healthcare/pharma/VCU Health, government-legal/Virginia State Bar, corporate/CarMax/Dominion, technology/innovation); Marriott Richmond Downtown + Omni Richmond + Westin Richmond + Hilton Richmond hotel circuit; bilingual Spanish-English + Vietnamese-English; $25-48/hr; 5 FAQs
- richmond-promotional-models: background-matched (Fortune 500/CarMax-Dominion-Altria, healthcare/pharma FDA Sunshine Act-compliant, NASCAR/motorsports-credible, craft-beverage-fluent/Scott's Addition, arts-fluent/VMFA-Folk Festival); Omni Richmond/Altria Theater/Science Museum/VMFA/Maymont luxury venue network; $28-65/hr; 4 FAQs

Checks:
- npm run check passed (TypeScript clean)
- npm run build passed (Richmond city-service HTML files confirmed in .next/server/app/city-services/)
- Local build verified: richmond-brand-ambassadors.html — Richmond Raceway 36×, CarMax 22×, Dominion Energy 20×, Altria 14×; FAQPage JSON-LD confirmed (2 matches) ✓
- Committed 2ca83b6, pushed to origin/main
- Live HTTP 200 confirmed on /city-services/richmond-brand-ambassadors and /city-services/richmond-convention-staffing ✓

Status after this run:
- 36 cities now have enriched city-service content (180 enriched pages total)
- 122 cities remain on thin fallback templates

Next actions:
- Priority #5 continued: Albuquerque NM, Tucson AZ, Baton Rouge LA, El Paso TX
- Priority #6: Case study internal links — ensure all case study pages link back to relevant service pages

## 2026-06-03 MDT (Run 33)

Goal: City page depth — add enriched content for Louisville KY (Priority #5 continued).

Audit:
- 35th city enriched; selected Louisville KY as highest-leverage unenriched Kentucky / Mid-South market (next on list per Run 32 WORK_LOG)
- Louisville: 1.4M metro, Kentucky's largest city, commercial capital of the Bluegrass State
- UPS (global HQ, Louisville — Fortune 500, 40,000+ Louisville-area employees; UPS Worldport at SDF = world's largest fully automated package sorting facility, 115 packages/second, 130+ aircraft nightly)
- Humana (global HQ, 500 W. Main St — Fortune 500 #64 by revenue, $90B+ annual revenue, 55,000+ employees — one of three largest US health insurance companies; premier pharma NSM market)
- Yum! Brands (global HQ, Louisville — KFC/Pizza Hut/Taco Bell, 55,000+ restaurants in 155+ countries, $7B+ system revenue)
- Brown-Forman Corporation (global HQ, Louisville — Jack Daniel's, Woodford Reserve, Old Forester, Herradura; $4B+ revenue; NYSE: BF.B)
- GE Appliances (Appliance Park, Louisville — 10,000+ employees, $9B+ annual revenue, Haier-owned since 2016)
- Papa John's International (global HQ, Louisville metro — 5,400+ locations worldwide)
- Kindred Healthcare (Louisville HQ, 50,000+ employees), Norton Healthcare (7 hospitals, 18,000+ employees), Baptist Healthcare System (11 hospitals KY/IN)
- Kentucky Derby (Churchill Downs, 700 Central Ave — 150,000+ on-track, 16M+ global TV viewers, 140+ countries; first Saturday in May since 1875)
- Kentucky Oaks (100,000+ on Friday before Derby)
- Kentucky Derby Festival — 70+ events over two weeks, 1.5M+ participants across Greater Louisville (largest event series of any city its size in the US)
- Thunder Over Louisville (Waterfront Park, 500,000+ — America's largest annual fireworks and air show; opens Kentucky Derby Festival)
- Bourbon & Beyond (Highland Festival Grounds — world's largest bourbon and music festival, 100,000+ over four days, September)
- Kentucky State Fair (Kentucky Exposition Center, 600,000+ over 11 days, August — one of most-attended state fairs in US)
- St. James Court Art Show (350,000+ — consistently top-10 US outdoor art show, Old Louisville, October)
- KFC Yum! Center (22,090 cap — one of largest mid-market arenas in US; 200+ events/year)
- National Farm Machinery Show (300,000+, Kentucky Exposition Center, February — world's largest indoor farm machinery show)
- Mid-America Trucking Show / MATS (70,000+, Kentucky Exposition Center, March — North America's largest trucking show)
- Kentucky International Convention Center (KICC, 237,000 sq ft, Hall A-C, 52 meeting rooms; skywalk to Marriott Louisville Downtown + Hyatt Regency Louisville)
- Kentucky Bourbon Trail (Bardstown KY, Clermont, Loretto, Lawrenceburg, Versailles) — premier bourbon brand experiential corridor
- Forecastle Festival (40,000+/day, Waterfront Park, July)
- NuLu Fest (50,000+, East Market District, September)
- Southern Indiana coverage (New Albany IN, Jeffersonville IN, Clarksville IN — Clark + Floyd counties, 140,000+ residents)
- Elizabethtown KY (45mi south, Fort Knox adjacent), Bardstown KY (40mi south, bourbon capital), Lexington KY (80mi east)
- Kentucky ABC alcohol sampling compliance; bilingual Spanish-English callout (Portland/Shively/South Louisville Latino community)

Shipped (commit e2b8799) — new file server/city-content/louisville.ts:
- louisville-brand-ambassadors: UPS Worldport/Humana/Yum! Brands/GE Appliances/Brown-Forman/Papa John's Fortune 500 capital framing; Churchill Downs (150K+)/KFC Yum! Center (22K)/KICC/Kentucky Exposition Center/Slugger Field/Cardinal Stadium/Waterfront Park venues; Kentucky Derby (150K+)/Thunder Over Louisville (500K+)/Bourbon & Beyond (100K+)/Kentucky State Fair (600K+)/St. James Court Art Show (350K+)/Forecastle/NuLu Fest events; Bardstown KY bourbon trail + Southern Indiana (New Albany/Jeffersonville) cross-state; Kentucky ABC alcohol sampling compliance; bilingual Spanish-English callout; $20-38/hr; 6 FAQs; 14 areasServed
- louisville-experiential-marketing: Kentucky Derby Festival two-week activation window strategy (70+ events, 1.5M+ participants); Churchill Downs sponsor pavilion + hotel circuit (Galt House/Brown/Seelbach/Omni/21c); Thunder Over Louisville (500K+) Waterfront Park pop-up; Bourbon & Beyond (100K+) Highland Festival Grounds brand pavilions; NuLu/Butchertown/Highlands/Waterfront/Big Four Bridge year-round zones; Kentucky Bourbon Trail distillery adjacent activation; Louisville Metro Gov + Derby Festival Inc + Waterfront Development Corp permit guide; 4 FAQs
- louisville-event-management: KICC (237K sq ft, Hall A-C, 52 rooms, skywalk) specialist; Humana pharmaceutical NSM market (FDA Sunshine Act compliant); UPS/GE Appliances/Yum! Brands corporate events; Churchill Downs hospitality suite management (Millionaires Row/Jockey Club/Turf Club); KFC Yum! Center + Lynn Family Stadium + Cardinal Stadium sports venue staffing; Kentucky Exposition Center (1.2M sq ft) National Farm Machinery Show + MATS trade shows; $22-48/hr; 3 FAQs
- louisville-convention-staffing: KICC + Kentucky Exposition Center 4-vertical approach (healthcare/pharma for Humana NSMs, agriculture/NFMS 300K+, transportation/MATS 70K+, food-beverage-spirits/bourbon trade); Galt House (1,300 rooms, 100K sq ft)/Omni (612 rooms)/Marriott/Hyatt/Brown/Seelbach/21c hotel circuit; NFMS agricultural-background staff + MATS CDL-aware staff specialty; Kentucky ABC bourbon trade compliance; bilingual Spanish-English callout; $25-48/hr; 5 FAQs
- louisville-promotional-models: background-matched (pharma/clinical for Humana NSMs/UofL Health, bourbon-fluent for Brown-Forman/Jim Beam/Heaven Hill, Churchill Downs Derby Week VIP suite specialists, consumer goods for Yum! Brands/Papa John's/GE Appliances); Galt House/Brown (Hot Brown bar)/Seelbach (Oak Room)/Omni Urban Bourbon/21c luxury venue network; $28-65/hr; 4 FAQs

Checks:
- npm run check passed (TypeScript clean)
- npm run build passed (Louisville city-service HTML files confirmed in .next/server/app/city-services/)
- Local build verified: louisville-brand-ambassadors.html — Churchill Downs, Kentucky Derby, UPS, Humana, Thunder Over Louisville, Bourbon & Beyond, FAQPage JSON-LD confirmed ✓
- Committed e2b8799, pushed to origin/main
- Live HTTP 200 confirmed on /city-services/louisville-brand-ambassadors and /city-services/louisville-convention-staffing ✓

Status after this run:
- 35 cities now have enriched city-service content (175 enriched pages total)
- 123 cities remain on thin fallback templates

Next actions:
- Priority #5 continued: Richmond VA, Albuquerque NM, Tucson AZ, Baton Rouge LA
- Priority #6: Case study internal links — ensure all case study pages link back to relevant service pages

## 2026-06-03 MDT (Run 32)

Goal: City page depth — add enriched content for Memphis TN (Priority #5 continued).

Audit:
- 34th city enriched; selected Memphis TN as highest-leverage unenriched Mid-South market (next on list per Run 31 WORK_LOG)
- Memphis: 1.3M metro, commercial capital of the Mid-South (West Tennessee + DeSoto County MS + Crittenden County AR tri-state)
- FedEx (global HQ, Fortune 500 #66, 30,000+ Memphis employees; FedEx World Air Hub at MEM = single busiest air cargo hub on earth, ~40% of all US air cargo nightly; 1.7M packages/night)
- AutoZone (global HQ, Downtown Memphis — Fortune 500, $15.6B+ revenue, 6,200+ stores, 100,000+ employees; Liberty Bowl title sponsor)
- International Paper (global HQ, Memphis — Fortune 500, $20B+ revenue, world's largest paper/packaging company, 65,000+ employees)
- St. Jude Children's Research Hospital (332 N. Lauderdale — globally recognized, $2.7B+ annual budget, 4,000+ employees; ALSAC national HQ also Memphis)
- Methodist Le Bonheur Healthcare (Memphis — Mid-South's largest health system, 14,000+ employees, 12 hospitals)
- Baptist Memorial Health Care (Memphis HQ, 14 hospitals across TN/MS/AR)
- University of Tennessee Health Science Center (UTHSC, 3,000+ students, 1,000+ faculty — Medicine, Pharmacy, Dentistry, Nursing)
- Memphis in May International Festival: Beale Street Music Festival (100,000+, Tom Lee Park, 3 days) + World Championship Barbecue Cooking Contest (100,000+ attendance, world's largest pork BBQ competition, 250+ teams)
- Graceland (3764 Elvis Presley Blvd — one of US's most-visited private homes, 600,000+ annual visitors, 30+ countries; Elvis Week August 75,000+ fans)
- FedExForum (18,119 cap, Memphis Grizzlies NBA, 41+ home games)
- Liberty Bowl Memorial Stadium (58,500 cap): AutoZone Liberty Bowl (40,000+ New Year's Eve) + Southern Heritage Classic (55,000+ HBCU football classic — one of largest African American sporting events in US)
- Memphis Convention Center (reopened 2021 after $175M renovation, 300,000 sq ft, 120,000 sq ft exhibit hall, 57 meeting rooms)
- Peabody Memphis (149 Union Ave — Tennessee's most iconic hotel, Grand Ballroom 10,000 sq ft, famous Duck March; primary pharmaceutical NSM luxury venue)
- Beale Street Historic District (3M+ annual visitors, year-round activation corridor, birthplace of American blues)
- DeSoto County MS (Southaven, Olive Branch, Horn Lake — fastest-growing county in Mississippi, 180,000+ residents, Nike/Target/Williams-Sonoma/Ashley Furniture Fortune 500 DC corridor)
- Tennessee ABC alcohol sampling compliance; FDA Sunshine Act / Open Payments pharmaceutical compliance
- St. Jude Memphis Marathon Weekend (27,000+ runners, December — largest fundraising marathon in the South)

Shipped (commit ff2cb75) — new file server/city-content/memphis.ts:
- memphis-brand-ambassadors: FedEx/AutoZone/International Paper Fortune 500 logistics capital framing; St. Jude globally recognized nonprofit + Methodist Le Bonheur + Baptist Mid-South healthcare cluster; FedExForum (18,119)/Liberty Bowl (58,500)/AutoZone Park/Graceland/Memphis Convention Center/Tom Lee Park venues; Memphis in May (Beale Street Music Fest 100K+ + BBQ Contest 100K+)/Southern Heritage Classic (55K+)/Liberty Bowl (40K+)/Elvis Week (75K+)/St. Jude Marathon events; Beale Street (3M+) year-round corridor; DeSoto County MS tri-state coverage; Tennessee ABC alcohol sampling compliance; bilingual Spanish-English callout; $20-38/hr; 6 FAQs; 14 areasServed
- memphis-experiential-marketing: Beale Street Merchants Association activation strategy (3M+ annual visitors, 2-block pedestrian entertainment corridor); Tom Lee Park Memphis in May activation (200K+ cumulative from Music Fest + BBQ Contest); Graceland adjacent activation during Elvis Week/Birthday Week; Overton Park/Cooper-Young (50K+ September festival); South Main Arts District pop-up zone; Shelby Farms Park (4,500 acres — largest urban park in US); Tennessee ABC §57-3-806 sampling compliance; Mid-South 1.8M tri-state consumer radius; 4 FAQs
- memphis-event-management: Memphis Convention Center (300K sq ft, reopened 2021) Hall/Ballroom specialist; FedEx corporate event staffing (world-class operational standards); St. Jude/ALSAC pharmaceutical NSM market (FDA Sunshine Act); Methodist Le Bonheur/Baptist/UTHSC clinical employer cluster; FedExForum/Liberty Bowl/AutoZone Park sports venue events; Peabody Memphis (Grand Ballroom) prestige events; Southern Heritage Classic corporate hospitality; $22-48/hr; 3 FAQs
- memphis-convention-staffing: Memphis Convention Center specialist (120K sq ft exhibit, 57 rooms, Grand Ballroom 25K sq ft, Sheraton skywalk); 4-vertical industry approach (logistics/FedEx, healthcare/pharmaceutical, consumer goods/distribution, government/education); Mid-South Farm & Gin Show (7,000+) + Home and Garden Show (15,000+) anchor conventions; DeSoto County MS Fortune 500 DC corridor coverage (Nike/Target/Williams-Sonoma/Ashley Furniture); Peabody Memphis/Embassy Suites/Marriott Memphis East hotel circuit; bilingual callout; $25-48/hr; 5 FAQs
- memphis-promotional-models: background-matched (logistics/FedEx-aware, automotive/AutoZone-fluent, healthcare/clinical for St. Jude/Methodist/Baptist pharmaceutical NSMs, culturally fluent for Graceland/Elvis Week international audience); Peabody Memphis (Tennessee's most iconic hotel)/Central Station (South Main)/Four Points/Embassy Suites luxury venue network; Graceland adjacent international activation specialists; $28-65/hr; 4 FAQs

Checks:
- npm run check passed (TypeScript clean)
- npm run build passed (9 Memphis city-service HTML files confirmed in .next/server/app/city-services/)
- Local build verified: memphis-brand-ambassadors.html — FedEx 52×, Graceland 12×, FAQPage JSON-LD confirmed (2 matches) ✓
- Committed ff2cb75, pushed to origin/main
- Live HTTP 200 confirmed on /city-services/memphis-brand-ambassadors and /city-services/memphis-convention-staffing ✓

Status after this run:
- 34 cities now have enriched city-service content (170 enriched pages total)
- 124 cities remain on thin fallback templates

Next actions:
- Priority #5 continued: Louisville KY, Richmond VA, Albuquerque NM, Tucson AZ
- Priority #6: Case study internal links — ensure all case study pages link back to relevant service pages



Goal: City page depth — add enriched content for Oklahoma City OK (Priority #5 continued).

Audit:
- 33rd city enriched; selected Oklahoma City as highest-leverage unenriched southern plains / energy sector market (next on list per Run 30 WORK_LOG)
- OKC: 1.4M metro, Fortune 500 energy capital: Devon Energy (global HQ, Devon Tower — Oklahoma's tallest building), Chesapeake Energy (largest natural gas producer OKC HQ), Continental Resources (Harold Hamm shale revolution company, private OKC HQ), ONEOK (Fortune 500, $15B+ revenue)
- Love's Travel Stops (private, OKC global HQ, $20B+ revenue, 40,000+ employees, 600+ US locations — one of largest family-owned businesses in America), Hobby Lobby (private, OKC global HQ, $5B+ revenue, 900+ stores, 40,000+ employees — largest US arts & crafts retailer)
- Tinker AFB (Midwest City, adjacent OKC — largest Air Force logistics center in the United States, 26,000+ military/civilian/contractor personnel — OKC's single largest employer; Boeing/Northrop Grumman/Lockheed Martin/L3Harris contractors)
- Oklahoma City Convention Center (opened 2021, 200,000 sq ft, Halls A-C — $288M investment; skybridge to Omni OKC Hotel 605 rooms, 76,000 sq ft meeting space) — top-40 US convention market
- State Fair of Oklahoma (1M+ attendees, 11 days, September — most important mass-market activation event in the state), Festival of the Arts (700,000+, Myriad Gardens, April), OKC National Memorial Marathon (25,000+)
- Paycom Center (18,203 cap, OKC Thunder NBA — 41+ home games), Scissortail Park (70 acres, downtown, opened 2019), Bricktown Entertainment District (5M+ annual visitors)
- OU Health Sciences Center (OUHSC — one of 4 US campuses with all health colleges co-located), INTEGRIS Health (Oklahoma's largest health system, 13 hospitals, 8,000+ employees) — major pharmaceutical NSM market
- Oklahoma's unique Native American heritage (38 federally recognized tribes HQ'd in Oklahoma) — Red Earth Cultural Festival, Chickasaw Cultural Center
- WinStar World Casino (Thackerville, 70mi south — world's largest casino, major corporate event venue)
- Oklahoma ABLE Commission compliance for alcohol sampling; bilingual Spanish-English callout (Capitol Hill neighborhood, 40%+ Hispanic)

Shipped (commit af92a60) — new file server/city-content/oklahoma-city.ts:
- oklahoma-city-brand-ambassadors: Devon Energy/Chesapeake/Continental/ONEOK Fortune 500 energy capital framing; Love's + Hobby Lobby private HQ anchors; Tinker AFB (largest USAF logistics center) military-industrial employer; OKCC (200K sq ft, 2021)/Paycom Center (Thunder)/State Fairgrounds/Scissortail Park/Bricktown venues; State Fair (1M+)/Festival of Arts (700K+)/OKC Memorial Marathon (25K+) events; OU Health/INTEGRIS pharma NSM market; Oklahoma ABLE Commission alcohol sampling compliance; bilingual Spanish-English callout; $20-38/hr; 6 FAQs; 14 areasServed
- oklahoma-city-experiential-marketing: Bricktown Canal 1-mile activation corridor (5M+ annual visitors); Scissortail Park (70-acre new urban park, 2019); Myriad Botanical Gardens/Bicentennial Park (Festival of Arts 700K+); State Fair of Oklahoma ABLE permit coordination; Red Earth Native American Cultural Festival (38 federally recognized tribes in OK); Tinker AFB/Devon/Chesapeake corporate B2B framing; OKC Office of Arts & Cultural Affairs + Bricktown Association permitting breakdown; 4 FAQs
- oklahoma-city-event-management: OKCC (200K sq ft, 45K sq ft ballroom, 30+ breakout rooms) + Omni OKC skybridge specialist; Embassy Suites Medical Center (OUHSC adjacent — primary pharma NSM hotel); Devon/Chesapeake/Love's/Hobby Lobby corporate event market; Tinker AFB defense industry days; FDA Sunshine Act pharma NSM staffing; $22-48/hr; 3 FAQs
- oklahoma-city-convention-staffing: OKCC Halls A-C specialist (200K sq ft, opened 2021); 4-vertical industry approach (energy/petroleum/OIPA, healthcare/pharma/OSMA, defense/aerospace/Tinker, government/Oklahoma state agencies); WinStar World Casino (world's largest, 70mi south) regional coverage; Skirvin Hilton (1910 National Historic Landmark) + Embassy Suites medical center + Omni hotel circuit; bilingual callout; $25-48/hr; 5 FAQs
- oklahoma-city-promotional-models: background-matched (petroleum engineering/energy finance for Devon/Chesapeake/Continental, pharma/clinical for OU Health/INTEGRIS, retail/supply chain for Love's/Hobby Lobby, sports-authentic for Thunder/Paycom Center); National Cowboy & Western Heritage Museum + Omni OKC + Skirvin Hilton + WinStar luxury venue network; Oklahoma ABLE Commission alcohol sampling compliance; $28-65/hr; 4 FAQs

Checks:
- npm run check passed (TypeScript clean)
- npm run build passed (9 OKC city-service HTML files confirmed in .next/server/app/city-services/)
- Local build verified: oklahoma-city-brand-ambassadors.html — State Fair 50×, Devon Energy 14×, Tinker AFB 20×, Paycom Center 10×, Chesapeake Energy 4×; FAQPage JSON-LD confirmed ✓
- Committed af92a60, pushed to origin/main
- Live HTTP 200 confirmed on /city-services/oklahoma-city-brand-ambassadors and /city-services/oklahoma-city-convention-staffing ✓

Status after this run:
- 33 cities now have enriched city-service content (165 enriched pages total)
- 125 cities remain on thin fallback templates

Next actions:
- Priority #5 continued: Memphis TN, Louisville KY, Richmond VA, Albuquerque NM
- Priority #6: Case study internal links — ensure all case study pages link back to relevant service pages

## 2026-06-03 MDT (Run 30)

Goal: City page depth — add enriched content for Jacksonville FL (Priority #5 continued).

Audit:
- 32nd city enriched; selected Jacksonville as highest-leverage unenriched Northeast Florida / Southeast market (next on list per Run 29 WORK_LOG)
- Jacksonville: Florida's largest city by land area, most populous city in the Southeastern US (1.6M metro); commands entire North Florida region
- NAS Jacksonville + Naval Station Mayport: one of largest US naval complexes, 30,000+ active-duty/civilian/contractor personnel — unique military-professional talent pool
- FIS / Fidelity National Information Services (global HQ, Jacksonville) — one of world's largest fintech companies, $14B+ annual revenue, 55,000+ employees, Fortune 500
- CSX Transportation (global HQ, 500 Water Street, Downtown Jacksonville) — one of 3 largest US railroads, $13B+ annual revenue, 20,000+ employees
- Fidelity National Financial (global HQ) — largest US title insurance company; Deutsche Bank Jacksonville (2,000+ employees — Deutsche Bank's largest US non-NYC office)
- Mayo Clinic Florida (Jacksonville campus — 500-acre, 5,000+ employees, Jacksonville's most prestigious employer, one of world's top hospital brands)
- Baptist Health Jacksonville (7 hospitals, 12,000+ employees, largest independent NE Florida health system); UF Health Jacksonville (teaching hospital, 800+ beds)
- THE PLAYERS Championship at TPC Sawgrass (Ponte Vedra Beach, 200,000+ weekly attendance, 35M+ global broadcast viewers — golf's unofficial 5th major)
- Georgia-Florida Football Classic ("World's Largest Outdoor Cocktail Party") at EverBank Stadium (85,000+ fans, largest annual Jacksonville event)
- EverBank Stadium (62,000 cap, Jacksonville Jaguars NFL); TaxSlayer Gator Bowl (65,000+); Jacksonville Jazz Festival (100,000+, Metropolitan Park, May)
- St. Johns Town Center (1.5M sq ft, highest-grossing SE outdoor lifestyle retail center); Prime Osborn Convention Center (78,000 sq ft, historic 1919 Union Terminal)
- VyStar Credit Union (one of largest FL credit unions, major Jacksonville employer); Landstar System / One Call / Regency Centers Fortune 500 HQs
- 25-mile Jacksonville Beaches corridor: Jacksonville Beach, Neptune Beach, Atlantic Beach, Ponte Vedra Beach — affluent coastal consumer activation zone

Shipped (commit bbbdd7f) — new file server/city-content/jacksonville.ts:
- jacksonville-brand-ambassadors: FIS/CSX/Mayo Clinic Fortune 500 capital framing; EverBank Stadium (62K)/VyStar Arena/Prime Osborn/TPC Sawgrass/St. Johns Town Center venues; Georgia-Florida Classic (85K+)/THE PLAYERS (200K+)/Jazz Festival (100K+)/Gator Bowl events; military talent pool (NAS Jax + Mayport — unique SE advantage); Florida ABT alcohol sampling compliance; bilingual callout; $20-38/hr; 6 FAQs; 14 areasServed
- jacksonville-experiential-marketing: Georgia-Florida Classic game-day activation (World's Largest Outdoor Cocktail Party framing); THE PLAYERS Championship TPC Sawgrass corporate tent strategy (200K+ attendance, 35M+ global viewers); Metropolitan Park/Southbank Riverwalk/Five Points urban activation zones; year-round mild climate advantage; City of Jacksonville Special Events permitting guide; 4 FAQs
- jacksonville-event-management: Prime Osborn Convention Center (78K sq ft, historic 1919 Union Terminal + Hyatt Regency skybridge) specialist; pharmaceutical NSM (Mayo Clinic/Baptist Health FDA Sunshine Act-compliant); military/defense industry days (NAS Jax/Mayport, NAVSEA/NAVAIR, Lockheed/Northrop/L3Harris/BAE); FIS/CSX/Deutsche Bank corporate events; $22-48/hr; 3 FAQs
- jacksonville-convention-staffing: Prime Osborn Hall specialist; 5-vertical industry approach (fintech/FIS, healthcare/Mayo Clinic, transportation/CSX, defense/NAS Jax/NAVSEA, consumer/Home & Garden Show/Boat Show); military-background staff specialty callout; Sawgrass Marriott/Ponte Vedra Inn & Club luxury hotel coverage; $25-48/hr; 5 FAQs
- jacksonville-promotional-models: THE PLAYERS Championship TPC Sawgrass corporate tent specialists (golf-credible, C-suite appropriate); military-background promotional staff roster (unique Jacksonville advantage); pharmaceutical NSM FDA Sunshine Act-compliant staffing; coastal lifestyle talent framing; $28-65/hr; 4 FAQs

Checks:
- npm run check passed (TypeScript clean)
- npm run build passed (5617 city-service HTML files, 0 errors)
- Local build verified: jacksonville-brand-ambassadors.html — EverBank 36×, FAQPage JSON-LD confirmed ✓
- Committed bbbdd7f, pushed to origin/main
- Live HTTP 200 confirmed on /city-services/jacksonville-brand-ambassadors and /city-services/jacksonville-convention-staffing ✓

Status after this run:
- 32 cities now have enriched city-service content (160 enriched pages total)
- 126 cities remain on thin fallback templates

Next actions:
- Priority #5 continued: Oklahoma City, Memphis, Louisville KY, Richmond VA
- Priority #6: Case study internal links — ensure all case study pages link back to relevant service pages

## 2026-06-02 MDT (Run 29)

Goal: City page depth — add enriched content for Orlando FL (Priority #5 continued).

Audit:
- 31st city enriched; selected Orlando as highest-leverage unenriched Florida/Southeast tourism-convention market (next on list per Run 28 WORK_LOG)
- Orlando: 75M annual visitors (most-visited US tourist destination), Orange County Convention Center (2.1M sq ft exhibit space — 2nd largest in US), 130,000+ hotel rooms (highest in Florida), $6B+ annual meetings industry economic impact
- AdventHealth global HQ Altamonte Springs (83,000+ employees, 50+ hospitals — largest faith-based nonprofit health system in US); Medical City Lake Nona (UCF Health, Nemours Children's, UCF College of Medicine, Orlando VA, Tavistock biotech campus)
- IBS/Design & Construction Week (100,000+ trade, February); PGA Merchandise Show (40,000+ golf industry, January); Premiere Orlando (65,000+ beauty, June); HIMSS Global Health Conference (40,000+ healthcare IT); MegaCon (120,000+, spring)
- Walt Disney World (50M+ annual visitors, 4 theme parks, 40+ hotels, EPCOT Food & Wine Festival millions); Universal Orlando (Epic Universe 2025); Kia Center (Orlando Magic NBA); Camping World Stadium (65,890 cap)
- EA Sports / Electronic Arts Tiburon Studios (Maitland — Madden/EA Sports FC franchise); Darden Restaurants global HQ (Olive Garden, LongHorn, Capital Grille — Lake Buena Vista area); UCF (70,000+ students — largest/2nd largest US university by enrollment)
- Orlando's Puerto Rican community: 300,000+ — largest PR population of any US city outside Puerto Rico; large Brazilian-American community (Kissimmee/Osceola corridor) → bilingual Spanish/Portuguese/Haitian Creole callout
- Key NSM hotels: Rosen Shingle Creek (1,501 rooms, 445K sq ft meeting space), Gaylord Palms (1,406 rooms, Kissimmee), Caribe Royale (1,350 suites), Hyatt Regency Orlando (1,641 rooms — OCCC walkway), JW Marriott Grande Lakes, Four Seasons/Waldorf Astoria

Shipped (commit 1b93639) — new file server/city-content/orlando.ts:
- orlando-brand-ambassadors: OCCC (2.1M sq ft, 2nd largest US) + IBS/PGA Show/Premiere/HIMSS/MegaCon trade show framing; AdventHealth (83K employees, largest faith-based nonprofit health system); EA Sports/Darden/UCF corporate market; Walt Disney World 50M+ / Universal Epic Universe 2025 theme park district; 75M annual visitors; Florida ABT alcohol sampling compliance; bilingual Spanish/Portuguese/Haitian Creole callout; $22-42/hr; 6 FAQs; 15 areasServed
- orlando-experiential-marketing: EPCOT Food & Wine Festival + I-Drive corridor + Disney Springs activation strategy; Lake Eola Park + Thornton Park + Mills 50 + Winter Park Park Ave neighborhood zones; City of Orlando Special Events permitting guide; 4 FAQs
- orlando-event-management: OCCC North/South/West Buildings specialist; Rosen Shingle Creek + Gaylord Palms pharmaceutical NSM market; AdventHealth/HCA/UCF Health/Nemours healthcare event staffing; FDA Sunshine Act / Open Payments compliance; $22-48/hr; 3 FAQs
- orlando-convention-staffing: 5-vertical industry approach (construction/IBS, golf/PGA Show, healthcare/HIMSS, consumer/MegaCon, beauty/Premiere Orlando); OCCC Hall A-D specialist; bilingual Spanish/Portuguese callout; $25-48/hr; 5 FAQs
- orlando-promotional-models: background-matched (pharma/clinical, construction, golf, beauty professional, theme park entertainment talent pool); Four Seasons/Waldorf Astoria/Ritz-Carlton Grande Lakes luxury hotel network; $28-65/hr; 4 FAQs

Checks:
- npm run check passed (TypeScript clean)
- npm run build passed (6314 static pages, 0 errors)
- Committed 1b93639, pushed to origin/main
- Live HTTP 200 confirmed on /city-services/orlando-brand-ambassadors and /city-services/orlando-convention-staffing ✓

Status after this run:
- 31 cities now have enriched city-service content (155 enriched pages total)
- 127 cities remain on thin fallback templates

Next actions:
- Priority #5 continued: Add enriched content for Austin (verify if exists — city-content/austin.ts present, check quality), Nashville (verify), then Jacksonville FL, Oklahoma City, Memphis
- Priority #6: Case study internal links — ensure all case study pages link back to relevant service pages

## 2026-06-02 MDT (Run 28)

Goal: City page depth — add enriched content for Salt Lake City UT (Priority #5 continued).

Audit:
- 30th city enriched; selected Salt Lake City as highest-leverage unenriched Mountain West market (next on list per Run 27 WORK_LOG)
- Salt Lake City: 2.7M Wasatch Front metro, 2034 Winter Olympics host city (officially awarded), Utah Hockey Club (NHL debut 2024-25 — first NHL team in Utah history), Utah Jazz (NBA), Real Salt Lake (MLS)
- Silicon Slopes: 80-mile tech corridor, 6,500+ tech companies; Qualtrics ($8B SAP acquisition), Domo (Nasdaq), Pluralsight (Vista $3.5B), Instructure/Canvas LMS (global HQ), Goldman Sachs (2,000+ employees), American Express (3,000+ employees), Adobe/Dell/eBay-PayPal campuses
- Salt Palace Convention Center (515,000 sq ft, Halls A-D); Outdoor Retailer (world's largest outdoor trade show, 50K+ biannual); Sundance Film Festival (Park City, 100K+, January)
- Unique Utah talent: returned LDS missionaries — genuinely multilingual in 60+ languages (Spanish, Portuguese, Japanese, Mandarin, Korean, Arabic, French, German, etc.)
- Grand America Hotel (AAA Five Diamond); Montage Deer Valley/Stein Eriksen Lodge/St. Regis Deer Valley luxury resort circuit
- Days of '47 Pioneer Day (July 24 — 400K+ spectators); Utah Arts Festival (60K+); Twilight Concert Series (100K+ summer); Silicon Slopes Summit (10K+)
- Life sciences: ARUP Laboratories (4K+ employees), Myriad Genetics (global HQ, NASDAQ), University of Utah Health
- Nine world-class ski resorts within 45 min of downtown

Shipped (commit 66e4b63) — new file server/city-content/salt-lake-city.ts:
- salt-lake-city-brand-ambassadors: 2034 Winter Olympics + Silicon Slopes dual framing; Delta Center (Jazz + Utah HC NHL)/Rice-Eccles/America First Field; Outdoor Retailer/Sundance/Days of '47 events; Utah multilingual LDS talent pool; Utah DABC alcohol sampling compliance; $22-40/hr; 6 FAQs; 15 areasServed
- salt-lake-city-experiential-marketing: Outdoor Retailer + nine ski resort natural backdrop; Sundance Main Street activation; Liberty Park/Twilight Concert Series/Pioneer Park/Temple Square/City Creek Center; SLC Parks + Town of Park City permitting; 2034 Olympics roadmap CTA; 4 FAQs
- salt-lake-city-event-management: Salt Palace Halls A-D; pharmaceutical NSM FDA Sunshine Act–compliant (ARUP/Myriad/UofU Health); Goldman Sachs/AmEx corporate events; Grand America/Deer Valley luxury events; $22-48/hr; 3 FAQs
- salt-lake-city-convention-staffing: Salt Palace Halls A-D specialist; outdoor athlete credential standard for Outdoor Retailer; Silicon Slopes tech-literate vertical; 60+ language multilingual pool; FDA life sciences vertical; $25-48/hr; 5 FAQs
- salt-lake-city-promotional-models: Background-matched (tech/outdoor/finance/healthcare/luxury/Sundance); Grand America (Five Diamond)/Montage/Stein Eriksen (Forbes 5-Star)/St. Regis/Waldorf Astoria Park City luxury circuit; Sundance celebrity-adjacent staffing; $28-65/hr; 4 FAQs

Checks:
- npm run check passed (TypeScript clean)
- npm run build passed (6308 static pages, 0 errors)
- Committed 66e4b63, pushed to origin/main
- Live HTTP 200 confirmed on /city-services/salt-lake-city-brand-ambassadors and /city-services/salt-lake-city-convention-staffing ✓

Status after this run:
- 30 cities now have enriched city-service content (150 enriched pages total)
- 128 cities remain on thin fallback templates

Next actions:
- Priority #5 continued: Add enriched content for Orlando, Austin (verify), Nashville (verify), then move into next tier
- Priority #6: Case study internal links — ensure all case study pages link back to relevant service pages

## 2026-06-02 MDT (Run 27)

Goal: City page depth — add enriched content for Kansas City MO (Priority #5 continued).

Audit:
- 29th city enriched; selected Kansas City as highest-leverage unenriched Midwest/heartland market (next on list per Run 26 WORK_LOG)
- Kansas City: 2.2M metro, three consecutive Super Bowl championships (Chiefs LVII/LVIII/LIX — first team in NFL history), Arrowhead Stadium (76,416 cap — NFL record crowd noise 142.2 dB), Bartle Hall / KC Convention Center (388,800 sq ft exhibit space)
- Fortune 500 HQs: Hallmark Cards global HQ (Crown Center, 28,000+ employees), H&R Block global HQ (downtown KCMO), Garmin International global HQ (Olathe KS — GPS/navigation leader, $5B+ revenue, 19,000+ employees), Oracle Health/Cerner (North Kansas City — world's largest health IT company, 28,000+ global employees), Burns & McDonnell global HQ (#1 ENR engineering firm)
- Healthcare: Children's Mercy Hospital (top-10 US children's hospital), KU Health System, Saint Luke's Health System — 50,000+ healthcare workers metro
- American Royal World Series of Barbecue (65,000+ attendees — world's largest BBQ competition); Plaza Art Fair (200,000+ attendees); First Fridays Crossroads (10,000+/month); 2023 NFL Draft (300,000+ — largest single-event crowd in KC history)
- Bistate market: KCMO (Missouri) + Johnson County KS (Garmin/Sprint-T-Mobile/AMC Theatres); IATSE Local 31 union jurisdiction; Overland Park Convention Center (142,000 sq ft, suburban JoCo)

Shipped (commit a79ae7f) — new file server/city-content/kansas-city.ts:
- kansas-city-brand-ambassadors: Chiefs three-peat framing (LVII/LVIII/LIX — NFL first); Arrowhead (76,416)/Kauffman/T-Mobile/Children's Mercy Park venues; American Royal BBQ (65K+)/Plaza Art Fair (200K+)/First Fridays/NFL Draft (300K+) events; bistate MO+KS market; Hallmark/H&R Block/Garmin/Oracle Health Fortune 500 depth; Missouri ATC + Kansas ABC dual-state sampling compliance; bilingual Spanish-English; $22-40/hr; 6 FAQs; 15 areasServed
- kansas-city-experiential-marketing: Chiefs tailgate culture framing (Truman Sports Complex lots A–K, 5+ hr pre-game window); Country Club Plaza Art Fair + First Fridays Crossroads + City Market activation strategy; KC Streetcar activation integration; KCMO Special Events + Plaza Association + Crossroads Community Association permitting; 4 FAQs
- kansas-city-event-management: Bartle Hall (388,800 sq ft) + Municipal Auditorium (10,700) + Music Hall (2,400) specialist; IATSE Local 31 union coordination; Kauffman Center ($413M) corporate venue; Oracle Health/Cerner healthcare IT NSM market; FDA Sunshine Act compliance; $22-48/hr; 3 FAQs
- kansas-city-convention-staffing: Bartle Hall Hall A–D specialist; 5-vertical approach (healthcare IT, engineering, technology/GPS/Garmin, financial services, consumer goods); Loews KC skybridge hotel; Overland Park Convention Center (142K sq ft, JoCo) coverage; Mandarin/Korean-English callout; $25-48/hr; 5 FAQs
- kansas-city-promotional-models: background-matched (healthcare IT/pharma, engineering, creative/Hallmark, sports-authentic/Chiefs, BBQ-fluent/American Royal); Westin Crown Center/InterContinental/The Fontaine luxury hotel network; $28-65/hr; 4 FAQs

Checks:
- npm run check passed (TypeScript clean)
- npm run build passed (6305 static pages, 0 errors)
- Local build verified: kansas-city-brand-ambassadors.html — Arrowhead 18×, American Royal 19×, Garmin 16×, Super Bowl 10×; FAQPage JSON-LD confirmed ✓
- Committed a79ae7f, pushed to origin/main
- Live HTTP 200 confirmed on /city-services/kansas-city-brand-ambassadors and /city-services/kansas-city-convention-staffing ✓

Status after this run:
- 29 cities now have enriched city-service content (145 enriched pages total)
- 129 cities remain on thin fallback templates

Next actions:
- Priority #5 continued: Add enriched content for Salt Lake City, Raleigh, Columbus
- Priority #6: Case study internal links — ensure all case study pages link back to relevant service pages

## 2026-06-02 MDT (Run 26)

Goal: City page depth — add enriched content for New Orleans LA (Priority #5 continued).

Audit:
- 28th city enriched; selected New Orleans as highest-leverage unenriched Southern events/convention market (next on list after Indianapolis)
- New Orleans: 18M annual visitors, Ernest N. Morial Convention Center (1.1M sq ft — 6th largest in US, Halls A–J, 140 meeting rooms, Great Hall 4,000 cap, skywalk to Hilton New Orleans Riverside), Caesars Superdome (73,208 cap — most Super Bowls hosted in NFL history, Saints), Smoothie King Center (18,500 cap, Pelicans)
- Mardi Gras Season (1M+ visitors), Jazz Fest (500,000+ at Fair Grounds Race Course, two weekends), Essence Festival of Culture (500,000+ — largest African American cultural event in US, Caesars Superdome), French Quarter Festival (600,000+ — largest FREE music festival in the South), Sugar Bowl (75,000+, January 1)
- Ochsner Health System (Louisiana's largest health system, 40+ hospitals, 36,000+ employees), Tulane Medical Center, UMC New Orleans — major pharma NSM market
- Entergy Corporation (Fortune 500, global HQ New Orleans), Shell/Chevron/Halliburton/Baker Hughes Gulf of Mexico operations — energy industry B2B convention market
- IATSE Local 298 (New Orleans stagehands) union jurisdiction at ENMCC and Caesars Superdome
- National WWII Museum (one of the most-visited museums in US, 600,000+ visitors/yr) — premier Warehouse District event venue
- Roosevelt New Orleans (Waldorf Astoria), Ritz-Carlton New Orleans, Four Seasons New Orleans (2021), Hyatt Regency (1,193 rooms, connected to ENMCC), JW Marriott
- Neighborhood depth: French Quarter, Warehouse/Arts District, Garden District/Magazine Street, Marigny/Frenchmen Street, Bywater, Tremé, Mid-City, Uptown/St. Charles Avenue
- Bilingual: French-English (Louisiana Creole heritage) + Spanish-English (growing Latino community, Kenner/Metairie/Westbank) + Portuguese (oil/gas industry delegations)

Shipped (commit 3e6007e) — new file server/city-content/new-orleans.ts:
- new-orleans-brand-ambassadors: ENMCC (1.1M sq ft, 6th largest US) / Caesars Superdome / Smoothie King Center framing; Mardi Gras (1M+)/Jazz Fest (500K+)/Essence Festival (500K+)/French Quarter Festival (600K+)/Sugar Bowl (75K+) full events calendar; Ochsner/Entergy Fortune 500 corporate market; bilingual French-English + Spanish-English callout; Louisiana ATC alcohol sampling compliance; $22-40/hr; 6 FAQs; 15 areasServed
- new-orleans-experiential-marketing: Mardi Gras parade route activation strategy (Endymion/Bacchus/Orpheus/Rex/Zulu); Jazz Fest hospitality tent program (50+ Fortune 500 corporate tents at Fair Grounds); Essence Festival 30-block sponsor activation footprint; National WWII Museum/Warehouse District framing; NORDC/French Quarter Management District/DPW/City Parks permit breakdown; 4 FAQs
- new-orleans-event-management: ENMCC Halls A–J + Great Hall (4,000 cap, 140 meeting rooms) specialist; IATSE Local 298 union coordination explanation; pharmaceutical NSM market (FDA Sunshine Act/Open Payments); oil/gas energy industry (Shell/Chevron/Halliburton/Entergy); Hyatt Regency (1,193 rooms, skywalk to ENMCC); $22-48/hr; 4 FAQs
- new-orleans-convention-staffing: ENMCC Hall A (400K sq ft) specialist framing; 5-vertical industry approach (healthcare/pharma for ADA/AHA/NSMs, tech for Cisco Live 20K+, legal for ABA, oil-gas/Gulf of Mexico, food/hospitality); Roosevelt Waldorf Astoria/Ritz-Carlton/Four Seasons/Windsor Court luxury hotel circuit; bilingual + Portuguese callout; $25-48/hr; 5 FAQs
- new-orleans-promotional-models: background-matched approach (pharma/clinical FDA Sunshine Act-trained for NSMs, culturally fluent for Essence Festival, high-energy for Mardi Gras, sophisticated for Jazz Fest tents); Roosevelt/Ritz-Carlton/Four Seasons/Windsor Court luxury venue network; $28-65/hr; 4 FAQs

Checks:
- npm run check passed (TypeScript clean)
- npm run build passed (6305 static pages, 0 errors)
- Local build verified: new-orleans-brand-ambassadors.html — Mardi Gras 42×, Jazz Fest 36×, Ernest N. Morial 24×, Essence Festival confirmed; FAQPage JSON-LD confirmed ✓
- Committed 3e6007e, pushed to origin/main
- Live HTTP 200 confirmed on /city-services/new-orleans-brand-ambassadors and /city-services/new-orleans-convention-staffing ✓

Status after this run:
- 28 cities now have enriched city-service content (140 enriched pages total)
- 130 cities remain on thin fallback templates

Next actions:
- Priority #5 continued: Add enriched content for Kansas City, Salt Lake City, Raleigh, Columbus
- Priority #6: Case study internal links — ensure all case study pages link back to relevant service pages

## 2026-06-02 MDT (Run 25)

Goal: City page depth — add enriched content for Indianapolis IN (Priority #5 continued).

Audit:
- 27th city enriched; selected Indianapolis as highest-leverage unenriched Midwest/heartland market (next on list after Pittsburgh)
- Indianapolis: 2.1M metro, Eli Lilly global HQ (world's top-5 pharma company, $28B+ annual revenue, 140+ years in Indianapolis, 10,000+ local employees), Elevance Health (formerly Anthem — one of the largest US health insurers, global HQ Downtown Indianapolis), Simon Property Group global HQ (world's largest mall REIT), Roche Diagnostics Indiana HQ, OneAmerica Financial HQ, Salesforce major Indiana campus
- IU Health (Indiana's largest health system, 40+ hospitals, 37,000+ employees), Eskenazi Health, Community Health Network, Franciscan Health — massive pharma convention market
- Indiana Convention Center (566,567 sq ft, 7 exhibit halls, 71 meeting rooms, skywalk connection to Lucas Oil Stadium and 11 Downtown hotels with 4,700+ rooms — highest hotel-to-convention ratio in North America)
- Indianapolis Motor Speedway (world's largest spectator venue, 300,000+ Indianapolis 500 attendees — world's largest single-day sporting event), Lucas Oil Stadium (67,000 cap, Colts — directly connected to ICC), Gainbridge Fieldhouse (18,165 cap, Pacers), Victory Field (AAA)
- Gen Con (70,000+ attendees over 4 days — North America's largest tabletop gaming convention), FFA National Convention (65,000+ youth attendees — world's largest agricultural youth convention), Indiana State Fair (1M+ attendees, 17 days), Indiana Black Expo Summer Celebration (300,000+), NCAA Final Four (most-frequent Indianapolis host), Big Ten Men's and Women's Basketball Tournaments, NFL Scouting Combine, Big Ten Football Championship
- Mass Ave Arts District, Broad Ripple Village, Fountain Square (1928 Art Deco Theater), Irvington, Carmel Arts & Design District (Palladium concert hall), Indianapolis Cultural Trail (8-mile urban bike/pedestrian loop connecting 6 cultural districts), White River State Park (250 acres, Eiteljorg Museum, Indiana State Museum, NCAA Hall of Champions, Victory Field, Indianapolis Zoo)
- JW Marriott Indianapolis (1,005 rooms, directly connected to ICC), Conrad Indianapolis, Hyatt Regency Indianapolis, Omni Severin Hotel (1913, Downtown), Westin Indianapolis, Marriott Downtown, Alexander Hotel

Shipped (commit a7b12a1) — new file server/city-content/indianapolis.ts:
- indianapolis-brand-ambassadors: Eli Lilly/Elevance Health/Simon Fortune 500 pharma-insurance capital framing; IMS (300K+ 500)/Lucas Oil (Colts)/Gainbridge (Pacers) sports trifecta; Gen Con (70K+)/Indiana State Fair (1M+)/FFA National Convention (65K+) events; Mass Ave/Broad Ripple/Fountain Square/Speedway/Carmel neighborhood depth; Indiana ATC alcohol sampling compliance; bilingual Spanish-English callout; $22-40/hr pricing; 6 FAQs; 15 areasServed
- indianapolis-experiential-marketing: Indianapolis 500 race-week IMS activation strategy (Pagoda Plaza, Snake Pit, Turn 1 Fan Village, Gasoline Alley, 500 Festival Parade); White River State Park/Mass Ave/Cultural Trail/Fountain Square urban activation zones; Gen Con hotel-takeover and street-team strategy; pharma B2B experiential (Eli Lilly/FDA Sunshine Act); NCAA Final Four + Big Ten activation; Indianapolis DPW/State Museum/IMS commercial licensing permit guidance; 4 FAQs
- indianapolis-event-management: ICC (566K sq ft) + Lucas Oil Stadium skywalk connection specialist; JW Marriott (1,005 rooms) as primary pharma NSM HQ; FFA National Convention (65K+) and Gen Con event staffing; Big Ten and NCAA Final Four hospitality; FDA Sunshine Act NSM compliance; $22-48/hr pricing; 3 FAQs
- indianapolis-convention-staffing: ICC Halls A–H + Sagamore Ballroom + Indiana Ballroom specialist knowledge; 4-vertical industry approach (life sciences/pharma, gaming/Gen Con, agriculture/FFA, sports/NCAA); Indiana Black Expo Summer Celebration (300K+); NFL Combine staffing; bilingual Spanish-English; $25-48/hr pricing; 5 FAQs
- indianapolis-promotional-models: background-matched approach (pharma/clinical for Lilly/AZ/Roche events, motorsports-credible for IMS race week, gaming-fluent for Gen Con, agricultural-background for FFA); JW Marriott/Conrad/Hyatt Regency/Omni Severin luxury hotel network; $28-65/hr pricing; 3 FAQs

Checks:
- npm run check passed (TypeScript clean)
- npm run build passed (6305 static pages, 0 errors)
- Local build verified: indianapolis-brand-ambassadors.html — Eli Lilly 18×, Gen Con 38×, Indiana Convention Center 24×, Indianapolis 500 20×; FAQPage JSON-LD confirmed (2 matches) ✓
- Committed a7b12a1, pushed to origin/main
- Live HTTP 200 confirmed on /city-services/indianapolis-brand-ambassadors and /city-services/indianapolis-convention-staffing ✓

Status after this run:
- 27 cities now have enriched city-service content (135 enriched pages total)
- 131 cities remain on thin fallback templates

Next actions:
- Priority #5 continued: Add enriched content for New Orleans, Kansas City, Salt Lake City, Raleigh
- Priority #6: Case study internal links — ensure all case study pages link back to relevant service pages

## 2026-06-02 MDT (Run 24)

Goal: City page depth — add enriched content for Pittsburgh PA (Priority #5 continued).

Audit:
- 26th city enriched; selected Pittsburgh as highest-leverage unenriched Northeast/Rust Belt market (next on list after Cincinnati)
- Pittsburgh: 2.4M metro, UPMC (90K+ employees, 40+ hospitals, $26B+ revenue — one of top-5 academic medical centers in US), Carnegie Mellon University (ranked #1 globally for AI/computer science), University of Pittsburgh, PNC Financial Services global HQ (Tower at PNC Plaza — world's most energy-efficient skyscraper), PPG Industries global HQ (world's largest paint/coatings company, $18B+ revenue, 50K+ employees), Dick's Sporting Goods global HQ (Coraopolis), U.S. Steel HQ, Highmark Health HQ ($25B health insurance)
- Allegheny Health Network (14 hospitals, 10K+ physicians, Drexel academic partner); 100+ AI/autonomous vehicle companies (Aurora/Waymo/Argo AI/Carnegie Robotics ecosystem)
- David L. Lawrence Convention Center (313K sq ft exhibit, 53 meeting rooms, world's largest LEED Gold convention center, cable-stayed architecture landmark); PPG Paints Arena (18,387 cap, Penguins — 5x Stanley Cup)
- Acrisure Stadium (68,400 cap, Steelers — 6x Super Bowl champions, most in NFL history); PNC Park (38,747 cap, Pirates — consistently #1 most beautiful ballpark in MLB)
- Roberto Clemente Bridge (pedestrian festival zone on game days — 100K+ in North Shore sports district); North Shore sports district (Acrisure + PNC Park + Stage AE)
- Three Rivers Arts Festival (750,000+ attendees — Pennsylvania's largest annual outdoor arts event); Picklesburgh (Strip District, 100,000+); Pittsburgh Marathon (30,000+); Pittsburgh Vintage Grand Prix; Three Rivers Regatta
- Strip District Saturday Market (30,000+ weekend visitors, Penn Avenue corridor, Wholey's Fish Market, PA Macaroni Co. since 1902, Pittsburgh Public Market)
- Omni William Penn Hotel (1916 National Historic Landmark, Grand Ballroom seats 1,000); Fairmont Pittsburgh; Carnegie Music Hall (1895, 1,989-seat Oakland); Soldiers & Sailors Memorial Hall
- Neighborhood depth: Strip District, Lawrenceville (Butler Street), Shadyside (Walnut Street), Squirrel Hill, South Side Works (Carson Street), Oakland, Mount Washington, North Shore

Shipped (commit ebb2937) — new file server/city-content/pittsburgh.ts:
- pittsburgh-brand-ambassadors: UPMC/CMU healthcare-AI capital framing; Acrisure Stadium (6x Super Bowl)/PNC Park (#1 MLB beauty)/PPG Paints Arena (5x Stanley Cup) sports trifecta; Three Rivers Arts Festival (750K+)/Picklesburgh (100K+)/Strip District Saturday Market activation depth; Strip District/Lawrenceville/Shadyside/Squirrel Hill/South Side/Mount Washington neighborhood depth; PA PLCB alcohol sampling compliance; bilingual Spanish/Mandarin/Korean callout; $22-40/hr pricing; 6 FAQs; 15 areasServed
- pittsburgh-experiential-marketing: North Shore Roberto Clemente Bridge pedestrian festival zone on game days; Strip District Saturday Market pop-up strategy; Three Rivers Arts Festival Pittsburgh Cultural Trust coordination; CMU/UPMC B2B innovation experiential; DLCC world's largest LEED Gold framing; City of Pittsburgh Office of Special Events + SEA North Shore approval process; 4 FAQs
- pittsburgh-event-management: DLCC 313K sq ft/53 meeting rooms specialist; HIMSS 40K+ healthcare IT framing; UPMC/AHN pharma NSM market (FDA Sunshine Act + HIPAA protocols); PNC/PPG/Dick's/Highmark Fortune 500 corporate event market; IATSE Local 3 union jurisdiction explanation; Omni William Penn/Fairmont/Carnegie Music Hall luxury venue circuit; $22-48/hr; 3 FAQs
- pittsburgh-convention-staffing: DLCC cable-stayed architecture + 1.5M sq ft complex specialist; HIMSS/AIA anchor conventions; healthcare/life sciences vertical (UPMC+AHN); AI/robotics vertical (CMU #1 + 100+ AV companies + Pittsburgh Tech Council); tech-literate CMU/Pitt alumni staff callout; Wyndham Grand/Westin/Airport Marriott hotel convention circuit; $25-48/hr; 5 FAQs
- pittsburgh-promotional-models: background-matched approach (healthcare/clinical for UPMC, finance/accounting for PNC/Highmark, technical for CMU/AI industry, athletic/sports for Steelers/Pirates/Penguins); Omni William Penn/Fairmont/Carnegie Music Hall/Soldiers & Sailors luxury venue network; North Shore game-day activation specialists with PA PLCB compliance; $28-65/hr; 4 FAQs

Checks:
- npm run check passed (TypeScript clean)
- npm run build passed (6305 static pages, 0 errors)
- Local build verified: pittsburgh-brand-ambassadors.html — UPMC 22×, Acrisure 28×, PNC Park 28×, David L. Lawrence 10×, Carnegie Mellon 4×; FAQPage JSON-LD confirmed (1 match) ✓
- Committed ebb2937, pushed to origin/main
- Live HTTP 200 confirmed on /city-services/pittsburgh-brand-ambassadors and /city-services/pittsburgh-convention-staffing; enriched SSG propagating (15-25 min Vercel SSG deploy)

Status after this run:
- 26 cities now have enriched city-service content (130 enriched pages total)
- 132 cities remain on thin fallback templates

Next actions:
- Priority #5 continued: Add enriched content for Indianapolis, New Orleans, Kansas City, Salt Lake City
- Priority #6: Case study internal links — ensure all case study pages link back to relevant service pages

## 2026-06-01 MDT (Run 23)

Goal: City page depth — add enriched content for Cincinnati OH (Priority #5 continued).

Audit:
- 25th city enriched; selected Cincinnati as highest-leverage unenriched Midwest market (next on list after St. Louis)
- Cincinnati: 2.3M metro, global HQ of Procter & Gamble (world's largest CPG company — Tide, Pampers, Gillette, Bounty, Crest, Febreze; founded Cincinnati 1837), Kroger global HQ (largest US supermarket chain, 2,700+ stores, $150B+ annual revenue), Fifth Third Bank HQ (1,100+ branches), Cincinnati Financial HQ, Western & Southern Financial Group HQ, American Financial Group HQ, Great American Insurance HQ
- Duke Energy Convention Center (200K sq ft exhibit, 35 meeting rooms, Grand Ballroom, skywalk to Hyatt Regency); Cincinnati Children's Hospital Medical Center (consistently #2-3 nationally); UC Health; TriHealth; Mercy Health
- Paycor Stadium (65,515 cap, Bengals), Great American Ball Park (42,319 cap, Reds — oldest professional baseball team in the US, founded 1882), TQL Stadium (26,000 cap, FC Cincinnati MLS)
- Oktoberfest Zinzinnati (500K+ attendees — largest Oktoberfest outside Munich), Taste of Cincinnati (500K+ — Memorial Day, one of Midwest's largest food festivals), Cincinnati Music Festival (180K+ at Paycor Stadium — one of largest African-American cultural music events in US), BLINK Cincinnati (1.5M+ visitors, major light installation festival every 2 years)
- Over-the-Rhine (OTR) — largest intact urban Italianate architecture district in US, Cincinnati's premier entertainment/dining neighborhood; Findlay Market (Ohio's oldest continuously operating public market, founded 1855, 12K+ Saturday shoppers); Rhinegeist Brewery (100K sq ft 1895 converted bottling house)
- Hilton Cincinnati Netherland Plaza (1931 Art Deco National Historic Landmark, French Baroque Grand Ballroom), 21c Museum Hotel, Hyatt Regency Cincinnati (486 rooms, skywalk to DECC), Marriott Downtown at The Phelps, AC Hotel Cincinnati
- Northern KY coverage: Northern Kentucky Convention Center (Covington KY), Newport on the Levee, BB&T Arena at NKU; Boone, Kenton, Campbell counties

Shipped (commit e935ead) — new file server/city-content/cincinnati.ts:
- cincinnati-brand-ambassadors: P&G/Kroger/Fifth Third Fortune 500 consumer goods framing; Great American Ball Park/Paycor Stadium/TQL Stadium/Duke Energy Convention Center/Findlay Market venues; Oktoberfest Zinzinnati (500K+)/Taste of Cincinnati (500K+)/Cincinnati Music Festival (180K+) events; Over-the-Rhine neighborhood depth; Ohio DLLCR alcohol sampling compliance; bilingual Spanish-English callout; $22-40/hr pricing; 6 FAQs; 15 areasServed (incl. Northern KY cross-state coverage)
- cincinnati-experiential-marketing: P&G consumer goods test market framing (Cincinnati as America's most-used consumer research test market); OTR/Findlay Market urban activation strategy; Oktoberfest Zinzinnati + BLINK Cincinnati + Taste of Cincinnati festival activation guide; Mayor's Office Special Events + Hamilton County + Cincinnati Parks Board permitting breakdown; 4 FAQs
- cincinnati-event-management: DECC (200K sq ft, 35 meeting rooms, Grand Ballroom) + Paycor Stadium + GABP + TQL Stadium venue framing; P&G/Kroger NSM market; Cincinnati Children's/UC Health/TriHealth/Mercy Health pharma-aware staffing; FDA Sunshine Act compliance callout; Northern KY Convention Center coverage; $22-48/hr pricing; 4 FAQs
- cincinnati-convention-staffing: DECC Hall A-C + Grand Ballroom specialist framing; consumer goods (P&G/Kroger) + healthcare (Cincinnati Children's/UC Health) + financial services (Fifth Third/Western & Southern) triple-industry specialty; Hilton Netherland Plaza/Hyatt Regency/21c Museum Hotel luxury hotel circuit; bilingual + tech sector growth section; $25-48/hr pricing; 5 FAQs
- cincinnati-promotional-models: Fortune 500 background-matched approach (CPG/consumer science for P&G, retail/food for Kroger, finance/accounting for Fifth Third/Western & Southern, healthcare for Cincinnati Children's/UC Health); Hilton Netherland Plaza/21c/Hyatt Regency luxury hotel network; Oktoberfest/Music Festival/sports venue specialists; Ohio DLLCR alcohol sampling staff; $28-65/hr pricing; 4 FAQs

Checks:
- npm run check passed (TypeScript clean)
- npm run build passed (6305 static pages, 0 errors)
- Committed e935ead, pushed to origin/main
- Live HTTP 200 confirmed on /city-services/cincinnati-brand-ambassadors and /city-services/cincinnati-convention-staffing; FAQPage JSON-LD confirmed (2 matches in built artifact); enriched SSG propagating (15-25 min Vercel SSG deploy)

Status after this run:
- 25 cities now have enriched city-service content (125 enriched pages total)
- 133 cities remain on thin fallback templates

Next actions:
- Priority #5 continued: Add enriched content for Pittsburgh, Indianapolis, New Orleans, Kansas City
- Priority #6: Case study internal links — ensure all case study pages link back to relevant service pages

## 2026-06-01 MDT (Run 22)

Goal: City page depth — add enriched content for St. Louis MO (Priority #5 continued).

Audit:
- 24th city enriched; selected St. Louis as highest-leverage unenriched Midwest market (next on list after Baltimore)
- St. Louis: 2.8M metro, Anheuser-Busch North American HQ (world's largest brewer, founded 1852 in Soulard), Centene Fortune 500 (70K+ employees, Clayton HQ), Edward Jones global HQ (Maryland Heights, 19K+ branch offices, 10K+ advisor conference), Emerson Electric global HQ (Ferguson), Boeing major defense campus, BJC Healthcare Missouri's largest employer (36K+ employees), Washington University in St. Louis (top-15 medical school)
- America's Center Convention Complex (502K sq ft exhibit space, Halls A–E, 70K-seat Dome at America's Center), Busch Stadium (45,494 cap, Cardinals — 11× World Series), Enterprise Center (19,150 cap, Blues — 2019 Stanley Cup), CityPark (22,500 cap, St. Louis City SC — new MLS 2023), Chaifetz Arena (11K cap, SLU)
- Mardi Gras in Soulard (100K+ attendees — one of nation's largest Mardi Gras outside New Orleans), Fair Saint Louis (150K+/day on Arch grounds), Gateway Arch National Park (4M+ visitors/yr), Forest Park (1,371 acres — larger than Central Park, 5 free world-class institutions)
- Ritz-Carlton Clayton, Four Seasons Hotel St. Louis (riverfront, Arch-adjacent), Hyatt Regency at The Arch (910 rooms), Marriott St. Louis Grand (1,667 rooms, connected to America's Center), St. Louis Union Station Hotel (1894 National Historic Landmark Grand Hall)
- Bosnian-American community (Bevo Mill — largest Bosnian population outside Europe), growing Latino community

Shipped (commit 2eacb02) — new file server/city-content/st-louis.ts:
- st-louis-brand-ambassadors: Anheuser-Busch/beverage capital + Centene/BJC healthcare + Edward Jones/Emerson/Boeing Fortune 500 framing; Busch Stadium/Enterprise Center/CityPark/Chaifetz Arena/America's Center/Gateway Arch/Soulard/Forest Park venues; Mardi Gras Soulard (100K+)/Fair Saint Louis (150K+/day)/Cardinals/Blues/City SC events; Bosnian-English + Spanish-English bilingual callouts; Missouri ATC alcohol sampling compliance; $22-40/hr pricing; 6 FAQs; 15 areasServed
- st-louis-experiential-marketing: Gateway Arch NPS activation permit guidance (30-day NPS window); Soulard Mardi Gras activation strategy; Forest Park 5-institution free venue activation; Ballpark Village Cardinals-season opportunity; Cortex Innovation District tech B2B framing; City of St. Louis Special Events Permit + NPS + St. Louis County Parks permitting breakdown; 4 FAQs
- st-louis-event-management: America's Center (502K sq ft + 70K Dome) Teamster labor jurisdiction explanation; Edward Jones Advisor Conference (10K+ advisors) framing; Centene/Boeing/BJC NSM market; BJC/WashU FDA-compliant pharma NSM staffing; Busch Stadium 81+ home games + Enterprise Center 41+ Blues games + CityPark MLS; $22-48/hr pricing; 4 FAQs
- st-louis-convention-staffing: America's Center Halls A–E + Dome specialist; Teamster jurisdiction guidance; Edward Jones financial services convention specialty; BJC/WashU healthcare-background-matched staff; Boeing/Scott AFB defense industry awareness; Marriott St. Louis Grand / Westin / Hyatt Regency Arch / Ritz-Carlton Clayton hotel circuit; $25-48/hr pricing; 5 FAQs
- st-louis-promotional-models: background-matched (healthcare for BJC/WashU, financial for Edward Jones, beverage for Anheuser-Busch, defense for Boeing); Ritz-Carlton Clayton/Four Seasons/Hyatt Regency Arch/Union Station Grand Hall luxury hotel network; Cardinals Ballpark Village + Blues Enterprise Center + Mardi Gras Soulard sports/festival specialists; Missouri ATC-compliant alcohol sampling staff; $28-65/hr pricing; 4 FAQs

Checks:
- npm run check passed (TypeScript clean)
- npm run build passed (6305 static pages, 0 errors)
- Local build verified: st-louis-brand-ambassadors.html — Soulard 32×, Mardi Gras 24×, Busch Stadium 24×, America's Center 28×, Anheuser-Busch 14×; FAQPage JSON-LD confirmed (2 matches) ✓
- Committed 2eacb02, pushed to origin/main
- Live HTTP 200 confirmed on /city-services/st-louis-brand-ambassadors and /city-services/st-louis-convention-staffing ✓

Status after this run:
- 24 cities now have enriched city-service content (120 enriched pages total)
- 134 cities remain on thin fallback templates

Next actions:
- Priority #5 continued: Add enriched content for Cincinnati, Pittsburgh, Indianapolis, New Orleans
- Priority #6: Case study internal links — ensure all case study pages link back to relevant service pages

## 2026-06-01 MDT (Run 21)

Goal: City page depth — add enriched content for Baltimore MD (Priority #5 continued).

Audit:
- 23rd city enriched; selected Baltimore as highest-leverage unenriched Mid-Atlantic/East Coast market
- Baltimore: 2.9M metro, Johns Hopkins (world's top-ranked hospital + 42K employees), NSA/CISA/US Cyber Command HQ at Fort Meade (Leidos/SAIC/Northrop Grumman defense corridor), Baltimore Convention Center (300K+ sq ft, Halls A-B-C), M&T Bank Stadium (71,008 cap, Ravens — 2× Super Bowl champs), Camden Yards (45,971 cap, Orioles — "most beautiful ballpark in MLB"), Pimlico Race Course (Preakness Stakes 130K+ attendees), Artscape (350,000+ attendees — largest FREE arts festival in the United States), Under Armour global HQ (Port Covington, 235-acre waterfront development), T. Rowe Price global HQ, McCormick & Company global HQ (Hunt Valley), NIH 20mi away, FDA 30mi away
- Baltimore had 9 city-service page combinations; enriched 5 highest-value services

Shipped (commit 9734db1) — new file server/city-content/baltimore.ts:
- baltimore-brand-ambassadors: Johns Hopkins/healthcare capital + NSA/Fort Meade/defense corridor dual-identity framing; M&T Bank Stadium/Camden Yards/Pimlico/CFG Bank Arena/Maryland State Fairgrounds venues; Preakness Stakes/Artscape (350K+)/Maryland State Fair/Otakon/Ravens/Orioles events; bilingual Spanish-English callout; Under Armour brand market framing; $22-42/hr pricing; 6 FAQs; 15 areasServed
- baltimore-experiential-marketing: Inner Harbor (14M visitors/yr) + Fells Point/Federal Hill/Canton activation zones; Artscape 350K+ + Preakness 130K+ dual-anchor events; Johns Hopkins/Under Armour Port Covington/Fort Meade B2B framing; Baltimore City DOT/Special Events Office/Maryland Stadium Authority permitting breakdown; 4 FAQs
- baltimore-event-staffing: BCC (300K+ sq ft, Halls A/B/C) specialist; M&T Bank Stadium/Camden Yards Eutaw Street/Pimlico sports staffing; pharma NSM market with FDA/Sunshine Act compliance (Johns Hopkins/MedStar/LifeBridge); IBEW union coordination context; $22-48/hr pricing; 4 FAQs
- baltimore-convention-staffing: BCC Hall A/B/C specialist; healthcare/pharma vertical (Johns Hopkins + NIH 20mi + FDA 30mi = highest US clinician density); government/defense (NSA/CISA/Fort Meade, Leidos/SAIC/Booz Allen); financial services (T. Rowe Price/Brown Advisory/Franklin Templeton); $25-48/hr pricing; 5 FAQs
- baltimore-promotional-models: background-matched (healthcare/clinical for pharma NSMs, athletic for Under Armour, financial for T. Rowe Price); Preakness Stakes Black-Eyed Susan infield + grandstand VIP specialists; Four Seasons Baltimore/Sagamore Pendry/Kimpton Monaco luxury hotel network; $28-65/hr pricing; 4 FAQs

Checks:
- npm run check passed (TypeScript clean)
- npm run build passed (6305 static pages, 0 errors)
- Committed 9734db1, pushed to origin/main
- Live HTTP 200 confirmed on /city-services/baltimore-brand-ambassadors and /city-services/baltimore-convention-staffing; FAQPage JSON-LD confirmed (2 matches) ✓; enriched SSG propagating (15-25 min Vercel SSG deploy)

Status after this run:
- 23 cities now have enriched city-service content (115 enriched pages total)
- 135 cities remain on thin fallback templates

Next actions:
- Priority #5 continued: Add enriched content for St. Louis, Cincinnati, Pittsburgh, Indianapolis
- Priority #6: Case study internal links — ensure all case study pages link back to relevant service pages

## 2026-06-01 MDT (Run 20)

Goal: City page depth — add enriched content for Tampa FL (Priority #5 continued).

Audit:
- 22nd city enriched; selected Tampa as highest-leverage unenriched Gulf Coast / Florida market
- Tampa: 3.2M metro, Super Bowl host city (Super Bowl XVIII, XXV, XXXV, LV 2021), Raymond James Stadium (65,890 cap, Buccaneers), Amalie Arena (19,092 cap, Lightning — 3× Stanley Cup), Tampa Convention Center (600K+ sq ft), Gasparilla Pirate Festival (300,000+ attendees — one of US's largest single-day public events), Florida State Fair (500,000+ over 12 days), Seminole Hard Rock Hotel & Casino Tampa, Citigroup Tampa campus (one of its largest US operations), Raymond James Financial global HQ (St. Pete), Jabil Fortune 500 global HQ, Moffitt Cancer Center (NCI Comprehensive Cancer Center), MacDill AFB (CENTCOM + SOCOM), Ybor City National Historic Landmark District (birthplace of American cigar industry)
- Tampa had 9 city-service page combinations; enriched 5 highest-value services

Shipped (commit f9118b6) — new file server/city-content/tampa.ts:
- tampa-brand-ambassadors: Super Bowl LV legacy + Gasparilla (300K+ attendees) dual-identity framing; Raymond James Stadium/Amalie Arena/Tampa Convention Center/Florida State Fairgrounds/Seminole Hard Rock/Bayshore Boulevard venues; Gasparilla/Florida State Fair/Outback Bowl/Lightning/Buccaneers events; bilingual Spanish-English callout (Cuban-American/Puerto Rican heritage, Ybor City roots); Latin heritage narrative; MacDill AFB employer market; $22-40/hr pricing; 6 FAQs; 15 areasServed
- tampa-experiential-marketing: Water Street Tampa ($3B development) + Ybor City National Historic Landmark + Armature Works activation zones; 300 sunny days outdoor advantage; Florida State Fair 500K+ attendees; City of Tampa Special Events Office/Hillsborough County Parks/Ybor City Development Corporation/FL ABT permitting breakdown; Super Bowl activation infrastructure legacy; 4 FAQs
- tampa-event-staffing: Tampa Convention Center (600K+ sq ft, waterfront); Buccaneers/Lightning/Rays triple pro sports complex; Gasparilla 300K+ + Florida State Fair 500K+ festival staffing; Moffitt Cancer Center/BayCare/Tampa General healthcare conventions; MacDill AFB (CENTCOM/SOCOM) industry days; Seminole Hard Rock corporate meetings; $22-48/hr pricing; 4 FAQs
- tampa-convention-staffing: TCC specialist (200K sq ft Exhibit Hall + Grand Ballroom); healthcare vertical (Moffitt/BayCare/Tampa General/AdventHealth), technology vertical (Jabil/ReliaQuest/TD SYNNEX/WillowTree), financial services vertical (Raymond James/Citigroup/USAA); Seminole Hard Rock pharma national sales meetings; Gulf Coast hotel circuit (JW Marriott Water Street/Grand Hyatt/Westin Waterside); $25-48/hr; 5 FAQs
- tampa-promotional-models: background-matched approach (healthcare, financial services, automotive/motorsports, defense); JW Marriott Water Street/Grand Hyatt/Tampa EDITION/Seminole Hard Rock luxury hotel network; Gasparilla Festival + Raymond James Stadium game-day specialists; SPARKMAN WHARF outdoor venue; $28-65/hr; 4 FAQs

Checks:
- npm run check passed (TypeScript clean)
- npm run build passed (6305 static pages, 0 errors)
- Local build verified: tampa-brand-ambassadors.html — Gasparilla 66×, Tampa Convention Center 14×, Raymond James Stadium 14×, Amalie Arena 12× in HTML ✓; FAQPage JSON-LD confirmed (2 matches) ✓
- Committed f9118b6, pushed to origin/main
- Live HTTP 200 confirmed on /city-services/tampa-brand-ambassadors and /city-services/tampa-convention-staffing; enriched SSG propagating (15-25 min Vercel SSG deploy)

Status after this run:
- 22 cities now have enriched city-service content (110 enriched pages total)
- 136 cities remain on thin fallback templates

Next actions:
- Priority #5 continued: Add enriched content for Baltimore, St. Louis, Cincinnati, Pittsburgh
- Priority #6: Case study internal links — ensure all case study pages link back to relevant service pages

## 2026-06-01 MDT (Run 19)

Goal: City page depth — add enriched content for Charlotte NC (Priority #5 continued).

Audit:
- 21st city enriched; selected Charlotte as highest-leverage unenriched Southeast market
- Charlotte: 2.7M metro, NASCAR capital of the world (Charlotte Motor Speedway, 90%+ of Cup teams within 50mi, NASCAR Hall of Fame), second-largest US banking center (Bank of America global HQ, Wells Fargo major campus, Truist, Duke Energy HQ, LPL Financial), Charlotte Convention Center (550K sq ft, 200+ events/yr), Bank of America Stadium (74,867 cap, Carolina Panthers), Spectrum Center (19,077 cap, Charlotte Hornets), LPL Financial Focus Conference (7,000+ advisors — Charlotte's largest annual convention), Atrium Health (Top 10 US healthcare system, Charlotte HQ)
- Charlotte had 9 city-service page combinations; enriched 5 highest-value services

Shipped (commit 6f67bcc) — new file server/city-content/charlotte.ts:
- charlotte-brand-ambassadors: NASCAR capital framing; Charlotte Motor Speedway/Bank of America Stadium/Spectrum Center/Charlotte Convention Center/NASCAR Hall of Fame venues; Coca-Cola 600/NASCAR Induction/Charlotte SHOUT!/Panthers/Hornets events; bilingual Spanish-English callout (fast-growing SE Latino community); $22-40/hr pricing; 6 FAQs; 15 areasServed (incl. Rock Hill SC / Fort Mill SC cross-state)
- charlotte-experiential-marketing: NASCAR + banking dual-identity framing; South End/NoDa/Plaza Midwood/Uptown activation zones; Charlotte Center City Partners/CDOT/NoDa Business Association permitting; Fortune 500 B2B experiential for BoA/Wells Fargo/Duke Energy/Truist; 4 FAQs
- charlotte-event-management: Charlotte Convention Center (550K sq ft, 200+ events/yr); Bank of America Stadium/Spectrum Center sports venue complex; financial services corporate event market (BoA, Wells Fargo, Truist, LPL Financial); Atrium Health/Novant Health healthcare conference staffing with HIPAA awareness; NASCAR Hall of Fame + Charlotte Motor Speedway race weekend event staffing; 4 FAQs
- charlotte-convention-staffing: CCC Hall A-E specialist framing; LPL Financial Focus Conference (7,000+ advisors — flagship Charlotte convention); financial services/healthcare/tech triple-industry specialty; NASCAR Hall of Fame event staffing; bilingual Spanish + Portuguese callout; $25-48/hr pricing; 5 FAQs
- charlotte-promotional-models: NASCAR motorsports activation specialists (Coca-Cola 600 fan zones, sponsor suites); financial services event models (BoA/Wells Fargo compliance-aware presentations); luxury hotel network (JW Marriott Charlotte, Westin, Omni, Kimpton Tryon Park); $28-65/hr pricing; 4 FAQs

Checks:
- npm run check passed (TypeScript clean)
- npm run build passed (6305 static pages, 0 errors)
- Local build verified: charlotte-brand-ambassadors.html title="Brand Ambassadors Charlotte | Professional Staffing | AirFresh Marketing" ✓; NASCAR/BoA/Wells Fargo/Charlotte Motor Speedway/Charlotte Convention Center 142× in brand-ambassadors page ✓; FAQPage JSON-LD confirmed ✓
- Committed 6f67bcc, pushed to origin/main
- Live HTTP 200 confirmed on /city-services/charlotte-brand-ambassadors and /city-services/charlotte-convention-staffing; enriched SSG propagating (15-25 min Vercel SSG deploy)

Status after this run:
- 21 cities now have enriched city-service content (105 enriched pages total)
- 137 cities remain on thin fallback templates

Next actions:
- Priority #5 continued: Add enriched content for Tampa, Baltimore, St. Louis, Cincinnati
- Priority #6: Case study internal links — ensure all case study pages link back to relevant service pages

## 2026-06-01 MDT (Run 18)

Goal: City page depth — add enriched content for Minneapolis (Priority #5 continued).

Audit:
- 20th city enriched; selected Minneapolis as highest-leverage unenriched Upper Midwest market
- Minneapolis: 3.7M metro, global HQ of Target, Best Buy, General Mills, 3M, Land O'Lakes, Cargill, Ameriprise Financial, U.S. Bancorp — 18 Fortune 500 companies; Minneapolis Convention Center (475K sq ft, 200+ events/yr); US Bank Stadium (Super Bowl LII 2018, NCAA Final Four 2019); Target Field, Target Center; Minnesota State Fair (2M+ attendees — largest by total attendance in the US); Medtronic/Boston Scientific — world's medtech capital; Mall of America (40M+ visitors/yr)
- Minneapolis had 9 city-service page combinations; enriched 5 highest-value services

Shipped (commit de0ff0d) — new file server/city-content/minneapolis.ts:
- minneapolis-brand-ambassadors: Fortune 500 consumer goods capital framing; US Bank Stadium/Target Field/Target Center/Minneapolis Convention Center/Minnesota State Fairgrounds venues; Minnesota State Fair (2M+ attendees)/Soundset/Basilica Block Party/Twin Cities Marathon events; bilingual Somali/Hmong/Spanish callout (unique Minnesota linguistic diversity); $22-40/hr pricing; 6 FAQs; 15 areasServed
- minneapolis-experiential-marketing: Fortune 500 HQ cluster dual B2B/B2C framing (Target/Best Buy/General Mills/3M corporate event + consumer reach); Chain of Lakes outdoor activation strategy; North Loop premium pop-up zone; State Fair as nation's most cost-effective consumer sampling event; MPRB/City of Minneapolis Special Events/Nicollet Mall BID permitting guidance; 4 FAQs
- minneapolis-event-management: MCC 475K sq ft/200+ events/yr; medical device industry convention framing (world's medtech capital — Medtronic/Boston Scientific/St. Jude/Abbott/500+ medtech companies); US Bank Stadium/Target Field/Target Center/Xcel Energy Center sports venue complex; Fortune 500 corporate event market; FDA-aware healthcare event staffing; 4 FAQs
- minneapolis-convention-staffing: MCC Halls A-G specialist framing; medical device convention expertise (Medtronic/Boston Scientific/Abbott — physician/procurement buyer audiences); Radisson Blu MOA/Mystic Lake Casino/Hilton Minneapolis/Hyatt Regency hotel circuit; retail industry conventions (Target/Best Buy HQ market advantage); $25-48/hr pricing; 5 FAQs
- minneapolis-promotional-models: background-matched talent for medical device/retail/financial services; Loews Minneapolis/W Minneapolis Foshay/Hotel Ivy luxury venue network; US Bank Stadium hospitality suite staffing; State Fair consumer activation talent; $28-65/hr pricing; 4 FAQs

Checks:
- npm run check passed (TypeScript clean)
- npm run build passed (6305 static pages, 0 errors)
- Local build verified: minneapolis-brand-ambassadors.html title="Brand Ambassadors Minneapolis | Professional Staffing | AirFresh Marketing" ✓; Minnesota State Fair 38×, Minneapolis Convention Center 22×, Medtronic 6× in convention page ✓; FAQPage JSON-LD confirmed
- Committed de0ff0d, pushed to origin/main
- Live HTTP 200 confirmed on /city-services/minneapolis-brand-ambassadors and /city-services/minneapolis-convention-staffing; enriched SSG propagating (15-25 min Vercel SSG deploy)

Status after this run:
- 20 cities now have enriched city-service content (100 enriched pages total)
- 138 cities remain on thin fallback templates

Next actions:
- Priority #5 continued: Add enriched content for Charlotte, Tampa, Baltimore, St. Louis
- Priority #6: Case study internal links — ensure all case study pages link back to relevant service pages

## 2026-06-01 MDT (Run 17)

Goal: City page depth — add enriched content for Detroit (Priority #5 continued).

Audit:
- 19th city enriched; selected Detroit as highest-leverage unenriched Midwest/Great Lakes market
- Detroit: 4.4M metro, global HQ of Ford Motor Company (Dearborn), General Motors (Renaissance Center), Stellantis (Auburn Hills); North American International Auto Show (NAIAS) at Huntington Place (723K sq ft — largest convention center in Michigan) draws 800K+ attendees; Movement Electronic Music Festival (100K+ at Hart Plaza — world's largest electronic music event); Detroit Jazz Festival (300K+ — world's largest FREE jazz festival); Eastern Market (largest historic public market in US — 80K Flower Day, 20K weekly Saturday Market)
- Detroit had 9 city-service page combinations; enriched 5 highest-value services

Shipped (commit 52d4e97) — new file server/city-content/detroit.ts:
- detroit-brand-ambassadors: Motor City authenticity framing; NAIAS/Huntington Place/Ford Field/Little Caesars Arena/Comerica Park/Hart Plaza/Eastern Market/GM RenCen venues; NAIAS/Movement/Detroit Jazz Festival/Flower Day/Woodward Dream Cruise events; Arab-American (Dearborn) bilingual callout; $22-40/hr pricing; 6 FAQs; 15 areasServed
- detroit-experiential-marketing: Automotive capital authenticity framing (working-class directness, substance over flash); Hart Plaza/Michigan Central Station (Ford campus)/GM RenCen/Eastern Market/Belle Isle activation zones; Big Three Fortune 500 B2B experiential framing; Detroit tech resurgence (Microsoft/Amazon/Google/Bedrock); permitting via Mayor's Office of Special Events; 4 FAQs
- detroit-event-management: NAIAS vehicle reveal staffing (globally televised = highest professionalism standard); Ford/GM/Stellantis Fortune 500 corporate event market; Henry Ford Health/DMC/Beaumont healthcare conference staffing; Huntington Place 723K sq ft + Ford Field/Little Caesars Arena/Comerica Park sports complex; 4 FAQs
- detroit-convention-staffing: Huntington Place specialist framing (NAIAS + SAE World Congress automotive engineering + healthcare); automotive product specialist roster (engineering/automotive sales backgrounds); Suburban Collection Showplace + Rock Financial Showplace (Novi) suburban market coverage; $25-48/hr pricing; 5 FAQs
- detroit-promotional-models: NAIAS automotive show model standards (globally-televised manufacturer reveal requirements); Ford/GM/Stellantis executive corporate host/hostess; Shinola Hotel/Siren Hotel/Detroit Foundation Hotel luxury venue network; Concours d'Elegance of America luxury automotive event; $28-65/hr pricing; 4 FAQs

Checks:
- npm run check passed (TypeScript clean)
- npm run build passed (6305 static pages, 0 errors)
- Local build verified: detroit-brand-ambassadors.html title="Brand Ambassadors Detroit | Professional Staffing | AirFresh Marketing" ✓; Huntington Place 36×, NAIAS 26×, Eastern Market 22×, Movement Electronic 14× in HTML ✓; FAQPage JSON-LD confirmed
- Committed 52d4e97, pushed to origin/main
- Live HTTP 200 confirmed on /city-services/detroit-brand-ambassadors and /city-services/detroit-convention-staffing; enriched SSG propagating (15-25 min Vercel SSG deploy)

Status after this run:
- 19 cities now have enriched city-service content (95 enriched pages total)
- 139 cities remain on thin fallback templates

Next actions:
- Priority #5 continued: Add enriched content for Minneapolis, Charlotte, Tampa, Baltimore
- Priority #6: Case study internal links — ensure all case study pages link back to relevant service pages

## 2026-06-01 MDT (Run 16)

Goal: City page depth — add enriched content for Portland (Priority #5 continued).

Audit:
- 18th city enriched; selected Portland as highest-leverage unenriched Pacific Northwest market
- Portland: 2.5M metro, global HQ of Nike, North American HQ of Adidas, Columbia Sportswear, Intel (Hillsboro), Oregon Convention Center (255K sq ft, 600K+ attendees/yr), Portland Rose Festival (1M+ visitors), Oregon Brewers Festival (80K+ attendees), Portland Saturday Market (largest continually-operating open-air market in the US)
- Portland had 9 city-service page combinations; enriched 5 highest-value services

Shipped (commit 71f9b6f) — new file server/city-content/portland.ts:
- portland-brand-ambassadors: Pearl District, Alberta Arts District, Mississippi Avenue, Division Street, Hawthorne neighborhoods; Oregon Convention Center, Moda Center, Providence Park, Tom McCall Waterfront Park, Portland Saturday Market venues; Rose Festival, Oregon Brewers Festival, Waterfront Blues Fest, Feast Portland events; Nike/Adidas corporate market framing; bilingual Spanish+Vietnamese callout; sustainability-forward brand values; $22-$40/hr pricing; 6 FAQs; 14 areasServed
- portland-experiential-marketing: authenticity/sustainability framing for America's most eco-conscious consumer market; Tom McCall Waterfront Park, Pioneer Courthouse Square, Pearl District pop-up strategy; Rose Festival full activation approach; Portland Parks & Recreation + PBOT + Pioneer Sq permitting breakdown; zero-waste activation design section; 4 FAQs
- portland-event-staffing: OCC 255K sq ft + 600K attendees/yr; Moda Center + Providence Park sports event staffing; Nike/Adidas/Columbia Sportswear/Intel corporate event market; Trail Blazers/Timbers/Thorns (NWSL) activations; Portland Expo Center 330K sq ft; 4 FAQs
- portland-convention-staffing: OCC Exhibit Halls A-D + Columbia Ballroom specialist framing; outdoor/athletic industry specialty (Nike HQ, Adidas HQ, Columbia HQ — only market globally with this density); Portland Expo Center North Portland; bilingual + sustainability callouts; $25-$48/hr pricing; 5 FAQs
- portland-promotional-models: outdoor lifestyle authenticity framing (fit/credible over conventional promotional); Nike/Adidas launch event specialists; outdoor gear demo model roster with technical product knowledge; OMSI + Portland Art Museum + Ecotrust Building luxury venue network; $28-$65/hr pricing; 4 FAQs

Checks:
- npm run check passed (TypeScript clean)
- npm run build passed (6305 static pages, 0 errors)
- Local build verified: portland-brand-ambassadors.html title="Brand Ambassadors Portland | Professional Staffing | AirFresh Marketing" ✓; Rose Festival 36×, Oregon Convention Center 22×, Pearl District 20× in HTML ✓; FAQPage JSON-LD confirmed
- Committed 71f9b6f, pushed to origin/main
- Live HTTP 200 confirmed on /city-services/portland-brand-ambassadors and /city-services/portland-convention-staffing; enriched SSG propagating (15-25 min Vercel SSG deploy)

Status after this run:
- 18 cities now have enriched city-service content (90 enriched pages total)
- 140 cities remain on thin fallback templates

Next actions:
- Priority #5 continued: Add enriched content for Detroit, Minneapolis, Charlotte, Tampa
- Priority #6: Case study internal links — ensure all case study pages link back to relevant service pages

## 2026-05-31 MDT (Run 15)

Goal: City page depth — add enriched content for San Diego (Priority #5 continued).

Audit:
- 17th city enriched; selected San Diego as highest-leverage unenriched Southern California market
- San Diego: 3.3M metro, home of Comic-Con International (130K+ badge holders, ~200K total attendees — world's premier pop culture convention), nation's second-largest biotech cluster (Pfizer, Illumina, Dexcom, Janssen, 900+ life sciences companies), largest US military installation complex (Naval Base San Diego, Camp Pendleton, MCAS Miramar), 35M annual visitors
- SDCC (615K+ sq ft) = 5th-largest convention city in the US; Del Mar Fairgrounds (1M+ visitors/year); Petco Park; Pechanga Arena
- San Diego had 9 city-service page combinations; enriched 5 highest-value services

Shipped (commit a29eae2) — new file server/city-content/san-diego.ts:
- san-diego-brand-ambassadors: Gaslamp Quarter, Little Italy, Pacific Beach, La Jolla, Barrio Logan neighborhoods; SDCC, Petco Park, Del Mar Fairgrounds, Pechanga Arena venues; Comic-Con, County Fair, San Diego Pride, KAABOO events; military/biotech dual-market callout; bilingual Spanish-English and Japanese-English callout; $22-$40/hr pricing; 6 FAQs; 16 areasServed
- san-diego-experiential-marketing: Comic-Con week pop-up/hotel takeover strategy; Del Mar Fairgrounds (1M+ visitors), Pacific Beach boardwalk, Liberty Station, Balboa Park; City of San Diego Special Events Office permitting; year-round climate advantage (266 sunny days); 4 FAQs
- san-diego-event-staffing: SDCC 615K sq ft; Comic-Con Hall H queue management; Naval Base SD + Camp Pendleton + MCAS Miramar military event market; Pfizer/Illumina/Dexcom/Janssen biotech corporate events; Qualcomm/Sony Electronics tech sector; 4 FAQs
- san-diego-convention-staffing: Hall A-H expert framing; Comic-Con/TwitchCon pop culture specialist; BIO International + pharmaceutical national sales meetings; Hotel del Coronado + Manchester Grand Hyatt + Marriott Marquis hotel convention coverage; bilingual staff; 5 FAQs
- san-diego-promotional-models: background-matched (automotive, pharma, pop culture, luxury); Hotel del Coronado + Fairmont Grand Del Mar + Lodge at Torrey Pines luxury hotel network; Comic-Con promotional model specialists; SDCC International Boat Show marine product specialists; $28-$65/hr pricing; 4 FAQs

Checks:
- npm run check passed (TypeScript clean)
- npm run build passed (6305 static pages, 0 errors)
- Local build verified: san-diego-brand-ambassadors.html title="Brand Ambassadors San Diego | Professional Staffing | AirFresh Marketing" ✓; Comic-Con content in FAQ JSON-LD ✓; Del Mar Fairgrounds in areasServed ✓
- Committed a29eae2, pushed to origin/main
- Live HTTP 200 confirmed on /city-services/san-diego-brand-ambassadors and /city-services/san-diego-convention-staffing

Status after this run:
- 17 cities now have enriched city-service content (85 enriched pages total)
- 141 cities remain on thin fallback templates

Next actions:
- Priority #5 continued: Add enriched content for Portland, Detroit, Minneapolis, Charlotte, Tampa
- Priority #6: Case study internal links — ensure all case study pages link back to relevant service pages

## 2026-05-31 MDT (Run 14)

Goal: City page depth — add enriched content for Philadelphia (Priority #5 continued).

Audit:
- 16th city enriched; selected Philadelphia as highest-leverage unenriched Northeast market
- Philadelphia: 6.2M metro, Fortune 500 HQ (Comcast, Independence Blue Cross, Aramark, Urban Outfitters), Pennsylvania Convention Center (679K sq ft — one of the largest in the Northeast), world's oldest/largest indoor flower show, Made in America Festival (600K+ attendees), South Philly Sports Complex (Lincoln Financial Field + Citizens Bank Park + Wells Fargo Center adjacent)
- Philadelphia had 9 city-service page combinations; enriched 5 highest-value services

Shipped (commit 380a4f5) — new file server/city-content/philadelphia.ts:
- philadelphia-brand-ambassadors: Rittenhouse Square, Fishtown, Northern Liberties, University City, South Philly neighborhoods; PCC, Lincoln Financial, Citizens Bank Park, Reading Terminal Market venues; Made in America, Philly Flower Show, Penn Relays, Odunde events; $22-$42/hr pricing; 6 FAQs including healthcare/pharma callout; 12 areasServed
- philadelphia-experiential-marketing: City of Brotherly Love authenticity framing; Benjamin Franklin Parkway (Made in America, Wawa Welcome America 1M+ attendees), Penn's Landing waterfront, Xfinity Live! sports complex; permitting via Mayor's Office of Special Events + Streets Department; Comcast/Penn Medicine corporate market; 4 FAQs
- philadelphia-event-staffing: Pennsylvania Convention Center (679K sq ft, 300+ events/yr); South Philly Sports Complex triple-venue campus (Lincoln Financial + Citizens Bank Park + Wells Fargo); Fortune 500 corporate market (Comcast, IBC, Aramark); healthcare conference market (Penn Medicine, Jefferson, CHOP); 4 FAQs
- philadelphia-convention-staffing: PCC specialist framing (Hall A-F, Broad Street Atrium, union jurisdiction knowledge); Philadelphia Auto Show (200K+ attendees), Philadelphia Flower Show (250K+) anchors; healthcare/life sciences convention specialization (Penn Medicine, Jefferson, CHOP, University City Science Center); 5 FAQs
- philadelphia-promotional-models: Background-matched model approach (healthcare, financial services, tech, automotive); PCC Auto Show specialists; luxury hotel network (Four Seasons at Comcast Center, Ritz-Carlton, Loews, Kimmel Center); $28-$65/hr pricing; 4 FAQs

Checks:
- npm run check passed (TypeScript clean)
- npm run build passed (0 errors)
- Committed 380a4f5, pushed to origin/main
- Live HTTP 200 confirmed on /city-services/philadelphia-brand-ambassadors and /city-services/philadelphia-convention-staffing

Status after this run:
- 16 cities now have enriched city-service content (80 enriched pages total)
- 142 cities remain on thin fallback templates

Next actions:
- Priority #5 continued: Add enriched content for San Diego, Portland, Detroit, Minneapolis, Charlotte
- Priority #6: Case study internal links — ensure all case study pages link back to relevant service pages

## 2026-05-31 MDT (Run 13)

Goal: City page depth — add enriched content for San Francisco (Priority #5 continued).

Audit:
- 15th city enriched; selected San Francisco as highest-leverage unenriched West Coast tech market
- SF: 4.7M Bay Area metro, world's technology capital (Salesforce, Twitter/X, Lyft, Airbnb, Dropbox, Stripe HQ), Moscone Center (700K+ sq ft), Dreamforce (170K+ attendees — world's largest software conference), RSA Conference, GDC, Outside Lands (220K attendees), SF Pride (1M+ spectators)
- SF had 9 city-service page combinations; enriched 5 highest-value services

Shipped (commit 1d96778) — new file server/city-content/san-francisco.ts:
- san-francisco-brand-ambassadors: SoMa, Union Square, Mission District, Castro, Haight-Ashbury neighborhoods; Moscone Center, Chase Center, Oracle Park, Golden Gate Park venues; Dreamforce, Outside Lands, SF Pride, RSA Conference events; $28-$55/hr pricing; 6 FAQs including tech-literacy callout; 12 areasServed
- san-francisco-experiential-marketing: Innovation capital framing; Dreamforce hotel takeovers, SoMa venue pop-ups, Salesforce Park activations; sustainability/zero-waste activation callout for SF's environmental culture; SF permitting guidance (SFMTA, SF Rec & Park, Port of SF); 4 FAQs
- san-francisco-event-staffing: Moscone 700K+ sq ft convention hub; Dreamforce/RSA/GDC corporate conference market; SF-headquartered company corporate event demand (Salesforce, Lyft, Airbnb, Dropbox, Stripe); Chase Center, Oracle Park consumer event coverage; 4 FAQs
- san-francisco-convention-staffing: Moscone North/South/West specialist framing; Dreamforce 170K attendees B2B tech convention focus; tech-literate ambassador callout for enterprise software events; UCSF/Genentech/South SF biotech corridor healthcare convention coverage; 5 FAQs
- san-francisco-promotional-models: Tech-literate model differentiator (enterprise SaaS/cloud backgrounds); Dreamforce hospitality suite staffing; Union Square luxury retail (Four Seasons, Fairmont, St. Regis, Ritz-Carlton); $30-$75/hr pricing; 4 FAQs

Checks:
- npm run check passed (TypeScript clean)
- npm run build passed (6305 static pages, 0 errors)
- Local build verified: san-francisco-brand-ambassadors.html title="Brand Ambassadors San Francisco | Professional Staffing | AirFresh Marketing" ✓; Dreamforce content in FAQ JSON-LD ✓
- Committed 1d96778, pushed to origin/main
- Live HTTP 200 confirmed on /city-services/san-francisco-brand-ambassadors and /city-services/san-francisco-convention-staffing; enriched SSG propagating (15-25 min Vercel SSG deploy)

Status after this run:
- 15 cities now have enriched city-service content (75 enriched pages total)
- 143 cities remain on thin fallback templates

Next actions:
- Priority #5 continued: Add enriched content for Philadelphia, San Diego, Portland, Detroit, Minneapolis
- Priority #6: Case study internal links — ensure all case study pages link back to relevant service pages

## 2026-05-31 MDT (Run 12)

Goal: City page depth — add enriched content for Boston (Priority #5 continued).

Audit:
- 14th city enriched; selected Boston as highest-leverage unenriched Northeast market
- Boston: 4.9M metro, world-class universities (Harvard/MIT/BU/Northeastern), biotech capital (Kendall Square), healthcare giants (Mass General Brigham, Dana-Farber), Financial corridor (Fidelity/State Street/Liberty Mutual)
- BCEC (516K sq ft) + Hynes Convention Center = two major convention facilities, hundreds of conventions annually
- Boston Marathon (500K+ spectators), Boston Calling, Head of the Charles Regatta, Natural Products Expo East, BIO International
- Boston had 9 city-service page combinations; enriched 5 highest-value services

Shipped (commit d23c331) — new file server/city-content/boston.ts:
- boston-brand-ambassadors: Back Bay, Seaport, Cambridge, Fenway-Kenmore, Harvard Square neighborhoods; BCEC, Hynes, Fenway Park, TD Garden, Faneuil Hall venues; Boston Marathon, Boston Calling, Head of the Charles events; $25-$45/hr pricing; 6 FAQs including biotech/pharma callout; 12 areasServed
- boston-experiential-marketing: Harvard/MIT/biotech ecosystem hook; Marathon weekend activation strategy; Seaport Innovation District, Rose Kennedy Greenway, Newbury Street activation zones; Head of the Charles (400K spectators); university campus marketing (35+ colleges); 4 FAQs
- boston-event-staffing: BCEC + Hynes convention market framing; Fidelity/State Street/Liberty Mutual corporate event demand; Longwood Medical Area healthcare conference staffing; FDA-compliant pharma staffing callout; Fenway/TD Garden consumer events; 4 FAQs
- boston-convention-staffing: BCEC 516K sq ft convention campus; Hynes Convention Center Back Bay; healthcare/life sciences convention specialization (Kendall Square = world's highest biotech density); Natural Products Expo East / BIO International coverage; 5 FAQs
- boston-promotional-models: Background-matching approach (life sciences for pharma events, tech-adjacent for software events); luxury hotel network (Fairmont Copley Plaza, Boston Harbor Hotel, InterContinental, Mandarin Oriental); $30-$65/hr pricing; 4 FAQs

Checks:
- npm run check passed (TypeScript clean)
- npm run build passed (6305 static pages, 0 errors)
- Local build verified: boston-brand-ambassadors.html contains Boston Marathon (28×), BCEC (24×), Kendall Square (14×), Fenway (12×), Head of the Charles (8×) ✓
- Committed d23c331, pushed to origin/main
- Live HTTP 200 confirmed on /city-services/boston-brand-ambassadors; enriched SSG propagating (15-25 min Vercel SSG deploy)

Status after this run:
- 14 cities now have enriched city-service content (70 enriched pages total)
- 144 cities remain on thin fallback templates

Next actions:
- Priority #5 continued: Add enriched content for San Francisco, Philadelphia, San Diego, Portland
- Priority #6: Case study internal links — ensure all case study pages link back to relevant service pages

## 2026-05-31 MDT (Run 11)

Goal: Add mid-body /get-quote CTA banner to all ~6,300 city-service pages — the largest page group and last page type missing a 3rd funnel touchpoint.

Audit: city-service pages (/city-services/[slug]) had only 2 quote CTAs (hero + final-cta). State (459), industry-city (608), venue (552), and events (1,024) pages already had the mid-body banner pattern. City-service pages were the last major group missing it.

Shipped (commit 3695c00):
- app/city-services/[slug]/page.tsx
- Inserted indigo CTA banner between Related Services and Case Studies sections
- Copy: "Ready to hire {service.name} in {cityName}? Tell us about your campaign and get a free quote within 24 hours."
- Links to /get-quote?source={slug}&intent=mid-body (trackable in GA/GSC)
- Adds 3rd quote touchpoint: hero + mid-body (new) + final-cta

Checks:
- npm run build passed (6305 static pages, 0 errors)
- Committed 3695c00, pushed to origin/main
- Deployed to Vercel production (8m build)
- Verified live: /city-services/denver-brand-ambassadors returns "intent=mid-body" + "Get a Free Quote" in page source ✓

Next actions:
- GSC opportunity pass: pages at position 4-15 with impressions 10-200, CTR < 2% (title/H1 rewrites)
- /get-quote form: audit UTM param persistence — do source/intent params survive into form submission?
- Above-fold case study proof section on top city-service pages (brand-ambassadors + top 5 cities)
- Enrich next city batch: Boston, San Francisco, Philadelphia, San Diego

## 2026-05-31 MDT (Run 10)

Goal: City page depth — add enriched content for Nashville (Priority #5 continued).

Audit:
- 13th city enriched; selected Nashville as highest-leverage unenriched Southern market
- Nashville: 1.9M+ metro, 16M annual visitors, Music City Center (2.1M sq ft convention center), CMA Fest 85K+ daily attendees, HCA Healthcare / Bridgestone / Nissan North America corporate market
- Nashville had 9 city-service page combinations; enriched 5 highest-value services

Shipped (commit f4cc10c) — new file server/city-content/nashville.ts:
- nashville-brand-ambassadors: Broadway, The Gulch, 12 South, Germantown, East Nashville neighborhoods; Music City Center, Bridgestone Arena, Nissan Stadium, Ryman Auditorium, Grand Ole Opry venues; CMA Fest, ACM Awards, Nashville Pride, Music City Food+Wine events; $22-$38/hr pricing; 6 FAQs; 12 areasServed
- nashville-experiential-marketing: 16M annual visitors tourism hook; Broadway corridor; CMA Fest multi-stage activation strategy; Metro Nashville permitting guidance; 4 FAQs
- nashville-event-staffing: Music City Center 1,000+ annual conventions framing; HCA/Bridgestone/Nissan North America/Dollar General corporate market; JW Marriott/Omni/Grand Hyatt/Thompson Nashville coverage; 4 FAQs
- nashville-promotional-models: Music City Center trade show focus; hospitality suite staffing at Bridgestone Arena/Nissan Stadium; luxury hotel network (JW Marriott, Thompson, Grand Hyatt, Gaylord Opryland); 4 FAQs
- nashville-convention-staffing: Music City Center 2.1M sq ft campus; Gaylord Opryland Resort; healthcare-capital-of-South framing; Southern Baptist Convention; 5 FAQs

Checks:
- npm run check passed
- npm run build passed (6305 static pages, 0 errors)
- Local build verified: nashville-brand-ambassadors.html contains CMA Fest (38x), Music City Center (34x), The Gulch (10x), Germantown (10x) ✓
- Committed f4cc10c, pushed to origin/main
- Vercel auto-deploy triggered; CDN propagating (15-25 min Vercel SSG deploy)
- Live HTTP 200 confirmed; title "Brand Ambassadors Nashville | AirFresh Marketing" ✓

Status after this run:
- 13 cities now have enriched city-service content (65 enriched pages total)
- 145 cities remain on thin fallback templates

Next actions:
- Priority #5 continued: Add enriched content for Boston, San Francisco, Philadelphia, San Diego, Portland
- Priority #6: Case study internal links — ensure all case study pages link back to relevant service pages

## 2026-05-31 MDT (Run 9)

Goal: City page depth — add neighborhood names, local venues, and specific event types to thin city-service pages (Priority #5).

Audit:
- 11 cities already had enriched content (Denver, Austin, Atlanta, Chicago, Dallas, Houston, Las Vegas, Los Angeles, Miami, New York City, Phoenix) = 55 enriched pages
- All remaining 147 cities used thin fallback templates (generic service descriptions, no local knowledge)
- Selected Seattle as the highest-leverage unenriched market: 760K+ population, home to Amazon/Microsoft/Expedia, strong tech/outdoor/festival culture, distinct neighborhood personalities
- Seattle had 9 city-service page combinations; enriched 5 highest-value services

Shipped (commit 213bf11) — new file server/city-content/seattle.ts:
- seattle-brand-ambassadors: Capitol Hill, Fremont, Ballard, South Lake Union neighborhoods; Climate Pledge Arena, Lumen Field, Pike Place Market venues; Seafair, Bumbershoot, PAX West, SIFF events; $24-$42/hr pricing; 6 FAQs; 12 areasServed
- seattle-experiential-marketing: Amazon/Microsoft/Expedia corporate event focus; Meydenbauer Center (Bellevue) coverage; tech-literate staff callout; 4 FAQs
- seattle-street-teams: Fremont Sunday Market, Ballard Farmers Market, Broadway corridor deployment zones; festival season section; 4 FAQs
- seattle-event-management: Bell Harbor, MoPOP, Seattle Center Exhibition Hall venues; PAX West/ECCC consumer event coverage; 5 FAQs
- seattle-convention-staffing: PAX West, Emerald City Comic Con, WSCC focus; bilingual capability callout; 5 FAQs

Checks:
- npm run check passed
- npm run build passed (6305 static pages, 0 errors)
- Committed 213bf11, pushed to origin/main
- Vercel auto-deploy triggered
- Local build verified: seattle-brand-ambassadors.html contains enriched neighborhood/venue/event content ✓
- Live HTTP 200 confirmed; CDN propagating enriched body content (15-25 min Vercel SSG deploy)

Status after this run:
- 12 cities now have enriched city-service content (60 enriched pages total)
- 146 cities remain on thin fallback templates

Next actions:
- Priority #5 continued: Add enriched content for Nashville, Boston, San Francisco, Philadelphia, San Diego
- Priority #6: Case study internal links — ensure all case study pages link back to relevant service pages

## 2026-05-30 MDT (Run 8)

Goal: FAQ schema expansion — add FAQPage JSON-LD to remaining service pages without it (Priority #4).

Audit:
- Scanned all top-level service pages for existing FAQPage JSON-LD
- 14+ major service pages already had FAQPage schema from prior work
- 2 valuable service pages were missing it: /services/retail-activations and /services/luxury-brand-marketing
- All other pages missing FAQPage (careers/apply, team, case-studies) are non-commercial and low-priority for FAQ schema

Shipped (commit ab5f34a) — 2 pages:
- app/services/retail-activations/page.tsx: Added 7-question FAQPage JSON-LD covering: what retail activations are, cost ($28-$65/hr), activation vs demo difference, which retailers, booking lead times, ROI measurement, multi-location capability
- app/services/luxury-brand-marketing/page.tsx: Added 7-question FAQPage JSON-LD covering: what luxury experiential marketing is, luxury vs standard staffing, brand types, VIP launch events, brand prestige protection, activations at Art Basel/NYFW/Coachella, cost ($55-$150+/hr)

Checks:
- npm run check passed
- npm run build passed (6305 static pages, 0 errors)
- Committed ab5f34a, pushed to origin/main
- Vercel auto-deploy triggered
- Live verification: both pages return HTTP 200; FAQPage confirmed in .next build artifacts (1 match each)

Status after this run:
- All major commercial service pages now have FAQPage JSON-LD ✅
- FAQ schema coverage complete across: event-staffing-agency, brand-ambassador-agency, product-sampling-agency, experiential-marketing-agency, promotional-staffing-agency, brand-activation-agency, guerrilla-marketing-agency, corporate-event-staffing, event-marketing-agency, mobile-marketing-tours, hire-brand-ambassadors, field-marketing-agency, event-staffing-near-me, technology, services/food-beverage-sampling, services/trade-show-staffing, services/retail-activations, services/luxury-brand-marketing

Next actions:
- Priority #5: City page depth — add neighborhood names, local venues, specific event types to the top 20 city-service pages that are thin




Goal: Internal link audit — blog posts → commercial service (money) pages (Priority #3 — batch 4, indexed-only cleanup pass).

Audit:
- Identified all 62 remaining blog posts without money-page links
- Filtered to indexed-only posts (noindex posts deprioritized — only 5 indexed posts remained without links)
- All 5 indexed posts shipped this run

Shipped (commit 6565762) — 5 indexed posts:
- in-store-product-demos: demo staffing para → /product-sampling-agency; quality demonstrators para → /event-staffing-agency
- tech-product-demos: demo staff requirements → /event-staffing-agency + /brand-ambassador-agency
- mobile-marketing-tours-explained: staffing intro → /brand-ambassador-agency + /event-staffing-agency
- micro-experiences-intimate-brand-activations-2026: national roster para → /brand-ambassador-agency + /experiential-marketing-agency
- sustainable-experiential-marketing-2026: hire local para → /brand-ambassador-agency + /event-staffing-agency

Checks:
- npm run check passed
- npm run build passed (6305 static pages, 0 errors)
- Committed 6565762, pushed to origin/main
- Vercel auto-deploy triggered
- Live verification: curl https://www.airfreshmarketing.com/blog/in-store-product-demos confirmed product-sampling-agency (9×) and event-staffing-agency (13×) in HTML ✓

Status after this run:
- ALL indexed blog posts now have money-page internal links ✅
- 57 noindex blog posts remain without money-page links (deprioritized — not indexed, minimal SEO value)

Next actions:
- Priority #4: FAQ schema expansion — add FAQPage JSON-LD to top 10 highest-traffic service pages if not already present
- Priority #3 (noindex): optionally re-index + link the most valuable noindex blog posts



## 2026-05-30 MDT (Run 6)

Goal: Internal link audit — blog posts → commercial service (money) pages (Priority #3 continued — batch 3).

Audit:
- 72 blog posts still lacked money-page links after Run 5
- Selected 8 highest-intent posts for this run (event staffing, festival staffing, ROI measurement, Miami guide, pop-ups)

Shipped (commit 086bbab) — 8 posts:
- event-staffing-companies-near-me-how-to-find: intro → /event-staffing-agency; h3 National Agencies → /brand-ambassador-agency
- event-staffing-denver-complete-guide: 2× /services upgraded → /event-staffing-agency; work-with-agency → /brand-ambassador-agency
- hire-event-staff-festivals: intro → /event-staffing-agency; brand ambassador section → /brand-ambassador-agency
- promotional-staff-events-hiring-training-guide: 2× /services → /promotional-staffing-agency
- measure-brand-ambassador-roi-2026: /services → /experiential-marketing-agency; pro-tip → /brand-ambassador-agency
- event-marketing-roi: intro → /experiential-marketing-agency; track section → /event-staffing-agency
- event-marketing-agencies-miami-2026-guide: intro 2-pack → /event-staffing-agency + /experiential-marketing-agency; brand ambassador section → /brand-ambassador-agency
- pop-up-shops-guide: opening → /brand-ambassador-agency; staffing section → /event-staffing-agency

Checks:
- npm run check passed
- npm run build passed (6305 static pages, 0 errors)
- Committed 086bbab, pushed to origin/main
- Vercel auto-deploy triggered
- Live verification: curl https://www.airfreshmarketing.com/blog/event-staffing-companies-near-me-how-to-find confirmed event-staffing-agency (13×) and brand-ambassador-agency (9×) in HTML ✓

Next actions:
- Priority #3 continued: ~64 blog posts still lack money-page internal links — continue 8-10/run until full coverage
- Priority #4: FAQ schema expansion — add FAQPage JSON-LD to top 10 highest-traffic service pages



Goal: Internal link audit — blog posts → commercial service (money) pages (Priority #3 continued — batch 2).

Audit:
- 79 blog posts still lacked money-page links after Run 4
- Selected next 9 high-traffic posts for this run

Shipped (commit aea62b9):
- 2026-world-cup-event-staffing: intro → /event-staffing-agency + /brand-ambassador-agency; staffing section → /promotional-staffing-agency
- ai-experiential-marketing-2026: intro → /experiential-marketing-agency; predictive staffing section → /promotional-staffing-agency
- automotive-event-marketing: intro → /event-staffing-agency + /brand-ambassador-agency
- beauty-sampling: intro → /product-sampling-agency
- bilingual-event-staff: intro → /brand-ambassador-agency + /event-staffing-agency
- brand-ambassador-career: intro → /brand-ambassador-agency + /event-staffing-agency
- brand-ambassador-pay-rates: intro → /brand-ambassador-agency + /promotional-staffing-agency
- cannabis-marketing-events: intro → /brand-activation-agency + /event-staffing-agency
- convention-center-marketing: intro → /brand-ambassador-agency + /event-staffing-agency

Checks:
- npm run check passed
- npm run build passed (6305 static pages, 0 errors)
- Committed aea62b9, pushed to origin/main
- Vercel auto-deploy triggered
- Live verification: curl https://www.airfreshmarketing.com/blog/brand-ambassador-pay-rates confirmed brand-ambassador-agency (9×) and promotional-staffing-agency (5×) in HTML ✓

Next actions:
- Priority #3 continued: ~70 blog posts still lack money-page internal links — continue 9-10/run until full coverage
- Priority #4: FAQ schema expansion — add FAQPage JSON-LD to top 10 highest-traffic service pages


## 2026-05-30 MDT (Run 4)

Goal: Internal link audit — blog posts → commercial service (money) pages (Priority #3).

Audit:
- 125 static blog pages in app/blog/; 90 of them had zero links to the money pages (/event-staffing-agency, /brand-ambassador-agency, /product-sampling-agency, /brand-activation-agency, /promotional-staffing-agency, /experiential-marketing-agency)
- 35 already had money-page links from prior passes
- Many posts linking to generic /services instead of targeted money pages

Shipped (commit 6e77a31) — first pass of 10 posts:
- choosing-staffing-agency: intro → /event-staffing-agency, /brand-ambassador-agency, /promotional-staffing-agency; closing → /event-staffing-agency
- event-staff-training: intro → /brand-ambassador-agency + /event-staffing-agency; new closing sentence → /event-staffing-agency
- experiential-marketing-budget: intro → /experiential-marketing-agency; staffing bullet → /event-staffing-agency; invest section → /brand-activation-agency
- last-minute-staffing: intro → /event-staffing-agency + /promotional-staffing-agency
- experiential-marketing-trends-2026: intro → /experiential-marketing-agency; staffing bullets → /brand-ambassador-agency + /brand-activation-agency
- b2b-event-marketing: intro → /event-staffing-agency; ambassador mention → /brand-ambassador-agency
- hire-brand-ambassadors-product-launch-2026: upgraded 2× /services → /brand-ambassador-agency + /event-staffing-agency
- promotional-models-hiring-guide: brand ambassador definition → /brand-ambassador-agency
- product-launch-events: ambassador role → /brand-ambassador-agency; staffing paragraph → /event-staffing-agency
- trade-show-activation-strategies-brand-playbook-2026: upgraded 2× /services → /event-staffing-agency

Checks:
- npm run check passed
- npm run build passed (6305 static pages, 0 errors)
- Committed 6e77a31, pushed to origin/main
- Vercel auto-deploy triggered
- Live verification: curl https://www.airfreshmarketing.com/blog/choosing-staffing-agency confirmed event-staffing-agency, brand-ambassador-agency, promotional-staffing-agency in HTML ✓

Next actions:
- Priority #3 continued: 80 blog posts still lack money-page internal links — continue adding 10/run until full coverage
- Priority #4: FAQ schema expansion — add FAQPage JSON-LD to top 10 highest-traffic service pages



Goal: GSC click efficiency — tighten fallback title + meta description on all ~5,700 non-enriched city-service pages (Priority #2).

Audit:
- Non-enriched city-service page fallback title was: `${serviceName} ${cityName} | Professional ${serviceName} Services | AirFresh Marketing`
  Often 65-85 chars — Google truncates titles at ~60, hiding the brand suffix and reducing CTR
- Non-enriched fallback description was: `${serviceName} ${cityName} services from AirFresh Marketing. ${parsed.service.description} Contact us for...`
  Always 220-270 chars — Google truncates at ~155, never showing the full value prop. No CTR hook.
- Also noted: 2151d06 (Run 2) was pushed but Vercel hadn't yet deployed the updated SSG pages (stale cache). This run's push forces a fresh Vercel build that includes both the absolute title fix AND the new meta improvements.

Shipped (commit 96c868b):
- app/city-services/[slug]/page.tsx: New fallback title template: `${serviceName} ${cityName} | AirFresh Marketing` (39-55 chars, always fully displayed in SERP)
- app/city-services/[slug]/page.tsx: New fallback description: `${service.title} in ${cityName} · AirFresh Marketing. 500+ national brands served. GPS-tracked staff, 24-hr response. Free quote.` (134-147 chars, keyword-first, concrete value props, strong CTA)
- 10 enriched city markets (NYC, LA, Miami, Chicago, Las Vegas, Denver, Houston, Dallas, Phoenix, Atlanta) are unchanged — their custom metaTitle/metaDescription are preserved.
- Also pushed empty commit d736b72 to trigger Vercel redeploy for the prior absolute-title fix (2151d06).

Verified in local build (.next/server/app/city-services/):
- albuquerque-event-management: title="Event Management Albuquerque | AirFresh Marketing" ✓
- charlotte-promotional-models: title="Promotional Models Charlotte | AirFresh Marketing" ✓
- albuquerque-event-management: description="Full-Service Event Management in Albuquerque · AirFresh Marketing. 500+ national brands served. GPS-tracked staff, 24-hr response. Free quote." ✓

Checks:
- npm run check passed
- npm run build passed (6305 static pages, 0 errors)
- Committed 96c868b, pushed to origin/main
- Vercel deploy in progress (large SSG build — 15-25 min propagation time)

Next actions:
- Priority #3: Internal link audit — blog posts should link to commercial service pages with descriptive anchor text; add 2-3 internal links per blog post to /event-staffing-agency, /brand-ambassadors, /product-sampling, etc.

## 2026-05-30 MDT (Run 2)

Goal: Fix double brand suffix on ALL city-service pages (Priority #1 — missed pages from Run 1).

Audit: Run 1 (commit b4f4d68) fixed double brand suffix on layout-level pages (/about, /contact, /team, /careers). However, city-service pages (`app/city-services/[slug]/page.tsx`) had a separate bug: both the enriched city content `metaTitle` values (e.g., `'Brand Ambassadors New York City | Professional Staffing | AirFresh Marketing'`) and the non-enriched fallback title strings already contained `| AirFresh Marketing`, but `generateMetadata` returned `title: title` which triggered the root layout template to append another `| AirFresh Marketing`. Result: all ~6,305 city-service pages showed doubled suffix live.

Confirmed double on live site before fix:
- /city-services/new-york-city-brand-ambassadors: "Brand Ambassadors New York City | Professional Staffing | AirFresh Marketing | AirFresh Marketing"
- /city-services/chicago-street-teams: "Street Teams Chicago | Professional Staffing | AirFresh Marketing | AirFresh Marketing"
- Affects all 10 enriched city modules (NYC, LA, Miami, Chicago, Las Vegas, Denver, Houston, Dallas, Phoenix, Atlanta) and ~5,700+ non-enriched fallback pages.

Shipped (commit 2151d06):
- app/city-services/[slug]/page.tsx: Changed `title: title` → `title: { absolute: absoluteTitle }` in generateMetadata so Next.js bypasses the template and uses the title string as-is.

Result (verified in local build .next/server/app/city-services/*.html):
- /city-services/new-york-city-brand-ambassadors → "Brand Ambassadors New York City | Professional Staffing | AirFresh Marketing" ✓
- /city-services/new-york-city-street-teams → "Street Teams New York City | Professional Staffing | AirFresh Marketing" ✓
- /city-services/albuquerque-event-management → "Event Management Albuquerque | Professional Event Management Services | AirFresh Marketing" ✓
- /city-services/charlotte-promotional-models → "Promotional Models Charlotte | Professional Promotional Models Services | AirFresh Marketing" ✓

Checks:
- npm run check passed
- npm run build passed (6305 static pages, 0 errors)
- Committed 2151d06, pushed to origin/main
- Vercel deploy triggered; CDN propagation in progress (live verification pending CDN flush ~5-10 min)

Next actions:
- GSC click efficiency pass (Priority #2): identify city-service + event pages with high impressions / low CTR, rewrite top 10 worst title/meta offenders

## 2026-05-30 MDT

Goal: Fix double brand suffix in page titles (Priority #1).

Audit: Root layout defines `title.template = '%s | AirFresh Marketing'`. Six layout files included `| AirFresh Marketing` in their `title:` string, causing the template to double-append the brand — e.g. "Experiential Marketing Agency Since 2004 | About AirFresh Marketing | AirFresh Marketing".

Confirmed doubles via live curl before fix:
- /about: "Experiential Marketing Agency Since 2004 | About AirFresh Marketing | AirFresh Marketing"
- /contact: "Event Staffing Quote | Contact AirFresh Marketing | AirFresh Marketing"
- /team: "Experiential Marketing Team | Meet AirFresh Marketing | AirFresh Marketing"
- /careers/experience-manager: "Experience Manager | AirFresh Marketing Careers | AirFresh Marketing"
- /careers/technical-intern: "Technical Intern | AirFresh Marketing Careers | AirFresh Marketing"

Shipped (commit b4f4d68):
- app/about/layout.tsx: stripped `| About AirFresh Marketing` suffix
- app/contact/layout.tsx: stripped `| Contact AirFresh Marketing` suffix
- app/team/layout.tsx: stripped `| Meet AirFresh Marketing` suffix
- app/careers/layout.tsx: added `title.template = '%s | AirFresh Marketing'` + clean default to fix inheritance chain for all career sub-pages
- app/careers/experience-manager/layout.tsx: stripped `| AirFresh Marketing Careers` suffix
- app/careers/technical-intern/layout.tsx: stripped `| AirFresh Marketing Careers` suffix

Result (verified in local build .next/server/app/*.html):
- /about → "Experiential Marketing Agency Since 2004 | AirFresh Marketing" ✓
- /contact → "Event Staffing Quote | AirFresh Marketing" ✓
- /team → "Experiential Marketing Team | AirFresh Marketing" ✓
- /careers → "Brand Ambassador Jobs & Event Staff Careers | AirFresh Marketing" ✓
- /careers/experience-manager → "Experience Manager | AirFresh Marketing" ✓
- /careers/technical-intern → "Technical Intern | AirFresh Marketing" ✓
- /careers/apply → "Apply Now | Join Our Team | AirFresh Marketing" ✓

Checks:
- npm run check passed
- npm run build passed (6305 static pages, 0 errors)
- Committed b4f4d68, pushed to origin/main
- Vercel deployed; /contact live-verified immediately ✓
- /about and /team CDN cache propagating (fixed in build output)

Next actions:
- GSC click efficiency pass (Priority #2): identify city-service + event pages with high impressions / low CTR, rewrite top 10 worst title/meta offenders

## 2026-05-29 MDT

Goal: Add mid-body /get-quote CTA banner to all 552 venue-service pages to increase funnel touchpoints.

Audit: venue/service pages had only 2 quote CTAs (hero + final-cta). All 552 pages lacked a mid-body conversion point between "Service Details" and "Case Studies."

Shipped (1 file, commit aa68be2):
- app/venues/[slug]/[service]/page.tsx
- Inserted a dark indigo CTA banner between Service Details and Case Studies sections
- Copy: "Ready to staff your event at {venue.shortName}? Tell us about your campaign and get a free quote within 24 hours."
- Links to /get-quote?source=venue-{slug}-{service}&intent=mid-body (trackable in GA)
- Adds 3rd quote touchpoint: hero + mid-body (new) + final-cta
- Matches state-service CTA pattern shipped 2026-05-28

Checks:
- npm run build passed (6305 static pages, 0 errors)
- Committed aa68be2, pushed to origin/main
- Deployed to Vercel production: https://afm-website-agg0hj109-joey-5223s-projects.vercel.app
- Verified live: /venues/mccormick-place-chicago/brand-ambassadors returns "Ready to staff your event", "mid-body" intent param ✓

Next actions:
- Same mid-body CTA pattern on events/[slug]/[service] pages (~1,024 pages — has sidebar but no mid-body banner)
- GSC opportunity pass: pages 4-15 position with impressions 10-200, CTR < 2%
- /get-quote internal link audit on neighborhood pages

## 2026-05-25 MDT (CTA attribution audit — industries & venues)

Goal: verify and confirm CTA attribution on /industries and /venues page families per growth workflow task.

Audit findings:
- `/industries/page.tsx`: already has `quoteHref = (intent) => \`/get-quote?source=industries&intent=${intent}\`` applied to final "Get a Custom Quote" CTA (intent=custom-industry-quote). No bare /get-quote or /contact buyer CTAs remain.
- `/industries/[industry]/page.tsx`: already has `quoteHref = (intent) => \`/get-quote?source=industry-${industrySlug}&intent=${intent}\`` applied to hero CTA (intent=hero) and final CTA (intent=final-cta). No bare buyer CTAs remain.
- `/industries/[industry]/[city]/page.tsx`: already attributed with `source=industry-${industrySlug}-${citySlug}` for hero, service, and final CTAs.
- `/venues/page.tsx`: already has `quoteHref = (intent) => \`/get-quote?source=venues&intent=${intent}\`` applied to hero CTA (intent=hero-venue-staffing-quote) and final CTA (intent=final-free-quote).
- `/venues/[slug]/page.tsx`: already attributed with `source=venue-${venue.slug}` for hero (intent=hero) and final (intent=final-cta) CTAs.
- `/venues/[slug]/[service]/page.tsx`: already attributed with `source=venue-${venue.slug}-${service.slug}` for hero (intent=hero), sidebar (intent=sidebar-custom-quote), and final (intent=final-cta) CTAs.

No file changes were needed — all attributions were already in place from prior passes (industries: 2026-05-14, venues: 2026-05-13).

Checks:
- Cleared stale Turbopack .next cache (caused pre-existing build failure), then `npm run build` passed cleanly — generated all static pages including 46+ venues and 8+ industry pages.
- Confirmed zero bare `/get-quote` or `/contact` buyer-intent hrefs remain in any industries or venues page file.

Next actions:
- Continue attribution cleanup on any remaining pages not yet audited (compare pages, neighborhoods, etc.)

## 2026-05-25 MDT

Goal: audit and improve the homepage hero/above-fold section for conversion clarity — keyword-rich H1, named social proof above fold, cleaner sub-headline value prop, and corrected hero CTA attribution.

Shipped candidate (file: `components/HeroAgencyVideo.tsx`):
- **H1 reordered:** Line 1 now leads with `Experiential Marketing Agency` (primary keyword first); line 2 is `Brand Ambassadors & Event Staffing`. Previous order buried "Experiential Marketing" at the end of line 2.
- **Above-fold social proof added:** Inserted a named brand trust line — "Trusted by Netflix · Sweetgreen · Premier Protein · 500+ brands nationwide" — directly below the agency badge and above the H1. No social proof existed above fold before.
- **Sub-headline rewritten:** Now opens with `Nationwide coverage. 24-hour response. Proven results.` before listing services, explicitly reinforcing the three value pillars buyers care about.
- **Hero CTA attribution corrected:** Primary CTA updated from `/get-quote?source=homepage&intent=hero-event-staffing-quote` to `/get-quote?source=homepage&intent=hero` per attribution standard.

Checks:
- `npm run build` passed; all static pages generated successfully.
- Committed `43b5867` (`fix: homepage hero conversion clarity and above-fold proof pass`) and pushed to `origin/main`.
- Vercel auto-deploy triggered on push to `main` → will alias to `https://www.airfreshmarketing.com`.

Next actions:
- Verify live DOM on `https://www.airfreshmarketing.com` confirms H1 text "Experiential Marketing Agency" is on line 1, trust line renders above the H1, and CTA href is `/get-quote?source=homepage&intent=hero`.
- Continue legacy `/portfolio` proof-link cleanup on service, city, and comparison pages (carried from 2026-05-24 next actions).

## 2026-05-24 08:02 MDT

Goal: move high-visibility proof/navigation paths toward the stronger case-study hub while keeping the legacy full portfolio available.

Shipped candidate:
- Updated the global desktop/mobile navigation label from `Portfolio` to `Case Studies` and routed it to `/case-studies`.
- Updated the homepage hero secondary CTA from `/portfolio` to `/case-studies` with clearer `View Case Studies` copy.
- Updated the lower homepage proof-section primary CTA to `/case-studies`, leaving a secondary `Browse Full Portfolio` link to preserve access to `/portfolio`.

Checks:
- Codex CLI was unavailable on this machine, so the pass was completed manually under the AFM growth workflow.
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Reverted generated `tsconfig.tsbuildinfo` after checks.
- Rebased over remote commit `7864bad` and pushed code commit `eb05f5b` (`feat: route proof CTAs to case studies`) to `origin/main`.
- Deployed production via Vercel project `afm-website`: `https://afm-website-cfp185e1d-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com` and `https://www.airfreshmarketing.com`.
- Verified live custom-domain DOM exposes `Case Studies` nav, `View Case Studies` CTAs to `/case-studies`, and secondary `Browse Full Portfolio` to `/portfolio`.
- Verified `https://www.airfreshmarketing.com/case-studies?proofcase=eb05f5b` returns 200 and apex redirects to the `www` canonical host.

Next actions:
- Continue high-intent proof/funnel cleanup by converting remaining legacy `/portfolio` proof links on service, city, and comparison pages to the strongest matching case-study or `/case-studies` destination where appropriate.

## 2026-05-23 08:08 MDT

Goal: capture buyer-intent traffic from the global footer CTA and route it directly into the attributed quote funnel instead of the general contact page.

Shipped candidate:
- Updated the footer “Ready to Create Something Amazing?” Get Started CTA from `/contact` to `/get-quote?source=site-footer&intent=final-get-started`.
- Preserved the footer Contact navigation link and Join Our Team link, keeping general navigation/candidate paths separate from buyer-intent quote flow.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Reverted generated `tsconfig.tsbuildinfo` after build verification.
- Codex CLI was unavailable on this machine, so the pass was completed manually under the AFM growth workflow.
- Commit recorded with this shipment (`fix: route footer cta to quote funnel`).

Next actions:
- Verify production footer DOM after Vercel deploy and confirm `/get-quote` stores `site-footer` / `final-get-started` attribution without submitting a fake lead.

## 2026-05-15 04:39 MDT

Goal: strengthen `/get-quote` conversion clarity and attribution handoff so high-intent CTA traffic visibly carries source/intent context into the quote workflow.

Shipped candidate:
- Added a contextual “Quote context captured” card to the quote page when source/intent or inferred event details are present.
- Displays human-readable source, intent, event, and event type chips without submitting or exposing a fake lead.
- Added a compact `_quoteContext` field to the Formspree JSON payload so source, intent, inferred event, and event type arrive together for easier lead triage.
- Enriched the quote-submit analytics label with `lead_source` and `lead_intent` alongside event type/location.

Checks:
- Live pre-audit confirmed `/get-quote?source=staffing-for-coachella&intent=body-event-page-cta` already stored source/intent and inferred Coachella/Festival; no fake lead submitted.
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Local browser verification on port 3010 confirmed the new context card renders Source: Coachella, Intent: Body Event Page CTA, Event: Coachella, Type: Festival, and `localStorage.afm_attribution` preserves source/intent.
- Reverted generated `tsconfig.tsbuildinfo` and `next-env.d.ts` after checks/dev verification.
- Codex CLI was unavailable on this machine, so the pass was completed manually under the AFM growth workflow.
- Commit recorded with this shipment (`feat: surface quote attribution context`).
- Pushed code commit `3dc8c9b` to `origin/main` and deployed production via Vercel project `afm-website`: `https://afm-website-3ftfsvwhu-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com` and resolving on `https://www.airfreshmarketing.com`.
- Verified live custom-domain browser DOM on `/get-quote?source=staffing-for-coachella&intent=body-event-page-cta&v=3dc8c9b` renders the context card with Source: Coachella, Intent: Body Event Page CTA, Event: Coachella, Type: Festival, and preserves attribution in `localStorage.afm_attribution`.
- Verified `https://airfreshmarketing.com/get-quote?v=3dc8c9b-apex` 308-redirects to the `www` canonical host.

Next actions:
- Continue high-intent `/contact` cleanup and quote form trust/friction improvements.

## 2026-05-15 03:25 MDT

Goal: strengthen above-the-fold homepage internal links by turning the hero positioning chips into clickable service paths for high-intent visitors and crawlers.

Shipped candidate:
- Converted the homepage hero chips for Street Teams, Brand Ambassadors, Event Staffing, and Product Sampling from static text into accessible links.
- Routed the chips to high-intent service pages: `/services/street-teams`, `/brand-ambassador-agency`, `/event-staffing-agency`, and `/product-sampling-agency`.
- Preserved the existing hero quote CTA attribution to `/get-quote?source=homepage&intent=hero-event-staffing-quote` and the above-fold proof stats.

Checks:
- Live pre-audit confirmed the hero service chips were static text while the primary quote CTA already carried source/intent attribution.
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Reverted generated `tsconfig.tsbuildinfo` after checks.
- Codex CLI was unavailable on this machine, so the pass was completed manually under the AFM growth workflow.
- Commit recorded with this shipment (`feat: link homepage hero service chips`).
- Pushed to `origin/main` and deployed production via Vercel project `afm-website`: `https://afm-website-fyi5njh2c-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com` and resolving on `https://www.airfreshmarketing.com`.
- Verified live custom-domain DOM exposes the four hero service chip links with accessible labels and the expected hrefs.
- Verified all four chip destinations return 200 on the custom domain: `/services/street-teams`, `/brand-ambassador-agency`, `/event-staffing-agency`, and `/product-sampling-agency`.
- Verified `https://airfreshmarketing.com/?v=8b4657e-apex` 308-redirects to the `www` canonical URL.

Next actions:
- Continue homepage/service-page conversion cleanup by auditing any remaining visible buyer CTAs that still go to generic `/contact`.

## 2026-05-15 02:09 MDT

Goal: tighten homepage proof-section conversion by sending the featured Netflix card to the dedicated case study instead of the generic portfolio index.

Shipped candidate:
- Updated the homepage featured proof card from the generic “Netflix Cowboy Bebop Launch” portfolio link to the live `/case-studies/netflix-activations` case study.
- Aligned the visible card title and description with the actual Netflix case-study page: Hollywood red carpet staffing, VIP flow, and fan experience support.
- Preserved the surrounding Skinny Mixes and Grubhub proof cards.

Checks:
- Live pre-audit confirmed the homepage Netflix proof card routed to `/portfolio` while `/case-studies/netflix-activations` returned 200 on the custom domain.
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Reverted generated `tsconfig.tsbuildinfo` after checks.
- Codex CLI was unavailable on this machine, so the pass was completed manually under the AFM growth workflow.
- Committed and pushed code/work-log commit `ad240b6` (`fix: link homepage netflix proof card`).
- Deployed production via Vercel project `afm-website`: `https://afm-website-o89yhc2ve-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com` and resolving on `https://www.airfreshmarketing.com`.
- Verified live custom-domain homepage DOM exposes the Netflix proof card with title `Netflix Premiere Events`, supporting copy, and href `/case-studies/netflix-activations`.
- Verified `https://airfreshmarketing.com/?v=ad240b6-apex` 308-redirects to the `www` canonical URL.

Next actions:
- Continue homepage proof/CTA cleanup and high-intent `/contact` cleanup where buyer paths still go to generic pages.
- Audit the case-study index and homepage proof section for other generic or mismatched proof-card destinations.

## 2026-05-15 00:55 MDT

Goal: strengthen sitewide internal linking to high-intent service landing pages from the global navigation while preserving quote-funnel attribution.

Shipped candidate:
- Expanded the desktop/mobile Services navigation data to expose high-intent SEO/conversion pages: Event Staffing Agency, Brand Ambassador Agency, Product Sampling Agency, Experiential Marketing Agency, Trade Show Staffing, and Brand Activation Agency.
- Kept existing service links in place so users can still reach dynamic service pages from navigation.
- Updated the desktop Request Proposal CTA to use the shadcn/Radix `Button asChild` anchor pattern while preserving `/get-quote?source=site-navigation&intent=desktop-request-proposal` attribution.

Checks:
- Live pre-audit confirmed `/get-quote?source=cron-audit&intent=verify` loads on the custom domain without submitting a lead.
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Reverted generated `tsconfig.tsbuildinfo` after checks.
- Codex CLI was unavailable on this machine, so the pass was completed manually under the AFM growth workflow.
- Committed and pushed code/work-log commit `06a473e` (`feat: surface high-intent service pages in nav`).
- Deployed production via Vercel project `afm-website`: `https://afm-website-cixlepx13-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com` and resolving on `https://www.airfreshmarketing.com`.
- Verified live custom-domain nav DOM exposes `/event-staffing-agency`, `/brand-ambassador-agency`, `/product-sampling-agency`, `/experiential-marketing-agency`, `/services/trade-show-staffing`, and `/brand-activation-agency` from `nav a`.
- Verified live desktop Request Proposal CTA still routes to `/get-quote?source=site-navigation&intent=desktop-request-proposal` and `/get-quote` stores `lead_source=site-navigation` plus `lead_intent=desktop-request-proposal` in `localStorage.afm_attribution` without submitting a lead.
- Verified `https://airfreshmarketing.com/?navcheck=06a473e-prod` redirects to the `www` canonical URL.

Next actions:
- Continue high-intent `/contact` cleanup on non-footer buyer CTAs while leaving partner/candidate/general contact paths alone.
- Audit GSC/impression opportunities if credentials are available; otherwise continue safe internal-link and quote-attribution passes.

## 2026-05-14 20:11 MDT

Goal: continue quote-funnel attribution cleanup by removing remaining bare `/get-quote` buyer links from two high-intent service landing pages.

Shipped candidate:
- Updated `/brand-activation-agency` related-links “Get a Quote” CTA from bare `/get-quote` to `/get-quote?source=brand-activation-agency&intent=related-links-quote`.
- Updated `/product-sampling-agency` related-links “Get a Quote” CTA from bare `/get-quote` to `/get-quote?source=product-sampling-agency&intent=related-links-quote`.
- Preserved true Contact navigation links and existing primary/final quote CTAs.

Checks:
- Live pre-audit confirmed each page exposed one bare `/get-quote` buyer CTA before this pass.
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Reverted generated `tsconfig.tsbuildinfo` after checks.
- Codex CLI was unavailable on this machine, so the pass was completed manually under the AFM growth workflow.

Next actions:
- Continue buyer-intent CTA attribution cleanup where quote CTAs still use generic destinations, especially remaining service/category pages.
- Audit high-intent `/contact` CTAs that say “Get Started,” “Schedule,” or “Request” and convert only true buyer quote intents into attributed `/get-quote` paths.

## 2026-05-14 18:58 MDT

Goal: continue high-intent CTA routing cleanup on the major-event staffing directory by moving buyer-intent custom-plan traffic into `/get-quote` with source/intent attribution.

Shipped candidate:
- Updated the `/staffing-for` final CTA section so the secondary buyer CTA now routes to `/get-quote?source=staffing-for&intent=custom-event-plan` instead of the generic `/contact` page.
- Rewrote the supporting copy from generic contact language to quote-funnel language: “Share a few details and we'll map a custom staffing plan tailored to your event.”
- Preserved the existing primary `/get-quote?source=staffing-for&intent=final-cta` path and left true navigation/footer contact links untouched.

Checks:
- Live pre-audit confirmed `/staffing-for` still exposed a final-section “Contact Us” buyer CTA to `/contact` before this pass.
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Reverted generated `tsconfig.tsbuildinfo` after checks.
- Codex CLI was unavailable on this machine, so the pass was completed manually under the AFM growth workflow.
- Committed and pushed code/work-log commit `c6f4e50` (`fix: route staffing directory custom plan cta`).
- Deployed production via Vercel project `afm-website`: `https://afm-website-myyo0jith-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com` and resolving on `https://www.airfreshmarketing.com`.
- Verified live `/staffing-for?v=c6f4e50` exposes the new `Get a Custom Event Plan` CTA with `/get-quote?source=staffing-for&intent=custom-event-plan` on the custom domain.
- Verified `https://airfreshmarketing.com/staffing-for?v=c6f4e50` 308-redirects to the `www` canonical URL.
- Verified `/get-quote?source=staffing-for&intent=custom-event-plan&v=c6f4e50` preserves `lead_source=staffing-for` and `lead_intent=custom-event-plan` in `localStorage.afm_attribution` without submitting a lead.

Next actions:
- Continue high-intent `/contact` cleanup on other non-footer buyer CTAs while leaving partner/candidate/general contact paths alone.
- Review remaining index/directory pages for secondary CTAs that should either route into attributed quote URLs or become true informational navigation.

## 2026-05-14 16:52 MDT

Goal: improve the quote funnel for high-intent event staffing pages by carrying event-page context deeper into `/get-quote`.

Shipped candidate:
- Updated `/get-quote` attribution prefill logic so CTAs with `source=staffing-for-{event-slug}` automatically prefill the Event Name field from the event slug.
- Preserved explicit planner/query values as higher priority: `event=` overrides inferred event names, existing service-based mappings still override generic source/intent inference, and no fake leads were submitted.
- Example: `/get-quote?source=staffing-for-arnold-sports-festival&intent=body-event-page-cta` now opens Step 2 with Event Type `Festival / Concert` and Event Name `Arnold Sports Festival`.

Checks:
- Live pre-audit confirmed the event-page quote URL preserved attribution but did not surface the event name before this pass.
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Local production server verification confirmed the Arnold Sports Festival quote path prefills Event Type and Event Name after moving to Step 2 without submitting a lead.
- Reverted generated `tsconfig.tsbuildinfo` after checks.
- Codex CLI was unavailable on this machine, so the pass was completed manually under the AFM growth workflow.
- Committed and pushed code commit `2c8e320` (`fix: prefill event page quote names`).
- Deployed production via Vercel project `afm-website`: `https://afm-website-5mneon98v-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com` and resolving on `https://www.airfreshmarketing.com`.
- Verified live custom domain `/get-quote?source=staffing-for-arnold-sports-festival&intent=body-event-page-cta&v=2c8e320` prefills Event Type `Festival / Concert` and Event Name `Arnold Sports Festival` after Step 1, with attribution stored as `lead_source=staffing-for-arnold-sports-festival` and `lead_intent=body-event-page-cta` in `localStorage.afm_attribution`.
- Verified `https://airfreshmarketing.com/get-quote?...` 308-redirects to the `www` canonical URL.

Next actions:
- Extend quote-form contextual prefill to `/events/{slug}` and venue/event-service source patterns where source slugs can safely infer an event, venue, or market.
- Continue high-intent `/contact` cleanup on non-footer buyer CTAs while leaving partner/candidate/general contact links alone.

## 2026-05-14 15:08 MDT

Goal: continue quote-funnel and internal-link cleanup by fixing event-page body copy that contained escaped static HTML links and adding attribution to the dynamic blog quote card.

Shipped candidate:
- Updated `/staffing-for/[event]` body rendering to render trusted static event `bodyContent` HTML instead of escaping it as literal text, restoring in-copy event/city/service internal links across the generated event staffing pages.
- Rewrote embedded bare `/get-quote` links inside event body content at render time to `/get-quote?source=staffing-for-{event-slug}&intent=body-event-page-cta`.
- Updated dynamic blog article quote cards to route to `/get-quote?source=blog-{slug}&intent=article-cta` instead of a bare quote URL.

Checks:
- Live pre-audit confirmed `/staffing-for/arnold-sports-festival` was exposing escaped `&lt;a href` text before this pass.
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Local production server verification confirmed `/staffing-for/arnold-sports-festival` now renders real body headings/links and rewrites the body quote CTA with source/intent attribution.
- Local production server verification confirmed `/blog/what-is-experiential-marketing` uses `/get-quote?source=blog-what-is-experiential-marketing&intent=article-cta`.
- Reverted generated `tsconfig.tsbuildinfo` after checks.
- Codex CLI was unavailable on this machine, so the pass was completed manually under the AFM growth workflow.
- Committed and pushed code/work-log commit `5c901b8` (`fix: render event body links with quote attribution`).
- Deployed production via Vercel project `afm-website`: `https://afm-website-fhuqwh7tg-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com` and resolving on `https://www.airfreshmarketing.com`.
- Verified live `/staffing-for/arnold-sports-festival` renders real body HTML/internal links, no longer exposes escaped `&lt;a href` text, and includes `/get-quote?source=staffing-for-arnold-sports-festival&intent=body-event-page-cta` on the custom domain.
- Verified live `/blog/what-is-experiential-marketing` exposes `/get-quote?source=blog-what-is-experiential-marketing&intent=article-cta` on the custom domain.
- Verified the event body quote URL preserves `lead_source=staffing-for-arnold-sports-festival` and `lead_intent=body-event-page-cta` in `localStorage.afm_attribution` without submitting a lead.
- Verified `https://airfreshmarketing.com/staffing-for/arnold-sports-festival` 308-redirects to the `www` canonical URL.

Next actions:
- Continue high-intent CTA cleanup on remaining buyer-intent non-footer `/contact` links, while leaving partner/candidate/general navigation links alone.
- Review `/get-quote` prefill behavior for these event-page body CTAs and expand source/intent inference if the staffing-for event class should preselect a more specific event type/staff role.

## 2026-05-14 13:36 MDT

Goal: continue high-intent `/contact` cleanup from the prior next action by moving remaining buyer-intent case-study and ambassador recommendation CTAs into the attributed quote funnel.

Shipped candidate:
- Updated `/portfolio/premier-protein` legacy route handling so it 308-redirects to the live `/case-studies/premier-protein-sampling` page instead of the non-existent `/case-studies/premier-protein` URL created by the catch-all portfolio redirect.
- Updated the unreachable `/portfolio/premier-protein` fallback page’s final “Get Started” CTA to `/get-quote?source=portfolio-premier-protein&intent=final-sampling-campaign` so it stays attributed if that static page is ever restored.
- Updated `/hire-brand-ambassadors` inline “Contact our team” recommendation link into clearer quote-funnel copy and `/get-quote?source=hire-brand-ambassadors&intent=ambassador-type-recommendation`.
- Preserved footer/navigation Contact links and partner/candidate-intent contact paths.

Checks:
- Repo/live pre-audit confirmed the target pages still exposed `/contact` links and did not expose the new attributed quote URLs before this pass.
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Reverted generated `tsconfig.tsbuildinfo` after checks.
- Codex CLI was unavailable on this machine, so the pass was completed manually under the AFM growth workflow.

Next actions:
- Commit, push, deploy, and verify production custom domain for this pass.
- Continue remaining high-intent `/contact` cleanup on non-footer static CTAs; leave partner applications, candidate apply CTAs, and true contact/navigation links on `/contact`.

## 2026-05-14 12:22 MDT

Goal: continue `/get-quote` and high-intent CTA routing cleanup by attributing global quote entry points that previously landed on the quote form without source/intent context.

Shipped candidate:
- Updated the desktop navigation “Request Proposal” CTA to `/get-quote?source=site-navigation&intent=desktop-request-proposal`.
- Updated the mobile navigation “Request Proposal” CTA to `/get-quote?source=site-navigation&intent=mobile-request-proposal`.
- Updated the homepage floating quote CTA to `/get-quote?source=homepage-floating-cta&intent=request-quote` while preserving the direct phone action.

Checks:
- Repo/live pre-audit confirmed the global nav and homepage floating quote CTAs still used bare `/get-quote` before this pass.
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Reverted generated `tsconfig.tsbuildinfo` after checks.
- Codex CLI was unavailable on this machine, so the pass was completed manually under the AFM growth workflow.
- Committed and pushed code commit `3337fef` (`fix: attribute global quote ctas`).
- Deployed production via Vercel project `afm-website`: `https://afm-website-ew7hsemur-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com` and resolving on `https://www.airfreshmarketing.com`.
- Verified live homepage desktop nav exposes `/get-quote?source=site-navigation&intent=desktop-request-proposal` on the custom domain.
- Verified live homepage floating quote CTA exposes `/get-quote?source=homepage-floating-cta&intent=request-quote` after expansion on the custom domain.
- Verified `/get-quote?source=site-navigation&intent=desktop-request-proposal` preserves `lead_source=site-navigation` and `lead_intent=desktop-request-proposal` in `localStorage.afm_attribution` without submitting a lead.
- Verified `https://airfreshmarketing.com/` 308-redirects to the `www` canonical URL.

Next actions:
- Continue high-intent `/contact` cleanup on `/portfolio/premier-protein`, `/hire-brand-ambassadors` inline consultation copy, and any other non-footer CTAs that represent buyer intent rather than general contact or partnerships.

## 2026-05-14 11:06 MDT

Goal: continue high-intent guide CTA attribution by moving remaining quote-intent guide CTAs from general contact into the quote funnel.

Shipped candidate:
- Updated `/guides/best-event-staffing-agency` final “Get a Free Quote” CTA to `/get-quote?source=guide-best-event-staffing-agency&intent=final-free-quote`.
- Updated `/guides/brand-ambassador-hiring-guide` final “Get a Free Quote” CTA to `/get-quote?source=guide-brand-ambassador-hiring&intent=final-free-quote`.
- Normalized both visible phone CTAs to direct `tel:+13037206060` links.

Checks:
- Live pre-audit confirmed both guide final quote CTAs still routed to `/contact` before this pass.
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Codex CLI was unavailable on this machine, so the pass was completed manually under the AFM growth workflow.
- Committed and pushed code commit `fdc4465` (`fix: attribute guide quote ctas`).
- Deployed production via Vercel project `afm-website`: `https://afm-website-lu9850csk-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com` and resolving on `https://www.airfreshmarketing.com`.
- Verified live `/guides/best-event-staffing-agency` and `/guides/brand-ambassador-hiring-guide` expose the new attributed quote-funnel links on the custom domain.
- Verified both guide quote URLs preserve `lead_source`/`lead_intent` in `localStorage.afm_attribution` without submitting a lead.
- Verified `https://airfreshmarketing.com/guides/best-event-staffing-agency` 308-redirects to the `www` canonical URL.

Next actions:
- Continue quote-intent `/contact` cleanup on high-intent non-footer CTAs such as `/portfolio/premier-protein`, `/hire-brand-ambassadors` inline consultation copy, and any partner pages that should represent buyer intent rather than partnership intake.

## 2026-05-14 09:52 MDT

Goal: continue remaining high-intent guide/location CTAs that still routed quote-intent visitors to the general contact page.

Shipped candidate:
- Updated `/industries` final “Get a Custom Quote” CTA to `/get-quote?source=industries&intent=custom-industry-quote` and tightened the supporting copy around staffing, sampling, and activation needs.
- Updated `/locations` headquarters and final project CTAs to attributed quote-funnel links with `source=locations` and distinct intent values, using the preferred `Button asChild` pattern.
- Updated `/guides/event-staffing-101` final “Get a Free Quote” CTA to `/get-quote?source=guide-event-staffing-101&intent=final-free-quote` while preserving the phone CTA.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Codex CLI was unavailable on this machine, so the pass was completed manually under the AFM growth workflow.
- Committed and pushed code/work-log commit `d339a09` (`fix: attribute industry location guide quote ctas`).
- Deployed production via Vercel project `afm-website`: `https://afm-website-3k7it4t2d-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com` and resolving on `https://www.airfreshmarketing.com`.
- Verified live `/industries`, `/locations`, and `/guides/event-staffing-101` expose the new attributed quote-funnel links on the custom domain.
- Verified `/get-quote?source=locations&intent=final-start-project` preserves `lead_source`/`lead_intent` in `localStorage.afm_attribution` without submitting a lead.
- Verified `https://airfreshmarketing.com/industries` 308-redirects to the `www` canonical URL.

Next actions:
- Continue high-intent CTA attribution on the remaining guide pages and evaluate `/locations` for an above-fold quote CTA or stronger city-selector conversion path.

## 2026-05-14 08:36 MDT

Goal: continue the high-intent CTA routing sweep from the prior next actions by capturing resource and portfolio readers who were still sent to the general contact page from buyer-intent CTAs.

Shipped candidate:
- Updated the `/resources` final consultation CTA from `/contact` to `/get-quote?source=resources&intent=final-free-consultation`.
- Updated the `/portfolio` final “Start Your Project” CTA from `/contact` to `/get-quote?source=portfolio&intent=final-start-project`.
- Converted both CTA buttons to the repo’s preferred `Button asChild` pattern so the anchor is the actionable element.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Codex CLI was unavailable on this machine, so the pass was completed manually under the AFM growth workflow.
- Committed and pushed code/work-log commit `8d0d121` (`fix: attribute resource portfolio quote ctas`).
- Deployed production via Vercel project `afm-website`: `https://afm-website-7zs8myg8c-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com` and resolving on `https://www.airfreshmarketing.com`.
- Verified live `/resources` and `/portfolio` expose the new attributed quote-funnel links on the custom domain.
- Verified `/get-quote?source=resources&intent=final-free-consultation` and `/get-quote?source=portfolio&intent=final-start-project` preserve `lead_source`/`lead_intent` in `localStorage.afm_attribution` without submitting a lead.
- Verified `https://airfreshmarketing.com/resources` 308-redirects to the `www` canonical URL.

Next actions:
- Continue remaining high-intent guide/location CTAs that still route buyer intent to `/contact`.

## 2026-05-13 22:13 MDT

Goal: continue the high-intent CTA routing sweep by capturing static blog readers who were still being sent to the general contact page from buyer-intent article CTAs.

Shipped candidate:
- Updated 123 buyer-intent static blog article CTAs from `/contact` to attributed `/get-quote` links using `source=blog-<slug>` and `intent=article-cta`.
- Updated the blog index empty-state “Get a Quote” link to `/get-quote?source=blog-index&intent=empty-state-quote`.
- Left the candidate-facing “Apply Now” CTA on `/blog/brand-ambassador-career` on `/contact` instead of routing job seekers into the quote funnel.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Codex CLI was unavailable on this machine (`codex: command not found`), so the pass was completed manually under the AFM growth workflow.
- Committed and pushed code/work-log commit `09526f5` (`fix: route blog ctas to quote funnel`).
- Deployed production via Vercel project `afm-website`: `https://afm-website-8850siz8p-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com` and resolving on `https://www.airfreshmarketing.com`.
- Verified live `/blog/bilingual-event-staff`, `/blog/what-is-experiential-marketing`, and `/blog` expose the new attributed quote-funnel links on the custom domain.
- Verified `https://airfreshmarketing.com/blog/bilingual-event-staff` 308-redirects to the `www` canonical URL, and `/get-quote?source=blog-bilingual-event-staff&intent=article-cta` preserves `lead_source`/`lead_intent` in `localStorage.afm_attribution` without submitting a lead.

Next actions:
- Continue high-intent CTA attribution on `/resources`, `/portfolio`, and any remaining quote-intent non-blog pages still using `/contact`.

## 2026-05-13 20:59 MDT

Goal: continue high-intent venue conversion work after the quote-prefill pass, starting with the `/venues` directory called out in prior next actions.

Shipped candidate:
- Added page-level SEO metadata for `/venues` targeting convention center event staffing and venue staffing nationwide, with an explicit canonical to `https://www.airfreshmarketing.com/venues`.
- Added an above-the-fold hero CTA, “Get Venue Staffing Quote,” routing directly to `/get-quote?source=venues&intent=hero-venue-staffing-quote`.
- Updated the final “Get Free Quote” CTA from `/contact` to `/get-quote?source=venues&intent=final-free-quote`, preserving the direct phone CTA and informational trade show staffing link.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code/work-log commit `74ce9c8` (`fix: attribute venues quote ctas`).
- Deployed production via Vercel project `afm-website`: deployment `https://afm-website-p1spvl1os-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com` and resolving on `https://www.airfreshmarketing.com`.
- Verified live `/venues` has the convention center event staffing title/canonical and exposes both venue-attributed quote links with `source=venues` and distinct intent values.
- Verified `/get-quote?source=venues&intent=hero-venue-staffing-quote` loads the quote funnel and preserves `lead_source=venues` plus `lead_intent=hero-venue-staffing-quote` in `localStorage.afm_attribution` without submitting a lead.
- Verified apex `https://airfreshmarketing.com/venues` 308-redirects to `https://www.airfreshmarketing.com/venues`.

Next actions:
- Continue CTA attribution on `/industries`, `/portfolio`, `/resources`, and high-intent blog CTAs that still route buyer intent to `/contact`.

## 2026-05-13 19:40 MDT

Goal: improve the `/get-quote` conversion path and make high-intent CTA attribution immediately useful inside the quote form.

Shipped candidate:
- Added source/intent inference on `/get-quote` so attributed links from service, event, staffing, sampling, retail, festival, sports, tour, and brand-activation pages pre-select the closest event type and staff roles when visitors advance to event/staffing steps.
- Added a compact trust strip under the quote hero highlighting 24-hour response, nationwide vetted teams, and faster scoped quotes.
- Preserved existing UTM/source/intent localStorage attribution and Formspree payload fields; no fake lead was submitted.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Local browser verification confirmed `/get-quote?source=event-staffing-agency&intent=hero` stores `lead_source`/`lead_intent` and pre-selects `Corporate Event` after step 1.

Next actions:
- Commit, push, and verify production custom domain after Vercel deploys.
- Next pass: continue improving `/get-quote` and high-intent CTA routing, especially any bare quote links that still lack source/intent.

## 2026-05-13 18:23 MDT

Goal: continue the quote-funnel attribution sweep on scalable blog/resource conversion paths.

Shipped candidate:
- Updated the shared `BlogInternalLinks` quote card used across many static blog posts so the quote CTA keeps visitors in `/get-quote` with `source=blog-internal-links` and `intent=quote-card` attribution instead of an untagged bare funnel link.
- Updated the blog index success-story CTA from `/contact` to `/get-quote?source=blog-index&intent=success-story-consultation`.
- Updated the event planning checklist body CTA from `/contact` to an attributed quote-funnel link with clearer event-staffing quote copy.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.

Next actions:
- Commit, push, and verify the production custom domain after Vercel deploys.
- Continue routing remaining high-intent resource, review-widget, and navigation-adjacent quote CTAs with source/intent attribution while leaving true Contact navigation alone.

## 2026-05-10 22:13 MDT

Goal: improve quote funnel conversion on the main `/get-quote` path.

Shipped candidate:
- Fixed staff role selection in the multi-step quote form so clicking the checkbox no longer double-toggles the selected role.
- This removes a conversion blocker on step 3 of the quote funnel where users could fail to select needed staff roles.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,237 sitemap URLs.
- `npm run lint` attempted, but repo lint script is incompatible with current Next CLI and fails with: `Invalid project directory provided, no such directory: .../lint`.

Next actions:
- Commit, push, deploy to Vercel production, and verify `/get-quote` live.
- Fix stale `next lint` script/tooling in a separate cleanup if needed.
- Continue reviewing high-intent pages for CTAs that still send users to `/contact` instead of `/get-quote`.

## 2026-05-10 23:36 MDT

Goal: send high-intent organic traffic directly into the quote funnel instead of the general contact page.

Shipped candidate:
- Updated the `/event-staffing-near-me` page's primary quote CTAs from `/contact` to `/get-quote`.
- Added source/intent query parameters to the quote links so future analytics can distinguish hero, custom staffing, unlisted city, SEO body, and final CTA clicks.
- Left the footer Contact link as `/contact` because it is navigational, not a conversion CTA.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Pending: deploy and verify live.

Next actions:
- Continue the CTA sweep on other high-intent service pages after this deploy verifies.

## 2026-05-12 06:06 MDT

Goal: keep pushing the quote funnel / CTA routing work nonstop, starting with the next high-intent page from the prior audit.

Shipped candidate:
- Updated `/hire-brand-ambassadors` so six quote-intent CTAs route directly to `/get-quote` instead of `/contact`.
- Added source/intent query parameters for hero, process CTA, mid-page CTA, pricing custom quote, SEO body, and final CTA clicks.
- Left navigational/non-quote Contact links alone.
- Resumed the recurring `Air Fresh Website Growth Codex Loop` cron every 120 minutes with the website-only growth/conversion priority stack.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code commit `e95501e` (`fix: route ambassador quote ctas to funnel`).
- Deployed production via Vercel project `afm-website`: `https://afm-website-e2gc4xld0-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com`.
- Verified live on `https://www.airfreshmarketing.com/hire-brand-ambassadors`: all six quote-intent links point to `/get-quote?source=hire-brand-ambassadors&intent=...`.
- Verified `/get-quote?source=hire-brand-ambassadors&intent=hero` loads the quote funnel H1.

Next actions:
- Continue CTA routing and quote funnel audit on `/event-staffing-agency`, `/services`, and dynamic city/service pages.

## 2026-05-12 06:58 MDT

Goal: push the next highest-intent quote funnel routing fix after `/hire-brand-ambassadors`.

Shipped candidate:
- Updated `/event-staffing-agency` so six quote-intent CTAs route directly to `/get-quote` instead of `/contact`.
- Added source/intent query parameters for hero, custom solution, process brief, pricing custom quote, SEO body, and final CTA clicks.
- Kept non-quote/internal informational links focused on their destination pages.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.

Next actions:
- Commit, push, deploy/verify production.
- Continue CTA routing and quote funnel audit on `/services`, `/services/food-beverage-sampling`, `/services/trade-show-staffing`, and dynamic city/service pages.

## 2026-05-12 07:16 MDT

Goal: continue quote-intent CTA routing on high-scale dynamic local landing pages.

Shipped candidate:
- Updated dynamic city pages (`/cities/[slug]`) so hero and final quote CTAs route to `/get-quote` with source/intent attribution instead of `/contact`.
- Updated dynamic city-service pages (`/cities/[slug]/[service]`) so hero, sidebar, and final quote CTAs route to `/get-quote` with source/intent attribution.
- Updated canonical city-service SEO pages (`/city-services/[slug]`) so hero and final quote CTAs route to `/get-quote` with source/intent attribution.
- Changed the city-page final “Call (303) 720-6060” action from a tracked contact-page link to a direct `tel:` link, preserving clear phone intent.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.

Next actions:
- Commit, push, deploy/verify production.
- Continue CTA routing on `/services`, `/services/food-beverage-sampling`, `/services/trade-show-staffing`, and event/venue dynamic pages.

## 2026-05-12 08:34 MDT

Goal: continue high-intent attribution work after sitemap verification, starting with event pages showing Search Console opportunity.

Shipped candidate:
- Updated dynamic event pages (`/events/[slug]`) so hero and final quote CTAs route to `/get-quote` with per-event source/intent attribution.
- This covers pages like `/events/adobe-max-2026-los-angeles`, which showed high impressions and low CTR in the latest GSC pass, so any quote clicks can now be tied back to the exact event page and CTA location.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.

Next actions:
- Commit, push, deploy/verify production.
- Continue CTA attribution on dynamic event-service pages and venue pages.

## 2026-05-12 08:44 MDT

Goal: make the quote funnel preserve the new `source` / `intent` CTA attribution parameters through submission.

Shipped candidate:
- Extended `lib/lead-attribution.ts` to capture and persist `source` and `intent` query params as `lead_source` and `lead_intent`.
- Updated `/get-quote` Formspree payload to send `_leadSource` and `_leadIntent` with each quote request.
- This makes prior CTA routing work measurable by exact landing page and CTA placement, instead of relying only on the full source URL.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code commit `cf89463` (`fix: preserve quote cta attribution`).
- Deployed production via Vercel project `afm-website`: `https://afm-website-7umfw81ps-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com`.
- Verified live on `https://www.airfreshmarketing.com/get-quote?source=cron-attribution-test&intent=hero-test`: status 200, quote funnel H1 present, and browser localStorage captures `lead_source=cron-attribution-test` + `lead_intent=hero-test` without submitting a lead.
- Verified apex `https://airfreshmarketing.com/get-quote?...` resolves to the `www` custom domain and returns the same quote funnel content.

Next actions:
- Continue high-intent CTA routing on `/services/food-beverage-sampling`, `/services/trade-show-staffing`, and venue/event-service pages.


## 2026-05-12 10:08 MDT

Goal: continue high-intent quote CTA routing on the next priority product sampling/service page.

Shipped candidate:
- Updated `/services/food-beverage-sampling` so 10 sampling campaign quote-intent CTAs route directly into `/get-quote` instead of `/contact` or unattributed quote links.
- Added consistent `source=food-beverage-sampling` and intent values for hero, secondary hero, retail-needs, mid-page, why-choose, city-not-listed, related-card, final CTA, final secondary, and final text quote paths.
- Left true navigation links such as pricing, city/service links, and the phone `tel:` action untouched.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code commit `e914eeb` (`fix: route sampling quote ctas to funnel`).
- Deployed production via Vercel project `afm-website`: `https://afm-website-2btffg4k8-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com`.
- Verified live on `https://www.airfreshmarketing.com/services/food-beverage-sampling`: all 10 sampling quote/campaign/contact-intent links route to `/get-quote?source=food-beverage-sampling&intent=...` while footer/navigation Contact remains `/contact`.
- Verified `/get-quote?source=food-beverage-sampling&intent=hero` loads the quote funnel and preserves `lead_source=food-beverage-sampling` plus `lead_intent=hero` in `localStorage.afm_attribution` without submitting a lead.

Next actions:
- Continue CTA attribution on `/services/trade-show-staffing`, venue pages, and dynamic event-service pages.

## 2026-05-12 11:21 MDT

Goal: continue the quote-funnel routing sweep on high-scale dynamic event-service pages.

Shipped candidate:
- Updated `/events/[slug]/[service]` so hero, sidebar custom quote, and final quote CTAs route directly to `/get-quote` instead of `/contact`.
- Added source/intent attribution with both event and service slugs, e.g. `source=events-adobe-max-2026-los-angeles-brand-ambassadors` plus intent values for hero, sidebar custom quote, and final CTA.
- This covers 1,024 event-service pages generated in the build, including event-specific brand ambassador, event staff, promotional model, and trade show staff combinations.
- Preserved the concurrent neighborhood-page CTA routing improvement so `/neighborhoods/[neighborhood]` hero and final CTAs now route to attributed `/get-quote` URLs instead of `/contact`.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.

Next actions:
- Commit, push, deploy/verify production.
- Continue CTA attribution on venue pages and `/services/trade-show-staffing`.

## 2026-05-12 11:23 MDT

Goal: extend quote-funnel attribution to the remaining high-scale neighborhood service SEO pages.

Shipped candidate:
- Updated `/neighborhoods/[neighborhood]/[service]` so hero and final “Get Free Quote” CTAs route directly into `/get-quote` instead of `/contact`.
- Added per-page source/intent attribution such as `source=neighborhood-soho-brand-ambassadors&intent=hero` and `intent=final-cta`.
- This covers 175 neighborhood-service landing pages for hyper-local brand ambassador, event staffing, promotional model, street team, and product sampling searches.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code commit `f905f36` (`fix: route neighborhood service quote ctas to funnel`).
- Deployed production via Vercel project `afm-website` and verified the custom domain `https://www.airfreshmarketing.com`.
- Verified live on `https://www.airfreshmarketing.com/neighborhoods/soho/brand-ambassadors`: both visible “Get Free Quote” CTAs route to `/get-quote?source=neighborhood-soho-brand-ambassadors&intent=hero` and `intent=final-cta`.
- Verified `/get-quote?source=neighborhood-soho-brand-ambassadors&intent=hero` loads the quote funnel and preserves `lead_source=neighborhood-soho-brand-ambassadors` plus `lead_intent=hero` in `localStorage.afm_attribution` without submitting a lead.

Next actions:
- Continue CTA attribution on venue pages and `/services/trade-show-staffing`.

## 2026-05-12 12:55 MDT

Goal: continue high-scale quote-funnel routing on venue SEO pages.

Shipped candidate:
- Updated dynamic venue pages (`/venues/[slug]`) so hero and final quote CTAs route directly into `/get-quote` instead of `/contact`.
- Updated dynamic venue-service pages (`/venues/[slug]/[service]`) so hero, sidebar custom quote, and final quote CTAs route to `/get-quote`.
- Added source/intent attribution with venue and service slugs, e.g. `source=venue-las-vegas-convention-center-brand-ambassadors` plus `intent=hero`, `sidebar-custom-quote`, or `final-cta`.
- This covers 46 venue landing pages and 552 generated venue-service pages in the current build.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code/work-log commit `9aa0b8d` (`fix: route venue quote ctas to funnel`).
- Deployed production via Vercel project `afm-website`: deployment `https://afm-website-cnrqm64xk-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com`.
- Verified live on `https://www.airfreshmarketing.com/venues/las-vegas-convention-center`: both visible quote CTAs route to `/get-quote?source=venue-las-vegas-convention-center&intent=hero` and `intent=final-cta`.
- Verified live on `https://www.airfreshmarketing.com/venues/las-vegas-convention-center/brand-ambassadors`: hero, sidebar, and final quote CTAs route to `/get-quote?source=venue-las-vegas-convention-center-brand-ambassadors&intent=...`.
- Verified `/get-quote?source=venue-las-vegas-convention-center-brand-ambassadors&intent=hero` loads the quote funnel and preserves `lead_source=venue-las-vegas-convention-center-brand-ambassadors` plus `lead_intent=hero` in `localStorage.afm_attribution` without submitting a lead.

Next actions:
- Continue CTA attribution on `/services/trade-show-staffing`, `/pricing`, and remaining high-intent static service pages.

## 2026-05-12 14:09 MDT

Goal: continue quote-funnel attribution on comparison pages where competitor-evaluation visitors are close to requesting pricing.

Shipped candidate:
- Updated the `/compare` hub plus all 24 competitor comparison pages so final “Get a Free Quote” CTAs route directly into `/get-quote` instead of `/contact`.
- Added source/intent attribution for each comparison page, e.g. `source=compare-advantage-solutions&intent=final-cta`.
- Updated comparison-page related “Request a Quote” links to `/get-quote` with `intent=related-request-quote` where present.
- This covers 37 high-intent quote links across the comparison section while leaving service, pricing, portfolio, and other informational links unchanged.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code/work-log commit `5c9d197` (`fix: route comparison quote ctas to funnel`).
- Deployed production via Vercel project `afm-website`: deployment `https://afm-website-44gqyz6ur-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com`.
- Verified live on `https://www.airfreshmarketing.com/compare/advantage-solutions`: visible “Request a Quote” and “Get a Free Quote” links route to `/get-quote?source=compare-advantage-solutions&intent=related-request-quote` and `intent=final-cta`.
- Verified live on `https://www.airfreshmarketing.com/compare`: final “Get a Free Quote” routes to `/get-quote?source=compare&intent=final-cta`.
- Verified `/get-quote?source=compare-advantage-solutions&intent=final-cta` loads the quote funnel and preserves `lead_source=compare-advantage-solutions` plus `lead_intent=final-cta` in `localStorage.afm_attribution` without submitting a lead.

Next actions:
- Continue CTA attribution on `/services/trade-show-staffing`, `/pricing`, and remaining high-intent static service pages.

## 2026-05-12 15:33 MDT

Goal: continue quote-funnel attribution on the next high-intent static service page.

Shipped candidate:
- Updated `/services/trade-show-staffing` so five quote-intent CTAs route directly into `/get-quote` instead of `/contact`.
- Added consistent `source=trade-show-staffing` and intent values for hero, venue-location, mid-page, final CTA, and final text quote paths.
- Left informational links such as case studies, event management, pricing, related service links, and the phone `tel:` action unchanged.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code/work-log commit `2a3be0f` (`fix: route trade show quote ctas to funnel`).
- Deployed production via Vercel project `afm-website`: deployment `https://afm-website-4jw6dgx84-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com`.
- Verified live on `https://www.airfreshmarketing.com/services/trade-show-staffing`: visible quote-intent links route to `/get-quote?source=trade-show-staffing&intent=hero`, `venue-location`, `mid-page`, `final-cta`, and `final-text`; footer Contact remains `/contact`.
- Verified `/get-quote?source=trade-show-staffing&intent=hero` loads the quote funnel and preserves `lead_source=trade-show-staffing` plus `lead_intent=hero` in `localStorage.afm_attribution` without submitting a lead.
- Verified apex `https://airfreshmarketing.com/services/trade-show-staffing` resolves to the `www` custom domain and contains the attributed CTA URLs.

Next actions:
- Continue CTA attribution on `/pricing`, `/services`, and remaining high-intent static service pages.

## 2026-05-12 16:56 MDT

Goal: continue quote-funnel attribution on high-scale state SEO pages.

Shipped candidate:
- Updated dynamic state pages (`/states/[state]`) so hero and final “Get Free Quote” CTAs route directly into `/get-quote` instead of `/contact`.
- Updated dynamic state-service pages (`/states/[state]/[service]`) so hero and final quote CTAs route into `/get-quote` with both state and service slugs in attribution.
- Added source/intent patterns such as `source=state-california&intent=hero` and `source=state-california-brand-ambassadors&intent=final-cta`, covering 51 state pages plus 459 state-service pages.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.

Next actions:
- Commit, push, deploy/verify production.
- Continue CTA attribution on `/pricing`, `/services`, and remaining high-intent static service pages.

## 2026-05-12 17:18 MDT

Goal: continue converting proof/case-study traffic into attributed quote-funnel sessions.

Shipped candidate:
- Updated the case-studies hub final “Start Your Project” CTA from `/contact` to `/get-quote?source=case-studies&intent=final-cta`.
- Updated dynamic case-study detail pages (`/case-studies/[id]`) so the final “Start Your Project” CTA routes to `/get-quote?source=case-study-${caseStudy.id}&intent=final-cta`.
- Kept portfolio/view-more-work navigation unchanged.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.

Next actions:
- Commit, push, deploy/verify production.
- Continue CTA attribution on `/pricing`, `/services`, and remaining high-intent static service pages.

## 2026-05-12 18:10 MDT

Goal: keep moving high-intent service/event/industry visitors into the attributed quote funnel.

Shipped candidate:
- Updated the `/services` hub hero and final conversion CTAs from `/contact` to `/get-quote?source=services&intent=...`.
- Updated the `/events` directory custom event/secondary Olympics CTAs to `/get-quote?source=events-directory&intent=...` while leaving phone and event-detail navigation alone.
- Updated dynamic industry pages (`/industries/[industry]`) so hero/final quote CTAs preserve `source=industry-${industrySlug}` with hero/final intent.
- Updated dynamic industry-city pages (`/industries/[industry]/[city]`) so hero and final quote CTAs preserve both industry and city slugs, covering 320 generated local industry pages.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.

Next actions:
- Commit, push, deploy/verify production.
- Continue CTA attribution on `/pricing`, `/team`, `/about`, ROI/checklist tools, and high-impression blog posts that still use quote-intent `/contact` links.

## 2026-05-12 19:37 MDT

Goal: continue static high-intent service page CTA attribution after the industry/event sweep.

Shipped candidate:
- Updated `/corporate-event-staffing` so four quote-intent CTAs route to `/get-quote?source=corporate-event-staffing&intent=...` instead of unattributed quote/contact paths.
- Added attribution for hero, city-coverage, trust-section, and final CTA paths.
- Changed visible “Call (303) 720-6060” actions from `/contact` to direct `tel:+13037206060` links so phone-intent users are not detoured through the contact page.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.

Next actions:
- Commit, push, deploy/verify production.
- Continue CTA attribution on `/pricing`, `/team`, `/about`, ROI/checklist tools, and high-impression blog posts that still use quote-intent `/contact` links.


## 2026-05-12 20:50 MDT

Goal: route pricing-page quote intent directly into the attributed quote funnel.

Shipped candidate:
- Updated `/pricing` so three quote-intent CTAs route to `/get-quote?source=pricing&intent=...` instead of `/contact`.
- Added attribution for hero, freelance comparison, and final CTA clicks.
- Left informational navigation such as rate tables, locations, resources, and services unchanged.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code/work-log commit `09548fb` (`fix: route pricing quote ctas to funnel`).
- Deployed production via Vercel project `afm-website`: deployment `https://afm-website-e688sxuuw-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com`.
- Verified live on `https://www.airfreshmarketing.com/pricing`: hero, freelance comparison, and final quote CTAs route to `/get-quote?source=pricing&intent=...`.
- Verified apex `https://airfreshmarketing.com/pricing` resolves to the `www` custom domain and contains the attributed CTA URLs.
- Verified `/get-quote?source=pricing&intent=hero` loads the quote funnel and preserves `lead_source=pricing` plus `lead_intent=hero` in `localStorage.afm_attribution` without submitting a lead.

Next actions:
- Continue CTA attribution on `/team`, `/about`, ROI/checklist tools, and high-impression blog posts that still use quote-intent `/contact` links.


## 2026-05-12 22:06 MDT

Goal: continue quote-funnel attribution on remaining high-intent trust/tool pages after the pricing sweep.

Shipped candidate:
- Updated `/about` so the hero “Start Your Project” and final “Get Started Today” CTAs route to `/get-quote?source=about&intent=...` instead of `/contact`.
- Updated `/team` so the final “Start a Project” CTA routes to `/get-quote?source=team&intent=final-cta`.
- Updated `/tools/roi-calculator` so results, SEO body, and final consultation CTAs route into `/get-quote?source=roi-calculator&intent=...` instead of the general contact page.
- Left informational service/about links and normal navigation untouched.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code/work-log commit `6008f9b` (`fix: route trust page ctas to quote funnel`).
- Deployed production via Vercel project `afm-website`: deployment `https://afm-website-akdfubuna-joey-5223s-projects.vercel.app`, custom domain verified at `https://www.airfreshmarketing.com`.
- Verified live on `/about`, `/team`, and `/tools/roi-calculator`: all changed CTAs now point to attributed `/get-quote?source=...&intent=...` URLs.
- Verified `/get-quote?source=roi-calculator&intent=final-consultation` loads the quote funnel and preserves `lead_source=roi-calculator` plus `lead_intent=final-consultation` in `localStorage.afm_attribution` without submitting a lead.

Next actions:
- Continue CTA attribution on `/staffing-for`, `/staffing-for/[event]`, `/technology`, and high-impression blog/internal link modules.

## 2026-05-12 23:26 MDT

Goal: continue quote-funnel attribution on the high-intent `/staffing-for` event-staffing directory and event detail template.

Shipped candidate:
- Updated `/staffing-for` so hero and final quote CTAs route to `/get-quote?source=staffing-for&intent=...` instead of unattributed quote links.
- Updated dynamic `/staffing-for/[event]` pages so urgency, hero, featured case-study, sidebar quote, and final quote CTAs route into `/get-quote` instead of `/contact`.
- Added per-event attribution such as `source=staffing-for-ces&intent=hero`, while preserving true `Contact Us` navigation and phone `tel:` actions.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.

Next actions:
- Commit, push, deploy/verify production.
- Continue CTA attribution on `/technology` and high-impression blog/internal link modules.

## 2026-05-13 00:40 MDT

Goal: continue quote-funnel attribution on high-intent service pages that still had unattributed quote CTAs or phone CTAs routed through `/contact`.

Shipped candidate:
- Updated `/guerrilla-marketing-agency` so the hero, pricing, and final quote CTAs route to `/get-quote?source=guerrilla-marketing-agency&intent=...` instead of unattributed quote links.
- Changed visible phone CTA buttons from `/contact` to direct `tel:+13037206060` actions.
- Converted the changed CTA buttons to the project-preferred `Button asChild` pattern.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code/work-log commit `154b2c3` (`fix: attribute guerrilla marketing ctas`).
- Deployed production via Vercel project `afm-website`: deployment `https://afm-website-gyc3o4cqx-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com`.
- Verified live on `https://www.airfreshmarketing.com/guerrilla-marketing-agency`: hero, pricing, and final quote CTAs route to attributed `/get-quote?source=guerrilla-marketing-agency&intent=...` URLs; visible phone CTAs route to `tel:+13037206060`.
- Verified `/get-quote?source=guerrilla-marketing-agency&intent=hero` loads the quote funnel and preserves `lead_source=guerrilla-marketing-agency` plus `lead_intent=hero` in `localStorage.afm_attribution` without submitting a lead.
- Verified apex `https://airfreshmarketing.com/guerrilla-marketing-agency` resolves to the `www` custom domain and contains the attributed CTA URL plus direct phone links.

Next actions:
- Continue CTA attribution on `/technology`, `/event-marketing-agency`, `/promotional-staffing-agency`, and high-impression blog/internal link modules.

## 2026-05-13 01:58 MDT

Goal: continue quote-funnel attribution on the next high-intent service page after the guerrilla marketing sweep.

Shipped candidate:
- Updated `/event-marketing-agency` so hero, unlisted-city, industry-fit, and final quote CTAs route to `/get-quote?source=event-marketing-agency&intent=...` instead of unattributed quote/contact paths.
- Changed above-fold and final phone/schedule-call actions to direct `tel:+13037206060` links so call-intent visitors are not detoured through `/contact`.
- Preserved informational internal links and normal footer/navigation behavior.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code/work-log commit `53792ff` (`fix: attribute event marketing ctas`).
- Deployed production via Vercel project `afm-website`: deployment `https://afm-website-ozuqyv1zt-joey-5223s-projects.vercel.app`, custom domain verified at `https://www.airfreshmarketing.com`.
- Verified live on `https://www.airfreshmarketing.com/event-marketing-agency`: hero, unlisted-city, industry-fit, and final quote CTAs route to attributed `/get-quote?source=event-marketing-agency&intent=...` URLs; call CTAs route to `tel:+13037206060`.
- Verified apex `https://airfreshmarketing.com/event-marketing-agency` resolves to the `www` custom domain and contains the attributed CTA URLs plus direct phone links.
- Verified `/get-quote?source=event-marketing-agency&intent=hero` loads the quote funnel and preserves `lead_source=event-marketing-agency` plus `lead_intent=hero` in `localStorage.afm_attribution` without submitting a lead.

Next actions:
- Continue CTA attribution on `/promotional-staffing-agency`, `/technology`, and high-impression blog/internal link modules.



## 2026-05-13 03:17 MDT

Goal: continue quote-funnel attribution on the next high-intent service page after the event marketing sweep.

Shipped candidate:
- Updated `/promotional-staffing-agency` so seven quote-intent CTAs route to `/get-quote?source=promotional-staffing-agency&intent=...` instead of unattributed quote/contact paths.
- Added attribution for hero, custom staffing, pricing custom quote, unlisted city, FAQ pricing, FAQ specialized role, and final CTA clicks.
- Changed visible phone CTA buttons from `/contact` to direct `tel:+13037206060` links so call-intent visitors are not detoured through the contact page.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code/work-log commit for `fix: attribute promotional staffing ctas`.
- Deployed production via Vercel project `afm-website`: deployment `https://afm-website-9e0lqhg0z-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com`.
- Verified live on `https://www.airfreshmarketing.com/promotional-staffing-agency`: all seven quote-intent links now include `source=promotional-staffing-agency` with distinct intent values; visible phone CTAs route to `tel:+13037206060`.
- Verified apex `https://airfreshmarketing.com/promotional-staffing-agency` resolves to the `www` custom domain.
- Verified `/get-quote?source=promotional-staffing-agency&intent=hero` loads the quote funnel and preserves `lead_source=promotional-staffing-agency` plus `lead_intent=hero` in `localStorage.afm_attribution` without submitting a lead.

Next actions:
- Continue CTA attribution on `/technology`, `/field-marketing-agency`, `/mobile-marketing-tours`, and high-impression blog/internal link modules.

## 2026-05-13 04:45 MDT

Goal: improve homepage conversion and make the homepage proposal-builder path land in the dedicated quote funnel instead of the general contact form.

Shipped candidate:
- Sharpened the homepage hero above-fold positioning around event staffing, brand ambassadors, street teams, product sampling, and experiential marketing.
- Changed the primary hero CTA from a vague strategy-audit ask to `Get an Event Staffing Quote` with `source=homepage&intent=hero-event-staffing-quote` attribution.
- Routed the homepage `ActivationPlanner` / proposal-builder CTA to `/get-quote` with `source=activation-planner&intent=proposal-builder` plus planner details.
- Added `/get-quote` prefill support for planner query params so service type, city, date, staff count, budget, roles, and planner summary carry into the quote form without submitting a fake lead.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Local browser verification confirmed the homepage H1/CTA updates and the proposal-builder link target.
- Local quote-funnel verification confirmed planner params prefill step 2 fields (`Sampling Campaign`, `Denver`, `2026-07-04`) without submitting a lead.
- Committed and pushed code/work-log commit `79f7f30` (`feat: route homepage planner into quote funnel`).
- Deployed production via Vercel project `afm-website`: deployment `https://afm-website-f3o9oxly4-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com`.
- Verified live on `https://www.airfreshmarketing.com/`: H1 now leads with event staffing + brand ambassadors, hero CTA is `Get an Event Staffing Quote`, and the proposal-builder CTA routes to attributed `/get-quote?source=activation-planner&intent=proposal-builder`.
- Verified `/get-quote?source=activation-planner&intent=proposal-builder&service=Product+Sampling&market=Denver&date=2026-07-04&team=12&budget=$10k+-+$25k&message=Planner+summary` preserves `lead_source=activation-planner` and `lead_intent=proposal-builder` in localStorage and prefills quote form event fields without submitting a lead.
- Verified apex `https://airfreshmarketing.com/` 308-redirects to `https://www.airfreshmarketing.com/`.

Next actions:
- Continue CTA attribution on `/technology`, `/field-marketing-agency`, `/mobile-marketing-tours`, and high-impression blog/internal link modules.

## 2026-05-13 05:57 MDT

Goal: continue quote-funnel attribution on the high-intent technology proof page.

Shipped candidate:
- Updated `/technology` so the hero “See a Demo” CTA routes to `/get-quote?source=technology&intent=hero-demo` instead of the general contact page.
- Updated the final “Schedule a Demo” CTA to `/get-quote?source=technology&intent=final-demo` so demo/quote intent is measurable through the quote funnel.
- Normalized the visible phone CTA to `tel:+13037206060` for consistent direct call routing.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code/work-log commit `7089fbe` (`fix: attribute technology demo ctas`).
- Deployed production via Vercel project `afm-website`: deployment `https://afm-website-iffh3vivo-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com`.
- Verified live on `https://www.airfreshmarketing.com/technology`: hero and final demo CTAs route to attributed `/get-quote?source=technology&intent=...` URLs, and the visible phone CTA routes to `tel:+13037206060`.
- Verified `/get-quote?source=technology&intent=hero-demo` loads the quote funnel and preserves `lead_source=technology` plus `lead_intent=hero-demo` in `localStorage.afm_attribution` without submitting a lead.
- Verified apex `https://airfreshmarketing.com/technology` 308-redirects to `https://www.airfreshmarketing.com/technology`.

Next actions:
- Continue CTA attribution on `/field-marketing-agency`, `/mobile-marketing-tours`, and high-impression blog/internal link modules.

## 2026-05-13 07:12 MDT

Goal: continue high-intent CTA attribution on `/mobile-marketing-tours` after the technology proof-page pass.

Shipped candidate:
- Added a `quoteHref()` helper for `/mobile-marketing-tours` so quote/proposal CTAs consistently route to `/get-quote?source=mobile-marketing-tours&intent=...`.
- Updated the hero tour proposal CTA, tour-format recommendation link, route-planning CTA, related-links quote pill, final tour proposal CTA, and strategy-call CTA to carry distinct quote-funnel intent values.
- Left navigational `Contact Us` and direct phone links alone.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code/work-log commit `fee8679` (`fix: attribute mobile tour ctas`).
- Deployed production via Vercel project `afm-website`: deployment `https://afm-website-gfhxxy12y-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com`.
- Verified live on `https://www.airfreshmarketing.com/mobile-marketing-tours`: all six proposal/recommendation/planning/strategy quote CTAs route to `/get-quote?source=mobile-marketing-tours&intent=...` with distinct intent values.
- Verified `/get-quote?source=mobile-marketing-tours&intent=hero-tour-proposal` loads the quote funnel and preserves `lead_source=mobile-marketing-tours` plus `lead_intent=hero-tour-proposal` in `localStorage.afm_attribution` without submitting a lead.
- Verified apex `https://airfreshmarketing.com/mobile-marketing-tours` resolves to `https://www.airfreshmarketing.com/mobile-marketing-tours`.

Next actions:
- Continue CTA attribution on `/field-marketing-agency`, service pages with remaining quote-intent `/contact` links, and high-impression blog/internal link modules.

## 2026-05-13 08:33 MDT

Goal: continue high-intent quote-funnel attribution on `/brand-activation-agency`.

Shipped candidate:
- Added a page-level `quoteHref()` helper for `/brand-activation-agency`.
- Updated five activation/proposal CTAs from bare `/get-quote` links to `/get-quote?source=brand-activation-agency&intent=...`.
- Preserved navigational service links and direct phone CTAs; no fake lead submissions.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code/work-log commit `e974033` (`fix: attribute brand activation ctas`).
- Deployed production via Vercel project `afm-website`: deployment `https://afm-website-55wdbia1g-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com`.
- Verified live on `https://www.airfreshmarketing.com/brand-activation-agency`: all five activation/proposal CTAs route to `/get-quote?source=brand-activation-agency&intent=...` with distinct intent values.
- Verified `/get-quote?source=brand-activation-agency&intent=hero-activation-proposal` loads the quote funnel and preserves `lead_source=brand-activation-agency` plus `lead_intent=hero-activation-proposal` in `localStorage.afm_attribution` without submitting a lead.
- Verified apex `https://airfreshmarketing.com/brand-activation-agency` 308-redirects to `https://www.airfreshmarketing.com/brand-activation-agency`.

Next actions:
- Continue CTA attribution on `/field-marketing-agency`, `/brand-ambassador-agency`, and remaining high-intent service pages with bare `/get-quote` links.

## 2026-05-13 09:47 MDT

Goal: continue high-intent quote CTA routing and attribution on the next major service landing page.

Shipped candidate:
- Updated `/experiential-marketing-agency` so seven quote-intent CTAs use attributed `/get-quote` URLs instead of the bare quote path.
- Added a local `quoteHref()` helper with `source=experiential-marketing-agency` and unique intent values for hero, activation-type body, process, custom-market, partner-selection, and final CTA clicks.
- Preserved informational/internal links and phone CTA behavior; no fake lead submissions.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed to `main`.
- Deployed production with Vercel CLI: `https://afm-website-koqjd23nk-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com` and resolving on `https://www.airfreshmarketing.com`.
- Verified live `/experiential-marketing-agency` exposes all seven attributed quote links and `/get-quote?source=experiential-marketing-agency&intent=hero-campaign-proposal` loads the quote funnel without submitting a lead.

Next actions:
- Continue CTA attribution sweep on `/brand-activation-agency` remaining resource CTA and `/experiential-marketing-agency` adjacent service pages if Search Console access remains unavailable.

## 2026-05-13 11:06 MDT

Goal: continue high-intent quote-funnel attribution on `/field-marketing-agency`, the next major service page called out by the prior run.

Shipped candidate:
- Added a local `quoteHref()` helper for `/field-marketing-agency` with `source=field-marketing-agency` and unique intent values.
- Updated six quote-intent CTAs from bare `/get-quote` or `/contact` routes to attributed quote-funnel URLs: hero, custom strategy, three pricing cards, and final proposal.
- Normalized visible phone CTAs to direct `tel:+13037206060` links and preserved navigational Contact links elsewhere.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code/work-log commit `00df500` (`fix: attribute field marketing ctas`).
- Deployed production via Vercel project `afm-website`: deployment `https://afm-website-o9iku4pzl-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com` and verified on `https://www.airfreshmarketing.com`.
- Verified live `/field-marketing-agency` exposes all six attributed quote links with `source=field-marketing-agency` and distinct `intent` values; visible section phone CTAs route to `tel:+13037206060`.
- Verified `/get-quote?source=field-marketing-agency&intent=hero-field-marketing-quote` loads the quote funnel and preserves `lead_source=field-marketing-agency` plus `lead_intent=hero-field-marketing-quote` in `localStorage.afm_attribution` without submitting a lead.
- Verified apex `https://airfreshmarketing.com/field-marketing-agency` resolves to the `www` custom domain.

Next actions:
- Continue CTA attribution on `/brand-ambassador-agency`, remaining service pages with bare quote links, and high-intent blog CTAs.

## 2026-05-13 12:20 MDT

Goal: continue high-intent quote-funnel attribution on `/brand-ambassador-agency`, the next page called out by the prior run.

Shipped candidate:
- Added a local `quoteHref()` helper with `source=brand-ambassador-agency` and unique intent values.
- Updated six quote-intent CTAs from bare `/get-quote` or `/contact` routes to attributed quote-funnel URLs: hero, custom ambassador type, campaign brief, pricing custom quote, SEO body proposal, and final CTA.
- Normalized visible phone CTAs to direct `tel:+13037206060` links while leaving footer/global Contact navigation unchanged.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code/work-log commit `666026e` (`fix: attribute brand ambassador agency ctas`).
- Deployed production via Vercel project `afm-website`: deployment `https://afm-website-k96oo84gd-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com` and resolving on `https://www.airfreshmarketing.com`.
- Verified live `/brand-ambassador-agency` exposes all six attributed quote links with `source=brand-ambassador-agency` and distinct `intent` values; visible phone CTAs route to `tel:+13037206060`.
- Verified `/get-quote?source=brand-ambassador-agency&intent=hero` loads the quote funnel and preserves `lead_source=brand-ambassador-agency` plus `lead_intent=hero` in `localStorage.afm_attribution` without submitting a lead.
- Verified apex `https://airfreshmarketing.com/brand-ambassador-agency` 308-redirects to the `www` custom domain.

Next actions:
- Continue CTA attribution on `/product-sampling-agency`, remaining service pages with bare quote links, and high-intent blog CTAs.

## 2026-05-13 13:30 MDT

Goal: continue high-intent quote-funnel attribution on `/product-sampling-agency`, the next page called out by the prior run.

Shipped candidate:
- Added a local `quoteHref()` helper with `source=product-sampling-agency` and unique intent values.
- Updated five sampling proposal/quote CTAs from bare `/get-quote` links to attributed quote-funnel URLs: hero proposal, custom sampling strategy, pricing custom quote, and both final proposal CTAs.
- Normalized visible phone CTAs to direct `tel:+13037206060` links while preserving informational/internal links.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code/work-log commit `e72a77c` (`fix: attribute product sampling ctas`).
- Deployed production via Vercel project `afm-website`: deployment `https://afm-website-e1zsm7wyq-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com` and resolving on `https://www.airfreshmarketing.com`.
- Verified live `/product-sampling-agency` exposes all five attributed sampling quote links with `source=product-sampling-agency` and distinct `intent` values; visible phone CTAs route to `tel:+13037206060`.
- Verified `/get-quote?source=product-sampling-agency&intent=hero-sampling-proposal` loads the quote funnel and preserves `lead_source=product-sampling-agency` plus `lead_intent=hero-sampling-proposal` in `localStorage.afm_attribution` without submitting a lead.
- Verified apex `https://airfreshmarketing.com/product-sampling-agency` 308-redirects to the `www` custom domain.

Next actions:
- Continue CTA attribution on remaining service pages with bare quote links and high-intent blog CTAs.

## 2026-05-13 14:45 MDT

Goal: continue high-intent quote-funnel attribution on `/services/retail-activations`, a service page still sending buyer CTAs to `/contact`.

Shipped candidate:
- Added a local `quoteHref()` helper with `source=retail-activations` and unique intent values.
- Routed the hero “Get Started” and final “Get a Free Consultation” CTAs directly to `/get-quote` with source/intent attribution instead of `/contact`.
- Converted the retail page buttons to the Radix-safe `Button asChild` anchor pattern while preserving the case studies link.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code/work-log commit `57aaf86` (`fix: attribute retail activation ctas`).
- Deployed production via Vercel project `afm-website`: deployment `https://afm-website-kgdfamezi-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com` and resolving on `https://www.airfreshmarketing.com`.
- Verified live `/services/retail-activations` exposes both attributed retail quote links with `source=retail-activations` and distinct `intent` values, while the case studies link remains informational.
- Verified `/get-quote?source=retail-activations&intent=hero-get-started` loads the quote funnel and preserves `lead_source=retail-activations` plus `lead_intent=hero-get-started` in `localStorage.afm_attribution` without submitting a lead.
- Verified apex `https://airfreshmarketing.com/services/retail-activations` 308-redirects to the `www` custom domain.

Next actions:
- Continue CTA attribution on `/services/luxury-brand-marketing`, `/industries`, `/venues`, and high-intent blog CTAs that still route buyer intent to `/contact`.

## 2026-05-13 15:58 MDT

Goal: continue high-intent quote-funnel attribution on `/services/luxury-brand-marketing`, the next service page called out by the prior run.

Shipped candidate:
- Added a local `quoteHref()` helper with `source=luxury-brand-marketing` and unique intent values.
- Routed the hero consultation CTA and final private consultation CTA directly to `/get-quote` with source/intent attribution instead of `/contact`.
- Converted the affected luxury-page buttons to the Radix-safe `Button asChild` anchor pattern while preserving the portfolio link as informational.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code/work-log commit `efb5d17` (`fix: attribute luxury marketing ctas`).
- Deployed production via Vercel project `afm-website`: deployment `https://afm-website-9chii9jlr-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com` and resolving on `https://www.airfreshmarketing.com`.
- Verified live `/services/luxury-brand-marketing` exposes both attributed consultation quote links with `source=luxury-brand-marketing` and distinct `intent` values, while the portfolio link remains informational.
- Verified `/get-quote?source=luxury-brand-marketing&intent=hero-private-consultation` loads the quote funnel and preserves `lead_source=luxury-brand-marketing` plus `lead_intent=hero-private-consultation` in `localStorage.afm_attribution` without submitting a lead.
- Verified apex `https://airfreshmarketing.com/services/luxury-brand-marketing` resolves to the `www` custom domain.

Next actions:
- Continue CTA attribution on `/industries`, `/venues`, and high-intent blog CTAs that still route buyer intent to `/contact`.

## 2026-05-13 17:11 MDT

Goal: continue high-intent quote-funnel attribution on dynamic `/services/[service]` landing pages, which still had bare quote links on core service pages.

Shipped candidate:
- Added a local `quoteHref()` helper to `app/services/[service]/page.tsx` using the requested service slug as `source`.
- Updated the hero “Get a Staffing Quote” and final “Request a Proposal” CTAs to route to `/get-quote` with distinct `intent` values instead of bare quote links.
- Preserved informational links such as portfolio and all-services navigation; no fake lead submissions.

Checks:
- `npm run check` passed.
- `npm run build` passed; generated 6,133 sitemap URLs and 6,303 static pages.
- Committed and pushed code/work-log commit `a76d95b` (`fix: attribute dynamic service ctas`).
- Deployed production via Vercel project `afm-website`: deployment `https://afm-website-d2id0sul1-joey-5223s-projects.vercel.app`, aliased to `https://airfreshmarketing.com` and resolving on `https://www.airfreshmarketing.com`.
- Verified live `/services/brand-ambassadors` exposes the hero and final dynamic service CTAs as `/get-quote?source=brand-ambassadors&intent=...` while preserving the global nav quote link.
- Verified `/get-quote?source=brand-ambassadors&intent=hero-staffing-quote` loads the quote funnel and preserves `lead_source=brand-ambassadors` plus `lead_intent=hero-staffing-quote` in `localStorage.afm_attribution` without submitting a lead.
- Verified apex `https://airfreshmarketing.com/services/brand-ambassadors` 308-redirects to the `www` custom domain.

Next actions:
- Continue CTA attribution on `/industries`, `/venues`, and high-intent blog CTAs that still route buyer intent to `/contact`.

## 2026-05-14 23:55 MDT

Goal: render blog post markdown links as real anchors (they were being shown as literal `[text](/url)` text on every blog article), and attribute embedded body `/get-quote` CTAs.

Shipped candidate:
- `app/blog/[slug]/page.tsx` `processInlineFormatting` now converts `[label](href)` markdown links into real anchor tags with internal-vs-external handling and a styled underline. Italic regex tightened to avoid eating bold markers.
- `renderContent` now accepts `slug` and rewrites embedded bare `](/get-quote)` to `](/get-quote?source=blog-<slug>&intent=body-blog-cta)` before rendering, restoring buyer-intent attribution inside article bodies.
- This affects ~58 in-body quote CTAs and ~190 in-body internal `/services/...` links across the blog corpus.

Checks:
- `npm run check` passed.
- `npm run build` passed.
- Committed and pushed code commit `a61bdd4` (`fix: render blog markdown links and attribute quote ctas`).
- Deployed production via Vercel project `afm-website`: deployment `https://afm-website-m0tk9grkk-joey-5223s-projects.vercel.app`, aliased to `airfreshmarketing.com` and resolving on `www.airfreshmarketing.com`.
- Verified live `/blog/sports-stadium-brand-activations-guide`: 0 raw markdown link tokens remaining, 28 real `/services/...` anchors in-article, embedded body quote CTA = `/get-quote?source=blog-sports-stadium-brand-activations-guide&intent=body-blog-cta`, and "Activate at your stadium" now renders as an anchor rather than literal text.
- Verified apex `airfreshmarketing.com/blog/...` 308-redirects to the `www` custom domain.

Next actions:
- Audit homepage hero/H1 conversion clarity and proof-above-fold pass.
- Continue GSC opportunity pass on pages with impressions, low CTR, and positions 4–15.

## 2026-05-26 MDT

Goal: batch-route all remaining /portfolio proof CTAs to /case-studies sitewide (follow-up from 2026-05-24 next actions).

Audit: 38 /portfolio href occurrences found outside app/portfolio/. 3 intentional kept. 35 fixed.

Shipped (32 files, 38 changes, commit 994565a):
- 18 compare pages: href /portfolio -> /case-studies (label said View Case Studies all along)
- events and venues service pages: View All Case Studies -> /case-studies
- cities/[slug] and cities/[slug]/[service]: hero portfolio CTA -> /case-studies
- city-services, services, luxury, locations, Hero.tsx: proof CTAs -> /case-studies
- 4 blog pages: proof CTAs -> /case-studies
- case-studies/[id]: Back to Portfolio -> Back to Case Studies + /case-studies
- Intentional: homepage Browse Full Portfolio -> /portfolio secondary kept

Build: passed 6304 static pages. Deployed to production. Verified live.

Next actions:
- GSC opportunity pass: pages with impressions 10-200, position 4-15, CTR under 2 pct
- Audit /get-quote internal link opportunities on neighborhood/state service pages
- Above-fold case studies proof section on high-intent city pages

## 2026-05-27 MDT

Goal: complete the /portfolio → /case-studies routing migration by catching dynamic template-literal links missed in the 2026-05-26 batch pass.

Audit: 5 dynamic page components still used `/portfolio/${id}` template literals for "View Case Study" card buttons. These affected case-study cards on:
- ~6,300 city-service pages
- ~460 state-service pages
- ~550 venue-service pages
- ~1,024 event-service pages
- ~320 industry-city pages

Shipped (5 files, commit d7f47a0):
- app/city-services/[slug]/page.tsx
- app/states/[state]/[service]/page.tsx
- app/venues/[slug]/[service]/page.tsx
- app/events/[slug]/[service]/page.tsx
- app/industries/[industry]/[city]/page.tsx

All 5 files changed `/portfolio/${id}` → `/case-studies/${id}` on case-study card buttons.

Checks:
- npm run build passed (6304 static pages, 0 errors).
- Committed d7f47a0, rebased, pushed to origin/main.
- Deployed to Vercel production: https://afm-website-2bl89er4l-joey-5223s-projects.vercel.app
- Verified live: /city-services/denver-brand-ambassadors, /states/colorado/brand-ambassadors, /venues/mccormick-place-chicago/brand-ambassadors all return /case-studies/{id} on case-study card links. Zero /portfolio/{id} links remaining across all tested dynamic pages.

Next actions:
- GSC opportunity pass: pages with impressions 10-200, position 4-15, CTR under 2%
- Audit /get-quote internal link opportunities on neighborhood/state pages
- Above-fold proof section (case studies) on high-intent city pages

## 2026-05-28 MDT

Goal: Add mid-body /get-quote CTA banner to all 459 state-service pages to increase funnel touchpoints.

Audit: state/service pages had only 2 quote CTAs (hero + final-cta). All 459 pages lacked a mid-body conversion point between "Why Choose Us" and "Cities Served."

Shipped (1 file, commit 6f077ba):
- app/states/[state]/[service]/page.tsx
- Inserted a light-branded CTA banner between "Why Choose Us" and "Cities Served" sections
- Copy: "Ready to hire {service} in {state}? Tell us about your campaign and get a free quote within 24 hours."
- Links to /get-quote?source=state-{state}-{service}&intent=mid-body (trackable in GA)
- Adds 3rd quote touchpoint: hero + mid-body (new) + final-cta

Checks:
- npm run build passed (6305 pages, 0 errors)
- Committed 6f077ba, pushed to origin/main
- Deployed to Vercel production: https://afm-website-6c9z2vcd2-joey-5223s-projects.vercel.app
- Verified live: /states/colorado/brand-ambassadors returns "Ready to hire", "Tell us about", "mid-body" intent param ✓

Next actions:
- Same mid-body CTA pattern on venues/[slug]/[service] pages (~550 pages — currently only hero + final-cta)
- Same pattern on events/[slug]/[service] pages (~1,024 pages — has sidebar but no mid-body banner)
- GSC opportunity pass: pages 4-15 position with impressions 10-200, CTR < 2%

## 2026-05-30 MDT

Goal: Add mid-body /get-quote CTA banner to all 608 industry-city pages to increase funnel touchpoints.

Audit: industry/city pages (/industries/[industry]/[city]) had only 2 quote CTAs (hero + final-cta). All 608 pages lacked a mid-body conversion point between "Why Choose Us" and "Case Studies."

Shipped (1 file, commit f873497):
- app/industries/[industry]/[city]/page.tsx
- Inserted indigo CTA banner between "Why Choose Us" and "Case Studies" sections
- Copy: "Ready to hire {industry} event staff in {city}? Tell us about your campaign and get a free quote within 24 hours."
- Links to /get-quote?source=industry-{industry}-{city}&intent=mid-body (trackable in GA)
- Adds 3rd quote touchpoint: hero + mid-body (new) + final-cta
- Consistent design with identical banners already live on 459 state-service pages

Checks:
- npm run build passed (6305 static pages, 0 errors)
- Committed f873497, pushed to origin/main
- Deployed to Vercel production
- Verified live: /industries/healthcare-pharma/new-york returns indigo mid-body section with intent=mid-body param in page source ✓

Next actions:
- GSC opportunity pass: pages at position 4-15 with impressions 10-200, CTR < 2%
- Above-fold case study proof section on top city-service pages (brand-ambassadors + top 5 cities)
- /get-quote form: audit UTM param persistence from source/intent query params into form submission

## 2026-05-31 MDT

Goal: Fix missing brand suffix "| AirFresh Marketing" on all industries/[industry] and industries/[industry]/[city] pages.

Audit: 
- /industries/technology → "Technology Marketing | Experiential & Event Services" ❌ NO brand suffix
- /industries/technology/san-francisco → "Technology Event Marketing in San Francisco, CA" ❌ NO brand suffix
- ~618 total pages affected (10 industry landing + 608 industry-city pages)
- Root cause: industries/[industry]/layout.tsx was setting title as a plain string, which broke Next.js template inheritance from the root layout (template: '%s | AirFresh Marketing')
- When an intermediate layout sets a plain string title, it resets/drops the template for its descendants

Shipped (1 file, commit b371e26):
- app/industries/[industry]/layout.tsx
- Changed title from a plain string to { default: '...| AirFresh Marketing', template: '%s | AirFresh Marketing' }
- This fixes the [industry] landing page (uses default) AND all 608 [city] child pages (uses template)
- Also updated openGraph and twitter title fields to include explicit brand suffix

Checks:
- npm run check passed (0 TypeScript errors)
- npm run build passed (6305 static pages, 0 errors)
- Committed b371e26, pushed to origin/main
- Vercel deploy in progress

Next actions:
- GSC opportunity pass: pages at position 4-15 with impressions 10-200, CTR < 2% → rewrite titles/meta
- Venues/[slug]/[service] pages: add mid-body /get-quote CTA banner (same pattern as states + industry-city)
- Above-fold case study proof section on top city-service pages

## 2026-06-01 MDT

Goal: Add above-fold social proof trust strip to all city-service pages to close the trust gap immediately after the hero.

Audit:
- ~1,600 city-service pages (e.g. /city-services/new-york-city-brand-ambassadors) had ZERO above-fold trust signals between the hero and the first body content section
- All other high-intent pages (homepage, /get-quote, state-service, industry-city) already had trust proof
- City-service pages are the highest-traffic / highest-intent organic landing pages

Shipped (1 file, commit 306d93a):
- app/city-services/[slug]/page.tsx
- Inserted compact white trust strip immediately below hero section
- 5 stats: 4.9/5 avg client rating | 300+ national brands served | 5,000+ vetted staff | 24-hr quote turnaround | 20+ years experience
- Responsive: all 5 show on desktop, mobile wraps naturally with pipe dividers hidden
- No new imports needed — all Lucide icons already in scope
- Applies to all ~1,600 pages instantly (single template)

Checks:
- npm run build passed (6305 static pages, 0 errors)
- Committed 306d93a, pushed to origin/main
- Deployed to Vercel production: https://afm-website-llf75pd84-joey-5223s-projects.vercel.app
- Verified live: /city-services/new-york-city-brand-ambassadors returns "avg client rating", "national brands served", "vetted staff nationwide", "quote turnaround", "experiential marketing" ✓

Next actions:
- GSC opportunity pass: pages at position 4-15 with impressions 10-200, CTR < 2% → rewrite titles/meta
- Add same trust strip to /city/[slug] city landing pages (currently also trust-bare above fold)
- Above-fold case study proof on homepage: replace static text descriptions with mini client logo + result line

## 2026-06-02 MDT

Goal: Add above-fold social proof trust strip to state-service pages.

Audit:
- state/[state]/[service] pages (~459 pages) had no above-fold trust signals after hero
- city-services pages already had the strip (added Run 26)
- state-service pages are high-intent ("Brand Ambassadors in California", etc.) but zero social proof until mid-page

Shipped (1 file, commit 3deac25):
- app/states/[state]/[service]/page.tsx
- Added `Star, Clock` to Lucide imports
- Inserted compact white trust strip immediately below hero section (before State Info section)
- 5 stats: 4.9/5 avg client rating | 300+ national brands served | 5,000+ vetted staff | 24-hr quote turnaround | 20+ years experience
- Matches exact pattern from city-services (Run 26)
- Applies to all 459 state-service pages instantly (single template)

Checks:
- npm run build passed (6305 static pages, 0 errors)
- Committed 3deac25, pushed to origin/main
- Vercel deploy triggered but still building at time of report

Next actions:
- Verify live: /states/california/brand-ambassadors should show trust strip
- Add same trust strip to /states/[state]/page.tsx (state landing pages, currently also bare above fold)
- GSC opportunity pass: pages at position 4-15 with impressions 10-200, CTR < 2% → rewrite titles/meta
- cities/[slug]/page.tsx trust strip (city hub pages)

## 2026-06-03 MDT

Goal: Register two orphaned blog pages in blogPosts.ts + add trust strip to all venue-service pages.

Audit:
- Two blog pages existed as dedicated Next.js pages but were NOT in server/blogPosts.ts:
  - app/blog/event-staffing-101-roles-rates-how-to-hire/page.tsx (run 29 era)
  - app/blog/trade-show-marketing-strategy/page.tsx (run 29 era)
  - Both had CTAs, structured data, FAQ schema — but invisible to blog listing, sitemap.ts, and [slug]/generateStaticParams
- venue/[slug]/[service] pages (~552 pages) had no above-fold trust signals

Shipped (commit 64a1376, 4 files):
1. server/blogPosts.ts — inserted ids 1741 and 1742:
   - event-staffing-101-roles-rates-how-to-hire (Event Staffing, June 1 2026)
   - trade-show-marketing-strategy (Trade Shows, June 1 2026)
   - Both now appear in blog listing, sitemap, pre-rendered via [slug] static params
2. app/venues/[slug]/[service]/page.tsx — added trust strip below hero:
   - Star, Clock, Award, Shield icons added
   - 5 stats: 4.9/5 rating, 300+ brands, 5k+ staff, 24-hr quote, 20+ years
   - Applies to all 552 venue-service pages instantly

Checks:
- npm run build passed (6,314 static pages, 0 errors)
- Committed 64a1376, pushed to origin/main
- Vercel deploy triggered

Next actions:
- Verify live: /blog/event-staffing-101-roles-rates-how-to-hire and /blog/trade-show-marketing-strategy in blog listing
- Verify live: /venues/mccormick-place-chicago/brand-ambassadors trust strip
- GSC opportunity pass: pages position 4-15, impressions 10-200, CTR < 2% -> rewrite titles/meta
- /states/[state]/page.tsx trust strip (state hub pages still bare above fold)

## 2026-06-05 MDT (Run 37)

Goal: City page depth — add enriched content for El Paso TX (Priority #5 continued).

Audit:
- 44th city enriched; selected El Paso TX as highest-leverage unenriched border/military/bilingual market
- El Paso: 900K city, 2.7M binational metro with Ciudad Juárez (Chihuahua, Mexico) — one of the largest binational urban metros on any border in the world
- Fort Bliss (1.1M acres, largest US Army installation by land area in continental US; 40K+ active-duty soldiers, 1st Armored Division HQ; $9.6B annual economic impact — dominant El Paso employer)
- 80%+ Hispanic/Latino population — most bilingual large city in the US; $2B+ annual cross-border retail spending from Juárez
- $50B+ annual two-way cross-border trade through Bridge of the Americas, Ysleta/Zaragoza, Stanton Street ports
- UTEP (22,000+ students, Carnegie R1, Sun Belt Conference; Sun Bowl Stadium 52K cap; Don Haskins Center 12,222 cap)
- University Medical Center El Paso (340 beds, Level II Trauma, county teaching hospital); Las Palmas Del Sol Healthcare (HCA, 2 campuses); Hospitals of Providence (Tenet, 4 campuses); Texas Tech TTUHSC El Paso (Paul L. Foster School of Medicine)
- El Paso Convention Center (128,000 sq ft) + Border Security Expo (4,000+ federal law enforcement attendees annually)
- Neon Desert Music Festival (Downtown, 20,000+, May); El Paso Chihuahuas AAA Baseball (Southwest University Park, 9,500 cap); El Paso Locomotive FC (USL Championship, top-10 attendance)
- Tony the Tiger Sun Bowl (December, 50,000+); White Sands Missile Range (1 hour north, 5,000+ employees)

Shipped (commit 1a9a435) — new file server/city-content/el-paso.ts:
- el-paso-brand-ambassadors: Fort Bliss military economy (40K+ troops, 1st AD, William Beaumont AMC, BAE/GD/Raytheon contractors); binational bilingual market ($2B+ cross-border retail, 80%+ Hispanic, Chihuahuan/Norteño Spanish dialect specificity, Juárez binational framing); UTEP/healthcare NSM/events calendar; $18-36/hr; 5 FAQs; 12 areasServed
- el-paso-experiential-marketing: Binational cross-border consumer activations (Cielo Vista Mall, Sunland Park, Fountains at Farah — cross-border shoppers); Neon Desert Music Festival; Locomotive FC + Chihuahuas sports activations; Fort Bliss military community activations; 3 FAQs
- el-paso-event-management: El Paso Convention Center (128K sq ft, Border Security Expo); pharmaceutical NSM at Marriott/Hilton/Hyatt for UMC/Las Palmas/Providence/TTUHSC; bilingual cross-border corporate events; $22-48/hr; 3 FAQs
- el-paso-convention-staffing: 4-vertical approach (defense/border security, healthcare/pharma, cross-border commercial, education/government); Border Security Expo (4,000+ federal LE); bilingual trade show staff as baseline; $25-48/hr; 3 FAQs
- el-paso-promotional-models: Background-matched (bilingual Chihuahuan/Norteño Spanish, Fort Bliss military community, pharmaceutical FDA Sunshine Act compliant, UTEP campus); cross-border retail activation specialists; $28-65/hr; 3 FAQs

Checks:
- npm run check passed (TypeScript clean)
- npm run build passed (9 El Paso city-service HTML files confirmed, 6,314 total pages, 0 errors)
- Local build verified: el-paso-brand-ambassadors.html — Fort Bliss 56×, bilingual 36×, UTEP 40×, Ciudad Juárez 14×; FAQPage JSON-LD confirmed ✓
- Committed 1a9a435, pushed to origin/main
- Live HTTP 200 confirmed on /city-services/el-paso-brand-ambassadors and /city-services/el-paso-convention-staffing ✓

Status after this run:
- 44 cities now have enriched city-service content (220 enriched pages total)
- 112 cities remain on thin fallback templates

Next actions:
- Priority #5 continued: Fresno CA, Bakersfield CA, Baton Rouge LA, San Jose CA
- Priority #6: Case study internal links — ensure all case study pages link back to relevant service pages

## 2026-06-05 MDT (Run 38)

Goal: City page depth — add enriched content for San Jose CA (Priority #5 continued).

Audit:
- 45th city enriched; San Jose selected as highest-leverage unenriched market (1M population, $500B+ annual metro economic output, Silicon Valley capital)
- Cisco Systems (HQ, $57B revenue, 80K+ employees; Cisco Live 25K+ attendees), Adobe (HQ, $19B), Zoom ($4.4B), PayPal ($29B HQ), eBay ($10B HQ) anchor downtown tech campus cluster
- Intel (Santa Clara HQ, $54B revenue), Nvidia (Santa Clara HQ, $60B+ revenue; GTC AI Conference 300K+ online), Broadcom ($36B HQ) define semiconductor leadership
- Apple (Cupertino), Google (Mountain View), Meta (Menlo Park) provide South Bay spillover demand
- San Jose Convention Center (550K sq ft, 8 exhibit halls): Cisco Live (25K), NVIDIA GTC (300K online), RSA Conference (40K), Intel Innovation, SAP Sapphire, VMware Explore
- SAP Center (17,562-seat arena; San Jose Sharks NHL; 41 home games annually; tech-sector sponsors: Cisco, SAP, Adobe, Intel, PayPal)
- Santana Row (15M annual visitors, $130K+ median HHI, Louis Vuitton/Gucci/Apple/Lululemon) + Westfield Valley Fair (#1 revenue mall in Northern California)
- Tet Festival San Jose (150,000+; Eastside; largest West Coast Tet after Garden Grove), Japantown Obon (50K+; 1 of 3 remaining US Japantowns), Silicon Valley Pride (75K+)
- Most ethnically diverse major US city: Asian American 37%+, Hispanic/Latino 30%+; multilingual coverage: Mandarin/Cantonese/Vietnamese/Spanish/Hindi/Punjabi/Korean/Tagalog
- Pharmaceutical/biotech: Intuitive Surgical (Sunnyvale, $7B+), Stanford Health Care (600+ beds, Top 10 national), El Camino Health (Mountain View)
- San Jose International Auto Show (100K+; McEnery Convention Center); PayPal Park / MLS Earthquakes; Levi's Stadium (Santa Clara, 68.5K cap, 49ers)

Shipped (commit b4f7075) — new file server/city-content/san-jose.ts:
- san-jose-brand-ambassadors: Full Silicon Valley tech economy; Cisco Live/NVIDIA GTC/RSA convention market; SAP Center Sharks game-day; Santana Row consumer; multilingual (Mandarin/Cantonese/Vietnamese/Spanish/Hindi/Punjabi); $20-40/hr; 5 FAQs; 12 areasServed
- san-jose-experiential-marketing: Santana Row pop-ups; Westfield Valley Fair; PayPal Park/Earthquakes game-day; developer experience events (hackathons, tech campus activations); Tet Festival, Japantown Obon, Silicon Valley Pride community events; 3 FAQs
- san-jose-event-management: San Jose Convention Center hotel campus (Marriott 510 rooms, Hilton 353 rooms, AC Hotel); Cisco/Adobe/SAP campus buyouts; pharma NSM (Intuitive Surgical, Stanford Health); $25-50/hr; 3 FAQs
- san-jose-convention-staffing: Cisco Live (25K), NVIDIA GTC (300K+ online), RSA, Intel Innovation, SAP Sapphire, VMware Explore, Fortinet, ServiceNow; B2B lead capture / Salesforce CRM integration; technical background screening; Santa Clara CC coverage; $28-55/hr; 3 FAQs
- san-jose-promotional-models: San Jose International Auto Show (100K+); Santana Row/Westfield luxury activations; Silicon Valley affluent consumer ($130K+ median HHI); multilingual/bilingual talent; FDA Sunshine Act pharma compliance; BMW/Mercedes/Porsche/Tesla dealership events; $30-70/hr; 3 FAQs

Checks:
- npm run check passed (TypeScript clean, 0 errors)
- npm run build passed (6,314 static pages, 0 errors)
- Live HTTP 200 confirmed: /city-services/san-jose-brand-ambassadors ✓, /city-services/san-jose-convention-staffing ✓
- H1 confirmed live: "Brand Ambassadors San Jose" ✓
- Committed b4f7075, pushed to origin/main

Status after this run:
- 45 cities now have enriched city-service content (225 enriched pages total)
- 106 cities remain on thin fallback templates

Next actions:
- Priority #5 continued: Arlington TX, Fort Worth TX, Aurora CO, Anaheim CA (highest-traffic unenriched cities)
- Priority #6: Case study internal links — ensure all case study pages link back to relevant service pages

## 2026-06-05 MDT (Run 44)

Goal: City page depth — add enriched content for Arlington TX (Priority #5 — DFW Metroplex hub, highest-leverage unenriched market).

Audit:
- 46th city enriched; Arlington TX selected as highest-leverage unenriched market in the DFW mid-cities corridor
- Arlington is the entertainment and sports capital of the DFW Metroplex — home to AT&T Stadium (Dallas Cowboys, 100,000+ cap, world's largest domed stadium), Globe Life Field (Texas Rangers, 40,518 cap, 2023 World Series Champions), Esports Stadium Arlington (100,000 sq ft, largest dedicated esports arena in the United States), and Six Flags Over Texas (original Six Flags park, 3M+ annual visitors)
- Geographic midpoint between Dallas (20 miles east) and Fort Worth (20 miles west) — DFW mid-cities hub serving 7.5M person Metroplex (4th largest US metro)
- University of Texas at Arlington (UTA — 40,000+ students, Carnegie R1, one of most ethnically diverse public universities in US; College Park Center 7,000 cap)
- Texas Health Arlington Memorial (369 beds, Level III Trauma), Medical City Arlington (HCA, Level II Trauma, 369 beds), Baylor Scott & White Orthopedic and Spine Hospital — pharmaceutical NSM market
- Bell Textus (helicopter manufacturing), Lockheed Martin (F-35 production), AT&T, General Dynamics, L3Harris — DFW defense/corporate sector
- Arlington Convention Center (70,000+ sq ft, directly adjacent to Globe Life Field and Esports Stadium)
- International Bowling Campus (USBC/PBA/BPAA HQ, 621 Six Flags Drive — 52-lane competition center, national championships)
- FIFA World Cup 2026 (11 matches scheduled for AT&T Stadium, June–July 2026)
- TABC (Texas Alcoholic Beverage Commission) compliance required for all spirits/sampling activations in Texas — addressed in all applicable pages

Shipped (commit 18902d9) — new file server/city-content/arlington.ts:
- arlington-brand-ambassadors: AT&T Stadium Cowboys game-day (80-acre tailgate ecosystem, 100,000+ capacity), Globe Life Field Rangers season (81+ home games), Esports Stadium gaming brand ambassadors, Six Flags 3M+ visitors, UTA 40K+ students, bilingual Spanish-English (Tarrant County 27%+ Hispanic), pharma NSM market, DFW Metroplex full coverage; $18-38/hr; 5 FAQs; 10 areasServed
- arlington-experiential-marketing: AT&T Stadium tailgate immersive experiences, Globe Life Field Boardwalk (accessible to non-ticket holders), Esports Stadium VR/gaming activations, Six Flags consumer sampling, Parks at Arlington and Lincoln Square retail, UTA campus activations; 3 FAQs
- arlington-event-management: Arlington Convention Center (70K+ sq ft, Entertainment District), pharma NSMs (Texas Health/Medical City/BSW), Bell/Lockheed/AT&T corporate events, AT&T Stadium/Globe Life Field/Esports Stadium large-scale event management, USBC International Bowling Campus, FIFA World Cup 2026 (11 matches); $22-50/hr; 3 FAQs
- arlington-convention-staffing: Arlington Convention Center, Esports Stadium gaming industry conventions, International Bowling Campus (USBC national championships), DFW Metroplex full circuit (Dallas Convention Center 1.8M sq ft, Fort Worth Convention Center, Gaylord Texan 490K sq ft, Dallas Market Center), pharma/medical device/aerospace trade show specialization; $20-48/hr; 3 FAQs
- arlington-promotional-models: TABC-certified spirits sampling, auto show models (DFW Auto Show 400K+ visitors), gaming-literate esports event talent, pharma NSM FDA Sunshine Act compliant, AT&T Stadium/Globe Life Field sponsor talent, bilingual Spanish-English; $25-65/hr; 4 FAQs

Checks:
- npm run check passed (TypeScript clean, 0 errors)
- npm run build passed (6,314 total pages, 0 errors) — Arlington pages confirmed in .next/server/app/city-services/
- Local build verified: arlington-brand-ambassadors.html — AT&T Stadium ✓, Globe Life Field ✓, Esports Stadium ✓, Six Flags ✓, UTA ✓, FIFA World Cup 2026 ✓; FAQPage JSON-LD confirmed ✓
- Committed 18902d9, pushed to origin/main
- Live HTTP 200 confirmed: /city-services/arlington-brand-ambassadors ✓, /city-services/arlington-convention-staffing ✓
- H1 confirmed live: "Brand Ambassadors Arlington" ✓

Status after this run:
- 46 cities now have enriched city-service content (230 enriched pages total)
- 105 cities remain on thin fallback templates

Next actions:
- Priority #5 continued: Fort Worth TX, Aurora CO, Anaheim CA (highest-traffic unenriched cities)
- Priority #6: Case study internal links — ensure all case study pages link back to relevant service pages
