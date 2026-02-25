'use client';

import Script from 'next/script';

// Google Analytics 4 Configuration
const GA_MEASUREMENT_ID = 'G-4H5YW90R4R'; // Air Fresh Marketing GA4 Property

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export default function GoogleAnalytics() {
  // Only render in production
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <>
      {/* Google Analytics - loads after page is interactive */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure'
          });
        `}
      </Script>
      
      {/* Ahrefs Analytics - loads after page is interactive */}
      <Script
        src="https://analytics.ahrefs.com/analytics.js"
        data-key="s5rfropseUKWtzsvv14fyg"
        strategy="afterInteractive"
      />
    </>
  );
}

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  trackEvent('form_submit', 'engagement', formName);
};

// Track CTA clicks
export const trackCTAClick = (buttonName: string, location: string) => {
  trackEvent('cta_click', 'engagement', `${buttonName} - ${location}`);
};

// Track case study views
export const trackCaseStudyView = (caseStudyTitle: string) => {
  trackEvent('case_study_view', 'content', caseStudyTitle);
};

// Track service page views
export const trackServicePageView = (serviceName: string) => {
  trackEvent('service_page_view', 'content', serviceName);
};

// Track phone number clicks
export const trackPhoneClick = () => {
  trackEvent('phone_click', 'contact', 'header_phone');
};

// Track email clicks
export const trackEmailClick = () => {
  trackEvent('email_click', 'contact', 'contact_email');
};
