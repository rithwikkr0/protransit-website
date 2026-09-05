import React, { useState } from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import confetti from 'canvas-confetti';
import { 
  ArrowRight, 
  CheckCircle2, 
  Download, 
  RotateCcw,
  ShieldCheck,
  Bike,
  MapPin
} from 'lucide-react';

export const InteractiveDemo: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [otpInput, setOtpInput] = useState('');
  const [otpError, setOtpError] = useState(false);

  const demoSteps = [
    { title: 'Send Parcel', label: 'Origin & Destination' },
    { title: 'Compare Options', label: 'Select ProTransit (₹45)' },
    { title: 'Route Details', label: 'Multimodal Chain' },
    { title: 'Pickup QR', label: 'Hub Handover Scan' },
    { title: 'Transit Tracking', label: 'Live Hub Telemetry' },
    { title: 'Delivery Partner', label: 'Last-Mile Dispatch' },
    { title: 'Receiver OTP', label: 'Enter 1234' },
    { title: 'Delivered', label: 'Delivery Completed' }
  ];

  const handleVerifyOtp = () => {
    if (otpInput === '1234') {
      setOtpError(false);
      setCurrentStep(7);
      // Trigger festive confetti celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00BCD4', '#10B981', '#3949AB', '#FFFFFF']
        });
      } catch {
        // Safe fallback
      }
    } else {
      setOtpError(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setOtpInput('');
    setOtpError(false);
  };

  return (
    <section id="demo" className="py-20 md:py-28 relative bg-[#070B24] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Interactive Browser Simulation"
          title="See ProTransit in Action"
          subtitle="Test the core 8-step journey right inside your web browser before installing the native Android prototype."
        />

        {/* 3-Device Real-Time Demonstration Workflow */}
        <div className="max-w-4xl mx-auto mb-12 p-6 sm:p-8 rounded-3xl bg-[#090E2E] border border-cyan-500/20 shadow-xl">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-display">
              Smart India Hackathon 2026 Demonstration Guide
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 font-display">
              3-Device Cross-Role Demonstration Flow
            </h3>
            <p className="text-xs text-slate-400 mt-1.5 max-w-xl mx-auto font-sans">
              Experience the synchronized ProTransit lifecycle running concurrently across sender, courier partner, and package receiver:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Phone 1 */}
            <div className="p-4 rounded-2xl bg-[#060A22] border border-cyan-500/30 text-center">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                PHONE 1: SENDER
              </span>
              <h5 className="text-sm font-bold text-white mt-2 font-display">Customer (Rithwik)</h5>
              <p className="text-xs text-slate-400 mt-1 font-sans">
                Creates parcel & compares multi-carrier quotes. Confirms ProTransit and generates custody QR code.
              </p>
              <div className="mt-3 text-[11px] font-mono text-cyan-400">
                Status: Hub QR Ready
              </div>
            </div>

            {/* Phone 2 */}
            <div className="p-4 rounded-2xl bg-[#060A22] border border-indigo-500/30 text-center">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                PHONE 2: PARTNER
              </span>
              <h5 className="text-sm font-bold text-white mt-2 font-display">Partner (Suresh)</h5>
              <p className="text-xs text-slate-400 mt-1 font-sans">
                Toggles online status, accepts delivery task, scans locker QR, and dispatches on EV two-wheeler.
              </p>
              <div className="mt-3 text-[11px] font-mono text-indigo-400">
                Status: Out For Delivery
              </div>
            </div>

            {/* Phone 3 */}
            <div className="p-4 rounded-2xl bg-[#060A22] border border-emerald-500/30 text-center">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                PHONE 3: RECEIVER
              </span>
              <h5 className="text-sm font-bold text-white mt-2 font-display">Receiver (Arjun)</h5>
              <p className="text-xs text-slate-400 mt-1 font-sans">
                Tracks incoming parcel via live telemetry. Provides 4-digit secret OTP (1234) for final delivery verification.
              </p>
              <div className="mt-3 text-[11px] font-mono text-emerald-400">
                Status: Delivered
              </div>
            </div>
          </div>
        </div>

        {/* Demo Console Window */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#0B1033] border border-cyan-500/30 shadow-2xl overflow-hidden">
          {/* Top Window Bar */}
          <div className="px-6 py-4 bg-[#080C28] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline">
                ProTransit Web Simulator • Shipment TX10231
              </span>
            </div>

            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-300 transition-colors border border-white/10"
            >
              <RotateCcw className="w-3 h-3" />
              Restart Demo
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="px-6 py-3 bg-[#090E2D] border-b border-white/5 overflow-x-auto custom-scrollbar">
            <div className="flex items-center gap-2 min-w-max">
              {demoSteps.map((s, idx) => (
                <div key={s.title} className="flex items-center gap-2">
                  <span
                    className={`text-xs px-2.5 py-1 rounded-lg font-bold font-display ${
                      currentStep === idx
                        ? 'bg-cyan-500 text-black shadow-sm'
                        : currentStep > idx
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'bg-white/5 text-slate-500'
                    }`}
                  >
                    {idx + 1}. {s.title}
                  </span>
                  {idx < demoSteps.length - 1 && (
                    <span className="text-slate-600 text-xs">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Step Body */}
          <div className="p-6 sm:p-10 min-h-[380px] flex flex-col justify-between">
            
            {/* STEP 0: Origin & Destination */}
            {currentStep === 0 && (
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-display">
                    Step 1 of 8 • Booking Configuration
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1 font-display">
                    Specify Parcel & Route Details
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 font-sans">
                    Configure origin pickup transit hub, destination, and package properties.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                    <span className="text-xs text-slate-400 block mb-1">Pickup Transit Hub</span>
                    <span className="text-sm font-bold text-white flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                      Silk Board Hub (Bengaluru)
                    </span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                    <span className="text-xs text-slate-400 block mb-1">Destination Address</span>
                    <span className="text-sm font-bold text-white flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-emerald-400" />
                      Whitefield Tech Corridor
                    </span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                    <span className="text-xs text-slate-400 block mb-1">Parcel Category</span>
                    <span className="text-sm font-bold text-white">General Permitted Parcel (2.0 kg)</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                    <span className="text-xs text-slate-400 block mb-1">Parcel Dimensions</span>
                    <span className="text-sm font-bold text-white">Medium (Locker-Compatible)</span>
                  </div>
                </div>

                <button
                  onClick={() => setCurrentStep(1)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#1A237E] to-[#3949AB] hover:from-[#283593] hover:to-[#3F51B5] border border-cyan-400/40 shadow-lg flex items-center justify-center gap-2"
                >
                  <span>COMPARE DELIVERY OPTIONS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* STEP 1: Compare Options */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-display">
                    Step 2 of 8 • Multimodal Rate Comparison
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1 font-display">
                    Choose the Best Way to Deliver
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 font-sans">
                    ProTransit uses shared public transit capacity to lower costs by 47%.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* ProTransit Option */}
                  <div className="p-5 rounded-2xl bg-gradient-to-b from-[#141C52] to-[#0A0F36] border-2 border-cyan-400 shadow-lg relative">
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wide block mb-1">
                      RECOMMENDED
                    </span>
                    <h4 className="text-lg font-bold text-white font-display">ProTransit</h4>
                    <span className="text-3xl font-extrabold text-white font-display block my-2">₹45</span>
                    <span className="text-xs text-slate-300 block mb-3">ETA: 2h 20m • Bus + Metro</span>
                    <span className="text-[11px] text-emerald-400 font-semibold block mb-4">
                      3.2 kg CO₂ Saved
                    </span>
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="w-full py-2.5 rounded-xl text-xs font-black bg-cyan-400 hover:bg-cyan-300 text-slate-950 transition-colors shadow-md"
                    >
                      SELECT PROTRANSIT
                    </button>
                  </div>

                  {/* Private Courier */}
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 opacity-70">
                    <span className="text-[10px] text-slate-500 uppercase tracking-wide block mb-1">
                      Standard Courier
                    </span>
                    <h4 className="text-lg font-bold text-slate-300 font-display">Private Fleet</h4>
                    <span className="text-3xl font-extrabold text-slate-400 font-display block my-2">₹85</span>
                    <span className="text-xs text-slate-400 block mb-4">ETA: 1h 45m • Road bike</span>
                    <span className="text-[11px] text-slate-500 block mb-4">Dedicated road trip</span>
                  </div>

                  {/* On-Demand */}
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 opacity-70">
                    <span className="text-[10px] text-slate-500 uppercase tracking-wide block mb-1">
                      Local Express
                    </span>
                    <h4 className="text-lg font-bold text-slate-300 font-display">On-Demand</h4>
                    <span className="text-3xl font-extrabold text-slate-400 font-display block my-2">₹95</span>
                    <span className="text-xs text-slate-400 block mb-4">ETA: 1h 35m • Dedicated</span>
                    <span className="text-[11px] text-slate-500 block mb-4">Single rider trip</span>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: Route Details */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-display">
                    Step 3 of 8 • Multimodal Transit Plan
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1 font-display">
                    Route Breakdown & Scheduled Transfers
                  </h3>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3 font-sans text-xs">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">1</span>
                    <span className="text-white font-bold">Silk Board Hub (Pickup Hub)</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">Bus 500-D</span>
                  </div>
                  <div className="flex items-center gap-3 pl-9 text-slate-400">
                    <span>↓ In-transit via Outer Ring Road bus lane (15 min)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">2</span>
                    <span className="text-white font-bold">BTM Hub (Transfer Hub)</span>
                    <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-400 text-[10px] font-bold">Green Line Metro</span>
                  </div>
                  <div className="flex items-center gap-3 pl-9 text-slate-400">
                    <span>↓ In-transit via electric Metro to Majestic (25 min)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">3</span>
                    <span className="text-white font-bold">Majestic Terminal → QuickMove Delivery Partner</span>
                  </div>
                  <div className="flex items-center gap-3 pl-9 text-slate-400">
                    <span>↓ Localized last-mile doorstep dispatch to Whitefield</span>
                  </div>
                </div>

                <button
                  onClick={() => setCurrentStep(3)}
                  className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#1A237E] to-[#3949AB] hover:from-[#283593] shadow-md flex items-center gap-2"
                >
                  <span>CONFIRM SHIPMENT & GENERATE QR</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* STEP 3: QR Code */}
            {currentStep === 3 && (
              <div className="space-y-6 text-center">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-display">
                    Step 4 of 8 • Station Hub Check-In
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1 font-display">
                    Pickup QR Code: TX10231
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 font-sans">
                    Show this QR code at Silk Board Hub to deposit parcel in secure locker.
                  </p>
                </div>

                <div className="w-44 h-44 mx-auto p-3 rounded-2xl bg-white border-2 border-cyan-400 shadow-xl flex items-center justify-center">
                  <img
                    src="/screenshots/06_qr_code.png"
                    alt="Pickup QR Code"
                    className="w-full h-full object-contain"
                  />
                </div>

                <button
                  onClick={() => setCurrentStep(4)}
                  className="px-6 py-3 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-md flex items-center justify-center gap-2 mx-auto"
                >
                  <span>SIMULATE HUB SCAN & VIEW TRACKING</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* STEP 4: Tracking */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-display">
                    Step 5 of 8 • Live Transit Telemetry
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1 font-display">
                    Tracking Shipment TX10231
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 font-sans">
                    Parcel is moving across Bengaluru transit network.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#070B24] border border-cyan-500/20 space-y-3 font-sans text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-white/5">
                    <span className="text-slate-400">Current Status</span>
                    <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 font-bold border border-cyan-500/30">
                      IN TRANSIT • BTM HUB
                    </span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-white/5">
                    <span className="text-slate-400">Current Transit Leg</span>
                    <span className="text-white font-bold">Transfer to Metro at BTM Hub</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Destination Hub ETA</span>
                    <span className="text-emerald-400 font-bold">2h 20m total journey</span>
                  </div>
                </div>

                <button
                  onClick={() => setCurrentStep(5)}
                  className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#1A237E] to-[#3949AB] hover:from-[#283593] shadow-md flex items-center gap-2"
                >
                  <span>DISPATCH TO DELIVERY PARTNER</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* STEP 5: Delivery Partner */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-display">
                    Step 6 of 8 • Last-Mile Delivery Partner
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1 font-display">
                    QuickMove Partner Assigned
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 font-sans">
                    Partner collects parcel from destination terminal hub for final delivery.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3 font-sans text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <Bike className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-bold text-white text-sm font-display">QuickMove Partner (PTR-2024-001)</h5>
                      <span className="text-emerald-400 font-semibold">4.8 Rating • 1247 Deliveries</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-200">
                    <ShieldCheck className="w-4 h-4 inline mr-1 text-cyan-400" />
                    Communication is masked for privacy. Customer phone numbers remain protected.
                  </div>
                </div>

                <button
                  onClick={() => setCurrentStep(6)}
                  className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#1A237E] to-[#3949AB] hover:from-[#283593] shadow-md flex items-center gap-2"
                >
                  <span>ARRIVE AT DESTINATION & ENTER RECEIVER OTP</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* STEP 6: Receiver OTP */}
            {currentStep === 6 && (
              <div className="space-y-6 max-w-md mx-auto text-center">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-display">
                    Step 7 of 8 • Receiver Confirmation
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1 font-display">
                    Enter Receiver 4-Digit OTP
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 font-sans">
                    Demo OTP is <span className="text-cyan-400 font-bold font-mono">1234</span>. Enter below to complete delivery.
                  </p>
                </div>

                <div className="flex justify-center gap-3 my-4">
                  <input
                    type="text"
                    maxLength={4}
                    value={otpInput}
                    onChange={(e) => setOtpInput(e.target.value)}
                    placeholder="1234"
                    className="w-36 text-center text-2xl font-mono font-bold tracking-[0.4em] px-4 py-3 rounded-2xl bg-white/5 border-2 border-cyan-400 text-white focus:outline-none focus:ring-4 focus:ring-cyan-500/20"
                  />
                </div>

                {otpError && (
                  <p className="text-xs text-rose-400 font-semibold">
                    Invalid OTP! Please enter demo code 1234.
                  </p>
                )}

                <button
                  onClick={handleVerifyOtp}
                  className="w-full py-3.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
                >
                  <span>VERIFY & COMPLETE DELIVERY</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* STEP 7: Delivered! */}
            {currentStep === 7 && (
              <div className="space-y-6 text-center max-w-md mx-auto">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 mx-auto animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-display">
                    Delivery Completed!
                  </span>
                  <h3 className="text-3xl font-extrabold text-white mt-1 font-display">
                    TX10231 Delivered
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 font-sans">
                    Package successfully handed over to Arjun at Whitefield.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 space-y-1">
                  <div className="flex justify-between">
                    <span>Transit Cost:</span>
                    <span className="font-bold text-white">₹45 (47% saved)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Environmental Impact:</span>
                    <span className="font-bold text-white">3.2 kg CO₂ saved vs private road courier</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={handleReset}
                    className="w-full py-3 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-colors"
                  >
                    Run Demo Again
                  </button>
                  <a
                    href="#downloads"
                    className="w-full py-3 rounded-xl text-xs font-bold text-white bg-[#1A237E] hover:bg-[#283593] border border-cyan-400/30 shadow-md flex items-center justify-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download APK
                  </a>
                </div>
              </div>
            )}

          </div>

          {/* Bottom helper footnote */}
          <div className="px-6 py-3 bg-[#080C28] border-t border-white/10 text-center">
            <p className="text-[11px] text-slate-400 font-sans">
              * Supplementary browser simulation. The native Flutter Android application is the primary project prototype.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
