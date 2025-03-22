import React from 'react';
import { Shield } from 'lucide-react';

interface TrustScoreProps {
  score: number;
  metrics: {
    smartContract: {
      score: number;
      codeQuality: number;
      auditScore: number;
    };
    social: {
      score: number;
      communityGrowth: number;
      engagement: number;
    };
  };
}

export default function TrustScoreCard({ score, metrics }: TrustScoreProps) {
  return (
    <div className="bg-sentinel-dark-800/50 border border-sentinel-dark-700 rounded-xl p-6">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold text-sentinel-white">Trust Score</h2>
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold text-green-500">{score}</span>
          <span className="text-sentinel-white/60">/10</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-sentinel-white">Smart Contract Security</h3>
            <span className="text-green-500 font-semibold">{metrics.smartContract.score}</span>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-sentinel-white/60">Code Quality</span>
                <span className="text-sentinel-white">{metrics.smartContract.codeQuality}%</span>
              </div>
              <div className="h-2 bg-sentinel-dark-700 rounded-full">
                <div
                  className="h-full bg-green-500 rounded-full"
                  style={{ width: `${metrics.smartContract.codeQuality}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-sentinel-white/60">Audit Score</span>
                <span className="text-sentinel-white">{metrics.smartContract.auditScore}%</span>
              </div>
              <div className="h-2 bg-sentinel-dark-700 rounded-full">
                <div
                  className="h-full bg-green-500 rounded-full"
                  style={{ width: `${metrics.smartContract.auditScore}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-sentinel-white">Social Sentiment</h3>
            <span className="text-blue-500 font-semibold">{metrics.social.score}</span>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-sentinel-white/60">Community Growth</span>
                <span className="text-sentinel-white">{metrics.social.communityGrowth}%</span>
              </div>
              <div className="h-2 bg-sentinel-dark-700 rounded-full">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: `${metrics.social.communityGrowth}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-sentinel-white/60">Engagement</span>
                <span className="text-sentinel-white">{metrics.social.engagement}%</span>
              </div>
              <div className="h-2 bg-sentinel-dark-700 rounded-full">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: `${metrics.social.engagement}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}