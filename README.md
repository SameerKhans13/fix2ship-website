# fix2ship Website

Modern dark & purple themed single-page landing site for **fix2ship Practice OS** — an autonomous document readiness and practice operating system purpose-built for Chartered Accountants, tax practitioners, and audit firms across India.

## Features
- **Zero-Disruption Client Intake**: Autonomous multi-format document collection (WhatsApp drops, bank PDFs, Excel registers).
- **100% Deterministic Rule Engine**: Statutory GST/Income Tax compliance validation without AI hallucinations.
- **Laptop Mockups & Visual Hierarchy**: Custom generated dark-mode desktop interfaces showcasing real reconciliation grids, maker-checker workflows, and audit dashboards.
- **Responsive Architecture**: Built with modern web standards and clean typography.

## Running Locally

To run the production build locally:
```bash
python -m http.server 3000 --directory dist
```
Or with Node/npx:
```bash
npx serve dist -l 3000
```

To run the Vite + React dev environment:
```bash
cd frontend
npm install
npm run dev
```
