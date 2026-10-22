import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Ordryth Privacy Policy: We operate on strict local-first data principles, zero surveillance telemetry, and absolute user sovereignty over generative assets.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Ordryth",
    description:
      "Privacy commitments and sovereign data architecture by Ordryth Private Limited.",
    url: "https://ordryth.com/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
