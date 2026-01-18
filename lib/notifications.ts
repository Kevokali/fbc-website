// Real-time notifications system
// For MVP, using localStorage and polling. In production, use WebSockets or Server-Sent Events

export interface Notification {
  id: string
  type: 'info' | 'success' | 'warning' | 'error'
  title: string
  message: string
  timestamp: string
  read: boolean
  actionUrl?: string
  actionLabel?: string
}

const NOTIFICATIONS_KEY = 'fbc_notifications'

// Get all notifications
export function getNotifications(): Notification[] {
  if (typeof window === 'undefined') return []
  
  const stored = localStorage.getItem(NOTIFICATIONS_KEY)
  if (!stored) return []
  
  try {
    return JSON.parse(stored) as Notification[]
  } catch {
    return []
  }
}

// Add a new notification
export function addNotification(notification: Omit<Notification, 'id' | 'timestamp' | 'read'>): void {
  if (typeof window === 'undefined') return
  
  const notifications = getNotifications()
  const newNotification: Notification = {
    ...notification,
    id: Date.now().toString(),
    timestamp: new Date().toISOString(),
    read: false,
  }
  
  notifications.unshift(newNotification)
  // Keep only last 50 notifications
  const limited = notifications.slice(0, 50)
  localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(limited))
  
  // Trigger custom event for real-time updates
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('notification', { detail: newNotification }))
  }
}

// Mark notification as read
export function markAsRead(notificationId: string): void {
  if (typeof window === 'undefined') return
  
  const notifications = getNotifications()
  const updated = notifications.map((n) =>
    n.id === notificationId ? { ...n, read: true } : n
  )
  localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(updated))
}

// Mark all as read
export function markAllAsRead(): void {
  if (typeof window === 'undefined') return
  
  const notifications = getNotifications()
  const updated = notifications.map((n) => ({ ...n, read: true }))
  localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(updated))
}

// Delete notification
export function deleteNotification(notificationId: string): void {
  if (typeof window === 'undefined') return
  
  const notifications = getNotifications()
  const filtered = notifications.filter((n) => n.id !== notificationId)
  localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(filtered))
}

// Get unread count
export function getUnreadCount(): number {
  const notifications = getNotifications()
  return notifications.filter((n) => !n.read).length
}

// Notification types helper
export const notificationTypes = {
  info: { color: 'bg-blue-100 text-blue-600', icon: 'ℹ️' },
  success: { color: 'bg-emerald/10 text-emerald', icon: '✅' },
  warning: { color: 'bg-gold/10 text-gold', icon: '⚠️' },
  error: { color: 'bg-red-100 text-red-600', icon: '❌' },
}

// Simulate real-time notifications (for demo)
export function simulateNotification() {
  const types: Notification['type'][] = ['info', 'success', 'warning']
  const randomType = types[Math.floor(Math.random() * types.length)]
  
  const messages: Record<Notification['type'], { title: string; message: string }> = {
    info: {
      title: 'New Document Uploaded',
      message: 'A client has uploaded a new document for review',
    },
    success: {
      title: 'Task Completed',
      message: 'VAT filing for ABC Company has been completed',
    },
    warning: {
      title: 'Deadline Approaching',
      message: 'PAYE filing due in 2 days for XYZ Corp',
    },
    error: {
      title: 'Action Required',
      message: 'Please review the flagged document',
    },
  }
  
  addNotification({
    type: randomType,
    ...messages[randomType],
  })
}
