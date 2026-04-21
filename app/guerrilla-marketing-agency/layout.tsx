import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guerrilla Marketing Agency | Unconventional Campaigns",
  description:
    "Guerrilla marketing agency delivering street teams, flash mobs, wild postings, viral stunts, and unconventional campaigns nationwide. 5,000+ brand ambassadors in 200+ cities.",
  alternates: {
    canonical: "https://www.airfreshmarketing.com/guerrilla-marketing-agency",
  },
  openGraph: {
    title: "Guerrilla Marketing Agency | Unconventional Campaigns",
    description:
      "Guerrilla marketing agency delivering street teams, flash mobs, wild postings, viral stunts, and unconventional campaigns nationwide. 5,000+ brand ambassadors in 200+ cities.",
    url: "https://www.airfreshmarketing.com/guerrilla-marketing-agency",
    siteName: "Air Fresh Marketing",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guerrilla Marketing Agency | Unconventional Campaigns",
    description:
      "Guerrilla marketing agency delivering street teams, flash mobs, wild postings, viral stunts, and unconventional campaigns nationwide. 5,000+ brand ambassadors in 200+ cities.",
  },
};

export default function GuerrillaMarketingAgencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
