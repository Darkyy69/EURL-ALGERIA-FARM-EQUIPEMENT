'use client'

import { useEffect, useState } from 'react'
import { Loader2 } from 'lucide-react'

export default function LoadingScreen() {
  const [dots, setDots] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.')
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-8">
        {/* Logo Container */}
        <div className="w-32 h-32 relative animate-pulse">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              className="w-24 h-24 text-[#2FB135]"
              fill="currentColor"
            >
              <path d="M10.5 2.5c.2-1.8 3.1-2.3 3.9-.7.8 1.6 1.3 3.5 1.6 5.2 3.3.3 6.6.9 9.8 1.8-1.5 2.5-3.1 5-4.7 7.4-1.6 2.5-3.3 4.9-5.1 7.2-.2.3-.6.3-.9.1-1.6-1.6-3.2-3.3-4.7-5-1.5-1.7-2.9-3.5-4.2-5.3 1.2-1.5 2.4-2.8 3.7-4.2 1.3-1.3 2.6-2.6 4-3.8.5 1.3.9 2.7 1.2 4.1-1.6 1.3-3 2.8-4.4 4.3.9 1.2 1.9 2.4 2.9 3.5 1 1.1 2 2.2 3.1 3.3 1.3-1.9 2.6-3.7 3.8-5.6 1.2-1.9 2.3-3.8 3.4-5.7-2.5-.7-5.1-1.2-7.7-1.4-.3-1.7-.7-3.4-1.2-5.1-.2-.5-.3-1-.4-1.4-.1-.4-.2-.7-.1-1.1z" />
            </svg>
          </div>
        </div>

        {/* Loading Text */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl font-bold text-[#2FB135]">
            Algeria Farm Equipment
          </h1>
          <div className="flex items-center gap-2">
            <Loader2 className="w-5 h-5 text-[#2FB135] animate-spin" />
            <p className="text-black text-lg font-medium min-w-[90px]">
              Loading{dots}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

