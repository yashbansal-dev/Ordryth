import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service governing the use of Ordryth websites, desktop applications, APIs, and software engineering services.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Service | Ordryth",
    description:
      "Legal terms and software licensing standards for Ordryth platforms.",
    url: "https://ordryth.com/terms",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
