export type RiskLevel = 'safe' | 'high-risk' | 'caution';
export type SmartContractStatus = 'verified' | 'suspicious' | 'pending';
export type CommunityTrust = 'high' | 'medium' | 'low';

export interface Project {
  id: string;
  name: string;
  logo: string;
  category: string;
  riskScore: number;
  riskLevel: RiskLevel;
  smartContract: SmartContractStatus;
  communityTrust: CommunityTrust;
  upvotes: number;
  downvotes: number;
}