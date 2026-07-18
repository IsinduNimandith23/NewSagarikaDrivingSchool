'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Reveal from '@/components/Reveal'
import './Home.css'


const stats = [
  { value: '65+',    label: 'Years Experience' },
  { value: 'A',      label: 'Grade Driving School' },
  { value: '5',      label: 'Branches in Colombo' },
  { value: 'All',    label: 'Vehicle Classes' }
]

const courses = [
  { tag: 'Programme', title: 'Full Time Course',  time: 'Flexible', price: 'Enquire', blurb: 'Intensive daily lessons to get you road-ready fast.' },
  { tag: 'Programme', title: 'Refresher Course',  time: 'Flexible', price: 'Enquire', blurb: 'Rebuild confidence behind the wheel at your own pace.' },
  { tag: 'Programme', title: 'VIP Course',        time: 'Flexible', price: 'Enquire', blurb: 'Priority scheduling with dedicated one-to-one training.' },
  { tag: 'Programme', title: 'Off Peak Course',   time: 'Flexible', price: 'Enquire', blurb: 'Learn during quieter hours for the best value.' }
]

// Social reels - replace `video`/`poster` with your real reel exports (9:16 .mp4)
// and `url` with the actual Instagram/TikTok permalink for each clip.
const reels = [
  { platform: 'instagram', tag: 'Customer story', handle: '@newsagarikadrivingschool', caption: 'First lesson nerves → confident drive', views: '12.4K', video: '/hero-video.mp4', poster: '/hero-poster.jpg', url: 'https://www.instagram.com/newsagarikadrivingschool/' },
  { platform: 'tiktok',    tag: 'Training',       handle: '@newsagarikadrivingschool', caption: 'Parallel parking made easy',          views: '48.1K', video: '/hero-video.mp4', poster: '/hero-poster.jpg', url: 'https://www.tiktok.com/@newsagarikadrivingschool' },
  { platform: 'instagram', tag: 'Reaction',       handle: '@newsagarikadrivingschool', caption: 'The moment she passed first try',     views: '21.7K', video: '/hero-video.mp4', poster: '/hero-poster.jpg', url: 'https://www.instagram.com/newsagarikadrivingschool/' },
  { platform: 'tiktok',    tag: 'Behind the scenes', handle: '@newsagarikadrivingschool', caption: 'Trial lesson behind the wheel',    views: '9.8K',  video: '/hero-video.mp4', poster: '/hero-poster.jpg', url: 'https://www.tiktok.com/@newsagarikadrivingschool' }
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
          Your Journey<br />Begins Here
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hero__tagline"
        >
          Real lessons, real results - for over&nbsp;65&nbsp;years.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="hero__actions"
        >
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
            <Link href="/contact" className="hero-btn hero-btn--primary">
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
  const y = useTransform(scrollYProgress, [0, 1], [30, -30])

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

        <motion.div className="why-grid" style={{ y }}>
          <Reveal className="why-cell why-cell--tall" direction="up">
            <article className="why-tile">
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=900&q=70"
                alt="Student driving with hands on the steering wheel"
                loading="lazy"
              />
              <div className="why-tile__shade" />
              <div className="why-tile__info">
                <h3>Certified Instructors</h3>
                <p>Licensed trainers with over a decade of road experience guide every lesson, one-on-one.</p>
              </div>
            </article>
          </Reveal>

          <Reveal className="why-cell" direction="up" delay={0.08}>
            <article className="why-tile">
              <img
                src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=70"
                alt="Modern car from our training fleet"
                loading="lazy"
              />
              <div className="why-tile__shade" />
              <div className="why-tile__info">
                <h3>Modern Vehicle Fleet</h3>
                <p>Dual-control, fully-serviced cars and bikes with the latest safety standards.</p>
              </div>
            </article>
          </Reveal>

          <Reveal className="why-cell" direction="up" delay={0.16}>
            <div className="why-stat">
              <div className="why-stat__value">96%</div>
              <p>of our students earn their license on the very first attempt.</p>
              <span className="why-stat__foot">A Grade · Since 1960</span>
            </div>
          </Reveal>

          <Reveal className="why-cell" direction="up" delay={0.12}>
            <article className="why-tile">
              <img
                src="https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&w=900&q=70"
                alt="City streets at night"
                loading="lazy"
              />
              <div className="why-tile__shade" />
              <div className="why-tile__info">
                <h3>Defensive &amp; Night Driving</h3>
                <p>Hazard perception, night driving and emergency control are built into the curriculum.</p>
              </div>
            </article>
          </Reveal>

          <Reveal className="why-cell" direction="up" delay={0.2}>
            <Link href="/gallery" className="why-tile why-tile--link">
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=900&q=70"
                alt="Open highway stretching ahead"
                loading="lazy"
              />
              <div className="why-tile__shade" />
              <div className="why-tile__info">
                <h3>
                  See lessons in action <span className="why-tile__arrow" aria-hidden="true">→</span>
                </h3>
                <p>Browse our gallery of students, vehicles and license-day moments.</p>
              </div>
            </Link>
          </Reveal>
        </motion.div>
      </div>
    </section>
  )
}

function CoursesPreview() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [distance, setDistance] = useState(0)

  useEffect(() => {
    const calc = () => {
      const track = trackRef.current
      if (!track) return
      // Disable the pinned horizontal scroll on small screens (native swipe instead)
      if (window.innerWidth <= 768) {
        setDistance(0)
        return
      }
      setDistance(Math.max(0, track.scrollWidth - window.innerWidth))
    }
    calc()
    window.addEventListener('resize', calc)
    return () => window.removeEventListener('resize', calc)
  }, [])

  // Higher = slower horizontal scroll (more vertical scroll per card of travel)
  const SCROLL_FACTOR = 2.2

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  })
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance])
  const progress = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section
      ref={sectionRef}
      className="courses-pin section--dark"
      style={{ height: distance ? `calc(100vh + ${distance * SCROLL_FACTOR}px)` : undefined }}
    >
      <div className="courses-pin__sticky">
        <div className="container courses-pin__head">
          <div>
            <span className="eyebrow eyebrow--light">Programs</span>
            <h2>Courses for <span className="serif-italic">every driver.</span></h2>
          </div>
          <div className="courses-pin__progress" aria-hidden="true">
            <motion.span style={{ width: progress }} />
          </div>
        </div>

        <motion.div ref={trackRef} className="courses-pin__track" style={{ x }}>
          {courses.map((c, i) => (
            <Link key={c.title} href="/courses" className="course-panel">
              <span className="course-panel__index">0{i + 1}</span>
              <span className="course-panel__tag">{c.tag}</span>
              <h3>{c.title}</h3>
              <p className="course-panel__blurb">{c.blurb}</p>
              <div className="course-panel__meta">
                <span>{c.time}</span>
                <span>{c.price}</span>
              </div>
              <div className="course-panel__arrow">→</div>
            </Link>
          ))}

          <Link href="/courses" className="course-panel course-panel--cta">
            <span className="course-panel__tag">Explore</span>
            <h3>See all courses</h3>
            <p className="course-panel__blurb">Browse the full range and find the programme that fits you.</p>
            <span className="course-panel__cta-arrow">→</span>
          </Link>
        </motion.div>
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

function ReelCard({ r }: { r: (typeof reels)[number] }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [muted, setMuted] = useState(true)

  const toggleSound = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const v = videoRef.current
    if (!v) return
    const next = !v.muted
    v.muted = next
    if (!next && v.paused) v.play()
    setMuted(next)
  }

  return (
    <a className="reel-card" href={r.url} target="_blank" rel="noreferrer" aria-label={`Watch reel: ${r.caption}`}>
      <video
        ref={videoRef}
        className="reel-card__video"
        src={r.video}
        poster={r.poster}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />
      <div className="reel-card__overlay" />
      <span className="reel-card__chip">
        {r.platform === 'instagram' ? <InstagramIcon /> : <TikTokIcon />}
        {r.tag}
      </span>
      <button
        type="button"
        className="reel-card__sound"
        onClick={toggleSound}
        aria-label={muted ? 'Unmute video' : 'Mute video'}
      >
        {muted ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 5 6 9H2v6h4l5 4z"/>
            <line x1="22" y1="9" x2="16" y2="15"/>
            <line x1="16" y1="9" x2="22" y2="15"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 5 6 9H2v6h4l5 4z"/>
            <path d="M15.5 8.5a5 5 0 0 1 0 7"/>
            <path d="M19 5a10 10 0 0 1 0 14"/>
          </svg>
        )}
      </button>
      <span className="reel-card__play" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
      </span>
      <div className="reel-card__foot">
        <span className="reel-card__views" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>
          {r.views}
        </span>
        <p className="reel-card__caption">{r.caption}</p>
        <span className="reel-card__handle">{r.handle}</span>
      </div>
    </a>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5"/>
      <circle cx="12" cy="12" r="4.2"/>
      <circle cx="17.3" cy="6.7" r="1.15" fill="currentColor" stroke="none"/>
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
    </svg>
  )
}

function Reels() {
  return (
    <section className="section reels">
      <div className="container">
        <div className="reels__head">
          <Reveal className="reels__head-copy">
            <span className="reels__kicker"><span className="reels__live" />On our socials</span>
            <h2>Life behind the <span className="serif-italic text-accent">wheel.</span></h2>
            <p className="reels__lead">
              Real moments from our school - learner first drives, training sessions,
              and the reactions that say it all. Tap any clip to watch.
            </p>
          </Reveal>
          <Reveal delay={0.12} className="reels__follow">
            <a href="https://www.instagram.com/newsagarikadrivingschool/" target="_blank" rel="noreferrer" className="reels__follow-link">
              <InstagramIcon />
              <span>Instagram</span>
            </a>
            <a href="https://www.tiktok.com/@newsagarikadrivingschool" target="_blank" rel="noreferrer" className="reels__follow-link">
              <TikTokIcon />
              <span>TikTok</span>
            </a>
          </Reveal>
        </div>

        <div className="reels__row">
          {reels.map((r, i) => (
            <Reveal key={i} direction="up" delay={i * 0.08} className="reels__cell">
              <ReelCard r={r} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
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

function Stars({ count = 5 }: { count?: number }) {
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
              <Link href="/contact" className="btn btn-accent">Book Free Trial</Link>
              <Link href="/courses" className="btn btn-ghost">View Courses</Link>
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
      <Reels />
      <StatsBand />
      <Testimonials />
      <CTA />
    </div>
  )
}
