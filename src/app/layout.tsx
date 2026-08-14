import type { Metadata, Viewport } from 'next'
import { Manrope, Inter, Noto_Sans_Sinhala } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
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

// Sinhala script has no coverage in Manrope/Inter, so pages offering a Sinhala
// translation fall back to this via the :lang(si) rule in index.css.
const notoSinhala = Noto_Sans_Sinhala({
  subsets: ['sinhala'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sinhala',
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
// Poya days are lunar, so schema.org cannot express them as a recurring closure -
// the closure is noted in `description` and shown on the site copy instead.
const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  additionalType: 'https://schema.org/EducationalOrganization',
  name: 'New Sagarika Driving School',
  description:
    'An A grade driving school since 1960 with five branches across the Colombo district. Training for every vehicle class from motorcycle to passenger bus with brand new dual-pedal vehicles. Open Monday to Sunday, 8:30am to 5:30pm; closed on Poya days.',
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
    opens: '08:30',
    closes: '17:30',
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
    <html lang="en" className={`${manrope.variable} ${inter.variable} ${notoSinhala.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
