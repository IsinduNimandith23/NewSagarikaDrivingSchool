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
  { value: '5',      label: 'Branches in Colombo' },
  { value: 'All',    label: 'Vehicle Classes' }
]

const courses = [
  { tag: 'Programme', title: 'Full Time Course',  time: 'Flexible', price: 'Enquire' },
  { tag: 'Programme', title: 'Refresher Course',  time: 'Flexible', price: 'Enquire' },
  { tag: 'Programme', title: 'VIP Course',        time: 'Flexible', price: 'Enquire' },
  { tag: 'Programme', title: 'Off Peak Course',   time: 'Flexible', price: 'Enquire' }
]

const testimonials = [
  {
    name: 'Lola Rose',
    stars: 5,
    text: 'Great driving school. They dedicate a half and hour or more than that to an individual student rather than teaching 3 or 4 students at the same time like other learners.'
  },
  {
    name: 'Krishanthi da silva De silva',
    stars: 5,
    text: 'Very good driver learning school for beginners. All staff members are very polite, Decent and kindful. My son has learned a better driving within a week. I have recommend high.'
  },
  {
    name: 'Thamara Kandabada',
    stars: 5,
    text: 'Took my driving lessons here. Knowledgeable and attentive staff. They help you through the driving license process from start to finish. Recommended.'
  },
  {
    name: 'Mihir De Silva',
    stars: 5,
    text: 'Highly recommended.. best driving school In Colombo.'
  },
  {
    name: 'Dewni Abeysinghe',
    stars: 5,
    text: 'One of the Best Driving School with friendly service and with best instructors ❤️'
  },
  {
    name: 'Subha',
    stars: 5,
    text: 'great place. good service and they will get u through the process. loved their service overall💯'
  }
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
            <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero__overlay" />
      </div>

      <div className="container hero__content">
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

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hero__tagline"
        >
          Real lessons, real results - for over 65 years.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="hero__actions"
        >
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
            <Link to="/contact" className="hero-btn hero-btn--primary">
              <span>Book Now</span>
              <span className="hero-btn__arrow" aria-hidden="true">↗</span>
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
            <a href="tel:0112745183" className="hero-btn hero-btn--ghost">
              <svg className="hero-btn__icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Contact Us</span>
            </a>
          </motion.div>
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
              Every detail of our curriculum exists for one reason - to make sure
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

function GoogleG() {
  return (
    <svg className="g-review__google" viewBox="0 0 24 24" aria-label="Google">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"/>
    </svg>
  )
}

function VerifiedBadge() {
  return (
    <svg className="g-review__verified" viewBox="0 0 24 24" aria-label="Verified">
      <circle cx="12" cy="12" r="11" fill="#1A73E8"/>
      <path d="M7 12.5l3.2 3.2L17 9" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function Stars({ count = 5 }) {
  return (
    <div className="g-review__stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className={i < count ? 'star star--on' : 'star'} aria-hidden="true">
          <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7.3L12 17.8 5.7 21.5l1.7-7.3L2 9.5l7.1-.6L12 2z"/>
        </svg>
      ))}
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
        <div className="g-marquee" aria-label="Google reviews carousel">
          <div className="g-marquee__track">
            {[...testimonials, ...testimonials].map((t, i) => (
              <article className="g-review" key={`${t.name}-${i}`} aria-hidden={i >= testimonials.length}>
                <header className="g-review__head">
                  <div className="g-review__avatar">{t.name[0].toUpperCase()}</div>
                  <div className="g-review__id">
                    <div className="g-review__name">
                      <strong>{t.name}</strong>
                      <VerifiedBadge />
                    </div>
                  </div>
                  <GoogleG />
                </header>
                <Stars count={t.stars} />
                <p className="g-review__text">{t.text}</p>
              </article>
            ))}
          </div>
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
