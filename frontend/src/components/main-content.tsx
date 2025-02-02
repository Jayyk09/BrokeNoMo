import { ChatTranscript } from "../components/chat-transcript"
import { CallAnalyticsChart } from "../components/call-analytics-chart"
import { Insights } from "../components/insights"

interface MainContentProps {
  currentChat: any
}

export function MainContent({ currentChat }: MainContentProps) {
  return (
    <div className="flex flex-1 overflow-hidden">
      <div className="flex-1 overflow-y-auto p-6">
        <div className="grid gap-6 md:grid-cols-2">
          <CallAnalyticsChart />
          <Insights />
        </div>
        <div className="mt-6">
          <ChatTranscript currentChat={currentChat} />
        </div>
      </div>
    </div>
  )
}

