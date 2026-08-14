/**
 * Bilingual copy for the Courses page.
 *
 * Translations are hand-written (not machine translated) so the Sinhala reads
 * naturally for local customers. Both objects must keep the same shape — the
 * page renders whichever one the visitor picks with the language toggle.
 */

import type { CourseSlug } from '@/lib/courses'

export type Lang = 'en' | 'si'

export type Course = {
  /** Ties the card to the shared course list so Enrol Now can deep-link. */
  slug: CourseSlug
  badge: string
  tier: string
  title: string
  price: string
  priceNote: string
  duration: string
  hours: string
  features: string[]
}

export type Step = { n: string; title: string; text: string }

export type CoursesCopy = {
  hero: { eyebrow: string; title: string; subtitle: string }
  labels: { duration: string; hours: string; enrol: string }
  courses: Course[]
  process: {
    eyebrow: string
    headingLead: string
    headingAccent: string
    steps: Step[]
  }
}

const en: CoursesCopy = {
  hero: {
    eyebrow: 'Our Programs',
    title: 'Driving courses built for you.',
    subtitle:
      'From learner permits to professional heavy-vehicle licenses, every program is designed with safety, structure and real road experience at its core.',
  },
  labels: {
    duration: 'Duration',
    hours: 'Hours',
    enrol: 'Enrol Now',
  },
  courses: [
    {
      slug: 'full-time',
      badge: 'Most Popular',
      tier: 'Programme',
      title: 'Full Time Course',
      price: 'Enquire',
      priceNote: 'full course',
      duration: 'Flexible',
      hours: 'Comprehensive schedule',
      features: [
        'All vehicle classes covered',
        'Brand new dual-pedal vehicles',
        'Highway code and Highway Act training',
        'Component guides included',
        'License application support',
      ],
    },
    {
      slug: 'refresher',
      badge: 'Returning Drivers',
      tier: 'Programme',
      title: 'Refresher Course',
      price: 'Enquire',
      priceNote: 'full course',
      duration: 'Flexible',
      hours: 'Tailored sessions',
      features: [
        'Confidence rebuild',
        'Modern traffic awareness',
        'Highway re-introduction',
        'Parking and manoeuvring',
        'Personal coach assigned',
      ],
    },
    {
      slug: 'vip',
      badge: 'Premium',
      tier: 'Programme',
      title: 'VIP Course',
      price: 'Enquire',
      priceNote: 'full course',
      duration: 'Flexible',
      hours: 'Priority scheduling',
      features: [
        'One-to-one personal instruction',
        'Priority booking slots',
        'Pick-up and drop-off available',
        'Senior instructor assigned',
        'Fast-tracked license process',
      ],
    },
    {
      slug: 'off-peak',
      badge: 'Convenient',
      tier: 'Programme',
      title: 'Off Peak Course',
      price: 'Enquire',
      priceNote: 'full course',
      duration: 'Flexible',
      hours: 'Off-peak hours',
      features: [
        'Affordable pricing',
        'Less crowded sessions',
        'Daytime weekday slots',
        'Full curriculum coverage',
        'Same certified instructors',
      ],
    },
    {
      slug: 'customized',
      badge: 'Tailored',
      tier: 'Programme',
      title: 'Customized Course',
      price: 'Enquire',
      priceNote: 'full course',
      duration: 'Flexible',
      hours: 'Built around you',
      features: [
        'Schedule designed for you',
        'Choose modules you need',
        'Pace set to your comfort',
        'Targeted skill-building',
        'Vehicle class of your choice',
      ],
    },
    {
      slug: 'special',
      badge: 'Special',
      tier: 'Programme',
      title: 'Special Course',
      price: 'Enquire',
      priceNote: 'full course',
      duration: 'Flexible',
      hours: 'Specialised training',
      features: [
        'Passenger bus training',
        'Heavy vehicle specialisation',
        'Commercial route exposure',
        'Highway Act compliance',
        'Component guides provided',
      ],
    },
  ],
  process: {
    eyebrow: 'How It Works',
    headingLead: 'Your journey to ',
    headingAccent: 'the license.',
    steps: [
      { n: '01', title: 'Enrol Online', text: 'Pick your course and complete the digital registration in under five minutes.' },
      { n: '02', title: 'Theory Modules', text: 'Interactive lessons, video walk-throughs and full mock exam practice.' },
      { n: '03', title: 'Behind the Wheel', text: 'One-to-one practical sessions with certified, patient instructors.' },
      { n: '04', title: 'Get Licensed', text: 'We handle the paperwork and accompany you to the Department of Motor Traffic examination.' },
    ],
  },
}

const si: CoursesCopy = {
  hero: {
    eyebrow: 'අපගේ පාඨමාලා',
    title: 'ඔබ වෙනුවෙන් නිර්මාණය කළ රියදුරු පාඨමාලා.',
    subtitle:
      'ආධුනික බලපත්‍රයේ සිට වෘත්තීය බර වාහන බලපත්‍ර දක්වා, සෑම පාඨමාලාවක්ම ආරක්ෂාව, විධිමත් පිළිවෙළ සහ සැබෑ මාර්ග අත්දැකීම් මුල් කරගෙන සකස් කර ඇත.',
  },
  labels: {
    duration: 'කාල සීමාව',
    hours: 'වේලාවන්',
    enrol: 'දැන් ලියාපදිංචි වන්න',
  },
  courses: [
    {
      slug: 'full-time',
      badge: 'වඩාත් ජනප්‍රිය',
      tier: 'පාඨමාලාව',
      title: 'පූර්ණ කාලීන පාඨමාලාව',
      price: 'විමසන්න',
      priceNote: 'සම්පූර්ණ පාඨමාලාව',
      duration: 'නම්‍යශීලීයි',
      hours: 'සම්පූර්ණ කාලසටහන',
      features: [
        'සියලුම වාහන පන්ති ආවරණය වේ',
        'නවතම ද්විත්ව පැඩල් වාහන',
        'මාර්ග නීති සහ මහාමාර්ග පනත පිළිබඳ පුහුණුව',
        'වාහන අංග පිළිබඳ මාර්ගෝපදේශ ඇතුළත්',
        'රියදුරු බලපත්‍ර අයදුම්පත සඳහා සහාය',
      ],
    },
    {
      slug: 'refresher',
      badge: 'නැවත රිය පදවන අය',
      tier: 'පාඨමාලාව',
      title: 'නැවත සිහිගැන්වීමේ පාඨමාලාව',
      price: 'විමසන්න',
      priceNote: 'සම්පූර්ණ පාඨමාලාව',
      duration: 'නම්‍යශීලීයි',
      hours: 'ඔබට ගැළපෙන සැසි',
      features: [
        'ආත්ම විශ්වාසය නැවත ගොඩනැගීම',
        'නවීන රථවාහන පිළිබඳ දැනුවත්භාවය',
        'මහාමාර්ග නැවත හුරු කිරීම',
        'වාහන නවතා තැබීම සහ හැසිරවීම',
        'පෞද්ගලික උපදේශකයෙකු වෙන් කෙරේ',
      ],
    },
    {
      slug: 'vip',
      badge: 'ප්‍රිමියම්',
      tier: 'පාඨමාලාව',
      title: 'VIP පාඨමාලාව',
      price: 'විමසන්න',
      priceNote: 'සම්පූර්ණ පාඨමාලාව',
      duration: 'නම්‍යශීලීයි',
      hours: 'ප්‍රමුඛතා කාලසටහන',
      features: [
        'එකින් එක පෞද්ගලික පුහුණුව',
        'ප්‍රමුඛතාව සහිත වේලාවන් වෙන් කරගැනීම',
        'ගෙදරට පැමිණ ගෙන යාම සහ නැවත ගෙන ඒම',
        'ජ්‍යෙෂ්ඨ උපදේශකයෙකු වෙන් කෙරේ',
        'වේගවත් බලපත්‍ර ක්‍රියාවලිය',
      ],
    },
    {
      slug: 'off-peak',
      badge: 'පහසු',
      tier: 'පාඨමාලාව',
      title: 'අඩු කාර්යබහුල වේලාවන්හි පාඨමාලාව',
      price: 'විමසන්න',
      priceNote: 'සම්පූර්ණ පාඨමාලාව',
      duration: 'නම්‍යශීලීයි',
      hours: 'අඩු කාර්යබහුල වේලාවන්',
      features: [
        'දැරිය හැකි මිල',
        'තදබදය අඩු සැසි',
        'සතියේ දිනවල දහවල් වේලාවන්',
        'සම්පූර්ණ විෂය නිර්දේශය ආවරණය',
        'එම සහතිකලත් උපදේශකයින්ම',
      ],
    },
    {
      slug: 'customized',
      badge: 'ඔබට ගැළපෙන',
      tier: 'පාඨමාලාව',
      title: 'අභිරුචි පාඨමාලාව',
      price: 'විමසන්න',
      priceNote: 'සම්පූර්ණ පාඨමාලාව',
      duration: 'නම්‍යශීලීයි',
      hours: 'ඔබට අනුව සැලසුම් කෙරේ',
      features: [
        'ඔබට සකසන ලද කාලසටහන',
        'ඔබට අවශ්‍ය පාඩම් තෝරා ගැනීම',
        'ඔබේ පහසුවට ගැළපෙන වේගය',
        'ඉලක්කගත කුසලතා වර්ධනය',
        'ඔබ කැමති වාහන පන්තිය',
      ],
    },
    {
      slug: 'special',
      badge: 'විශේෂ',
      tier: 'පාඨමාලාව',
      title: 'විශේෂ පාඨමාලාව',
      price: 'විමසන්න',
      priceNote: 'සම්පූර්ණ පාඨමාලාව',
      duration: 'නම්‍යශීලීයි',
      hours: 'විශේෂිත පුහුණුව',
      features: [
        'මගී බස් රථ පුහුණුව',
        'බර වාහන පිළිබඳ විශේෂිත පුහුණුව',
        'වාණිජ මාර්ග අත්දැකීම්',
        'මහාමාර්ග පනතට අනුකූල වීම',
        'වාහන අංග පිළිබඳ මාර්ගෝපදේශ ලබා දේ',
      ],
    },
  ],
  process: {
    eyebrow: 'ක්‍රියාවලිය',
    headingLead: 'බලපත්‍රය දක්වා ',
    headingAccent: 'ඔබේ ගමන.',
    steps: [
      { n: '01', title: 'මාර්ගගතව ලියාපදිංචි වන්න', text: 'ඔබට අවශ්‍ය පාඨමාලාව තෝරා විනාඩි පහකටත් අඩු කාලයකින් ලියාපදිංචිය සම්පූර්ණ කරන්න.' },
      { n: '02', title: 'න්‍යායික පාඩම්', text: 'අන්තර්ක්‍රියාකාරී පාඩම්, වීඩියෝ මගින් පැහැදිලි කිරීම් සහ සම්පූර්ණ ආදර්ශ විභාග පුහුණුව.' },
      { n: '03', title: 'රිය පැදවීමේ පුහුණුව', text: 'සහතිකලත්, ඉවසිලිවන්ත උපදේශකයින් සමඟ එකින් එක ප්‍රායෝගික සැසි.' },
      { n: '04', title: 'බලපත්‍රය ලබා ගන්න', text: 'ලේඛන කටයුතු අප විසින්ම සිදු කරන අතර, මෝටර් රථ ප්‍රවාහන දෙපාර්තමේන්තුවේ විභාගය සඳහා ඔබ සමඟ පැමිණෙමු.' },
    ],
  },
}

export const coursesCopy: Record<Lang, CoursesCopy> = { en, si }
