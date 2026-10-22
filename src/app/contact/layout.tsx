import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Inquiries",
  description:
    "Get in touch with Ordryth Private Limited (India) for enterprise software inquiries, partnerships, and technical collaboration.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & Inquiries | Ordryth",
    description:
      "Connect with the Ordryth team for technology inquiries, partnership discussions, and corporate communications.",
    url: "https://ordryth.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
