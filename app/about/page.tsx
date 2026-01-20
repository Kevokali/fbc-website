import AboutSection from '@/components/AboutSection'
import SEOStructuredData from '@/components/SEOStructuredData'
import type { Metadata } from 'next'

const baseUrl = 'https://financialbeaconconsulting.co.ke'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Financial Beacon Consulting (FBC), a Kenyan-based financial consulting firm helping businesses achieve clarity, compliance, and sustainable growth. Specialized in strategic financial planning, risk management, and business performance advisory.',
  keywords:
    'about FBC, financial consulting firm Kenya, about Financial Beacon Consulting, Kenyan financial consultants, strategic financial planning Kenya, business advisory Nairobi',
  openGraph: {
    title: 'About Financial Beacon Consulting | FBC Kenya',
    description:
      'A Kenyan-based financial consulting firm focused on helping businesses achieve clarity, compliance, and sustainable growth.',
    url: `${baseUrl}/about`,
  },
  alternates: {
    canonical: '/about', // resolved via metadataBase for consistent canonical output
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <SEOStructuredData type="about" />
      <AboutSection />
    </main>
  )
}
