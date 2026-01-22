import { Client } from "@notionhq/client";
import { 
    fetchPagesFromDatabase, 
    pageToBlogPost, 
    pageToService, 
    pageToGallery,
    searchPages,
    fetchAllBlocks,
    parseNotionBlocks
} from "./notion-block-parser";

// Initialize Notion client only if secret is available
const notion = process.env.NOTION_INTEGRATION_SECRET 
    ? new Client({ auth: process.env.NOTION_INTEGRATION_SECRET })
    : null;

// Mock data for development when Notion is not configured
const MOCK_BLOG_POSTS = [
    {
        id: "1",
        slug: "future-of-experiential-marketing",
        title: "The Future of Experiential Marketing in 2025",
        excerpt: "Discover how technology and creativity are reshaping brand experiences in the digital age.",
        content: `
            <h2>The Evolution of Brand Experiences</h2>
            <p>Experiential marketing has transformed dramatically over the past decade, moving from simple product demonstrations to immersive, multi-sensory brand experiences that create lasting emotional connections with consumers.</p>
            <h3>Key Trends Shaping the Industry</h3>
            <ul>
                <li><strong>Virtual and Augmented Reality:</strong> Brands are leveraging VR and AR to create impossible experiences</li>
                <li><strong>Sustainability Focus:</strong> Eco-friendly activations are becoming the norm</li>
                <li><strong>Personalization at Scale:</strong> AI-driven personalization creates unique experiences for each attendee</li>
            </ul>
            <blockquote>The best experiential campaigns don't just showcase products; they create memories that last a lifetime.</blockquote>
            <h3>Case Study: Microsoft Surface at NRF</h3>
            <p>Our recent activation for Microsoft at NRF 2024 demonstrates the power of combining technology with human connection. We transformed Times Square into an interactive playground where attendees could experience the future of productivity.</p>
        `,
        author: "Sarah Johnson",
        category: "Industry Insights",
        tags: ["Experiential Marketing", "Technology", "Trends", "2025"],
        publishDate: "2025-01-15",
        featuredImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
        notionUrl: "",
        lastUpdated: "2025-01-15"
    },
    {
        id: "2",
        slug: "creating-memorable-brand-activations",
        title: "5 Secrets to Creating Memorable Brand Activations",
        excerpt: "Learn the proven strategies that make brand activations unforgettable and drive real business results.",
        content: `
            <h2>What Makes a Brand Activation Memorable?</h2>
            <p>After producing hundreds of brand activations for Fortune 500 companies, we've identified the key elements that separate good campaigns from great ones.</p>
            <h3>1. Start with Emotion, Not Product Features</h3>
            <p>The most successful activations tap into human emotions. Instead of listing product benefits, create experiences that make people feel something.</p>
            <h3>2. Create Instagram-Worthy Moments</h3>
            <p>Design your activation with social sharing in mind. Every element should be photogenic and shareable.</p>
            <h3>3. Engage All Five Senses</h3>
            <p>Don't just rely on visuals. Incorporate sound, touch, taste, and even scent to create a fully immersive experience.</p>
            <h3>4. Make It Interactive</h3>
            <p>Passive experiences are forgettable. Give attendees something to do, create, or discover.</p>
            <h3>5. Tell a Story</h3>
            <p>Every great activation has a narrative arc. Take attendees on a journey from beginning to end.</p>
        `,
        author: "Michael Chen",
        category: "Best Practices",
        tags: ["Brand Activation", "Strategy", "Marketing Tips"],
        publishDate: "2025-01-10",
        featuredImage: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
        notionUrl: "",
        lastUpdated: "2025-01-10"
    },
    {
        id: "3",
        slug: "measuring-roi-experiential-campaigns",
        title: "Measuring ROI in Experiential Marketing Campaigns",
        excerpt: "A comprehensive guide to tracking and measuring the success of your experiential marketing investments.",
        content: `
            <h2>Beyond Impressions: Measuring What Matters</h2>
            <p>Experiential marketing ROI goes beyond traditional metrics. Here's how to measure the true impact of your campaigns.</p>
            <h3>Key Performance Indicators</h3>
            <ul>
                <li><strong>Engagement Rate:</strong> Time spent at activation, interactions per visitor</li>
                <li><strong>Social Amplification:</strong> Shares, mentions, user-generated content</li>
                <li><strong>Lead Quality:</strong> Conversion rate of experiential leads vs. other channels</li>
                <li><strong>Brand Lift:</strong> Pre and post-campaign brand perception studies</li>
            </ul>
            <h3>Tools and Technologies</h3>
            <p>Modern technology makes it easier than ever to track experiential marketing success:</p>
            <ul>
                <li>RFID badges for tracking attendee journeys</li>
                <li>Social listening tools for sentiment analysis</li>
                <li>Lead capture apps with real-time CRM integration</li>
                <li>Heat mapping for understanding engagement zones</li>
            </ul>
        `,
        author: "David Park",
        category: "Analytics",
        tags: ["ROI", "Metrics", "Analytics", "Strategy"],
        publishDate: "2025-01-05",
        featuredImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        notionUrl: "",
        lastUpdated: "2025-01-05"
    }
];

const MOCK_SERVICES = [
    {
        id: "1",
        slug: "brand-activation-strategy",
        title: "Brand Activation Strategy",
        description: "Comprehensive strategy development for impactful brand activations",
        content: `
            <h2>Strategic Brand Activation Planning</h2>
            <p>Our brand activation strategy service helps you create meaningful connections between your brand and target audience through carefully planned experiential campaigns.</p>
            <h3>Our Process</h3>
            <ol>
                <li><strong>Discovery:</strong> Deep dive into your brand, goals, and target audience</li>
                <li><strong>Ideation:</strong> Creative brainstorming and concept development</li>
                <li><strong>Planning:</strong> Detailed activation roadmap and timeline</li>
                <li><strong>Execution:</strong> Flawless implementation with real-time optimization</li>
                <li><strong>Analysis:</strong> Comprehensive post-campaign reporting and insights</li>
            </ol>
            <h3>What's Included</h3>
            <ul>
                <li>Target audience research and persona development</li>
                <li>Creative concept development and refinement</li>
                <li>Budget planning and resource allocation</li>
                <li>Vendor management and coordination</li>
                <li>Risk assessment and contingency planning</li>
            </ul>
        `,
        price: null,
        duration: "4-8 weeks",
        features: ["Audience Research", "Creative Development", "Strategic Planning", "ROI Framework"],
        icon: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
        notionUrl: "",
        lastUpdated: "2025-01-15"
    },
    {
        id: "2",
        slug: "event-production-management",
        title: "Event Production & Management",
        description: "End-to-end event production services for memorable brand experiences",
        content: `
            <h2>Full-Service Event Production</h2>
            <p>From intimate VIP gatherings to large-scale festivals, we handle every aspect of event production to ensure your brand shines.</p>
            <h3>Our Capabilities</h3>
            <ul>
                <li>Venue sourcing and negotiation</li>
                <li>Stage design and construction</li>
                <li>Audio/visual production</li>
                <li>Talent booking and management</li>
                <li>Catering and hospitality</li>
                <li>Security and crowd management</li>
                <li>Permits and compliance</li>
            </ul>
            <h3>Recent Productions</h3>
            <p>We've produced events for Microsoft, Netflix, Apple, and dozens of other leading brands, managing budgets from $50K to $5M+.</p>
        `,
        price: null,
        duration: "Varies by project",
        features: ["Venue Management", "Technical Production", "Talent Coordination", "Logistics"],
        icon: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80",
        notionUrl: "",
        lastUpdated: "2025-01-15"
    },
    {
        id: "3",
        slug: "digital-integration",
        title: "Digital Integration & Social Amplification",
        description: "Extend your physical activations into the digital realm",
        content: `
            <h2>Bridging Physical and Digital Experiences</h2>
            <p>Maximize the impact of your experiential campaigns with seamless digital integration and social media amplification.</p>
            <h3>Services Include</h3>
            <ul>
                <li>Social media strategy and content creation</li>
                <li>Live streaming and virtual event production</li>
                <li>AR/VR experience development</li>
                <li>Influencer partnerships and management</li>
                <li>User-generated content campaigns</li>
                <li>Real-time social monitoring and engagement</li>
            </ul>
        `,
        price: null,
        duration: "Ongoing",
        features: ["Social Strategy", "Content Creation", "Live Streaming", "Influencer Management"],
        icon: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80",
        notionUrl: "",
        lastUpdated: "2025-01-15"
    }
];

const MOCK_GALLERIES = [
    {
        id: "1",
        slug: "microsoft-nrf-2024",
        title: "Microsoft Surface at NRF 2024",
        description: "Times Square takeover showcasing the new Surface lineup with interactive demos and immersive experiences",
        category: "Technology",
        tags: ["Microsoft", "Product Launch", "Times Square", "NRF"],
        date: "2024-01-15",
        images: [
            {
                url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
                caption: "Main event stage with LED displays",
                id: "img1"
            },
            {
                url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=80",
                caption: "Interactive product demonstration zones",
                id: "img2"
            },
            {
                url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&q=80",
                caption: "VIP experience area",
                id: "img3"
            },
            {
                url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80",
                caption: "AI-powered photo booth activation",
                id: "img4"
            }
        ],
        notionUrl: "",
        lastUpdated: "2024-01-15"
    },
    {
        id: "2",
        slug: "netflix-stranger-things-tour",
        title: "Netflix Stranger Things Mall Tour",
        description: "Immersive upside-down world experience across 25 shopping centers nationwide",
        category: "Entertainment",
        tags: ["Netflix", "Experiential", "National Tour", "Stranger Things"],
        date: "2024-02-20",
        images: [
            {
                url: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=1200&q=80",
                caption: "Upside Down entrance portal",
                id: "img5"
            },
            {
                url: "https://images.unsplash.com/photo-1578662996442-48f60103fc61?w=1200&q=80",
                caption: "80s themed arcade activation",
                id: "img6"
            },
            {
                url: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=1200&q=80",
                caption: "Character meet and greet area",
                id: "img7"
            }
        ],
        notionUrl: "",
        lastUpdated: "2024-02-20"
    },
    {
        id: "3",
        slug: "formula-one-las-vegas",
        title: "Formula One Las Vegas Activation",
        description: "High-octane brand experience on the Las Vegas Strip during race weekend",
        category: "Sports",
        tags: ["Formula 1", "Las Vegas", "Sports Marketing", "Luxury"],
        date: "2024-03-15",
        images: [
            {
                url: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1200&q=80",
                caption: "F1 racing simulator experience",
                id: "img8"
            },
            {
                url: "https://images.unsplash.com/photo-1552849397-7a2d7864a9b5?w=1200&q=80",
                caption: "Pit stop challenge activation",
                id: "img9"
            },
            {
                url: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1200&q=80",
                caption: "Luxury car showcase",
                id: "img10"
            }
        ],
        notionUrl: "",
        lastUpdated: "2024-03-15"
    }
];

// Fetch blog posts from Notion or return mock data
export async function fetchNotionBlogPosts(databaseId?: string): Promise<any[]> {
    if (!notion) {
        console.log("Notion not configured, returning mock blog posts");
        return MOCK_BLOG_POSTS;
    }
    
    try {
        // If no database ID provided, search for blog-related pages
        let pages: any[] = [];
        
        if (databaseId) {
            pages = await fetchPagesFromDatabase(databaseId);
        } else {
            // Search for blog posts in the workspace
            pages = await searchPages("blog post");
            
            // If no blog posts found, search for articles
            if (pages.length === 0) {
                pages = await searchPages("article");
            }
            
            // If still no content, search for general content pages
            if (pages.length === 0) {
                pages = await searchPages("marketing");
            }
        }
        
        // Convert pages to blog post format
        const blogPosts = await Promise.all(
            pages.map(page => pageToBlogPost(page))
        );
        
        // If we have blog posts from Notion, return them
        if (blogPosts.length > 0) {
            return blogPosts;
        }
        
        // Otherwise return mock data
        return MOCK_BLOG_POSTS;
        
    } catch (error) {
        console.error("Error fetching blog posts from Notion:", error);
        return MOCK_BLOG_POSTS;
    }
}

// Fetch services from Notion or return mock data
export async function fetchNotionServices(databaseId?: string): Promise<any[]> {
    if (!notion) {
        console.log("Notion not configured, returning mock services");
        return MOCK_SERVICES;
    }
    
    try {
        let pages: any[] = [];
        
        if (databaseId) {
            pages = await fetchPagesFromDatabase(databaseId);
        } else {
            // Search for service-related pages
            pages = await searchPages("service");
            
            if (pages.length === 0) {
                pages = await searchPages("offering");
            }
            
            if (pages.length === 0) {
                pages = await searchPages("product");
            }
        }
        
        // Convert pages to service format
        const services = await Promise.all(
            pages.map(page => pageToService(page))
        );
        
        if (services.length > 0) {
            return services;
        }
        
        return MOCK_SERVICES;
        
    } catch (error) {
        console.error("Error fetching services from Notion:", error);
        return MOCK_SERVICES;
    }
}

// Fetch galleries from Notion or return mock data
export async function fetchNotionGalleries(databaseId?: string): Promise<any[]> {
    if (!notion) {
        console.log("Notion not configured, returning mock galleries");
        return MOCK_GALLERIES;
    }
    
    try {
        let pages: any[] = [];
        
        if (databaseId) {
            pages = await fetchPagesFromDatabase(databaseId);
        } else {
            // Search for gallery-related pages
            pages = await searchPages("gallery");
            
            if (pages.length === 0) {
                pages = await searchPages("photos");
            }
            
            if (pages.length === 0) {
                pages = await searchPages("portfolio");
            }
            
            if (pages.length === 0) {
                pages = await searchPages("event");
            }
        }
        
        // Convert pages to gallery format
        const galleries = await Promise.all(
            pages.map(page => pageToGallery(page))
        );
        
        // Filter out galleries with no images
        const galleriesWithImages = galleries.filter(g => g.images && g.images.length > 0);
        
        if (galleriesWithImages.length > 0) {
            return galleriesWithImages;
        }
        
        return MOCK_GALLERIES;
        
    } catch (error) {
        console.error("Error fetching galleries from Notion:", error);
        return MOCK_GALLERIES;
    }
}

// Fetch a single page content from Notion
export async function fetchNotionPageContent(pageId: string): Promise<any> {
    if (!notion) {
        console.log("Notion not configured");
        return null;
    }
    
    try {
        // Fetch the page
        const page = await notion.pages.retrieve({ page_id: pageId });
        
        // Fetch all blocks
        const blocks = await fetchAllBlocks(pageId);
        
        // Parse blocks to HTML
        const content = await parseNotionBlocks(blocks);
        
        // Extract properties
        const properties = (page as any).properties || {};
        const title = properties.Name?.title?.[0]?.plain_text || 
                      properties.Title?.title?.[0]?.plain_text || 
                      'Untitled';
        
        return {
            id: pageId,
            title,
            content,
            notionUrl: (page as any).url,
            lastUpdated: (page as any).last_edited_time
        };
        
    } catch (error) {
        console.error("Error fetching Notion page content:", error);
        return null;
    }
}

// Job Posting Types and Data
interface JobPosting {
    id: string;
    title: string;
    location: string;
    city: string;
    state: string;
    type: string;
    category: string;
    description: string;
    requirements: string[];
    isActive: boolean;
    featured: boolean;
    payRange?: string;
    createdAt: string;
    updatedAt: string;
}

// Mock job postings for development
const MOCK_JOB_POSTINGS: JobPosting[] = [
    {
        id: "job-1",
        title: "Brand Ambassador",
        location: "Los Angeles, CA",
        city: "Los Angeles",
        state: "CA",
        type: "Part-time / Flexible",
        category: "Brand Ambassador",
        description: "Represent premium brands at retail locations and events throughout LA. Engage customers, demonstrate products, and create memorable brand experiences.",
        requirements: ["Excellent communication skills", "Outgoing personality", "Reliable transportation", "Previous brand ambassador experience preferred"],
        isActive: true,
        featured: true,
        payRange: "$20-35/hr",
        createdAt: "2025-01-01",
        updatedAt: "2025-01-10"
    },
    {
        id: "job-2",
        title: "Event Staff",
        location: "New York, NY",
        city: "New York",
        state: "NY",
        type: "Part-time / Flexible",
        category: "Event Staff",
        description: "Support high-profile brand activations and experiential marketing events in the NYC metro area. Work with top brands at exciting venues.",
        requirements: ["Ability to stand for extended periods", "Professional appearance", "Team player", "Flexible schedule"],
        isActive: true,
        featured: true,
        payRange: "$22-40/hr",
        createdAt: "2025-01-01",
        updatedAt: "2025-01-10"
    },
    {
        id: "job-3",
        title: "Promotional Model",
        location: "Miami, FL",
        city: "Miami",
        state: "FL",
        type: "Part-time / Flexible",
        category: "Promotional Model",
        description: "Engage consumers at trade shows, conventions, and product launches. Represent brands with professionalism and enthusiasm.",
        requirements: ["Professional appearance", "Excellent communication", "Comfortable in front of cameras", "Reliable"],
        isActive: true,
        featured: false,
        payRange: "$25-50/hr",
        createdAt: "2025-01-01",
        updatedAt: "2025-01-10"
    },
    {
        id: "job-4",
        title: "Street Team Member",
        location: "Chicago, IL",
        city: "Chicago",
        state: "IL",
        type: "Part-time / Flexible",
        category: "Street Team",
        description: "Execute guerrilla marketing campaigns and grassroots brand awareness initiatives. High energy role for outgoing individuals.",
        requirements: ["High energy", "Outgoing personality", "Comfortable approaching strangers", "Physical stamina"],
        isActive: true,
        featured: false,
        payRange: "$18-30/hr",
        createdAt: "2025-01-01",
        updatedAt: "2025-01-10"
    },
    {
        id: "job-5",
        title: "Brand Ambassador",
        location: "Denver, CO",
        city: "Denver",
        state: "CO",
        type: "Part-time / Flexible",
        category: "Brand Ambassador",
        description: "Lead product sampling and demonstration programs for national brands in the Denver metro area.",
        requirements: ["Product knowledge aptitude", "Sales experience helpful", "Valid driver's license", "Flexible availability"],
        isActive: true,
        featured: true,
        payRange: "$20-35/hr",
        createdAt: "2025-01-01",
        updatedAt: "2025-01-10"
    },
    {
        id: "job-6",
        title: "Event Coordinator",
        location: "Austin, TX",
        city: "Austin",
        state: "TX",
        type: "Part-time / Flexible",
        category: "Event Coordinator",
        description: "Manage on-site logistics and team coordination for brand events. Leadership role for experienced event professionals.",
        requirements: ["Event management experience", "Leadership skills", "Problem-solving ability", "Excellent communication"],
        isActive: true,
        featured: false,
        payRange: "$25-45/hr",
        createdAt: "2025-01-01",
        updatedAt: "2025-01-10"
    },
    {
        id: "job-7",
        title: "Convention Staff",
        location: "Las Vegas, NV",
        city: "Las Vegas",
        state: "NV",
        type: "Part-time / Flexible",
        category: "Convention Staff",
        description: "Work major conventions and trade shows at the Las Vegas Convention Center. CES, NAB, and more.",
        requirements: ["Convention experience a plus", "Professional demeanor", "Ability to work long shifts", "Strong communication skills"],
        isActive: true,
        featured: true,
        payRange: "$22-40/hr",
        createdAt: "2025-01-01",
        updatedAt: "2025-01-10"
    },
    {
        id: "job-8",
        title: "Trade Show Specialist",
        location: "San Francisco, CA",
        city: "San Francisco",
        state: "CA",
        type: "Part-time / Flexible",
        category: "Trade Show",
        description: "Represent tech companies at major industry conferences. Knowledge of technology trends helpful.",
        requirements: ["Tech industry knowledge", "Professional appearance", "Quick learner", "Engaging personality"],
        isActive: true,
        featured: false,
        payRange: "$25-45/hr",
        createdAt: "2025-01-01",
        updatedAt: "2025-01-10"
    }
];

// In-memory job postings storage
let jobPostings: JobPosting[] = [...MOCK_JOB_POSTINGS];

// Fetch job postings
export async function fetchJobPostings(): Promise<JobPosting[]> {
    return jobPostings.filter(job => job.isActive);
}

// Get all job postings (including inactive) for admin
export function getAllJobPostings(): JobPosting[] {
    return jobPostings;
}

// Add a new job posting
export function addJobPosting(job: Omit<JobPosting, 'id' | 'createdAt' | 'updatedAt'>): JobPosting {
    const newJob: JobPosting = {
        ...job,
        id: `job-${Date.now()}`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
    jobPostings.push(newJob);
    return newJob;
}

// Update a job posting
export function updateJobPosting(id: string, updates: Partial<JobPosting>): JobPosting | null {
    const index = jobPostings.findIndex(job => job.id === id);
    if (index === -1) return null;

    jobPostings[index] = {
        ...jobPostings[index],
        ...updates,
        updatedAt: new Date().toISOString()
    };
    return jobPostings[index];
}

// Delete a job posting
export function deleteJobPosting(id: string): boolean {
    const index = jobPostings.findIndex(job => job.id === id);
    if (index === -1) return false;

    jobPostings.splice(index, 1);
    return true;
}

// Get job categories
export function getJobCategories(): string[] {
    return [...new Set(jobPostings.map(job => job.category))];
}

// Get job locations
export function getJobLocations(): string[] {
    return [...new Set(jobPostings.map(job => job.location))];
}