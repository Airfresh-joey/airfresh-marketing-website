import * as cron from 'node-cron';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import qrcode from 'qrcode';
import { storage } from './storage';
import { generateLinkedInPost } from './content-repurpose';

// Content Schedule Schema
export const contentScheduleSchema = z.object({
  linkedIn: z.object({
    enabled: z.boolean().default(true),
    days: z.array(z.enum(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'])).default(['Monday', 'Wednesday', 'Friday']),
    time: z.string().default('09:00'),
    frequency: z.enum(['daily', 'weekly', 'biweekly']).default('weekly')
  }),
  blog: z.object({
    enabled: z.boolean().default(true),
    dayOfMonth: z.number().min(1).max(28).default(1),
    time: z.string().default('09:00'),
    frequency: z.enum(['weekly', 'biweekly', 'monthly']).default('monthly')
  }),
  caseStudies: z.object({
    enabled: z.boolean().default(true),
    months: z.array(z.number().min(1).max(12)).default([1, 4, 7, 10]), // January, April, July, October
    dayOfMonth: z.number().min(1).max(28).default(1),
    time: z.string().default('09:00')
  }),
  clientContact: z.object({
    enabled: z.boolean().default(true),
    dayOfWeek: z.enum(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']).default('Monday'),
    time: z.string().default('09:00'),
    frequency: z.enum(['daily', 'weekly', 'biweekly', 'monthly']).default('weekly')
  })
});

export type ContentSchedule = z.infer<typeof contentScheduleSchema>;

// Content Calendar Event Schema
export const calendarEventSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  type: z.enum(['linkedin', 'blog', 'case-study', 'client-contact', 'custom']),
  dueDate: z.date(),
  status: z.enum(['pending', 'in-progress', 'completed', 'overdue']).default('pending'),
  draft: z.string().optional(),
  reminderSent: z.boolean().default(false),
  createdAt: z.date().default(() => new Date()),
  completedAt: z.date().optional()
});

export type CalendarEvent = z.infer<typeof calendarEventSchema>;

// Store for scheduled tasks
const scheduledTasks: Map<string, cron.ScheduledTask> = new Map();

// Store for calendar events
let calendarEvents: CalendarEvent[] = [];

// Timezone configuration (default to US Eastern)
const TIMEZONE = process.env.TIMEZONE || 'America/New_York';

// Default schedule configuration
let currentSchedule: ContentSchedule = {
  linkedIn: {
    enabled: true,
    days: ['Monday', 'Wednesday', 'Friday'],
    time: '09:00',
    frequency: 'weekly'
  },
  blog: {
    enabled: true,
    dayOfMonth: 1,
    time: '09:00',
    frequency: 'monthly'
  },
  caseStudies: {
    enabled: true,
    months: [1, 4, 7, 10],
    dayOfMonth: 1,
    time: '09:00'
  },
  clientContact: {
    enabled: true,
    dayOfWeek: 'Monday',
    time: '09:00',
    frequency: 'weekly'
  }
};

// Email configuration
const createTransporter = () => {
  const emailConfig = {
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER || '',
      pass: process.env.EMAIL_PASS || ''
    }
  };

  // Only create transporter if credentials are provided
  if (!emailConfig.auth.user || !emailConfig.auth.pass) {
    console.log('Email credentials not configured. Email reminders will be simulated.');
    return null;
  }

  return nodemailer.createTransport(emailConfig);
};

// Email templates
export const emailTemplates = {
  linkedin: {
    subject: '🔔 LinkedIn Post Due Today',
    body: (event: CalendarEvent) => `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="color: #0077B5;">LinkedIn Content Reminder</h2>
        <p>Your LinkedIn post is scheduled for today! (${TIMEZONE})</p>
        
        <div style="background: #f0f0f0; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3>Quick Actions:</h3>
          <ul>
            <li><a href="${process.env.BASE_URL || 'http://localhost:5000'}/repurpose">Generate LinkedIn Post</a></li>
            <li><a href="${process.env.BASE_URL || 'http://localhost:5000'}/content-calendar">View Calendar</a></li>
          </ul>
        </div>
        
        <div style="margin: 20px 0;">
          <h3>Content Tips:</h3>
          <ul>
            <li>Keep it concise and engaging (1300 characters max)</li>
            <li>Use 3-5 relevant hashtags</li>
            <li>Include a call-to-action</li>
            <li>Post between 9 AM - 12 PM for best engagement</li>
          </ul>
        </div>
        
        <p style="color: #666; font-size: 12px; margin-top: 30px;">
          This is an automated reminder from your Content Calendar.
        </p>
      </div>
    `
  },
  blog: {
    subject: '📝 Monthly Blog Post Due',
    body: (event: CalendarEvent) => `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="color: #2563eb;">Blog Post Reminder</h2>
        <p>Your monthly blog post is due today! (${TIMEZONE})</p>
        
        <div style="background: #f0f0f0; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3>Quick Actions:</h3>
          <ul>
            <li><a href="${process.env.BASE_URL || 'http://localhost:5000'}/blog/editor">Create Blog Post</a></li>
            <li><a href="${process.env.BASE_URL || 'http://localhost:5000'}/repurpose">Generate Blog Ideas</a></li>
            <li><a href="${process.env.BASE_URL || 'http://localhost:5000'}/content-calendar">View Calendar</a></li>
          </ul>
        </div>
        
        <div style="margin: 20px 0;">
          <h3>Blog Best Practices:</h3>
          <ul>
            <li>Target 1500-2000 words for SEO</li>
            <li>Include relevant keywords naturally</li>
            <li>Add meta description (155 characters)</li>
            <li>Use headers (H2, H3) for structure</li>
            <li>Include internal and external links</li>
          </ul>
        </div>
        
        <p style="color: #666; font-size: 12px; margin-top: 30px;">
          This is an automated reminder from your Content Calendar.
        </p>
      </div>
    `
  },
  caseStudy: {
    subject: '📊 Quarterly Case Study Due',
    body: (event: CalendarEvent) => `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="color: #10b981;">Case Study Reminder</h2>
        <p>Your quarterly case study is due this week! (${TIMEZONE})</p>
        
        <div style="background: #f0f0f0; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3>Quick Actions:</h3>
          <ul>
            <li><a href="${process.env.BASE_URL || 'http://localhost:5000'}/admin/case-studies">Create Case Study</a></li>
            <li><a href="${process.env.BASE_URL || 'http://localhost:5000'}/case-studies">View Existing Studies</a></li>
            <li><a href="${process.env.BASE_URL || 'http://localhost:5000'}/content-calendar">View Calendar</a></li>
          </ul>
        </div>
        
        <div style="margin: 20px 0;">
          <h3>Case Study Elements:</h3>
          <ul>
            <li>Client background and challenge</li>
            <li>Your solution and approach</li>
            <li>Implementation details</li>
            <li>Results and metrics (ROI, engagement, etc.)</li>
            <li>Client testimonial</li>
            <li>High-quality images/videos</li>
          </ul>
        </div>
        
        <p style="color: #666; font-size: 12px; margin-top: 30px;">
          This is an automated reminder from your Content Calendar.
        </p>
      </div>
    `
  },
  clientContact: {
    subject: '☎️ Weekly Client Check-in Reminder',
    body: (event: CalendarEvent) => `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="color: #f59e0b;">Client Contact Reminder</h2>
        <p>Time for your weekly client check-ins! (${TIMEZONE})</p>
        
        <div style="background: #f0f0f0; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3>Quick Actions:</h3>
          <ul>
            <li><a href="${process.env.BASE_URL || 'http://localhost:5000'}/contact">View Contact Submissions</a></li>
            <li><a href="${process.env.BASE_URL || 'http://localhost:5000'}/reviews-dashboard">Check Reviews</a></li>
            <li><a href="${process.env.BASE_URL || 'http://localhost:5000'}/content-calendar">View Calendar</a></li>
          </ul>
        </div>
        
        <div style="margin: 20px 0;">
          <h3>Client Touchpoint Ideas:</h3>
          <ul>
            <li>Send project updates and progress reports</li>
            <li>Share relevant industry insights</li>
            <li>Request feedback or testimonials</li>
            <li>Schedule quarterly business reviews</li>
            <li>Share success metrics and ROI</li>
          </ul>
        </div>
        
        <p style="color: #666; font-size: 12px; margin-top: 30px;">
          This is an automated reminder from your Content Calendar.
        </p>
      </div>
    `
  }
};

// Send reminder email
export async function sendReminderEmail(event: CalendarEvent): Promise<boolean> {
  const transporter = createTransporter();
  
  if (!transporter) {
    console.log(`[Simulated Email] Would send reminder for ${event.type}: ${event.title}`);
    // Mark reminder as sent even when simulated to prevent repeated attempts
    event.reminderSent = true;
    return true; // Simulate success
  }

  const templateKey = event.type === 'case-study' ? 'caseStudy' : 
                     event.type === 'client-contact' ? 'clientContact' :
                     event.type as keyof typeof emailTemplates;
  
  const template = emailTemplates[templateKey];
  if (!template) {
    console.error(`No email template found for type: ${event.type}`);
    return false;
  }

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: template.subject,
      html: template.body(event)
    });

    // Mark reminder as sent
    event.reminderSent = true;
    console.log(`Reminder sent for ${event.type}: ${event.title}`);
    return true;
  } catch (error) {
    console.error('Error sending reminder email:', error);
    return false;
  }
}

// Create calendar event
export function createCalendarEvent(
  type: CalendarEvent['type'],
  dueDate: Date,
  title?: string,
  description?: string
): CalendarEvent {
  const event: CalendarEvent = {
    id: `${type}-${Date.now()}`,
    title: title || `${type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ')} Due`,
    description: description || `Content due for ${type}`,
    type,
    dueDate,
    status: 'pending',
    reminderSent: false,
    createdAt: new Date()
  };

  calendarEvents.push(event);
  return event;
}

// Check and send due reminders
export async function checkAndSendReminders() {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);

  for (const event of calendarEvents) {
    if (event.status === 'pending' && !event.reminderSent) {
      // Send reminder 24 hours before due date
      if (event.dueDate <= tomorrow && event.dueDate > now) {
        await sendReminderEmail(event);
      }
      // Mark as overdue if past due date
      else if (event.dueDate < now) {
        event.status = 'overdue';
      }
    }
  }
}

// Schedule LinkedIn posts
function scheduleLinkedInPosts() {
  if (!currentSchedule.linkedIn.enabled) return;

  const { days, time } = currentSchedule.linkedIn;
  const [hour, minute] = time.split(':').map(Number);

  // Convert day names to cron day numbers (0 = Sunday, 1 = Monday, etc.)
  const dayMap: Record<string, number> = {
    'Sunday': 0, 'Monday': 1, 'Tuesday': 2, 'Wednesday': 3,
    'Thursday': 4, 'Friday': 5, 'Saturday': 6
  };

  const cronDays = days.map(day => dayMap[day]).join(',');
  const cronExpression = `${minute} ${hour} * * ${cronDays}`;

  const task = cron.schedule(cronExpression, async () => {
    console.log('LinkedIn post reminder triggered');
    const event = createCalendarEvent(
      'linkedin',
      new Date(),
      'LinkedIn Post',
      'Time to share engaging content on LinkedIn!'
    );
    await sendReminderEmail(event);
  });

  scheduledTasks.set('linkedin', task);
}

// Schedule blog posts
function scheduleBlogPosts() {
  if (!currentSchedule.blog.enabled) return;

  const { dayOfMonth, time } = currentSchedule.blog;
  const [hour, minute] = time.split(':').map(Number);

  const cronExpression = `${minute} ${hour} ${dayOfMonth} * *`;

  const task = cron.schedule(cronExpression, async () => {
    console.log('Blog post reminder triggered');
    const event = createCalendarEvent(
      'blog',
      new Date(),
      'Monthly Blog Post',
      'Time to publish your monthly blog post!'
    );
    await sendReminderEmail(event);
  });

  scheduledTasks.set('blog', task);
}

// Schedule case studies
function scheduleCaseStudies() {
  if (!currentSchedule.caseStudies.enabled) return;

  const { months, dayOfMonth, time } = currentSchedule.caseStudies;
  const [hour, minute] = time.split(':').map(Number);

  const cronMonths = months.join(',');
  const cronExpression = `${minute} ${hour} ${dayOfMonth} ${cronMonths} *`;

  const task = cron.schedule(cronExpression, async () => {
    console.log('Case study reminder triggered');
    const event = createCalendarEvent(
      'case-study',
      new Date(),
      'Quarterly Case Study',
      'Time to showcase your latest success story!'
    );
    await sendReminderEmail(event);
  });

  scheduledTasks.set('case-studies', task);
}

// Schedule client contact reminders
function scheduleClientContact() {
  if (!currentSchedule.clientContact.enabled) return;

  const { dayOfWeek, time } = currentSchedule.clientContact;
  const [hour, minute] = time.split(':').map(Number);

  const dayMap: Record<string, number> = {
    'Sunday': 0, 'Monday': 1, 'Tuesday': 2, 'Wednesday': 3,
    'Thursday': 4, 'Friday': 5, 'Saturday': 6
  };

  const cronDay = dayMap[dayOfWeek];
  const cronExpression = `${minute} ${hour} * * ${cronDay}`;

  const task = cron.schedule(cronExpression, async () => {
    console.log('Client contact reminder triggered');
    const event = createCalendarEvent(
      'client-contact',
      new Date(),
      'Weekly Client Check-in',
      'Time to reach out to your clients!'
    );
    await sendReminderEmail(event);
  });

  scheduledTasks.set('client-contact', task);
}

// Initialize all scheduled tasks
export function initializeScheduledTasks() {
  // Clear existing tasks
  scheduledTasks.forEach(task => task.stop());
  scheduledTasks.clear();

  // Schedule all enabled tasks
  scheduleLinkedInPosts();
  scheduleBlogPosts();
  scheduleCaseStudies();
  scheduleClientContact();

  // Check for due reminders every 30 minutes
  const reminderCheck = cron.schedule('*/30 * * * *', async () => {
    console.log('Running scheduled reminder check');
    await checkAndSendReminders();
  });
  scheduledTasks.set('reminder-check', reminderCheck);

  // Generate events for the next 30 days on startup
  generateUpcomingEvents();

  console.log('Content calendar scheduled tasks initialized');
}

// Update schedule configuration
export function updateSchedule(newSchedule: Partial<ContentSchedule>) {
  currentSchedule = { ...currentSchedule, ...newSchedule };
  initializeScheduledTasks(); // Reinitialize with new schedule
  return currentSchedule;
}

// Get current schedule
export function getCurrentSchedule(): ContentSchedule {
  return currentSchedule;
}

// Get upcoming events
export function getUpcomingEvents(days: number = 30): CalendarEvent[] {
  const now = new Date();
  const future = new Date();
  future.setDate(future.getDate() + days);

  return calendarEvents
    .filter(event => event.dueDate >= now && event.dueDate <= future)
    .sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());
}

// Get event by ID
export function getEventById(eventId: string): CalendarEvent | undefined {
  return calendarEvents.find(event => event.id === eventId);
}

// Generate upcoming events based on schedule
function generateUpcomingEvents() {
  const now = new Date();
  
  // Clear old events (keep completed and events from last 7 days)
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  calendarEvents = calendarEvents.filter(
    event => event.status === 'completed' || event.dueDate >= oneWeekAgo
  );

  // Generate LinkedIn events for next 30 days
  if (currentSchedule.linkedIn.enabled) {
    const { days, time } = currentSchedule.linkedIn;
    const [hour, minute] = time.split(':').map(Number);
    
    for (let i = 0; i < 30; i++) {
      const checkDate = new Date(now);
      checkDate.setDate(checkDate.getDate() + i);
      const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][checkDate.getDay()];
      
      if (days.includes(dayName)) {
        const eventDate = new Date(checkDate);
        eventDate.setHours(hour, minute, 0, 0);
        
        // Check if event already exists
        const exists = calendarEvents.some(
          e => e.type === 'linkedin' && 
          e.dueDate.toDateString() === eventDate.toDateString()
        );
        
        if (!exists && eventDate > now) {
          createCalendarEvent(
            'linkedin',
            eventDate,
            'LinkedIn Post',
            `Scheduled LinkedIn post for ${dayName} at ${time} (${TIMEZONE})`
          );
        }
      }
    }
  }

  // Generate monthly blog events
  if (currentSchedule.blog.enabled) {
    const { dayOfMonth, time } = currentSchedule.blog;
    const [hour, minute] = time.split(':').map(Number);
    
    for (let month = 0; month < 2; month++) {
      const eventDate = new Date(now);
      eventDate.setMonth(eventDate.getMonth() + month);
      eventDate.setDate(dayOfMonth);
      eventDate.setHours(hour, minute, 0, 0);
      
      const exists = calendarEvents.some(
        e => e.type === 'blog' && 
        e.dueDate.getMonth() === eventDate.getMonth() &&
        e.dueDate.getFullYear() === eventDate.getFullYear()
      );
      
      if (!exists && eventDate > now) {
        createCalendarEvent(
          'blog',
          eventDate,
          'Monthly Blog Post',
          `Blog post due on day ${dayOfMonth} at ${time} (${TIMEZONE})`
        );
      }
    }
  }

  // Generate quarterly case study events
  if (currentSchedule.caseStudies.enabled) {
    const { months, dayOfMonth, time } = currentSchedule.caseStudies;
    const [hour, minute] = time.split(':').map(Number);
    const currentMonth = now.getMonth() + 1;
    
    months.forEach(month => {
      const eventDate = new Date(now.getFullYear(), month - 1, dayOfMonth, hour, minute, 0, 0);
      
      // If the date has passed this year, schedule for next year
      if (eventDate < now) {
        eventDate.setFullYear(eventDate.getFullYear() + 1);
      }
      
      const exists = calendarEvents.some(
        e => e.type === 'case-study' && 
        e.dueDate.getMonth() === eventDate.getMonth() &&
        e.dueDate.getFullYear() === eventDate.getFullYear()
      );
      
      if (!exists) {
        createCalendarEvent(
          'case-study',
          eventDate,
          'Quarterly Case Study',
          `Case study due on ${eventDate.toLocaleDateString()} at ${time} (${TIMEZONE})`
        );
      }
    });
  }

  // Generate weekly client contact events
  if (currentSchedule.clientContact.enabled) {
    const { dayOfWeek, time } = currentSchedule.clientContact;
    const [hour, minute] = time.split(':').map(Number);
    const dayMap: Record<string, number> = {
      'Sunday': 0, 'Monday': 1, 'Tuesday': 2, 'Wednesday': 3,
      'Thursday': 4, 'Friday': 5, 'Saturday': 6
    };
    const targetDay = dayMap[dayOfWeek];
    
    for (let week = 0; week < 5; week++) {
      const eventDate = new Date(now);
      const daysUntilTarget = (targetDay - eventDate.getDay() + 7) % 7;
      eventDate.setDate(eventDate.getDate() + daysUntilTarget + (week * 7));
      eventDate.setHours(hour, minute, 0, 0);
      
      const exists = calendarEvents.some(
        e => e.type === 'client-contact' && 
        e.dueDate.toDateString() === eventDate.toDateString()
      );
      
      if (!exists && eventDate > now) {
        createCalendarEvent(
          'client-contact',
          eventDate,
          'Weekly Client Check-in',
          `Client outreach scheduled for ${dayOfWeek} at ${time} (${TIMEZONE})`
        );
      }
    }
  }

  console.log(`Generated ${calendarEvents.length} calendar events for the next 30 days`);
}

// Generate content draft
export async function generateContentDraft(type: string): Promise<any> {
  switch (type) {
    case 'linkedin':
      // Use existing LinkedIn post generator
      const blogPosts = await storage.getBlogPosts();
      if (blogPosts.length > 0) {
        const randomPost = blogPosts[Math.floor(Math.random() * blogPosts.length)];
        return generateLinkedInPost({
          title: randomPost.title,
          summary: randomPost.excerpt,
          keyPoints: [randomPost.excerpt],
          images: [],
          tags: randomPost.tags || []
        });
      }
      return {
        content: "🚀 Exciting news from AirFresh Marketing!\n\nWe're thrilled to share our latest insights on experiential marketing trends for 2025.\n\nKey takeaways:\n✅ Immersive brand experiences drive 3x engagement\n✅ Data-driven activation strategies\n✅ Sustainable event production\n\n#ExperientialMarketing #BrandActivation #MarketingTrends #AirFreshMarketing",
        hashtags: ['#ExperientialMarketing', '#BrandActivation', '#MarketingTrends', '#AirFreshMarketing'],
        bestTime: '9:00 AM - 12:00 PM'
      };

    case 'blog':
      return {
        title: 'The Future of Experiential Marketing: Trends to Watch in 2025',
        excerpt: 'Discover the emerging trends shaping experiential marketing and how brands can create memorable, impactful experiences.',
        outline: [
          'Introduction: The Evolution of Brand Experiences',
          'Trend 1: Hybrid Events and Digital Integration',
          'Trend 2: Sustainability in Event Production',
          'Trend 3: Data-Driven Personalization',
          'Trend 4: Immersive Technologies (AR/VR)',
          'Case Study: Successful Brand Activation',
          'Conclusion: Preparing for the Future'
        ],
        keywords: ['experiential marketing', 'brand activation', 'event production', 'marketing trends 2025'],
        targetLength: '1500-2000 words'
      };

    case 'case-study':
      return {
        title: 'Brand Activation Success Story: [Client Name]',
        template: {
          client: '[Client Name]',
          industry: '[Industry]',
          challenge: 'The client needed to increase brand awareness and engagement among their target demographic...',
          solution: 'AirFresh Marketing developed a multi-touchpoint experiential campaign...',
          execution: [
            'Phase 1: Strategy and Planning',
            'Phase 2: Creative Development',
            'Phase 3: Production and Setup',
            'Phase 4: Activation and Engagement',
            'Phase 5: Measurement and Analysis'
          ],
          results: {
            engagement: '+200% increase in social media engagement',
            reach: '500,000+ impressions',
            leads: '2,500+ qualified leads generated',
            roi: '350% return on investment'
          },
          testimonial: '"AirFresh Marketing exceeded our expectations..."'
        }
      };

    case 'client-contact':
      return {
        emailTemplate: {
          subject: 'Checking In - How Can We Support Your Upcoming Projects?',
          greeting: 'Hi [Client Name],',
          body: [
            'I hope this message finds you well!',
            'I wanted to reach out to see how things are going with your recent campaign and if there\'s anything we can help with for your upcoming projects.',
            'We have some exciting new capabilities and case studies I\'d love to share with you when you have a moment.',
            'Would you be available for a quick call next week to discuss your Q2 marketing initiatives?'
          ],
          closing: 'Looking forward to connecting!',
          signature: 'Best regards,\n[Your Name]\nAirFresh Marketing'
        },
        followUpTips: [
          'Reference recent campaign success',
          'Share relevant industry insights',
          'Offer value-added services',
          'Schedule quarterly business review'
        ]
      };

    default:
      throw new Error(`Unknown content type: ${type}`);
  }
}

// Generate calendar QR code
export async function generateCalendarQRCode(): Promise<string> {
  const calendarUrl = `${process.env.BASE_URL || 'http://localhost:5000'}/content-calendar`;
  try {
    const qrCode = await qrcode.toDataURL(calendarUrl, {
      width: 300,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#FFFFFF'
      }
    });
    return qrCode;
  } catch (error) {
    console.error('Error generating QR code:', error);
    throw error;
  }
}

// Simulated Google Calendar integration
export function generateGoogleCalendarLink(event: CalendarEvent): string {
  const startDate = event.dueDate.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  const endDate = new Date(event.dueDate.getTime() + 60 * 60 * 1000).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    dates: `${startDate}/${endDate}`,
    details: event.description,
    location: 'AirFresh Marketing Office',
    sf: 'true',
    output: 'xml'
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

// Create ICS file content for calendar export
export function generateICSFile(events: CalendarEvent[]): string {
  const icsEvents = events.map(event => {
    const startDate = event.dueDate.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
    const endDate = new Date(event.dueDate.getTime() + 60 * 60 * 1000).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
    
    return `BEGIN:VEVENT
UID:${event.id}@airfreshmarketing.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}Z
DTSTART:${startDate}Z
DTEND:${endDate}Z
SUMMARY:${event.title}
DESCRIPTION:${event.description}
STATUS:CONFIRMED
END:VEVENT`;
  }).join('\n');

  return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//AirFresh Marketing//Content Calendar//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
${icsEvents}
END:VCALENDAR`;
}