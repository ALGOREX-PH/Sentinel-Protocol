import React from 'react';
import { Filter, Shield, Tag } from 'lucide-react';
import { RiskLevel } from './types';

interface FilterBarProps {
  onBlockchainChange: (value: string | null) => void;
  onRiskLevelChange: (value: RiskLevel | null) => void;
  onCategoryChange: (value: string | null) => void;
}

export default function FilterBar({ onBlockchainChange, onRiskLevelChange, onCategoryChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <div className="relative group">
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-sentinel-dark-800/50 border border-sentinel-dark-700 text-sentinel-white/80 hover:bg-sentinel-dark-700/50 transition-all">
          <Filter className="h-4 w-4" />
          Blockchain Type
        </button>
      </div>

      <div className="relative group">
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-sentinel-dark-800/50 border border-sentinel-dark-700 text-sentinel-white/80 hover:bg-sentinel-dark-700/50 transition-all">
          <Shield className="h-4 w-4" />
          Risk Score
        </button>
      </div>

      <div className="relative group">
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-sentinel-dark-800/50 border border-sentinel-dark-700 text-sentinel-white/80 hover:bg-sentinel-dark-700/50 transition-all">
          <Tag className="h-4 w-4" />
          Category
        </button>
      </div>
    </div>
  );
}