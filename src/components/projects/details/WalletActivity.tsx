import React from 'react';
import { Wallet, Copy } from 'lucide-react';

interface WalletInfo {
  type: string;
  address: string;
  status: 'active' | 'locked';
}

interface WalletActivityProps {
  wallets: WalletInfo[];
}

export default function WalletActivity({ wallets }: WalletActivityProps) {
  const copyToClipboard = (address: string) => {
    navigator.clipboard.writeText(address);
    // You could add a toast notification here
  };

  return (
    <div className="bg-sentinel-dark-800/50 border border-sentinel-dark-700 rounded-xl p-6">
      <h2 className="text-xl font-bold text-sentinel-white mb-6">Wallet Activity</h2>
      
      <div className="space-y-4">
        {wallets.map((wallet, index) => (
          <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-sentinel-dark-700/30">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Wallet className="h-4 w-4 text-sentinel-cyan" />
                <span className="font-medium text-sentinel-white">{wallet.type}</span>
              </div>
              <div className="flex items-center gap-2">
                <code className="text-sm text-sentinel-white/60 font-mono">{wallet.address}</code>
                <button
                  onClick={() => copyToClipboard(wallet.address)}
                  className="p-1 hover:bg-sentinel-dark-600 rounded-lg transition-colors"
                >
                  <Copy className="h-4 w-4 text-sentinel-white/40" />
                </button>
              </div>
            </div>
            
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              wallet.status === 'active'
                ? 'bg-green-500/10 text-green-500'
                : 'bg-sentinel-gold/10 text-sentinel-gold'
            }`}>
              {wallet.status.charAt(0).toUpperCase() + wallet.status.slice(1)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}