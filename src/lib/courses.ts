/**
 * The one canonical list of courses.
 *
 * Consumed by the courses page, the contact form's dropdown and the contact API
 * allowlist. `slug` is the stable id used in the `?course=` deep link from the
 * Enrol Now buttons — it never changes with the display language, so it keeps
 * working on the Sinhala version of the courses page. `label` is what the
 * dropdown shows and what gets emailed.
 */
export const COURSE_OPTIONS = [
  { slug: 'full-time', label: 'Full Time Course' },
  { slug: 'refresher', label: 'Refresher Course' },
  { slug: 'vip', label: 'VIP Course' },
  { slug: 'off-peak', label: 'Off Peak Course' },
  { slug: 'customized', label: 'Customized Course' },
  { slug: 'special', label: 'Special Course' },
] as const

export type CourseSlug = (typeof COURSE_OPTIONS)[number]['slug']
export type CourseLabel = (typeof COURSE_OPTIONS)[number]['label']

export const DEFAULT_COURSE: CourseLabel = COURSE_OPTIONS[0].label

export const COURSE_LABELS: readonly string[] = COURSE_OPTIONS.map((c) => c.label)

/** Resolves a `?course=` slug to its dropdown label; null if unrecognised. */
export function courseLabelFromSlug(slug: string | null | undefined): CourseLabel | null {
  if (!slug) return null
  return COURSE_OPTIONS.find((c) => c.slug === slug)?.label ?? null
}

/** The anchor the Enrol Now buttons scroll to on the contact page. */
export const ENQUIRY_ANCHOR = 'enquiry'

export function enrolHref(slug: CourseSlug): string {
  return `/contact?course=${slug}#${ENQUIRY_ANCHOR}`
}
