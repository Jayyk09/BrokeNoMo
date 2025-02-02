import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { CheckCircle, AlertTriangle, Clock } from "lucide-react"

export function Insights() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Insights</CardTitle>
        <CardDescription>What can be done better</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          <li className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <div>
              <p className="font-medium">Positive customer interactions</p>
              <p className="text-sm text-gray-500">
                Your team has maintained a consistently positive tone in customer interactions.
              </p>
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <AlertTriangle className="h-5 w-5 text-yellow-500" />
            <div>
              <p className="font-medium">Response time needs improvement</p>
              <p className="text-sm text-gray-500">
                Average response time is higher than the target. Consider optimizing your workflow.
              </p>
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <Clock className="h-5 w-5 text-blue-500" />
            <div>
              <p className="font-medium">Peak hours identified</p>
              <p className="text-sm text-gray-500">
                Call volume peaks between 2-4 PM. Consider adjusting staff schedules accordingly.
              </p>
            </div>
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}

