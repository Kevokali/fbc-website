'use client'

import { useState } from 'react'
import type { Document } from '@/lib/types'

interface DocumentReview extends Document {
  clientName: string
  uploadedBy: string
  uploadedDate: string
  comments?: string
}

export default function DocumentsReviewPage() {
  const [documents, setDocuments] = useState<DocumentReview[]>([
    {
      id: '1',
      type: 'Bank Statements',
      fileName: 'bank_statement_jan_2026.pdf',
      uploadDate: '2026-02-01',
      status: 'Pending Review',
      clientName: 'ABC Company Ltd',
      uploadedBy: 'John Doe',
      uploadedDate: '2026-02-01T10:30:00',
    },
    {
      id: '2',
      type: 'Sales Invoices',
      fileName: 'sales_invoices_jan_2026.xlsx',
      uploadDate: '2026-02-01',
      status: 'Reviewed',
      clientName: 'XYZ Corp',
      uploadedBy: 'Jane Smith',
      uploadedDate: '2026-02-01T14:20:00',
      comments: 'All invoices verified. Ready for processing.',
    },
    {
      id: '3',
      type: 'Payroll Files',
      fileName: 'payroll_jan_2026.csv',
      uploadDate: '2026-02-02',
      status: 'Pending Review',
      clientName: 'Tech Solutions',
      uploadedBy: 'Mike Johnson',
      uploadedDate: '2026-02-02T09:15:00',
    },
  ])

  const [selectedDoc, setSelectedDoc] = useState<DocumentReview | null>(null)
  const [comment, setComment] = useState('')
  const [filter, setFilter] = useState<'all' | 'pending' | 'reviewed'>('all')

  const filteredDocs = documents.filter((doc) => {
    if (filter === 'pending') return doc.status === 'Pending Review'
    if (filter === 'reviewed') return doc.status === 'Reviewed'
    return true
  })

  const handleReview = (docId: string, action: 'approve' | 'reject') => {
    setDocuments(
      documents.map((doc) =>
        doc.id === docId
          ? {
              ...doc,
              status: action === 'approve' ? 'Reviewed' : 'Pending Review',
              comments: comment || doc.comments,
            }
          : doc
      )
    )
    setComment('')
    setSelectedDoc(null)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-deep-blue mb-2">Documents Review</h1>
          <p className="text-text-secondary">Review and process client-uploaded documents</p>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as typeof filter)}
            className="px-4 py-2 border border-soft-grey rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald outline-none"
          >
            <option value="all">All Documents</option>
            <option value="pending">Pending Review</option>
            <option value="reviewed">Reviewed</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Documents List */}
        <div className="lg:col-span-1 bg-white rounded-xl shadow-md border border-soft-grey overflow-hidden">
          <div className="p-4 border-b border-soft-grey bg-light-grey">
            <h2 className="font-semibold text-deep-blue">
              Documents ({filteredDocs.length})
            </h2>
          </div>
          <div className="max-h-[600px] overflow-y-auto">
            {filteredDocs.map((doc) => (
              <div
                key={doc.id}
                onClick={() => setSelectedDoc(doc)}
                className={`p-4 border-b border-soft-grey cursor-pointer hover:bg-light-grey transition-colors ${
                  selectedDoc?.id === doc.id ? 'bg-emerald/5 border-l-4 border-l-emerald' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-deep-blue text-sm truncate">{doc.fileName}</p>
                    <p className="text-xs text-text-secondary">{doc.clientName}</p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      doc.status === 'Reviewed'
                        ? 'bg-emerald/10 text-emerald'
                        : 'bg-gold/10 text-gold'
                    }`}
                  >
                    {doc.status}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-text-secondary">
                  <span>{doc.type}</span>
                  <span>•</span>
                  <span>{new Date(doc.uploadedDate).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Document Detail & Review */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-md border border-soft-grey p-6">
          {selectedDoc ? (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-deep-blue mb-4">{selectedDoc.fileName}</h2>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-text-secondary">Client:</span>
                    <span className="ml-2 font-medium text-deep-blue">{selectedDoc.clientName}</span>
                  </div>
                  <div>
                    <span className="text-text-secondary">Type:</span>
                    <span className="ml-2 font-medium text-deep-blue">{selectedDoc.type}</span>
                  </div>
                  <div>
                    <span className="text-text-secondary">Uploaded By:</span>
                    <span className="ml-2 font-medium text-deep-blue">{selectedDoc.uploadedBy}</span>
                  </div>
                  <div>
                    <span className="text-text-secondary">Upload Date:</span>
                    <span className="ml-2 font-medium text-deep-blue">
                      {new Date(selectedDoc.uploadedDate).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Document Preview Placeholder */}
              <div className="border border-soft-grey rounded-lg p-8 bg-light-grey text-center">
                <svg className="w-16 h-16 text-text-secondary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <p className="text-text-secondary mb-4">Document Preview</p>
                <button className="px-4 py-2 bg-emerald text-white rounded-lg hover:bg-emerald-dark transition-colors">
                  Download Document
                </button>
              </div>

              {/* Comments */}
              {selectedDoc.comments && (
                <div className="p-4 bg-light-grey rounded-lg">
                  <h3 className="font-semibold text-deep-blue mb-2">Previous Comments</h3>
                  <p className="text-text-secondary text-sm">{selectedDoc.comments}</p>
                </div>
              )}

              {/* Review Actions */}
              {selectedDoc.status === 'Pending Review' && (
                <div className="border-t border-soft-grey pt-6">
                  <h3 className="font-semibold text-deep-blue mb-3">Add Comment</h3>
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Add your review comments..."
                    rows={4}
                    className="w-full px-4 py-3 border border-soft-grey rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald outline-none resize-none mb-4"
                  />
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleReview(selectedDoc.id, 'approve')}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-emerald to-emerald-dark text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                    >
                      Approve & Mark Reviewed
                    </button>
                    <button
                      onClick={() => handleReview(selectedDoc.id, 'reject')}
                      className="px-6 py-3 border border-soft-grey text-text-primary rounded-lg font-semibold hover:bg-light-grey transition-colors"
                    >
                      Request Changes
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-text-secondary">
              <p>Select a document to review</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
