import { useEffect } from 'react';

// Google Analytics 4 Configuration
const GA_MEASUREMENT_ID = 'G-4H5YW90R4R';
const GOOGLE_ADS_ID = 'AW-969773658';
const CONVERSION_LABEL = '6QBGCIm0pYIcENqkts4D';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export default function GoogleAnalytics() {
  useEffect(() => {
    // Only load in production
    if (import.meta.env.MODE !== 'production') {
      console.log('Google Analytics disabled in development');
      return;
    }

    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    // Initialize Google Analytics + Google Ads
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        page_path: window.location.pathname,
        anonymize_ip: true,
        cookie_flags: 'SameSite=None;Secure'
      });
      gtag('config', '${GOOGLE_ADS_ID}');
    `;
    document.head.appendChild(script2);

    // Track page views on route changes
    const handleRouteChange = () => {
      if (window.gtag) {
        window.gtag('config', GA_MEASUREMENT_ID, {
          page_path: window.location.pathname,
        });
      }
    };

    // Listen for popstate events (back/forward navigation)
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return null;
}

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (window.gtag) {
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

// Track Google Ads conversions (form submissions)
export const trackGoogleAdsConversion = () => {
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': `${GOOGLE_ADS_ID}/${CONVERSION_LABEL}`,
      'value': 1.0,
      'currency': 'USD'
    });
  }
};