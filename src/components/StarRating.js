import React from 'react'

function Star({ filled }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={filled ? 'var(--color-accent)' : 'none'} stroke={filled ? 'var(--color-accent)' : 'rgba(255,255,255,0.5)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.4))' }}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  )
}

function StarRating({ value = 0 }) {
  const full = Math.floor(Number(value) || 0)
  const stars = Array.from({ length: 5 }, (_, i) => i < full)
  return (
    <div style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }} aria-label={`Rating ${value} out of 5`}>
      {stars.map((filled, idx) => <Star key={idx} filled={filled} />)}
      <span style={{ color: 'var(--color-muted)', fontSize: 12 }}>({value})</span>
    </div>
  )
}

export default StarRating


