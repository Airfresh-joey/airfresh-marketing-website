import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Luxury Brand Experiential Marketing | VIP Events & Activations',
  description: 'Elevate your luxury brand with exclusive experiential marketing, high-end brand activations, and VIP event experiences. Premium brand representation nationwide.',
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/services/luxury-brand-marketing',
  },
}

export default function LuxuryBrandMarketingLayout({ children }: { children: React.ReactNode }) {
  return children
}
