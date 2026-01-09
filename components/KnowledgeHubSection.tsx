'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

interface BlogPost {
  id: string
  title: string
  metaTitle: string
  metaDescription: string
  introduction: string
  sections: {
    title: string
    content: string
    impact?: string
    solution?: string
    tip?: string
  }[]
  conclusion: string
  cta: {
    text: string
    link: string
    buttonText: string
  }
}

const blogPosts: BlogPost[] = [
  {
    id: 'tax-mistakes',
    title: 'Common Tax Mistakes SMEs Make in Kenya (And How to Avoid Them)',
    metaTitle: 'Common Tax Mistakes SMEs Make in Kenya | FBC',
    metaDescription: 'Learn the most common tax mistakes SMEs make in Kenya and how to avoid penalties, audits, and compliance risks with expert guidance.',
    introduction: 'Small and Medium Enterprises (SMEs) form the backbone of Kenya\'s economy. However, many businesses face tax penalties, audits, and cash flow strain not because of fraud, but due to avoidable compliance mistakes.\n\nUnderstanding common tax errors can help your business remain compliant, reduce risk, and improve financial stability.',
    sections: [
      {
        title: '1. Late or Non-Filing of Tax Returns',
        content: 'Failing to file VAT, PAYE, or Corporation Tax on time attracts penalties and daily interest from KRA.',
        impact: '• Accumulating fines\n• Increased audit risk\n• Business cash flow pressure',
        solution: 'Create a tax compliance calendar and automate reminders or outsource filing to professionals.',
      },
      {
        title: '2. Mixing Personal and Business Finances',
        content: 'Many SMEs use one account for both personal and business expenses, making it difficult to track taxable income accurately.',
        impact: '• Inaccurate financial statements\n• Disallowed expenses during audits',
        solution: 'Maintain separate bank accounts and clearly classify all transactions.',
      },
      {
        title: '3. Poor Record Keeping',
        content: 'Missing invoices, receipts, or unsupported expenses weaken your tax position.',
        impact: '• Disallowed deductions\n• Difficulty defending tax positions',
        solution: 'Adopt accounting software and maintain digital records for at least seven years.',
      },
      {
        title: '4. Misunderstanding Allowable Deductions',
        content: 'Some SMEs overclaim deductions while others fail to claim legitimate expenses.',
        impact: '• Penalties for overclaiming\n• Higher tax liability for underclaiming',
        solution: 'Seek professional tax advice to ensure deductions comply with Kenyan tax laws.',
      },
      {
        title: '5. Ignoring Withholding Tax Obligations',
        content: 'Failure to deduct and remit withholding tax transfers the liability to the business.',
        solution: 'Understand applicable rates and remit promptly to avoid penalties.',
      },
    ],
    conclusion: 'Proactive tax compliance is significantly cheaper than resolving penalties and disputes.',
    cta: {
      text: 'Need help with tax compliance?',
      link: '/contact',
      buttonText: 'Talk to a Tax Advisor at FBC',
    },
  },
  {
    id: 'audit-preparation',
    title: 'How to Prepare for Financial Audits: A Practical Guide for Kenyan Businesses',
    metaTitle: 'How to Prepare for Financial Audits in Kenya | FBC',
    metaDescription: 'Learn how to prepare for financial audits in Kenya, reduce compliance risks, and improve investor confidence with this practical guide.',
    introduction: 'Financial audits are no longer limited to large corporations. SMEs face audits from regulators, lenders, and investors as part of compliance and due diligence.\n\nProper preparation reduces stress and improves credibility.',
    sections: [
      {
        title: '1. Maintain Accurate Financial Statements',
        content: 'Ensure the following are current and reconciled:\n• Income Statement\n• Balance Sheet\n• Cash Flow Statement\n\nDiscrepancies raise audit red flags.',
      },
      {
        title: '2. Strengthen Internal Controls',
        content: 'Auditors assess how transactions are approved and recorded.',
        solution: 'Key controls include:\n• Segregation of duties\n• Authorization procedures\n• Secure access to systems',
      },
      {
        title: '3. Reconcile Tax and Accounting Records',
        content: 'Differences between tax filings and financial statements are a major audit concern.',
        tip: 'Regularly reconcile VAT, PAYE, and withholding tax.',
      },
      {
        title: '4. Organize Supporting Documentation',
        content: 'Auditors commonly request:\n• Contracts\n• Bank statements\n• Invoices\n• Payroll records\n\nHaving these ready accelerates the audit process.',
      },
      {
        title: '5. Conduct a Pre-Audit Review',
        content: 'A pre-audit review helps identify gaps before formal audits begin.',
      },
    ],
    conclusion: 'Audit readiness improves compliance, investor confidence, and operational discipline.',
    cta: {
      text: 'Preparing for an audit?',
      link: '/contact',
      buttonText: 'Schedule a Pre-Audit Review with FBC',
    },
  },
  {
    id: 'financial-planning',
    title: 'Financial Planning for Growing Businesses: A Strategic Guide',
    metaTitle: 'Financial Planning for Growing Businesses | FBC',
    metaDescription: 'Discover how effective financial planning helps growing businesses manage cash flow, reduce risk, and achieve sustainable growth.',
    introduction: 'Growth is a positive milestone—but without financial planning, it can expose businesses to cash shortages, compliance risks, and poor decisions.\n\nStrategic planning ensures growth is sustainable.',
    sections: [
      {
        title: '1. Forecast Cash Flow',
        content: 'Growth often increases expenses before revenue stabilizes.',
        solution: 'Focus on:\n• Payroll\n• Supplier payments\n• Tax obligations\n\nCash flow forecasting prevents operational disruptions.',
      },
      {
        title: '2. Budget for Expansion',
        content: 'Plan for:\n• Staffing\n• Technology upgrades\n• Compliance costs\n• Marketing investments\n\nGrowth should be intentional and measurable.',
      },
      {
        title: '3. Choose the Right Financing Structure',
        content: 'Understand the implications of:\n• Loans\n• Equity financing\n• Retained earnings\n\nEach option affects ownership and long-term stability.',
      },
      {
        title: '4. Improve Financial Reporting',
        content: 'Accurate and timely financial data supports informed decision-making.\n\nGrowth demands data-driven leadership, not intuition.',
      },
      {
        title: '5. Plan for Tax Efficiency',
        content: 'Expansion may push businesses into higher tax brackets.\n\nStrategic planning helps manage tax exposure legally.',
      },
    ],
    conclusion: 'Sustainable growth is built on structure, discipline, and strategic foresight.',
    cta: {
      text: 'Planning your next growth phase?',
      link: '/contact',
      buttonText: 'Talk to a Financial Planning Expert at FBC',
    },
  },
]

export default function KnowledgeHubSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [expandedPost, setExpandedPost] = useState<string | null>(null)
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

  const togglePost = (postId: string) => {
    setExpandedPost(expandedPost === postId ? null : postId)
  }

  return (
    <section
      ref={sectionRef}
      id="knowledge-hub"
      className="py-20 bg-gradient-to-br from-white via-light-grey to-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-deep-blue/5 rounded-full blur-3xl"></div>
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
              Knowledge Hub
            </span>
          </div>
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-deep-blue ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.1s' }}
          >
            Expert Financial Insights
          </h1>
          <div className="w-24 h-1 bg-emerald mx-auto rounded-full mb-6"></div>
          <p
            className={`text-xl text-text-secondary max-w-3xl mx-auto ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            Practical guides and expert advice to help your business navigate tax compliance, audits, and financial planning in Kenya.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {blogPosts.map((post, index) => {
            const isExpanded = expandedPost === post.id
            return (
              <article
                key={post.id}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-emerald/10 hover:border-emerald/30 transform hover:-translate-y-1 ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                {/* Post Header */}
                <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold text-deep-blue mb-4 leading-tight">
                        {post.title}
                      </h2>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary mb-4">
                        <span className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {index === 0 && 'Tax Compliance'}
                          {index === 1 && 'Audit Preparation'}
                          {index === 2 && 'Financial Planning'}
                        </span>
                        <span className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          {post.sections.length} Key Points
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => togglePost(post.id)}
                      className="flex-shrink-0 w-12 h-12 bg-emerald/10 hover:bg-emerald text-emerald hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                      aria-label={isExpanded ? 'Collapse article' : 'Expand article'}
                    >
                      <svg
                        className={`w-6 h-6 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  {/* Introduction */}
                  <div className="prose prose-lg max-w-none mb-6">
                    <p className="text-text-primary leading-relaxed whitespace-pre-line">
                      {post.introduction}
                    </p>
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="mt-8 space-y-8 animate-fade-in">
                      {post.sections.map((section, sectionIndex) => (
                        <div
                          key={sectionIndex}
                          className="border-l-4 border-emerald pl-6 py-4 bg-emerald/5 rounded-r-lg"
                        >
                          <h3 className="text-xl font-bold text-deep-blue mb-3">
                            {section.title}
                          </h3>
                          <p className="text-text-primary mb-4 leading-relaxed whitespace-pre-line">
                            {section.content}
                          </p>
                          {section.impact && (
                            <div className="bg-white/50 rounded-lg p-4 mb-4">
                              <h4 className="font-semibold text-deep-blue mb-2 flex items-center gap-2">
                                <svg className="w-5 h-5 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                Impact:
                              </h4>
                              <p className="text-text-secondary whitespace-pre-line">
                                {section.impact}
                              </p>
                            </div>
                          )}
                          {section.solution && (
                            <div className="bg-emerald/10 rounded-lg p-4 mb-4">
                              <h4 className="font-semibold text-emerald mb-2 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Solution:
                              </h4>
                              <p className="text-text-primary whitespace-pre-line">
                                {section.solution}
                              </p>
                            </div>
                          )}
                          {section.tip && (
                            <div className="bg-deep-blue/5 rounded-lg p-4">
                              <h4 className="font-semibold text-deep-blue mb-2 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Tip:
                              </h4>
                              <p className="text-text-primary">
                                {section.tip}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}

                      {/* Conclusion */}
                      <div className="bg-gradient-to-r from-deep-blue to-emerald rounded-xl p-6 text-white">
                        <p className="text-lg font-medium mb-4">
                          {post.conclusion}
                        </p>
                        <Link
                          href={post.cta.link}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald font-semibold rounded-lg hover:bg-emerald/10 hover:text-white transition-all duration-300 transform hover:scale-105"
                        >
                          <span>{post.cta.buttonText}</span>
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* CTA Button (when collapsed) */}
                  {!isExpanded && (
                    <div className="mt-6 pt-6 border-t border-emerald/10">
                      <Link
                        href={post.cta.link}
                        className="inline-flex items-center gap-2 text-emerald hover:text-emerald-dark font-semibold transition-colors duration-300"
                      >
                        <span>{post.cta.text}</span>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </div>
                  )}
                </div>
              </article>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 text-center ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.6s' }}
        >
          <div className="bg-gradient-to-br from-deep-blue to-emerald rounded-2xl p-8 md:p-12 text-white shadow-xl">
            <h3 className="text-3xl font-bold mb-4">
              Need Personalized Financial Advice?
            </h3>
            <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Our experts are ready to help you navigate tax compliance, prepare for audits, and plan for sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-emerald font-bold rounded-lg hover:bg-emerald/10 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="tel:+254754029431"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg transition-all duration-300 border-2 border-white/30 hover:border-white/50"
              >
                Call: 0754029431
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
