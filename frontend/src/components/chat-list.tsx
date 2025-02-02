import { motion } from "framer-motion"
import { ScrollArea } from "./ui/scroll-area"

interface ChatListProps {
  calls: any[]
  setCurrentChat: (chat: any) => void
}

export function ChatList({ calls, setCurrentChat }: ChatListProps) {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="flex w-1/4 flex-col border-r border-gray-700 bg-gray-800/50 backdrop-blur-sm"
    >
      <header className="border-b border-gray-700 p-4">
        <h2 className="text-lg font-bold text-white">Previous Messages</h2>
      </header>
      <ScrollArea className="flex-1">
        {calls.map((call, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="cursor-pointer border-b border-gray-700 p-3 transition-colors hover:bg-gray-700"
            onClick={() => setCurrentChat(call)}
          >
            <p className="text-center text-sm font-medium text-white">{call.call_id}</p>
          </motion.div>
        ))}
      </ScrollArea>
    </motion.aside>
  )
}