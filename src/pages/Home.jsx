import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Reveal from '../components/Reveal'
import './Home.css'


const features = [
  { num: '01', title: 'Certified Instructors', text: 'Licensed trainers with over a decade of road experience guide every lesson.' },
  { num: '02', title: 'Modern Vehicle Fleet',  text: 'Dual-control, fully-serviced cars and bikes with the latest safety standards.' },
  { num: '03', title: 'Digital Learning',      text: 'Track hours, book lessons and study mock tests directly from your phone.' },
  { num: '04', title: 'Defensive Focus',       text: 'Our curriculum emphasises hazard perception, night driving and emergency control.' },
  { num: '05', title: '96% Pass Rate',         text: 'The vast majority of our students earn their license on the very first attempt.' },
  { num: '06', title: 'Flexible Scheduling',   text: 'Morning, evening and weekend lessons. Fit your training around your life.' }
]

const stats = [
  { value: '65+',    label: 'Years Experience' },
  { value: 'A',      label: 'Grade Driving School' },
  { value: '6',      label: 'Branches in Colombo' },
  { value: 'All',    label: 'Vehicle Classes' }
]

const courses = [
  { tag: 'Programme', title: 'Full Time Course',  time: 'Flexible', price: 'Enquire' },
  { tag: 'Programme', title: 'Refresher Course',  time: 'Flexible', price: 'Enquire' },
  { tag: 'Programme', title: 'VIP Course',        time: 'Flexible', price: 'Enquire' },
  { tag: 'Programme', title: 'Off Peak Course',   time: 'Flexible', price: 'Enquire' }
]

const testimonials = [
  { name: 'Nimal P.',    role: 'Full Time Course graduate', text: 'The patient, structured approach gave me confidence from the very first lesson. I passed first attempt.' },
  { name: 'Anushka R.',  role: 'VIP Course graduate',       text: 'My instructor was thorough, friendly and made every session feel safe. The best decision I made this year.' },
  { name: 'Kasun M.',    role: 'Special Course graduate',   text: 'The brand new dual-pedal vehicles made everything feel safe — the heavy-vehicle training is genuinely world class.' }
]

function Hero() {
  return (
    <section className="hero">
      <div className="hero__media">
        <video
          className="hero__video"
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-poster.jpg"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero__overlay" />
      </div>

      <div className="container hero__content">
        <div className="hero__left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hero__eyebrow"
          >
            Drive with confidence
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hero__title"
          >
            Driving<br />School
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="hero__right"
        >
          <h3 className="hero__subhead">Real lessons,<br />real results.</h3>
          <p>
            Over 65 years of trusted, professional instruction. An A grade driving
            school with brand new dual-pedal vehicles, training for every vehicle
            class — from motorcycle to passenger bus.
          </p>
          <Link to="/courses" className="hero__cta-link">
            <span className="hero__cta-arrow">↗</span>
            <span>Take a closer look at our courses and what makes New Sagarika Driving School different.</span>
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll-cue"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </motion.div>
    </section>
  )
}

function StatsBand() {
  return (
    <section className="stats-band">
      <div className="container stats-band__grid">
        {stats.map((s, i) => (
          <Reveal key={s.label} direction="up" delay={i * 0.08}>
            <div className="stat">
              <div className="stat__value">{s.value}</div>
              <div className="stat__label">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Features() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section ref={ref} className="section features">
      <div className="container">
        <div className="features__head">
          <Reveal>
            <span className="eyebrow">Why New Sagarika Driving School</span>
            <h2>A driving school built on <span className="serif-italic text-accent">trust.</span></h2>
          </Reveal>
          <Reveal delay={0.15} direction="left">
            <p className="features__lead">
              Every detail of our curriculum exists for one reason — to make sure
              the moment you sit behind the wheel alone, you are completely
              prepared for the road ahead.
            </p>
          </Reveal>
        </div>

        <motion.div className="features__grid" style={{ y }}>
          {features.map((f, i) => (
            <Reveal key={f.title} direction="up" delay={i * 0.06}>
              <div className="feature">
                <div className="feature__num">{f.num}</div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            </Reveal>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function CoursesPreview() {
  return (
    <section className="section section--dark">
      <div className="container">
        <div className="courses-preview__head">
          <Reveal>
            <span className="eyebrow eyebrow--light">Programs</span>
            <h2>Courses for <span className="serif-italic">every driver.</span></h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/courses" className="btn-arrow btn-arrow--light">View all courses →</Link>
          </Reveal>
        </div>

        <div className="courses-preview__grid">
          {courses.map((c, i) => (
            <Reveal key={c.title} direction="up" delay={i * 0.08}>
              <Link to="/courses" className="course-card-lux">
                <span className="course-card-lux__tag">{c.tag}</span>
                <h3>{c.title}</h3>
                <div className="course-card-lux__meta">
                  <span>{c.time}</span>
                  <span>{c.price}</span>
                </div>
                <div className="course-card-lux__arrow">→</div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        <span>Safety First</span><span className="hot">✦</span>
        <span>A Grade Driving School</span><span className="hot">✦</span>
        <span>Dual Pedal Vehicles</span><span className="hot">✦</span>
        <span>All Vehicle Classes</span><span className="hot">✦</span>
        <span>Highway Code Trained</span><span className="hot">✦</span>
        <span>Since 1960</span><span className="hot">✦</span>
        <span>Safety First</span><span className="hot">✦</span>
        <span>A Grade Driving School</span><span className="hot">✦</span>
        <span>Dual Pedal Vehicles</span><span className="hot">✦</span>
        <span>All Vehicle Classes</span><span className="hot">✦</span>
        <span>Highway Code Trained</span><span className="hot">✦</span>
        <span>Since 1960</span><span className="hot">✦</span>
      </div>
    </div>
  )
}

function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading section-heading--center">
          <Reveal><span className="eyebrow">Voices</span></Reveal>
          <Reveal delay={0.1}><h2>From the drivers <span className="serif-italic text-accent">we trained.</span></h2></Reveal>
        </div>
        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} direction="up" delay={i * 0.1}>
              <div className="testimonial">
                <div className="testimonial__mark">"</div>
                <p>{t.text}</p>
                <div className="testimonial__person">
                  <div className="testimonial__avatar">{t.name[0]}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="cta-lux">
            <div>
              <span className="eyebrow">Begin</span>
              <h2>Ready to take <span className="serif-italic text-accent">the wheel?</span></h2>
              <p>Book a complimentary 30-minute trial lesson and experience the difference of a modern driving school.</p>
            </div>
            <div className="cta-lux__actions">
              <Link to="/contact" className="btn btn-accent">Book Free Trial</Link>
              <Link to="/courses" className="btn btn-ghost">View Pricing</Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="page home">
      <Hero />
      <Features />
      <Marquee />
      <CoursesPreview />
      <Testimonials />
      <StatsBand />
      <CTA />
    </div>
  )
}
