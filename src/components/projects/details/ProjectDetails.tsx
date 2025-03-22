import React from 'react';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import ProjectHeader from './ProjectHeader';
import ProjectOverview from './ProjectOverview';
import TrustScoreCard from './TrustScoreCard';
import TeamSection from './TeamSection';
import WalletActivity from './WalletActivity';

const mockData = {
  project: {
    name: 'MetaDAO',
    logo: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=64',
    website: 'website.com',
    blockchain: 'Ethereum',
    contractAddress: '0x1234...5678',
    whitepaper: {
      lastUpdated: 'Jan 15, 2025',
      url: '#',
    },
    roadmap: {
      updateFrequency: 'weekly',
      url: '#',
    },
  },
  trustScore: {
    score: 8.5,
    metrics: {
      smartContract: {
        score: 9.2,
        codeQuality: 95,
        auditScore: 90,
      },
      social: {
        score: 8.1,
        communityGrowth: 85,
        engagement: 75,
      },
    },
  },
  team: [
    {
      name: 'Michael Chen',
      role: 'Lead Developer',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
      github: '#',
      linkedin: '#',
    },
    {
      name: 'Sarah Wilson',
      role: 'Product Manager',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
      twitter: '#',
      linkedin: '#',
    },
  ],
  wallets: [
    {
      type: 'Dev Wallet',
      address: '0x9876...5432',
      status: 'active',
    },
    {
      type: 'Treasury',
      address: '0x5432...7890',
      status: 'locked',
    },
  ],
};

export default function ProjectDetails() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sentinel-dark-900 to-sentinel-dark-800">
      <Navbar />
      
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <ProjectHeader
              name={mockData.project.name}
              logo={mockData.project.logo}
              website={mockData.project.website}
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <ProjectOverview
                  blockchain={mockData.project.blockchain}
                  contractAddress={mockData.project.contractAddress}
                  whitepaper={mockData.project.whitepaper}
                  roadmap={mockData.project.roadmap}
                />
                <TrustScoreCard
                  score={mockData.trustScore.score}
                  metrics={mockData.trustScore.metrics}
                />
              </div>
              
              <div className="space-y-6">
                <TeamSection members={mockData.team} />
                <WalletActivity wallets={mockData.wallets} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}