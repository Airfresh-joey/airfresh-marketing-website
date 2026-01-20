import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import AdminProtected from "@/components/AdminProtected";
import { 
  Star, 
  Download, 
  Send, 
  QrCode, 
  Copy, 
  CheckCircle,
  TrendingUp,
  MessageSquare,
  Mail,
  BarChart3,
  Calendar,
  Target,
  ExternalLink
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

interface DashboardData {
  totalReviews: number;
  averageRating: number;
  responseRate: number;
  platformBreakdown: Record<string, { count: number; rating: number }>;
  recentReviews: any[];
  monthlyTrend: any[];
  responseTemplates?: {
    positive: Record<string, (name: string, service: string) => string>;
    constructive: {
      general: (name: string, concern: string) => string;
    };
  };
  keywordSuggestions?: string[];
}

export default function ReviewsDashboard() {
  const { toast } = useToast();
  const [selectedPlatform, setSelectedPlatform] = useState("google");
  const [qrCodeData, setQrCodeData] = useState<string | null>(null);
  const [copiedTemplate, setCopiedTemplate] = useState<string | null>(null);

  // Fetch dashboard data
  const { data: dashboardData, isLoading } = useQuery<DashboardData>({
    queryKey: ['/api/reviews/dashboard-data']
  });

  // Fetch templates
  const { data: templates } = useQuery({
    queryKey: ['/api/reviews/templates']
  });

  // Generate review request mutation
  const generateRequestMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await apiRequest('POST', '/api/reviews/generate-request', data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Review Request Generated",
        description: "The email template has been created successfully.",
      });
      setCopiedTemplate(data.body);
    }
  });

  // Generate review response mutation
  const generateResponseMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await apiRequest('POST', '/api/reviews/generate-response', data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Response Generated",
        description: "The review response has been created successfully.",
      });
      setCopiedTemplate(data.response);
    }
  });

  // Generate QR code
  const generateQrCode = async (platform: string) => {
    try {
      const response = await fetch(`/api/reviews/generate-qr/${platform}`);
      const data = await response.json();
      
      // The server returns JSON with qrCode as a data URL string
      setQrCodeData(data.qrCode);
      setSelectedPlatform(platform);
      
      toast({
        title: "QR Code Generated",
        description: `QR code for ${platform} has been created.`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate QR code.",
        variant: "destructive"
      });
    }
  };

  // Download QR code
  const downloadQrCode = () => {
    if (!qrCodeData) return;
    
    const link = document.createElement('a');
    link.download = `airfresh-${selectedPlatform}-qr.png`;
    link.href = qrCodeData;
    link.click();
    
    toast({
      title: "QR Code Downloaded",
      description: "The QR code has been saved to your device.",
    });
  };

  // Copy to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTemplate(text);
    toast({
      title: "Copied to Clipboard",
      description: "The template has been copied to your clipboard.",
    });
    
    setTimeout(() => setCopiedTemplate(null), 3000);
  };

  const metrics = dashboardData || {
    totalReviews: 0,
    averageRating: 0,
    responseRate: 0,
    platformBreakdown: {},
    recentReviews: [],
    monthlyTrend: [],
    responseTemplates: {
      positive: {},
      constructive: { general: () => '' }
    },
    keywordSuggestions: []
  } as DashboardData;

  const COLORS = ['#3B82F6', '#0EA5E9', '#10B981'];

  const platformData = Object.entries(metrics.platformBreakdown || {}).map(([key, value]: any) => ({
    name: key.charAt(0).toUpperCase() + key.slice(1),
    value: value.count,
    rating: value.rating
  }));

  return (
    <AdminProtected>
      <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Review Management Dashboard</h1>
          <p className="text-gray-600">Track, manage, and optimize your online reviews</p>
        </div>

        {/* Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Total Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-3xl font-bold">{metrics.totalReviews}</p>
                <BarChart3 className="h-8 w-8 text-blue-500" />
              </div>
              <p className="text-sm text-green-600 mt-2">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Average Rating</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold">{metrics.averageRating}</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.round(metrics.averageRating) 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <Star className="h-8 w-8 text-yellow-400" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Response Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-3xl font-bold">{metrics.responseRate}%</p>
                <MessageSquare className="h-8 w-8 text-green-500" />
              </div>
              <p className="text-sm text-gray-600 mt-2">Industry avg: 65%</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">This Month</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-3xl font-bold">15</p>
                <TrendingUp className="h-8 w-8 text-indigo-500" />
              </div>
              <p className="text-sm text-gray-600 mt-2">New reviews</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="generator">Request Generator</TabsTrigger>
            <TabsTrigger value="qrcodes">QR Codes</TabsTrigger>
            <TabsTrigger value="responses">Response Templates</TabsTrigger>
            <TabsTrigger value="keywords">SEO Keywords</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Monthly Trend Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Review Trend</CardTitle>
                  <CardDescription>Monthly review count and average rating</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={metrics.monthlyTrend}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Legend />
                      <Line 
                        yAxisId="left" 
                        type="monotone" 
                        dataKey="reviews" 
                        stroke="#3B82F6" 
                        name="Reviews"
                        strokeWidth={2}
                      />
                      <Line 
                        yAxisId="right" 
                        type="monotone" 
                        dataKey="rating" 
                        stroke="#10B981" 
                        name="Rating"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Platform Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle>Platform Distribution</CardTitle>
                  <CardDescription>Reviews by platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={platformData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${value}`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {platformData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Recent Reviews */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Reviews</CardTitle>
                <CardDescription>Latest reviews across all platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {metrics.recentReviews?.map((review: any) => (
                    <div key={review.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-semibold">{review.reviewer}</p>
                            <Badge variant="outline">{review.platform}</Badge>
                            {review.responded && (
                              <Badge className="bg-green-100 text-green-800">Responded</Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">{review.company} • {review.date}</p>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating 
                                  ? 'fill-yellow-400 text-yellow-400' 
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700">{review.text}</p>
                      {!review.responded && (
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="mt-3"
                          onClick={() => {
                            generateResponseMutation.mutate({
                              sentiment: review.rating >= 4 ? 'positive' : 'constructive',
                              platform: review.platform,
                              reviewerName: review.reviewer,
                              specificMention: 'your feedback'
                            });
                          }}
                        >
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Generate Response
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Request Generator Tab */}
          <TabsContent value="generator" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Review Request Generator</CardTitle>
                <CardDescription>Create personalized review request emails</CardDescription>
              </CardHeader>
              <CardContent>
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    generateRequestMutation.mutate({
                      templateType: formData.get('templateType'),
                      clientName: formData.get('clientName'),
                      projectName: formData.get('projectName'),
                      platform: formData.get('platform')
                    });
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="templateType">Template Type</Label>
                      <Select name="templateType" defaultValue="initial">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="initial">Initial Request</SelectItem>
                          <SelectItem value="followUp">Follow Up</SelectItem>
                          <SelectItem value="postEvent">Post Event</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="platform">Platform</Label>
                      <Select name="platform" defaultValue="google">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="google">Google</SelectItem>
                          <SelectItem value="linkedin">LinkedIn</SelectItem>
                          <SelectItem value="clutch">Clutch</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="clientName">Client Name</Label>
                      <Input 
                        id="clientName" 
                        name="clientName" 
                        placeholder="John Smith" 
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="projectName">Project/Event Name</Label>
                      <Input 
                        id="projectName" 
                        name="projectName" 
                        placeholder="Product Launch Campaign" 
                        required 
                      />
                    </div>
                  </div>
                  <Button type="submit" disabled={generateRequestMutation.isPending}>
                    <Send className="h-4 w-4 mr-2" />
                    Generate Email
                  </Button>
                </form>

                {generateRequestMutation.data && (
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Generated Email</h3>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => copyToClipboard(generateRequestMutation.data.body)}
                      >
                        {copiedTemplate === generateRequestMutation.data.body ? (
                          <>
                            <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4 mr-2" />
                            Copy
                          </>
                        )}
                      </Button>
                    </div>
                    <div className="border rounded-lg p-4 bg-gray-50">
                      <p className="font-semibold mb-2">Subject: {generateRequestMutation.data.subject}</p>
                      <pre className="whitespace-pre-wrap text-sm">{generateRequestMutation.data.body}</pre>
                    </div>
                    <div className="border rounded-lg p-4 bg-blue-50">
                      <p className="font-semibold mb-2">Suggested Keywords to Include:</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {generateRequestMutation.data.keywords?.slice(0, 8).map((keyword: string) => (
                          <Badge key={keyword} variant="secondary">{keyword}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* QR Codes Tab */}
          <TabsContent value="qrcodes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>QR Code Generator</CardTitle>
                <CardDescription>Generate QR codes for review platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button 
                      variant="outline" 
                      className="h-24"
                      onClick={() => generateQrCode('google')}
                    >
                      <div className="text-center">
                        <QrCode className="h-8 w-8 mx-auto mb-2" />
                        <p>Google Reviews</p>
                      </div>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="h-24"
                      onClick={() => generateQrCode('linkedin')}
                    >
                      <div className="text-center">
                        <QrCode className="h-8 w-8 mx-auto mb-2" />
                        <p>LinkedIn</p>
                      </div>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="h-24"
                      onClick={() => generateQrCode('clutch')}
                    >
                      <div className="text-center">
                        <QrCode className="h-8 w-8 mx-auto mb-2" />
                        <p>Clutch</p>
                      </div>
                    </Button>
                  </div>

                  {qrCodeData && (
                    <div className="border rounded-lg p-6 text-center">
                      <h3 className="font-semibold mb-4">
                        QR Code for {selectedPlatform.charAt(0).toUpperCase() + selectedPlatform.slice(1)}
                      </h3>
                      <img 
                        src={qrCodeData} 
                        alt={`QR Code for ${selectedPlatform}`}
                        className="mx-auto mb-4"
                      />
                      <div className="flex gap-2 justify-center">
                        <Button onClick={downloadQrCode}>
                          <Download className="h-4 w-4 mr-2" />
                          Download PNG
                        </Button>
                        <Button variant="outline" onClick={() => window.print()}>
                          Print
                        </Button>
                      </div>
                      <p className="text-sm text-gray-600 mt-4">
                        Use this QR code on business cards, flyers, or event materials
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Response Templates Tab */}
          <TabsContent value="responses" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Response Templates</CardTitle>
                <CardDescription>Professional templates for responding to reviews</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {dashboardData?.responseTemplates && (
                    <>
                      <div>
                        <h3 className="font-semibold mb-3">Positive Review Responses</h3>
                        <div className="space-y-3">
                          {Object.entries(dashboardData.responseTemplates.positive || {}).map(([platform, template]: any) => (
                            <div key={platform} className="border rounded-lg p-4">
                              <div className="flex items-center justify-between mb-2">
                                <Badge variant="outline">
                                  {platform.charAt(0).toUpperCase() + platform.slice(1)}
                                </Badge>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={() => copyToClipboard(template('Customer Name', 'specific service'))}
                                >
                                  <Copy className="h-4 w-4" />
                                </Button>
                              </div>
                              <p className="text-sm text-gray-700">
                                {template('Customer Name', 'specific service')}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-3">Constructive Feedback Responses</h3>
                        <div className="border rounded-lg p-4">
                          <p className="text-sm text-gray-700">
                            {dashboardData?.responseTemplates?.constructive?.general?.('Customer Name', 'specific concern') || 'Template not available'}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SEO Keywords Tab */}
          <TabsContent value="keywords" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>SEO Keywords Guide</CardTitle>
                <CardDescription>Keywords to include in review requests for better SEO</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-900 mb-3">
                      Encourage clients to naturally include these keywords in their reviews to improve local SEO and search visibility.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3">Primary Keywords</h3>
                    <div className="flex flex-wrap gap-2">
                      {(dashboardData?.keywordSuggestions || []).slice(0, 8).map((keyword: string) => (
                        <Badge key={keyword} className="bg-blue-100 text-blue-800">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Secondary Keywords</h3>
                    <div className="flex flex-wrap gap-2">
                      {(dashboardData?.keywordSuggestions || []).slice(8, 15).map((keyword: string) => (
                        <Badge key={keyword} variant="outline">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 bg-gray-50">
                    <h4 className="font-semibold mb-2">Example Review with Keywords:</h4>
                    <p className="text-sm text-gray-700 italic">
                      "AirFresh Marketing delivered exceptional <span className="font-semibold text-blue-600">experiential marketing</span> for our product launch. 
                      Their <span className="font-semibold text-blue-600">brand ambassadors</span> were professional and engaging. 
                      The <span className="font-semibold text-blue-600">guerrilla marketing</span> tactics and <span className="font-semibold text-blue-600">sampling activations</span> exceeded our expectations. 
                      Highly recommend for <span className="font-semibold text-blue-600">corporate events</span> and <span className="font-semibold text-blue-600">brand activation</span> campaigns!"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
    </AdminProtected>
  );
}