'use client'
import { motion } from 'motion/react'

interface ScribbleUnderlineProps {
  children: React.ReactNode
  delay?: number
  icon?: React.ReactNode
}

export function ScribbleUnderline({ children, delay = 0, icon }: ScribbleUnderlineProps) {
  const scribblePaths = [
    "M 0 5 Q 10 2, 20 5 T 40 5 T 60 6 T 80 4 T 100 6 T 120 5 T 140 6",
    "M 0 7 Q 10 9, 20 6 T 40 7 T 60 8 T 80 6 T 100 8 T 120 7 T 140 8",
    "M 0 6 Q 10 4, 20 7 T 40 6 T 60 7 T 80 5 T 100 7 T 120 6 T 140 7"
  ]

  return (
    <div className="relative inline-block mb-10">
      <div className="flex items-center gap-3">
        {/* Sketchy bracket */}
        <svg width="12" height="40" className="opacity-40">
          <path d="M 8 2 Q 2 2, 2 8 L 2 32 Q 2 38, 8 38"
            stroke="#1a202c" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>

        {icon && <div className="flex-shrink-0">{icon}</div>}

        <h2 className="text-3xl relative z-10"
          style={{ fontFamily: 'Courier New, monospace', fontWeight: 700, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#1a202c' }}>
          {children}
        </h2>
      </div>

      {/* Three scribble underlines */}
      <svg className="absolute -bottom-2 left-12 h-4 pointer-events-none"
        style={{ width: 'calc(100% - 48px)' }} preserveAspectRatio="none">
        {scribblePaths.map((path, i) => (
          <motion.path key={i} d={path} fill="none" stroke="#a8d96e"
            strokeWidth={i === 0 ? 4 : 2} strokeLinecap="round"
            opacity={i === 0 ? 0.7 : 0.3}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: i === 0 ? 0.7 : 0.3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: delay + i * 0.1, ease: 'easeInOut' }} />
        ))}
      </svg>

      {/* Arrow pointing to section from the left */}
      <motion.svg width="40" height="40" className="absolute -left-10 top-1 opacity-30"
        initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 0.3, x: 0 }}
        viewport={{ once: true }} transition={{ delay: delay + 0.3 }}>
        <path d="M 35 20 Q 25 18, 15 20 T 5 22"
          stroke="#1a202c" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M 8 18 L 3 22 L 8 26"
          stroke="#1a202c" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </motion.svg>
    </div>
  )
}
