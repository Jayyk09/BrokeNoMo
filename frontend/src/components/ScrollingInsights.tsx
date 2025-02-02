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
                <div key={insight.id} className="p-4
              transition-colors
              hover:bg-gray-800/30
              border-r border-blue-500
              hover:border-blue-300
              hover:shadow-lg hover:shadow-blue-500/50
              ">
                <h3 className="text-sm font-medium text-center">{insight.title}</h3>
                <p className="text-center text-purple-400 mt-1">{insight.value}</p>
                </div>
            ))}
            {/* Duplicate insights for seamless scrolling */}
          </div>
        </div>
      </div>
    );
  };
  
  export default ScrollingInsights;