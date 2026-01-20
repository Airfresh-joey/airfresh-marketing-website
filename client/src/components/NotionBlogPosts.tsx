import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'wouter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Calendar, User, Tag, ChevronRight } from 'lucide-react';

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

export function NotionBlogPosts() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const { data: blogPosts, isLoading, error } = useQuery<NotionBlogPost[]>({
    queryKey: ['/api/notion/blog-posts'],
  });

  // Extract unique categories from posts
  const categories = blogPosts 
    ? ['all', ...Array.from(new Set(blogPosts.map(post => post.category)))]
    : ['all'];

  // Filter posts by category
  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts?.filter(post => post.category === selectedCategory);

  if (isLoading) {
    return <NotionBlogPostsSkeleton />;
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Unable to load blog posts
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Please try again later or check our main blog.
          </p>
          <Link href="/blog">
            <Button className="mt-4">
              Visit Main Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  if (!blogPosts || blogPosts.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            No blog posts available
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Check back soon for new content!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Latest from Our Blog
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Insights, tips, and stories from the world of experiential marketing
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map(category => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            data-testid={`button-category-${category}`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts?.map((post) => (
          <NotionBlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

function NotionBlogPostCard({ post }: { post: NotionBlogPost }) {
  const formattedDate = new Date(post.publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      {/* Featured Image */}
      {post.featuredImage && (
        <figure className="aspect-video w-full overflow-hidden rounded-t-lg" itemScope itemType="https://schema.org/ImageObject">
          <img 
            src={post.featuredImage} 
            alt={post.title}
            title={`${post.title} - AirFresh Marketing Blog`}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            width="800"
            height="450"
            data-testid={`img-blog-${post.id}`}
            itemProp="contentUrl"
          />
          <meta itemProp="name" content={post.title} />
          <meta itemProp="description" content={post.excerpt} />
          {/* SEO keywords in caption, not alt text */}
          <figcaption className="sr-only" itemProp="caption">
            {post.title} - Expert insights on experiential marketing, brand ambassadors, and event staffing strategies
          </figcaption>
        </figure>
      )}
      
      <CardHeader>
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
          <Calendar className="w-4 h-4" />
          <span>{formattedDate}</span>
        </div>
        <CardTitle className="line-clamp-2">
          <Link href={`/notion-blog/${post.slug}`}>
            <a className="hover:text-primary transition-colors" data-testid={`link-blog-${post.id}`}>
              {post.title}
            </a>
          </Link>
        </CardTitle>
        <CardDescription className="line-clamp-3 mt-2">
          {post.excerpt}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <div className="flex items-center gap-2 mb-4">
          <User className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          <span className="text-sm text-gray-500 dark:text-gray-400" data-testid={`text-author-${post.id}`}>
            {post.author}
          </span>
        </div>
        
        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map(tag => (
              <Badge key={tag} variant="secondary" className="text-xs">
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
        )}
        
        <Link href={`/notion-blog/${post.slug}`}>
          <Button variant="ghost" size="sm" className="group">
            Read More
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

function NotionBlogPostsSkeleton() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Skeleton className="h-10 w-64 mb-4" />
      <Skeleton className="h-6 w-96 mb-8" />
      
      <div className="flex gap-2 mb-8">
        {[1, 2, 3, 4].map(i => (
          <Skeleton key={i} className="h-8 w-24" />
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <Card key={i} className="h-full">
            <Skeleton className="aspect-video w-full rounded-t-lg" />
            <CardHeader>
              <Skeleton className="h-4 w-24 mb-2" />
              <Skeleton className="h-6 w-full mb-2" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-32 mb-4" />
              <div className="flex gap-2">
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-6 w-16" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}