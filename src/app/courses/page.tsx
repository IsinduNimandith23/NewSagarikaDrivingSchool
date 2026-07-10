import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import './Courses.css'

export const metadata: Metadata = {
  title: 'Courses',
  description:
    'Driving courses for every driver — Full Time, Refresher, VIP, Off Peak, Customized and Special courses covering every vehicle class from motorcycle to passenger bus.',
}

const courses = [
  {
    badge: 'Most Popular',
    tier: 'Programme',
    title: 'Full Time Course',
    price: 'Enquire',
    duration: 'Flexible',
    hours: 'Comprehensive schedule',
    features: [
      'All vehicle classes covered',
      'Brand new dual-pedal vehicles',
      'Highway code and Highway Act training',
      'Component guides included',
      'License application support'
    ]
  },
  {
    badge: 'Returning Drivers',
    tier: 'Programme',
    title: 'Refresher Course',
    price: 'Enquire',
    duration: 'Flexible',
    hours: 'Tailored sessions',
    features: [
      'Confidence rebuild',
      'Modern traffic awareness',
      'Highway re-introduction',
      'Parking and manoeuvring',
      'Personal coach assigned'
    ]
  },
  {
    badge: 'Premium',
    tier: 'Programme',
    title: 'VIP Course',
    price: 'Enquire',
    duration: 'Flexible',
    hours: 'Priority scheduling',
    features: [
      'One-to-one personal instruction',
      'Priority booking slots',
      'Pick-up and drop-off available',
      'Senior instructor assigned',
      'Fast-tracked license process'
    ]
  },
  {
    badge: 'Convenient',
    tier: 'Programme',
    title: 'Off Peak Course',
    price: 'Enquire',
    duration: 'Flexible',
    hours: 'Off-peak hours',
    features: [
      'Affordable pricing',
      'Less crowded sessions',
      'Daytime weekday slots',
      'Full curriculum coverage',
      'Same certified instructors'
    ]
  },
  {
    badge: 'Tailored',
    tier: 'Programme',
    title: 'Customized Course',
    price: 'Enquire',
    duration: 'Flexible',
    hours: 'Built around you',
    features: [
      'Schedule designed for you',
      'Choose modules you need',
      'Pace set to your comfort',
      'Targeted skill-building',
      'Vehicle class of your choice'
    ]
  },
  {
    badge: 'Special',
    tier: 'Programme',
    title: 'Special Course',
    price: 'Enquire',
    duration: 'Flexible',
    hours: 'Specialised training',
    features: [
      'Passenger bus training',
      'Heavy vehicle specialisation',
      'Commercial route exposure',
      'Highway Act compliance',
      'Component guides provided'
    ]
  }
]

const steps = [
  { n: '01', title: 'Enrol Online',     text: 'Pick your course and complete the digital registration in under five minutes.' },
  { n: '02', title: 'Theory Modules',   text: 'Interactive lessons, video walk-throughs and full mock exam practice.' },
  { n: '03', title: 'Behind the Wheel', text: 'One-to-one practical sessions with certified, patient instructors.' },
  { n: '04', title: 'Get Licensed',     text: 'We handle the paperwork and accompany you to the RTA examination.' }
]

export default function CoursesPage() {
  return (
    <div className="page">
      <PageHero
        eyebrow="Our Programs"
        title="Driving courses built for you."
        subtitle="From learner permits to professional heavy-vehicle licenses, every program is designed with safety, structure and real road experience at its core."
      />

      <section className="section">
        <div className="container">
          <div className="courses-grid">
            {courses.map((c, i) => (
              <Reveal key={c.title} direction="up" delay={i * 0.05}>
                <article className="course-tier">
                  <div className="course-tier__top">
                    <span className="course-tier__badge">{c.badge}</span>
                    <span className="course-tier__tier">{c.tier}</span>
                  </div>

                  <h3>{c.title}</h3>

                  <div className="course-tier__price">
                    <span>{c.price}</span>
                    <small>full course</small>
                  </div>

                  <div className="course-tier__meta">
                    <div><strong>Duration</strong>{c.duration}</div>
                    <div><strong>Hours</strong>{c.hours}</div>
                  </div>

                  <ul className="course-tier__list">
                    {c.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>

                  <Link href="/contact" className="btn btn-primary course-tier__btn">
                    Enrol Now
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section process">
        <div className="container">
          <div className="section-heading section-heading--center">
            <Reveal><span className="eyebrow">How It Works</span></Reveal>
            <Reveal delay={0.1}><h2>Your journey to <span className="serif-italic text-accent">the license.</span></h2></Reveal>
          </div>

          <div className="process__grid">
            {steps.map((s, i) => (
              <Reveal key={s.n} direction="up" delay={i * 0.1}>
                <div className="process-step">
                  <div className="process-step__num">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
