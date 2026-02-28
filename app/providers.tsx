'use client'

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

// Formspree reCAPTCHA site key (this is a public key, safe to commit)
// Using Formspree's default reCAPTCHA site key for their integration
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LcJI-wmAAAAAIRPmF_M4OoPlACKCPmL3dQB-hJe';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
      {children}
    </GoogleReCaptchaProvider>
  );
}
