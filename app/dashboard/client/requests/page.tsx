'use client'

import { useState, useEffect } from 'react'
import { getCurrentUser } from '@/lib/auth'
import type { ServiceRequest, User } from '@/lib/types'

export default function ServiceRequestsPage() {
  const [user, setUser] = useState<User | null>(null)
  const [showNewRequestForm, setShowNewRequestForm] = useState(false)
  const [requests, setRequests] = useState<ServiceRequest[]>([])

  useEffect(() => {
    const loadUser = async () => {
      const currentUser = await getCurrentUser()
      setUser(currentUser)
      if (currentUser) {
        setRequests([
          {
            id: '1',
            clientId: currentUser.id,
            clientName: currentUser.name || 'Client',
            businessName: currentUser.businessName || 'Business',
            requestType: 'Custom Advisory',
            title: 'Financial Planning Consultation',
            description: 'I need assistance with creating a 5-year financial plan for business expansion.',
            priority: 'high',
            status: 'in-progress',
            createdAt: '2026-02-01T10:00:00',
            updatedAt: '2026-02-03T14:30:00',
            assignedTo: 'Luke Weke',
            response: 'We have assigned this to our senior consultant. A meeting will be scheduled soon.',
          },
          {
            id: '2',
            clientId: currentUser.id,
            clientName: currentUser.name || 'Client',
            businessName: currentUser.businessName || 'Business',
            requestType: 'Training Request',
            title: 'QuickBooks Training for Team',
            description: 'Our accounting team needs training on QuickBooks software.',
            priority: 'medium',
            status: 'pending',
            createdAt: '2026-02-04T09:15:00',
            updatedAt: '2026-02-04T09:15:00',
          },
        ])
      }
    }
    loadUser()
  }, [])

  const [newRequest, setNewRequest] = useState({
    requestType: '',
    title: '',
    description: '',
    priority: 'medium' as ServiceRequest['priority'],
  })

  const requestTypes = [
    'Custom Advisory',
    'Training Request',
    'Software Setup',
    'Financial Analysis',
    'Compliance Consultation',
    'Other',
  ]

  const handleSubmit = () => {
    if (!newRequest.title || !newRequest.description || !newRequest.requestType) {
      alert('Please fill in all required fields')
      return
    }

    const request: ServiceRequest = {
      id: Date.now().toString(),
      clientId: user?.id || '',
      clientName: user?.name || 'Client',
      businessName: user?.businessName || 'Business',
      ...newRequest,
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    setRequests([request, ...requests])
    
    // Save to localStorage (in production, send to API)
    if (typeof window !== 'undefined') {
      const allRequests = JSON.parse(localStorage.getItem('fbc_service_requests') || '[]')
      allRequests.push(request)
      localStorage.setItem('fbc_service_requests', JSON.stringify(allRequests))
    }

    // Reset form
    setNewRequest({
      requestType: '',
      title: '',
      description: '',
      priority: 'medium',
    })
    setShowNewRequestForm(false)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-emerald/10 text-emerald'
      case 'in-progress':
        return 'bg-blue-100 text-blue-600'
      case 'cancelled':
        return 'bg-red-100 text-red-600'
      default:
        return 'bg-gold/10 text-gold'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return 'bg-red-100 text-red-600'
      case 'high':
        return 'bg-orange-100 text-orange-600'
      case 'medium':
        return 'bg-gold/10 text-gold'
      default:
        return 'bg-emerald/10 text-emerald'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-deep-blue mb-2">Service Requests</h1>
          <p className="text-text-secondary">Request custom services outside our standard offerings</p>
        </div>
        <button
          onClick={() => setShowNewRequestForm(true)}
          className="px-6 py-3 bg-gradient-to-r from-emerald to-emerald-dark text-white rounded-lg font-semibold hover:shadow-lg transition-all"
        >
          + New Request
        </button>
      </div>

      {/* New Request Form Modal */}
      {showNewRequestForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-soft-grey flex items-center justify-between">
              <h2 className="text-2xl font-bold text-deep-blue">New Service Request</h2>
              <button
                onClick={() => setShowNewRequestForm(false)}
                className="text-text-secondary hover:text-deep-blue"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Request Type *
                </label>
                <select
                  value={newRequest.requestType}
                  onChange={(e) => setNewRequest({ ...newRequest, requestType: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-soft-grey rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald outline-none"
                >
                  <option value="">Select request type</option>
                  {requestTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  value={newRequest.title}
                  onChange={(e) => setNewRequest({ ...newRequest, title: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-soft-grey rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald outline-none"
                  placeholder="Brief title for your request"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Description *
                </label>
                <textarea
                  value={newRequest.description}
                  onChange={(e) => setNewRequest({ ...newRequest, description: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-soft-grey rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald outline-none resize-none"
                  placeholder="Provide detailed information about your request..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Priority
                </label>
                <select
                  value={newRequest.priority}
                  onChange={(e) =>
                    setNewRequest({ ...newRequest, priority: e.target.value as ServiceRequest['priority'] })
                  }
                  className="w-full px-4 py-3 border border-soft-grey rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald outline-none"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => setShowNewRequestForm(false)}
                  className="flex-1 px-4 py-2 border border-soft-grey rounded-lg font-semibold hover:bg-light-grey transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-emerald to-emerald-dark text-white rounded-lg font-semibold hover:shadow-md transition-all"
                >
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Requests List */}
      <div className="space-y-4">
        {requests.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md border border-soft-grey p-12 text-center">
            <svg className="w-16 h-16 text-text-secondary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p className="text-text-secondary mb-4">No service requests yet</p>
            <button
              onClick={() => setShowNewRequestForm(true)}
              className="px-6 py-3 bg-gradient-to-r from-emerald to-emerald-dark text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Create Your First Request
            </button>
          </div>
        ) : (
          requests.map((request) => (
            <div
              key={request.id}
              className="bg-white rounded-xl shadow-md border border-soft-grey p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-deep-blue">{request.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(request.status)}`}>
                      {request.status}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getPriorityColor(request.priority)}`}>
                      {request.priority}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary mb-2">
                    <strong>Type:</strong> {request.requestType}
                  </p>
                  <p className="text-text-primary">{request.description}</p>
                </div>
              </div>

              {request.response && (
                <div className="mt-4 p-4 bg-emerald/5 border border-emerald/20 rounded-lg">
                  <p className="text-sm font-semibold text-deep-blue mb-1">Response from FBC:</p>
                  <p className="text-sm text-text-secondary">{request.response}</p>
                  {request.assignedTo && (
                    <p className="text-xs text-text-secondary mt-2">
                      Assigned to: <strong>{request.assignedTo}</strong>
                    </p>
                  )}
                </div>
              )}

              <div className="mt-4 flex items-center justify-between text-xs text-text-secondary">
                <span>Created: {new Date(request.createdAt).toLocaleString()}</span>
                <span>Last updated: {new Date(request.updatedAt).toLocaleString()}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
