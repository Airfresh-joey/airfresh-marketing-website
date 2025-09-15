import { useParams, Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Calendar, User, Tag, ChevronLeft, Clock } from 'lucide-react';

interface NotionBlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  publishDate: string;
  featuredImage: string;
  notionUrl: string;
  lastUpdated: string;
}

export default function NotionBlogPost() {
  const params = useParams<{ slug: string }>();
  
  // First fetch all posts to find the one with matching slug
  const { data: posts, isLoading, error } = useQuery<NotionBlogPost[]>({
    queryKey: ['/api/notion/blog-posts'],
  });

  const post = posts?.find(p => p.slug === params.slug);

  if (isLoading) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-white dark:bg-gray-900">
          <BlogPostSkeleton />
        </main>
        <Footer />
      </>
    );
  }

  if (error || !post) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Blog Post Not Found
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                The blog post you're looking for doesn't exist or has been removed.
              </p>
              <Link href="/notion-blog">
                <Button>
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const formattedDate = new Date(post.publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const readingTime = Math.ceil(post.content.split(' ').length / 200);

  return (
    <>
      <SEO 
        title={`${post.title} - AirFresh Marketing Blog`}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        ogImage={post.featuredImage}
      />
      <Navigation />
      <main className="min-h-screen bg-white dark:bg-gray-900">
        <article className="container mx-auto px-4 py-16 max-w-4xl">
          {/* Back to Blog */}
          <Link href="/notion-blog">
            <Button variant="ghost" className="mb-8">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          {/* Featured Image */}
          {post.featuredImage && (
            <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
              <img 
                src={post.featuredImage} 
                alt={post.title}
                className="w-full h-full object-cover"
                data-testid="img-blog-post-featured"
              />
            </div>
          )}

          {/* Post Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">{post.category}</Badge>
              <span className="text-gray-500 dark:text-gray-400">•</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {readingTime} min read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-700 dark:text-gray-300" data-testid="text-blog-author">
                    {post.author}
                  </span>
                </div>
                <span className="text-gray-500 dark:text-gray-400">•</span>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-700 dark:text-gray-300" data-testid="text-blog-date">
                    {formattedDate}
                  </span>
                </div>
              </div>
            </div>
          </header>

          {/* Post Content */}
          <div 
            className="prose prose-lg dark:prose-invert max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
            data-testid="div-blog-content"
          />

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <span className="text-gray-700 dark:text-gray-300 font-semibold">Tags:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-12">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Create Your Own Brand Experience?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Let's discuss how we can help bring your brand to life through experiential marketing.
              </p>
              <Link href="/contact">
                <Button size="lg" data-testid="button-blog-cta">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

function BlogPostSkeleton() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <Skeleton className="h-10 w-32 mb-8" />
      <Skeleton className="aspect-video w-full rounded-lg mb-8" />
      
      <div className="mb-8">
        <div className="flex gap-2 mb-4">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-24" />
        </div>
        <Skeleton className="h-12 w-full mb-4" />
        <Skeleton className="h-12 w-3/4 mb-4" />
        <Skeleton className="h-6 w-full mb-6" />
        <Skeleton className="h-6 w-2/3 mb-6" />
        
        <div className="flex gap-4 pb-6 border-b">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-5 w-32" />
        </div>
      </div>
      
      <div className="space-y-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  );
}