import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Marketing Tours | Nationwide Tour Management",
  description:
    "Mobile marketing tours planned and executed nationwide. Branded vehicles, sample trucks, pop-up trailers, and mobile showrooms with professional staff in 200+ cities.",
  alternates: {
    canonical: "https://www.airfreshmarketing.com/mobile-marketing-tours",
  },
  openGraph: {
    title: "Mobile Marketing Tours | Nationwide Tour Management",
    description:
      "Mobile marketing tours planned and executed nationwide. Branded vehicles, sample trucks, pop-up trailers, and mobile showrooms with professional staff in 200+ cities.",
    url: "https://www.airfreshmarketing.com/mobile-marketing-tours",
    siteName: "Air Fresh Marketing",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile Marketing Tours - Air Fresh Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AirFreshMktg",
    creator: "@AirFreshMktg",
    title: "Mobile Marketing Tours | Nationwide Tour Management",
    description:
      "Mobile marketing tours planned and executed nationwide. Branded vehicles, sample trucks, pop-up trailers, and mobile showrooms with professional staff in 200+ cities.",
    images: ["/images/og-image.jpg"],
  },
};

export default function MobileMarketingToursLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
