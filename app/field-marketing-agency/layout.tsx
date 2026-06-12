import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Field Marketing Agency | Nationwide Field Teams",
  description:
    "Field marketing agency delivering product demos, sampling campaigns, retail audits, mystery shopping, street teams, and direct sales programs in 200+ cities nationwide.",
  alternates: {
    canonical: "https://www.airfreshmarketing.com/field-marketing-agency",
  },
  openGraph: {
    title: "Field Marketing Agency | Nationwide Field Teams",
    description:
      "Field marketing agency delivering product demos, sampling campaigns, retail audits, mystery shopping, street teams, and direct sales programs in 200+ cities nationwide.",
    url: "https://www.airfreshmarketing.com/field-marketing-agency",
    siteName: "Air Fresh Marketing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Field Marketing Agency - Air Fresh Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AirFreshMktg",
    creator: "@AirFreshMktg",
    title: "Field Marketing Agency | Nationwide Field Teams",
    description:
      "Field marketing agency delivering product demos, sampling campaigns, retail audits, mystery shopping, street teams, and direct sales programs in 200+ cities nationwide.",
    images: ["/images/og-image.jpg"],
  },
};

export default function FieldMarketingAgencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
