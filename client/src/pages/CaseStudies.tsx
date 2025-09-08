import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Award, 
  Users, 
  TrendingUp, 
  Target, 
  Eye, 
  Heart, 
  ArrowRight,
  Calendar,
  MapPin,
  BarChart3
} from "lucide-react";

export default function CaseStudies() {
  const featuredCaseStudy = {
    title: "Google Pixel Launch: Nationwide Experiential Campaign",
    client: "Google",
    industry: "Technology",
    campaign: "Product Launch",
    duration: "3 Months",
    locations: "15 Major Cities",
    description: "A comprehensive experiential marketing campaign to introduce the Google Pixel smartphone through interactive demonstrations, tech showcases, and immersive brand experiences across major metropolitan markets.",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    results: [
      { metric: "Brand Awareness", value: "+45%", icon: Eye },
      { metric: "Product Trials", value: "25,000+", icon: Users },
      { metric: "Social Engagement", value: "+200%", icon: Heart },
      { metric: "Sales Increase", value: "+35%", icon: TrendingUp }
    ]
  };

  const caseStudies = [
    {
      title: "Microsoft Surface Pro: Interactive Tech Demos",
      client: "Microsoft",
      industry: "Technology",
      description: "Created hands-on experiences allowing customers to explore the Surface Pro's capabilities through guided demonstrations and creative workshops.",
      image: "https://images.unsplash.com/photo-1587614203976-365c74645e83?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      results: ["40% increase in purchase intent", "15,000+ product trials", "92% positive sentiment"],
      tags: ["Product Demo", "B2B", "Technology"]
    },
    {
      title: "Nike Air Max: Street Art Activation",
      client: "Nike",
      industry: "Fashion & Lifestyle",
      description: "Partnered with local artists to create custom Air Max designs, featuring live art sessions and exclusive sneaker customization experiences.",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      results: ["80% social media share rate", "12,000 event attendees", "500+ custom designs created"],
      tags: ["Brand Art", "Youth Marketing", "Social"]
    },
    {
      title: "Starbucks Holiday Campaign: Seasonal Experience",
      client: "Starbucks",
      industry: "Food & Beverage",
      description: "Designed festive pop-up experiences featuring custom drink creation, holiday-themed photo opportunities, and community gathering spaces.",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      results: ["25% increase in holiday sales", "50,000+ social impressions", "95% customer satisfaction"],
      tags: ["Seasonal", "Retail", "Community"]
    },
    {
      title: "Tesla Model Y: Electric Future Showcase",
      client: "Tesla",
      industry: "Automotive",
      description: "Created immersive experiences showcasing sustainable technology through interactive displays, test drives, and future mobility demonstrations.",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      results: ["60% test drive conversion", "8,000+ qualified leads", "30% increase in pre-orders"],
      tags: ["Automotive", "Sustainability", "Innovation"]
    },
    {
      title: "Coca-Cola Summer Festival: Multi-City Tour",
      client: "Coca-Cola",
      industry: "Food & Beverage",
      description: "Developed a traveling festival experience featuring music, games, and refreshment stations that celebrated summer moments and community connection.",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      results: ["100,000+ event attendees", "75% brand recall increase", "500% social engagement boost"],
      tags: ["Festival", "Multi-City", "Lifestyle"]
    },
    {
      title: "Adobe Creative Suite: Artist Collaboration",
      client: "Adobe",
      industry: "Software",
      description: "Partnered with creative professionals to demonstrate Adobe's tools through live art creation, workshops, and collaborative projects.",
      image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      results: ["45% subscription increase", "200+ workshop attendees", "85% recommendation rate"],
      tags: ["Creative", "Education", "B2B"]
    }
  ];

  const industries = [
    { name: "Technology", count: 12, color: "bg-blue-100 text-blue-800" },
    { name: "Fashion & Lifestyle", count: 8, color: "bg-purple-100 text-purple-800" },
    { name: "Food & Beverage", count: 15, color: "bg-green-100 text-green-800" },
    { name: "Automotive", count: 6, color: "bg-red-100 text-red-800" },
    { name: "Healthcare", count: 4, color: "bg-pink-100 text-pink-800" },
    { name: "Entertainment", count: 10, color: "bg-yellow-100 text-yellow-800" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Case <span className="text-yellow-300 italic font-serif">Studies</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
              Explore real results from our most successful experiential marketing campaigns. 
              From Fortune 500 companies to innovative startups, see how we've helped brands 
              create meaningful connections with their audiences.
            </p>
            <div className="flex items-center space-x-8 text-lg">
              <div className="flex items-center">
                <Award className="h-6 w-6 text-yellow-300 mr-2" />
                <span>300+ Successful Campaigns</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-6 w-6 text-yellow-300 mr-2" />
                <span>Proven ROI Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore by Industry</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all hover:shadow-md ${industry.color}`}
              >
                {industry.name} ({industry.count})
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">FEATURED SUCCESS STORY</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Campaign Spotlight</h3>
          </div>

          <Card className="overflow-hidden shadow-2xl">
            <div className="lg:flex">
              <div className="lg:w-1/2">
                <img 
                  src={featuredCaseStudy.image} 
                  alt={featuredCaseStudy.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {featuredCaseStudy.industry}
                  </span>
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {featuredCaseStudy.campaign}
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">
                  {featuredCaseStudy.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {featuredCaseStudy.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-primary mr-2" />
                    <span className="text-sm text-gray-600">{featuredCaseStudy.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-primary mr-2" />
                    <span className="text-sm text-gray-600">{featuredCaseStudy.locations}</span>
                  </div>
                </div>

                <h4 className="text-lg font-semibold mb-4 text-gray-900">Key Results</h4>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {featuredCaseStudy.results.map((result, index) => (
                    <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <result.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                      <div className="text-xl font-bold text-gray-900">{result.value}</div>
                      <div className="text-sm text-gray-600">{result.metric}</div>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full lg:w-auto">
                  Read Full Case Study
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">SUCCESS STORIES</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">More Case Studies</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped brands across industries create memorable experiences 
              that drive real business results and meaningful customer connections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {study.industry}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {study.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">Key Results:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {study.results.map((result, idx) => (
                        <li key={idx}>• {result}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full group/btn">
                    View Details
                    <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Load More Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Your Success Story?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our proven strategies and creative approach can help your brand 
            achieve similar results through experiential marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}