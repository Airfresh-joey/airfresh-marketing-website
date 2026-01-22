import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertBlogPostSchema, insertCaseStudyRealSchema } from "@shared/schema";
import { setupAuth, registerAuthRoutes } from "./replit_integrations/auth";
import { registerTrainingRoutes } from "./training-routes";
import { fetchCaseStudiesWithImages, fetchCaseStudiesFromDatabase, type CaseStudyWithImages } from "./notion-case-studies-with-images";
import { 
  fetchNotionBlogPosts, 
  fetchNotionServices, 
  fetchNotionGalleries,
  fetchNotionPageContent 
} from "./notion-content-service";
import { z } from "zod";

// Validation schemas for backlinks endpoints
const pressReleaseRequestSchema = z.object({
  caseStudyId: z.string().min(1, "Case study ID is required")
});

const outreachEmailRequestSchema = z.object({
  targetSite: z.string().min(1, "Target site is required"),
  targetType: z.enum(['blog', 'news', 'partner', 'industry']),
  contentType: z.enum(['case-study', 'expertise', 'partnership']),
  caseStudyTitle: z.string().optional()
});
import { ObjectStorageService, objectStorageClient } from "./objectStorage";
import { generateGMBCSV, generateSupplementaryData } from "./gmb-csv-generator";
import multer from "multer";
import path from "path";
import { getCityByName, getAllCities } from "./city-data";
import {
  getServiceBySlug,
  generateCityServiceContent,
  parseCityServiceSlug,
  serviceTypes
} from "./city-services-data";
import {
  getCityImages,
  getServiceImage
} from "./city-images-data";
import { 
  enhancedCaseStudies, 
  getEnhancedCaseStudyById, 
  getFeaturedEnhancedCaseStudies,
  getEnhancedCaseStudiesByIndustry,
  getEnhancedCaseStudiesByCampaignType,
  searchEnhancedCaseStudies
} from "./case-studies-data";
import { 
  getTargetingData, 
  getTargetingCategories, 
  getAllTargetingData 
} from "./targeting-data";
import {
  extractBlogContent,
  extractCaseStudyContent,
  generateLinkedInPost,
  generateInstagramCarousel,
  generateVideoScript
} from "./content-repurpose";
import { handlePortfolioCaseStudies, handleSingleCaseStudy } from "./portfolio-case-studies";
import { usaEvents, getEventBySlug } from "./usa-events-data";
import { venues } from "./venues-data";
import { 
  generatePressRelease,
  generateOutreachEmail,
  generatePartnerBadge,
  trackMentions,
  getMentionReport
} from "./backlinks-outreach";
import {
  generateReviewQRCode,
  generateReviewRequest,
  getReviewMetrics,
  generateReviewResponse,
  reviewRequestSchema,
  feedbackSubmissionSchema,
  reviewPlatforms,
  keywordSuggestions,
  emailTemplates,
  responseTemplates
} from "./review-system";
import {
  initializeScheduledTasks,
  getCurrentSchedule,
  updateSchedule,
  getUpcomingEvents,
  getEventById,
  generateContentDraft,
  generateCalendarQRCode,
  generateGoogleCalendarLink,
  generateICSFile,
  createCalendarEvent,
  sendReminderEmail,
  contentScheduleSchema
} from "./content-calendar";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Set up Replit Auth (must be before other routes)
  await setupAuth(app);
  registerAuthRoutes(app);
  
  // Register training portal routes
  registerTrainingRoutes(app);
  
  const objectStorageService = new ObjectStorageService();
  
  // Configure multer for memory storage
  const upload = multer({ 
    storage: multer.memoryStorage(),
    limits: {
      fileSize: 10 * 1024 * 1024 // 10MB limit
    },
    fileFilter: (req, file, cb) => {
      // Accept images only
      if (!file.mimetype.startsWith('image/')) {
        return cb(new Error('Only image files are allowed'));
      }
      cb(null, true);
    }
  });
  
  // Get admin password from environment variable
  // IMPORTANT: Set ADMIN_PASSWORD environment variable before running
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
  
  // Admin password is optional - blog management features only work if set
  
  // Authentication middleware for blog management
  const authenticateBlogAdmin = (req: any, res: any, next: any) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || authHeader !== `Bearer ${ADMIN_PASSWORD}`) {
      return res.status(401).json({ 
        message: 'Unauthorized: Admin authentication required',
        error: 'Invalid or missing authentication' 
      });
    }
    
    next();
  };
  
  // Serve images from object storage
  app.get("/public-objects/:filePath(*)", async (req, res) => {
    const filePath = req.params.filePath;
    try {
      const file = await objectStorageService.searchPublicObject(filePath);
      if (!file) {
        return res.status(404).json({ error: "File not found" });
      }
      await objectStorageService.downloadObject(file, res);
    } catch (error) {
      console.error("Error serving object storage file:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });
  
  // Upload case study image to object storage
  app.post("/api/upload/case-study-image", authenticateBlogAdmin, upload.single('file'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
      }
      
      // Get the filename from header or generate one
      const filename = req.headers['x-filename'] as string || 
                      `case-studies/${Date.now()}_${req.file.originalname.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
      
      // Get the bucket name from environment
      const bucketName = process.env.PUBLIC_OBJECT_SEARCH_PATHS?.split('/')[1] || 'replit-objstore-da1bc6a0-6973-4126-abad-b26cb5770b80';
      const bucket = objectStorageClient.bucket(bucketName);
      
      // Upload to public directory
      const fullPath = `public/${filename}`;
      const file = bucket.file(fullPath);
      
      // Create a stream from buffer and upload
      const stream = file.createWriteStream({
        metadata: {
          contentType: req.file.mimetype,
          cacheControl: 'public, max-age=3600',
        },
        public: true,
        resumable: false
      });
      
      stream.on('error', (err) => {
        console.error('Upload error:', err);
        res.status(500).json({ error: 'Failed to upload file' });
      });
      
      stream.on('finish', () => {
        // Return the relative path that can be used to access the file
        res.json({ 
          url: filename,
          fullUrl: `/public-objects/${filename}`
        });
      });
      
      stream.end(req.file.buffer);
    } catch (error) {
      console.error('Error uploading image:', error);
      res.status(500).json({ error: 'Failed to upload image' });
    }
  });

  // Serve case study images (placeholder/stock photos)
  app.get("/api/case-study-images/:imageName", async (req, res) => {
    const imageName = req.params.imageName;
    
    // Map client names to appropriate stock photo URLs
    const stockPhotoMap: Record<string, string> = {
      // Technology & Innovation
      'microsoft': 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=1200&h=800&fit=crop',
      'google': 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=1200&h=800&fit=crop',
      'apple': 'https://images.unsplash.com/photo-1569770218135-bea267ed7e84?w=1200&h=800&fit=crop',
      'amazon': 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=1200&h=800&fit=crop',
      'meta': 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=800&fit=crop',
      
      // Beverages
      'coca-cola': 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=1200&h=800&fit=crop',
      'pepsi': 'https://images.unsplash.com/photo-1593642532400-2682810df593?w=1200&h=800&fit=crop',
      'red bull': 'https://images.unsplash.com/photo-1621951753015-740c699ab970?w=1200&h=800&fit=crop',
      'redbull': 'https://images.unsplash.com/photo-1621951753015-740c699ab970?w=1200&h=800&fit=crop',
      'starbucks': 'https://images.unsplash.com/photo-1545231027-637d2f6210f8?w=1200&h=800&fit=crop',
      
      // Sports & Fitness
      'nike': 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=1200&h=800&fit=crop',
      'adidas': 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=1200&h=800&fit=crop',
      'under armour': 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&h=800&fit=crop',
      'lululemon': 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&h=800&fit=crop',
      'patagonia': 'https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=1200&h=800&fit=crop',
      
      // Entertainment
      'netflix': 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1200&h=800&fit=crop',
      'disney': 'https://images.unsplash.com/photo-1578662996442-48f60103fc67?w=1200&h=800&fit=crop',
      'warner bros': 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&h=800&fit=crop',
      'spotify': 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=800&fit=crop',
      
      // Beauty & Fashion
      'sephora': 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=800&fit=crop',
      'ulta beauty': 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&h=800&fit=crop',
      'mac cosmetics': 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1200&h=800&fit=crop',
      
      // Food & Restaurants
      'mcdonalds': 'https://images.unsplash.com/photo-1619454016518-697bc231e7cb?w=1200&h=800&fit=crop',
      'chipotle': 'https://images.unsplash.com/photo-1579684947550-22e945225d9a?w=1200&h=800&fit=crop',
      'whole foods': 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&h=800&fit=crop',
      
      // Default event images
      'default': 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop'
    };
    
    // Extract client name from image name (e.g., "microsoft-activation.jpg" -> "microsoft")
    const clientKey = imageName.toLowerCase().split('-')[0].split('.')[0];
    const imageUrl = stockPhotoMap[clientKey] || stockPhotoMap['default'];
    
    // Redirect to the stock photo URL
    res.redirect(imageUrl);
  });

  // Admin verification endpoint
  app.post("/api/admin/verify", async (req, res) => {
    try {
      const authHeader = req.headers.authorization;
      
      if (!ADMIN_PASSWORD) {
        return res.status(503).json({ 
          message: 'Admin features not configured',
          error: 'ADMIN_PASSWORD environment variable not set' 
        });
      }
      
      if (!authHeader || authHeader !== `Bearer ${ADMIN_PASSWORD}`) {
        return res.status(401).json({ 
          message: 'Invalid admin password',
          error: 'Authentication failed' 
        });
      }
      
      res.json({ 
        success: true,
        message: 'Admin authenticated successfully'
      });
    } catch (error) {
      console.error('Error verifying admin:', error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.json({ success: true, submission });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid form data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Get all contact submissions (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Portfolio API Routes - Complete case studies from CSV
  app.get("/api/portfolio/case-studies", handlePortfolioCaseStudies);
  app.get("/api/portfolio/case-studies/:id", handleSingleCaseStudy);

  // Get all case studies from Notion
  app.get("/api/case-studies", async (req, res) => {
    try {
      const caseStudies = await fetchCaseStudiesWithImages();
      res.json(caseStudies);
    } catch (error) {
      console.error('Error fetching case studies:', error);
      res.status(500).json({ message: 'Failed to fetch case studies' });
    }
  });

  // Get case studies from Notion (using individual page fetching which works)
  app.get("/api/notion-case-studies", async (req, res) => {
    try {
      const caseStudies = await fetchCaseStudiesWithImages();
      res.json(caseStudies);
    } catch (error) {
      console.error('Error fetching case studies from Notion:', error);
      res.status(500).json({ message: 'Failed to fetch case studies from Notion' });
    }
  });

  // Get single case study from Notion by ID
  app.get("/api/notion-case-studies/:id", async (req, res) => {
    try {
      const allCaseStudies = await fetchCaseStudiesWithImages();
      const caseStudy = allCaseStudies.find(cs => cs.id === req.params.id);
      if (!caseStudy) {
        return res.status(404).json({ message: "Case study not found" });
      }
      res.json(caseStudy);
    } catch (error) {
      console.error('Error fetching case study:', error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Enhanced Case Studies API Endpoints - Deliverables Focused
  app.get("/api/case-studies-enhanced", async (req, res) => {
    try {
      // Return the comprehensive enhanced case studies with deliverables
      res.json(enhancedCaseStudies);
    } catch (error) {
      console.error('Error fetching enhanced case studies:', error);
      res.status(500).json({ message: 'Failed to fetch enhanced case studies' });
    }
  });

  // Get enhanced case study by ID
  app.get("/api/case-studies-enhanced/:id", async (req, res) => {
    try {
      const caseStudy = getEnhancedCaseStudyById(req.params.id);
      if (!caseStudy) {
        return res.status(404).json({ message: "Case study not found" });
      }
      res.json(caseStudy);
    } catch (error) {
      console.error('Error fetching enhanced case study:', error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get enhanced featured case studies
  app.get("/api/case-studies-enhanced/featured", async (req, res) => {
    try {
      const limit = parseInt(req.query.limit as string) || 3;
      const featuredCaseStudies = getFeaturedEnhancedCaseStudies(limit);
      res.json(featuredCaseStudies);
    } catch (error) {
      console.error('Error fetching featured enhanced case studies:', error);
      res.status(500).json({ message: 'Failed to fetch featured case studies' });
    }
  });

  // Search enhanced case studies
  app.get("/api/case-studies-enhanced/search", async (req, res) => {
    try {
      const keyword = req.query.q as string;
      if (!keyword) {
        return res.status(400).json({ message: "Search keyword is required" });
      }
      const results = searchEnhancedCaseStudies(keyword);
      res.json(results);
    } catch (error) {
      console.error('Error searching enhanced case studies:', error);
      res.status(500).json({ message: 'Failed to search case studies' });
    }
  });

  // Get enhanced case studies by industry
  app.get("/api/case-studies-enhanced/industry/:industry", async (req, res) => {
    try {
      const caseStudies = getEnhancedCaseStudiesByIndustry(req.params.industry);
      res.json(caseStudies);
    } catch (error) {
      console.error('Error fetching case studies by industry:', error);
      res.status(500).json({ message: 'Failed to fetch case studies' });
    }
  });

  // Get enhanced case studies by campaign type
  app.get("/api/case-studies-enhanced/campaign-type/:type", async (req, res) => {
    try {
      const caseStudies = getEnhancedCaseStudiesByCampaignType(req.params.type);
      res.json(caseStudies);
    } catch (error) {
      console.error('Error fetching case studies by campaign type:', error);
      res.status(500).json({ message: 'Failed to fetch case studies' });
    }
  });

  // Get featured case studies (first 3)
  app.get("/api/case-studies/featured", async (req, res) => {
    try {
      const allCaseStudies = await fetchCaseStudiesWithImages();
      const featuredCaseStudies = allCaseStudies.slice(0, 3);
      res.json(featuredCaseStudies);
    } catch (error) {
      console.error('Error fetching featured case studies:', error);
      res.status(500).json({ message: 'Failed to fetch featured case studies' });
    }
  });

  // Get case study by ID
  app.get("/api/case-studies/:id", async (req, res) => {
    try {
      const allCaseStudies = await fetchCaseStudiesWithImages();
      const caseStudy = allCaseStudies.find(cs => cs.id === req.params.id);
      if (!caseStudy) {
        return res.status(404).json({ message: "Case study not found" });
      }
      res.json(caseStudy);
    } catch (error) {
      console.error('Error fetching case study:', error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Blog post endpoints
  app.get("/api/blog", async (req, res) => {
    try {
      const posts = await storage.getBlogPosts();
      res.json(posts);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      res.status(500).json({ message: 'Failed to fetch blog posts' });
    }
  });

  app.get("/api/blog/:slug", async (req, res) => {
    try {
      const post = await storage.getBlogPostBySlug(req.params.slug);
      if (!post) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      res.json(post);
    } catch (error) {
      console.error('Error fetching blog post:', error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post("/api/blog", authenticateBlogAdmin, async (req, res) => {
    try {
      const validatedData = insertBlogPostSchema.parse(req.body);
      const post = await storage.createBlogPost(validatedData);
      res.json({ success: true, post });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid post data", errors: error.errors });
      } else {
        console.error('Error creating blog post:', error);
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  app.put("/api/blog/:id", authenticateBlogAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const post = await storage.updateBlogPost(id, req.body);
      if (!post) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      res.json({ success: true, post });
    } catch (error) {
      console.error('Error updating blog post:', error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.delete("/api/blog/:id", authenticateBlogAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const success = await storage.deleteBlogPost(id);
      if (!success) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      res.json({ success: true });
    } catch (error) {
      console.error('Error deleting blog post:', error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Real Case Studies API Endpoints
  // Get all real case studies
  app.get("/api/case-studies-real", async (req, res) => {
    try {
      const caseStudies = await storage.getCaseStudiesReal();
      res.json(caseStudies);
    } catch (error) {
      console.error('Error fetching real case studies:', error);
      res.status(500).json({ message: 'Failed to fetch case studies' });
    }
  });

  // Get single real case study by slug
  app.get("/api/case-studies-real/slug/:slug", async (req, res) => {
    try {
      const caseStudy = await storage.getCaseStudyRealBySlug(req.params.slug);
      if (!caseStudy) {
        return res.status(404).json({ message: 'Case study not found' });
      }
      res.json(caseStudy);
    } catch (error) {
      console.error('Error fetching case study:', error);
      res.status(500).json({ message: 'Failed to fetch case study' });
    }
  });

  // Get single real case study by ID
  app.get("/api/case-studies-real/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const caseStudy = await storage.getCaseStudyRealById(id);
      if (!caseStudy) {
        return res.status(404).json({ message: 'Case study not found' });
      }
      res.json(caseStudy);
    } catch (error) {
      console.error('Error fetching case study:', error);
      res.status(500).json({ message: 'Failed to fetch case study' });
    }
  });

  // Create new real case study (requires admin auth)
  app.post("/api/case-studies-real", authenticateBlogAdmin, async (req, res) => {
    try {
      const validatedData = insertCaseStudyRealSchema.parse(req.body);
      const caseStudy = await storage.createCaseStudyReal(validatedData);
      res.json({ success: true, caseStudy });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid case study data", errors: error.errors });
      } else {
        console.error('Error creating case study:', error);
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Update real case study (requires admin auth)
  app.put("/api/case-studies-real/:id", authenticateBlogAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const caseStudy = await storage.updateCaseStudyReal(id, req.body);
      if (!caseStudy) {
        return res.status(404).json({ message: "Case study not found" });
      }
      res.json({ success: true, caseStudy });
    } catch (error) {
      console.error('Error updating case study:', error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Delete real case study (requires admin auth)
  app.delete("/api/case-studies-real/:id", authenticateBlogAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const success = await storage.deleteCaseStudyReal(id);
      if (!success) {
        return res.status(404).json({ message: "Case study not found" });
      }
      res.json({ success: true });
    } catch (error) {
      console.error('Error deleting case study:', error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Health check endpoint
  app.get("/api/health", async (req, res) => {
    try {
      const caseStudies = await fetchCaseStudiesWithImages();
      res.json({ 
        status: 'ok', 
        timestamp: new Date().toISOString(),
        case_studies_count: caseStudies.length 
      });
    } catch (error) {
      res.json({ 
        status: 'error', 
        timestamp: new Date().toISOString(),
        case_studies_count: 0,
        error: 'Failed to fetch case studies'
      });
    }
  });

  // Notion blog posts endpoint
  app.get("/api/notion/blog-posts", async (req, res) => {
    try {
      const databaseId = req.query.database_id as string | undefined;
      const blogPosts = await fetchNotionBlogPosts(databaseId);
      res.json(blogPosts);
    } catch (error) {
      console.error('Error fetching Notion blog posts:', error);
      res.status(500).json({ message: 'Failed to fetch blog posts from Notion' });
    }
  });

  // Notion services endpoint
  app.get("/api/notion/services", async (req, res) => {
    try {
      const databaseId = req.query.database_id as string | undefined;
      const services = await fetchNotionServices(databaseId);
      res.json(services);
    } catch (error) {
      console.error('Error fetching Notion services:', error);
      res.status(500).json({ message: 'Failed to fetch services from Notion' });
    }
  });

  // Notion galleries endpoint
  app.get("/api/notion/galleries", async (req, res) => {
    try {
      const databaseId = req.query.database_id as string | undefined;
      const galleries = await fetchNotionGalleries(databaseId);
      res.json(galleries);
    } catch (error) {
      console.error('Error fetching Notion galleries:', error);
      res.status(500).json({ message: 'Failed to fetch galleries from Notion' });
    }
  });

  // Notion page content endpoint
  app.get("/api/notion/page/:pageId", async (req, res) => {
    try {
      const pageContent = await fetchNotionPageContent(req.params.pageId);
      if (!pageContent) {
        return res.status(404).json({ message: "Page not found" });
      }
      res.json(pageContent);
    } catch (error) {
      console.error('Error fetching Notion page content:', error);
      res.status(500).json({ message: 'Failed to fetch page content from Notion' });
    }
  });

  // Google My Business CSV generation endpoint
  app.get("/api/gmb/generate-csv", async (req, res) => {
    try {
      const csvPath = await generateGMBCSV();
      
      // Set headers for CSV download
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', 'attachment; filename="airfresh-gmb-locations.csv"');
      
      // Stream the file to the response
      const fileStream = fs.createReadStream(csvPath);
      fileStream.pipe(res);
      
      // Clean up temp file after sending
      fileStream.on('end', () => {
        fs.unlinkSync(csvPath);
      });
    } catch (error) {
      console.error('Error generating GMB CSV:', error);
      res.status(500).json({ message: 'Failed to generate GMB CSV file' });
    }
  });

  // Get supplementary GMB data (JSON format)
  app.get("/api/gmb/data", async (req, res) => {
    try {
      const data = await generateSupplementaryData();
      res.json(data);
    } catch (error) {
      console.error('Error generating GMB data:', error);
      res.status(500).json({ message: 'Failed to generate GMB data' });
    }
  });

  // Get all city locations
  app.get("/api/cities", async (req, res) => {
    try {
      const cities = getAllCities();
      res.json(cities);
    } catch (error) {
      console.error('Error fetching cities:', error);
      res.status(500).json({ message: 'Failed to fetch city data' });
    }
  });

  // Get specific city location
  app.get("/api/cities/:cityName", async (req, res) => {
    try {
      const city = getCityByName(req.params.cityName);
      if (!city) {
        return res.status(404).json({ message: "City not found" });
      }

      // Add city images to the response
      const citySlug = req.params.cityName.toLowerCase();
      const images = getCityImages(citySlug);

      res.json({
        ...city,
        images
      });
    } catch (error) {
      console.error('Error fetching city:', error);
      res.status(500).json({ message: 'Failed to fetch city data' });
    }
  });

  // Get all city-service combinations
  app.get("/api/city-services", async (req, res) => {
    try {
      const cities = getAllCities();
      const combinations = [];

      cities.forEach(city => {
        serviceTypes.forEach(service => {
          combinations.push({
            slug: `${city.city.toLowerCase().replace(/\s+/g, '-')}-${service.slug}`,
            cityName: city.city,
            serviceName: service.name
          });
        });
      });

      res.json(combinations);
    } catch (error) {
      console.error('Error fetching city-services:', error);
      res.status(500).json({ message: 'Failed to fetch city-services data' });
    }
  });

  // Get specific city-service page data
  app.get("/api/city-services/:slug", async (req, res) => {
    try {
      const slug = req.params.slug;
      const parsed = parseCityServiceSlug(slug);

      if (!parsed) {
        return res.status(404).json({ message: "Invalid city-service URL" });
      }

      const city = getCityByName(parsed.citySlug);
      const service = getServiceBySlug(parsed.serviceSlug);

      if (!city || !service) {
        return res.status(404).json({ message: "City or service not found" });
      }

      const content = generateCityServiceContent(city.city, city.state, service);

      // Get images for this city and service
      const cityImages = getCityImages(parsed.citySlug);
      const serviceImage = getServiceImage(parsed.serviceSlug);

      res.json({
        ...content,
        cityName: city.city,
        stateName: city.state,
        serviceName: service.name,
        serviceSlug: service.slug,
        citySlug: parsed.citySlug,
        images: {
          city: cityImages,
          service: serviceImage
        }
      });
    } catch (error) {
      console.error('Error fetching city-service:', error);
      res.status(500).json({ message: 'Failed to fetch city-service data' });
    }
  });

  // ===== JOB POSTINGS API ROUTES =====

  // Get all active job postings
  app.get("/api/jobs", async (req, res) => {
    try {
      const { fetchJobPostings } = await import("./notion-content-service");
      const jobs = await fetchJobPostings();
      res.json(jobs);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      res.status(500).json({ message: 'Failed to fetch job postings' });
    }
  });

  // Get all job postings (admin)
  app.get("/api/jobs/all", async (req, res) => {
    try {
      const { getAllJobPostings } = await import("./notion-content-service");
      const jobs = getAllJobPostings();
      res.json(jobs);
    } catch (error) {
      console.error('Error fetching all jobs:', error);
      res.status(500).json({ message: 'Failed to fetch job postings' });
    }
  });

  // Get job categories
  app.get("/api/jobs/categories", async (req, res) => {
    try {
      const { getJobCategories } = await import("./notion-content-service");
      const categories = getJobCategories();
      res.json(categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
      res.status(500).json({ message: 'Failed to fetch categories' });
    }
  });

  // Get job locations
  app.get("/api/jobs/locations", async (req, res) => {
    try {
      const { getJobLocations } = await import("./notion-content-service");
      const locations = getJobLocations();
      res.json(locations);
    } catch (error) {
      console.error('Error fetching locations:', error);
      res.status(500).json({ message: 'Failed to fetch locations' });
    }
  });

  // ===== EVENTS API ROUTES =====

  // Get all events
  app.get("/api/events", async (req, res) => {
    try {
      res.json(usaEvents);
    } catch (error) {
      console.error('Error fetching events:', error);
      res.status(500).json({ message: 'Failed to fetch events' });
    }
  });

  // Get single event by slug
  app.get("/api/events/:slug", async (req, res) => {
    try {
      const event = getEventBySlug(req.params.slug);
      if (!event) {
        return res.status(404).json({ message: "Event not found" });
      }
      res.json(event);
    } catch (error) {
      console.error('Error fetching event:', error);
      res.status(500).json({ message: 'Failed to fetch event' });
    }
  });

  // ===== VENUES API ROUTES =====

  // Get all venues
  app.get("/api/venues", async (req, res) => {
    try {
      res.json(venues);
    } catch (error) {
      console.error('Error fetching venues:', error);
      res.status(500).json({ message: 'Failed to fetch venues' });
    }
  });

  // Get single venue by slug
  app.get("/api/venues/:slug", async (req, res) => {
    try {
      const venue = venues.find(v => v.slug === req.params.slug);
      if (!venue) {
        return res.status(404).json({ message: "Venue not found" });
      }
      res.json(venue);
    } catch (error) {
      console.error('Error fetching venue:', error);
      res.status(500).json({ message: 'Failed to fetch venue' });
    }
  });

  // Get all targeting categories
  app.get("/api/targeting/categories", async (req, res) => {
    try {
      const categories = getTargetingCategories();
      res.json(categories);
    } catch (error) {
      console.error('Error fetching targeting categories:', error);
      res.status(500).json({ message: 'Failed to fetch targeting categories' });
    }
  });

  // Get all targeting data
  app.get("/api/targeting/all", async (req, res) => {
    try {
      const allData = getAllTargetingData();
      res.json(allData);
    } catch (error) {
      console.error('Error fetching all targeting data:', error);
      res.status(500).json({ message: 'Failed to fetch targeting data' });
    }
  });

  // Get specific targeting data
  app.get("/api/targeting/:type/:slug", async (req, res) => {
    try {
      const { type, slug } = req.params;
      const data = getTargetingData(type, slug);
      
      if (!data) {
        return res.status(404).json({ message: "Targeting data not found" });
      }
      
      res.json(data);
    } catch (error) {
      console.error('Error fetching targeting data:', error);
      res.status(500).json({ message: 'Failed to fetch targeting data' });
    }
  });

  // Get targeting data with city-specific information
  app.get("/api/targeting/:type/:slug/:city", async (req, res) => {
    try {
      const { type, slug, city } = req.params;
      const targetingData = getTargetingData(type, slug);
      const cityData = getCityByName(city);
      
      if (!targetingData) {
        return res.status(404).json({ message: "Targeting data not found" });
      }
      
      // Combine targeting data with city-specific modifications
      const response = {
        ...targetingData,
        city: cityData,
        citySpecific: targetingData.cityModifier ? targetingData.cityModifier(cityData?.city || city) : null
      };
      
      res.json(response);
    } catch (error) {
      console.error('Error fetching targeting data with city:', error);
      res.status(500).json({ message: 'Failed to fetch targeting data' });
    }
  });

  // Content Repurposing API Endpoints
  
  // Generate LinkedIn post from content
  app.get("/api/repurpose/linkedin/:type/:id", async (req, res) => {
    try {
      const { type, id } = req.params;
      let content = null;
      
      if (type === 'blog') {
        content = await extractBlogContent(id);
      } else if (type === 'case-study') {
        content = await extractCaseStudyContent(id);
      }
      
      if (!content) {
        return res.status(404).json({ message: `${type} not found` });
      }
      
      const linkedInPost = generateLinkedInPost(content);
      res.json({ 
        post: linkedInPost,
        metadata: {
          title: content.title,
          tags: content.tags,
          charCount: linkedInPost.length
        }
      });
    } catch (error) {
      console.error('Error generating LinkedIn post:', error);
      res.status(500).json({ message: 'Failed to generate LinkedIn post' });
    }
  });
  
  // Generate Instagram carousel from content
  app.get("/api/repurpose/carousel/:type/:id", async (req, res) => {
    try {
      const { type, id } = req.params;
      let content = null;
      
      if (type === 'blog') {
        content = await extractBlogContent(id);
      } else if (type === 'case-study') {
        content = await extractCaseStudyContent(id);
      }
      
      if (!content) {
        return res.status(404).json({ message: `${type} not found` });
      }
      
      const carousel = generateInstagramCarousel(content);
      res.json(carousel);
    } catch (error) {
      console.error('Error generating Instagram carousel:', error);
      res.status(500).json({ message: 'Failed to generate Instagram carousel' });
    }
  });
  
  // Generate video script from content
  app.get("/api/repurpose/video/:type/:id", async (req, res) => {
    try {
      const { type, id } = req.params;
      let content = null;
      
      if (type === 'blog') {
        content = await extractBlogContent(id);
      } else if (type === 'case-study') {
        content = await extractCaseStudyContent(id);
      }
      
      if (!content) {
        return res.status(404).json({ message: `${type} not found` });
      }
      
      const script = generateVideoScript(content);
      res.json(script);
    } catch (error) {
      console.error('Error generating video script:', error);
      res.status(500).json({ message: 'Failed to generate video script' });
    }
  });
  
  // Backlinks & Mentions API Endpoints
  
  // Generate press release
  app.post("/api/backlinks/press-release", async (req, res) => {
    try {
      // Validate request body with Zod
      const validationResult = pressReleaseRequestSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return res.status(400).json({ 
          message: 'Invalid request data',
          errors: validationResult.error.errors 
        });
      }
      
      const { caseStudyId } = validationResult.data;
      
      const pressRelease = await generatePressRelease(caseStudyId);
      
      if (!pressRelease) {
        return res.status(404).json({ message: 'Case study not found' });
      }
      
      res.json(pressRelease);
    } catch (error) {
      console.error('Error generating press release:', error);
      res.status(500).json({ message: 'Failed to generate press release' });
    }
  });
  
  // Generate outreach email
  app.post("/api/backlinks/outreach", async (req, res) => {
    try {
      // Validate request body with Zod
      const validationResult = outreachEmailRequestSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return res.status(400).json({ 
          message: 'Invalid request data',
          errors: validationResult.error.errors 
        });
      }
      
      const { targetSite, targetType, contentType, caseStudyTitle } = validationResult.data;
      
      const email = generateOutreachEmail(
        targetSite,
        targetType,
        contentType,
        caseStudyTitle
      );
      
      res.json(email);
    } catch (error) {
      console.error('Error generating outreach email:', error);
      res.status(500).json({ message: 'Failed to generate outreach email' });
    }
  });
  
  // Get partner badge
  app.get("/api/backlinks/partner-badge", async (req, res) => {
    try {
      const style = (req.query.style as string) || 'horizontal';
      const theme = (req.query.theme as string) || 'light';
      
      const badge = generatePartnerBadge(
        style as 'horizontal' | 'vertical' | 'compact',
        theme as 'light' | 'dark'
      );
      
      res.json(badge);
    } catch (error) {
      console.error('Error generating partner badge:', error);
      res.status(500).json({ message: 'Failed to generate partner badge' });
    }
  });
  
  // Track mentions
  app.get("/api/backlinks/track-mentions", async (req, res) => {
    try {
      const mentions = await trackMentions();
      res.json(mentions);
    } catch (error) {
      console.error('Error tracking mentions:', error);
      res.status(500).json({ message: 'Failed to track mentions' });
    }
  });
  
  // Get mention report
  app.get("/api/backlinks/mention-report", async (req, res) => {
    try {
      const report = await getMentionReport();
      res.json(report);
    } catch (error) {
      console.error('Error generating mention report:', error);
      res.status(500).json({ message: 'Failed to generate mention report' });
    }
  });

  // Review & Feedback API Endpoints
  
  // Generate review request email
  app.post("/api/reviews/generate-request", async (req, res) => {
    try {
      const validationResult = reviewRequestSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return res.status(400).json({ 
          message: 'Invalid request data',
          errors: validationResult.error.errors 
        });
      }
      
      const { templateType, clientName, projectName, platform } = validationResult.data;
      const request = generateReviewRequest(templateType, clientName, projectName, platform);
      
      res.json(request);
    } catch (error) {
      console.error('Error generating review request:', error);
      res.status(500).json({ message: 'Failed to generate review request' });
    }
  });
  
  // Generate QR code for review platform
  app.get("/api/reviews/generate-qr/:platform", async (req, res) => {
    try {
      const platform = req.params.platform as keyof typeof reviewPlatforms;
      
      if (!reviewPlatforms[platform]) {
        return res.status(400).json({ message: 'Invalid platform' });
      }
      
      const qrCode = await generateReviewQRCode(platform);
      res.json({ 
        platform: reviewPlatforms[platform],
        qrCode 
      });
    } catch (error) {
      console.error('Error generating QR code:', error);
      res.status(500).json({ message: 'Failed to generate QR code' });
    }
  });
  
  // Get review dashboard data
  app.get("/api/reviews/dashboard-data", async (req, res) => {
    try {
      const metrics = getReviewMetrics();
      res.json({
        metrics,
        platforms: reviewPlatforms,
        keywordSuggestions
      });
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      res.status(500).json({ message: 'Failed to fetch dashboard data' });
    }
  });
  
  // Submit feedback form
  app.post("/api/reviews/submit-feedback", async (req, res) => {
    try {
      const validationResult = feedbackSubmissionSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return res.status(400).json({ 
          message: 'Invalid feedback data',
          errors: validationResult.error.errors 
        });
      }
      
      // In production, this would save to database
      // For now, we'll return success
      const { name, platform } = validationResult.data;
      
      res.json({ 
        success: true,
        message: `Thank you for your feedback, ${name}! Please submit your review on ${reviewPlatforms[platform].name}.`,
        reviewUrl: reviewPlatforms[platform].baseUrl
      });
    } catch (error) {
      console.error('Error submitting feedback:', error);
      res.status(500).json({ message: 'Failed to submit feedback' });
    }
  });
  
  // Get response templates
  app.get("/api/reviews/templates", async (req, res) => {
    try {
      res.json({
        emailTemplates,
        responseTemplates,
        keywordSuggestions
      });
    } catch (error) {
      console.error('Error fetching templates:', error);
      res.status(500).json({ message: 'Failed to fetch templates' });
    }
  });
  
  // Generate review response
  app.post("/api/reviews/generate-response", async (req, res) => {
    try {
      const { sentiment, platform, reviewerName, specificMention } = req.body;
      
      if (!sentiment || !platform || !reviewerName) {
        return res.status(400).json({ 
          message: 'Missing required fields: sentiment, platform, reviewerName' 
        });
      }
      
      const response = generateReviewResponse(
        sentiment as 'positive' | 'constructive',
        platform as keyof typeof reviewPlatforms,
        reviewerName,
        specificMention
      );
      
      res.json({ response });
    } catch (error) {
      console.error('Error generating review response:', error);
      res.status(500).json({ message: 'Failed to generate review response' });
    }
  });

  // Content Calendar API Endpoints
  
  // Initialize scheduled tasks on server start
  initializeScheduledTasks();
  
  // Get current schedule
  app.get("/api/calendar/schedule", async (req, res) => {
    try {
      const schedule = getCurrentSchedule();
      res.json(schedule);
    } catch (error) {
      console.error('Error fetching schedule:', error);
      res.status(500).json({ message: 'Failed to fetch schedule' });
    }
  });
  
  // Update schedule configuration
  app.post("/api/calendar/update-schedule", async (req, res) => {
    // Check admin authentication
    const authHeader = req.headers.authorization;
    if (!ADMIN_PASSWORD || authHeader !== `Bearer ${ADMIN_PASSWORD}`) {
      return res.status(401).json({ 
        message: 'Unauthorized: Admin authentication required',
        error: 'Invalid or missing authentication' 
      });
    }
    
    try {
      const validationResult = contentScheduleSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return res.status(400).json({ 
          message: 'Invalid schedule data',
          errors: validationResult.error.errors 
        });
      }
      
      const updatedSchedule = updateSchedule(validationResult.data);
      res.json(updatedSchedule);
    } catch (error) {
      console.error('Error updating schedule:', error);
      res.status(500).json({ message: 'Failed to update schedule' });
    }
  });
  
  // Get upcoming content events
  app.get("/api/calendar/upcoming", async (req, res) => {
    try {
      const days = parseInt(req.query.days as string) || 30;
      const events = getUpcomingEvents(days);
      res.json(events);
    } catch (error) {
      console.error('Error fetching upcoming events:', error);
      res.status(500).json({ message: 'Failed to fetch upcoming events' });
    }
  });
  
  // Generate content draft
  app.get("/api/calendar/generate-draft/:type", async (req, res) => {
    try {
      const type = req.params.type;
      const validTypes = ['linkedin', 'blog', 'case-study', 'client-contact'];
      
      if (!validTypes.includes(type)) {
        return res.status(400).json({ message: 'Invalid content type' });
      }
      
      const draft = await generateContentDraft(type);
      res.json(draft);
    } catch (error) {
      console.error('Error generating draft:', error);
      res.status(500).json({ message: 'Failed to generate draft' });
    }
  });
  
  // Generate calendar QR code
  app.get("/api/calendar/qr-code", async (req, res) => {
    try {
      const qrCode = await generateCalendarQRCode();
      res.json({ qrCode });
    } catch (error) {
      console.error('Error generating QR code:', error);
      res.status(500).json({ message: 'Failed to generate QR code' });
    }
  });
  
  // Send reminder email manually
  app.post("/api/calendar/send-reminder", async (req, res) => {
    // Check admin authentication
    const authHeader = req.headers.authorization;
    if (!ADMIN_PASSWORD || authHeader !== `Bearer ${ADMIN_PASSWORD}`) {
      return res.status(401).json({ 
        message: 'Unauthorized: Admin authentication required',
        error: 'Invalid or missing authentication' 
      });
    }
    
    try {
      const { eventId } = req.body;
      
      if (!eventId) {
        return res.status(400).json({ message: 'Event ID is required' });
      }
      
      // Look up the event by ID
      const event = getEventById(eventId);
      
      if (!event) {
        return res.status(404).json({ message: 'Event not found' });
      }
      
      const success = await sendReminderEmail(event);
      
      res.json({ 
        success,
        message: success ? 'Reminder sent successfully' : 'Failed to send reminder'
      });
    } catch (error) {
      console.error('Error sending reminder:', error);
      res.status(500).json({ message: 'Failed to send reminder' });
    }
  });
  
  // Export calendar as ICS file
  app.get("/api/calendar/export", async (req, res) => {
    try {
      const events = getUpcomingEvents(365); // Get events for the next year
      const icsContent = generateICSFile(events);
      
      res.setHeader('Content-Type', 'text/calendar');
      res.setHeader('Content-Disposition', 'attachment; filename="airfresh-content-calendar.ics"');
      res.send(icsContent);
    } catch (error) {
      console.error('Error exporting calendar:', error);
      res.status(500).json({ message: 'Failed to export calendar' });
    }
  });
  
  // Get Google Calendar link for an event
  app.post("/api/calendar/google-link", async (req, res) => {
    // Check admin authentication
    const authHeader = req.headers.authorization;
    if (!ADMIN_PASSWORD || authHeader !== `Bearer ${ADMIN_PASSWORD}`) {
      return res.status(401).json({ 
        message: 'Unauthorized: Admin authentication required',
        error: 'Invalid or missing authentication' 
      });
    }
    
    try {
      const { title, description, dueDate } = req.body;
      
      if (!title || !dueDate) {
        return res.status(400).json({ message: 'Title and due date are required' });
      }
      
      const event = createCalendarEvent(
        'custom',
        new Date(dueDate),
        title,
        description || ''
      );
      
      const googleLink = generateGoogleCalendarLink(event);
      res.json({ googleLink });
    } catch (error) {
      console.error('Error generating Google Calendar link:', error);
      res.status(500).json({ message: 'Failed to generate Google Calendar link' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
