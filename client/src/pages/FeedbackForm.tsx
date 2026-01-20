import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Star, Send, CheckCircle, Info, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";

export default function FeedbackForm() {
  const { toast } = useToast();
  const [rating, setRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);

  const keywordSuggestions = [
    "experiential marketing",
    "event staffing",
    "brand ambassadors",
    "guerrilla marketing",
    "sampling activations",
    "brand activation",
    "corporate events",
    "product launches",
    "immersive experiences",
    "event production",
    "pop-up events",
    "consumer engagement",
    "creative marketing",
    "professional team",
    "exceptional service"
  ];

  const serviceTypes = [
    "Brand Activation",
    "Product Launch",
    "Sampling Campaign",
    "Corporate Event",
    "Guerrilla Marketing",
    "Pop-up Experience",
    "Trade Show",
    "Festival Activation",
    "Retail Experience",
    "Other"
  ];

  const submitFeedbackMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await apiRequest('POST', '/api/reviews/submit-feedback', data);
      return response.json();
    },
    onSuccess: (data) => {
      setSubmitted(true);
      toast({
        title: "Thank you for your feedback!",
        description: "Your review helps us improve and helps others discover our services.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit feedback. Please try again.",
        variant: "destructive"
      });
    }
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    submitFeedbackMutation.mutate({
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      serviceType: formData.get('serviceType'),
      rating: rating,
      reviewText: formData.get('reviewText'),
      platform: formData.get('platform'),
      keywords: selectedKeywords
    });
  };

  const toggleKeyword = (keyword: string) => {
    setSelectedKeywords(prev => 
      prev.includes(keyword) 
        ? prev.filter(k => k !== keyword)
        : [...prev, keyword]
    );
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <Card className="text-center">
            <CardContent className="py-16">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
              <p className="text-lg text-gray-600 mb-8">
                Your feedback has been received. We truly appreciate you taking the time to share your experience.
              </p>
              
              <div className="space-y-4">
                <p className="font-semibold">Ready to post your review publicly?</p>
                <p className="text-sm text-gray-600 mb-6">
                  Your honest review helps other businesses discover our services
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => window.open('https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review', '_blank')}
                    className="bg-blue-500 hover:bg-blue-600"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Review on Google
                  </Button>
                  <Button
                    onClick={() => window.open('https://www.linkedin.com/company/airfresh-marketing/recommendations', '_blank')}
                    className="bg-blue-700 hover:bg-blue-800"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Review on LinkedIn
                  </Button>
                  <Button
                    onClick={() => window.open('https://clutch.co/profile/airfresh-marketing#review', '_blank')}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Review on Clutch
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Share Your Experience</h1>
          <p className="text-lg text-gray-600">
            Your honest feedback helps us improve and helps others discover our services
          </p>
        </div>

        {/* Main Form */}
        <Card>
          <CardHeader>
            <CardTitle>Client Feedback Form</CardTitle>
            <CardDescription>
              Tell us about your experience working with AirFresh Marketing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Your Name *</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="John Smith" 
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="john@company.com" 
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company *</Label>
                    <Input 
                      id="company" 
                      name="company" 
                      placeholder="Your Company Name" 
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="serviceType">Service Type *</Label>
                    <Select name="serviceType" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceTypes.map(service => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Rating */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Overall Rating</h3>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="focus:outline-none transition-transform hover:scale-110"
                    >
                      <Star
                        className={`h-8 w-8 ${
                          star <= (hoveredRating || rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-2 text-lg font-medium">
                    {rating === 5 && 'Excellent'}
                    {rating === 4 && 'Very Good'}
                    {rating === 3 && 'Good'}
                    {rating === 2 && 'Fair'}
                    {rating === 1 && 'Poor'}
                  </span>
                </div>
              </div>

              <Separator />

              {/* Review Text */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Your Review</h3>
                <div>
                  <Label htmlFor="reviewText">
                    Share your experience working with AirFresh Marketing *
                  </Label>
                  <Textarea
                    id="reviewText"
                    name="reviewText"
                    placeholder="Tell us about your experience with our team, the results achieved, and what impressed you most..."
                    className="min-h-[150px]"
                    required
                  />
                </div>

                {/* Keyword Suggestions */}
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    <p className="font-semibold mb-2">Helpful Keywords</p>
                    <p className="text-sm mb-3">
                      Consider including these keywords in your review to help others find us:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {keywordSuggestions.map(keyword => (
                        <Badge
                          key={keyword}
                          variant={selectedKeywords.includes(keyword) ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => toggleKeyword(keyword)}
                        >
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </AlertDescription>
                </Alert>
              </div>

              <Separator />

              {/* Platform Selection */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Where will you post your review?</h3>
                <div>
                  <Label htmlFor="platform">Preferred Platform *</Label>
                  <Select name="platform" defaultValue="google">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="google">
                        <div className="flex items-center gap-2">
                          <span>🔍</span>
                          <span>Google Business Profile</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="linkedin">
                        <div className="flex items-center gap-2">
                          <span>💼</span>
                          <span>LinkedIn</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="clutch">
                        <div className="flex items-center gap-2">
                          <span>🏆</span>
                          <span>Clutch</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-gray-600 mt-2">
                    After submitting, we'll guide you to post your review on your selected platform
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="flex-1"
                  disabled={submitFeedbackMutation.isPending}
                >
                  {submitFeedbackMutation.isPending ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Submit Feedback
                    </>
                  )}
                </Button>
              </div>

              {/* Disclaimer */}
              <p className="text-xs text-gray-500 text-center">
                We value your honest feedback. All reviews are appreciated, and we never edit or modify client reviews.
                Your feedback helps us improve our services and helps other businesses make informed decisions.
              </p>
            </form>
          </CardContent>
        </Card>

        {/* Trust Indicators */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="text-center">
            <CardContent className="py-6">
              <p className="text-3xl font-bold text-blue-600">247+</p>
              <p className="text-sm text-gray-600">Client Reviews</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="py-6">
              <p className="text-3xl font-bold text-blue-600">4.8★</p>
              <p className="text-sm text-gray-600">Average Rating</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="py-6">
              <p className="text-3xl font-bold text-blue-600">98%</p>
              <p className="text-sm text-gray-600">Client Satisfaction</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}