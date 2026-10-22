import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ordryth — Independent Technology & Visual Systems",
    short_name: "Ordryth",
    description: "Ordryth Private Limited (India) is an independent technology and software company architecting sovereign software products, transcendent interfaces, and timeless visual systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#0c0d0e",
    theme_color: "#0c0d0e",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
