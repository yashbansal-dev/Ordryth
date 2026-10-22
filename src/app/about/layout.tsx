import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company & Vision",
  description:
    "Learn about Ordryth Private Limited (India) — an independent technology and software engineering laboratory architecting sovereign computing systems, transcendent interfaces, and practical visual AI applications.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Company & Vision | Ordryth",
    description:
      "Independent technology and software company architecting sovereign software products, transcendent interfaces, and timeless visual systems.",
    url: "https://ordryth.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
