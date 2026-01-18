import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingConsultationButton from '@/components/FloatingConsultationButton'
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton'
import SEOStructuredData from '@/components/SEOStructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://financialbeaconconsulting.co.ke'),
  title: {
    default: 'Financial Consulting Firm in Kenya & Nairobi | FBC - Expert Financial Services',
    template: '%s | Financial Consulting Firm in Kenya & Nairobi',
  },
  description: 'Financial Beacon Consulting (FBC) is a leading financial consulting firm in Nairobi, Kenya, specializing in strategic financial planning, tax compliance, accounting services, business registration, and KRA compliance. Trusted by businesses across Kenya for expert financial advisory services.',
  keywords: [
    'financial consulting firm in Kenya',
    'financial consulting firm in Nairobi',
    'strategic financial planning Kenya',
    'risk management consulting Kenya',
    'business performance advisory Kenya',
    'tax compliance services Kenya',
    'KRA compliance services in Kenya',
    'KRA compliance services in Nairobi',
    'accounting services Nairobi',
    'financial advisory services in Kenya',
    'financial advisory services in Nairobi',
    'business financial planning in Kenya',
    'business financial planning in Nairobi',
    'compliance consulting in Kenya',
    'compliance consulting in Nairobi',
    'financial training in Kenya',
    'financial training in Nairobi',
    'Beacon financial consulting in Kenya',
    'Beacon financial consulting in Nairobi',
    'FBC Kenya',
    'financial clarity in Kenya',
    'sustainable business growth in Kenya',
    'best financial consulting firm Kenya',
    'top financial consulting firm Nairobi',
    'financial consulting company Kenya',
    'financial consulting company Nairobi',
    'CPA firm Kenya',
    'CPA firm Nairobi',
    'accounting firm Kenya',
    'accounting firm Nairobi',
    'tax consultant Kenya',
    'tax consultant Nairobi',
    'business consultant Kenya',
    'business consultant Nairobi',
    'financial advisor Kenya',
    'financial advisor Nairobi',
  ],
  authors: [{ name: 'Financial Beacon Consulting', url: 'https://financialbeaconconsulting.co.ke' }],
  creator: 'Financial Beacon Consulting',
  publisher: 'Financial Beacon Consulting',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/logo/favicon-rounded.png',
    apple: '/logo/favicon-rounded.png',
    shortcut: '/logo/favicon-rounded.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://financialbeaconconsulting.co.ke',
    siteName: 'Financial Beacon Consulting',
    title: 'Financial Consulting Firm in Kenya & Nairobi | Expert Financial Services',
    description: 'Leading financial consulting firm in Nairobi, Kenya offering strategic financial planning, tax compliance, accounting services, business registration, and KRA compliance. Expert financial advisory for Kenyan businesses.',
    images: [
      {
        url: '/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'Financial Beacon Consulting - Leading Financial Consulting Firm in Nairobi, Kenya | Expert Financial Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Financial Consulting Firm in Kenya & Nairobi | Expert Financial Services',
    description: 'Leading financial consulting firm in Nairobi, Kenya offering strategic financial planning, tax compliance, accounting services, business registration, and KRA compliance. Expert financial advisory for Kenyan businesses.',
    creator: '@wekeluke1',
    images: ['/logo/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://financialbeaconconsulting.co.ke',
  },
  category: 'Financial Services',
  classification: 'Financial Consulting',
  other: {
    'geo.region': 'KE-110',
    'geo.placename': 'Nairobi',
    'geo.position': '-1.2921;36.8219',
    'ICBM': '-1.2921, 36.8219',
    'msvalidate.01': '8123BA7C9E7D9DE8378967525B0FA178',
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
        {/* Logo for Google Search */}
        <link rel="logo" href="https://financialbeaconconsulting.co.ke/logo/logo.png" />
        <meta itemProp="logo" content="https://financialbeaconconsulting.co.ke/logo/logo.png" />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X712M38L3L"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X712M38L3L');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <SEOStructuredData type="home" />
        <Navbar />
        {children}
        <Footer />
        <FloatingConsultationButton />
        <FloatingWhatsAppButton />
      </body>
    </html>
  )
}
