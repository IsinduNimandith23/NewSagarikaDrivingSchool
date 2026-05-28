import { useState } from 'react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import './Contact.css'

const contactInfo = [
  { label: 'Phone',    value: '0112745183 / 0112837525',               sub: 'Pannipitiya Main · Mon – Sun · 8am – 6pm' },
  { label: 'Email',    value: 'newsagarikadrivingschool@gmail.com',    sub: 'We reply within four hours' },
  { label: 'Main Branch', value: '279/11, High Level Road, Pannipitiya', sub: 'Plus 5 more branches in Colombo' },
  { label: 'Learning Time', value: 'Mon – Sun · 8am – 6pm',            sub: 'Open every day of the week' }
]

const branches = [
  { name: 'Pannipitiya Branch',    tag: 'Main Branch', address: '279/11, High Level Road, Mahalwarawa, Kottawa, Pannipitiya', reg: '297',  phones: ['0112745183', '0112837525'] },
  { name: 'Thalawathugoda Branch', tag: 'Branch',      address: '214/B3, Pannipitiya Road, Thalawathugoda',                   reg: '972',  phones: ['0112775318'] },
  { name: 'Werahera Branch',       tag: 'Branch',      address: '67/3, Katuwawala, Boralesgamuwa',                            reg: '971',  phones: ['4347650'] },
  { name: 'Hokandara Branch',      tag: 'Branch',      address: '194/3, Hokandara South, Hokandara',                          reg: '1153', phones: ['0112408643'] },
  { name: 'Mattegoda Branch',      tag: 'Branch',      address: '105/1B, Mattegoda',                                          reg: '1152', phones: ['0112178888'] }
]

const faqs = [
  { q: 'What courses do you offer?', a: 'We offer Full Time, Refresher, VIP, Off Peak, Customized and Special courses — covering every vehicle class from motorcycle to passenger bus.' },
  { q: 'What kind of vehicles do you use for training?', a: 'We use brand new vehicles equipped with the "Dual pedal system" for maximum safety and confidence during every lesson.' },
  { q: 'How many branches do you have?', a: 'We have six branches across the Colombo district: Pannipitiya (Main), Thalawathugoda, Werahera, Hokandara and Mattegoda.' },
  { q: 'What are your learning hours?', a: 'Our learning time is Monday to Sunday, 8:00am to 6:00pm. We are open every day of the week to accommodate every learner\'s schedule.' }
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', course: 'Full Time Course', message: '' })
  const [sent, setSent] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', phone: '', course: 'Full Time Course', message: '' })
  }

  return (
    <div className="page">
      <PageHero
        eyebrow="Let's Talk"
        title="Get in touch."
        subtitle="Six branches across the Colombo district. Drop us a message and we will be in your inbox within four hours."
      />

      <section className="section section--alt">
        <div className="container contact-grid">
          <Reveal direction="up">
            <div className="contact-form">
              <span className="eyebrow">Send a Message</span>
              <h2 style={{ marginTop: '0.6rem', marginBottom: '2rem' }}>
                Book your <span className="serif-italic text-accent">free trial.</span>
              </h2>

              <form onSubmit={handleSubmit} className="form">
                <div className="form__row">
                  <div className="form__field">
                    <label>Full Name</label>
                    <input type="text" name="name" value={form.name}
                      onChange={handleChange} required placeholder="Your name" />
                  </div>
                  <div className="form__field">
                    <label>Phone</label>
                    <input type="tel" name="phone" value={form.phone}
                      onChange={handleChange} required placeholder="+94 ..." />
                  </div>
                </div>

                <div className="form__row">
                  <div className="form__field">
                    <label>Email</label>
                    <input type="email" name="email" value={form.email}
                      onChange={handleChange} required placeholder="you@example.com" />
                  </div>
                  <div className="form__field">
                    <label>Course</label>
                    <select name="course" value={form.course} onChange={handleChange}>
                      <option>Full Time Course</option>
                      <option>Refresher Course</option>
                      <option>VIP Course</option>
                      <option>Off Peak Course</option>
                      <option>Customized Course</option>
                      <option>Special Course</option>
                    </select>
                  </div>
                </div>

                <div className="form__field">
                  <label>Message</label>
                  <textarea name="message" rows="5" value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us a little about yourself, preferred timing, etc." />
                </div>

                <button type="submit" className="btn btn-accent form__submit">
                  {sent ? '✓ Message Sent' : 'Send Message'}
                </button>
                {sent && (
                  <div className="form__success">
                    Thank you. We will reach out within four hours.
                  </div>
                )}
              </form>
            </div>
          </Reveal>

          <div className="contact-side">
            <Reveal direction="up" delay={0.1}>
              <div className="contact-side__card">
                <span className="eyebrow">Visit Us</span>
                <h3 style={{ marginTop: '0.6rem' }}>Pannipitiya — Main Branch</h3>
                <p style={{ color: 'var(--ink-3)' }}>279/11, High Level Road, Mahalwarawa, Kottawa, Pannipitiya</p>
                <div className="contact-map__visual">
                  <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice">
                    <rect width="400" height="240" fill="#F4F2EE" />
                    <path d="M 0 80 L 400 60"   stroke="#E8E6E1" strokeWidth="1.5" />
                    <path d="M 0 140 L 400 130" stroke="#E8E6E1" strokeWidth="1.5" />
                    <path d="M 0 200 L 400 190" stroke="#E8E6E1" strokeWidth="1.5" />
                    <path d="M 80 0 L 60 240"   stroke="#E8E6E1" strokeWidth="1.5" />
                    <path d="M 220 0 L 200 240" stroke="#E8E6E1" strokeWidth="1.5" />
                    <path d="M 340 0 L 320 240" stroke="#E8E6E1" strokeWidth="1.5" />
                    <circle cx="200" cy="120" r="40" fill="rgba(255,94,0,0.08)" />
                    <circle cx="200" cy="120" r="20" fill="rgba(255,94,0,0.16)" />
                    <circle cx="200" cy="120" r="8"  fill="#FF5E00">
                      <animate attributeName="r" values="8;12;8" dur="2.4s" repeatCount="indefinite" />
                    </circle>
                  </svg>
                </div>
                <a href="#" className="btn btn-ghost" style={{ marginTop: '1rem' }}>Open in Maps</a>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <div className="contact-side__card">
                <span className="eyebrow">Learning Time</span>
                <ul className="hours">
                  <li><span>Monday – Sunday</span><strong>8:00 – 18:00</strong></li>
                  <li><span>Open Every Day</span><strong>All week</strong></li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading section-heading--center">
            <Reveal><span className="eyebrow">Our Branches</span></Reveal>
            <Reveal delay={0.1}>
              <h2>Six branches across <span className="serif-italic text-accent">Colombo.</span></h2>
            </Reveal>
          </div>

          <div className="branches-grid">
            {branches.map((b, i) => (
              <Reveal key={b.name} direction="up" delay={i * 0.06}>
                <div className="branch-card">
                  <span className="branch-card__tag">{b.tag}</span>
                  <h3>{b.name}</h3>
                  <p>{b.address}</p>
                  <ul className="branch-card__phones">
                    {b.phones.map((ph) => (
                      <li key={ph}>
                        <a href={`tel:${ph}`}>{ph}</a>
                      </li>
                    ))}
                  </ul>
                  <small>Reg. No. {b.reg}</small>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="branches-learning-time">
              <span>Learning Time:</span> Mon – Sun · 8:00am to 6:00pm
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container contact-info">
          {contactInfo.map((c, i) => (
            <Reveal key={c.label} direction="up" delay={i * 0.07}>
              <div className="contact-info__card">
                <span className="contact-info__label">{c.label}</span>
                <strong>{c.value}</strong>
                <small>{c.sub}</small>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading section-heading--center">
            <Reveal><span className="eyebrow">FAQ</span></Reveal>
            <Reveal delay={0.1}><h2>Got <span className="serif-italic text-accent">questions?</span></h2></Reveal>
          </div>
          <div className="faqs">
            {faqs.map((f, i) => (
              <Reveal key={f.q} direction="up" delay={i * 0.05}>
                <div
                  className={`faq ${openFaq === i ? 'faq--open' : ''}`}
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                >
                  <div className="faq__q">
                    <span>{f.q}</span>
                    <span className="faq__icon">+</span>
                  </div>
                  <div className="faq__a">{f.a}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
