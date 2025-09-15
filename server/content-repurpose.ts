import { marked } from 'marked';
import { JSDOM } from 'jsdom';
import { storage } from './storage';
import { fetchCaseStudiesWithImages } from './notion-case-studies-with-images';
import { BlogPost } from '@shared/schema';

interface ContentExtract {
  title: string;
  summary: string;
  keyPoints: string[];
  images: string[];
  stats?: { label: string; value: string }[];
  tags: string[];
}

// Extract plain text from HTML/Markdown
function extractText(content: string): string {
  const html = marked(content) as string;
  const dom = new JSDOM(html);
  return dom.window.document.body.textContent || '';
}

// Extract key points from content
function extractKeyPoints(content: string, limit: number = 5): string[] {
  const text = extractText(content);
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 20);
  
  // Extract most important sentences based on length and keywords
  const importantKeywords = ['deliver', 'achieve', 'increase', 'success', 'brand', 'engagement', 'result', 'campaign', 'activation', 'experience'];
  
  const scoredSentences = sentences.map(sentence => {
    const score = importantKeywords.reduce((acc, keyword) => {
      return acc + (sentence.toLowerCase().includes(keyword) ? 1 : 0);
    }, 0) + (sentence.length > 50 ? 1 : 0);
    
    return { sentence: sentence.trim(), score };
  });
  
  return scoredSentences
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.sentence);
}

// Extract content from blog post
export async function extractBlogContent(blogId: string): Promise<ContentExtract | null> {
  const posts = await storage.getBlogPosts();
  const post = posts.find(p => p.id.toString() === blogId || p.slug === blogId);
  
  if (!post) return null;
  
  return {
    title: post.title,
    summary: post.excerpt || extractText(post.content).substring(0, 500),
    keyPoints: extractKeyPoints(post.content),
    images: [], // BlogPost doesn't have featured_image property
    tags: post.tags || ['ExperientialMarketing', 'EventStaffing', 'BrandActivation']
  };
}

// Extract content from case study
export async function extractCaseStudyContent(caseStudyId: string): Promise<ContentExtract | null> {
  const caseStudies = await fetchCaseStudiesWithImages();
  const caseStudy = caseStudies.find(cs => cs.id === caseStudyId);
  
  if (!caseStudy) return null;
  
  const keyPoints = [];
  if (caseStudy.description) keyPoints.push(`Challenge: ${caseStudy.description}`);
  if (caseStudy.what_we_did) keyPoints.push(`Solution: ${caseStudy.what_we_did}`);
  if (caseStudy.results) keyPoints.push(`Results: ${caseStudy.results}`);
  
  return {
    title: caseStudy.title,
    summary: caseStudy.description || '',
    keyPoints,
    images: caseStudy.google_drive_images || [],
    stats: undefined, // CaseStudy doesn't have metrics property
    tags: ['ExperientialMarketing', 'CaseStudy', caseStudy.client?.replace(/\s+/g, ''), 'BrandActivation'].filter(Boolean) as string[]
  };
}

// Generate LinkedIn post from content
export function generateLinkedInPost(content: ContentExtract): string {
  const hashtags = content.tags.map(tag => `#${tag}`).join(' ');
  
  let post = `🚀 ${content.title}\n\n`;
  post += `${content.summary.substring(0, 400)}...\n\n`;
  
  if (content.keyPoints.length > 0) {
    post += `Key Highlights:\n`;
    content.keyPoints.slice(0, 3).forEach(point => {
      post += `✅ ${point.substring(0, 100)}\n`;
    });
    post += '\n';
  }
  
  if (content.stats && content.stats.length > 0) {
    post += `📊 Results:\n`;
    content.stats.slice(0, 3).forEach(stat => {
      post += `• ${stat.label}: ${stat.value}\n`;
    });
    post += '\n';
  }
  
  post += `💡 What's your experience with experiential marketing? Share your thoughts below!\n\n`;
  post += `🔗 Read more at airfreshmarketing.com\n\n`;
  post += hashtags;
  
  return post;
}

// Generate Instagram carousel content
export function generateInstagramCarousel(content: ContentExtract): any {
  const slides = [];
  
  // Slide 1: Title slide
  slides.push({
    type: 'title',
    headline: content.title,
    subheading: 'Swipe for insights →',
    background: 'gradient'
  });
  
  // Slide 2: Overview
  slides.push({
    type: 'text',
    title: 'Overview',
    content: content.summary.substring(0, 200),
    prompt: 'Keep swiping →'
  });
  
  // Slides 3-7: Key points
  content.keyPoints.slice(0, 5).forEach((point, index) => {
    slides.push({
      type: 'point',
      number: index + 1,
      title: `Key Point ${index + 1}`,
      content: point.substring(0, 150),
      prompt: index < 4 ? 'More insights →' : 'Final thoughts →'
    });
  });
  
  // Slide 8: Stats (if available)
  if (content.stats && content.stats.length > 0) {
    slides.push({
      type: 'stats',
      title: 'The Results',
      stats: content.stats.slice(0, 4),
      prompt: 'Impressive, right? →'
    });
  }
  
  // Slide 9: Call to action
  slides.push({
    type: 'cta',
    title: 'Ready to Create Amazing Experiences?',
    content: 'Let AirFresh Marketing bring your brand to life!',
    cta: 'Visit airfreshmarketing.com',
    link: 'Link in bio'
  });
  
  // Slide 10: Follow
  slides.push({
    type: 'follow',
    title: 'Follow for More',
    content: 'Daily tips on experiential marketing & brand activation',
    handle: '@airfreshmarketing'
  });
  
  return {
    slides,
    caption: `${content.title} 🎯\n\n${content.summary.substring(0, 150)}...\n\nSwipe through to learn more about our approach to experiential marketing!\n\n${content.tags.map(tag => `#${tag}`).join(' ')}\n\n#MarketingStrategy #BrandExperience #EventMarketing #CreativeAgency`,
    hashtags: [...content.tags, 'MarketingStrategy', 'BrandExperience', 'EventMarketing', 'CreativeAgency']
  };
}

// Generate video script from content
export function generateVideoScript(content: ContentExtract): any {
  const script: {
    title: string;
    duration: string;
    format: string;
    scenes: any[];
  } = {
    title: content.title,
    duration: '30-60 seconds',
    format: 'Short-form vertical (9:16)',
    scenes: []
  };
  
  // Scene 1: Hook (0-3 seconds)
  script.scenes.push({
    timestamp: '0:00-0:03',
    type: 'hook',
    visual: 'Dynamic text animation or eye-catching visual',
    text: 'ON SCREEN: ' + content.title,
    voiceover: `Here's how we ${content.title.toLowerCase().includes('campaign') ? 'created an amazing campaign' : 'delivered incredible results'}...`,
    action: 'Quick cuts, upbeat music starts'
  });
  
  // Scene 2: Problem/Challenge (3-8 seconds)
  script.scenes.push({
    timestamp: '0:03-0:08',
    type: 'problem',
    visual: 'B-roll footage or animated graphics',
    text: 'ON SCREEN: The Challenge',
    voiceover: content.keyPoints[0] || 'Every brand needs to stand out in today\'s crowded market.',
    action: 'Smooth transition with text overlay'
  });
  
  // Scene 3-5: Solution points (8-20 seconds)
  content.keyPoints.slice(1, 4).forEach((point, index) => {
    script.scenes.push({
      timestamp: `0:${8 + (index * 4)}-0:${12 + (index * 4)}`,
      type: 'solution',
      visual: `Visual ${index + 1}: Campaign footage or results`,
      text: `ON SCREEN: Point ${index + 1}`,
      voiceover: point.substring(0, 50),
      action: 'Quick transition, add motion graphics'
    });
  });
  
  // Scene 6: Results (20-25 seconds)
  if (content.stats && content.stats.length > 0) {
    script.scenes.push({
      timestamp: '0:20-0:25',
      type: 'results',
      visual: 'Animated statistics or graphs',
      text: `ON SCREEN: ${content.stats.map(s => `${s.label}: ${s.value}`).join(' | ')}`,
      voiceover: 'The results speak for themselves...',
      action: 'Numbers animate in, celebratory effects'
    });
  }
  
  // Scene 7: Call to Action (25-30 seconds)
  script.scenes.push({
    timestamp: '0:25-0:30',
    type: 'cta',
    visual: 'Logo animation with website URL',
    text: 'ON SCREEN: AirFreshMarketing.com',
    voiceover: 'Ready to create unforgettable brand experiences? Visit AirFreshMarketing.com',
    action: 'Fade to logo, add website and social handles'
  });
  
  return {
    script,
    tips: [
      'Use trending audio for better reach',
      'Add captions for accessibility',
      'Keep transitions fast and engaging',
      'Film in vertical format (9:16)',
      'Use brand colors consistently'
    ],
    hashtags: [
      '#ExperientialMarketing',
      '#BrandActivation', 
      '#EventMarketing',
      '#MarketingTips',
      '#BehindTheScenes',
      '#CreativeAgency',
      ...content.tags.map(tag => `#${tag}`)
    ]
  };
}