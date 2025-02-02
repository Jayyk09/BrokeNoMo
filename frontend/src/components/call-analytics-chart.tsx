"use client"
import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"




interface Transaction {
    month: string
    category: string
    amount: string
    description: string
  }

  interface UserTransaction {
    user_id: string
    transactions: Transaction[]
  }

  interface graphData {
    name: string
    total: number
  }

export function CallAnalyticsChart({ userId }: { userId: string }) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        fetch("https://api.jsonbin.io/v3/b/679ec0fdad19ca34f8f8491d")
          .then((res) => res.json())
          .then((data) => {
            const users = data.record.users || [];
            const user = users.find((user: any) => user.user_id === userId);
            if (user) {
                setTransactions(user.transactions);
            }
          })
          .catch((err) => console.error("Error loading transactions:", err));
    }, [userId]);

    let totalCost = 0;
    let tHouse = 0, tInvestment = 0, tInsurance = 0, tEmergency = 0, tPersonal = 0, tFood = 0;
    const graphData: graphData[] = [
        { name: "Housing", total: 0 },
        { name: "Investment", total: 0 },
        { name: "Insurance", total: 0 },
        { name: "Emergency", total: 0 },
        { name: "Personal", total: 0 },
        { name: "Food", total: 0 },
    ];

    transactions.forEach((transaction: Transaction) => {
        if (transaction.category === "Housing") {
            tHouse += parseInt(transaction.amount, 10);
            totalCost += parseInt(transaction.amount, 10);
        }
        if (transaction.category === "Investment") {
            tInvestment += parseInt(transaction.amount, 10);
            totalCost += parseInt(transaction.amount, 10);
        }
        if (transaction.category === "Insurance") {
            tInsurance += parseInt(transaction.amount, 10);
            totalCost += parseInt(transaction.amount, 10);
        }
        if (transaction.category === "Emergency") {
            tEmergency += parseInt(transaction.amount, 10);
            totalCost += parseInt(transaction.amount, 10);
        }
        if (transaction.category === "Personal") {
            tPersonal += parseInt(transaction.amount, 10);
            totalCost += parseInt(transaction.amount, 10);
        }
        if (transaction.category === "Food") {
            tFood += parseInt(transaction.amount, 10);
            totalCost += parseInt(transaction.amount, 10);
        }
    });

    graphData[0].total = tHouse;
    graphData[1].total = tInvestment;
    graphData[2].total = tInsurance;
    graphData[3].total = tEmergency;
    graphData[4].total = tPersonal;
    graphData[5].total = tFood;


  return (
    <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white">📊 Your Average Monthly Spending</CardTitle>
        <CardDescription className="text-gray-300">Shocking isn't it? 😱</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={graphData}>
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