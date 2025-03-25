import React from 'react';
import { FileCheck, Users } from 'lucide-react';

const auditStatus = [
  { name: 'Smart Contract Audit', status: 'complete' },
  { name: 'Penetration Testing', status: 'complete' },
  { name: 'Security Assessment', status: 'pending' },
];

const partners = [
  { name: 'CertiK', logo: 'https://www.certik.com/favicon.ico' },
  { name: 'Trail of Bits', logo: 'https://www.trailofbits.com/favicon.ico' },
  { name: 'PeckShield', logo: 'https://peckshield.com/favicon.ico' },
  { name: 'Hacken', logo: 'https://hacken.io/favicon.ico' },
];

export default function SecurityStandards() {
  return (
    <div className="py-24 bg-sentinel-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-sentinel-white mb-16">
          Security Verification Standards
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-sentinel-dark-800/50 rounded-xl p-6 border border-sentinel-dark-700">
            <div className="flex items-center gap-3 mb-6">
              <FileCheck className="h-6 w-6 text-sentinel-cyan" />
              <h3 className="text-xl font-semibold text-sentinel-white">
                Audit Status
              </h3>
            </div>
            
            <div className="space-y-4">
              {auditStatus.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between p-3 rounded-lg bg-sentinel-dark-700/30"
                >
                  <span className="text-sentinel-white">{item.name}</span>
                  <div className={`px-3 py-1 rounded-full text-sm ${
                    item.status === 'complete'
                      ? 'bg-green-500/10 text-green-500'
                      : 'bg-sentinel-gold/10 text-sentinel-gold'
                  }`}>
                    {item.status === 'complete' ? 'Complete' : 'Pending'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-sentinel-dark-800/50 rounded-xl p-6 border border-sentinel-dark-700">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-6 w-6 text-sentinel-cyan" />
              <h3 className="text-xl font-semibold text-sentinel-white">
                Verified Partners
              </h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex items-center gap-3 p-3 rounded-lg bg-sentinel-dark-700/30"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-6 h-6"
                  />
                  <span className="text-sentinel-white">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}