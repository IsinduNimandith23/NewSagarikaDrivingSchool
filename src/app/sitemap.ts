import type { MetadataRoute } from 'next'

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export default function sitemap(): MetadataRoute.Sitemap {
  // '/resources' is intentionally absent while it's a "Coming Soon"
  // placeholder — add it here (and drop the noindex in its page.tsx) on launch.
  const routes = [
    '',
    '/courses',
    '/gallery',
    '/about',
    '/contact',
    '/return-policy',
    '/privacy-policy',
    '/terms-conditions',
  ]

  return routes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.7,
  }))
}
