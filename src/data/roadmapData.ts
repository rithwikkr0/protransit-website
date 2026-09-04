export interface RoadmapPhase {
  phase: string;
  title: string;
  badge: string;
  status: 'completed' | 'in_progress' | 'planned';
  timeline: string;
  milestones: string[];
}

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    phase: 'PHASE 1',
    title: 'Prototype & Concept Validation',
    badge: 'Completed',
    status: 'completed',
    timeline: 'SIH 2026 Milestone',
    milestones: [
      'Native Flutter Android mobile application prototype',
      'End-to-end 14-screen multimodal booking & tracking flow',
      'Simulated graph routing engine & transit hub discovery',
      'Pickup QR code generation & receiver OTP (1234) handover verification',
      'Delivery partner dashboard & masked communication privacy layer',
      'Companion web presence & automated Cloudflare Pages deployment'
    ]
  },
  {
    phase: 'PHASE 2',
    title: 'Pilot Corridor Integration',
    badge: 'Proposed',
    status: 'in_progress',
    timeline: 'Q3 - Q4 2026',
    milestones: [
      'Transit operator alignment (single municipal pilot corridor)',
      'Designated physical hub locker installations at 3 pilot stations',
      'Onboarding and KYC verification for initial cohort of delivery riders',
      'Live timetable synchronization with municipal GTFS feeds',
      'Safety and prohibited items scanning protocol validation'
    ]
  },
  {
    phase: 'PHASE 3',
    title: 'Production Scale & Platform APIs',
    badge: 'Future Plan',
    status: 'planned',
    timeline: '2027',
    milestones: [
      'Production cloud backend on FastAPI, PostgreSQL, and WebSockets',
      'Automated smart-locker RFID/barcode lockers at major terminals',
      'Integrated UPI escrow payment and dynamic partner payout calculation',
      'Real-time IoT beacon tracking inside transit vehicles',
      'Merchant API SDK for direct e-commerce & MSME store integrations'
    ]
  },
  {
    phase: 'PHASE 4',
    title: 'Predictive Transit Intelligence',
    badge: 'Future Vision',
    status: 'planned',
    timeline: '2027 - 2028',
    milestones: [
      'Machine learning models for transit luggage capacity forecasting',
      'Dynamic multi-modal route optimization during peak hours',
      'Inter-city state transport corporation (STC) freight coordination',
      'Carbon credit auditing and municipality green freight incentives'
    ]
  }
];
