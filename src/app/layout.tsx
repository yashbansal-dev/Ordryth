import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const viewport: Viewport = {
  themeColor: "#F5F1E8",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "ORDRYTH — Intelligence, thoughtfully built.",
    template: "%s | ORDRYTH",
  },
  description:
    "ORDRYTH is an independent technology company exploring and building intelligent systems that expand what people can create, discover, and accomplish.",
  keywords: [
    "ORDRYTH",
    "Independent AI research",
    "intelligent systems",
    "creative intelligence",
    "Imagica",
    "efficient AI engineering",
    "human-centered technology",
  ],
  authors: [{ name: "ORDRYTH" }],
  creator: "ORDRYTH",
  metadataBase: new URL("https://ordryth.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ordryth.com",
    siteName: "ORDRYTH",
    title: "ORDRYTH — Intelligence, thoughtfully built.",
    description:
      "ORDRYTH is an independent technology company exploring and building intelligent systems that expand what people can create, discover, and accomplish.",
    images: [
      {
        url: "/forma-hero-exact.png",
        width: 1200,
        height: 630,
        alt: "ORDRYTH — Intelligence, thoughtfully built",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ORDRYTH — Intelligence, thoughtfully built.",
    description:
      "ORDRYTH is an independent technology company exploring and building intelligent systems that expand what people can create, discover, and accomplish.",
    images: ["/forma-hero-exact.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/logo-transparent.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
