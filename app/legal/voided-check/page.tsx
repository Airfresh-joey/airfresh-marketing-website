import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Voided Check Information | Air Fresh Marketing',
  description: 'Voided check and bank verification information for Air Fresh Marketing vendor setup.',
  robots: { index: false, follow: false },
  openGraph: {
    type: 'website',
    title: 'Voided Check Information | Air Fresh Marketing',
    description: 'Voided check and bank verification information for Air Fresh Marketing.',
    url: 'https://www.airfreshmarketing.com/legal/voided-check',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/legal/voided-check',
  },
};

export default function VoidedCheckPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Voided Check Information</h1>
        <p className="text-gray-600 mb-8">Bank verification details for vendor setup</p>

        <div className="bg-gray-50 rounded-xl border border-gray-200 p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Bank Account Information</h2>
          <p className="text-gray-600 mb-6">
            The following information matches what would appear on a voided check:
          </p>

          <div className="space-y-4">
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600 font-medium">Bank Name</span>
              <span className="text-gray-900 font-semibold">JPMorgan Chase Bank, N.A.</span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600 font-medium">Account Holder</span>
              <span className="text-gray-900 font-semibold">Humming Agent Ai, LLC</span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600 font-medium">Account Number</span>
              <span className="text-gray-900 font-mono font-semibold">700792891</span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600 font-medium">ACH Routing Number</span>
              <span className="text-gray-900 font-mono font-semibold">102001017</span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-gray-600 font-medium">Account Address</span>
              <span className="text-gray-900 font-semibold text-right">
                1580 N. Logan St., Suite 660<br />
                Denver, CO 80203
              </span>
            </div>
          </div>
        </div>

        <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6 mb-8">
          <p className="text-cyan-800 text-sm">
            <strong>Need an actual voided check image?</strong> Contact us at{' '}
            <a href="mailto:accounting@airfreshmarketing.com" className="underline">
              accounting@airfreshmarketing.com
            </a>{' '}
            and we&apos;ll send you a scanned copy.
          </p>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            For complete payment options, see our{' '}
            <a href="/legal/ach" className="text-cyan-600 hover:underline">ACH</a> or{' '}
            <a href="/legal/wire" className="text-cyan-600 hover:underline">Wire Transfer</a> pages.
            For tax information, see our{' '}
            <a href="/legal/w9" className="text-cyan-600 hover:underline">W9 page</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
