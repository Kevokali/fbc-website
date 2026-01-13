import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://financialbeaconconsulting.co.ke'
  const currentDate = new Date().toISOString()
  
  // Calculate dates for better indexing signals
  const today = new Date()
  const lastWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString()
  const lastMonth = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000).toISOString()

  return [
    // Homepage - Highest priority, most frequently updated
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    // Core service pages - High priority for business
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/knowledge-hub`,
      lastModified: currentDate,
      changeFrequency: 'daily', // Blog content updates frequently
      priority: 0.9,
    },
    // Important business pages
    {
      url: `${baseUrl}/about`,
      lastModified: lastMonth,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastMonth,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: lastMonth,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Supporting pages
    {
      url: `${baseUrl}/testimonials`,
      lastModified: lastWeek,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: lastMonth,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
}
