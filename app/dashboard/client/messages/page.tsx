'use client'

import { useState, useEffect } from 'react'
import { getCurrentUser } from '@/lib/auth'
import type { Message, User } from '@/lib/types'

export default function MessagesPage() {
  const [user, setUser] = useState<User | null>(null)
  const [selectedMessage, setSelectedMessage] = useState<string | null>(null)
  const [newMessage, setNewMessage] = useState('')
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    const loadUser = async () => {
      const currentUser = await getCurrentUser()
      setUser(currentUser)
      // Initialize messages after user is loaded
      if (currentUser) {
        setMessages([
          {
            id: '1',
            from: 'FBC Team',
            to: currentUser.name || 'Client',
            subject: 'Please review your PAYE submission',
            content: 'Hello,\n\nWe have prepared your PAYE filing for January 2026. Please review the documents and approve them in the Approvals section.\n\nThank you,\nFBC Team',
            timestamp: '2026-02-05T10:30:00',
            isSystemMessage: false,
          },
          {
            id: '2',
            from: 'System',
            to: currentUser.name || 'Client',
            subject: 'Document Upload Successful',
            content: 'Your bank statements for January 2026 have been successfully uploaded and are pending review.',
            timestamp: '2026-02-04T14:20:00',
            isSystemMessage: true,
          },
          {
            id: '3',
            from: 'Luke Weke',
            to: currentUser.name || 'Client',
            subject: 'Tax Compliance Reminder',
            content: 'This is a reminder that your VAT filing for January 2026 is due on February 20, 2026. Please ensure all required documents are uploaded.\n\nBest regards,\nLuke Weke\nFBC',
            timestamp: '2026-02-03T09:15:00',
            isSystemMessage: false,
            attachments: ['vat_guide_2026.pdf'],
          },
        ])
      }
    }
    loadUser()
  }, [])

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    const message: Message = {
      id: Date.now().toString(),
      from: user?.name || 'Client',
      to: 'FBC Team',
      subject: 'New Message',
      content: newMessage,
      timestamp: new Date().toISOString(),
    }

    setMessages([message, ...messages])
    setNewMessage('')
    setSelectedMessage(message.id)
  }

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))

    if (days === 0) {
      return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    } else if (days === 1) {
      return 'Yesterday'
    } else if (days < 7) {
      return `${days} days ago`
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    }
  }

  const selectedMsg = messages.find((m) => m.id === selectedMessage) || messages[0]

  return (
    <div className="space-y-6 h-[calc(100vh-8rem)] flex flex-col">
      <div>
        <h1 className="text-3xl font-bold text-deep-blue mb-2">Messages / Notes</h1>
        <p className="text-text-secondary">Communicate with FBC team and view system notifications</p>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-0">
        {/* Messages List */}
        <div className="lg:col-span-1 bg-white rounded-xl shadow-md border border-soft-grey overflow-hidden flex flex-col">
          <div className="p-4 border-b border-soft-grey bg-light-grey">
            <h2 className="font-semibold text-deep-blue">Messages</h2>
          </div>
          <div className="flex-1 overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                onClick={() => setSelectedMessage(message.id)}
                className={`p-4 border-b border-soft-grey cursor-pointer hover:bg-light-grey transition-colors ${
                  selectedMessage === message.id ? 'bg-emerald/5 border-l-4 border-l-emerald' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {message.isSystemMessage && (
                      <span className="px-2 py-0.5 bg-gold/10 text-gold text-xs font-semibold rounded">
                        System
                      </span>
                    )}
                    <span className="font-semibold text-deep-blue text-sm">{message.from}</span>
                  </div>
                  <span className="text-xs text-text-secondary">{formatDate(message.timestamp)}</span>
                </div>
                <p className="font-medium text-text-primary text-sm mb-1 line-clamp-1">{message.subject}</p>
                <p className="text-xs text-text-secondary line-clamp-2">{message.content}</p>
                {message.attachments && message.attachments.length > 0 && (
                  <div className="mt-2 flex items-center gap-1 text-xs text-emerald">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                    {message.attachments.length} attachment(s)
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Message Detail */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-md border border-soft-grey flex flex-col">
          {selectedMsg ? (
            <>
              <div className="p-6 border-b border-soft-grey">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      {selectedMsg.isSystemMessage && (
                        <span className="px-3 py-1 bg-gold/10 text-gold text-xs font-semibold rounded">
                          System Message
                        </span>
                      )}
                      <h2 className="text-xl font-bold text-deep-blue">{selectedMsg.subject}</h2>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-text-secondary">
                      <span>
                        <strong>From:</strong> {selectedMsg.from}
                      </span>
                      <span>
                        <strong>To:</strong> {selectedMsg.to}
                      </span>
                      <span>
                        <strong>Date:</strong> {new Date(selectedMsg.timestamp).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 p-6 overflow-y-auto">
                <div className="whitespace-pre-wrap text-text-primary leading-relaxed">
                  {selectedMsg.content}
                </div>

                {selectedMsg.attachments && selectedMsg.attachments.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-soft-grey">
                    <h3 className="font-semibold text-deep-blue mb-3">Attachments</h3>
                    <div className="space-y-2">
                      {selectedMsg.attachments.map((attachment, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 bg-light-grey rounded-lg hover:bg-soft-grey transition-colors cursor-pointer"
                        >
                          <svg className="w-5 h-5 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                          <span className="flex-1 text-text-primary font-medium">{attachment}</span>
                          <button className="text-emerald hover:text-emerald-dark font-medium text-sm">
                            Download
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Reply Section */}
              <div className="p-6 border-t border-soft-grey bg-light-grey">
                <h3 className="font-semibold text-deep-blue mb-3">Reply</h3>
                <div className="flex gap-3">
                  <textarea
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message here..."
                    rows={3}
                    className="flex-1 px-4 py-3 border border-soft-grey rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald outline-none resize-none"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim()}
                    className="px-6 py-3 bg-gradient-to-r from-emerald to-emerald-dark text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed self-end"
                  >
                    Send
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-text-secondary">
              <p>Select a message to view</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
