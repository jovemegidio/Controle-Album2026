import React from 'react'
import { Icon } from './Icon'
import { getStickerImage } from '../data/stickerImages'

export function StickerCard({ sticker, count, onIncrement, onDecrement }) {
  const status = count === 0 ? 'missing' : count === 1 ? 'have' : 'duplicate'
  const imageUrl = getStickerImage(sticker.imageKey)

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
        <span className="flex h-full w-full flex-col items-center justify-center gap-1 px-1 text-center">
          <span className="text-[10px] font-bold leading-none opacity-70">{sticker.num}</span>
          <Icon name={sticker.shiny ? 'star' : 'image'} className="h-4 w-4 opacity-60" />
          <span className="sticker-label max-w-full text-[9px] leading-tight text-gray-300">
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
