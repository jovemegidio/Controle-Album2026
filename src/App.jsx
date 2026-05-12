import React, { useMemo, useState } from 'react'
import { TEAMS } from './data/teams'
import { useCollection } from './hooks/useCollection'
import { Header } from './components/Header'
import { FilterBar } from './components/FilterBar'
import { TeamSection } from './components/TeamSection'
import { ExchangeList } from './components/ExchangeList'
import { StatsView } from './components/StatsView'
import { AboutView } from './components/AboutView'
import { Icon } from './components/Icon'

export default function App() {
  const { getCount, increment, decrement, resetAll, stats, teamStats, exchangeList } =
    useCollection()

  const [activeView, setActiveView] = useState('album')
  const [filter, setFilter] = useState('all')
  const [confFilter, setConfFilter] = useState('all')
  const [search, setSearch] = useState('')

  const visibleTeams = useMemo(() => {
    const query = search.toLowerCase().trim()
    return TEAMS.filter(team => {
      if (confFilter !== 'all' && team.confederation !== confFilter) return false
      if (!query) return true
      if (team.name.toLowerCase().includes(query)) return true
      if (team.code.toLowerCase().includes(query)) return true
      if (team.stickers.some(sticker => sticker.label.toLowerCase().includes(query))) return true
      return false
    })
  }, [confFilter, search])

  return (
    <div className="min-h-screen">
      <Header stats={stats} activeView={activeView} setActiveView={setActiveView} />

      <main className="mx-auto max-w-5xl px-4 py-6">
        {activeView === 'album' && (
          <>
            <FilterBar
              filter={filter}
              setFilter={setFilter}
              confFilter={confFilter}
              setConfFilter={setConfFilter}
              search={search}
              setSearch={setSearch}
            />
            <div>
              {visibleTeams.map(team => (
                <TeamSection
                  key={team.code}
                  team={team}
                  getCount={getCount}
                  increment={increment}
                  decrement={decrement}
                  filter={filter}
                />
              ))}
              {visibleTeams.length === 0 && (
                <div className="flex flex-col items-center py-16 text-center text-gray-500">
                  <Icon name="search" className="mb-3 h-10 w-10" />
                  <p>Nenhuma selecao encontrada.</p>
                </div>
              )}
            </div>
          </>
        )}

        {activeView === 'exchange' && (
          <ExchangeList exchangeList={exchangeList} />
        )}

        {activeView === 'stats' && (
          <StatsView stats={stats} teamStats={teamStats} resetAll={resetAll} />
        )}

        {activeView === 'about' && (
          <AboutView />
        )}
      </main>

      <footer className="mt-8 border-t border-gray-800 py-6 text-center text-xs text-gray-600">
        <p>Clique para marcar como tenho. Clique de novo para adicionar repetida. Clique direito para remover.</p>
        <p className="mt-1 inline-flex items-center justify-center gap-1">
          <Icon name="lock" className="h-3.5 w-3.5" />
          Dados salvos localmente no seu navegador.
        </p>
      </footer>
    </div>
  )
}
