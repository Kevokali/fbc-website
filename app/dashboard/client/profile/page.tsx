'use client'

import { useState, useEffect } from 'react'
import { getCurrentUser } from '@/lib/auth'
import type { BusinessProfile, User } from '@/lib/types'

export default function BusinessProfilePage() {
  const [user, setUser] = useState<User | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  const [profile, setProfile] = useState<BusinessProfile>({
    businessName: 'ABC Company Ltd',
    registrationNo: 'C.123456',
    kraPin: 'P051234567K',
    businessType: 'Limited Company',
    taxObligations: {
      vat: true,
      paye: true,
      withholdingTax: true,
      incomeTax: true,
    },
    contactPerson: {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+254 700 000 000',
    },
  })

  useEffect(() => {
    const loadUser = async () => {
      const currentUser = await getCurrentUser()
      setUser(currentUser)
      if (currentUser) {
        setProfile(prev => ({
          ...prev,
          businessName: currentUser.businessName || prev.businessName,
          contactPerson: {
            ...prev.contactPerson,
            name: currentUser.name || prev.contactPerson.name,
            email: currentUser.email || prev.contactPerson.email,
          },
        }))
      }
    }
    loadUser()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-deep-blue mb-2">My Business Profile</h1>
        <p className="text-text-secondary">Manage your business information and tax obligations</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md border border-soft-grey p-6 space-y-8">
        {/* Business Details */}
        <section>
          <h2 className="text-xl font-semibold text-deep-blue mb-4">Business Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Business Name *
              </label>
              <input
                type="text"
                value={profile.businessName}
                onChange={(e) => setProfile({ ...profile, businessName: e.target.value })}
                required
                className="w-full px-4 py-3 border border-soft-grey rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Registration No. *
              </label>
              <input
                type="text"
                value={profile.registrationNo}
                onChange={(e) => setProfile({ ...profile, registrationNo: e.target.value })}
                required
                className="w-full px-4 py-3 border border-soft-grey rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                KRA PIN *
              </label>
              <input
                type="text"
                value={profile.kraPin}
                onChange={(e) => setProfile({ ...profile, kraPin: e.target.value })}
                required
                className="w-full px-4 py-3 border border-soft-grey rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Business Type *
              </label>
              <select
                value={profile.businessType}
                onChange={(e) => setProfile({ ...profile, businessType: e.target.value })}
                required
                className="w-full px-4 py-3 border border-soft-grey rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald outline-none"
              >
                <option value="Limited Company">Limited Company</option>
                <option value="Sole Proprietorship">Sole Proprietorship</option>
                <option value="Partnership">Partnership</option>
                <option value="LLC">LLC</option>
              </select>
            </div>
          </div>
        </section>

        {/* Tax Obligations */}
        <section>
          <h2 className="text-xl font-semibold text-deep-blue mb-4">Tax Obligations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(profile.taxObligations).map(([key, value]) => (
              <label key={key} className="flex items-center gap-3 p-4 border border-soft-grey rounded-lg cursor-pointer hover:bg-light-grey transition-colors">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      taxObligations: { ...profile.taxObligations, [key]: e.target.checked },
                    })
                  }
                  className="w-5 h-5 text-emerald focus:ring-emerald rounded"
                />
                <span className="font-medium text-text-primary capitalize">
                  {key === 'vat' ? 'VAT' : key === 'paye' ? 'PAYE' : key === 'withholdingTax' ? 'Withholding Tax' : 'Income Tax'}
                </span>
              </label>
            ))}
          </div>
        </section>

        {/* Contact Person */}
        <section>
          <h2 className="text-xl font-semibold text-deep-blue mb-4">Contact Person</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Name *</label>
              <input
                type="text"
                value={profile.contactPerson.name}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    contactPerson: { ...profile.contactPerson, name: e.target.value },
                  })
                }
                required
                className="w-full px-4 py-3 border border-soft-grey rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Email *</label>
              <input
                type="email"
                value={profile.contactPerson.email}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    contactPerson: { ...profile.contactPerson, email: e.target.value },
                  })
                }
                required
                className="w-full px-4 py-3 border border-soft-grey rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Phone *</label>
              <input
                type="tel"
                value={profile.contactPerson.phone}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    contactPerson: { ...profile.contactPerson, phone: e.target.value },
                  })
                }
                required
                className="w-full px-4 py-3 border border-soft-grey rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald outline-none"
              />
            </div>
          </div>
        </section>

        {/* Save Button */}
        <div className="flex items-center justify-between pt-6 border-t border-soft-grey">
          <p className="text-sm text-text-secondary">* Required fields</p>
          <div className="flex items-center gap-4">
            {saved && (
              <span className="text-emerald font-medium flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Saved successfully!
              </span>
            )}
            <button
              type="submit"
              disabled={isSaving}
              className="px-6 py-3 bg-gradient-to-r from-emerald to-emerald-dark text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50"
            >
              {isSaving ? 'Saving...' : 'Save & Update'}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
