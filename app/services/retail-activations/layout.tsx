import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Retail Activations & In-Store Marketing | Product Demonstrations',
  description: 'Transform your retail customer experience with professional in-store activations, product demonstrations, and brand ambassador programs nationwide.',
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/services/retail-activations',
  },
}

export default function RetailActivationsLayout({ children }: { children: React.ReactNode }) {
  return children
}
