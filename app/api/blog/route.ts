import { NextRequest, NextResponse } from 'next/server';
import { storage } from '@/server/storage';
import { insertBlogPostSchema } from '@shared/schema';
import { z } from 'zod';

// Get admin password from environment variable
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

// Authentication middleware for blog management
function authenticateBlogAdmin(req: NextRequest): boolean {
  const authHeader = req.headers.get('authorization');
  return !!(ADMIN_PASSWORD && authHeader === `Bearer ${ADMIN_PASSWORD}`);
}

export async function GET() {
  try {
    const posts = await storage.getBlogPosts();
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { message: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    if (!authenticateBlogAdmin(req)) {
      return NextResponse.json(
        {
          message: 'Unauthorized: Admin authentication required',
          error: 'Invalid or missing authentication'
        },
        { status: 401 }
      );
    }

    const body = await req.json();
    const validatedData = insertBlogPostSchema.parse(body);
    const post = await storage.createBlogPost(validatedData);

    return NextResponse.json({ success: true, post });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Invalid post data", errors: error.errors },
        { status: 400 }
      );
    } else {
      console.error('Error creating blog post:', error);
      return NextResponse.json(
        { message: "Internal server error" },
        { status: 500 }
      );
    }
  }
}