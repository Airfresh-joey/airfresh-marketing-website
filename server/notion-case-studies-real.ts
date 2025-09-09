import { Client } from "@notionhq/client";

const notion = new Client({
    auth: process.env.NOTION_INTEGRATION_SECRET!,
});

export interface RealCaseStudy {
    id: string;
    title: string;
    client: string;
    industry: string;
    campaign_type: string;
    description: string;
    results: string;
    image_url: string;
    date: string;
    status: string;
}

export async function fetchRealCaseStudies(): Promise<RealCaseStudy[]> {
    try {
        console.log("Fetching real case studies from Notion...");
        
        // Search for pages that contain case study data
        const searchResponse = await notion.search({
            filter: {
                value: "page",
                property: "object"
            }
        });
        
        // Filter pages that are case studies (have client property)
        const potentialCaseStudies = searchResponse.results.filter((page: any) => {
            if (page.properties) {
                const propKeys = Object.keys(page.properties).map(k => k.toLowerCase());
                return propKeys.some(key => 
                    key.includes('client') || 
                    key.includes('case') || 
                    key.includes('campaign')
                );
            }
            return false;
        });
        
        console.log(`Processing ${potentialCaseStudies.length} case studies...`);
        
        // Process each case study
        const caseStudies: RealCaseStudy[] = [];
        for (const page of potentialCaseStudies) {
            const caseStudy = await processPage(page);
            if (caseStudy && caseStudy.title !== 'Untitled') {
                caseStudies.push(caseStudy);
            }
        }
        
        // Filter only published case studies
        const publishedCaseStudies = caseStudies.filter(cs => 
            cs.status.toLowerCase() === 'published' || 
            cs.status.toLowerCase() === 'complete' ||
            cs.status === '' || 
            cs.status === 'Published'
        );
        
        console.log(`Returning ${publishedCaseStudies.length} published case studies`);
        return publishedCaseStudies;
        
    } catch (error) {
        console.error("Error fetching real case studies:", error);
        return [];
    }
}

async function processPage(page: any): Promise<RealCaseStudy | null> {
    try {
        const properties = page.properties || {};
        
        // Helper function to extract text from Notion property
        const getText = (prop: any): string => {
            if (!prop) return '';
            
            if (prop.title && Array.isArray(prop.title)) {
                return prop.title.map((t: any) => t.plain_text).join('');
            }
            if (prop.rich_text && Array.isArray(prop.rich_text)) {
                return prop.rich_text.map((t: any) => t.plain_text).join('');
            }
            if (prop.select) {
                return prop.select.name || '';
            }
            if (prop.url) {
                return prop.url || '';
            }
            return '';
        };
        
        const getDate = (prop: any): string => {
            if (prop?.date?.start) {
                return prop.date.start;
            }
            return new Date().toISOString().split('T')[0];
        };
        
        // Extract case study data with better defaults
        const title = getText(properties.Name || properties.Title);
        const client = getText(properties.Client);
        
        // Skip if no title and client (not a proper case study)
        if (!title && !client) {
            return null;
        }
        
        const industry = getText(properties.Industry) || 'Marketing & Events';
        const campaign_type = getText(properties['Campaign Type'] || properties.Type) || 'Brand Activation';
        const description = getText(properties.Description) || 
                           `Successful experiential marketing campaign for ${client || title}.`;
        const results = getText(properties.Results) || 
                       'Successful campaign execution with positive brand engagement and measurable results.';
        
        // Use a relevant stock image based on industry or campaign type
        const getRelevantImage = (industry: string, campaign_type: string, client: string): string => {
            const industryLower = industry.toLowerCase();
            const typeLower = campaign_type.toLowerCase();
            const clientLower = client.toLowerCase();
            
            if (clientLower.includes('apple') || clientLower.includes('tech')) {
                return 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
            }
            if (clientLower.includes('netflix') || clientLower.includes('entertainment')) {
                return 'https://images.unsplash.com/photo-1489599804962-c3dd2d6f6965?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
            }
            if (clientLower.includes('food') || clientLower.includes('restaurant') || clientLower.includes('culinary')) {
                return 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
            }
            if (clientLower.includes('car') || clientLower.includes('auto') || clientLower.includes('nissan')) {
                return 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
            }
            if (clientLower.includes('formula') || clientLower.includes('racing') || clientLower.includes('williams')) {
                return 'https://images.unsplash.com/photo-1525198018674-2b5d8030bb80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
            }
            if (clientLower.includes('cosmetic') || clientLower.includes('beauty') || clientLower.includes('mac') || clientLower.includes('clarins')) {
                return 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
            }
            if (typeLower.includes('festival') || typeLower.includes('event')) {
                return 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
            }
            if (typeLower.includes('sampling') || typeLower.includes('product')) {
                return 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
            }
            
            // Default event/activation image
            return 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
        };
        
        const image_url = getText(properties['Image URL'] || properties.Image) || 
                         getRelevantImage(industry, campaign_type, client);
        const date = getDate(properties.Date);
        const status = getText(properties.Status) || 'Published';
        
        return {
            id: page.id,
            title: title || client,
            client: client || 'Client',
            industry,
            campaign_type,
            description,
            results,
            image_url,
            date,
            status
        };
        
    } catch (error) {
        console.error("Error processing page:", error);
        return null;
    }
}