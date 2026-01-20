import type { Express } from "express";
import { trainingStorage } from "./training-storage";
import { isAuthenticated } from "./replit_integrations/auth";
import { 
  insertTrainingClientSchema,
  insertTrainingCourseSchema,
  insertTrainingModuleSchema,
  insertTrainingCourseProgressSchema,
  insertTrainingModuleProgressSchema,
  insertTrainingQuizResultSchema
} from "@shared/schema";

export function registerTrainingRoutes(app: Express): void {
  // Get all active clients
  app.get("/api/training/clients", async (req, res) => {
    try {
      const clients = await trainingStorage.getActiveClients();
      res.json(clients);
    } catch (error) {
      console.error("Error fetching training clients:", error);
      res.status(500).json({ message: "Failed to fetch clients" });
    }
  });

  // Get client by slug
  app.get("/api/training/clients/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const client = await trainingStorage.getClientBySlug(slug);
      if (!client) {
        res.status(404).json({ message: "Client not found" });
        return;
      }
      res.json(client);
    } catch (error) {
      console.error("Error fetching training client:", error);
      res.status(500).json({ message: "Failed to fetch client" });
    }
  });

  // Get courses for a client
  app.get("/api/training/courses/:clientSlug", async (req, res) => {
    try {
      const { clientSlug } = req.params;
      const courses = await trainingStorage.getCoursesByClientSlug(clientSlug);
      res.json(courses);
    } catch (error) {
      console.error("Error fetching training courses:", error);
      res.status(500).json({ message: "Failed to fetch courses" });
    }
  });

  // Get course details with modules
  app.get("/api/training/course/:courseId", async (req, res) => {
    try {
      const { courseId } = req.params;
      const course = await trainingStorage.getCourseWithModules(courseId);
      if (!course) {
        res.status(404).json({ message: "Course not found" });
        return;
      }
      res.json(course);
    } catch (error) {
      console.error("Error fetching training course:", error);
      res.status(500).json({ message: "Failed to fetch course" });
    }
  });

  // Get user progress (protected)
  app.get("/api/training/progress", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const progress = await trainingStorage.getUserCourseProgress(userId);
      res.json(progress);
    } catch (error) {
      console.error("Error fetching training progress:", error);
      res.status(500).json({ message: "Failed to fetch progress" });
    }
  });

  // Update course progress (protected)
  app.post("/api/training/progress/course", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const validatedData = insertTrainingCourseProgressSchema.parse({ ...req.body, userId });
      const progress = await trainingStorage.updateCourseProgress(validatedData);
      res.json(progress);
    } catch (error) {
      console.error("Error updating course progress:", error);
      res.status(500).json({ message: "Failed to update progress" });
    }
  });

  // Update module progress (protected)
  app.post("/api/training/progress/module", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const validatedData = insertTrainingModuleProgressSchema.parse({ ...req.body, userId });
      const progress = await trainingStorage.updateModuleProgress(validatedData);
      res.json(progress);
    } catch (error) {
      console.error("Error updating module progress:", error);
      res.status(500).json({ message: "Failed to update progress" });
    }
  });

  // Get quiz results (protected)
  app.get("/api/training/quiz/results", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const results = await trainingStorage.getQuizResults(userId);
      res.json(results);
    } catch (error) {
      console.error("Error fetching quiz results:", error);
      res.status(500).json({ message: "Failed to fetch quiz results" });
    }
  });

  // Save quiz result (protected)
  app.post("/api/training/quiz/results", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const validatedData = insertTrainingQuizResultSchema.parse({ ...req.body, userId });
      const result = await trainingStorage.saveQuizResult(validatedData);
      res.json(result);
    } catch (error) {
      console.error("Error saving quiz result:", error);
      res.status(500).json({ message: "Failed to save quiz result" });
    }
  });

  // Admin routes for creating clients and courses
  app.post("/api/training/admin/clients", isAuthenticated, async (req: any, res) => {
    try {
      const validatedData = insertTrainingClientSchema.parse(req.body);
      const client = await trainingStorage.createClient(validatedData);
      res.json(client);
    } catch (error) {
      console.error("Error creating training client:", error);
      res.status(500).json({ message: "Failed to create client" });
    }
  });

  app.post("/api/training/admin/courses", isAuthenticated, async (req: any, res) => {
    try {
      const validatedData = insertTrainingCourseSchema.parse(req.body);
      const course = await trainingStorage.createCourse(validatedData);
      res.json(course);
    } catch (error) {
      console.error("Error creating training course:", error);
      res.status(500).json({ message: "Failed to create course" });
    }
  });

  app.post("/api/training/admin/modules", isAuthenticated, async (req: any, res) => {
    try {
      const validatedData = insertTrainingModuleSchema.parse(req.body);
      const module = await trainingStorage.createModule(validatedData);
      res.json(module);
    } catch (error) {
      console.error("Error creating training module:", error);
      res.status(500).json({ message: "Failed to create module" });
    }
  });
}
