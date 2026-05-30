import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'W9 Information',
  description: 'W9 tax information for Air Fresh Marketing. EIN and business details for vendor setup.',
  robots: { index: false, follow: false },
  openGraph: {
    type: 'website',
    title: 'W9 Information | Air Fresh Marketing',
    description: 'W9 tax information for Air Fresh Marketing.',
    url: 'https://www.airfreshmarketing.com/legal/w9',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/legal/w9',
  },
};

export default function W9Page() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">W9 Information</h1>
        <p className="text-gray-600 mb-8">Tax identification details for vendor setup and 1099 reporting</p>

        <div className="bg-gray-50 rounded-xl border border-gray-200 p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Business Information</h2>

          <div className="space-y-4">
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600 font-medium">Legal Business Name</span>
              <span className="text-gray-900 font-semibold">Air Fresh Marketing, LLC</span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600 font-medium">Federal Tax ID (EIN)</span>
              <span className="text-gray-900 font-mono font-semibold">33-2579482</span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600 font-medium">Entity Type</span>
              <span className="text-gray-900 font-semibold">LLC</span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-gray-600 font-medium">Address</span>
              <span className="text-gray-900 font-semibold text-right">
                1580 N. Logan St., Suite 660<br />
                Denver, CO 80203
              </span>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
          <p className="text-amber-800 text-sm">
            <strong>Need a signed W9?</strong> Download the completed W9 below or contact us at{' '}
            <a href="mailto:accounting@airfreshmarketing.com" className="underline">
              accounting@airfreshmarketing.com
            </a>.
          </p>
        </div>

        <div className="text-center mb-8">
          <a
            href="/AirFresh-W9.pdf"
            download="AirFresh-W9.pdf"
            className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            ⬇ Download W9 (PDF)
          </a>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            For payment and wire transfer information, see our{' '}
            <a href="/legal/ach" className="text-cyan-600 hover:underline">ACH</a> or{' '}
            <a href="/legal/wire" className="text-cyan-600 hover:underline">Wire Transfer</a> pages.
          </p>
        </div>
      </div>
    </div>
  );
}
