'use client'

import { useState, useEffect } from 'react'

export default function FloatingConsultationButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    setIsVisible(true)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isScrolled) return null

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 left-6 z-40 group ${
        isVisible ? 'animate-slide-up' : 'opacity-0'
      }`}
      aria-label="Scroll to top"
    >
      <div className="relative">
        {/* Scroll to top button - modern circular design */}
        <div className="relative bg-gradient-to-br from-emerald via-emerald to-emerald-dark hover:from-emerald-light hover:via-emerald hover:to-emerald-dark text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group overflow-hidden w-14 h-14">
          {/* Animated background glow */}
          <div className="absolute inset-0 bg-emerald/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
          
          {/* Up arrow icon */}
          <svg 
            className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-1 relative z-10" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </div>
      </div>
    </button>
  )
}
