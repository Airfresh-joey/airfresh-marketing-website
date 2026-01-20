# AirFresh - Experiential Marketing Website

## Overview

This is a full-stack web application for AirFresh, a nationwide experiential marketing company. The application features a React frontend with shadcn/ui components and an Express.js backend with PostgreSQL database integration using Drizzle ORM. The site includes marketing pages, a contact form, and a blog section to showcase the company's services and expertise.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens
- **State Management**: TanStack React Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: In-memory storage with fallback for database operations
- **API Design**: RESTful endpoints with JSON responses

### Database Schema
- **contact_submissions**: Stores contact form submissions with fields for name, email, phone, company, inquiry type, and message
- **users**: Basic user authentication schema (currently unused but available for future admin features)

## Key Components

### Pages
- **Home**: Hero section with brand messaging and service overview
- **About**: Company story, values, and team information
- **Services**: Detailed service offerings and capabilities
- **Contact**: Contact form and company contact information
- **Blog**: Marketing insights and industry content
- **CityPage**: Location-specific landing pages for different markets

### Core Features
- **Contact Form**: Validated form submission with email, phone, and inquiry type fields
- **Responsive Design**: Mobile-first design with adaptive layouts
- **Navigation**: Multi-level dropdown navigation with mobile hamburger menu
- **Toast Notifications**: User feedback for form submissions and errors

### UI Components
- Comprehensive shadcn/ui component library including cards, buttons, forms, dialogs, and navigation elements
- Custom styled components following the design system
- Reusable layout components (Navigation, Footer, Hero)

## Data Flow

1. **Frontend Requests**: React components use TanStack React Query for API calls
2. **API Layer**: Express.js handles HTTP requests and routes them to appropriate handlers
3. **Database Operations**: Drizzle ORM provides type-safe database interactions
4. **Response Handling**: JSON responses with proper error handling and status codes
5. **State Updates**: React Query manages cache invalidation and UI updates

## External Dependencies

### Frontend Dependencies
- React ecosystem (React, React DOM, React Router via Wouter)
- UI libraries (Radix UI primitives, Tailwind CSS, shadcn/ui)
- Form handling (React Hook Form, Hookform Resolvers)
- HTTP client (built-in fetch with TanStack React Query)
- Date utilities (date-fns)
- Icons (Lucide React)

### Backend Dependencies
- Express.js web framework
- Drizzle ORM with PostgreSQL dialect
- Neon Database serverless driver
- Session management (connect-pg-simple for future use)
- Development tools (tsx for TypeScript execution)

### Build and Development Tools
- Vite for frontend bundling and development server
- esbuild for backend bundling in production
- TypeScript compiler for type checking
- PostCSS with Tailwind CSS for styling
- Replit-specific development tools and error overlay

## Deployment Strategy

### Development Environment
- Runs on Replit with Node.js 20 and PostgreSQL 16
- Development server on port 5000 with Vite HMR
- Concurrent frontend and backend development with shared TypeScript types

### Production Build
- Frontend: Vite builds static assets to `dist/public`
- Backend: esbuild bundles server code to `dist/index.js`
- Database: Drizzle migrations managed via `drizzle-kit push`

### Hosting Configuration
- Autoscale deployment target on Replit
- External port 80 mapped to internal port 5000
- Static file serving for production builds
- Environment variables for database connection

## Recent Changes

- December 27, 2025: Added server-side caching for case studies (10-minute TTL, 300x faster on subsequent loads)
- December 27, 2025: Extracted images directly from Notion file properties for all 50 case studies
- December 27, 2025: Implemented parallel batch fetching for faster initial load times
- December 27, 2025: Expanded portfolio to 50 case studies from Notion database
- September 25, 2025: Fixed Google Drive image display issue with intelligent fallback system
- September 25, 2025: Integrated Google Drive API with Unsplash fallback for case study images
- September 25, 2025: Successfully connected 31 case studies from Notion database
- September 25, 2025: Implemented client-specific placeholder images for professional presentation
- June 25, 2025: Updated website design to match original AirFresh Marketing appearance
- June 25, 2025: Integrated PostgreSQL database with contact form submissions
- June 25, 2025: Replaced in-memory storage with persistent database storage

## Changelog

Changelog:
- June 24, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.