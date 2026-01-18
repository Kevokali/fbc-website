// User and Dashboard Types

export type UserRole = 'client' | 'admin'

export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  businessName?: string // For clients
  assignedStaff?: string // For clients
}

export interface BusinessProfile {
  businessName: string
  registrationNo: string
  kraPin: string
  businessType: string
  taxObligations: {
    vat: boolean
    paye: boolean
    withholdingTax: boolean
    incomeTax: boolean
  }
  contactPerson: {
    name: string
    email: string
    phone: string
  }
}

export interface ComplianceStatus {
  id: string
  taxType: 'VAT' | 'PAYE' | 'Income Tax' | 'Withholding Tax'
  period: string
  status: 'Pending' | 'Submitted' | 'Overdue'
  dueDate: string
  action?: string
}

export interface Document {
  id: string
  type: 'Bank Statements' | 'Sales Invoices' | 'Expense Receipts' | 'Payroll Files'
  fileName: string
  uploadDate: string
  status: 'Uploaded' | 'Pending Review' | 'Reviewed'
  url?: string
}

export interface Approval {
  id: string
  taskName: string
  period: string
  summary: string
  preparedBy: string
  status: 'Pending' | 'Approved' | 'Rejected'
  approvedAt?: string
}

export interface Message {
  id: string
  from: string
  to: string
  subject: string
  content: string
  timestamp: string
  attachments?: string[]
  isSystemMessage?: boolean
}

export interface DataSubmission {
  id: string
  formType: 'Monthly Sales Summary' | 'Expense Summary' | 'Employee Payroll' | 'Withholding Tax'
  period: string
  data: Record<string, any>
  status: 'Draft' | 'Submitted' | 'Under Review' | 'Approved'
  submittedAt?: string
}

export interface ServiceRequest {
  id: string
  clientId: string
  clientName: string
  businessName: string
  requestType: string
  title: string
  description: string
  priority: 'low' | 'medium' | 'high' | 'urgent'
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled'
  createdAt: string
  updatedAt: string
  assignedTo?: string
  response?: string
  attachments?: string[]
}

export interface ClientSettings {
  userId: string
  email: string
  phone: string
  notifications: {
    email: boolean
    sms: boolean
    push: boolean
  }
  preferences: {
    language: string
    timezone: string
    dateFormat: string
  }
  security: {
    twoFactorEnabled: boolean
    lastPasswordChange?: string
  }
}
