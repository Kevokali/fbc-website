'use client'

import { useState } from 'react'

interface Report {
  id: string
  client: string
  period: string
  type: string
  status: string
  generatedDate: string
}

export default function ReportsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('2026-01')
  const [reports, setReports] = useState<Report[]>([
    {
      id: '1',
      client: 'ABC Company Ltd',
      period: 'January 2026',
      type: 'Compliance Summary',
      status: 'Generated',
      generatedDate: '2026-02-01',
    },
    {
      id: '2',
      client: 'XYZ Corp',
      period: 'January 2026',
      type: 'Monthly Filings Summary',
      status: 'Generated',
      generatedDate: '2026-02-01',
    },
    {
      id: '3',
      client: 'Tech Solutions',
      period: 'Q4 2025',
      type: 'Quarterly Report',
      status: 'Generated',
      generatedDate: '2026-01-15',
    },
  ])

  const handleGenerateReport = () => {
    alert('Report generation feature - In production, this would generate a PDF/Excel report')
  }

  const handleExport = (reportId: string, format: 'pdf' | 'excel') => {
    alert(`Exporting report ${reportId} as ${format.toUpperCase()}`)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-deep-blue mb-2">Reports</h1>
          <p className="text-text-secondary">Generate and export compliance reports</p>
        </div>
        <button
          onClick={handleGenerateReport}
          className="px-6 py-3 bg-gradient-to-r from-emerald to-emerald-dark text-white rounded-lg font-semibold hover:shadow-lg transition-all"
        >
          Generate Report
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-md border border-soft-grey p-6">
        <h2 className="text-lg font-semibold text-deep-blue mb-4">Report Filters</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Period</label>
            <input
              type="month"
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="w-full px-4 py-2 border border-soft-grey rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Report Type</label>
            <select className="w-full px-4 py-2 border border-soft-grey rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald outline-none">
              <option>All Reports</option>
              <option>Compliance Summary</option>
              <option>Monthly Filings</option>
              <option>Quarterly Report</option>
              <option>Annual Report</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Client</label>
            <select className="w-full px-4 py-2 border border-soft-grey rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald outline-none">
              <option>All Clients</option>
              <option>ABC Company Ltd</option>
              <option>XYZ Corp</option>
              <option>Tech Solutions</option>
            </select>
          </div>
        </div>
      </div>

      {/* Reports List */}
      <div className="bg-white rounded-xl shadow-md border border-soft-grey overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-light-grey">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-deep-blue">Client</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-deep-blue">Period</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-deep-blue">Report Type</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-deep-blue">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-deep-blue">Generated</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-deep-blue">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-soft-grey">
              {reports.map((report) => (
                <tr key={report.id} className="hover:bg-light-grey transition-colors">
                  <td className="px-6 py-4">
                    <span className="font-medium text-deep-blue">{report.client}</span>
                  </td>
                  <td className="px-6 py-4 text-text-secondary">{report.period}</td>
                  <td className="px-6 py-4 text-text-secondary">{report.type}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-emerald/10 text-emerald rounded-full text-xs font-semibold">
                      {report.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-text-secondary">
                    {new Date(report.generatedDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleExport(report.id, 'pdf')}
                        className="text-emerald hover:text-emerald-dark font-medium text-sm flex items-center gap-1"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        PDF
                      </button>
                      <button
                        onClick={() => handleExport(report.id, 'excel')}
                        className="text-emerald hover:text-emerald-dark font-medium text-sm flex items-center gap-1"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Excel
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-md border border-soft-grey">
          <p className="text-sm text-text-secondary mb-1">Total Reports</p>
          <p className="text-3xl font-bold text-deep-blue">{reports.length}</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-md border border-soft-grey">
          <p className="text-sm text-text-secondary mb-1">This Month</p>
          <p className="text-3xl font-bold text-emerald">
            {reports.filter((r) => new Date(r.generatedDate).getMonth() === new Date().getMonth()).length}
          </p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-md border border-soft-grey">
          <p className="text-sm text-text-secondary mb-1">Compliance Reports</p>
          <p className="text-3xl font-bold text-gold">
            {reports.filter((r) => r.type.includes('Compliance')).length}
          </p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-md border border-soft-grey">
          <p className="text-sm text-text-secondary mb-1">Filing Reports</p>
          <p className="text-3xl font-bold text-deep-blue">
            {reports.filter((r) => r.type.includes('Filing')).length}
          </p>
        </div>
      </div>
    </div>
  )
}
