import { CaseStudyWithImages } from './notion-case-studies-with-images';
import { BlogPost } from '@shared/schema';
import { storage } from './storage';
import { fetchCaseStudiesWithImages } from './notion-case-studies-with-images';

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

interface MentionData {
  source: string;
  url: string;
  date: string;
  type: 'linked' | 'unlinked';
  context: string;
}

// Generate press release from case study
export async function generatePressRelease(caseStudyId: string): Promise<PressRelease | null> {
  const caseStudies = await fetchCaseStudiesWithImages();
  const caseStudy = caseStudies.find(cs => cs.id === caseStudyId);
  
  if (!caseStudy) return null;
  
  const currentDate = new Date().toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });
  
  const cityBase = 'New York, NY';
  
  return {
    headline: `AirFresh Marketing Delivers Outstanding Results for ${caseStudy.client || 'Major Brand'} Through Innovative Experiential Campaign`,
    subheadline: caseStudy.title,
    dateline: `FOR IMMEDIATE RELEASE\n${cityBase} - ${currentDate}`,
    body: [
      `AirFresh Marketing, a leading experiential marketing agency, today announced the successful completion of a groundbreaking campaign for ${caseStudy.client || 'a major brand'} that exceeded all expectations.`,
      
      `The campaign, which ${caseStudy.description || 'featured innovative brand activations'}, demonstrated AirFresh Marketing's expertise in creating memorable brand experiences that drive measurable results.`,
      
      caseStudy.what_we_did ? `"${caseStudy.what_we_did}," explained the AirFresh Marketing team. This strategic approach enabled the brand to connect with consumers in meaningful ways while generating significant buzz and engagement.` : '',
      
      caseStudy.results ? `The campaign delivered exceptional results: ${caseStudy.results}. These outcomes highlight AirFresh Marketing's ability to transform creative concepts into tangible business impact.` : 'The campaign generated outstanding engagement and exceeded all KPIs.',
      
      `"We're thrilled with the success of this campaign," said the AirFresh Marketing leadership team. "It demonstrates our commitment to pushing boundaries in experiential marketing and delivering value for our clients through innovative strategies and flawless execution."`,
      
      `This success adds to AirFresh Marketing's growing portfolio of award-winning campaigns for leading brands across industries including technology, beverages, sports, entertainment, and retail.`
    ].filter(Boolean),
    boilerplate: `About AirFresh Marketing:\nAirFresh Marketing is a premier experiential marketing agency specializing in brand activations, event staffing, guerrilla marketing, and sampling campaigns. With a proven track record of creating unforgettable brand experiences, AirFresh Marketing helps companies connect with their target audiences through innovative, immersive campaigns that drive engagement and deliver measurable results. From concept to execution, AirFresh Marketing brings brands to life through strategic creativity and flawless implementation.`,
    contact: `For more information, contact:\nAirFresh Marketing Press Relations\nEmail: press@airfreshmarketing.com\nPhone: 1-800-AIRFRESH\nWebsite: www.airfreshmarketing.com`
  };
}

// Generate outreach email templates
export function generateOutreachEmail(
  targetSite: string,
  targetType: 'blog' | 'news' | 'partner' | 'industry',
  contentType: 'case-study' | 'expertise' | 'partnership',
  caseStudyTitle?: string
): OutreachEmail {
  const templates: Record<string, OutreachEmail> = {
    'blog-case-study': {
      subject: `Exclusive: How We Helped [Brand] Achieve 300% ROI Through Experiential Marketing`,
      greeting: `Hi [Name],\n\nI hope this message finds you well! I've been following ${targetSite} and really enjoyed your recent post about innovative marketing strategies.`,
      body: [
        `I wanted to reach out because we recently completed an exciting campaign${caseStudyTitle ? ` - "${caseStudyTitle}"` : ''} that your readers might find valuable.`,
        `The campaign showcases how experiential marketing can deliver measurable results, including:`,
        `• Engaging over 50,000 consumers directly`,
        `• Generating 300% ROI within 90 days`,
        `• Creating viral social media moments with 10M+ impressions`,
        `I'd love to share the full case study with you. It includes detailed strategies, execution tactics, and lessons learned that your audience could apply to their own marketing efforts.`,
        `Would you be interested in featuring this as a guest post or case study on ${targetSite}? I can provide exclusive insights, data, and high-quality visuals.`
      ],
      cta: `If this sounds interesting, I'd be happy to send over more details or hop on a quick call to discuss how we can make this valuable for your readers.`,
      signature: `Best regards,\n[Your Name]\nAirFresh Marketing\nwww.airfreshmarketing.com`
    },
    'news-expertise': {
      subject: `Expert Commentary Available: Experiential Marketing Trends 2025`,
      greeting: `Dear ${targetSite} Editorial Team,`,
      body: [
        `As you continue covering marketing innovation and industry trends, I wanted to introduce AirFresh Marketing as a resource for expert commentary and insights.`,
        `Our team has executed 200+ experiential campaigns for Fortune 500 brands, giving us unique perspective on:`,
        `• The shift toward immersive brand experiences`,
        `• ROI measurement in experiential marketing`,
        `• Post-pandemic event activation strategies`,
        `• Emerging technologies in brand engagement`,
        `We can provide:`,
        `• Expert quotes and commentary for your articles`,
        `• Exclusive data from our campaign analytics`,
        `• Case studies and real-world examples`,
        `• Trend predictions based on industry insights`
      ],
      cta: `I'd be happy to connect you with our leadership team for interviews or provide written commentary on relevant topics. We're committed to sharing valuable insights that help your readers stay ahead of marketing trends.`,
      signature: `Sincerely,\n[Your Name]\nDirector of Communications\nAirFresh Marketing\npress@airfreshmarketing.com`
    },
    'partner-partnership': {
      subject: `Partnership Opportunity: Collaborate on Experiential Marketing Excellence`,
      greeting: `Hello ${targetSite} Team,`,
      body: [
        `I'm reaching out to explore a potential partnership between ${targetSite} and AirFresh Marketing that could benefit both our audiences.`,
        `We admire your work in the marketing space and believe our expertise in experiential marketing complements your offerings perfectly.`,
        `Potential collaboration ideas:`,
        `• Co-created content series on experiential marketing best practices`,
        `• Joint webinars showcasing successful campaign strategies`,
        `• Resource exchanges to provide value to both audiences`,
        `• Cross-promotion of complementary services`,
        `We've successfully partnered with industry leaders to create valuable content that drives engagement and establishes thought leadership.`
      ],
      cta: `Would you be open to a brief call to explore how we might collaborate? I have several specific ideas that could provide immediate value to your audience while strengthening both our brands.`,
      signature: `Looking forward to connecting,\n[Your Name]\nPartnership Development\nAirFresh Marketing\npartnerships@airfreshmarketing.com`
    }
  };
  
  const key = `${targetType}-${contentType}`;
  return templates[key] || templates['blog-case-study'];
}

// Generate partner badge HTML
export function generatePartnerBadge(
  style: 'horizontal' | 'vertical' | 'compact' = 'horizontal',
  theme: 'light' | 'dark' = 'light'
): { html: string; css: string; instructions: string } {
  const baseUrl = 'https://airfreshmarketing.com';
  const logoUrl = `${baseUrl}/assets/logo.png`;
  
  const badges = {
    horizontal: {
      html: `<!-- AirFresh Marketing Partner Badge -->
<div class="airfresh-partner-badge airfresh-badge-horizontal airfresh-theme-${theme}">
  <a href="${baseUrl}?ref=partner" target="_blank" rel="noopener" title="AirFresh Marketing - Experiential Marketing Agency">
    <img src="${logoUrl}" alt="AirFresh Marketing Partner" class="airfresh-badge-logo" />
    <div class="airfresh-badge-text">
      <span class="airfresh-badge-label">Official Partner</span>
      <span class="airfresh-badge-company">AirFresh Marketing</span>
    </div>
  </a>
</div>`,
      css: `.airfresh-partner-badge {
  display: inline-block;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  padding: 12px 16px;
  background: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
.airfresh-badge-horizontal a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
}
.airfresh-badge-logo {
  height: 40px;
  width: auto;
  margin-right: 12px;
}
.airfresh-badge-text {
  display: flex;
  flex-direction: column;
}
.airfresh-badge-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #6b7280;
  margin-bottom: 2px;
}
.airfresh-badge-company {
  font-size: 16px;
  font-weight: 600;
  color: #111827;
}
.airfresh-theme-dark {
  background: #1f2937;
  border-color: #374151;
}
.airfresh-theme-dark .airfresh-badge-label {
  color: #9ca3af;
}
.airfresh-theme-dark .airfresh-badge-company {
  color: #f9fafb;
}`
    },
    vertical: {
      html: `<!-- AirFresh Marketing Partner Badge -->
<div class="airfresh-partner-badge airfresh-badge-vertical airfresh-theme-${theme}">
  <a href="${baseUrl}?ref=partner" target="_blank" rel="noopener" title="AirFresh Marketing - Experiential Marketing Agency">
    <img src="${logoUrl}" alt="AirFresh Marketing" class="airfresh-badge-logo-vertical" />
    <span class="airfresh-badge-label">Official Partner</span>
    <span class="airfresh-badge-company">AirFresh Marketing</span>
    <span class="airfresh-badge-tagline">Experiential Excellence</span>
  </a>
</div>`,
      css: `.airfresh-badge-vertical {
  display: inline-block;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  padding: 20px;
  background: white;
  text-align: center;
  min-width: 180px;
}
.airfresh-badge-vertical a {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
}
.airfresh-badge-logo-vertical {
  height: 60px;
  width: auto;
  margin-bottom: 12px;
}
.airfresh-badge-tagline {
  font-size: 12px;
  color: #6b7280;
  margin-top: 4px;
  font-style: italic;
}`
    },
    compact: {
      html: `<!-- AirFresh Marketing Partner Badge -->
<a href="${baseUrl}?ref=partner" target="_blank" rel="noopener" class="airfresh-compact-badge airfresh-theme-${theme}" title="Partnered with AirFresh Marketing">
  <img src="${logoUrl}" alt="AirFresh" />
  <span>AirFresh Partner</span>
</a>`,
      css: `.airfresh-compact-badge {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  background: #f3f4f6;
  border-radius: 6px;
  text-decoration: none;
  font-size: 14px;
  color: #374151;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: background 0.2s;
}
.airfresh-compact-badge:hover {
  background: #e5e7eb;
}
.airfresh-compact-badge img {
  height: 20px;
  width: auto;
  margin-right: 8px;
}
.airfresh-theme-dark.airfresh-compact-badge {
  background: #374151;
  color: #f3f4f6;
}
.airfresh-theme-dark.airfresh-compact-badge:hover {
  background: #4b5563;
}`
    }
  };
  
  const badge = badges[style];
  
  return {
    html: badge.html,
    css: badge.css,
    instructions: `
## How to Add the AirFresh Marketing Partner Badge

1. **Copy the HTML code** and paste it where you want the badge to appear on your website.

2. **Add the CSS styles** to your stylesheet or include them in a <style> tag in your HTML.

3. **Customize the appearance** by modifying the CSS variables or using the theme options (light/dark).

4. **Ensure the logo loads** - The badge references our logo at ${logoUrl}. Make sure your site can access external images.

5. **Track referrals** - The badge includes ?ref=partner in the link for tracking purposes.

### Integration Examples:

**WordPress:** Add to your theme's header.php or footer.php file, or use a Custom HTML widget.

**React/Next.js:** Create a component with the HTML and import the CSS.

**Static HTML:** Simply paste both the HTML and CSS into your page.

### Support:
If you need help integrating the badge, contact us at partners@airfreshmarketing.com

Thank you for being an AirFresh Marketing partner!`
  };
}

// Track mentions (simulated data for demonstration)
export async function trackMentions(): Promise<MentionData[]> {
  // In a real implementation, this would use a web scraping service or Google Alerts API
  // For now, we'll return simulated data showing various mention types
  
  const simulatedMentions: MentionData[] = [
    {
      source: 'Event Marketing Blog',
      url: 'https://eventmarketingblog.com/trends-2025',
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      type: 'linked',
      context: 'AirFresh Marketing showcased innovative approaches to brand activation at the recent marketing summit...'
    },
    {
      source: 'Marketing Weekly',
      url: 'https://marketingweekly.com/experiential-agencies',
      date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
      type: 'unlinked',
      context: 'Several agencies including AirFresh Marketing are pioneering new experiential techniques...'
    },
    {
      source: 'Brand Experience Magazine',
      url: 'https://brandexperience.com/case-studies',
      date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      type: 'linked',
      context: 'The campaign by AirFresh Marketing generated over 10 million impressions...'
    },
    {
      source: 'AdAge',
      url: 'https://adage.com/guerrilla-marketing',
      date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
      type: 'unlinked',
      context: 'Guerrilla marketing tactics used by agencies like AirFresh are gaining traction...'
    },
    {
      source: 'Event Industry News',
      url: 'https://eventindustrynews.com/staffing-solutions',
      date: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
      type: 'linked',
      context: 'AirFresh Marketing\'s staffing solution helped brands achieve 95% activation success rate...'
    },
    {
      source: 'CMO Today',
      url: 'https://cmotoday.com/roi-experiential',
      date: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
      type: 'unlinked',
      context: 'Companies like AirFresh demonstrate that experiential marketing delivers measurable ROI...'
    },
    {
      source: 'Social Media Examiner',
      url: 'https://socialmediaexaminer.com/viral-campaigns',
      date: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
      type: 'linked',
      context: 'AirFresh Marketing\'s viral campaign strategy resulted in 50M social impressions...'
    },
    {
      source: 'Forbes',
      url: 'https://forbes.com/marketing-innovation',
      date: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString(),
      type: 'unlinked',
      context: 'Innovative agencies including AirFresh are reshaping how brands connect with consumers...'
    }
  ];
  
  return simulatedMentions;
}

// Generate mention report
export async function getMentionReport(): Promise<{
  total: number;
  linked: number;
  unlinked: number;
  recentMentions: MentionData[];
  topSources: { source: string; count: number }[];
  outreachOpportunities: MentionData[];
}> {
  const mentions = await trackMentions();
  
  const linked = mentions.filter(m => m.type === 'linked');
  const unlinked = mentions.filter(m => m.type === 'unlinked');
  
  // Count mentions by source
  const sourceCount = mentions.reduce((acc, mention) => {
    acc[mention.source] = (acc[mention.source] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const topSources = Object.entries(sourceCount)
    .map(([source, count]) => ({ source, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
  
  return {
    total: mentions.length,
    linked: linked.length,
    unlinked: unlinked.length,
    recentMentions: mentions.slice(0, 5),
    topSources,
    outreachOpportunities: unlinked // Unlinked mentions are opportunities for outreach
  };
}