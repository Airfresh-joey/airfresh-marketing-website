import { Client } from "@notionhq/client";

const notion = new Client({
    auth: process.env.NOTION_INTEGRATION_SECRET!,
});

export interface FinalCaseStudy {
    id: string;
    title: string;
    client: string;
    industry: string;
    campaign_type: string;
    description: string;
    results: string;
    what_we_did: string;
    services_provided: string[];
    markets: string[];
    product_offering: string;
    google_drive_folder: string;
    assets_folder: string;
    image_url: string;
    date: string;
    status: string;
}

export async function fetchFinalCaseStudies(): Promise<FinalCaseStudy[]> {
    try {
        console.log("Fetching final case studies with Google Drive and rich data...");
        
        // Use search to get all pages, then filter for case studies
        const searchResponse = await notion.search({
            filter: {
                value: "page",
                property: "object"
            }
        });
        
        console.log(`Found ${searchResponse.results.length} total pages`);
        
        // Filter pages that are case studies (have expected properties)
        const caseStudyPages = searchResponse.results.filter((page: any) => {
            if (page.properties) {
                const propKeys = Object.keys(page.properties).map(k => k.toLowerCase());
                return propKeys.some(key => 
                    key.includes('client') || 
                    key.includes('name') || 
                    key.includes('industry') ||
                    key.includes('google') ||
                    key.includes('assets')
                );
            }
            return false;
        });
        
        console.log(`Processing ${caseStudyPages.length} case study pages...`);
        
        const finalCaseStudies: FinalCaseStudy[] = [];
        for (const page of caseStudyPages) {
            const caseStudy = await processFinalPage(page);
            if (caseStudy && caseStudy.title && caseStudy.title !== 'Untitled Page' && caseStudy.client !== 'Client') {
                finalCaseStudies.push(caseStudy);
            }
        }
        
        console.log(`Returning ${finalCaseStudies.length} final case studies with rich data`);
        return finalCaseStudies;
        
    } catch (error) {
        console.error("Error fetching final case studies:", error);
        return [];
    }
}

async function processFinalPage(page: any): Promise<FinalCaseStudy | null> {
    try {
        const properties = page.properties || {};
        
        // Helper functions to extract different property types
        const getText = (prop: any): string => {
            if (!prop) return '';
            
            if (prop.title && Array.isArray(prop.title)) {
                return prop.title.map((t: any) => t.plain_text).join('').trim();
            }
            if (prop.rich_text && Array.isArray(prop.rich_text)) {
                return prop.rich_text.map((t: any) => t.plain_text).join('').trim();
            }
            if (prop.select && prop.select.name) {
                return prop.select.name.trim();
            }
            if (prop.url) {
                return prop.url.trim();
            }
            return '';
        };
        
        const getMultiSelect = (prop: any): string[] => {
            if (!prop || !prop.multi_select || !Array.isArray(prop.multi_select)) return [];
            return prop.multi_select.map((item: any) => item.name).filter(Boolean);
        };
        
        const getDate = (prop: any): string => {
            if (prop?.date?.start) {
                return prop.date.start;
            }
            return new Date().toISOString().split('T')[0];
        };
        
        // Log all available properties for debugging
        console.log(`Processing page with properties: ${Object.keys(properties).join(', ')}`);
        
        // Extract data from all available properties
        const name = getText(properties.Name || properties.Title);
        const industry = getText(properties.Industry);
        const services_provided = getMultiSelect(properties['Services Provided']);
        const markets = getMultiSelect(properties.Markets);
        const what_we_did = getText(properties['What We Did']);
        const auto_description = getText(properties['Auto-Generated Case Study Description']);
        const text = getText(properties.Text);
        const product_offering = getText(properties['Product Offering']);
        const google_drive_folder = getText(properties['Google Drive File']);
        const assets_folder = getText(properties['Assets (Images, Screenshots, Docs)']);
        const date = getDate(properties['Date (Month/Year)']);
        
        // Use name as both title and client for now
        const title = name || 'Case Study';
        const client = name || 'Client';
        
        // Build comprehensive description
        const description_parts = [
            auto_description,
            text,
            what_we_did,
            product_offering ? `Product focus: ${product_offering}` : ''
        ].filter(Boolean);
        
        const description = description_parts.length > 0 ? 
            description_parts.join('. ') :
            `Successful experiential marketing campaign for ${client}.`;
        
        // Determine campaign type from services
        const campaign_type = services_provided.length > 0 ? 
            services_provided[0] : 
            'Brand Activation';
        
        // Build results text
        const results_parts = [
            `Successful ${campaign_type.toLowerCase()} campaign for ${client}`,
            markets.length > 0 ? `across ${markets.join(', ')} markets` : '',
            services_provided.length > 1 ? `including ${services_provided.slice(1).join(', ')}` : '',
            what_we_did ? `Key achievement: ${what_we_did}` : ''
        ].filter(Boolean);
        
        const results = results_parts.join('. ') + '.';
        
        // Get appropriate image
        const image_url = getRelevantImage(client, industry, campaign_type);
        
        const caseStudy: FinalCaseStudy = {
            id: page.id,
            title,
            client,
            industry: industry || 'Marketing & Events',
            campaign_type,
            description,
            results,
            what_we_did: what_we_did || '',
            services_provided,
            markets,
            product_offering: product_offering || '',
            google_drive_folder: google_drive_folder || '',
            assets_folder: assets_folder || '',
            image_url,
            date,
            status: 'Published'
        };
        
        console.log(`Processed: ${title} - Google Drive: ${google_drive_folder ? 'Yes' : 'No'} - Assets: ${assets_folder ? 'Yes' : 'No'}`);
        
        return caseStudy;
        
    } catch (error) {
        console.error("Error processing final page:", error);
        return null;
    }
}

function getRelevantImage(client: string, industry: string, campaign_type: string): string {
    const clientLower = client.toLowerCase();
    const industryLower = industry.toLowerCase();
    const typeLower = campaign_type.toLowerCase();
    
    // Client-specific images with high-quality, relevant photos
    if (clientLower.includes('microsoft')) {
        return 'https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    }
    if (clientLower.includes('apple')) {
        return 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    }
    if (clientLower.includes('netflix')) {
        return 'https://images.unsplash.com/photo-1489599804962-c3dd2d6f6965?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    }
    if (clientLower.includes('mrbeast')) {
        return 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    }
    if (clientLower.includes('williams') || clientLower.includes('racing') || clientLower.includes('formula')) {
        return 'https://images.unsplash.com/photo-1525198018674-2b5d8030bb80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    }
    if (clientLower.includes('mac') || clientLower.includes('cosmetic') || clientLower.includes('beauty') || clientLower.includes('clarins')) {
        return 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    }
    if (clientLower.includes('buffalo') || clientLower.includes('wild') || clientLower.includes('wings')) {
        return 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    }
    if (clientLower.includes('car') || clientLower.includes('wash') || clientLower.includes('nissan')) {
        return 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    }
    if (clientLower.includes('whiskey') || clientLower.includes('tequila') || clientLower.includes('alcohol')) {
        return 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    }
    if (clientLower.includes('water') || clientLower.includes('waiakea')) {
        return 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    }
    if (clientLower.includes('culinary') || clientLower.includes('wagamama') || clientLower.includes('food')) {
        return 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    }
    
    // Campaign type-specific images
    if (typeLower.includes('sampling') || typeLower.includes('product')) {
        return 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    }
    if (typeLower.includes('festival') || typeLower.includes('event')) {
        return 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    }
    if (typeLower.includes('activation') || typeLower.includes('brand')) {
        return 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    }
    
    // Default professional event image
    return 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
}