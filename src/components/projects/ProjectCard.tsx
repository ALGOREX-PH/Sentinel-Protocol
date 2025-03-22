import React from 'react';
import { ArrowRight, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Project } from './types';

interface ProjectCardProps {
  project: Project;
}

const getRiskLevelStyles = (riskLevel: string) => {
  switch (riskLevel) {
    case 'safe':
      return {
        badge: 'bg-green-500/10 text-green-500',
        score: 'text-green-500',
      };
    case 'high-risk':
      return {
        badge: 'bg-sentinel-secondary/10 text-sentinel-secondary',
        score: 'text-sentinel-secondary',
      };
    case 'caution':
      return {
        badge: 'bg-sentinel-gold/10 text-sentinel-gold',
        score: 'text-sentinel-gold',
      };
    default:
      return {
        badge: 'bg-gray-500/10 text-gray-500',
        score: 'text-gray-500',
      };
  }
};

const getSmartContractStatus = (status: string) => {
  switch (status) {
    case 'verified':
      return {
        text: 'Verified',
        className: 'text-green-500',
      };
    case 'suspicious':
      return {
        text: 'Suspicious',
        className: 'text-sentinel-secondary',
      };
    case 'pending':
      return {
        text: 'Pending Review',
        className: 'text-sentinel-gold',
      };
    default:
      return {
        text: 'Unknown',
        className: 'text-gray-500',
      };
  }
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const riskStyles = getRiskLevelStyles(project.riskLevel);
  const contractStatus = getSmartContractStatus(project.smartContract);

  return (
    <div className="bg-sentinel-dark-800/50 rounded-xl p-6 border border-sentinel-dark-700 hover:border-sentinel-dark-600 transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-2xl">{project.logo}</div>
          <div>
            <h3 className="text-lg font-semibold text-sentinel-white">{project.name}</h3>
            <p className="text-sm text-sentinel-white/60">{project.category}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${riskStyles.badge}`}>
          {project.riskLevel === 'safe' ? 'Safe' : project.riskLevel === 'high-risk' ? 'High Risk' : 'Caution'}
        </span>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-sentinel-white/60">Risk Score</span>
          <span className={`font-semibold ${riskStyles.score}`}>{project.riskScore}/100</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sentinel-white/60">Smart Contract</span>
          <span className={`font-medium ${contractStatus.className}`}>{contractStatus.text}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sentinel-white/60">Community Trust</span>
          <span className={`font-medium ${
            project.communityTrust === 'high' ? 'text-green-500' :
            project.communityTrust === 'medium' ? 'text-sentinel-gold' :
            'text-sentinel-secondary'
          }`}>
            {project.communityTrust.charAt(0).toUpperCase() + project.communityTrust.slice(1)}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 text-sentinel-white/60 hover:text-sentinel-white transition-colors">
            <ThumbsUp className="h-4 w-4" />
            <span>{project.upvotes}</span>
          </button>
          <button className="flex items-center gap-1 text-sentinel-white/60 hover:text-sentinel-white transition-colors">
            <ThumbsDown className="h-4 w-4" />
            <span>{project.downvotes}</span>
          </button>
        </div>
        <button className="flex items-center gap-1 text-sentinel-cyan hover:text-sentinel-teal transition-colors">
          View Details
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}