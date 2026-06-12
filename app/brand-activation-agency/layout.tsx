import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Activation Agency | Pop-Ups, Sampling & Street Teams",
  description:
    "Brand activation agency for pop-ups, sampling campaigns, mobile tours, in-store activations, and street teams. Nationwide staff, lead capture, and live reporting.",
  keywords: "brand activation agency, brand activation company, brand activations, pop-up marketing, experiential brand activation, sampling campaigns, mobile tour marketing",
  alternates: {
    canonical: "https://www.airfreshmarketing.com/brand-activation-agency",
  },
  openGraph: {
    title: "Brand Activation Agency | Pop-Ups, Sampling & Street Teams",
    description:
      "Brand activation agency for pop-ups, sampling campaigns, mobile tours, in-store activations, and street teams. Nationwide staff, lead capture, and live reporting.",
    url: "https://www.airfreshmarketing.com/brand-activation-agency",
    siteName: "Air Fresh Marketing",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brand Activation Agency - Air Fresh Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AirFreshMktg",
    creator: "@AirFreshMktg",
    title: "Brand Activation Agency | Pop-Ups, Sampling & Street Teams",
    description:
      "Brand activation agency for pop-ups, sampling campaigns, mobile tours, in-store activations, and street teams. Nationwide staff in 200+ cities.",
    images: ["/images/og-image.jpg"],
  },
};

export default function BrandActivationAgencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
