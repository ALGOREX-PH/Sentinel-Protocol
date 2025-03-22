import React from 'react';
import { Link, Globe, Share2 } from 'lucide-react';

interface ProjectHeaderProps {
  name: string;
  logo: string;
  website: string;
}

export default function ProjectHeader({ name, logo, website }: ProjectHeaderProps) {
  return (
    <div className="flex items-center justify-between bg-sentinel-dark-800/50 border border-sentinel-dark-700 rounded-xl p-6">
      <div className="flex items-center gap-4">
        <img src={logo} alt={name} className="w-12 h-12 rounded-xl" />
        <div>
          <h1 className="text-2xl font-bold text-sentinel-white">{name}</h1>
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sentinel-white/60 hover:text-sentinel-cyan transition-colors"
          >
            <Globe className="h-4 w-4" />
            <span>{website}</span>
          </a>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2">
          Follow
        </button>
        <button className="border border-sentinel-dark-700 hover:bg-sentinel-dark-700/50 text-sentinel-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2">
          <Share2 className="h-4 w-4" />
          Share
        </button>
      </div>
    </div>
  );
}