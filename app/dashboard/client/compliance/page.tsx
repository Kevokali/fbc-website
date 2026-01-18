'use client'

import { useState } from 'react'
import type { ComplianceStatus } from '@/lib/types'

export default function ComplianceStatusPage() {
  const [complianceData, setComplianceData] = useState<ComplianceStatus[]>([
    {
      id: '1',
      taxType: 'VAT',
      period: 'January 2026',
      status: 'Pending',
      dueDate: '2026-02-20',
      action: 'Upload missing documents',
    },
    {
      id: '2',
      taxType: 'PAYE',
      period: 'January 2026',
      status: 'Pending',
      dueDate: '2026-02-09',
      action: 'Submit for review',
    },
    {
      id: '3',
      taxType: 'Income Tax',
      period: '2025',
      status: 'Submitted',
      dueDate: '2026-06-30',
    },
    {
      id: '4',
      taxType: 'Withholding Tax',
      period: 'January 2026',
      status: 'Overdue',
      dueDate: '2026-01-20',
      action: 'Urgent: Submit immediately',
    },
  ])

  const getStatusBadge = (status: string, dueDate?: string) => {
    const baseClasses = 'px-3 py-1 rounded-full text-xs font-semibold'
    const daysUntilDue = dueDate ? Math.ceil((new Date(dueDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)) : 0
    
    switch (status) {
      case 'Submitted':
        return `${baseClasses} bg-emerald/10 text-emerald`
      case 'Pending':
        if (daysUntilDue <= 7 && daysUntilDue > 0) {
          return `${baseClasses} bg-gold/10 text-gold`
        }
        return `${baseClasses} bg-gold/10 text-gold`
      case 'Overdue':
        return `${baseClasses} bg-red-100 text-red-600`
      default:
        return `${baseClasses} bg-gold/10 text-gold`
    }
  }
  
  const getStatusDisplay = (status: string, dueDate?: string) => {
    const daysUntilDue = dueDate ? Math.ceil((new Date(dueDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)) : 0
    if (status === 'Pending' && daysUntilDue > 0 && daysUntilDue <= 14) {
      return `Due in ${daysUntilDue} days`
    }
    return status
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-deep-blue mb-2">Compliance Status</h1>
        <p className="text-text-secondary">Track your tax compliance and filing status</p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-md border border-soft-grey">
          <p className="text-sm text-text-secondary mb-1">Total Filings</p>
          <p className="text-2xl font-bold text-deep-blue">{complianceData.length}</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-md border border-soft-grey">
          <p className="text-sm text-text-secondary mb-1">Submitted</p>
          <p className="text-2xl font-bold text-emerald">
            {complianceData.filter((c) => c.status === 'Submitted').length}
          </p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-md border border-soft-grey">
          <p className="text-sm text-text-secondary mb-1">Pending</p>
          <p className="text-2xl font-bold text-gold">
            {complianceData.filter((c) => c.status === 'Pending').length}
          </p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-md border border-soft-grey">
          <p className="text-sm text-text-secondary mb-1">Overdue</p>
          <p className="text-2xl font-bold text-red-600">
            {complianceData.filter((c) => c.status === 'Overdue').length}
          </p>
        </div>
      </div>

      {/* Compliance Table */}
      <div className="bg-white rounded-xl shadow-md border border-soft-grey overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-light-grey">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-deep-blue">Tax Type</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-deep-blue">Period</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-deep-blue">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-deep-blue">Due Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-deep-blue">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-soft-grey">
              {complianceData.map((item) => (
                <tr key={item.id} className="hover:bg-light-grey transition-colors">
                  <td className="px-6 py-4">
                    <span className="font-medium text-deep-blue">{item.taxType}</span>
                  </td>
                  <td className="px-6 py-4 text-text-secondary">{item.period}</td>
                  <td className="px-6 py-4">
                    <span className={getStatusBadge(item.status, item.dueDate)}>
                      {getStatusDisplay(item.status, item.dueDate)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-text-secondary">
                    {new Date(item.dueDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    {item.action ? (
                      <div className="flex items-center gap-3">
                        <button className="text-sm text-emerald hover:text-emerald-dark font-medium">
                          View Details
                        </button>
                        {item.status === 'Pending' || item.status === 'Overdue' ? (
                          <button className="text-sm text-deep-blue hover:text-navy font-medium">
                            Upload Docs
                          </button>
                        ) : null}
                      </div>
                    ) : (
                      <span className="text-sm text-text-secondary">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
