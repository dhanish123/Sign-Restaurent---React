import React from 'react'

function Star({ filled }) {
  return (
    <svg 
      width="18" 
      height="18" 
      viewBox="0 0 24 24" 
      fill={filled ? '#667eea' : 'none'} 
      stroke={filled ? '#667eea' : 'rgba(255,255,255,0.3)'} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.4))' }}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  )
}

function StarRating({ value = 0, showValue = false, size = 'normal' }) {
  const full = Math.floor(Number(value) || 0)
  const stars = Array.from({ length: 5 }, (_, i) => i < full)
  
  const starSize = size === 'large' ? 24 : size === 'small' ? 14 : 18
  
  return (
    <div 
      style={{ 
        display: 'inline-flex', 
        gap: size === 'large' ? 8 : 6, 
        alignItems: 'center' 
      }} 
      aria-label={`Rating ${value} out of 5`}
      className="star-rating"
    >
      {stars.map((filled, idx) => (
        <Star key={idx} filled={filled} />
      ))}
      {showValue && (
        <span style={{ 
          color: 'rgba(255,255,255,0.6)', 
          fontSize: size === 'large' ? 14 : 12,
          marginLeft: 4
        }}>
          ({value})
        </span>
      )}
    </div>
  )
}

export default StarRating


