import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand System & Visual Guidelines",
  description:
    "Official brand assets, typography specifications, color tokens, and emblems of Ordryth and Imagica Workspace.",
  alternates: {
    canonical: "/brand",
  },
  openGraph: {
    title: "Brand System & Visual Guidelines | Ordryth",
    description:
      "Explore the design engineering tokens, warm stone aesthetic, and visual system guidelines of Ordryth.",
    url: "https://ordryth.com/brand",
  },
};

export default function BrandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
