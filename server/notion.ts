import { Client } from "@notionhq/client";

// Initialize Notion client
export const notion = new Client({
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

export const NOTION_PAGE_ID = extractPageIdFromUrl(process.env.NOTION_PAGE_URL!);

/**
 * Lists all child databases contained within NOTION_PAGE_ID
 */
export async function getNotionDatabases() {
    const childDatabases = [];

    try {
        let hasMore = true;
        let startCursor: string | undefined = undefined;

        while (hasMore) {
            const response = await notion.blocks.children.list({
                block_id: NOTION_PAGE_ID,
                start_cursor: startCursor,
            });

            // Process the results
            for (const block of response.results) {
                // Check if the block is a child database
                if ("type" in block && block.type === "child_database") {
                    const databaseId = block.id;

                    // Retrieve the database title
                    try {
                        const databaseInfo = await notion.databases.retrieve({
                            database_id: databaseId,
                        });

                        // Add the database to our list
                        childDatabases.push(databaseInfo);
                    } catch (error) {
                        console.error(`Error retrieving database ${databaseId}:`, error);
                    }
                }
            }

            // Check if there are more results to fetch
            hasMore = response.has_more;
            startCursor = response.next_cursor || undefined;
        }

        return childDatabases;
    } catch (error) {
        console.error("Error listing child databases:", error);
        throw error;
    }
}

// Find a Notion database with the matching title
export async function findDatabaseByTitle(title: string) {
    const databases = await getNotionDatabases();

    for (const db of databases) {
        if ("title" in db && db.title && Array.isArray(db.title) && db.title.length > 0) {
            const dbTitle = db.title[0]?.plain_text?.toLowerCase() || "";
            if (dbTitle === title.toLowerCase()) {
                return db;
            }
        }
    }

    return null;
}

// Create a new database if one with a matching title does not exist
export async function createDatabaseIfNotExists(title: string, properties: any) {
    const existingDb = await findDatabaseByTitle(title);
    if (existingDb) {
        return existingDb;
    }
    
    return await notion.databases.create({
        parent: {
            type: "page_id",
            page_id: NOTION_PAGE_ID
        },
        title: [
            {
                type: "text",
                text: {
                    content: title
                }
            }
        ],
        properties
    } as any);
}

// Define case study interface
export interface CaseStudy {
    notionId: string;
    title: string;
    client: string;
    description: string;
    industry: string;
    results: string;
    imageUrl: string;
    location: string;
    eventType: string;
    budget: string;
    attendees: number;
    duration: string;
    featured: boolean;
    createdAt: Date;
    lastEditedAt: Date;
}

// Get all case studies from the Notion database
export async function getCaseStudies(caseStudiesDatabaseId: string): Promise<CaseStudy[]> {
    try {
        const response = await (notion.databases as any).query({
            database_id: caseStudiesDatabaseId,
        });

        return response.results.map((page: any): CaseStudy => {
            const properties = page.properties;

            return {
                notionId: page.id,
                title: properties.Title?.title?.[0]?.plain_text || "Untitled Case Study",
                client: properties.Client?.rich_text?.[0]?.plain_text || "",
                description: properties.Description?.rich_text?.[0]?.plain_text || "",
                industry: properties.Industry?.select?.name || "General",
                results: properties.Results?.rich_text?.[0]?.plain_text || "",
                imageUrl: properties.ImageURL?.url || "",
                location: properties.Location?.rich_text?.[0]?.plain_text || "",
                eventType: properties.EventType?.select?.name || "",
                budget: properties.Budget?.rich_text?.[0]?.plain_text || "",
                attendees: properties.Attendees?.number || 0,
                duration: properties.Duration?.rich_text?.[0]?.plain_text || "",
                featured: properties.Featured?.checkbox || false,
                createdAt: new Date(page.created_time),
                lastEditedAt: new Date(page.last_edited_time)
            };
        });
    } catch (error) {
        console.error("Error fetching case studies from Notion:", error);
        throw new Error("Failed to fetch case studies from Notion");
    }
}

// Get a specific case study by ID
export async function getCaseStudyById(caseStudiesDatabaseId: string, notionId: string): Promise<CaseStudy | null> {
    try {
        const caseStudies = await getCaseStudies(caseStudiesDatabaseId);
        return caseStudies.find((cs: CaseStudy) => cs.notionId === notionId) || null;
    } catch (error) {
        console.error("Error fetching case study by ID:", error);
        throw new Error("Failed to fetch case study");
    }
}