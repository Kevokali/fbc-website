import TeamSection from '@/components/TeamSection'
import SEOStructuredData from '@/components/SEOStructuredData'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the expert team at Financial Beacon Consulting: Luke Weke (CPA, BCom Finance, MSc Finance Ongoing) - Director & Lead Consultant, and CPA Calleb Masese - Partner. Experienced financial consultants serving businesses in Kenya.',
  keywords: 'FBC team, financial consultants Kenya, Luke Weke CPA, Calleb Masese CPA, financial advisory team Nairobi, certified public accountants Kenya',
  openGraph: {
    title: 'Our Team | Financial Beacon Consulting',
    description: 'Meet the expert financial consultants at FBC: Luke Weke and CPA Calleb Masese. Experienced professionals helping Kenyan businesses achieve financial success.',
    url: 'https://financialbeacon.co.ke/team',
  },
  alternates: {
    canonical: 'https://financialbeacon.co.ke/team',
  },
}

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <SEOStructuredData type="team" />
      <TeamSection />
    </main>
  )
}
