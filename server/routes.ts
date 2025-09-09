import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { getCaseStudies, findDatabaseByTitle } from "./notion";
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

  // Get all case studies from Notion
  app.get("/api/case-studies", async (req, res) => {
    try {
      const caseStudiesDb = await findDatabaseByTitle("Case Studies");
      if (!caseStudiesDb) {
        return res.json([]);
      }
      const caseStudies = await getCaseStudies(caseStudiesDb.id);
      res.json(caseStudies);
    } catch (error) {
      console.error('Error fetching case studies:', error);
      res.json([]);
    }
  });

  // Get featured case studies from Notion
  app.get("/api/case-studies/featured", async (req, res) => {
    try {
      const caseStudiesDb = await findDatabaseByTitle("Case Studies");
      if (!caseStudiesDb) {
        return res.json([]);
      }
      const allCaseStudies = await getCaseStudies(caseStudiesDb.id);
      const featuredCaseStudies = allCaseStudies.filter(cs => cs.featured);
      res.json(featuredCaseStudies);
    } catch (error) {
      console.error('Error fetching featured case studies:', error);
      res.json([]);
    }
  });

  // Get case study by ID from Notion
  app.get("/api/case-studies/:id", async (req, res) => {
    try {
      const caseStudiesDb = await findDatabaseByTitle("Case Studies");
      if (!caseStudiesDb) {
        return res.status(404).json({ message: "Case study not found" });
      }
      const allCaseStudies = await getCaseStudies(caseStudiesDb.id);
      const caseStudy = allCaseStudies.find(cs => cs.notionId === req.params.id);
      if (!caseStudy) {
        return res.status(404).json({ message: "Case study not found" });
      }
      res.json(caseStudy);
    } catch (error) {
      console.error('Error fetching case study:', error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
