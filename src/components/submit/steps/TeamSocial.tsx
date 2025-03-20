import React from 'react';
import { Users, Twitter, Github, MessageCircle, Link as LinkIcon, Plus, Trash2 } from 'lucide-react';

export default function TeamSocial() {
  const [teamMembers, setTeamMembers] = React.useState([{ name: '', role: '', linkedin: '' }]);

  const addTeamMember = () => {
    setTeamMembers([...teamMembers, { name: '', role: '', linkedin: '' }]);
  };

  const removeTeamMember = (index: number) => {
    setTeamMembers(teamMembers.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-sentinel-white">Team Members</h3>
          <button
            onClick={addTeamMember}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-sentinel-dark-700 text-sentinel-white hover:bg-sentinel-dark-600 transition-colors"
          >
            <Plus className="h-4 w-4" /> Add Member
          </button>
        </div>
        <div className="space-y-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-1 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="px-4 py-3 rounded-lg bg-sentinel-dark-700/50 border border-sentinel-dark-700 text-sentinel-white placeholder-sentinel-white/40 focus:outline-none focus:ring-2 focus:ring-sentinel-cyan/50 transition-all"
                  />
                  <input
                    type="text"
                    placeholder="Role"
                    className="px-4 py-3 rounded-lg bg-sentinel-dark-700/50 border border-sentinel-dark-700 text-sentinel-white placeholder-sentinel-white/40 focus:outline-none focus:ring-2 focus:ring-sentinel-cyan/50 transition-all"
                  />
                </div>
                <div className="flex">
                  <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-sentinel-dark-700 bg-sentinel-dark-700/30 text-sentinel-white/40">
                    <LinkIcon className="h-5 w-5" />
                  </span>
                  <input
                    type="url"
                    placeholder="LinkedIn Profile URL"
                    className="flex-1 px-4 py-3 rounded-r-lg bg-sentinel-dark-700/50 border border-sentinel-dark-700 text-sentinel-white placeholder-sentinel-white/40 focus:outline-none focus:ring-2 focus:ring-sentinel-cyan/50 transition-all"
                  />
                </div>
              </div>
              {teamMembers.length > 1 && (
                <button
                  onClick={() => removeTeamMember(index)}
                  className="self-center p-2 text-sentinel-secondary hover:bg-sentinel-dark-700/50 rounded-lg transition-colors"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-sentinel-white mb-4">Social Media Links</h3>
        <div className="space-y-4">
          <div className="flex">
            <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-sentinel-dark-700 bg-sentinel-dark-700/30 text-sentinel-white/40">
              <Twitter className="h-5 w-5" />
            </span>
            <input
              type="url"
              placeholder="Twitter Profile URL"
              className="flex-1 px-4 py-3 rounded-r-lg bg-sentinel-dark-700/50 border border-sentinel-dark-700 text-sentinel-white placeholder-sentinel-white/40 focus:outline-none focus:ring-2 focus:ring-sentinel-cyan/50 transition-all"
            />
          </div>
          <div className="flex">
            <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-sentinel-dark-700 bg-sentinel-dark-700/30 text-sentinel-white/40">
              <MessageCircle className="h-5 w-5" />
            </span>
            <input
              type="url"
              placeholder="Telegram Group URL"
              className="flex-1 px-4 py-3 rounded-r-lg bg-sentinel-dark-700/50 border border-sentinel-dark-700 text-sentinel-white placeholder-sentinel-white/40 focus:outline-none focus:ring-2 focus:ring-sentinel-cyan/50 transition-all"
            />
          </div>
          <div className="flex">
            <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-sentinel-dark-700 bg-sentinel-dark-700/30 text-sentinel-white/40">
              <MessageCircle className="h-5 w-5" />
            </span>
            <input
              type="url"
              placeholder="Discord Server URL"
              className="flex-1 px-4 py-3 rounded-r-lg bg-sentinel-dark-700/50 border border-sentinel-dark-700 text-sentinel-white placeholder-sentinel-white/40 focus:outline-none focus:ring-2 focus:ring-sentinel-cyan/50 transition-all"
            />
          </div>
          <div className="flex">
            <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-sentinel-dark-700 bg-sentinel-dark-700/30 text-sentinel-white/40">
              <Github className="h-5 w-5" />
            </span>
            <input
              type="url"
              placeholder="GitHub Organization URL"
              className="flex-1 px-4 py-3 rounded-r-lg bg-sentinel-dark-700/50 border border-sentinel-dark-700 text-sentinel-white placeholder-sentinel-white/40 focus:outline-none focus:ring-2 focus:ring-sentinel-cyan/50 transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  );
}