'use client'

import { useEffect, useRef, useState } from 'react'

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
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

  const coreServices = [
    {
      title: 'Business Registration & Regulatory Compliance',
      items: [
        'Limited companies, sole proprietorships, partnerships',
        'Foundations, NGOs, and trusts registration',
        'Company annual returns and statutory compliance',
      ],
    },
    {
      title: 'Taxation & Statutory Filings',
      items: [
        'KRA returns (Income Tax, PAYE, VAT, Turnover Tax)',
        'Withholding Tax (Income & VAT)',
        'Rental income tax filings',
        'Advance tax and tax compliance support',
        'NSSF and SHIF filings',
      ],
    },
    {
      title: 'Accounting & Financial Management',
      items: [
        'Bookkeeping and financial record management',
        'Stock taking and BQ filling',
        'Financial forecasting, budgeting, and reporting',
        'Interest on overdraft (OD) calculations and advisory',
      ],
    },
    {
      title: 'Audit, Risk & Internal Controls',
      items: [
        'Internal audits',
        'Risk assessment and management',
        'Internal controls design and review',
      ],
    },
    {
      title: 'Advisory & Capacity Building',
      items: [
        'Financial and tax advisory services',
        'Financial management training',
        'Accounting software training (Tally & QuickBooks)',
      ],
    },
    {
      title: 'Trade Finance & Guarantees',
      items: [
        'Tender security applications',
        'Performance bonds',
        'Advance payment guarantees',
        'Import financing support',
      ],
    },
  ]

  const whyChooseUs = [
    {
      icon: '✓',
      title: 'Compliance Focus',
      description: 'Strong focus on compliance and regulatory accuracy',
    },
    {
      icon: '✓',
      title: 'Results-Oriented',
      description: 'Practical, results-oriented financial solutions',
    },
    {
      icon: '✓',
      title: 'Professional Integrity',
      description: 'High professional integrity and confidentiality',
    },
    {
      icon: '✓',
      title: 'Personalized Service',
      description: 'Personalized service delivery and timely support',
    },
  ]

  const clients = [
    {
      name: 'Small and Medium Enterprises (SMEs)',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      bgColor: 'from-emerald/10 to-emerald/5',
      hoverBgColor: 'from-emerald to-emerald/80',
      textColor: 'text-emerald',
      borderColor: 'border-emerald/30',
      description: 'Growing businesses seeking financial expertise',
    },
    {
      name: 'Corporates',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      bgColor: 'from-deep-blue/10 to-deep-blue/5',
      hoverBgColor: 'from-deep-blue to-deep-blue/80',
      textColor: 'text-deep-blue',
      borderColor: 'border-deep-blue/30',
      description: 'Large organizations requiring comprehensive solutions',
    },
    {
      name: 'NGOs, Foundations & Development Organizations',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      bgColor: 'from-emerald/10 to-emerald/5',
      hoverBgColor: 'from-emerald to-emerald/80',
      textColor: 'text-emerald',
      borderColor: 'border-emerald/30',
      description: 'Non-profit organizations and social enterprises',
    },
    {
      name: 'Start-ups & Individual Business Owners',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      bgColor: 'from-emerald/10 to-emerald/5',
      hoverBgColor: 'from-emerald to-emerald-dark',
      textColor: 'text-emerald',
      borderColor: 'border-emerald/30',
      description: 'Entrepreneurs building their business foundation',
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Minimalistic Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'grayscale(100%)',
          }}
        ></div>
        
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(42, 157, 143, 0.02) 50px, rgba(42, 157, 143, 0.02) 51px),
            repeating-linear-gradient(-45deg, transparent, transparent 50px, rgba(27, 58, 87, 0.02) 50px, rgba(27, 58, 87, 0.02) 51px)
          `
        }}></div>
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-emerald/5 to-transparent"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 ${
            isVisible ? 'animate-slide-up' : 'opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-deep-blue">
            About Us
          </h2>
          <div className="w-24 h-1 bg-emerald mx-auto rounded-full"></div>
        </div>

        {/* Company Overview */}
        <div
          className={`mb-16 ${
            isVisible ? 'animate-slide-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.1s' }}
        >
          <div className="bg-gradient-to-br from-light-grey to-emerald/5 rounded-2xl p-8 md:p-12 border border-emerald/10 shadow-lg">
            <h3 className="text-3xl font-bold text-deep-blue mb-6 flex items-center">
              <span className="w-2 h-8 bg-emerald mr-4 rounded-full"></span>
              Company Overview
            </h3>
            <p className="text-lg text-text-primary leading-relaxed mb-6">
              Financial Beacon Consulting (FBC) is a professional consulting firm
              specializing in accounting, taxation, regulatory compliance, audit,
              and financial advisory services. We partner with businesses and
              individual entrepreneurs to deliver reliable, compliant, and
              value-driven financial solutions that support growth, governance,
              and long-term sustainability.
            </p>
            <div className="bg-white/80 rounded-xl p-6 border border-emerald/20">
              <h4 className="text-xl font-semibold text-deep-blue mb-4">
                Services Summary
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  'Business Registration & Compliance',
                  'Tax & Statutory Filings',
                  'Accounting & Bookkeeping',
                  'Audit & Risk Advisory',
                  'Financial Advisory & Training',
                  'Trade Finance & Guarantees',
                ].map((service, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-emerald/10 text-emerald font-medium rounded-full text-sm border border-emerald/20 hover:bg-emerald hover:text-white transition-all duration-300 cursor-default"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 ${
            isVisible ? 'animate-slide-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.2s' }}
        >
          {/* Mission Card */}
          <div className="group relative bg-gradient-to-br from-deep-blue to-deep-blue/90 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-emerald/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-emerald"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-emerald/90 leading-relaxed">
                To deliver trusted accounting, tax, and financial advisory services
                that enhance compliance, transparency, and sustainable growth for
                our clients.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative bg-gradient-to-br from-emerald to-emerald/90 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald/20 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-emerald/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-emerald"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/90 leading-relaxed">
                To be a preferred financial consulting partner recognized for
                professionalism, integrity, and value-driven solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Our Core Services */}
        <div
          className={`mb-16 ${
            isVisible ? 'animate-slide-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.3s' }}
        >
          <h3 className="text-3xl font-bold text-deep-blue mb-8 text-center">
            Our Core Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className="group bg-light-grey rounded-xl p-6 hover:bg-emerald/5 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-emerald/20"
              >
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-emerald/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-emerald group-hover:scale-110 transition-all duration-300">
                    <span className="text-emerald group-hover:text-white font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-deep-blue group-hover:text-emerald transition-colors duration-300 flex-1">
                    {service.title}
                  </h4>
                </div>
                <ul className="space-y-2 ml-14">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start text-sm text-text-primary"
                    >
                    <span className="text-emerald mr-2 mt-1.5 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us & Our Clients */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 ${
            isVisible ? 'animate-slide-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.4s' }}
        >
          {/* Why Choose Us */}
          <div className="bg-gradient-to-br from-light-grey to-emerald/5 rounded-2xl p-8 border border-emerald/10">
            <h3 className="text-2xl font-bold text-deep-blue mb-6 flex items-center">
              <span className="w-2 h-8 bg-emerald mr-4 rounded-full"></span>
              Why Choose Financial Beacon Consulting
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyChooseUs.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 hover:shadow-lg transition-all duration-300 border border-emerald/10 group"
                >
                  <div className="flex items-start">
                    <div className="text-2xl text-emerald mr-3 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-deep-blue mb-1 group-hover:text-emerald transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-sm text-text-secondary">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Clients */}
          <div className="bg-gradient-to-br from-deep-blue/5 to-emerald/5 rounded-2xl p-8 border border-deep-blue/10">
            <h3 className="text-2xl font-bold text-deep-blue mb-8 flex items-center">
              <span className="w-2 h-8 bg-emerald mr-4 rounded-full"></span>
              Our Clients
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-emerald/30 overflow-hidden"
                >
                  {/* Background gradient on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                    style={{
                      background: client.textColor === 'text-emerald' 
                        ? 'linear-gradient(to bottom right, rgba(42, 157, 143, 0.05), transparent)'
                        : client.textColor === 'text-deep-blue'
                        ? 'linear-gradient(to bottom right, rgba(27, 58, 87, 0.05), transparent)'
                        : 'linear-gradient(to bottom right, rgba(244, 196, 48, 0.05), transparent)'
                    }}
                  ></div>
                  
                  <div className="relative z-10">
                    {/* Icon container */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${client.bgColor} rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg group-hover:shadow-xl relative overflow-hidden`}>
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: client.textColor === 'text-emerald' 
                            ? 'linear-gradient(to bottom right, #2A9D8F, rgba(42, 157, 143, 0.8))'
                            : client.textColor === 'text-deep-blue'
                            ? 'linear-gradient(to bottom right, #1B3A57, rgba(27, 58, 87, 0.8))'
                            : 'linear-gradient(to bottom right, #F4C430, rgba(244, 196, 48, 0.8))'
                        }}
                      ></div>
                      <div className={`relative z-10 w-8 h-8 ${client.textColor} group-hover:text-white transition-colors duration-300`}>
                        {client.icon}
                      </div>
                    </div>
                    
                    {/* Client name */}
                    <h4 className="text-lg font-bold text-deep-blue mb-2 group-hover:text-emerald transition-colors duration-300">
                      {client.name}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {client.description}
                    </p>
                    
                    {/* Decorative element */}
                    <div 
                      className="mt-4 w-12 h-1 group-hover:w-16 transition-all duration-300 rounded-full"
                      style={{
                        backgroundColor: client.textColor === 'text-emerald' 
                          ? 'rgba(42, 157, 143, 0.3)'
                          : client.textColor === 'text-deep-blue'
                          ? 'rgba(27, 58, 87, 0.3)'
                          : 'rgba(244, 196, 48, 0.3)'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
