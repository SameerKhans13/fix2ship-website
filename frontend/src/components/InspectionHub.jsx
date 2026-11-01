import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  AlertCircle,
  FileCheck2,
  History,
  FolderKanban,
  Sliders,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  ExternalLink,
  ShieldCheck,
  Hash,
  Database,
  ArrowRight,
} from 'lucide-react';
import SpotlightCard from './ReactBits/SpotlightCard';

export default function InspectionHub({
  findings = [],
  manifest = [],
  auditLogs = [],
  assignments = [],
  onSwitchAssignment,
  onResolveFinding,
}) {
  const [activeTab, setActiveTab] = useState('findings');

  const tabs = [
    { id: 'findings', label: 'Findings & Discrepancies', count: findings.length || 2, icon: AlertCircle },
    { id: 'manifest', label: 'Coverage Manifest', count: manifest.length || 4, icon: FileCheck2 },
    { id: 'audit', label: 'Audit Trail', count: auditLogs.length || 6, icon: History },
    { id: 'assignments', label: 'Saved Assignments', count: assignments.length || 3, icon: FolderKanban },
    { id: 'rules', label: 'GST Compliance Rules', count: 5, icon: Sliders },
  ];

  return (
    <section id="inspection" className="py-24 relative overflow-hidden bg-[#090616]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-mono">
            <Database className="w-3.5 h-3.5 text-purple-400" />
            <span>5-TAB DEEP AUDIT & GOVERNANCE SUITE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Inspection Hub & Governance
          </h2>
          <p className="text-purple-200/70 text-base sm:text-lg">
            Complete transparency into extracted rows, byte-level SHA-256 hashes, deterministic rule checks, and immutable reviewer sign-offs.
          </p>
        </div>

        {/* Tab Switcher (React Bits Floating Dock Style) */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-[#0f0b26] border border-purple-500/25 backdrop-blur-xl">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                      : 'text-purple-300/70 hover:text-white hover:bg-purple-900/30'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                      isActive ? 'bg-white/20 text-white' : 'bg-purple-950 text-purple-400'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Container */}
        <div className="glass-panel-elevated rounded-3xl p-6 sm:p-8 border border-purple-500/30 min-h-[420px]">
          
          {/* TAB 1: FINDINGS & DISCREPANCIES */}
          {activeTab === 'findings' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between border-b border-purple-500/20 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">Active Audit Discrepancies</h3>
                  <p className="text-xs text-purple-300/70">
                    Candidate issues automatically derived by deterministic rules. Pending CA reviewer resolution.
                  </p>
                </div>
                <span className="text-xs font-mono text-purple-400">2 Items Flagged</span>
              </div>

              <div className="space-y-4">
                {/* Finding 1: Tata Steel missing invoice */}
                <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-rose-900/40 border border-rose-500/40 flex items-center justify-center text-rose-300 shrink-0 mt-0.5">
                      <XCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40 uppercase">
                          CRITICAL &middot; ITC AT RISK
                        </span>
                        <span className="text-xs font-mono text-purple-400">RULE_SEC_16_2_A</span>
                      </div>
                      <h4 className="text-base font-bold text-white mt-1">
                        Unattached Vendor Invoice: Tata Steel Ltd (#TS-204)
                      </h4>
                      <p className="text-xs text-purple-200/80 mt-1 max-w-2xl leading-relaxed">
                        Purchase register claims ₹1,80,000 ITC for voucher TS-204 dated 18-Sep-2026, but no supporting vendor invoice image/PDF was detected. Under GST Section 16(2)(a), possession of a tax invoice is mandatory for credit eligibility.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => onResolveFinding && onResolveFinding('FINDING_TATA_STEEL_ITC_01')}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500 shadow-md transition-all whitespace-nowrap cursor-pointer shrink-0"
                  >
                    Reviewer Sign-off / Override
                  </button>
                </div>

                {/* Finding 2: Bank Statement cutoff */}
                <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-900/40 border border-amber-500/40 flex items-center justify-center text-amber-300 shrink-0 mt-0.5">
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 uppercase">
                          WARNING &middot; PERIOD CUTOFF
                        </span>
                        <span className="text-xs font-mono text-purple-400">RULE_BANK_PERIOD_CUTOFF</span>
                      </div>
                      <h4 className="text-base font-bold text-white mt-1">
                        Bank Statement Early Termination: HDFC #4012
                      </h4>
                      <p className="text-xs text-purple-200/80 mt-1 max-w-2xl leading-relaxed">
                        Uploaded bank statement ends on September 24th, 2026. The active compliance assignment is for Sept 2026 (requires transactions through Sept 30th). 6 final month-end banking days are unaccounted.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => onResolveFinding && onResolveFinding('FINDING_BANK_CUTOFF_01')}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-amber-600 hover:bg-amber-500 shadow-md transition-all whitespace-nowrap cursor-pointer shrink-0"
                  >
                    Reviewer Sign-off / Override
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: COVERAGE MANIFEST */}
          {activeTab === 'manifest' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between border-b border-purple-500/20 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">Coverage Manifest & SHA-256 Ledger</h3>
                  <p className="text-xs text-purple-300/70">
                    FR-11 Invariant: 100% of uploaded pages, sheets, and bytes are accounted for without silent dropouts.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>100% Manifest Verified</span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-purple-500/20 text-purple-300/70">
                      <th className="py-3 px-4">STREAM</th>
                      <th className="py-3 px-4">FILE NAME</th>
                      <th className="py-3 px-4">SHEETS / PAGES</th>
                      <th className="py-3 px-4">EXTRACTED ROWS</th>
                      <th className="py-3 px-4">SHA-256 HASH</th>
                      <th className="py-3 px-4">STATUS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-purple-500/10 text-purple-200">
                    <tr className="hover:bg-purple-950/30">
                      <td className="py-3 px-4 font-bold text-white">Sales Register</td>
                      <td className="py-3 px-4 text-purple-300">Apex_Sales_Sept2026.xlsx</td>
                      <td className="py-3 px-4">1 Sheet</td>
                      <td className="py-3 px-4 font-bold text-emerald-400">120 rows</td>
                      <td className="py-3 px-4 text-[10px] text-purple-400/80">e3b0c44298fc1c149afbf4c8996fb92427ae41e46...</td>
                      <td className="py-3 px-4"><span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">Verified</span></td>
                    </tr>
                    <tr className="hover:bg-purple-950/30">
                      <td className="py-3 px-4 font-bold text-white">Purchase Register</td>
                      <td className="py-3 px-4 text-purple-300">Apex_Purchases_Sept2026.xlsx</td>
                      <td className="py-3 px-4">1 Sheet</td>
                      <td className="py-3 px-4 font-bold text-emerald-400">85 rows</td>
                      <td className="py-3 px-4 text-[10px] text-purple-400/80">7d864e0e4f16cd9f8b85658be724b5a25efe6104f...</td>
                      <td className="py-3 px-4"><span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">Verified</span></td>
                    </tr>
                    <tr className="hover:bg-purple-950/30">
                      <td className="py-3 px-4 font-bold text-white">Bank Statement</td>
                      <td className="py-3 px-4 text-purple-300">HDFC_Bank_Sept2026.pdf</td>
                      <td className="py-3 px-4">4 Pages</td>
                      <td className="py-3 px-4 font-bold text-amber-400">42 txns</td>
                      <td className="py-3 px-4 text-[10px] text-purple-400/80">b94d27b9934d3e08a52e52d7da7dabfac484efe37...</td>
                      <td className="py-3 px-4"><span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">Cutoff Gap</span></td>
                    </tr>
                    <tr className="hover:bg-purple-950/30">
                      <td className="py-3 px-4 font-bold text-white">Vendor Invoices</td>
                      <td className="py-3 px-4 text-purple-300">12_Vendor_Bills.zip</td>
                      <td className="py-3 px-4">12 Files</td>
                      <td className="py-3 px-4 font-bold text-rose-400">12/13 Bills</td>
                      <td className="py-3 px-4 text-[10px] text-purple-400/80">4b227777d4dd1fc61c6f884f48641d02b4d121d3f...</td>
                      <td className="py-3 px-4"><span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300">1 Missing</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* TAB 3: AUDIT TRAIL */}
          {activeTab === 'audit' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between border-b border-purple-500/20 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">Tamper-Proof Audit Event Trail</h3>
                  <p className="text-xs text-purple-300/70">
                    FR-09 Invariant: Append-only chronological timeline stored in SQLite database.
                  </p>
                </div>
                <span className="text-xs font-mono text-purple-400">Persisted in SQLite</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400 font-bold">[DEMO_LOAD]</span>
                    <span className="text-white">Canonical Apex Demo Pack ingested with 120 sales & 85 purchases</span>
                  </div>
                  <span className="text-purple-400 text-[11px]">Today, 08:15:30 UTC &middot; usr_reviewer_01</span>
                </div>

                <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-amber-400 font-bold">[CUTOFF_FLAG]</span>
                    <span className="text-white">Rule RULE_BANK_PERIOD_CUTOFF triggered on HDFC_Bank_Sept2026.pdf</span>
                  </div>
                  <span className="text-purple-400 text-[11px]">Today, 08:15:31 UTC &middot; engine_rule_runner</span>
                </div>

                <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-rose-400 font-bold">[ITC_DISCREPANCY]</span>
                    <span className="text-white">Missing invoice detected: Tata Steel Ltd (#TS-204) ₹1,80,000 ITC</span>
                  </div>
                  <span className="text-purple-400 text-[11px]">Today, 08:15:31 UTC &middot; engine_rule_runner</span>
                </div>

                <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-purple-400 font-bold">[WHATSAPP_DRAFT]</span>
                    <span className="text-white">Strict exclusion invariant generated follow-up excluding complete streams</span>
                  </div>
                  <span className="text-purple-400 text-[11px]">Today, 08:15:32 UTC &middot; generator_composer</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 4: SAVED ASSIGNMENTS */}
          {activeTab === 'assignments' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between border-b border-purple-500/20 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">Client Assignments Manager</h3>
                  <p className="text-xs text-purple-300/70">
                    FR-01: Switch client assignments instantly without losing verified state.
                  </p>
                </div>
                <button
                  onClick={() => alert('New client assignment wizard is ready. In this demo, Apex Technologies is the canonical test pack.')}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md"
                >
                  + New Assignment
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-purple-950/40 border-2 border-purple-500/50 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/20 text-purple-300">CURRENT ACTIVE</span>
                    <span className="text-xs font-mono text-emerald-400">2 Complete &middot; 2 Pending</span>
                  </div>
                  <h4 className="text-base font-bold text-white">Apex Technologies India Pvt Ltd</h4>
                  <div className="text-xs font-mono text-purple-300/80 space-y-1">
                    <div>GSTIN: 27AAACA1234A1Z1</div>
                    <div>Period: Sept 2026</div>
                  </div>
                  <button className="w-full py-2 rounded-xl text-xs font-bold text-white bg-purple-700/60 cursor-default">
                    Active Session
                  </button>
                </div>

                <div className="p-5 rounded-2xl bg-[#0e0924] border border-purple-500/20 space-y-3 opacity-75 hover:opacity-100 transition-opacity">
                  <div className="flex justify-between items-center">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-950 text-purple-400">SAVED</span>
                    <span className="text-xs font-mono text-emerald-400">4 Complete</span>
                  </div>
                  <h4 className="text-base font-bold text-white">Reliance Retail Ventures</h4>
                  <div className="text-xs font-mono text-purple-300/80 space-y-1">
                    <div>GSTIN: 27AABCR9988B1Z2</div>
                    <div>Period: Aug 2026</div>
                  </div>
                  <button
                    onClick={() => alert('Switched context to Reliance Retail Ventures.')}
                    className="w-full py-2 rounded-xl text-xs font-medium text-purple-300 bg-purple-950/60 hover:bg-purple-900/40 border border-purple-500/30"
                  >
                    Reopen Assignment
                  </button>
                </div>

                <div className="p-5 rounded-2xl bg-[#0e0924] border border-purple-500/20 space-y-3 opacity-75 hover:opacity-100 transition-opacity">
                  <div className="flex justify-between items-center">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-950 text-purple-400">SAVED</span>
                    <span className="text-xs font-mono text-amber-400">1 Incomplete</span>
                  </div>
                  <h4 className="text-base font-bold text-white">Tata Motors Passenger Fleet</h4>
                  <div className="text-xs font-mono text-purple-300/80 space-y-1">
                    <div>GSTIN: 27AABCT5544C1Z9</div>
                    <div>Period: Q2 FY 2026-27</div>
                  </div>
                  <button
                    onClick={() => alert('Switched context to Tata Motors Passenger Fleet.')}
                    className="w-full py-2 rounded-xl text-xs font-medium text-purple-300 bg-purple-950/60 hover:bg-purple-900/40 border border-purple-500/30"
                  >
                    Reopen Assignment
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 5: GST COMPLIANCE RULES */}
          {activeTab === 'rules' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between border-b border-purple-500/20 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">GST Compliance Checklist Rules Template</h3>
                  <p className="text-xs text-purple-300/70">
                    FR-02: Deterministic evaluation criteria approved for Chartered Accountant practice audits.
                  </p>
                </div>
                <span className="text-xs font-mono text-emerald-400">Template ID: tmpl_canonical_apex_gst_v1</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20">
                  <div className="flex justify-between text-white font-bold mb-1">
                    <span>RULE 1: REQ_SALES_REG &middot; Sales Register Verification</span>
                    <span className="text-emerald-400">Mandatory</span>
                  </div>
                  <p className="text-purple-300/80">Requires .xlsx or .csv outward supplies register. Enforces continuous invoice sequence without gaps.</p>
                </div>

                <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20">
                  <div className="flex justify-between text-white font-bold mb-1">
                    <span>RULE 2: REQ_PURCH_REG &middot; Purchase Register & ITC Audit</span>
                    <span className="text-emerald-400">Mandatory</span>
                  </div>
                  <p className="text-purple-300/80">Reconciles inward supplies, supplier GSTINs, and eligible Input Tax Credit under Section 16(2)(a).</p>
                </div>

                <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20">
                  <div className="flex justify-between text-white font-bold mb-1">
                    <span>RULE 3: REQ_BANK_STMT &middot; Banking Cutoff Integrity</span>
                    <span className="text-emerald-400">Mandatory</span>
                  </div>
                  <p className="text-purple-300/80">Validates statement date coverage against the target compliance month. Flags cutoff terminations.</p>
                </div>

                <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20">
                  <div className="flex justify-between text-white font-bold mb-1">
                    <span>RULE 4: REQ_VEND_INVS &middot; High-Value ITC Invoice Cross-Match</span>
                    <span className="text-emerald-400">Mandatory</span>
                  </div>
                  <p className="text-purple-300/80">Cross-checks purchase register entries exceeding ₹50,000 against physical bill attachments.</p>
                </div>
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}
