import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Sampling Agency | Retail, Event & Street Sampling",
  description:
    "Product sampling agency for retail demos, food and beverage sampling, event sampling, street teams, and multi-city CPG programs. GPS-verified staff and reporting.",
  alternates: {
    canonical: "https://www.airfreshmarketing.com/product-sampling-agency",
  },
  openGraph: {
    title: "Product Sampling Agency | Retail, Event & Street Sampling",
    description:
      "Product sampling agency for retail demos, food and beverage sampling, event sampling, street teams, and multi-city CPG programs. GPS-verified staff and reporting.",
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
    title: "Product Sampling Agency | Retail, Event & Street Sampling",
    description:
      "Product sampling agency for retail demos, food and beverage sampling, event sampling, street teams, and multi-city CPG programs.",
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
