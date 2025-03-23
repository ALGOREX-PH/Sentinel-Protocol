import React from 'react';
import { Trophy, Award, Star, Shield } from 'lucide-react';

const contributors = [
  {
    name: 'Alex Thompson',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=64',
    xp: '12,450',
    accuracy: '98%',
  },
  {
    name: 'Sarah Chan',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=64',
    xp: '10,280',
    accuracy: '95%',
  },
];

const badges = [
  {
    icon: Shield,
    name: 'Sentinel',
    color: 'bg-blue-500',
  },
  {
    icon: Award,
    name: 'Top Analyst',
    color: 'bg-yellow-500',
  },
  {
    icon: Star,
    name: 'Elite',
    color: 'bg-purple-500',
  },
];

export default function GamificationSection() {
  return (
    <div className="py-24 bg-sentinel-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl text-sentinel-white font-bold mb-4">Gamification & Rewards</h2>
          <p className="text-sentinel-white/60 max-w-2xl mx-auto">
            Earn rewards and recognition for your contributions to community safety
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-sentinel-dark-800/50 rounded-xl p-8 border border-sentinel-dark-700">
            <h3 className="text-xl text-sentinel-white font-semibold mb-6 flex items-center gap-2">
              <Trophy className="h-6 w-6 text-sentinel-cyan" />
              Top Contributors
            </h3>
            <div className="space-y-4">
              {contributors.map((contributor) => (
                <div key={contributor.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={contributor.avatar}
                      alt={contributor.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="font-medium text-sentinel-white">{contributor.name}</div>
                      <div className="text-sm text-sentinel-white/60">Accuracy: {contributor.accuracy}</div>
                    </div>
                  </div>
                  <div className="text-sentinel-cyan font-medium">{contributor.xp} XP</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-sentinel-dark-800/50 rounded-xl p-8 border border-sentinel-dark-700">
            <h3 className="text-xl text-sentinel-white font-semibold mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-sentinel-cyan" />
              NFT Badges
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {badges.map((badge) => (
                <div key={badge.name} className="text-center">
                  <div className={`w-16 h-16 rounded-full ${badge.color} mx-auto mb-2 flex items-center justify-center`}>
                    <badge.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-sm font-medium text-sentinel-white">{badge.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}