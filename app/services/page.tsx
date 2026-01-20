import ServicesSection from '@/components/ServicesSection'
import SEOStructuredData from '@/components/SEOStructuredData'
import type { Metadata } from 'next'

const baseUrl = 'https://financialbeaconconsulting.co.ke'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Comprehensive financial consulting services in Kenya: Strategic Financial Planning, Risk Management & Compliance, Business Performance Advisory, Training & Capacity Building, Tax Compliance, Accounting, Audit Services, Business Registration, and Trade Finance.',
  keywords:
    'financial planning Kenya, risk management consulting, business performance advisory, tax compliance services Kenya, accounting services Nairobi, audit services Kenya, business registration Kenya, trade finance Kenya, KRA compliance, financial training Kenya',
  openGraph: {
    title: 'Financial Consulting Services in Kenya | FBC',
    description:
      'Strategic Financial Planning, Risk Management, Compliance, Business Performance Advisory, and Training services for Kenyan businesses.',
    url: `${baseUrl}/services`,
  },
  alternates: {
    canonical: '/services', // will resolve against metadataBase to avoid absolute/relative mismatch
  },
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <SEOStructuredData type="services" />
      <ServicesSection />
    </main>
  )
}
