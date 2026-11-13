import type { MetadataRoute } from "next";
import { PRODUCTS } from "./catalog";
import { SITE_URL } from "./site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/products`, changeFrequency: "weekly", priority: 0.9 },
    ...PRODUCTS.map((p) => ({ url: `${SITE_URL}/products/${p.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
