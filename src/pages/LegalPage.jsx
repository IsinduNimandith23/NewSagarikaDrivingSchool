import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import './LegalPage.css'

export default function LegalPage({ eyebrow, title, subtitle, updated, intro, sections }) {
  return (
    <div className="page">
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} />

      <section className="section">
        <div className="container legal">
          <Reveal direction="up">
            <div className="legal__meta">
              {updated && <span className="legal__updated">Last updated: {updated}</span>}
              {intro && <p className="legal__intro">{intro}</p>}
            </div>
          </Reveal>

          {sections.map((s, i) => (
            <Reveal key={s.heading} direction="up" delay={Math.min(i * 0.05, 0.2)}>
              <div className="legal__block">
                <h2 className="legal__heading">
                  <span className="legal__num">{String(i + 1).padStart(2, '0')}</span>
                  {s.heading}
                </h2>
                {s.body.map((para, j) =>
                  Array.isArray(para) ? (
                    <ul key={j} className="legal__list">
                      {para.map((li, k) => (
                        <li key={k}>{li}</li>
                      ))}
                    </ul>
                  ) : (
                    <p key={j}>{para}</p>
                  )
                )}
              </div>
            </Reveal>
          ))}

          <Reveal direction="up">
            <div className="legal__contact glass-warm">
              <h3>Questions about this policy?</h3>
              <p>
                Reach our team and we'll be glad to help clarify anything before
                you enrol.
              </p>
              <div className="legal__contact-links">
                <a href="mailto:newsagarikadrivingschool@gmail.com">
                  newsagarikadrivingschool@gmail.com
                </a>
                <a href="tel:+94112745183">0112745183 / 0112837525</a>
                <span>279/11, High Level Road, Pannipitiya</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
