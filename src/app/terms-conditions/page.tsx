import type { Metadata } from 'next'
import LegalPage, { type LegalSection } from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'The terms that apply when you enrol and train with New Sagarika Driving School. By registering, you agree to these terms.',
}

const sections: LegalSection[] = [
  {
    heading: 'Enrolment and your training card',
    body: [
      'On enrolment you will be issued a training card. Admission to each training session shall be on production of this card, so please bring it to every lesson, theory class and examination.',
      'The card must be kept ready for inspection by any officer of the institution. If the card is lost or misplaced, it should be brought to the notice of the Managing Director promptly.',
    ],
  },
  {
    heading: 'Fees and payments',
    body: [
      'Any amount paid as an advance towards training is not refundable. The full fee for a trainee must be paid before applying for a driving licence.',
      'Please retain your training card and have it marked on every occasion that a payment is made, so that your account remains accurate.',
    ],
  },
  {
    heading: 'Required documents',
    body: [
      'On the day of the driving examination, the following original documents (or, where applicable, certified copies issued by the District Registrar) are required:',
      [
        'National Identity Card.',
        'Learner’s Permit.',
        'Medical report.',
        'Training information sheet.',
        'Birth certificate.',
      ],
    ],
  },
  {
    heading: 'Training and examinations',
    body: [
      'Training and the practical examination are conducted using your own vehicle or a school vehicle as arranged. Insurance cover is required for training and for presenting yourself at the practical examination.',
      'You are responsible for being on time and prepared for lectures, practical training, the written examination and the practical examination. Training is not conducted on Fridays and Poya days.',
    ],
  },
  {
    heading: 'Conduct and safety',
    body: [
      'Trainees are expected to follow the instructions of their instructor at all times and to observe all road rules, the Highway Code and the directions of examiners. We may decline or pause training where a trainee’s conduct poses a risk to safety.',
    ],
  },
  {
    heading: 'Changes to these terms',
    body: [
      'New Sagarika Driving School may update these terms from time to time to reflect changes in our services or in applicable regulations. The current version will always be available on this page.',
    ],
  },
]

export default function TermsConditionsPage() {
  return (
    <LegalPage
      eyebrow="Policies"
      title="Terms & Conditions."
      subtitle="The terms that apply when you enrol and train with New Sagarika Driving School. By registering, you agree to these terms."
      updated="19 June 2026"
      intro="These terms set out the responsibilities of trainees and of New Sagarika Driving School throughout your course, from enrolment to your driving examination."
      sections={sections}
    />
  )
}
