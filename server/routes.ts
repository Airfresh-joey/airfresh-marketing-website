import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { sampleCaseStudies, type CaseStudy } from "./case-studies-data";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
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

  // Get all case studies
  app.get("/api/case-studies", async (req, res) => {
    try {
      // Filter only published case studies
      const publishedCaseStudies = sampleCaseStudies.filter(cs => cs.status === 'Published');
      res.json(publishedCaseStudies);
    } catch (error) {
      console.error('Error fetching case studies:', error);
      res.status(500).json({ message: 'Failed to fetch case studies' });
    }
  });

  // Get featured case studies (first 3)
  app.get("/api/case-studies/featured", async (req, res) => {
    try {
      const publishedCaseStudies = sampleCaseStudies.filter(cs => cs.status === 'Published');
      const featuredCaseStudies = publishedCaseStudies.slice(0, 3);
      res.json(featuredCaseStudies);
    } catch (error) {
      console.error('Error fetching featured case studies:', error);
      res.status(500).json({ message: 'Failed to fetch featured case studies' });
    }
  });

  // Get case study by ID
  app.get("/api/case-studies/:id", async (req, res) => {
    try {
      const caseStudy = sampleCaseStudies.find(cs => cs.id === req.params.id && cs.status === 'Published');
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
    res.json({ 
      status: 'ok', 
      timestamp: new Date().toISOString(),
      case_studies_count: sampleCaseStudies.length 
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
