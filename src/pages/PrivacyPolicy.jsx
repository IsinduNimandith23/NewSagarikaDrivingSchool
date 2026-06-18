import LegalPage from './LegalPage'

const sections = [
  {
    heading: 'Information we collect',
    body: [
      'To register you as a trainee and prepare you for your driving licence, we collect personal information that you provide to us, including:',
      [
        'Your full name, address and contact details (phone and email).',
        'National Identity Card number and date of birth.',
        'Birth certificate details and, where required, certified copies from the District Registrar.',
        'Medical report and Learner’s Permit details where applicable.',
        'Course, branch, lesson schedule and payment records.',
      ],
    ],
  },
  {
    heading: 'How we use your information',
    body: [
      'We use the information you provide solely to deliver and administer our driving training services. This includes:',
      [
        'Registering you with the relevant authorities and processing licence applications.',
        'Scheduling lessons, theory classes and practical examinations.',
        'Maintaining your training card and attendance records.',
        'Contacting you about your course, payments and important updates.',
      ],
    ],
  },
  {
    heading: 'Sharing your information',
    body: [
      'We share your information only where it is necessary to provide our service, such as with the Department of Motor Traffic and authorised examiners for licensing purposes.',
      'We do not sell, rent or trade your personal information to third parties for marketing purposes.',
    ],
  },
  {
    heading: 'Keeping your information safe',
    body: [
      'We take reasonable steps to keep your records secure and to limit access to authorised staff of New Sagarika Driving School. Your training card should be kept ready for inspection by any officer of the institution, and if it is lost or misplaced it should be brought to the notice of the Managing Director promptly.',
    ],
  },
  {
    heading: 'Your choices',
    body: [
      'You may ask us to review or correct the personal information we hold about you. To make a request, or if you have any concerns about how your information is handled, please contact us using the details below.',
    ],
  },
  {
    heading: 'Cookies and our website',
    body: [
      'Our website may use basic cookies and analytics to understand how visitors use the site and to improve your experience. These do not identify you personally. You can disable cookies in your browser settings at any time.',
    ],
  },
]

export default function PrivacyPolicy() {
  return (
    <LegalPage
      eyebrow="Policies"
      title="Privacy Policy."
      subtitle="How New Sagarika Driving School collects, uses and protects the personal information of our trainees and website visitors."
      updated="19 June 2026"
      intro="Your privacy matters to us. This policy describes the information we collect when you enrol with us or visit our website, and how we look after it."
      sections={sections}
    />
  )
}
