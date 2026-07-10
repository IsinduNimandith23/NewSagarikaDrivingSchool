import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import './About.css'

export const metadata: Metadata = {
  title: 'About',
  description:
    'An A grade driving school based in Pannipitiya with four more branches across the Colombo district — over 65 years of trusted driver education since 1960.',
  alternates: { canonical: '/about' },
}

const values = [
  { num: '01', title: 'Our Vision',  text: 'To excel as a leader among the finest in the industry.' },
  { num: '02', title: 'Our Mission', text: 'To provide professional driving training aligned with highway regulations and the Highway Act.' },
  { num: '03', title: 'Our Values',  text: 'Discipline, safety and integrity - taught through the road ordinance and international standards.' }
]

const timeline = [
  { year: '1960', title: 'Founded in Badulla',         text: 'Established by Mr. Romanis as the first driving school in Uva Province, setting the foundation for decades of trusted instruction.' },
  { year: '1970s', title: 'A family legacy continues', text: 'After the founder\'s passing, his sons carried New Sagarika Driving School forward, opening branches in cities across Sri Lanka.' },
  { year: '1990s', title: 'Expansion to Colombo',      text: 'New Sagarika Driving School established a strong presence in the Colombo district with new branches and a growing fleet.' },
  { year: '2010s', title: 'Five Colombo branches',     text: 'Pannipitiya (Main), Thalawathugoda, Werahera, Hokandara and Mattegoda branches serving the western region.' },
  { year: 'Today', title: '65+ years of excellence',   text: 'An A grade driving school delivering training with brand new dual-pedal vehicles for every vehicle class.' }
]

const team = [
  { name: 'Mr. Romanis',          role: 'Founder (1960)',                 initials: 'MR' },
  { name: 'The Romanis Family',   role: 'Continuing the legacy',          initials: 'RF' },
  { name: 'Senior Instructors',   role: 'Experienced motor traffic examiners', initials: 'SI' },
  { name: 'Certified Coaches',    role: 'Highway code & theory experts',  initials: 'CC' }
]

export default function AboutPage() {
  return (
    <div className="page">
      <PageHero
        eyebrow="Who We Are"
        title="About New Sagarika Driving School."
        subtitle="An A grade driving school based in Pannipitiya with four more branches across the Colombo district - over 65 years of trusted driver education."
      />

      <section className="section">
        <div className="container about-intro">
          <Reveal direction="up">
            <div className="about-intro__visual">
              <div className="about-intro__big">65+</div>
              <div className="about-intro__small">
                <strong>Years of Experience</strong>
                <span>Since 1960</span>
              </div>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <div>
              <span className="eyebrow">About Us</span>
              <h2 style={{ margin: '1rem 0 1.4rem' }}>
                An <span className="serif-italic text-accent">A grade</span> driving school.
              </h2>
              <p>
                New Sagarika Driving School is an A grade driving school based in
                Pannipitiya along with four more branches in the Colombo district.
                Training and licensing are provided for all classes of vehicles -
                from motorcycles to passenger buses - with a complete set of
                component guides.
              </p>
              <p style={{ marginTop: '1.2rem' }}>
                We deliver our service with brand new vehicles equipped with the
                &quot;Dual pedal system&quot;, ensuring safety and confidence for every
                learner from the first lesson onward.
              </p>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: '1.8rem' }}>
                Visit Our Branch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container about-intro">
          <Reveal direction="up">
            <div>
              <span className="eyebrow">Our History</span>
              <h2 style={{ margin: '1rem 0 1.4rem' }}>
                A legacy from <span className="serif-italic text-accent">1960.</span>
              </h2>
              <p>
                The founder of New Sagarika Driving School, Mr. Romanis, was an iconic
                personality during the early period of the business. He worked
                closely with the most senior commissioners and well experienced
                motor traffic examiners while engaging in the business. After he
                passed away, his sons continued &quot;New Sagarika Driving School&quot; in different
                cities all around Sri Lanka.
              </p>
              <p style={{ marginTop: '1.2rem' }}>
                Founded in Badulla as the first driving school in Uva Province
                (1960), New Sagarika Driving School has provided excellent service to society
                by delivering well-disciplined drivers. With more than 50 years of
                experience in the industry, our course outlines follow the road
                ordinance and international standards.
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <div className="about-intro__visual">
              <div className="about-intro__big">1960</div>
              <div className="about-intro__small">
                <strong>Established</strong>
                <span>Badulla, Uva Province</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading section-heading--center">
            <Reveal><span className="eyebrow">What Drives Us</span></Reveal>
            <Reveal delay={0.1}><h2>Vision, mission & <span className="serif-italic text-accent">values.</span></h2></Reveal>
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

      <section className="section section--alt">
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

      <section className="section">
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
