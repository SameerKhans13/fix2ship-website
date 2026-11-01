import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function BlockchainSection04({ onLoadDemo }) {
  return (
    <section className="relative py-28 md:py-36 bg-neutral-700 bg-mesh-blockchain border-t border-[#2a2a2f] overflow-hidden">
      
      {/* Giant Outline Number "04" */}
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 relative">
        <div className="absolute -top-32 right-12 text-big-outline-bx text-right">
          04
        </div>
      </div>

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 relative z-10 text-center">
        <div className="max-w-[900px] mx-auto space-y-8">
          
          <div className="text-[13px] font-bold tracking-[0.14em] uppercase text-[#a855f7]">
            Immediate Practice Deployment
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[60px] font-extrabold uppercase tracking-[0.05em] text-white leading-[1.08]">
            Try The Readiness Gatekeeper of the Future, Today<span className="text-[#a855f7]">.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#c5c5ca] max-w-[680px] mx-auto leading-relaxed">
            Stop waiting for clients to adapt to clumsy web portals. Enable your article assistants and senior managers to verify GST files in seconds without disruption.
          </p>

          <div className="pt-4 flex flex-wrap justify-center items-center gap-6">
            <button
              onClick={onLoadDemo}
              className="btn-primary-bx"
            >
              Get Started
            </button>

            <a
              href="#demo"
              className="inline-flex items-center text-[15px] font-bold tracking-[0.08em] uppercase text-white hover:text-[#a855f7] transition-colors group"
            >
              <span>Inspect Canonical Demo</span>
              <div className="link-arrow-circle group-hover:border-[#a855f7] group-hover:bg-[#7928ca]">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
