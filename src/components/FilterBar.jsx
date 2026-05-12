import React from 'react'
import { CONFEDERATIONS } from '../data/teams'
import { Icon } from './Icon'

const STATUS_FILTERS = [
  { id: 'all', label: 'Todas' },
  { id: 'missing', label: 'Faltam' },
  { id: 'have', label: 'Tenho' },
  { id: 'duplicate', label: 'Repetidas' },
]

export function FilterBar({ filter, setFilter, confFilter, setConfFilter, search, setSearch }) {
  return (
    <div className="mb-6 space-y-3">
      <label className="relative block">
        <Icon name="search" className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
        <input
          type="search"
          placeholder="Buscar selecao ou jogador..."
          value={search}
          onChange={event => setSearch(event.target.value)}
          className="w-full rounded-lg border border-gray-700 bg-gray-800 px-10 py-2 text-sm placeholder-gray-500 transition-colors focus:border-green-500 focus:outline-none"
        />
      </label>

      <div className="flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Status das figurinhas">
        {STATUS_FILTERS.map(item => (
          <button
            key={item.id}
            onClick={() => setFilter(item.id)}
            className={[
              'whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-medium transition-colors',
              filter === item.id
                ? 'bg-green-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700',
            ].join(' ')}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Confederacoes">
        <button
          onClick={() => setConfFilter('all')}
          className={[
            'whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-medium transition-colors',
            confFilter === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700',
          ].join(' ')}
          type="button"
        >
          Todas
        </button>
        {Object.entries(CONFEDERATIONS).map(([key, conf]) => (
          <button
            key={key}
            onClick={() => setConfFilter(key)}
            className={[
              'whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-medium transition-colors',
              confFilter === key
                ? 'text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700',
            ].join(' ')}
            style={confFilter === key ? { background: conf.color } : {}}
            type="button"
          >
            {conf.name}
          </button>
        ))}
      </div>
    </div>
  )
}
