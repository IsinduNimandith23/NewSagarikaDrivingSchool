import Link from 'next/link'
import PageHero from '@/components/PageHero'

export default function NotFound() {
  return (
    <div className="page">
      <PageHero
        eyebrow="404"
        title="Page not found."
        subtitle="The page you are looking for doesn't exist or may have been moved."
      />
      <section className="section">
        <div className="container" style={{ textAlign: 'center', paddingBottom: '4rem' }}>
          <Link href="/" className="btn btn-accent">
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  )
}
