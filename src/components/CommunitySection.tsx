import React from 'react';
import { Users, Trophy, MessageSquare, Award } from 'lucide-react';

export default function CommunitySection() {
  return (
    <div className="py-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Community-Driven Platform</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join our growing community of crypto analysts and security experts
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl bg-gradient-to-br from-indigo-900/50 to-purple-900/50">
            <Users className="h-12 w-12 text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Reputation Tiers</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="p-1 rounded bg-gray-800">👤</div>
                <div>
                  <span className="font-medium">New Member</span>
                  <p className="text-sm text-gray-400">Just joined, learning the ropes</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 rounded bg-gray-800">🎖</div>
                <div>
                  <span className="font-medium">Verified Analyst</span>
                  <p className="text-sm text-gray-400">Trusted users with proven track record</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 rounded bg-gray-800">🛡</div>
                <div>
                  <span className="font-medium">Sentinel</span>
                  <p className="text-sm text-gray-400">Expert in crypto security & analysis</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="p-8 rounded-xl bg-gradient-to-br from-indigo-900/50 to-purple-900/50">
            <Trophy className="h-12 w-12 text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Rewards & Recognition</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">XP & Reputation Points</h4>
                <p className="text-gray-400">Earn points for accurate project analysis and helpful contributions</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">NFT Badges</h4>
                <p className="text-gray-400">Exclusive NFTs for high-ranking community members</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Featured Reviews</h4>
                <p className="text-gray-400">Get your analysis highlighted for maximum visibility</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}