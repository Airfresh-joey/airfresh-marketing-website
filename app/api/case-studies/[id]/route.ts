import { NextRequest, NextResponse } from 'next/server';
import { fetchCaseStudiesWithImages } from '@/server/notion-case-studies-with-images';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const allCaseStudies = await fetchCaseStudiesWithImages();
    const caseStudy = allCaseStudies.find(cs => cs.id === id);
    if (!caseStudy) {
      return NextResponse.json(
        { message: "Case study not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(caseStudy);
  } catch (error) {
    console.error('Error fetching case study:', error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}