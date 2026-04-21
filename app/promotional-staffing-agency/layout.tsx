import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Promotional Staffing Agency | Hire Promo Staff",
  description:
    "Promotional staffing agency providing trained brand ambassadors, promo models, and event staff for product launches, sampling, and activations in 50+ cities.",
  alternates: {
    canonical: "https://www.airfreshmarketing.com/promotional-staffing-agency",
  },
};

export default function PromotionalStaffingAgencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
