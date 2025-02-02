"use client"

import { useState, useEffect } from "react"
import { Boxes } from "../components/ui/background-boxes"
import { TextGenerateEffect } from "../components/ui/text-generate-effect"
import { PlaceholdersAndVanishInput } from "../components/ui/placeholder-and-vanish-input"
import { motion } from "framer-motion"
import { Button } from "../components/ui/button"
import { Sparkles } from "../components/ui/sparkles"

interface LoginProps {
  onLogin: (userId: string) => void
}

export default function Login({ onLogin }: LoginProps) {
  const [userId, setUserId] = useState("")
  const [validUserIds, setValidUserIds] = useState<string[]>([])

  const placeholders = ["Enter your phone number", "Please input your phone number", "Type in your phone number"]

  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/679ec0fdad19ca34f8f8491d")
      .then((res) => res.json())
      .then((data) => {
        const users = data.record.users || []
        setValidUserIds(users.map((user: { user_id: string }) => user.user_id))
      })
      .catch((err) => console.error("Error loading users:", err))
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!userId.trim()) {
      alert("Please enter a valid User ID.")
      return
    }

    if (validUserIds.includes(userId)) {
      onLogin(userId)
      setUserId(userId)
    } else {
      alert("Invalid User ID. Please try again.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value)
  }

  const intro_words = "Enter your credentials to access the next generation of our platform."

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes className="absolute inset-0" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 w-full max-w-md px-4"
      >
        <Sparkles id="logo-sparkle" className="mb-8">
          <h1 className="text-6xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300">
            BrokeNoMo
          </h1>
        </Sparkles>

        <div className="mb-8">
          <TextGenerateEffect words={intro_words} />
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-lg">
          <PlaceholdersAndVanishInput placeholders={placeholders} onChange={handleChange} onSubmit={handleSubmit} />
          <Button className="w-full mt-3" onClick={handleSubmit}>
            Log In
          </Button>
        </div>

        <p className="text-gray-400 text-sm mt-6 text-center">
          By continuing, you agree to our{" "}
          <a href="#" className="text-purple-400 hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-purple-400 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </motion.div>
    </div>
  )
}
