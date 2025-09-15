import { NotionBlogPosts } from '@/components/NotionBlogPosts';
import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function NotionBlog() {
  return (
    <>
      <SEO 
        title="Blog from Notion - AirFresh Marketing"
        description="Read our latest insights, tips, and stories from the world of experiential marketing, pulled directly from our Notion workspace."
        keywords="experiential marketing blog, brand activation insights, event marketing tips, marketing strategy, Notion blog"
        ogImage="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&q=80"
      />
      <Navigation />
      <main className="min-h-screen bg-white dark:bg-gray-900">
        <NotionBlogPosts />
      </main>
      <Footer />
    </>
  );
}