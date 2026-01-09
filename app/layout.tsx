import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingConsultationButton from '@/components/FloatingConsultationButton'
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Financial Beacon Consulting | Trusted Financial Services in Nairobi City and Beyond',
  description: 'FBC provides accounting, tax, compliance, and advisory services in Nairobi. Partner with us for financial clarity and compliance.',
  keywords: 'financial consulting Nairobi, tax services, accounting services, compliance services, business registration, audit services',
  authors: [{ name: 'Financial Beacon Consulting' }],
  icons: {
    icon: '/logo/favicon-rounded.png',
    apple: '/logo/favicon-rounded.png',
    shortcut: '/logo/favicon-rounded.png',
  },
  openGraph: {
    title: 'Financial Beacon Consulting | Trusted Financial Services in Nairobi City and Beyond',
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
        <link rel="icon" href="/logo/favicon-rounded.png" type="image/png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo/favicon-rounded.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo/favicon-rounded.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo/favicon-rounded.png" />
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
