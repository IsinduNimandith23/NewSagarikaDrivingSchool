import type { Metadata } from 'next'
import ContactView from '@/views/Contact'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact New Sagarika Driving School — five branches across the Colombo district. Call 0112745183 or book your free trial lesson online.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return <ContactView />
}
