import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  BookOpen,
  TrendingUp,
  Users,
  Lightbulb,
  Target,
  Award,
  Zap,
  Heart
} from "lucide-react";
import LinkedInShare from "@/components/LinkedInShare";
import LinkedInContentTemplates from "@/components/LinkedInContentTemplates";

export default function Blog() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "AirFresh Marketing Blog - Experiential Marketing Insights",
    "description": "Expert insights on experiential marketing trends, brand activation strategies, event marketing tips, and proven tactics for creating memorable customer experiences",
    "url": "https://airfreshmarketing.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "AirFresh Marketing",
      "logo": "https://airfreshmarketing.com/logo.jpg"
    },
    "inLanguage": "en-US",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://airfreshmarketing.com/blog"
    },
    "about": [
      {
        "@type": "Thing",
        "name": "Experiential Marketing",
        "description": "Marketing strategy that directly engages consumers through live experiences"
      },
      {
        "@type": "Thing",
        "name": "Brand Activation",
        "description": "Interactive marketing campaigns that promote brands through memorable experiences"
      }
    ]
  };
  const featuredArticle = {
    title: "The Future of Experiential Marketing: 2025 Trends & Predictions",
    excerpt: "Explore how emerging technologies, changing consumer behaviors, and new engagement strategies are reshaping the experiential marketing landscape for the year ahead.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    date: "March 15, 2024",
    readTime: "8 min read",
    author: "AirFresh Marketing Team",
    category: "Industry Trends",
    featured: true
  };

  const articles = [
    {
      title: "Creating Memorable Brand Activations That Drive ROI",
      excerpt: "Learn the essential elements that make brand activations unforgettable and discover proven strategies for creating lasting impressions that convert to business results.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "March 10, 2024",
      readTime: "6 min read",
      author: "Sarah Johnson",
      category: "Strategy",
      icon: Target
    },
    {
      title: "Measuring Success: ROI Metrics for Experiential Campaigns",
      excerpt: "Discover effective methods for tracking and measuring the success of your experiential marketing campaigns. We break down key metrics and optimization strategies.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "March 5, 2024",
      readTime: "5 min read",
      author: "Mike Chen",
      category: "Analytics",
      icon: TrendingUp
    },
    {
      title: "The Psychology Behind Successful Brand Experiences",
      excerpt: "Understanding the psychological principles that influence consumer behavior at live events. Learn how emotions, memory, and social dynamics drive engagement.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "February 28, 2024",
      readTime: "7 min read",
      author: "Dr. Lisa Wang",
      category: "Psychology",
      icon: Heart
    },
    {
      title: "Event Production Secrets: Behind the Scenes of Flawless Execution",
      excerpt: "Go behind the scenes to discover the planning, coordination, and execution strategies that ensure every event runs smoothly from start to finish.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "February 20, 2024",
      readTime: "9 min read",
      author: "James Rodriguez",
      category: "Production",
      icon: Award
    },
    {
      title: "Building Brand Loyalty Through Experiential Touchpoints",
      excerpt: "Explore how strategic experiential touchpoints throughout the customer journey can build lasting brand loyalty and turn customers into advocates.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "February 15, 2024",
      readTime: "6 min read",
      author: "Amanda Taylor",
      category: "Brand Strategy",
      icon: Users
    },
    {
      title: "Innovation in Experiential: Technology Meets Human Connection",
      excerpt: "Discover how cutting-edge technology is being integrated into experiential marketing to create more immersive and engaging brand experiences.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "February 8, 2024",
      readTime: "8 min read",
      author: "Tech Innovation Team",
      category: "Technology",
      icon: Zap
    }
  ];

  const categories = [
    { name: "Industry Trends", count: 12, color: "bg-blue-100 text-blue-800" },
    { name: "Strategy", count: 8, color: "bg-green-100 text-green-800" },
    { name: "Analytics", count: 6, color: "bg-purple-100 text-purple-800" },
    { name: "Psychology", count: 4, color: "bg-pink-100 text-pink-800" },
    { name: "Production", count: 10, color: "bg-yellow-100 text-yellow-800" },
    { name: "Technology", count: 5, color: "bg-indigo-100 text-indigo-800" }
  ];

  return (
    <div className="pt-16">
      <SEO 
        title="Experiential Marketing Blog - Expert Insights & Industry Trends | AirFresh Marketing"
        description="Get expert insights on experiential marketing trends, brand activation strategies, event marketing tips, and proven tactics for creating memorable customer experiences. Read industry insights from AirFresh Marketing professionals."
        keywords="experiential marketing blog, brand activation insights, event marketing strategies, promotional marketing tips, customer engagement tactics, experiential advertising trends, marketing industry insights, brand experience articles"
        canonical="https://airfreshmarketing.com/blog"
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Blog & <span className="text-yellow-300 italic font-serif">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
              Stay updated with the latest trends, strategies, and insights in experiential 
              marketing from our team of industry experts.
            </p>
            <div className="flex items-center space-x-4">
              <BookOpen className="h-6 w-6 text-yellow-300" />
              <span className="text-lg">Weekly insights from 20+ years of experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore by Topic</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <div 
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all hover:shadow-md ${category.color}`}
              >
                {category.name} ({category.count})
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">FEATURED ARTICLE</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Latest Insights</h3>
          </div>

          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {featuredArticle.category}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                  {featuredArticle.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-6 space-x-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {featuredArticle.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {featuredArticle.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {featuredArticle.readTime}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Button className="group">
                    Read Full Article
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <LinkedInShare 
                    variant="compact"
                    title={featuredArticle.title}
                    summary={featuredArticle.excerpt}
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">RECENT ARTICLES</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Expert Insights</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our team regularly shares expertise on experiential marketing trends, best practices, 
              and innovative approaches to brand engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-primary`}>
                      {article.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-4 space-x-3">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {article.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {article.date}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                    <div className="flex items-center gap-2">
                      <LinkedInShare 
                        variant="icon"
                        title={article.title}
                        summary={article.excerpt}
                      />
                      <Button variant="ghost" size="sm" className="group/btn">
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay In The Loop</h2>
          <p className="text-xl mb-8 opacity-90">
            Get the latest insights, trends, and strategies delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
            />
            <Button variant="secondary" size="lg">
              Subscribe
            </Button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            Join 5,000+ marketing professionals who trust our insights.
          </p>
        </div>
      </section>

      {/* LinkedIn Content Templates Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Share Your Expertise on LinkedIn</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Use our professionally crafted LinkedIn post templates to share industry insights and engage your network.
            </p>
          </div>
          <LinkedInContentTemplates />
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore More</h2>
            <p className="text-lg text-gray-600">
              Ready to put these insights into action? Discover our services and case studies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Our Services</h3>
                <p className="text-gray-600 mb-4">Explore our comprehensive experiential marketing solutions.</p>
                <Button asChild variant="outline">
                  <Link href="/services">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Case Studies</h3>
                <p className="text-gray-600 mb-4">See how we've helped brands create unforgettable experiences.</p>
                <Button asChild variant="outline">
                  <Link href="/projects">View Projects</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">About Us</h3>
                <p className="text-gray-600 mb-4">Learn about our 20+ years of experiential marketing expertise.</p>
                <Button asChild variant="outline">
                  <Link href="/about">Our Story</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}