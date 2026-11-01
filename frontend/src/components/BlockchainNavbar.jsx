import React, { useState } from 'react';
import { Ship, Menu, X, ArrowUpRight } from 'lucide-react';

export default function BlockchainNavbar({ onLoadDemo, isLoaded }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header-bx">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        
        {/* Left: Brand Logo in Blockchain X style */}
        <a href="#home" className="flex items-center gap-3.5 group">
          <div className="w-11 h-11 bg-[#7928ca] flex items-center justify-center text-white transition-transform group-hover:scale-105">
            <Ship className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xl font-bold tracking-[0.06em] text-white uppercase flex items-center gap-2">
              fix<span className="text-[#a855f7]">2</span>ship
              <span className="text-[10px] font-mono px-2 py-0.5 bg-[#1a1a1d] text-[#c5c5ca] border border-[#434347]">
                v1.0
              </span>
            </div>
            <div className="text-[9px] font-mono tracking-[0.2em] uppercase text-[#929298]">
              Readiness Gatekeeper
            </div>
          </div>
        </a>

        {/* Center: Clean uppercase nav items */}
        <nav className="hidden lg:flex items-center gap-9">
          <a
            href="#home"
            className="text-[14px] font-bold tracking-[0.08em] uppercase text-white hover:text-[#a855f7] transition-colors"
          >
            Home
          </a>
          <a
            href="#features"
            className="text-[14px] font-bold tracking-[0.08em] uppercase text-[#c5c5ca] hover:text-white transition-colors"
          >
            Features
          </a>
          <a
            href="#demo"
            className="text-[14px] font-bold tracking-[0.08em] uppercase text-[#c5c5ca] hover:text-white transition-colors flex items-center gap-1"
          >
            Practice OS
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          </a>
          <a
            href="#security"
            className="text-[14px] font-bold tracking-[0.08em] uppercase text-[#c5c5ca] hover:text-white transition-colors"
          >
            Security
          </a>
          <a
            href="#calculator"
            className="text-[14px] font-bold tracking-[0.08em] uppercase text-[#c5c5ca] hover:text-white transition-colors"
          >
            ROI
          </a>
          <a
            href="#testimonials"
            className="text-[14px] font-bold tracking-[0.08em] uppercase text-[#c5c5ca] hover:text-white transition-colors"
          >
            Partners
          </a>
          <a
            href="#faq"
            className="text-[14px] font-bold tracking-[0.08em] uppercase text-[#c5c5ca] hover:text-white transition-colors"
          >
            FAQ
          </a>
        </nav>

        {/* Right: GET STARTED Block Button (Exact Blockchain X style) */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onLoadDemo}
            className="btn-primary-bx small"
          >
            {isLoaded ? 'Reload Demo' : 'Get Started'}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white bg-[#1a1a1d] border border-[#434347]"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1a1a1d] border-b border-[#434347] px-6 py-6 flex flex-col gap-4">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-bold tracking-wider uppercase text-white"
          >
            Home
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-bold tracking-wider uppercase text-[#c5c5ca]"
          >
            Features
          </a>
          <a
            href="#demo"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-bold tracking-wider uppercase text-[#c5c5ca]"
          >
            Live Demo Playground
          </a>
          <a
            href="#security"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-bold tracking-wider uppercase text-[#c5c5ca]"
          >
            Security
          </a>
          <a
            href="#calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-bold tracking-wider uppercase text-[#c5c5ca]"
          >
            ROI Calculator
          </a>
          <a
            href="#testimonials"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-bold tracking-wider uppercase text-[#c5c5ca]"
          >
            Partners
          </a>
          <button
            onClick={() => {
              onLoadDemo();
              setMobileMenuOpen(false);
            }}
            className="btn-primary-bx small w-full mt-2"
          >
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}
