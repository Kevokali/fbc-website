'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/home', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/team', label: 'Our Team' },
    { href: '/knowledge-hub', label: 'Knowledge Hub' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-deep-blue shadow-lg'
          : 'bg-deep-blue/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/home"
            className="flex items-center gap-3 group relative"
          >
            <div className="relative">
              {/* Modern logo container with gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald via-emerald/80 to-emerald rounded-lg blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-lg p-2 border border-emerald/30 group-hover:border-emerald/60 transition-all duration-300 group-hover:bg-white/15">
                <Image
                  src="/logo/logo.png"
                  alt="Financial Beacon Consulting - Leading Financial Consulting Firm in Nairobi, Kenya"
                  width={150}
                  height={50}
                  className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  priority
                  onError={(e) => {
                    // Fallback to text if logo doesn't exist
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    const parent = target.closest('div')?.parentElement
                    if (parent && !parent.querySelector('.logo-fallback')) {
                      const fallback = document.createElement('span')
                      fallback.className = 'logo-fallback text-xl font-bold bg-gradient-to-r from-white to-emerald bg-clip-text text-transparent'
                      fallback.textContent = 'FBC'
                      parent.appendChild(fallback)
                    }
                  }}
                />
              </div>
            </div>
            {/* Optional: Add company name next to logo */}
            <span className="hidden sm:block text-lg font-bold bg-gradient-to-r from-white via-emerald/90 to-white bg-clip-text text-transparent group-hover:from-emerald group-hover:via-white group-hover:to-emerald transition-all duration-300">
              FBC
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-white hover:text-emerald transition-colors duration-300 font-medium relative group ${
                  pathname === link.href ? 'text-emerald' : ''
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-emerald transition-all duration-300 ${
                  pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-6 py-2 bg-emerald hover:bg-emerald/90 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald/50"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 animate-slide-up">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-white hover:text-emerald transition-colors duration-300 font-medium py-2 ${
                    pathname === link.href ? 'text-emerald' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="px-6 py-2 bg-emerald hover:bg-emerald/90 text-white font-semibold rounded-lg transition-all duration-300 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
