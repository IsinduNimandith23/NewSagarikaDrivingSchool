'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

/** What the Resources page will hold — a teaser while it's being built. */
const teasers = [
  {
    title: 'Past papers',
    text: 'Model written-exam papers in Sinhala, English and Tamil, free to download.',
    icon: (
      <>
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
        <path d="M14 3v5h5M9 13h6M9 17h4" />
      </>
    ),
  },
  {
    title: 'Tutorial videos',
    text: 'Short lessons on road signs, the written paper and every obstacle on the trial track.',
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="m11 9.5 4 2.5-4 2.5z" />
      </>
    ),
  },
  {
    title: 'Written exam guide',
    text: 'Every topic the paper covers, broken down into what you actually need to remember.',
    icon: (
      <>
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19v15H6.5A2.5 2.5 0 0 0 4 20.5z" />
        <path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H19v3H6.5A2.5 2.5 0 0 1 4 20.5z" />
      </>
    ),
  },
  {
    title: 'Trial preparation',
    text: 'A step-by-step checklist of exactly what the examiner is marking on the day.',
    icon: (
      <>
        <path d="M9 11.5 11 13.5 15.5 9" />
        <rect x="3.5" y="4" width="17" height="16" rx="3" />
      </>
    ),
  },
]

export default function ComingSoon() {
  return (
    <div className="page res-soon">
      <div className="res-soon__glow" aria-hidden="true" />

      <section className="container res-soon__inner">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="res-soon__badge"
        >
          <span className="res-soon__pulse" aria-hidden="true" />
          Coming Soon
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="res-soon__title"
        >
          Student Resources
          <span className="res-soon__dot">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="res-soon__sub"
        >
          We&apos;re putting together a free study library for our students — past
          papers, tutorial videos and everything you need to pass the written
          examination and the trial. It will be here shortly.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.32 }}
          className="res-soon__sub res-soon__sub--si"
          lang="si"
        >
          ලිඛිත විභාගය සහ ට්‍රයල් සඳහා අවශ්‍ය සියලු තොරතුරු ඉක්මනින්ම මෙතැනින්.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="res-soon__actions"
        >
          <Link href="/courses" className="btn btn-primary">
            Browse our courses
          </Link>
          <Link href="/contact" className="btn btn-ghost">
            Ask us a question
          </Link>
        </motion.div>

        <div className="res-soon__grid">
          {teasers.map((t, i) => (
            <motion.article
              key={t.title}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
              className="res-soon__card"
            >
              <span className="res-soon__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  {t.icon}
                </svg>
              </span>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  )
}
