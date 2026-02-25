'use client'

// Simplified providers - react-query removed for performance
// (ContactForm now uses plain fetch, Notion components not used in main app)
export default function Providers({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
