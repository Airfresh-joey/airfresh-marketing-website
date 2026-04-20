import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Retail Activations & In-Store Marketing | Product Demonstrations',
  description: 'Retail activations and in-store marketing that drive sales at point of purchase. Professional product demonstrations, sampling, and brand ambassador programs in 50+ cities.',
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/services/retail-activations',
  },
}

export default function RetailActivationsLayout({ children }: { children: React.ReactNode }) {
  return children
}
