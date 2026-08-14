'use client'

import Link from 'next/link'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import { PREVIEW_OFF, PREVIEW_PARAM } from '@/lib/preview'
import {
  hero,
  pastPapers,
  trialChecklist,
  videos,
  writtenTopics,
} from './content'

export default function ResourcesView() {
  return (
    <div className="page">
      {/* Only ever rendered in preview mode — see src/lib/preview.ts */}
      <div className="res-preview-bar">
        <div className="container res-preview-bar__inner">
          <span className="res-preview-bar__tag">Preview</span>
          <span className="res-preview-bar__text">
            Visitors see the Coming Soon page. Content lives in{' '}
            <code>src/app/resources/content.ts</code>.
          </span>
          <a
            className="res-preview-bar__exit"
            href={`/resources?${PREVIEW_PARAM}=${PREVIEW_OFF}`}
          >
            Exit preview
          </a>
        </div>
      </div>

      <PageHero eyebrow={hero.eyebrow} title={hero.title} subtitle={hero.subtitle} />

      {/* ===== Past papers ===== */}
      <section className="section" id="past-papers">
        <div className="container">
          <div className="section-heading">
            <Reveal><span className="eyebrow">Past Papers</span></Reveal>
            <Reveal delay={0.1}>
              <h2>
                Practise the real{' '}
                <span className="serif-italic text-accent">written paper</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="res-lead">
                Model papers in the medium you registered for. Sit one under exam
                conditions — forty minutes, no notes — before you look at the answers.
              </p>
            </Reveal>
          </div>

          <div className="res-papers">
            {pastPapers.map((p, i) => (
              <Reveal key={p.id} direction="up" delay={i * 0.05}>
                <article className={`res-paper ${p.href ? '' : 'res-paper--pending'}`}>
                  <div className="res-paper__top">
                    <span className="res-chip">{p.medium}</span>
                    <span className="res-paper__edition">{p.edition}</span>
                  </div>

                  <h3>{p.title}</h3>

                  <p className="res-paper__meta">{p.questions} questions · PDF</p>

                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary res-paper__btn"
                    >
                      Download paper
                    </a>
                  ) : (
                    <span className="res-paper__btn res-paper__btn--pending">
                      Coming soon
                    </span>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Tutorial videos ===== */}
      <section className="section res-videos" id="videos">
        <div className="container">
          <div className="section-heading">
            <Reveal><span className="eyebrow">Tutorials</span></Reveal>
            <Reveal delay={0.1}>
              <h2>
                Watch it done{' '}
                <span className="serif-italic text-accent">properly</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="res-lead">
                Short lessons from our instructors — the signs that come up most,
                the paper answered question by question, and every obstacle on the
                trial track.
              </p>
            </Reveal>
          </div>

          <div className="res-videos__grid">
            {videos.map((v, i) => (
              <Reveal key={v.id} direction="up" delay={i * 0.06}>
                <article className={`res-video ${v.youtubeId ? '' : 'res-video--pending'}`}>
                  <div className="res-video__frame">
                    {v.youtubeId ? (
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}`}
                        title={v.title}
                        loading="lazy"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <div className="res-video__placeholder">
                        <span className="res-video__play" aria-hidden="true">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 7.5 17 12l-8 4.5z" />
                          </svg>
                        </span>
                        <span>Video coming soon</span>
                      </div>
                    )}
                  </div>
                  <div className="res-video__body">
                    <h3>{v.title}</h3>
                    <p>{v.description}</p>
                    <span className="res-video__duration">{v.duration}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="res-videos__cta">
              <a
                href="https://www.youtube.com/@newsagarikadrivingschool1999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-arrow"
              >
                All videos on our YouTube channel →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== Written exam guide ===== */}
      <section className="section" id="written-exam">
        <div className="container">
          <div className="section-heading">
            <Reveal><span className="eyebrow">Written Examination</span></Reveal>
            <Reveal delay={0.1}>
              <h2>
                What the paper actually{' '}
                <span className="serif-italic text-accent">asks you</span>
              </h2>
            </Reveal>
          </div>

          <div className="res-topics">
            {writtenTopics.map((t, i) => (
              <Reveal key={t.title} direction="up" delay={i * 0.07}>
                <article className="res-topic">
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                  <ul className="res-topic__list">
                    {t.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Trial preparation ===== */}
      <section className="section res-trial" id="trial">
        <div className="container">
          <div className="section-heading">
            <Reveal><span className="eyebrow">The Trial</span></Reveal>
            <Reveal delay={0.1}>
              <h2>
                Marked from the moment you{' '}
                <span className="serif-italic text-accent">sit down</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="res-lead">
                Nothing on the practical test is a secret. Work through this list
                with your instructor until every line is automatic.
              </p>
            </Reveal>
          </div>

          <ol className="res-checklist">
            {trialChecklist.map((c, i) => (
              <Reveal key={c.title} direction="up" delay={i * 0.06}>
                <li className="res-check">
                  <span className="res-check__num">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{c.title}</h3>
                    <p>{c.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={0.2}>
            <div className="res-cta">
              <h3>Still not sure about something?</h3>
              <p>
                Our instructors answer student questions every day — call the
                branch or send us a message.
              </p>
              <Link href="/contact" className="btn btn-accent">
                Talk to an instructor
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
