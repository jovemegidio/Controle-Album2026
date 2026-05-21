import React, { useState } from 'react'
import { Icon } from './Icon'
import { FlagIcon } from './FlagIcon'

export function ExchangeList({ exchangeList }) {
  const [copied, setCopied] = useState(false)

  if (exchangeList.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-gray-500">
        <Icon name="packageOpen" className="mb-4 h-12 w-12" />
        <p className="text-lg font-medium">Nenhuma repetida ainda</p>
        <p className="mt-1 text-sm">Quando voce tiver figurinhas extras, elas aparecem aqui.</p>
      </div>
    )
  }

  const byTeam = exchangeList.reduce((acc, sticker) => {
    if (!acc[sticker.teamCode]) {
      acc[sticker.teamCode] = {
        teamName: sticker.teamName,
        teamFlagCode: sticker.teamFlagCode,
        teamColor: sticker.teamColor,
        stickers: [],
      }
    }
    acc[sticker.teamCode].stickers.push(sticker)
    return acc
  }, {})

  const copyToClipboard = () => {
    const lines = ['Minhas figurinhas para troca - Copa 2026', '']
    Object.values(byTeam).forEach(({ teamName, stickers }) => {
      lines.push(teamName)
      stickers.forEach(sticker => {
        lines.push(`  ${sticker.num} ${sticker.label}${sticker.extras > 1 ? ` (x${sticker.extras})` : ''}`)
      })
      lines.push('')
    })
    navigator.clipboard.writeText(lines.join('\n')).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const totalExtras = exchangeList.reduce((sum, sticker) => sum + sticker.extras, 0)

  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-sm text-gray-400">
          <span className="font-semibold text-blue-400">{exchangeList.length}</span> figurinhas distintas -{' '}
          <span className="font-semibold text-blue-400">{totalExtras}</span> copias extras
        </p>
        <button
          onClick={copyToClipboard}
          className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-600"
          type="button"
        >
          <Icon name={copied ? 'copyCheck' : 'clipboard'} className="h-4 w-4" />
          {copied ? 'Copiado' : 'Copiar lista'}
        </button>
      </div>

      <div className="space-y-6">
        {Object.entries(byTeam).map(([code, { teamName, teamFlagCode, teamColor, stickers }]) => (
          <section key={code}>
            <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-300">
              <FlagIcon color={teamColor} flagCode={teamFlagCode} label={teamName} />
              {teamName}
              <span className="text-xs text-gray-500">({stickers.length})</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {stickers.map(sticker => (
                <div
                  key={sticker.id}
                  className="flex items-center gap-1.5 rounded-md border border-blue-700/50 bg-blue-900/40 px-2.5 py-1.5 text-xs"
                >
                  <span className="font-bold text-blue-300">{sticker.num}</span>
                  <span className="text-gray-300">{sticker.label}</span>
                  {sticker.extras > 1 && (
                    <span className="rounded-full bg-blue-500 px-1.5 text-[10px] font-bold text-white">
                      x{sticker.extras}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
