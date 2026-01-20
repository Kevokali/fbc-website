import { NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export function middleware(request: Request) {
  const url = new URL(request.url)
  const hostname = url.hostname

  // Skip asset routes
  if (PUBLIC_FILE.test(url.pathname)) return NextResponse.next()

  // Enforce https and non-www canonical host to avoid duplicate/redirect issues
  const isWWW = hostname.startsWith('www.')
  const canonicalHost = isWWW ? hostname.slice(4) : hostname

  if (isWWW || url.protocol === 'http:') {
    url.hostname = canonicalHost
    url.protocol = 'https:'
    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|logo|robots.txt|sitemap.xml).*)'],
}
