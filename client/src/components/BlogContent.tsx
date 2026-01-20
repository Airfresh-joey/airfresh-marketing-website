import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Calendar, User, ArrowRight, TrendingUp, Users, Zap } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  category: string;
  readTime: string;
  image: string;
  tags: string[];
}

export default function BlogContent() {
  const blogPosts: BlogPost[] = [
    {
      id: "experiential-marketing-trends-2025",
      title: "10 Experiential Marketing Trends Dominating 2025",
      excerpt: "Discover the latest experiential marketing trends that are shaping brand activations and customer engagement strategies in 2025.",
      content: `Experiential marketing continues to evolve as brands seek deeper connections with their audiences. Here are the top trends defining 2025:

1. **Hybrid Physical-Digital Experiences**: Blending in-person events with AR/VR technology
2. **Sustainable Brand Activations**: Eco-friendly events that align with consumer values
3. **Micro-Influencer Partnerships**: Authentic collaborations at experiential events
4. **Data-Driven Personalization**: Real-time customization of brand experiences
5. **Wellness-Focused Activations**: Health and mindfulness integrated into brand events

The key to success is creating authentic, memorable experiences that resonate with your target audience while driving measurable business results.`,
      author: "Sarah Johnson",
      publishDate: "2025-09-08",
      category: "Trends",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["experiential marketing", "trends", "brand activations", "2025"]
    },
    {
      id: "roi-experiential-marketing-campaigns",
      title: "Measuring ROI in Experiential Marketing: A Complete Guide",
      excerpt: "Learn how to track and measure the return on investment for your experiential marketing campaigns with proven metrics and strategies.",
      content: `Measuring ROI in experiential marketing requires a multi-faceted approach that goes beyond traditional metrics:

**Key Performance Indicators:**
- Attendance and engagement metrics
- Lead generation and conversion rates
- Brand awareness lift and sentiment analysis
- Social media reach and user-generated content
- Sales attribution and customer lifetime value

**Best Practices for ROI Measurement:**
1. Set clear objectives before campaign launch
2. Implement tracking systems at every touchpoint
3. Use both quantitative and qualitative metrics
4. Follow up with participants post-event
5. Compare results against industry benchmarks

Successful experiential marketing campaigns typically see 3-5x higher engagement rates compared to traditional advertising methods.`,
      author: "Mike Chen",
      publishDate: "2025-09-05",
      category: "Strategy",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["ROI", "metrics", "campaign measurement", "analytics"]
    },
    {
      id: "brand-ambassador-program-success",
      title: "Building Successful Brand Ambassador Programs in 2025",
      excerpt: "Essential strategies for creating and managing effective brand ambassador programs that drive authentic customer engagement.",
      content: `A well-executed brand ambassador program can significantly amplify your marketing reach and create authentic connections with your target audience:

**Key Components of Successful Programs:**
- Thorough ambassador recruitment and vetting process
- Comprehensive training on brand values and messaging
- Clear guidelines and performance expectations
- Regular communication and support systems
- Performance tracking and feedback mechanisms

**Best Practices:**
1. Choose ambassadors who genuinely align with your brand
2. Provide ongoing training and resources
3. Create exclusive perks and recognition programs
4. Monitor performance and provide constructive feedback
5. Foster a sense of community among ambassadors

Brands with strong ambassador programs see 25% higher customer retention rates and 20% increase in word-of-mouth referrals.`,
      author: "Lisa Rodriguez",
      publishDate: "2025-09-02",
      category: "Brand Ambassadors",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["brand ambassadors", "program management", "engagement", "retention"]
    }
  ];

  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

  // Structured data for blog
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "AirFresh Marketing Blog - Experiential Marketing Insights",
    "description": "Expert insights on experiential marketing, brand activations, event marketing strategies, and industry trends",
    "url": "https://airfreshmarketing.com/blog",
    "author": {
      "@type": "Organization",
      "name": "AirFresh Marketing"
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "datePublished": post.publishDate,
      "image": post.image,
      "publisher": {
        "@type": "Organization",
        "name": "AirFresh Marketing"
      }
    }))
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Experiential Marketing Insights & Strategies
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Expert insights on experiential marketing trends, brand activation strategies, 
          and proven tactics for creating memorable customer experiences.
        </p>
      </div>

      {/* Featured Categories */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map(category => (
          <span
            key={category}
            className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
          >
            {category}
          </span>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-12">
        {blogPosts.map(post => (
          <Card key={post.id} className="h-full hover:shadow-lg transition-shadow">
            <div className="relative">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <span className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                {post.category}
              </span>
            </div>
            <CardContent className="p-6 flex flex-col h-full">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(post.publishDate).toLocaleDateString()}
                <span className="mx-2">•</span>
                <User className="h-4 w-4 mr-1" />
                {post.author}
                <span className="mx-2">•</span>
                {post.readTime}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-1 mb-4">
                {post.tags.slice(0, 3).map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                  >
                    #{tag.replace(/\s+/g, '')}
                  </span>
                ))}
              </div>

              <Button variant="outline" className="w-full group">
                Read More
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call-to-Action */}
      <div className="text-center bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Ready to Create Your Own Success Story?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Let our experiential marketing experts help you create memorable brand experiences 
          that drive real business results.
        </p>
        <Button asChild size="lg" className="group">
          <Link href="/contact">
            Get Your Free Consultation
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>

      {/* Popular Tags */}
      <div className="mt-12">
        <h3 className="text-lg font-semibold mb-4">Popular Topics</h3>
        <div className="flex flex-wrap gap-2">
          {allTags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 bg-white border border-gray-200 text-gray-700 text-sm rounded-full hover:bg-gray-50 cursor-pointer"
            >
              #{tag.replace(/\s+/g, '')}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}