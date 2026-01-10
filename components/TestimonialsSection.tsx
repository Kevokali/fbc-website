'use client'

import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'
import Link from 'next/link'

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

  // Review Schema for SEO
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Financial Beacon Consulting',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: testimonials.length.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    review: testimonials.map((testimonial) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: testimonial.name,
        worksFor: {
          '@type': 'Organization',
          name: testimonial.company,
        },
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: testimonial.rating.toString(),
        bestRating: '5',
        worstRating: '1',
      },
      reviewBody: testimonial.content,
    })),
  }

  return (
    <>
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewSchema),
        }}
      />
      <section
        ref={sectionRef}
        id="testimonials"
        className="py-20 bg-gradient-to-br from-light-grey via-white to-emerald/5 relative overflow-hidden"
        itemScope
        itemType="https://schema.org/Organization"
      >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-deep-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-emerald/10 text-emerald rounded-full text-sm font-semibold">
              Client Success Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-deep-blue">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-emerald mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Trusted by businesses across Kenya for professional financial consulting, tax compliance, and accounting services in Nairobi. Join hundreds of satisfied clients who have transformed their financial operations with FBC.
          </p>
          {/* Aggregate Rating Display */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-emerald"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-2xl font-bold text-deep-blue">5.0</span>
            <span className="text-text-secondary">({testimonials.length}+ Reviews)</span>
          </div>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              data-index={index}
              itemScope
              itemType="https://schema.org/Review"
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-emerald/10 hover:border-emerald/30 overflow-hidden ${
                visibleCards.has(index) ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald/5 via-transparent to-deep-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald/5 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:bg-emerald/10 transition-colors duration-500"></div>
              
              <div className="relative z-10 p-6 md:p-8">
                {/* Rating Stars */}
                <div className="flex mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-emerald group-hover:scale-125 transition-transform duration-300"
                      style={{ transitionDelay: `${i * 0.05}s` }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Quote Icon */}
                <div className="mb-4">
                  <svg className="w-10 h-10 text-emerald/20 group-hover:text-emerald/30 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                
                {/* Testimonial Content */}
                <p 
                  itemProp="reviewBody"
                  className="text-text-primary mb-6 leading-relaxed text-base md:text-lg group-hover:text-deep-blue transition-colors duration-300"
                >
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                
                {/* Author Info */}
                <div className="border-t border-emerald/20 pt-5 mt-6">
                  <div itemScope itemType="https://schema.org/Person" className="flex items-center gap-3">
                    {/* Avatar Placeholder */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald to-emerald-dark flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p 
                        itemProp="name"
                        className="font-bold text-deep-blue group-hover:text-emerald transition-colors duration-300"
                      >
                        {testimonial.name}
                      </p>
                      <p 
                        itemProp="worksFor"
                        itemScope
                        itemType="https://schema.org/Organization"
                        className="text-sm text-text-secondary"
                      >
                        <span itemProp="name">{testimonial.company}</span>
                      </p>
                    </div>
                  </div>
                  <div 
                    itemScope
                    itemType="https://schema.org/Rating"
                    className="hidden"
                  >
                    <meta itemProp="ratingValue" content={testimonial.rating.toString()} />
                    <meta itemProp="bestRating" content="5" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Modern CTA Section */}
        <div className="mt-16 relative">
          <div className="bg-gradient-to-br from-deep-blue via-deep-blue/95 to-emerald rounded-3xl p-8 md:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald/20 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/20">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Ready to Be Our Next Success Story?
              </h3>
              <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
                Join hundreds of satisfied clients who trust Financial Beacon Consulting for their financial needs. Let&apos;s transform your business together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="group px-8 py-4 bg-white text-emerald font-bold rounded-xl hover:bg-emerald hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 flex items-center gap-3 min-w-[200px] justify-center"
                >
                  <span>Get Started Today</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="https://wa.me/254702491439?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20financial%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl transition-all duration-300 border-2 border-white/30 hover:border-white/50 flex items-center gap-3 min-w-[200px] justify-center"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>Chat on WhatsApp</span>
                </Link>
              </div>
              
              {/* Trust indicators */}
              <div className="mt-8 pt-8 border-t border-white/20 flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>100+ Happy Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>KRA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
