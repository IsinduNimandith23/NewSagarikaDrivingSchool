import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { Link } from 'react-router-dom'
import './About.css'

const values = [
  { num: '01', title: 'Mission', text: 'To produce confident, safety-first drivers through patient, modern instruction.' },
  { num: '02', title: 'Vision',  text: 'To be Sri Lanka\'s most respected and trusted driver-education institution.' },
  { num: '03', title: 'Values',  text: 'Safety, integrity, patience and lifelong learning shape every lesson we deliver.' }
]

const timeline = [
  { year: '2009', title: 'Founded in Colombo',         text: 'Started with two cars, one instructor and a vision to modernise driver training in Sri Lanka.' },
  { year: '2014', title: 'Five thousand graduates',    text: 'Expanded to four branches and added motorcycle and three-wheeler programs to our offering.' },
  { year: '2019', title: 'Digital platform launch',    text: 'Online booking, progress tracking and digital mock examinations went live for every student.' },
  { year: '2022', title: 'Heavy-vehicle facility',     text: 'Built a dedicated truck and bus training ground with full reverse and parking simulators.' },
  { year: '2025', title: 'Twelve thousand certified',  text: 'Awarded Best Driving School of the Year by the National Road Safety Council of Sri Lanka.' }
]

const team = [
  { name: 'Sagara Perera',     role: 'Founder & Chief Instructor', initials: 'SP' },
  { name: 'Nimali Fernando',   role: 'Senior Instructor — Class B', initials: 'NF' },
  { name: 'Dilan Wijesekara',  role: 'Heavy Vehicle Specialist',    initials: 'DW' },
  { name: 'Sanduni Jayasinghe', role: 'Theory & Exam Coach',        initials: 'SJ' }
]

export default function About() {
  return (
    <div className="page">
      <PageHero
        eyebrow="Who We Are"
        title="About New Sagarika."
        subtitle="A modern driving school on a fifteen-year mission to make Sri Lanka's roads safer, one confident driver at a time."
      />

      <section className="section">
        <div className="container about-intro">
          <Reveal direction="up">
            <div className="about-intro__visual">
              <div className="about-intro__big">15</div>
              <div className="about-intro__small">
                <strong>Years of Excellence</strong>
                <span>2009 → 2025</span>
              </div>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <div>
              <span className="eyebrow">Our Story</span>
              <h2 style={{ margin: '1rem 0 1.4rem' }}>
                From <span className="serif-italic text-accent">one car</span> to a movement.
              </h2>
              <p>
                New Sagarika Driving School began in 2009 with a single dual-control
                sedan, a passionate founder and a simple belief — that driving
                lessons should be modern, patient, and built entirely around the
                student.
              </p>
              <p style={{ marginTop: '1.2rem' }}>
                Today, we operate four branches, train every license class and
                have helped over twelve thousand Sri Lankans earn their license.
                Our digital booking platform and certified instructors keep us at
                the front of the industry — but our heart remains the same.
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1.8rem' }}>
                Visit Our Branch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-heading section-heading--center">
            <Reveal><span className="eyebrow">What Drives Us</span></Reveal>
            <Reveal delay={0.1}><h2>Mission, vision & <span className="serif-italic text-accent">values.</span></h2></Reveal>
          </div>

          <div className="values__grid">
            {values.map((v, i) => (
              <Reveal key={v.title} direction="up" delay={i * 0.1}>
                <div className="value-card">
                  <div className="value-card__num">{v.num}</div>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading section-heading--center">
            <Reveal><span className="eyebrow">Our Journey</span></Reveal>
            <Reveal delay={0.1}><h2>Milestones on <span className="serif-italic text-accent">the road.</span></h2></Reveal>
          </div>

          <div className="timeline">
            {timeline.map((t) => (
              <Reveal key={t.year} direction="up" delay={0.05}>
                <div className="timeline__row">
                  <div className="timeline__year">{t.year}</div>
                  <div className="timeline__body">
                    <h3>{t.title}</h3>
                    <p>{t.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-heading section-heading--center">
            <Reveal><span className="eyebrow">Meet the Team</span></Reveal>
            <Reveal delay={0.1}><h2>The faces behind <span className="serif-italic text-accent">the wheel.</span></h2></Reveal>
          </div>

          <div className="team__grid">
            {team.map((m, i) => (
              <Reveal key={m.name} direction="up" delay={i * 0.08}>
                <div className="team-card">
                  <div className="team-card__avatar">{m.initials}</div>
                  <h3>{m.name}</h3>
                  <span>{m.role}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
