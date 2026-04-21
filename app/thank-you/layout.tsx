import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | AirFresh Marketing",
  description: "Thank you for contacting AirFresh Marketing. Our experiential marketing team will review your request and respond within 24 hours with a custom proposal.",
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
