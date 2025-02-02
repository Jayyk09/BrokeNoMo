import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { ScrollArea } from "../components/ui/scroll-area"
import { Skeleton } from "../components/ui/skeleton"

interface ChatTranscriptProps {
  currentChat: any
}

export function ChatTranscript({ currentChat }: ChatTranscriptProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-100">💬 Chat Magic Unfolds</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] pr-4">
            {!currentChat ? (
              <div className="space-y-4">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ) : (
              <div className="space-y-4">
                {currentChat.transcript_object?.map((transcript: { role: string; content: string }, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 ${
                      transcript.role === "user" 
                        ? "bg-blue-600/90 text-white hover:bg-blue-600" 
                        : "bg-gray-700/90 text-gray-200 hover:bg-gray-700"
                    }`}
                  >
                    <p className="mb-1 font-semibold capitalize text-gray-300">
                      {transcript.role === "user" ? "🧑 You" : "🤖 Assistant"}:
                    </p>
                    <p>{transcript.content}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </ScrollArea>
        </CardContent>
      </Card>
    </motion.div>
  )
}
