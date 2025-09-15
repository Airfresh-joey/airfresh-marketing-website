import QRCode from 'qrcode';
import { z } from 'zod';

// Review platforms configuration
export const reviewPlatforms = {
  google: {
    name: 'Google Business Profile',
    baseUrl: 'https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review',
    instructions: 'Help others discover our exceptional experiential marketing services by sharing your experience on Google.'
  },
  linkedin: {
    name: 'LinkedIn',
    baseUrl: 'https://www.linkedin.com/company/airfresh-marketing/recommendations',
    instructions: 'Share your professional experience working with AirFresh Marketing on LinkedIn.'
  },
  clutch: {
    name: 'Clutch',
    baseUrl: 'https://clutch.co/profile/airfresh-marketing#review',
    instructions: 'Help other businesses find the right experiential marketing partner by reviewing us on Clutch.'
  }
};

// Keyword suggestions for SEO
export const keywordSuggestions = [
  'experiential marketing',
  'event staffing',
  'brand ambassadors',
  'guerrilla marketing',
  'sampling activations',
  'brand activation',
  'corporate events',
  'product launches',
  'immersive experiences',
  'event production',
  'pop-up events',
  'marketing campaigns',
  'consumer engagement',
  'creative marketing',
  'brand experiences'
];

// Review request email templates
export const emailTemplates = {
  initial: {
    subject: 'Thank You for Choosing AirFresh Marketing - We\'d Love Your Feedback',
    body: (clientName: string, projectName: string, platform: string) => `
Dear ${clientName},

Thank you for choosing AirFresh Marketing for your ${projectName} project. We hope you're thrilled with the results and the impact it's had on your brand!

Your honest feedback is incredibly valuable to us and helps other businesses discover our services. We'd be grateful if you could take a moment to share your experience on ${platform}.

When writing your review, you might consider mentioning:
• The type of campaign we executed (${keywordSuggestions.slice(0, 3).join(', ')})
• The impact on your brand awareness and engagement
• Our team's creativity and professionalism
• The results you achieved

${reviewPlatforms[platform as keyof typeof reviewPlatforms].instructions}

Click here to leave your review: ${reviewPlatforms[platform as keyof typeof reviewPlatforms].baseUrl}

Thank you for your time and for trusting us with your brand!

Best regards,
The AirFresh Marketing Team
`
  },
  followUp: {
    subject: 'Quick Reminder: Share Your AirFresh Marketing Experience',
    body: (clientName: string, projectName: string, platform: string) => `
Hi ${clientName},

We hope you're still enjoying the success from your ${projectName} campaign!

If you haven't had a chance yet, we'd really appreciate if you could share your honest experience working with AirFresh Marketing on ${platform}. Your feedback helps us improve and helps other businesses find the right experiential marketing partner.

Some keywords that might help describe your experience:
${keywordSuggestions.slice(3, 8).map(kw => `• ${kw}`).join('\n')}

Leave your review here: ${reviewPlatforms[platform as keyof typeof reviewPlatforms].baseUrl}

Thank you for your continued support!

Warm regards,
The AirFresh Marketing Team
`
  },
  postEvent: {
    subject: 'How Did We Do? Share Your Event Experience',
    body: (clientName: string, eventName: string, platform: string) => `
Hello ${clientName},

We hope your ${eventName} was a tremendous success! It was our pleasure bringing your vision to life.

Would you mind taking a few minutes to share your honest feedback about working with AirFresh Marketing? Your review on ${platform} would mean the world to us.

Feel free to mention specific aspects like:
• ${keywordSuggestions.slice(8, 11).join(', ')}
• The creativity and execution of the campaign
• Our team's responsiveness and professionalism
• The measurable results achieved

Share your experience: ${reviewPlatforms[platform as keyof typeof reviewPlatforms].baseUrl}

Looking forward to working with you again!

Best,
The AirFresh Marketing Team
`
  }
};

// Response templates for replying to reviews
export const responseTemplates = {
  positive: {
    google: (reviewerName: string, specificMention?: string) => `
Thank you so much, ${reviewerName}, for taking the time to share your experience! ${specificMention ? `We're thrilled that you enjoyed ${specificMention}.` : ''} Your feedback motivates our team to continue delivering exceptional experiential marketing solutions. We look forward to creating more memorable brand experiences with you!
`,
    linkedin: (reviewerName: string, projectType?: string) => `
Thank you, ${reviewerName}, for this wonderful recommendation! ${projectType ? `It was a pleasure working on your ${projectType} project.` : ''} We're honored to have been part of your brand's journey and appreciate your trust in AirFresh Marketing. Looking forward to future collaborations!
`,
    clutch: (reviewerName: string) => `
We greatly appreciate your detailed review, ${reviewerName}! Your insights help other businesses understand the value of experiential marketing. Thank you for choosing AirFresh Marketing as your partner. We're excited about future opportunities to exceed your expectations!
`
  },
  constructive: {
    general: (reviewerName: string, concern: string) => `
Thank you, ${reviewerName}, for your honest feedback. We appreciate you taking the time to share your experience. We take your concerns about ${concern} seriously and have already begun implementing improvements. We'd love the opportunity to discuss this further and make things right. Please reach out to us at hello@airfreshmarketing.com.
`
  }
};

// Generate QR code for review link
export async function generateReviewQRCode(platform: keyof typeof reviewPlatforms): Promise<string> {
  try {
    const url = reviewPlatforms[platform].baseUrl;
    const qrCodeDataURL = await QRCode.toDataURL(url, {
      width: 300,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#FFFFFF'
      },
      errorCorrectionLevel: 'M'
    });
    return qrCodeDataURL;
  } catch (error) {
    console.error('Error generating QR code:', error);
    throw new Error('Failed to generate QR code');
  }
}

// Generate personalized review request
export function generateReviewRequest(
  templateType: keyof typeof emailTemplates,
  clientName: string,
  projectName: string,
  platform: keyof typeof reviewPlatforms
) {
  const template = emailTemplates[templateType];
  return {
    subject: template.subject,
    body: template.body(clientName, projectName, platform),
    platform: reviewPlatforms[platform],
    keywords: keywordSuggestions
  };
}

// Track review metrics (simulated data)
export function getReviewMetrics() {
  return {
    totalReviews: 247,
    averageRating: 4.8,
    platformBreakdown: {
      google: { count: 142, rating: 4.9 },
      linkedin: { count: 67, rating: 4.8 },
      clutch: { count: 38, rating: 4.7 }
    },
    responseRate: 78,
    recentReviews: [
      {
        id: '1',
        platform: 'google',
        reviewer: 'Sarah Johnson',
        company: 'TechCorp Inc.',
        rating: 5,
        date: '2025-01-10',
        text: 'AirFresh Marketing delivered an outstanding experiential marketing campaign for our product launch. Their brand ambassadors were professional and engaging.',
        responded: true
      },
      {
        id: '2',
        platform: 'linkedin',
        reviewer: 'Michael Chen',
        company: 'Global Brands LLC',
        rating: 5,
        date: '2025-01-08',
        text: 'Exceptional event production and guerrilla marketing tactics. The sampling activation exceeded our expectations.',
        responded: true
      },
      {
        id: '3',
        platform: 'clutch',
        reviewer: 'Jennifer Martinez',
        company: 'Startup Innovations',
        rating: 4,
        date: '2025-01-05',
        text: 'Great corporate events team. Creative marketing approach with measurable results. Would recommend for brand activation projects.',
        responded: false
      }
    ],
    monthlyTrend: [
      { month: 'Aug', reviews: 18, rating: 4.7 },
      { month: 'Sep', reviews: 22, rating: 4.8 },
      { month: 'Oct', reviews: 25, rating: 4.9 },
      { month: 'Nov', reviews: 20, rating: 4.8 },
      { month: 'Dec', reviews: 28, rating: 4.9 },
      { month: 'Jan', reviews: 15, rating: 4.8 }
    ]
  };
}

// Validation schemas
export const reviewRequestSchema = z.object({
  templateType: z.enum(['initial', 'followUp', 'postEvent']),
  clientName: z.string().min(1),
  projectName: z.string().min(1),
  platform: z.enum(['google', 'linkedin', 'clutch'])
});

export const feedbackSubmissionSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().min(1),
  serviceType: z.string().min(1),
  rating: z.number().min(1).max(5),
  reviewText: z.string().min(10),
  platform: z.enum(['google', 'linkedin', 'clutch']),
  keywords: z.array(z.string()).optional()
});

// Generate response to review
export function generateReviewResponse(
  sentiment: 'positive' | 'constructive',
  platform: keyof typeof reviewPlatforms,
  reviewerName: string,
  specificMention?: string
) {
  if (sentiment === 'positive') {
    return responseTemplates.positive[platform]?.(reviewerName, specificMention) || 
           responseTemplates.positive.google(reviewerName, specificMention);
  } else {
    return responseTemplates.constructive.general(reviewerName, specificMention || 'your feedback');
  }
}