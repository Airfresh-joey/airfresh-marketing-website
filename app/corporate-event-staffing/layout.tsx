import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Event Staffing | Professional Event Staff",
  description:
    "Corporate event staffing for conferences, galas, product launches, and corporate activations. Trained, professional staff in 50+ cities nationwide.",
  alternates: {
    canonical: "https://www.airfreshmarketing.com/corporate-event-staffing",
  },
};

export default function CorporateEventStaffingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
