import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/test-loading/',
        '/_next/',
        '/static/',
      ],
    },
    sitemap: 'https://tamlinh.com/sitemap.xml',
  }
}
