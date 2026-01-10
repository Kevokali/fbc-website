import HeroSection from '@/components/HeroSection'
import HomeSection from '@/components/HomeSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Financial Beacon Consulting (FBC) - Trusted Financial Services in Nairobi City and Beyond. Strategic financial planning, risk management, compliance, and business performance advisory for Kenyan businesses.',
  keywords: 'financial consulting Kenya, financial services Nairobi, strategic financial planning, risk management Kenya, business advisory Kenya, tax compliance Kenya',
  openGraph: {
    title: 'Financial Beacon Consulting | Trusted Financial Services in Nairobi City and Beyond',
    description: 'Helping Kenyan businesses achieve clarity, compliance, and sustainable growth through strategic financial planning, risk management, and business performance advisory services.',
    url: 'https://financialbeacon.co.ke/home',
  },
  alternates: {
    canonical: 'https://financialbeacon.co.ke/home',
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <HomeSection />
    </main>
  )
}
