import React from 'react';
import { ArrowRight, Download, Bus, Train, UserCheck, ShieldCheck, QrCode, KeyRound, MapPin } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[160px] pointer-events-none" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Trust & Category Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-emerald-500/10 text-cyan-300 border border-cyan-500/20 shadow-lg shadow-cyan-950/50 mb-6 backdrop-blur-md animate-fade-in">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="font-display">Smart India Hackathon 2026 Project</span>
          <span className="text-slate-500">•</span>
          <span className="text-slate-300">Transportation & Logistics</span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] font-display max-w-5xl mx-auto">
          Connecting Cities. <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-emerald-400">
            Moving Goods Smarter.
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-sans">
          ProTransit is a public-transit-powered urban logistics coordination platform that connects senders, designated transit hubs, permitted public-transit capacity, and verified last-mile delivery partners.
        </p>

        {/* Action Buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href="#how-it-works"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#1A237E] to-[#3949AB] hover:from-[#283593] hover:to-[#3F51B5] border border-cyan-400/40 shadow-xl shadow-cyan-950/40 hover:shadow-cyan-500/20 transition-all group"
          >
            <span>EXPLORE PROTRANSIT</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#downloads"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/30 transition-all backdrop-blur-sm"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            <span>DOWNLOAD ANDROID APP</span>
          </a>
        </div>

        {/* Multimodal Chain Visual Architecture (Central Hero Graphic) */}
        <div className="mt-16 sm:mt-20 max-w-5xl mx-auto">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0C1236]/90 border border-cyan-500/20 backdrop-blur-xl shadow-2xl shadow-black/60 relative">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10 text-left">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-display">
                  Multimodal Coordination Architecture
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white font-display">
                  Permitted Public Transit as an Urban Logistics Backbone
                </h3>
              </div>
              <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                Chain-of-Custody Verified
              </span>
            </div>

            {/* Visual Node-Flow Chain */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 relative">
              {/* Step 1: Sender */}
              <div className="flex flex-col items-center p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/30 transition-colors text-center group">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-2.5 group-hover:scale-105 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-white font-display">SENDER</span>
                <span className="text-[11px] text-slate-400 mt-1">Packages goods & compares route options</span>
                <span className="mt-2 text-[10px] font-semibold text-cyan-400">Step 01</span>
              </div>

              {/* Step 2: Pickup Hub */}
              <div className="flex flex-col items-center p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/30 transition-colors text-center group">
                <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-2.5 group-hover:scale-105 transition-transform">
                  <QrCode className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-white font-display">PICKUP HUB</span>
                <span className="text-[11px] text-slate-400 mt-1">QR check-in at Silk Board station hub</span>
                <span className="mt-2 text-[10px] font-semibold text-indigo-400">Step 02</span>
              </div>

              {/* Step 3: Public Transit Leg 1 */}
              <div className="flex flex-col items-center p-3.5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors text-center group">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2.5 group-hover:scale-105 transition-transform">
                  <Bus className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-emerald-300 font-display">BUS TRANSIT</span>
                <span className="text-[11px] text-slate-400 mt-1">Permitted storage capacity to BTM Hub</span>
                <span className="mt-2 text-[10px] font-semibold text-emerald-400">Step 03</span>
              </div>

              {/* Step 4: Public Transit Leg 2 */}
              <div className="flex flex-col items-center p-3.5 rounded-2xl bg-purple-500/5 border border-purple-500/20 hover:border-purple-500/40 transition-colors text-center group">
                <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-2.5 group-hover:scale-105 transition-transform">
                  <Train className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-purple-300 font-display">METRO / RAIL</span>
                <span className="text-[11px] text-slate-400 mt-1">Electric inter-hub transit to Majestic</span>
                <span className="mt-2 text-[10px] font-semibold text-purple-400">Step 04</span>
              </div>

              {/* Step 5: Last Mile Delivery */}
              <div className="flex flex-col items-center p-3.5 rounded-2xl bg-amber-500/5 border border-amber-500/20 hover:border-amber-500/40 transition-colors text-center group">
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-2.5 group-hover:scale-105 transition-transform">
                  <UserCheck className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-amber-300 font-display">LAST-MILE RIDER</span>
                <span className="text-[11px] text-slate-400 mt-1">QuickMove partner picks up at terminal hub</span>
                <span className="mt-2 text-[10px] font-semibold text-amber-400">Step 05</span>
              </div>

              {/* Step 6: Receiver OTP */}
              <div className="flex flex-col items-center p-3.5 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 hover:border-cyan-400/40 transition-colors text-center group">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-2.5 group-hover:scale-105 transition-transform">
                  <KeyRound className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-cyan-300 font-display">RECEIVER OTP</span>
                <span className="text-[11px] text-slate-400 mt-1">Handover confirmed via secret 4-digit code</span>
                <span className="mt-2 text-[10px] font-semibold text-cyan-400">Step 06</span>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <span className="block text-2xl font-extrabold text-white font-display">₹45</span>
                <span className="text-xs text-slate-400">Demonstration Base Rate*</span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-emerald-400 font-display">3.2 kg</span>
                <span className="text-xs text-slate-400">CO₂ Saved vs Private Courier*</span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-cyan-400 font-display">6 Hubs</span>
                <span className="text-xs text-slate-400">Bengaluru Demo Network</span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-indigo-300 font-display">100%</span>
                <span className="text-xs text-slate-400">Chain-of-Custody Trace</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
