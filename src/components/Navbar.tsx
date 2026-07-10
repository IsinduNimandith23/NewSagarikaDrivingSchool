'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Logo from './Logo'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/courses', label: 'Courses' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Only the Home page top is "over dark" (the video hero).
  const onDark = pathname === '/' && !scrolled

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`nav ${scrolled ? 'nav--scrolled' : ''} ${onDark ? 'nav--on-dark' : 'nav--on-light'}`}
    >
      <div className="nav__inner container">
        <Link href="/" className="nav__brand" onClick={() => setOpen(false)}>
          <Logo height={88} />
        </Link>

        <div className="nav__right">
          <nav className={`nav__links ${open ? 'nav__links--open' : ''}`}>
            {links.map((l) => {
              const isActive =
                l.to === '/' ? pathname === '/' : pathname.startsWith(l.to)
              return (
                <Link
                  key={l.to}
                  href={l.to}
                  onClick={() => setOpen(false)}
                  className={`nav__link ${isActive ? 'nav__link--active' : ''}`}
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-dot"
                      className="nav__dot"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="nav__cta"
          >
            Get in Touch
            <span className="nav__cta-arrow">→</span>
          </Link>
        </div>

        <button
          className={`nav__burger ${open ? 'nav__burger--open' : ''}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </motion.header>
  )
}
