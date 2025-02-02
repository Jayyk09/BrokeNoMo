"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import cn from "../../lib/utils"

export const Sparkles = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) => {
  const [sparkles, setSparkles] = useState<Array<{ id: string; x: number; y: number; size: number }>>([])
  const ref = useRef<HTMLDivElement>(null)
  const [rect, setRect] = useState<DOMRect | null>(null)

  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect())
    }
  }, [])

  useEffect(() => {
    if (!rect) return

    const generateSparkle = () => {
      return {
        id: Math.random().toString(36).slice(2),
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        size: Math.random() * 2 + 1,
      }
    }

    const interval = setInterval(() => {
      setSparkles((currentSparkles) => [...currentSparkles.slice(-5), generateSparkle()])
    }, 500)

    return () => clearInterval(interval)
  }, [rect])

  return (
    <div className={cn("relative inline-block", className)} ref={ref} {...props}>
      {children}
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.span
            key={sparkle.id}
            className="absolute inline-block bg-white rounded-full pointer-events-none"
            style={{
              left: sparkle.x,
              top: sparkle.y,
              width: sparkle.size,
              height: sparkle.size,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}

