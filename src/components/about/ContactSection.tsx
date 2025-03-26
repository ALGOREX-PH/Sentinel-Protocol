import React from 'react';
import { Mail, MessageCircle, Twitter } from 'lucide-react';

export default function ContactSection() {
  return (
    <div className="py-24 bg-sentinel-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Contact & Partnerships</h2>
            <p className="text-white/80 mb-8">
              We value open collaboration and believe that security in Web3 should be a collective effort.
            </p>
            
            <div className="bg-white/10 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Business & Media Inquiries</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
                ></textarea>
                <button className="w-full py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-white/90 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Community & Support Channels</h3>
            <div className="space-y-6">
              <a
                href="#"
                className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
              >
                <MessageCircle className="h-6 w-6 text-white" />
                <div>
                  <div className="font-medium text-white">Telegram</div>
                  <div className="text-white/60">Live community support</div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
              >
                <MessageCircle className="h-6 w-6 text-white" />
                <div>
                  <div className="font-medium text-white">Discord</div>
                  <div className="text-white/60">Technical discussions</div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
              >
                <Twitter className="h-6 w-6 text-white" />
                <div>
                  <div className="font-medium text-white">Twitter</div>
                  <div className="text-white/60">Updates and insights</div>
                </div>
              </a>
            </div>

            <div className="mt-8 p-6 bg-white/10 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-4">Partner With Us</h3>
              <p className="text-white/80 mb-6">
                Are you a project founder looking for real-time fraud detection, scam reputation scoring, 
                or on-chain risk assessments?
              </p>
              <button className="w-full py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-white/90 transition-colors">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}