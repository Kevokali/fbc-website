import TestimonialsSection from '@/components/TestimonialsSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Client Testimonials',
  description: 'Read testimonials from satisfied clients of Financial Beacon Consulting. See how FBC has helped Kenyan businesses achieve financial clarity, compliance, and sustainable growth.',
  keywords: 'FBC testimonials, financial consulting reviews, client testimonials Kenya, financial advisory reviews, FBC client feedback',
  openGraph: {
    title: 'Client Testimonials | Financial Beacon Consulting',
    description: 'Read what our clients say about FBC\'s financial consulting services in Kenya.',
    url: 'https://financialbeaconconsulting.co.ke/testimonials',
  },
  alternates: {
    canonical: 'https://financialbeaconconsulting.co.ke/testimonials',
  },
}

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen">
      <TestimonialsSection />
    </main>
  )
}
