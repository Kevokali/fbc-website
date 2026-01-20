import { NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export function middleware(request: Request) {
  const url = new URL(request.url)
  const hostname = url.hostname

  // Skip asset routes
  if (PUBLIC_FILE.test(url.pathname)) return NextResponse.next()

  // Enforce HTTPS only. Host canonicalization is handled at DNS/CDN to avoid loops.
  if (url.protocol === 'http:') {
    url.protocol = 'https:'
    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|logo|robots.txt|sitemap.xml).*)'],
}
