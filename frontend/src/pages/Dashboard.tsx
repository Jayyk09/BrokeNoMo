import React from 'react';
import BarChart from '../components/BarChart';
import BottomInsights from '../components/BottomInsights';
import RightLedger from '../components/RightLedger';
import ScrollingInsights from '../components/ScrollingInsights';
import { BarChart3, User, TrendingUp, DollarSign, Users, Activity, Briefcase, PieChart } from 'lucide-react';

interface DashboardProps {
  username: string;    // or userId: string
  onLogout: () => void;
}

function Dashboard({ username }: DashboardProps) {
  const insights = Array(12)
    .fill(null)
    .map((_, i) => ({
      id: i + 1,
      title: `Insight ${i + 1}`,
      value: `$${(Math.random() * 10000).toFixed(2)}`,
      description: `Detailed analysis for Insight ${i + 1}. This shows the performance metrics and key indicators for this specific financial aspect. Click to learn more about the trends and patterns.`,
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
    {
      type: 'user' as const,
      text: 'Request portfolio analysis for Q1 2024',
      timestamp: '09:45 AM',
    },
    {
      type: 'ai' as const,
      text: 'Analysis complete. Portfolio shows -15% growth with notable performance in tech sector. Recommend rebalancing energy holdings.',
      timestamp: '09:46 AM',
    },
  ];

  const data = [
    { label: 'A', value: 30 },
    { label: 'B', value: 80 },
    { label: 'C', value: 45 },
    { label: 'D', value: 60 },
    { label: 'E', value: 20 },
    { label: 'F', value: 90 },
  ];

  return (
    // 1) Make the container relative to hold our shiny overlay
    <div className="relative flex h-screen overflow-hidden text-gray-100 bg-black">
      {/* 2) Shiny overlay (slight top-to-bottom highlight) */}
      <div
  className="
    pointer-events-none
    absolute 
    inset-0 
    bg-gradient-to-b 
    from-white/5 
    to-transparent 
    mix-blend-overlay
  "
/>


      {/* Left Sidebar */}
      <div className="w-[10%] min-w-[200px] flex flex-col h-full border-r border-gray-800/50 bg-gray-900/70">
        {/* Fixed Username */}
        <div className="p-4 border-b border-gray-800/50">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-purple-400" />
            <span className="font-semibold">John Doe</span>
          </div>
        </div>
        {/* Scrolling Insights */}
        <ScrollingInsights insights={insights} />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col">
        <div className="bg-gray-800/20 rounded-lg p-6 mb-6 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl font-semibold">Performance Overview</h2>
          </div>
          <div className="h-[300px] bg-gray-800/30 rounded-lg mb-6 flex items-center justify-center">
            <BarChart data={data} />
          </div>
          <BottomInsights insights={bottomInsights} />
        </div>
      </div>

      {/* Right Ledger Section */}
      <RightLedger ledgerEntries={ledgerEntries} />
    </div>
  );
}

export default Dashboard;
