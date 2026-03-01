'use client';

import Script from 'next/script';

// Google Analytics 4 Configuration
const GA_MEASUREMENT_ID = 'G-4H5YW90R4R'; // Air Fresh Marketing GA4 Property

// Google Ads Configuration - NEEDS CONVERSION ID FROM JOEY
// Account: 138-985-8224
// Format: AW-XXXXXXXXX
const GOOGLE_ADS_ID = 'AW-CONVERSION_ID'; // TODO: Replace with actual Google Ads conversion ID

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
      {/* Google Analytics - loads when browser is idle (lowest priority) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure'
          });
          // Google Ads - uncomment when conversion ID is added
          // gtag('config', '${GOOGLE_ADS_ID}');
        `}
      </Script>
      
      {/* Ahrefs Analytics - loads when browser is idle (lowest priority) */}
      <Script
        src="https://analytics.ahrefs.com/analytics.js"
        data-key="s5rfropseUKWtzsvv14fyg"
        strategy="lazyOnload"
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

// Track form submissions - including Google Ads conversion
export const trackFormSubmission = (formName: string) => {
  trackEvent('form_submit', 'engagement', formName);
  
  // Google Ads conversion tracking
  // TODO: Replace CONVERSION_LABEL with actual label from Google Ads
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL', // TODO: Update with real values
    });
  }
};

// Track lead generation (for Google Ads optimization)
export const trackLeadGeneration = (leadType: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    // GA4 event
    window.gtag('event', 'generate_lead', {
      currency: 'USD',
      value: value || 100,
      lead_type: leadType,
    });
    
    // Google Ads conversion - TODO: Update with real conversion ID/label
    window.gtag('event', 'conversion', {
      'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',
      'value': value || 100,
      'currency': 'USD',
    });
  }
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
