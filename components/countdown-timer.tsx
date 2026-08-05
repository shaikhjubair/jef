'use client'

import { useState, useEffect } from 'react'

interface CountdownTimerProps {
  targetDate: string
  onExpire?: () => void
  compact?: boolean
}

export function CountdownTimer({ targetDate, onExpire, compact = false }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null)
  const [expired, setExpired] = useState(false)

  useEffect(() => {
    const end = new Date(targetDate).getTime()

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const diff = end - now

      if (diff <= 0) {
        if (!expired) {
          setExpired(true)
          onExpire?.()
        }
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      }

      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      }
    }

    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate, expired, onExpire])

  if (!timeLeft) return null

  if (expired) {
    return <span className="font-bold text-red-400 text-sm">Time Expired</span>
  }

  if (compact) {
    return (
      <span className="font-mono tabular-nums tracking-tight">
        {timeLeft.days}d {timeLeft.hours.toString().padStart(2, '0')}h {timeLeft.minutes.toString().padStart(2, '0')}m {timeLeft.seconds.toString().padStart(2, '0')}s
      </span>
    )
  }

  return (
    <div className="flex items-center gap-3">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <div className="flex h-10 min-w-10 items-center justify-center rounded-lg bg-black/20 backdrop-blur-md border border-white/10 px-2 shadow-inner">
            <span className="font-mono text-lg font-bold tabular-nums text-white">
              {value.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="mt-1 text-[10px] uppercase tracking-widest text-white/50">
            {unit}
          </span>
        </div>
      ))}
    </div>
  )
}
