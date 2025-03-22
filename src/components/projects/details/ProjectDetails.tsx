import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import ProjectHeader from './ProjectHeader';
import ProjectOverview from './ProjectOverview';
import TrustScoreCard from './TrustScoreCard';
import TeamSection from './TeamSection';
import WalletActivity from './WalletActivity';

const projectsData = {
  '1': {
    project: {
      name: 'MetaDAO',
      logo: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=64',
      website: 'metadao.com',
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
  },
  '2': {
    project: {
      name: 'RocketMoon',
      logo: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=64',
      website: 'rocketmoon.io',
      blockchain: 'BSC',
      contractAddress: '0x9876...4321',
      whitepaper: {
        lastUpdated: 'Feb 1, 2025',
        url: '#',
      },
      roadmap: {
        updateFrequency: 'monthly',
        url: '#',
      },
    },
    trustScore: {
      score: 3.2,
      metrics: {
        smartContract: {
          score: 2.8,
          codeQuality: 35,
          auditScore: 20,
        },
        social: {
          score: 4.5,
          communityGrowth: 95,
          engagement: 80,
        },
      },
    },
    team: [
      {
        name: 'Anonymous',
        role: 'Developer',
        avatar: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=100',
        twitter: '#',
      },
    ],
    wallets: [
      {
        type: 'Dev Wallet',
        address: '0x1111...2222',
        status: 'active',
      },
    ],
  },
  '3': {
    project: {
      name: 'CryptoQuest',
      logo: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&q=80&w=64',
      website: 'cryptoquest.game',
      blockchain: 'Polygon',
      contractAddress: '0x5555...6666',
      whitepaper: {
        lastUpdated: 'Mar 1, 2025',
        url: '#',
      },
      roadmap: {
        updateFrequency: 'bi-weekly',
        url: '#',
      },
    },
    trustScore: {
      score: 6.5,
      metrics: {
        smartContract: {
          score: 7.2,
          codeQuality: 75,
          auditScore: 70,
        },
        social: {
          score: 5.8,
          communityGrowth: 60,
          engagement: 55,
        },
      },
    },
    team: [
      {
        name: 'Alex Thompson',
        role: 'Game Director',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
        linkedin: '#',
        twitter: '#',
      },
      {
        name: 'Emma Rodriguez',
        role: 'Lead Artist',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100',
        twitter: '#',
      },
    ],
    wallets: [
      {
        type: 'Dev Wallet',
        address: '0x7777...8888',
        status: 'active',
      },
      {
        type: 'Treasury',
        address: '0x9999...0000',
        status: 'locked',
      },
    ],
  },
};

export default function ProjectDetails() {
  const { id } = useParams();
  const projectData = useMemo(() => projectsData[id as keyof typeof projectsData], [id]);

  if (!projectData) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-sentinel-dark-900 to-sentinel-dark-800">
        <Navbar />
        <div className="pt-32 text-center">
          <h1 className="text-2xl font-bold text-sentinel-white mb-4">Project Not Found</h1>
          <p className="text-sentinel-white/60">The project you're looking for doesn't exist.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sentinel-dark-900 to-sentinel-dark-800">
      <Navbar />
      
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <ProjectHeader
              name={projectData.project.name}
              logo={projectData.project.logo}
              website={projectData.project.website}
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <ProjectOverview
                  blockchain={projectData.project.blockchain}
                  contractAddress={projectData.project.contractAddress}
                  whitepaper={projectData.project.whitepaper}
                  roadmap={projectData.project.roadmap}
                />
                <TrustScoreCard
                  score={projectData.trustScore.score}
                  metrics={projectData.trustScore.metrics}
                />
              </div>
              
              <div className="space-y-6">
                <TeamSection members={projectData.team} />
                <WalletActivity wallets={projectData.wallets} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}