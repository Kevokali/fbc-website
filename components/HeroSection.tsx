'use client'

import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-white pt-20"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="absolute inset-0 bg-deep-blue/40"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-deep-blue/50 via-deep-blue/40 to-emerald/10"></div>
      
      {/* KRA, NSSF, SHIF Icons Pattern Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 100px,
            rgba(42, 157, 143, 0.1) 100px,
            rgba(42, 157, 143, 0.1) 101px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 100px,
            rgba(42, 157, 143, 0.1) 100px,
            rgba(42, 157, 143, 0.1) 101px
          )`
        }}></div>
        
        {/* KRA Icon Pattern */}
        <div className="absolute top-20 left-10 w-32 h-32 text-emerald/30">
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        <div className="absolute top-40 right-20 w-28 h-28 text-emerald/25">
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 text-emerald/30">
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>

        {/* NSSF Icon Pattern */}
        <div className="absolute top-60 right-1/3 w-36 h-36 text-emerald/25">
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18L20 8v9c0 4.54-3.07 8.79-7.09 9.81-.54.13-1.07.13-1.61 0C7.07 25.79 4 21.54 4 17V8l8-3.82z"/>
            <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
          </svg>
        </div>
        <div className="absolute bottom-20 right-10 w-30 h-30 text-emerald/20">
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18L20 8v9c0 4.54-3.07 8.79-7.09 9.81-.54.13-1.07.13-1.61 0C7.07 25.79 4 21.54 4 17V8l8-3.82z"/>
            <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
          </svg>
        </div>

        {/* SHIF/Health Icon Pattern */}
        <div className="absolute top-1/3 left-1/2 w-32 h-32 text-emerald/25">
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 9l-3-3 1.41-1.41L11 12.17l4.59-4.59L17 9l-6 6z"/>
          </svg>
        </div>
        <div className="absolute bottom-40 left-1/3 w-28 h-28 text-emerald/20">
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>

        {/* Tax/Calculator Icons */}
        <div className="absolute top-1/4 right-1/4 w-26 h-26 text-emerald/25">
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
          </svg>
        </div>
        <div className="absolute bottom-1/3 right-1/2 w-30 h-30 text-emerald/20">
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
            <path d="M7 2v2h1v14c0 2.21 1.79 4 4 4s4-1.79 4-4V4h1V2H7zm4 18c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2z"/>
          </svg>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`mb-6 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <span className="inline-block px-4 py-2 bg-emerald/20 backdrop-blur-sm border border-emerald/30 rounded-full text-emerald text-sm font-semibold mb-6 animate-float">
            Trusted Financial Services in Nairobi City and Beyond
          </span>
        </div>
        
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.1s' }}
        >
          Financial Beacon Consulting
        </h1>
        
        <p
          className={`text-xl sm:text-2xl md:text-3xl mb-12 text-emerald/90 font-light ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.2s' }}
        >
          Your Trusted Partner in Financial Clarity & Compliance
        </p>
        
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.4s' }}
        >
          <a
            href="/contact"
            className="group px-8 py-4 bg-emerald hover:bg-emerald/90 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-emerald/50 transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden"
          >
            <span className="relative z-10">Contact Us</span>
            <span className="absolute inset-0 bg-gradient-to-r from-emerald to-emerald/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
          
          <a
            href="/contact"
            className="group relative px-8 py-4 bg-gradient-to-r from-gold via-gold to-gold/90 hover:from-gold hover:via-gold/90 hover:to-gold text-deep-blue font-bold rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-gold/50 transform hover:-translate-y-1 hover:scale-110 overflow-hidden"
          >
            {/* Animated shine effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
            
            {/* Button content */}
            <span className="relative z-10 flex items-center justify-center gap-2">
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Book a Consultation</span>
            </span>
            
            {/* Pulse effect */}
            <span className="absolute inset-0 rounded-lg bg-gold/50 opacity-0 group-hover:opacity-100 group-hover:animate-ping"></span>
          </a>
        </div>
      </div>
    </section>
  )
}
