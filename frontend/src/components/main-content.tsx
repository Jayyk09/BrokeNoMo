import { ChatTranscript } from "../components/chat-transcript"
import { CallAnalyticsChart } from "../components/call-analytics-chart"
import { Insights } from "../components/insights"
import { ChatList } from "../components/chat-list"
import { ReferencedDocuments } from "../components/referenced-docs"

interface MainContentProps {
  currentChat: any
  calls: any[]
  setCurrentChat: (chat: any) => void
}

export function MainContent({ currentChat, calls, setCurrentChat, userId }: MainContentProps) {
  return (
    <div className="flex flex-1 overflow-hidden">
      <div className="w-1/4 border-r border-gray-700 bg-gray-800/50 backdrop-blur-sm">
        <div className="h-1/2 overflow-auto">
            <ChatList calls={calls} setCurrentChat={setCurrentChat} />
        </div>
        <div className="h-1/2 pt-6 overflow-hidden">
          <ReferencedDocuments currentChat={currentChat} />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-6">
        <div className="grid gap-6 md:grid-cols-2">
          <CallAnalyticsChart userId={userId} />
          <Insights />
        </div>
        <div className="mt-6">
          <ChatTranscript currentChat={currentChat} />
        </div>
      </div>
    </div>
  )
}
