import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileCheck2,
  Zap,
  Cpu,
  Layers,
  ChevronRight,
} from 'lucide-react';
import ShinyText from './ReactBits/ShinyText';
import DecryptedText from './ReactBits/DecryptedText';
import SplineViewer from './SplineViewer';

export default function Hero3D({ onLoadDemo, onScrollToDemo }) {
  return (
    <section className="relative min-h-[95vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Top Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold backdrop-blur-xl shadow-[0_0_25px_rgba(168,85,247,0.25)]">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-purple-200">
              Validated Practice OS for CA Firms &middot;
            </span>
            <span className="font-mono text-purple-400">
              <DecryptedText text="161 Automated Pytest Invariants Passing" speed={30} />
            </span>
          </div>
        </motion.div>

        {/* Hero Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Controls */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-6 space-y-6 text-center lg:text-left"
          >
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                From Document Chaos to{' '}
                <ShinyText
                  text="Ship-Ready Compliance."
                  speed={4}
                  className="font-extrabold text-4xl sm:text-5xl xl:text-6xl"
                />
              </h1>
              
              <p className="text-base sm:text-lg text-purple-200/80 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                <span className="text-white font-semibold">fix2ship</span> transforms messy client WhatsApps, bank cutoffs, and missing vendor bills into deterministic, audit-cleared data ready to ship to <span className="text-purple-300 font-mono">Tally</span>, <span className="text-purple-300 font-mono">Winman</span> & <span className="text-purple-300 font-mono">GSTR</span>.
              </p>
            </div>

            {/* Invariant Highlights (React Bits Micro-Pills) */}
            <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start text-xs font-mono">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#140e2d] border border-purple-500/25 text-purple-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Deterministic Engine</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#140e2d] border border-purple-500/25 text-purple-200">
                <Zap className="w-4 h-4 text-purple-400" />
                <span>0% LLM Tax Hallucinations</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#140e2d] border border-purple-500/25 text-purple-200">
                <Cpu className="w-4 h-4 text-indigo-400" />
                <span>On-Premise Binary Privacy</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onLoadDemo}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <Zap className="w-4 h-4 text-yellow-300" />
                <span>Launch Live Canonical Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onScrollToDemo}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-medium text-purple-200 bg-purple-950/40 border border-purple-500/30 hover:border-purple-400/60 hover:bg-purple-900/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Layers className="w-4 h-4 text-purple-400" />
                <span>Inspect 3D Workspace</span>
              </button>
            </div>

            {/* Live Client Proof */}
            <div className="pt-4 border-t border-purple-500/15 flex flex-col sm:flex-row items-center gap-3 text-xs text-purple-300/70 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-purple-700 border-2 border-[#07050e] flex items-center justify-center font-bold text-[10px] text-white">KM</div>
                <div className="w-7 h-7 rounded-full bg-indigo-600 border-2 border-[#07050e] flex items-center justify-center font-bold text-[10px] text-white">NS</div>
                <div className="w-7 h-7 rounded-full bg-emerald-600 border-2 border-[#07050e] flex items-center justify-center font-bold text-[10px] text-white">AT</div>
              </div>
              <p>
                Trusted by 6-Partner CA Firms: <span className="text-purple-200 font-semibold">NSVM & Associates</span> (80 Staff &middot; 300 Clients)
              </p>
            </div>
          </motion.div>

          {/* Right Column: Interactive 3D Spline & Three.js Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 w-full relative"
          >
            <SplineViewer onStreamClick={onScrollToDemo} />
          </motion.div>
        </div>

        {/* Floating Quick Metric Ribbon (React Bits Glass Ribbon) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="glass-panel p-4 rounded-2xl flex flex-col items-center justify-center text-center">
            <span className="text-2xl sm:text-3xl font-extrabold font-mono text-purple-300">70%</span>
            <span className="text-xs text-purple-200/70 mt-1">Staff Chasing Hours Saved</span>
          </div>

          <div className="glass-panel p-4 rounded-2xl flex flex-col items-center justify-center text-center">
            <span className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400">100%</span>
            <span className="text-xs text-purple-200/70 mt-1">Coverage Manifest Accounted</span>
          </div>

          <div className="glass-panel p-4 rounded-2xl flex flex-col items-center justify-center text-center">
            <span className="text-2xl sm:text-3xl font-extrabold font-mono text-purple-300">₹28.5L</span>
            <span className="text-xs text-purple-200/70 mt-1">Book ITC Verified</span>
          </div>

          <div className="glass-panel p-4 rounded-2xl flex flex-col items-center justify-center text-center">
            <span className="text-2xl sm:text-3xl font-extrabold font-mono text-yellow-300">0 Days</span>
            <span className="text-xs text-purple-200/70 mt-1">Customer Onboarding Shift</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
