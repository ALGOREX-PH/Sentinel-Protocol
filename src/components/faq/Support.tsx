import React from 'react';
import { MessageCircle, Ticket, Mail } from 'lucide-react';

export default function Support() {
  return (
    <div className="py-24 bg-sentinel-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-sentinel-white mb-4">Need Additional Help?</h2>
          <p className="text-sentinel-white/60 max-w-2xl mx-auto">
            Our support team is here to help you with any questions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sentinel-cyan/10 mb-6">
              <MessageCircle className="h-8 w-8 text-sentinel-cyan" />
            </div>
            <h3 className="text-xl font-semibold text-sentinel-white mb-3">Live Chat</h3>
            <p className="text-sentinel-white/60 mb-4">Get real-time assistance</p>
            <button className="px-6 py-3 bg-gradient-to-r from-sentinel-cyan to-sentinel-teal text-white rounded-lg font-medium hover:opacity-90 transition-all">
              Start Chat
            </button>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sentinel-cyan/10 mb-6">
              <Ticket className="h-8 w-8 text-sentinel-cyan" />
            </div>
            <h3 className="text-xl font-semibold text-sentinel-white mb-3">Help Desk</h3>
            <p className="text-sentinel-white/60 mb-4">Submit a support ticket</p>
            <button className="px-6 py-3 bg-gradient-to-r from-sentinel-cyan to-sentinel-teal text-white rounded-lg font-medium hover:opacity-90 transition-all">
              Open Ticket
            </button>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sentinel-cyan/10 mb-6">
              <Mail className="h-8 w-8 text-sentinel-cyan" />
            </div>
            <h3 className="text-xl font-semibold text-sentinel-white mb-3">Email Support</h3>
            <p className="text-sentinel-white/60 mb-4">Send us a message</p>
            <button className="px-6 py-3 bg-gradient-to-r from-sentinel-cyan to-sentinel-teal text-white rounded-lg font-medium hover:opacity-90 transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}