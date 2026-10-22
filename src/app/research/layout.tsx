import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architecture & Systems Engineering",
  description:
    "Explore the engineering foundation of Ordryth: local-first diffusion pipelines, memory-deterministic inference engines, and native desktop systems architecture.",
  alternates: {
    canonical: "/research",
  },
  openGraph: {
    title: "Architecture & Systems Engineering | Ordryth",
    description:
      "Technical specifications, local runtime architectures, and sovereign AI execution models developed by Ordryth Private Limited.",
    url: "https://ordryth.com/research",
  },
};

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
