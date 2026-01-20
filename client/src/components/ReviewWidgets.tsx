import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Quote, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface Review {
  id: string;
  platform: string;
  reviewer: string;
  company: string;
  rating: number;
  date: string;
  text: string;
}

interface PlatformStats {
  count: number;
  rating: number;
}

export default function ReviewWidgets() {
  // Simulated review data
  const reviewStats = {
    totalReviews: 247,
    averageRating: 4.8,
    platforms: {
      google: { count: 142, rating: 4.9 },
      linkedin: { count: 67, rating: 4.8 },
      clutch: { count: 38, rating: 4.7 }
    }
  };

  const recentReviews: Review[] = [
    {
      id: '1',
      platform: 'google',
      reviewer: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      rating: 5,
      date: '2025-01-10',
      text: 'AirFresh Marketing delivered an outstanding experiential marketing campaign for our product launch. Their brand ambassadors were professional and engaging. The guerrilla marketing tactics they employed created significant buzz around our brand.'
    },
    {
      id: '2',
      platform: 'linkedin',
      reviewer: 'Michael Chen',
      company: 'Global Brands LLC',
      rating: 5,
      date: '2025-01-08',
      text: 'Exceptional event production and sampling activations. The brand activation strategy exceeded our expectations and delivered measurable results in consumer engagement.'
    },
    {
      id: '3',
      platform: 'clutch',
      reviewer: 'Jennifer Martinez',
      company: 'Startup Innovations',
      rating: 4,
      date: '2025-01-05',
      text: 'Great corporate events team with creative marketing solutions. Their immersive experiences and pop-up events drove significant brand awareness for our launch.'
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'google':
        return '🔍';
      case 'linkedin':
        return '💼';
      case 'clutch':
        return '🏆';
      default:
        return '⭐';
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'google':
        return 'bg-blue-500';
      case 'linkedin':
        return 'bg-blue-700';
      case 'clutch':
        return 'bg-green-600';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-8">
      {/* Overall Stats */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Client Reviews & Testimonials
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold text-blue-600">{reviewStats.totalReviews}</p>
              <p className="text-sm text-gray-600">Total Reviews</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">{reviewStats.averageRating}</p>
              <div className="flex justify-center mt-1">
                {renderStars(Math.round(reviewStats.averageRating))}
              </div>
              <p className="text-sm text-gray-600">Average Rating</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">98%</p>
              <p className="text-sm text-gray-600">Client Satisfaction</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">500+</p>
              <p className="text-sm text-gray-600">Successful Campaigns</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Platform Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Google Reviews Widget */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔍</span>
                <CardTitle className="text-lg">Google Reviews</CardTitle>
              </div>
              <Badge className="bg-blue-500 text-white">
                {reviewStats.platforms.google.rating} ★
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-2xl font-bold">{reviewStats.platforms.google.count}</p>
              <p className="text-sm text-gray-600">Verified Reviews</p>
              {renderStars(Math.round(reviewStats.platforms.google.rating))}
              <Button 
                className="w-full mt-4" 
                size="sm"
                variant="outline"
                onClick={() => window.open('https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review', '_blank')}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View on Google
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* LinkedIn Widget */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl">💼</span>
                <CardTitle className="text-lg">LinkedIn</CardTitle>
              </div>
              <Badge className="bg-blue-700 text-white">
                {reviewStats.platforms.linkedin.rating} ★
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-2xl font-bold">{reviewStats.platforms.linkedin.count}</p>
              <p className="text-sm text-gray-600">Recommendations</p>
              {renderStars(Math.round(reviewStats.platforms.linkedin.rating))}
              <Button 
                className="w-full mt-4" 
                size="sm"
                variant="outline"
                onClick={() => window.open('https://www.linkedin.com/company/airfresh-marketing', '_blank')}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View on LinkedIn
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Clutch Widget */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏆</span>
                <CardTitle className="text-lg">Clutch</CardTitle>
              </div>
              <Badge className="bg-green-600 text-white">
                {reviewStats.platforms.clutch.rating} ★
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-2xl font-bold">{reviewStats.platforms.clutch.count}</p>
              <p className="text-sm text-gray-600">B2B Reviews</p>
              {renderStars(Math.round(reviewStats.platforms.clutch.rating))}
              <Button 
                className="w-full mt-4" 
                size="sm"
                variant="outline"
                onClick={() => window.open('https://clutch.co/profile/airfresh-marketing', '_blank')}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View on Clutch
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Reviews */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Quote className="h-5 w-5 text-blue-600" />
            Recent Client Reviews
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentReviews.map((review, index) => (
              <div key={review.id}>
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xl">{getPlatformIcon(review.platform)}</span>
                        <div>
                          <p className="font-semibold">{review.reviewer}</p>
                          <p className="text-sm text-gray-600">{review.company}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 mb-2">
                        {renderStars(review.rating)}
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <p className="text-gray-700 italic">"{review.text}"</p>
                    </div>
                  </div>
                </div>
                {index < recentReviews.length - 1 && <Separator className="my-4" />}
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <Button 
              variant="default"
              onClick={() => window.location.href = '/reviews-dashboard'}
            >
              View All Reviews
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white">
        <CardContent className="text-center py-8">
          <h3 className="text-2xl font-bold mb-2">Share Your Experience</h3>
          <p className="mb-6">
            We'd love to hear about your experience working with AirFresh Marketing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="secondary"
              onClick={() => window.location.href = '/feedback'}
            >
              Leave a Review
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Us
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}