import type { Metadata, Viewport } from 'next'
import { Manrope, Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '@/index.css'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: {
    default: 'New Sagarika Driving School',
    template: '%s | New Sagarika Driving School',
  },
  description:
    'New Sagarika Driving School - Modern, professional driver training. Learn safely with certified instructors.',
  icons: { icon: '/favicon.png', apple: '/favicon.png' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'New Sagarika Driving School',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 675,
        alt: 'New Sagarika Driving School - professional driver training since 1960',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Sagarika Driving School',
    description:
      'An A grade driving school since 1960 with five branches across Colombo. Every vehicle class from motorcycle to passenger bus.',
    images: ['/og-image.jpg'],
  },
}

// LocalBusiness structured data for Google local search results
// (address/phone/hours are the Pannipitiya main branch).
const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  additionalType: 'https://schema.org/EducationalOrganization',
  name: 'New Sagarika Driving School',
  description:
    'An A grade driving school since 1960 with five branches across the Colombo district. Training for every vehicle class from motorcycle to passenger bus with brand new dual-pedal vehicles.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  logo: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'}/logo.png`,
  image: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'}/og-image.jpg`,
  telephone: '+94112745183',
  email: 'newsagarikadrivingschool@gmail.com',
  foundingDate: '1960',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '279/11, High Level Road, Mahalwarawa, Kottawa',
    addressLocality: 'Pannipitiya',
    addressRegion: 'Western Province',
    addressCountry: 'LK',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 6.8434606,
    longitude: 79.9577823,
  },
  hasMap:
    'https://www.google.com/maps/place/New+Sagarika+Driving+School/@6.8434659,79.9552074,17z',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '08:00',
    closes: '18:00',
  },
  sameAs: [
    'https://www.facebook.com/newsagarika',
    'https://www.instagram.com/newsagarikadrivingschool/',
    'https://www.tiktok.com/@newsagarikadrivingschool',
    'https://www.youtube.com/@newsagarikadrivingschool1999',
  ],
}

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
