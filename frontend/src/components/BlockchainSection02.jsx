import React from 'react';
import { Check, Shield, Users, Clock } from 'lucide-react';

export default function BlockchainSection02({ onLoadDemo }) {
  const bulletPoints = [
    'ZERO CUSTOMER SHIFT (NO UNUSED CLIENT PORTALS)',
    '100% COVERAGE MANIFEST ACCOUNTING (ZERO DROPOUTS)',
    'DYNAMIC WHATSAPP WITH STRICT EXCLUSION INVARIANT',
    'MANDATORY REVIEWER OVERRIDES WITH SQLITE AUDIT TRAIL',
  ];

  return (
    <section className="relative py-28 md:py-36 bg-neutral-800 border-t border-[#2a2a2f] overflow-hidden">
      
      {/* Giant Outline Number "02" */}
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 relative">
        <div className="absolute -top-32 right-12 text-big-outline-bx text-right">
          02
        </div>
      </div>

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Content */}
          <div className="lg:col-span-7">
            <div className="text-[13px] font-bold tracking-[0.14em] uppercase text-[#a855f7] mb-3">
              Autonomous Practice OS
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold uppercase tracking-[0.05em] text-white leading-[1.1] mb-6">
              A Practice Gatekeeper from the Future<span className="text-[#a855f7]">.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#c5c5ca] leading-relaxed mb-8 max-w-[620px]">
              CA staff and article assistants currently spend up to 70% of their billable hours between Day 1 and Day 15 chasing clients across WhatsApp, email, and folders. fix2ship provides instant deterministic triage.
            </p>

            {/* Blockchain X Bullet Checklist */}
            <div className="space-y-4 mb-10">
              {bulletPoints.map((pt, i) => (
                <div key={i} className="flex items-center gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#7928ca] flex items-center justify-center text-white shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm font-bold tracking-[0.06em] uppercase text-white font-mono">
                    {pt}
                  </span>
                </div>
              ))}
            </div>

            {/* Trusted By Block */}
            <div className="flex items-center gap-5 pt-4 border-t border-[#2a2a2f]">
              <div className="flex -space-x-3">
                <div className="w-11 h-11 bg-[#7928ca] border-2 border-[#1a1a1d] flex items-center justify-center font-bold text-white text-xs">
                  NS
                </div>
                <div className="w-11 h-11 bg-[#434347] border-2 border-[#1a1a1d] flex items-center justify-center font-bold text-white text-xs">
                  KM
                </div>
                <div className="w-11 h-11 bg-[#26262a] border-2 border-[#1a1a1d] flex items-center justify-center font-bold text-white text-xs">
                  AT
                </div>
              </div>
              <div>
                <div className="text-xs font-mono uppercase text-[#929298] tracking-wider">
                  DESIGN PARTNER FIRM
                </div>
                <div className="text-base font-extrabold uppercase tracking-wide text-white">
                  NSVM &amp; Associates &middot; 80 Staff &middot; 300 Clients
                </div>
              </div>
            </div>

          </div>

          {/* Right: Feature Presentation Card */}
          <div className="lg:col-span-5">
            <div className="card-bx p-8 sm:p-12 border-2 border-[#34343a] space-y-6">
              
              <div className="flex justify-between items-center pb-4 border-b border-[#2a2a2f]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#a855f7] font-bold">
                  DETERMINISTIC METRICS
                </span>
                <span className="text-xs font-mono text-emerald-400">
                  REAL-TIME GATE
                </span>
              </div>

              <div className="space-y-4 font-mono">
                <div className="p-4 bg-[#0f0f12] border border-[#2a2a2f] flex justify-between items-center">
                  <span className="text-xs text-[#929298]">Total Verified Book ITC:</span>
                  <span className="text-lg font-bold text-white">₹28,50,000</span>
                </div>

                <div className="p-4 bg-[#0f0f12] border border-[#2a2a2f] flex justify-between items-center">
                  <span className="text-xs text-[#929298]">Extracted Sales Vouchers:</span>
                  <span className="text-lg font-bold text-emerald-400">120 / 120</span>
                </div>

                <div className="p-4 bg-amber-950/20 border border-amber-500/30 flex justify-between items-center">
                  <span className="text-xs text-amber-300">Bank Statement Cutoff:</span>
                  <span className="text-xs font-bold text-amber-400">Ends Sept 24 (6d gap)</span>
                </div>

                <div className="p-4 bg-rose-950/20 border border-rose-500/30 flex justify-between items-center">
                  <span className="text-xs text-rose-300">Missing Tata Steel Bill:</span>
                  <span className="text-xs font-bold text-rose-400">₹1.8L ITC Blocked</span>
                </div>
              </div>

              <button
                onClick={onLoadDemo}
                className="btn-primary-bx w-full"
              >
                Launch Verification Gate
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
