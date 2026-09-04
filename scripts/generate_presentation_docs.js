import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pptxgen from 'pptxgenjs';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outDir = path.resolve(__dirname, '../public/downloads');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// -------------------------------------------------------------
// 1. GENERATE PPTX
// -------------------------------------------------------------
async function generatePPTX() {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';
  pptx.author = 'ProTransit Team';
  pptx.company = 'Smart India Hackathon 2026';
  pptx.title = 'ProTransit - Connecting Cities. Moving Goods Smarter.';

  const C_DARK = '070B24';
  const C_INDIGO = '1A237E';
  const C_LIGHT_INDIGO = '3949AB';
  const C_CYAN = '00BCD4';
  const C_WHITE = 'FFFFFF';
  const C_GRAY = '94A3B8';
  const C_GREEN = '10B981';

  const slidesData = [
    {
      title: 'PROTRANSIT',
      subtitle: 'Connecting Cities. Moving Goods Smarter.',
      meta: 'Smart India Hackathon 2026 • Transportation & Logistics Track',
      bullets: [
        'A public-transit-powered urban logistics coordination platform.',
        'Connecting senders, designated transit hubs, permitted public transit capacity, and last-mile partners.',
        'Official Companion Presentation & Architecture Specification.'
      ]
    },
    {
      title: 'Problem Statement: Urban Mobility Challenges',
      subtitle: 'Cities are moving more. Roads are carrying more.',
      bullets: [
        'Urban Road Congestion: Explosive e-commerce growth puts thousands of isolated delivery two-wheelers on roads.',
        'Underutilized Transit Capacity: Scheduled buses, metros, and local trains run off-peak with significant unused cargo capacity.',
        'High Last-Mile Costs: Traditional couriers build duplicate fleets and private fulfillment centers, driving up costs.',
        'Fragmented Operations: Lack of digital synchronization between municipal transit systems and private last-mile partners.'
      ]
    },
    {
      title: 'The ProTransit Solution: Multimodal Backbone',
      subtitle: 'Turn existing mobility infrastructure into a logistics backbone.',
      bullets: [
        'Coordinated Permitted Movement: Parcels travel via authorized public transit capacity (buses, metros, trains).',
        'Designated Transit Hubs: Existing bus terminals and metro stations act as secure micro-depots and transfer points.',
        'Chain-of-Custody Verification: Strict end-to-end custody tracking via QR scanning at hubs and OTP on delivery.',
        'Independent Delivery Partners: Local riders perform the final first/last-mile segment, lowering overall trip distances.'
      ]
    },
    {
      title: 'End-to-End Workflow Architecture',
      subtitle: 'From Sender Handover to Final Delivery Confirmation',
      bullets: [
        '1. Sender creates parcel booking and compares delivery options on ProTransit.',
        '2. ProTransit proposes multimodal routing (Bus + Metro + Hub Handover + Last-Mile).',
        '3. Sender deposits parcel at designated Pickup Hub using secure QR code.',
        '4. Authorized transit transfers parcel between hubs (e.g. Silk Board -> BTM -> Majestic).',
        '5. Verified delivery partner picks up parcel from destination hub.',
        '6. Delivery partner hands parcel to receiver and validates 4-digit OTP (e.g. 1234) to complete delivery.'
      ]
    },
    {
      title: 'Price & Performance Comparison',
      subtitle: 'Substantial Cost & Carbon Advantage (Illustrative Prototype Data)',
      bullets: [
        'ProTransit Multimodal: ₹45 | 2h 20m | Bus + Metro + Hub + Last Mile | 3.2 kg CO₂ saved vs private fleet.',
        'Traditional Courier Partner: ₹85 | 1h 45m | Direct point-to-point road dispatch.',
        'Express On-Demand Delivery: ₹95 | 1h 35m | Single dedicated two-wheeler trip across city.',
        'Key Differentiator: Shared municipal transit infrastructure eliminates dedicated long-distance road trips.'
      ]
    },
    {
      title: 'Route Graph Engine: Algorithmic Model',
      subtitle: 'Mathematical Foundation for Transit-Logistics Scheduling',
      bullets: [
        'Graph Model G = (V, E): Vertices V = Transit Hubs (Bus stands, Metro stations). Edges E = Transit connections.',
        'Edge Weights: W(e) = f(transit_time, schedule_interval, cost, baggage_capacity, handover_delay).',
        'Deterministic Routing: Dijkstra / A* with time-dependent scheduling constraints (Time-Dependent Shortest Path).',
        'Future Intelligence: Machine learning models for hub capacity forecasting and demand prediction.'
      ]
    },
    {
      title: 'Bengaluru Demo Hub Network',
      subtitle: 'Proof-of-Concept Transit Network Topology',
      bullets: [
        'Silk Board Hub: Outer Ring Road junction • Bus + Metro interchange • 40 slots (23 available).',
        'BTM Hub: High-density residential hub • Bus + Metro feeder • 25 slots (17 available).',
        'Majestic Hub: Central intermodal terminal (KSRTC/BMTC/Namma Metro/IR) • 60 slots (31 available).',
        'Indiranagar, Whitefield & Koramangala Hubs: Key commercial & tech corridor drop/pickup points.'
      ]
    },
    {
      title: 'Security, Privacy & Chain of Custody',
      subtitle: 'Every handover leaves an immutable digital record',
      bullets: [
        'Unique Shipment ID: Unique parcel tracking identifier (e.g., TX10231).',
        'Pickup QR Code: Scanned at transit hub to confirm custody transfer.',
        'Timestamped Event Logs: Immutable record of each transit leg, bus loading, and metro transfer.',
        'Masked Communication: Delivery partner & customer phone numbers are shielded for privacy.',
        'Receiver OTP Verification: Final handover authenticated via one-time PIN (e.g. 1234).'
      ]
    },
    {
      title: 'Impact & Environmental Benefits',
      subtitle: 'Sustainable Urban Mobility for Indian Smart Cities',
      bullets: [
        'Reduced Traffic Congestion: Takes thousands of long-distance courier bike trips off arterial roads.',
        'Decarbonized Freight: Utilizes already-running electric and public mass transit systems (3.2 kg CO₂ saved per parcel).',
        'Affordable Urban Commerce: Empowers local MSMEs and citizens with up to 47% lower shipping rates.',
        'Supplemental Revenue for Transit: Provides municipal transport corporations with non-fare freight revenue.'
      ]
    },
    {
      title: 'Project Roadmap',
      subtitle: 'Phased Implementation Strategy',
      bullets: [
        'Phase 1 (Current Prototype): Flutter Android mobile app, simulated routing, QR/OTP verification, companion web presence.',
        'Phase 2 (Pilot Integration): Selected municipal corridor pilot, hub locker installation, delivery partner onboarding.',
        'Phase 3 (Production Scale): Cloud backend (FastAPI/PostgreSQL), live operator APIs, automated sorting, UPI escrow.',
        'Phase 4 (City Scaling & AI): Dynamic multi-city routing, autonomous hub sorting, predictive transit capacity allocation.'
      ]
    },
    {
      title: 'Prototype Deliverables & Verification',
      subtitle: 'Smart India Hackathon 2026 Working Prototype',
      bullets: [
        'Android Release APK: 48.13 MB, tested on Android API 34 with zero layout exceptions.',
        'End-to-End Flow Tested: Home -> Send Parcel -> Price Comparison -> Route -> QR -> Tracking -> Partner -> OTP -> Delivered.',
        'Web Companion: Production-grade responsive website with interactive hub graph, live demo flow, and download center.',
        'Code Quality: 100% passing analyzer, automated widget & integration flow tests.'
      ]
    }
  ];

  for (const s of slidesData) {
    const slide = pptx.addSlide();
    slide.background = { color: C_DARK };

    // Header bar
    slide.addText('PROTRANSIT • SIH 2026', {
      x: 0.8, y: 0.4, w: 10, h: 0.3,
      fontSize: 10, fontFace: 'Arial', color: C_CYAN, bold: true
    });

    // Title
    slide.addText(s.title, {
      x: 0.8, y: 0.7, w: 11, h: 0.8,
      fontSize: 24, fontFace: 'Arial', color: C_WHITE, bold: true
    });

    // Subtitle
    if (s.subtitle) {
      slide.addText(s.subtitle, {
        x: 0.8, y: 1.4, w: 11, h: 0.5,
        fontSize: 14, fontFace: 'Arial', color: C_CYAN
      });
    }

    // Bullets
    const bulletItems = s.bullets.map((b) => ({ text: b, options: { breakLine: true } }));
    slide.addText(bulletItems, {
      x: 0.8, y: 2.1, w: 11.5, h: 4.6,
      fontSize: 13, fontFace: 'Arial', color: 'CBD5E1', lineSpacing: 28, bullet: true
    });

    // Footer
    slide.addText('ProTransit — Connecting Cities. Moving Goods Smarter.', {
      x: 0.8, y: 6.8, w: 8, h: 0.3,
      fontSize: 9, fontFace: 'Arial', color: C_GRAY
    });
  }

  const pptxPath = path.join(outDir, 'ProTransit_SIH2026_Idea_Presentation.pptx');
  await pptx.writeFile({ fileName: pptxPath });
  console.log('✓ PPTX Generated:', pptxPath);
}

// -------------------------------------------------------------
// 2. GENERATE PDF
// -------------------------------------------------------------
async function generatePDF() {
  const pdfDoc = await PDFDocument.create();
  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const pagesData = [
    {
      title: 'PROTRANSIT',
      subtitle: 'Connecting Cities. Moving Goods Smarter.',
      badge: 'Smart India Hackathon 2026 — Official Idea Presentation',
      items: [
        'A public-transit-powered urban logistics coordination platform.',
        'Connecting Senders -> Pickup Hubs -> Public Transit (Bus/Metro/Rail) -> Destination Hubs -> Delivery Partners -> Receivers.',
        'Preserves strict chain of custody via Pickup QR and Receiver OTP.',
        'Eliminates duplicate long-distance road trips by utilizing existing permitted transit capacity.'
      ]
    },
    {
      title: 'Problem Statement & Urban Context',
      subtitle: 'Cities are moving more. Roads are carrying more.',
      badge: 'The Challenge',
      items: [
        'Urban Road Congestion: Skyrocketing on-demand parcel deliveries exacerbate peak-hour city traffic.',
        'Unused Public Transit Capacity: Buses, metros, and suburban trains run off-peak with empty baggage/parcel storage capacity.',
        'Escalating Last-Mile Costs: Direct point-to-point private couriers incur high operational overheads and duplicate infrastructure.',
        'Air Pollution & Carbon Emissions: Dedicated two-wheeler and van parcel runs contribute significantly to vehicular emissions.'
      ]
    },
    {
      title: 'The ProTransit Solution',
      subtitle: 'Turn existing mobility infrastructure into a logistics backbone.',
      badge: 'Core Concept',
      items: [
        'Multimodal Transit Backbone: Coordinates permitted parcel movement across scheduled bus and metro networks.',
        'Designated Transit Hubs: Utilizes existing bus stands and metro stations as secure handover and sorting points.',
        'Controlled Chain of Custody: High-security QR code check-in at hubs with encrypted receiver OTP verification.',
        'Verified Last-Mile Partners: Independent delivery riders perform first-mile and last-mile pickup and delivery.'
      ]
    },
    {
      title: 'Multimodal Routing & Price Advantage',
      subtitle: 'Demonstrated 47% Cost Savings & Lower Emissions',
      badge: 'Value Proposition (Illustrative Prototype Data)',
      items: [
        'ProTransit Multimodal: INR 45 | 2h 20m | Bus -> Metro -> Hub -> Last-Mile Partner | 3.2 kg CO2 Saved.',
        'Standard Private Courier: INR 85 | 1h 45m | Direct point-to-point courier road trip.',
        'Local Express Delivery: INR 95 | 1h 35m | Dedicated two-wheeler rider trip across city.',
        'Shared Infrastructure Advantage: By piggybacking on scheduled public transit, marginal cost per parcel is drastically lower.'
      ]
    },
    {
      title: 'Graph Routing Engine & Architecture',
      subtitle: 'Deterministic Network Scheduling Model',
      badge: 'Technical Architecture',
      items: [
        'Mathematical Graph Model G = (V, E): Vertices V = Transit Hubs; Edges E = Transit schedules (Bus/Metro/Rail).',
        'Optimization Function: Min(Cost, Transfer Delay, Carbon Impact) subject to parcel dimension and weight limits.',
        'Algorithmic Implementation: Time-Dependent Shortest Path (TDSP) based on Dijkstra and A* variations.',
        'Scalable Future System: Microservices on FastAPI, PostgreSQL, WebSockets for live telemetry, and Cloudflare CDN.'
      ]
    },
    {
      title: 'Chain-of-Custody & Trust Model',
      subtitle: 'Every Handover Leaves an Immutable Trace',
      badge: 'Security & Verification',
      items: [
        'Unique Shipment ID: Unique parcel tracking identifier (e.g. TX10231).',
        'Pickup QR Code: Scanned by hub operator at pickup hub to initiate transit journey.',
        'Real-time Transit Timeline: Tracks parcel arrival, metro transfers, and dispatch to last-mile partner.',
        'Masked Communication: Customer and rider contact details are completely protected through masked routing.',
        'Receiver OTP Verification: Parcel handed over only upon entering the secret 4-digit OTP (e.g. 1234).'
      ]
    },
    {
      title: 'Prototype Status & SIH 2026 Deliverables',
      subtitle: 'Fully Verified Android App & Web Presence',
      badge: 'Current Implementation',
      items: [
        'Android Release APK: 48.13 MB, tested on Android API 34 with 0 layout overflows and 0 analyzer issues.',
        'Tested End-to-End Flow: 14-screen flow verified from Home to Send Parcel, Price Comparison, QR, Tracking, and OTP.',
        'Responsive Web Companion: Modern React + TypeScript + Tailwind website with interactive hub graph & browser demo.',
        'Cloudflare Deployment: Deployment-ready for global edge distribution via Cloudflare Pages.'
      ]
    },
    {
      title: 'Project Roadmap & Scaling',
      subtitle: 'From SIH Prototype to City-Wide Deployment',
      badge: 'Proposed Implementation Phases',
      items: [
        'Phase 1 (Prototype): Flutter Android mobile app, simulated routing engine, mock data, and documentation.',
        'Phase 2 (Pilot Corridor): Partnership with municipal transport corporation for single pilot route with smart lockers.',
        'Phase 3 (Production Scale): Real-time GTFS transit integration, partner app, UPI escrow, and automated sorting.',
        'Phase 4 (City Intelligence): AI-powered capacity forecasting, dynamic route pricing, and statewide network expansion.'
      ]
    }
  ];

  for (const p of pagesData) {
    const page = pdfDoc.addPage([842, 595]); // A4 Landscape (points)

    // Background
    page.drawRectangle({
      x: 0, y: 0, width: 842, height: 595,
      color: rgb(7 / 255, 11 / 255, 36 / 255)
    });

    // Top Accent line
    page.drawRectangle({
      x: 40, y: 555, width: 762, height: 2,
      color: rgb(0 / 255, 188 / 255, 212 / 255)
    });

    // Badge
    page.drawText(p.badge.toUpperCase(), {
      x: 40, y: 535,
      size: 10,
      font: helveticaBold,
      color: rgb(0 / 255, 188 / 255, 212 / 255)
    });

    // Title
    page.drawText(p.title, {
      x: 40, y: 495,
      size: 26,
      font: helveticaBold,
      color: rgb(1, 1, 1)
    });

    // Subtitle
    page.drawText(p.subtitle, {
      x: 40, y: 468,
      size: 14,
      font: helvetica,
      color: rgb(148 / 255, 163 / 255, 184 / 255)
    });

    // Items
    let yPos = 410;
    for (const item of p.items) {
      // Bullet dot
      page.drawCircle({
        x: 48, y: yPos + 4, size: 3,
        color: rgb(0 / 255, 188 / 255, 212 / 255)
      });

      // Wrapped text simulation
      page.drawText(item, {
        x: 64, y: yPos,
        size: 12,
        font: helvetica,
        color: rgb(226 / 255, 232 / 255, 240 / 255),
        lineHeight: 18,
        maxWidth: 730
      });
      yPos -= 50;
    }

    // Bottom Footer
    page.drawText('PROTRANSIT • Smart India Hackathon 2026 • Official Concept Presentation', {
      x: 40, y: 35,
      size: 9,
      font: helvetica,
      color: rgb(100 / 255, 116 / 255, 139 / 255)
    });
  }

  const pdfBytes = await pdfDoc.save();
  const pdfPath = path.join(outDir, 'ProTransit_SIH2026_Idea_Presentation.pdf');
  fs.writeFileSync(pdfPath, pdfBytes);
  console.log('✓ PDF Generated:', pdfPath);
}

async function run() {
  await generatePPTX();
  await generatePDF();
  console.log('All presentation files created successfully!');
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
