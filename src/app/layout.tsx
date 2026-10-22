import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const siteUrl = "https://ordryth.com";

export const viewport: Viewport = {
  themeColor: "#0c0d0e",
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ordryth — Independent Technology, Software & Visual AI Systems",
    template: "%s | Ordryth",
  },
  description:
    "Ordryth Private Limited (India) is an independent technology and software company architecting sovereign software products, transcendent interfaces, and timeless visual systems including Imagica Desktop AI Studio.",
  applicationName: "Ordryth",
  authors: [{ name: "Ordryth Private Limited", url: siteUrl }],
  creator: "Ordryth Private Limited",
  publisher: "Ordryth Private Limited",
  keywords: [
    "Ordryth",
    "Ordryth Private Limited",
    "Ordryth India",
    "Imagica",
    "Imagica Desktop",
    "Imagica Workspace",
    "Visual AI Systems",
    "Generative AI Studio",
    "Local AI Desktop",
    "Sovereign Software",
    "Transcendent Interfaces",
    "High-Performance Computing",
    "Diffusion Models",
    "Design Engineering India",
  ],
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ordryth — Independent Technology & Visual AI Systems",
    description:
      "Ordryth Private Limited (India) architects sovereign software products, transcendent interfaces, and timeless visual systems.",
    url: siteUrl,
    siteName: "Ordryth",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Ordryth Monogram Emblem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ordryth — Independent Technology & Visual AI Systems",
    description:
      "Ordryth Private Limited (India) architects sovereign software products, transcendent interfaces, and timeless visual systems.",
    images: ["/icon.png"],
    creator: "@ordryth",
    site: "@ordryth",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  other: {
    // Microsoft Edge & Bing optimization tags
    "msapplication-TileColor": "#0c0d0e",
    "msapplication-TileImage": "/icon.png",
    "msapplication-config": "none",
    // Brave & Modern Browser Search Signals
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Ordryth",
    "mobile-web-app-capable": "yes",
    "rating": "general",
    "referrer": "origin-when-cross-origin",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      "name": "Ordryth",
      "legalName": "Ordryth Private Limited",
      "url": siteUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/icon.png`,
        "width": 512,
        "height": 512,
      },
      "description":
        "Ordryth Private Limited (India) is an independent technology and software company architecting sovereign software products, transcendent interfaces, and timeless visual systems.",
      "sameAs": [siteUrl],
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      "url": siteUrl,
      "name": "Ordryth",
      "description": "Independent Technology, Software & Visual AI Systems",
      "publisher": {
        "@id": `${siteUrl}/#organization`,
      },
      "inLanguage": "en-US",
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${siteUrl}/research?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#imagica`,
      "name": "Imagica Desktop",
      "operatingSystem": "Windows 10+, macOS 12+, Linux",
      "applicationCategory": "DesignApplication",
      "description":
        "Native desktop generative studio combining multi-modal diffusion pipelines, local model execution, and non-destructive image synthesis.",
      "url": "https://imagica.co.in/desktop",
      "author": {
        "@id": `${siteUrl}/#organization`,
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="theme-light" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
