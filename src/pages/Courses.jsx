import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import './Courses.css'

const courses = [
  {
    badge: 'Most Popular',
    tier: 'Light Vehicle',
    title: 'Class B — Car',
    price: 'Rs. 35,000',
    duration: '4 – 6 weeks',
    hours: '30 practical + 12 theory',
    features: [
      'Dual-control hatchback and sedan',
      'Highway and city driving',
      'Night driving module',
      'Mock RTA examination',
      'License application support'
    ]
  },
  {
    badge: 'Quickest',
    tier: 'Two Wheeler',
    title: 'Class A — Motorcycle',
    price: 'Rs. 18,000',
    duration: '2 – 3 weeks',
    hours: '20 practical + 8 theory',
    features: [
      'Geared and gearless training',
      'Balance and cornering drills',
      'Helmet and safety gear provided',
      'Mock trial track',
      'License application assistance'
    ]
  },
  {
    badge: 'Local Favourite',
    tier: 'Three Wheeler',
    title: 'Class C — Tuk-Tuk',
    price: 'Rs. 22,000',
    duration: '3 weeks',
    hours: '24 practical + 8 theory',
    features: [
      'Income-ready training',
      'Passenger safety standards',
      'Route familiarisation',
      'Meter and fare basics',
      'License documentation'
    ]
  },
  {
    badge: 'Pro Tier',
    tier: 'Heavy Vehicle',
    title: 'Class D – E',
    price: 'Rs. 65,000',
    duration: '6 – 8 weeks',
    hours: '50 practical + 18 theory',
    features: [
      'Heavy-load handling',
      'Reverse and parking simulators',
      'Air-brake systems training',
      'Commercial route exposure',
      'Job placement support'
    ]
  },
  {
    badge: 'Advanced',
    tier: 'Specialist',
    title: 'Defensive Driving',
    price: 'Rs. 12,000',
    duration: '1 week',
    hours: '8 practical + 6 theory',
    features: [
      'Hazard perception drills',
      'Skid-control fundamentals',
      'Emergency braking',
      'Eco-driving techniques',
      'Certificate of completion'
    ]
  },
  {
    badge: 'Refresher',
    tier: 'Returning Drivers',
    title: 'Refresher Programme',
    price: 'Rs. 9,500',
    duration: '1 – 2 weeks',
    hours: '10 practical sessions',
    features: [
      'Confidence rebuild',
      'Modern traffic awareness',
      'Highway re-introduction',
      'Parking and manoeuvring',
      'Personal coach assigned'
    ]
  }
]

const steps = [
  { n: '01', title: 'Enrol Online',     text: 'Pick your course and complete the digital registration in under five minutes.' },
  { n: '02', title: 'Theory Modules',   text: 'Interactive lessons, video walk-throughs and full mock exam practice.' },
  { n: '03', title: 'Behind the Wheel', text: 'One-to-one practical sessions with certified, patient instructors.' },
  { n: '04', title: 'Get Licensed',     text: 'We handle the paperwork and accompany you to the RTA examination.' }
]

export default function Courses() {
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

                  <Link to="/contact" className="btn btn-primary course-tier__btn">
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
