import React, { useState } from 'react';
import { Search, Filter, Tag, Shield } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ProjectCard from './ProjectCard';
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
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-sentinel-cyan to-sentinel-teal bg-clip-text text-transparent">
              Crypto Project Directory
            </h1>
            <p className="text-sentinel-white/60 max-w-3xl mx-auto">
              Your ultimate crypto intelligence hub powered by AI insights and community-driven security assessments
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-sentinel-white/40" />
            <input
              type="text"
              placeholder="Search for crypto projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-sentinel-dark-800/50 border border-sentinel-dark-700 text-sentinel-white placeholder-sentinel-white/40 focus:outline-none focus:ring-2 focus:ring-sentinel-cyan/50 transition-all"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="relative group">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-sentinel-dark-800/50 border border-sentinel-dark-700 text-sentinel-white/80 hover:bg-sentinel-dark-700/50 transition-all">
                <Filter className="h-4 w-4" />
                Blockchain Type
              </button>
              {/* Dropdown content would go here */}
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

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}