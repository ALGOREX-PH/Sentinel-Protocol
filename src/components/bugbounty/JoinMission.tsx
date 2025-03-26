import React from 'react';
import { UserPlus, ShieldCheck } from 'lucide-react';

export default function JoinMission() {
  return (
    <div className="py-24 bg-sentinel-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Join the Mission?</h2>
        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
          Whether you're a security researcher, developer, or project owner, there's a place for you in the Sentinel Protocol ecosystem.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-medium hover:bg-white/90 transition-all flex items-center justify-center gap-2">
            <UserPlus className="h-5 w-5" />
            Join as Researcher
          </button>
          <button className="px-8 py-4 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800 transition-all flex items-center justify-center gap-2">
            <ShieldCheck className="h-5 w-5" />
            Register Project
          </button>
        </div>
      </div>
    </div>
  );
}