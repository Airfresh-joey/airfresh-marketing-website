import { NotionGallery } from '@/components/NotionGallery';
import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function NotionGalleryPage() {
  return (
    <>
      <SEO 
        title="Event Galleries - AirFresh Marketing"
        description="Visual stories from our most memorable brand activations and events. Browse our portfolio of experiential marketing campaigns."
        keywords="event galleries, brand activation photos, experiential marketing portfolio, event production gallery, marketing campaigns"
        ogImage="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80"
      />
      <Navigation />
      <main className="min-h-screen bg-white dark:bg-gray-900">
        <NotionGallery />
      </main>
      <Footer />
    </>
  );
}