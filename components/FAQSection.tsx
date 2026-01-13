'use client'

import Script from 'next/script'
import { useState } from 'react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'What services does your financial consulting firm in Kenya offer?',
      answer:
        'As a leading financial consulting firm in Nairobi, Kenya, we offer comprehensive financial consulting services including business registration in Kenya, tax and statutory compliance, KRA compliance services, accounting and financial management, audit and risk advisory, and trade finance & guarantees for Kenyan businesses.',
    },
    {
      question: 'How long does business registration take in Kenya?',
      answer:
        'The timeline for business registration in Kenya varies depending on the entity type. Limited companies typically take 7-14 business days, while sole proprietorships can be completed within 3-5 business days. Our financial consulting firm in Nairobi can expedite the process.',
    },
    {
      question: 'Do you provide tax filing services for individuals and businesses in Kenya?',
      answer:
        'Yes, as a trusted financial consulting firm in Kenya, we provide tax filing services for both individuals and businesses. Our services include KRA returns, withholding tax, rental income tax, and advance tax filings for clients across Nairobi and Kenya.',
    },
    {
      question: 'What accounting software does your financial consulting firm in Kenya support?',
      answer:
        'Our financial consulting firm in Nairobi, Kenya provides training and support for Tally and QuickBooks. We can also assist with bookkeeping and financial management using these platforms for Kenyan businesses.',
    },
    {
      question: 'How can I book a consultation with your financial consulting firm in Kenya?',
      answer:
        'You can book a consultation with our financial consulting firm in Kenya by contacting us via phone, email, WhatsApp, or by filling out the contact form on our website. We typically respond within 24 hours. Our office is located in Nairobi, Kenya.',
    },
    {
      question: 'Do you provide financial consulting services outside Nairobi?',
      answer:
        'Yes, while our main office is in Nairobi, we provide remote financial consulting services and can arrange on-site visits for clients across Kenya when needed. As a leading financial consulting firm in Kenya, we serve businesses throughout the country.',
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
              Common questions about our financial consulting firm in Nairobi, Kenya: tax compliance, KRA compliance, accounting services, business registration, audit services, and financial advisory services for Kenyan businesses
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
