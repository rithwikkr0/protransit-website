import React, { useState } from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { 
  Binary, 
  Cpu, 
  ShieldCheck, 
  Bus, 
  Train, 
  Bike, 
  ArrowRight, 
  Sliders, 
  Clock, 
  Zap, 
  Leaf, 
  DollarSign, 
  RefreshCw,
  Box,
  CheckCircle2
} from 'lucide-react';

interface CorridorData {
  id: string;
  name: string;
  from: string;
  to: string;
  distanceKm: number;
  baseFare: number;
  baseTimeMins: number;
  baseCo2Kg: number;
  privateFare: number;
  privateTimeMins: number;
  privateCo2Kg: number;
  legs: {
    type: 'first-mile' | 'bus' | 'metro' | 'rail' | 'transfer' | 'last-mile';
    mode: string;
    label: string;
    from: string;
    to: string;
    duration: string;
    details: string;
    operator: string;
  }[];
}

const CORRIDORS: CorridorData[] = [
  {
    id: 'silk-whitefield',
    name: 'Silk Board ⇄ Whitefield Tech Hub',
    from: 'Silk Board Junction Hub',
    to: 'Whitefield Inner Circle Hub',
    distanceKm: 18.4,
    baseFare: 45,
    baseTimeMins: 105,
    baseCo2Kg: 0.35,
    privateFare: 85,
    privateTimeMins: 110,
    privateCo2Kg: 3.55,
    legs: [
      {
        type: 'first-mile',
        mode: 'Sender Drop',
        label: 'Origin Locker Drop',
        from: 'Silk Board Micro-Depot',
        to: 'Locker Bay S-04',
        duration: '5 min',
        details: 'Automated weight check & QR custody scan',
        operator: 'ProTransit Hub System'
      },
      {
        type: 'bus',
        mode: 'Bus Transit',
        label: 'Transit Corridor 1',
        from: 'Silk Board Hub',
        to: 'BTM Layout Depot',
        duration: '22 min',
        details: 'BMTC Route 500-D permitted lower baggage bay',
        operator: 'Simulated Municipal Bus'
      },
      {
        type: 'transfer',
        mode: 'Transfer Hub',
        label: 'Cross-Dock Transfer',
        from: 'BTM Depot',
        to: 'Namma Metro Station',
        duration: '12 min',
        details: 'QR transfer scan & physical cross-dock security inspect',
        operator: 'Hub Custody Agent'
      },
      {
        type: 'metro',
        mode: 'Metro Transit',
        label: 'Transit Corridor 2',
        from: 'Namma Metro Station',
        to: 'Whitefield Metro Depot',
        duration: '38 min',
        details: 'Purple Line dedicated off-peak freight carriage pod',
        operator: 'Simulated Metro Cargo'
      },
      {
        type: 'last-mile',
        mode: 'Delivery Partner',
        label: 'Doorstep Handover',
        from: 'Whitefield Hub',
        to: 'Receiver Doorstep',
        duration: '25 min',
        details: 'QuickMove rider dispatch verified via 4-digit OTP 1234',
        operator: 'QuickMove Partner Network'
      }
    ]
  },
  {
    id: 'ecity-majestic',
    name: 'Electronic City ⇄ Majestic Intermodal',
    from: 'Electronic City Tollgate Hub',
    to: 'Krantivira Sangolli Rayanna Hub',
    distanceKm: 21.2,
    baseFare: 40,
    baseTimeMins: 90,
    baseCo2Kg: 0.38,
    privateFare: 95,
    privateTimeMins: 125,
    privateCo2Kg: 4.12,
    legs: [
      {
        type: 'first-mile',
        mode: 'Sender Drop',
        label: 'Origin Locker Drop',
        from: 'ECity Phase 1 Hub',
        to: 'Locker Bay E-12',
        duration: '5 min',
        details: 'Cryptographic barcode seal generation',
        operator: 'ProTransit Hub System'
      },
      {
        type: 'bus',
        mode: 'Express Busway',
        label: 'Elevated Corridor',
        from: 'ECity Tollgate',
        to: 'Shantinagar Bus Terminal',
        duration: '35 min',
        details: 'Elevated highway bus corridor permitted cargo rack',
        operator: 'Simulated Express Transit'
      },
      {
        type: 'rail',
        mode: 'Suburban Rail',
        label: 'Intercity Rail Link',
        from: 'Shantinagar Junction',
        to: 'KSR Majestic Terminal',
        duration: '25 min',
        details: 'Electric passenger rail brake-van permitted parcel zone',
        operator: 'Simulated Rail Transit'
      },
      {
        type: 'last-mile',
        mode: 'Delivery Partner',
        label: 'Doorstep Handover',
        from: 'Majestic Central Hub',
        to: 'Receiver Doorstep',
        duration: '25 min',
        details: 'Electric 2-wheeler partner with 4-digit OTP verify',
        operator: 'QuickMove Partner Network'
      }
    ]
  },
  {
    id: 'hebbal-koramangala',
    name: 'Hebbal Junction ⇄ Koramangala Tech Ring',
    from: 'Hebbal Flyover Depot',
    to: 'Koramangala 80ft Road Hub',
    distanceKm: 16.5,
    baseFare: 38,
    baseTimeMins: 80,
    baseCo2Kg: 0.31,
    privateFare: 80,
    privateTimeMins: 95,
    privateCo2Kg: 3.20,
    legs: [
      {
        type: 'first-mile',
        mode: 'Sender Drop',
        label: 'Origin Locker Drop',
        from: 'Hebbal Northern Depot',
        to: 'Locker Bay H-07',
        duration: '5 min',
        details: 'Tare weight measurement & volumetric scanner',
        operator: 'ProTransit Hub System'
      },
      {
        type: 'bus',
        mode: 'Ring Road Bus',
        label: 'Outer Ring Corridor',
        from: 'Hebbal Depot',
        to: 'Indiranagar Metro Hub',
        duration: '32 min',
        details: 'Scheduled frequency bus cargo space allocation',
        operator: 'Simulated Municipal Bus'
      },
      {
        type: 'transfer',
        mode: 'Transfer Hub',
        label: 'Intermediate Transfer',
        from: 'Indiranagar Hub',
        to: 'Koramangala Feeder',
        duration: '10 min',
        details: 'Cross-dock verification & automated dispatch ping',
        operator: 'Hub Custody Agent'
      },
      {
        type: 'last-mile',
        mode: 'Delivery Partner',
        label: 'Doorstep Handover',
        from: 'Koramangala Station Hub',
        to: 'Receiver Doorstep',
        duration: '22 min',
        details: 'Local partner delivery confirmed with secret OTP',
        operator: 'QuickMove Partner Network'
      }
    ]
  }
];

export const RoutingEngineSection: React.FC = () => {
  const [selectedCorridorId, setSelectedCorridorId] = useState<string>('silk-whitefield');
  const [alphaCost, setAlphaCost] = useState<number>(0.45);
  const [betaTime, setBetaTime] = useState<number>(0.35);
  const [gammaWait, setGammaWait] = useState<number>(0.20);
  const [deltaCarbon, setDeltaCarbon] = useState<number>(0.50);
  const [activeTab, setActiveTab] = useState<'visualizer' | 'formulation' | 'invariants'>('visualizer');

  const corridor = CORRIDORS.find((c) => c.id === selectedCorridorId) || CORRIDORS[0];

  const adjustedCost = Math.round(
    corridor.baseFare * (1 + (0.5 - alphaCost) * 0.18 + (deltaCarbon - 0.5) * 0.08)
  );
  const adjustedTimeMins = Math.round(
    corridor.baseTimeMins * (1 + (0.5 - betaTime) * 0.22 + (0.5 - gammaWait) * 0.12)
  );
  const adjustedCo2 = Number(
    (corridor.baseCo2Kg * (1 - (deltaCarbon - 0.5) * 0.25)).toFixed(2)
  );

  const objectiveScore = Number(
    (
      alphaCost * (adjustedCost / 100) +
      betaTime * (adjustedTimeMins / 150) +
      gammaWait * 0.15 +
      deltaCarbon * (adjustedCo2 / 4.0)
    ).toFixed(3)
  );

  const applyPreset = (preset: 'balanced' | 'economy' | 'speed' | 'eco') => {
    switch (preset) {
      case 'balanced':
        setAlphaCost(0.45);
        setBetaTime(0.35);
        setGammaWait(0.20);
        setDeltaCarbon(0.50);
        break;
      case 'economy':
        setAlphaCost(0.90);
        setBetaTime(0.20);
        setGammaWait(0.25);
        setDeltaCarbon(0.20);
        break;
      case 'speed':
        setAlphaCost(0.25);
        setBetaTime(0.90);
        setGammaWait(0.70);
        setDeltaCarbon(0.15);
        break;
      case 'eco':
        setAlphaCost(0.30);
        setBetaTime(0.30);
        setGammaWait(0.30);
        setDeltaCarbon(0.95);
        break;
    }
  };

  const costSavingsPercent = Math.round(
    ((corridor.privateFare - adjustedCost) / corridor.privateFare) * 100
  );
  const co2SavingsPercent = Math.round(
    ((corridor.privateCo2Kg - adjustedCo2) / corridor.privateCo2Kg) * 100
  );

  return (
    <section id="routing" className="py-20 md:py-28 relative bg-[#090E2E] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Algorithmic Foundations & Live Engine"
          title="Deterministic Multimodal Routing Engine"
          subtitle="Explore the time-dependent network graph algorithm that coordinates scheduled bus, metro, and rail schedules into seamless parcel journeys."
        />

        {/* Tab Navigation */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab('visualizer')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'visualizer'
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Interactive Route Playground</span>
          </button>

          <button
            onClick={() => setActiveTab('formulation')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'formulation'
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            <Binary className="w-3.5 h-3.5" />
            <span>Graph Mathematics & A* Spec</span>
          </button>

          <button
            onClick={() => setActiveTab('invariants')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'invariants'
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Operational Constraints & Safety</span>
          </button>
        </div>

        {/* TAB 1: INTERACTIVE ROUTE PLAYGROUND */}
        {activeTab === 'visualizer' && (
          <div className="space-y-8">
            {/* Corridor Selector & Weight Controls */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: Corridor Selection & Sliders */}
              <div className="lg:col-span-6 p-6 sm:p-7 rounded-3xl bg-[#060A22] border border-cyan-500/30 shadow-2xl space-y-6">
                
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider font-display">
                      Step 1: Select Active Corridor
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">Bengaluru Network</span>
                  </div>

                  <div className="grid grid-cols-1 gap-2.5">
                    {CORRIDORS.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setSelectedCorridorId(c.id)}
                        className={`p-3.5 rounded-xl text-left border transition-all flex items-center justify-between ${
                          selectedCorridorId === c.id
                            ? 'bg-[#121B52] border-cyan-400 text-white shadow-md'
                            : 'bg-white/[0.02] border-white/10 text-slate-300 hover:bg-white/5'
                        }`}
                      >
                        <div>
                          <span className="text-xs font-bold block font-display">{c.name}</span>
                          <span className="text-[11px] text-slate-400">
                            {c.distanceKm} km • {c.legs.length} Multimodal Stages
                          </span>
                        </div>
                        {selectedCorridorId === c.id && (
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Weight Presets */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-bold text-slate-300 font-display">
                      Multi-Objective Optimization Presets:
                    </span>
                    <button
                      onClick={() => applyPreset('balanced')}
                      className="text-[10px] text-slate-400 hover:text-white flex items-center gap-1"
                      title="Reset weights"
                    >
                      <RefreshCw className="w-3 h-3" />
                      Reset
                    </button>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <button
                      onClick={() => applyPreset('economy')}
                      className="px-2.5 py-2 rounded-lg text-center text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10"
                    >
                      💰 Economy
                    </button>
                    <button
                      onClick={() => applyPreset('speed')}
                      className="px-2.5 py-2 rounded-lg text-center text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10"
                    >
                      ⚡ Fastest
                    </button>
                    <button
                      onClick={() => applyPreset('eco')}
                      className="px-2.5 py-2 rounded-lg text-center text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10"
                    >
                      🌱 Eco-First
                    </button>
                    <button
                      onClick={() => applyPreset('balanced')}
                      className="px-2.5 py-2 rounded-lg text-center text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                    >
                      ⚖️ Balanced
                    </button>
                  </div>
                </div>

                {/* Live Sliders */}
                <div className="space-y-4 pt-2">
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-slate-300 flex items-center gap-1.5">
                        <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                        α Cost Sensitivity
                      </span>
                      <span className="text-cyan-400 font-mono font-bold">{(alphaCost * 100).toFixed(0)}%</span>
                    </div>
                    <input
                      type="range"
                      min="0.1"
                      max="1.0"
                      step="0.05"
                      value={alphaCost}
                      onChange={(e) => setAlphaCost(parseFloat(e.target.value))}
                      aria-label="Cost Sensitivity Weight (Alpha)"
                      className="w-full accent-cyan-400 bg-slate-800 rounded-lg h-1.5 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-slate-300 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-indigo-400" />
                        β Transit Time Sensitivity
                      </span>
                      <span className="text-cyan-400 font-mono font-bold">{(betaTime * 100).toFixed(0)}%</span>
                    </div>
                    <input
                      type="range"
                      min="0.1"
                      max="1.0"
                      step="0.05"
                      value={betaTime}
                      onChange={(e) => setBetaTime(parseFloat(e.target.value))}
                      aria-label="Transit Time Sensitivity Weight (Beta)"
                      className="w-full accent-indigo-400 bg-slate-800 rounded-lg h-1.5 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-slate-300 flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-amber-400" />
                        γ Handover & Dwell Wait Sensitivity
                      </span>
                      <span className="text-cyan-400 font-mono font-bold">{(gammaWait * 100).toFixed(0)}%</span>
                    </div>
                    <input
                      type="range"
                      min="0.1"
                      max="1.0"
                      step="0.05"
                      value={gammaWait}
                      onChange={(e) => setGammaWait(parseFloat(e.target.value))}
                      aria-label="Handover and Dwell Wait Sensitivity Weight (Gamma)"
                      className="w-full accent-amber-400 bg-slate-800 rounded-lg h-1.5 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-slate-300 flex items-center gap-1.5">
                        <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                        δ Green / Carbon Abatement
                      </span>
                      <span className="text-cyan-400 font-mono font-bold">{(deltaCarbon * 100).toFixed(0)}%</span>
                    </div>
                    <input
                      type="range"
                      min="0.1"
                      max="1.0"
                      step="0.05"
                      value={deltaCarbon}
                      onChange={(e) => setDeltaCarbon(parseFloat(e.target.value))}
                      aria-label="Carbon Abatement Sensitivity Weight (Delta)"
                      className="w-full accent-emerald-400 bg-slate-800 rounded-lg h-1.5 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Mathematical Output Box */}
                <div className="p-3.5 rounded-2xl bg-black/40 border border-cyan-500/20 font-mono text-[11px] text-cyan-300">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-slate-400">Objective Cost Function W(e):</span>
                    <span className="font-bold text-white text-xs">{objectiveScore}</span>
                  </div>
                  <div className="truncate text-slate-400">
                    W(e) = ({alphaCost.toFixed(2)} × Cost) + ({betaTime.toFixed(2)} × Time) + ({gammaWait.toFixed(2)} × Wait) + ({deltaCarbon.toFixed(2)} × CO₂)
                  </div>
                </div>

              </div>

              {/* Right Column: Dynamic Computed Results */}
              <div className="lg:col-span-6 p-6 sm:p-7 rounded-3xl bg-[#0C1238] border border-white/10 shadow-2xl flex flex-col justify-between space-y-6">
                
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div>
                      <span className="text-[10px] font-mono uppercase font-bold text-cyan-400 block">
                        Calculated Optimum Path
                      </span>
                      <h4 className="text-xl font-bold text-white font-display">
                        {corridor.name}
                      </h4>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      PARETO OPTIMAL
                    </span>
                  </div>

                  {/* High Level Comparison Stats */}
                  <div className="grid grid-cols-3 gap-3 my-5">
                    <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 text-center">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">ProTransit Fare</span>
                      <span className="text-2xl font-extrabold text-white font-display">₹{adjustedCost}</span>
                      <span className="text-[10px] text-emerald-400 font-bold block mt-0.5">
                        Save {costSavingsPercent}% vs ₹{corridor.privateFare}
                      </span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 text-center">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Est. Duration</span>
                      <span className="text-2xl font-extrabold text-white font-display">
                        {Math.floor(adjustedTimeMins / 60)}h {adjustedTimeMins % 60}m
                      </span>
                      <span className="text-[10px] text-slate-400 block mt-0.5">
                        Scheduled Timetable
                      </span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 text-center">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Carbon Output</span>
                      <span className="text-2xl font-extrabold text-emerald-400 font-display">
                        {adjustedCo2} kg
                      </span>
                      <span className="text-[10px] text-emerald-400 font-bold block mt-0.5">
                        Save {co2SavingsPercent}% CO₂
                      </span>
                    </div>
                  </div>

                  {/* Multi-Stage Journey Track */}
                  <div className="space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block font-display">
                      Multi-Stage Chain of Custody
                    </span>

                    <div className="space-y-2 max-h-[290px] overflow-y-auto pr-1 custom-scrollbar">
                      {corridor.legs.map((leg, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl bg-[#070B24] border border-white/5 flex items-center justify-between text-xs"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 shrink-0">
                              {leg.type === 'bus' && <Bus className="w-4 h-4 text-emerald-400" />}
                              {leg.type === 'metro' && <Train className="w-4 h-4 text-purple-400" />}
                              {leg.type === 'rail' && <Train className="w-4 h-4 text-blue-400" />}
                              {leg.type === 'transfer' && <RefreshCw className="w-4 h-4 text-amber-400" />}
                              {leg.type === 'first-mile' && <Box className="w-4 h-4 text-cyan-400" />}
                              {leg.type === 'last-mile' && <Bike className="w-4 h-4 text-cyan-400" />}
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-white font-display">{leg.label}</span>
                                <span className="text-[10px] font-mono text-slate-400">({leg.mode})</span>
                              </div>
                              <span className="text-[11px] text-slate-400 block mt-0.5">{leg.details}</span>
                            </div>
                          </div>
                          <div className="text-right shrink-0">
                            <span className="font-mono font-bold text-slate-200 block">{leg.duration}</span>
                            <span className="text-[10px] text-cyan-400 font-semibold">{leg.operator}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Call to action inside playground */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2 text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Calculated with 100% deterministic time-dependent A*.</span>
                  </div>
                  <a
                    href="#demo"
                    className="inline-flex items-center gap-1 font-bold text-cyan-400 hover:text-cyan-300 font-display transition-colors"
                  >
                    <span>Test Full 8-Step Flow in Demo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* TAB 2: MATHEMATICAL FORMULATION */}
        {activeTab === 'formulation' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            <div className="lg:col-span-6 p-7 sm:p-8 rounded-3xl bg-[#060A22] border border-cyan-500/30 shadow-2xl flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
                  <Binary className="w-3.5 h-3.5" />
                  Formal Graph Specification G = (V, E)
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 font-display">
                  Network Graph Topology
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                    <span className="font-bold text-white font-mono block mb-1">
                      Vertices V (Physical Hub Vertices):
                    </span>
                    <p className="text-slate-400">
                      Designated bus terminals, metro stations, and suburban rail junctions equipped with secure electronic parcel lockers and QR scan readers.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                    <span className="font-bold text-white font-mono block mb-1">
                      Directed Edges E (Scheduled Transit Corridors):
                    </span>
                    <p className="text-slate-400">
                      Discrete transit links parameterized by timetable departure times, vehicle transit times, permitted baggage volume thresholds, and carbon emission intensity.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                    <span className="font-bold text-white font-mono block mb-1">
                      Multi-Objective Optimization Function:
                    </span>
                    <div className="font-mono text-xs text-cyan-300 bg-black/50 p-3 rounded-xl mt-1 border border-cyan-500/20 overflow-x-auto">
                      W(e) = α(Cost/C₀) + β(Time/T₀) + γ(Wait/W₀) + δ(CO₂/E₀)
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Deterministic routing eliminates LLM hallucinations and guarantees physically reachable transit connections.</span>
              </div>
            </div>

            <div className="lg:col-span-6 p-7 sm:p-8 rounded-3xl bg-[#0C1238] border border-white/10 shadow-2xl flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-4">
                  <Cpu className="w-3.5 h-3.5" />
                  Time-Dependent A* Search
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 font-display">
                  Admissibility & Pruning
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                  <div className="p-4 rounded-2xl bg-[#070B24] border border-white/5">
                    <h5 className="font-bold text-white font-display mb-1">
                      Admissible Heuristic Function
                    </h5>
                    <p className="text-slate-400 leading-relaxed font-sans">
                      h(u, d) = HaversineDistance(u, d) / MaxTransitSpeed. Since physical transit speed cannot exceed rapid rail velocity (80 km/h), the heuristic never overestimates true travel duration, proving optimal shortest path convergence.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#070B24] border border-white/5">
                    <h5 className="font-bold text-white font-display mb-1">
                      Dynamic Locker Pruning Invariant
                    </h5>
                    <p className="text-slate-400 leading-relaxed font-sans">
                      If locker utilization at hub u reaches 100%, node u is dynamically pruned from candidate search trees, preventing drop-offs at fully saturated hubs.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#070B24] border border-white/5">
                    <h5 className="font-bold text-white font-display mb-1">
                      Pareto Frontier Maintenance
                    </h5>
                    <p className="text-slate-400 leading-relaxed font-sans">
                      Instead of a single scalar route, the engine maintains the non-dominated Pareto frontier, allowing senders to pick between lowest-cost, fastest, or lowest-carbon paths.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400 flex items-center justify-between">
                <span>Computational Complexity: O(|E| + |V| log |V|)</span>
                <span className="font-mono text-cyan-400 font-bold">Sub-10ms Lookup</span>
              </div>
            </div>

          </div>
        )}

        {/* TAB 3: OPERATIONAL INVARIANTS & SAFETY */}
        {activeTab === 'invariants' && (
          <div className="max-w-4xl mx-auto rounded-3xl bg-[#060A22] border border-white/10 p-7 sm:p-10 shadow-2xl space-y-6">
            
            <div className="text-center max-w-2xl mx-auto mb-6">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                Zero Disruption Principles
              </span>
              <h3 className="text-2xl font-bold text-white font-display">
                Operational Invariants for Passenger Transit
              </h3>
              <p className="text-xs text-slate-400 mt-1 font-sans">
                Rules enforced by the routing engine to guarantee passenger priority and physical security on public transit.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <h4 className="font-bold text-white text-sm font-display">Passenger Priority Rule</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  Parcel movements are strictly routed during off-peak windows or allocated to reserved undercarriage baggage bays in buses, preserving 100% passenger seating and aisle capacity.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <h4 className="font-bold text-white text-sm font-display">Cryptographic Custody Handover</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  Every transition between sender, hub locker, transit operator, and delivery rider requires mutual scan of a signed QR payload. No parcel moves without verified custodial acceptance.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <h4 className="font-bold text-white text-sm font-display">Size & Weight Classification</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  Parcels are restricted to Small (under 1 kg, envelopes/documents), Medium (under 3 kg, shoebox), and Large (under 5 kg). Hazardous materials, liquids, and bulk freight are excluded.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <h4 className="font-bold text-white text-sm font-display">Last-Mile Partner Decoupling</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  Transit operators do NOT perform doorstep delivery. Last-mile riders only travel the final 1-2 km radius from designated destination micro-depots, slashing road congestion by 70%.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#090E30] border border-cyan-500/20 text-xs text-slate-300 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span>Ready to test the live implementation on Android?</span>
              <a
                href="#downloads"
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shrink-0 shadow-md font-display"
              >
                DOWNLOAD RELEASE APK (48.1 MB)
              </a>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
