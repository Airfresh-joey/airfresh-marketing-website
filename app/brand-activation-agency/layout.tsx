import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Activation Agency | Pop-Ups, Sampling & Street Teams",
  description:
    "Brand activation agency for pop-ups, sampling campaigns, mobile tours, in-store activations, and street teams. Nationwide staff, lead capture, and live reporting.",
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
