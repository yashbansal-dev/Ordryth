import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ordryth.com";
  const routes = [
    "",
    "/about",
    "/research",
    "/products",
    "/careers",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const currentDate = new Date().toISOString();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" || route === "/research" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/products" || route === "/research" ? 0.9 : 0.8,
  }));
}
