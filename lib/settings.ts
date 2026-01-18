// Settings management for admin-controlled features
// For MVP, using localStorage. In production, replace with API calls

export interface SiteSettings {
  isOpen: boolean
  openMessage?: string
  closedMessage?: string
  lastUpdated?: string
}

const DEFAULT_SETTINGS: SiteSettings = {
  isOpen: true,
  openMessage: 'We are open and ready to serve you!',
  closedMessage: 'We are currently closed. Please check back during business hours.',
  lastUpdated: new Date().toISOString(),
}

export function getSiteSettings(): SiteSettings {
  if (typeof window === 'undefined') return DEFAULT_SETTINGS
  
  const stored = localStorage.getItem('fbc_site_settings')
  if (!stored) {
    // Initialize with default
    setSiteSettings(DEFAULT_SETTINGS)
    return DEFAULT_SETTINGS
  }
  
  try {
    return JSON.parse(stored) as SiteSettings
  } catch {
    return DEFAULT_SETTINGS
  }
}

export function setSiteSettings(settings: SiteSettings): void {
  if (typeof window === 'undefined') return
  
  const updated = {
    ...settings,
    lastUpdated: new Date().toISOString(),
  }
  localStorage.setItem('fbc_site_settings', JSON.stringify(updated))
}

export function updateOpenStatus(isOpen: boolean, message?: string): void {
  const current = getSiteSettings()
  setSiteSettings({
    ...current,
    isOpen,
    openMessage: message || current.openMessage || DEFAULT_SETTINGS.openMessage,
  })
}
