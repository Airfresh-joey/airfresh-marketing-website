import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wire Transfer Information | Air Fresh Marketing',
  description: 'Wire transfer payment information for Air Fresh Marketing. Bank routing and account details for domestic wire transfers.',
  openGraph: {
    type: 'website',
    title: 'Wire Transfer Information | Air Fresh Marketing',
    description: 'Wire transfer payment information for Air Fresh Marketing.',
    url: 'https://www.airfreshmarketing.com/legal/wire',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/legal/wire',
  },
};

export default function WirePage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Wire Transfer Information</h1>
        <p className="text-gray-600 mb-8">Bank details for domestic wire transfers</p>

        <div className="bg-gray-50 rounded-xl border border-gray-200 p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Wire Transfer Details</h2>

          <div className="space-y-4">
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600 font-medium">Bank Name</span>
              <span className="text-gray-900 font-semibold">JPMorgan Chase Bank, N.A.</span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600 font-medium">Beneficiary Name</span>
              <span className="text-gray-900 font-semibold">Humming Agent Ai, LLC</span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600 font-medium">Account Number</span>
              <span className="text-gray-900 font-mono font-semibold">700792891</span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600 font-medium">Wire Routing Number (ABA)</span>
              <span className="text-gray-900 font-mono font-semibold">021000021</span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600 font-medium">Bank Address</span>
              <span className="text-gray-900 font-semibold text-right">
                4190 Austin Bluffs Pkwy<br />
                Colorado Springs, CO 80918
              </span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-gray-600 font-medium">Beneficiary Address</span>
              <span className="text-gray-900 font-semibold text-right">
                1580 N. Logan St., Suite 660<br />
                Denver, CO 80203
              </span>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
          <p className="text-amber-800 text-sm">
            <strong>Important:</strong> Wire transfer routing number <span className="font-mono">021000021</span> is
            different from the ACH routing number. For ACH/direct deposit payments, please use our{' '}
            <a href="/legal/ach" className="underline">ACH payment details</a>.
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-3">Banking Contact</h3>
          <p className="text-gray-700 text-sm">
            <strong>Joshua Snyder</strong><br />
            Senior Business Relationship Manager, Chase Business Banking<br />
            Phone: (720) 323-1157<br />
            Email: joshua.s.snyder@chase.com
          </p>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            For tax information, see our{' '}
            <a href="/legal/w9" className="text-cyan-600 hover:underline">W9 page</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
