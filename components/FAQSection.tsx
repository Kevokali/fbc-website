'use client'

import Script from 'next/script'
import { useState } from 'react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'What services does Financial Beacon Consulting offer?',
      answer:
        'We offer comprehensive financial consulting services including business registration, tax and statutory compliance, accounting and financial management, audit and risk advisory, and trade finance & guarantees.',
    },
    {
      question: 'How long does business registration take?',
      answer:
        'The timeline for business registration varies depending on the entity type. Limited companies typically take 7-14 business days, while sole proprietorships can be completed within 3-5 business days.',
    },
    {
      question: 'Do you provide tax filing services for individuals?',
      answer:
        'Yes, we provide tax filing services for both individuals and businesses. Our services include KRA returns, withholding tax, rental income tax, and advance tax filings.',
    },
    {
      question: 'What accounting software do you support?',
      answer:
        'We provide training and support for Tally and QuickBooks. We can also assist with bookkeeping and financial management using these platforms.',
    },
    {
      question: 'How can I book a consultation?',
      answer:
        'You can book a consultation by contacting us via phone, email, or by filling out the contact form on our website. We typically respond within 24 hours.',
    },
    {
      question: 'Do you provide services outside Nairobi?',
      answer:
        'While our main office is in Nairobi, we provide remote consulting services and can arrange on-site visits for clients across Kenya when needed.',
    },
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <section id="faq" className="py-20 bg-light-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-deep-blue">
              Frequently Asked Questions
            </h1>
            <div className="w-24 h-1 bg-emerald mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Common questions about Financial Beacon Consulting services: tax compliance, accounting services, business registration, audit services, and financial advisory in Kenya
            </p>
          </header>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-emerald/20 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <button
                  className="w-full px-6 py-5 text-left bg-white hover:bg-emerald/5 transition-colors duration-300 flex justify-between items-center group"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <span className="font-semibold text-deep-blue group-hover:text-emerald transition-colors duration-300 pr-4">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-emerald/10 flex items-center justify-center transition-all duration-300 ${
                    openIndex === index ? 'bg-emerald text-white rotate-180' : 'text-emerald group-hover:bg-emerald/20'
                  }`}>
                    <svg
                      className="w-5 h-5 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 py-4 bg-white border-t border-emerald/10">
                    <p className="text-text-primary leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
