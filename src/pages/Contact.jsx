import { useState } from 'react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import './Contact.css'

const contactInfo = [
  { label: 'Phone',    value: '+94 77 123 4567',           sub: 'Mon – Sat · 7am – 7pm' },
  { label: 'Email',    value: 'hello@sagarikadriving.lk',  sub: 'We reply within four hours' },
  { label: 'Branch',   value: '24 Main Street, Colombo 05', sub: 'Plus three branches island-wide' },
  { label: 'WhatsApp', value: '+94 71 987 6543',           sub: 'Instant chat support' }
]

const faqs = [
  { q: 'How long does it take to get a license?', a: 'Most students complete the Class B program in four to six weeks. Class A is typically two to three weeks. Heavy vehicles take six to eight weeks.' },
  { q: 'Do you provide the vehicle for the RTA examination?', a: 'Yes — we provide a fully-prepared dual-control vehicle and accompany you to the examination centre for moral support.' },
  { q: 'Can I book a single trial lesson?', a: 'Absolutely. We offer a complimentary thirty-minute trial lesson so you can experience our instruction style risk-free.' },
  { q: 'What documents do I need to enrol?', a: 'A copy of your NIC, two passport-size photographs, and a medical certificate. We handle the rest of the RTA paperwork for you.' }
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', course: 'Class B - Car', message: '' })
  const [sent, setSent] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', phone: '', course: 'Class B - Car', message: '' })
  }

  return (
    <div className="page">
      <PageHero
        eyebrow="Let's Talk"
        title="Get in touch."
        subtitle="Have a question, want to enrol, or curious about a complimentary trial lesson? Drop us a message and we will be in your inbox within four hours."
      />

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
                      <option>Class B - Car</option>
                      <option>Class A - Motorcycle</option>
                      <option>Class C - Three Wheeler</option>
                      <option>Class D-E - Heavy Vehicle</option>
                      <option>Defensive Driving</option>
                      <option>Refresher Programme</option>
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
                <h3 style={{ marginTop: '0.6rem' }}>Main Branch — Colombo</h3>
                <p style={{ color: 'var(--ink-3)' }}>24 Main Street, Colombo 05, Sri Lanka</p>
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
                <span className="eyebrow">Opening Hours</span>
                <ul className="hours">
                  <li><span>Monday – Friday</span><strong>7:00 – 19:00</strong></li>
                  <li><span>Saturday</span><strong>7:00 – 17:00</strong></li>
                  <li><span>Sunday</span><strong>By appointment</strong></li>
                  <li><span>Public Holidays</span><strong>Closed</strong></li>
                </ul>
              </div>
            </Reveal>
          </div>
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
