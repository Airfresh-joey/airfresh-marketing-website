import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Luxury Brand Experiential Marketing | VIP Events & Activations',
  description: 'Luxury brand experiential marketing with exclusive activations, VIP event experiences, and premium brand representation. White-glove service for high-end brands nationwide.',
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/services/luxury-brand-marketing',
  },
}

export default function LuxuryBrandMarketingLayout({ children }: { children: React.ReactNode }) {
  return children
}
