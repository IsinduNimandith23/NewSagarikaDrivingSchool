import type { Metadata } from 'next'
import HomeView from '@/views/Home'

export const metadata: Metadata = {
  title: { absolute: 'New Sagarika Driving School | Driving School in Colombo, Sri Lanka' },
  description:
    'An A grade driving school since 1960 with five branches across Colombo. Learn with certified instructors and brand new dual-pedal vehicles — every vehicle class from motorcycle to passenger bus.',
}

export default function HomePage() {
  return <HomeView />
}
