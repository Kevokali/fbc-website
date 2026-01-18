'use client'

import { useState, useEffect } from 'react'
import type { ServiceRequest } from '@/lib/types'

export default function AdminRequestsPage() {
  const [requests, setRequests] = useState<ServiceRequest[]>([])
  const [selectedRequest, setSelectedRequest] = useState<ServiceRequest | null>(null)
  const [filter, setFilter] = useState<'all' | 'pending' | 'in-progress' | 'completed'>('all')
  const [response, setResponse] = useState('')
  const [assignedTo, setAssignedTo] = useState('')

  useEffect(() => {
    // Load requests from localStorage (in production, fetch from API)
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('fbc_service_requests')
      if (stored) {
        try {
          setRequests(JSON.parse(stored))
        } catch {
          setRequests([])
        }
      }
    }
  }, [])

  const filteredRequests = requests.filter((req) => {
    if (filter === 'all') return true
    return req.status === filter
  })

  const handleUpdateStatus = (requestId: string, newStatus: ServiceRequest['status']) => {
    const updated = requests.map((req) =>
      req.id === requestId
        ? {
            ...req,
            status: newStatus,
            assignedTo: assignedTo || req.assignedTo,
            response: response || req.response,
            updatedAt: new Date().toISOString(),
          }
        : req
    )
    setRequests(updated)
    localStorage.setItem('fbc_service_requests', JSON.stringify(updated))
    setSelectedRequest(null)
    setResponse('')
    setAssignedTo('')
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

  const staffMembers = ['Luke Weke', 'Calleb Masese', 'Unassigned']

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-deep-blue mb-2">Service Requests</h1>
          <p className="text-text-secondary">Manage client service requests</p>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as typeof filter)}
            className="px-4 py-2 border border-soft-grey rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald outline-none"
          >
            <option value="all">All Requests</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-md border border-soft-grey">
          <p className="text-sm text-text-secondary mb-1">Total Requests</p>
          <p className="text-2xl font-bold text-deep-blue">{requests.length}</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-md border border-soft-grey">
          <p className="text-sm text-text-secondary mb-1">Pending</p>
          <p className="text-2xl font-bold text-gold">
            {requests.filter((r) => r.status === 'pending').length}
          </p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-md border border-soft-grey">
          <p className="text-sm text-text-secondary mb-1">In Progress</p>
          <p className="text-2xl font-bold text-blue-600">
            {requests.filter((r) => r.status === 'in-progress').length}
          </p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-md border border-soft-grey">
          <p className="text-sm text-text-secondary mb-1">Completed</p>
          <p className="text-2xl font-bold text-emerald">
            {requests.filter((r) => r.status === 'completed').length}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Requests List */}
        <div className="lg:col-span-1 bg-white rounded-xl shadow-md border border-soft-grey overflow-hidden">
          <div className="p-4 border-b border-soft-grey bg-light-grey">
            <h2 className="font-semibold text-deep-blue">
              Requests ({filteredRequests.length})
            </h2>
          </div>
          <div className="max-h-[600px] overflow-y-auto">
            {filteredRequests.length === 0 ? (
              <div className="p-8 text-center text-text-secondary">
                <p>No requests found</p>
              </div>
            ) : (
              filteredRequests.map((request) => (
                <div
                  key={request.id}
                  onClick={() => setSelectedRequest(request)}
                  className={`p-4 border-b border-soft-grey cursor-pointer hover:bg-light-grey transition-colors ${
                    selectedRequest?.id === request.id ? 'bg-emerald/5 border-l-4 border-l-emerald' : ''
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-deep-blue text-sm truncate">{request.title}</p>
                      <p className="text-xs text-text-secondary">{request.businessName}</p>
                    </div>
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(request.status)}`}
                    >
                      {request.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-text-secondary">
                    <span className={`px-2 py-0.5 rounded ${getPriorityColor(request.priority)}`}>
                      {request.priority}
                    </span>
                    <span>{new Date(request.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Request Detail */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-md border border-soft-grey p-6">
          {selectedRequest ? (
            <div className="space-y-6">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-deep-blue mb-2">{selectedRequest.title}</h2>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(selectedRequest.status)}`}>
                        {selectedRequest.status}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getPriorityColor(selectedRequest.priority)}`}>
                        {selectedRequest.priority}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                  <div>
                    <span className="text-text-secondary">Client:</span>
                    <span className="ml-2 font-medium text-deep-blue">{selectedRequest.businessName}</span>
                  </div>
                  <div>
                    <span className="text-text-secondary">Type:</span>
                    <span className="ml-2 font-medium text-deep-blue">{selectedRequest.requestType}</span>
                  </div>
                  <div>
                    <span className="text-text-secondary">Created:</span>
                    <span className="ml-2 font-medium text-deep-blue">
                      {new Date(selectedRequest.createdAt).toLocaleString()}
                    </span>
                  </div>
                  {selectedRequest.assignedTo && (
                    <div>
                      <span className="text-text-secondary">Assigned To:</span>
                      <span className="ml-2 font-medium text-deep-blue">{selectedRequest.assignedTo}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-4 bg-light-grey rounded-lg">
                <h3 className="font-semibold text-deep-blue mb-2">Description</h3>
                <p className="text-text-primary">{selectedRequest.description}</p>
              </div>

              {selectedRequest.response && (
                <div className="p-4 bg-emerald/5 border border-emerald/20 rounded-lg">
                  <h3 className="font-semibold text-deep-blue mb-2">Previous Response</h3>
                  <p className="text-text-secondary">{selectedRequest.response}</p>
                </div>
              )}

              {/* Admin Actions */}
              <div className="border-t border-soft-grey pt-6">
                <h3 className="font-semibold text-deep-blue mb-4">Update Request</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Assign To
                    </label>
                    <select
                      value={assignedTo || selectedRequest.assignedTo || ''}
                      onChange={(e) => setAssignedTo(e.target.value)}
                      className="w-full px-4 py-3 border border-soft-grey rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald outline-none"
                    >
                      <option value="">Select staff member</option>
                      {staffMembers.map((staff) => (
                        <option key={staff} value={staff}>
                          {staff}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Response / Notes
                    </label>
                    <textarea
                      value={response}
                      onChange={(e) => setResponse(e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 border border-soft-grey rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald outline-none resize-none"
                      placeholder="Add your response or notes..."
                    />
                  </div>
                  <div className="flex gap-3">
                    {selectedRequest.status !== 'completed' && (
                      <button
                        onClick={() => handleUpdateStatus(selectedRequest.id, 'in-progress')}
                        className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        Mark In Progress
                      </button>
                    )}
                    <button
                      onClick={() => handleUpdateStatus(selectedRequest.id, 'completed')}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-emerald to-emerald-dark text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                    >
                      Mark Completed
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-text-secondary">
              <p>Select a request to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
