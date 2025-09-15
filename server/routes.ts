import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertBlogPostSchema } from "@shared/schema";
import { fetchCaseStudiesWithImages, type CaseStudyWithImages } from "./notion-case-studies-with-images";
import { 
  fetchNotionBlogPosts, 
  fetchNotionServices, 
  fetchNotionGalleries,
  fetchNotionPageContent 
} from "./notion-content-service";
import { z } from "zod";
import { ObjectStorageService } from "./objectStorage";

export async function registerRoutes(app: Express): Promise<Server> {
  const objectStorageService = new ObjectStorageService();
  
  // Get admin password from environment variable
  // IMPORTANT: Set ADMIN_PASSWORD environment variable before running
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
  
  if (!ADMIN_PASSWORD) {
    console.warn('WARNING: ADMIN_PASSWORD environment variable is not set. Blog management features will be disabled.');
  }
  
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

  const httpServer = createServer(app);
  return httpServer;
}
