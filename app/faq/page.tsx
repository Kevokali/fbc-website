import FAQSection from '@/components/FAQSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Common questions about Financial Beacon Consulting services: tax compliance, accounting services, business registration, audit services, and financial advisory in Kenya. Get answers from FBC experts.',
  keywords: 'FBC FAQ, financial consulting questions, tax compliance FAQ, accounting services Kenya FAQ, business registration questions, audit services Kenya',
  openGraph: {
    title: 'FAQ | Financial Beacon Consulting',
    description: 'Frequently asked questions about FBC\'s financial consulting services in Kenya.',
    url: 'https://financialbeaconconsulting.co.ke/faq',
  },
  alternates: {
    canonical: 'https://financialbeaconconsulting.co.ke/faq',
  },
}

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <FAQSection />
    </main>
  )
}
