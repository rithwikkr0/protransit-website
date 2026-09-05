export interface TeamMember {
  name: string;
  role: string;
  contribution: string;
  initials: string;
  github?: string;
  isLead?: boolean;
}

export const PROJECT_METADATA = {
  projectName: 'PROTRANSIT',
  version: 'ProTransit 2.0',
  edition: 'SIH 2026 MVP',
  tagline: 'Connecting Cities. Moving Goods Smarter.',
  hackathon: 'Smart India Hackathon 2026',
  category: 'Software Edition',
  domain: 'Transportation & Logistics / Smart Mobility',
  theme: 'Urban Freight Decongestion & Public Transit Utilization',
  lead: 'Rithwik K R',
  githubUser: 'rithwikkr0',
  githubRepoName: 'protransit-website',
  githubUrl: 'https://github.com/rithwikkr0/protransit-website',
  releaseApkName: 'protransit-release.apk',
  apkSizeMb: '50.17 MB',
  apkReleaseTag: 'ProTransit 2.0 — SIH 2026 MVP'
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Rithwik K R',
    role: 'Project Lead & Full-Stack / Mobile Architect',
    contribution: 'Mobile application architecture (Flutter), end-to-end verification, web companion platform, and multimodal routing engine design.',
    initials: 'RK',
    github: 'https://github.com/rithwikkr0',
    isLead: true
  },
  {
    name: 'SIH Team Member 2',
    role: 'Logistics Operations & Transit Research',
    contribution: 'Public transit capacity analysis, hub placement modeling, and transit authority regulatory framework.',
    initials: 'TM',
    isLead: false
  },
  {
    name: 'SIH Team Member 3',
    role: 'Backend & Cloud Infrastructure',
    contribution: 'API specification, microservice data models, GTFS routing integration, and database schema design.',
    initials: 'TM',
    isLead: false
  },
  {
    name: 'SIH Team Member 4',
    role: 'Security & Chain of Custody',
    contribution: 'Cryptographic handover protocols, masked communication routing, QR/OTP validation workflows.',
    initials: 'TM',
    isLead: false
  },
  {
    name: 'SIH Team Member 5',
    role: 'UI/UX & Frontend Design',
    contribution: 'User experience journeys for senders, station operators, and last-mile delivery riders.',
    initials: 'TM',
    isLead: false
  },
  {
    name: 'SIH Team Member 6',
    role: 'Impact Analysis & Business Modeling',
    contribution: 'Carbon reduction metrics, municipal non-fare revenue modeling, and cost comparison analytics.',
    initials: 'TM',
    isLead: false
  }
];
