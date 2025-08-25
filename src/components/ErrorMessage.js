import React from 'react'

function ErrorMessage({ message }) {
  return (
    <div style={{
      background: 'rgba(239, 68, 68, 0.12)',
      color: '#fecaca',
      border: '1px solid rgba(239, 68, 68, 0.35)',
      padding: '12px 16px',
      borderRadius: 12
    }}>
      {message || 'Something went wrong'}
    </div>
  )
}

export default ErrorMessage


