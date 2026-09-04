import React, { useState } from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { 
  PackagePlus, 
  Scale, 
  Route, 
  Building2, 
  Bus, 
  Bike, 
  KeyRound, 
  CheckCircle2 
} from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Create Shipment',
      short: 'Booking',
      desc: 'Enter pickup hub and destination address, select parcel category, and specify weight and size dimensions.',
      icon: PackagePlus,
      highlight: 'Permitted goods only'
    },
    {
      num: '02',
      title: 'Compare Options',
      short: 'Comparison',
      desc: 'Evaluate transparent delivery rates: ProTransit multimodal route (₹45) vs traditional couriers (₹85/₹95).',
      icon: Scale,
      highlight: '47% avg cost savings'
    },
    {
      num: '03',
      title: 'Select ProTransit',
      short: 'Route Plan',
      desc: 'Review the coordinated transit path connecting bus lines, metro transfer hubs, and designated micro-depots.',
      icon: Route,
      highlight: 'Multimodal backbone'
    },
    {
      num: '04',
      title: 'Drop at Hub',
      short: 'Hub Check-in',
      desc: 'Bring parcel to the nearest designated transit hub (e.g. Silk Board) and verify check-in using your unique QR code.',
      icon: Building2,
      highlight: 'QR verified check-in'
    },
    {
      num: '05',
      title: 'Inter-Hub Transit',
      short: 'In Transit',
      desc: 'Parcel is transported across the city via permitted public transit capacity (buses, metro, suburban rail).',
      icon: Bus,
      highlight: 'Zero extra road trips'
    },
    {
      num: '06',
      title: 'Last-Mile Partner',
      short: 'Partner Dispatch',
      desc: 'Authorized local delivery partner collects the parcel from the terminal hub for localized neighborhood delivery.',
      icon: Bike,
      highlight: 'Masked contact privacy'
    },
    {
      num: '07',
      title: 'Receiver OTP',
      short: 'OTP Handover',
      desc: 'Delivery partner arrives at recipient address. Recipient provides the secret 4-digit OTP (e.g. 1234).',
      icon: KeyRound,
      highlight: 'Cryptographic security'
    },
    {
      num: '08',
      title: 'Delivered',
      short: 'Completed',
      desc: 'Chain-of-custody completes. Shipment status transitions to Delivered with verified environmental impact.',
      icon: CheckCircle2,
      highlight: '3.2 kg CO₂ saved'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 relative bg-[#070B24] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Step-by-Step Logistics Flow"
          title="How ProTransit Works"
          subtitle="A seamless 8-step journey transforming public transit into an ultra-efficient urban freight network."
        />

        {/* Desktop Horizontal Interactive Stepper */}
        <div className="hidden lg:block mb-12">
          {/* Step buttons row */}
          <div className="grid grid-cols-8 gap-2 relative pb-8">
            {/* Connecting line */}
            <div className="absolute top-6 left-6 right-6 h-0.5 bg-slate-800 -z-0" />
            <div 
              className="absolute top-6 left-6 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300 -z-0"
              style={{ width: `${(activeStep / 7) * 94}%` }}
            />

            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === idx;
              const isPassed = activeStep >= idx;

              return (
                <button
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center group relative z-10 focus:outline-none"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isSelected
                        ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/40 scale-110 ring-4 ring-cyan-500/20'
                        : isPassed
                        ? 'bg-[#1A237E] text-cyan-300 border border-cyan-400/40'
                        : 'bg-[#0E153D] text-slate-500 border border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[11px] font-bold mt-3 transition-colors ${isSelected ? 'text-cyan-400' : 'text-slate-400'}`}>
                    {step.num}
                  </span>
                  <span className={`text-xs font-semibold mt-0.5 text-center leading-tight transition-colors ${isSelected ? 'text-white' : 'text-slate-500'}`}>
                    {step.short}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Step Details Card */}
          <div className="p-8 rounded-3xl bg-[#0D143D] border border-cyan-500/20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-extrabold text-cyan-400 font-display">
                  {steps[activeStep].num}
                </span>
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 mb-1">
                    {steps[activeStep].highlight}
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">
                    {steps[activeStep].title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-300 disabled:opacity-30 disabled:pointer-events-none transition-colors border border-white/10"
                >
                  Previous
                </button>
                <button
                  onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                  disabled={activeStep === steps.length - 1}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-[#1A237E] hover:bg-[#283593] text-white disabled:opacity-30 disabled:pointer-events-none transition-colors border border-cyan-400/30 shadow-md"
                >
                  Next Step
                </button>
              </div>
            </div>

            <p className="mt-4 text-base text-slate-300 max-w-3xl leading-relaxed">
              {steps[activeStep].desc}
            </p>
          </div>
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="p-5 rounded-2xl bg-[#0B1033] border border-white/10 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-cyan-400">
                      Step {step.num}
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/10">
                      {step.highlight}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1 font-display">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
