import { MetadataRoute } from "next";

export default async function sitemap():Promise<MetadataRoute.Sitemap> {

  return [
    {
      url: `https://instaprotek.com/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: "https://instaprotek.com/enterprise",
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: "https://instaprotek.com/retail",
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: "https://instaprotek.com/technology-overview",
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: "https://instaprotek.com/support",
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: "https://instaprotek.com/contact",
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: "https://instaprotek.com/terms",
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: "https://instaprotek.com/privacy",
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}