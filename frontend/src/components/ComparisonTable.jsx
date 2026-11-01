import React from 'react';
import { Check, X, Shield, Sparkles } from 'lucide-react';
import SpotlightCard from './ReactBits/SpotlightCard';

export default function ComparisonTable() {
  const comparisonRows = [
    {
      feature: 'Customer Behavior Shift',
      traditional: 'Forced adoption of complex client portals (90% client abandonment)',
      fix2ship: 'Zero Customer Shift (clients continue sending WhatsApp & emails)',
      win: true,
    },
    {
      feature: 'Bank Cutoff Detection',
      traditional: 'Discovered on Day 14 right before filing deadline, causing panic',
      fix2ship: 'Sub-second deterministic detection (flags Sept 24 cutoff instantly)',
      win: true,
    },
    {
      feature: 'Input Tax Credit (ITC) Protection',
      traditional: 'Missing invoices slipped through, triggering GST notices under Sec 16(2)(a)',
      fix2ship: 'Deterministic cross-check blocks high-value missing bills (₹1.8L Tata Steel)',
      win: true,
    },
    {
      feature: 'Client Follow-up Dynamic Messaging',
      traditional: 'Staff re-asks for documents already provided, frustrating clients',
      fix2ship: 'Strict Exclusion Invariant: Verified files are never re-requested',
      win: true,
    },
    {
      feature: 'Tax Determination Risk',
      traditional: 'Unreliable LLM chatbots hallucinate tax laws and compliance advice',
      fix2ship: '100% Deterministic Engine (161 passing tests, zero LLM hallucinations)',
      win: true,
    },
    {
      feature: 'Compliance Audit Governance',
      traditional: 'Informal WhatsApp approvals, lost staff notes, zero paper trail',
      fix2ship: 'Mandatory maker-checker justification logged to immutable SQLite trail',
      win: true,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-mono">
            <Shield className="w-3.5 h-3.5 text-purple-400" />
            <span>PRACTICE TRANSFORMATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Traditional Chasing vs. fix2ship
          </h2>
          <p className="text-purple-200/70 text-base sm:text-lg">
            See how the zero-disruption architecture protects both CA staff billable hours and client relationships.
          </p>
        </div>

        {/* Comparison Table */}
        <SpotlightCard className="p-0 border-purple-500/30 bg-[#090616] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-purple-500/20 bg-[#120d29]/80 font-mono text-purple-300">
                  <th className="py-4 px-6 w-1/4">COMPLIANCE CAPABILITY</th>
                  <th className="py-4 px-6 w-3/8 text-rose-400">TRADITIONAL PRACTICE WORKFLOW</th>
                  <th className="py-4 px-6 w-3/8 text-purple-200 font-bold bg-purple-900/20">
                    fix2ship PRACTICE OS
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-500/10">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-purple-950/20 transition-colors">
                    <td className="py-4 px-6 font-semibold text-white">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-rose-300/80 flex items-start gap-2">
                      <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{row.traditional}</span>
                    </td>
                    <td className="py-4 px-6 text-purple-200 font-medium bg-purple-900/10">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{row.fix2ship}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SpotlightCard>

      </div>
    </section>
  );
}
