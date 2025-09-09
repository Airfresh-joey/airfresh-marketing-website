import { notion, NOTION_PAGE_ID } from "./notion";

export interface CaseStudy {
  notionId: string;
  title: string;
  description: string;
  client: string;
  industry: string;
  campaign_type: string;
  results: string;
  image_url?: string;
  date?: Date;
  status: string;
}

export async function getCaseStudiesFromNotion(): Promise<CaseStudy[]> {
  try {
    // Since NOTION_PAGE_ID is the database, query it directly
    const response = await notion.databases.query({
      database_id: NOTION_PAGE_ID,
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
    });

    const caseStudies: CaseStudy[] = response.results.map((page: any) => {
      const properties = page.properties;
      
      // Helper function to safely extract text content
      const getTextContent = (prop: any): string => {
        if (!prop) return '';
        if (prop.title && prop.title.length > 0) {
          return prop.title[0]?.plain_text || '';
        }
        if (prop.rich_text && prop.rich_text.length > 0) {
          return prop.rich_text[0]?.plain_text || '';
        }
        if (prop.select) {
          return prop.select?.name || '';
        }
        return '';
      };

      const getDateContent = (prop: any): Date | undefined => {
        if (prop?.date?.start) {
          return new Date(prop.date.start);
        }
        return undefined;
      };

      return {
        notionId: page.id,
        title: getTextContent(properties.Title || properties.Name),
        description: getTextContent(properties.Description),
        client: getTextContent(properties.Client),
        industry: getTextContent(properties.Industry),
        campaign_type: getTextContent(properties['Campaign Type'] || properties.Type),
        results: getTextContent(properties.Results),
        image_url: getTextContent(properties['Image URL'] || properties.Image),
        date: getDateContent(properties.Date),
        status: getTextContent(properties.Status) || 'Published',
      };
    });

    return caseStudies;
  } catch (error) {
    console.error("Error fetching case studies from Notion:", error);
    throw new Error("Failed to fetch case studies from Notion");
  }
}

export async function getDatabaseSchema() {
  try {
    const database = await notion.databases.retrieve({
      database_id: NOTION_PAGE_ID,
    });
    
    console.log("Database title:", database.title);
    console.log("Database properties:");
    
    if (database.properties) {
      Object.entries(database.properties).forEach(([key, value]: [string, any]) => {
        console.log(`- ${key}: ${value.type}`);
      });
    } else {
      console.log("No properties found in database");
    }
    
    return database;
  } catch (error) {
    console.error("Error getting database schema:", error);
    throw error;
  }
}

export async function testCaseStudiesFetch() {
  try {
    console.log("Fetching case studies...");
    const caseStudies = await getCaseStudiesFromNotion();
    console.log(`Found ${caseStudies.length} case studies`);
    if (caseStudies.length > 0) {
      console.log("First case study:", caseStudies[0]);
    }
    return caseStudies;
  } catch (error) {
    console.error("Error testing case studies fetch:", error);
    throw error;
  }
}