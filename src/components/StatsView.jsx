import React from 'react'
import { CONFEDERATIONS, TEAMS } from '../data/teams'
import { FlagIcon } from './FlagIcon'
import { Icon } from './Icon'

export function StatsView({ stats, teamStats, resetAll }) {
  const [confirm, setConfirm] = React.useState(false)

  const byConf = Object.entries(CONFEDERATIONS).map(([key, conf]) => {
    const teams = TEAMS.filter(team => team.confederation === key)
    const total = teams.reduce((sum, team) => sum + team.stickers.length, 0)
    const have = teams.reduce((sum, team) => {
      const current = teamStats(team.code)
      return sum + current.have
    }, 0)
    return { key, conf, total, have, pct: total > 0 ? Math.round((have / total) * 100) : 0 }
  })

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: 'Total', value: stats.total, color: 'text-gray-200', icon: 'album' },
          { label: 'Tenho', value: stats.have, color: 'text-green-400', icon: 'check' },
          { label: 'Faltam', value: stats.missing, color: 'text-red-400', icon: 'x' },
          { label: 'Repetidas', value: stats.extraCount, color: 'text-blue-400', icon: 'repeat' },
        ].map(card => (
          <div key={card.label} className="rounded-lg bg-gray-800 p-4 text-center">
            <Icon name={card.icon} className={`mx-auto mb-2 h-5 w-5 ${card.color}`} />
            <div className={`text-3xl font-bold ${card.color}`}>{card.value}</div>
            <div className="mt-1 text-xs text-gray-500">{card.label}</div>
          </div>
        ))}
      </div>

      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">
          Por Confederacao
        </h2>
        <div className="space-y-3">
          {byConf.map(({ key, conf, total, have, pct }) => (
            <div key={key} className="rounded-lg bg-gray-800 p-3">
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-sm font-medium">{conf.name}</span>
                <span className="text-xs text-gray-400">{have}/{total} - {pct}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-gray-700">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${pct}%`, background: conf.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">
          Por Selecao
        </h2>
        <div className="space-y-2">
          {TEAMS.map(team => {
            const current = teamStats(team.code)
            return (
              <div key={team.code} className="flex items-center gap-3 rounded-lg bg-gray-800 px-3 py-2">
                <FlagIcon
                  color={team.color}
                  flagCode={team.flagCode}
                  icon={team.icon}
                  label={team.name}
                />
                <span className="flex-1 truncate text-sm">{team.name}</span>
                <div className="h-1.5 w-24 overflow-hidden rounded-full bg-gray-700">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${current.pct}%`,
                      background: current.pct === 100 ? '#22c55e' : team.color,
                    }}
                  />
                </div>
                <span className="w-14 text-right text-xs text-gray-400">
                  {current.have}/{current.total}
                </span>
              </div>
            )
          })}
        </div>
      </section>

      <section className="rounded-lg border border-red-800 p-4">
        <h2 className="mb-2 flex items-center gap-2 text-sm font-semibold text-red-400">
          <Icon name="trash" className="h-4 w-4" />
          Zona de Perigo
        </h2>
        <p className="mb-3 text-xs text-gray-400">
          Apagar todos os dados salvos localmente neste dispositivo. Esta acao nao pode ser desfeita.
        </p>
        {!confirm ? (
          <button
            onClick={() => setConfirm(true)}
            className="rounded-lg bg-red-900 px-4 py-2 text-sm text-red-300 transition-colors hover:bg-red-800"
            type="button"
          >
            Resetar album
          </button>
        ) : (
          <div className="flex gap-3">
            <button
              onClick={() => { resetAll(); setConfirm(false) }}
              className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-500"
              type="button"
            >
              Confirmar reset
            </button>
            <button
              onClick={() => setConfirm(false)}
              className="rounded-lg bg-gray-700 px-4 py-2 text-sm text-gray-300 transition-colors hover:bg-gray-600"
              type="button"
            >
              Cancelar
            </button>
          </div>
        )}
      </section>
    </div>
  )
}
