import React from 'react'
import { Icon } from './Icon'
import { getStickerImage } from '../data/stickerImages'

// Cores por tipo de figurinha (similar ao estilo Panini)
const getTypeColor = (label, teamCode) => {
  const lowerLabel = label?.toLowerCase() || ''
  if (lowerLabel.includes('escudo') || lowerLabel.includes('emblema') || lowerLabel.includes('badge')) {
    return 'from-amber-600 to-amber-800' // Escudos - dourado
  }
  if (lowerLabel.includes('time') || lowerLabel.includes('equipe') || lowerLabel.includes('team')) {
    return 'from-indigo-600 to-indigo-800' // Foto do time - azul
  }
  if (lowerLabel.includes('logo') || lowerLabel.includes('panini')) {
    return 'from-red-600 to-red-800' // Logo Panini - vermelho
  }
  if (lowerLabel.includes('mascote')) {
    return 'from-green-600 to-green-800' // Mascote - verde
  }
  if (lowerLabel.includes('troféu') || lowerLabel.includes('trophy')) {
    return 'from-yellow-500 to-yellow-700' // Troféu - dourado
  }
  if (lowerLabel.includes('estádio') || lowerLabel.includes('stadium')) {
    return 'from-cyan-600 to-cyan-800' // Estádios - ciano
  }
  // Jogadores - cor baseada no código do time
  return 'from-slate-600 to-slate-800'
}

export function StickerCard({ sticker, count, onIncrement, onDecrement }) {
  const status = count === 0 ? 'missing' : count === 1 ? 'have' : 'duplicate'
  const imageUrl = getStickerImage(sticker.imageKey, sticker.num)
  const typeGradient = getTypeColor(sticker.label, sticker.teamCode)

  const cardClass = [
    'sticker-card',
    status === 'missing' ? 'sticker-missing' : '',
    status === 'have' ? 'sticker-have' : '',
    status === 'duplicate' ? 'sticker-duplicate' : '',
    sticker.shiny && status !== 'missing' ? 'sticker-shiny' : '',
    imageUrl ? 'sticker-card-photo' : '',
  ].filter(Boolean).join(' ')

  return (
    <button
      className={cardClass}
      onClick={onIncrement}
      onContextMenu={event => {
        event.preventDefault()
        onDecrement()
      }}
      title={`${sticker.id} - ${sticker.label}${sticker.shiny ? ' especial' : ''}\nClique para adicionar | Clique direito para remover`}
      type="button"
    >
      {imageUrl ? (
        <img
          alt={`${sticker.id} - ${sticker.label}`}
          className="absolute inset-0 h-full w-full object-cover"
          draggable="false"
          loading="lazy"
          src={imageUrl}
        />
      ) : (
        <span className={`flex h-full w-full flex-col items-center justify-center gap-0.5 px-1 text-center bg-gradient-to-br ${status === 'missing' ? 'from-gray-800 to-gray-900' : typeGradient}`}>
          <span className="text-2xl font-black leading-none text-white/90">{sticker.num}</span>
          <span className="sticker-label max-w-full text-[8px] font-medium leading-tight text-white/70 mt-1">
            {sticker.label}
          </span>
        </span>
      )}

      <span className="absolute left-1 top-1 rounded bg-gray-950/80 px-1 text-[10px] font-bold leading-4 text-gray-100">
        {sticker.num}
      </span>

      {status === 'have' && (
        <span className="absolute bottom-1 right-1 rounded-full bg-green-500 p-0.5 text-white">
          <Icon name="check" className="h-3 w-3" />
        </span>
      )}
      {status === 'duplicate' && (
        <span className="absolute bottom-1 right-1 rounded-full bg-blue-500 px-1.5 text-[10px] font-bold leading-5 text-white">
          {count}
        </span>
      )}
      {status === 'missing' && (
        <span className="absolute bottom-1 right-1 rounded-full bg-gray-700 p-0.5 text-gray-300">
          <Icon name="minus" className="h-3 w-3" />
        </span>
      )}
      {sticker.shiny && status !== 'missing' && (
        <span className="absolute right-1 top-1 rounded-full bg-yellow-400 p-0.5 text-gray-950">
          <Icon name="star" className="h-3 w-3" />
        </span>
      )}
    </button>
  )
}
