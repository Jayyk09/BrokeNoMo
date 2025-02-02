import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { CheckCircle, AlertTriangle, Clock } from "lucide-react"

export function Insights() {
  return (
    <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 shadow-sm">
      <CardHeader>
        <CardTitle className="text-gray-100">What can you do better? ✨</CardTitle>
        <CardDescription className="text-gray-300">Lets look at your data and see what you can improve on and whats going well.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          <li className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-400" />
            <div>
              <p className="font-medium text-gray-100">Great Job keeping your investments on track! 🙌</p>
              <p className="text-sm text-gray-300">
                The average American puts aside less than 10% of their income. You're investing at a much heigher rate which will set you up for financial freedom.
              </p>
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <AlertTriangle className="h-5 w-5 text-yellow-400" />
            <div>
              <p className="font-medium text-gray-100">Let's take a step back... ⚡</p>
              <p className="text-sm text-gray-300">
                While you're doing great with your investments, you're spending a lot more than the average American on housing. Perhaps it's time to look into roomates or downsizing.
              </p>
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <Clock className="h-5 w-5 text-blue-400" />
            <div>
              <p className="font-medium text-gray-100"> Now here's the bad news...🛑</p>
              <p className="text-sm text-gray-300">
                You've dedicated inadequate money to your emergency fund. It's important to have a safety net in case of unexpected expenses and you want to have enough accessible money to pay your highest deductible. 
              </p>
            </div>
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}
