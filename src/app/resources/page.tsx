import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { PREVIEW_COOKIE, isPreviewUnlocked } from '@/lib/preview'
import ComingSoon from './ComingSoon'
import ResourcesView from './ResourcesView'
import './Resources.css'

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Free study material for New Sagarika students — past papers, tutorial videos and guides for the written examination and the practical trial. Coming soon.',
  alternates: { canonical: '/resources' },
  // The page is still a placeholder: keep it out of search results until the
  // real content lands. Drop this (and add the route to src/app/sitemap.ts)
  // on launch day.
  robots: { index: false, follow: true },
}

export default async function ResourcesPage() {
  const store = await cookies()
  const unlocked = isPreviewUnlocked(store.get(PREVIEW_COOKIE)?.value)

  return unlocked ? <ResourcesView /> : <ComingSoon />
}
