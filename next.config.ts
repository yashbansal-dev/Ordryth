import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    cpus: 2,
  },
  async redirects() {
    return [
      // Company & Product pages
      { source: "/mission", destination: "/", permanent: false },
      { source: "/approach", destination: "/", permanent: false },
      { source: "/leadership", destination: "/", permanent: false },
      { source: "/technology", destination: "/", permanent: false },
      { source: "/products", destination: "/", permanent: false },
      { source: "/products/:path*", destination: "/", permanent: false },
      { source: "/download", destination: "/", permanent: false },
      { source: "/enterprise", destination: "/", permanent: false },
      { source: "/roadmap", destination: "/", permanent: false },
      { source: "/news", destination: "/", permanent: false },
      { source: "/press", destination: "/", permanent: false },
      { source: "/partners", destination: "/", permanent: false },
      { source: "/investors", destination: "/", permanent: false },

      // Research, Engineering & Content pages
      { source: "/research/:path+", destination: "/", permanent: false },
      { source: "/blog", destination: "/", permanent: false },
      { source: "/blog/:path*", destination: "/", permanent: false },
      { source: "/open-source", destination: "/", permanent: false },
      { source: "/developers", destination: "/", permanent: false },
      { source: "/docs", destination: "/", permanent: false },
      { source: "/docs/:path*", destination: "/", permanent: false },
      { source: "/security", destination: "/", permanent: false },
      { source: "/responsible-ai", destination: "/", permanent: false },

      // Legal pages
      { source: "/legal/:path*", destination: "/", permanent: false },
      { source: "/accessibility", destination: "/", permanent: false },

      // Careers pages
      { source: "/careers", destination: "/", permanent: false },
      { source: "/careers/:path*", destination: "/", permanent: false },

      // Utility pages
      { source: "/search", destination: "/", permanent: false },
      { source: "/sitemap", destination: "/", permanent: false },
      { source: "/status", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
