import React, { useState } from 'react'
import { Icon } from './Icon'

export function FlagIcon({ flagCode, icon, color = '#2563eb', label, className = '' }) {
  const [failed, setFailed] = useState(false)

  if (icon === 'trophy') {
    return (
      <span
        className={`inline-flex h-7 w-7 items-center justify-center rounded-md text-white ${className}`}
        style={{ backgroundColor: color }}
        title={label}
      >
        <Icon name="trophy" className="h-4 w-4" />
      </span>
    )
  }

  if (!flagCode || failed) {
    return (
      <span
        className={`inline-flex h-7 w-7 items-center justify-center rounded-md text-[10px] font-bold text-white ${className}`}
        style={{ backgroundColor: color }}
        title={label}
      >
        {label?.slice(0, 2).toUpperCase()}
      </span>
    )
  }

  return (
    <img
      alt={label ? `Bandeira: ${label}` : ''}
      className={`h-[18px] w-6 rounded-sm object-cover ${className}`}
      loading="lazy"
      onError={() => setFailed(true)}
      src={`https://flagcdn.com/w40/${flagCode}.png`}
      srcSet={`https://flagcdn.com/w40/${flagCode}.png 1x, https://flagcdn.com/w80/${flagCode}.png 2x`}
    />
  )
}
