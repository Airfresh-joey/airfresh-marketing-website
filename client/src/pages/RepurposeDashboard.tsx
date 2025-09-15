import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Download, Linkedin, Instagram, Video, Copy, ChevronRight } from "lucide-react";
import SEO from "@/components/SEO";
import AdminProtected from "@/components/AdminProtected";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  published_at: string;
  tags?: string[];
}

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  description: string;
  industry?: string;
}

interface LinkedInResponse {
  post: string;
  metadata: {
    title: string;
    tags: string[];
    charCount: number;
  };
}

interface CarouselSlide {
  type: string;
  [key: string]: any;
}

interface CarouselResponse {
  slides: CarouselSlide[];
  caption: string;
  hashtags: string[];
}

interface VideoScene {
  timestamp: string;
  type: string;
  visual: string;
  text: string;
  voiceover: string;
  action: string;
}

interface VideoResponse {
  script: {
    title: string;
    duration: string;
    format: string;
    scenes: VideoScene[];
  };
  tips: string[];
  hashtags: string[];
}

export default function RepurposeDashboard() {
  const { toast } = useToast();
  const [selectedContent, setSelectedContent] = useState<{ type: string; id: string } | null>(null);
  const [generatedContent, setGeneratedContent] = useState<any>(null);
  const [contentType, setContentType] = useState<"linkedin" | "carousel" | "video" | null>(null);

  // Fetch blog posts
  const { data: blogPosts = [], isLoading: blogsLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  // Fetch case studies
  const { data: caseStudies = [], isLoading: casesLoading } = useQuery<CaseStudy[]>({
    queryKey: ["/api/case-studies-enhanced"],
  });

  const generateLinkedInPost = async (type: string, id: string) => {
    try {
      const response = await fetch(`/api/repurpose/linkedin/${type}/${id}`);
      if (!response.ok) throw new Error("Failed to generate LinkedIn post");
      const data: LinkedInResponse = await response.json();
      setGeneratedContent(data);
      setContentType("linkedin");
      toast({
        title: "LinkedIn post generated!",
        description: `Character count: ${data.metadata.charCount}`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate LinkedIn post",
        variant: "destructive",
      });
    }
  };

  const generateInstagramCarousel = async (type: string, id: string) => {
    try {
      const response = await fetch(`/api/repurpose/carousel/${type}/${id}`);
      if (!response.ok) throw new Error("Failed to generate carousel");
      const data: CarouselResponse = await response.json();
      setGeneratedContent(data);
      setContentType("carousel");
      toast({
        title: "Instagram carousel generated!",
        description: `${data.slides.length} slides created`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate Instagram carousel",
        variant: "destructive",
      });
    }
  };

  const generateVideoScript = async (type: string, id: string) => {
    try {
      const response = await fetch(`/api/repurpose/video/${type}/${id}`);
      if (!response.ok) throw new Error("Failed to generate video script");
      const data: VideoResponse = await response.json();
      setGeneratedContent(data);
      setContentType("video");
      toast({
        title: "Video script generated!",
        description: `Duration: ${data.script.duration}`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate video script",
        variant: "destructive",
      });
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Content copied to clipboard",
    });
  };

  const downloadContent = (content: any, filename: string) => {
    const blob = new Blob([JSON.stringify(content, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast({
      title: "Downloaded!",
      description: `File saved as ${filename}`,
    });
  };

  return (
    <AdminProtected>
      <SEO
        title="Content Repurposing Dashboard | AirFresh Marketing"
        description="Transform your marketing content for LinkedIn, Instagram, and video platforms"
        canonical="https://airfreshmarketing.com/repurpose"
      />
      
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">Content Repurposing Dashboard</h1>
          <p className="text-gray-600" data-testid="text-page-description">
            Transform your blog posts and case studies into engaging social media content
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Content Selection Section */}
          <div className="space-y-6">
            <Tabs defaultValue="blogs" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="blogs" data-testid="tab-blogs">Blog Posts</TabsTrigger>
                <TabsTrigger value="cases" data-testid="tab-cases">Case Studies</TabsTrigger>
              </TabsList>
              
              <TabsContent value="blogs" className="space-y-4">
                {blogsLoading ? (
                  <p className="text-gray-500">Loading blog posts...</p>
                ) : (
                  blogPosts.map((post) => (
                    <Card 
                      key={post.id}
                      className={`cursor-pointer transition-all ${
                        selectedContent?.type === "blog" && selectedContent?.id === post.id.toString()
                          ? "ring-2 ring-blue-500"
                          : ""
                      }`}
                      onClick={() => setSelectedContent({ type: "blog", id: post.id.toString() })}
                      data-testid={`card-blog-${post.id}`}
                    >
                      <CardHeader>
                        <CardTitle className="text-lg">{post.title}</CardTitle>
                        <CardDescription>{post.excerpt}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {post.tags?.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        {selectedContent?.type === "blog" && selectedContent?.id === post.id.toString() && (
                          <div className="mt-4 flex gap-2">
                            <Button
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                generateLinkedInPost("blog", post.id.toString());
                              }}
                              data-testid={`button-linkedin-blog-${post.id}`}
                            >
                              <Linkedin className="h-4 w-4 mr-1" />
                              LinkedIn
                            </Button>
                            <Button
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                generateInstagramCarousel("blog", post.id.toString());
                              }}
                              data-testid={`button-instagram-blog-${post.id}`}
                            >
                              <Instagram className="h-4 w-4 mr-1" />
                              Carousel
                            </Button>
                            <Button
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                generateVideoScript("blog", post.id.toString());
                              }}
                              data-testid={`button-video-blog-${post.id}`}
                            >
                              <Video className="h-4 w-4 mr-1" />
                              Video
                            </Button>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))
                )}
              </TabsContent>
              
              <TabsContent value="cases" className="space-y-4">
                {casesLoading ? (
                  <p className="text-gray-500">Loading case studies...</p>
                ) : (
                  caseStudies.map((study) => (
                    <Card
                      key={study.id}
                      className={`cursor-pointer transition-all ${
                        selectedContent?.type === "case-study" && selectedContent?.id === study.id
                          ? "ring-2 ring-blue-500"
                          : ""
                      }`}
                      onClick={() => setSelectedContent({ type: "case-study", id: study.id })}
                      data-testid={`card-case-${study.id}`}
                    >
                      <CardHeader>
                        <CardTitle className="text-lg">{study.title}</CardTitle>
                        <CardDescription>
                          <span className="font-semibold">{study.client}</span> • {study.industry}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 mb-4">{study.description}</p>
                        {selectedContent?.type === "case-study" && selectedContent?.id === study.id && (
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                generateLinkedInPost("case-study", study.id);
                              }}
                              data-testid={`button-linkedin-case-${study.id}`}
                            >
                              <Linkedin className="h-4 w-4 mr-1" />
                              LinkedIn
                            </Button>
                            <Button
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                generateInstagramCarousel("case-study", study.id);
                              }}
                              data-testid={`button-instagram-case-${study.id}`}
                            >
                              <Instagram className="h-4 w-4 mr-1" />
                              Carousel
                            </Button>
                            <Button
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                generateVideoScript("case-study", study.id);
                              }}
                              data-testid={`button-video-case-${study.id}`}
                            >
                              <Video className="h-4 w-4 mr-1" />
                              Video
                            </Button>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))
                )}
              </TabsContent>
            </Tabs>
          </div>

          {/* Generated Content Display */}
          <div className="space-y-6">
            {generatedContent && (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>
                      {contentType === "linkedin" && "LinkedIn Post"}
                      {contentType === "carousel" && "Instagram Carousel"}
                      {contentType === "video" && "Video Script"}
                    </CardTitle>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          if (contentType === "linkedin") {
                            copyToClipboard(generatedContent.post);
                          } else {
                            copyToClipboard(JSON.stringify(generatedContent, null, 2));
                          }
                        }}
                        data-testid="button-copy-content"
                      >
                        <Copy className="h-4 w-4 mr-1" />
                        Copy
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          const filename = `${contentType}-${Date.now()}.json`;
                          downloadContent(generatedContent, filename);
                        }}
                        data-testid="button-download-content"
                      >
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {contentType === "linkedin" && (
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <pre className="whitespace-pre-wrap text-sm font-mono">
                          {generatedContent.post}
                        </pre>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>Character count: {generatedContent.metadata.charCount}/3000</span>
                        <Badge variant="secondary">
                          {generatedContent.metadata.charCount <= 1300 ? "Optimal" : "Long"}
                        </Badge>
                      </div>
                    </div>
                  )}
                  
                  {contentType === "carousel" && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        {generatedContent.slides.map((slide: CarouselSlide, index: number) => (
                          <div key={index} className="bg-gradient-to-br from-purple-100 to-pink-100 p-4 rounded-lg">
                            <div className="text-xs text-gray-600 mb-2">Slide {index + 1}</div>
                            <div className="font-semibold text-sm mb-2">{slide.title || slide.headline}</div>
                            <div className="text-xs text-gray-700">{slide.content || slide.subheading}</div>
                            {slide.prompt && (
                              <div className="text-xs text-blue-600 mt-2">{slide.prompt}</div>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Caption:</h4>
                        <p className="text-sm">{generatedContent.caption}</p>
                      </div>
                    </div>
                  )}
                  
                  {contentType === "video" && (
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">{generatedContent.script.title}</h4>
                        <div className="flex gap-4 text-sm text-gray-600 mb-4">
                          <span>Duration: {generatedContent.script.duration}</span>
                          <span>Format: {generatedContent.script.format}</span>
                        </div>
                        <div className="space-y-3">
                          {generatedContent.script.scenes.map((scene: VideoScene, index: number) => (
                            <div key={index} className="border-l-4 border-blue-500 pl-4">
                              <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                                <span className="font-mono">{scene.timestamp}</span>
                                <Badge variant="outline" className="text-xs">{scene.type}</Badge>
                              </div>
                              <div className="text-sm space-y-1">
                                <div><strong>Visual:</strong> {scene.visual}</div>
                                <div><strong>Text:</strong> {scene.text}</div>
                                <div><strong>VO:</strong> {scene.voiceover}</div>
                                <div className="text-xs text-gray-600">Action: {scene.action}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Production Tips:</h4>
                        <ul className="text-sm space-y-1">
                          {generatedContent.tips.map((tip: string, index: number) => (
                            <li key={index} className="flex items-start">
                              <ChevronRight className="h-4 w-4 mr-1 mt-0.5 text-blue-500" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
            
            {!generatedContent && (
              <Card>
                <CardContent className="text-center py-12">
                  <p className="text-gray-500 mb-4">Select content and choose a format to generate</p>
                  <div className="flex justify-center gap-4">
                    <div className="text-center">
                      <Linkedin className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                      <span className="text-sm">LinkedIn</span>
                    </div>
                    <div className="text-center">
                      <Instagram className="h-8 w-8 mx-auto mb-2 text-pink-600" />
                      <span className="text-sm">Instagram</span>
                    </div>
                    <div className="text-center">
                      <Video className="h-8 w-8 mx-auto mb-2 text-red-600" />
                      <span className="text-sm">Video</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </AdminProtected>
  );
}