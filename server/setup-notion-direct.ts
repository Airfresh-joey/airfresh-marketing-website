import { notion, NOTION_PAGE_ID } from "./notion";

// Direct database creation without checking for existing ones
async function createCaseStudiesDatabase() {
    try {
        console.log("Creating Case Studies database directly...");
        console.log("Using page ID:", NOTION_PAGE_ID);
        
        const database = await notion.databases.create({
            parent: {
                type: "page_id",
                page_id: NOTION_PAGE_ID
            },
            title: [
                {
                    type: "text",
                    text: {
                        content: "Case Studies"
                    }
                }
            ],
            properties: {
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
            }
        } as any);
        
        console.log("Database created successfully:", database.id);
        return database;
        
    } catch (error) {
        console.error("Error creating database:", error);
        throw error;
    }
}

async function createSampleCaseStudies(databaseId: string) {
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
        }
    ];

    for (const caseStudy of caseStudies) {
        try {
            await notion.pages.create({
                parent: {
                    database_id: databaseId
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
        } catch (error) {
            console.error(`Error creating case study ${caseStudy.title}:`, error);
        }
    }
}

// Run the setup
createCaseStudiesDatabase()
    .then((database) => {
        console.log("Database created, now adding sample data...");
        return createSampleCaseStudies(database.id);
    })
    .then(() => {
        console.log("Setup complete!");
        process.exit(0);
    })
    .catch((error) => {
        console.error("Setup failed:", error);
        process.exit(1);
    });