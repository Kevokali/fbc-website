'use client'

import { useState, useEffect } from 'react'
import { getCurrentUser } from '@/lib/auth'
import type { ClientSettings, User } from '@/lib/types'

export default function ClientSettingsPage() {
  const [user, setUser] = useState<User | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [activeTab, setActiveTab] = useState<'profile' | 'notifications' | 'security' | 'preferences'>('profile')

  const [settings, setSettings] = useState<ClientSettings>({
    userId: '',
    email: '',
    phone: '',
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
    preferences: {
      language: 'en',
      timezone: 'Africa/Nairobi',
      dateFormat: 'DD/MM/YYYY',
    },
    security: {
      twoFactorEnabled: false,
    },
  })

  useEffect(() => {
    const loadUser = async () => {
      const currentUser = await getCurrentUser()
      setUser(currentUser)
      if (currentUser) {
        setSettings(prev => ({
          ...prev,
          userId: currentUser.id,
          email: currentUser.email,
        }))
      }
    }
    loadUser()
  }, [])

  useEffect(() => {
    // Load saved settings from localStorage
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(`fbc_client_settings_${user?.id}`)
      if (saved) {
        try {
          setSettings(JSON.parse(saved))
        } catch {
          // Use defaults
        }
      }
    }
  }, [user?.id])

  const handleSave = async () => {
    setIsSaving(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    // Save to localStorage (in production, save to database)
    if (typeof window !== 'undefined') {
      localStorage.setItem(`fbc_client_settings_${user?.id}`, JSON.stringify(settings))
    }
    
    setIsSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const tabs = [
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'notifications', label: 'Notifications', icon: '🔔' },
    { id: 'security', label: 'Security', icon: '🔒' },
    { id: 'preferences', label: 'Preferences', icon: '⚙️' },
  ] as const

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold text-deep-blue mb-2">Settings</h1>
        <p className="text-text-secondary">Manage your account settings and preferences</p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-md border border-soft-grey overflow-hidden">
        <div className="flex border-b border-soft-grey">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-6 py-4 font-semibold transition-colors ${
                activeTab === tab.id
                  ? 'text-emerald border-b-2 border-emerald bg-emerald/5'
                  : 'text-text-secondary hover:text-deep-blue hover:bg-light-grey'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-6">
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-deep-blue mb-4">Profile Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={settings.email}
                      onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 border border-soft-grey rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={settings.phone}
                      onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                      required
                      className="w-full px-4 py-3 border border-soft-grey rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald outline-none"
                      placeholder="+254 700 000 000"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-deep-blue mb-4">Notification Preferences</h2>
                <div className="space-y-4">
                  <label className="flex items-center justify-between p-4 border border-soft-grey rounded-lg hover:bg-light-grey transition-colors cursor-pointer">
                    <div>
                      <p className="font-semibold text-deep-blue">Email Notifications</p>
                      <p className="text-sm text-text-secondary">Receive notifications via email</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.notifications.email}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          notifications: { ...settings.notifications, email: e.target.checked },
                        })
                      }
                      className="w-5 h-5 text-emerald focus:ring-emerald rounded"
                    />
                  </label>
                  <label className="flex items-center justify-between p-4 border border-soft-grey rounded-lg hover:bg-light-grey transition-colors cursor-pointer">
                    <div>
                      <p className="font-semibold text-deep-blue">SMS Notifications</p>
                      <p className="text-sm text-text-secondary">Receive notifications via SMS</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.notifications.sms}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          notifications: { ...settings.notifications, sms: e.target.checked },
                        })
                      }
                      className="w-5 h-5 text-emerald focus:ring-emerald rounded"
                    />
                  </label>
                  <label className="flex items-center justify-between p-4 border border-soft-grey rounded-lg hover:bg-light-grey transition-colors cursor-pointer">
                    <div>
                      <p className="font-semibold text-deep-blue">Push Notifications</p>
                      <p className="text-sm text-text-secondary">Receive browser push notifications</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.notifications.push}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          notifications: { ...settings.notifications, push: e.target.checked },
                        })
                      }
                      className="w-5 h-5 text-emerald focus:ring-emerald rounded"
                    />
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-deep-blue mb-4">Security Settings</h2>
                <div className="space-y-4">
                  <div className="p-4 border border-soft-grey rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="font-semibold text-deep-blue">Two-Factor Authentication</p>
                        <p className="text-sm text-text-secondary">Add an extra layer of security to your account</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.security.twoFactorEnabled}
                          onChange={(e) =>
                            setSettings({
                              ...settings,
                              security: { ...settings.security, twoFactorEnabled: e.target.checked },
                            })
                          }
                          className="sr-only peer"
                        />
                        <div className="w-14 h-7 bg-grey-medium peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-grey-medium after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-emerald"></div>
                      </label>
                    </div>
                  </div>
                  <div className="p-4 border border-soft-grey rounded-lg">
                    <p className="font-semibold text-deep-blue mb-2">Change Password</p>
                    <p className="text-sm text-text-secondary mb-4">Update your account password</p>
                    <button className="px-6 py-2 border border-soft-grey rounded-lg hover:bg-light-grey transition-colors font-medium">
                      Change Password
                    </button>
                  </div>
                  {settings.security.lastPasswordChange && (
                    <div className="p-4 bg-light-grey rounded-lg">
                      <p className="text-sm text-text-secondary">
                        Last password change: {new Date(settings.security.lastPasswordChange).toLocaleDateString()}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Preferences Tab */}
          {activeTab === 'preferences' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-deep-blue mb-4">Preferences</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">Language</label>
                    <select
                      value={settings.preferences.language}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          preferences: { ...settings.preferences, language: e.target.value },
                        })
                      }
                      className="w-full px-4 py-3 border border-soft-grey rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald outline-none"
                    >
                      <option value="en">English</option>
                      <option value="sw">Swahili</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">Timezone</label>
                    <select
                      value={settings.preferences.timezone}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          preferences: { ...settings.preferences, timezone: e.target.value },
                        })
                      }
                      className="w-full px-4 py-3 border border-soft-grey rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald outline-none"
                    >
                      <option value="Africa/Nairobi">Africa/Nairobi (EAT)</option>
                      <option value="UTC">UTC</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">Date Format</label>
                    <select
                      value={settings.preferences.dateFormat}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          preferences: { ...settings.preferences, dateFormat: e.target.value },
                        })
                      }
                      className="w-full px-4 py-3 border border-soft-grey rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald outline-none"
                    >
                      <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                      <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                      <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Save Button */}
          <div className="flex items-center justify-end gap-4 pt-6 border-t border-soft-grey mt-6">
            {saved && (
              <span className="text-emerald font-medium flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Settings saved!
              </span>
            )}
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="px-6 py-3 bg-gradient-to-r from-emerald to-emerald-dark text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50"
            >
              {isSaving ? 'Saving...' : 'Save Settings'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
