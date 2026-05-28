import { Link } from 'react-router-dom'
import Logo from './Logo'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bg" />
      <div className="container footer__inner">
        <div className="footer__col footer__brand">
          <Logo />
          <p>
            Sri Lanka's modern driving school. Certified instructors,
            new vehicles, and a curriculum built for confident, safe drivers.
          </p>
          <div className="footer__social">
            {['Facebook', 'Instagram', 'YouTube', 'WhatsApp'].map((s) => (
              <a key={s} href="#" aria-label={s} className="footer__social-link">
                {s[0]}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer__col">
          <h4>Courses</h4>
          <span>Light Vehicle (Car)</span>
          <span>Motorcycle</span>
          <span>Three Wheeler</span>
          <span>Heavy Vehicle</span>
          <span>Defensive Driving</span>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <span>+94 77 123 4567</span>
          <span>hello@sagarikadriving.lk</span>
          <span>Main Street, Colombo</span>
          <span>Open: Mon - Sat · 7am - 7pm</span>
        </div>
      </div>

      <div className="footer__bottom container">
        <span>© {new Date().getFullYear()} New Sagarika Driving School. All rights reserved.</span>
        <span>Designed with precision · Built for the road ahead</span>
      </div>
    </footer>
  )
}
