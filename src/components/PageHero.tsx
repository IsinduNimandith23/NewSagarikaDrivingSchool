'use client'

import { motion } from 'framer-motion'
import './PageHero.css'

type PageHeroProps = {
  eyebrow: React.ReactNode
  title: string
  subtitle: React.ReactNode
}

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  const hasPeriod = typeof title === 'string' && title.endsWith('.')
  const text = hasPeriod ? title.slice(0, -1) : title

  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="eyebrow"
        >
          {eyebrow}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {text}
          {hasPeriod && <span className="page-hero__dot">.</span>}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="page-hero__sub"
        >
          {subtitle}
        </motion.p>
      </div>

      <motion.div
        className="container page-hero__divider"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden="true"
      />
    </section>
  )
}
