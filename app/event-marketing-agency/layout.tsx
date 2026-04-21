import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Marketing Agency | Full-Service Event Marketing",
  description:
    "Event marketing agency delivering brand activations, trade shows, product launches, and experiential campaigns. Trained staff in 50+ cities nationwide.",
  alternates: {
    canonical: "https://www.airfreshmarketing.com/event-marketing-agency",
  },
};

export default function EventMarketingAgencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
