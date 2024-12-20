import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: ['/'],
      },
      {
        userAgent: ['Applebot', 'Bingbot'],
        allow: ['/'],
      },
    ],
    sitemap: 'https://instaprotek.com/sitemap.xml',
  }
}