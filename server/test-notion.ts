import { notion, NOTION_PAGE_ID } from "./notion";

async function testNotionConnection() {
  try {
    console.log("Testing Notion connection...");
    console.log("Page ID:", NOTION_PAGE_ID);
    
    // Check if the page ID is actually a database
    try {
      const databaseInfo = await notion.databases.retrieve({
        database_id: NOTION_PAGE_ID,
      });
      console.log("This is a database:", databaseInfo.title);
      console.log("Database properties:", Object.keys(databaseInfo.properties));
      return { type: 'database', info: databaseInfo };
    } catch (dbError) {
      console.log("Not a database, checking if it's a page...");
    }

    // Try to retrieve as page
    try {
      const pageInfo = await notion.pages.retrieve({
        page_id: NOTION_PAGE_ID,
      });
      console.log("This is a page:", pageInfo);
      return { type: 'page', info: pageInfo };
    } catch (pageError) {
      console.log("Not a page either, trying as block...");
    }

    // Try to get children (works for both pages and databases)
    const children = await notion.blocks.children.list({
      block_id: NOTION_PAGE_ID,
    });
    console.log("Children found:", children.results.length);
    
    return { type: 'unknown', children: children.results };
    
  } catch (error) {
    console.error("Connection failed:", error);
    throw error;
  }
}

testNotionConnection()
  .then((result) => {
    console.log("Test completed successfully:", result.type);
    process.exit(0);
  })
  .catch((error) => {
    console.error("Test failed:", error.message);
    process.exit(1);
  });