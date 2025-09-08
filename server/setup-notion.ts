import { Client } from "@notionhq/client";
import { notion, NOTION_PAGE_ID, createDatabaseIfNotExists, findDatabaseByTitle } from "./notion";

// Environment variables validation
if (!process.env.NOTION_INTEGRATION_SECRET) {
    throw new Error("NOTION_INTEGRATION_SECRET is not defined. Please add it to your environment variables.");
}

// Setup databases for AirFresh Marketing case studies
async function setupNotionDatabases() {
    await createDatabaseIfNotExists("Case Studies", {
        // Every database needs a Name/Title property
        Title: {
            title: {}
        },
        Client: {
            rich_text: {}
        },
        Description: {
            rich_text: {}
        },
        Industry: {
            select: {
                options: [
                    { name: "Technology", color: "blue" },
                    { name: "Healthcare", color: "green" },
                    { name: "Finance", color: "purple" },
                    { name: "Retail", color: "orange" },
                    { name: "Entertainment", color: "red" },
                    { name: "Food & Beverage", color: "yellow" },
                    { name: "Automotive", color: "gray" },
                    { name: "Beauty & Cosmetics", color: "pink" },
                    { name: "Sports & Fitness", color: "brown" },
                    { name: "General", color: "default" }
                ]
            }
        },
        Results: {
            rich_text: {}
        },
        ImageURL: {
            url: {}
        },
        Location: {
            rich_text: {}
        },
        EventType: {
            select: {
                options: [
                    { name: "Product Launch", color: "blue" },
                    { name: "Brand Activation", color: "green" },
                    { name: "Trade Show", color: "purple" },
                    { name: "Pop-up Experience", color: "orange" },
                    { name: "Corporate Event", color: "red" },
                    { name: "Sampling Campaign", color: "yellow" },
                    { name: "Roadshow", color: "gray" },
                    { name: "Concert/Festival", color: "pink" },
                    { name: "Sports Event", color: "brown" }
                ]
            }
        },
        Budget: {
            rich_text: {}
        },
        Attendees: {
            number: {}
        },
        Duration: {
            rich_text: {}
        },
        Featured: {
            checkbox: {}
        }
    });
}

async function createSampleData() {
    try {
        console.log("Adding sample case study data...");

        // Find the case studies database
        const caseStudiesDb = await findDatabaseByTitle("Case Studies");

        if (!caseStudiesDb) {
            throw new Error("Could not find the Case Studies database.");
        }

        const caseStudies = [
            {
                title: "TechCorp Product Launch Experience",
                client: "TechCorp Industries",
                description: "Interactive product demonstration showcasing cutting-edge technology through immersive brand experiences and hands-on customer engagement.",
                industry: "Technology",
                results: "300% increase in product awareness, 150+ qualified leads generated, 95% positive sentiment from attendees",
                imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                location: "San Francisco, CA",
                eventType: "Product Launch",
                budget: "$75,000",
                attendees: 500,
                duration: "3 days",
                featured: true
            },
            {
                title: "Global Beauty Brand Pop-Up Store",
                client: "Luxe Beauty Co.",
                description: "Immersive beauty experience featuring personalized consultations, product trials, and social media activations in premium retail locations.",
                industry: "Beauty & Cosmetics",
                results: "2,500+ direct sales, 40% conversion rate, 50k social media impressions",
                imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                location: "New York, NY",
                eventType: "Pop-up Experience",
                budget: "$125,000",
                attendees: 1200,
                duration: "2 weeks",
                featured: true
            },
            {
                title: "Premium Food & Beverage Sampling Tour",
                client: "Artisan Foods Inc.",
                description: "Nationwide sampling campaign featuring gourmet food tastings, chef demonstrations, and brand storytelling across major metropolitan markets.",
                industry: "Food & Beverage",
                results: "85% trial-to-purchase conversion, 200% sales lift in target markets, 25k new subscribers",
                imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                location: "Chicago, IL",
                eventType: "Sampling Campaign",
                budget: "$200,000",
                attendees: 3000,
                duration: "6 weeks",
                featured: true
            },
            {
                title: "Automotive Innovation Showcase",
                client: "FutureDrive Motors",
                description: "Interactive automotive experience featuring virtual reality test drives, technology demonstrations, and personalized vehicle configurations.",
                industry: "Automotive",
                results: "500+ test drive bookings, 60% lead qualification rate, 95% brand recall after 30 days",
                imageUrl: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                location: "Detroit, MI",
                eventType: "Brand Activation",
                budget: "$150,000",
                attendees: 800,
                duration: "5 days",
                featured: false
            },
            {
                title: "Healthcare Innovation Conference",
                client: "MedTech Solutions",
                description: "Professional healthcare conference featuring product demonstrations, expert panels, and networking opportunities for medical professionals.",
                industry: "Healthcare",
                results: "200+ qualified medical professional leads, 15 partnership inquiries, 30% increase in product trials",
                imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                location: "Boston, MA",
                eventType: "Trade Show",
                budget: "$90,000",
                attendees: 400,
                duration: "2 days",
                featured: false
            },
            {
                title: "Sports Brand Marathon Experience",
                client: "Peak Performance Gear",
                description: "Marathon event sponsorship featuring product demonstrations, athlete meet-and-greets, and performance testing stations for runners.",
                industry: "Sports & Fitness",
                results: "1,000+ product trials, 45% purchase intent increase, 75k social media reach",
                imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                location: "Los Angeles, CA",
                eventType: "Sports Event",
                budget: "$100,000",
                attendees: 2500,
                duration: "3 days",
                featured: false
            }
        ];

        for (let caseStudy of caseStudies) {
            await notion.pages.create({
                parent: {
                    database_id: caseStudiesDb.id
                },
                properties: {
                    Title: {
                        title: [
                            {
                                text: {
                                    content: caseStudy.title
                                }
                            }
                        ]
                    },
                    Client: {
                        rich_text: [
                            {
                                text: {
                                    content: caseStudy.client
                                }
                            }
                        ]
                    },
                    Description: {
                        rich_text: [
                            {
                                text: {
                                    content: caseStudy.description
                                }
                            }
                        ]
                    },
                    Industry: {
                        select: {
                            name: caseStudy.industry
                        }
                    },
                    Results: {
                        rich_text: [
                            {
                                text: {
                                    content: caseStudy.results
                                }
                            }
                        ]
                    },
                    ImageURL: {
                        url: caseStudy.imageUrl
                    },
                    Location: {
                        rich_text: [
                            {
                                text: {
                                    content: caseStudy.location
                                }
                            }
                        ]
                    },
                    EventType: {
                        select: {
                            name: caseStudy.eventType
                        }
                    },
                    Budget: {
                        rich_text: [
                            {
                                text: {
                                    content: caseStudy.budget
                                }
                            }
                        ]
                    },
                    Attendees: {
                        number: caseStudy.attendees
                    },
                    Duration: {
                        rich_text: [
                            {
                                text: {
                                    content: caseStudy.duration
                                }
                            }
                        ]
                    },
                    Featured: {
                        checkbox: caseStudy.featured
                    }
                }
            });

            console.log(`Created case study: ${caseStudy.title}`);
        }

        console.log("Sample case study data creation complete.");
    } catch (error) {
        console.error("Error creating sample data:", error);
    }
}

// Run the setup
setupNotionDatabases().then(() => {
    return createSampleData();
}).then(() => {
    console.log("Notion setup complete!");
    process.exit(0);
}).catch(error => {
    console.error("Setup failed:", error);
    process.exit(1);
});