'use client'
import { motion } from 'motion/react'

// Kente-inspired tile: fine thread bands top/bottom + central diamond motif
// Large tile (160×110) so it reads as fabric, not wallpaper grid

export function KentePattern() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.svg
        initial={{ opacity: 0 }} animate={{ opacity: 0.06 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      >
        <defs>
          {/*
            Tile: 160 × 110
            ─ y   0–18  : fine thread band (horizontal lines)
            ─ y  18–92  : open field with centred diamond outline
            ─ y  92–110 : fine thread band (horizontal lines)
            ─ x borders : vertical strip seam lines
          */}
          <pattern id="kente-tile" width="160" height="110" patternUnits="userSpaceOnUse">

            {/* ── TOP THREAD BAND (y: 0–18) ── */}
            <line x1="0" y1="0"  x2="160" y2="0"  stroke="#1a202c" strokeWidth="2"/>
            <line x1="0" y1="18" x2="160" y2="18" stroke="#1a202c" strokeWidth="2"/>

            {/* ── CENTRAL DIAMOND FIELD (y: 18–92) ── */}
            {/* Large diamond outline centred at (80, 55) */}
            <path d="M 80 22 L 150 55 L 80 88 L 10 55 Z"
              fill="none" stroke="#1a202c" strokeWidth="1.5"/>
            {/* Inner diamond (smaller, same centre) */}
            <path d="M 80 34 L 120 55 L 80 76 L 40 55 Z"
              fill="none" stroke="#1a202c" strokeWidth="1"/>
            {/* Corner accent marks — four small notches at diamond tips */}
            <line x1="80" y1="22" x2="80" y2="28" stroke="#1a202c" strokeWidth="1.5"/>
            <line x1="80" y1="82" x2="80" y2="88" stroke="#1a202c" strokeWidth="1.5"/>
            <line x1="10"  y1="55" x2="16"  y2="55" stroke="#1a202c" strokeWidth="1.5"/>
            <line x1="144" y1="55" x2="150" y2="55" stroke="#1a202c" strokeWidth="1.5"/>

            {/* ── BOTTOM THREAD BAND (y: 92–110) ── */}
            <line x1="0" y1="92"  x2="160" y2="92"  stroke="#1a202c" strokeWidth="2"/>
            <line x1="0" y1="110" x2="160" y2="110" stroke="#1a202c" strokeWidth="2"/>

            {/* ── VERTICAL STRIP SEAM LINES ── */}
            <line x1="0"   y1="0" x2="0"   y2="110" stroke="#1a202c" strokeWidth="2"/>
            <line x1="160" y1="0" x2="160" y2="110" stroke="#1a202c" strokeWidth="2"/>
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#kente-tile)"/>
      </motion.svg>
    </div>
  )
}
