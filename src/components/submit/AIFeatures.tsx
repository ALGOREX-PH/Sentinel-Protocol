import React from 'react';
import { Brain, Shield, Users } from 'lucide-react';
import Feature from './Feature';

export default function AIFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      <Feature
        icon={Brain}
        title="AI-Powered Analysis"
        description="Automated risk assessment and fraud detection for comprehensive project evaluation."
      />
      <Feature
        icon={Shield}
        title="Security First"
        description="Thorough smart contract analysis and vulnerability detection systems."
      />
      <Feature
        icon={Users}
        title="Community Validation"
        description="Transparent review process with community-driven evaluation system."
      />
    </div>
  );
}