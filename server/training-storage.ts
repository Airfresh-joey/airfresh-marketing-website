import { 
  trainingClients, 
  trainingCourses, 
  trainingModules, 
  trainingCourseProgress, 
  trainingModuleProgress,
  trainingQuizResults,
  type TrainingClient,
  type InsertTrainingClient,
  type TrainingCourse,
  type InsertTrainingCourse,
  type TrainingModule,
  type InsertTrainingModule,
  type TrainingCourseProgress,
  type InsertTrainingCourseProgress,
  type TrainingModuleProgress,
  type InsertTrainingModuleProgress,
  type TrainingQuizResult,
  type InsertTrainingQuizResult
} from "@shared/schema";
import { db } from "./db";
import { eq, and, desc } from "drizzle-orm";

export interface ITrainingStorage {
  // Client operations
  getActiveClients(): Promise<TrainingClient[]>;
  getClientBySlug(slug: string): Promise<TrainingClient | undefined>;
  createClient(client: InsertTrainingClient): Promise<TrainingClient>;
  
  // Course operations
  getCoursesByClientSlug(clientSlug: string): Promise<TrainingCourse[]>;
  getCourseWithModules(courseId: string): Promise<(TrainingCourse & { modules: TrainingModule[] }) | undefined>;
  createCourse(course: InsertTrainingCourse): Promise<TrainingCourse>;
  
  // Module operations
  createModule(module: InsertTrainingModule): Promise<TrainingModule>;
  
  // Progress operations
  getUserCourseProgress(userId: string): Promise<TrainingCourseProgress[]>;
  updateCourseProgress(progress: InsertTrainingCourseProgress): Promise<TrainingCourseProgress>;
  updateModuleProgress(progress: InsertTrainingModuleProgress): Promise<TrainingModuleProgress>;
  
  // Quiz operations
  getQuizResults(userId: string): Promise<TrainingQuizResult[]>;
  saveQuizResult(result: InsertTrainingQuizResult): Promise<TrainingQuizResult>;
}

class TrainingStorage implements ITrainingStorage {
  // Client operations
  async getActiveClients(): Promise<TrainingClient[]> {
    return await db.select().from(trainingClients).where(eq(trainingClients.isActive, true));
  }

  async getClientBySlug(slug: string): Promise<TrainingClient | undefined> {
    const [client] = await db.select().from(trainingClients).where(eq(trainingClients.slug, slug));
    return client;
  }

  async createClient(client: InsertTrainingClient): Promise<TrainingClient> {
    const [newClient] = await db.insert(trainingClients).values(client).returning();
    return newClient;
  }

  // Course operations
  async getCoursesByClientSlug(clientSlug: string): Promise<TrainingCourse[]> {
    const client = await this.getClientBySlug(clientSlug);
    if (!client) return [];
    
    return await db.select().from(trainingCourses)
      .where(and(eq(trainingCourses.clientId, client.id), eq(trainingCourses.isActive, true)))
      .orderBy(trainingCourses.sortOrder);
  }

  async getCourseWithModules(courseId: string): Promise<(TrainingCourse & { modules: TrainingModule[] }) | undefined> {
    const [course] = await db.select().from(trainingCourses).where(eq(trainingCourses.id, courseId));
    if (!course) return undefined;

    const modules = await db.select().from(trainingModules)
      .where(eq(trainingModules.courseId, courseId))
      .orderBy(trainingModules.sortOrder);

    return { ...course, modules };
  }

  async createCourse(course: InsertTrainingCourse): Promise<TrainingCourse> {
    const [newCourse] = await db.insert(trainingCourses).values(course).returning();
    return newCourse;
  }

  // Module operations
  async createModule(module: InsertTrainingModule): Promise<TrainingModule> {
    const [newModule] = await db.insert(trainingModules).values(module).returning();
    return newModule;
  }

  // Progress operations
  async getUserCourseProgress(userId: string): Promise<TrainingCourseProgress[]> {
    return await db.select().from(trainingCourseProgress).where(eq(trainingCourseProgress.userId, userId));
  }

  async updateCourseProgress(progress: InsertTrainingCourseProgress): Promise<TrainingCourseProgress> {
    const [existing] = await db.select().from(trainingCourseProgress)
      .where(and(
        eq(trainingCourseProgress.userId, progress.userId),
        eq(trainingCourseProgress.courseId, progress.courseId!)
      ));

    if (existing) {
      const [updated] = await db.update(trainingCourseProgress)
        .set({
          ...progress,
          completedAt: progress.completed ? new Date() : null,
        })
        .where(eq(trainingCourseProgress.id, existing.id))
        .returning();
      return updated;
    } else {
      const [newProgress] = await db.insert(trainingCourseProgress)
        .values({
          ...progress,
          completedAt: progress.completed ? new Date() : null,
        })
        .returning();
      return newProgress;
    }
  }

  async updateModuleProgress(progress: InsertTrainingModuleProgress): Promise<TrainingModuleProgress> {
    const [existing] = await db.select().from(trainingModuleProgress)
      .where(and(
        eq(trainingModuleProgress.userId, progress.userId),
        eq(trainingModuleProgress.moduleId, progress.moduleId!)
      ));

    if (existing) {
      const [updated] = await db.update(trainingModuleProgress)
        .set({
          ...progress,
          completedAt: progress.completed ? new Date() : null,
        })
        .where(eq(trainingModuleProgress.id, existing.id))
        .returning();
      return updated;
    } else {
      const [newProgress] = await db.insert(trainingModuleProgress)
        .values({
          ...progress,
          completedAt: progress.completed ? new Date() : null,
        })
        .returning();
      return newProgress;
    }
  }

  // Quiz operations
  async getQuizResults(userId: string): Promise<TrainingQuizResult[]> {
    return await db.select().from(trainingQuizResults)
      .where(eq(trainingQuizResults.userId, userId))
      .orderBy(desc(trainingQuizResults.completedAt));
  }

  async saveQuizResult(result: InsertTrainingQuizResult): Promise<TrainingQuizResult> {
    const [newResult] = await db.insert(trainingQuizResults).values(result).returning();
    return newResult;
  }
}

export const trainingStorage = new TrainingStorage();
