import { useState, useEffect, useCallback } from 'react'
import { ALL_STICKERS } from '../data/teams'

const STORAGE_KEY = 'album-copa-2026-v1'

// count: 0 = faltando, 1 = tenho (sem repetida), 2+ = tenho + (count-1) repetidas
export function useCollection() {
  const [collection, setCollection] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : {}
    } catch {
      return {}
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(collection))
  }, [collection])

  const getCount = useCallback(
    (id) => collection[id] ?? 0,
    [collection]
  )

  const increment = useCallback((id) => {
    setCollection(prev => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }))
  }, [])

  const decrement = useCallback((id) => {
    setCollection(prev => {
      const current = prev[id] ?? 0
      if (current <= 1) {
        const { [id]: _, ...rest } = prev
        return rest
      }
      return { ...prev, [id]: current - 1 }
    })
  }, [])

  const reset = useCallback((id) => {
    setCollection(prev => {
      const { [id]: _, ...rest } = prev
      return rest
    })
  }, [])

  const resetAll = useCallback(() => setCollection({}), [])

  const stats = {
    total: ALL_STICKERS.length,
    have: Object.values(collection).filter(c => c >= 1).length,
    duplicates: Object.values(collection).filter(c => c >= 2).length,
    missing: ALL_STICKERS.length - Object.values(collection).filter(c => c >= 1).length,
    extraCount: Object.values(collection).reduce((acc, c) => acc + Math.max(0, c - 1), 0),
  }

  const teamStats = (teamCode) => {
    const stickers = ALL_STICKERS.filter(s => s.teamCode === teamCode)
    const have = stickers.filter(s => (collection[s.id] ?? 0) >= 1).length
    return { total: stickers.length, have, pct: Math.round((have / stickers.length) * 100) }
  }

  const exchangeList = ALL_STICKERS
    .filter(s => (collection[s.id] ?? 0) >= 2)
    .map(s => ({ ...s, extras: (collection[s.id] ?? 0) - 1 }))

  return { collection, getCount, increment, decrement, reset, resetAll, stats, teamStats, exchangeList }
}
