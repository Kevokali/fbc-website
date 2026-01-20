import ContactSection from '@/components/ContactSection'
import SEOStructuredData from '@/components/SEOStructuredData'
import type { Metadata } from 'next'

const baseUrl = 'https://financialbeaconconsulting.co.ke'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Financial Beacon Consulting in Nairobi, Kenya. Located at Revlon Plaza, 3rd Floor, Kimathi Street. Call +254-754-029-431, WhatsApp +254-702-491-439, or email financialbeconconsulting@gmail.com',
  keywords:
    'contact FBC, financial consultant Nairobi, contact Financial Beacon Consulting, FBC contact details, financial advisory Kenya contact, Nairobi financial services',
  openGraph: {
    title: 'Contact Financial Beacon Consulting | FBC Kenya',
    description:
      'Get in touch with FBC for financial consulting services. Located in Nairobi, Kenya. WhatsApp, email, or call us today.',
    url: `${baseUrl}/contact`,
  },
  alternates: {
    canonical: '/contact', // resolved via metadataBase for consistent canonical
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <SEOStructuredData type="contact" />
      <ContactSection />
    </main>
  )
}
