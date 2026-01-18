'use client'

import { useState } from 'react'

interface Task {
  id: string
  title: string
  client: string
  type: string
  dueDate: string
  assignedTo: string
  status: 'todo' | 'in-review' | 'awaiting-client' | 'completed'
  priority: 'high' | 'medium' | 'low'
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'VAT Filing - January 2026',
      client: 'ABC Company Ltd',
      type: 'VAT Filing',
      dueDate: '2026-02-20',
      assignedTo: 'Luke Weke',
      status: 'todo',
      priority: 'high',
    },
    {
      id: '2',
      title: 'PAYE Filing - January 2026',
      client: 'XYZ Corp',
      type: 'PAYE Filing',
      dueDate: '2026-02-09',
      assignedTo: 'Calleb Masese',
      status: 'in-review',
      priority: 'high',
    },
    {
      id: '3',
      title: 'Income Tax Review',
      client: 'Tech Solutions',
      type: 'Income Tax',
      dueDate: '2026-02-15',
      assignedTo: 'Luke Weke',
      status: 'awaiting-client',
      priority: 'medium',
    },
    {
      id: '4',
      title: 'Document Review - Bank Statements',
      client: 'Global Enterprises',
      type: 'Document Review',
      dueDate: '2026-02-05',
      assignedTo: 'Calleb Masese',
      status: 'completed',
      priority: 'low',
    },
  ])

  const columns = [
    { id: 'todo', title: 'To Do', color: 'bg-gold/10 text-gold' },
    { id: 'in-review', title: 'In Review', color: 'bg-blue-100 text-blue-600' },
    { id: 'awaiting-client', title: 'Awaiting Client', color: 'bg-purple-100 text-purple-600' },
    { id: 'completed', title: 'Completed', color: 'bg-emerald/10 text-emerald' },
  ] as const

  const getTasksByStatus = (status: Task['status']) => {
    return tasks.filter((task) => task.status === status)
  }

  const moveTask = (taskId: string, newStatus: Task['status']) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, status: newStatus } : task)))
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-600'
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
          <h1 className="text-3xl font-bold text-deep-blue mb-2">Tasks & Workflow</h1>
          <p className="text-text-secondary">Manage tasks and track workflow progress</p>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-emerald to-emerald-dark text-white rounded-lg font-semibold hover:shadow-lg transition-all">
          + New Task
        </button>
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {columns.map((column) => {
          const columnTasks = getTasksByStatus(column.id)
          return (
            <div key={column.id} className="bg-white rounded-xl shadow-md border border-soft-grey overflow-hidden flex flex-col">
              <div className={`p-4 ${column.color} border-b border-soft-grey`}>
                <h2 className="font-bold text-deep-blue">
                  {column.title} ({columnTasks.length})
                </h2>
              </div>
              <div className="flex-1 p-4 space-y-3 overflow-y-auto min-h-[400px]">
                {columnTasks.map((task) => (
                  <div
                    key={task.id}
                    className="p-4 bg-light-grey rounded-lg border border-soft-grey hover:shadow-md transition-all cursor-move"
                    draggable
                    onDragEnd={(e) => {
                      // Simple drag and drop - in production, use a library like react-beautiful-dnd
                      const target = e.target as HTMLElement
                      const rect = target.getBoundingClientRect()
                      const x = e.clientX
                      // Simple logic to determine drop zone
                      // In production, implement proper drag and drop
                    }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-deep-blue text-sm">{task.title}</h3>
                      <span className={`px-2 py-0.5 rounded text-xs font-semibold ${getPriorityColor(task.priority)}`}>
                        {task.priority}
                      </span>
                    </div>
                    <p className="text-xs text-text-secondary mb-2">{task.client}</p>
                    <div className="flex items-center justify-between text-xs text-text-secondary">
                      <span>{task.assignedTo}</span>
                      <span>{new Date(task.dueDate).toLocaleDateString()}</span>
                    </div>
                    <div className="mt-3 flex gap-2">
                      {columns
                        .filter((col) => col.id !== task.status)
                        .map((col) => (
                          <button
                            key={col.id}
                            onClick={() => moveTask(task.id, col.id)}
                            className="flex-1 px-2 py-1 text-xs border border-soft-grey rounded hover:bg-white transition-colors"
                          >
                            Move to {col.title}
                          </button>
                        ))}
                    </div>
                  </div>
                ))}
                {columnTasks.length === 0 && (
                  <div className="text-center text-text-secondary text-sm py-8">
                    No tasks
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
