'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface TeamMember {
  name: string
  role: string
  qualifications: string
  phone: string
  image: string
  bio?: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Luke Weke',
    role: 'Director & Lead Consultant',
    qualifications: 'CPA | BCom (Finance) | MSc (Ongoing)',
    phone: '0702491439',
    image: '/team/luke-weke.jpg', // Placeholder - user will add actual photo
    bio: 'Experienced financial consultant with expertise in accounting, tax compliance, and business advisory services.',
  },
  {
    name: 'CPA Calleb Masese',
    role: 'Partner',
    qualifications: 'CPA',
    phone: '0711721456',
    image: '/team/calleb-masese.jpg', // Placeholder - user will add actual photo
    bio: 'Certified Public Accountant specializing in audit services, tax planning, and financial compliance.',
  },
]

export default function TeamSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  // Prevent common download methods
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent Ctrl+S, Ctrl+P, F12 (DevTools)
      if ((e.ctrlKey && (e.key === 's' || e.key === 'p')) || e.key === 'F12') {
        e.preventDefault()
      }
    }

    const handleContextMenu = (e: MouseEvent) => {
      // Prevent right-click context menu on images
      const target = e.target as HTMLElement
      if (target.tagName === 'IMG' || target.closest('.team-image-container')) {
        e.preventDefault()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    document.addEventListener('contextmenu', handleContextMenu)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('contextmenu', handleContextMenu)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="team"
      className="py-20 bg-gradient-to-br from-white via-light-grey to-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-deep-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-block mb-4 ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
          >
            <span className="px-4 py-2 bg-emerald/10 text-emerald rounded-full text-sm font-semibold">
              Our Team
            </span>
          </div>
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 text-deep-blue ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.1s' }}
          >
            Meet Our Expert Team
          </h2>
          <div className="w-24 h-1 bg-emerald mx-auto rounded-full mb-6"></div>
          <p
            className={`text-xl text-text-secondary max-w-3xl mx-auto ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            Our dedicated professionals bring years of experience and expertise to help you achieve financial success.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`group relative ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-emerald/20 hover:border-emerald/40 transform hover:-translate-y-2">
                {/* Image Container - New Design */}
                <div className="relative bg-gradient-to-br from-light-grey via-white to-light-grey p-6">
                  <div 
                    className="team-image-container relative mx-auto w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white ring-4 ring-emerald/20 select-none no-select bg-white"
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                    style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                  >
                    {/* Protection overlay - prevents direct image access */}
                    <div 
                      className="absolute inset-0 z-20 cursor-default rounded-full"
                      onContextMenu={(e) => e.preventDefault()}
                      onDragStart={(e) => e.preventDefault()}
                      onMouseDown={(e) => {
                        // Prevent image drag
                        if (e.button === 0) e.preventDefault()
                      }}
                      style={{ 
                        pointerEvents: 'auto',
                        userSelect: 'none',
                        WebkitUserSelect: 'none',
                        WebkitUserDrag: 'none'
                      } as React.CSSProperties}
                    />
                    
                    {/* Placeholder for image - shown when image doesn't exist or fails to load */}
                    {imageErrors[member.name] ? (
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border-4 border-white/30">
                          <svg
                            className="w-16 h-16 text-white/80"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                            />
                          </svg>
                        </div>
                      </div>
                    ) : (
                      /* Actual image - circular frame, showing full face */
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover pointer-events-none rounded-full"
                        data-protected="true"
                        style={{ 
                          objectPosition: member.name === 'CPA Calleb Masese' ? 'center calc(50% + 10px)' : 'center center',
                          objectFit: 'cover',
                          userSelect: 'none',
                          WebkitUserSelect: 'none',
                          WebkitUserDrag: 'none',
                          pointerEvents: 'none',
                          transform: member.name === 'CPA Calleb Masese' ? 'rotate(1deg)' : 'none'
                        } as React.CSSProperties}
                        onError={() => {
                          setImageErrors((prev) => ({ ...prev, [member.name]: true }))
                        }}
                        onLoadingComplete={() => {
                          setImageErrors((prev) => ({ ...prev, [member.name]: false }))
                        }}
                        draggable={false}
                        unoptimized
                        sizes="256px"
                      />
                    )}
                  </div>
                  
                  {/* Role badge - positioned below image */}
                  <div className="mt-6 text-center">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-emerald to-emerald/80 text-white text-sm font-semibold rounded-full shadow-lg">
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-deep-blue mb-2">
                    {member.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <svg
                      className="w-5 h-5 text-emerald"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                    <p className="text-emerald font-semibold">
                      {member.qualifications}
                    </p>
                  </div>

                  {member.bio && (
                    <p className="text-text-secondary mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                  )}

                  {/* Contact Info */}
                  <div className="pt-4 border-t border-emerald/10">
                    <a
                      href={`tel:+254${member.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-3 text-deep-blue hover:text-emerald transition-colors duration-300 group"
                    >
                      <div className="w-10 h-10 bg-emerald/10 rounded-lg flex items-center justify-center group-hover:bg-emerald group-hover:scale-110 transition-all duration-300">
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
                      <div>
                        <p className="text-sm text-text-secondary">Contact</p>
                        <p className="font-semibold">{member.phone}</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald/20 to-transparent rounded-bl-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`mt-16 text-center ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.5s' }}
        >
          <div className="bg-gradient-to-br from-deep-blue to-emerald rounded-2xl p-8 md:p-12 text-white shadow-xl">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Work With Us?
            </h3>
            <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Get in touch with our team to discuss how we can help your business thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gold hover:bg-gold/90 text-deep-blue font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
              >
                Contact Us
              </a>
              <a
                href="tel:+254754029431"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg transition-all duration-300 border-2 border-white/30 hover:border-white/50"
              >
                Call: 0754029431
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
