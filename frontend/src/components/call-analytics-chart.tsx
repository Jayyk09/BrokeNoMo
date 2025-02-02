"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"



const data = [
  {
    name: "Mon", 
    total: 4000,
  },
  {
    name: "Tue",
    total: 3000,
  },
  {
    name: "Wed", 
    total: 2000,
  },
  {
    name: "Thu",
    total: 2780,
  },
  {
    name: "Fri",
    total: 1890,
  },
  {
    name: "Sat",
    total: 2390,
  },

]

export function CallAnalyticsChart() {
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
    
  return (
    <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white">📊 Call Analytics Magic</CardTitle>
        <CardDescription className="text-gray-300">Watch your call volume dance through the week ✨</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis 
              dataKey="name" 
              stroke="#ffffff" 
              fontSize={14}
              fontWeight={600}
              tickLine={false} 
              axisLine={false} 
            />
            <YAxis
              stroke="#ffffff"
              fontSize={14}
              fontWeight={600}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Bar 
              dataKey="total" 
              fill="#6366f1" 
              radius={[6, 6, 0, 0]}
              className="hover:opacity-80 hover:fill-indigo-400 transition-all duration-300 cursor-pointer"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}