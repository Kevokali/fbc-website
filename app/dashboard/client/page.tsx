'use client'

import { useState, useEffect } from 'react'
import { getCurrentUser } from '@/lib/auth'
import type { ComplianceStatus } from '@/lib/types'

export default function ClientDashboard() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const loadUser = async () => {
      const currentUser = await getCurrentUser()
      setUser(currentUser)
    }
    loadUser()
  }, [])
  const [complianceData, setComplianceData] = useState<ComplianceStatus[]>([
    {
      id: '1',
      taxType: 'VAT',
      period: 'January 2026',
      status: 'Pending',
      dueDate: '2026-02-20',
    },
    {
      id: '2',
      taxType: 'PAYE',
      period: 'January 2026',
      status: 'Pending',
      dueDate: '2026-02-09',
    },
    {
      id: '3',
      taxType: 'Income Tax',
      period: '2025',
      status: 'Submitted',
      dueDate: '2026-06-30',
    },
  ])

  const summaryCards = [
    {
      title: 'VAT Status',
      value: 'Pending',
      status: 'warning',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'PAYE Status',
      value: 'Due in 5 days',
      status: 'warning',
      daysLeft: 5,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Income Tax',
      value: 'Submitted',
      status: 'success',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Outstanding Requests',
      value: '3',
      status: 'info',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
    },
  ]

  const recentActivity = [
    {
      id: '1',
      type: 'Document Uploaded',
      description: 'Bank Statements - January 2026',
      timestamp: '2 hours ago',
      icon: '📄',
    },
    {
      id: '2',
      type: 'Approval Given',
      description: 'VAT Filing - December 2025',
      timestamp: '1 day ago',
      icon: '✅',
    },
    {
      id: '3',
      type: 'Message from FBC',
      description: 'Please review your PAYE submission',
      timestamp: '2 days ago',
      icon: '💬',
    },
  ]

  const upcomingDeadlines = [
    { id: '1', task: 'PAYE Filing', dueDate: '2026-02-09', daysLeft: 5 },
    { id: '2', task: 'VAT Filing', dueDate: '2026-02-20', daysLeft: 16 },
    { id: '3', task: 'Withholding Tax', dueDate: '2026-02-28', daysLeft: 24 },
  ]

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-deep-blue mb-2">Dashboard Overview</h1>
        <p className="text-text-secondary">Welcome back, {user?.name}</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md border border-soft-grey hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className={`p-3 rounded-lg ${
                  card.status === 'success'
                    ? 'bg-emerald/10 text-emerald'
                    : card.status === 'warning'
                    ? 'bg-gold/10 text-gold'
                    : 'bg-deep-blue/10 text-deep-blue'
                }`}
              >
                {card.icon}
              </div>
            </div>
            <h3 className="text-sm font-medium text-text-secondary mb-1">{card.title}</h3>
            <p className="text-2xl font-bold text-deep-blue">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Compliance Timeline */}
        <div className="bg-white rounded-xl p-6 shadow-md border border-soft-grey">
          <h2 className="text-xl font-bold text-deep-blue mb-6">Upcoming Deadlines</h2>
          <div className="space-y-4">
            {upcomingDeadlines.map((deadline) => (
              <div key={deadline.id} className="flex items-center gap-4 pb-4 border-b border-soft-grey last:border-0">
                <div className="flex-shrink-0">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                      deadline.daysLeft <= 7
                        ? 'bg-red-100 text-red-600'
                        : deadline.daysLeft <= 14
                        ? 'bg-gold/10 text-gold'
                        : 'bg-emerald/10 text-emerald'
                    }`}
                  >
                    {deadline.daysLeft}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-deep-blue">{deadline.task}</h3>
                  <p className="text-sm text-text-secondary">Due: {new Date(deadline.dueDate).toLocaleDateString()}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-text-secondary">{deadline.daysLeft} days left</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl p-6 shadow-md border border-soft-grey">
          <h2 className="text-xl font-bold text-deep-blue mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start gap-4 pb-4 border-b border-soft-grey last:border-0">
                <div className="text-2xl">{activity.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-deep-blue">{activity.type}</h3>
                  <p className="text-sm text-text-secondary">{activity.description}</p>
                  <p className="text-xs text-text-secondary mt-1">{activity.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
