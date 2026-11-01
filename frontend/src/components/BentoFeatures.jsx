import React from 'react';
import { motion } from 'framer-motion';
import {
  FileSpreadsheet,
  Receipt,
  Building2,
  AlertTriangle,
  MessageSquare,
  ShieldAlert,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowUpRight,
  Database,
} from 'lucide-react';
import SpotlightCard from './ReactBits/SpotlightCard';
import ShinyText from './ReactBits/ShinyText';

export default function BentoFeatures() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>4-STREAM DETERMINISTIC ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Designed for Zero-Disruption Practice Operations
          </h2>
          <p className="text-purple-200/70 text-base sm:text-lg">
            Clients continue sending documents through WhatsApp and email. <span className="text-white font-medium">fix2ship</span> parses, audits, and validates every single row, page, and byte before releasing it into your accounting pipeline.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
          
          {/* Bento Item 1: Sales Register Engine (Large 7-Col) */}
          <div className="md:col-span-3 lg:col-span-7">
            <SpotlightCard className="p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-purple-300">
                    <FileSpreadsheet className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    STREAM 01 &middot; GSTR-1 READY
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  Sales Register & Sequence Continuity Engine
                </h3>
                <p className="text-purple-200/75 text-sm leading-relaxed mb-6">
                  Parses multi-tab Excel files, CSVs, and Tally exports. Evaluates invoice numbering sequence continuity, verifies zero broken tax voucher gaps, and reconciles output IGST, CGST, and SGST rates with mathematical determinism.
                </p>

                {/* Simulated Mini Data Pill */}
                <div className="p-3.5 rounded-xl bg-[#080514]/80 border border-purple-500/15 font-mono text-xs space-y-2 text-purple-300/80">
                  <div className="flex justify-between items-center text-purple-200">
                    <span>Voucher Range: INV-2026-001 &rarr; INV-2026-120</span>
                    <span className="text-emerald-400 font-bold">120/120 Verified</span>
                  </div>
                  <div className="w-full bg-purple-950/60 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-500 to-purple-500 h-full w-full" />
                  </div>
                  <div className="flex justify-between text-[11px] text-purple-400/60">
                    <span>SHA-256 Checked</span>
                    <span>100% Extracted Rows</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-purple-500/15 flex items-center justify-between text-xs text-purple-400">
                <span>Deterministic Rule ID: RULE_SALES_SEQ_01</span>
                <span className="font-mono text-emerald-400 font-semibold">0 Exceptions</span>
              </div>
            </SpotlightCard>
          </div>

          {/* Bento Item 2: Purchase Register & ITC Audit (5-Col) */}
          <div className="md:col-span-3 lg:col-span-5">
            <SpotlightCard className="p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-purple-300">
                    <Receipt className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    STREAM 02 &middot; GSTR-3B
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  Purchase Register & ITC Integrity
                </h3>
                <p className="text-purple-200/75 text-sm leading-relaxed mb-4">
                  Reconciles total Input Tax Credit (ITC) claimable. Validates supplier GSTIN checksums, tax breakdown arithmetic, and reverse charge liability.
                </p>

                <div className="p-4 rounded-xl bg-[#080514]/80 border border-purple-500/15 space-y-2">
                  <div className="text-xs text-purple-400 font-mono">Total Book ITC Verified:</div>
                  <div className="text-2xl font-extrabold text-white font-mono flex items-center gap-2">
                    ₹28,50,000.00
                    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-normal">
                      85 Vouchers
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-purple-500/15 flex items-center justify-between text-xs text-purple-400">
                <span>GST Section 16(2)(a) Audit</span>
                <span className="text-purple-200 font-mono">100% Coverage</span>
              </div>
            </SpotlightCard>
          </div>

          {/* Bento Item 3: Bank Cutoff Sentinel (5-Col) */}
          <div className="md:col-span-3 lg:col-span-5">
            <SpotlightCard className="p-8 h-full flex flex-col justify-between border-amber-500/30 bg-amber-950/10">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-900/30 border border-amber-500/30 flex items-center justify-center text-amber-300">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    STREAM 03 &middot; CUTOFF FLAG
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  Bank Statement Cutoff Sentinel
                </h3>
                <p className="text-purple-200/75 text-sm leading-relaxed mb-4">
                  Instantly detects partial banking periods. If the client submits a statement ending September 24th, the sentinel flags the missing 6 days before audit reconciliations begin.
                </p>

                <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/30 text-amber-200/90 text-xs font-mono space-y-1">
                  <div className="font-bold flex items-center gap-1.5 text-amber-300">
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                    Cutoff Detected: Early Termination
                  </div>
                  <div>Period: Sept 01 &rarr; Sept 24, 2026</div>
                  <div className="text-amber-400/80">Missing: Sept 25 to Sept 30 (6 Days Gap)</div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-purple-500/15 flex items-center justify-between text-xs text-amber-400 font-mono">
                <span>Account: HDFC Current A/C #4012</span>
                <span>Action: Auto-Chased</span>
              </div>
            </SpotlightCard>
          </div>

          {/* Bento Item 4: High-Value ITC Missing Bill Hunter (7-Col) */}
          <div className="md:col-span-3 lg:col-span-7">
            <SpotlightCard className="p-8 h-full flex flex-col justify-between border-rose-500/30 bg-rose-950/10">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-rose-900/30 border border-rose-500/30 flex items-center justify-center text-rose-300">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/30 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
                    STREAM 04 &middot; CRITICAL ITC RISK
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  Missing High-Value Vendor Invoice Hunter
                </h3>
                <p className="text-purple-200/75 text-sm leading-relaxed mb-4">
                  Cross-checks purchase register entries against physical PDF/image vouchers. If high ITC is claimed without matching source invoices, it flags the missing bill to prevent disallowance during tax assessment.
                </p>

                <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/30 space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono text-rose-300">
                    <span className="font-bold">Missing Invoice Detected: Tata Steel Ltd</span>
                    <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 font-semibold">
                      Risk: High Value
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline font-mono">
                    <span className="text-sm text-purple-200">Bill #TS-204 &middot; Sept 18</span>
                    <span className="text-xl font-bold text-rose-400">₹1,80,000 ITC Discrepancy</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-purple-500/15 flex items-center justify-between text-xs text-rose-300/80 font-mono">
                <span>Rule: SECTION_16_2_A_VOUCHER_CROSSCHECK</span>
                <span>Requires Physical Bill</span>
              </div>
            </SpotlightCard>
          </div>

        </div>

      </div>
    </section>
  );
}
