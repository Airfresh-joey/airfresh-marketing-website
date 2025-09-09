import { Client } from "@notionhq/client";

// Initialize Notion client
const notion = new Client({
    auth: process.env.NOTION_INTEGRATION_SECRET!,
});

// Extract the page ID from the Notion page URL
function extractPageIdFromUrl(pageUrl: string): string {
    const match = pageUrl.match(/([a-f0-9]{32})(?:[?#]|$)/i);
    if (match && match[1]) {
        return match[1];
    }
    throw Error("Failed to extract page ID");
}

const CASE_STUDIES_DB_ID = extractPageIdFromUrl(process.env.NOTION_PAGE_URL!);

// Since we already have a database, let's add properties to it
async function setupCaseStudiesDatabase() {
    try {
        console.log("Setting up Case Studies Database properties...");
        
        // Since we can't modify database schema via API, let's add sample data
        // and let the user know what properties to create manually
        
        console.log("Database ID:", CASE_STUDIES_DB_ID);
        console.log("\nPlease add these properties to your Notion database manually:");
        console.log("1. Title (Title) - for case study name");
        console.log("2. Client (Text) - client company name");
        console.log("3. Industry (Select) - industry type");
        console.log("4. Campaign Type (Select) - type of campaign");
        console.log("5. Description (Text) - brief description");
        console.log("6. Results (Text) - campaign results");
        console.log("7. Image URL (URL) - image for case study");
        console.log("8. Date (Date) - campaign date");
        console.log("9. Status (Select) - Published/Draft");
        
        // Try to add a sample case study
        try {
            const sampleCaseStudy = await notion.pages.create({
                parent: {
                    database_id: CASE_STUDIES_DB_ID
                },
                properties: {
                    // We'll add basic title first
                    title: {
                        title: [
                            {
                                text: {
                                    content: "Google Product Launch - Interactive VR Experience"
                                }
                            }
                        ]
                    }
                }
            });
            
            console.log("✅ Sample case study created:", sampleCaseStudy.id);
        } catch (error) {
            console.log("Note: Could not create sample case study. Please set up database properties first.");
            console.log("Error:", error.message);
        }
        
    } catch (error) {
        console.error("Setup failed:", error);
        throw error;
    }
}

// Get current database info
async function getDatabaseInfo() {
    try {
        const database = await notion.databases.retrieve({
            database_id: CASE_STUDIES_DB_ID,
        });
        
        console.log("Database info:");
        console.log("- Title:", database.title?.[0]?.plain_text || 'Untitled');
        console.log("- Properties:", Object.keys(database.properties || {}));
        
        return database;
    } catch (error) {
        console.error("Error getting database info:", error);
        throw error;
    }
}

// Test querying the database
async function testQuery() {
    try {
        const response = await notion.databases.query({
            database_id: CASE_STUDIES_DB_ID,
        });
        
        console.log(`Found ${response.results.length} entries in database`);
        return response.results;
    } catch (error) {
        console.error("Error querying database:", error);
        throw error;
    }
}

async function main() {
    try {
        console.log("🚀 Setting up Case Studies integration...\n");
        
        await getDatabaseInfo();
        console.log();
        
        await testQuery();
        console.log();
        
        await setupCaseStudiesDatabase();
        
        console.log("\n✅ Setup complete!");
        console.log("Next steps:");
        console.log("1. Go to your Notion database");
        console.log("2. Add the properties listed above");
        console.log("3. Add some case study entries");
        console.log("4. The website will then display them automatically");
        
    } catch (error) {
        console.error("Setup failed:", error);
        process.exit(1);
    }
}

main();