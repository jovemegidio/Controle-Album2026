import React, { useState } from 'react'
import { StickerCard } from './StickerCard'
import { CONFEDERATIONS } from '../data/teams'
import { Icon } from './Icon'
import { FlagIcon } from './FlagIcon'

export function TeamSection({ team, getCount, increment, decrement, filter }) {
  const [collapsed, setCollapsed] = useState(false)

  const stickers = team.stickers.filter(sticker => {
    if (filter === 'all') return true
    const count = getCount(sticker.num)
    if (filter === 'missing') return count === 0
    if (filter === 'have') return count >= 1
    if (filter === 'duplicate') return count >= 2
    return true
  })

  if (stickers.length === 0) return null

  const total = team.stickers.length
  const have = team.stickers.filter(sticker => getCount(sticker.num) >= 1).length
  const pct = Math.round((have / total) * 100)
  const confColor = CONFEDERATIONS[team.confederation]?.color ?? '#6b7280'

  return (
    <section className="mb-6">
      <button
        className="group mb-2 flex w-full items-center gap-3"
        onClick={() => setCollapsed(value => !value)}
        type="button"
      >
        <FlagIcon
          color={team.color}
          flagCode={team.flagCode}
          icon={team.icon}
          label={team.name}
        />
        <div className="min-w-0 flex-1 text-left">
          <div className="flex items-center gap-2">
            <span className="truncate text-sm font-bold text-white">{team.name}</span>
            <span
              className="rounded px-1.5 py-0.5 text-xs font-medium"
              style={{ background: `${confColor}33`, color: confColor }}
            >
              {team.code}
            </span>
            <span className="ml-auto text-xs text-gray-400">{have}/{total}</span>
          </div>
          <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-gray-700">
            <div
              className="progress-bar-fill"
              style={{
                width: `${pct}%`,
                background: pct === 100 ? '#22c55e' : team.color,
              }}
            />
          </div>
        </div>
        <Icon
          name={collapsed ? 'chevronRight' : 'chevronDown'}
          className="h-4 w-4 text-gray-500"
        />
      </button>

      {!collapsed && (
        <div className="grid gap-1.5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(64px, 1fr))' }}>
          {stickers.map(sticker => {
            const id = sticker.num
            return (
              <StickerCard
                key={id}
                sticker={{ ...sticker, id, imageKey: sticker.num }}
                count={getCount(id)}
                onIncrement={() => increment(id)}
                onDecrement={() => decrement(id)}
              />
            )
          })}
        </div>
      )}
    </section>
  )
}
