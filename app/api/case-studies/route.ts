import { NextResponse } from 'next/server';
import { fetchCaseStudiesWithImages } from '@/server/notion-case-studies-with-images';

export async function GET() {
  try {
    const caseStudies = await fetchCaseStudiesWithImages();
    return NextResponse.json(caseStudies);
  } catch (error) {
    console.error('Error fetching case studies:', error);
    return NextResponse.json(
      { message: 'Failed to fetch case studies' },
      { status: 500 }
    );
  }
}