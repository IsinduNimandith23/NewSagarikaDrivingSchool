import type { Metadata } from 'next'
import CoursesView from './CoursesView'
import './Courses.css'

export const metadata: Metadata = {
  title: 'Courses',
  description:
    'Driving courses for every driver — Full Time, Refresher, VIP, Off Peak, Customized and Special courses covering every vehicle class from motorcycle to passenger bus. Available in English and Sinhala.',
  alternates: { canonical: '/courses' },
}

export default function CoursesPage() {
  return <CoursesView />
}
