import { motion } from "framer-motion";
import { Spotlight } from "../components/ui/spotlight-new";

interface DashboardProps {
  userId: string;
}
import { useEffect, useState } from "react";

export default function Dashboard({ userId }: DashboardProps) {


  const [calls, setCalls] = useState<any[]>([]);
  const [currentChat, setCurrentChat] = useState<null>(null);

  useEffect(() => {
    const fetchCalls = async () => {
      try {
        const response = await fetch(`http://localhost:8080/calls/${userId}`);
        const data = await response.json();
        console.log(data);
        setCalls(data);
        setCurrentChat(data[0] || null);
        console.log(currentChat)
      } catch (error) {
        console.error("Error fetching calls:", error);
      }
    };

    fetchCalls();
  }, [userId]);

  return (
    <div className="h-screen w-full flex flex-row bg-black/[0.96] antialiased relative overflow-hidden">
      <Spotlight />
      <div className="h-screen w-full flex bg-gray-900 text-white">
      {/* Left Sidebar */}
      <aside className="w-1/4 bg-gray-800 flex flex-col">
        <header className="p-4 border-b border-gray-700">
          <h2 className="text-lg font-bold">Previous Messages</h2>
        </header>
        <div className="flex-1 overflow-y-auto">
          {calls.map((call, index) => (
            <div
              key={index}
              className="p-3 border-b border-gray-700 cursor-pointer hover:bg-gray-700"
              onClick={() => setCurrentChat(call)}
            >
              <p className="text-sm font-medium">{call.from_number}</p>
              <p className="text-xs text-gray-400">To: {call.to_number}</p>
            </div>
          ))}
        </div>
      </aside>

      {/* Center Content */}
      <main className="flex-1 flex items-center justify-center relative">
        <Spotlight />
        {!currentChat && <p className="text-gray-400">Select a conversation to view details.</p>}
      </main>

      {/* Right Sidebar */}
      <aside className="w-1/3 bg-gray-800 flex flex-col">
        <header className="p-4 border-b border-gray-700 flex items-center justify-between">
          <h2 className="text-lg font-bold">Chat Transcript</h2>
          <button className="text-sm text-blue-400">Hide</button>
        </header>
        <div className="flex-1 overflow-y-auto p-4">
          {currentChat ? (
            currentChat.transcript_object.map((transcript, index) => (
              <div key={index} className="mb-4">
                <p>
                  <span className="font-bold capitalize">{transcript.role}:</span> {transcript.content}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No transcript available.</p>
          )}
        </div>
      </aside>
    </div>
    </div>
  );
}
