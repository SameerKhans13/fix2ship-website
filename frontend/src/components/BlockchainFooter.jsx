import React from 'react';
import { Ship, ArrowRight, Mail, ExternalLink, Globe, Share2, MessageSquare } from 'lucide-react';

export default function BlockchainFooter({ onLoadDemo }) {
  return (
    <footer className="bg-neutral-700 border-t border-[#2a2a2f] pt-24 pb-16 relative overflow-hidden">
      
      {/* Background ambient mesh */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7928ca]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Footer Section: 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-[#2a2a2f]">
          
          {/* Col 1: Brand Info (5-col) */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#home" className="flex items-center gap-3.5 group">
              <div className="w-11 h-11 bg-[#7928ca] flex items-center justify-center text-white">
                <Ship className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold tracking-[0.06em] text-white uppercase">
                fix<span className="text-[#a855f7]">2</span>ship
              </div>
            </a>

            <p className="text-sm text-[#c5c5ca] leading-relaxed max-w-[420px]">
              The zero-disruption practice operating system and autonomous pre-accounting gatekeeper. Transforms client compliance documents into deterministic, audit-cleared data ready to ship to Tally and GSTR.
            </p>

            {/* Social Icons (Blockchain X style) */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-10 h-10 bg-[#0f0f12] border border-[#34343a] flex items-center justify-center text-[#c5c5ca] hover:text-white hover:border-[#7928ca] transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#0f0f12] border border-[#34343a] flex items-center justify-center text-[#c5c5ca] hover:text-white hover:border-[#7928ca] transition-colors">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#0f0f12] border border-[#34343a] flex items-center justify-center text-[#c5c5ca] hover:text-white hover:border-[#7928ca] transition-colors">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2-col) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-mono font-bold tracking-[0.14em] uppercase text-white">
              Menu
            </div>
            <ul className="space-y-3 text-xs font-mono uppercase text-[#c5c5ca]">
              <li><a href="#home" className="hover:text-[#a855f7] transition-colors">Home</a></li>
              <li><a href="#features" className="hover:text-[#a855f7] transition-colors">Features</a></li>
              <li><a href="#demo" className="hover:text-[#a855f7] transition-colors">Practice OS</a></li>
              <li><a href="#security" className="hover:text-[#a855f7] transition-colors">Security</a></li>
              <li><a href="#calculator" className="hover:text-[#a855f7] transition-colors">ROI Calculator</a></li>
              <li><a href="#testimonials" className="hover:text-[#a855f7] transition-colors">Partners</a></li>
            </ul>
          </div>

          {/* Col 3: Practice Governance (2-col) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-mono font-bold tracking-[0.14em] uppercase text-white">
              Governance
            </div>
            <ul className="space-y-3 text-xs font-mono uppercase text-[#c5c5ca]">
              <li><span className="text-emerald-400">161 Pytests OK</span></li>
              <li><span className="text-[#a855f7]">Sec 16(2)(a) Gate</span></li>
              <li><span>SQLite Trail</span></li>
              <li><span>SHA-256 Ledger</span></li>
              <li><span>Zero Data Leak</span></li>
              <li><span>On-Premise Ready</span></li>
            </ul>
          </div>

          {/* Col 4: Newsletter Box (3-col, exact Blockchain X style) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-mono font-bold tracking-[0.14em] uppercase text-white">
              Practice Briefing
            </div>
            <p className="text-xs text-[#929298] leading-relaxed">
              Subscribe for monthly updates on GST compliance invariants, cutoff rules, and practice automation.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for subscribing to fix2ship Practice Briefing!');
              }}
              className="space-y-3"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full bg-[#0f0f12] border border-[#34343a] px-4 py-3 text-xs font-mono text-white placeholder-[#929298] focus:outline-none focus:border-[#7928ca]"
              />
              <button
                type="submit"
                className="btn-primary-bx small w-full"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Footer (Copyright & Attribution like Blockchain X) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#929298]">
          <p>
            Copyright &copy; {new Date().getFullYear()} <span className="text-white font-bold">fix2ship</span>. Practice OS for CA Firms. Designed with Blockchain X architecture.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={onLoadDemo}
              className="text-[#a855f7] hover:underline"
            >
              Trigger Canonical Demo
            </button>
            <a href="#home" className="hover:text-white transition-colors">
              Back to Top &uarr;
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
