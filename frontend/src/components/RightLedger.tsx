import React from 'react';
import { MessageSquare } from 'lucide-react';

interface LedgerEntry {
    type: 'user' | 'ai';
    timestamp: string;
    text: string;
  }
  
  interface RightLedgerProps {
    ledgerEntries: LedgerEntry[];
  }

  const RightLedger: React.FC<RightLedgerProps> = ({ ledgerEntries }) => {
    return (
      <div className="w-1/4 min-w-[300px] border-l border-gray-800/50 p-6 bg-gray-900/70">
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
    );
  };
  
  export default RightLedger;