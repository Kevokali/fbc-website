'use client'

import Script from 'next/script'

interface SEOStructuredDataProps {
  type?: 'home' | 'services' | 'about' | 'contact' | 'team' | 'knowledge-hub'
}

export default function SEOStructuredData({ type = 'home' }: SEOStructuredDataProps) {
  const baseUrl = 'https://financialbeacon.co.ke'

  // Core Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${baseUrl}#organization`,
    name: 'Financial Beacon Consulting',
    alternateName: 'FBC',
    url: baseUrl,
    logo: `${baseUrl}/logo/logo.png`,
    image: `${baseUrl}/logo/logo.png`,
    description: 'Financial Beacon Consulting (FBC) is a Kenyan-based financial consulting firm focused on helping businesses achieve clarity, compliance, and sustainable growth through strategic financial planning, risk management, compliance, and business performance advisory services.',
    foundingDate: '2020',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Revlon Plaza, 3rd Floor, Kimathi Street',
      addressLocality: 'Nairobi',
      addressRegion: 'Nairobi County',
      postalCode: '00200',
      addressCountry: 'KE',
      postOfficeBoxNumber: 'P.O. Box 13283 - 00200, City Square',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -1.2921,
      longitude: 36.8219,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Kenya',
    },
    serviceArea: {
      '@type': 'City',
      name: 'Nairobi',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+254-754-029-431',
        contactType: 'Customer Service',
        email: 'financialbeconconsulting@gmail.com',
        availableLanguage: ['English', 'Swahili'],
        areaServed: 'KE',
      },
      {
        '@type': 'ContactPoint',
        telephone: '+254-702-491-439',
        contactType: 'Sales',
        contactOption: 'WhatsApp',
        availableLanguage: ['English', 'Swahili'],
        areaServed: 'KE',
      },
    ],
    sameAs: [
      'https://www.linkedin.com/in/cpa-weke-ochieng-luke-174b09127/',
      'https://x.com/wekeluke1',
      'https://www.tiktok.com/@fbc610',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '25',
      bestRating: '5',
      worstRating: '1',
    },
    priceRange: '$$',
    currenciesAccepted: 'KES',
    paymentAccepted: 'Cash, Bank Transfer, Mobile Money',
  }

  // LocalBusiness Schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}#localbusiness`,
    name: 'Financial Beacon Consulting',
    image: `${baseUrl}/logo/logo.png`,
    url: baseUrl,
    telephone: '+254-754-029-431',
    email: 'financialbeconconsulting@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Revlon Plaza, 3rd Floor, Kimathi Street',
      addressLocality: 'Nairobi',
      addressRegion: 'Nairobi County',
      postalCode: '00200',
      addressCountry: 'KE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -1.2921,
      longitude: 36.8219,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
      ],
      opens: '08:00',
      closes: '17:00',
    },
  }

  // Services Schema
  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'Service',
        name: 'Strategic Financial Planning',
        description: 'Helping businesses forecast, budget, and optimize financial performance for sustainable growth.',
        provider: {
          '@type': 'Organization',
          name: 'Financial Beacon Consulting',
        },
        areaServed: {
          '@type': 'Country',
          name: 'Kenya',
        },
        serviceType: 'Financial Planning',
      },
      {
        '@type': 'Service',
        name: 'Risk Management & Compliance',
        description: 'Identifying financial risks, ensuring regulatory compliance with KRA, and mitigating potential losses.',
        provider: {
          '@type': 'Organization',
          name: 'Financial Beacon Consulting',
        },
        areaServed: {
          '@type': 'Country',
          name: 'Kenya',
        },
        serviceType: 'Risk Management',
      },
      {
        '@type': 'Service',
        name: 'Business Performance Advisory',
        description: 'Offering insights to improve profitability, operational efficiency, and data-driven decision-making.',
        provider: {
          '@type': 'Organization',
          name: 'Financial Beacon Consulting',
        },
        areaServed: {
          '@type': 'Country',
          name: 'Kenya',
        },
        serviceType: 'Business Advisory',
      },
      {
        '@type': 'Service',
        name: 'Training & Capacity Building',
        description: 'Conducting workshops for finance teams and executives on best practices, Tally, QuickBooks, and financial management.',
        provider: {
          '@type': 'Organization',
          name: 'Financial Beacon Consulting',
        },
        areaServed: {
          '@type': 'Country',
          name: 'Kenya',
        },
        serviceType: 'Training',
      },
      {
        '@type': 'Service',
        name: 'Tax & Statutory Compliance',
        description: 'Expert tax services ensuring full compliance with KRA requirements including VAT, PAYE, Withholding Tax, and statutory filings.',
        provider: {
          '@type': 'Organization',
          name: 'Financial Beacon Consulting',
        },
        areaServed: {
          '@type': 'Country',
          name: 'Kenya',
        },
        serviceType: 'Tax Compliance',
      },
      {
        '@type': 'Service',
        name: 'Accounting & Financial Management',
        description: 'Complete accounting solutions including bookkeeping, financial forecasts, budgets, and financial reporting.',
        provider: {
          '@type': 'Organization',
          name: 'Financial Beacon Consulting',
        },
        areaServed: {
          '@type': 'Country',
          name: 'Kenya',
        },
        serviceType: 'Accounting',
      },
      {
        '@type': 'Service',
        name: 'Audit, Risk & Advisory',
        description: 'Strategic advisory and audit services including internal audits, risk assessment, and internal controls to strengthen your business.',
        provider: {
          '@type': 'Organization',
          name: 'Financial Beacon Consulting',
        },
        areaServed: {
          '@type': 'Country',
          name: 'Kenya',
        },
        serviceType: 'Audit',
      },
      {
        '@type': 'Service',
        name: 'Business Registration',
        description: 'Comprehensive business registration services for Limited Companies, Sole Proprietorships, Partnerships, NGOs, and Foundations.',
        provider: {
          '@type': 'Organization',
          name: 'Financial Beacon Consulting',
        },
        areaServed: {
          '@type': 'Country',
          name: 'Kenya',
        },
        serviceType: 'Business Registration',
      },
      {
        '@type': 'Service',
        name: 'Trade Finance & Guarantees',
        description: 'Financial instruments and support for trade operations including tender securities, performance bonds, and advance payment guarantees.',
        provider: {
          '@type': 'Organization',
          name: 'Financial Beacon Consulting',
        },
        areaServed: {
          '@type': 'Country',
          name: 'Kenya',
        },
        serviceType: 'Trade Finance',
      },
    ],
  }

  // Breadcrumb Schema (for navigation)
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      ...(type !== 'home' ? [
        {
          '@type': 'ListItem',
          position: 2,
          name: type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' '),
          item: `${baseUrl}/${type === 'services' ? 'services' : type === 'knowledge-hub' ? 'knowledge-hub' : type}`,
        },
      ] : []),
    ],
  }

  return (
    <>
      <Script
        id="organization-schema-seo"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="localbusiness-schema-seo"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <Script
        id="services-schema-seo"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />
      <Script
        id="breadcrumb-schema-seo"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  )
}
