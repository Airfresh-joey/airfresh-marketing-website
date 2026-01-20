import { Client } from "@notionhq/client";
import { googleDriveService } from "./services/google-drive";
import { fetchPagesFromDatabase as fetchNotionPages } from "./notion-block-parser";

// Initialize Notion client only if secret is available
const notion = process.env.NOTION_INTEGRATION_SECRET 
    ? new Client({ auth: process.env.NOTION_INTEGRATION_SECRET }) as any
    : null;

export interface CaseStudyWithImages {
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
    notion_url: string;
    image_url: string;
    has_real_assets: boolean;
    google_drive_images: string[];
    date: string;
    status: string;
    client_logo_url: string;
}

// Complete list of case studies from user with their Notion URLs
const CASE_STUDIES_LIST = [
    { title: "Microsoft (NRF)", id: "1adda91659c6809a8eb9ebe1d9cf4a4c" },
    { title: "Netflix Hollywood Premiere", id: "1adda91659c68010a220c87f1231c935" },
    { title: "Apple (Camp Grizzly)", id: "1c4da91659c68064af7ee5ea01121dee" },
    { title: "MrBeast", id: "1adda91659c68030b09acab8426f692b" },
    { title: "Formula One Activations", id: "1adda91659c68058ab9ad7351cf8f720" },
    { title: "Mac Cosmetics", id: "1c3da91659c680cf9bb2f11d57531846" },
    { title: "Buffalo Wild Wings", id: "1adda91659c680259867e078bb239e45" },
    { title: "Williams Racing", id: "1adda91659c680f897aefdc20bf99c27" },
    { title: "Cirque du Soleil", id: "1adda91659c680fe9afdceac5ea7846b" },
    { title: "Nissan (NFL Draft)", id: "1c4da91659c680e28bbbfd6517c06844" },
    { title: "Las Vegas +44 Formula Activation", id: "1adda91659c6809fbe94f70f2d672529" },
    { title: "Clarins", id: "1adda91659c6803e8a41e2847d1401b0" },
    { title: "1800 Tequilia", id: "1c4da91659c6808bbf98c5ae4d23b661" },
    { title: "Waiakea Water x Aaron Judge", id: "1adda91659c680a4bb30d9fa176d9491" },
    { title: "Topps NHL All Star Beach Fest", id: "1adda91659c68058a02cd2cbf957055a" },
    { title: "Wagamama Street Team", id: "1408d46eaff845b0afb93ea0f548c519" },
    { title: "Culinary Dropout", id: "1adda91659c6806c8c23f7177e156aa1" },
    { title: "BYOMA", id: "1adda91659c680878855fbc6a1d8a482" },
    { title: "Katjes", id: "1adda91659c680a68066c4f26be0391b" },
    { title: "PeelzOn", id: "1adda91659c6801aaa05c1702f4b75c9" },
    { title: "TED Conference Staffing", id: "1adda91659c68019bd88f1e5e6601e10" },
    { title: "Polaris National Finals Rodeo", id: "1adda91659c680aea6c8f9ae5272d18c" },
    { title: "Car Wash Promotion", id: "1adda91659c68074bd7dc5da1f111a90" },
    { title: "Skinny Mixes", id: "1c0da91659c680969cf2dba3114023ad" },
    { title: "Solar Company", id: "1adda91659c68082bf24cdc38610211f" },
    { title: "Bond Vet", id: "1adda91659c680e2a938ed71939ff864" },
    { title: "Brooklyn Magazine", id: "1adda91659c680f6be6ef0d39e6839da" },
    { title: "Paradise Body", id: "1adda91659c68063b872fefb796610d1" },
    { title: "The Sun Club Golf", id: "1adda91659c6802996f4db045cb88c88" },
    { title: "Cortie - Digital Yalo", id: "1adda91659c6805aa56fdcef106e666e" },
    { title: "Qwuick", id: "1adda91659c680b88db2f1a2be210c82" },
    { title: "Avail Car Sharing", id: "1adda91659c680be8794c025a37c408e" },
    { title: "Moxie Communications Group", id: "3911d311b05d4a65b9ae2e8688ed18ab" },
    { title: "Qwick SXSW Street Team", id: "c709eada10e74c01bb3b6cf03781a31e" },
    { title: "Duracell x Formula 1", id: "dd12e371ce78497b983ef92b6b32bb11" },
    { title: "1800 Tequila NBA All Star", id: "432e1f91a627464cbb4fb82c700404f5" },
    { title: "Apres Bio Me", id: "269da91659c6802dacfcd1362f1b5b2b" },
    { title: "Beer Samplings", id: "1adda91659c68056b617ecb569159c42" },
    { title: "Climax Whiskey", id: "1deda91659c6806f88e9e3b65235d131" },
    { title: "Complex NYC", id: "1f8da91659c680d0ae58e7009a511c09" },
    { title: "ComplexCon Las Vegas", id: "7c2167e0dc6c4946bf43803757ec0ea2" },
    { title: "Get Neer Dental Conference", id: "1cbda91659c680b1a91ffae880d64715" },
    { title: "GoPuff", id: "269da91659c6808bbe22e1fd7adb64df" },
    { title: "Grubhub", id: "269da91659c680a2a956df1da0ce8977" },
    { title: "IMA Medical Group", id: "1cbda91659c680aa9aa9e2810509f1ba" },
    { title: "Lyft Experiential", id: "1f8da91659c68031ba4dd34f19dd79de" },
    { title: "Meijer", id: "1cbda91659c680f083f3f060d1400aa9" },
    { title: "Pride Activations", id: "269da91659c680279189e96ae20e364f" },
    { title: "Starbucks", id: "269da91659c6801c8c5cda9e80b1627a" },
    { title: "Wagamama Original", id: "1adda91659c680299a7fedea91150f30" }
];

// Notion database ID for case studies
const CASE_STUDIES_DATABASE_ID = "1adda91659c6801d8205da139f9ed4d6";

// Cache for case studies - 10 minute TTL
let caseStudiesCache: { data: CaseStudyWithImages[]; timestamp: number } | null = null;
const CACHE_TTL = 10 * 60 * 1000; // 10 minutes

export async function fetchCaseStudiesFromDatabase(): Promise<CaseStudyWithImages[]> {
    // Check cache first
    if (caseStudiesCache && (Date.now() - caseStudiesCache.timestamp) < CACHE_TTL) {
        console.log(`Returning ${caseStudiesCache.data.length} cached case studies`);
        return caseStudiesCache.data;
    }
    
    if (!notion) {
        console.log("Notion not configured, returning mock case studies...");
        return getMockCaseStudies();
    }
    
    try {
        console.log("Fetching case studies from Notion using individual page retrieval...");
        
        const caseStudies: CaseStudyWithImages[] = [];
        
        // Fetch in parallel batches for faster loading
        const batchSize = 10;
        for (let i = 0; i < CASE_STUDIES_LIST.length; i += batchSize) {
            const batch = CASE_STUDIES_LIST.slice(i, i + batchSize);
            const batchResults = await Promise.all(
                batch.map(async (study) => {
                    try {
                        const page = await notion.pages.retrieve({ page_id: study.id });
                        return await parseNotionPageToCaseStudy(page);
                    } catch (error) {
                        console.error(`Error fetching case study ${study.title}:`, error);
                        return null;
                    }
                })
            );
            caseStudies.push(...batchResults.filter((cs): cs is CaseStudyWithImages => cs !== null));
        }
        
        // If no case studies were fetched from Notion, return mock data
        if (caseStudies.length === 0) {
            console.log("No case studies found in Notion database, returning mock case studies...");
            return getMockCaseStudies();
        }
        
        // Cache the results
        caseStudiesCache = { data: caseStudies, timestamp: Date.now() };
        console.log(`Successfully fetched and cached ${caseStudies.length} case studies from Notion`);
        return caseStudies;
        
    } catch (error) {
        console.error("Error fetching case studies from database:", error);
        console.log("Falling back to mock case studies...");
        return getMockCaseStudies();
    }
}

// Force refresh cache
export function clearCaseStudiesCache(): void {
    caseStudiesCache = null;
    console.log("Case studies cache cleared");
}

async function extractNotionImages(page: any, pageId: string): Promise<string[]> {
    const images: string[] = [];
    
    // 1. Extract cover image
    if (page.cover) {
        if (page.cover.type === 'external' && page.cover.external?.url) {
            images.push(page.cover.external.url);
            console.log(`  Found cover image (external): ${page.cover.external.url.substring(0, 60)}...`);
        } else if (page.cover.type === 'file' && page.cover.file?.url) {
            images.push(page.cover.file.url);
            console.log(`  Found cover image (file): ${page.cover.file.url.substring(0, 60)}...`);
        }
    }
    
    // 2. Extract images from file-type properties (especially "Assets (Images, Screenshots, Docs)")
    const properties = page.properties || {};
    
    // Check all properties for files type
    for (const [key, prop] of Object.entries(properties) as any) {
        if (prop?.type === 'files' && prop.files && Array.isArray(prop.files)) {
            for (const file of prop.files) {
                // Only add actual image files, skip Google Drive folder links
                if (file.type === 'file' && file.file?.url) {
                    images.push(file.file.url);
                } else if (file.type === 'external' && file.external?.url && !file.external.url.includes('drive.google.com/drive/folders')) {
                    images.push(file.external.url);
                }
            }
        }
    }
    
    // 3. Extract images from page blocks (if accessible)
    if (notion && images.length === 0) {
        try {
            const blocksResponse = await notion.blocks.children.list({ block_id: pageId, page_size: 100 });
            const blocks = blocksResponse.results || [];
            
            for (const block of blocks) {
                if (block.type === 'image') {
                    if (block.image?.type === 'external' && block.image.external?.url) {
                        images.push(block.image.external.url);
                        console.log(`  Found block image (external): ${block.image.external.url.substring(0, 60)}...`);
                    } else if (block.image?.type === 'file' && block.image.file?.url) {
                        images.push(block.image.file.url);
                        console.log(`  Found block image (file): ${block.image.file.url.substring(0, 60)}...`);
                    }
                }
            }
        } catch (error: any) {
            // Silently skip block fetching errors - some pages may not have block access
            if (error?.code !== 'object_not_found') {
                console.log(`  Note: Could not fetch blocks for page ${pageId}`);
            }
        }
    }
    
    // Filter out any duplicates and empty strings
    return Array.from(new Set(images.filter(Boolean)));
}

async function parseNotionPageToCaseStudy(page: any): Promise<CaseStudyWithImages | null> {
    try {
        const pageId = page.id;
        const properties = page.properties || {};
        
        // Helper functions
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
            // Handle file type properties
            if (prop.files && Array.isArray(prop.files) && prop.files.length > 0) {
                const file = prop.files[0];
                if (file.type === 'external' && file.external?.url) {
                    return file.external.url;
                } else if (file.type === 'file' && file.file?.url) {
                    return file.file.url;
                }
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
        
        // Extract title - try different common property names
        const title = getText(properties['Name']) || 
                     getText(properties['Title']) || 
                     getText(properties['Client']) ||
                     'Untitled Case Study';
        
        // Extract rich data from properties
        const industry = getText(properties.Industry) || 'Marketing & Events';
        const services_provided = getMultiSelect(properties['Services Provided']);
        const markets = getMultiSelect(properties.Markets);
        const what_we_did = getText(properties['What We Did']);
        const auto_description = getText(properties['Auto-Generated Case Study Description']);
        const text_content = getText(properties.Text);
        const product_offering = getText(properties['Product Offering']);
        const google_drive_folder = getText(properties['Google Drive File']);
        const assets_folder = getText(properties['Assets (Images, Screenshots, Docs)']);
        const date = getDate(properties['Date (Month/Year)']);
        const status = getText(properties['Status']) || 'Published';
        const client_logo_url = getText(properties['Client Logo']) || '';
        
        // Build comprehensive description
        const description_parts = [
            auto_description,
            text_content,
            what_we_did,
            product_offering ? `Product focus: ${product_offering}` : ''
        ].filter(Boolean);
        
        const description = description_parts.length > 0 ? 
            description_parts.join('. ') :
            `Successful experiential marketing campaign for ${title.split('(')[0].trim()}.`;
        
        // Determine campaign type from services
        const campaign_type = services_provided.length > 0 ? 
            services_provided[0] : 
            'Brand Activation';
        
        // Build results text
        const client = title.split('(')[0].trim();
        const results_parts = [
            `Successful ${campaign_type.toLowerCase()} campaign for ${client}`,
            markets.length > 0 ? `across ${markets.join(', ')} markets` : '',
            services_provided.length > 1 ? `including ${services_provided.slice(1).join(', ')}` : '',
            what_we_did ? `Key achievement: ${what_we_did}` : ''
        ].filter(Boolean);
        
        const results = results_parts.join('. ') + '.';
        
        // Extract images from Notion page (cover and embedded images)
        const notionImages = await extractNotionImages(page, pageId);
        
        // Process Google Drive links for images as fallback
        const google_drive_images = await extractGoogleDriveImages(assets_folder || google_drive_folder, client);
        
        // Combine all images: Notion images first, then Google Drive
        const allImages = [...notionImages, ...google_drive_images];
        const has_real_assets = allImages.length > 0 || !!(assets_folder || google_drive_folder);
        
        // Use the first available image or fallback
        const image_url = allImages.length > 0 
            ? allImages[0] 
            : getClientSpecificImage(client, industry, campaign_type);
        
        const caseStudy: CaseStudyWithImages = {
            id: pageId,
            title,
            client,
            industry,
            campaign_type,
            description,
            results,
            what_we_did: what_we_did || '',
            services_provided,
            markets,
            product_offering: product_offering || '',
            google_drive_folder: google_drive_folder || '',
            assets_folder: assets_folder || '',
            notion_url: `https://www.notion.so/${pageId.replace(/-/g, '')}`,
            image_url,
            has_real_assets,
            google_drive_images: allImages,
            date,
            status,
            client_logo_url
        };
        
        console.log(`✓ ${title} - Real Assets: ${has_real_assets ? 'Yes' : 'No'} - Images: ${allImages.length}`);
        return caseStudy;
        
    } catch (error) {
        console.error(`Error parsing Notion page:`, error);
        return null;
    }
}

export async function fetchCaseStudiesWithImages(): Promise<CaseStudyWithImages[]> {
    // Return mock data if Notion is not configured
    if (!notion) {
        console.log("Notion not configured, returning mock case studies...");
        return getMockCaseStudies();
    }
    
    try {
        console.log("Fetching case studies with Google Drive images...");
        
        // Use dynamic database query to get ALL case studies
        return await fetchCaseStudiesFromDatabase();
        
    } catch (error) {
        console.error("Error fetching case studies with images:", error);
        return getMockCaseStudies();
    }
}

async function fetchSpecificCaseStudyWithImages(pageId: string, title: string): Promise<CaseStudyWithImages | null> {
    if (!notion) {
        return null;
    }
    
    try {
        // Get page properties
        const page = await notion.pages.retrieve({ page_id: pageId });
        
        const properties = (page as any).properties || {};
        
        // Helper functions
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
        
        // Extract rich data from properties
        const industry = getText(properties.Industry) || 'Marketing & Events';
        const services_provided = getMultiSelect(properties['Services Provided']);
        const markets = getMultiSelect(properties.Markets);
        const what_we_did = getText(properties['What We Did']);
        const auto_description = getText(properties['Auto-Generated Case Study Description']);
        const text_content = getText(properties.Text);
        const product_offering = getText(properties['Product Offering']);
        const google_drive_folder = getText(properties['Google Drive File']);
        const assets_folder = getText(properties['Assets (Images, Screenshots, Docs)']);
        const date = getDate(properties['Date (Month/Year)']);
        
        // Build comprehensive description
        const description_parts = [
            auto_description,
            text_content,
            what_we_did,
            product_offering ? `Product focus: ${product_offering}` : ''
        ].filter(Boolean);
        
        const description = description_parts.length > 0 ? 
            description_parts.join('. ') :
            `Successful experiential marketing campaign for ${title.split('(')[0].trim()}.`;
        
        // Determine campaign type from services
        const campaign_type = services_provided.length > 0 ? 
            services_provided[0] : 
            'Brand Activation';
        
        // Build results text
        const client = title.split('(')[0].trim(); // Extract client name before parentheses
        const results_parts = [
            `Successful ${campaign_type.toLowerCase()} campaign for ${client}`,
            markets.length > 0 ? `across ${markets.join(', ')} markets` : '',
            services_provided.length > 1 ? `including ${services_provided.slice(1).join(', ')}` : '',
            what_we_did ? `Key achievement: ${what_we_did}` : ''
        ].filter(Boolean);
        
        const results = results_parts.join('. ') + '.';
        
        // Process Google Drive links for images
        const has_real_assets = !!(assets_folder || google_drive_folder);
        const google_drive_images = await extractGoogleDriveImages(assets_folder || google_drive_folder, client);
        
        // Use the first Google Drive image (which may be an Unsplash fallback) as the main image URL
        // If no images available, use a default Unsplash image
        const image_url = google_drive_images.length > 0 
            ? google_drive_images[0] 
            : 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
        
        const caseStudy: CaseStudyWithImages = {
            id: pageId,
            title,
            client,
            industry,
            campaign_type,
            description,
            results,
            what_we_did: what_we_did || '',
            services_provided,
            markets,
            product_offering: product_offering || '',
            google_drive_folder: google_drive_folder || '',
            assets_folder: assets_folder || '',
            notion_url: `https://www.notion.so/${pageId.replace(/-/g, '')}`,
            image_url,
            has_real_assets,
            google_drive_images,
            date,
            status: 'Published',
            client_logo_url: ''
        };
        
        console.log(`✓ ${title} - Real Assets: ${has_real_assets ? 'Yes' : 'No'} - Images: ${google_drive_images.length}`);
        return caseStudy;
        
    } catch (error) {
        console.error(`Error fetching specific case study ${title}:`, error);
        return null;
    }
}

async function extractGoogleDriveImages(googleDriveFolderUrl: string, clientName?: string): Promise<string[]> {
    if (!googleDriveFolderUrl || !googleDriveFolderUrl.includes('drive.google.com')) {
        return [];
    }
    
    try {
        // Use the Google Drive service to get actual image URLs from the folder
        // Pass client name for better fallback images
        const imageUrls = await googleDriveService.getImageUrlsFromFolder(googleDriveFolderUrl, 4, clientName);
        
        if (imageUrls.length > 0) {
            console.log(`Extracted ${imageUrls.length} image URLs from Google Drive folder: ${googleDriveFolderUrl.match(/folders\/([a-zA-Z0-9-_]+)/)?.[1]}`);
            return imageUrls;
        }
        
        // If no images found, return empty array
        return [];
    } catch (error) {
        console.error('Error extracting Google Drive images:', error);
        return [];
    }
}

function createBasicCaseStudyWithImages(pageId: string, title: string): CaseStudyWithImages {
    const client = title.split('(')[0].trim();
    const fallbackImage = getClientSpecificImage(client, 'Marketing', 'Brand Activation');
    
    return {
        id: pageId,
        title,
        client,
        industry: 'Marketing & Events',
        campaign_type: 'Brand Activation',
        description: `Successful experiential marketing campaign for ${client}.`,
        results: `Successful brand activation campaign for ${client} with positive engagement results.`,
        what_we_did: '',
        services_provided: [],
        markets: [],
        product_offering: '',
        google_drive_folder: '',
        assets_folder: '',
        notion_url: `https://www.notion.so/${pageId.replace(/-/g, '')}`,
        image_url: fallbackImage,
        has_real_assets: false,
        google_drive_images: [],
        date: new Date().toISOString().split('T')[0],
        status: 'Published',
        client_logo_url: ''
    };
}

function getClientSpecificImage(client: string, industry: string, campaign_type: string): string {
    const clientLower = client.toLowerCase();
    
    // Brand-specific high-quality images that actually load
    if (clientLower.includes('microsoft')) {
        return 'https://images.unsplash.com/photo-1566933293069-b55dc0a4e7de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Tech conference
    }
    if (clientLower.includes('netflix')) {
        return 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Entertainment/streaming
    }
    if (clientLower.includes('apple')) {
        return 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Apple/tech
    }
    if (clientLower.includes('mrbeast')) {
        return 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // YouTube/content
    }
    if (clientLower.includes('mac') && clientLower.includes('cosmetic')) {
        return 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Makeup/beauty
    }
    if (clientLower.includes('buffalo') && clientLower.includes('wild')) {
        return 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Sports bar/restaurant
    }
    if (clientLower.includes('williams') || (clientLower.includes('racing') && !clientLower.includes('formula'))) {
        return 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // F1 racing
    }
    if (clientLower.includes('formula') || clientLower.includes('las vegas')) {
        return 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Formula racing
    }
    if (clientLower.includes('cirque') || clientLower.includes('soleil')) {
        return 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Circus/performance
    }
    if (clientLower.includes('nissan')) {
        return 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Car/automotive
    }
    if (clientLower.includes('clarins')) {
        return 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Luxury skincare
    }
    if (clientLower.includes('1800') || clientLower.includes('tequila')) {
        return 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Premium spirits
    }
    if (clientLower.includes('waiakea') || (clientLower.includes('water') && !clientLower.includes('car'))) {
        return 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Premium water
    }
    if (clientLower.includes('topps') || clientLower.includes('trading')) {
        return 'https://images.unsplash.com/photo-1594736797933-d0280ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Trading cards
    }
    if (clientLower.includes('wagamama')) {
        return 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Asian restaurant
    }
    if (clientLower.includes('culinary dropout')) {
        return 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Modern restaurant
    }
    if (clientLower.includes('byoma')) {
        return 'https://images.unsplash.com/photo-1570194065650-d99c79498227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Skincare
    }
    if (clientLower.includes('katjes')) {
        return 'https://images.unsplash.com/photo-1549007908-b5ba11ce1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Candy/sweets
    }
    if (clientLower.includes('peelzon')) {
        return 'https://images.unsplash.com/photo-1556228852-4c3d6b5cf94e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Beauty tech
    }
    if (clientLower.includes('ted')) {
        return 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Speaking/conference
    }
    if (clientLower.includes('polaris')) {
        return 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Vehicles/outdoor
    }
    if (clientLower.includes('car') && clientLower.includes('wash')) {
        return 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Car wash
    }
    if (clientLower.includes('skinny mixes')) {
        return 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Drinks/mixers
    }
    if (clientLower.includes('solar')) {
        return 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Solar energy
    }
    if (clientLower.includes('bond vet')) {
        return 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Veterinary
    }
    if (clientLower.includes('brooklyn magazine')) {
        return 'https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Media/publishing
    }
    if (clientLower.includes('paradise body')) {
        return 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Beauty/wellness
    }
    if (clientLower.includes('cortie') || clientLower.includes('digital yalo')) {
        return 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Digital/tech
    }
    if (clientLower.includes('qwuick')) {
        return 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Tech/mobile
    }
    if (clientLower.includes('golf') || clientLower.includes('sun club')) {
        return 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Golf/sports
    }
    if (clientLower.includes('climax') || clientLower.includes('whiskey')) {
        return 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Whiskey spirits
    }
    if (clientLower.includes('complex') && clientLower.includes('nyc')) {
        return 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // NYC entertainment event
    }
    if (clientLower.includes('complexcon')) {
        return 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Convention/festival
    }
    if (clientLower.includes('neer') || clientLower.includes('dental')) {
        return 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Medical/dental
    }
    if (clientLower.includes('gopuff')) {
        return 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Delivery/tech
    }
    if (clientLower.includes('grubhub')) {
        return 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Food delivery
    }
    if (clientLower.includes('ima') || clientLower.includes('medical group')) {
        return 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Healthcare clinic
    }
    if (clientLower.includes('lyft')) {
        return 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Rideshare/transportation
    }
    if (clientLower.includes('meijer')) {
        return 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Retail/grocery
    }
    if (clientLower.includes('pride')) {
        return 'https://images.unsplash.com/photo-1573455494060-c5595004fb6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Pride celebration
    }
    if (clientLower.includes('starbucks')) {
        return 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Coffee/cafe
    }
    if (clientLower.includes('avail')) {
        return 'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Car sharing
    }
    if (clientLower.includes('moxie')) {
        return 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Communications/PR
    }
    if (clientLower.includes('qwick') && clientLower.includes('sxsw')) {
        return 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // SXSW festival
    }
    if (clientLower.includes('duracell')) {
        return 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Racing/batteries
    }
    if (clientLower.includes('apres') || clientLower.includes('bio me')) {
        return 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Wellness/health
    }
    if (clientLower.includes('beer') && clientLower.includes('sampling')) {
        return 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Beer tasting
    }
    
    // Default professional experiential marketing event
    return 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
}

function createGoogleDriveImageUrl(googleDriveFolderUrl: string): string {
    if (!googleDriveFolderUrl || !googleDriveFolderUrl.includes('drive.google.com')) {
        return 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    }
    
    // Extract folder ID from Google Drive URL
    const folderIdMatch = googleDriveFolderUrl.match(/folders\/([a-zA-Z0-9-_]+)/);
    if (!folderIdMatch) {
        return 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    }
    
    const folderId = folderIdMatch[1];
    
    // Create a Google Drive image URL using the most reliable method
    // Return the original folder URL so our component can try different methods
    return googleDriveFolderUrl;
}

// Mock case studies for development
function getMockCaseStudies(): CaseStudyWithImages[] {
    return [
        {
            id: "1",
            title: "Microsoft Surface NRF 2024 - Times Square Takeover",
            client: "Microsoft",
            industry: "Technology",
            campaign_type: "Product Launch",
            description: "Transformed Times Square into an immersive Surface experience with 100+ brand ambassadors demonstrating the new Surface lineup to over 50,000 attendees during NRF 2024. Created interactive zones showcasing AI capabilities and business solutions.",
            results: "Generated 15,000+ qualified leads, 8M+ social impressions, and 95% positive sentiment. Achieved 3x target for product trials with enterprise decision-makers.",
            what_we_did: "End-to-end event production, brand ambassador training, interactive demo stations, VIP experience management, real-time lead capture system",
            services_provided: ["Event Production", "Brand Ambassadors", "Lead Generation", "VIP Management"],
            markets: ["New York", "National"],
            product_offering: "Surface Pro, Surface Laptop, Surface Hub",
            google_drive_folder: "",
            assets_folder: "",
            notion_url: "",
            image_url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
            has_real_assets: true,
            google_drive_images: [],
            date: "2024-01-15",
            status: "completed",
            client_logo_url: ""
        },
        {
            id: "2",
            title: "Netflix Stranger Things 5 - Nationwide Mall Tour",
            client: "Netflix",
            industry: "Entertainment",
            campaign_type: "Brand Activation",
            description: "Created an 80s-themed upside-down world experience across 25 major shopping centers. Immersive sets, character meet-and-greets, and exclusive preview screenings drove massive fan engagement.",
            results: "2.5M+ direct interactions, 50M+ social reach, #StrangerThings5 trending #1 nationally for 3 days. 40% increase in new season viewership.",
            what_we_did: "National tour management, custom set design, talent coordination, social media integration, fan experience design",
            services_provided: ["Tour Management", "Experiential Design", "Social Activation", "Talent Management"],
            markets: ["Los Angeles", "Chicago", "Miami", "Dallas", "Seattle"],
            product_offering: "Stranger Things Season 5",
            google_drive_folder: "",
            assets_folder: "",
            notion_url: "",
            image_url: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&q=80",
            has_real_assets: true,
            google_drive_images: [],
            date: "2024-02-20",
            status: "completed",
            client_logo_url: ""
        },
        {
            id: "3",
            title: "Apple Camp Grizzly - WWDC Developer Experience",
            client: "Apple",
            industry: "Technology",
            campaign_type: "Corporate Event",
            description: "Exclusive outdoor retreat for 500+ top developers during WWDC. Created 'Camp Grizzly' with coding challenges, product workshops, and networking under the stars in Yosemite.",
            results: "100% attendee satisfaction, 200+ apps developed on-site, featured in TechCrunch and The Verge. Strengthened developer loyalty with 95% returning for next year.",
            what_we_did: "Venue transformation, developer experience design, workshop facilitation, outdoor logistics, VIP hospitality",
            services_provided: ["Event Design", "Corporate Hospitality", "Workshop Management", "VIP Services"],
            markets: ["San Francisco", "Yosemite"],
            product_offering: "Developer Relations",
            google_drive_folder: "",
            assets_folder: "",
            notion_url: "",
            image_url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
            has_real_assets: true,
            google_drive_images: [],
            date: "2024-06-10",
            status: "completed",
            client_logo_url: ""
        },
        {
            id: "4",
            title: "MrBeast Feastables - World's Largest Chocolate Factory Pop-Up",
            client: "MrBeast",
            industry: "Food & Beverage",
            campaign_type: "Product Sampling",
            description: "Built a 50,000 sq ft Willy Wonka-inspired chocolate factory in LA. Featured golden ticket hunts, unlimited samples, and surprise $10,000 giveaways to random visitors.",
            results: "500,000+ visitors in 2 weeks, 1M+ chocolate bars sampled, 100M+ YouTube views, sold out entire product line nationwide within 48 hours.",
            what_we_did: "Pop-up construction, crowd management, product sampling logistics, contest management, influencer coordination",
            services_provided: ["Pop-Up Production", "Sampling Campaign", "Contest Management", "Influencer Marketing"],
            markets: ["Los Angeles", "National Digital"],
            product_offering: "Feastables Chocolate",
            google_drive_folder: "",
            assets_folder: "",
            notion_url: "",
            image_url: "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?w=800&q=80",
            has_real_assets: true,
            google_drive_images: [],
            date: "2024-03-15",
            status: "completed",
            client_logo_url: ""
        },
        {
            id: "5",
            title: "Formula 1 Las Vegas - Paddock Club Experience",
            client: "Formula 1",
            industry: "Sports & Entertainment",
            campaign_type: "VIP Hospitality",
            description: "Managed exclusive Paddock Club experiences for 5,000+ VIP guests during Las Vegas Grand Prix. Coordinated driver meet-and-greets, luxury hospitality, and track experiences.",
            results: "$15M in hospitality revenue, 100% VIP satisfaction, 500+ corporate partnerships secured for 2025 season.",
            what_we_did: "VIP hospitality management, celebrity coordination, luxury catering, exclusive access experiences",
            services_provided: ["VIP Management", "Hospitality", "Celebrity Relations", "Luxury Services"],
            markets: ["Las Vegas"],
            product_offering: "F1 Paddock Club",
            google_drive_folder: "",
            assets_folder: "",
            notion_url: "",
            image_url: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
            has_real_assets: true,
            google_drive_images: [],
            date: "2023-11-18",
            status: "completed",
            client_logo_url: ""
        },
        {
            id: "6",
            title: "MAC Cosmetics - Glow Up Tour",
            client: "MAC Cosmetics",
            industry: "Beauty",
            campaign_type: "Product Launch",
            description: "30-city beauty tour featuring AR makeup try-ons, celebrity makeup artists, and personalized consultations. Mobile glam studios transformed city centers into beauty destinations.",
            results: "250,000+ makeovers, $5M in on-site sales, 300% increase in social engagement, 40% boost in quarterly sales.",
            what_we_did: "Mobile tour management, beauty consultant training, AR technology integration, influencer partnerships",
            services_provided: ["Mobile Tours", "Beauty Services", "Tech Integration", "Sales Activation"],
            markets: ["New York", "Los Angeles", "Miami", "Chicago", "Dallas"],
            product_offering: "MAC Studio Fix",
            google_drive_folder: "",
            assets_folder: "",
            notion_url: "",
            image_url: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80",
            has_real_assets: true,
            google_drive_images: [],
            date: "2024-04-01",
            status: "completed",
            client_logo_url: ""
        },
        {
            id: "7",
            title: "Buffalo Wild Wings - March Madness Stadium Experience",
            client: "Buffalo Wild Wings",
            industry: "Food & Beverage",
            campaign_type: "Sports Marketing",
            description: "Transformed 50 BWW locations into mini-stadiums with 360° screens, halftime shows, and celebrity appearances. Created the ultimate sports viewing experience.",
            results: "85% increase in March traffic, $20M in incremental revenue, 1M+ app downloads, highest customer satisfaction scores in company history.",
            what_we_did: "Venue transformation, entertainment booking, promotional campaigns, staff training, contest management",
            services_provided: ["Venue Design", "Entertainment", "Promotions", "Staff Training"],
            markets: ["National - 50 Cities"],
            product_offering: "March Madness Experience",
            google_drive_folder: "",
            assets_folder: "",
            notion_url: "",
            image_url: "https://images.unsplash.com/photo-1504016798967-59a258e9386d?w=800&q=80",
            has_real_assets: true,
            google_drive_images: [],
            date: "2024-03-01",
            status: "completed",
            client_logo_url: ""
        },
        {
            id: "8",
            title: "Williams Racing F1 - Fan Festival Miami",
            client: "Williams Racing",
            industry: "Motorsports",
            campaign_type: "Fan Engagement",
            description: "3-day festival featuring F1 simulators, pit stop challenges, and exclusive team meet-and-greets. Brought the thrill of Formula 1 to Miami Beach.",
            results: "75,000+ attendees, 20M+ social impressions, 5,000+ new merchandise sales, strengthened US fanbase by 200%.",
            what_we_did: "Festival production, simulator setup, team coordination, merchandise management, fan experience design",
            services_provided: ["Festival Production", "Fan Engagement", "Merchandise", "Team Management"],
            markets: ["Miami"],
            product_offering: "Williams Racing Experience",
            google_drive_folder: "",
            assets_folder: "",
            notion_url: "",
            image_url: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&q=80",
            has_real_assets: true,
            google_drive_images: [],
            date: "2024-05-05",
            status: "completed",
            client_logo_url: ""
        },
        {
            id: "9",
            title: "Cirque du Soleil - Surprise Street Performances",
            client: "Cirque du Soleil",
            industry: "Entertainment",
            campaign_type: "Guerrilla Marketing",
            description: "Orchestrated surprise performances in 10 major cities to promote new show. Flash mobs, aerial performances, and street acrobatics stopped traffic and captured hearts.",
            results: "500M+ video views, 50% increase in ticket sales, performances featured on major news networks, viral TikTok sensation.",
            what_we_did: "Guerrilla marketing strategy, performer coordination, permit management, video production, social amplification",
            services_provided: ["Guerrilla Marketing", "Performance Management", "Video Production", "Social Media"],
            markets: ["New York", "Los Angeles", "Chicago", "San Francisco", "Seattle"],
            product_offering: "Cirque du Soleil ECHO",
            google_drive_folder: "",
            assets_folder: "",
            notion_url: "",
            image_url: "https://images.unsplash.com/photo-1560707303-4e980ce876ad?w=800&q=80",
            has_real_assets: true,
            google_drive_images: [],
            date: "2024-01-20",
            status: "completed",
            client_logo_url: ""
        },
        {
            id: "10",
            title: "Nissan NFL Draft - Heisman House Experience",
            client: "Nissan",
            industry: "Automotive",
            campaign_type: "Sports Sponsorship",
            description: "Created immersive Heisman House experience at NFL Draft. Fans met Heisman winners, tested new vehicles on mini track, and participated in combine challenges.",
            results: "100,000+ visitors, 10,000+ test drives scheduled, 25% increase in brand favorability, #HeismanHouse trending throughout draft weekend.",
            what_we_did: "Experience design, athlete coordination, vehicle displays, interactive challenges, lead capture",
            services_provided: ["Sponsorship Activation", "Athlete Relations", "Test Drive Management", "Lead Generation"],
            markets: ["Detroit"],
            product_offering: "Nissan Full Line",
            google_drive_folder: "",
            assets_folder: "",
            notion_url: "",
            image_url: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
            has_real_assets: true,
            google_drive_images: [],
            date: "2024-04-25",
            status: "completed",
            client_logo_url: ""
        }
    ];
}