'use client'

import { useState } from 'react'

export default function AdminDashboard() {
  const metrics = [
    { label: 'Total Clients', value: '24', icon: '👥', color: 'text-deep-blue' },
    { label: 'Filings Due This Week', value: '8', icon: '📅', color: 'text-gold' },
    { label: 'Overdue Tasks', value: '3', icon: '⚠️', color: 'text-red-600' },
    { label: 'Pending Approvals', value: '12', icon: '✅', color: 'text-emerald' },
  ]

  const upcomingDeadlines = [
    { client: 'ABC Company Ltd', task: 'VAT Filing', dueDate: '2026-02-09', daysLeft: 5 },
    { client: 'XYZ Corp', task: 'PAYE Filing', dueDate: '2026-02-10', daysLeft: 6 },
    { client: 'Tech Solutions', task: 'Income Tax', dueDate: '2026-02-12', daysLeft: 8 },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-deep-blue mb-2">Admin Dashboard</h1>
        <p className="text-text-secondary">Overview of clients, compliance, and tasks</p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md border border-soft-grey hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-3xl">{metric.icon}</span>
            </div>
            <h3 className="text-sm font-medium text-text-secondary mb-1">{metric.label}</h3>
            <p className={`text-3xl font-bold ${metric.color}`}>{metric.value}</p>
          </div>
        ))}
      </div>

      {/* Compliance Calendar Preview */}
      <div className="bg-white rounded-xl shadow-md border border-soft-grey p-6">
        <h2 className="text-xl font-bold text-deep-blue mb-6">Upcoming Deadlines</h2>
        <div className="space-y-3">
          {upcomingDeadlines.map((deadline, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border border-soft-grey rounded-lg hover:bg-light-grey transition-colors"
            >
              <div className="flex-1">
                <h3 className="font-semibold text-deep-blue">{deadline.client}</h3>
                <p className="text-sm text-text-secondary">{deadline.task}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-deep-blue">
                  {new Date(deadline.dueDate).toLocaleDateString()}
                </p>
                <p className="text-xs text-text-secondary">{deadline.daysLeft} days left</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <a
            href="/dashboard/admin/calendar"
            className="text-emerald hover:text-emerald-dark font-semibold"
          >
            View Full Calendar →
          </a>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <a
          href="/dashboard/admin/clients"
          className="bg-white rounded-xl p-6 shadow-md border border-soft-grey hover:shadow-lg transition-shadow"
        >
          <h3 className="text-lg font-semibold text-deep-blue mb-2">Manage Clients</h3>
          <p className="text-sm text-text-secondary">View and manage all client accounts</p>
        </a>
        <a
          href="/dashboard/admin/documents"
          className="bg-white rounded-xl p-6 shadow-md border border-soft-grey hover:shadow-lg transition-shadow"
        >
          <h3 className="text-lg font-semibold text-deep-blue mb-2">Review Documents</h3>
          <p className="text-sm text-text-secondary">Review uploaded client documents</p>
        </a>
        <a
          href="/dashboard/admin/tasks"
          className="bg-white rounded-xl p-6 shadow-md border border-soft-grey hover:shadow-lg transition-shadow"
        >
          <h3 className="text-lg font-semibold text-deep-blue mb-2">Tasks & Workflow</h3>
          <p className="text-sm text-text-secondary">Manage tasks and workflow</p>
        </a>
      </div>
    </div>
  )
}
