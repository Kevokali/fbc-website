'use client'

import { useState } from 'react'

interface Deadline {
  id: string
  client: string
  task: string
  dueDate: string
  status: 'upcoming' | 'due-today' | 'overdue'
  priority: 'high' | 'medium' | 'low'
}

export default function ComplianceCalendarPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const deadlines: Deadline[] = [
    { id: '1', client: 'ABC Company Ltd', task: 'VAT Filing', dueDate: '2026-02-09', status: 'upcoming', priority: 'high' },
    { id: '2', client: 'XYZ Corp', task: 'PAYE Filing', dueDate: '2026-02-10', status: 'upcoming', priority: 'high' },
    { id: '3', client: 'Tech Solutions', task: 'Income Tax', dueDate: '2026-02-12', status: 'upcoming', priority: 'medium' },
    { id: '4', client: 'ABC Company Ltd', task: 'Withholding Tax', dueDate: '2026-02-15', status: 'upcoming', priority: 'low' },
    { id: '5', client: 'Global Enterprises', task: 'VAT Filing', dueDate: '2026-01-25', status: 'overdue', priority: 'high' },
  ]

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []
    // Empty cells for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    // Days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i))
    }
    return days
  }

  const getDeadlinesForDate = (date: Date) => {
    const dateStr = date.toISOString().split('T')[0]
    return deadlines.filter((d) => d.dueDate === dateStr)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'overdue':
        return 'bg-red-100 text-red-600'
      case 'due-today':
        return 'bg-gold/10 text-gold'
      default:
        return 'bg-emerald/10 text-emerald'
    }
  }

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth((prev) => {
      const newDate = new Date(prev)
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const days = getDaysInMonth(currentMonth)
  const today = new Date()
  const isToday = (date: Date) => {
    return date.toDateString() === today.toDateString()
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-deep-blue mb-2">Compliance Calendar</h1>
          <p className="text-text-secondary">Track all compliance deadlines and filings</p>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setCurrentMonth(new Date())}
            className="px-4 py-2 border border-soft-grey rounded-lg hover:bg-light-grey transition-colors"
          >
            Today
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-md border border-soft-grey p-6">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => navigateMonth('prev')}
              className="p-2 hover:bg-light-grey rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 text-deep-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h2 className="text-xl font-bold text-deep-blue">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h2>
            <button
              onClick={() => navigateMonth('next')}
              className="p-2 hover:bg-light-grey rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 text-deep-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {/* Week day headers */}
            {weekDays.map((day) => (
              <div key={day} className="text-center text-sm font-semibold text-text-secondary py-2">
                {day}
              </div>
            ))}

            {/* Calendar days */}
            {days.map((date, index) => {
              if (!date) {
                return <div key={`empty-${index}`} className="aspect-square"></div>
              }

              const dayDeadlines = getDeadlinesForDate(date)
              const isCurrentDay = isToday(date)
              const isSelected = selectedDate?.toDateString() === date.toDateString()

              return (
                <div
                  key={date.toISOString()}
                  onClick={() => setSelectedDate(date)}
                  className={`aspect-square p-2 border rounded-lg cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-emerald/10 border-emerald'
                      : isCurrentDay
                      ? 'bg-deep-blue/10 border-deep-blue'
                      : 'border-soft-grey hover:border-emerald/50 hover:bg-light-grey'
                  }`}
                >
                  <div className={`text-sm font-medium mb-1 ${isCurrentDay ? 'text-deep-blue' : 'text-text-primary'}`}>
                    {date.getDate()}
                  </div>
                  {dayDeadlines.length > 0 && (
                    <div className="space-y-1">
                      {dayDeadlines.slice(0, 2).map((deadline) => (
                        <div
                          key={deadline.id}
                          className={`text-xs px-1.5 py-0.5 rounded ${getStatusColor(deadline.status)}`}
                        >
                          {deadline.task}
                        </div>
                      ))}
                      {dayDeadlines.length > 2 && (
                        <div className="text-xs text-text-secondary">+{dayDeadlines.length - 2} more</div>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Deadlines List */}
        <div className="bg-white rounded-xl shadow-md border border-soft-grey p-6">
          <h2 className="text-xl font-bold text-deep-blue mb-4">
            {selectedDate
              ? `Deadlines for ${selectedDate.toLocaleDateString()}`
              : 'Upcoming Deadlines'}
          </h2>
          <div className="space-y-3 max-h-[600px] overflow-y-auto">
            {deadlines
              .filter((d) => {
                if (selectedDate) {
                  return d.dueDate === selectedDate.toISOString().split('T')[0]
                }
                return true
              })
              .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
              .map((deadline) => (
                <div
                  key={deadline.id}
                  className="p-4 border border-soft-grey rounded-lg hover:bg-light-grey transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-deep-blue">{deadline.client}</h3>
                      <p className="text-sm text-text-secondary">{deadline.task}</p>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(deadline.status)}`}>
                      {deadline.status}
                    </span>
                  </div>
                  <p className="text-xs text-text-secondary">
                    Due: {new Date(deadline.dueDate).toLocaleDateString()}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
