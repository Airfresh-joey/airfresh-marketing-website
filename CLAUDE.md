# AFM Website - Development Guide

## Overview
Air Fresh Marketing website built with Next.js 14, deployed on Vercel.

## Blog Posts (Manual Process)

**⚠️ Blog posts are static for performance reasons.**

To add a new blog post:

1. Edit `client/src/data/blogPosts.ts`
2. Add a new entry at the **beginning** of the `blogPosts` array (newest first)
3. Follow this format:

```typescript
{
  id: "unique-id",
  slug: "url-friendly-slug",
  title: "Your Blog Post Title",
  excerpt: "Short description for preview cards (1-2 sentences)",
  image: "/images/blog/your-image.jpg",  // Add image to public/images/blog/
  author: "Air Fresh Marketing Team",
  date: "Month Day, Year",
  readTime: "X min read",
  category: "Category Name",
  tags: ["Tag1", "Tag2", "Tag3"],
  content: `
# Your Markdown Content

Full blog post content here...
  `
}
```

4. Add the blog image to `public/images/blog/`
5. Commit and push - Vercel auto-deploys

**Why manual?** Removing the API/tanstack-query saves ~50KB JS and significantly improves PageSpeed scores.

## Performance Optimizations

### Video (Hero)
- Video only loads on desktop (768px+)
- Mobile shows static poster image
- This saves 298KB+ of Vimeo player JS on mobile

### Images
- All images optimized to max 1920px width, 85% quality
- Use Next.js `<Image>` component with proper `sizes` prop
- Hero poster is prioritized for fast LCP

### JavaScript
- No framer-motion (CSS animations instead)
- No tanstack-query (static blog data)
- Analytics deferred with `afterInteractive` strategy

## SEO Rules (Ben's Requirements)

For city-service pages (`app/city-services/[slug]/page.tsx`):

1. **H1**: Exact keyword at START (e.g., "Brand Ambassadors New York City" not "Brand Ambassadors in New York City")
2. **H2**: Exact keyword at START
3. **Meta description**: Starts with exact keyword phrase
4. **First sentence**: Keyword near the start
5. **First image alt**: Exact keyword phrase
6. **Word count**: 350+ words per page
7. **URL**: Contains exact keyword (already handled by slug structure)

## Development

```bash
npm install
npm run dev
```

## Deployment

Push to `main` branch → Vercel auto-deploys

Production: https://www.airfreshmarketing.com/
