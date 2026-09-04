export interface TransitHub {
  id: string;
  name: string;
  shortName: string;
  type: string;
  location: string;
  coordinates: { x: number; y: number }; // For SVG visualization (percentage based)
  availableSlots: number;
  totalSlots: number;
  connectedRoutes: number;
  transitTypes: ('Bus' | 'Metro' | 'Railway' | 'Last Mile')[];
  description: string;
}

export const DEMO_HUBS: TransitHub[] = [
  {
    id: 'silk-board',
    name: 'Silk Board Hub',
    shortName: 'Silk Board',
    type: 'Interchange Station',
    location: 'Central Silk Board Junction, Outer Ring Rd',
    coordinates: { x: 30, y: 72 },
    availableSlots: 23,
    totalSlots: 40,
    connectedRoutes: 8,
    transitTypes: ['Bus', 'Metro', 'Last Mile'],
    description: 'Key southern junction connecting Koramangala, BTM, HSR Layout, and Electronic City.'
  },
  {
    id: 'btm',
    name: 'BTM Hub',
    shortName: 'BTM Layout',
    type: 'Feeder Hub',
    location: 'BTM 2nd Stage, Outer Ring Rd Feeder',
    coordinates: { x: 38, y: 55 },
    availableSlots: 17,
    totalSlots: 25,
    connectedRoutes: 5,
    transitTypes: ['Bus', 'Metro'],
    description: 'High-density residential and micro-business corridor linking to southern transit lines.'
  },
  {
    id: 'koramangala',
    name: 'Koramangala Hub',
    shortName: 'Koramangala',
    type: 'Commercial Micro-Hub',
    location: 'Sony World Junction, 80 Feet Rd',
    coordinates: { x: 50, y: 62 },
    availableSlots: 14,
    totalSlots: 20,
    connectedRoutes: 6,
    transitTypes: ['Bus', 'Last Mile'],
    description: 'Major startup and retail corridor connecting to Inner Ring Road transit.'
  },
  {
    id: 'majestic',
    name: 'Majestic Intermodal Terminal',
    shortName: 'Majestic',
    type: 'Central Intermodal Terminal',
    location: 'Kempegowda Bus Station & City Railway',
    coordinates: { x: 35, y: 32 },
    availableSlots: 31,
    totalSlots: 60,
    connectedRoutes: 12,
    transitTypes: ['Bus', 'Metro', 'Railway', 'Last Mile'],
    description: 'Bengaluru central transit nerve center with direct links to KSRTC, BMTC, Namma Metro, and Indian Railways.'
  },
  {
    id: 'indiranagar',
    name: 'Indiranagar Hub',
    shortName: 'Indiranagar',
    type: 'Transit Node',
    location: 'CMH Road Metro Station',
    coordinates: { x: 62, y: 40 },
    availableSlots: 19,
    totalSlots: 30,
    connectedRoutes: 7,
    transitTypes: ['Metro', 'Bus', 'Last Mile'],
    description: 'East-west metro corridor connecting central Bengaluru with the eastern tech belt.'
  },
  {
    id: 'whitefield',
    name: 'Whitefield Hub',
    shortName: 'Whitefield',
    type: 'Terminal Hub',
    location: 'Kadugodi Tree Park Metro Station',
    coordinates: { x: 82, y: 45 },
    availableSlots: 28,
    totalSlots: 50,
    connectedRoutes: 9,
    transitTypes: ['Metro', 'Railway', 'Last Mile'],
    description: 'Major eastern tech hub connecting ITPL, export zones, and suburban rail lines.'
  }
];

export interface TransitEdge {
  from: string;
  to: string;
  type: 'Bus' | 'Metro' | 'Railway' | 'Last Mile';
  time: string;
  frequency: string;
}

export const DEMO_EDGES: TransitEdge[] = [
  { from: 'silk-board', to: 'btm', type: 'Bus', time: '15m', frequency: 'Every 5 min' },
  { from: 'btm', to: 'majestic', type: 'Metro', time: '25m', frequency: 'Every 4 min' },
  { from: 'majestic', to: 'indiranagar', type: 'Metro', time: '18m', frequency: 'Every 5 min' },
  { from: 'indiranagar', to: 'whitefield', type: 'Metro', time: '30m', frequency: 'Every 6 min' },
  { from: 'silk-board', to: 'koramangala', type: 'Bus', time: '12m', frequency: 'Every 7 min' },
  { from: 'koramangala', to: 'indiranagar', type: 'Bus', time: '20m', frequency: 'Every 8 min' },
  { from: 'majestic', to: 'whitefield', type: 'Railway', time: '35m', frequency: 'Every 30 min' },
  { from: 'whitefield', to: 'receiver', type: 'Last Mile', time: '15m', frequency: 'On demand' }
];
