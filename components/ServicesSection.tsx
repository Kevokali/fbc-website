'use client'

import { useEffect, useRef, useState } from 'react'

export default function ServicesSection() {
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

  const services = [
    {
      title: 'Business Registration',
      description:
        'Comprehensive business registration services for various entity types',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      items: [
        'Limited Companies',
        'Sole Proprietorships & Partnerships',
        'NGOs & Foundations',
        'Annual Returns Filing',
      ],
    },
    {
      title: 'Tax & Statutory Compliance',
      description:
        'Expert tax services ensuring full compliance with KRA requirements',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      items: [
        'KRA Returns',
        'Withholding Tax',
        'Rental Income Tax',
        'Advance Tax',
        'NSSF & SHIF Filings',
      ],
    },
    {
      title: 'Accounting & Financial Management',
      description:
        'Complete accounting solutions for efficient financial management',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      items: [
        'Bookkeeping',
        'Stock Taking',
        'Financial Forecasts & Budgets',
        'Interest on OD Calculations',
        'BQ Filing',
      ],
    },
    {
      title: 'Audit, Risk & Advisory',
      description:
        'Strategic advisory and audit services to strengthen your business',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      items: [
        'Internal Audits',
        'Risk Assessment & Internal Controls',
        'Tax & Financial Advisory',
        'Financial Training',
        'Tally & QuickBooks Training',
      ],
    },
    {
      title: 'Trade Finance & Guarantees',
      description:
        'Financial instruments and support for trade and business operations',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      items: [
        'Tender Securities',
        'Performance Bonds',
        'Advance Payment Guarantees',
        'Import Financing Support',
      ],
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-20 bg-light-grey relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-deep-blue">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-emerald mx-auto rounded-full mb-4"></div>
          <p className="text-center text-text-secondary text-lg max-w-2xl mx-auto">
            Comprehensive financial consulting services tailored to your business
            needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-index={index}
              className={`bg-white rounded-xl shadow-md p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-transparent hover:border-emerald/30 group ${
                visibleCards.has(index) ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald/10 to-emerald/5 rounded-xl flex items-center justify-center mr-4 group-hover:bg-gradient-to-br group-hover:from-emerald group-hover:to-emerald/80 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <div className="w-8 h-8 text-emerald group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                <div className="w-12 h-1 bg-emerald group-hover:w-16 transition-all duration-300"></div>
              </div>
              
              <h3 className="text-2xl font-semibold text-deep-blue mb-3 group-hover:text-emerald transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-text-secondary mb-6">{service.description}</p>
              
              <ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start text-text-primary group/item"
                  >
                    <span className="text-emerald mr-3 mt-1 group-hover/item:scale-125 transition-transform duration-300">
                      ✓
                    </span>
                    <span className="group-hover/item:text-deep-blue transition-colors duration-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
