import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  FileSpreadsheet,
  Receipt,
  Building2,
  FileText,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Copy,
  Check,
  UploadCloud,
  RotateCcw,
  Sparkles,
  ExternalLink,
  MessageCircle,
  ShieldCheck,
  UserCheck,
  ChevronRight,
  Info,
  X,
  FileCheck,
} from 'lucide-react';
import TiltCard from './ReactBits/TiltCard';
import SpotlightCard from './ReactBits/SpotlightCard';

export default function DemoPlayground({
  statusData,
  onLoadDemo,
  onReset,
  onOverride,
  showToast,
  isDemoLoaded,
}) {
  const [copied, setCopied] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [overrideModal, setOverrideModal] = useState({
    isOpen: false,
    findingId: null,
    title: '',
    currentStatus: '',
  });
  const [overrideReason, setOverrideReason] = useState('');
  const [targetDecision, setTargetDecision] = useState('verified');

  // Trigger celebration confetti
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#a855f7', '#c084fc', '#38bdf8', '#10b981'],
    });
  };

  const handleCopyWhatsApp = () => {
    const text = statusData?.whatsapp_message || '';
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    triggerConfetti();
    showToast('WhatsApp follow-up message copied to clipboard!', 'success');
    setTimeout(() => setCopied(false), 3000);
  };

  const openOverride = (id, title, status) => {
    setOverrideModal({
      isOpen: true,
      findingId: id,
      title,
      currentStatus: status,
    });
    setOverrideReason('');
  };

  const closeOverride = () => {
    setOverrideModal({ isOpen: false, findingId: null, title: '', currentStatus: '' });
  };

  const submitOverride = (e) => {
    e.preventDefault();
    if (!overrideReason.trim()) {
      showToast('Documented reviewer justification is required for maker-checker audit.', 'error');
      return;
    }
    onOverride(overrideModal.findingId, targetDecision, overrideReason);
    closeOverride();
  };

  return (
    <section id="demo" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>LIVE INTERACTIVE PRACTICE OS PLAYGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            The fix2ship Readiness Gatekeeper
          </h2>
          <p className="text-purple-200/70 text-base sm:text-lg">
            Witness the real deterministic 3-tier engine in action. Load the canonical client test pack or drop compliance files to observe real-time audit triage.
          </p>
        </div>

        {/* Active Client Context Banner */}
        <div className="mb-8 p-5 rounded-2xl glass-panel-elevated flex flex-wrap items-center justify-between gap-4 border border-purple-500/30">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300 font-bold text-lg font-mono">
              AP
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white">
                  {statusData?.client_name || 'Apex Technologies India Pvt Ltd'}
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  GSTIN: {statusData?.gstin || '27AAACA1234A1Z1'}
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs text-purple-300/70 font-mono mt-1">
                <span>Period: <span className="text-purple-200 font-semibold">{statusData?.period || 'Sept 2026'}</span></span>
                <span>&bull;</span>
                <span>Reviewer: <span className="text-purple-200 font-semibold">Kavita Mehta (Audit Senior)</span></span>
                <span>&bull;</span>
                <span className="text-emerald-400 font-semibold">Template: GST 3-Tier Verification v1</span>
              </div>
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex items-center gap-3">
            <button
              onClick={onLoadDemo}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>{isDemoLoaded ? 'Reload Apex Demo' : 'Load Canonical Apex Demo'}</span>
            </button>

            <button
              onClick={onReset}
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-medium text-purple-300 bg-purple-950/40 border border-purple-500/30 hover:border-purple-400/50 hover:text-white transition-all cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* 4 Multi-Color Stream Cards (FR-02, FR-06, FR-07) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          
          {/* Card 1: Sales Register */}
          <TiltCard
            className={`h-full border-l-4 ${
              statusData?.sales_register?.status === 'complete'
                ? 'border-l-emerald-500 border-purple-500/20'
                : 'border-l-purple-500 border-purple-500/20'
            }`}
          >
            <div className="flex flex-col justify-between h-full space-y-4">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-300">
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Complete
                  </span>
                </div>

                <h4 className="text-base font-bold text-white mb-1">Sales Register</h4>
                <p className="text-xs text-purple-300/70 mb-3">GSTR-1 Outward Supplies</p>

                <div className="space-y-1.5 p-3 rounded-xl bg-[#090615] border border-purple-500/15 font-mono text-[11px] text-purple-200">
                  <div className="flex justify-between">
                    <span className="text-purple-400/80">Extracted Vouchers:</span>
                    <span className="font-bold text-white">{statusData?.sales_register?.rows || 120} rows</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-400/80">Sequence Integrity:</span>
                    <span className="text-emerald-400 font-bold">100% Contiguous</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-400/80">Taxable Value:</span>
                    <span className="font-bold text-white">₹1,42,80,000</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-purple-500/15 flex justify-between items-center text-[10px] text-purple-400 font-mono">
                <span>SHA-256 Hash Verified</span>
                <span className="text-emerald-400">Zero Gaps</span>
              </div>
            </div>
          </TiltCard>

          {/* Card 2: Purchase Register */}
          <TiltCard
            className={`h-full border-l-4 ${
              statusData?.purchase_register?.status === 'complete'
                ? 'border-l-emerald-500 border-purple-500/20'
                : 'border-l-purple-500 border-purple-500/20'
            }`}
          >
            <div className="flex flex-col justify-between h-full space-y-4">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-300">
                    <Receipt className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Complete
                  </span>
                </div>

                <h4 className="text-base font-bold text-white mb-1">Purchase Register</h4>
                <p className="text-xs text-purple-300/70 mb-3">GSTR-3B / 2B Inward Supply</p>

                <div className="space-y-1.5 p-3 rounded-xl bg-[#090615] border border-purple-500/15 font-mono text-[11px] text-purple-200">
                  <div className="flex justify-between">
                    <span className="text-purple-400/80">Extracted Vouchers:</span>
                    <span className="font-bold text-white">{statusData?.purchase_register?.rows || 85} rows</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-400/80">Verified Book ITC:</span>
                    <span className="text-emerald-400 font-bold">₹28,50,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-400/80">Tax Breakdown:</span>
                    <span className="font-bold text-white">CGST/SGST/IGST</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-purple-500/15 flex justify-between items-center text-[10px] text-purple-400 font-mono">
                <span>Sec 16(2)(a) Audit</span>
                <span className="text-emerald-400">85 Active Claims</span>
              </div>
            </div>
          </TiltCard>

          {/* Card 3: Bank Statement */}
          <TiltCard
            className={`h-full border-l-4 ${
              statusData?.bank_statement?.status === 'incomplete'
                ? 'border-l-amber-500 border-amber-500/30 bg-amber-950/15'
                : 'border-l-emerald-500 border-purple-500/20'
            }`}
          >
            <div className="flex flex-col justify-between h-full space-y-4">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-900/30 border border-amber-500/30 flex items-center justify-center text-amber-300">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Incomplete Period
                  </span>
                </div>

                <h4 className="text-base font-bold text-white mb-1">Bank Statement</h4>
                <p className="text-xs text-amber-300/80 mb-3">HDFC Current A/C #4012</p>

                <div className="space-y-1.5 p-3 rounded-xl bg-amber-950/30 border border-amber-500/20 font-mono text-[11px] text-amber-200">
                  <div className="flex justify-between">
                    <span className="text-amber-400/80">Provided Period:</span>
                    <span className="font-bold text-white">01 Sep &rarr; 24 Sep</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-400/80">Early Cutoff:</span>
                    <span className="text-amber-400 font-bold">Missing Last 6 Days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-400/80">Cutoff Gap:</span>
                    <span className="text-white">25 Sep to 30 Sep</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-purple-500/15 flex justify-between items-center text-[10px]">
                <button
                  onClick={() => openOverride('FINDING_BANK_CUTOFF_01', 'Bank Cutoff Sept 24', 'Incomplete')}
                  className="text-purple-300 hover:text-white underline font-mono cursor-pointer"
                >
                  Reviewer Override
                </button>
                <span className="text-amber-400 font-mono">Auto-Chased</span>
              </div>
            </div>
          </TiltCard>

          {/* Card 4: Purchase Invoices */}
          <TiltCard
            className={`h-full border-l-4 ${
              statusData?.vendor_invoices?.missing_count > 0 || true
                ? 'border-l-rose-500 border-rose-500/30 bg-rose-950/15'
                : 'border-l-emerald-500 border-purple-500/20'
            }`}
          >
            <div className="flex flex-col justify-between h-full space-y-4">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-900/30 border border-rose-500/30 flex items-center justify-center text-rose-300">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40 flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" />
                    1 Bill Missing
                  </span>
                </div>

                <h4 className="text-base font-bold text-white mb-1">Vendor Invoices</h4>
                <p className="text-xs text-rose-300/80 mb-3">Physical Bills Cross-Match</p>

                <div className="space-y-1.5 p-3 rounded-xl bg-rose-950/30 border border-rose-500/20 font-mono text-[11px] text-rose-200">
                  <div className="flex justify-between">
                    <span className="text-rose-400/80">Matched Bills:</span>
                    <span className="font-bold text-white">12 of 13 Bills</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-rose-400/80">Missing Supplier:</span>
                    <span className="text-rose-300 font-bold">Tata Steel Ltd</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-rose-400/80">ITC at Risk:</span>
                    <span className="text-rose-400 font-bold">₹1,80,000</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-purple-500/15 flex justify-between items-center text-[10px]">
                <button
                  onClick={() => openOverride('FINDING_TATA_STEEL_ITC_01', 'Missing Tata Steel Invoice #TS-204', 'Critical')}
                  className="text-purple-300 hover:text-white underline font-mono cursor-pointer"
                >
                  Reviewer Override
                </button>
                <span className="text-rose-400 font-mono">Bill #TS-204</span>
              </div>
            </div>
          </TiltCard>

        </div>

        {/* Dynamic WhatsApp Chaser (FR-08: Strict Exclusion Invariant) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* WhatsApp Preview Card (7-Col) */}
          <div className="lg:col-span-7">
            <SpotlightCard className="p-6 h-full flex flex-col justify-between border-purple-500/30 bg-[#0d0922]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366]">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        Autonomous WhatsApp Follow-up Generator
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30">
                          1-CLICK COPY
                        </span>
                      </h4>
                      <p className="text-xs text-purple-300/70">
                        Strict Exclusion Invariant: Verified files (Sales & Purchase) are <span className="text-white font-medium">never</span> included in client follow-up.
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Chat Bubble */}
                <div className="rounded-2xl bg-[#091512] border border-[#25D366]/25 p-5 font-mono text-xs text-purple-100/90 whitespace-pre-wrap leading-relaxed shadow-inner">
                  {statusData?.whatsapp_message || `Dear Rajesh Sharma (Apex Technologies India Pvt Ltd),

Thank you for sharing the documents for Sept 2026. During our automated readiness audit, we verified your Sales and Purchase Registers.

To proceed with your GST return filing without delay, please provide the following missing items:

1. ⚠️ Bank Statement Cutoff: Your HDFC Current A/C (ending 4012) statement is missing transactions from 25th Sept to 30th Sept 2026. Please share the complete month-end statement.

2. ⚠️ Missing High-Value Invoice: Tata Steel Ltd invoice #TS-204 dated 18-Sep-2026 for ₹1,80,000 ITC is missing a supporting vendor bill.

Please reply or drop the documents here.
— Kavita Mehta, Audit Senior | NSVM & Associates`}
                </div>
              </div>

              {/* Copy Bar */}
              <div className="mt-5 pt-4 border-t border-purple-500/15 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-purple-300/60 font-mono">
                  Recipient: Rajesh Sharma &middot; Mobile: +91 98201 XXXXX
                </span>

                <button
                  onClick={handleCopyWhatsApp}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all cursor-pointer hover:scale-105 active:scale-95"
                >
                  {copied ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4 text-white" />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Formatted WhatsApp Message'}</span>
                </button>
              </div>
            </SpotlightCard>
          </div>

          {/* Interactive Ingestion Drop Zone (5-Col) */}
          <div className="lg:col-span-5">
            <SpotlightCard className="p-6 h-full flex flex-col justify-between border-purple-500/30">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-purple-300">
                      <UploadCloud className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">Direct Document Ingestion Zone</h4>
                      <p className="text-xs text-purple-300/70 font-mono">FR-05 &middot; Binary Magic Byte Validation</p>
                    </div>
                  </div>
                </div>

                {/* Drop Zone Box */}
                <div
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                  }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={(e) => {
                    e.preventDefault();
                    setIsDragging(false);
                    showToast('Document ingestion simulated. Parsing sheets & generating SHA-256 hash...', 'success');
                  }}
                  className={`border-2 border-dashed rounded-2xl p-6 text-center transition-all duration-300 ${
                    isDragging
                      ? 'border-purple-400 bg-purple-950/40 shadow-[0_0_30px_rgba(168,85,247,0.4)]'
                      : 'border-purple-500/30 bg-[#090616]/60 hover:border-purple-400/50'
                  }`}
                >
                  <UploadCloud className="w-10 h-10 text-purple-400 mx-auto mb-3 animate-bounce" />
                  <p className="text-sm font-semibold text-white mb-1">
                    Drag & Drop Client Compliance Documents
                  </p>
                  <p className="text-xs text-purple-300/60 mb-4">
                    Supports <span className="text-purple-200">.xlsx, .csv, .pdf, .png, .jpg</span> (Up to 50MB)
                  </p>
                  
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-950/80 border border-purple-500/20 text-[11px] font-mono text-purple-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Zero-Knowledge SHA-256 Manifest Hash</span>
                  </div>
                </div>
              </div>

              {/* Supported Format Tags */}
              <div className="mt-4 pt-3 border-t border-purple-500/15 flex flex-wrap items-center justify-between text-[11px] text-purple-400 font-mono">
                <span>Multi-sheet Excel Parser</span>
                <span>PDF Vector Extraction</span>
                <span>PNG Magic Byte Guard</span>
              </div>
            </SpotlightCard>
          </div>

        </div>

      </div>

      {/* Reviewer Override Modal (FR-03 & FR-07) */}
      <AnimatePresence>
        {overrideModal.isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="w-full max-w-lg rounded-2xl bg-[#0e0924] border border-purple-500/40 p-6 shadow-[0_20px_50px_rgba(168,85,247,0.4)] space-y-5"
            >
              <div className="flex items-center justify-between border-b border-purple-500/20 pb-4">
                <div className="flex items-center gap-2.5">
                  <UserCheck className="w-5 h-5 text-purple-400" />
                  <h3 className="text-lg font-bold text-white">Reviewer Status Override</h3>
                </div>
                <button onClick={closeOverride} className="text-purple-400 hover:text-white p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div>
                <p className="text-xs text-purple-300/80 mb-1 font-mono">TARGET FINDING / STREAM:</p>
                <p className="text-sm font-semibold text-white bg-purple-950/40 p-3 rounded-xl border border-purple-500/20">
                  {overrideModal.title}
                </p>
              </div>

              <form onSubmit={submitOverride} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-purple-300 mb-2">
                    DISPOSITION TARGET:
                  </label>
                  <select
                    value={targetDecision}
                    onChange={(e) => setTargetDecision(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#140e33] border border-purple-500/30 text-white text-sm focus:outline-none focus:border-purple-400"
                  >
                    <option value="verified">Verified & Accepted (Reviewer Sign-off)</option>
                    <option value="clarification">Needs Further Client Clarification</option>
                    <option value="dismissed">Dismissed / Not Applicable</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-purple-300 mb-2">
                    MANDATORY REVIEWER JUSTIFICATION:
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={overrideReason}
                    onChange={(e) => setOverrideReason(e.target.value)}
                    placeholder="Document mandatory CA audit rationale (e.g., Client confirmed bank balance matches ledger; vendor confirmed bill on GST portal)..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#140e33] border border-purple-500/30 text-white text-sm focus:outline-none focus:border-purple-400 placeholder:text-purple-400/40"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] text-purple-400 font-mono">
                    Logged to SQLite Audit Trail
                  </span>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={closeOverride}
                      className="px-4 py-2 rounded-xl text-xs font-medium text-purple-300 bg-purple-950/50 hover:bg-purple-900/40"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md"
                    >
                      Record Disposition
                    </button>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
