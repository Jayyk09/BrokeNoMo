"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

export const TextGenerateEffect = ({ words }: { words: string }) => {
  const controls = useAnimation()

  const wordsArray = words.split(" ")

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }))
  }, [controls])

  return (
    <div className="text-center">
      {wordsArray.map((word, idx) => (
        <motion.span
          key={`${word}-${idx}`}
          className="text-white text-lg md:text-xl inline-block mr-1"
          custom={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}