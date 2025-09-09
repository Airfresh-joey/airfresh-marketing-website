import { Client } from "@notionhq/client";

const notion = new Client({
    auth: process.env.NOTION_INTEGRATION_SECRET!,
});

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
}

// Complete list of case studies from user with their Notion URLs
const CASE_STUDIES_LIST = [
    { title: "Microsoft (NRF)", id: "1adda91659c6809a8eb9ebe1d9cf4a4c" },
    { title: "Netflix", id: "1adda91659c68010a220c87f1231c935" },
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
    { title: "Waiakea Water", id: "1adda91659c680a4bb30d9fa176d9491" },
    { title: "Topps (Digital Trading Card)", id: "1adda91659c68058a02cd2cbf957055a" },
    { title: "Wagamama", id: "1adda91659c680299a7fedea91150f30" },
    { title: "Culinary Dropout", id: "1adda91659c6806c8c23f7177e156aa1" },
    { title: "BYOMA", id: "1adda91659c680878855fbc6a1d8a482" },
    { title: "Katjes", id: "1adda91659c680a68066c4f26be0391b" },
    { title: "PeelzOn", id: "1adda91659c6801aaa05c1702f4b75c9" },
    { title: "TED Talk", id: "1adda91659c68019bd88f1e5e6601e10" },
    { title: "Polaris (NRF)", id: "1adda91659c680aea6c8f9ae5272d18c" },
    { title: "Car Wash Promotion", id: "1adda91659c68074bd7dc5da1f111a90" },
    { title: "Skinny Mixes", id: "1c0da91659c680969cf2dba3114023ad" },
    { title: "Solar Company", id: "1adda91659c68082bf24cdc38610211f" },
    { title: "Bond Vet", id: "1adda91659c680e2a938ed71939ff864" },
    { title: "Brooklyn Magazine", id: "1adda91659c680f6be6ef0d39e6839da" },
    { title: "Paradise Body", id: "1adda91659c68063b872fefb796610d1" },
    { title: "The Sun Club Golf", id: "1adda91659c6802996f4db045cb88c88" },
    { title: "Cortie - Digital Yalo", id: "1adda91659c6805aa56fdcef106e666e" },
    { title: "Qwuick", id: "1adda91659c680b88db2f1a2be210c82" }
];

export async function fetchCaseStudiesWithImages(): Promise<CaseStudyWithImages[]> {
    try {
        console.log("Fetching case studies with Google Drive images...");
        
        const caseStudies: CaseStudyWithImages[] = [];
        
        for (const study of CASE_STUDIES_LIST) {
            try {
                const caseStudy = await fetchSpecificCaseStudyWithImages(study.id, study.title);
                if (caseStudy) {
                    caseStudies.push(caseStudy);
                }
            } catch (error) {
                console.error(`Error fetching case study ${study.title}:`, error);
                // Create a basic case study entry if fetch fails
                const basicCaseStudy = createBasicCaseStudyWithImages(study.id, study.title);
                caseStudies.push(basicCaseStudy);
            }
        }
        
        console.log(`Successfully fetched ${caseStudies.length} case studies with images`);
        return caseStudies;
        
    } catch (error) {
        console.error("Error fetching case studies with images:", error);
        return [];
    }
}

async function fetchSpecificCaseStudyWithImages(pageId: string, title: string): Promise<CaseStudyWithImages | null> {
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
        const google_drive_images = extractGoogleDriveImages(assets_folder || google_drive_folder);
        
        // Use Google Drive image if available, otherwise use client-specific stock image
        const image_url = google_drive_images.length > 0 ? 
            google_drive_images[0] : 
            getClientSpecificImage(client, industry, campaign_type);
        
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
            status: 'Published'
        };
        
        console.log(`✓ ${title} - Real Assets: ${has_real_assets ? 'Yes' : 'No'} - Images: ${google_drive_images.length}`);
        return caseStudy;
        
    } catch (error) {
        console.error(`Error fetching specific case study ${title}:`, error);
        return null;
    }
}

function extractGoogleDriveImages(googleDriveFolderUrl: string): string[] {
    if (!googleDriveFolderUrl || !googleDriveFolderUrl.includes('drive.google.com')) {
        return [];
    }
    
    // Extract folder ID from Google Drive URL
    const folderIdMatch = googleDriveFolderUrl.match(/folders\/([a-zA-Z0-9-_]+)/);
    if (!folderIdMatch) {
        return [];
    }
    
    const folderId = folderIdMatch[1];
    
    // Create different formats that might work for displaying Google Drive content
    const imageUrls = [
        // Embedded folder view - shows folder contents in an iframe-like format
        `https://drive.google.com/embeddedfolderview?id=${folderId}#grid`,
        
        // Direct folder link for opening in new tab
        googleDriveFolderUrl,
        
        // Try thumbnail format (may work for some folders)
        `https://drive.google.com/thumbnail?id=${folderId}&sz=w800-h600`
    ];
    
    console.log(`Extracted ${imageUrls.length} image URLs from Google Drive folder: ${folderId}`);
    return imageUrls;
}

function createBasicCaseStudyWithImages(pageId: string, title: string): CaseStudyWithImages {
    const client = title.split('(')[0].trim();
    
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
        image_url: getClientSpecificImage(client, 'Marketing', 'Brand Activation'),
        has_real_assets: false,
        google_drive_images: [],
        date: new Date().toISOString().split('T')[0],
        status: 'Published'
    };
}

function getClientSpecificImage(client: string, industry: string, campaign_type: string): string {
    const clientLower = client.toLowerCase();
    
    // Client-specific high-quality images
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
    if (clientLower.includes('mac') || clientLower.includes('cosmetic')) {
        return 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    }
    if (clientLower.includes('buffalo') || clientLower.includes('wild') || clientLower.includes('wings')) {
        return 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    }
    if (clientLower.includes('cirque') || clientLower.includes('soleil')) {
        return 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    }
    if (clientLower.includes('nissan')) {
        return 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    }
    if (clientLower.includes('tequila') || clientLower.includes('1800')) {
        return 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    }
    if (clientLower.includes('waiakea') || clientLower.includes('water')) {
        return 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    }
    if (clientLower.includes('topps') || clientLower.includes('trading')) {
        return 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    }
    if (clientLower.includes('wagamama') || clientLower.includes('culinary')) {
        return 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    }
    if (clientLower.includes('clarins') || clientLower.includes('byoma')) {
        return 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    }
    if (clientLower.includes('ted')) {
        return 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    }
    if (clientLower.includes('car') || clientLower.includes('wash')) {
        return 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    }
    if (clientLower.includes('solar')) {
        return 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    }
    if (clientLower.includes('golf')) {
        return 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    }
    
    // Default professional event image
    return 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
}