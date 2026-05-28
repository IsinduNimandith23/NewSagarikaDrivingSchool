import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import './Gallery.css'

const filters = ['All', 'Lessons', 'Vehicles', 'Students', 'Events']

const items = [
  { cat: 'Lessons',  title: 'Highway practice',  tone: 'dark'  },
  { cat: 'Vehicles', title: 'Our 2024 fleet',    tone: 'light' },
  { cat: 'Students', title: 'License day',       tone: 'dark'  },
  { cat: 'Vehicles', title: 'Dual-control sedan',tone: 'light' },
  { cat: 'Events',   title: 'Road safety drive', tone: 'dark'  },
  { cat: 'Lessons',  title: 'Parallel parking',  tone: 'light' },
  { cat: 'Students', title: 'First-time pass',   tone: 'dark'  },
  { cat: 'Vehicles', title: 'Bike training',     tone: 'light' },
  { cat: 'Events',   title: 'Annual graduation', tone: 'dark'  },
  { cat: 'Lessons',  title: 'Night driving',     tone: 'light' },
  { cat: 'Vehicles', title: 'Heavy vehicle bay', tone: 'dark'  },
  { cat: 'Students', title: 'Defensive class',   tone: 'light' }
]

function ParallaxTile({ item, index }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [30, -30])

  return (
    <motion.div ref={ref} style={{ y }} className="gallery__tile-wrap">
      <Reveal direction="up" delay={index * 0.04}>
        <div className={`gallery__tile gallery__tile--${item.tone}`}>
          <div className="gallery__tile-art">
            <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
              {item.tone === 'dark' ? (
                <>
                  <rect width="200" height="240" fill="#0A0A0A" />
                  <circle cx={50 + (index * 5) % 100} cy="80" r="50" fill="#1A1A1A" />
                  <path d="M 0 180 L 60 150 L 110 170 L 170 130 L 200 150 L 200 240 L 0 240 Z" fill="#161616" />
                  <line x1="20" y1="220" x2="180" y2="220" stroke="#FF5E00" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.7" />
                </>
              ) : (
                <>
                  <rect width="200" height="240" fill="#F4F2EE" />
                  <circle cx={50 + (index * 5) % 100} cy="80" r="50" fill="#E8E6E1" />
                  <path d="M 0 180 L 60 150 L 110 170 L 170 130 L 200 150 L 200 240 L 0 240 Z" fill="#E2DFD8" />
                  <line x1="20" y1="220" x2="180" y2="220" stroke="#FF5E00" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.7" />
                </>
              )}
            </svg>
          </div>
          <div className="gallery__tile-info">
            <span className="gallery__tile-cat">{item.cat}</span>
            <h3>{item.title}</h3>
          </div>
        </div>
      </Reveal>
    </motion.div>
  )
}

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const visible = items.filter((i) => filter === 'All' || i.cat === filter)

  return (
    <div className="page">
      <PageHero
        eyebrow="Moments in Motion"
        title="Our Gallery."
        subtitle="A glimpse into our classrooms, our vehicles and the proud drivers who started their journey with us."
      />

      <section className="section">
        <div className="container">
          <div className="gallery__filters">
            {filters.map((f) => (
              <button
                key={f}
                className={`gallery__filter ${filter === f ? 'gallery__filter--active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="gallery__grid">
            {visible.map((item, i) => (
              <ParallaxTile key={`${item.title}-${filter}`} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="gallery__cta">
              <div>
                <span className="eyebrow">Begin</span>
                <h2>Be in our next <span className="serif-italic text-accent">success story.</span></h2>
              </div>
              <Link to="/contact" className="btn btn-accent">Start Today</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
