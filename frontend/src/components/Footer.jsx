import React from 'react';
import { Ship, ShieldCheck, Heart, Terminal, Sparkles, ArrowUp } from 'lucide-react';

export default function Footer({ onLoadDemo }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-purple-500/20 bg-[#06040d] relative overflow-hidden pt-16 pb-12">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-t from-purple-900/20 to-transparent blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-700 via-indigo-600 to-fuchsia-500 p-0.5 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                <div className="w-full h-full bg-[#0d091e] rounded-[10px] flex items-center justify-center">
                  <Ship className="w-5 h-5 text-purple-300" />
                </div>
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                fix<span className="text-purple-400">2</span>ship
              </span>
            </div>

            <p className="text-sm text-purple-200/70 max-w-md leading-relaxed">
              The zero-disruption practice operating system and autonomous pre-accounting gatekeeper. Deterministic 3-tier document verification built for Chartered Accountants and finance teams.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-xs font-mono text-purple-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>161 Pytest Invariants Passing</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Local Engine v1.0.0</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-300 font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-purple-200/70 font-medium">
              <li><a href="#features" className="hover:text-white transition-colors">4-Stream Architecture</a></li>
              <li><a href="#architecture" className="hover:text-white transition-colors">3-Tier Gatekeeper</a></li>
              <li><a href="#demo" className="hover:text-white transition-colors">Interactive Demo Playground</a></li>
              <li><a href="#inspection" className="hover:text-white transition-colors">Inspection Hub & Manifest</a></li>
              <li><a href="#roi" className="hover:text-white transition-colors">Practice ROI Calculator</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ & Compliance Rules</a></li>
            </ul>
          </div>

          {/* Compliance & Practice */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-300 font-bold">
              Practice Governance
            </h4>
            <div className="text-xs text-purple-200/70 space-y-2 leading-relaxed">
              <p>Canonical Design Partner: <span className="text-white font-medium">NSVM & Associates</span></p>
              <p>Reviewer Context: <span className="text-purple-300 font-mono">usr_reviewer_01</span> (Kavita Mehta)</p>
              <p>Statutory Guard: <span className="text-purple-300 font-mono">GST Section 16(2)(a)</span></p>
              <div className="pt-2">
                <button
                  onClick={onLoadDemo}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-purple-700/60 hover:bg-purple-600 transition-colors"
                >
                  ⚡ Trigger Canonical Demo
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-purple-500/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-300/60">
          <p>&copy; {new Date().getFullYear()} fix2ship. All rights reserved. Zero-disruption practice gatekeeper.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-950/60 hover:bg-purple-900/40 text-purple-300 hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
