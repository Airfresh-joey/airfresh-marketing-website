import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | AirFresh Marketing",
  description: "Thank you for contacting AirFresh Marketing. Our team will respond within 24 hours.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
