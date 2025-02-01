import React from 'react';
import BarChart from "./components/BarChart.tsx";
import { BarChart3, MessageSquare, User, TrendingUp, DollarSign, Users, Activity, Briefcase, PieChart } from 'lucide-react';

function App() {
  const insights = Array(12).fill(null).map((_, i) => ({
    id: i + 1,
    title: `Insight ${i + 1}`,
    value: `$${(Math.random() * 10000).toFixed(2)}`,
    description: `Detailed analysis for Insight ${i + 1}. This shows the performance metrics and key indicators for this specific financial aspect. Click to learn more about the trends and patterns.`
  }));

  const bottomInsights = [
    { icon: TrendingUp, title: 'Growth Rate', value: '+15.8%', color: 'text-fuchsia-500' },
    { icon: DollarSign, title: 'Revenue', value: '$45,678', color: 'text-fuchsia-500' },
    { icon: Users, title: 'Clients', value: '1,234', color: 'text-fuchsia-500' },
    { icon: Activity, title: 'Market Activity', value: 'High', color: 'text-fuchsia-500' },
    { icon: Briefcase, title: 'Investments', value: '$89,012', color: 'text-fuchsia-500' },
    { icon: PieChart, title: 'Asset Mix', value: 'Balanced', color: 'text-fuchsia-500' },
  ];

  const ledgerEntries = [
    { type: 'user', text: 'Request portfolio analysis for Q1 2024', timestamp: '09:45 AM' },
    { type: 'ai', text: 'Analysis complete. Portfolio shows -15% growth with notable performance in tech sector. Recommend rebalancing energy holdings.', timestamp: '09:46 AM' },
    { type: 'user', text: 'Show detailed breakdown of tech investments', timestamp: '09:48 AM' },
    { type: 'ai', text: 'Tech sector breakdown:\n- Software: 45%\n- Hardware: 30%\n- AI/ML: 25%\nTotal value: $234,567', timestamp: '09:49 AM' }
  ];

  const data = [
    { label: "A", value: 30 },
    { label: "B", value: 80 },
    { label: "C", value: 45 },
    { label: "D", value: 60 },
    { label: "E", value: 20 },
    { label: "F", value: 90 },
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-[#0f0f2d] via-[#1f1f5a] to-[#3a1f7a] text-gray-100">
      {/* Left Sidebar */}
      <div className="w-[10%] min-w-[200px] flex flex-col h-full border-r border-gray-800/50">
        {/* Fixed Username */}
        <div className="p-4 border-b border-gray-800/50">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-purple-400" />
            <span className="font-semibold">John Doe</span>
          </div>
        </div>
        
        {/* Scrolling Insights */}
        <div className="flex-1 overflow-hidden relative">
          <div className="animate-scroll">
            <div className="scroll-content">
              {/* First copy of insights */}
              {insights.map((insight) => (
                <div key={insight.id} className="p-4 border-b border-gray-800/30 hover:bg-gray-800/30 transition-colors">
                  <h3 className="text-sm font-medium text-center">{insight.title}</h3>
                  <p className="text-center text-purple-400 mt-1">{insight.value}</p>
                </div>
              ))}
              {/* Duplicate insights for seamless scrolling */}
              {insights.map((insight) => (
                <div key={`dup-${insight.id}`} className="p-4 border-b border-gray-800/30 hover:bg-gray-800/30 transition-colors">
                  <h3 className="text-sm font-medium text-center">{insight.title}</h3>
                  <p className="text-center text-purple-400 mt-1">{insight.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col">
        <div className="bg-gray-800/20 rounded-lg p-6 mb-6 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl font-semibold">Performance Overview</h2>
          </div>
          <div className="h-[300px] bg-gray-800/30 rounded-lg mb-6 flex items-center justify-center">
            {/* <span className="text-gray-500">Graph Placeholder</span> */}
            <BarChart data={data} />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {bottomInsights.map((insight, index) => (
              <div key={index} className="bg-gray-800/30 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <insight.icon className={`w-5 h-5 ${insight.color}`} />
                  <h3 className="font-medium">{insight.title}</h3>
                </div>
                <p className={`text-xl font-bold ${insight.color}`}>{insight.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Ledger Section */}
      <div className="w-1/4 min-w-[300px] border-l border-gray-800/50 p-6">
        <div className="flex items-center gap-2 mb-6">
          <MessageSquare className="w-6 h-6 text-purple-400" />
          <h2 className="text-xl font-semibold">Transaction Ledger</h2>
        </div>
        <div className="space-y-0">
          {ledgerEntries.map((entry, index) => (
            <div key={index} className="border-b border-gray-800/30">
              <div className="py-4">
                <div className="flex justify-between items-center mb-1">
                  <span className={`text-xs ${entry.type === 'user' ? 'text-blue-300' : 'text-purple-300'}`}>
                    {entry.type === 'user' ? 'User Request' : 'System Response'}
                  </span>
                  <span className="text-xs text-gray-500">{entry.timestamp}</span>
                </div>
                <p className={`text-sm whitespace-pre-line ${entry.type === 'user' ? 'text-gray-100' : 'text-gray-300'}`}>
                  {entry.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;