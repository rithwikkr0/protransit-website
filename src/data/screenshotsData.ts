export interface ScreenshotItem {
  id: string;
  title: string;
  step: string;
  description: string;
  image: string;
  category: 'core_flow' | 'security' | 'hubs' | 'partner';
}

export const SCREENSHOTS: ScreenshotItem[] = [
  {
    id: 'home',
    title: 'Dashboard & Quick Actions',
    step: '01',
    description: 'City dashboard with quick actions (Send Parcel, Compare Prices, Track Shipment, Find Hub), impact metrics, and active shipment TX10231.',
    image: '/screenshots/01_home.png',
    category: 'core_flow'
  },
  {
    id: 'send_parcel',
    title: 'Parcel Specifications',
    step: '02',
    description: 'Input origins, destinations (Silk Board → Whitefield), weight (2.0 kg), package size (Small/Medium/Large), and permitted category checks.',
    image: '/screenshots/02_send_parcel.png',
    category: 'core_flow'
  },
  {
    id: 'price_comparison',
    title: 'Multimodal Comparison',
    step: '03',
    description: 'Live comparison highlighting ProTransit at ₹45 (47% lower cost) with multimodal transit steps vs private couriers at ₹85 and ₹95.',
    image: '/screenshots/03_price_comparison.png',
    category: 'core_flow'
  },
  {
    id: 'route_details',
    title: 'Multimodal Route Plan',
    step: '04',
    description: 'Turn-by-turn logistics path: Silk Board Hub (Bus) → BTM Transfer (Metro) → Majestic Hub → QuickMove Partner → Whitefield.',
    image: '/screenshots/04_route_details.png',
    category: 'core_flow'
  },
  {
    id: 'confirmation_qr',
    title: 'Shipment QR Code',
    step: '05',
    description: 'Unique pickup QR code generated for high-contrast scanning by transit hub operators, establishing immutable chain-of-custody transfer.',
    image: '/screenshots/06_qr_code.png',
    category: 'security'
  },
  {
    id: 'tracking',
    title: 'Live Transit Telemetry',
    step: '06',
    description: 'Bengaluru route visualization showing current parcel location at BTM Hub alongside full timestamped transit timeline.',
    image: '/screenshots/07_tracking.png',
    category: 'core_flow'
  },
  {
    id: 'partner',
    title: 'Delivery Partner Handover',
    step: '07',
    description: 'QuickMove last-mile partner profile with masked communication privacy safeguards protecting customer phone numbers.',
    image: '/screenshots/08_partner.png',
    category: 'partner'
  },
  {
    id: 'otp',
    title: 'Receiver OTP Verification',
    step: '08',
    description: 'Cryptographic receiver confirmation requiring 4-digit code (1234) before custody can be released by delivery partner.',
    image: '/screenshots/09_otp.png',
    category: 'security'
  },
  {
    id: 'delivered',
    title: 'Delivery Completed & Impact',
    step: '09',
    description: 'Delivery confirmation receipt displaying ₹45 transit cost and 3.2 kg CO₂ saved estimate vs private road courier.',
    image: '/screenshots/10_delivered.png',
    category: 'core_flow'
  },
  {
    id: 'history',
    title: 'Updated History Ledger',
    step: '10',
    description: 'Dynamic shipment history reflecting all 4 delivered parcels, 0 active in transit, and ₹165 total logistics spend.',
    image: '/screenshots/11_history.png',
    category: 'core_flow'
  },
  {
    id: 'hubs',
    title: 'Transit Hub Discovery',
    step: '11',
    description: 'Live availability of city transit hubs with real-time locker occupancy indicators, connected lines, and operating hours.',
    image: '/screenshots/12_hubs.png',
    category: 'hubs'
  },
  {
    id: 'network',
    title: 'City Multimodal Graph',
    step: '12',
    description: 'High-contrast schematic map connecting Silk Board, BTM, Majestic, Indiranagar, and Whitefield via Bus, Metro, and Rail.',
    image: '/screenshots/13_network.png',
    category: 'hubs'
  },
  {
    id: 'about_dialog',
    title: 'SIH 2026 Project Dialog',
    step: '13',
    description: 'Official Smart India Hackathon concept modal presenting core mission, problem statement, and prototype boundary disclosures.',
    image: '/screenshots/15_about_dialog.png',
    category: 'security'
  },
  {
    id: 'partner_dashboard',
    title: 'Partner Mode Operations',
    step: '14',
    description: 'Dedicated interface for authorized last-mile delivery partners to accept parcels, navigate to pickup hubs, and complete deliveries.',
    image: '/screenshots/16_partner_dashboard.png',
    category: 'partner'
  }
];
