"use client"

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
  {
    name: "Sun",
    total: 3490,
  },
]

export function CallAnalyticsChart() {
  return (
    <Card className="bg-gray-800/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white">Call Analytics</CardTitle>
        <CardDescription className="text-gray-300">Your call volume over the past week</CardDescription>
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
              className="hover:opacity-80 transition-opacity"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}