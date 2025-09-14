import { useRoute } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Calendar, User, Clock, Share2, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import LinkedInShare from "@/components/LinkedInShare";
import type { BlogPost } from "@shared/schema";

export default function BlogPostDetail() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;

  const { data: post, isLoading, error } = useQuery<BlogPost>({
    queryKey: [`/api/blog/${slug}`],
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="pt-24 px-4 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-8"></div>
          <div className="h-96 bg-gray-200 rounded max-w-4xl mx-auto"></div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="pt-24 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <Link href="/blog">
          <Button variant="outline">
            <ArrowLeft className="mr-2" size={16} />
            Back to Blog
          </Button>
        </Link>
      </div>
    );
  }

  // Parse content for Q&A sections
  const sections = post.content.split(/(?=##\s)/);
  const mainContent = sections[0];
  const qaSection = sections.slice(1);

  // Generate FAQ structured data
  const faqStructuredData = qaSection.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": qaSection.map(section => {
      const lines = section.split('\n');
      const question = lines[0].replace(/^##\s/, '');
      const answer = lines.slice(1).join('\n').trim();
      return {
        "@type": "Question",
        "name": question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": answer
        }
      };
    })
  } : null;

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "datePublished": post.date,
    "dateModified": post.updatedAt,
    "publisher": {
      "@type": "Organization",
      "name": "AirFresh Marketing",
      "logo": {
        "@type": "ImageObject",
        "url": "https://airfreshmarketing.com/logo.jpg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://airfreshmarketing.com/blog/${post.slug}`
    }
  };

  const combinedStructuredData = faqStructuredData ? 
    [articleStructuredData, faqStructuredData] : 
    articleStructuredData;

  return (
    <div className="pt-20">
      <SEO
        title={`${post.title} | AirFresh Marketing Blog`}
        description={post.metaDescription}
        canonical={`https://airfreshmarketing.com/blog/${post.slug}`}
        ogType="article"
        structuredData={combinedStructuredData}
      />

      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-12">
          <Link href="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2" size={16} />
              Back to Blog
            </Button>
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              data-testid={`text-blog-title-${post.id}`}>
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span data-testid={`text-blog-author-${post.id}`}>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span data-testid={`text-blog-date-${post.id}`}>
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span data-testid={`text-blog-readtime-${post.id}`}>
                {Math.ceil(post.content.split(' ').length / 200)} min read
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary" data-testid={`badge-category-${post.id}`}>
              {post.category}
            </Badge>
            {post.tags?.map(tag => (
              <Badge key={tag} variant="outline" data-testid={`badge-tag-${tag}`}>
                <Tag size={12} className="mr-1" />
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex gap-4">
            <LinkedInShare 
              url={`https://airfreshmarketing.com/blog/${post.slug}`}
              title={post.title}
              summary={post.excerpt}
            />
          </div>
        </header>

        <Separator className="mb-8" />

        {/* Table of Contents for Q&A posts */}
        {qaSection.length > 0 && (
          <nav className="bg-muted/50 rounded-lg p-6 mb-8">
            <h2 className="font-semibold mb-4">Quick Navigation</h2>
            <ul className="space-y-2">
              {qaSection.map((section, index) => {
                const question = section.split('\n')[0].replace(/^##\s/, '');
                const id = `section-${index}`;
                return (
                  <li key={index}>
                    <a 
                      href={`#${id}`}
                      className="text-primary hover:underline"
                      data-testid={`link-toc-${index}`}
                    >
                      {question}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}

        {/* Main Content */}
        <div className="prose prose-lg max-w-none mb-8">
          <div dangerouslySetInnerHTML={{ __html: formatContent(mainContent) }} />
        </div>

        {/* Q&A Sections */}
        {qaSection.map((section, index) => {
          const lines = section.split('\n');
          const question = lines[0].replace(/^##\s/, '');
          const answer = lines.slice(1).join('\n').trim();
          const id = `section-${index}`;

          return (
            <section key={index} id={id} className="mb-12">
              <h2 className="text-2xl font-bold mb-4" data-testid={`text-qa-question-${index}`}>
                {question}
              </h2>
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: formatContent(answer) }}
                data-testid={`text-qa-answer-${index}`}
              />
            </section>
          );
        })}

        <Separator className="my-12" />

        {/* Share and Related */}
        <footer className="space-y-8">
          <div>
            <h3 className="font-semibold mb-4">Share This Post</h3>
            <div className="flex gap-4">
              <LinkedInShare 
                url={`https://airfreshmarketing.com/blog/${post.slug}`}
                title={post.title}
                summary={post.excerpt}
              />
              <Button variant="outline" size="sm">
                <Share2 className="mr-2" size={16} />
                Copy Link
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Ready to Transform Your Brand Experience?</h3>
            <p className="text-muted-foreground mb-4">
              Let's discuss how we can help you create memorable experiential marketing campaigns.
            </p>
            <Link href="/contact">
              <Button data-testid="button-contact-cta">
                Get in Touch
              </Button>
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
}

// Helper function to format markdown-like content to HTML
function formatContent(content: string): string {
  return content
    // Bold text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Lists
    .replace(/^- (.*?)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/, '<ul>$1</ul>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>')
    // Paragraphs
    .split('\n\n')
    .map(p => p.trim() ? `<p>${p}</p>` : '')
    .join('');
}