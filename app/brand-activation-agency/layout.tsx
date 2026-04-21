import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Activation Agency | Experiential Brand Activations",
  description:
    "Brand activation agency creating immersive pop-ups, in-store activations, mobile tours, and experiential campaigns. Professional teams in 50+ cities.",
  alternates: {
    canonical: "https://www.airfreshmarketing.com/brand-activation-agency",
  },
};

export default function BrandActivationAgencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
