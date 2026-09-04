import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './sections/HeroSection';
import { ProblemSection } from './sections/ProblemSection';
import { SolutionSection } from './sections/SolutionSection';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { ComparisonSection } from './sections/ComparisonSection';
import { ProductShowcase } from './sections/ProductShowcase';
import { NetworkSection } from './sections/NetworkSection';
import { TechnologySection } from './sections/TechnologySection';
import { RoutingEngineSection } from './sections/RoutingEngineSection';
import { SecuritySection } from './sections/SecuritySection';
import { ImpactSection } from './sections/ImpactSection';
import { InteractiveDemo } from './sections/InteractiveDemo';
import { DownloadCenter } from './sections/DownloadCenter';
import { GitHubSection } from './sections/GitHubSection';
import { AboutSection } from './sections/AboutSection';
import { TeamSection } from './sections/TeamSection';
import { FaqSection } from './sections/FaqSection';
import { RoadmapSection } from './sections/RoadmapSection';

export function App() {
  return (
    <div className="min-h-screen bg-[#070B24] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-black">
      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <ComparisonSection />
        <ProductShowcase />
        <NetworkSection />
        <TechnologySection />
        <RoutingEngineSection />
        <SecuritySection />
        <ImpactSection />
        <InteractiveDemo />
        <DownloadCenter />
        <GitHubSection />
        <AboutSection />
        <TeamSection />
        <FaqSection />
        <RoadmapSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
