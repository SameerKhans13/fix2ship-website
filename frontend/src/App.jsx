import React, { useState, useEffect } from 'react';
import BlockchainNavbar from './components/BlockchainNavbar';
import BlockchainHero from './components/BlockchainHero';
import BlockchainSection01 from './components/BlockchainSection01';
import BlockchainSection02 from './components/BlockchainSection02';
import BlockchainPlayground from './components/BlockchainPlayground';
import InspectionHub from './components/InspectionHub';
import BlockchainSection03 from './components/BlockchainSection03';
import Architecture3D from './components/Architecture3D';
import RoiCalculator from './components/RoiCalculator';
import BlockchainSection04 from './components/BlockchainSection04';
import BlockchainSection05 from './components/BlockchainSection05';
import CodeTerminal from './components/CodeTerminal';
import ComparisonTable from './components/ComparisonTable';
import BlockchainSection06 from './components/BlockchainSection06';
import FaqSection from './components/FaqSection';
import BlockchainFooter from './components/BlockchainFooter';
import Toast from './components/Toast';

// Canonical Apex Technologies Demo State
const CANONICAL_DEMO_STATE = {
  client_name: 'Apex Technologies India Pvt Ltd',
  gstin: '27AAACA1234A1Z1',
  period: 'Sept 2026',
  reviewer: 'Kavita Mehta - Audit Senior (usr_reviewer_01)',
  sales_register: {
    status: 'complete',
    filename: 'Apex_Sales_Sept2026.xlsx',
    rows: 120,
    taxable_value: 14280000,
    hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
  },
  purchase_register: {
    status: 'complete',
    filename: 'Apex_Purchases_Sept2026.xlsx',
    rows: 85,
    itc_value: 2850000,
    hash: '7d864e0e4f16cd9f8b85658be724b5a25efe6104fed033be49924c4e535da859',
  },
  bank_statement: {
    status: 'incomplete',
    filename: 'HDFC_Bank_Sept2026.pdf',
    account_no: 'HDFC-4012',
    cutoff_date: '2026-09-24',
    missing_days: 6,
    hash: 'b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9',
  },
  vendor_invoices: {
    status: 'incomplete',
    matched_count: 12,
    missing_count: 1,
    missing_supplier: 'Tata Steel Ltd',
    missing_bill_no: 'TS-204',
    missing_date: '18-Sep-2026',
    missing_itc: 180000,
    hash: '4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a',
  },
  whatsapp_message: `Hi Sharma ji, for your Sept 2026 GST return, we need two quick items:

1. Bank statement from Sept 25 to Sept 30 (HDFC **4012)
2. Copy of Tata Steel Ltd bill #TS-204 (₹1.8L)

Please send these at your earliest convenience.`,
};

export default function App() {
  const [statusData, setStatusData] = useState(CANONICAL_DEMO_STATE);
  const [isDemoLoaded, setIsDemoLoaded] = useState(true);
  const [toasts, setToasts] = useState([]);
  const [findings, setFindings] = useState([
    {
      id: 'FINDING_TATA_STEEL_ITC_01',
      title: 'Unattached Vendor Invoice: Tata Steel Ltd (#TS-204)',
      rule: 'RULE_SEC_16_2_A',
      severity: 'critical',
      status: 'pending',
    },
    {
      id: 'FINDING_BANK_CUTOFF_01',
      title: 'Bank Statement Early Termination: HDFC #4012',
      rule: 'RULE_BANK_PERIOD_CUTOFF',
      severity: 'warning',
      status: 'pending',
    },
  ]);

  const addToast = (message, type = 'info') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Sync with live FastAPI backend
  const syncWithBackend = async () => {
    try {
      const res = await fetch('/api/status');
      if (res.ok) {
        const data = await res.json();
        if (data && data.client_name) {
          const salesItem = data.checklist?.find((i) => i.code === 'sales_register');
          const purchItem = data.checklist?.find((i) => i.code === 'purchase_register');
          const bankItem = data.checklist?.find((i) => i.code === 'bank_statement');
          const invItem = data.checklist?.find((i) => i.code === 'purchase_invoices');

          setStatusData((prev) => ({
            ...prev,
            client_name: data.client_name,
            gstin: data.gstin,
            period: data.period,
            sales_register: salesItem
              ? {
                  status: salesItem.status,
                  filename: salesItem.filename,
                  rows: 120,
                  detail: salesItem.detail,
                  badge_text: salesItem.badge_text,
                }
              : prev.sales_register,
            purchase_register: purchItem
              ? {
                  status: purchItem.status,
                  filename: purchItem.filename,
                  rows: 85,
                  detail: purchItem.detail,
                  badge_text: purchItem.badge_text,
                }
              : prev.purchase_register,
            bank_statement: bankItem
              ? {
                  status: bankItem.status,
                  filename: bankItem.filename,
                  detail: bankItem.detail,
                  badge_text: bankItem.badge_text,
                }
              : prev.bank_statement,
            vendor_invoices: invItem
              ? {
                  status: invItem.status,
                  filename: invItem.filename,
                  detail: invItem.detail,
                  badge_text: invItem.badge_text,
                  missing_supplier: invItem.missing_supplier || 'Tata Steel Ltd',
                  missing_invoice: invItem.missing_invoice || '#TS-204',
                }
              : prev.vendor_invoices,
            whatsapp_message: data.whatsapp?.text || prev.whatsapp_message,
            coverage_manifest: data.coverage_manifest || [],
          }));
        }
      }
    } catch (e) {
      // Standalone mode
    }
  };

  useEffect(() => {
    syncWithBackend();
  }, []);

  const handleLoadDemo = async () => {
    try {
      const res = await fetch('/api/load_demo', { method: 'POST' });
      if (res.ok) {
        await syncWithBackend();
      }
    } catch (e) {}

    setStatusData(CANONICAL_DEMO_STATE);
    setIsDemoLoaded(true);
    addToast('Canonical Apex Demo Pack Ingested (120 sales rows, 85 purchases, bank cutoff, missing ITC bill)', 'success');

    const el = document.getElementById('demo');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleReset = async () => {
    try {
      await fetch('/api/reset', { method: 'POST' });
    } catch (e) {}

    setStatusData({
      client_name: 'Apex Technologies India Pvt Ltd',
      gstin: '27AAACA1234A1Z1',
      period: 'Sept 2026',
      reviewer: 'Kavita Mehta (usr_reviewer_01)',
      sales_register: null,
      purchase_register: null,
      bank_statement: null,
      vendor_invoices: null,
      whatsapp_message: 'Please drop or upload compliance files to begin triage.',
    });
    setIsDemoLoaded(false);
    addToast('Workspace session reset.', 'info');
  };

  const handleOverride = async (findingId, decision, reason) => {
    try {
      await fetch(`/api/findings/${findingId}/decisions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          decision,
          reason,
          reviewer_id: 'usr_reviewer_01',
        }),
      });
    } catch (e) {}

    addToast(`Recorded reviewer disposition '${decision}' for ${findingId}!`, 'success');
  };

  const scrollToDemo = () => {
    const el = document.getElementById('demo');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-neutral-800 text-[#c5c5ca] min-h-screen selection:bg-[#7928ca] selection:text-white">
      {/* Toast Notifications */}
      <Toast toasts={toasts} onDismiss={removeToast} />

      {/* 1. Header (Exact Blockchain X style) */}
      <BlockchainNavbar
        onLoadDemo={handleLoadDemo}
        isLoaded={isDemoLoaded}
      />

      {/* 2. Hero Section (Display-1 Heading + Left Border + 3D Spline/Quantum Core) */}
      <BlockchainHero
        onLoadDemo={handleLoadDemo}
        onScrollToDemo={scrollToDemo}
      />

      {/* 3. Section 01: Fully Featured Architecture (01 Outline Number + 3 Feature Columns) */}
      <BlockchainSection01
        onLoadDemo={handleLoadDemo}
      />

      {/* 4. Section 02: A Practice Gatekeeper from the Future (02 Outline Number + Checklist + Trust) */}
      <BlockchainSection02
        onLoadDemo={handleLoadDemo}
      />

      {/* 5. Live Interactive Practice OS Demo Playground (4 Stream Cards + WhatsApp Chaser + Drop Zone) */}
      <BlockchainPlayground
        statusData={statusData}
        onLoadDemo={handleLoadDemo}
        onReset={handleReset}
        onOverride={handleOverride}
        showToast={addToast}
        isDemoLoaded={isDemoLoaded}
      />

      {/* 6. Inspection Hub & 5-Tab Governance */}
      <InspectionHub
        findings={findings}
        onResolveFinding={(id) => {
          handleOverride(id, 'verified', 'Manually verified by CA Reviewer');
        }}
      />

      {/* 7. Section 03: Bulletproof Security By Design (03 Outline Number + Slide Stats) */}
      <BlockchainSection03 />

      {/* 8. 3-Tier Gatekeeper Pipeline Architecture */}
      <Architecture3D />

      {/* 9. Practice ROI Calculator */}
      <div id="calculator">
        <RoiCalculator />
      </div>

      {/* 10. Section 04: Try the Gatekeeper of the Future, Today (04 Outline Number + Large CTA Box) */}
      <BlockchainSection04
        onLoadDemo={handleLoadDemo}
      />

      {/* 11. Section 05: What Practice Leaders Say About Us (05 Outline Number + 3 Testimonials) */}
      <BlockchainSection05 />

      {/* 12. Comparison Table: Traditional Chasing vs fix2ship */}
      <ComparisonTable />

      {/* 13. Section 06: Browse Latest Practice Standards (06 Outline Number + 3 Articles) */}
      <BlockchainSection06 />

      {/* 14. Developer Code Terminal & API Interfaces */}
      <CodeTerminal showToast={addToast} />

      {/* 15. FAQ Section */}
      <FaqSection />

      {/* 16. Blockchain X Footer (4-Column Layout + Newsletter + Attribution) */}
      <BlockchainFooter
        onLoadDemo={handleLoadDemo}
      />
    </div>
  );
}
