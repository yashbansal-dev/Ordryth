import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ordryth — Color Scheme & Design Tokens",
  description: "Ordryth light color palette and design tokens.",
  icons: {
    icon: "/logo-transparent.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="theme-light">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
