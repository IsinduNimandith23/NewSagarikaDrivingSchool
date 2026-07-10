import type { Metadata } from 'next'
import GalleryView from '@/views/Gallery'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'A glimpse into New Sagarika Driving School — our classrooms, training vehicles and the proud drivers who started their journey with us.',
  alternates: { canonical: '/gallery' },
}

export default function GalleryPage() {
  return <GalleryView />
}
