import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { CheckCircle, AlertTriangle, Clock } from "lucide-react"

export function Insights() {
  return (
    <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 shadow-sm">
      <CardHeader>
        <CardTitle className="text-gray-100">The Inside Scoop ✨</CardTitle>
        <CardDescription className="text-gray-300">Here's what's cooking in your customer service kitchen</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          <li className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-400" />
            <div>
              <p className="font-medium text-gray-100">High Fives All Around! 🙌</p>
              <p className="text-sm text-gray-300">
                Your team's bringing the sunshine! They're keeping conversations positive and customers happy.
              </p>
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <AlertTriangle className="h-5 w-5 text-yellow-400" />
            <div>
              <p className="font-medium text-gray-100">Time for a Speed Boost! ⚡</p>
              <p className="text-sm text-gray-300">
                We're running a bit slower than a caffeinated cheetah. Let's streamline that workflow!
              </p>
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <Clock className="h-5 w-5 text-blue-400" />
            <div>
              <p className="font-medium text-gray-100">The Rush Hour Show 🎭</p>
              <p className="text-sm text-gray-300">
                Looks like everyone loves calling between 2-4 PM. Time to rally the troops for the afternoon party!
              </p>
            </div>
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}
