'use client'

import { useState, useEffect } from 'react'

export default function FloatingConsultationButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    setIsVisible(true)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isScrolled) return null

  return (
    <a
      href="/contact"
      className={`fixed bottom-6 left-6 z-40 group ${
        isVisible ? 'animate-slide-up' : 'opacity-0'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Main button - starts as icon only, expands on hover */}
        <div className="relative bg-emerald hover:bg-emerald-dark text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group overflow-hidden">
          {/* Calendar icon - always visible */}
          <div className="p-3">
            <svg className="w-5 h-5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          
          {/* Text - appears on hover */}
          <span className={`pr-4 transition-all duration-300 whitespace-nowrap ${
            isHovered ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0 overflow-hidden'
          }`}>
            Book Consultation
          </span>
        </div>
      </div>
    </a>
  )
}
