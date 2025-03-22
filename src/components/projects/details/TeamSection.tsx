import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
}

interface TeamSectionProps {
  members: TeamMember[];
}

export default function TeamSection({ members }: TeamSectionProps) {
  return (
    <div className="bg-sentinel-dark-800/50 border border-sentinel-dark-700 rounded-xl p-6">
      <h2 className="text-xl font-bold text-sentinel-white mb-6">Team</h2>
      
      <div className="space-y-4">
        {members.map((member, index) => (
          <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-sentinel-dark-700/30">
            <div className="flex items-center gap-3">
              <img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full" />
              <div>
                <h3 className="font-medium text-sentinel-white">{member.name}</h3>
                <p className="text-sm text-sentinel-white/60">{member.role}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              {member.github && (
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-sentinel-dark-600 rounded-lg transition-colors"
                >
                  <Github className="h-4 w-4 text-sentinel-white/60 hover:text-sentinel-white" />
                </a>
              )}
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-sentinel-dark-600 rounded-lg transition-colors"
                >
                  <Linkedin className="h-4 w-4 text-sentinel-white/60 hover:text-sentinel-white" />
                </a>
              )}
              {member.twitter && (
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-sentinel-dark-600 rounded-lg transition-colors"
                >
                  <Twitter className="h-4 w-4 text-sentinel-white/60 hover:text-sentinel-white" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}