'use client'
import { motion } from 'motion/react'
import { useState } from 'react'

interface SketchBoxProps {
  title: string
  description: string
  githubUrl?: string
  liveUrl?: string
  paperUrl?: string
  techStack?: string[]
  highlights?: string[]
  delay?: number
}

const boxShapes = [
  {
    paths: [
      "M 10 8 Q 8 8, 8 10 L 8 90 Q 8 92, 10 92 L 90 92 Q 92 92, 92 90 L 92 10 Q 92 8, 90 8 Z",
      "M 12 10 Q 10 10, 10 12 L 10 88 Q 10 90, 12 90 L 88 90 Q 90 90, 90 88 L 90 12 Q 90 10, 88 10 Z"
    ],
    shadow: "M 4 95 Q 15 93, 30 94 T 60 95 T 90 94"
  },
  {
    paths: [
      "M 9 12 Q 7 10, 8 8 L 91 6 Q 93 6, 94 8 L 95 90 Q 95 93, 92 93 L 10 94 Q 7 94, 7 91 Z"
    ],
    shadow: "M 5 96 Q 20 95, 40 96 T 80 95 T 95 96"
  },
  {
    paths: ["M 8 8 L 92 9 L 93 91 L 9 92 Z"],
    shadow: "M 5 95 L 8 95 L 8 93 L 11 93 L 11 95 L 14 95 L 14 93 L 17 93 L 17 95 L 20 95"
  },
  {
    paths: [
      "M 11 7 Q 8 7, 7 10 L 6 88 Q 6 91, 9 92 L 89 94 Q 92 94, 93 91 L 94 11 Q 94 8, 91 7 Z"
    ],
    shadow: "M 6 96 Q 25 94, 50 95 T 94 96"
  },
  {
    paths: [
      "M 12 6 Q 6 6, 6 12 L 6 88 Q 6 94, 12 94 L 88 94 Q 94 94, 94 88 L 94 12 Q 94 6, 88 6 Z",
      "M 14 8 Q 8 8, 8 14 L 8 86 Q 8 92, 14 92 L 86 92 Q 92 92, 92 86 L 92 14 Q 92 8, 86 8 Z"
    ],
    shadow: null
  },
  {
    paths: [
      "M 10 9 Q 7 9, 7 11 L 7 89 Q 7 92, 10 92 L 89 93 Q 93 93, 93 90 L 93 11 Q 93 8, 90 8 Z"
    ],
    shadow: "M 7 95 Q 20 94, 40 95 T 80 94 T 93 95"
  }
]

// Deterministic shape per card — avoids SSR/client hydration mismatch
function getShapeIndex(title: string): number {
  let hash = 0
  for (let i = 0; i < title.length; i++) {
    hash = ((hash << 5) - hash + title.charCodeAt(i)) | 0
  }
  return Math.abs(hash) % boxShapes.length
}

export function SketchBox({ title, description, githubUrl, liveUrl, paperUrl, techStack, highlights, delay = 0 }: SketchBoxProps) {
  const [isHovered, setIsHovered] = useState(false)
  const boxStyle = boxShapes[getShapeIndex(title)]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5, delay }}
      className="relative bg-white/40"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100" preserveAspectRatio="none">

        {boxStyle.paths.map((path, i) => (
          <motion.path key={i} d={path}
            vectorEffect="non-scaling-stroke" fill="none" stroke="#1a202c"
            strokeWidth={i === 0 ? 2 : 1.5}
            opacity={isHovered ? 1 : (i === 0 ? 0.9 : 0.5)}
            transition={{ duration: 0.2 }} />
        ))}

        {boxStyle.shadow && (
          <path d={boxStyle.shadow} vectorEffect="non-scaling-stroke"
            fill="none" stroke="#1a202c" strokeWidth="1.5" opacity="0.2" />
        )}

        {/* Green corner bracket */}
        <path d="M 8 8 L 15 8 M 8 8 L 8 15"
          vectorEffect="non-scaling-stroke" stroke="#a8d96e"
          strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      </svg>

      <div className="p-9 relative z-10">
        {/* Title */}
        <div className="flex flex-col gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400 font-mono">▸</span>
            <h3 className="text-base leading-tight"
              style={{ fontFamily: 'Courier New, monospace', fontWeight: 700, letterSpacing: '-0.01em', color: '#1a202c' }}>
              {title}
            </h3>
          </div>
          <div className="flex items-center gap-2 pl-4 flex-wrap">
            {githubUrl ? (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-bold transition-all"
                style={{
                  border: '1.5px solid #1a202c',
                  color: '#1a202c',
                  backgroundColor: 'transparent',
                  fontFamily: 'Courier New, monospace',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#1a202c'
                  ;(e.currentTarget as HTMLAnchorElement).style.color = '#f5f5f0'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent'
                  ;(e.currentTarget as HTMLAnchorElement).style.color = '#1a202c'
                }}
              >
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M 7 1 C 3.7 1 1 3.7 1 7 C 1 9.6 2.7 11.9 5.1 12.7 C 5.4 12.8 5.5 12.6 5.5 12.4 L 5.5 11.3 C 3.9 11.6 3.5 10.5 3.5 10.5 C 3.2 9.8 2.8 9.6 2.8 9.6 C 2.2 9.2 2.8 9.2 2.8 9.2 C 3.4 9.3 3.8 9.8 3.8 9.8 C 4.4 10.8 5.4 10.5 5.7 10.3 C 5.8 9.9 5.9 9.6 6.1 9.5 C 4.4 9.3 2.6 8.6 2.6 5.7 C 2.6 4.9 2.9 4.3 3.3 3.8 C 3.3 3.6 3 2.9 3.5 2 C 3.5 2 4.1 1.8 5.5 2.7 C 6.1 2.5 6.8 2.4 7.5 2.4 C 8.2 2.4 8.9 2.5 9.5 2.7 C 10.9 1.8 11.5 2 11.5 2 C 12 2.9 11.7 3.6 11.7 3.8 C 12.1 4.3 12.4 4.9 12.4 5.7 C 12.4 8.6 10.6 9.3 8.9 9.5 C 9.1 9.7 9.3 10.1 9.3 10.7 L 9.3 12.4 C 9.3 12.6 9.4 12.8 9.7 12.7 C 12.1 11.9 13.8 9.6 13.8 7 C 14 3.7 11.3 1 7 1 Z" fill="currentColor"/>
                </svg>
                github ↗
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-bold"
                style={{
                  border: '1.5px dashed rgba(26,32,44,0.4)',
                  color: 'rgba(26,32,44,0.55)',
                  backgroundColor: 'transparent',
                  fontFamily: 'Courier New, monospace',
                }}
                title="Source not public"
              >
                <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                  <rect x="3" y="7" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.4" fill="none" />
                  <path d="M 5 7 L 5 5 Q 5 3, 7 3 Q 9 3, 9 5 L 9 7" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
                </svg>
                private
              </span>
            )}
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-bold transition-all"
                style={{
                  border: '1.5px solid #a8d96e',
                  color: '#1a202c',
                  backgroundColor: 'rgba(168,217,110,0.2)',
                  fontFamily: 'Courier New, monospace',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#a8d96e'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(168,217,110,0.2)'
                }}
              >
                live ↗
              </a>
            )}
            {paperUrl && (
              <a href={paperUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-bold transition-all"
                style={{
                  border: '1.5px solid #f6c90e',
                  color: '#1a202c',
                  backgroundColor: 'rgba(246,201,14,0.2)',
                  fontFamily: 'Courier New, monospace',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#f6c90e'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(246,201,14,0.2)'
                }}
              >
                paper ↗
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-4 text-sm leading-relaxed pl-4"
          style={{ fontFamily: 'Georgia, serif' }}>
          {description}
        </p>

        {/* Tech stack */}
        {techStack && techStack.length > 0 && (
          <div className="pl-4 mb-4">
            <p className="text-xs text-gray-400 font-mono mb-2 uppercase tracking-wider">stack</p>
            <div className="flex flex-wrap gap-1.5">
              {techStack.map((tech, i) => (
                <span key={i} className="text-xs font-mono px-2 py-0.5"
                  style={{ border: '1px solid rgba(26,32,44,0.25)', color: '#1a202c', backgroundColor: 'rgba(168,217,110,0.1)' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Highlights */}
        {highlights && highlights.length > 0 && (
          <div className="pl-4 mb-4">
            <p className="text-xs text-gray-400 font-mono mb-2 uppercase tracking-wider">highlights</p>
            <ul className="space-y-1">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-gray-600 leading-snug"
                  style={{ fontFamily: 'Georgia, serif' }}>
                  <span className="text-[#a8d96e] font-mono mt-0.5 flex-shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>


      {/* Margin note checkbox */}
      <div className="absolute -left-8 top-4 text-xs text-gray-400 font-mono"
        style={{ transform: 'rotate(-5deg)' }}>
        [ ]
      </div>
    </motion.div>
  )
}
