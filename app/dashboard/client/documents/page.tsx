'use client'

import { useState } from 'react'
import type { Document } from '@/lib/types'

export default function UploadDocumentsPage() {
  const [documents, setDocuments] = useState<Document[]>([
    {
      id: '1',
      type: 'Bank Statements',
      fileName: 'bank_statement_jan_2026.pdf',
      uploadDate: '2026-02-01',
      status: 'Uploaded',
    },
    {
      id: '2',
      type: 'Sales Invoices',
      fileName: 'sales_invoices_jan_2026.xlsx',
      uploadDate: '2026-02-01',
      status: 'Pending Review',
    },
  ])

  const documentTypes = [
    {
      type: 'Bank Statements',
      description: 'Monthly bank statements for reconciliation',
      acceptedFormats: 'PDF, Excel',
      required: true,
    },
    {
      type: 'Sales Invoices',
      description: 'All sales invoices issued during the period',
      acceptedFormats: 'PDF, Excel, CSV',
      required: true,
    },
    {
      type: 'Expense Receipts',
      description: 'Receipts for business expenses',
      acceptedFormats: 'PDF, JPG, PNG',
      required: false,
    },
    {
      type: 'Payroll Files',
      description: 'Employee payroll records',
      acceptedFormats: 'Excel, CSV',
      required: true,
    },
  ]

  const handleFileUpload = (type: string, file: File) => {
    const newDoc: Document = {
      id: Date.now().toString(),
      type: type as Document['type'],
      fileName: file.name,
      uploadDate: new Date().toISOString().split('T')[0],
      status: 'Uploaded',
    }
    setDocuments([...documents, newDoc])
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-deep-blue mb-2">Upload Documents</h1>
        <p className="text-text-secondary">Upload required documents for compliance and filing</p>
      </div>

      {/* Instruction Banner */}
      <div className="bg-gradient-to-r from-emerald/10 to-emerald-dark/10 border border-emerald/20 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-deep-blue mb-2">📋 What to Upload This Month</h2>
        <ul className="list-disc list-inside text-text-secondary space-y-1">
          <li>Bank Statements for January 2026</li>
          <li>Sales Invoices for January 2026</li>
          <li>Payroll Files for January 2026</li>
        </ul>
      </div>

      {/* Upload Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {documentTypes.map((docType) => {
          const uploadedDoc = documents.find((d) => d.type === docType.type)
          return (
            <div
              key={docType.type}
              className="bg-white rounded-xl shadow-md border border-soft-grey p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-deep-blue mb-1">{docType.type}</h3>
                  <p className="text-sm text-text-secondary">{docType.description}</p>
                </div>
                {docType.required && (
                  <span className="px-2 py-1 bg-emerald/10 text-emerald text-xs font-semibold rounded">
                    Required
                  </span>
                )}
              </div>

              <div className="mb-4">
                <p className="text-xs text-text-secondary mb-2">Accepted formats: {docType.acceptedFormats}</p>
                {uploadedDoc && (
                  <div className="flex items-center gap-2 p-3 bg-light-grey rounded-lg">
                    <svg className="w-5 h-5 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-deep-blue truncate">{uploadedDoc.fileName}</p>
                      <p className="text-xs text-text-secondary">
                        {uploadedDoc.status} • {new Date(uploadedDoc.uploadDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <label className="block">
                <input
                  type="file"
                  accept=".pdf,.xlsx,.xls,.csv,.jpg,.jpeg,.png"
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file) handleFileUpload(docType.type, file)
                  }}
                  className="hidden"
                />
                <div className="w-full px-4 py-3 bg-gradient-to-r from-emerald to-emerald-dark text-white rounded-lg font-semibold text-center cursor-pointer hover:shadow-md transition-all">
                  {uploadedDoc ? 'Replace File' : 'Upload File'}
                </div>
              </label>
            </div>
          )
        })}
      </div>

      {/* Uploaded Documents List */}
      {documents.length > 0 && (
        <div className="bg-white rounded-xl shadow-md border border-soft-grey p-6">
          <h2 className="text-xl font-semibold text-deep-blue mb-4">Uploaded Documents</h2>
          <div className="space-y-3">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="flex items-center justify-between p-4 border border-soft-grey rounded-lg hover:bg-light-grey transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-deep-blue">{doc.fileName}</p>
                    <p className="text-sm text-text-secondary">
                      {doc.type} • {new Date(doc.uploadDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      doc.status === 'Uploaded'
                        ? 'bg-emerald/10 text-emerald'
                        : doc.status === 'Pending Review'
                        ? 'bg-gold/10 text-gold'
                        : 'bg-deep-blue/10 text-deep-blue'
                    }`}
                  >
                    {doc.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
