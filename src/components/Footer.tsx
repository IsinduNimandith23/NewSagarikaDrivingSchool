import Link from 'next/link'
import Logo from './Logo'
import './Footer.css'

const socials = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/newsagarika',
    icon: (
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.9h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/newsagarikadrivingschool/',
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="16.8" cy="7.2" r="1.1" fill="currentColor" stroke="none" />
      </g>
    ),
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@newsagarikadrivingschool',
    icon: (
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3 0 .6.05.88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V8.66a8.16 8.16 0 0 0 4.77 1.52V6.79a4.85 4.85 0 0 1-1.04-.1Z" />
    ),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@newsagarikadrivingschool1999',
    icon: (
      <path d="M23.5 6.51a3.01 3.01 0 0 0-2.12-2.13C19.5 3.87 12 3.87 12 3.87s-7.5 0-9.38.51A3.01 3.01 0 0 0 .5 6.51C0 8.4 0 12 0 12s0 3.6.5 5.49a3.01 3.01 0 0 0 2.12 2.13c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.01 3.01 0 0 0 2.12-2.13C24 15.6 24 12 24 12s0-3.6-.5-5.49ZM9.6 15.6V8.4l6.24 3.6-6.24 3.6Z" />
    ),
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__glow" aria-hidden="true" />
      <div className="container footer__inner">
        <div className="footer__col footer__brand">
          <Logo />
          <p>
            An A grade driving school since 1960. Five branches across Colombo,
            brand new dual-pedal vehicles, and training for every vehicle class
            from motorcycle to passenger bus.
          </p>
          <div className="footer__social">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="footer__social-link"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  {s.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h4>Explore</h4>
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer__col">
          <h4>Courses</h4>
          <Link href="/courses">Full Time Course</Link>
          <Link href="/courses">Refresher Course</Link>
          <Link href="/courses">VIP Course</Link>
          <Link href="/courses">Off Peak Course</Link>
          <Link href="/courses">Customized Course</Link>
          <Link href="/courses">Special Course</Link>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <a href="tel:+94112745183" className="footer__contact">
            <span className="footer__contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
              </svg>
            </span>
            0112745183 / 0112837525
          </a>
          <a href="mailto:newsagarikadrivingschool@gmail.com" className="footer__contact">
            <span className="footer__contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 6L2 7" />
              </svg>
            </span>
            newsagarikadrivingschool@gmail.com
          </a>
          <span className="footer__contact">
            <span className="footer__contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            279/11, High Level Road, Pannipitiya
          </span>
          <span className="footer__contact">
            <span className="footer__contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
            </span>
            Open: Mon - Sun · 8:30am - 5:30pm
          </span>
        </div>
      </div>

      <div className="footer__bottom container">
        <span>© {new Date().getFullYear()} New Sagarika Driving School. All rights reserved.</span>
        <nav className="footer__legal" aria-label="Legal">
          <Link href="/return-policy">Return Policy</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-conditions">Terms &amp; Conditions</Link>
        </nav>
      </div>
    </footer>
  )
}
