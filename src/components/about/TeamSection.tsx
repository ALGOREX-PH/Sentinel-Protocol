import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const founders = [
  {
    name: 'Alex Chen',
    role: 'CEO & Lead Security Researcher',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
    github: '#',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO & Blockchain Lead',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    github: '#',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Marcus Kim',
    role: 'Head of Blockchain Development',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
    github: '#',
    linkedin: '#',
    twitter: '#',
  },
];

const advisors = [
  {
    name: 'Dr. James Wilson',
    role: 'Cybersecurity Advisor',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    linkedin: '#',
  },
  {
    name: 'Emma Thompson',
    role: 'AI Research Lead',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
    github: '#',
    twitter: '#',
  },
];

export default function TeamSection() {
  return (
    <div className="py-24 bg-sentinel-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-sentinel-white mb-4">Meet Our Team</h2>
          <p className="text-sentinel-white/60 max-w-2xl mx-auto">
            Our team brings together expertise in cybersecurity, blockchain development, and AI research.
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-xl font-semibold text-sentinel-white mb-8">Founders & Core Contributors</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {founders.map((member) => (
                <div
                  key={member.name}
                  className="bg-sentinel-dark-800/50 rounded-xl p-6 border border-sentinel-dark-700"
                >
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mb-4"
                    />
                    <h4 className="text-lg font-medium text-sentinel-white mb-1">{member.name}</h4>
                    <p className="text-sentinel-white/60 mb-4">{member.role}</p>
                    <div className="flex items-center gap-4">
                      {member.github && (
                        <a href={member.github} className="text-sentinel-white/60 hover:text-sentinel-cyan">
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                      {member.linkedin && (
                        <a href={member.linkedin} className="text-sentinel-white/60 hover:text-sentinel-cyan">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                      {member.twitter && (
                        <a href={member.twitter} className="text-sentinel-white/60 hover:text-sentinel-cyan">
                          <Twitter className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-sentinel-white mb-8">Security Researchers & Advisors</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {advisors.map((advisor) => (
                <div
                  key={advisor.name}
                  className="bg-sentinel-dark-800/50 rounded-xl p-6 border border-sentinel-dark-700"
                >
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={advisor.avatar}
                      alt={advisor.name}
                      className="w-20 h-20 rounded-full mb-4"
                    />
                    <h4 className="text-lg font-medium text-sentinel-white mb-1">{advisor.name}</h4>
                    <p className="text-sentinel-white/60 mb-4">{advisor.role}</p>
                    <div className="flex items-center gap-4">
                      {advisor.github && (
                        <a href={advisor.github} className="text-sentinel-white/60 hover:text-sentinel-cyan">
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                      {advisor.linkedin && (
                        <a href={advisor.linkedin} className="text-sentinel-white/60 hover:text-sentinel-cyan">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                      {advisor.twitter && (
                        <a href={advisor.twitter} className="text-sentinel-white/60 hover:text-sentinel-cyan">
                          <Twitter className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}