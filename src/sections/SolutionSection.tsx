import React from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { 
  Network, 
  Scale, 
  Building2, 
  QrCode, 
  KeyRound, 
  Compass, 
  Bike, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

export const SolutionSection: React.FC = () => {
  const features = [
    {
      icon: Network,
      title: 'Smart Route Selection',
      desc: 'Multimodal graph routing engine automatically evaluates schedule intervals, bus lines, and metro connections to calculate optimal transit paths.'
    },
    {
      icon: Scale,
      title: 'Price Comparison',
      desc: 'Real-time rate transparency showing cost and carbon savings of shared municipal transit capacity against conventional private courier services.'
    },
    {
      icon: Building2,
      title: 'Transit Hub Network',
      desc: 'Repurposes bus terminals, metro stations, and railway stops into designated micro-depots and handover hubs with smart locker availability.'
    },
    {
      icon: QrCode,
      title: 'QR Verification',
      desc: 'Unique pickup QR codes scanned at transit hubs verify custody transfer from sender to authorized transit handling personnel.'
    },
    {
      icon: KeyRound,
      title: 'OTP Handover',
      desc: 'Strict end-of-chain cryptographic verification requiring a 4-digit one-time code from the recipient before the package can be marked delivered.'
    },
    {
      icon: Compass,
      title: 'Shipment Tracking',
      desc: 'Live telemetry and timeline updates tracing package arrival at transfer hubs, transit vehicle loading, and delivery partner dispatch.'
    },
    {
      icon: Bike,
      title: 'Partner Coordination',
      desc: 'Dedicated interface for last-mile delivery partners to pick up parcels at terminal transit hubs and complete localized deliveries.'
    },
    {
      icon: ShieldCheck,
      title: 'Chain-of-Custody Visibility',
      desc: 'Every single handover between sender, hub operator, transit carrier, delivery partner, and receiver is digitally logged and timestamped.'
    }
  ];

  return (
    <section id="solution" className="py-20 md:py-28 relative bg-[#090E2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="The ProTransit Solution"
          title="Turn existing mobility infrastructure into a logistics backbone."
          subtitle="By digitally orchestrating permitted transit capacity, ProTransit creates an asset-light, eco-friendly urban logistics layer without adding dedicated delivery vehicles to city roads."
        />

        {/* Visual Architecture Summary Banner */}
        <div className="mb-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#1A237E]/60 to-[#0D1757]/80 border border-cyan-500/20 backdrop-blur-md">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-display">
              End-to-End Orchestration Flow
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white mt-1 font-display">
              How Parcels Move Without Dedicated Long-Distance Road Couriers
            </h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-bold text-slate-200">
            <span className="px-3.5 py-2 rounded-xl bg-white/10 border border-white/15 text-cyan-300">SENDER</span>
            <ArrowRight className="w-4 h-4 text-slate-500" />
            <span className="px-3.5 py-2 rounded-xl bg-white/10 border border-white/15 text-indigo-300">PICKUP HUB</span>
            <ArrowRight className="w-4 h-4 text-slate-500" />
            <span className="px-3.5 py-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">BUS / METRO / RAIL</span>
            <ArrowRight className="w-4 h-4 text-slate-500" />
            <span className="px-3.5 py-2 rounded-xl bg-white/10 border border-white/15 text-indigo-300">TRANSFER HUB</span>
            <ArrowRight className="w-4 h-4 text-slate-500" />
            <span className="px-3.5 py-2 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300">LAST-MILE PARTNER</span>
            <ArrowRight className="w-4 h-4 text-slate-500" />
            <span className="px-3.5 py-2 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-300">RECEIVER (OTP)</span>
          </div>
        </div>

        {/* 8 Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="p-6 rounded-2xl bg-[#070B24] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-start group hover:-translate-y-1 shadow-lg shadow-black/20"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2 font-display">
                  {f.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
