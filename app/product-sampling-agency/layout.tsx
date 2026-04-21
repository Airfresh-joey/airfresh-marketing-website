import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Sampling Agency | Nationwide Sampling Programs",
  description:
    "Product sampling agency delivering in-store demos, event sampling, street teams, and door-to-door programs nationwide. GPS-verified staff, real-time reporting, $30-55/hr.",
  alternates: {
    canonical: "https://www.airfreshmarketing.com/product-sampling-agency",
  },
  openGraph: {
    title: "Product Sampling Agency | Nationwide Sampling Programs",
    description:
      "Product sampling agency delivering in-store demos, event sampling, street teams, and door-to-door programs nationwide. GPS-verified staff, real-time reporting, $30-55/hr.",
    url: "https://www.airfreshmarketing.com/product-sampling-agency",
    siteName: "AirFresh Marketing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Product Sampling Agency - Air Fresh Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AirFreshMktg",
    creator: "@AirFreshMktg",
    title: "Product Sampling Agency | Nationwide Sampling Programs",
    description:
      "Product sampling agency delivering in-store demos, event sampling, street teams, and door-to-door programs nationwide. GPS-verified staff, real-time reporting.",
    images: ["/images/og-image.jpg"],
  },
};

export default function ProductSamplingAgencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
