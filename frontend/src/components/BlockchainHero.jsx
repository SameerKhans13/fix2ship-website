import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import SplineViewer from './SplineViewer';

export default function BlockchainHero({ onLoadDemo, onScrollToDemo }) {
  return (
    <section id="home" className="relative pt-16 pb-28 md:pt-24 md:pb-36 overflow-hidden bg-neutral-800 bg-mesh-blockchain">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Blockchain X Hero Typography with Left Border */}
          <div className="lg:col-span-7 z-10">
            <div className="hero-v1-border-left">
              
              {/* Category Eyebrow: CRYPTO DEFI APP / COMPLIANCE GATEKEEPER */}
              <div className="text-[13px] md:text-[15px] font-bold tracking-[0.14em] uppercase text-[#a855f7] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#a855f7] animate-pulse" />
                <span>Deterministic Compliance &middot; Practice OS</span>
              </div>

              {/* Display-1 Heading: Bold, uppercase, letter-spacing */}
              <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-extrabold uppercase tracking-[0.05em] text-white leading-[1.05] mb-6">
                From Document Chaos to{' '}
                <span className="text-[#a855f7]">Ship-Ready</span> Compliance<span className="text-[#a855f7]">.</span>
              </h1>

              {/* Subtitle / Paragraph */}
              <p className="text-base sm:text-lg text-[#c5c5ca] font-normal leading-relaxed max-w-[620px] mb-10">
                Automated 3-tier document verification engine. Connects messy client WhatsApp files, bank cutoffs, and missing vendor bills directly to Tally and GSTR with mathematical zero-hallucination determinism.
              </p>

              {/* Buttons Row with Blockchain X Circle Arrow */}
              <div className="flex flex-wrap items-center gap-5 sm:gap-6">
                <button
                  onClick={onLoadDemo}
                  className="btn-primary-bx"
                >
                  Get Started
                </button>

                <button
                  onClick={onScrollToDemo}
                  className="inline-flex items-center text-[15px] font-bold tracking-[0.08em] uppercase text-white hover:text-[#a855f7] transition-colors group cursor-pointer"
                >
                  <span>Explore 3D Suite</span>
                  <div className="link-arrow-circle group-hover:border-[#a855f7] group-hover:bg-[#7928ca]">
                    <ArrowUpRight className="w-5 h-5 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </button>
              </div>

              {/* Feature Micro-Badges */}
              <div className="mt-12 pt-8 border-t border-[#2a2a2f] flex flex-wrap gap-6 text-xs font-mono uppercase text-[#929298]">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">&#x2713;</span>
                  <span>161 Tests Passing</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">&#x2713;</span>
                  <span>100% Deterministic</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">&#x2713;</span>
                  <span>Zero Customer Shift</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: 3D Interactive Spline / Quantum Engine in Blockchain X card wrapper */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Subtle back decorative glow circle */}
              <div className="absolute -top-12 -right-12 w-96 h-96 bg-[#7928ca]/20 rounded-full blur-[100px] pointer-events-none" />
              
              <div className="card-bx p-2 relative z-10 border-2 border-[#34343a]">
                <SplineViewer onStreamClick={onScrollToDemo} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
