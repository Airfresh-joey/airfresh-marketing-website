import { users, contactSubmissions, blogPosts, caseStudiesReal, type User, type InsertUser, type ContactSubmission, type InsertContactSubmission, type BlogPost, type InsertBlogPost, type CaseStudyReal, type InsertCaseStudyReal } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  // Blog post methods
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  getBlogPostById(id: number): Promise<BlogPost | undefined>;
  updateBlogPost(id: number, post: Partial<InsertBlogPost>): Promise<BlogPost | undefined>;
  deleteBlogPost(id: number): Promise<boolean>;
  // Real case study methods
  createCaseStudyReal(caseStudy: InsertCaseStudyReal): Promise<CaseStudyReal>;
  getCaseStudiesReal(): Promise<CaseStudyReal[]>;
  getCaseStudyRealBySlug(slug: string): Promise<CaseStudyReal | undefined>;
  getCaseStudyRealById(id: number): Promise<CaseStudyReal | undefined>;
  updateCaseStudyReal(id: number, caseStudy: Partial<InsertCaseStudyReal>): Promise<CaseStudyReal | undefined>;
  deleteCaseStudyReal(id: number): Promise<boolean>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const [contactSubmission] = await db
      .insert(contactSubmissions)
      .values(submission)
      .returning();
    return contactSubmission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return await db.select().from(contactSubmissions);
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const [post] = await db
      .insert(blogPosts)
      .values(insertPost)
      .returning();
    return post;
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return await db.select().from(blogPosts).orderBy(blogPosts.date);
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug));
    return post || undefined;
  }

  async getBlogPostById(id: number): Promise<BlogPost | undefined> {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.id, id));
    return post || undefined;
  }

  async updateBlogPost(id: number, updatePost: Partial<InsertBlogPost>): Promise<BlogPost | undefined> {
    const [post] = await db
      .update(blogPosts)
      .set({ ...updatePost, updatedAt: new Date() })
      .where(eq(blogPosts.id, id))
      .returning();
    return post || undefined;
  }

  async deleteBlogPost(id: number): Promise<boolean> {
    const result = await db.delete(blogPosts).where(eq(blogPosts.id, id));
    return true;
  }

  async createCaseStudyReal(insertCaseStudy: InsertCaseStudyReal): Promise<CaseStudyReal> {
    const [caseStudy] = await db
      .insert(caseStudiesReal)
      .values(insertCaseStudy)
      .returning();
    return caseStudy;
  }

  async getCaseStudiesReal(): Promise<CaseStudyReal[]> {
    return await db.select().from(caseStudiesReal).orderBy(caseStudiesReal.date);
  }

  async getCaseStudyRealBySlug(slug: string): Promise<CaseStudyReal | undefined> {
    const [caseStudy] = await db.select().from(caseStudiesReal).where(eq(caseStudiesReal.slug, slug));
    return caseStudy || undefined;
  }

  async getCaseStudyRealById(id: number): Promise<CaseStudyReal | undefined> {
    const [caseStudy] = await db.select().from(caseStudiesReal).where(eq(caseStudiesReal.id, id));
    return caseStudy || undefined;
  }

  async updateCaseStudyReal(id: number, updateCaseStudy: Partial<InsertCaseStudyReal>): Promise<CaseStudyReal | undefined> {
    const [caseStudy] = await db
      .update(caseStudiesReal)
      .set({ ...updateCaseStudy, updatedAt: new Date() })
      .where(eq(caseStudiesReal.id, id))
      .returning();
    return caseStudy || undefined;
  }

  async deleteCaseStudyReal(id: number): Promise<boolean> {
    const result = await db.delete(caseStudiesReal).where(eq(caseStudiesReal.id, id));
    return true;
  }
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private blogPosts: Map<number, BlogPost>;
  private caseStudiesReal: Map<number, CaseStudyReal>;
  private currentUserId: number;
  private currentContactId: number;
  private currentBlogPostId: number;
  private currentCaseStudyId: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.blogPosts = new Map();
    this.caseStudiesReal = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
    this.currentBlogPostId = 1;
    this.currentCaseStudyId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.currentContactId++;
    const contactSubmission: ContactSubmission = {
      ...submission,
      id,
      createdAt: new Date(),
      phone: submission.phone || null,
      company: submission.company || null,
      inquiryType: submission.inquiryType || null,
    };
    this.contactSubmissions.set(id, contactSubmission);
    return contactSubmission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = this.currentBlogPostId++;
    const post: BlogPost = {
      ...insertPost,
      id,
      date: insertPost.date || new Date(),
      tags: insertPost.tags || null,
      featured: insertPost.featured || "false",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.blogPosts.set(id, post);
    return post;
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(post => post.slug === slug);
  }

  async getBlogPostById(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async updateBlogPost(id: number, updatePost: Partial<InsertBlogPost>): Promise<BlogPost | undefined> {
    const post = this.blogPosts.get(id);
    if (!post) return undefined;
    const updated = { ...post, ...updatePost, updatedAt: new Date() };
    this.blogPosts.set(id, updated);
    return updated;
  }

  async deleteBlogPost(id: number): Promise<boolean> {
    return this.blogPosts.delete(id);
  }

  async createCaseStudyReal(insertCaseStudy: InsertCaseStudyReal): Promise<CaseStudyReal> {
    const id = this.currentCaseStudyId++;
    const caseStudy: CaseStudyReal = {
      ...insertCaseStudy,
      id,
      keyTakeaways: insertCaseStudy.keyTakeaways || null,
      metrics: insertCaseStudy.metrics || null,
      images: insertCaseStudy.images || null,
      tags: insertCaseStudy.tags || null,
      featured: insertCaseStudy.featured || "false",
      status: insertCaseStudy.status || "published",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.caseStudiesReal.set(id, caseStudy);
    return caseStudy;
  }

  async getCaseStudiesReal(): Promise<CaseStudyReal[]> {
    return Array.from(this.caseStudiesReal.values()).sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  async getCaseStudyRealBySlug(slug: string): Promise<CaseStudyReal | undefined> {
    return Array.from(this.caseStudiesReal.values()).find(cs => cs.slug === slug);
  }

  async getCaseStudyRealById(id: number): Promise<CaseStudyReal | undefined> {
    return this.caseStudiesReal.get(id);
  }

  async updateCaseStudyReal(id: number, updateCaseStudy: Partial<InsertCaseStudyReal>): Promise<CaseStudyReal | undefined> {
    const caseStudy = this.caseStudiesReal.get(id);
    if (!caseStudy) return undefined;
    const updated = { ...caseStudy, ...updateCaseStudy, updatedAt: new Date() };
    this.caseStudiesReal.set(id, updated);
    return updated;
  }

  async deleteCaseStudyReal(id: number): Promise<boolean> {
    return this.caseStudiesReal.delete(id);
  }
}

export const storage = new DatabaseStorage();
