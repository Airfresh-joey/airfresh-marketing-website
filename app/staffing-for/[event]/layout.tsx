import type { Metadata } from 'next';
import { getEventBySlug } from '@/server/eventPages';

interface EventLayoutProps {
  children: React.ReactNode;
  params: Promise<{ event: string }>;
}

export async function generateMetadata({ params }: { params: Promise<{ event: string }> }): Promise<Metadata> {
  const { event: slug } = await params;
  const eventPage = getEventBySlug(slug);

  if (!eventPage) {
    return {
      title: 'Event Staffing',
      description: 'Professional event staffing and brand ambassadors nationwide. AirFresh Marketing.',
    };
  }

  return {
    title: eventPage.title,
    description: eventPage.metaDescription,
    keywords: eventPage.keywords.join(', '),
    openGraph: {
      type: 'website',
      title: eventPage.title,
      description: eventPage.metaDescription,
      url: `https://www.airfreshmarketing.com/staffing-for/${slug}`,
      images: [
        {
          url: '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `${eventPage.h1} | AirFresh Marketing`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: eventPage.title,
      description: eventPage.metaDescription,
      images: ['/images/og-image.jpg'],
    },
    alternates: {
      canonical: `https://www.airfreshmarketing.com/staffing-for/${slug}`,
    },
  };
}

export default function EventPageLayout({ children }: EventLayoutProps) {
  return children;
}
