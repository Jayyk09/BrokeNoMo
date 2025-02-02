import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <div className="h-screen w-full flex flex-row bg-black/[0.96] antialiased relative overflow-hidden">
      <aside className="w-1/4 bg-neutral-900/50 p-4 border-r border-gray-800 backdrop-blur-md">
        <h2 className="text-lg text-white font-semibold mb-4">Previous Messages</h2>
        <ul className="space-y-2 text-neutral-400">
          <li>+1-408-585-8267</li>
          <li>+1-917-828-6465</li>
          <li>+1-972-555-0789</li>
          <li>+1-817-555-0321</li>
          <li>+1-214-555-0654</li>
        </ul>
      </aside>
      
      <main className="flex-1 flex flex-col p-6">
        <section className="bg-neutral-900/50 rounded-2xl p-6 shadow-lg mb-4 backdrop-blur-md">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
            Spotlight <br /> That Stands Out
          </h1>
        </section>
        
        <section className="bg-neutral-900/50 rounded-2xl p-6 shadow-lg flex-1 backdrop-blur-md">
          <p className="text-lg text-neutral-300">
            A subtle yet effective spotlight effect, avoiding overuse while maintaining elegance.
          </p>
        </section>
      </main>
      
      <aside className="w-1/4 bg-neutral-900/50 p-4 border-l border-gray-800 backdrop-blur-md">
        <h2 className="text-lg text-white font-semibold mb-4">Chat Transcript</h2>
        <div className="text-neutral-300 text-sm space-y-2">
          <p><strong>Agent:</strong> Hey! I can help with checking your account balance, transferring funds, and loan applications.</p>
          <p><strong>User:</strong> Cool. Could</p>
          <p><strong>Agent:</strong> So, what do you need?</p>
          <p><strong>User:</strong> I do my account balance, please?</p>
        </div>
      </aside>
    </div>
  );
}
