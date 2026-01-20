import { sql } from "drizzle-orm";
import { pgTable, text, serial, timestamp, varchar, boolean, integer, jsonb, index } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Re-export auth models
export * from "./models/auth";

export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  company: text("company"),
  inquiryType: text("inquiry_type"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true,
});

export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

// Blog posts table
export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  excerpt: text("excerpt").notNull(),
  author: text("author").notNull(),
  date: timestamp("date").defaultNow().notNull(),
  category: text("category").notNull(),
  tags: text("tags").array(),
  metaDescription: text("meta_description").notNull(),
  featured: text("featured").default("false").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;

// Real Case Studies table for database storage
export const caseStudiesReal = pgTable("case_studies_real", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  client: text("client").notNull(),
  date: timestamp("date").notNull(),
  location: text("location").notNull(),
  industry: text("industry").notNull(),
  campaignType: text("campaign_type").notNull(),
  challenge: text("challenge").notNull(),
  strategy: text("strategy").notNull(),
  execution: text("execution").notNull(),
  results: text("results").notNull(),
  keyTakeaways: text("key_takeaways").array(),
  metrics: text("metrics").array(),
  featuredImage: text("featured_image").notNull(),
  images: text("images").array(),
  tags: text("tags").array(),
  featured: text("featured").default("false").notNull(),
  status: text("status").default("published").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertCaseStudyRealSchema = createInsertSchema(caseStudiesReal).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertCaseStudyReal = z.infer<typeof insertCaseStudyRealSchema>;
export type CaseStudyReal = typeof caseStudiesReal.$inferSelect;

// Case study type for frontend use (legacy compatibility)
export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  campaign_type: string;
  description: string;
  results: string;
  what_we_did: string;
  services_provided: string[];
  markets: string[];
  product_offering: string;
  google_drive_folder: string;
  assets_folder: string;
  notion_url: string;
  image_url: string;
  has_real_assets: boolean;
  google_drive_images: string[];
  date: string;
  status: string;
  client_logo_url: string;
}

// ============= Training Portal Schema =============

// Training clients (companies that have training programs)
export const trainingClients = pgTable("training_clients", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  slug: text("slug").unique().notNull(),
  description: text("description"),
  logoUrl: text("logo_url"),
  primaryColor: text("primary_color").default("#1e40af"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Training courses
export const trainingCourses = pgTable("training_courses", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  clientId: varchar("client_id").references(() => trainingClients.id).notNull(),
  title: text("title").notNull(),
  description: text("description"),
  thumbnailUrl: text("thumbnail_url"),
  category: text("category"),
  difficulty: text("difficulty").default("beginner"),
  estimatedMinutes: integer("estimated_minutes"),
  isActive: boolean("is_active").default(true),
  sortOrder: integer("sort_order").default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Course modules (videos, quizzes, etc.)
export const trainingModules = pgTable("training_modules", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  courseId: varchar("course_id").references(() => trainingCourses.id).notNull(),
  title: text("title").notNull(),
  type: text("type").notNull(),
  content: jsonb("content"),
  videoUrl: text("video_url"),
  websiteUrl: text("website_url"),
  duration: integer("duration"),
  isRequired: boolean("is_required").default(true),
  sortOrder: integer("sort_order").default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// User course progress
export const trainingCourseProgress = pgTable("training_course_progress", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull(),
  courseId: varchar("course_id").references(() => trainingCourses.id).notNull(),
  currentModuleId: varchar("current_module_id").references(() => trainingModules.id),
  completed: boolean("completed").default(false),
  completedAt: timestamp("completed_at"),
  timeSpent: integer("time_spent"),
  progressPercent: integer("progress_percent").default(0),
  startedAt: timestamp("started_at").defaultNow(),
});

// User module progress
export const trainingModuleProgress = pgTable("training_module_progress", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull(),
  moduleId: varchar("module_id").references(() => trainingModules.id).notNull(),
  completed: boolean("completed").default(false),
  completedAt: timestamp("completed_at"),
  timeSpent: integer("time_spent"),
  score: integer("score"),
});

// Quiz results
export const trainingQuizResults = pgTable("training_quiz_results", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull(),
  quizType: text("quiz_type").notNull(),
  score: integer("score").notNull(),
  totalQuestions: integer("total_questions").notNull(),
  answers: jsonb("answers"),
  completedAt: timestamp("completed_at").defaultNow(),
});

// Insert schemas
export const insertTrainingClientSchema = createInsertSchema(trainingClients).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertTrainingCourseSchema = createInsertSchema(trainingCourses).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertTrainingModuleSchema = createInsertSchema(trainingModules).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertTrainingCourseProgressSchema = createInsertSchema(trainingCourseProgress).omit({
  id: true,
  startedAt: true,
});

export const insertTrainingModuleProgressSchema = createInsertSchema(trainingModuleProgress).omit({
  id: true,
});

export const insertTrainingQuizResultSchema = createInsertSchema(trainingQuizResults).omit({
  id: true,
  completedAt: true,
});

// Training portal types
export type InsertTrainingClient = z.infer<typeof insertTrainingClientSchema>;
export type TrainingClient = typeof trainingClients.$inferSelect;
export type InsertTrainingCourse = z.infer<typeof insertTrainingCourseSchema>;
export type TrainingCourse = typeof trainingCourses.$inferSelect;
export type InsertTrainingModule = z.infer<typeof insertTrainingModuleSchema>;
export type TrainingModule = typeof trainingModules.$inferSelect;
export type InsertTrainingCourseProgress = z.infer<typeof insertTrainingCourseProgressSchema>;
export type TrainingCourseProgress = typeof trainingCourseProgress.$inferSelect;
export type InsertTrainingModuleProgress = z.infer<typeof insertTrainingModuleProgressSchema>;
export type TrainingModuleProgress = typeof trainingModuleProgress.$inferSelect;
export type InsertTrainingQuizResult = z.infer<typeof insertTrainingQuizResultSchema>;
export type TrainingQuizResult = typeof trainingQuizResults.$inferSelect;
