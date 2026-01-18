'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { login } from '@/lib/auth'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const user = await login(email, password)
      if (user) {
        if (user.role === 'admin') {
          router.push('/dashboard/admin')
        } else {
          router.push('/dashboard/client')
        }
      } else {
        setError('Invalid email or password')
        setIsLoading(false)
      }
    } catch (error) {
      setError('An error occurred. Please try again.')
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-deep-blue via-navy to-deep-blue p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald to-emerald-dark rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
            <span className="text-white font-bold text-3xl">FBC</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Financial Beacon Consulting</h1>
          <p className="text-emerald/80">Secure Client Portal</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-deep-blue">Sign In</h2>
            <Link
              href="/signup"
              className="text-sm text-emerald hover:text-emerald-dark font-medium"
            >
              Create Account
            </Link>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-soft-grey rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-text-primary mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-soft-grey rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald outline-none transition-colors"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-emerald to-emerald-dark text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-light-grey rounded-lg border border-soft-grey">
            <p className="text-xs font-semibold text-text-secondary mb-2">Demo Credentials:</p>
            <div className="text-xs text-text-secondary space-y-1">
              <p><strong>Client:</strong> client@example.com / password</p>
              <p><strong>Admin:</strong> admin@fbc.co.ke / password</p>
            </div>
          </div>

          {/* Security Notice */}
          <div className="mt-6 pt-6 border-t border-soft-grey">
            <p className="text-xs text-text-secondary text-center">
              🔒 We do not store client system passwords. Your data is secure.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
