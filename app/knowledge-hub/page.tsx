import KnowledgeHubSection from '@/components/KnowledgeHubSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Knowledge Hub | Financial Beacon Consulting',
  description: 'Expert insights on tax compliance, financial audits, and business planning for SMEs in Kenya. Learn from FBC\'s financial experts.',
  keywords: 'tax compliance Kenya, financial audits, business planning, SME tax advice, KRA compliance, financial planning Kenya',
}

export default function KnowledgeHubPage() {
  return (
    <main className="min-h-screen">
      <KnowledgeHubSection />
    </main>
  )
}
