/**
 * Developer preview toggle for unfinished pages (currently Resources).
 *
 * The page ships publicly as a "Coming Soon" placeholder. A developer flips it
 * to the real page by visiting it once with:
 *
 *     /resources?preview=1     -> show the real page (cookie, 30 days)
 *     /resources?preview=0     -> back to Coming Soon
 *
 * `src/middleware.ts` reads that query param, stores the answer in a cookie and
 * strips the param back out of the URL. The page then checks the cookie on the
 * server, so the unfinished markup is never sent to an ordinary visitor.
 *
 * This is a convenience switch, not access control — the value is guessable by
 * design. Never put anything genuinely sensitive behind it.
 */

export const PREVIEW_COOKIE = 'nsds_preview'
export const PREVIEW_PARAM = 'preview'
export const PREVIEW_ON = '1'
export const PREVIEW_OFF = '0'

/** Cookie lifetime — long enough that a developer flips it once per machine. */
export const PREVIEW_MAX_AGE = 60 * 60 * 24 * 30

/** True when the stored cookie says preview mode is on. */
export function isPreviewUnlocked(value: string | null | undefined): boolean {
  return value === PREVIEW_ON
}
