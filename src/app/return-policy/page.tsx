import type { Metadata } from 'next'
import LegalPage, { type LegalSection } from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Return & Refund Policy',
  description:
    'Payment and refund terms for courses at New Sagarika Driving School across all of our Colombo district branches.',
}

const sections: LegalSection[] = [
  {
    heading: 'Advance payments are non-refundable',
    body: [
      'Any amount paid as an advance towards training is not refundable. This includes registration fees, course deposits and any part-payments made to reserve a place in a course.',
      'By enrolling and making a payment, you acknowledge and accept that these advances secure your training slot, instructor time and scheduling, and therefore cannot be returned.',
    ],
  },
  {
    heading: 'Course fees and licence applications',
    body: [
      'The full fee for a trainee must be paid before applying for a driving licence. Fees already paid towards completed lessons or examinations are not eligible for a refund.',
      'Where a course is paid in instalments, completed lessons are considered delivered and are non-refundable, regardless of how many remaining lessons you choose to attend.',
    ],
  },
  {
    heading: 'Rescheduling and missed lessons',
    body: [
      'We understand that plans change. Lessons may be rescheduled where reasonable notice is given and subject to instructor and vehicle availability.',
      'Please note the following about scheduling:',
      [
        'Training is not conducted on Fridays and Poya days.',
        'Lessons missed without prior notice may be treated as delivered and are non-refundable.',
        'Your training card must be presented at every lesson and examination.',
      ],
    ],
  },
  {
    heading: 'Exceptional circumstances',
    body: [
      'In rare cases such as a documented medical condition that prevents you from continuing, you may contact the Managing Director to discuss your situation. Any adjustment, credit or transfer of remaining lessons is granted entirely at the discretion of New Sagarika Driving School and is not guaranteed.',
    ],
  },
  {
    heading: 'How to raise a request',
    body: [
      'All refund or credit requests must be made in writing to New Sagarika Driving School. Please include your name, training card number, branch and the details of your request so we can review it promptly.',
    ],
  },
]

export default function ReturnPolicyPage() {
  return (
    <LegalPage
      eyebrow="Policies"
      title="Return & Refund Policy."
      subtitle="Please read our payment and refund terms carefully before enrolling in any course at New Sagarika Driving School."
      updated="19 June 2026"
      intro="This policy explains how payments, advances and course fees are handled at New Sagarika Driving School across all of our Colombo district branches."
      sections={sections}
    />
  )
}
