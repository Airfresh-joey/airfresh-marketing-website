export const GA_MEASUREMENT_ID = 'G-4H5YW90R4R';
export const GOOGLE_ADS_ID = 'AW-969773658';
export const GOOGLE_ADS_LABEL = 'N7djCI-U4pAcENqkts4D';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
};

export const trackFormSubmission = (formName: string) => {
  trackEvent('form_submit', 'engagement', formName);

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_LABEL}`,
    });
  }
};

export const trackLeadGeneration = (leadType: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'generate_lead', {
      currency: 'USD',
      value: value || 100,
      lead_type: leadType,
    });

    window.gtag('event', 'conversion', {
      send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_LABEL}`,
      value: value || 100,
      currency: 'USD',
    });
  }
};

export const trackCTAClick = (buttonName: string, location: string) => {
  trackEvent('cta_click', 'engagement', `${buttonName} - ${location}`);
};

export const trackCaseStudyView = (caseStudyTitle: string) => {
  trackEvent('case_study_view', 'content', caseStudyTitle);
};

export const trackServicePageView = (serviceName: string) => {
  trackEvent('service_page_view', 'content', serviceName);
};

export const trackPhoneClick = (location = 'site') => {
  trackEvent('phone_click', 'contact', location);
};

export const trackEmailClick = (location = 'site') => {
  trackEvent('email_click', 'contact', location);
};
