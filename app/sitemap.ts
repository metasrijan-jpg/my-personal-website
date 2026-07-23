import type { MetadataRoute } from "next";
import { services } from "@/lib/data";
import { siteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/blog", "/contact"].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date()
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: new Date()
  }));

  return [...routes, ...serviceRoutes];
}
