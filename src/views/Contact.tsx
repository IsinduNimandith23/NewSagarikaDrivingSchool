'use client'

import { useState, useEffect } from 'react'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import './Contact.css'

const contactInfo = [
  { label: 'Phone',    value: '0112745183 / 0112837525',               sub: 'Pannipitiya Main · Mon – Sun · 8:30am – 5:30pm' },
  { label: 'Email',    value: 'newsagarikadrivingschool@gmail.com',    sub: 'We reply within four hours' },
  { label: 'Main Branch', value: '279/11, High Level Road, Pannipitiya', sub: 'Plus 4 more branches in Colombo' },
  { label: 'Learning Time', value: 'Mon – Sun · 8:30am – 5:30pm',      sub: 'Open every day of the week' }
]

// TODO: replace mapEmbed / mapLink for Werahera with its real Google Maps URL.
// It still points to the Pannipitiya main branch location as a placeholder.
const PANNIPITIYA_EMBED = 'https://maps.google.com/maps?q=6.8434606,79.9577823&t=&z=17&ie=UTF8&iwloc=&output=embed'
const PANNIPITIYA_LINK = 'https://www.google.com/maps/place/New+Sagarika+Driving+School/@6.8434659,79.9552074,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae2504ebcb20d6b:0xc440d1643f3a0e3a!8m2!3d6.8434606!4d79.9577823!16s%2Fg%2F1ydpvbnlp'

const THALAWATHUGODA_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63381.72775158214!2d79.92194446720482!3d6.847618862028639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae250967c646f37%3A0xe20d6b8fffaeebac!2sNew%20Sagarika%20Learners!5e0!3m2!1sen!2slk!4v1784388942742!5m2!1sen!2slk'
const THALAWATHUGODA_LINK = 'https://maps.app.goo.gl/Lu3UvaymFj2pjt26A'

const HOKANDARA_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63381.72775158214!2d79.92194446720482!3d6.847618862028639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae251c7175871b5%3A0xc088061bb4c524aa!2sNew%20Sagarika%20Driving%20School!5e0!3m2!1sen!2slk!4v1784389135074!5m2!1sen!2slk'
const HOKANDARA_LINK = 'https://maps.app.goo.gl/VxwaqeAaBGRhFVZQ8'

const MATTEGODA_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63381.72775158214!2d79.92194446720482!3d6.847618862028639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae251d427676ff9%3A0x5925a2c0dd4dc35b!2sNew%20Sagarika%20Learners!5e0!3m2!1sen!2slk!4v1784389153879!5m2!1sen!2slk'
const MATTEGODA_LINK = 'https://maps.app.goo.gl/TiFga6o83RZsvVk19'

const branches = [
  { name: 'Pannipitiya Branch',    tag: 'Main Branch', address: '279/11, High Level Road, Mahalwarawa, Kottawa, Pannipitiya', reg: 'DS 297',  phones: ['0112745183', '0112837525'], mapEmbed: PANNIPITIYA_EMBED, mapLink: PANNIPITIYA_LINK },
  { name: 'Thalawathugoda Branch', tag: 'Branch',      address: '214/B3, Pannipitiya Road, Thalawathugoda',                   reg: 'DS 972',  phones: ['0112775318'],               mapEmbed: THALAWATHUGODA_EMBED, mapLink: THALAWATHUGODA_LINK },
  { name: 'Werahera Branch',       tag: 'Branch',      address: '67/3, Katuwawala, Boralesgamuwa',                            reg: 'DS 971',  phones: ['4347650'],                  mapEmbed: PANNIPITIYA_EMBED, mapLink: PANNIPITIYA_LINK },
  { name: 'Hokandara Branch',      tag: 'Branch',      address: '194/3, Hokandara South, Hokandara',                          reg: 'DS 1153', phones: ['0112408643'],               mapEmbed: HOKANDARA_EMBED, mapLink: HOKANDARA_LINK },
  { name: 'Mattegoda Branch',      tag: 'Branch',      address: '105/1B, Mattegoda',                                          reg: 'DS 1152', phones: ['0112178888'],               mapEmbed: MATTEGODA_EMBED, mapLink: MATTEGODA_LINK }
]

const faqs = [
  { q: 'What courses do you offer?', a: 'We offer Full Time, Refresher, VIP, Off Peak, Customized and Special courses - covering every vehicle class from motorcycle to passenger bus.' },
  { q: 'What kind of vehicles do you use for training?', a: 'We use brand new vehicles equipped with the "Dual pedal system" for maximum safety and confidence during every lesson.' },
  { q: 'How many branches do you have?', a: 'We have five branches across the Colombo district: Pannipitiya (Main), Thalawathugoda, Werahera, Hokandara and Mattegoda.' },
  { q: 'What are your learning hours?', a: 'Our learning time is Monday to Sunday, 8:30am to 5:30pm. We are open every day of the week to accommodate every learner\'s schedule.' }
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', course: 'Full Time Course', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [openFaq, setOpenFaq] = useState(0)
  const [activeBranch, setActiveBranch] = useState<(typeof branches)[number] | null>(null)

  useEffect(() => {
    if (!activeBranch) return
    // No scroll lock: the modal is a full-screen fixed overlay, and locking
    // scroll resets window.scrollY to 0, which makes the navbar think it's at
    // the top and slide its links back to the right. Just handle Escape.
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setActiveBranch(null) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [activeBranch])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('send failed')
      setStatus('sent')
      setForm({ name: '', email: '', phone: '', course: 'Full Time Course', message: '' })
    } catch {
      setStatus('error')
    }
    setTimeout(() => setStatus('idle'), 5000)
  }

  return (
    <div className="page">
      <PageHero
        eyebrow="Let's Talk"
        title="Get in touch."
        subtitle="Five branches across the Colombo district. Drop us a message and we will be in your inbox within four hours."
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
                  <textarea name="message" rows={5} value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us a little about yourself, preferred timing, etc." />
                </div>

                <button type="submit" className="btn btn-accent form__submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : status === 'sent' ? '✓ Message Sent' : 'Send Message'}
                </button>
                {status === 'sent' && (
                  <div className="form__success">
                    Thank you. We will reach out within four hours.
                  </div>
                )}
                {status === 'error' && (
                  <div className="form__success form__success--error">
                    Something went wrong. Please try again or call us on 0112745183.
                  </div>
                )}
              </form>
            </div>
          </Reveal>

          <div className="contact-side">
            <Reveal direction="up" delay={0.1}>
              <div className="contact-side__card">
                <span className="eyebrow">Visit Us</span>
                <h3 style={{ marginTop: '0.6rem' }}>Pannipitiya - Main Branch</h3>
                <p style={{ color: 'var(--ink-3)' }}>279/11, High Level Road, Mahalwarawa, Kottawa, Pannipitiya</p>
                <div className="contact-map__visual">
                  <iframe
                    title="New Sagarika Driving School location"
                    src="https://maps.google.com/maps?q=6.8434606,79.9577823&t=&z=17&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <a
                  href="https://www.google.com/maps/place/New+Sagarika+Driving+School/@6.8434659,79.9552074,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae2504ebcb20d6b:0xc440d1643f3a0e3a!8m2!3d6.8434606!4d79.9577823!16s%2Fg%2F1ydpvbnlp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                  style={{ marginTop: '1rem' }}
                >
                  Open in Maps
                </a>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <div className="contact-side__card">
                <span className="eyebrow">Learning Time</span>
                <ul className="hours">
                  <li><span>Monday – Sunday</span><strong>8:30am – 5:30pm</strong></li>
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
              <h2>Five branches across <span className="serif-italic text-accent">Colombo.</span></h2>
            </Reveal>
          </div>

          <div className="branches-grid">
            {branches.map((b, i) => (
              <Reveal key={b.name} direction="up" delay={i * 0.06}>
                <button
                  type="button"
                  className="branch-card"
                  onClick={() => setActiveBranch(b)}
                  aria-label={`View ${b.name} on the map`}
                >
                  <span className="branch-card__tag">{b.tag}</span>
                  <h3>{b.name}</h3>
                  <p>{b.address}</p>
                  <ul className="branch-card__phones">
                    {b.phones.map((ph) => (
                      <li key={ph}>
                        <a href={`tel:${ph}`} onClick={(e) => e.stopPropagation()}>{ph}</a>
                      </li>
                    ))}
                  </ul>
                  <small>Reg. No: {b.reg}</small>
                  <span className="branch-card__cta">View on map →</span>
                </button>
              </Reveal>
            ))}
          </div>
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

      {activeBranch && (
        <div
          className="branch-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeBranch.name} location`}
          onClick={() => setActiveBranch(null)}
        >
          <div className="branch-modal__panel" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="branch-modal__close"
              onClick={() => setActiveBranch(null)}
              aria-label="Close"
            >
              ×
            </button>
            <span className="branch-card__tag">{activeBranch.tag}</span>
            <h3 className="branch-modal__title">{activeBranch.name}</h3>
            <p className="branch-modal__address">{activeBranch.address}</p>
            <div className="branch-modal__map">
              <iframe
                title={`${activeBranch.name} location`}
                src={activeBranch.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="branch-modal__actions">
              <ul className="branch-card__phones">
                {activeBranch.phones.map((ph) => (
                  <li key={ph}><a href={`tel:${ph}`}>{ph}</a></li>
                ))}
              </ul>
              <a
                href={activeBranch.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                Get Directions ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
