import React, { ComponentType } from 'react';
import { LucideIcon } from 'lucide-react';

interface Insight {
    icon: LucideIcon;
    title: string;
  
    value: string;
  
    color: string;
  
  }

interface BottomInsightsProps {
  insights: Insight[];
}

const BottomInsights: React.FC<BottomInsightsProps> = ({ insights }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {insights.map((insight, index) => (
        <div key={index} className="bg-gray-800/30 rounded-lg p-4 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
            <insight.icon className={`w-5 h-5 ${insight.color}`} />
            <h3 className="font-medium">{insight.title}</h3>
          </div>
          <p className={`text-xl font-bold ${insight.color}`}>{insight.value}</p>
        </div>
      ))}
    </div>
  );
};

export default BottomInsights;