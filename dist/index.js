var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// shared/schema.ts
var schema_exports = {};
__export(schema_exports, {
  contactSubmissions: () => contactSubmissions,
  insertContactSubmissionSchema: () => insertContactSubmissionSchema,
  insertUserSchema: () => insertUserSchema,
  users: () => users
});
import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  company: text("company"),
  inquiryType: text("inquiry_type"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});
var insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true
});
var users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});

// server/db.ts
import { Pool, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
neonConfig.webSocketConstructor = ws;
if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?"
  );
}
var pool = new Pool({ connectionString: process.env.DATABASE_URL });
var db = drizzle({ client: pool, schema: schema_exports });

// server/storage.ts
import { eq } from "drizzle-orm";
var DatabaseStorage = class {
  async getUser(id) {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || void 0;
  }
  async getUserByUsername(username) {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || void 0;
  }
  async createUser(insertUser) {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }
  async createContactSubmission(submission) {
    const [contactSubmission] = await db.insert(contactSubmissions).values(submission).returning();
    return contactSubmission;
  }
  async getContactSubmissions() {
    return await db.select().from(contactSubmissions);
  }
};
var storage = new DatabaseStorage();

// server/notion-case-studies-with-images.ts
import { Client } from "@notionhq/client";
var notion = new Client({
  auth: process.env.NOTION_INTEGRATION_SECRET
});
var CASE_STUDIES_LIST = [
  { title: "Microsoft (NRF)", id: "1adda91659c6809a8eb9ebe1d9cf4a4c" },
  { title: "Netflix", id: "1adda91659c68010a220c87f1231c935" },
  { title: "Apple (Camp Grizzly)", id: "1c4da91659c68064af7ee5ea01121dee" },
  { title: "MrBeast", id: "1adda91659c68030b09acab8426f692b" },
  { title: "Formula One Activations", id: "1adda91659c68058ab9ad7351cf8f720" },
  { title: "Mac Cosmetics", id: "1c3da91659c680cf9bb2f11d57531846" },
  { title: "Buffalo Wild Wings", id: "1adda91659c680259867e078bb239e45" },
  { title: "Williams Racing", id: "1adda91659c680f897aefdc20bf99c27" },
  { title: "Cirque du Soleil", id: "1adda91659c680fe9afdceac5ea7846b" },
  { title: "Nissan (NFL Draft)", id: "1c4da91659c680e28bbbfd6517c06844" },
  { title: "Las Vegas +44 Formula Activation", id: "1adda91659c6809fbe94f70f2d672529" },
  { title: "Clarins", id: "1adda91659c6803e8a41e2847d1401b0" },
  { title: "1800 Tequilia", id: "1c4da91659c6808bbf98c5ae4d23b661" },
  { title: "Waiakea Water", id: "1adda91659c680a4bb30d9fa176d9491" },
  { title: "Topps (Digital Trading Card)", id: "1adda91659c68058a02cd2cbf957055a" },
  { title: "Wagamama", id: "1adda91659c680299a7fedea91150f30" },
  { title: "Culinary Dropout", id: "1adda91659c6806c8c23f7177e156aa1" },
  { title: "BYOMA", id: "1adda91659c680878855fbc6a1d8a482" },
  { title: "Katjes", id: "1adda91659c680a68066c4f26be0391b" },
  { title: "PeelzOn", id: "1adda91659c6801aaa05c1702f4b75c9" },
  { title: "TED Talk", id: "1adda91659c68019bd88f1e5e6601e10" },
  { title: "Polaris (NRF)", id: "1adda91659c680aea6c8f9ae5272d18c" },
  { title: "Car Wash Promotion", id: "1adda91659c68074bd7dc5da1f111a90" },
  { title: "Skinny Mixes", id: "1c0da91659c680969cf2dba3114023ad" },
  { title: "Solar Company", id: "1adda91659c68082bf24cdc38610211f" },
  { title: "Bond Vet", id: "1adda91659c680e2a938ed71939ff864" },
  { title: "Brooklyn Magazine", id: "1adda91659c680f6be6ef0d39e6839da" },
  { title: "Paradise Body", id: "1adda91659c68063b872fefb796610d1" },
  { title: "The Sun Club Golf", id: "1adda91659c6802996f4db045cb88c88" },
  { title: "Cortie - Digital Yalo", id: "1adda91659c6805aa56fdcef106e666e" },
  { title: "Qwuick", id: "1adda91659c680b88db2f1a2be210c82" }
];
async function fetchCaseStudiesWithImages() {
  try {
    console.log("Fetching case studies with Google Drive images...");
    const caseStudies = [];
    for (const study of CASE_STUDIES_LIST) {
      try {
        const caseStudy = await fetchSpecificCaseStudyWithImages(study.id, study.title);
        if (caseStudy) {
          caseStudies.push(caseStudy);
        }
      } catch (error) {
        console.error(`Error fetching case study ${study.title}:`, error);
        const basicCaseStudy = createBasicCaseStudyWithImages(study.id, study.title);
        caseStudies.push(basicCaseStudy);
      }
    }
    console.log(`Successfully fetched ${caseStudies.length} case studies with images`);
    return caseStudies;
  } catch (error) {
    console.error("Error fetching case studies with images:", error);
    return [];
  }
}
async function fetchSpecificCaseStudyWithImages(pageId, title) {
  try {
    const page = await notion.pages.retrieve({ page_id: pageId });
    const properties = page.properties || {};
    const getText = (prop) => {
      if (!prop) return "";
      if (prop.title && Array.isArray(prop.title)) {
        return prop.title.map((t) => t.plain_text).join("").trim();
      }
      if (prop.rich_text && Array.isArray(prop.rich_text)) {
        return prop.rich_text.map((t) => t.plain_text).join("").trim();
      }
      if (prop.select && prop.select.name) {
        return prop.select.name.trim();
      }
      if (prop.url) {
        return prop.url.trim();
      }
      return "";
    };
    const getMultiSelect = (prop) => {
      if (!prop || !prop.multi_select || !Array.isArray(prop.multi_select)) return [];
      return prop.multi_select.map((item) => item.name).filter(Boolean);
    };
    const getDate = (prop) => {
      if (prop?.date?.start) {
        return prop.date.start;
      }
      return (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    };
    const industry = getText(properties.Industry) || "Marketing & Events";
    const services_provided = getMultiSelect(properties["Services Provided"]);
    const markets = getMultiSelect(properties.Markets);
    const what_we_did = getText(properties["What We Did"]);
    const auto_description = getText(properties["Auto-Generated Case Study Description"]);
    const text_content = getText(properties.Text);
    const product_offering = getText(properties["Product Offering"]);
    const google_drive_folder = getText(properties["Google Drive File"]);
    const assets_folder = getText(properties["Assets (Images, Screenshots, Docs)"]);
    const date = getDate(properties["Date (Month/Year)"]);
    const description_parts = [
      auto_description,
      text_content,
      what_we_did,
      product_offering ? `Product focus: ${product_offering}` : ""
    ].filter(Boolean);
    const description = description_parts.length > 0 ? description_parts.join(". ") : `Successful experiential marketing campaign for ${title.split("(")[0].trim()}.`;
    const campaign_type = services_provided.length > 0 ? services_provided[0] : "Brand Activation";
    const client = title.split("(")[0].trim();
    const results_parts = [
      `Successful ${campaign_type.toLowerCase()} campaign for ${client}`,
      markets.length > 0 ? `across ${markets.join(", ")} markets` : "",
      services_provided.length > 1 ? `including ${services_provided.slice(1).join(", ")}` : "",
      what_we_did ? `Key achievement: ${what_we_did}` : ""
    ].filter(Boolean);
    const results = results_parts.join(". ") + ".";
    const has_real_assets = !!(assets_folder || google_drive_folder);
    const google_drive_images = extractGoogleDriveImages(assets_folder || google_drive_folder);
    const image_url = google_drive_images.length > 0 ? createGoogleDriveImageUrl(assets_folder || google_drive_folder) : getClientSpecificImage(client, industry, campaign_type);
    const caseStudy = {
      id: pageId,
      title,
      client,
      industry,
      campaign_type,
      description,
      results,
      what_we_did: what_we_did || "",
      services_provided,
      markets,
      product_offering: product_offering || "",
      google_drive_folder: google_drive_folder || "",
      assets_folder: assets_folder || "",
      notion_url: `https://www.notion.so/${pageId.replace(/-/g, "")}`,
      image_url,
      has_real_assets,
      google_drive_images,
      date,
      status: "Published"
    };
    console.log(`\u2713 ${title} - Real Assets: ${has_real_assets ? "Yes" : "No"} - Images: ${google_drive_images.length}`);
    return caseStudy;
  } catch (error) {
    console.error(`Error fetching specific case study ${title}:`, error);
    return null;
  }
}
function extractGoogleDriveImages(googleDriveFolderUrl) {
  if (!googleDriveFolderUrl || !googleDriveFolderUrl.includes("drive.google.com")) {
    return [];
  }
  const folderIdMatch = googleDriveFolderUrl.match(/folders\/([a-zA-Z0-9-_]+)/);
  if (!folderIdMatch) {
    return [];
  }
  const folderId = folderIdMatch[1];
  const imageUrls = [
    // Use Google Drive's embedded folder preview as main image
    `https://drive.google.com/uc?export=view&id=${folderId}`,
    // Alternative format for thumbnail
    `https://drive.google.com/thumbnail?id=${folderId}&sz=w800-h600-c`,
    // Folder preview format
    `https://lh3.googleusercontent.com/d/${folderId}=w800-h600-no`,
    // Direct folder view for fallback
    googleDriveFolderUrl
  ];
  console.log(`Extracted ${imageUrls.length} image URLs from Google Drive folder: ${folderId}`);
  return imageUrls;
}
function createBasicCaseStudyWithImages(pageId, title) {
  const client = title.split("(")[0].trim();
  return {
    id: pageId,
    title,
    client,
    industry: "Marketing & Events",
    campaign_type: "Brand Activation",
    description: `Successful experiential marketing campaign for ${client}.`,
    results: `Successful brand activation campaign for ${client} with positive engagement results.`,
    what_we_did: "",
    services_provided: [],
    markets: [],
    product_offering: "",
    google_drive_folder: "",
    assets_folder: "",
    notion_url: `https://www.notion.so/${pageId.replace(/-/g, "")}`,
    image_url: getClientSpecificImage(client, "Marketing", "Brand Activation"),
    has_real_assets: false,
    google_drive_images: [],
    date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
    status: "Published"
  };
}
function getClientSpecificImage(client, industry, campaign_type) {
  const clientLower = client.toLowerCase();
  if (clientLower.includes("microsoft")) {
    return "https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
  }
  if (clientLower.includes("apple")) {
    return "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
  }
  if (clientLower.includes("netflix")) {
    return "https://images.unsplash.com/photo-1489599804962-c3dd2d6f6965?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
  }
  if (clientLower.includes("mrbeast")) {
    return "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
  }
  if (clientLower.includes("williams") || clientLower.includes("racing") || clientLower.includes("formula")) {
    return "https://images.unsplash.com/photo-1525198018674-2b5d8030bb80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
  }
  if (clientLower.includes("mac") || clientLower.includes("cosmetic")) {
    return "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
  }
  if (clientLower.includes("buffalo") || clientLower.includes("wild") || clientLower.includes("wings")) {
    return "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
  }
  if (clientLower.includes("cirque") || clientLower.includes("soleil")) {
    return "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
  }
  if (clientLower.includes("nissan")) {
    return "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
  }
  if (clientLower.includes("tequila") || clientLower.includes("1800")) {
    return "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
  }
  if (clientLower.includes("waiakea") || clientLower.includes("water")) {
    return "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
  }
  if (clientLower.includes("topps") || clientLower.includes("trading")) {
    return "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
  }
  if (clientLower.includes("wagamama") || clientLower.includes("culinary")) {
    return "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
  }
  if (clientLower.includes("clarins") || clientLower.includes("byoma")) {
    return "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
  }
  if (clientLower.includes("ted")) {
    return "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
  }
  if (clientLower.includes("car") || clientLower.includes("wash")) {
    return "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
  }
  if (clientLower.includes("solar")) {
    return "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
  }
  if (clientLower.includes("golf")) {
    return "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
  }
  return "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
}
function createGoogleDriveImageUrl(googleDriveFolderUrl) {
  if (!googleDriveFolderUrl || !googleDriveFolderUrl.includes("drive.google.com")) {
    return "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
  }
  const folderIdMatch = googleDriveFolderUrl.match(/folders\/([a-zA-Z0-9-_]+)/);
  if (!folderIdMatch) {
    return "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
  }
  const folderId = folderIdMatch[1];
  return googleDriveFolderUrl;
}

// server/routes.ts
import { z } from "zod";
async function registerRoutes(app2) {
  app2.post("/api/contact", async (req, res) => {
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
  app2.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.get("/api/case-studies", async (req, res) => {
    try {
      const caseStudies = await fetchCaseStudiesWithImages();
      res.json(caseStudies);
    } catch (error) {
      console.error("Error fetching case studies:", error);
      res.status(500).json({ message: "Failed to fetch case studies" });
    }
  });
  app2.get("/api/case-studies/featured", async (req, res) => {
    try {
      const allCaseStudies = await fetchCaseStudiesWithImages();
      const featuredCaseStudies = allCaseStudies.slice(0, 3);
      res.json(featuredCaseStudies);
    } catch (error) {
      console.error("Error fetching featured case studies:", error);
      res.status(500).json({ message: "Failed to fetch featured case studies" });
    }
  });
  app2.get("/api/case-studies/:id", async (req, res) => {
    try {
      const allCaseStudies = await fetchCaseStudiesWithImages();
      const caseStudy = allCaseStudies.find((cs) => cs.id === req.params.id);
      if (!caseStudy) {
        return res.status(404).json({ message: "Case study not found" });
      }
      res.json(caseStudy);
    } catch (error) {
      console.error("Error fetching case study:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.get("/api/health", async (req, res) => {
    try {
      const caseStudies = await fetchCaseStudiesWithImages();
      res.json({
        status: "ok",
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        case_studies_count: caseStudies.length
      });
    } catch (error) {
      res.json({
        status: "error",
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        case_studies_count: 0,
        error: "Failed to fetch case studies"
      });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
