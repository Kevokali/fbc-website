import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingConsultationButton from '@/components/FloatingConsultationButton'
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Financial Beacon Consulting | Trusted Financial Services in Nairobi',
  description: 'FBC provides accounting, tax, compliance, and advisory services in Nairobi. Partner with us for financial clarity and compliance.',
  keywords: 'financial consulting Nairobi, tax services, accounting services, compliance services, business registration, audit services',
  authors: [{ name: 'Financial Beacon Consulting' }],
  openGraph: {
    title: 'Financial Beacon Consulting | Trusted Financial Services in Nairobi',
    description: 'FBC provides accounting, tax, compliance, and advisory services in Nairobi. Partner with us for financial clarity and compliance.',
    type: 'website',
    locale: 'en_KE',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <FloatingConsultationButton />
        <FloatingWhatsAppButton />
      </body>
    </html>
  )
}
