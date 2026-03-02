'use client'
import { motion } from 'motion/react'

interface RetroWindowProps {
  title: string
  children: React.ReactNode
  delay?: number
}

export function RetroWindow({ title, children, delay = 0 }: RetroWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="relative"
      style={{ border: '2px solid #1a202c', boxShadow: '4px 4px 0px rgba(0,0,0,0.2)' }}
    >
      {/* Title bar — striped like old Mac OS */}
      <div
        className="flex items-center justify-between px-3 py-2 border-b-2 border-[#1a202c]"
        style={{ background: 'repeating-linear-gradient(0deg, #ffffff, #ffffff 1px, #f0f0f0 1px, #f0f0f0 2px)' }}
      >
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-3 h-3 border border-[#1a202c]" />
            <div className="w-3 h-3 border border-[#1a202c]" />
          </div>
          <span className="text-xs uppercase tracking-wide"
            style={{ fontFamily: 'Courier New, monospace', fontWeight: 700, color: '#1a202c' }}>
            {title}
          </span>
        </div>
        <div className="w-4 h-4 border-2 border-[#1a202c] flex items-center justify-center">
          <div className="w-2 h-0.5 bg-[#1a202c]" />
        </div>
      </div>

      <div className="bg-white p-6">{children}</div>

      {/* Bottom bar — dashed stripe */}
      <div
        className="h-2 border-t-2 border-[#1a202c]"
        style={{ background: 'repeating-linear-gradient(90deg, #ffffff, #ffffff 2px, #1a202c 2px, #1a202c 3px)' }}
      />
    </motion.div>
  )
}
