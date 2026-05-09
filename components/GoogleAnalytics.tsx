'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { GA_MEASUREMENT_ID, GOOGLE_ADS_ID } from '@/lib/analytics';
import { captureLeadAttribution } from '@/lib/lead-attribution';

export default function GoogleAnalytics() {
  useEffect(() => {
    captureLeadAttribution();
  }, []);

  // Always render - Vercel handles environment detection
  // The NODE_ENV check was causing issues with client component hydration
  return (
    <>
      {/* Google Analytics - loads after page interactive for proper tracking */}
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
          // Google Ads tracking
          gtag('config', '${GOOGLE_ADS_ID}');
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
