'use client'

import { useState } from 'react'
import type { DataSubmission } from '@/lib/types'

export default function DataSubmissionsPage() {
  const [selectedForm, setSelectedForm] = useState<string | null>(null)
  const [period, setPeriod] = useState('2026-01')

  const forms = [
    {
      id: 'sales',
      name: 'Monthly Sales Summary',
      description: 'Enter total sales, VAT collected, and sales breakdown',
    },
    {
      id: 'expenses',
      name: 'Expense Summary',
      description: 'Record all business expenses and receipts',
    },
    {
      id: 'payroll',
      name: 'Employee Payroll Details',
      description: 'Enter employee salaries, allowances, and deductions',
    },
    {
      id: 'withholding',
      name: 'Withholding Tax Entries',
      description: 'Record all withholding tax deductions',
    },
  ]

  const handleSubmit = (formId: string) => {
    alert(`Form ${formId} submitted for review!`)
    setSelectedForm(null)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-deep-blue mb-2">Data Submission Forms</h1>
        <p className="text-text-secondary">Submit your financial data for review and filing</p>
      </div>

      {/* Period Selector */}
      <div className="bg-white rounded-xl shadow-md border border-soft-grey p-4">
        <label className="block text-sm font-medium text-text-primary mb-2">Select Period</label>
        <input
          type="month"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="px-4 py-2 border border-soft-grey rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald outline-none"
        />
      </div>

      {/* Forms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {forms.map((form) => (
          <div
            key={form.id}
            className="bg-white rounded-xl shadow-md border border-soft-grey p-6 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedForm(form.id)}
          >
            <h3 className="text-lg font-semibold text-deep-blue mb-2">{form.name}</h3>
            <p className="text-sm text-text-secondary mb-4">{form.description}</p>
            <button className="w-full px-4 py-2 bg-gradient-to-r from-emerald to-emerald-dark text-white rounded-lg font-semibold hover:shadow-md transition-all">
              Open Form
            </button>
          </div>
        ))}
      </div>

      {/* Form Modal/Expanded View */}
      {selectedForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-soft-grey flex items-center justify-between">
              <h2 className="text-2xl font-bold text-deep-blue">
                {forms.find((f) => f.id === selectedForm)?.name}
              </h2>
              <button
                onClick={() => setSelectedForm(null)}
                className="text-text-secondary hover:text-deep-blue"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-text-secondary">Period: {period}</p>
              <div className="space-y-4">
                {selectedForm === 'sales' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">Total Sales (KES)</label>
                      <input type="number" className="w-full px-4 py-2 border border-soft-grey rounded-lg" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">VAT Collected (KES)</label>
                      <input type="number" className="w-full px-4 py-2 border border-soft-grey rounded-lg" />
                    </div>
                  </>
                )}
                {selectedForm === 'expenses' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">Total Expenses (KES)</label>
                      <input type="number" className="w-full px-4 py-2 border border-soft-grey rounded-lg" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">Expense Category</label>
                      <select className="w-full px-4 py-2 border border-soft-grey rounded-lg">
                        <option>Office Supplies</option>
                        <option>Utilities</option>
                        <option>Rent</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </>
                )}
                {selectedForm === 'payroll' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">Number of Employees</label>
                      <input type="number" className="w-full px-4 py-2 border border-soft-grey rounded-lg" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">Total Payroll (KES)</label>
                      <input type="number" className="w-full px-4 py-2 border border-soft-grey rounded-lg" />
                    </div>
                  </>
                )}
                {selectedForm === 'withholding' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">Total Withholding Tax (KES)</label>
                      <input type="number" className="w-full px-4 py-2 border border-soft-grey rounded-lg" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">Tax Type</label>
                      <select className="w-full px-4 py-2 border border-soft-grey rounded-lg">
                        <option>Professional Services</option>
                        <option>Rent</option>
                        <option>Interest</option>
                      </select>
                    </div>
                  </>
                )}
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => setSelectedForm(null)}
                  className="flex-1 px-4 py-2 border border-soft-grey rounded-lg font-semibold hover:bg-light-grey transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleSubmit(selectedForm)}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-emerald to-emerald-dark text-white rounded-lg font-semibold hover:shadow-md transition-all"
                >
                  Submit for Review
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
