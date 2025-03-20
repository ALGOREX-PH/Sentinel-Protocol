import React from 'react';
import { Shield, Twitter, Github, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-sentinel-dark-900 border-t border-sentinel-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-sentinel-cyan" />
              <span className="text-xl font-bold">Sentinel Protocol</span>
            </div>
            <p className="text-sentinel-white/60 text-sm">
              Protecting the crypto ecosystem through AI and community-driven security.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sentinel-white/60">
              <li><a href="#" className="hover:text-sentinel-cyan transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-sentinel-cyan transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-sentinel-cyan transition-colors">Statistics</a></li>
              <li><a href="#" className="hover:text-sentinel-cyan transition-colors">News</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sentinel-white/60">
              <li><a href="#" className="hover:text-sentinel-cyan transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-sentinel-cyan transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-sentinel-cyan transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-sentinel-cyan transition-colors">Security</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-sentinel-white/60 mb-4">
              Need help? Our security team is available 24/7
            </p>
            <button className="bg-sentinel-cyan hover:bg-sentinel-teal text-sentinel-white px-6 py-2 rounded-lg font-medium transition-colors">
              Contact Support
            </button>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-sentinel-dark-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sentinel-white/60 text-sm">
            © 2025 Sentinel Protocol. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sentinel-white/60 hover:text-sentinel-cyan transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-sentinel-white/60 hover:text-sentinel-cyan transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-sentinel-white/60 hover:text-sentinel-cyan transition-colors">
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}