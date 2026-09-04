import React from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { 
  Hash, 
  QrCode, 
  CheckCircle2, 
  Truck, 
  Building2, 
  Bike, 
  KeyRound, 
  ShieldCheck, 
  Lock, 
  PhoneOff, 
  FileCheck2 
} from 'lucide-react';

export const SecuritySection: React.FC = () => {
  const steps = [
    { icon: Hash, label: 'Shipment ID', desc: 'Unique tracking identifier assigned (e.g. TX10231)' },
    { icon: QrCode, label: 'QR Verification', desc: 'Digital check-in generated for station hub scan' },
    { icon: CheckCircle2, label: 'Pickup Logged', desc: 'Operator scans QR, confirms parcel custody at hub' },
    { icon: Truck, label: 'Transit Telemetry', desc: 'Timestamped departure and transit vehicle loading' },
    { icon: Building2, label: 'Hub Handover', desc: 'Transfer logged between connecting lines at central terminal' },
    { icon: Bike, label: 'Partner Dispatch', desc: 'Last-mile partner receives custody from terminal lockers' },
    { icon: KeyRound, label: 'Receiver OTP', desc: 'Final verification code (1234) authenticated on doorstep' },
    { icon: ShieldCheck, label: 'Delivered', desc: 'Immutable ledger record marked completed' }
  ];

  const pillars = [
    {
      icon: Lock,
      title: 'Cryptographic Custody Handover',
      desc: 'No parcel moves between transit actors without physical digital proof: QR code scan at origin and 4-digit OTP at destination.'
    },
    {
      icon: PhoneOff,
      title: 'Masked Communication Privacy',
      desc: 'Delivery partners and customers communicate through virtual masked proxies. Personal mobile numbers are never revealed.'
    },
    {
      icon: FileCheck2,
      title: 'Immutable Audit Trail',
      desc: 'Every scan, transit transfer, and doorstep handover is logged with precise timestamps, actor identities, and location telemetry.'
    }
  ];

  return (
    <section id="security" className="py-20 md:py-28 relative bg-[#070B24] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Chain-of-Custody & Trust"
          title="Every handover leaves a trace."
          subtitle="A tamper-evident digital custody protocol ensuring total accountability from sender deposit to receiver verification."
        />

        {/* 8-Stage Chain of Custody Stepper */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0C1238] border border-cyan-500/20 shadow-2xl mb-16">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-display">
              End-to-End Custody Lifecycle
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white mt-1 font-display">
              Continuous Digital Chain of Ownership
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col items-center text-center group hover:border-cyan-400/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-2 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 mb-0.5">
                    Stage 0{idx + 1}
                  </span>
                  <span className="text-xs font-bold text-white font-display line-clamp-1">
                    {s.label}
                  </span>
                  <p className="text-[10px] text-slate-400 mt-1 leading-tight font-sans">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="p-7 rounded-3xl bg-[#090E2E] border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 font-display">
                    {p.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 text-xs text-slate-500 font-medium">
                  Verified prototype mechanism
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
