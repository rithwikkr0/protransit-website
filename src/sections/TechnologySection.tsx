import React from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { 
  Smartphone, 
  Server, 
  Cpu, 
  Database, 
  Radio, 
  Layers, 
  CheckCircle2, 
  Clock, 
  Code2,
  Cloud 
} from 'lucide-react';

export const TechnologySection: React.FC = () => {
  const layers = [
    {
      icon: Smartphone,
      title: 'Tier 1: Client Layer',
      tech: 'Flutter 3.x • Dart • Provider State Management',
      desc: 'Native Android mobile prototype providing high-contrast UI, offline caching, QR generation, OTP input, and live simulated telemetry.'
    },
    {
      icon: Server,
      title: 'Tier 2: API Gateway Layer',
      tech: 'FastAPI • RESTful Endpoints • JWT Auth (Planned)',
      desc: 'High-performance microservices handling shipment booking, partner dispatching, custody validation, and push notification triggers.'
    },
    {
      icon: Cpu,
      title: 'Tier 3: Multimodal Routing Engine',
      tech: 'Graph Theory • Time-Dependent Shortest Path (TDSP)',
      desc: 'Custom routing algorithm modeling city hubs as graph vertices and transit schedules as time-dependent weighted edges.'
    },
    {
      icon: Database,
      title: 'Tier 4: Data & Ledger Layer',
      tech: 'PostgreSQL • PostGIS • Event Sourcing',
      desc: 'Relational storage for hub geometries, locker inventories, courier telemetry, and immutable chain-of-custody audit logs.'
    },
    {
      icon: Radio,
      title: 'Tier 5: Edge & Transit Integration',
      tech: 'GTFS Realtime Feeds • Smart Locker IoT • WebSockets',
      desc: 'Integration connectors interfacing with municipal transport feeds, smart station lockers, and last-mile partner mobile apps.'
    }
  ];

  return (
    <section id="technology" className="py-20 md:py-28 relative bg-[#070B24] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="System Architecture"
          title="Engineered for Scalable Urban Mobility"
          subtitle="A five-tier coordination stack synchronizing mobile clients, deterministic route engines, and smart transit infrastructure."
        />

        {/* 5-Tier Architecture Stack */}
        <div className="space-y-4 max-w-4xl mx-auto mb-16">
          {layers.map((l) => {
            const Icon = l.icon;
            return (
              <div
                key={l.title}
                className="p-5 sm:p-6 rounded-2xl bg-[#0B1033] border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h4 className="text-base font-bold text-white font-display">
                      {l.title}
                    </h4>
                    <span className="text-xs font-mono font-medium text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 w-fit">
                      {l.tech}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                    {l.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Tech Stack Badges Grid */}
        <div className="max-w-4xl mx-auto mb-16 p-6 rounded-3xl bg-[#090E2E] border border-cyan-500/20">
          <h4 className="text-sm font-bold text-center uppercase tracking-widest text-cyan-400 font-display mb-4">
            Core Technology Components
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { name: 'Flutter + Dart', desc: 'Cross-platform reactive mobile UI' },
              { name: 'FastAPI Backend', desc: 'High-speed asynchronous Python services' },
              { name: 'PostgreSQL + PostGIS', desc: 'Spatial database & topology graphs' },
              { name: 'WebSocket Telemetry', desc: 'Realtime hub & parcel synchronization' },
              { name: 'JWT & OTP Auth', desc: 'Role tokens & 4-digit secret verification' },
              { name: 'Multimodal TDSP Engine', desc: 'Time-dependent shortest path graph solver' },
              { name: 'Geolocation Services', desc: 'Hub radius tracking & proximity dispatch' },
              { name: 'QR Handover Tokens', desc: 'Cryptographic station check-in verification' },
              { name: 'Role-Based Access Control', desc: 'Customer, Partner, Receiver, Admin RBAC' }
            ].map((t) => (
              <div key={t.name} className="p-3 rounded-xl bg-[#060A22] border border-white/10">
                <span className="text-xs font-bold text-white block font-display">{t.name}</span>
                <span className="text-[11px] text-slate-400 block font-sans mt-0.5">{t.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Differentiate: Current Prototype vs Future Architecture */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#0A0E2E] border border-white/10 p-6 sm:p-8 shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-display">
              Transparent Engineering Status
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 font-display">
              Current Prototype vs Production Architecture
            </h3>
            <p className="text-xs text-slate-400 mt-2 font-sans">
              Clearly separating what is built and demonstrable today from the proposed enterprise roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Current Prototype Card */}
            <div className="p-6 rounded-2xl bg-[#070B24] border border-emerald-500/30">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-4 font-display">
                <CheckCircle2 className="w-4 h-4" />
                <span>CURRENT WORKING PROTOTYPE (PROTRANSIT 2.0 MVP)</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300 font-sans">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  Flutter Android Native App (50.17 MB release APK verified)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  Multi-Role support: Customer, Partner, Receiver, Admin Operations
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  Deterministic mock route service for 6 Bengaluru hubs
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  Simulated QR code scanning & receiver OTP (1234) flow
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  In-memory state management & shipment history ledger
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  Automated test suites (flow_test and multi_role_test passed)
                </li>
              </ul>
            </div>

            {/* Future Production Card */}
            <div className="p-6 rounded-2xl bg-[#070B24] border border-cyan-500/20">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm mb-4 font-display">
                <Clock className="w-4 h-4" />
                <span>FUTURE PRODUCTION SYSTEM (PROPOSED)</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300 font-sans">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                  Real-time municipal GTFS transit API integration
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                  Cloud microservices on FastAPI with PostgreSQL database
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                  Hardware smart locker firmware & RFID access control
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                  Automated partner KYC verification & UPI escrow payments
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                  Machine learning for transit luggage capacity forecasting
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
