'use client'

import { useState } from 'react'
import type { Approval } from '@/lib/types'

export default function ApprovalsPage() {
  const [approvals, setApprovals] = useState<Approval[]>([
    {
      id: '1',
      taskName: 'VAT Filing – January 2026',
      period: 'January 2026',
      summary: 'Total VAT Collected: KES 150,000 | VAT Paid: KES 120,000 | Net VAT Payable: KES 30,000',
      preparedBy: 'FBC Team',
      status: 'Pending',
    },
    {
      id: '2',
      taskName: 'PAYE Filing – December 2025',
      period: 'December 2025',
      summary: 'Total PAYE Deducted: KES 85,000 | Employees: 12 | Period: December 2025',
      preparedBy: 'Luke Weke',
      status: 'Approved',
      approvedAt: '2026-01-15',
    },
  ])

  const handleApprove = (id: string) => {
    setApprovals(
      approvals.map((approval) =>
        approval.id === id
          ? { ...approval, status: 'Approved' as const, approvedAt: new Date().toISOString().split('T')[0] }
          : approval
      )
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-deep-blue mb-2">Approvals</h1>
        <p className="text-text-secondary">Review and approve filings prepared by FBC</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {approvals.map((approval) => (
          <div
            key={approval.id}
            className="bg-white rounded-xl shadow-md border border-soft-grey p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-deep-blue mb-1">{approval.taskName}</h3>
                <p className="text-sm text-text-secondary">Period: {approval.period}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  approval.status === 'Approved'
                    ? 'bg-emerald/10 text-emerald'
                    : 'bg-gold/10 text-gold'
                }`}
              >
                {approval.status}
              </span>
            </div>

            <div className="mb-4 p-4 bg-light-grey rounded-lg">
              <p className="text-sm font-medium text-text-secondary mb-2">Summary Figures:</p>
              <p className="text-deep-blue">{approval.summary}</p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-soft-grey">
              <div>
                <p className="text-xs text-text-secondary">Prepared by</p>
                <p className="text-sm font-medium text-deep-blue">{approval.preparedBy}</p>
              </div>
              {approval.status === 'Pending' ? (
                <div className="space-y-3">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-emerald rounded" />
                    <span className="text-sm text-text-primary">I approve the above figures</span>
                  </label>
                  <button
                    onClick={() => handleApprove(approval.id)}
                    className="w-full px-4 py-2 bg-gradient-to-r from-emerald to-emerald-dark text-white rounded-lg font-semibold hover:shadow-md transition-all"
                  >
                    Approve
                  </button>
                </div>
              ) : (
                <div className="text-right">
                  <p className="text-xs text-text-secondary">Approved on</p>
                  <p className="text-sm font-medium text-emerald">
                    {approval.approvedAt && new Date(approval.approvedAt).toLocaleDateString()}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {approvals.length === 0 && (
        <div className="bg-white rounded-xl shadow-md border border-soft-grey p-12 text-center">
          <svg className="w-16 h-16 text-text-secondary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <p className="text-text-secondary">No pending approvals</p>
        </div>
      )}
    </div>
  )
}
