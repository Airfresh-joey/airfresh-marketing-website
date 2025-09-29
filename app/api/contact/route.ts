import { NextRequest, NextResponse } from 'next/server';
import { storage } from '@/server/storage';
import { insertContactSubmissionSchema } from '@shared/schema';
import { z } from 'zod';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = insertContactSubmissionSchema.parse(body);
    const submission = await storage.createContactSubmission(validatedData);
    return NextResponse.json({ success: true, submission });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Invalid form data", errors: error.errors },
        { status: 400 }
      );
    } else {
      return NextResponse.json(
        { message: "Internal server error" },
        { status: 500 }
      );
    }
  }
}

export async function GET() {
  try {
    const submissions = await storage.getContactSubmissions();
    return NextResponse.json(submissions);
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}