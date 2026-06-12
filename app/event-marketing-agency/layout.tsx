import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Marketing Agency | Full-Service Event Marketing",
  description:
    "Event marketing agency delivering brand activations, trade shows, product launches, and experiential campaigns. Trained staff in 50+ cities nationwide.",
  keywords: "event marketing agency, event marketing company, event marketing services, brand activation events, experiential event marketing, trade show marketing agency",
  alternates: {
    canonical: "https://www.airfreshmarketing.com/event-marketing-agency",
  },
  openGraph: {
    title: "Event Marketing Agency | Full-Service Event Marketing",
    description:
      "Event marketing agency delivering brand activations, trade shows, product launches, and experiential campaigns. Trained staff in 50+ cities nationwide.",
    url: "https://www.airfreshmarketing.com/event-marketing-agency",
    siteName: "Air Fresh Marketing",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Event Marketing Agency - Air Fresh Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AirFreshMktg",
    creator: "@AirFreshMktg",
    title: "Event Marketing Agency | Full-Service Event Marketing",
    description:
      "Event marketing agency delivering brand activations, trade shows, product launches, and experiential campaigns. Trained staff in 50+ US cities.",
    images: ["/images/og-image.jpg"],
  },
};

export default function EventMarketingAgencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
