import KnowledgeHubSection from '@/components/KnowledgeHubSection'
import SEOStructuredData from '@/components/SEOStructuredData'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Knowledge Hub',
  description: 'Expert financial insights and guides for Kenyan businesses: Common Tax Mistakes SMEs Make, How to Prepare for Financial Audits, Financial Planning for Growing Businesses. Learn from FBC\'s financial experts.',
  keywords: 'tax compliance Kenya, financial audits, business planning, SME tax advice, KRA compliance, financial planning Kenya, tax mistakes Kenya, audit preparation, business growth planning',
  openGraph: {
    title: 'Knowledge Hub | Financial Beacon Consulting',
    description: 'Expert insights on tax compliance, financial audits, and business planning for SMEs in Kenya.',
    url: 'https://financialbeaconconsulting.co.ke/knowledge-hub',
  },
  alternates: {
    canonical: 'https://financialbeaconconsulting.co.ke/knowledge-hub',
  },
}

export default function KnowledgeHubPage() {
  return (
    <main className="min-h-screen">
      <SEOStructuredData type="knowledge-hub" />
      <KnowledgeHubSection />
    </main>
  )
}
