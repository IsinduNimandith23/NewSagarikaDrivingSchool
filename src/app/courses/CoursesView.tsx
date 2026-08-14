'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import { enrolHref } from '@/lib/courses'
import { coursesCopy, type Lang } from './content'

const STORAGE_KEY = 'nsds-courses-lang'

const options: { value: Lang; label: string; aria: string }[] = [
  { value: 'en', label: 'English', aria: 'View this page in English' },
  { value: 'si', label: 'සිංහල', aria: 'මෙම පිටුව සිංහලෙන් බලන්න' },
]

export default function CoursesView() {
  // Always render English first so the server HTML and the first client render
  // match; the saved preference is applied right after hydration.
  const [lang, setLang] = useState<Lang>('en')

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'si' || saved === 'en') setLang(saved)
  }, [])

  const choose = (next: Lang) => {
    setLang(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Private mode / storage disabled — the toggle still works for this visit.
    }
  }

  const t = coursesCopy[lang]

  return (
    <div className="page">
      <div className="lang-switch-bar">
        <div className="container lang-switch-bar__inner">
          <div className="lang-switch" role="group" aria-label="Page language / පිටුවේ භාෂාව">
            <span className="lang-switch__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
              </svg>
            </span>
            {options.map((o) => (
              <button
                key={o.value}
                type="button"
                lang={o.value}
                onClick={() => choose(o.value)}
                aria-pressed={lang === o.value}
                aria-label={o.aria}
                className={`lang-switch__btn ${lang === o.value ? 'lang-switch__btn--active' : ''}`}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Keyed on the language so the whole page re-renders (and re-animates)
          cleanly when the visitor switches. */}
      <div key={lang} lang={lang} className="lang-body">
        <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} subtitle={t.hero.subtitle} />

        <section className="section">
          <div className="container">
            <div className="courses-grid">
              {t.courses.map((c, i) => (
                <Reveal key={c.title} direction="up" delay={i * 0.05}>
                  <article className="course-tier">
                    <div className="course-tier__top">
                      <span className="course-tier__badge">{c.badge}</span>
                      <span className="course-tier__tier">{c.tier}</span>
                    </div>

                    <h3>{c.title}</h3>

                    <div className="course-tier__price">
                      <span>{c.price}</span>
                      <small>{c.priceNote}</small>
                    </div>

                    <div className="course-tier__meta">
                      <div><strong>{t.labels.duration}</strong>{c.duration}</div>
                      <div><strong>{t.labels.hours}</strong>{c.hours}</div>
                    </div>

                    <ul className="course-tier__list">
                      {c.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>

                    <Link href={enrolHref(c.slug)} className="btn btn-primary course-tier__btn">
                      {t.labels.enrol}
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
              <Reveal><span className="eyebrow">{t.process.eyebrow}</span></Reveal>
              <Reveal delay={0.1}>
                <h2>
                  {t.process.headingLead}
                  <span className="serif-italic text-accent">{t.process.headingAccent}</span>
                </h2>
              </Reveal>
            </div>

            <div className="process__grid">
              {t.process.steps.map((s, i) => (
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
    </div>
  )
}
