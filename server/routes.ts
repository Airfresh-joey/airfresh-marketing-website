import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { getCaseStudies, findDatabaseByTitle, notion } from "./notion";
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

  // Test Notion connection
  app.get("/api/notion/test", async (req, res) => {
    try {
      const searchResults = await notion.search({});
      res.json({
        connected: true,
        accessible_items: searchResults.results.length,
        items: searchResults.results.map(item => ({
          id: item.id,
          object: item.object,
          title: item.object === 'page' && 'properties' in item && item.properties.title 
            ? item.properties.title.title[0]?.plain_text || 'Untitled'
            : item.object === 'database' && 'title' in item 
            ? item.title[0]?.plain_text || 'Untitled Database'
            : 'No title'
        }))
      });
    } catch (error) {
      res.json({
        connected: false,
        error: error.message,
        page_id_configured: process.env.NOTION_PAGE_URL || 'Not set'
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
