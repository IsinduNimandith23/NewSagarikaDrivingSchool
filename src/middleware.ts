import { NextResponse, type NextRequest } from 'next/server'
import {
  PREVIEW_COOKIE,
  PREVIEW_MAX_AGE,
  PREVIEW_OFF,
  PREVIEW_ON,
  PREVIEW_PARAM,
} from '@/lib/preview'

/**
 * Turns `/resources?preview=1` into a stored cookie + a clean URL.
 * See `src/lib/preview.ts` for the full flow.
 */
export function middleware(req: NextRequest) {
  const param = req.nextUrl.searchParams.get(PREVIEW_PARAM)
  if (param !== PREVIEW_ON && param !== PREVIEW_OFF) return NextResponse.next()

  // Strip the param so the toggle doesn't ride along in shared links, and so a
  // refresh doesn't keep re-applying it.
  const url = req.nextUrl.clone()
  url.searchParams.delete(PREVIEW_PARAM)
  const res = NextResponse.redirect(url)

  if (param === PREVIEW_ON) {
    res.cookies.set(PREVIEW_COOKIE, PREVIEW_ON, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: PREVIEW_MAX_AGE,
    })
  } else {
    res.cookies.delete(PREVIEW_COOKIE)
  }

  return res
}

export const config = {
  matcher: ['/resources', '/resources/:path*'],
}
