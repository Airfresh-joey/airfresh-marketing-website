import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { getAllCaseStudies, getCaseStudyById } from '../server/portfolio-case-studies.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Create Express app
const app = express();

// Middleware
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: false, limit: '100mb' }));

// API Routes - MUST come before static file serving
app.get('/api/portfolio-case-studies', (_req, res) => {
  try {
    const caseStudies = getAllCaseStudies();
    res.json(caseStudies);
  } catch (error) {
    console.error('Error fetching case studies:', error);
    res.status(500).json({ error: 'Failed to fetch case studies' });
  }
});

app.get('/api/portfolio-case-studies/:id', (req, res) => {
  try {
    const caseStudy = getCaseStudyById(req.params.id);
    if (caseStudy) {
      res.json(caseStudy);
    } else {
      res.status(404).json({ error: 'Case study not found' });
    }
  } catch (error) {
    console.error('Error fetching case study:', error);
    res.status(500).json({ error: 'Failed to fetch case study' });
  }
});

// Serve static files from the built client
const publicPath = path.join(__dirname, '..', 'dist', 'public');
app.use(express.static(publicPath));

// Catch-all route for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// Error handler
app.use((err, _req, res, _next) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

export default app;