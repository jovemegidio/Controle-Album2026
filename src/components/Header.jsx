import React from 'react'
import { Icon } from './Icon'

export function Header({ stats, activeView, setActiveView }) {
  const pct = stats.total > 0 ? Math.round((stats.have / stats.total) * 100) : 0

  const tabs = [
    { id: 'album', label: 'Album', icon: 'album' },
    { id: 'exchange', label: `Troca (${stats.extraCount})`, icon: 'repeat' },
    { id: 'stats', label: 'Stats', icon: 'barChart' },
    { id: 'about', label: 'Sobre', icon: 'info' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900">
      <div className="mx-auto max-w-5xl px-4 pb-0 pt-4">
        <div className="mb-3 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600 text-white">
            <Icon name="trophy" className="h-6 w-6" />
          </span>
          <div>
            <h1 className="text-lg font-bold leading-tight">Album Copa do Mundo 2026</h1>
            <p className="text-xs text-gray-400">Panini FIFA World Cup</p>
          </div>
          <div className="ml-auto text-right">
            <div className="text-2xl font-bold text-green-400">{pct}%</div>
            <div className="text-xs text-gray-400">{stats.have}/{stats.total}</div>
          </div>
        </div>

        <div className="mb-3 h-2 overflow-hidden rounded-full bg-gray-700">
          <div
            className="h-full rounded-full bg-green-500 transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>

        <div className="mb-3 flex gap-4 text-xs text-gray-400">
          <span className="inline-flex items-center gap-1 font-semibold text-green-400">
            <Icon name="check" className="h-3.5 w-3.5" />
            {stats.have} tenho
          </span>
          <span className="inline-flex items-center gap-1 text-gray-500">
            <Icon name="x" className="h-3.5 w-3.5" />
            {stats.missing} faltam
          </span>
          <span className="inline-flex items-center gap-1 text-blue-400">
            <Icon name="repeat" className="h-3.5 w-3.5" />
            {stats.extraCount} repetidas
          </span>
        </div>

        <div className="-mx-4 flex gap-1 overflow-x-auto px-4">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveView(tab.id)}
              className={[
                'inline-flex items-center gap-1.5 whitespace-nowrap border-b-2 px-4 py-2 text-sm font-medium transition-colors',
                activeView === tab.id
                  ? 'border-green-400 text-green-400'
                  : 'border-transparent text-gray-400 hover:text-gray-200',
              ].join(' ')}
            >
              <Icon name={tab.icon} className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
