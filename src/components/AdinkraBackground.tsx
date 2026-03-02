'use client'
import { motion } from 'motion/react'
import { useState } from 'react'
import React from 'react'

interface AdinkraSymbolProps {
  symbol: string; name: string; meaning: string
  x: string; y: string; size: number; rotation: number; delay: number
}

const symbols: Record<string, React.ReactNode> = {
  sankofa: (
    <g>
      <path d="M 50 20 Q 30 20, 20 35 Q 15 50, 25 60 Q 35 70, 50 65 L 50 50"
        fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="50" cy="35" r="8" fill="currentColor" />
      <path d="M 45 45 L 50 50 L 55 45" fill="none" stroke="currentColor" strokeWidth="3" />
    </g>
  ),
  eban: (
    <g>
      <rect x="25" y="25" width="20" height="50" fill="currentColor" />
      <rect x="55" y="25" width="20" height="50" fill="currentColor" />
      <rect x="30" y="30" width="10" height="40" fill="none" stroke="white" strokeWidth="2" />
      <rect x="60" y="30" width="10" height="40" fill="none" stroke="white" strokeWidth="2" />
    </g>
  ),
  duafe: (
    <g>
      <circle cx="50" cy="60" r="15" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M 40 40 Q 50 35, 60 40" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M 35 45 L 40 40 L 35 35" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M 65 45 L 60 40 L 65 35" fill="none" stroke="currentColor" strokeWidth="3" />
      <rect x="47" y="25" width="6" height="15" fill="currentColor" />
    </g>
  ),
  nyameNti: (
    <g>
      <path d="M 30 70 Q 30 50, 50 50 Q 70 50, 70 70" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M 40 60 Q 40 55, 50 55 Q 60 55, 60 60" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="35" cy="68" r="3" fill="currentColor" />
      <circle cx="50" cy="68" r="3" fill="currentColor" />
      <circle cx="65" cy="68" r="3" fill="currentColor" />
      <path d="M 45 45 L 50 30 L 55 45" fill="none" stroke="currentColor" strokeWidth="3" />
    </g>
  ),
  dwennimmen: (
    <g>
      <path d="M 30 30 Q 25 25, 30 20 Q 35 15, 40 20 Q 45 25, 40 30 Q 35 35, 30 30" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M 60 30 Q 55 25, 60 20 Q 65 15, 70 20 Q 75 25, 70 30 Q 65 35, 60 30" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M 30 70 Q 25 65, 30 60 Q 35 55, 40 60 Q 45 65, 40 70 Q 35 75, 30 70" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M 60 70 Q 55 65, 60 60 Q 65 55, 70 60 Q 75 65, 70 70 Q 65 75, 60 70" fill="none" stroke="currentColor" strokeWidth="3" />
    </g>
  ),
  fawohodie: (
    <g>
      <rect x="35" y="35" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="3" />
      <rect x="42" y="42" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" />
      <line x1="35" y1="35" x2="42" y2="42" stroke="currentColor" strokeWidth="2" />
      <line x1="65" y1="35" x2="58" y2="42" stroke="currentColor" strokeWidth="2" />
      <line x1="35" y1="65" x2="42" y2="58" stroke="currentColor" strokeWidth="2" />
      <line x1="65" y1="65" x2="58" y2="58" stroke="currentColor" strokeWidth="2" />
    </g>
  )
}

const symbolData = [
  { key: 'sankofa', name: 'Sankofa', meaning: 'Return and get it — learn from the past' },
  { key: 'eban', name: 'Eban', meaning: 'Fence — love, safety, and security' },
  { key: 'duafe', name: 'Duafe', meaning: 'Wooden comb — beauty and femininity' },
  { key: 'nyameNti', name: 'Nyame Nti', meaning: "By God's grace" },
  { key: 'dwennimmen', name: 'Dwennimmen', meaning: "Ram's horns — humility and strength" },
  { key: 'fawohodie', name: 'Fawohodie', meaning: 'Independence — freedom and emancipation' }
]

function AdinkraSymbol({ symbol, name, meaning, x, y, size, rotation, delay }: AdinkraSymbolProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.85 : 0.18 }}
        transition={{ duration: 0.3, delay }}
        className="absolute pointer-events-auto cursor-help"
        style={{ left: x, top: y, width: `${size}px`, height: `${size}px`, transform: `rotate(${rotation}deg)`, color: '#C9A227' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
      >
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          {symbols[symbol]}
        </svg>
      </motion.div>

      {isHovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.15 }}
          className="fixed z-50 pointer-events-none"
          style={{ left: `${mousePos.x + 15}px`, top: `${mousePos.y - 10}px`, backgroundColor: 'white', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', borderRadius: '4px', padding: '8px 12px', maxWidth: '220px' }}
        >
          <div className="text-xs mb-1" style={{ fontFamily: 'Courier New, monospace', fontWeight: 700 }}>{name}</div>
          <div className="text-xs text-gray-600" style={{ fontFamily: 'system-ui, sans-serif', fontWeight: 300 }}>{meaning}</div>
        </motion.div>
      )}
    </>
  )
}

export function AdinkraBackground() {
  const positions = [
    { symbol: 'sankofa', x: '8%', y: '15%', size: 180, rotation: -15 },
    { symbol: 'eban', x: '85%', y: '25%', size: 150, rotation: 8 },
    { symbol: 'duafe', x: '15%', y: '45%', size: 160, rotation: 12 },
    { symbol: 'nyameNti', x: '78%', y: '55%', size: 170, rotation: -8 },
    { symbol: 'dwennimmen', x: '10%', y: '75%', size: 140, rotation: 5 },
    { symbol: 'fawohodie', x: '82%', y: '80%', size: 155, rotation: -12 },
    { symbol: 'sankofa', x: '45%', y: '8%', size: 120, rotation: 20 },
    { symbol: 'eban', x: '60%', y: '68%', size: 135, rotation: -18 }
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {positions.map((pos, index) => {
        const info = symbolData.find(s => s.key === pos.symbol)!
        return (
          <AdinkraSymbol key={index} symbol={pos.symbol} name={info.name} meaning={info.meaning}
            x={pos.x} y={pos.y} size={pos.size} rotation={pos.rotation} delay={index * 0.1} />
        )
      })}
    </div>
  )
}
