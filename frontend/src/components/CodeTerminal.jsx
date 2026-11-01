import React, { useState } from 'react';
import { Terminal, Copy, Check, Code, Sparkles, FileJson } from 'lucide-react';
import SpotlightCard from './ReactBits/SpotlightCard';

export default function CodeTerminal({ showToast }) {
  const [activeTab, setActiveTab] = useState('python');
  const [copied, setCopied] = useState(false);

  const snippets = {
    python: `"""fix2ship Deterministic 3-Tier Python Engine Integration."""
from fix2ship.rules.engine import (
    evaluate_period_boundary,
    check_invoice_sequence_continuity,
    reconcile_purchase_register_with_invoices
)
from fix2ship.generator import compose_whatsapp_followup

# 1. Inspect period boundary (flags early Sept 24 cutoff)
period_eval = evaluate_period_boundary(
    statement_start="2026-09-01",
    statement_end="2026-09-24",
    target_period="Sept 2026"
)

# 2. Section 16(2)(a) ITC reconciliation (flags Tata Steel #TS-204)
itc_audit = reconcile_purchase_register_with_invoices(
    purchase_rows=85,
    vendor_invoices_matched=12,
    high_value_threshold=50000.0
)

# 3. Dynamic WhatsApp chaser (Strict Exclusion Invariant)
chaser_msg = compose_whatsapp_followup(
    client="Apex Technologies India Pvt Ltd",
    missing_items=itc_audit.missing_items,
    exclude_complete_streams=True
)
print("fix2ship Gatekeeper: READY TO SHIP")`,

    curl: `# 1. Ingest Canonical Apex Test Pack (120 sales, 85 purchases)
curl -X POST "http://localhost:8000/api/load_demo" \\
  -H "Accept: application/json"

# 2. Fetch Real-time Readiness Status & 4-Card Checklist
curl -X GET "http://localhost:8000/api/status" \\
  -H "Accept: application/json"

# 3. Record CA Reviewer Disposition (Maker-Checker Override)
curl -X POST "http://localhost:8000/api/findings/FINDING_TATA_STEEL_ITC_01/decisions" \\
  -H "Content-Type: application/json" \\
  -d '{
    "decision": "verified",
    "reviewer_id": "usr_reviewer_01",
    "reason": "Physical vendor bill cross-referenced via GST portal GSTR-2B"
  }'`,

    json: `{
  "workspace_id": "ws_apex_2026",
  "client_name": "Apex Technologies India Pvt Ltd",
  "gstin": "27AAACA1234A1Z1",
  "period": "Sept 2026",
  "readiness_gate": {
    "overall_status": "HOLD",
    "verified_streams": [
      { "code": "REQ_SALES_REG", "status": "PASS", "rows": 120, "taxable": 14280000 },
      { "code": "REQ_PURCH_REG", "status": "PASS", "rows": 85, "book_itc": 2850000 }
    ],
    "action_required_streams": [
      { "code": "REQ_BANK_STMT", "status": "CUTOFF_FLAG", "gap": "Sept 25-30" },
      { "code": "REQ_VEND_INVS", "status": "MISSING_BILL", "supplier": "Tata Steel Ltd", "itc": 180000 }
    ]
  },
  "invariants_tested": 161,
  "engine": "fix2ship v1.0.0"
}`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab]);
    setCopied(true);
    if (showToast) showToast('Code snippet copied to clipboard!', 'success');
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-mono">
            <Terminal className="w-3.5 h-3.5 text-purple-400" />
            <span>DEVELOPER & API INTERFACES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Deterministic Engine API & SDK
          </h2>
          <p className="text-purple-200/70 text-base">
            Integrates into any CA practice stack, custom accounting ERP, or on-premise document server.
          </p>
        </div>

        {/* Terminal Card */}
        <div className="max-w-4xl mx-auto">
          <SpotlightCard className="border-purple-500/30 bg-[#090616] p-0 overflow-hidden shadow-[0_0_50px_rgba(112,26,179,0.3)]">
            
            {/* Terminal Top Window Bar */}
            <div className="px-5 py-3.5 bg-[#0f0b24] border-b border-purple-500/20 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-xs font-mono text-purple-300/80 font-semibold">
                  fix2ship-runtime :: bash
                </span>
              </div>

              {/* Snippet Tabs */}
              <div className="flex items-center gap-1.5 p-1 rounded-lg bg-purple-950/50 border border-purple-500/20">
                <button
                  onClick={() => setActiveTab('python')}
                  className={`px-3 py-1 text-xs font-mono rounded-md transition-all ${
                    activeTab === 'python'
                      ? 'bg-purple-600 text-white font-bold'
                      : 'text-purple-300/70 hover:text-white'
                  }`}
                >
                  Python SDK
                </button>
                <button
                  onClick={() => setActiveTab('curl')}
                  className={`px-3 py-1 text-xs font-mono rounded-md transition-all ${
                    activeTab === 'curl'
                      ? 'bg-purple-600 text-white font-bold'
                      : 'text-purple-300/70 hover:text-white'
                  }`}
                >
                  cURL REST
                </button>
                <button
                  onClick={() => setActiveTab('json')}
                  className={`px-3 py-1 text-xs font-mono rounded-md transition-all ${
                    activeTab === 'json'
                      ? 'bg-purple-600 text-white font-bold'
                      : 'text-purple-300/70 hover:text-white'
                  }`}
                >
                  Schema Contract
                </button>
              </div>

              {/* Copy Button */}
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-lg bg-purple-900/40 border border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-800/40 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Terminal Body */}
            <div className="p-6 overflow-x-auto text-xs font-mono text-purple-200/90 leading-relaxed bg-[#07050f]">
              <pre className="whitespace-pre-wrap">{snippets[activeTab]}</pre>
            </div>

          </SpotlightCard>
        </div>

      </div>
    </section>
  );
}
