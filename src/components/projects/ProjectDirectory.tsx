import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import DirectoryHeader from './DirectoryHeader';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';
import ProjectGrid from './ProjectGrid';
import { Project, RiskLevel } from './types';

const mockProjects: Project[] = [
  {
    id: '1',
    name: 'MetaDAO',
    logo: '📦',
    category: 'DeFi Protocol',
    riskScore: 92,
    riskLevel: 'safe',
    smartContract: 'verified',
    communityTrust: 'high',
    upvotes: 234,
    downvotes: 12,
  },
  {
    id: '2',
    name: 'RocketMoon',
    logo: '🚀',
    category: 'Meme Coin',
    riskScore: 28,
    riskLevel: 'high-risk',
    smartContract: 'suspicious',
    communityTrust: 'low',
    upvotes: 45,
    downvotes: 189,
  },
  {
    id: '3',
    name: 'CryptoQuest',
    logo: '🎮',
    category: 'GameFi',
    riskScore: 65,
    riskLevel: 'caution',
    smartContract: 'pending',
    communityTrust: 'medium',
    upvotes: 156,
    downvotes: 78,
  },
];

export default function ProjectDirectory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBlockchain, setSelectedBlockchain] = useState<string | null>(null);
  const [selectedRiskLevel, setSelectedRiskLevel] = useState<RiskLevel | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sentinel-dark-900 to-sentinel-dark-800">
      <Navbar />
      
      {/* Main Content */}
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DirectoryHeader />

          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
          />

          <FilterBar
            onBlockchainChange={setSelectedBlockchain}
            onRiskLevelChange={setSelectedRiskLevel}
            onCategoryChange={setSelectedCategory}
          />

          <ProjectGrid projects={mockProjects} />
        </div>
      </div>

      <Footer />
    </div>
  );
}