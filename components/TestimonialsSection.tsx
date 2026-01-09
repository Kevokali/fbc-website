'use client'

import { useEffect, useRef, useState } from 'react'

export default function TestimonialsSection() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleCards((prev) => new Set([...prev, index]))
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = sectionRef.current?.querySelectorAll('[data-index]')
    cards?.forEach((card) => observer.observe(card))

    return () => {
      cards?.forEach((card) => observer.unobserve(card))
    }
  }, [])

  const testimonials = [
    {
      name: 'John Mwangi',
      company: 'Tech Solutions Ltd',
      content:
        'FBC has been instrumental in helping us navigate complex tax compliance requirements. Their professional approach and attention to detail have saved us time and money.',
      rating: 5,
    },
    {
      name: 'Sarah Wanjiku',
      company: 'Green Energy Kenya',
      content:
        'The team at Financial Beacon Consulting provided excellent accounting services. They are reliable, knowledgeable, and always available when we need them.',
      rating: 5,
    },
    {
      name: 'David Ochieng',
      company: 'Nairobi Trading Co.',
      content:
        'We highly recommend FBC for business registration and compliance services. They made the entire process smooth and stress-free.',
      rating: 5,
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-20 bg-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-deep-blue">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-emerald mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-index={index}
              className={`bg-light-grey rounded-xl shadow-md p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-transparent hover:border-emerald/30 group ${
                visibleCards.has(index) ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-emerald group-hover:scale-110 transition-transform duration-300"
                    style={{ transitionDelay: `${i * 0.05}s` }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-text-primary mb-6 italic leading-relaxed group-hover:text-deep-blue transition-colors duration-300">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="border-t border-emerald/20 pt-4">
                <p className="font-semibold text-deep-blue group-hover:text-emerald transition-colors duration-300">
                  {testimonial.name}
                </p>
                <p className="text-sm text-text-secondary">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
