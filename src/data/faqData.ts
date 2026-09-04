export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const FAQS: FaqItem[] = [
  {
    question: 'How does ProTransit work?',
    answer: 'ProTransit is an urban logistics coordination platform. When a sender creates a parcel request, our routing engine schedules movement across designated transit hubs (bus terminals, metro stations, railway stations) and authorized public-transit capacity. A verified last-mile delivery partner picks up the parcel at the destination hub and delivers it to the receiver, completing the handover with a 4-digit OTP.',
    category: 'Concept'
  },
  {
    question: 'Does ProTransit use passengers to carry parcels?',
    answer: 'No. ProTransit strictly does NOT rely on random passengers or commuters to carry parcels. The platform coordinates permitted, authorized transit capacity (such as dedicated off-peak bus storage, metro utility compartments, and secure hub lockers). Parcels are handled exclusively by verified station operators and designated delivery partners.',
    category: 'Operations'
  },
  {
    question: 'Is the public transit integration real?',
    answer: 'The current application is an advanced demonstration prototype developed for Smart India Hackathon 2026. Real-world operational deployment would require formal municipal authorization, statutory compliance, and API integration with regional transport corporations (such as BMTC, BMRCL, or Indian Railways).',
    category: 'Status'
  },
  {
    question: 'Are the displayed prices real market rates?',
    answer: 'No. The prices displayed in the application (e.g., ₹45 for ProTransit vs ₹85/₹95 for private couriers) are illustrative prototype demonstration figures designed to showcase the economic efficiency of shared public infrastructure compared to dedicated point-to-point road dispatch.',
    category: 'Economics'
  },
  {
    question: 'Does ProTransit own its own delivery fleet?',
    answer: 'No. ProTransit is designed as an asset-light coordination platform. Rather than purchasing and maintaining a proprietary vehicle fleet, it integrates with existing municipal transit for intermediate trunk movement and connects with independent local delivery partners for flexible first- and last-mile fulfillment.',
    category: 'Business Model'
  },
  {
    question: 'Is the Android application prototype available for installation?',
    answer: 'Yes! The verified native Android release APK (48.13 MB) is available directly in the Download Center on this website and via our official GitHub Releases repository.',
    category: 'Product'
  }
];
