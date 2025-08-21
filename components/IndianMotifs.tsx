import type React from "react"
export function PaisleyMotif({ className = "", size = 24 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C8.5 2 6 4.5 6 8c0 2.5 1.5 4.5 3 6 1 1 2 2 2 4 0 1.5-1 2.5-2 3-2 1-4 2-4 5 0 2.5 2.5 5 6 5s6-2.5 6-5c0-3-2-4-4-5-1-.5-2-1.5-2-3 0-2 1-3 2-4 1.5-1.5 3-3.5 3-6 0-3.5-2.5-6-6-6z" />
    </svg>
  )
}

export function LotusMotif({ className = "", size = 24 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6l2-6z" />
      <path d="M12 8c-2 0-4 1-4 3s2 3 4 3 4-1 4-3-2-3-4-3z" opacity="0.7" />
    </svg>
  )
}

export function MandalaMotif({ className = "", size = 48 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="currentColor" className={className}>
      <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <circle cx="24" cy="24" r="15" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <circle cx="24" cy="24" r="10" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <circle cx="24" cy="24" r="5" fill="currentColor" opacity="0.9" />
      <g opacity="0.6">
        <path d="M24 4l2 8-2 8-2-8 2-8z" />
        <path d="M44 24l-8 2-8-2 8-2 8 2z" />
        <path d="M24 44l-2-8 2-8 2 8-2 8z" />
        <path d="M4 24l8-2 8 2-8 2-8-2z" />
      </g>
    </svg>
  )
}

export function MughalArch({ className = "", children }: { className?: string; children?: React.ReactNode }) {
  return (
    <div className={`relative ${className}`}>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
        <path
          d="M0 100 L0 30 Q0 0 30 0 L70 0 Q100 0 100 20 Q100 0 130 0 L170 0 Q200 0 200 30 L200 100 Z"
          fill="currentColor"
          opacity="0.1"
        />
        <path
          d="M0 100 L0 30 Q0 0 30 0 L70 0 Q100 0 100 20 Q100 0 130 0 L170 0 Q200 0 200 30 L200 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.3"
        />
      </svg>
      <div className="relative z-10 p-8">{children}</div>
    </div>
  )
}
