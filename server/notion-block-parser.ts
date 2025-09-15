import { Client } from "@notionhq/client";

// Initialize Notion client only if secret is available
const notion = process.env.NOTION_INTEGRATION_SECRET 
    ? new Client({ auth: process.env.NOTION_INTEGRATION_SECRET }) as any
    : null;

// Rich text annotations interface
interface Annotations {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
}

// Rich text object interface
interface RichTextItem {
    type: string;
    text?: {
        content: string;
        link?: { url: string };
    };
    annotations?: Annotations;
    plain_text: string;
    href?: string | null;
}

// Parse rich text to HTML
export function parseRichText(richTextArray: RichTextItem[]): string {
    if (!richTextArray || !Array.isArray(richTextArray)) return '';
    
    return richTextArray.map((item: RichTextItem) => {
        let text = item.plain_text || '';
        
        // Apply annotations
        if (item.annotations) {
            if (item.annotations.bold) text = `<strong>${text}</strong>`;
            if (item.annotations.italic) text = `<em>${text}</em>`;
            if (item.annotations.underline) text = `<u>${text}</u>`;
            if (item.annotations.strikethrough) text = `<s>${text}</s>`;
            if (item.annotations.code) text = `<code>${text}</code>`;
        }
        
        // Apply link
        if (item.href) {
            text = `<a href="${item.href}" target="_blank" rel="noopener noreferrer">${text}</a>`;
        }
        
        return text;
    }).join('');
}

// Parse Notion blocks to HTML
export async function parseNotionBlocks(blocks: any[]): Promise<string> {
    const htmlParts: string[] = [];
    let listItems: string[] = [];
    let listType: 'ul' | 'ol' | null = null;
    
    for (const block of blocks) {
        // Close any open lists if we encounter a non-list block
        if (listItems.length > 0 && !['bulleted_list_item', 'numbered_list_item'].includes(block.type)) {
            htmlParts.push(`<${listType}>${listItems.join('')}</${listType}>`);
            listItems = [];
            listType = null;
        }
        
        switch (block.type) {
            case 'paragraph':
                const paragraphText = parseRichText(block.paragraph?.rich_text || []);
                if (paragraphText) {
                    htmlParts.push(`<p>${paragraphText}</p>`);
                }
                break;
                
            case 'heading_1':
                const h1Text = parseRichText(block.heading_1?.rich_text || []);
                if (h1Text) {
                    htmlParts.push(`<h1>${h1Text}</h1>`);
                }
                break;
                
            case 'heading_2':
                const h2Text = parseRichText(block.heading_2?.rich_text || []);
                if (h2Text) {
                    htmlParts.push(`<h2>${h2Text}</h2>`);
                }
                break;
                
            case 'heading_3':
                const h3Text = parseRichText(block.heading_3?.rich_text || []);
                if (h3Text) {
                    htmlParts.push(`<h3>${h3Text}</h3>`);
                }
                break;
                
            case 'bulleted_list_item':
                const bulletText = parseRichText(block.bulleted_list_item?.rich_text || []);
                if (bulletText) {
                    listItems.push(`<li>${bulletText}</li>`);
                    listType = 'ul';
                }
                break;
                
            case 'numbered_list_item':
                const numberText = parseRichText(block.numbered_list_item?.rich_text || []);
                if (numberText) {
                    listItems.push(`<li>${numberText}</li>`);
                    listType = 'ol';
                }
                break;
                
            case 'quote':
                const quoteText = parseRichText(block.quote?.rich_text || []);
                if (quoteText) {
                    htmlParts.push(`<blockquote>${quoteText}</blockquote>`);
                }
                break;
                
            case 'callout':
                const calloutText = parseRichText(block.callout?.rich_text || []);
                const icon = block.callout?.icon?.emoji || '💡';
                if (calloutText) {
                    htmlParts.push(`<div class="callout"><span class="callout-icon">${icon}</span><div class="callout-content">${calloutText}</div></div>`);
                }
                break;
                
            case 'divider':
                htmlParts.push('<hr />');
                break;
                
            case 'image':
                const imageUrl = block.image?.file?.url || block.image?.external?.url;
                const caption = parseRichText(block.image?.caption || []);
                if (imageUrl) {
                    htmlParts.push(`
                        <figure>
                            <img src="${imageUrl}" alt="${caption || 'Image'}" loading="lazy" />
                            ${caption ? `<figcaption>${caption}</figcaption>` : ''}
                        </figure>
                    `);
                }
                break;
                
            case 'video':
                const videoUrl = block.video?.file?.url || block.video?.external?.url;
                if (videoUrl) {
                    // Check if it's a YouTube or Vimeo URL
                    if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
                        const videoId = extractYouTubeId(videoUrl);
                        if (videoId) {
                            htmlParts.push(`
                                <div class="video-container">
                                    <iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                                </div>
                            `);
                        }
                    } else if (videoUrl.includes('vimeo.com')) {
                        const videoId = extractVimeoId(videoUrl);
                        if (videoId) {
                            htmlParts.push(`
                                <div class="video-container">
                                    <iframe src="https://player.vimeo.com/video/${videoId}" frameborder="0" allowfullscreen></iframe>
                                </div>
                            `);
                        }
                    } else {
                        htmlParts.push(`
                            <video controls>
                                <source src="${videoUrl}" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        `);
                    }
                }
                break;
                
            case 'code':
                const codeText = parseRichText(block.code?.rich_text || []);
                const language = block.code?.language || 'text';
                if (codeText) {
                    htmlParts.push(`<pre><code class="language-${language}">${escapeHtml(codeText)}</code></pre>`);
                }
                break;
                
            case 'toggle':
                const toggleText = parseRichText(block.toggle?.rich_text || []);
                if (toggleText) {
                    htmlParts.push(`
                        <details>
                            <summary>${toggleText}</summary>
                            <div class="toggle-content">
                                ${block.has_children ? 'Content available in Notion' : ''}
                            </div>
                        </details>
                    `);
                }
                break;
                
            case 'embed':
                const embedUrl = block.embed?.url;
                if (embedUrl) {
                    htmlParts.push(`
                        <div class="embed-container">
                            <iframe src="${embedUrl}" frameborder="0" allowfullscreen></iframe>
                        </div>
                    `);
                }
                break;
                
            default:
                console.log(`Unsupported block type: ${block.type}`);
        }
    }
    
    // Close any remaining open lists
    if (listItems.length > 0 && listType) {
        htmlParts.push(`<${listType}>${listItems.join('')}</${listType}>`);
    }
    
    return htmlParts.join('\n');
}

// Helper function to escape HTML
function escapeHtml(text: string): string {
    const map: { [key: string]: string } = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Extract YouTube video ID from URL
function extractYouTubeId(url: string): string | null {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&\n?#]+)/);
    return match ? match[1] : null;
}

// Extract Vimeo video ID from URL
function extractVimeoId(url: string): string | null {
    const match = url.match(/vimeo\.com\/(\d+)/);
    return match ? match[1] : null;
}

// Fetch all children blocks of a page or block
export async function fetchAllBlocks(blockId: string): Promise<any[]> {
    if (!notion) {
        console.log("Notion client not initialized");
        return [];
    }
    
    const blocks: any[] = [];
    let cursor: string | undefined = undefined;
    
    try {
        do {
            const response: any = await notion.blocks.children.list({
                block_id: blockId,
                start_cursor: cursor,
                page_size: 100
            });
            
            blocks.push(...response.results);
            cursor = response.has_more ? response.next_cursor || undefined : undefined;
        } while (cursor);
        
        // Recursively fetch children for blocks that have children
        for (const block of blocks) {
            if (block.has_children) {
                const children = await fetchAllBlocks(block.id);
                block.children = children;
            }
        }
        
        return blocks;
    } catch (error) {
        console.error("Error fetching blocks:", error);
        return [];
    }
}

// Fetch pages from a Notion database
export async function fetchPagesFromDatabase(databaseId: string): Promise<any[]> {
    if (!notion) {
        console.log("Notion client not initialized");
        return [];
    }
    
    const pages: any[] = [];
    let cursor: string | undefined = undefined;
    
    try {
        do {
            const response: any = await notion.databases.query({
                database_id: databaseId,
                start_cursor: cursor,
                page_size: 100,
                sorts: [
                    {
                        property: 'created_time',
                        direction: 'descending'
                    }
                ]
            });
            
            pages.push(...response.results);
            cursor = response.has_more ? response.next_cursor || undefined : undefined;
        } while (cursor);
        
        return pages;
    } catch (error) {
        console.error("Error fetching pages from database:", error);
        return [];
    }
}

// Convert a Notion page to blog post format
export async function pageToBlogPost(page: any): Promise<any> {
    const properties = page.properties || {};
    
    // Extract common blog post properties
    const title = properties.Name?.title?.[0]?.plain_text || 
                  properties.Title?.title?.[0]?.plain_text || 
                  'Untitled';
    
    const excerpt = properties.Excerpt?.rich_text?.[0]?.plain_text || 
                    properties.Summary?.rich_text?.[0]?.plain_text || 
                    '';
    
    const author = properties.Author?.rich_text?.[0]?.plain_text || 
                   properties.Created_by?.created_by?.name || 
                   'AirFresh Marketing';
    
    const category = properties.Category?.select?.name || 
                     properties.Type?.select?.name || 
                     'Marketing';
    
    const tags = properties.Tags?.multi_select?.map((tag: any) => tag.name) || [];
    
    const publishDate = properties.Published?.date?.start || 
                        properties.Date?.date?.start || 
                        page.created_time;
    
    const featuredImage = properties.Featured_Image?.url || 
                          properties.Cover?.url || 
                          properties.Image?.url || 
                          '';
    
    // Fetch the page content blocks
    const blocks = await fetchAllBlocks(page.id);
    const content = await parseNotionBlocks(blocks);
    
    return {
        id: page.id,
        slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        title,
        excerpt,
        content,
        author,
        category,
        tags,
        publishDate,
        featuredImage,
        notionUrl: page.url,
        lastUpdated: page.last_edited_time
    };
}

// Convert a Notion page to service page format
export async function pageToService(page: any): Promise<any> {
    const properties = page.properties || {};
    
    const title = properties.Name?.title?.[0]?.plain_text || 
                  properties.Service?.title?.[0]?.plain_text || 
                  'Untitled Service';
    
    const description = properties.Description?.rich_text?.[0]?.plain_text || '';
    const price = properties.Price?.number || properties.Cost?.number || null;
    const duration = properties.Duration?.rich_text?.[0]?.plain_text || '';
    const features = properties.Features?.multi_select?.map((f: any) => f.name) || [];
    const icon = properties.Icon?.url || properties.Image?.url || '';
    
    // Fetch the page content blocks
    const blocks = await fetchAllBlocks(page.id);
    const content = await parseNotionBlocks(blocks);
    
    return {
        id: page.id,
        slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        title,
        description,
        content,
        price,
        duration,
        features,
        icon,
        notionUrl: page.url,
        lastUpdated: page.last_edited_time
    };
}

// Convert a Notion page to gallery format
export async function pageToGallery(page: any): Promise<any> {
    const properties = page.properties || {};
    
    const title = properties.Name?.title?.[0]?.plain_text || 
                  properties.Gallery?.title?.[0]?.plain_text || 
                  'Untitled Gallery';
    
    const description = properties.Description?.rich_text?.[0]?.plain_text || '';
    const category = properties.Category?.select?.name || 'Events';
    const tags = properties.Tags?.multi_select?.map((tag: any) => tag.name) || [];
    const date = properties.Date?.date?.start || page.created_time;
    
    // Fetch all blocks to find images
    const blocks = await fetchAllBlocks(page.id);
    const images = extractImagesFromBlocks(blocks);
    
    return {
        id: page.id,
        slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        title,
        description,
        category,
        tags,
        date,
        images,
        notionUrl: page.url,
        lastUpdated: page.last_edited_time
    };
}

// Extract all images from blocks
function extractImagesFromBlocks(blocks: any[]): any[] {
    const images: any[] = [];
    
    for (const block of blocks) {
        if (block.type === 'image') {
            const imageUrl = block.image?.file?.url || block.image?.external?.url;
            const caption = parseRichText(block.image?.caption || []);
            
            if (imageUrl) {
                images.push({
                    url: imageUrl,
                    caption,
                    id: block.id
                });
            }
        }
        
        // Recursively check children blocks
        if (block.children && Array.isArray(block.children)) {
            images.push(...extractImagesFromBlocks(block.children));
        }
    }
    
    return images;
}

// Search for pages in Notion workspace
export async function searchPages(query: string): Promise<any[]> {
    if (!notion) {
        console.log("Notion client not initialized");
        return [];
    }
    
    try {
        const response = await notion.search({
            query,
            filter: {
                property: 'object',
                value: 'page'
            },
            page_size: 20
        });
        
        return response.results;
    } catch (error) {
        console.error("Error searching pages:", error);
        return [];
    }
}