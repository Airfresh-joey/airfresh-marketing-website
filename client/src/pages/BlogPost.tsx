import { useParams, Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import SEO from "@/components/SEO";
import { blogPosts } from "@/data/blogPosts";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Tag,
  Share2,
  Twitter,
  Facebook,
  Linkedin,
  Copy,
  CheckCircle,
  User,
  BookOpen,
  Sparkles,
  ChevronRight,
  Mail,
  Phone,
  MessageCircle
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

export default function BlogPost() {
  const { slug } = useParams();
  const [, setLocation] = useLocation();
  const [copied, setCopied] = useState(false);
  const [readProgress, setReadProgress] = useState(0);

  // Find the blog post
  const post = blogPosts.find(p => p.slug === slug);

  // Related posts (same category, or first 3 other posts)
  const relatedPosts = blogPosts
    .filter(p => p.slug !== slug)
    .sort((a, b) => {
      // Prioritize same category
      if (post) {
        const aMatch = a.category === post.category ? 1 : 0;
        const bMatch = b.category === post.category ? 1 : 0;
        return bMatch - aMatch;
      }
      return 0;
    })
    .slice(0, 3);

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / documentHeight) * 100;
      setReadProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button className="bg-cyan-500 hover:bg-cyan-600">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Copy link to clipboard
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    toast({
      title: "Link copied!",
      description: "Article link has been copied to clipboard.",
    });
    setTimeout(() => setCopied(false), 3000);
  };

  // Share functions
  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  // Enhanced content rendering with beautiful typography
  const renderContent = () => {
    const lines = post.content.split('\n');
    const elements: JSX.Element[] = [];
    let currentSection: string[] = [];
    let listItems: string[] = [];
    let inList = false;

    lines.forEach((line) => {
      const trimmedLine = line.trim();

      // Check if this is a list item
      if (trimmedLine.startsWith('- ')) {
        if (!inList) {
          // Process any accumulated content before the list
          if (currentSection.length > 0) {
            const content = currentSection.join(' ').trim();
            if (content) {
              elements.push(renderParagraph(content, elements.length));
            }
            currentSection = [];
          }
          inList = true;
          listItems = [];
        }
        listItems.push(trimmedLine.substring(2));
      } else {
        // If we were in a list, render it
        if (inList && listItems.length > 0) {
          elements.push(renderList(listItems, elements.length));
          listItems = [];
          inList = false;
        }

        // Check for headers
        if (trimmedLine.startsWith('# ')) {
          if (currentSection.length > 0) {
            const content = currentSection.join(' ').trim();
            if (content) {
              elements.push(renderParagraph(content, elements.length));
            }
            currentSection = [];
          }
          // Skip the main title as it's already displayed in the hero
        } else if (trimmedLine.startsWith('## ')) {
          if (currentSection.length > 0) {
            const content = currentSection.join(' ').trim();
            if (content) {
              elements.push(renderParagraph(content, elements.length));
            }
            currentSection = [];
          }
          elements.push(renderH2(trimmedLine.substring(3), elements.length));
        } else if (trimmedLine.startsWith('### ')) {
          if (currentSection.length > 0) {
            const content = currentSection.join(' ').trim();
            if (content) {
              elements.push(renderParagraph(content, elements.length));
            }
            currentSection = [];
          }
          elements.push(renderH3(trimmedLine.substring(4), elements.length));
        } else if (trimmedLine === '') {
          if (currentSection.length > 0) {
            const content = currentSection.join(' ').trim();
            if (content) {
              elements.push(renderParagraph(content, elements.length));
            }
            currentSection = [];
          }
        } else {
          currentSection.push(trimmedLine);
        }
      }
    });

    // Process any remaining content
    if (inList && listItems.length > 0) {
      elements.push(renderList(listItems, elements.length));
    }
    if (currentSection.length > 0) {
      const content = currentSection.join(' ').trim();
      if (content) {
        elements.push(renderParagraph(content, elements.length));
      }
    }

    return <div className="prose prose-xl max-w-none">{elements}</div>;
  };

  // Helper functions for rendering
  const processInlineFormatting = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic text-gray-700">$1</em>');
  };

  const renderH2 = (text: string, key: number) => (
    <h2 key={key} className="text-4xl font-bold mt-16 mb-8 text-gray-900 relative">
      <span className="absolute -left-12 top-2 text-cyan-500/20 text-6xl font-black">#</span>
      <span dangerouslySetInnerHTML={{ __html: processInlineFormatting(text) }} />
    </h2>
  );

  const renderH3 = (text: string, key: number) => (
    <h3
      key={key}
      className="text-2xl font-bold mt-10 mb-6 text-gray-800 border-l-4 border-cyan-500 pl-4"
      dangerouslySetInnerHTML={{ __html: processInlineFormatting(text) }}
    />
  );

  const renderList = (items: string[], key: number) => (
    <ul key={key} className="space-y-4 my-8">
      {items.map((item, i) => (
        <li key={i} className="flex items-start group">
          <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:bg-cyan-200 transition-colors">
            <ChevronRight className="w-4 h-4 text-cyan-600" />
          </div>
          <span
            className="text-lg text-gray-700 leading-relaxed flex-1"
            dangerouslySetInnerHTML={{ __html: processInlineFormatting(item) }}
          />
        </li>
      ))}
    </ul>
  );

  const renderParagraph = (text: string, key: number) => {
    // Check for special content types
    const isResultsSection = text.includes('Results') && (text.includes('%') || text.includes('$'));
    const hasStats = text.match(/\d{3,}/) || (text.includes('%') && text.includes('-'));

    if (isResultsSection || hasStats) {
      return (
        <div key={key} className="my-12 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-20"></div>
          <Card className="relative bg-gradient-to-br from-white to-cyan-50 border-cyan-200/50">
            <CardContent className="p-8">
              <div className="flex items-start">
                <Sparkles className="w-8 h-8 text-cyan-500 mr-4 flex-shrink-0 mt-1" />
                <div
                  className="text-lg text-gray-800 leading-relaxed font-medium"
                  dangerouslySetInnerHTML={{ __html: processInlineFormatting(text) }}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    // Bold emphasis paragraph
    if (text.startsWith('**') && text.endsWith('**')) {
      return (
        <p
          key={key}
          className="text-2xl font-bold text-gray-900 my-10 leading-relaxed bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
          dangerouslySetInnerHTML={{ __html: processInlineFormatting(text) }}
        />
      );
    }

    // Regular paragraph with better typography
    return (
      <p
        key={key}
        className="text-xl text-gray-700 leading-relaxed my-6 tracking-wide"
        dangerouslySetInnerHTML={{ __html: processInlineFormatting(text) }}
      />
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`${post.title} | Air Fresh Marketing Blog`}
        description={post.excerpt}
        canonical={`https://airfreshmarketing.com/blog/${post.slug}`}
        image={post.image}
      />

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-100">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-600"
          style={{ width: `${readProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Hero with Image */}
      <section className="relative bg-white pt-20">
        {/* Back Button - Fixed at top */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/blog">
            <Button variant="ghost" className="group hover:bg-gray-50">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Button>
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <Badge className="mb-6 px-4 py-2 bg-cyan-100 text-cyan-700 hover:bg-cyan-200 text-sm font-semibold">
              {post.category}
            </Badge>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {post.excerpt}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-500">
              <span className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center">
                  <User className="w-5 h-5 text-cyan-600" />
                </div>
                <span className="font-medium">{post.author}</span>
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                {post.content.split(' ').length} words
              </span>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="aspect-[21/9] relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {/* Article Content */}
          {renderContent()}

          {/* Tags Section */}
          <div className="mt-16 pt-8 border-t-2 border-gray-100">
            <h3 className="text-lg font-bold mb-6 text-gray-900">Related Topics</h3>
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-cyan-100 hover:text-cyan-700 transition-colors cursor-pointer text-sm font-medium"
                >
                  <Tag className="w-3 h-3 mr-2" />
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Share Section */}
          <div className="mt-12 p-8 bg-gray-50 rounded-2xl">
            <h3 className="text-lg font-bold mb-6 text-gray-900">Share this article</h3>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="lg"
                onClick={shareOnTwitter}
                className="hover:bg-cyan-50 hover:border-cyan-400 hover:text-cyan-700"
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={shareOnFacebook}
                className="hover:bg-blue-50 hover:border-blue-400 hover:text-blue-700"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={shareOnLinkedIn}
                className="hover:bg-blue-50 hover:border-blue-600 hover:text-blue-700"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={copyLink}
                className="hover:bg-green-50 hover:border-green-400 hover:text-green-700"
              >
                {copied ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </motion.article>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-br from-cyan-600 to-blue-700 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]"></div>
            <CardContent className="p-12 relative">
              <Sparkles className="w-12 h-12 mb-6 text-cyan-200" />
              <h2 className="text-3xl font-bold mb-4">Ready to Amplify Your Brand?</h2>
              <p className="text-lg text-cyan-50 mb-8">
                Let's create memorable experiences that drive real results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Get Started Today
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white/10">
                    <Phone className="w-5 h-5 mr-2" />
                    Schedule a Call
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h2 className="text-3xl font-bold mb-10 text-gray-900">Continue Reading</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer h-full overflow-hidden">
                    <div className="aspect-video relative overflow-hidden bg-gray-100">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <Badge className="absolute bottom-3 left-3 bg-white/90 text-gray-900">
                        {relatedPost.category}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg text-gray-900 group-hover:text-cyan-600 transition-colors line-clamp-2 mb-3">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {relatedPost.readTime}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-50 py-20 mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-100 mb-6">
              <Mail className="w-8 h-8 text-cyan-600" />
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Never Miss an Update
            </h2>
            <p className="text-xl mb-8 text-gray-600">
              Get the latest marketing insights delivered directly to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-cyan-500 text-lg"
              />
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
                Subscribe
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}