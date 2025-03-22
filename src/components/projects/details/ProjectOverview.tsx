import React from 'react';
import { FileText, GitBranch, Copy } from 'lucide-react';

interface ProjectOverviewProps {
  blockchain: string;
  contractAddress: string;
  whitepaper: {
    lastUpdated: string;
    url: string;
  };
  roadmap: {
    updateFrequency: string;
    url: string;
  };
}

export default function ProjectOverview({ blockchain, contractAddress, whitepaper, roadmap }: ProjectOverviewProps) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  return (
    <div className="bg-sentinel-dark-800/50 border border-sentinel-dark-700 rounded-xl p-6">
      <h2 className="text-xl font-bold text-sentinel-white mb-6">Project Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="mb-6">
            <span className="text-sentinel-white/60 text-sm">Blockchain</span>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                <span className="text-purple-500">Ξ</span>
              </div>
              <span className="text-sentinel-white">{blockchain}</span>
            </div>
          </div>

          <div>
            <span className="text-sentinel-white/60 text-sm">Contract Address</span>
            <div className="flex items-center gap-2 mt-1">
              <GitBranch className="h-5 w-5 text-sentinel-cyan" />
              <code className="text-sentinel-white font-mono">{contractAddress}</code>
              <button
                onClick={() => copyToClipboard(contractAddress)}
                className="p-1 hover:bg-sentinel-dark-700/50 rounded-lg transition-colors"
              >
                <Copy className="h-4 w-4 text-sentinel-white/60" />
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-start gap-4 p-4 rounded-lg bg-sentinel-dark-700/30">
            <FileText className="h-6 w-6 text-blue-500" />
            <div>
              <h3 className="font-medium text-sentinel-white">Whitepaper</h3>
              <p className="text-sm text-sentinel-white/60 mb-2">Last updated: {whitepaper.lastUpdated}</p>
              <a
                href={whitepaper.url}
                className="text-blue-500 hover:text-blue-400 text-sm transition-colors"
              >
                View Document
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-lg bg-sentinel-dark-700/30">
            <FileText className="h-6 w-6 text-green-500" />
            <div>
              <h3 className="font-medium text-sentinel-white">Roadmap</h3>
              <p className="text-sm text-sentinel-white/60 mb-2">Updated {roadmap.updateFrequency}</p>
              <a
                href={roadmap.url}
                className="text-green-500 hover:text-green-400 text-sm transition-colors"
              >
                View Roadmap
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}