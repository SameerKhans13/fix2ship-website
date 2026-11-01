import React, { useState } from 'react';
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
  MessageCircle,
  UserCheck,
  X,
} from 'lucide-react';

export default function BlockchainPlayground({
  statusData,
  onLoadDemo,
  onReset,
  onOverride,
  showToast,
  isDemoLoaded,
}) {
  const [copied, setCopied] = useState(false);
  const [overrideModal, setOverrideModal] = useState({
    isOpen: false,
    findingId: null,
    title: '',
  });
  const [overrideReason, setOverrideReason] = useState('');
  const [targetDecision, setTargetDecision] = useState('verified');

  const handleCopyWhatsApp = () => {
    const text = statusData?.whatsapp_message || '';
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#7928ca', '#a855f7', '#ffffff'],
    });
    showToast('WhatsApp message copied to clipboard!', 'success');
    setTimeout(() => setCopied(false), 3000);
  };

  const openOverride = (id, title) => {
    setOverrideModal({ isOpen: true, findingId: id, title });
    setOverrideReason('');
  };

  const closeOverride = () => {
    setOverrideModal({ isOpen: false, findingId: null, title: '' });
  };

  const submitOverride = (e) => {
    e.preventDefault();
    if (!overrideReason.trim()) {
      showToast('Documented reviewer reason is mandatory.', 'error');
      return;
    }
    onOverride(overrideModal.findingId, targetDecision, overrideReason);
    closeOverride();
  };

  return (
    <section id="demo" className="relative py-28 md:py-36 bg-neutral-800 border-t border-[#2a2a2f]">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-[840px] mb-16">
          <div className="text-[13px] font-bold tracking-[0.14em] uppercase text-[#a855f7] mb-3">
            Interactive Practice OS
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold uppercase tracking-[0.05em] text-white leading-[1.1] mb-6">
            The fix2ship Readiness Gatekeeper<span className="text-[#a855f7]">.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#c5c5ca] leading-relaxed">
            Live interactive workspace connecting client document streams to the deterministic gatekeeper.
          </p>
        </div>

        {/* Client Assignment Banner */}
        <div className="card-bx p-6 sm:p-8 mb-10 border-l-4 border-l-[#7928ca] flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-[#0f0f12] border border-[#34343a] flex items-center justify-center text-white font-mono font-bold text-lg">
              AP
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-bold uppercase tracking-wide text-white">
                  {statusData?.client_name || 'Apex Technologies India Pvt Ltd'}
                </h3>
                <span className="px-2.5 py-0.5 text-[11px] font-mono font-bold bg-[#7928ca]/20 text-[#a855f7] border border-[#7928ca]/40">
                  GSTIN: {statusData?.gstin || '27AAACA1234A1Z1'}
                </span>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono text-[#929298] uppercase mt-1">
                <span>Period: <strong className="text-white">{statusData?.period || 'Sept 2026'}</strong></span>
                <span>&bull;</span>
                <span>Reviewer: <strong className="text-white">Kavita Mehta (Audit Senior)</strong></span>
                <span>&bull;</span>
                <span className="text-emerald-400">161 Invariants Active</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onLoadDemo}
              className="btn-primary-bx small"
            >
              {isDemoLoaded ? 'Reload Apex Demo' : 'Load Apex Demo'}
            </button>
            <button
              onClick={onReset}
              className="btn-secondary-bx small flex items-center gap-2"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* 4 Stream Cards in Blockchain X Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Stream 1: Sales Register */}
          <div className="card-bx p-6 sm:p-8 border-l-4 border-l-emerald-500 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="w-12 h-12 bg-[#0f0f12] border border-[#34343a] flex items-center justify-center text-emerald-400">
                  <FileSpreadsheet className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  Complete
                </span>
              </div>

              <h4 className="text-lg font-bold uppercase tracking-wide text-white mb-2">
                Sales Register
              </h4>
              <p className="text-xs text-[#929298] uppercase font-mono mb-4">
                GSTR-1 Outward Supplies
              </p>

              <div className="p-3.5 bg-[#0f0f12] border border-[#2a2a2f] font-mono text-xs space-y-1.5 text-[#c5c5ca]">
                <div className="flex justify-between">
                  <span className="text-[#929298]">Vouchers:</span>
                  <span className="text-white font-bold">{statusData?.sales_register?.rows || 120} rows</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#929298]">Continuity:</span>
                  <span className="text-emerald-400 font-bold">100% Contiguous</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#929298]">Taxable:</span>
                  <span className="text-white">₹1.42 Cr</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#2a2a2f] text-[11px] font-mono text-[#929298] flex justify-between">
              <span>SHA-256 Validated</span>
              <span className="text-emerald-400 font-bold">&#x2713; Pass</span>
            </div>
          </div>

          {/* Stream 2: Purchase Register */}
          <div className="card-bx p-6 sm:p-8 border-l-4 border-l-emerald-500 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="w-12 h-12 bg-[#0f0f12] border border-[#34343a] flex items-center justify-center text-emerald-400">
                  <Receipt className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  Complete
                </span>
              </div>

              <h4 className="text-lg font-bold uppercase tracking-wide text-white mb-2">
                Purchase Register
              </h4>
              <p className="text-xs text-[#929298] uppercase font-mono mb-4">
                GSTR-3B Inward Supply
              </p>

              <div className="p-3.5 bg-[#0f0f12] border border-[#2a2a2f] font-mono text-xs space-y-1.5 text-[#c5c5ca]">
                <div className="flex justify-between">
                  <span className="text-[#929298]">Vouchers:</span>
                  <span className="text-white font-bold">{statusData?.purchase_register?.rows || 85} rows</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#929298]">Book ITC:</span>
                  <span className="text-emerald-400 font-bold">₹28,50,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#929298]">Sec 16(2)(a):</span>
                  <span className="text-white">Verified</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#2a2a2f] text-[11px] font-mono text-[#929298] flex justify-between">
              <span>85 ITC Claims</span>
              <span className="text-emerald-400 font-bold">&#x2713; Pass</span>
            </div>
          </div>

          {/* Stream 3: Bank Statement */}
          <div className="card-bx p-6 sm:p-8 border-l-4 border-l-amber-500 bg-amber-950/10 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="w-12 h-12 bg-[#0f0f12] border border-[#34343a] flex items-center justify-center text-amber-400">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/40">
                  Cutoff Flag
                </span>
              </div>

              <h4 className="text-lg font-bold uppercase tracking-wide text-white mb-2">
                Bank Statement
              </h4>
              <p className="text-xs text-amber-400 uppercase font-mono mb-4">
                HDFC Current A/C #4012
              </p>

              <div className="p-3.5 bg-[#0f0f12] border border-amber-500/30 font-mono text-xs space-y-1.5 text-[#c5c5ca]">
                <div className="flex justify-between">
                  <span className="text-[#929298]">Provided:</span>
                  <span className="text-white">01 Sep &rarr; 24 Sep</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#929298]">Cutoff Gap:</span>
                  <span className="text-amber-400 font-bold">Last 6 Days Missing</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#929298]">Action:</span>
                  <span className="text-amber-300">Auto-Chased</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#2a2a2f] text-[11px] font-mono flex justify-between items-center">
              <button
                onClick={() => openOverride('FINDING_BANK_CUTOFF_01', 'Bank Cutoff Sept 24')}
                className="text-[#a855f7] hover:underline uppercase"
              >
                Override
              </button>
              <span className="text-amber-400 font-bold">Hold</span>
            </div>
          </div>

          {/* Stream 4: Vendor Invoices */}
          <div className="card-bx p-6 sm:p-8 border-l-4 border-l-rose-500 bg-rose-950/10 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="w-12 h-12 bg-[#0f0f12] border border-[#34343a] flex items-center justify-center text-rose-400">
                  <FileText className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-400 border border-rose-500/40">
                  1 Bill Missing
                </span>
              </div>

              <h4 className="text-lg font-bold uppercase tracking-wide text-white mb-2">
                Vendor Invoices
              </h4>
              <p className="text-xs text-rose-400 uppercase font-mono mb-4">
                Tata Steel Ltd (#TS-204)
              </p>

              <div className="p-3.5 bg-[#0f0f12] border border-rose-500/30 font-mono text-xs space-y-1.5 text-[#c5c5ca]">
                <div className="flex justify-between">
                  <span className="text-[#929298]">Matched:</span>
                  <span className="text-white">12 of 13 Bills</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#929298]">Missing Bill:</span>
                  <span className="text-rose-400 font-bold">#TS-204</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#929298]">ITC at Risk:</span>
                  <span className="text-rose-400 font-bold">₹1,80,000</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#2a2a2f] text-[11px] font-mono flex justify-between items-center">
              <button
                onClick={() => openOverride('FINDING_TATA_STEEL_ITC_01', 'Missing Tata Steel Invoice #TS-204')}
                className="text-[#a855f7] hover:underline uppercase"
              >
                Override
              </button>
              <span className="text-rose-400 font-bold">Hold</span>
            </div>
          </div>

        </div>

        {/* WhatsApp & Ingestion Row in Blockchain X Style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Dynamic WhatsApp Box (7-col) */}
          <div className="lg:col-span-7 card-bx p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366]">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold uppercase tracking-wider text-white">
                    Dynamic WhatsApp Follow-up (Strict Exclusion Invariant)
                  </h4>
                  <p className="text-xs text-[#929298]">
                    Verified streams (Sales &amp; Purchase) are never included in client chasing.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-[#0f0f12] border border-[#34343a] font-mono text-xs text-[#c5c5ca] whitespace-pre-wrap leading-relaxed">
                {statusData?.whatsapp_message || `Hi Sharma ji, for your Sept 2026 GST return, we need two quick items:

1. Bank statement from Sept 25 to Sept 30 (HDFC **4012)
2. Copy of Tata Steel Ltd bill #TS-204 (₹1.8L)

Please send these at your earliest convenience.`}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#2a2a2f] flex flex-wrap justify-between items-center gap-4">
              <span className="text-xs font-mono text-[#929298]">
                Recipient: Rajesh Sharma (MD, Apex Tech)
              </span>
              <button
                onClick={handleCopyWhatsApp}
                className="btn-primary-bx small flex items-center gap-2 bg-[#25D366] border-[#25D366] hover:bg-[#20ba59]"
              >
                {copied ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4 text-white" />}
                <span>{copied ? 'Copied' : 'Copy Message'}</span>
              </button>
            </div>
          </div>

          {/* Ingestion Box (5-col) */}
          <div className="lg:col-span-5 card-bx p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#0f0f12] border border-[#34343a] flex items-center justify-center text-[#a855f7]">
                  <UploadCloud className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold uppercase tracking-wider text-white">
                    Direct Document Ingestion Zone
                  </h4>
                  <p className="text-xs font-mono text-[#929298]">
                    FR-05 &middot; Binary Magic Byte Validation
                  </p>
                </div>
              </div>

              <div
                onClick={() => showToast('Dropped document parsed & verified with SHA-256 hash.', 'success')}
                className="border-2 border-dashed border-[#34343a] hover:border-[#7928ca] p-8 text-center cursor-pointer transition-colors bg-[#0f0f12]"
              >
                <UploadCloud className="w-10 h-10 text-[#a855f7] mx-auto mb-3" />
                <p className="text-sm font-bold uppercase tracking-wider text-white mb-1">
                  Drop Compliance Files
                </p>
                <p className="text-xs text-[#929298] font-mono">
                  .xlsx, .csv, .pdf, .png, .jpg (Up to 50MB)
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#2a2a2f] flex justify-between text-[11px] font-mono uppercase text-[#929298]">
              <span>SHA-256 Hashing</span>
              <span>Zero Leakage</span>
            </div>
          </div>

        </div>

      </div>

      {/* Reviewer Modal */}
      {overrideModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <div className="w-full max-w-lg bg-[#1a1a1d] border-2 border-[#7928ca] p-6 space-y-5">
            <div className="flex justify-between items-center pb-3 border-b border-[#2a2a2f]">
              <div className="flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-[#a855f7]" />
                <h3 className="text-base font-bold uppercase tracking-wide text-white">
                  Reviewer Status Override
                </h3>
              </div>
              <button onClick={closeOverride} className="text-[#929298] hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div>
              <p className="text-xs font-mono uppercase text-[#929298] mb-1">Target Finding:</p>
              <div className="p-3 bg-[#0f0f12] border border-[#2a2a2f] text-sm text-white font-mono">
                {overrideModal.title}
              </div>
            </div>

            <form onSubmit={submitOverride} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase text-[#929298] mb-2">
                  Disposition Target:
                </label>
                <select
                  value={targetDecision}
                  onChange={(e) => setTargetDecision(e.target.value)}
                  className="w-full p-3 bg-[#0f0f12] border border-[#34343a] text-white text-xs font-mono focus:border-[#7928ca]"
                >
                  <option value="verified">Verified &amp; Accepted (CA Sign-off)</option>
                  <option value="clarification">Needs Further Client Clarification</option>
                  <option value="dismissed">Dismissed / Not Applicable</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#929298] mb-2">
                  Mandatory Reviewer Rationale:
                </label>
                <textarea
                  rows={3}
                  required
                  value={overrideReason}
                  onChange={(e) => setOverrideReason(e.target.value)}
                  placeholder="Document CA rationale (e.g. cross-referenced via GSTR-2B portal)..."
                  className="w-full p-3 bg-[#0f0f12] border border-[#34343a] text-white text-xs font-mono focus:border-[#7928ca] placeholder-[#929298]"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeOverride}
                  className="btn-secondary-bx small"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary-bx small"
                >
                  Record Override
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
