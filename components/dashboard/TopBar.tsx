'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getCurrentUser, logout } from '@/lib/auth'
import NotificationBell from './NotificationBell'
import type { User } from '@/lib/types'

export default function TopBar() {
  const [user, setUser] = useState<User | null>(null)
  const [showProfileMenu, setShowProfileMenu] = useState(false)

  useEffect(() => {
    const loadUser = async () => {
      const currentUser = await getCurrentUser()
      setUser(currentUser)
    }
    loadUser()
  }, [])

  const handleLogout = async () => {
    await logout()
    window.location.href = '/login'
  }

  if (!user) return null

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-soft-grey shadow-sm z-50">
      <div className="flex items-center justify-between h-full px-4 lg:px-6">
        {/* Logo */}
        <Link href={user.role === 'admin' ? '/dashboard/admin' : '/dashboard/client'} className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-deep-blue to-navy rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">FBC</span>
          </div>
          <span className="hidden sm:block text-deep-blue font-semibold text-lg">Financial Beacon Consulting</span>
        </Link>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Client Name (Admin view) */}
          {user.role === 'admin' && user.businessName && (
            <div className="hidden md:block text-sm text-text-secondary">
              <span className="font-medium">Client:</span> {user.businessName}
            </div>
          )}

          {/* Notifications */}
          <NotificationBell />

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-light-grey transition-colors"
            >
              <div className="w-8 h-8 bg-emerald rounded-full flex items-center justify-center text-white font-semibold">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <span className="hidden md:block text-sm font-medium text-text-primary">{user.name}</span>
              <svg className="w-4 h-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {showProfileMenu && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setShowProfileMenu(false)}
                />
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-soft-grey py-2 z-20">
                  <Link
                    href="/dashboard/profile"
                    className="block px-4 py-2 text-sm text-text-primary hover:bg-light-grey transition-colors"
                    onClick={() => setShowProfileMenu(false)}
                  >
                    Profile
                  </Link>
                  <Link
                    href="/dashboard/security"
                    className="block px-4 py-2 text-sm text-text-primary hover:bg-light-grey transition-colors"
                    onClick={() => setShowProfileMenu(false)}
                  >
                    Security
                  </Link>
                  <hr className="my-2 border-soft-grey" />
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-light-grey transition-colors"
                  >
                    Logout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
