import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { fetchCaseStudiesWithImages, type CaseStudyWithImages } from "./notion-case-studies-with-images";
import { z } from "zod";
import { ObjectStorageService } from "./objectStorage";

export async function registerRoutes(app: Express): Promise<Server> {
  const objectStorageService = new ObjectStorageService();
  
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

  const httpServer = createServer(app);
  return httpServer;
}
