'use client'

import { useState, useEffect } from 'react'
import { getSiteSettings, updateOpenStatus, setSiteSettings } from '@/lib/settings'
import type { SiteSettings } from '@/lib/settings'

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<SiteSettings>(getSiteSettings())
  const [isSaving, setIsSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    setSettings(getSiteSettings())
  }, [])

  const handleToggleOpen = () => {
    const newStatus = !settings.isOpen
    updateOpenStatus(newStatus, settings.openMessage)
    setSettings({ ...settings, isOpen: newStatus })
  }

  const handleSave = async () => {
    setIsSaving(true)
    setSiteSettings(settings)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))
    setIsSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold text-deep-blue mb-2">Site Settings</h1>
        <p className="text-text-secondary">Control website visibility and messaging</p>
      </div>

      {/* We Are Open Section Control */}
      <div className="bg-white rounded-xl shadow-md border border-soft-grey p-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-deep-blue mb-2">We Are Open Section</h2>
            <p className="text-sm text-text-secondary">
              Control the visibility of the &quot;We Are Open&quot; banner on the home page
            </p>
          </div>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center justify-between p-4 bg-light-grey rounded-lg mb-6">
          <div>
            <h3 className="font-semibold text-deep-blue mb-1">Show &quot;We Are Open&quot; Section</h3>
            <p className="text-sm text-text-secondary">
              {settings.isOpen
                ? 'The section is currently visible on the home page'
                : 'The section is currently hidden'}
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.isOpen}
              onChange={handleToggleOpen}
              className="sr-only peer"
            />
            <div className="w-14 h-7 bg-grey-medium peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-grey-medium after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-emerald"></div>
          </label>
        </div>

        {/* Custom Messages */}
        <div className="space-y-6">
          {/* Open Message */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Open Message (When status is Open)
            </label>
            <textarea
              value={settings.openMessage || ''}
              onChange={(e) => setSettings({ ...settings, openMessage: e.target.value })}
              placeholder="We are open and ready to serve you!"
              rows={3}
              className="w-full px-4 py-3 border border-soft-grey rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald outline-none resize-none"
            />
            <p className="text-xs text-text-secondary mt-1">
              Leave empty to use default message
            </p>
          </div>

          {/* Closed Message */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Closed Message (When status is Closed)
            </label>
            <textarea
              value={settings.closedMessage || ''}
              onChange={(e) => setSettings({ ...settings, closedMessage: e.target.value })}
              placeholder="We are currently closed. Please check back during business hours."
              rows={3}
              className="w-full px-4 py-3 border border-soft-grey rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald outline-none resize-none"
            />
            <p className="text-xs text-text-secondary mt-1">
              Leave empty to use default message
            </p>
          </div>

          {/* Preview */}
          <div className={`p-4 rounded-lg border ${
            settings.isOpen
              ? 'bg-gradient-to-r from-emerald/10 to-emerald-dark/10 border-emerald/20'
              : 'bg-gradient-to-r from-grey-medium/10 to-text-secondary/10 border-grey-medium/20'
          }`}>
            <p className="text-sm font-medium text-text-secondary mb-2">Preview:</p>
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                settings.isOpen ? 'bg-emerald' : 'bg-text-secondary'
              }`}>
                {settings.isOpen ? (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>
              <div>
                <p className="font-semibold text-deep-blue">
                  {settings.isOpen ? 'We Are Open!' : 'We Are Closed'}
                </p>
                <p className="text-sm text-text-secondary">
                  {settings.isOpen
                    ? (settings.openMessage || 'Ready to serve you with expert financial consulting services')
                    : (settings.closedMessage || 'We are currently closed. Please check back during business hours.')}
                </p>
              </div>
            </div>
          </div>
        </div>

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

      {/* Additional Settings Info */}
      <div className="bg-light-grey rounded-xl p-6 border border-soft-grey">
        <h3 className="font-semibold text-deep-blue mb-2">ℹ️ Information</h3>
        <ul className="text-sm text-text-secondary space-y-2 list-disc list-inside">
          <li>Changes take effect immediately after saving</li>
          <li>The &quot;We Are Open&quot; section appears on the home page below the hero section</li>
          <li>When hidden, the section will not be displayed to visitors</li>
          <li>Settings are stored locally (will be synced with database in production)</li>
        </ul>
      </div>
    </div>
  )
}
