import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Layers,
  ShieldCheck,
  Cpu,
  ArrowRight,
  Sparkles,
  GitCommit,
  CheckCircle2,
  AlertTriangle,
  Lock,
  Ship,
  FileCode,
} from 'lucide-react';
import SpotlightCard from './ReactBits/SpotlightCard';

export default function Architecture3D() {
  const [selectedTier, setSelectedTier] = useState(1);

  const tiers = [
    {
      tier: 1,
      name: 'Tier 1: Document Structure & Ingestion',
      subtitle: 'Binary & Manifest Layer',
      icon: Layers,
      color: 'from-purple-500 to-indigo-500',
      description:
        'Validates binary magic bytes (preventing spoofed extensions), computes SHA-256 integrity checksums, and compiles a 100% complete Coverage Manifest accounting for every sheet, PDF page, and row.',
      rules: [
        'Magic bytes check (.xlsx, .csv, .pdf, .png, .jpg)',
        'Zero-byte and corruption detection (FR-11)',
        '100% Sheet and Page accounting manifest',
        'Multi-format tabular and vector parsing',
      ],
      output: 'ExtractedDocumentData Object with SHA-256 hash',
    },
    {
      tier: 2,
      name: 'Tier 2: Period Boundary & Cutoff Sentinel',
      subtitle: 'Temporal Integrity Layer',
      icon: Cpu,
      color: 'from-indigo-500 to-violet-500',
      description:
        'Evaluates transaction dates against the assignment return period. Instantly detects early statement terminations (e.g., bank statement cut off on Sept 24 leaving 6 critical days missing before month-end).',
      rules: [
        'Strict calendar month boundary verification',
        'Early cutoff detection (e.g., HDFC ending Sept 24)',
        'Invoice sequential numbering continuity audit',
        'Chronological gap calculation',
      ],
      output: 'PeriodCoverageEvaluation (Complete | Cutoff Gap)',
    },
    {
      tier: 3,
      name: 'Tier 3: Cross-Stream & Tax Integrity Gate',
      subtitle: 'Statutory GST Compliance Layer',
      icon: ShieldCheck,
      color: 'from-violet-500 to-fuchsia-500',
      description:
        'Cross-checks purchase register entries against physical vendor bills. Evaluates GST Section 16(2)(a) possession requirement. Flags unattached high-value ITC claims (e.g., missing ₹1.8L Tata Steel bill) before tax disallowance.',
      rules: [
        'GST Section 16(2)(a) ITC eligibility gate',
        'High-value invoice threshold enforcement (>₹50,000)',
        'Tax arithmetic verification (CGST + SGST = IGST)',
        'Unregistered supplier & RCM identification',
      ],
      output: 'Discrepancy Candidate Finding with Risk Severity',
    },
  ];

  return (
    <section id="architecture" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>DETERMINISTIC 3-TIER ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            How fix2ship Verifies Readiness
          </h2>
          <p className="text-purple-200/70 text-base sm:text-lg">
            Unlike probabilistic LLMs that hallucinate tax conclusions, fix2ship operates as a mathematical gate machine with zero margin for error.
          </p>
        </div>

        {/* 3-Tier Horizontal Visual Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {tiers.map((t) => {
            const Icon = t.icon;
            const isSelected = selectedTier === t.tier;
            return (
              <div
                key={t.tier}
                onClick={() => setSelectedTier(t.tier)}
                className="cursor-pointer transition-all duration-300"
              >
                <SpotlightCard
                  className={`p-6 h-full flex flex-col justify-between border-2 ${
                    isSelected
                      ? 'border-purple-400 bg-purple-950/40 shadow-[0_0_35px_rgba(168,85,247,0.35)] scale-[1.02]'
                      : 'border-purple-500/20 hover:border-purple-500/40'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${t.color} flex items-center justify-center text-white shadow-lg`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-purple-950/80 text-purple-300 border border-purple-500/30">
                        TIER 0{t.tier}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1">{t.name}</h3>
                    <p className="text-xs text-purple-300/60 font-mono mb-4">{t.subtitle}</p>
                    <p className="text-xs text-purple-200/80 leading-relaxed">{t.description}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-purple-500/15 flex items-center justify-between text-xs">
                    <span className="text-purple-400 font-mono">Click to Inspect Rules</span>
                    <ArrowRight className={`w-4 h-4 text-purple-300 transition-transform ${isSelected ? 'translate-x-1' : ''}`} />
                  </div>
                </SpotlightCard>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Panel for Selected Tier */}
        {tiers
          .filter((t) => t.tier === selectedTier)
          .map((t) => (
            <motion.div
              key={t.tier}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="glass-panel-elevated p-8 rounded-3xl border border-purple-500/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/40 text-purple-300 text-xs font-mono">
                  <span>TIER {t.tier} SPECIFICATION</span>
                </div>
                <h4 className="text-2xl font-bold text-white">{t.name}</h4>
                <p className="text-sm text-purple-200/80 leading-relaxed">{t.description}</p>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono text-purple-300 font-bold">AUTOMATED INVARIANTS:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {t.rules.map((rule, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-purple-200 font-mono bg-[#090616]/70 p-2.5 rounded-xl border border-purple-500/15">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{rule}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#090616] p-6 rounded-2xl border border-purple-500/20 font-mono text-xs space-y-3">
                <div className="flex items-center justify-between text-purple-400 pb-2 border-b border-purple-500/20">
                  <span className="flex items-center gap-1.5 font-bold">
                    <FileCode className="w-4 h-4 text-purple-400" />
                    Tier Data Output Contract
                  </span>
                  <span className="text-[10px] text-emerald-400">Deterministic</span>
                </div>

                <div className="text-purple-300/80 text-[11px] leading-relaxed">
                  <pre className="text-purple-200 overflow-x-auto whitespace-pre-wrap">
{`{
  "tier": ${t.tier},
  "verified_status": "PASS",
  "contract": "${t.output}",
  "hash_enforced": true,
  "zero_hallucinations": true
}`}
                  </pre>
                </div>

                <div className="pt-2 border-t border-purple-500/15 flex items-center justify-between text-[11px] text-purple-400">
                  <span>Audit Gate: Pass / Hold</span>
                  <span className="text-purple-300 font-bold">fix2ship Engine</span>
                </div>
              </div>
            </motion.div>
          ))}

        {/* Release Gate Bottom Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-purple-950/40 via-indigo-950/40 to-purple-950/40 border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
              <Ship className="w-5 h-5 text-purple-300" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white">The Release Gate Machine</h5>
              <p className="text-xs text-purple-300/70">
                Only data passing all 3 tiers is marked "Ship-Ready" for 1-click push to Tally XML and Winman GST.
              </p>
            </div>
          </div>
          <span className="px-3 py-1.5 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            ZERO DISRUPTION PRACTICE OS
          </span>
        </div>

      </div>
    </section>
  );
}
