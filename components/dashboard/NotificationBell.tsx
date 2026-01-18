'use client'

import { useState, useEffect } from 'react'
import { getNotifications, markAsRead, deleteNotification, getUnreadCount, type Notification } from '@/lib/notifications'

export default function NotificationBell() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [unreadCount, setUnreadCount] = useState(0)

  useEffect(() => {
    const loadNotifications = () => {
      const all = getNotifications()
      setNotifications(all)
      setUnreadCount(getUnreadCount())
    }

    loadNotifications()

    // Listen for new notifications
    const handleNotification = () => {
      loadNotifications()
    }

    window.addEventListener('notification', handleNotification)
    
    // Poll for updates (in production, use WebSockets)
    const interval = setInterval(loadNotifications, 5000)

    return () => {
      window.removeEventListener('notification', handleNotification)
      clearInterval(interval)
    }
  }, [])

  const handleMarkAsRead = (id: string) => {
    markAsRead(id)
    setNotifications(getNotifications())
    setUnreadCount(getUnreadCount())
  }

  const handleDelete = (id: string) => {
    deleteNotification(id)
    setNotifications(getNotifications())
    setUnreadCount(getUnreadCount())
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-text-secondary hover:text-deep-blue transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 w-5 h-5 bg-emerald text-white text-xs rounded-full flex items-center justify-center">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {/* Notifications Dropdown */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-soft-grey z-20 max-h-96 overflow-hidden flex flex-col">
            <div className="p-4 border-b border-soft-grey bg-light-grey flex items-center justify-between">
              <h3 className="font-semibold text-deep-blue">Notifications</h3>
              {unreadCount > 0 && (
                <span className="text-xs text-text-secondary">{unreadCount} unread</span>
              )}
            </div>
            <div className="overflow-y-auto flex-1">
              {notifications.length === 0 ? (
                <div className="p-8 text-center text-text-secondary">
                  <p>No notifications</p>
                </div>
              ) : (
                notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 border-b border-soft-grey hover:bg-light-grey transition-colors ${
                      !notification.read ? 'bg-blue-50/50' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            notification.type === 'success'
                              ? 'bg-emerald/10'
                              : notification.type === 'warning'
                              ? 'bg-gold/10'
                              : notification.type === 'error'
                              ? 'bg-red-100'
                              : 'bg-blue-100'
                          }`}
                        >
                          {notification.type === 'success' && '✅'}
                          {notification.type === 'warning' && '⚠️'}
                          {notification.type === 'error' && '❌'}
                          {notification.type === 'info' && 'ℹ️'}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-deep-blue text-sm mb-1">{notification.title}</h4>
                        <p className="text-xs text-text-secondary mb-2">{notification.message}</p>
                        <p className="text-xs text-text-secondary">
                          {new Date(notification.timestamp).toLocaleString()}
                        </p>
                        {notification.actionUrl && (
                          <a
                            href={notification.actionUrl}
                            className="text-xs text-emerald hover:text-emerald-dark font-medium mt-2 inline-block"
                          >
                            {notification.actionLabel || 'View'}
                          </a>
                        )}
                      </div>
                      <div className="flex flex-col gap-1">
                        {!notification.read && (
                          <button
                            onClick={() => handleMarkAsRead(notification.id)}
                            className="text-xs text-emerald hover:text-emerald-dark"
                            title="Mark as read"
                          >
                            ✓
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(notification.id)}
                          className="text-xs text-red-600 hover:text-red-700"
                          title="Delete"
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            {notifications.length > 0 && (
              <div className="p-3 border-t border-soft-grey bg-light-grey">
                <button
                  onClick={() => {
                    notifications.forEach((n) => !n.read && handleMarkAsRead(n.id))
                  }}
                  className="text-xs text-emerald hover:text-emerald-dark font-medium"
                >
                  Mark all as read
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}
