'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Client {
  id: string
  name: string
  businessType: string
  status: 'Active' | 'Pending' | 'Inactive'
  assignedStaff: string
}

export default function ClientsPage() {
  const [clients] = useState<Client[]>([
    { id: '1', name: 'ABC Company Ltd', businessType: 'Limited Company', status: 'Active', assignedStaff: 'Luke Weke' },
    { id: '2', name: 'XYZ Corp', businessType: 'LLC', status: 'Active', assignedStaff: 'Calleb Masese' },
    { id: '3', name: 'Tech Solutions', businessType: 'Limited Company', status: 'Pending', assignedStaff: 'Luke Weke' },
  ])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-deep-blue mb-2">Clients</h1>
          <p className="text-text-secondary">Manage all client accounts</p>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-emerald to-emerald-dark text-white rounded-lg font-semibold hover:shadow-lg transition-all">
          Add New Client
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-md border border-soft-grey overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-light-grey">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-deep-blue">Client</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-deep-blue">Business Type</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-deep-blue">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-deep-blue">Assigned Staff</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-deep-blue">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-soft-grey">
              {clients.map((client) => (
                <tr key={client.id} className="hover:bg-light-grey transition-colors">
                  <td className="px-6 py-4">
                    <span className="font-medium text-deep-blue">{client.name}</span>
                  </td>
                  <td className="px-6 py-4 text-text-secondary">{client.businessType}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        client.status === 'Active'
                          ? 'bg-emerald/10 text-emerald'
                          : client.status === 'Pending'
                          ? 'bg-gold/10 text-gold'
                          : 'bg-text-secondary/10 text-text-secondary'
                      }`}
                    >
                      {client.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-text-secondary">{client.assignedStaff}</td>
                  <td className="px-6 py-4">
                    <Link
                      href={`/dashboard/admin/clients/${client.id}`}
                      className="text-emerald hover:text-emerald-dark font-medium"
                    >
                      View →
                    </Link>
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
