import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Copy, CheckCircle2, Linkedin, Hash, Sparkles, TrendingUp, Calendar, Users } from "lucide-react";
import { seoKeywords } from "@/lib/seo-keywords";

interface ContentTemplate {
  id: string;
  title: string;
  content: string;
  hashtags: string[];
  icon: any;
}

export default function LinkedInContentTemplates() {
  const { toast } = useToast();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const templates: ContentTemplate[] = [
    {
      id: "company-intro",
      title: "Company Introduction",
      content: `🚀 Welcome to AirFresh Marketing - Your Premier Experiential Marketing Partner!

We specialize in creating unforgettable brand experiences that connect companies with their audiences in meaningful ways. With over 20 years of expertise in experiential marketing, brand activation, and event staffing, we've helped 300+ brands across 50+ cities nationwide.

Our turnkey solutions include:
✨ Experiential Marketing Campaigns
🎯 Brand Activation Services  
👥 Professional Event Staffing
📍 Pop-up Events & Installations
🏆 Trade Show Marketing

From local brands to Fortune 500 corporations, we deliver measurable results through innovative guerrilla marketing tactics, product sampling programs, and immersive brand experiences.

Ready to elevate your brand? Let's create something amazing together!

#ExperientialMarketing #BrandActivation #EventMarketing`,
      hashtags: ["ExperientialMarketing", "BrandActivation", "EventMarketing", "GuerrillaMarketing", "BrandExperience"],
      icon: Sparkles
    },
    {
      id: "case-study",
      title: "Case Study Post",
      content: `📊 SUCCESS STORY: [Client Name] Brand Activation Campaign

THE CHALLENGE:
[Client] needed to increase brand awareness and drive customer engagement in a competitive market.

OUR SOLUTION:
We designed and executed a multi-city experiential marketing campaign featuring:
• Interactive pop-up experiences in high-traffic locations
• Professional brand ambassadors for authentic engagement
• Product sampling reaching 10,000+ consumers
• Social media integration for amplified reach

THE RESULTS:
📈 300% increase in brand awareness
👥 15,000+ direct consumer interactions
📱 2M+ social media impressions
🎯 45% conversion rate from sampling to purchase

This is the power of strategic experiential marketing! Our nationwide network of brand ambassadors and proven activation strategies deliver real, measurable results.

Want similar results for your brand? Let's connect!

#MarketingCaseStudy #BrandActivation #EventStaffing #ExperientialResults`,
      hashtags: ["MarketingCaseStudy", "BrandActivation", "EventStaffing", "ExperientialResults", "ROI"],
      icon: TrendingUp
    },
    {
      id: "event-announcement",
      title: "Event Announcement",
      content: `🎉 EXCITING NEWS: AirFresh Marketing is Coming to [City]!

We're thrilled to announce our upcoming brand activation event in [City] on [Date]!

Join us for an immersive brand experience featuring:
🌟 Live product demonstrations
🎁 Exclusive sampling opportunities
📸 Interactive photo experiences
🏆 Exciting giveaways and prizes
👥 Meet our professional brand ambassadors

EVENT DETAILS:
📍 Location: [Venue]
📅 Date: [Date]
⏰ Time: [Time]

Our experiential marketing team has created something truly special for [City]. This isn't just an event - it's an unforgettable brand experience designed to create lasting connections.

Can't wait to see you there! Tag us @AirFreshMarketing

#EventMarketing #BrandExperience #PopUpEvent #ExperientialMarketing`,
      hashtags: ["EventMarketing", "BrandExperience", "PopUpEvent", "ExperientialMarketing", "LiveMarketing"],
      icon: Calendar
    },
    {
      id: "industry-insights",
      title: "Industry Insights",
      content: `💡 INDUSTRY INSIGHT: The Future of Experiential Marketing in 2025

The experiential marketing landscape is evolving rapidly. Here are the top trends shaping our industry:

1️⃣ HYBRID EXPERIENCES
Seamlessly blending physical and digital touchpoints for maximum engagement

2️⃣ PERSONALIZATION AT SCALE  
Using data-driven insights to create tailored brand experiences

3️⃣ SUSTAINABILITY FOCUS
Eco-friendly activations that resonate with conscious consumers

4️⃣ MICRO-EXPERIENCES
Strategic small-scale activations with outsized impact

5️⃣ AUTHENTIC STORYTELLING
Real connections through genuine brand narratives

At AirFresh Marketing, we're at the forefront of these trends, helping brands create memorable experiences that drive real results. Our nationwide network of brand ambassadors and innovative guerrilla marketing tactics ensure your message reaches the right audience.

What trends are you most excited about? Share your thoughts below!

#MarketingTrends #ExperientialMarketing #BrandStrategy #FutureOfMarketing`,
      hashtags: ["MarketingTrends", "ExperientialMarketing", "BrandStrategy", "FutureOfMarketing", "Innovation"],
      icon: TrendingUp
    },
    {
      id: "team-spotlight",
      title: "Team & Talent Spotlight",
      content: `👥 TEAM SPOTLIGHT: Meet Our Amazing Brand Ambassadors!

Behind every successful experiential marketing campaign is an incredible team of professionals. Today, we're celebrating our nationwide network of 1000+ brand ambassadors who bring brands to life every day!

What makes our talent exceptional:
✅ Extensively trained and brand-aligned
✅ Professional, engaging, and authentic
✅ Experienced in diverse industries
✅ Available in 50+ cities nationwide
✅ Passionate about creating memorable experiences

Our brand ambassadors don't just represent your brand - they embody it. From product sampling and guerrilla marketing to trade shows and corporate events, our team delivers excellence at every touchpoint.

Looking for top-tier event staffing for your next campaign? Our talent is ready to elevate your brand!

#BrandAmbassadors #EventStaffing #TeamSpotlight #ExperientialTalent`,
      hashtags: ["BrandAmbassadors", "EventStaffing", "TeamSpotlight", "ExperientialTalent", "MarketingTeam"],
      icon: Users
    }
  ];

  const copyToClipboard = async (template: ContentTemplate) => {
    const fullContent = `${template.content}\n\n${template.hashtags.map(tag => `#${tag}`).join(' ')}`;
    
    try {
      await navigator.clipboard.writeText(fullContent);
      setCopiedId(template.id);
      toast({
        title: "Copied to clipboard!",
        description: "LinkedIn post template is ready to paste.",
      });
      
      setTimeout(() => setCopiedId(null), 3000);
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please try selecting and copying the text manually.",
        variant: "destructive",
      });
    }
  };

  const getRelevantKeywords = () => {
    return [...seoKeywords.primary.slice(0, 5), ...seoKeywords.longTail.slice(0, 3)];
  };

  return (
    <Card className="w-full" data-testid="linkedin-content-templates">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Linkedin className="h-6 w-6 mr-2 text-[#0077b5]" />
          LinkedIn Content Templates
        </CardTitle>
        <CardDescription>
          Professional, keyword-optimized templates for your LinkedIn posts. Click to copy and customize with your specific details.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="company-intro" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-5 mb-6">
            {templates.map((template) => (
              <TabsTrigger 
                key={template.id} 
                value={template.id}
                className="text-xs"
                data-testid={`tab-${template.id}`}
              >
                <template.icon className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">{template.title.split(' ')[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {templates.map((template) => (
            <TabsContent key={template.id} value={template.id} className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold flex items-center">
                    <template.icon className="h-5 w-5 mr-2 text-primary" />
                    {template.title}
                  </h3>
                  <Button
                    onClick={() => copyToClipboard(template)}
                    variant="outline"
                    size="sm"
                    className="flex items-center"
                    data-testid={`copy-button-${template.id}`}
                  >
                    {copiedId === template.id ? (
                      <>
                        <CheckCircle2 className="h-4 w-4 mr-2 text-green-600" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 mr-2" />
                        Copy Template
                      </>
                    )}
                  </Button>
                </div>

                <div className="whitespace-pre-wrap text-sm text-gray-700 mb-4 p-4 bg-white rounded border">
                  {template.content}
                </div>

                <div className="flex flex-wrap gap-2">
                  {template.hashtags.map((hashtag) => (
                    <span 
                      key={hashtag}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      data-testid={`hashtag-${hashtag}`}
                    >
                      <Hash className="h-3 w-3 mr-1" />
                      {hashtag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>Pro Tip:</strong> Customize the template with your specific details, add relevant images or videos, 
                  and tag relevant connections to increase engagement. Best posting times are Tuesday-Thursday, 8-10 AM or 5-6 PM.
                </p>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <h4 className="font-semibold mb-2 flex items-center">
            <Sparkles className="h-4 w-4 mr-2 text-primary" />
            Recommended Keywords for Maximum Visibility
          </h4>
          <div className="flex flex-wrap gap-2">
            {getRelevantKeywords().map((keyword) => (
              <span 
                key={keyword}
                className="text-xs px-2 py-1 bg-white rounded border border-gray-300"
                data-testid={`keyword-${keyword}`}
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}