/**
 * Resources page content.
 *
 * This is the single place to edit everything the preview page renders — past
 * papers, tutorial videos, written-exam topics and trial checklists. Nothing
 * here is live to the public yet: the page shows "Coming Soon" until a
 * developer flips it on (see `src/lib/preview.ts`).
 *
 * HOW TO FILL IT IN
 *  - Past papers: drop the PDF in `public/resources/papers/` and set `href`
 *    to `/resources/papers/<file>.pdf`.
 *  - Videos: set `youtubeId` to the id from the watch URL
 *    (youtube.com/watch?v=THIS_PART).
 *  - Anything still left as `null` renders as a greyed-out "Coming soon" item,
 *    so half-finished sections never pretend to be ready.
 */

export type Medium = 'Sinhala' | 'English' | 'Tamil'

export type PastPaper = {
  id: string
  title: string
  medium: Medium
  /** Free text — "2024", "Set 3", "Model paper" … */
  edition: string
  questions: number
  /** Path under /public, or null while the PDF isn't ready. */
  href: string | null
}

export type Video = {
  id: string
  title: string
  description: string
  /** The `v=` id from a YouTube watch URL, or null while unlisted. */
  youtubeId: string | null
  /** Display only — "8:42" style free text. */
  duration: string
}

export type Topic = {
  title: string
  text: string
  points: string[]
}

export type ChecklistItem = {
  title: string
  text: string
}

export const hero = {
  eyebrow: 'Student Resources',
  title: 'Everything you need to pass.',
  subtitle:
    'Past papers, tutorial videos and step-by-step guides for the written examination and the practical trial — free for every New Sagarika student.',
}

/**
 * Written-exam past papers.
 * TODO: replace these placeholders with the real papers + PDFs.
 */
export const pastPapers: PastPaper[] = [
  { id: 'si-2024-1', title: 'Written Exam Model Paper 01', medium: 'Sinhala', edition: '2024', questions: 40, href: null },
  { id: 'si-2024-2', title: 'Written Exam Model Paper 02', medium: 'Sinhala', edition: '2024', questions: 40, href: null },
  { id: 'en-2024-1', title: 'Written Exam Model Paper 01', medium: 'English', edition: '2024', questions: 40, href: null },
  { id: 'en-2024-2', title: 'Written Exam Model Paper 02', medium: 'English', edition: '2024', questions: 40, href: null },
  { id: 'signs-drill', title: 'Road Signs — Practice Set', medium: 'Sinhala', edition: 'Set 1', questions: 60, href: null },
  { id: 'ta-2024-1', title: 'Written Exam Model Paper 01', medium: 'Tamil', edition: '2024', questions: 40, href: null },
]

/**
 * Tutorial videos.
 * TODO: point these at the school's YouTube channel uploads —
 * https://www.youtube.com/@newsagarikadrivingschool1999
 */
export const videos: Video[] = [
  {
    id: 'signs',
    title: 'Road signs explained',
    description: 'Every sign group on the written paper — warning, mandatory, prohibitory and information signs.',
    youtubeId: null,
    duration: '—',
  },
  {
    id: 'paper-walkthrough',
    title: 'Written paper walkthrough',
    description: 'A full model paper answered question by question, with the reasoning behind each answer.',
    youtubeId: null,
    duration: '—',
  },
  {
    id: 'trial-track',
    title: 'The trial track, corner by corner',
    description: 'What the examiner watches for at each obstacle, filmed on the real layout.',
    youtubeId: null,
    duration: '—',
  },
  {
    id: 'parallel-park',
    title: 'Parallel parking & reversing',
    description: 'Reference points that make the manoeuvre repeatable in any vehicle.',
    youtubeId: null,
    duration: '—',
  },
]

/** Written-examination study guide. */
export const writtenTopics: Topic[] = [
  {
    title: 'Road signs & markings',
    text: 'The largest slice of the paper. Learn the shapes and colours first — they tell you the category before you read the symbol.',
    points: ['Warning signs (triangular)', 'Mandatory & prohibitory signs (circular)', 'Information signs (rectangular)', 'Road markings & lane discipline'],
  },
  {
    title: 'Rules of the road',
    text: 'Right of way, junctions, roundabouts and overtaking — the questions that catch out drivers who already "know how to drive".',
    points: ['Priority at junctions and roundabouts', 'Safe overtaking and following distance', 'Speed limits by vehicle class', 'Pedestrian crossings & school zones'],
  },
  {
    title: 'Vehicle & documents',
    text: 'What you must carry, what must be valid, and the basic checks an owner is responsible for.',
    points: ['Licence, insurance, revenue licence, emission test', 'Lights, indicators, mirrors, tyres', 'Load and passenger limits', 'What to do after an accident'],
  },
  {
    title: 'Exam day',
    text: 'How the written paper is sat, so nothing on the day is a surprise.',
    points: ['Bring your NIC and the exam admission', 'Read every question fully before answering', 'Answer all questions — no negative marking', 'Check the medium you registered for'],
  },
]

/** Practical trial preparation. */
export const trialChecklist: ChecklistItem[] = [
  {
    title: 'Before you move off',
    text: 'Seat, mirrors, seatbelt, doors, handbrake, neutral. The examiner is already marking you.',
  },
  {
    title: 'Observation',
    text: 'Mirror — signal — manoeuvre, every single time. Look, and be seen to look.',
  },
  {
    title: 'Clutch & gear control',
    text: 'Smooth take-off on the flat and on a hill, no rolling back, no stalling under pressure.',
  },
  {
    title: 'The obstacles',
    text: 'The garage, the S-bend, the parallel park and the hill start — practise each one until it stops needing thought.',
  },
  {
    title: 'Speed & positioning',
    text: 'Stay in your lane, keep to a steady speed, and stop behind the line — not on it.',
  },
  {
    title: 'Ending the test',
    text: 'Park where instructed, handbrake on, gear in neutral, engine off, and wait to be told you may leave.',
  },
]
