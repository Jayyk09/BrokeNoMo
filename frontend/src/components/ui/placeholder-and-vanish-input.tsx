"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface PlaceholdersAndVanishInputProps {
  placeholders: string[]
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: React.FormEvent) => void
}

export const PlaceholdersAndVanishInput: React.FC<PlaceholdersAndVanishInputProps> = ({
  placeholders,
  onChange,
  onSubmit,
}) => {
  const [placeholder, setPlaceholder] = useState(placeholders[0])
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPlaceholder((currentPlaceholder) => {
        const currentIndex = placeholders.indexOf(currentPlaceholder)
        return placeholders[(currentIndex + 1) % placeholders.length]
      })
    }, 3000)

    return () => clearInterval(intervalId)
  }, [placeholders])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    onChange(e)
  }

  return (
    <form onSubmit={onSubmit} className="relative">
      <AnimatePresence>
        {!inputValue && (
          <motion.span
            className="absolute -translate-x-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            key={placeholder}
          >
            {placeholder}
          </motion.span>
        )}
      </AnimatePresence>
      <input
        type="text"
        className="w-full text-center px-3 py-2 bg-transparent border-b-2 border-gray-300 focus:border-purple-500 outline-none text-white"
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  )
}

export default PlaceholdersAndVanishInput