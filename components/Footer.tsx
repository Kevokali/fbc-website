'use client'

import Script from 'next/script'

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
            url: 'https://www.financialbeaconconsulting.com',
            logo: 'https://www.financialbeaconconsulting.com/logo.png',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+254-XXX-XXX-XXX',
              contactType: 'Customer Service',
              email: 'info@financialbeaconconsulting.com',
            },
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Nairobi',
              addressCountry: 'KE',
            },
            sameAs: [
              'https://www.facebook.com/financialbeaconconsulting',
              'https://www.linkedin.com/company/financialbeaconconsulting',
              'https://twitter.com/fbc_consulting',
            ],
          }),
        }}
      />
      <footer className="bg-deep-blue text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-blue to-deep-blue/90"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Financial Beacon Consulting</h3>
              <p className="text-emerald/80 mb-6">
                Your Trusted Partner in Financial Clarity & Compliance
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/financialbeaconconsulting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-emerald/20 hover:bg-emerald rounded-lg flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-emerald/50"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/financialbeaconconsulting"
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
                  href="https://twitter.com/fbc_consulting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-emerald/20 hover:bg-emerald rounded-lg flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-emerald/50"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
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
              <h4 className="text-lg font-semibold mb-4 text-white">Contact Information</h4>
              <ul className="space-y-3 text-emerald/80">
                <li className="flex items-start group">
                  <svg
                    className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 group-hover:text-emerald transition-colors duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="group-hover:text-emerald transition-colors duration-300">+254-XXX-XXX-XXX</span>
                </li>
                <li className="flex items-start group">
                  <svg
                    className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 group-hover:text-emerald transition-colors duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="group-hover:text-emerald transition-colors duration-300">info@financialbeaconconsulting.com</span>
                </li>
                <li className="flex items-start group">
                  <svg
                    className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 group-hover:text-emerald transition-colors duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="group-hover:text-emerald transition-colors duration-300">Nairobi, Kenya</span>
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
