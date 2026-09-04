export interface DeliveryOption {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  duration: string;
  transfers: number;
  transitChain: string[];
  co2Saved: string;
  highlightBadge?: string;
  features: string[];
  recommended?: boolean;
}

export const COMPARISON_OPTIONS: DeliveryOption[] = [
  {
    id: 'protransit',
    name: 'ProTransit Multimodal',
    subtitle: 'Public Transit Network',
    price: 45,
    duration: '2h 20m',
    transfers: 2,
    transitChain: ['Bus', 'Metro', 'Transit Hub', 'Last-Mile Partner'],
    co2Saved: '3.2 kg CO₂ saved vs private courier',
    highlightBadge: 'LOWEST COST',
    recommended: true,
    features: [
      'Shared Municipal Infrastructure',
      'Lower Road Congestion',
      'Eco-Friendly Electric Transit',
      'Secured Hub Lockers & QR Check-in',
      'Masked Partner Handover',
      'Receiver 4-Digit OTP Confirmation'
    ]
  },
  {
    id: 'courier_standard',
    name: 'Courier Partner A',
    subtitle: 'Direct Point-to-Point Courier',
    price: 85,
    duration: '1h 45m',
    transfers: 0,
    transitChain: ['Direct Courier Bike'],
    co2Saved: 'Baseline emissions',
    features: [
      'Private vehicle dispatch',
      'Higher road congestion footprint',
      'Single carrier custody',
      'Doorstep pickup & drop'
    ]
  },
  {
    id: 'express_local',
    name: 'Local Express Delivery',
    subtitle: 'On-Demand Hyperlocal Partner',
    price: 95,
    duration: '1h 35m',
    transfers: 0,
    transitChain: ['On-Demand Rider'],
    co2Saved: 'High per-parcel emissions',
    features: [
      'Immediate dedicated dispatch',
      'Cross-city dedicated two-wheeler trip',
      'High per-mile consumer cost',
      'Vulnerable to peak traffic delays'
    ]
  }
];
