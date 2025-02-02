"use client"
import { useEffect, useState } from "react"
import { Spotlight } from "../components/ui/spotlight-new"
import { Header } from "../components/header"
import { MainContent } from "../components/main-content"

interface DashboardProps {
  userId: string
}

export default function Dashboard({ userId }: DashboardProps) {
  const [calls, setCalls] = useState<any[]>([])
  const [currentChat, setCurrentChat] = useState<any>(null)

  useEffect(() => {
    const fetchCalls = async () => {
      try {
        const response = await fetch(`http://localhost:8080/calls/${userId}`)
        const data = await response.json()
        setCalls(data)
        setCurrentChat(data[0] || null)
      } catch (error) {
        console.error("Error fetching calls:", error)
      }
    }

    fetchCalls()
  }, [userId])

  return (
    <div className="flex h-screen flex-col bg-gradient-to-br from-gray-900 to-gray-800">
      <Spotlight className="left-0 top-0 md:-left-20 md:-top-20" fill="blue" />

      <Header userId={userId} />

      {/* Main Content Section */}
      <MainContent currentChat={currentChat} calls={calls} setCurrentChat={setCurrentChat} />
    </div>
  )
}