import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Download, Copy, FileText, Mail, Code, TrendingUp, Link2, ExternalLink } from "lucide-react";
import SEO from "@/components/SEO";
import { apiRequest } from "@/lib/queryClient";
import AdminProtected from "@/components/AdminProtected";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  description: string;
}

interface PressRelease {
  headline: string;
  subheadline: string;
  dateline: string;
  body: string[];
  boilerplate: string;
  contact: string;
}

interface OutreachEmail {
  subject: string;
  greeting: string;
  body: string[];
  cta: string;
  signature: string;
}

interface PartnerBadge {
  html: string;
  css: string;
  instructions: string;
}

interface MentionData {
  source: string;
  url: string;
  date: string;
  type: 'linked' | 'unlinked';
  context: string;
}

interface MentionReport {
  total: number;
  linked: number;
  unlinked: number;
  recentMentions: MentionData[];
  topSources: { source: string; count: number }[];
  outreachOpportunities: MentionData[];
}

export default function BacklinksDashboard() {
  const { toast } = useToast();
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string>("");
  const [targetSite, setTargetSite] = useState<string>("");
  const [targetType, setTargetType] = useState<string>("blog");
  const [contentType, setContentType] = useState<string>("case-study");
  const [badgeStyle, setBadgeStyle] = useState<string>("horizontal");
  const [badgeTheme, setBadgeTheme] = useState<string>("light");
  const [generatedPressRelease, setGeneratedPressRelease] = useState<PressRelease | null>(null);
  const [generatedEmail, setGeneratedEmail] = useState<OutreachEmail | null>(null);
  const [partnerBadge, setPartnerBadge] = useState<PartnerBadge | null>(null);

  // Fetch case studies
  const { data: caseStudies = [], isLoading: casesLoading } = useQuery<CaseStudy[]>({
    queryKey: ["/api/case-studies-enhanced"],
  });

  // Fetch mention report
  const { data: mentionReport, isLoading: mentionsLoading, refetch: refetchMentions } = useQuery<MentionReport>({
    queryKey: ["/api/backlinks/mention-report"],
  });

  const generatePressRelease = async () => {
    if (!selectedCaseStudy) {
      toast({
        title: "Error",
        description: "Please select a case study",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await apiRequest("/api/backlinks/press-release", "POST", { 
        caseStudyId: selectedCaseStudy 
      });
      const data = await response.json();
      setGeneratedPressRelease(data);
      toast({
        title: "Press release generated!",
        description: "Your press release is ready to download",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate press release",
        variant: "destructive",
      });
    }
  };

  const generateOutreachEmail = async () => {
    if (!targetSite) {
      toast({
        title: "Error",
        description: "Please enter a target website",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await apiRequest("/api/backlinks/outreach", "POST", {
        targetSite,
        targetType,
        contentType,
        caseStudyTitle: selectedCaseStudy ? caseStudies.find(cs => cs.id === selectedCaseStudy)?.title : undefined,
      });
      const data = await response.json();
      setGeneratedEmail(data);
      toast({
        title: "Outreach email generated!",
        description: "Your email template is ready",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate outreach email",
        variant: "destructive",
      });
    }
  };

  const fetchPartnerBadge = async () => {
    try {
      const response = await fetch(`/api/backlinks/partner-badge?style=${badgeStyle}&theme=${badgeTheme}`);
      if (!response.ok) throw new Error("Failed to fetch partner badge");
      const data = await response.json();
      setPartnerBadge(data);
      toast({
        title: "Partner badge generated!",
        description: "Embed code is ready to copy",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate partner badge",
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

  const downloadAsFile = (content: string, filename: string) => {
    const blob = new Blob([content], { type: "text/plain" });
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

  const formatPressRelease = (pr: PressRelease): string => {
    return `${pr.dateline}\n\n${pr.headline}\n\n${pr.subheadline}\n\n${pr.body.join('\n\n')}\n\n${pr.boilerplate}\n\n${pr.contact}`;
  };

  const formatEmail = (email: OutreachEmail): string => {
    return `Subject: ${email.subject}\n\n${email.greeting}\n\n${email.body.join('\n\n')}\n\n${email.cta}\n\n${email.signature}`;
  };

  return (
    <AdminProtected>
      <SEO
        title="Backlinks & Mentions Dashboard | AirFresh Marketing"
        description="Generate press releases, outreach emails, and track brand mentions"
        canonical="https://airfreshmarketing.com/backlinks"
      />
      
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">Backlinks & Mentions Dashboard</h1>
          <p className="text-gray-600" data-testid="text-page-description">
            Build authority with press releases, outreach campaigns, and partner badges
          </p>
        </div>

        <Tabs defaultValue="press" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="press" data-testid="tab-press">Press Release</TabsTrigger>
            <TabsTrigger value="outreach" data-testid="tab-outreach">Outreach Email</TabsTrigger>
            <TabsTrigger value="badge" data-testid="tab-badge">Partner Badge</TabsTrigger>
            <TabsTrigger value="mentions" data-testid="tab-mentions">Mentions</TabsTrigger>
          </TabsList>

          {/* Press Release Tab */}
          <TabsContent value="press" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Generate Press Release</CardTitle>
                <CardDescription>
                  Create a professional press release from your case studies
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="case-study">Select Case Study</Label>
                  <Select value={selectedCaseStudy} onValueChange={setSelectedCaseStudy}>
                    <SelectTrigger id="case-study" data-testid="select-case-study">
                      <SelectValue placeholder="Choose a case study" />
                    </SelectTrigger>
                    <SelectContent>
                      {caseStudies.map((cs) => (
                        <SelectItem key={cs.id} value={cs.id}>
                          {cs.title} - {cs.client}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button onClick={generatePressRelease} className="w-full" data-testid="button-generate-press">
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Press Release
                </Button>

                {generatedPressRelease && (
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">Generated Press Release</CardTitle>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => copyToClipboard(formatPressRelease(generatedPressRelease))}
                            data-testid="button-copy-press"
                          >
                            <Copy className="h-4 w-4 mr-1" />
                            Copy
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => downloadAsFile(formatPressRelease(generatedPressRelease), `press-release-${Date.now()}.txt`)}
                            data-testid="button-download-press"
                          >
                            <Download className="h-4 w-4 mr-1" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                        <div>
                          <p className="text-sm text-gray-600 mb-2">{generatedPressRelease.dateline}</p>
                          <h3 className="text-xl font-bold mb-2">{generatedPressRelease.headline}</h3>
                          <p className="text-lg text-gray-700 mb-4">{generatedPressRelease.subheadline}</p>
                        </div>
                        {generatedPressRelease.body.map((paragraph, index) => (
                          <p key={index} className="text-gray-700">{paragraph}</p>
                        ))}
                        <div className="pt-4 border-t">
                          <p className="text-sm text-gray-600">{generatedPressRelease.boilerplate}</p>
                        </div>
                        <div className="pt-4 border-t">
                          <p className="text-sm text-gray-600 whitespace-pre-line">{generatedPressRelease.contact}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Outreach Email Tab */}
          <TabsContent value="outreach" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Generate Outreach Email</CardTitle>
                <CardDescription>
                  Create personalized outreach emails for link building
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="target-site">Target Website</Label>
                  <Input
                    id="target-site"
                    placeholder="e.g., Marketing Weekly, Event Industry News"
                    value={targetSite}
                    onChange={(e) => setTargetSite(e.target.value)}
                    data-testid="input-target-site"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="target-type">Target Type</Label>
                    <Select value={targetType} onValueChange={setTargetType}>
                      <SelectTrigger id="target-type" data-testid="select-target-type">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="blog">Blog</SelectItem>
                        <SelectItem value="news">News Site</SelectItem>
                        <SelectItem value="partner">Partner</SelectItem>
                        <SelectItem value="industry">Industry Publication</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="content-type">Content Type</Label>
                    <Select value={contentType} onValueChange={setContentType}>
                      <SelectTrigger id="content-type" data-testid="select-content-type">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="case-study">Case Study</SelectItem>
                        <SelectItem value="expertise">Expert Commentary</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button onClick={generateOutreachEmail} className="w-full" data-testid="button-generate-email">
                  <Mail className="h-4 w-4 mr-2" />
                  Generate Outreach Email
                </Button>

                {generatedEmail && (
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">Generated Email</CardTitle>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => copyToClipboard(formatEmail(generatedEmail))}
                            data-testid="button-copy-email"
                          >
                            <Copy className="h-4 w-4 mr-1" />
                            Copy
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => downloadAsFile(formatEmail(generatedEmail), `outreach-email-${Date.now()}.txt`)}
                            data-testid="button-download-email"
                          >
                            <Download className="h-4 w-4 mr-1" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                        <div>
                          <p className="text-sm font-semibold text-gray-600 mb-1">Subject:</p>
                          <p className="font-medium">{generatedEmail.subject}</p>
                        </div>
                        <div className="pt-2">
                          <p className="text-gray-700 mb-4">{generatedEmail.greeting}</p>
                          {generatedEmail.body.map((paragraph, index) => (
                            <p key={index} className="text-gray-700 mb-3">{paragraph}</p>
                          ))}
                          <p className="text-gray-700 mb-4">{generatedEmail.cta}</p>
                          <p className="text-gray-700 whitespace-pre-line">{generatedEmail.signature}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Partner Badge Tab */}
          <TabsContent value="badge" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Generate Partner Badge</CardTitle>
                <CardDescription>
                  Create embeddable partner badges with backlinks
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="badge-style">Badge Style</Label>
                    <Select value={badgeStyle} onValueChange={setBadgeStyle}>
                      <SelectTrigger id="badge-style" data-testid="select-badge-style">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="horizontal">Horizontal</SelectItem>
                        <SelectItem value="vertical">Vertical</SelectItem>
                        <SelectItem value="compact">Compact</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="badge-theme">Badge Theme</Label>
                    <Select value={badgeTheme} onValueChange={setBadgeTheme}>
                      <SelectTrigger id="badge-theme" data-testid="select-badge-theme">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button onClick={fetchPartnerBadge} className="w-full" data-testid="button-generate-badge">
                  <Code className="h-4 w-4 mr-2" />
                  Generate Partner Badge
                </Button>

                {partnerBadge && (
                  <div className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Badge Preview</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-gray-50 p-4 rounded-lg flex justify-center">
                          <div dangerouslySetInnerHTML={{ __html: partnerBadge.html }} />
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">HTML Code</CardTitle>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => copyToClipboard(partnerBadge.html)}
                            data-testid="button-copy-html"
                          >
                            <Copy className="h-4 w-4 mr-1" />
                            Copy HTML
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <pre className="bg-gray-50 p-4 rounded-lg text-xs overflow-x-auto">
                          {partnerBadge.html}
                        </pre>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">CSS Code</CardTitle>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => copyToClipboard(partnerBadge.css)}
                            data-testid="button-copy-css"
                          >
                            <Copy className="h-4 w-4 mr-1" />
                            Copy CSS
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <pre className="bg-gray-50 p-4 rounded-lg text-xs overflow-x-auto">
                          {partnerBadge.css}
                        </pre>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Integration Instructions</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="prose prose-sm max-w-none">
                          <pre className="whitespace-pre-wrap text-sm">
                            {partnerBadge.instructions}
                          </pre>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Mentions Tab */}
          <TabsContent value="mentions" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Total Mentions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold" data-testid="text-total-mentions">
                    {mentionReport?.total || 0}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Across all sources</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Linked Mentions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600" data-testid="text-linked-mentions">
                    {mentionReport?.linked || 0}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">With backlinks</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Unlinked Mentions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-orange-600" data-testid="text-unlinked-mentions">
                    {mentionReport?.unlinked || 0}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Outreach opportunities</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Mentions</CardTitle>
                  <Button size="sm" onClick={() => refetchMentions()} data-testid="button-refresh-mentions">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    Refresh
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mentionReport?.recentMentions.map((mention, index) => (
                    <div key={index} className="border-b pb-4 last:border-b-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium">{mention.source}</span>
                            <Badge variant={mention.type === 'linked' ? 'default' : 'secondary'}>
                              {mention.type === 'linked' ? 'Linked' : 'Unlinked'}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{mention.context}</p>
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span>{new Date(mention.date).toLocaleDateString()}</span>
                            <a
                              href={mention.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-blue-600 hover:underline"
                            >
                              Visit <ExternalLink className="h-3 w-3 ml-1" />
                            </a>
                          </div>
                        </div>
                        {mention.type === 'unlinked' && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => {
                              setTargetSite(mention.source);
                              setTargetType('news');
                            }}
                            data-testid={`button-outreach-${index}`}
                          >
                            Create Outreach
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {mentionReport?.topSources && mentionReport.topSources.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Top Sources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {mentionReport.topSources.map((source, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm">{source.source}</span>
                        <Badge variant="outline">{source.count} mentions</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </AdminProtected>
  );
}