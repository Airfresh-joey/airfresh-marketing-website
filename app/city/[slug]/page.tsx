import { redirect } from 'next/navigation';

interface CityRedirectProps {
  params: Promise<{ slug: string }>;
}

export default async function CityRedirect({ params }: CityRedirectProps) {
  const { slug } = await params;
  redirect(`/cities/${slug}`);
}
