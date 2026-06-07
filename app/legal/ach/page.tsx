import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ACH Payment Information',
  description: 'ACH and direct deposit payment information for Air Fresh Marketing. Bank routing and account details for electronic payments.',
  robots: { index: false, follow: false },
  openGraph: {
    type: 'website',
    title: 'ACH Payment Information',
    description: 'ACH and direct deposit payment information for Air Fresh Marketing.',
    url: 'https://www.airfreshmarketing.com/legal/ach',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/legal/ach',
  },
};

export default function ACHPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">ACH Payment Information</h1>
        <p className="text-gray-600 mb-8">Bank details for ACH transfers and direct deposits</p>

        <div className="bg-gray-50 rounded-xl border border-gray-200 p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Bank Account Details</h2>

          <div className="space-y-4">
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600 font-medium">Bank Name</span>
              <span className="text-gray-900 font-semibold">JPMorgan Chase Bank, N.A.</span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600 font-medium">Account Name</span>
              <span className="text-gray-900 font-semibold">Air Fresh Marketing, LLC</span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600 font-medium">Account Number</span>
              <span className="text-gray-900 font-mono font-semibold">409103236</span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600 font-medium">ACH Routing Number</span>
              <span className="text-gray-900 font-mono font-semibold">102001017</span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-gray-600 font-medium">Account Type</span>
              <span className="text-gray-900 font-semibold">Business Checking</span>
            </div>
          </div>
        </div>

        <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6 mb-8">
          <p className="text-cyan-800 text-sm">
            <strong>Important:</strong> Use routing number <span className="font-mono">102001017</span> for
            ACH transfers and direct deposits. For wire transfers, please use our{' '}
            <a href="/legal/wire" className="underline">wire transfer routing number</a>.
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
