// Force no caching for portfolio pages
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
