'use client'

import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-white pt-20 overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-blue/50 via-deep-blue/40 to-emerald/20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/60 via-transparent to-transparent"></div>
      
      {/* Modern geometric pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, rgba(42, 157, 143, 0.1) 25%, transparent 25%), 
                           linear-gradient(-45deg, rgba(42, 157, 143, 0.1) 25%, transparent 25%), 
                           linear-gradient(45deg, transparent 75%, rgba(42, 157, 143, 0.1) 75%), 
                           linear-gradient(-45deg, transparent 75%, rgba(42, 157, 143, 0.1) 75%)`,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
        }}></div>
      </div>
      
      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-deep-blue/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '0.75s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`mb-8 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <span className="inline-block px-6 py-3 bg-white/95 backdrop-blur-md border-2 border-emerald/60 rounded-full text-deep-blue text-sm font-bold mb-6 animate-float shadow-2xl">
            Trusted Financial Services in Nairobi City and Beyond
          </span>
        </div>
        
        <h1
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight tracking-tight ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.1s' }}
        >
          <span className="bg-gradient-to-r from-white via-emerald/90 to-white bg-clip-text text-transparent drop-shadow-2xl">
            Financial Beacon
          </span>
          <br />
          <span className="text-white drop-shadow-2xl">Consulting</span>
        </h1>
        
        <p
          className={`text-2xl sm:text-3xl md:text-4xl mb-16 text-white/95 font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-lg ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.2s' }}
        >
          Your Trusted Partner in Financial Clarity & Compliance
        </p>
        
        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.4s' }}
        >
          <a
            href="/contact"
            className="group px-10 py-5 bg-white/10 backdrop-blur-md hover:bg-white/20 border-2 border-white/30 hover:border-white/50 text-white font-bold rounded-xl transition-all duration-300 shadow-2xl hover:shadow-emerald/50 transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden text-lg"
          >
            <span className="relative z-10 flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-emerald/20 to-emerald/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
          
          <a
            href="https://wa.me/254702491439?text=Hello%2C%20I%20would%20like%20to%20chat%20with%20you%20about%20your%20financial%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-5 bg-gradient-to-r from-emerald via-emerald to-emerald-dark hover:from-emerald-light hover:via-emerald hover:to-emerald-dark text-white font-bold rounded-xl transition-all duration-300 shadow-2xl hover:shadow-emerald/70 transform hover:-translate-y-2 hover:scale-110 overflow-hidden text-lg"
          >
            {/* Animated shine effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
            
            {/* Button content */}
            <span className="relative z-10 flex items-center justify-center gap-3">
              <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>Chat with us</span>
            </span>
            
            {/* Pulse effect */}
            <span className="absolute inset-0 rounded-xl bg-emerald/50 opacity-0 group-hover:opacity-100 group-hover:animate-ping"></span>
          </a>
        </div>
      </div>
    </section>
  )
}
