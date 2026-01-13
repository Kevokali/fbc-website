'use client'

import Script from 'next/script'
import SmartContactForm from './SmartContactForm'

export default function ContactSection() {
  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Financial Beacon Consulting',
            url: 'https://financialbeaconconsulting.co.ke',
            logo: 'https://financialbeaconconsulting.co.ke/logo/logo.png',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+254-754-029-431',
              contactType: 'Customer Service',
              email: 'financialbeconconsulting@gmail.com',
            },
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Revlon Plaza, 3rd Floor, Kimathi Street',
              addressLocality: 'Nairobi',
              postalCode: '00200',
              addressCountry: 'KE',
            },
            sameAs: [
              'https://www.linkedin.com/in/cpa-weke-ochieng-luke-174b09127/',
              'https://x.com/wekeluke1',
              'https://www.tiktok.com/@fbc610',
            ],
          }),
        }}
      />
      <section id="contact" className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-deep-blue">
              Contact Us
            </h2>
            <div className="w-24 h-1 bg-emerald mx-auto rounded-full"></div>
          </div>
          
          {/* Consultation Booking Card - Prominent */}
          <div className="mb-12 max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-emerald/10 via-emerald/5 to-deep-blue/10 rounded-2xl p-8 border-2 border-emerald/30 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-deep-blue/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald to-emerald-dark rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-deep-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-deep-blue text-center mb-3">
                  Book Your Free Consultation
                </h3>
                <p className="text-text-secondary text-center mb-6 max-w-md mx-auto">
                  Schedule a personalized consultation with our financial experts. Get expert advice tailored to your business needs.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/254702491439?text=Hello%2C%20I%20would%20like%20to%20chat%20with%20you%20about%20your%20financial%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-8 py-4 bg-gradient-to-r from-emerald via-emerald to-emerald-dark hover:from-emerald hover:via-emerald-light hover:to-emerald text-white font-bold rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-emerald/50 transform hover:-translate-y-1 hover:scale-105 overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      Chat with us
                    </span>
                  </a>
                  
                  <a
                    href="tel:+254754029431"
                    className="px-8 py-4 bg-white border-2 border-emerald hover:bg-emerald hover:text-white text-emerald font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Us: 0754029431
                  </a>
                </div>
                
                <div className="mt-6 flex items-center justify-center gap-6 text-sm text-text-secondary">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Free Consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Expert Advice</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Quick Response</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-8 order-2 lg:order-1">
              <div>
                <h3 className="text-2xl font-semibold text-deep-blue mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald/10 rounded-lg flex items-center justify-center group-hover:bg-emerald group-hover:scale-110 transition-all duration-300">
                      <svg
                        className="h-6 w-6 text-emerald group-hover:text-white transition-colors duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-text-secondary mb-1">Phone</p>
                      <a
                        href="tel:+254754029431"
                        className="text-deep-blue font-semibold hover:text-emerald transition-colors duration-300"
                      >
                        +254 754 029 431
                      </a>
                      <p className="text-xs text-text-secondary mt-1">Business Line</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald/10 rounded-lg flex items-center justify-center group-hover:bg-emerald group-hover:scale-110 transition-all duration-300">
                      <svg
                        className="h-6 w-6 text-emerald group-hover:text-white transition-colors duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-text-secondary mb-1">Partner Line</p>
                      <a
                        href="tel:+254711721456"
                        className="text-deep-blue font-semibold hover:text-emerald transition-colors duration-300"
                      >
                        +254 711 721 456
                      </a>
                      <p className="text-xs text-text-secondary mt-1">CPA Calleb Masese</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald/10 rounded-lg flex items-center justify-center group-hover:bg-emerald group-hover:scale-110 transition-all duration-300">
                      <svg
                        className="h-6 w-6 text-emerald group-hover:text-white transition-colors duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-text-secondary mb-1">Email</p>
                      <a
                        href="mailto:financialbeconconsulting@gmail.com"
                        className="text-deep-blue font-semibold hover:text-emerald transition-colors duration-300"
                      >
                        financialbeconconsulting@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald/10 rounded-lg flex items-center justify-center group-hover:bg-emerald group-hover:scale-110 transition-all duration-300">
                      <svg
                        className="h-6 w-6 text-emerald group-hover:text-white transition-colors duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-text-secondary mb-1">Location</p>
                      <p className="text-deep-blue font-semibold">
                        Revlon Plaza, 3rd Floor, Kimathi Street
                      </p>
                      <p className="text-xs text-text-secondary mt-1">Nairobi, Kenya</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center group-hover:bg-green-500 group-hover:scale-110 transition-all duration-300">
                      <svg
                        className="h-6 w-6 text-green-500 group-hover:text-white transition-colors duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-text-secondary mb-1">WhatsApp</p>
                      <a
                        href="https://wa.me/254702491439?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-deep-blue font-semibold hover:text-green-500 transition-colors duration-300 flex items-center gap-2"
                      >
                        Chat with us on WhatsApp
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <p className="text-xs text-text-secondary mt-1">
                        +254 702 491 439 (Business WhatsApp & SMS)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-light-grey p-6 rounded-xl border border-emerald/10 hover:border-emerald/30 transition-all duration-300">
                <h4 className="text-lg font-semibold text-deep-blue mb-4 flex items-center">
                  <span className="w-1 h-6 bg-emerald mr-3 rounded-full"></span>
                  Office Hours
                </h4>
                <div className="space-y-2 text-text-primary">
                  <p>Monday - Friday: <span className="font-semibold text-emerald">9:00 AM - 5:00 PM</span></p>
                  <p>Saturday: <span className="font-semibold text-emerald">9:00 AM - 1:00 PM</span></p>
                  <p>Sunday: <span className="font-semibold text-text-secondary">Closed</span></p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-semibold text-deep-blue mb-6">
                Send Us a Message
              </h3>
              <SmartContactForm />
            </div>
          </div>

          {/* Find Us on Map - Centered */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-light-grey p-6 rounded-xl border border-emerald/10 hover:border-emerald/30 transition-all duration-300">
              <h4 className="text-2xl font-semibold text-deep-blue mb-6 text-center flex items-center justify-center">
                <span className="w-1 h-8 bg-emerald mr-3 rounded-full"></span>
                Find Us on Map
              </h4>
              <div className="rounded-lg overflow-hidden shadow-lg border-2 border-emerald/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7975!2d36.8219!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0814b2de8a69!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                  title="FBC Location - Nairobi, Kenya"
                ></iframe>
              </div>
              <div className="mt-4 flex items-center justify-center gap-3">
                <a
                  href="https://maps.app.goo.gl/fLJeSuddBasqEHK97"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald hover:bg-emerald/90 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Open in Google Maps
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              <p className="text-sm text-text-secondary mt-4 text-center">
                Click the button above to view our exact location on Google Maps or{' '}
                <a 
                  href="https://maps.app.goo.gl/fLJeSuddBasqEHK97"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald hover:underline font-semibold"
                >
                  click here
                </a>
                {' '}to get directions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
