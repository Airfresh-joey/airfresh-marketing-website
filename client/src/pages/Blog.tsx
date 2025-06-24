import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "5 Trends Shaping the Future of Experiential Marketing",
      excerpt: "Discover the latest trends that are transforming how brands connect with customers through immersive experiences.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      category: "Trends",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      featured: true
    },
    {
      id: 2,
      title: "How to Measure ROI in Experiential Marketing Campaigns",
      excerpt: "Learn the key metrics and methodologies for tracking the success of your experiential marketing investments.",
      author: "Michael Chen",
      date: "March 10, 2024",
      category: "Strategy",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      id: 3,
      title: "Building Brand Loyalty Through Sensory Experiences",
      excerpt: "Explore how engaging all five senses in your marketing campaigns can create deeper emotional connections with customers.",
      author: "Emily Rodriguez",
      date: "March 5, 2024",
      category: "Brand Strategy",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      id: 4,
      title: "The Rise of Hybrid Events: Blending Digital and Physical Experiences",
      excerpt: "How successful brands are combining online and offline elements to create more inclusive and engaging experiences.",
      author: "David Park",
      date: "February 28, 2024",
      category: "Innovation",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      id: 5,
      title: "Local Marketing Success: Small Business, Big Impact",
      excerpt: "Case studies showing how local businesses can compete with larger brands through creative experiential marketing.",
      author: "Lisa Thompson",
      date: "February 20, 2024",
      category: "Case Studies",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      id: 6,
      title: "Creating Memorable Corporate Events That Drive Results",
      excerpt: "Best practices for designing corporate events that engage employees, partners, and customers while achieving business objectives.",
      author: "Robert Kim",
      date: "February 15, 2024",
      category: "Corporate Events",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    }
  ];

  const categories = ["All", "Trends", "Strategy", "Brand Strategy", "Innovation", "Case Studies", "Corporate Events"];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Marketing Insights</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Expert insights, industry trends, and practical strategies for successful experiential marketing campaigns.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Featured Article</h2>
            </div>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge className="mb-4 w-fit">{featuredPost.category}</Badge>
                  <h3 className="text-3xl font-bold mb-4 text-gray-900">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <Button className="w-fit">
                    Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button key={category} variant="outline" size="sm">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Latest Articles</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay up to date with the latest trends, strategies, and insights in experiential marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div>
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardHeader>
                  <Badge className="mb-2 w-fit">{post.category}</Badge>
                  <CardTitle className="text-xl hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <Button variant="outline" size="sm">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest experiential marketing insights delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <Button variant="secondary" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
