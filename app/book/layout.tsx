import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Discovery Call | Air Fresh Marketing',
  description: 'Schedule a free discovery call with Air Fresh Marketing to discuss your experiential marketing, brand activation, or event staffing needs.',
  robots: { index: false, follow: false },
};

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
