import React from "react";

interface Insight{
    id: number;
    title: string;
    value: string;
    description: string;
}

interface ScrollingInsightsProps {
    insights: Insight[];
}

const ScrollingInsights: React.FC<ScrollingInsightsProps> = ({ insights }) => {
    return (
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
    );
  };
  
  export default ScrollingInsights;