import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.kaziconnect.co.ke'

  const routes = [
    { url: '/',                  priority: 1.0,  changeFrequency: 'weekly'  as const },
    { url: '/how-it-works',      priority: 0.9,  changeFrequency: 'monthly' as const },
    { url: '/services',          priority: 0.9,  changeFrequency: 'monthly' as const },
    { url: '/apply',             priority: 0.95, changeFrequency: 'weekly'  as const },
    { url: '/contact',           priority: 0.8,  changeFrequency: 'monthly' as const },
    { url: '/sitemap',          priority: 0.5,  changeFrequency: 'monthly' as const },
    { url: '/privacy-policy',    priority: 0.4,  changeFrequency: 'yearly'  as const },
    { url: '/terms-of-service',  priority: 0.4,  changeFrequency: 'yearly'  as const },
    { url: '/cookie-policy',     priority: 0.4,  changeFrequency: 'yearly'  as const },
  ]

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${baseUrl}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
