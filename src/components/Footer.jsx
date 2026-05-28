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
            An A grade driving school since 1960. Five branches across Colombo,
            brand new dual-pedal vehicles, and training for every vehicle class
            from motorcycle to passenger bus.
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
          <span>Full Time Course</span>
          <span>Refresher Course</span>
          <span>VIP Course</span>
          <span>Off Peak Course</span>
          <span>Customized Course</span>
          <span>Special Course</span>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <span>0112745183 / 0112837525</span>
          <span>newsagarikadrivingschool@gmail.com</span>
          <span>279/11, High Level Road, Pannipitiya</span>
          <span>Open: Mon - Sun · 8am - 6pm</span>
        </div>
      </div>

      <div className="footer__bottom container">
        <span>© {new Date().getFullYear()} New Sagarika Driving School. All rights reserved.</span>
        <span>Designed with precision · Built for the road ahead</span>
      </div>
    </footer>
  )
}
