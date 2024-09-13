import React from 'react'

export default function CircularObject() {
  return (
    <div style={{
        width: '400px',
        height: '400px',
        backgroundColor: 'yellow',
        borderRadius: '30%',
        position: 'absolute',
        top: '-200px',
        left: '-200px',
        transform: 'rotate(60deg)',
        background: 'linear-gradient(to right, #12c2e9, #c471ed, #f64f59)',
    }} />
  )
}
