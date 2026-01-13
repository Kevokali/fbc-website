'use client'

import Script from 'next/script'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <Script
        id="footer-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Financial Beacon Consulting',
            url: 'https://financialbeaconconsulting.co.ke',
            logo: 'https://financialbeaconconsulting.co.ke/logo/logo.png',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+254-754-029-431',
              contactType: 'Customer Service',
              email: 'financialbeconconsulting@gmail.com',
            },
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Revlon Plaza, 3rd Floor, Kimathi Street',
              addressLocality: 'Nairobi',
              postalCode: '00200',
              addressCountry: 'KE',
            },
            sameAs: [
              'https://www.linkedin.com/in/cpa-weke-ochieng-luke-174b09127/',
              'https://x.com/wekeluke1',
              'https://www.tiktok.com/@fbc610',
            ],
          }),
        }}
      />
      <footer className="bg-deep-blue text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-blue to-deep-blue/90"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  {/* Modern FBC Logo Design */}
                  <div className="relative">
                    {/* Background gradient circle */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald via-emerald to-emerald-dark rounded-xl blur-sm opacity-50"></div>
                    {/* Main logo container */}
                    <div className="relative bg-gradient-to-br from-emerald/20 to-emerald/10 backdrop-blur-md rounded-xl p-3 border-2 border-emerald/30 hover:border-emerald/60 transition-all duration-300 group">
                      <Image
                        src="/logo/logo.png"
                        alt="Financial Beacon Consulting - Top Financial Consulting Firm in Nairobi, Kenya"
                        width={60}
                        height={60}
                        className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          // Fallback to modern FBC text design
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                          const parent = target.closest('div')?.parentElement
                          if (parent && !parent.querySelector('.fbc-logo-fallback')) {
                            const fallback = document.createElement('div')
                            fallback.className = 'fbc-logo-fallback flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald to-emerald-dark rounded-lg'
                            fallback.innerHTML = '<span class="text-white font-bold text-lg">FBC</span>'
                            parent.appendChild(fallback)
                          }
                        }}
                      />
                    </div>
                  </div>
                  {/* FBC Text with modern styling */}
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-emerald/90 to-white bg-clip-text text-transparent">
                      FBC
                    </h3>
                    <p className="text-xs text-emerald/70 font-medium tracking-wider uppercase">
                      Financial Beacon Consulting
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-emerald/80 mb-6 leading-relaxed">
                Your Trusted Partner in Financial Clarity & Compliance
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/cpa-weke-ochieng-luke-174b09127/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-emerald/20 hover:bg-emerald rounded-lg flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-emerald/50"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/wekeluke1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-emerald/20 hover:bg-emerald rounded-lg flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-emerald/50"
                  aria-label="X (Twitter)"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@fbc610"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-emerald/20 hover:bg-emerald rounded-lg flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-emerald/50"
                  aria-label="TikTok"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { href: '/home', label: 'Home' },
                  { href: '/about', label: 'About Us' },
                  { href: '/services', label: 'Services' },
                  { href: '/team', label: 'Our Team' },
                  { href: '/knowledge-hub', label: 'Knowledge Hub' },
                  { href: '/testimonials', label: 'Testimonials' },
                  { href: '/faq', label: 'FAQ' },
                  { href: '/contact', label: 'Contact' },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-emerald/80 hover:text-emerald transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-emerald mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Government Portals</h4>
              <ul className="space-y-3">
                {[
                  { 
                    href: 'https://itax.kra.go.ke', 
                    label: 'KRA iTax',
                    icon: (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    )
                  },
                  { 
                    href: 'https://www.ecitizen.go.ke', 
                    label: 'eCitizen',
                    icon: (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    )
                  },
                  { 
                    href: 'https://www.shif.or.ke', 
                    label: 'SHIF Portal',
                    icon: (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )
                  },
                  { 
                    href: 'https://www.nssf.or.ke', 
                    label: 'NSSF Portal',
                    icon: (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )
                  },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald/80 hover:text-emerald transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-emerald mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      <span className="mr-2 group-hover:scale-110 transition-transform duration-300">{link.icon}</span>
                      {link.label}
                      <svg className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Contact Information</h4>
              <ul className="space-y-5">
                {/* Phone */}
                <li className="group">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald/10 rounded-lg flex items-center justify-center group-hover:bg-emerald transition-all duration-300 mr-3">
                      <svg
                        className="w-5 h-5 text-emerald group-hover:text-white transition-colors duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <a
                        href="tel:+254754029431"
                        className="block text-white font-medium hover:text-emerald transition-colors duration-300 text-base mb-1"
                      >
                        +254 754 029 431
                      </a>
                      <p className="text-sm text-emerald/70">Business Line</p>
                    </div>
                  </div>
                </li>
                
                {/* Email */}
                <li className="group">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald/10 rounded-lg flex items-center justify-center group-hover:bg-emerald transition-all duration-300 mr-3">
                      <svg
                        className="w-5 h-5 text-emerald group-hover:text-white transition-colors duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <a
                        href="mailto:financialbeconconsulting@gmail.com"
                        className="block text-white font-medium hover:text-emerald transition-colors duration-300 text-base break-words"
                      >
                        financialbeconconsulting@gmail.com
                      </a>
                    </div>
                  </div>
                </li>
                
                {/* Location */}
                <li className="group">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald/10 rounded-lg flex items-center justify-center group-hover:bg-emerald transition-all duration-300 mr-3">
                      <svg
                        className="w-5 h-5 text-emerald group-hover:text-white transition-colors duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium text-base mb-1">Revlon Plaza, 3rd Floor</p>
                      <p className="text-sm text-emerald/70 mb-1">Kimathi Street, Nairobi</p>
                      <p className="text-sm text-emerald/70">P.O Box 13283 - 00200</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-emerald/20 pt-8 text-center text-emerald/80">
            <p>
              &copy; {currentYear} Financial Beacon Consulting. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
