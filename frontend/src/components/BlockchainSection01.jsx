import React from 'react';
import { FileSpreadsheet, Receipt, Building2, ShieldAlert, ArrowUpRight } from 'lucide-react';

export default function BlockchainSection01({ onLoadDemo }) {
  const streamFeatures = [
    {
      title: 'Sales Register & Sequence Engine',
      desc: 'Parses multi-tab Excel files, CSVs, and Tally exports. Evaluates invoice sequence continuity, verifying zero broken voucher numbering gaps.',
      icon: FileSpreadsheet,
      badge: 'GSTR-1 &middot; 120 Rows',
    },
    {
      title: 'Purchase Register & ITC Integrity',
      desc: 'Reconciles total Input Tax Credit claimable. Validates supplier GSTIN checksums and Section 16(2)(a) tax arithmetic with 100% determinism.',
      icon: Receipt,
      badge: 'GSTR-3B &middot; ₹28.5L ITC',
    },
    {
      title: 'Bank Statement Cutoff Sentinel',
      desc: 'Instantly detects early statement terminations (e.g. statement ending Sept 24th missing the last 6 critical days before month-end).',
      icon: Building2,
      badge: 'HDFC #4012 &middot; 6-Day Gap',
    },
  ];

  return (
    <section id="features" className="relative py-28 md:py-36 bg-neutral-800 border-t border-[#2a2a2f]">
      
      {/* Giant Outline Number "01" Background */}
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 relative">
        <div className="absolute -top-32 left-8 text-big-outline-bx">
          01
        </div>
      </div>

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header (Blockchain X style) */}
        <div className="max-w-[840px] mb-20">
          <div className="text-[13px] font-bold tracking-[0.14em] uppercase text-[#a855f7] mb-3">
            Fully Featured Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold uppercase tracking-[0.05em] text-white leading-[1.1] mb-6">
            Verify 100% of Document Streams Fast and Secure<span className="text-[#a855f7]">.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#c5c5ca] leading-relaxed">
            Eliminate Day 1 to Day 15 manual chasing. Every single uploaded page, spreadsheet row, and binary byte is cross-checked deterministically.
          </p>
        </div>

        {/* Feature Hero Card with CTA Box (Mockup style from Blockchain X) */}
        <div className="card-bx p-8 sm:p-14 mb-16 border-l-4 border-l-[#7928ca]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-[#7928ca]/20 text-[#a855f7] border border-[#7928ca]/40 inline-block">
                Stream 04 &middot; Critical Gatekeeper
              </span>

              <h3 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-wide text-white leading-tight">
                Missing High-Value Vendor Invoice Hunter
              </h3>

              <p className="text-base text-[#c5c5ca] leading-relaxed">
                Cross-references purchase register records against attached physical vouchers. When unattached high-value bills (like Tata Steel Ltd #TS-204 for ₹1,80,000 ITC) are detected, fix2ship halts disallowance before GST returns are filed.
              </p>

              <div className="pt-2 flex items-center gap-4">
                <button onClick={onLoadDemo} className="btn-primary-bx">
                  Test With Apex Pack
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#0f0f12] p-6 border border-[#34343a] font-mono text-xs space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-[#2a2a2f] text-[#a855f7] font-bold">
                <span>INSPECTION VOUCHER</span>
                <span>STATUS: HOLD</span>
              </div>
              <div className="space-y-2 text-[#c5c5ca]">
                <div className="flex justify-between">
                  <span className="text-[#929298]">Voucher No:</span>
                  <span className="text-white">#TS-204</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#929298]">Supplier:</span>
                  <span className="text-white">Tata Steel Ltd</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#929298]">Voucher Date:</span>
                  <span className="text-white">18-Sep-2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#929298]">ITC Discrepancy:</span>
                  <span className="text-rose-400 font-bold">₹1,80,000.00</span>
                </div>
              </div>
              <div className="p-3 bg-rose-950/30 border border-rose-500/40 text-rose-300 text-[11px] leading-snug">
                Warning: Missing source invoice file. Section 16(2)(a) violation flagged.
              </div>
            </div>

          </div>
        </div>

        {/* 3-Column Features Grid (Exact Blockchain X style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {streamFeatures.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="card-bx p-8 sm:p-10 flex flex-col justify-between group">
                <div>
                  <div className="w-14 h-14 bg-[#0f0f12] border border-[#34343a] flex items-center justify-center text-[#a855f7] mb-8 transition-colors group-hover:border-[#7928ca] group-hover:text-white">
                    <Icon className="w-7 h-7" />
                  </div>

                  <span className="text-[11px] font-mono tracking-wider uppercase text-[#a855f7] mb-3 block">
                    {f.badge}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-white leading-tight mb-4">
                    {f.title}
                  </h3>

                  <p className="text-sm text-[#c5c5ca] leading-relaxed">
                    {f.desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#2a2a2f] flex justify-between items-center text-xs font-mono uppercase text-[#929298]">
                  <span>Rule Verified</span>
                  <span className="text-white group-hover:text-[#a855f7] transition-colors">&rarr;</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
